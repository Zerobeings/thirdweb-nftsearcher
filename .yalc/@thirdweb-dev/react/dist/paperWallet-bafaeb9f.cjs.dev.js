'use strict';

var wallets = require('@thirdweb-dev/wallets');
var React = require('react');
var styled = require('@emotion/styled');
var formElements = require('./formElements-a5b9f4ea.cjs.dev.js');
var oneKeyWallet = require('./oneKeyWallet-6a8be508.cjs.dev.js');
var Tooltip = require('./Tooltip-df8ac8db.cjs.dev.js');
var jsxRuntime = require('react/jsx-runtime');
require('@emotion/react');
require('@thirdweb-dev/react-core');
require('@radix-ui/react-icons');
require('detect-browser');
require('@radix-ui/colors');
require('@radix-ui/react-popover');
require('copy-to-clipboard');
require('@radix-ui/react-tabs');
require('fuse.js');
require('@thirdweb-dev/chains');
require('./safeChainSlug-676eb36b.cjs.dev.js');
require('qrcode');
require('@tanstack/react-query');
require('ethers');
require('@thirdweb-dev/sdk');
require('tiny-invariant');
require('@radix-ui/react-dialog');
require('@radix-ui/react-focus-scope');
require('@radix-ui/react-tooltip');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const PaperFormUI = props => {
  const cwLocale = formElements.useTWLocale().connectWallet;
  const locale = formElements.useTWLocale().wallets.paperWallet;
  const {
    createWalletInstance,
    setConnectionStatus,
    setConnectedWallet
  } = props;
  const themeObj = formElements.useCustomTheme();

  // Need to trigger google login on button click to avoid popup from being blocked
  const googleLogin = async () => {
    try {
      const paperWallet = createWalletInstance();
      setConnectionStatus("connecting");
      const googleWindow = oneKeyWallet.openOauthSignInWindow("google", themeObj);
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
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [props.googleLoginSupported && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsxs(SocialButton, {
        variant: "secondary",
        fullWidth: true,
        onClick: () => {
          googleLogin();
          props.onSelect({
            google: true
          });
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
          src: Tooltip.googleIconUri,
          width: formElements.iconSize.md,
          height: formElements.iconSize.md
        }), locale.signInWithGoogle]
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.TextDivider, {
        text: cwLocale.or,
        py: "lg"
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(Tooltip.InputSelectionUI, {
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
  const locale = formElements.useTWLocale().wallets.paperWallet;
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    flex: "column",
    p: "lg",
    animate: "fadein",
    style: {
      minHeight: "250px"
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      onBack: props.onBack,
      title: locale.signIn
    }), isCompact ? /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }) : null, /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      flex: "column",
      center: "y",
      p: isCompact ? undefined : "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(PaperFormUI, {
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
const SocialButton = /* @__PURE__ */styled__default["default"](formElements.Button)({
  display: "flex",
  justifyContent: "center",
  gap: formElements.spacing.sm
});

const PaperOTPLoginUI = props => {
  const locale = formElements.useTWLocale().wallets.paperWallet.emailLoginScreen;
  const email = props.selectionData;
  const [otpInput, setOtpInput] = React.useState("");
  const [recoveryCode, setRecoveryCode] = React.useState("");
  const {
    createWalletInstance,
    setConnectedWallet,
    setConnectionStatus
  } = props;
  const [wallet, setWallet] = React.useState(null);
  const isWideModal = props.modalSize === "wide";
  const [verifyStatus, setVerifyStatus] = React.useState("idle");
  const [sendEmailStatus, setSendEmailStatus] = React.useState("sending");
  const recoveryCodeRequired = !!(typeof sendEmailStatus !== "string" && sendEmailStatus.recoveryShareManagement !== "AWS_MANAGED" && sendEmailStatus.isNewDevice && !sendEmailStatus.isNewUser);
  const sendEmail = React.useCallback(async () => {
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
  const emailSentOnMount = React.useRef(false);
  React.useEffect(() => {
    if (!emailSentOnMount.current) {
      emailSentOnMount.current = true;
      sendEmail();
    }
  }, [sendEmail]);
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    flex: "column",
    animate: "fadein",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: locale.title,
        onBack: props.goBack
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      flex: "column",
      center: "y",
      children: /*#__PURE__*/jsxRuntime.jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
        },
        children: [/*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          flex: "column",
          center: "x",
          px: "lg",
          children: [!isWideModal && /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            children: locale.enterCodeSendTo
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "primaryText",
            children: email
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xl"
          })]
        }), /*#__PURE__*/jsxRuntime.jsx(oneKeyWallet.OTPInput, {
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
        }), recoveryCodeRequired && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          animate: "fadein",
          px: "lg",
          style: {
            textAlign: "center"
          },
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xxl"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "primaryText",
            children: locale.newDeviceDetected
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "sm"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            balance: true,
            size: "sm",
            multiline: true,
            style: {
              maxWidth: "350px"
            },
            children: locale.enterRecoveryCode
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
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
        }), verifyStatus === "invalid" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "md"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            size: "sm",
            color: "danger",
            center: true,
            children: recoveryCodeRequired ? locale.invalidCodeOrRecoveryCode : locale.invalidCode
          })]
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          px: isWideModal ? "xxl" : "lg",
          children: verifyStatus === "verifying" ? /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
            children: /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
              flex: "row",
              center: "x",
              animate: "fadein",
              children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
                size: "lg",
                color: "accentText"
              })
            })
          }) : /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            animate: "fadein",
            children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
              onClick: () => handleSubmit(otpInput),
              variant: "accent",
              type: "submit",
              style: {
                width: "100%"
              },
              children: locale.verify
            })
          }, "btn-container")
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), !isWideModal && /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          p: isWideModal ? undefined : "lg",
          animate: "fadein",
          children: [sendEmailStatus === "error" && /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
            children: /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
              size: "sm",
              center: true,
              color: "danger",
              children: locale.failedToSendCode
            })
          }), sendEmailStatus === "sending" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
            flex: "row",
            center: "both",
            gap: "xs",
            style: {
              textAlign: "center"
            },
            children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
              size: "sm",
              children: locale.sendingCode
            }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
              size: "xs",
              color: "secondaryText"
            })]
          }), typeof sendEmailStatus !== "string" && /*#__PURE__*/jsxRuntime.jsx(LinkButton, {
            onClick: sendEmail,
            type: "button",
            children: locale.resendCode
          })]
        })]
      })
    })]
  });
};
const LinkButton = /* @__PURE__ */formElements.StyledButton(() => {
  const theme = formElements.useCustomTheme();
  return {
    all: "unset",
    color: theme.colors.accentText,
    fontSize: formElements.fontSize.sm,
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
  const locale = formElements.useTWLocale().wallets.paperWallet.googleLoginScreen;
  const themeObj = formElements.useCustomTheme();

  // Need to trigger google login on button click to avoid popup from being blocked
  const googleLogin = async () => {
    try {
      const paperWallet = createWalletInstance();
      setConnectionStatus("connecting");
      const googleWindow = oneKeyWallet.openOauthSignInWindow("google", themeObj);
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
  React.useEffect(() => {
    if (connectionStatus === "connected") {
      connected();
    }
  }, [connectionStatus, connected]);
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    animate: "fadein",
    flex: "column",
    fullHeight: true,
    children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      expand: true,
      p: "lg",
      style: {
        paddingBottom: 0
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          flex: "row",
          center: "both",
          gap: "xs",
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
            src: Tooltip.googleIconUri,
            width: formElements.iconSize.md,
            height: formElements.iconSize.md
          }), /*#__PURE__*/jsxRuntime.jsxs(formElements.ModalTitle, {
            children: [" ", locale.title, " "]
          })]
        }),
        onBack: goBack
      }), modalSize === "compact" ? /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }) : null, /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        flex: "column",
        center: "both",
        expand: true,
        style: {
          textAlign: "center",
          minHeight: "250px"
        },
        children: [connectionStatus === "connecting" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "primaryText",
            multiline: true,
            center: true,
            style: {
              maxWidth: "250px"
            },
            children: locale.instruction
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xl"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
            center: "x",
            flex: "row",
            children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
              size: "lg",
              color: "accentText"
            })
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "xxl"
          })]
        }), connectionStatus === "disconnected" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
          animate: "fadein",
          children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
            color: "danger",
            children: locale.failed
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
            y: "lg"
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
            variant: "primary",
            onClick: googleLogin,
            children: locale.retry
          }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
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
    id: wallets.PaperWallet.id,
    recommended: finalOptions?.recommended,
    meta: {
      ...wallets.PaperWallet.meta,
      name: "Email",
      iconURL: Tooltip.emailIcon
    },
    create(walletOptions) {
      return new wallets.PaperWallet({
        ...walletOptions,
        ...finalOptions,
        advancedOptions: {
          recoveryShareManagement: "AWS_MANAGED",
          ...finalOptions?.advancedOptions
        }
      });
    },
    selectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(PaperSelectionUI, {
        ...props,
        recoveryShareManagement: finalOptions?.advancedOptions?.recoveryShareManagement || defaultRecovery,
        providers: oauthOptions ? oauthOptions?.providers : undefined
      });
    },
    connectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(PaperConnectUI, {
        ...props,
        recoveryShareManagement: finalOptions?.advancedOptions?.recoveryShareManagement || defaultRecovery,
        providers: oauthOptions ? oauthOptions?.providers : undefined
      });
    }
  };
};
const PaperSelectionUI = props => {
  const screen = Tooltip.useScreenContext();

  // show the icon + text if
  // wide -
  // compact + not main screen (safe/smart wallet list screen)
  if (props.modalSize === "wide" || screen !== Tooltip.reservedScreens.main && props.modalSize === "compact") {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.WalletEntryButton, {
      walletConfig: props.walletConfig,
      selectWallet: () => {
        props.onSelect(undefined);
      }
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx("div", {
    children: /*#__PURE__*/jsxRuntime.jsx(PaperFormUI, {
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
  const [loginType, setLoginType] = React.useState(props.selectionData);
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
      return /*#__PURE__*/jsxRuntime.jsx(PaperOTPLoginUI, {
        ...props,
        recoveryShareManagement: props.recoveryShareManagement,
        selectionData: loginType.email,
        goBack: handleBack
      });
    }

    // google
    else {
      return /*#__PURE__*/jsxRuntime.jsx(PaperGoogleLogin, {
        ...props,
        goBack: handleBack
      });
    }
  }
  return /*#__PURE__*/jsxRuntime.jsx(PaperFormUIScreen, {
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

exports.paperWallet = paperWallet;