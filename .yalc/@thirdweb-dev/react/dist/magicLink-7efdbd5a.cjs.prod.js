'use strict';

var wallets = require('@thirdweb-dev/wallets');
var reactCore = require('@thirdweb-dev/react-core');
var React = require('react');
var formElements = require('./formElements-c3eed36c.cjs.prod.js');
var Tooltip = require('./Tooltip-abeeca73.cjs.prod.js');
var styled = require('@emotion/styled');
var jsxRuntime = require('react/jsx-runtime');
require('@emotion/react');
require('@radix-ui/react-icons');
require('detect-browser');
require('@radix-ui/colors');
require('@radix-ui/react-tooltip');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

/**
 * A wallet configurator for [Magic Link](https://magic.link/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * magicLink({
 *   apiKey: "pk_test_123",
 *   emailLogin: true,
 *   smsLogin: true,
 *   oauthOptions: {
 *     providers: ["google", "facebook"],
 *     redirectURI: "https://example.com/foo/bar",
 *   },
 *   type: "auth", // or 'connect'
 * });
 * ```
 *
 * @param config -
 * Object containing the following properties to configure the wallet
 *
 * ### apiKey
 * Your Magic Link apiKey
 *
 * You can get an API key by signing up for an account on [Magic Link's website](https://magic.link/).
 *
 * Must be a `string`
 *
 * ### magicSdkConfiguration (optional)
 * Configuration for [Magic Auth](https://magic.link/docs/auth/overview) SDK
 *
 * This is only relevant if you are using `type: 'auth'` in your config
 *
 * ```ts
 * {
 *   locale?: string;
 *   endpoint?: string;
 *   testMode?: boolean;
 * }
 * ```
 *
 * * `locale` - Customize the language of Magic's modal, email and confirmation screen. See [Localization](https://magic.link/docs/auth/more/customization/localization) for more.
 *
 * * `endpoint` - A URL pointing to the Magic iframe application
 *
 * * `testMode` - Enable [testMode](https://magic.link/docs/auth/introduction/test-mode) to assert the desired behavior through the email address you provide to `loginWithMagicLink` without having to go through the auth flow.
 *
 * ### smsLogin (optional)
 * Specify whether you want to allow users to login with their phone number or not. It is `true` by default
 *
 * This is only relevant if you are using `type: 'auth'`
 *
 * Must be a `boolean`
 *
 * ### emailLogin (optional)
 * Specify whether you want to allow users to login with their email or not. It is `true` by default
 *
 * This is only relevant if you are using `type: 'auth'`
 *
 * Must be a `boolean`
 *
 * ### oauthOptions (optional)
 * Specify which oauth providers you support in `providers` array.
 *
 * Specify which URI to redirect to after the oauth flow is complete in `redirectURI` option. If no `redirectURI` is specified, the user will be redirected to the current page.
 *
 * You must pass full URL and not just a relative path. For example, `"https://example.com/foo"` is valid but `"/foo"` is not.
 * You can use `new URL("/foo", window.location.origin).href` to get the full URL from a relative path based on the current origin.
 *
 * This is only relevant if you are using `type: 'auth'`
 *
 * You also need to enable the oauth providers for your apiKey from [Magic dashboard](https://dashboard.magic.link/).
 *
 * ```ts
 * type OauthOptions = {
 *   redirectURI?: string;
 *   providers: OauthProvider[];
 * };
 *
 * type OauthProvider =
 *   | "google"
 *   | "facebook"
 *   | "apple"
 *   | "github"
 *   | "bitbucket"
 *   | "gitlab"
 *   | "linkedin"
 *   | "twitter"
 *   | "discord"
 *   | "twitch"
 *   | "microsoft";
 * ```
 *
 * ### recommended (optional)
 * Show this wallet as "recommended" in the [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
function magicLink(config) {
  const emailLoginEnabled = config.emailLogin !== false;
  const smsLoginEnabled = config.smsLogin !== false;
  const oauthProviders = config.oauthOptions?.providers;
  const type = config.type || "auth";
  let icon = Tooltip.emailAndPhoneIcon;
  let iconText = "Email or phone";
  if (emailLoginEnabled && !smsLoginEnabled) {
    icon = Tooltip.emailIcon;
    iconText = "Email";
  }
  if (!emailLoginEnabled && smsLoginEnabled) {
    icon = Tooltip.phoneIcon;
    iconText = "Phone number";
  }
  if (!emailLoginEnabled && !smsLoginEnabled) {
    iconText = "Social login";
  }
  return {
    category: "socialLogin",
    id: wallets.MagicLink.id,
    recommended: config?.recommended,
    isHeadless: true,
    meta: {
      ...wallets.MagicLink.meta,
      name: iconText,
      iconURL: icon
    },
    create: options => new wallets.MagicLink({
      ...options,
      ...config
    }),
    connectUI(props) {
      if (props.modalSize === "wide") {
        return /*#__PURE__*/jsxRuntime.jsx(MagicConnectionUIScreen, {
          ...props,
          type: type,
          emailLogin: emailLoginEnabled,
          smsLogin: smsLoginEnabled,
          oauthProviders: oauthProviders
        });
      }
      if (props.selectionData === undefined) {
        return /*#__PURE__*/jsxRuntime.jsx(MagicConnectionUIScreen, {
          ...props,
          type: type,
          emailLogin: emailLoginEnabled,
          smsLogin: smsLoginEnabled,
          oauthProviders: oauthProviders
        });
      }
      return /*#__PURE__*/jsxRuntime.jsx(MagicConnectingUI, {
        ...props,
        type: type
      });
    },
    // select UI only for auth
    selectUI: config.type === "connect" ? undefined : props => {
      return /*#__PURE__*/jsxRuntime.jsx(MagicSelectUI, {
        ...props,
        emailLoginEnabled: emailLoginEnabled,
        smsLoginEnabled: smsLoginEnabled,
        oauthProviders: oauthProviders
      });
    },
    isInstalled() {
      return false;
    }
  };
}
const MagicSelectUI = props => {
  const screen = Tooltip.useScreenContext();
  if (props.modalSize === "wide" || screen !== Tooltip.reservedScreens.main && props.modalSize === "compact") {
    return /*#__PURE__*/jsxRuntime.jsx(formElements.WalletEntryButton, {
      walletConfig: props.walletConfig,
      selectWallet: () => props.onSelect(undefined)
    });
  }
  return /*#__PURE__*/jsxRuntime.jsx(MagicUI, {
    ...props,
    emailLogin: props.emailLoginEnabled,
    smsLogin: props.smsLoginEnabled,
    oauthProviders: props.oauthProviders
  });
};
const MagicUI = props => {
  const cwLocale = formElements.useTWLocale().connectWallet;
  const locale = formElements.useTWLocale().wallets.magicLink;
  const isEmailEnabled = props.emailLogin !== false;
  const isSMSEnabled = props.smsLogin !== false;
  let placeholder = locale.loginWithEmailOrPhone;
  let type = "text";
  let emptyErrorMessage = locale.emailOrPhoneRequired;
  if (isEmailEnabled && !isSMSEnabled) {
    placeholder = locale.emailPlaceholder;
    emptyErrorMessage = locale.emailRequired;
    type = "email";
  } else if (!isEmailEnabled && isSMSEnabled) {
    placeholder = locale.loginWithPhone;
    emptyErrorMessage = locale.phoneRequired;
    type = "tel";
  }
  if (!isEmailEnabled && !isSMSEnabled && !props.oauthProviders) {
    throw new Error('MagicLink must have either "emailLogin" or "smsLogin" or social login enabled');
  }
  const showInputUI = isEmailEnabled || isSMSEnabled;
  const screen = Tooltip.useScreenContext();
  const showSeparator = props.modalSize === "wide" || screen !== Tooltip.reservedScreens.main && props.modalSize === "compact";
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    flex: "column",
    animate: "fadein",
    gap: props.modalSize === "compact" ? "lg" : "xl",
    style: {
      width: "100%"
    },
    children: [props.oauthProviders && /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: props.oauthProviders.length > 1 ? /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        gap: "md",
        flex: "row",
        style: {
          justifyContent: "space-between"
        },
        center: "x",
        children: props.oauthProviders.map(provider => {
          return /*#__PURE__*/jsxRuntime.jsx(SocialIconButton, {
            onClick: () => {
              props.onSelect({
                provider
              });
            },
            children: /*#__PURE__*/jsxRuntime.jsx(Tooltip.ToolTip, {
              tip: `${locale.loginWith} ${upperCaseFirstLetter(provider)}`,
              sideOffset: 15,
              children: /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
                flex: "row",
                center: "both",
                children: /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
                  src: providerImages[provider],
                  width: formElements.iconSize.lg,
                  height: formElements.iconSize.lg,
                  alt: ""
                })
              })
            })
          }, provider);
        })
      }) : /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        gap: "xs",
        flex: "column",
        children: props.oauthProviders.map(provider => {
          return /*#__PURE__*/jsxRuntime.jsxs(SocialButtonLarge, {
            variant: "secondary",
            onClick: () => {
              props.onSelect({
                provider
              });
            },
            children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
              src: providerImages[provider],
              width: formElements.iconSize.md,
              height: formElements.iconSize.md,
              alt: ""
            }), /*#__PURE__*/jsxRuntime.jsxs("span", {
              children: [locale.loginWith, " ", upperCaseFirstLetter(provider)]
            })]
          }, provider);
        })
      })
    }), showInputUI && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [showSeparator && /*#__PURE__*/jsxRuntime.jsx(formElements.TextDivider, {
        text: cwLocale.or
      }), /*#__PURE__*/jsxRuntime.jsx(Tooltip.InputSelectionUI, {
        submitButtonText: locale.submitEmail,
        onSelect: props.onSelect,
        placeholder: placeholder,
        name: "magic-input",
        type: type,
        emptyErrorMessage: emptyErrorMessage,
        errorMessage: _input => {
          const input = _input.toLowerCase();
          const isEmail = input.includes("@");
          const isPhone = Number.isInteger(Number(input[input.length - 1]));
          if (isEmail && isEmailEnabled) {
            const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/g;
            const isValidEmail = emailRegex.test(input.replace(/\+/g, ""));
            if (!isValidEmail) {
              return locale.invalidEmail;
            }
          } else if (isPhone && isSMSEnabled) {
            if (!input.startsWith("+")) {
              return locale.countryCodeMissing;
            }
          } else {
            if (isEmailEnabled && isSMSEnabled) {
              return locale.invalidEmailOrPhone;
            }
            if (isEmailEnabled) {
              return locale.invalidEmail;
            }
            if (isSMSEnabled) {
              return locale.invalidPhone;
            }
          }
        }
      })]
    })]
  });
};
function useConnectMagic() {
  const {
    activeChain
  } = reactCore.useWalletContext();
  const connector = React.useCallback(async data => {
    const {
      selectionData,
      connected,
      show,
      hide,
      connect
    } = data;

    // oauth
    if (typeof selectionData === "object") {
      try {
        hide();
        (async () => {
          await connect({
            oauthProvider: selectionData.provider,
            chainId: activeChain.chainId
          });
        })();
        connected();
      } catch (e) {
        console.error(e);
      }
      show();
    }

    // email or phone
    else {
      const isEmail = selectionData ? selectionData.includes("@") : false;
      hide();
      try {
        await connect(data.type === "connect" ? {} : isEmail ? {
          email: selectionData,
          chainId: activeChain.chainId
        } : {
          phoneNumber: selectionData,
          chainId: activeChain.chainId
        });
        connected();
      } catch (e) {
        console.error(e);
      }
      show();
    }
  }, [activeChain.chainId]);
  return connector;
}
const MagicConnectingUI = _ref => {
  let {
    connected,
    walletConfig,
    show,
    selectionData,
    supportedWallets,
    type,
    hide,
    connect
  } = _ref;
  const connectPrompted = React.useRef(false);
  const singleWallet = supportedWallets.length === 1;
  const connectMagic = useConnectMagic();
  React.useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    connectPrompted.current = true;
    connectMagic({
      selectionData: selectionData,
      singleWallet,
      type,
      connect,
      show,
      connected,
      hide
    });
  }, [connectMagic, connected, selectionData, show, singleWallet, type, walletConfig, hide, connect]);
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    flex: "row",
    center: "both",
    style: {
      minHeight: "350px"
    },
    children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
      size: "xl",
      color: "accentText"
    })
  });
};
const MagicConnectionUIScreen = props => {
  const locale = formElements.useTWLocale().wallets.magicLink;
  const connectMagic = useConnectMagic();
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    p: "lg",
    fullHeight: true,
    flex: "column",
    style: {
      minHeight: "300px"
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      onBack: props.goBack,
      title: locale.signIn
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      flex: "column",
      center: "both",
      px: props.modalSize === "wide" ? "lg" : undefined,
      children: /*#__PURE__*/jsxRuntime.jsx(MagicUI, {
        ...props,
        onSelect: data => {
          connectMagic({
            selectionData: data,
            connected: props.connected,
            show: props.show,
            singleWallet: props.supportedWallets.length === 1,
            type: props.type,
            connect: props.connect,
            hide: props.hide
          });
        }
      })
    })]
  });
};
const providerImages = {
  google: Tooltip.googleIconUri,
  facebook: Tooltip.facebookIconUri,
  twitter: Tooltip.twitterIconUri,
  github: Tooltip.githubIconUri,
  apple: Tooltip.appleIconUri,
  linkedin: Tooltip.linkedinIconUri,
  bitbucket: Tooltip.bitbucketIconUri,
  gitlab: Tooltip.gitlabIconUri,
  twitch: Tooltip.twitchIconUri,
  discord: Tooltip.discordIconUri,
  microsoft: Tooltip.microsoftIconUri
};
function upperCaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const SocialButtonLarge = /* @__PURE__ */styled__default["default"](formElements.Button)(() => {
  const theme = formElements.useCustomTheme();
  return {
    display: "flex",
    justifyContent: "center",
    gap: formElements.spacing.md,
    fontSize: formElements.fontSize.md,
    transition: "background-color 0.2s ease",
    "&:hover": {
      backgroundColor: theme.colors.secondaryButtonBg
    },
    "&:active": {
      boxShadow: "none"
    }
  };
});
const SocialIconButton = /* @__PURE__ */styled__default["default"](formElements.IconButton)(() => {
  const theme = formElements.useCustomTheme();
  return {
    border: `1px solid ${theme.colors.borderColor}`,
    padding: formElements.spacing.sm,
    transition: "border-color 0.2s ease",
    "&:hover": {
      borderColor: theme.colors.accentText,
      background: "transparent"
    },
    flexGrow: 1
  };
});

exports.magicLink = magicLink;