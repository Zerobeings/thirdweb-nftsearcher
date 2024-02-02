import { keyframes } from '@emotion/react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useContext, createContext, useState, useRef, useEffect } from 'react';
import { useStorage, useDisconnect, useConnectionStatus } from '@thirdweb-dev/react-core';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { walletIds } from '@thirdweb-dev/wallets';
import { detect } from 'detect-browser';
import { mauveDark, tomato, green, mauve } from '@radix-ui/colors';
import styled from '@emotion/styled';

const darkColors = {
  base1: "hsl(230deg 11.63% 8.43%)",
  base2: "hsl(230deg 11.63% 12%)",
  base3: "hsl(230deg 11.63% 15%)",
  base4: "hsl(230deg 11.63% 17%)",
  primaryText: mauveDark.mauve12,
  secondaryText: mauveDark.mauve10,
  danger: tomato.tomato9,
  success: green.green8,
  overlay: "rgba(0, 0, 0, 0.7)",
  accentText: "#3385FF",
  accentBg: "hsl(216 100% 50%)",
  textOnAccent: mauveDark.mauve12
};
const lightColors = {
  base1: mauve.mauve1,
  base2: mauve.mauve3,
  base3: mauve.mauve5,
  base4: mauve.mauve6,
  primaryText: mauve.mauve12,
  secondaryText: mauveDark.mauve9,
  accentText: "hsl(216 100% 45%)",
  success: green.green9,
  danger: tomato.tomato9,
  overlay: "rgba(0, 0, 0, 0.7)",
  accentBg: "hsl(216 100% 50%)",
  textOnAccent: mauve.mauve1
};

/**
 * @theme
 */

function createThemeObj(colors) {
  return {
    type: "dark",
    colors: {
      primaryText: colors.primaryText,
      secondaryText: colors.secondaryText,
      accentText: colors.accentText,
      danger: colors.danger,
      success: colors.success,
      modalOverlayBg: colors.overlay,
      accentButtonBg: colors.accentBg,
      accentButtonText: colors.textOnAccent,
      primaryButtonBg: colors.primaryText,
      primaryButtonText: colors.base1,
      secondaryButtonBg: colors.base3,
      secondaryButtonText: colors.primaryText,
      secondaryButtonHoverBg: colors.base4,
      modalBg: colors.base1,
      tooltipBg: colors.primaryText,
      tooltipText: colors.base1,
      inputAutofillBg: colors.base2,
      scrollbarBg: colors.base2,
      walletSelectorButtonHoverBg: colors.base2,
      separatorLine: colors.base4,
      secondaryIconColor: colors.secondaryText,
      secondaryIconHoverBg: colors.base3,
      secondaryIconHoverColor: colors.primaryText,
      borderColor: colors.base4,
      skeletonBg: colors.base3,
      selectedTextColor: colors.base1,
      selectedTextBg: colors.primaryText,
      connectedButtonBg: colors.base1,
      connectedButtonBgHover: colors.base2
    },
    fontFamily: "inherit"
  };
}
const darkThemeObj = /* @__PURE__ */createThemeObj(darkColors);
const lightThemeObj = /* @__PURE__ */createThemeObj(lightColors);

/**
 * @theme
 */

const fontSize = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px"
};
const spacing = {
  xxs: "6px",
  xs: "8px",
  sm: "12px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  xxl: "48px",
  "3xl": "64px"
};
const radius = {
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "20px",
  xxl: "32px"
};
const iconSize = {
  xs: "12",
  sm: "16",
  md: "24",
  lg: "32",
  xl: "48",
  xxl: "64"
};

// desktop first style media query
const media = {
  mobile: `@media (max-width: 640px)`
};

// TODO - move to theme
const shadow = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
};

/**
 * Create a custom light theme object by using the default dark theme as a base and applying overrides.
 *
 * @example
 * ### Get the default light theme
 * ```ts
 * const defaultLightTheme = lightTheme()
 * ```
 *
 * ### Create a custom light theme
 * ```ts
 * const customTheme = lightTheme({
 *   colors: {
 *     modalBg: "red",
 *   },
 * });
 * ```
 *
 * @param overrides - The overrides to apply to the default light theme.
 * @theme
 */
function lightTheme(overrides) {
  if (!overrides) {
    return lightThemeObj;
  }
  return applyThemeOverrides(lightThemeObj, overrides);
}

/**
 * Create a custom dark theme object by using the default dark theme as a base and applying overrides.
 *
 * @example
 * ### Get the default dark theme
 * ```ts
 * const defaultDarkTheme = darkTheme()
 * ```
 *
 * ### Create a custom dark theme
 * ```ts
 * const customTheme = darkTheme({
 *   colors: {
 *     modalBg: "red",
 *   },
 * });
 * ```
 *
 * @param overrides - The overrides to apply to the default dark theme.
 * @theme
 */
function darkTheme(overrides) {
  if (!overrides) {
    return darkThemeObj;
  }
  return applyThemeOverrides(darkThemeObj, overrides);
}
function applyThemeOverrides(baseTheme, themeOverrides) {
  const theme = {
    ...baseTheme
  };
  if (themeOverrides.colors) {
    theme.colors = {
      ...theme.colors,
      ...themeOverrides.colors
    };
  }
  if (themeOverrides.fontFamily) {
    theme.fontFamily = themeOverrides.fontFamily;
  }
  return theme;
}

const Spacer = _ref => {
  let {
    y
  } = _ref;
  return /*#__PURE__*/jsx("div", {
    style: {
      height: spacing[y]
    }
  });
};

const CustomThemeCtx = /* @__PURE__ */createContext(darkThemeObj);
function CustomThemeProvider(props) {
  const {
    theme,
    children
  } = props;
  let themeObj;
  if (typeof theme === "string") {
    themeObj = theme === "light" ? lightThemeObj : darkThemeObj;
  } else {
    themeObj = theme;
  }
  return /*#__PURE__*/jsx(CustomThemeCtx.Provider, {
    value: themeObj,
    children: children
  });
}
function useCustomTheme() {
  return useContext(CustomThemeCtx);
}

const StyledDiv = styled.div;
const StyledSvg = styled.svg;
const StyledCircle = styled.circle;
const StyledSpan = styled.span;
const StyledAnchor = styled.a;
const StyledButton = styled.button;
const StyledLabel = styled.label;
const StyledInput = styled.input;
const StyledH2 = styled.h2;
const StyledP = styled.p;
const StyledUl = styled.ul;
const StyledSelect = styled.select;

const Button = /* @__PURE__ */StyledButton(props => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
    padding: `${fontSize.sm} ${fontSize.sm}`,
    fontSize: fontSize.md,
    fontWeight: 500,
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    lineHeight: "normal",
    flexShrink: 0,
    transition: "border 200ms ease",
    gap: props.gap && spacing[props.gap] || 0,
    width: props.fullWidth ? "100%" : undefined,
    background: (() => {
      switch (props.variant) {
        case "primary":
          return theme.colors.primaryButtonBg;
        case "accent":
          return theme.colors.accentButtonBg;
        case "secondary":
          return theme.colors.secondaryButtonBg;
        default:
          return "none";
      }
    })(),
    color: (() => {
      switch (props.variant) {
        case "primary":
          return theme.colors.primaryButtonText;
        case "accent":
          return theme.colors.accentButtonText;
        case "secondary":
          return theme.colors.secondaryButtonText;
        case "outline":
          return theme.colors.secondaryButtonText;
        case "link":
          return theme.colors.accentText;
        default:
          return theme.colors.primaryButtonText;
      }
    })(),
    "&:active": {
      transform: "translateY(1px)"
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    ...(() => {
      if (props.variant === "outline") {
        return {
          border: `1.5px solid ${theme.colors.borderColor}`,
          "&:hover": {
            borderColor: theme.colors.accentText
          }
        };
      }
      if (props.variant === "secondary") {
        return {
          "&:hover": {
            background: theme.colors.secondaryButtonHoverBg
          }
        };
      }
      if (props.variant === "link") {
        return {
          padding: 0,
          "&:hover": {
            color: theme.colors.primaryText
          }
        };
      }
    })()
  };
});
const IconButton = /* @__PURE__ */StyledButton(() => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.sm,
    WebkitTapHighlightColor: "transparent",
    color: theme.colors.secondaryIconColor,
    padding: "2px",
    transition: "background 200ms ease, color 200ms ease",
    "&:hover": {
      background: theme.colors.secondaryIconHoverBg,
      color: theme.colors.secondaryIconHoverColor
    }
  };
});
const InputButton = /* @__PURE__ */StyledButton(() => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.sm,
    padding: spacing.sm,
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    color: theme.colors.secondaryText,
    "&:hover": {
      color: theme.colors.primaryText
    },
    "&[disabled]": {
      cursor: "not-allowed"
    }
  };
});

const ModalTitle = /* @__PURE__ */StyledH2(props => {
  const theme = useCustomTheme();
  return {
    margin: 0,
    fontWeight: 600,
    fontSize: fontSize.lg,
    color: theme.colors.primaryText,
    lineHeight: 1.3,
    textAlign: "left",
    [media.mobile]: {
      textAlign: props.centerOnMobile ? "center" : "left"
    }
  };
});
const ModalDescription = /* @__PURE__ */StyledP(props => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    display: "block",
    fontSize: props.sm ? fontSize.sm : fontSize.md,
    color: theme.colors.secondaryText,
    lineHeight: 1.5,
    [media.mobile]: {
      textAlign: props.centerOnMobile ? "center" : "left"
    }
  };
});
const BackButton = props => {
  return /*#__PURE__*/jsx(IconButton, {
    onClick: props.onClick,
    style: {
      transform: "translateX(-25%)",
      ...props.style
    },
    type: "button",
    children: /*#__PURE__*/jsx(ChevronLeftIcon, {
      width: iconSize.md,
      height: iconSize.md
    })
  });
};
const HelperLink = /* @__PURE__ */StyledAnchor(props => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    cursor: "pointer",
    color: theme.colors.accentText,
    fontSize: props.md ? fontSize.md : fontSize.sm,
    textDecoration: "none",
    display: "block",
    lineHeight: 1.5,
    [media.mobile]: {
      textAlign: "center"
    },
    "&:hover": {
      color: theme.colors.primaryText,
      textDecoration: "none"
    }
  };
});

const Img = props => {
  const storage = useStorage();
  const getSrc = () => {
    try {
      return storage ? storage.resolveScheme(props.src) : props.src.replace("ipfs://", "https://ipfs.io/ipfs/");
    } catch {
      return props.src;
    }
  };
  return /*#__PURE__*/jsx("img", {
    width: props.width,
    height: props.height,
    src: getSrc(),
    alt: props.alt || "",
    loading: props.loading,
    decoding: "async",
    style: {
      height: props.height ? props.height + "px" : undefined,
      width: props.width ? props.width + "px" : undefined,
      userSelect: "none",
      ...props.style
    },
    draggable: false,
    className: props.className
  });
};

const floatUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20%) scale(0.8) ;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const floatDownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20%) scale(0.8) ;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ScreenBottomContainer = /* @__PURE__ */StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    borderTop: `1px solid ${theme.colors.separatorLine}`,
    display: "flex",
    flexDirection: "column",
    gap: spacing.lg,
    padding: spacing.lg
  };
});
const noScrollBar = {
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    width: 0,
    display: "none"
  }
};
function ModalHeader(props) {
  const {
    onBack,
    title,
    imgSrc
  } = props;
  return /*#__PURE__*/jsxs("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    children: [onBack && /*#__PURE__*/jsx(BackButton, {
      onClick: onBack,
      style: {
        position: "absolute",
        left: 0,
        top: 0
      }
    }), /*#__PURE__*/jsxs(Container, {
      flex: "row",
      gap: "xs",
      center: "both",
      children: [imgSrc && /*#__PURE__*/jsx(Img, {
        src: imgSrc,
        width: iconSize.md,
        height: iconSize.md
      }), typeof title === "string" ? /*#__PURE__*/jsx(ModalTitle, {
        children: title
      }) : title]
    })]
  });
}
const Line = /* @__PURE__ */StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    height: "1px",
    background: theme.colors.separatorLine
  };
});
function Container(props) {
  const styles = {};
  if (props.relative) {
    styles.position = "relative";
  }
  if (props.fullHeight) {
    styles.height = "100%";
  }
  if (props.expand) {
    styles.flex = "1 1 0%";
  }
  if (props.flex) {
    styles.display = "flex";
    styles.flexDirection = props.flex;
    if (props.flex === "row") {
      styles.flexWrap = "wrap";
    }
    if (props.gap) {
      styles.gap = spacing[props.gap];
    }
    if (props.center) {
      if (props.center === "both") {
        styles.justifyContent = "center";
        styles.alignItems = "center";
      }
      if (props.center === "x" && props.flex === "row" || props.center === "y" && props.flex === "column") {
        styles.justifyContent = "center";
      }
      if (props.center === "x" && props.flex === "column" || props.center === "y" && props.flex === "row") {
        styles.alignItems = "center";
      }
    }
  }
  if (props.p) {
    styles.padding = spacing[props.p];
  }
  if (props.px) {
    styles.paddingLeft = spacing[props.px];
    styles.paddingRight = spacing[props.px];
  }
  if (props.py) {
    styles.paddingTop = spacing[props.py];
    styles.paddingBottom = spacing[props.py];
  }
  if (props.debug) {
    styles.outline = "1px solid red";
    styles.outlineOffset = "-1px";
  }
  return /*#__PURE__*/jsx(Box, {
    "data-scrolly": props.scrollY,
    "data-animate": props.animate,
    color: props.color,
    style: {
      ...styles,
      ...props.style
    },
    children: props.children
  });
}
const Box = /* @__PURE__ */StyledDiv(props => {
  const theme = useCustomTheme();
  return {
    color: props.color ? theme.colors[props.color] : "inherit",
    "&[data-animate='fadein']": {
      opacity: 0,
      animation: `${fadeInAnimation} 350ms ease forwards`
    },
    "&[data-animate='floatup']": {
      opacity: 0,
      animation: `${floatUpAnimation} 350ms ease forwards`
    },
    "&[data-animate='floatdown']": {
      opacity: 0,
      animation: `${floatDownAnimation} 350ms ease forwards`
    },
    "&[data-scrolly='true']": {
      overflowY: "auto",
      ...noScrollBar
    }
  };
});

const Text = /* @__PURE__ */StyledSpan(p => {
  const theme = useCustomTheme();
  return {
    fontSize: fontSize[p.size || "md"],
    color: theme.colors[p.color || "secondaryText"],
    margin: 0,
    display: p.inline ? "inline" : "block",
    fontWeight: p.weight || 500,
    lineHeight: p.multiline ? 1.5 : "normal",
    textAlign: p.center ? "center" : "left",
    textWrap: p.balance ? "balance" : "inherit",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis"
  };
});
const Link = /* @__PURE__ */StyledAnchor(p => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    cursor: "pointer",
    color: theme.colors[p.color || "accentText"],
    fontSize: fontSize[p.size || "md"],
    textDecoration: "none",
    textAlign: p.center ? "center" : "left",
    display: p.inline ? "inline" : "block",
    fontWeight: p.weight || 500,
    lineHeight: "normal",
    transition: "color 0.2s ease",
    "&:hover": {
      color: theme.colors[p.hoverColor || "primaryText"],
      textDecoration: "none"
    }
  };
});

function detectEnv(userAgent) {
  return detect(userAgent);
}

/**
 * @internal
 */
function isAndroid() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}

/**
 * @internal
 */
function isIOS() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}

/**
 * @internal
 */
function detectOS() {
  const env = detectEnv();
  return env?.os ? env.os : undefined;
}

/**
 * @internal
 */
function isMobile() {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}

/**
 * Create a new object with given overrides object applied on top of given base object without mutating the base and overrides object
 *
 * @param defaultObj - The object to use as the base object
 * @param overrides - The object to use as the overrides
 */
function immutableOverride(defaultObj, overrides) {
  const output = {
    ...defaultObj
  };
  for (const key in overrides) {
    const value = overrides[key];
    // only apply overrides if it is not undefined
    if (value !== undefined) {
      // partially apply overrides object
      if (typeof value === "object" && value !== null) {
        output[key] = immutableOverride(defaultObj[key], value);
      }
      // completely override non-object values
      else {
        output[key] = value;
      }
    }
  }
  return output;
}

// wallets that connect via extension and QR scan
function extensionAndQRScanScreens(walletName) {
  return {
    connectionScreen: {
      inProgress: "Awaiting Confirmation",
      failed: "Connection failed",
      instruction: `Accept the connection request in ${walletName} wallet`,
      retry: "Try Again"
    },
    getStartedScreen: {
      instruction: `Scan the QR code to download ${walletName} app`
    },
    scanScreen: {
      instruction: `Scan the QR code with ${walletName} wallet app to connect`
    },
    getStartedLink: `Don't have ${walletName} wallet?`
  };
}
function enDefault() {
  return {
    connectWallet: {
      signIn: "Sign in",
      defaultButtonTitle: "Connect Wallet",
      connecting: "Connecting",
      switchNetwork: "Switch Network",
      switchingNetwork: "Switching Network",
      defaultModalTitle: "Connect",
      recommended: "Recommended",
      installed: "Installed",
      continueAsGuest: "Continue as guest",
      connectAWallet: "Connect a wallet",
      newToWallets: "New to wallets?",
      getStarted: "Get started",
      guest: "Guest",
      send: "Send",
      receive: "Receive",
      currentNetwork: "Current network",
      switchAccount: "Switch Account",
      requestTestnetFunds: "Request Testnet Funds",
      transactionHistory: "Transaction History",
      backupWallet: "Backup Wallet",
      guestWalletWarning: "This is a temporary guest wallet. Backup wallet if you don't want to lose access to it",
      switchTo: "Switch to",
      // Used in "Switch to <Wallet-Name>"
      connectedToSmartWallet: "Connected To Smart Wallet",
      confirmInWallet: "Confirm in wallet",
      disconnectWallet: "Disconnect Wallet",
      copyAddress: "Copy Address",
      personalWallet: "Personal Wallet",
      smartWallet: "Smart Wallet",
      or: "OR",
      goBackButton: "Back",
      download: {
        chrome: "Download Chrome Extension",
        android: "Download on Google Play",
        iOS: "Download on App Store"
      },
      welcomeScreen: {
        defaultTitle: "Your gateway to the decentralized world",
        defaultSubtitle: "Connect a wallet to get started"
      },
      agreement: {
        prefix: "By connecting, you agree to the",
        termsOfService: "Terms of Service",
        and: "&",
        privacyPolicy: "Privacy Policy"
      },
      networkSelector: {
        title: "Select Network",
        mainnets: "Mainnets",
        testnets: "Testnets",
        allNetworks: "All",
        addCustomNetwork: "Add Custom Network",
        inputPlaceholder: "Search Network or Chain ID",
        categoryLabel: {
          recentlyUsed: "Recently Used",
          popular: "Popular",
          others: "All Networks"
        },
        loading: "Loading",
        failedToSwitch: "Failed to switch network"
      },
      receiveFundsScreen: {
        title: "Receive Funds",
        instruction: "Copy the wallet address to send funds to this wallet"
      },
      sendFundsScreen: {
        title: "Send Funds",
        submitButton: "Send",
        token: "Token",
        sendTo: "Send to",
        amount: "Amount",
        successMessage: "Transaction Successful",
        invalidAddress: "Invalid Address",
        noTokensFound: "No Tokens Found",
        searchToken: "Search or Paste token address",
        transactionFailed: "Transaction Failed",
        transactionRejected: "Transaction Rejected",
        insufficientFunds: "Insufficient Funds",
        selectTokenTitle: "Select a Token",
        sending: "Sending"
      },
      signatureScreen: {
        instructionScreen: {
          title: "Sign in",
          instruction: "Please sign the message request in your wallet to continue",
          signInButton: "Sign in",
          disconnectWallet: "Disconnect Wallet"
        },
        signingScreen: {
          title: "Signing In",
          prompt: "Sign the signature request in your wallet",
          promptForSafe: "Sign signature request in your wallet & approve transaction in Safe",
          approveTransactionInSafe: "Approve transaction in Safe",
          tryAgain: "Try Again",
          failedToSignIn: "Failed to Sign in",
          inProgress: "Awaiting Confirmation"
        }
      }
    },
    wallets: {
      walletConnect: {
        scanInstruction: "Scan this with your wallet app to connect"
      },
      smartWallet: {
        connecting: "Connecting to Smart Wallet",
        failedToConnect: "Failed to connect to Smart Wallet",
        wrongNetworkScreen: {
          title: "Wrong Network",
          subtitle: "Your wallet is not connected to the required network",
          failedToSwitch: "Failed to switch network"
        }
      },
      safeWallet: {
        connectWalletScreen: {
          title: "Link personal wallet",
          subtitle: "Connect your personal wallet to use Safe.",
          learnMoreLink: "Learn more"
        },
        accountDetailsScreen: {
          title: "Enter your safe details",
          findSafeAddressIn: "You can find your safe address in",
          // You can find your safe address in + <dashboardLink>
          dashboardLink: "Safe Dashboard",
          // <dashboardLink>
          network: "Safe Network",
          selectNetworkPlaceholder: "Network your safe is deployed to",
          invalidChainConfig: "Can not use Safe: No Safe supported chains are configured in App",
          failedToConnect: "Could not connect to Safe. Make sure safe address and network are correct.",
          failedToSwitch: "Failed to switch network",
          switchNetwork: "Switch Network",
          switchingNetwork: "Switching Network",
          connectToSafe: "Connect to Safe",
          connecting: "Connecting",
          mainnets: "Mainnets",
          testnets: "Testnets",
          safeAddress: "Safe Address"
        }
      },
      coinbaseWallet: extensionAndQRScanScreens("Coinbase"),
      metamaskWallet: extensionAndQRScanScreens("MetaMask"),
      okxWallet: extensionAndQRScanScreens("OKX"),
      phantomWallet: extensionAndQRScanScreens("Phantom"),
      xdefiWallet: extensionAndQRScanScreens("XDEFI"),
      rainbowWallet: extensionAndQRScanScreens("Rainbow"),
      trustWallet: extensionAndQRScanScreens("Trust"),
      zerionWallet: extensionAndQRScanScreens("Zerion"),
      coreWallet: extensionAndQRScanScreens("Core"),
      oneKeyWallet: extensionAndQRScanScreens("OneKey"),
      cryptoDefiWallet: extensionAndQRScanScreens("Crypto Defi"),
      rabbyWallet: extensionAndQRScanScreens("Rabby"),
      coin98Wallet: extensionAndQRScanScreens("Coin98"),
      paperWallet: {
        signIn: "Sign in",
        signInWithGoogle: "Sign in with Google",
        emailPlaceholder: "Enter your email address",
        submitEmail: "Continue",
        invalidEmail: "Invalid email address",
        emailRequired: "Email address is required",
        googleLoginScreen: {
          title: "Sign in",
          instruction: "Select your Google account in the pop-up",
          failed: "Failed to sign in",
          retry: "Retry"
        },
        emailLoginScreen: {
          title: "Sign in",
          enterCodeSendTo: "Enter the verification code sent to",
          // Enter the verification code sent to + <email>
          newDeviceDetected: "New device detected",
          enterRecoveryCode: "Enter the recovery code emailed to you when you first signed up",
          invalidCode: "Invalid verification code",
          invalidCodeOrRecoveryCode: "Invalid verification code or Recovery code",
          verify: "Verify",
          failedToSendCode: "Failed to send verification code",
          sendingCode: "Sending verification code",
          resendCode: "Resend verification code"
        }
      },
      embeddedWallet: {
        signInWithGoogle: "Sign in with Google",
        signInWithFacebook: "Sign in with Facebook",
        signInWithApple: "Sign in with Apple",
        emailPlaceholder: "Enter your email address",
        submitEmail: "Continue",
        signIn: "Sign in",
        emailRequired: "Email address is required",
        invalidEmail: "Invalid email address",
        maxAccountsExceeded: "Maximum number of accounts exceeded. Please notify the app developer.",
        socialLoginScreen: {
          title: "Sign in",
          instruction: "Sign into your account in the pop-up",
          failed: "Failed to sign in",
          retry: "Retry"
        },
        emailLoginScreen: {
          title: "Sign in",
          enterCodeSendTo: "Enter the verification code sent to",
          newDeviceDetected: "New device detected",
          enterRecoveryCode: "Enter the recovery code emailed to you when you first signed up",
          invalidCode: "Invalid verification code",
          invalidCodeOrRecoveryCode: "Invalid verification code or Recovery code",
          verify: "Verify",
          failedToSendCode: "Failed to send verification code",
          sendingCode: "Sending verification code",
          resendCode: "Resend verification code"
        },
        createPassword: {
          title: "Create Password",
          instruction: "Set a password for your account. You will need this password when connecting from a new device.",
          saveInstruction: "Make sure to save it",
          inputPlaceholder: "Enter your password",
          confirmation: "I have saved my password",
          submitButton: "Set Password",
          failedToSetPassword: "Failed to set password"
        },
        enterPassword: {
          title: "Enter Password",
          instruction: "Enter the password for your account",
          inputPlaceholder: "Enter your password",
          submitButton: "Verify",
          wrongPassword: "Wrong password"
        }
      },
      magicLink: {
        signIn: "Sign in",
        loginWith: "Login with",
        submitEmail: "Continue",
        loginWithEmailOrPhone: "Login with email or phone number",
        emailOrPhoneRequired: "email or phone number is required",
        loginWithPhone: "Login with phone number",
        phoneRequired: "phone number is required",
        invalidEmail: "Invalid email address",
        invalidPhone: "Invalid phone number",
        invalidEmailOrPhone: "Invalid email address or phone number",
        countryCodeMissing: "Phone number must start with a country code",
        emailPlaceholder: "Enter your email address",
        emailRequired: "Email address is required"
      },
      localWallet: {
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        enterYourPassword: "Enter your password",
        warningScreen: {
          title: "Warning",
          warning: "Your current wallet will be deleted if you create a new wallet. Backup wallet to your device before creating a new wallet",
          backupWallet: "Backup Wallet"
        },
        reconnectScreen: {
          title: "Connect to saved wallet",
          savedWallet: "Saved Wallet",
          continue: "Continue",
          createNewWallet: "Create a new wallet"
        },
        createScreen: {
          instruction: "Choose a password for your wallet. You'll be able to access and export this wallet with the same password",
          importWallet: "Import Wallet",
          createNewWallet: "Create new wallet",
          connecting: "Connecting"
        },
        exportScreen: {
          description1: "This will download a JSON file containing the wallet information onto your device encrypted with the password",
          description2: "You can use this JSON file to import the account in MetaMask using the same password",
          walletAddress: "Wallet Address",
          download: "Download",
          title: "Backup Wallet"
        },
        importScreen: {
          title: "Import Wallet",
          description1: "The application can authorize any transactions on behalf of the wallet without any approvals",
          description2: "We recommend only connecting to trusted applications",
          import: "Import",
          uploadJSON: "Please upload a JSON file",
          uploadedSuccessfully: "Uploaded successfully"
        }
      },
      frameWallet: {
        ...extensionAndQRScanScreens("Frame"),
        connectionFailedScreen: {
          title: "Failed to connect to Frame",
          description: "Make sure the desktop app is installed and running. You can download Frame from the link below. Make sure to refresh this page once Frame is running.",
          downloadFrame: "Download Frame",
          supportLink: "Still having troubles connecting?"
        }
      }
    }
  };
}

/**
 * Calling this function will return the default English locale object to be set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) to localize the thirdweb components.
 *
 * You can also overrides parts of the default locale object by passing an object with the same structure as the default locale object and only those parts will be overridden.
 *
 * @example
 * ### Use default Locale
 * ```tsx
 * const english = en();
 * ```
 *
 * ### Override Locale
 * ```ts
 * const english = en({
 *  connectWallet: {
 *    signIn: "Sign in!"
 *  }
 * })
 * ```
 *
 * Pass it to [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)'s `locale` prop to localize the thirdweb components.
 *
 * ```tsx
 * function Example() {
 *   return (
 *      <ThirdwebProvider locale={english}>
 *        <App />
 *      </ThirdwebProvider>
 *    )
 * }
 * ```
 *
 * @locale
 */
function en(overrides) {
  const defaultObj = enDefault();
  if (!overrides) {
    return defaultObj;
  }
  return immutableOverride(defaultObj, overrides);
}

const ThirdwebLocaleContext = /* @__PURE__ */(() => /*#__PURE__*/createContext(enDefault()))();
function useTWLocale() {
  return useContext(ThirdwebLocaleContext);
}

const WalletModalOpen = /* @__PURE__ */createContext(false);
const SetWalletModalOpen = /* @__PURE__ */createContext(undefined);
const ModalConfigCtx = /* @__PURE__ */createContext({
  title: "",
  theme: "dark",
  data: undefined,
  modalSize: "wide"
});
const SetModalConfigCtx = /* @__PURE__ */createContext(() => {});
const WalletUIStatesProvider = props => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const _isMobile = isMobile();
  const locale = useTWLocale();
  const [modalConfig, setModalConfig] = useState({
    title: props.title || locale.connectWallet.defaultModalTitle,
    theme: props.theme || "dark",
    data: undefined,
    modalSize: (_isMobile ? "compact" : props.modalSize) || "wide",
    termsOfServiceUrl: props.termsOfServiceUrl,
    privacyPolicyUrl: props.privacyPolicyUrl,
    welcomeScreen: props.welcomeScreen,
    titleIconUrl: props.titleIconUrl,
    isEmbed: props.isEmbed,
    auth: props.auth,
    onConnect: props.onConnect
  });
  return /*#__PURE__*/jsx(WalletModalOpen.Provider, {
    value: isWalletModalOpen,
    children: /*#__PURE__*/jsx(SetWalletModalOpen.Provider, {
      value: setIsWalletModalOpen,
      children: /*#__PURE__*/jsx(ModalConfigCtx.Provider, {
        value: modalConfig,
        children: /*#__PURE__*/jsx(SetModalConfigCtx.Provider, {
          value: setModalConfig,
          children: props.children
        })
      })
    })
  });
};

/**
 * Check if the [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal is open or not
 *
 * @example
 * ```tsx
 * const isOpen = useIsWalletModalOpen();
 * ```
 *
 * @returns `true` if the [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) modal is open, `false` otherwise
 * @connectWallet
 */
const useIsWalletModalOpen = () => {
  return useContext(WalletModalOpen);
};

/**
 * Open or close the [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal
 *
 * @example
 * ```tsx
 * const setIsWalletModalOpen = useSetIsWalletModalOpen();
 *
 * function openModal() {
 *  setIsWalletModalOpen(true);
 * }
 *
 * function closeModal() {
 *  setIsWalletModalOpen(false);
 * }
 *
 * return (
 *   <div>
 *    <button onClick={openModal}>Open Modal</button>
 *    <button onClick={closeModal}>Close Modal</button>
 *   </div>
 * )
 * ```
 *
 * @returns Function to open or close the modal
 * @connectWallet
 */
const useSetIsWalletModalOpen = () => {
  const context = useContext(SetWalletModalOpen);
  if (context === undefined) {
    throw new Error("useSetWalletModalOpen must be used within a ThirdwebProvider");
  }
  return context;
};
/**
 * Set Modal config for the [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal.
 * This is useful if you want to open the Modal using the `useSetIsWalletModalOpen` hook and want to configure the Modal before opening it.
 *
 * @example
 * ```tsx
 * function Example() {
 *  const setModalConfig = useSetWalletModalConfig();
 *  const setIsWalletModalOpen = useSetIsWalletModalOpen();
 *
 *  function openModal() {
 *    setIsWalletModalOpen(true);
 *    setModalConfig({
 *      modalSize: "compact",
 *      theme: "light"
 *    })
 *  }
 *
 *  return <button onClick={openModal}> Open Modal </button>
 * }
 * ```
 *
 * @returns Function to set the Modal config
 *
 * The function takes an object with the following properties
 *
 * ### title
 * Title of the Modal
 *
 * ### theme
 * theme to use in Modal
 *
 * By default it is set to "dark" if `theme` is not set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
 * If a `theme` is set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) then that theme will be used by default
 *
 * theme can be set to either `"dark"` or `"light"` or a custom theme object. You can also import `lightTheme` or `darkTheme` functions from `@thirdweb-dev/react` to use the default themes as base and overrides parts of it.
 *
 * ```ts
 * import { lightTheme } from "@thirdweb-dev/react";
 * const customTheme = lightTheme({
 *  colors: {
 *    modalBg: 'red'
 *  }
 * })
 * ```
 *
 * ### modalSize
 * Set the size of the modal - `compact` or `wide` on desktop
 *
 * Modal size is always `compact` on mobile
 *
 * By default it is `"wide"` for desktop.
 *
 * ### termsOfServiceUrl
 * URL of the "terms of service" page
 *
 * If provided, Modal will show a Terms of Service message at the bottom with below link
 *
 * ### privacyPolicyUrl
 * URL of the "privacy policy" page
 *
 * If provided, Modal will show a Privacy Policy message at the bottom with below link
 *
 * ### welcomeScreen
 * Customize the welcome screen. This is only applicable when `modalSize` is set to "wide".
 * On "wide" Modal size, a welcome screen is shown on the right side of the modal.
 *
 * This screen can be customized in two ways
 *
 * #### 1. Customize Metadata and Image
 *
 * ```tsx
 * function Example() {
 *  const setModalConfig = useSetWalletModalConfig();
 *  const setIsWalletModalOpen = useSetIsWalletModalOpen();
 *
 *  function openModal() {
 *    setIsWalletModalOpen(true);
 *    setModalConfig({
 *      welcomeScreen: {
 *        title: "your title",
 *        subtitle: "your subtitle",
 *        img: {
 *          src: "https://your-image-url.png",
 *          width: 300,
 *          height: 50,
 *        }
 *      }
 *    })
 *  }
 *
 *  return <button onClick={openModal}> Open Modal </button>
 * }
 * ```
 *
 * #### 2. Render Custom Component
 *
 * ```tsx
 * function Example() {
 *  const setModalConfig = useSetWalletModalConfig();
 *  const setIsWalletModalOpen = useSetIsWalletModalOpen();
 *
 *  function openModal() {
 *    setIsWalletModalOpen(true);
 *    setModalConfig({
 *      welcomeScreen() {
 *       return <YourCustomComponent />
 *      }
 *    })
 *  }
 *
 *  return <button onClick={openModal}> Open Modal </button>
 * }
 * ```
 *
 * ### titleIconUrl
 * Replace the thirdweb icon next to modalTitle and set your own iconUrl
 *
 * ### auth
 * The object contains the following properties to customize the authentication
 * - `loginOptional` - specify whether signing in is optional or not. By default it is `false` ( Sign in is required ) if `authConfig` is set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
 * - `onLogin` - Callback to be called after user signs in with their wallet
 * - `onLogout` - Callback to be called after user signs out
 *
 * ### onConnect
 * Callback to be called on successful connection of wallet
 *
 *
 * ```tsx
 * function Example() {
 *  const setModalConfig = useSetWalletModalConfig();
 *  const setIsWalletModalOpen = useSetIsWalletModalOpen();
 *
 *  function openModal() {
 *    setIsWalletModalOpen(true);
 *    setModalConfig({
 *      onConnect() {
 *        console.log("wallet connected")
 *      }
 *    })
 *  }
 *
 *  return <button onClick={openModal}> Open Modal </button>
 * }
 * ```
 *
 * Note that this does not include the sign in, If you want to call a callback after user connects AND signs in with their wallet, use `auth.onLogin` prop instead
 *
 * ```tsx
 * function Example() {
 *  const setModalConfig = useSetWalletModalConfig();
 *  const setIsWalletModalOpen = useSetIsWalletModalOpen();
 *
 *  function openModal() {
 *    setIsWalletModalOpen(true);
 *    setModalConfig({
 *      auth: {
 *        onLogin() {
 *           console.log("wallet connected and signed in")
 *        }
 *      }
 *    })
 *  }
 *
 *  return <button onClick={openModal}> Open Modal </button>
 * }
 * ```
 */
const useSetWalletModalConfig = () => {
  const context = useContext(SetModalConfigCtx);
  const _isMobile = isMobile();
  const locale = useTWLocale();
  if (context === undefined) {
    throw new Error("useSetWalletModalConfig must be used within a ThirdwebProvider");
  }
  return value => {
    const {
      title,
      theme,
      modalSize,
      ...rest
    } = value;
    return context({
      title: title || locale.connectWallet.defaultModalTitle,
      data: undefined,
      theme: theme || "dark",
      modalSize: (_isMobile ? "compact" : modalSize) || "wide",
      ...rest
    });
  };
};

const Spinner = props => {
  const theme = useCustomTheme();
  return /*#__PURE__*/jsx(Svg, {
    style: {
      width: iconSize[props.size] + "px",
      height: iconSize[props.size] + "px"
    },
    viewBox: "0 0 50 50",
    children: /*#__PURE__*/jsx(Circle, {
      cx: "25",
      cy: "25",
      r: "20",
      fill: "none",
      stroke: theme.colors[props.color],
      strokeWidth: "4"
    })
  });
};

// animations
const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;
const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const Svg = /* @__PURE__ */StyledSvg({
  animation: `${rotateAnimation} 2s linear infinite`,
  width: "1em",
  height: "1em"
});
const Circle = /* @__PURE__ */StyledCircle({
  strokeLinecap: "round",
  animation: `${dashAnimation} 1.5s ease-in-out infinite`
});

const TWIcon = props => {
  return /*#__PURE__*/jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 27 16",
    fill: "none",
    children: [/*#__PURE__*/jsx("path", {
      d: "M13.6891 0C13.8482 0.0317795 13.9983 0.0957213 14.1292 0.1875C14.2768 0.297724 14.39 0.444328 14.4563 0.611413C14.8718 1.60272 15.2885 2.59348 15.7064 3.5837L17.0986 6.89022C17.3418 7.46902 17.5832 8.0462 17.8298 8.62337C17.8823 8.74121 17.9094 8.86791 17.9094 8.99592C17.9094 9.12393 17.8823 9.25064 17.8298 9.36848C17.1243 11.0446 16.4182 12.7217 15.7115 14.4C15.654 14.5572 15.5516 14.696 15.4157 14.8009C15.2799 14.9057 15.1161 14.9724 14.9426 14.9935C14.7283 15.0315 14.5068 14.9982 14.3153 14.899C14.1238 14.7998 13.9741 14.6409 13.8912 14.4489C13.4939 13.5196 13.1052 12.587 12.713 11.6543C12.0463 10.075 11.3813 8.49456 10.718 6.91304C10.1255 5.50543 9.5336 4.09891 8.94223 2.69348C8.7453 2.22717 8.55522 1.75761 8.34973 1.29293C8.29321 1.16705 8.26644 1.03087 8.27132 0.894047C8.27619 0.757221 8.31259 0.623087 8.37794 0.501137C8.44329 0.379187 8.53599 0.272402 8.64948 0.188339C8.76297 0.104275 8.89448 0.0449885 9.03471 0.0146733C9.05183 0.0146733 9.06724 0.0048913 9.08437 0H13.6891Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx("path", {
      d: "M5.42129 0C5.47438 0.0146739 5.52575 0.0260873 5.57712 0.0423917C5.71022 0.0819151 5.83236 0.14928 5.93458 0.239555C6.0368 0.329829 6.11653 0.440727 6.16791 0.56413C6.62457 1.63913 7.07779 2.71413 7.52759 3.78913C7.97739 4.86413 8.43404 5.95109 8.89755 7.05L9.57053 8.64456C9.62093 8.75806 9.6469 8.88004 9.6469 9.00326C9.6469 9.12648 9.62093 9.24846 9.57053 9.36196C9.32052 9.9587 9.06936 10.5565 8.81706 11.1554L7.43512 14.431C7.36255 14.6012 7.23853 14.7471 7.07879 14.8501C6.91904 14.9532 6.73075 15.0087 6.5378 15.0098C6.33426 15.0125 6.13478 14.9554 5.96654 14.8463C5.7983 14.7372 5.6695 14.5814 5.59767 14.4C5.16956 13.3712 4.74145 12.344 4.30307 11.3168L2.54781 7.14946L0.763448 2.91033C0.539118 2.37554 0.314789 1.83913 0.0784718 1.30435C-0.0212674 1.08161 -0.026107 0.830668 0.0649731 0.604591C0.156053 0.378515 0.335913 0.195028 0.566519 0.0929347C0.650596 0.0604572 0.73701 0.0337587 0.825096 0.0130438L5.42129 0Z",
      fill: "currentColor"
    }), /*#__PURE__*/jsx("path", {
      d: "M26.0098 9.14348C25.8865 9.54782 25.7067 9.92935 25.5355 10.3239C25.0708 11.4315 24.6033 12.5397 24.133 13.6484C24.0251 13.9109 23.9155 14.1554 23.811 14.4114C23.7364 14.591 23.605 14.744 23.4351 14.8495C23.2651 14.9549 23.065 15.0075 22.8623 15C22.6689 14.995 22.4813 14.9353 22.3237 14.8284C22.166 14.7216 22.0453 14.5724 21.977 14.4C21.2989 12.7848 20.6196 11.1696 19.9392 9.55435C19.3524 8.16522 18.7633 6.77283 18.172 5.37717C17.6011 4.01087 17.0303 2.64456 16.4595 1.27826C16.4042 1.15338 16.3784 1.01844 16.3839 0.882999C16.3895 0.747561 16.4262 0.614939 16.4916 0.494528C16.5569 0.374117 16.6493 0.268861 16.7621 0.186219C16.875 0.103577 17.0055 0.0455688 17.1445 0.0163041L17.201 0H21.8023L21.8451 0.0130438C22.0073 0.0455066 22.158 0.116718 22.2833 0.219974C22.4085 0.32323 22.504 0.455132 22.5609 0.60326C22.8281 1.23913 23.0964 1.87554 23.3658 2.5125C24.0679 4.18206 24.77 5.85163 25.4721 7.52119C25.657 7.96141 25.8625 8.39348 26.0132 8.84511L26.0098 9.14348Z",
      fill: "currentColor"
    })]
  });
};

const TextDivider = props => {
  return /*#__PURE__*/jsx(TextDividerEl, {
    style: {
      paddingBlock: props.py ? spacing[props.py] : 0
    },
    children: /*#__PURE__*/jsxs("span", {
      children: [" ", props.text]
    })
  });
};
const TextDividerEl = /* @__PURE__ */StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    display: "flex",
    alignItems: "center",
    color: theme.colors.secondaryText,
    fontSize: fontSize.sm,
    "&::before, &::after": {
      content: '""',
      flex: 1,
      borderBottom: `1px solid ${theme.colors.separatorLine}`
    },
    span: {
      margin: "0 16px"
    }
  };
});

function TOS(props) {
  const {
    termsOfServiceUrl,
    privacyPolicyUrl
  } = props;
  const locale = useTWLocale().connectWallet.agreement;
  if (!termsOfServiceUrl && !privacyPolicyUrl) {
    return null;
  }
  const bothGiven = termsOfServiceUrl && privacyPolicyUrl;
  return /*#__PURE__*/jsx(Container, {
    flex: "row",
    center: "x",
    children: /*#__PURE__*/jsxs(Text, {
      size: "xs",
      multiline: true,
      balance: true,
      inline: true,
      center: true,
      style: {
        maxWidth: "250px"
      },
      children: [locale.prefix, " ", termsOfServiceUrl && /*#__PURE__*/jsxs(Link, {
        inline: true,
        size: "xs",
        href: termsOfServiceUrl,
        target: "_blank",
        style: {
          whiteSpace: "nowrap"
        },
        children: [" ", locale.termsOfService, " "]
      }), bothGiven && locale.and + " ", privacyPolicyUrl && /*#__PURE__*/jsx(Link, {
        inline: true,
        size: "xs",
        href: privacyPolicyUrl,
        target: "_blank",
        children: locale.privacyPolicy
      })]
    })
  });
}

const WalletSelector = props => {
  const modalConfig = useContext(ModalConfigCtx);
  const isCompact = modalConfig.modalSize === "compact";
  const {
    termsOfServiceUrl,
    privacyPolicyUrl
  } = modalConfig;
  const [isWalletGroupExpanded, setIsWalletGroupExpanded] = useState(false);
  const disconnect = useDisconnect();
  const connectionStatus = useConnectionStatus();
  const locale = useTWLocale().connectWallet;
  const localWalletConfig = props.walletConfigs.find(w => w.id === walletIds.localWallet);
  const nonLocalWalletConfigs = props.walletConfigs.filter(w => w.id !== walletIds.localWallet);
  const socialWallets = nonLocalWalletConfigs.filter(w => w.category === "socialLogin");
  const eoaWallets = sortWalletConfigs(nonLocalWalletConfigs.filter(w => w.category !== "socialLogin"));
  const continueAsGuest = localWalletConfig && /*#__PURE__*/jsx(Button, {
    fullWidth: true,
    variant: isCompact ? "outline" : "link",
    style: !isCompact ? {
      textAlign: "left",
      justifyContent: "flex-start"
    } : undefined,
    onClick: () => {
      props.selectWallet(localWalletConfig);
    },
    "data-test": "continue-as-guest-button",
    children: locale.continueAsGuest
  });

  // prevent accidental clicks on the TW icon when clicking on back icon from previous screen
  const enableTWIconLink = useRef(false);
  useEffect(() => {
    setTimeout(() => {
      enableTWIconLink.current = true;
    }, 1000);
  }, []);
  const twTitle = /*#__PURE__*/jsxs(Container, {
    gap: "xxs",
    center: "y",
    flex: "row",
    children: [modalConfig.titleIconUrl === undefined ? /*#__PURE__*/jsx(Link, {
      color: "primaryText",
      hoverColor: "accentText",
      target: "_blank",
      href: "https://thirdweb.com/connect?utm_source=cw",
      style: {
        display: "flex",
        alignItems: "center"
      },
      onClick: e => {
        if (!enableTWIconLink.current) {
          e.preventDefault();
        }
      },
      children: /*#__PURE__*/jsx(TWIcon, {
        size: iconSize.md
      })
    }) : modalConfig.titleIconUrl === "" ? null : /*#__PURE__*/jsx(Img, {
      src: modalConfig.titleIconUrl,
      width: iconSize.md,
      height: iconSize.md
    }), /*#__PURE__*/jsxs(ModalTitle, {
      children: [" ", props.title, " "]
    })]
  });
  const handleSelect = async wallet => {
    if (connectionStatus !== "disconnected") {
      await disconnect();
    }
    props.selectWallet(wallet);
  };
  const connectAWallet = /*#__PURE__*/jsxs(Button, {
    fullWidth: true,
    variant: "outline",
    style: {
      display: "flex",
      justifyContent: "center",
      gap: spacing.sm,
      padding: spacing.md
    },
    onClick: () => {
      setIsWalletGroupExpanded(true);
    },
    children: [/*#__PURE__*/jsx(Container, {
      flex: "row",
      gap: "xxs",
      children: eoaWallets.slice(0, 2).map(w => /*#__PURE__*/jsx(Img, {
        width: iconSize.sm,
        height: iconSize.sm,
        src: w.meta.iconURL
      }, w.id))
    }), locale.connectAWallet]
  });
  const newToWallets = /*#__PURE__*/jsxs(Container, {
    flex: "row",
    style: {
      justifyContent: "space-between"
    },
    children: [/*#__PURE__*/jsx(Text, {
      color: "secondaryText",
      size: "sm",
      weight: 500,
      children: locale.newToWallets
    }), /*#__PURE__*/jsx(Link, {
      weight: 500,
      size: "sm",
      target: "_blank",
      href: "https://blog.thirdweb.com/web3-wallet/",
      children: locale.getStarted
    })]
  });
  const tos = termsOfServiceUrl || privacyPolicyUrl ? /*#__PURE__*/jsx(TOS, {
    termsOfServiceUrl: termsOfServiceUrl,
    privacyPolicyUrl: privacyPolicyUrl
  }) : undefined;
  let topSection;
  let bottomSection;

  // wide modal
  if (!isCompact) {
    topSection = /*#__PURE__*/jsx(WalletSelection, {
      walletConfigs: nonLocalWalletConfigs,
      selectWallet: handleSelect,
      selectUIProps: props.selectUIProps
    });
    if (continueAsGuest) {
      bottomSection = /*#__PURE__*/jsx(ScreenBottomContainer, {
        children: continueAsGuest
      });
    }
  }

  // compact
  else {
    // no social logins
    if (socialWallets.length === 0) {
      topSection = /*#__PURE__*/jsx(WalletSelection, {
        walletConfigs: nonLocalWalletConfigs,
        selectWallet: handleSelect,
        selectUIProps: props.selectUIProps
      });
      bottomSection = /*#__PURE__*/jsxs(Fragment, {
        children: [/*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
          flex: "column",
          p: "lg",
          gap: "lg",
          children: [newToWallets, continueAsGuest]
        }), !continueAsGuest && /*#__PURE__*/jsx(Line, {}), tos && /*#__PURE__*/jsx(Container, {
          px: "md",
          style: {
            paddingBottom: spacing.md,
            paddingTop: continueAsGuest ? 0 : spacing.md
          },
          children: tos
        })]
      });
    }

    // social logins
    else {
      // not expanded state
      if (!isWalletGroupExpanded) {
        topSection = /*#__PURE__*/jsxs(Container, {
          px: "xs",
          children: [/*#__PURE__*/jsx(WalletSelection, {
            walletConfigs: socialWallets,
            selectWallet: handleSelect,
            selectUIProps: props.selectUIProps
          }), eoaWallets.length > 0 && /*#__PURE__*/jsxs(Fragment, {
            children: [/*#__PURE__*/jsx(TextDivider, {
              text: locale.or
            }), /*#__PURE__*/jsx(Spacer, {
              y: "lg"
            })]
          })]
        });

        // only social login - no eoa wallets
        if (eoaWallets.length === 0) {
          bottomSection = tos || continueAsGuest ? /*#__PURE__*/jsxs(Fragment, {
            children: [/*#__PURE__*/jsx(Spacer, {
              y: "md"
            }), /*#__PURE__*/jsx(Line, {}), continueAsGuest && /*#__PURE__*/jsxs(Container, {
              p: "lg",
              children: [" ", continueAsGuest]
            }), tos && /*#__PURE__*/jsxs(Container, {
              p: "md",
              children: [" ", tos, " "]
            })]
          }) : /*#__PURE__*/jsx(Spacer, {
            y: "sm"
          });
        }

        // social login + eoa wallets
        else {
          // social login + More than 1 eoa wallets
          if (eoaWallets.length > 1) {
            bottomSection = /*#__PURE__*/jsxs(Container, {
              flex: "column",
              gap: "sm",
              children: [/*#__PURE__*/jsxs(Container, {
                px: "lg",
                flex: "column",
                gap: "md",
                children: [connectAWallet, continueAsGuest]
              }), tos ? /*#__PURE__*/jsxs(Container, {
                p: "md",
                children: [" ", tos, " "]
              }) : /*#__PURE__*/jsx(Spacer, {
                y: "md"
              })]
            });
          }

          // social login + single eoa wallet
          else {
            bottomSection = /*#__PURE__*/jsxs(Fragment, {
              children: [/*#__PURE__*/jsx(Container, {
                px: "lg",
                children: /*#__PURE__*/jsx(WalletSelection, {
                  walletConfigs: eoaWallets,
                  selectWallet: handleSelect,
                  selectUIProps: props.selectUIProps
                })
              }), continueAsGuest && /*#__PURE__*/jsx(Container, {
                flex: "column",
                px: "lg",
                gap: "lg",
                children: continueAsGuest
              }), tos ? /*#__PURE__*/jsxs(Fragment, {
                children: [continueAsGuest ? /*#__PURE__*/jsx(Spacer, {
                  y: "md"
                }) : /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
                  p: "md",
                  children: [" ", tos, " "]
                })]
              }) : /*#__PURE__*/jsx(Fragment, {
                children: continueAsGuest && /*#__PURE__*/jsx(Spacer, {
                  y: "xl"
                })
              })]
            });
          }
        }
      }

      // expanded state
      else {
        topSection = /*#__PURE__*/jsx(WalletSelection, {
          walletConfigs: eoaWallets,
          selectWallet: handleSelect,
          selectUIProps: props.selectUIProps
        });
        bottomSection = /*#__PURE__*/jsx(ScreenBottomContainer, {
          children: newToWallets
        });
      }
    }
  }
  return /*#__PURE__*/jsxs(Container, {
    scrollY: true,
    flex: "column",
    animate: "fadein",
    fullHeight: true,
    children: [!modalConfig.isEmbed && /*#__PURE__*/jsx(Container, {
      p: "lg",
      style: {
        paddingBottom: spacing.md
      },
      children: isWalletGroupExpanded ? /*#__PURE__*/jsx(ModalHeader, {
        title: twTitle,
        onBack: () => {
          setIsWalletGroupExpanded(false);
        }
      }) : twTitle
    }), /*#__PURE__*/jsxs(Container, {
      expand: true,
      scrollY: true,
      px: "md",
      style: modalConfig.isEmbed ? {
        paddingTop: spacing.lg
      } : {
        paddingTop: "2px"
      },
      children: [modalConfig.isEmbed && isWalletGroupExpanded && /*#__PURE__*/jsx(Container, {
        flex: "row",
        center: "y",
        style: {
          padding: spacing.sm,
          paddingTop: 0
        },
        children: /*#__PURE__*/jsxs(IconButton, {
          onClick: () => {
            setIsWalletGroupExpanded(false);
          },
          style: {
            gap: spacing.xxs,
            transform: `translateX(-${spacing.xs})`,
            paddingBlock: spacing.xxs,
            paddingRight: spacing.xs
          },
          children: [/*#__PURE__*/jsx(ChevronLeftIcon, {
            width: iconSize.sm,
            height: iconSize.sm
          }), locale.goBackButton]
        })
      }), topSection]
    }), bottomSection]
  });
};
const WalletSelection = props => {
  const modalConfig = useContext(ModalConfigCtx);
  const setModalConfig = useContext(SetModalConfigCtx);
  const walletConfigs = sortWalletConfigs(props.walletConfigs);
  return /*#__PURE__*/jsx(WalletList, {
    children: walletConfigs.map(walletConfig => {
      return /*#__PURE__*/jsx("li", {
        "data-full-width": !!walletConfig.selectUI,
        children: walletConfig.selectUI ? /*#__PURE__*/jsx(walletConfig.selectUI, {
          modalSize: modalConfig.modalSize,
          theme: typeof modalConfig.theme === "string" ? modalConfig.theme : modalConfig.theme.type,
          supportedWallets: props.walletConfigs,
          onSelect: data => {
            props.selectWallet(walletConfig);
            setModalConfig(config => ({
              ...config,
              data
            }));
          },
          walletConfig: walletConfig,
          connect: options => props.selectUIProps.connect(walletConfig, options),
          connectionStatus: props.selectUIProps.connectionStatus,
          createWalletInstance: () => props.selectUIProps.createWalletInstance(walletConfig),
          setConnectedWallet: props.selectUIProps.setConnectedWallet,
          setConnectionStatus: props.selectUIProps.setConnectionStatus,
          connectedWallet: props.selectUIProps.connectedWallet,
          connectedWalletAddress: props.selectUIProps.connectedWalletAddress
        }) : /*#__PURE__*/jsx(WalletEntryButton, {
          walletConfig: walletConfig,
          selectWallet: () => {
            props.selectWallet(walletConfig);
          }
        })
      }, walletConfig.id);
    })
  });
};
function WalletEntryButton(props) {
  const {
    walletConfig,
    selectWallet
  } = props;
  const isRecommended = walletConfig.recommended;
  const locale = useTWLocale().connectWallet;
  return /*#__PURE__*/jsxs(WalletButton, {
    type: "button",
    onClick: () => {
      selectWallet();
    },
    children: [/*#__PURE__*/jsx(Img, {
      src: walletConfig.meta.iconURL,
      width: iconSize.xl,
      height: iconSize.xl,
      loading: "eager"
    }), /*#__PURE__*/jsxs(Container, {
      flex: "column",
      gap: "xxs",
      expand: true,
      children: [/*#__PURE__*/jsx(Text, {
        color: "primaryText",
        weight: 600,
        children: walletConfig.meta.name
      }), isRecommended && /*#__PURE__*/jsx(Text, {
        size: "sm",
        children: locale.recommended
      }), !isRecommended && walletConfig.isInstalled && walletConfig.isInstalled() && /*#__PURE__*/jsx(Text, {
        size: "sm",
        children: locale.installed
      })]
    })]
  });
}
const WalletList = /* @__PURE__ */StyledUl({
  all: "unset",
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
  boxSizing: "border-box",
  overflowY: "auto",
  flex: 1,
  ...noScrollBar,
  // to show the box-shadow of inputs that overflows
  padding: "2px",
  margin: "-2px",
  marginBottom: 0,
  paddingBottom: spacing.lg
});
const WalletButton = /* @__PURE__ */StyledButton(() => {
  const theme = useCustomTheme();
  return {
    all: "unset",
    display: "flex",
    alignItems: "center",
    gap: spacing.sm,
    cursor: "pointer",
    boxSizing: "border-box",
    width: "100%",
    color: theme.colors.secondaryText,
    position: "relative",
    borderRadius: radius.md,
    padding: `${spacing.xs} ${spacing.xs}`,
    "&:hover": {
      backgroundColor: theme.colors.walletSelectorButtonHoverBg,
      transform: "scale(1.01)"
    },
    transition: "background-color 200ms ease, transform 200ms ease"
  };
});
function sortWalletConfigs(walletConfigs) {
  return walletConfigs
  // show the installed wallets first
  .sort((a, b) => {
    const aInstalled = a.isInstalled ? a.isInstalled() : false;
    const bInstalled = b.isInstalled ? b.isInstalled() : false;
    if (aInstalled && !bInstalled) {
      return -1;
    }
    if (!aInstalled && bInstalled) {
      return 1;
    }
    return 0;
  })
  // show the recommended wallets even before that
  .sort((a, b) => {
    if (a.recommended && !b.recommended) {
      return -1;
    }
    if (!a.recommended && b.recommended) {
      return 1;
    }
    return 0;
  })
  // show the wallets with selectUI first before others
  .sort((a, b) => {
    if (a.selectUI && !b.selectUI) {
      return -1;
    }
    if (!a.selectUI && b.selectUI) {
      return 1;
    }
    return 0;
  });
}

const Label = /* @__PURE__ */StyledLabel(props => {
  const theme = useCustomTheme();
  return {
    fontSize: fontSize.sm,
    color: theme.colors[props.color || "primaryText"],
    display: "block",
    fontWeight: 500
  };
});
const Input = /* @__PURE__ */StyledInput(props => {
  const theme = useCustomTheme();
  return {
    fontSize: fontSize.md,
    display: "block",
    padding: props.sm ? spacing.sm : fontSize.sm,
    boxSizing: "border-box",
    width: "100%",
    outline: "none",
    border: "none",
    borderRadius: "6px",
    color: theme.colors.primaryText,
    WebkitAppearance: "none",
    appearance: "none",
    background: "transparent",
    "&::placeholder": {
      color: theme.colors.secondaryText
    },
    boxShadow: `0 0 0 1.5px ${props.variant === "outline" ? theme.colors.borderColor : "transparent"}`,
    "&:-webkit-autofill": {
      WebkitTextFillColor: theme.colors.primaryText,
      WebkitBoxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset !important`,
      boxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset !important`,
      transition: "background-color 5000s ease-in-out 0s"
    },
    "&:-webkit-autofill:focus": {
      WebkitBoxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset, 0 0 0 2px ${theme.colors.accentText} !important`,
      boxShadow: `0 0 0px 1000px ${theme.colors.inputAutofillBg} inset, 0 0 0 2px ${theme.colors.accentText} !important`
    },
    "&:focus": {
      boxShadow: `0 0 0 2px ${theme.colors.accentText}`
    },
    "&:not([type='password'])": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    "&[data-error='true']": {
      boxShadow: `0 0 0 2px ${theme.colors.danger} !important`
    },
    "&[disabled]": {
      cursor: "not-allowed"
    },
    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    },
    "&[type='number']": {
      appearance: "none",
      MozAppearance: "textfield"
    }
  };
});

// for rendering a input and a button side by side
const InputContainer = /* @__PURE__ */StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    display: "flex",
    borderRadius: radius.sm,
    boxShadow: `0 0 0px 1.5px ${theme.colors.borderColor}`,
    "&:focus-within": {
      boxShadow: `0 0 0px 2px ${theme.colors.accentText}`
    },
    "input:focus": {
      boxShadow: "none"
    },
    // show error ring on container instead of input
    "&[data-error='true']": {
      boxShadow: `0 0 0px 2px ${theme.colors.danger}`
    }
  };
});

export { StyledButton as A, Button as B, Container as C, ScreenBottomContainer as D, StyledP as E, shadow as F, noScrollBar as G, CustomThemeProvider as H, Img as I, ModalTitle as J, StyledUl as K, Line as L, ModalHeader as M, Link as N, TOS as O, SetModalConfigCtx as P, WalletSelector as Q, WalletUIStatesProvider as R, Spacer as S, Text as T, ThirdwebLocaleContext as U, isAndroid as V, WalletEntryButton as W, isIOS as X, HelperLink as Y, WalletSelection as Z, StyledSelect as _, iconSize as a, StyledDiv as b, useTWLocale as c, ModalDescription as d, Spinner as e, Label as f, ModalConfigCtx as g, fontSize as h, isMobile as i, immutableOverride as j, darkTheme as k, lightTheme as l, en as m, useIsWalletModalOpen as n, useSetIsWalletModalOpen as o, useSetWalletModalConfig as p, TextDivider as q, radius as r, spacing as s, fadeInAnimation as t, useCustomTheme as u, Input as v, media as w, InputContainer as x, InputButton as y, IconButton as z };
