import { PaperWallet } from '@thirdweb-dev/wallets';
import { useState, useCallback, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { c as useTWLocale, u as useCustomTheme, I as Img, a as iconSize, q as TextDivider, C as Container, M as ModalHeader, S as Spacer, B as Button, s as spacing, T as Text, v as Input, e as Spinner, L as Line, A as StyledButton, h as fontSize, J as ModalTitle, W as WalletEntryButton } from './formElements-9ee7ad15.browser.esm.js';
import { x as openOauthSignInWindow, O as OTPInput } from './oneKeyWallet-4fc1c7f5.browser.esm.js';
import { g as googleIconUri, I as InputSelectionUI, e as emailIcon, u as useScreenContext, r as reservedScreens } from './Tooltip-353212b1.browser.esm.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import '@emotion/react';
import '@thirdweb-dev/react-core';
import '@radix-ui/react-icons';
import 'detect-browser';
import '@radix-ui/colors';
import '@radix-ui/react-popover';
import 'copy-to-clipboard';
import '@radix-ui/react-tabs';
import 'fuse.js';
import '@thirdweb-dev/chains';
import './safeChainSlug-40029368.browser.esm.js';
import 'qrcode';
import '@tanstack/react-query';
import 'ethers';
import '@thirdweb-dev/sdk';
import 'tiny-invariant';
import '@radix-ui/react-dialog';
import '@radix-ui/react-focus-scope';
import '@radix-ui/react-tooltip';

const PaperFormUI = props => {
  const cwLocale = useTWLocale().connectWallet;
  const locale = useTWLocale().wallets.paperWallet;
  const {
    createWalletInstance,
    setConnectionStatus,
    setConnectedWallet
  } = props;
  const themeObj = useCustomTheme();

  // Need to trigger google login on button click to avoid popup from being blocked
  const googleLogin = async () => {
    try {
      const paperWallet = createWalletInstance();
      setConnectionStatus("connecting");
      const googleWindow = openOauthSignInWindow("google", themeObj);
      if (!googleWindow) {
        throw new Error("Failed to open google login window");
      }
      await paperWallet.connect({
        googleLogin: {
          openedWindow: googleWindow,
          closeOpenedWindow: openedWindow => {
            openedWindow.close();
          }
        }
      });
      setConnectedWallet(paperWallet);
    } catch (e) {
      setConnectionStatus("disconnected");
      console.error(e);
    }
  };
  return /*#__PURE__*/jsxs("div", {
    children: [props.googleLoginSupported && /*#__PURE__*/jsxs(Fragment, {
      children: [/*#__PURE__*/jsxs(SocialButton, {
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          googleLogin();
          props.onSelect({
            google: true
          });
        },
        children: [/*#__PURE__*/jsx(Img, {
          src: googleIconUri,
          width: iconSize.md,
          height: iconSize.md
        }), locale.signInWithGoogle]
      }), /*#__PURE__*/jsx(TextDivider, {
        text: cwLocale.or,
        py: "lg"
      })]
    }), /*#__PURE__*/jsx(InputSelectionUI, {
      onSelect: email => props.onSelect({
        email
      }),
      placeholder: locale.emailPlaceholder,
      name: "email",
      type: "email",
      errorMessage: _input => {
        const input = _input.replace(/\+/g, "").toLowerCase();
        const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/g;
        const isValidEmail = emailRegex.test(input);
        if (!isValidEmail) {
          return locale.invalidEmail;
        }
      },
      emptyErrorMessage: locale.emailRequired,
      submitButtonText: locale.submitEmail
    })]
  });
};
const PaperFormUIScreen = props => {
  const isCompact = props.modalSize === "compact";
  const locale = useTWLocale().wallets.paperWallet;
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    flex: "column",
    p: "lg",
    animate: "fadein",
    style: {
      minHeight: "250px"
    },
    children: [/*#__PURE__*/jsx(ModalHeader, {
      onBack: props.onBack,
      title: locale.signIn
    }), isCompact ? /*#__PURE__*/jsx(Spacer, {
      y: "xl"
    }) : null, /*#__PURE__*/jsx(Container, {
      expand: true,
      flex: "column",
      center: "y",
      p: isCompact ? undefined : "lg",
      children: /*#__PURE__*/jsx(PaperFormUI, {
        walletConfig: props.walletConfig,
        googleLoginSupported: props.googleLoginSupported,
        onSelect: props.onSelect,
        setConnectionStatus: props.setConnectionStatus,
        setConnectedWallet: props.setConnectedWallet,
        createWalletInstance: props.createWalletInstance
      })
    })]
  });
};
const SocialButton = /* @__PURE__ */styled(Button)({
  display: "flex",
  justifyContent: "center",
  gap: spacing.sm
});

const PaperOTPLoginUI = props => {
  const locale = useTWLocale().wallets.paperWallet.emailLoginScreen;
  const email = props.selectionData;
  const [otpInput, setOtpInput] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const {
    createWalletInstance,
    setConnectedWallet,
    setConnectionStatus
  } = props;
  const [wallet, setWallet] = useState(null);
  const isWideModal = props.modalSize === "wide";
  const [verifyStatus, setVerifyStatus] = useState("idle");
  const [sendEmailStatus, setSendEmailStatus] = useState("sending");
  const recoveryCodeRequired = !!(typeof sendEmailStatus !== "string" && sendEmailStatus.recoveryShareManagement !== "AWS_MANAGED" && sendEmailStatus.isNewDevice && !sendEmailStatus.isNewUser);
  const sendEmail = useCallback(async () => {
    setOtpInput("");
    setVerifyStatus("idle");
    setSendEmailStatus("sending");
    try {
      const _wallet = createWalletInstance();
      setWallet(_wallet);
      const _paperSDK = await _wallet.getPaperSDK();
      const {
        isNewDevice,
        isNewUser,
        recoveryShareManagement
      } = await _paperSDK.auth.sendPaperEmailLoginOtp({
        email: email
      });
      setSendEmailStatus({
        isNewDevice,
        isNewUser,
        recoveryShareManagement
      });
    } catch (e) {
      console.error(e);
      setVerifyStatus("idle");
      setSendEmailStatus("error");
    }
  }, [createWalletInstance, email]);
  const handleSubmit = otp => {
    if (recoveryCodeRequired && !recoveryCode) {
      return;
    }
    if (typeof sendEmailStatus === "string" || otp.length !== 6) {
      return;
    }
    verifyCodes(otp);
  };
  const verifyCodes = async otp => {
    setVerifyStatus("idle");
    if (!wallet) {
      return;
    }
    try {
      setVerifyStatus("verifying");
      setConnectionStatus("connecting");
      await wallet.connect({
        email,
        otp,
        recoveryCode: recoveryCodeRequired ? recoveryCode : undefined
      });
      setConnectedWallet(wallet);
      setVerifyStatus("valid");
      props.connected();
    } catch (e) {
      setVerifyStatus("invalid");
      console.error(e);
    }
  };

  // send email on mount
  const emailSentOnMount = useRef(false);
  useEffect(() => {
    if (!emailSentOnMount.current) {
      emailSentOnMount.current = true;
      sendEmail();
    }
  }, [sendEmail]);
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    flex: "column",
    animate: "fadein",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        title: locale.title,
        onBack: props.goBack
      })
    }), /*#__PURE__*/jsx(Container, {
      expand: true,
      flex: "column",
      center: "y",
      children: /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
        },
        children: [/*#__PURE__*/jsxs(Container, {
          flex: "column",
          center: "x",
          px: "lg",
          children: [!isWideModal && /*#__PURE__*/jsx(Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsx(Text, {
            children: locale.enterCodeSendTo
          }), /*#__PURE__*/jsx(Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsx(Text, {
            color: "primaryText",
            children: email
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xl"
          })]
        }), /*#__PURE__*/jsx(OTPInput, {
          isInvalid: verifyStatus === "invalid",
          digits: 6,
          value: otpInput,
          setValue: value => {
            setOtpInput(value);
            setVerifyStatus("idle"); // reset error
            if (!recoveryCodeRequired) {
              handleSubmit(value);
            }
          },
          onEnter: () => {
            handleSubmit(otpInput);
          }
        }), recoveryCodeRequired && /*#__PURE__*/jsxs(Container, {
          animate: "fadein",
          px: "lg",
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsx(Spacer, {
            y: "xxl"
          }), /*#__PURE__*/jsx(Text, {
            color: "primaryText",
            children: locale.newDeviceDetected
          }), /*#__PURE__*/jsx(Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsx(Text, {
            balance: true,
            size: "sm",
            multiline: true,
            style: {
              maxWidth: "350px"
            },
            children: locale.enterRecoveryCode
          }), /*#__PURE__*/jsx(Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsx(Input, {
            sm: true,
            autoComplete: "off",
            required: true,
            "data-error": verifyStatus === "invalid",
            id: "recovery-code",
            variant: "outline",
            style: {
              textAlign: "center"
            },
            value: recoveryCode,
            onChange: e => setRecoveryCode(e.target.value),
            placeholder: locale.enterRecoveryCode
          })]
        }), verifyStatus === "invalid" && /*#__PURE__*/jsxs(Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsx(Spacer, {
            y: "md"
          }), /*#__PURE__*/jsx(Text, {
            size: "sm",
            color: "danger",
            center: true,
            children: recoveryCodeRequired ? locale.invalidCodeOrRecoveryCode : locale.invalidCode
          })]
        }), /*#__PURE__*/jsx(Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsx(Container, {
          px: isWideModal ? "xxl" : "lg",
          children: verifyStatus === "verifying" ? /*#__PURE__*/jsx(Fragment, {
            children: /*#__PURE__*/jsx(Container, {
              flex: "row",
              center: "x",
              animate: "fadein",
              children: /*#__PURE__*/jsx(Spinner, {
                size: "lg",
                color: "accentText"
              })
            })
          }) : /*#__PURE__*/jsx(Container, {
            animate: "fadein",
            children: /*#__PURE__*/jsx(Button, {
              onClick: () => handleSubmit(otpInput),
              variant: "accent",
              type: "submit",
              style: {
                width: "100%"
              },
              children: locale.verify
            })
          }, "btn-container")
        }), /*#__PURE__*/jsx(Spacer, {
          y: "xl"
        }), !isWideModal && /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
          p: isWideModal ? undefined : "lg",
          animate: "fadein",
          children: [sendEmailStatus === "error" && /*#__PURE__*/jsx(Fragment, {
            children: /*#__PURE__*/jsx(Text, {
              size: "sm",
              center: true,
              color: "danger",
              children: locale.failedToSendCode
            })
          }), sendEmailStatus === "sending" && /*#__PURE__*/jsxs(Container, {
            flex: "row",
            center: "both",
            gap: "xs",
            style: {
              textAlign: "center"
            },
            children: [/*#__PURE__*/jsx(Text, {
              size: "sm",
              children: locale.sendingCode
            }), /*#__PURE__*/jsx(Spinner, {
              size: "xs",
              color: "secondaryText"
            })]
          }), typeof sendEmailStatus !== "string" && /*#__PURE__*/jsx(LinkButton, {
            onClick: sendEmail,
            type: "button",
            children: locale.resendCode
          })]
        })]
      })
    })]
  });
};
const LinkButton = /* @__PURE__ */StyledButton(() => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    color: theme.colors.accentText,
    fontSize: fontSize.sm,
    cursor: "pointer",
    textAlign: "center",
    width: "100%",
    "&:hover": {
      color: theme.colors.primaryText
    }
  };
});

const PaperGoogleLogin = props => {
  const {
    goBack,
    modalSize,
    connected,
    createWalletInstance,
    setConnectionStatus,
    setConnectedWallet,
    connectionStatus
  } = props;
  const locale = useTWLocale().wallets.paperWallet.googleLoginScreen;
  const themeObj = useCustomTheme();

  // Need to trigger google login on button click to avoid popup from being blocked
  const googleLogin = async () => {
    try {
      const paperWallet = createWalletInstance();
      setConnectionStatus("connecting");
      const googleWindow = openOauthSignInWindow("google", themeObj);
      if (!googleWindow) {
        throw new Error("Failed to open google login window");
      }
      await paperWallet.connect({
        googleLogin: {
          openedWindow: googleWindow,
          closeOpenedWindow: openedWindow => {
            openedWindow.close();
          }
        }
      });
      setConnectedWallet(paperWallet);
      props.connected();
    } catch (e) {
      setConnectionStatus("disconnected");
      console.error(e);
    }
  };
  useEffect(() => {
    if (connectionStatus === "connected") {
      connected();
    }
  }, [connectionStatus, connected]);
  return /*#__PURE__*/jsx(Container, {
    animate: "fadein",
    flex: "column",
    fullHeight: true,
    children: /*#__PURE__*/jsxs(Container, {
      flex: "column",
      expand: true,
      p: "lg",
      style: {
        paddingBottom: 0
      },
      children: [/*#__PURE__*/jsx(ModalHeader, {
        title: /*#__PURE__*/jsxs(Container, {
          flex: "row",
          center: "both",
          gap: "xs",
          children: [/*#__PURE__*/jsx(Img, {
            src: googleIconUri,
            width: iconSize.md,
            height: iconSize.md
          }), /*#__PURE__*/jsxs(ModalTitle, {
            children: [" ", locale.title, " "]
          })]
        }),
        onBack: goBack
      }), modalSize === "compact" ? /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }) : null, /*#__PURE__*/jsxs(Container, {
        flex: "column",
        center: "both",
        expand: true,
        style: {
          textAlign: "center",
          minHeight: "250px"
        },
        children: [connectionStatus === "connecting" && /*#__PURE__*/jsxs(Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsx(Text, {
            color: "primaryText",
            multiline: true,
            center: true,
            style: {
              maxWidth: "250px"
            },
            children: locale.instruction
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsx(Container, {
            center: "x",
            flex: "row",
            children: /*#__PURE__*/jsx(Spinner, {
              size: "lg",
              color: "accentText"
            })
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xxl"
          })]
        }), connectionStatus === "disconnected" && /*#__PURE__*/jsxs(Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsx(Text, {
            color: "danger",
            children: locale.failed
          }), /*#__PURE__*/jsx(Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsx(Button, {
            variant: "primary",
            onClick: googleLogin,
            children: locale.retry
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xxl"
          })]
        })]
      })]
    })
  });
};

const paperWallet = options => {
  const defaultRecovery = "AWS_MANAGED";
  const defaultConfig = {
    oauthOptions: {
      providers: ["google"]
    }
  };
  const finalOptions = options ? {
    ...defaultConfig,
    ...options
  } : defaultConfig;
  const {
    oauthOptions
  } = finalOptions;
  return {
    category: "socialLogin",
    isHeadless: true,
    id: PaperWallet.id,
    recommended: finalOptions?.recommended,
    meta: {
      ...PaperWallet.meta,
      name: "Email",
      iconURL: emailIcon
    },
    create(walletOptions) {
      return new PaperWallet({
        ...walletOptions,
        ...finalOptions,
        advancedOptions: {
          recoveryShareManagement: "AWS_MANAGED",
          ...finalOptions?.advancedOptions
        }
      });
    },
    selectUI(props) {
      return /*#__PURE__*/jsx(PaperSelectionUI, {
        ...props,
        recoveryShareManagement: finalOptions?.advancedOptions?.recoveryShareManagement || defaultRecovery,
        providers: oauthOptions ? oauthOptions?.providers : undefined
      });
    },
    connectUI(props) {
      return /*#__PURE__*/jsx(PaperConnectUI, {
        ...props,
        recoveryShareManagement: finalOptions?.advancedOptions?.recoveryShareManagement || defaultRecovery,
        providers: oauthOptions ? oauthOptions?.providers : undefined
      });
    }
  };
};
const PaperSelectionUI = props => {
  const screen = useScreenContext();

  // show the icon + text if
  // wide -
  // compact + not main screen (safe/smart wallet list screen)
  if (props.modalSize === "wide" || screen !== reservedScreens.main && props.modalSize === "compact") {
    return /*#__PURE__*/jsx(WalletEntryButton, {
      walletConfig: props.walletConfig,
      selectWallet: () => {
        props.onSelect(undefined);
      }
    });
  }
  return /*#__PURE__*/jsx("div", {
    children: /*#__PURE__*/jsx(PaperFormUI, {
      walletConfig: props.walletConfig,
      googleLoginSupported: props.recoveryShareManagement !== "USER_MANAGED" && !!props.providers?.includes("google"),
      onSelect: props.onSelect,
      createWalletInstance: props.createWalletInstance,
      setConnectedWallet: props.setConnectedWallet,
      setConnectionStatus: props.setConnectionStatus
    })
  });
};
const PaperConnectUI = props => {
  const [loginType, setLoginType] = useState(props.selectionData);
  if (loginType) {
    const handleBack = () => {
      // go back to base screen
      if (props.modalSize === "wide") {
        setLoginType(undefined);
      }

      // go to main screen
      else {
        props.goBack();
      }
    };
    if ("email" in loginType) {
      return /*#__PURE__*/jsx(PaperOTPLoginUI, {
        ...props,
        recoveryShareManagement: props.recoveryShareManagement,
        selectionData: loginType.email,
        goBack: handleBack
      });
    }

    // google
    else {
      return /*#__PURE__*/jsx(PaperGoogleLogin, {
        ...props,
        goBack: handleBack
      });
    }
  }
  return /*#__PURE__*/jsx(PaperFormUIScreen, {
    walletConfig: props.walletConfig,
    googleLoginSupported: props.recoveryShareManagement !== "USER_MANAGED" && !!props.providers?.includes("google"),
    modalSize: props.modalSize,
    onSelect: _loginType => {
      setLoginType(_loginType);
    },
    onBack: props.goBack,
    createWalletInstance: props.createWalletInstance,
    setConnectedWallet: props.setConnectedWallet,
    setConnectionStatus: props.setConnectionStatus
  });
};

export { paperWallet };