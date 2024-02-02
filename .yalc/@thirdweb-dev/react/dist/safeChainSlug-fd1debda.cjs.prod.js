'use strict';

var wallets = require('@thirdweb-dev/wallets');
var formElements = require('./formElements-c3eed36c.cjs.prod.js');
var React = require('react');
var react = require('@emotion/react');
var jsxRuntime = require('react/jsx-runtime');
var reactIcons = require('@radix-ui/react-icons');
var QRCodeUtil = require('qrcode');
var reactCore = require('@thirdweb-dev/react-core');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var QRCodeUtil__default = /*#__PURE__*/_interopDefault(QRCodeUtil);

function WalletLogoSpinner(props) {
  const loaderRadius = 20;
  const radiusFactor = 36 - loaderRadius;
  const dashArrayStart = 116 + radiusFactor;
  const dashArrayEnd = 245 + radiusFactor;
  const dashOffset = -1 * (360 + radiusFactor * 1.75);
  return /*#__PURE__*/jsxRuntime.jsx(LogoContainer, {
    "data-error": props.error,
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      "data-container": true,
      style: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /*#__PURE__*/jsxRuntime.jsxs("div", {
        "data-img-container": true,
        children: [/*#__PURE__*/jsxRuntime.jsx("svg", {
          viewBox: "0 0 110 110",
          style: {
            display: props.error ? "none" : "block"
          },
          children: /*#__PURE__*/jsxRuntime.jsx("rect", {
            x: "2",
            y: "2",
            width: "106",
            height: "106",
            rx: loaderRadius,
            strokeDasharray: `${dashArrayStart} ${dashArrayEnd}`,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
            fill: "none",
            strokeWidth: 4
          })
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
          src: props.iconUrl,
          width: "80",
          height: "80"
        })]
      })
    })
  });
}
const dashRotateAnimation = react.keyframes`
from {
  stroke-dashoffset: 0px;
}
`;
const shakeErrorAnimation = react.keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
const plusAnimation = react.keyframes`
0% {
  transform: scale(0.95);
}
100% {
  opacity: 0;
  transform: scale(1.4);
}
`;
const LogoContainer = /* @__PURE__ */formElements.StyledDiv(() => {
  const theme = formElements.useCustomTheme();
  return {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    borderRadius: formElements.radius.xl,
    "[data-img-container]": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    },
    "&[data-error='true'] [data-container]": {
      animation: `${shakeErrorAnimation} 0.25s linear`
    },
    "&[data-error='true'] [data-img-container]::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background: theme.colors.danger,
      animation: `${plusAnimation} 1.5s ease infinite`,
      borderRadius: "20px",
      zIndex: -1
    },
    svg: {
      position: "absolute",
      /* can't use inset because safari doesn't like it */
      left: "-8px",
      top: "-8px",
      width: "calc(100% + 16px)",
      height: "calc(100% + 16px)",
      animation: `${formElements.fadeInAnimation} 400ms ease`
    },
    img: {
      zIndex: 100
    },
    rect: {
      animation: `${dashRotateAnimation} 1.2s linear infinite`,
      stroke: theme.colors.accentText
    }
  };
});

const ConnectingScreen = props => {
  const {
    locale
  } = props;
  const modalConfig = React.useContext(formElements.ModalConfigCtx);
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    animate: "fadein",
    fullHeight: true,
    flex: "column",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      style: {
        paddingBottom: 0
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        title: props.walletName,
        onBack: props.hideBackButton ? undefined : props.onBack
      })
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      center: "y",
      expand: true,
      px: modalConfig.modalSize === "compact" ? "lg" : "xxl",
      relative: true,
      style: {
        paddingTop: 0
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        py: "3xl",
        children: /*#__PURE__*/jsxRuntime.jsx(WalletLogoSpinner, {
          error: props.errorConnecting,
          iconUrl: props.walletIconURL
        })
      }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        animate: "fadein",
        style: {
          animationDuration: "200ms"
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          center: true,
          color: "primaryText",
          size: "lg",
          weight: 600,
          children: props.errorConnecting ? locale.failed : locale.inProgress
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "md"
        }), !props.errorConnecting ? /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          balance: true,
          center: true,
          multiline: true,
          children: locale.instruction
        }) : /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          flex: "row",
          center: "x",
          animate: "fadein",
          children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Button, {
            fullWidth: true,
            variant: "accent",
            onClick: props.onRetry,
            style: {
              gap: formElements.spacing.xs,
              alignItems: "center"
            },
            children: [/*#__PURE__*/jsxRuntime.jsx(reactIcons.ReloadIcon, {
              width: formElements.iconSize.sm,
              height: formElements.iconSize.sm
            }), " ", locale.tryAgain]
          })
        })]
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      flex: "row",
      center: "x",
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
        variant: "link",
        onClick: props.onGetStarted,
        children: locale.getStartedLink
      })
    })]
  });
};

const QRCode = props => {
  const size = props.size || 310;
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center"
    },
    children: [props.qrCodeUri ? /*#__PURE__*/jsxRuntime.jsx(QRCodeContainer, {
      children: /*#__PURE__*/jsxRuntime.jsx(QRCodeRenderer, {
        uri: props.qrCodeUri,
        size: size + 20,
        ecl: "M",
        clearSize: props.QRIcon ? 70 : undefined
      })
    }) : /*#__PURE__*/jsxRuntime.jsxs(QRPlaceholder, {
      style: {
        width: `${size}px`,
        height: `${size}px`
      },
      children: [/*#__PURE__*/jsxRuntime.jsx("span", {
        "data-v1": true
      }), /*#__PURE__*/jsxRuntime.jsx("span", {
        "data-v2": true
      }), /*#__PURE__*/jsxRuntime.jsx("span", {
        "data-v3": true
      }), /*#__PURE__*/jsxRuntime.jsx("div", {})]
    }), props.QRIcon && /*#__PURE__*/jsxRuntime.jsx(IconContainer, {
      children: props.QRIcon
    })]
  });
};
const IconContainer = /* @__PURE__ */formElements.StyledDiv({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  zIndex: 1000
});
const QRCodeContainer = /* @__PURE__ */formElements.StyledDiv(() => {
  const theme = formElements.useCustomTheme();
  return {
    animation: `${formElements.fadeInAnimation} 600ms ease`,
    "--ck-qr-dot-color": theme.colors.primaryText,
    "--ck-body-background": theme.colors.modalBg,
    "--ck-qr-background": theme.colors.modalBg
  };
});
const generateMatrix = (value, errorCorrectionLevel) => {
  const arr = Array.prototype.slice.call(QRCodeUtil__default["default"].create(value, {
    errorCorrectionLevel
  }).modules.data, 0);
  const sqrt = Math.sqrt(arr.length);
  return arr.reduce((rows, key, index) => (index % sqrt === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows, []);
};
const PlaceholderKeyframes = react.keyframes`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`;
const QRPlaceholder = /* @__PURE__ */formElements.StyledDiv(() => {
  const theme = formElements.useCustomTheme();
  return {
    "--color": theme.colors.skeletonBg,
    "--bg": theme.colors.modalBg,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: formElements.radius.md,
    "> div": {
      zIndex: 4,
      position: "relative",
      width: "28%",
      height: "28%",
      borderRadius: "5px",
      background: "var(--bg)",
      boxShadow: "0 0 0 7px var(--bg)"
    },
    "> span": {
      zIndex: 4,
      position: "absolute",
      background: "var(--color)",
      borderRadius: "12px",
      width: "13.25%",
      height: "13.25%",
      boxShadow: "0 0 0 4px var(--bg)",
      "&:before": {
        content: '""',
        position: "absolute",
        inset: "9px",
        borderRadius: "3px",
        boxShadow: "0 0 0 4px var(--bg)"
      },
      "&[data-v1]": {
        top: 0,
        left: 0
      },
      "&[data-v2]": {
        top: 0,
        right: 0
      },
      "&[data-v3]": {
        bottom: 0,
        left: 0
      }
    },
    "&:before": {
      zIndex: 3,
      content: '""',
      position: "absolute",
      inset: 0,
      background: "repeat",
      backgroundSize: "1.888% 1.888%",
      backgroundImage: "radial-gradient(var(--color) 41%, transparent 41%)"
    },
    "&::after": {
      zIndex: 100,
      content: '""',
      position: "absolute",
      inset: 0,
      transform: "scale(1.5) rotate(45deg)",
      background: "linear-gradient(90deg, transparent 50%, var(--color), transparent)",
      backgroundSize: "200% 100%",
      animation: `${PlaceholderKeyframes} 1000ms linear infinite both`
    }
  };
});
function QRCodeRenderer(_ref) {
  let {
    ecl = "M",
    size: sizeProp = 200,
    uri,
    clearSize = 0,
    image,
    imageBackground = "transparent"
  } = _ref;
  const logoSize = clearSize;
  const size = sizeProp - 10 * 2;
  const dots = React.useMemo(() => {
    const dotsArray = [];
    const matrix = generateMatrix(uri, ecl);
    const cellSize = size / matrix.length;
    const qrList = [{
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: 0,
      y: 1
    }];
    qrList.forEach(_ref2 => {
      let {
        x,
        y
      } = _ref2;
      const x1 = (matrix.length - 7) * cellSize * x;
      const y1 = (matrix.length - 7) * cellSize * y;
      for (let i = 0; i < 3; i++) {
        dotsArray.push( /*#__PURE__*/jsxRuntime.jsx("rect", {
          fill: i % 2 !== 0 ? "var(--ck-qr-background, var(--ck-body-background))" : "var(--ck-qr-dot-color)",
          rx: (i - 2) * -5 + (i === 0 ? 2 : 3),
          ry: (i - 2) * -5 + (i === 0 ? 2 : 3),
          width: cellSize * (7 - i * 2),
          height: cellSize * (7 - i * 2),
          x: x1 + cellSize * i,
          y: y1 + cellSize * i
        }, `${i}-${x}-${y}`));
      }
    });
    if (image) {
      const x1 = (matrix.length - 7) * cellSize * 1;
      const y1 = (matrix.length - 7) * cellSize * 1;
      dotsArray.push( /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
        children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
          fill: imageBackground,
          rx: (0 - 2) * -5 + 2,
          ry: (0 - 2) * -5 + 2,
          width: cellSize * (7 - 0 * 2),
          height: cellSize * (7 - 0 * 2),
          x: x1 + cellSize * 0,
          y: y1 + cellSize * 0
        }), /*#__PURE__*/jsxRuntime.jsx("foreignObject", {
          width: cellSize * (7 - 0 * 2),
          height: cellSize * (7 - 0 * 2),
          x: x1 + cellSize * 0,
          y: y1 + cellSize * 0,
          children: /*#__PURE__*/jsxRuntime.jsx("div", {
            style: {
              borderRadius: (0 - 2) * -5 + 2,
              overflow: "hidden"
            },
            children: image
          })
        })]
      }));
    }
    const clearArenaSize = Math.floor((logoSize + 25) / cellSize);
    const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
    const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
    matrix.forEach((row, i) => {
      row.forEach((_, j) => {
        if (matrix[i][j]) {
          // Do not render dots under position squares
          if (!(i < 7 && j < 7 || i > matrix.length - 8 && j < 7 || i < 7 && j > matrix.length - 8)) {
            //if (image && i > matrix.length - 9 && j > matrix.length - 9) return;
            if (image || !(i > matrixMiddleStart && i < matrixMiddleEnd && j > matrixMiddleStart && j < matrixMiddleEnd)) {
              dotsArray.push( /*#__PURE__*/jsxRuntime.jsx("circle", {
                cx: i * cellSize + cellSize / 2,
                cy: j * cellSize + cellSize / 2,
                fill: "var(--ck-qr-dot-color)",
                r: cellSize / 3
              }, `circle-${i}-${j}`));
            }
          }
        }
      });
    });
    return dotsArray;
  }, [ecl, image, imageBackground, logoSize, size, uri]);
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    height: size,
    width: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      width: size,
      height: size
    },
    children: [/*#__PURE__*/jsxRuntime.jsx("rect", {
      fill: "transparent",
      height: size,
      width: size
    }), dots]
  });
}

function openWindow(uri) {
  if (uri.startsWith("http")) {
    // taken from for https://github.com/rainbow-me/rainbowkit/

    // Using 'window.open' causes issues on iOS in non-Safari browsers and
    // WebViews where a blank tab is left behind after connecting.
    // This is especially bad in some WebView scenarios (e.g. following a
    // link from Twitter) where the user doesn't have any mechanism for
    // closing the blank tab.
    // For whatever reason, links with a target of "_blank" don't suffer
    // from this problem, and programmatically clicking a detached link
    // element with the same attributes also avoids the issue.

    const link = document.createElement("a");
    link.href = uri;
    link.target = "_blank";
    link.rel = "noreferrer noopener";
    link.click();
  } else {
    window.location.href = uri;
  }
}

const AppleIcon = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 23 28",
    fill: "none",
    children: /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M22.4181 21.6041C22.008 22.5506 21.5224 23.422 20.9599 24.223C20.1931 25.3151 19.5652 26.0711 19.0814 26.4908C18.3313 27.1799 17.5277 27.5327 16.6671 27.5528C16.0493 27.5528 15.3043 27.3772 14.437 27.021C13.5669 26.6664 12.7673 26.4908 12.0362 26.4908C11.2694 26.4908 10.447 26.6664 9.56734 27.021C8.68636 27.3772 7.97665 27.5628 7.43403 27.5812C6.60879 27.6164 5.78624 27.2534 4.96519 26.4908C4.44116 26.0343 3.78569 25.2516 3.00047 24.1428C2.15799 22.9587 1.46536 21.5857 0.92274 20.0203C0.341611 18.3295 0.050293 16.6922 0.050293 15.1071C0.050293 13.2914 0.44307 11.7253 1.2298 10.413C1.84809 9.35886 2.67065 8.52734 3.70014 7.91691C4.72963 7.30648 5.84199 6.99541 7.03991 6.97551C7.69538 6.97551 8.55493 7.17804 9.6231 7.57607C10.6882 7.97544 11.3722 8.17797 11.672 8.17797C11.8962 8.17797 12.656 7.94116 13.944 7.46904C15.162 7.0312 16.19 6.84991 17.0321 6.92133C19.3141 7.10529 21.0285 8.00387 22.1687 9.62276C20.1278 10.858 19.1182 12.5881 19.1383 14.8076C19.1567 16.5363 19.7846 17.9749 21.0185 19.1172C21.5777 19.6473 22.2022 20.0571 22.897 20.3481C22.7463 20.7846 22.5872 21.2027 22.4181 21.6041ZM17.1845 1.03178C17.1845 2.38678 16.6889 3.65194 15.7011 4.82296C14.509 6.21507 13.0672 7.0195 11.5036 6.89256C11.4837 6.73 11.4721 6.55892 11.4721 6.37913C11.4721 5.07833 12.039 3.68622 13.0457 2.54798C13.5484 1.97167 14.1876 1.49247 14.9628 1.11021C15.7363 0.733653 16.4679 0.525407 17.156 0.489746C17.1761 0.670889 17.1845 0.85206 17.1845 1.03178Z",
      fill: "#959CA0"
    })
  });
};

const ChromeIcon = props => {
  return /*#__PURE__*/jsxRuntime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 190.5 190.5",
    children: /*#__PURE__*/jsxRuntime.jsxs("g", {
      transform: "translate(90.669 -507.469)",
      children: [/*#__PURE__*/jsxRuntime.jsx("path", {
        d: "M4.583 650.342c26.304 0 47.627-21.324 47.627-47.628s-21.323-47.628-47.627-47.628-47.627 21.324-47.627 47.628 21.323 47.628 47.627 47.628z",
        fill: "#fff",
        clipPath: "none",
        mask: "none"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        d: "M-36.664 626.539l-41.24-71.43c-8.362 14.479-12.765 30.904-12.765 47.625s4.401 33.146 12.762 47.625 20.387 26.503 34.868 34.86 30.908 12.755 47.628 12.75l41.24-71.43v-.011c-4.177 7.244-10.188 13.26-17.428 17.443a47.62 47.62 0 0 1-47.632.007 47.62 47.62 0 0 1-17.433-17.437z",
        fill: "#229342",
        clipPath: "none",
        mask: "none"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        d: "M45.826 626.536l-41.239 71.43c16.72.003 33.146-4.398 47.626-12.757s26.504-20.384 34.863-34.865a95.24 95.24 0 0 0 12.755-47.627c-.003-16.72-4.408-33.145-12.772-47.623H4.58l-.01.007a47.62 47.62 0 0 1 23.819 6.372c7.243 4.179 13.257 10.19 17.439 17.431a47.62 47.62 0 0 1-.001 47.633z",
        fill: "#fbc116",
        clipPath: "none",
        mask: "none"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        d: "M4.583 640.43c20.824 0 37.705-16.881 37.705-37.706s-16.881-37.705-37.705-37.705-37.705 16.881-37.705 37.705 16.881 37.706 37.705 37.706z",
        fill: "#1a73e8",
        clipPath: "none",
        mask: "none"
      }), /*#__PURE__*/jsxRuntime.jsx("path", {
        d: "M4.583 555.097h82.479c-8.358-14.481-20.381-26.507-34.861-34.868a95.23 95.23 0 0 0-47.625-12.76c-16.72.001-33.145 4.404-47.623 12.767a95.23 95.23 0 0 0-34.856 34.872l41.24 71.43.011.006a47.62 47.62 0 0 1-.015-47.633c4.179-7.242 10.193-13.256 17.434-17.436s15.456-6.381 23.818-6.379z",
        fill: "#e33b2e",
        clipPath: "none",
        mask: "none"
      })]
    })
  });
};

const PlayStoreIcon = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: props.size,
    height: props.size,
    viewBox: "0 0 23 26",
    fill: "none",
    children: [/*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M10.5832 12.0978L0.0976562 23.2275C0.0980507 23.2298 0.0988382 23.2317 0.0992076 23.2341C0.420793 24.4427 1.52467 25.3326 2.83473 25.3326C3.35844 25.3326 3.85012 25.191 4.27179 24.9424L4.30528 24.9228L16.1087 18.1117L10.5838 12.0977",
      fill: "#EB3131"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M21.1922 10.2046L21.1821 10.1977L16.0862 7.2435L10.345 12.3523L16.1061 18.1127L21.1752 15.1879C22.0639 14.7081 22.6672 13.7712 22.6672 12.6908C22.6672 11.6182 22.072 10.6859 21.1922 10.2046Z",
      fill: "#F6B60B"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M0.0961678 2.10416C0.0331317 2.33661 0 2.58009 0 2.83292V22.5002C0 22.7526 0.0327407 22.9969 0.0965672 23.2285L10.9441 12.3832L0.0965672 2.10444",
      fill: "#5778C5"
    }), /*#__PURE__*/jsxRuntime.jsx("path", {
      d: "M10.6603 12.6667L16.088 7.24061L4.29785 0.404818C3.8693 0.148138 3.36912 0 2.83391 0C1.52384 0 0.418474 0.891502 0.0968301 2.10147C0.0964356 2.10265 0.0964355 2.10347 0.0964355 2.1045L10.6603 12.6669",
      fill: "#3BAD49"
    })]
  });
};

const GetStartedScreen = _ref => {
  let {
    walletName,
    walletIconURL,
    appleStoreLink,
    googlePlayStoreLink,
    chromeExtensionLink,
    header,
    footer,
    onBack,
    locale: localeProp
  } = _ref;
  const [showScreen, setShowScreen] = React.useState("base");
  const locale = formElements.useTWLocale().connectWallet.download;
  const isScanScreen = showScreen === "android-scan" || showScreen === "ios-scan";
  const handleBack = onBack ? () => {
    if (showScreen === "base") {
      onBack();
    } else {
      setShowScreen("base");
    }
  } : undefined;
  return /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
    fullHeight: true,
    flex: "column",
    animate: "fadein",
    children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      expand: true,
      flex: "column",
      p: "lg",
      children: [showScreen === "android-scan" && googlePlayStoreLink && /*#__PURE__*/jsxRuntime.jsx(InstallScanScreen, {
        platformIcon: /*#__PURE__*/jsxRuntime.jsx(PlayStoreIcon, {
          size: formElements.iconSize.md
        }),
        url: googlePlayStoreLink,
        platform: "Google Play",
        walletName: walletName,
        walletIconURL: walletIconURL,
        onBack: handleBack,
        locale: {
          scanToDownload: localeProp.scanToDownload
        }
      }), showScreen === "ios-scan" && appleStoreLink && /*#__PURE__*/jsxRuntime.jsx(InstallScanScreen, {
        platformIcon: /*#__PURE__*/jsxRuntime.jsx(AppleIcon, {
          size: formElements.iconSize.md
        }),
        url: appleStoreLink,
        platform: "App Store",
        walletName: walletName,
        walletIconURL: walletIconURL,
        onBack: handleBack,
        locale: {
          scanToDownload: localeProp.scanToDownload
        }
      }), showScreen === "base" && /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
        expand: true,
        flex: "column",
        children: [header || /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
          onBack: handleBack,
          title: walletName
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
          expand: true,
          animate: "fadein",
          flex: "column",
          center: "y",
          style: {
            minHeight: "250px"
          },
          children: /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
            flex: "column",
            gap: "xs",
            children: [chromeExtensionLink && /*#__PURE__*/jsxRuntime.jsxs(ButtonLink, {
              onClick: () => {
                openWindow(chromeExtensionLink);
              },
              children: [/*#__PURE__*/jsxRuntime.jsx(ChromeIcon, {
                size: formElements.iconSize.lg
              }), /*#__PURE__*/jsxRuntime.jsx("span", {
                children: locale.chrome
              })]
            }), googlePlayStoreLink && /*#__PURE__*/jsxRuntime.jsxs(ButtonLink, {
              as: "button",
              onClick: () => {
                if (formElements.isMobile()) {
                  openWindow(googlePlayStoreLink);
                } else {
                  setShowScreen("android-scan");
                }
              },
              children: [/*#__PURE__*/jsxRuntime.jsx(PlayStoreIcon, {
                size: formElements.iconSize.lg
              }), /*#__PURE__*/jsxRuntime.jsx("span", {
                children: locale.android
              })]
            }), appleStoreLink && /*#__PURE__*/jsxRuntime.jsxs(ButtonLink, {
              as: "button",
              onClick: () => {
                if (formElements.isMobile()) {
                  openWindow(appleStoreLink);
                } else {
                  setShowScreen("ios-scan");
                }
              },
              children: [/*#__PURE__*/jsxRuntime.jsx(AppleIcon, {
                size: formElements.iconSize.lg
              }), /*#__PURE__*/jsxRuntime.jsx("span", {
                children: locale.iOS
              })]
            })]
          })
        })]
      }), !isScanScreen && footer]
    })
  });
};
const InstallScanScreen = props => {
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    animate: "fadein",
    expand: true,
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      title: props.walletName,
      onBack: props.onBack
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "xl"
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
      flex: "column",
      expand: true,
      center: "both",
      style: {
        textAlign: "center"
      },
      children: [/*#__PURE__*/jsxRuntime.jsx(QRCode, {
        qrCodeUri: props.url,
        QRIcon: /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
          src: props.walletIconURL,
          width: formElements.iconSize.xxl,
          height: formElements.iconSize.xxl
        })
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        multiline: true,
        center: true,
        balance: true,
        children: props.locale.scanToDownload
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      })]
    })]
  });
};
const ButtonLink = /* @__PURE__ */formElements.StyledButton(() => {
  const theme = formElements.useCustomTheme();
  return {
    all: "unset",
    textDecoration: "none",
    padding: `${formElements.spacing.sm} ${formElements.spacing.md}`,
    borderRadius: formElements.radius.sm,
    display: "flex",
    alignItems: "center",
    gap: formElements.spacing.md,
    cursor: "pointer",
    boxSizing: "border-box",
    width: "100%",
    fontWeight: 500,
    color: theme.colors.secondaryButtonText,
    background: theme.colors.secondaryButtonBg,
    transition: "100ms ease",
    "&:hover": {
      background: theme.colors.secondaryButtonHoverBg,
      textDecoration: "none",
      color: theme.colors.primaryText
    }
  };
});

const ScanScreen = props => {
  const modalConfig = React.useContext(formElements.ModalConfigCtx);
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    flex: "column",
    animate: "fadein",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        onBack: props.hideBackButton ? undefined : props.onBack,
        title: props.walletName
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      expand: true,
      flex: "column",
      px: "lg",
      center: "both",
      children: /*#__PURE__*/jsxRuntime.jsxs("div", {
        style: {
          textAlign: "center"
        },
        children: [/*#__PURE__*/jsxRuntime.jsx(QRCode, {
          qrCodeUri: props.qrCodeUri,
          QRIcon: /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
            width: formElements.iconSize.xxl,
            height: formElements.iconSize.xxl,
            src: props.walletIconURL
          })
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
          center: true,
          multiline: true,
          balance: true,
          style: {
            paddingInline: formElements.spacing.lg
          },
          children: props.qrScanInstruction
        })]
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.ScreenBottomContainer, {
      style: {
        border: modalConfig.modalSize === "compact" ? undefined : "none"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
        variant: "link",
        onClick: props.onGetStarted,
        style: {
          fontSize: formElements.fontSize.sm,
          textAlign: "center"
        },
        children: props.getStartedLink
      })
    })]
  });
};

const CoinbaseScan = _ref => {
  let {
    walletConfig,
    onConnected,
    onGetStarted,
    onBack,
    hideBackButton,
    setConnectionStatus,
    setConnectedWallet
  } = _ref;
  const locale = formElements.useTWLocale().wallets.coinbaseWallet;
  const createInstance = reactCore.useCreateWalletInstance();
  const [qrCodeUri, setQrCodeUri] = React.useState(undefined);
  const {
    chainToConnect
  } = reactCore.useWalletContext();
  const scanStarted = React.useRef(false);
  React.useEffect(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    (async () => {
      const wallet = createInstance(walletConfig);
      const uri = await wallet.getQrUrl();
      setQrCodeUri(uri || undefined);
      setConnectionStatus("connecting");
      try {
        await wallet.connect({
          chainId: chainToConnect?.chainId
        });
        setConnectedWallet(wallet);
        onConnected();
      } catch {
        setConnectionStatus("disconnected");
      }
    })();
  }, [createInstance, onConnected, walletConfig, chainToConnect?.chainId, setConnectedWallet, setConnectionStatus]);
  return /*#__PURE__*/jsxRuntime.jsx(ScanScreen, {
    qrScanInstruction: locale.scanScreen.instruction,
    onBack: onBack,
    onGetStarted: onGetStarted,
    qrCodeUri: qrCodeUri,
    walletName: walletConfig.meta.name,
    walletIconURL: walletConfig.meta.iconURL,
    hideBackButton: hideBackButton,
    getStartedLink: locale.getStartedLink
  });
};

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const CoinbaseConnectUI = _ref => {
  let {
    walletConfig,
    connected,
    goBack,
    supportedWallets,
    setConnectedWallet,
    setConnectionStatus,
    connect
  } = _ref;
  const {
    meta
  } = walletConfig;
  const [screen, setScreen] = React.useState("loading");
  const locale = formElements.useTWLocale().wallets.coinbaseWallet;
  const [errorConnecting, setErrorConnecting] = React.useState(false);
  const hideBackButton = supportedWallets.length === 1;
  const connectToExtension = React.useCallback(async () => {
    try {
      setErrorConnecting(false);
      connectPrompted.current = true;
      await wait(1000);
      setScreen("connecting");
      await connect();
      connected();
    } catch (e) {
      setErrorConnecting(true);
      console.error(e);
    }
  }, [connected, connect]);
  const connectPrompted = React.useRef(false);
  React.useEffect(() => {
    if (screen !== "loading") {
      return;
    }
    if (connectPrompted.current) {
      return;
    }
    const isInstalled = walletConfig.isInstalled ? walletConfig.isInstalled() : false;

    // if loading
    (async () => {
      if (isInstalled) {
        connectToExtension();
      }

      // if metamask is not injected
      else {
        if (formElements.isMobile()) {
          // coinbase will redirect to download page for coinbase wallet apps
          connect();
        } else {
          setScreen("scanning");
        }
      }
    })();
  }, [screen, walletConfig, connect, connectToExtension]);
  if (screen === "connecting" || screen === "loading") {
    return /*#__PURE__*/jsxRuntime.jsx(ConnectingScreen, {
      locale: {
        getStartedLink: locale.getStartedLink,
        instruction: locale.connectionScreen.instruction,
        tryAgain: locale.connectionScreen.retry,
        inProgress: locale.connectionScreen.inProgress,
        failed: locale.connectionScreen.failed
      },
      errorConnecting: errorConnecting,
      onGetStarted: () => setScreen("get-started"),
      onRetry: connectToExtension,
      hideBackButton: hideBackButton,
      onBack: goBack,
      walletName: meta.name,
      walletIconURL: meta.iconURL
    });
  }
  if (screen === "get-started") {
    return /*#__PURE__*/jsxRuntime.jsx(GetStartedScreen, {
      locale: {
        scanToDownload: locale.getStartedScreen.instruction
      },
      walletIconURL: meta.iconURL,
      walletName: meta.name,
      chromeExtensionLink: meta.urls?.chrome,
      googlePlayStoreLink: meta.urls?.android,
      appleStoreLink: meta.urls?.ios,
      onBack: () => {
        goBack();
      }
    });
  }
  if (screen === "scanning") {
    return /*#__PURE__*/jsxRuntime.jsx(CoinbaseScan, {
      onBack: goBack,
      onConnected: connected,
      onGetStarted: () => setScreen("get-started"),
      walletConfig: walletConfig,
      hideBackButton: hideBackButton,
      setConnectedWallet: setConnectedWallet,
      setConnectionStatus: setConnectionStatus
    });
  }
  return null;
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Coinbase Wallet](https://www.coinbase.com/wallet) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * coinbaseWallet({
 *  qrmodal: "custom",
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional object containing the following properties to configure the wallet
 *
 * ### qrmodal (optional)
 * Whether to use the Coinbase's default QR Code modal or show the custom UI in ConnectWallet Modal.
 *
 * The default is `"custom"`
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
const coinbaseWallet = options => {
  const qrmodal = options?.qrmodal || "custom";
  return {
    id: wallets.CoinbaseWallet.id,
    recommended: options?.recommended,
    meta: {
      name: "Coinbase Wallet",
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzA1NTVGRiIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzMwM184NjM0KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMzMxMiA0SDM1LjY2NzJDNDAuMjcwNCA0IDQ0IDguMDEyOCA0NCAxMi45NjMyVjM1LjAzNjhDNDQgMzkuOTg3MiA0MC4yNzA0IDQ0IDM1LjY2ODggNDRIMTIuMzMxMkM3LjcyOTYgNDQgNCAzOS45ODcyIDQgMzUuMDM2OFYxMi45NjMyQzQgOC4wMTI4IDcuNzI5NiA0IDEyLjMzMTIgNFoiIGZpbGw9IiMwMDUyRkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wMDAzIDkuNzkzNDZDMzEuODQ2NyA5Ljc5MzQ2IDM4LjIwNjcgMTYuMTUzNSAzOC4yMDY3IDIzLjk5OTlDMzguMjA2NyAzMS44NDYzIDMxLjg0NjcgMzguMjA2MyAyNC4wMDAzIDM4LjIwNjNDMTYuMTUzOSAzOC4yMDYzIDkuNzkzOTUgMzEuODQ2MyA5Ljc5Mzk1IDIzLjk5OTlDOS43OTM5NSAxNi4xNTM1IDE2LjE1MzkgOS43OTM0NiAyNC4wMDAzIDkuNzkzNDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjUwMDYgMTkuNDU5SDI3LjQ5NzRDMjguMDczNCAxOS40NTkgMjguNTM5IDE5Ljk2MTQgMjguNTM5IDIwLjU3OVYyNy40MTlDMjguNTM5IDI4LjAzODIgMjguMDcxOCAyOC41MzkgMjcuNDk3NCAyOC41MzlIMjAuNTAwNkMxOS45MjQ2IDI4LjUzOSAxOS40NTkgMjguMDM2NiAxOS40NTkgMjcuNDE5VjIwLjU3OUMxOS40NTkgMTkuOTYxNCAxOS45MjYyIDE5LjQ1OSAyMC41MDA2IDE5LjQ1OVoiIGZpbGw9IiMwMDUyRkYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zMzAzXzg2MzQiPgo8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDQpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",
      urls: {
        chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
        android: "https://play.google.com/store/apps/details?id=org.toshi",
        ios: "https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455"
      }
    },
    create(walletOptions) {
      return new wallets.CoinbaseWallet({
        ...walletOptions,
        headlessMode: qrmodal === "custom"
      });
    },
    connectUI: qrmodal === "custom" ? CoinbaseConnectUI : CoinbaseNativeModalConnectUI,
    isInstalled() {
      return !!wallets.getInjectedCoinbaseProvider();
    }
  };
};
const CoinbaseNativeModalConnectUI = _ref => {
  let {
    connected,
    walletConfig,
    show,
    hide,
    supportedWallets,
    theme,
    goBack,
    setConnectionStatus,
    setConnectedWallet
  } = _ref;
  const createWalletInstance = reactCore.useCreateWalletInstance();
  const prompted = React.useRef(false);
  const singleWallet = supportedWallets.length === 1;
  React.useEffect(() => {
    if (prompted.current) {
      return;
    }
    prompted.current = true;
    (async () => {
      hide();
      const wallet = createWalletInstance(walletConfig);
      wallet.theme = theme;
      setConnectionStatus("connecting");
      try {
        await wallet.connect();
        setConnectedWallet(wallet);
        connected();
      } catch (e) {
        setConnectionStatus("disconnected");
        if (!singleWallet) {
          goBack();
          show();
        }
        console.error(e);
      }
    })();
  }, [walletConfig, singleWallet, createWalletInstance, theme, setConnectionStatus, setConnectedWallet, hide, connected, goBack, show]);
  return null;
};

var coinbaseWallet$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  coinbaseWallet: coinbaseWallet,
  CoinbaseNativeModalConnectUI: CoinbaseNativeModalConnectUI
});

const MetamaskScan = props => {
  const {
    onBack,
    onConnected,
    onGetStarted,
    walletConfig,
    hideBackButton,
    setConnectedWallet,
    setConnectionStatus,
    createWalletInstance
  } = props;
  const locale = formElements.useTWLocale().wallets.metamaskWallet;
  const [qrCodeUri, setQrCodeUri] = React.useState();
  const {
    chainToConnect
  } = reactCore.useWalletContext();
  const scanStarted = React.useRef(false);
  React.useEffect(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    const metamask = createWalletInstance();
    metamask.connectWithQrCode({
      chainId: chainToConnect?.chainId,
      onQrCodeUri(uri) {
        setQrCodeUri(uri);
      },
      onConnected() {
        setConnectionStatus("connecting");
        setConnectedWallet(metamask);
        onConnected();
      }
    });
  }, [setConnectedWallet, chainToConnect, onConnected, walletConfig, setConnectionStatus, createWalletInstance]);
  return /*#__PURE__*/jsxRuntime.jsx(ScanScreen, {
    qrScanInstruction: locale.scanScreen.instruction,
    onBack: onBack,
    onGetStarted: onGetStarted,
    qrCodeUri: qrCodeUri,
    walletName: walletConfig.meta.name,
    walletIconURL: walletConfig.meta.iconURL,
    hideBackButton: hideBackButton,
    getStartedLink: locale.getStartedLink
  });
};

const metamaskUris = {
  ios: "metamask://",
  android: "https://metamask.app.link/",
  other: "https://metamask.app.link/"
};

const WCOpenURI = props => {
  const {
    createWalletInstance,
    setConnectionStatus,
    setConnectedWallet,
    onBack,
    onConnected,
    appUriPrefix,
    onRetry,
    errorConnecting,
    hideBackButton,
    onGetStarted,
    locale,
    meta
  } = props;
  const {
    chainToConnect
  } = reactCore.useWalletContext();
  const connectStarted = React.useRef(false);
  React.useEffect(() => {
    if (connectStarted.current) {
      return;
    }
    connectStarted.current = true;
    const wallet = createWalletInstance();
    setConnectionStatus("connecting");
    wallet.connectWithQrCode({
      chainId: chainToConnect?.chainId,
      onQrCodeUri(uri) {
        if (formElements.isAndroid()) {
          openWindow(`${appUriPrefix.android}wc?uri=${encodeURIComponent(uri)}`);
        } else if (formElements.isIOS()) {
          openWindow(`${appUriPrefix.ios}wc?uri=${encodeURIComponent(uri)}`);
        } else {
          openWindow(`${appUriPrefix.other}wc?uri=${encodeURIComponent(uri)}`);
        }
      },
      onConnected() {
        setConnectedWallet(wallet);
        onConnected();
      }
    });
  }, [setConnectedWallet, chainToConnect, onConnected, setConnectionStatus, appUriPrefix, createWalletInstance]);
  return /*#__PURE__*/jsxRuntime.jsx(ConnectingScreen, {
    locale: locale,
    hideBackButton: hideBackButton,
    onBack: onBack,
    walletName: meta.name,
    walletIconURL: meta.iconURL,
    errorConnecting: errorConnecting,
    onRetry: onRetry,
    onGetStarted: onGetStarted
  });
};

const MetamaskConnectUI = props => {
  const [screen, setScreen] = React.useState("connecting");
  const locale = formElements.useTWLocale().wallets.metamaskWallet;
  const {
    walletConfig,
    connected,
    connect
  } = props;
  const [errorConnecting, setErrorConnecting] = React.useState(false);
  const connectingLocale = {
    getStartedLink: locale.getStartedLink,
    instruction: locale.connectionScreen.instruction,
    tryAgain: locale.connectionScreen.retry,
    inProgress: locale.connectionScreen.inProgress,
    failed: locale.connectionScreen.failed
  };
  const hideBackButton = props.supportedWallets.length === 1;
  const connectToExtension = React.useCallback(async () => {
    try {
      connectPrompted.current = true;
      setErrorConnecting(false);
      setScreen("connecting");
      await wait(1000);
      await connect();
      connected();
    } catch (e) {
      setErrorConnecting(true);
      console.error(e);
    }
  }, [connected, connect]);
  const connectPrompted = React.useRef(false);
  React.useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    const isInstalled = walletConfig.isInstalled ? walletConfig.isInstalled() : false;

    // if loading
    (async () => {
      if (isInstalled) {
        connectToExtension();
      }

      // if metamask is not injected
      else {
        // on mobile, open metamask app link
        if (formElements.isMobile()) {
          if (props.connectionMethod === "walletConnect") {
            setScreen("open-wc-uri");
          } else {
            window.open(`https://metamask.app.link/dapp/${window.location.toString()}`);
          }
        } else {
          // on desktop, show the metamask scan qr code
          setScreen("scanning");
        }
      }
    })();
  }, [connectToExtension, props.connectionMethod, walletConfig]);
  if (screen === "connecting") {
    return /*#__PURE__*/jsxRuntime.jsx(ConnectingScreen, {
      locale: connectingLocale,
      errorConnecting: errorConnecting,
      onGetStarted: () => {
        setScreen("get-started");
      },
      onRetry: connectToExtension,
      hideBackButton: hideBackButton,
      onBack: props.goBack,
      walletName: walletConfig.meta.name,
      walletIconURL: walletConfig.meta.iconURL
    });
  }
  if (screen === "get-started") {
    return /*#__PURE__*/jsxRuntime.jsx(GetStartedScreen, {
      locale: {
        scanToDownload: locale.getStartedScreen.instruction
      },
      walletIconURL: walletConfig.meta.iconURL,
      walletName: walletConfig.meta.name,
      chromeExtensionLink: walletConfig.meta.urls?.chrome,
      googlePlayStoreLink: walletConfig.meta.urls?.android,
      appleStoreLink: walletConfig.meta.urls?.ios,
      onBack: props.goBack
    });
  }
  if (screen === "open-wc-uri") {
    return /*#__PURE__*/jsxRuntime.jsx(WCOpenURI, {
      locale: connectingLocale,
      onRetry: () => {
        // NOOP - TODO make onRetry optional
      },
      errorConnecting: errorConnecting,
      onGetStarted: () => {
        setScreen("get-started");
      },
      hideBackButton: hideBackButton,
      onBack: props.goBack,
      onConnected: connected,
      appUriPrefix: metamaskUris,
      createWalletInstance: props.createWalletInstance,
      setConnectedWallet: w => {
        props.setConnectedWallet(w);
      },
      setConnectionStatus: props.setConnectionStatus,
      meta: walletConfig.meta
    });
  }
  if (screen === "scanning") {
    return /*#__PURE__*/jsxRuntime.jsx(MetamaskScan, {
      onBack: props.goBack,
      onConnected: props.connected,
      onGetStarted: () => {
        setScreen("get-started");
      },
      hideBackButton: hideBackButton,
      walletConfig: walletConfig,
      setConnectedWallet: w => props.setConnectedWallet(w),
      setConnectionStatus: props.setConnectionStatus,
      createWalletInstance: props.createWalletInstance
    });
  }
  return null;
};

function handelWCSessionRequest(wallet, uris) {
  if (formElements.isMobile()) {
    wallet.on("wc_session_request_sent", () => {
      if (formElements.isAndroid()) {
        openWindow(uris.android);
      } else if (formElements.isIOS()) {
        openWindow(uris.ios);
      } else {
        openWindow(uris.other);
      }
    });
  }
}

/**
 * A wallet configurator for [MetaMask Wallet](https://metamask.io/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * metamaskWallet({
 *   projectId: 'YOUR_PROJECT_ID',
 *   connectionMethod: 'walletConnect', // or 'metamaskBrowser',
 *   recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional configuration options for the wallet
 *
 * ### projectId (optional)
 * When connecting Core using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * ### connectionMethod (optional)
 * Specify how the connection to metamask app should be established if the user is on a mobile device.
 *
 * There are two options: `"walletconnect"` and `"browser"`
 * 1. `"walletconnect"` - User will be redirected to MetaMask app and upon successful connection, user can return back to the web page.
 * 2. `"browser"` - User will be redirected to MetaMask app and the web page will be opened in MetaMask browser.
 *
 * Default is `"walletconnect"`
 *
 * @wallet
 */
const metamaskWallet = options => {
  const connectionMethod = options?.connectionMethod || "walletConnect";
  return {
    id: wallets.MetaMaskWallet.id,
    recommended: options?.recommended,
    meta: {
      ...wallets.MetaMaskWallet.meta,
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiNGRkU2Q0UiLz4KPHBhdGggZD0iTTY0Ljk3MTIgMTQuMTc5TDQzLjI5MDMgMzAuMjgxN0w0Ny4yOTk2IDIwLjc4MTRMNjQuOTcxMiAxNC4xNzlaIiBmaWxsPSIjRTI3NjFCIiBzdHJva2U9IiNFMjc2MUIiIHN0cm9rZS13aWR0aD0iMC4xMjQ1MTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTQuOTE5OCAxNC4xNzlMMzYuNDI2NCAzMC40MzQzTDMyLjYxMzIgMjAuNzgxNEwxNC45MTk4IDE0LjE3OVpNNTcuMTcwNCA1MS41MDUxTDUxLjM5NjEgNjAuMzUxOEw2My43NTEgNjMuNzUxTDY3LjMwMjcgNTEuNzAxMkw1Ny4xNzA0IDUxLjUwNTFaTTEyLjYzMTkgNTEuNzAxMkwxNi4xNjE5IDYzLjc1MUwyOC41MTY3IDYwLjM1MThMMjIuNzQyNCA1MS41MDUxTDEyLjYzMTkgNTEuNzAxMloiIGZpbGw9IiNFNDc2MUIiIHN0cm9rZT0iI0U0NzYxQiIgc3Ryb2tlLXdpZHRoPSIwLjEyNDUxNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNy44MTk0IDM2LjU1NzJMMjQuMzc2NiA0MS43NjVMMzYuNjQ0NCA0Mi4zMDk3TDM2LjIwODYgMjkuMTI2OEwyNy44MTk0IDM2LjU1NzJaTTUyLjA3MTYgMzYuNTU3Mkw0My41NzM1IDI4Ljk3NDNMNDMuMjkwMyA0Mi4zMDk3TDU1LjUzNjIgNDEuNzY1TDUyLjA3MTYgMzYuNTU3MlpNMjguNTE2NyA2MC4zNTE3TDM1Ljg4MTcgNTYuNzU2NEwyOS41MTkxIDUxLjc4ODNMMjguNTE2NyA2MC4zNTE3Wk00NC4wMDkzIDU2Ljc1NjRMNTEuMzk2MSA2MC4zNTE3TDUwLjM3MiA1MS43ODgzTDQ0LjAwOTMgNTYuNzU2NFoiIGZpbGw9IiNFNDc2MUIiIHN0cm9rZT0iI0U0NzYxQiIgc3Ryb2tlLXdpZHRoPSIwLjEyNDUxNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01MS4zOTYxIDYwLjM1MTdMNDQuMDA5MyA1Ni43NTY0TDQ0LjU5NzcgNjEuNTcyTDQ0LjUzMjMgNjMuNTk4NEw1MS4zOTYxIDYwLjM1MTdaTTI4LjUxNjcgNjAuMzUxN0wzNS4zODA1IDYzLjU5ODRMMzUuMzM3IDYxLjU3MkwzNS44ODE3IDU2Ljc1NjRMMjguNTE2NyA2MC4zNTE3WiIgZmlsbD0iI0Q3QzFCMyIgc3Ryb2tlPSIjRDdDMUIzIiBzdHJva2Utd2lkdGg9IjAuMTI0NTE0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM1LjQ4OTUgNDguNjA3TDI5LjM0NDcgNDYuNzk4NEwzMy42ODA5IDQ0LjgxNTZMMzUuNDg5NSA0OC42MDdaTTQ0LjQwMTUgNDguNjA3TDQ2LjIxMDEgNDQuODE1Nkw1MC41NjgxIDQ2Ljc5ODRMNDQuNDAxNSA0OC42MDdaIiBmaWxsPSIjMjMzNDQ3IiBzdHJva2U9IiMyMzM0NDciIHN0cm9rZS13aWR0aD0iMC4xMjQ1MTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjguNTE2NyA2MC4zNTE3TDI5LjU2MjYgNTEuNTA1TDIyLjc0MjQgNTEuNzAxMUwyOC41MTY3IDYwLjM1MTdaTTUwLjM1MDIgNTEuNTA1TDUxLjM5NjEgNjAuMzUxN0w1Ny4xNzA0IDUxLjcwMTFMNTAuMzUwMiA1MS41MDVaTTU1LjUzNjIgNDEuNzY1TDQzLjI5MDMgNDIuMzA5N0w0NC40MjMzIDQ4LjYwN0w0Ni4yMzE5IDQ0LjgxNTVMNTAuNTg5OSA0Ni43OTg0TDU1LjUzNjIgNDEuNzY1Wk0yOS4zNDQ3IDQ2Ljc5ODRMMzMuNzAyNyA0NC44MTU1TDM1LjQ4OTUgNDguNjA3TDM2LjY0NDMgNDIuMzA5N0wyNC4zNzY2IDQxLjc2NUwyOS4zNDQ3IDQ2Ljc5ODRaIiBmaWxsPSIjQ0Q2MTE2IiBzdHJva2U9IiNDRDYxMTYiIHN0cm9rZS13aWR0aD0iMC4xMjQ1MTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjQuMzc2NiA0MS43NjVMMjkuNTE5MSA1MS43ODgzTDI5LjM0NDcgNDYuNzk4NEwyNC4zNzY2IDQxLjc2NVpNNTAuNTg5OSA0Ni43OTg0TDUwLjM3MiA1MS43ODgzTDU1LjUzNjIgNDEuNzY1TDUwLjU4OTkgNDYuNzk4NFpNMzYuNjQ0NCA0Mi4zMDk3TDM1LjQ4OTUgNDguNjA3TDM2LjkyNzYgNTYuMDM3M0wzNy4yNTQ1IDQ2LjI1MzdMMzYuNjQ0NCA0Mi4zMDk3Wk00My4yOTAzIDQyLjMwOTdMNDIuNzAxOSA0Ni4yMzE5TDQyLjk2MzQgNTYuMDM3M0w0NC40MjMzIDQ4LjYwN0w0My4yOTAzIDQyLjMwOTdaIiBmaWxsPSIjRTQ3NTFGIiBzdHJva2U9IiNFNDc1MUYiIHN0cm9rZS13aWR0aD0iMC4xMjQ1MTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDQuNDIzMyA0OC42MDdMNDIuOTYzNCA1Ni4wMzc0TDQ0LjAwOTMgNTYuNzU2NEw1MC4zNzIgNTEuNzg4M0w1MC41ODk5IDQ2Ljc5ODVMNDQuNDIzMyA0OC42MDdaTTI5LjM0NDcgNDYuNzk4NUwyOS41MTkgNTEuNzg4M0wzNS44ODE3IDU2Ljc1NjRMMzYuOTI3NiA1Ni4wMzc0TDM1LjQ4OTUgNDguNjA3TDI5LjM0NDcgNDYuNzk4NVoiIGZpbGw9IiNGNjg1MUIiIHN0cm9rZT0iI0Y2ODUxQiIgc3Ryb2tlLXdpZHRoPSIwLjEyNDUxNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00NC41MzIzIDYzLjU5ODRMNDQuNTk3NyA2MS41NzJMNDQuMDUyOSA2MS4wOTI2SDM1LjgzODFMMzUuMzM3IDYxLjU3MkwzNS4zODA1IDYzLjU5ODRMMjguNTE2NyA2MC4zNTE3TDMwLjkxMzYgNjIuMzEyOEwzNS43NzI4IDY1LjY5MDNINDQuMTE4M0w0OC45OTkyIDYyLjMxMjhMNTEuMzk2MSA2MC4zNTE3TDQ0LjUzMjMgNjMuNTk4NFoiIGZpbGw9IiNDMEFEOUUiIHN0cm9rZT0iI0MwQUQ5RSIgc3Ryb2tlLXdpZHRoPSIwLjEyNDUxNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00NC4wMDkzIDU2Ljc1NjRMNDIuOTYzNCA1Ni4wMzc0SDM2LjkyNzZMMzUuODgxNyA1Ni43NTY0TDM1LjMzNyA2MS41NzJMMzUuODM4MSA2MS4wOTI2SDQ0LjA1MjlMNDQuNTk3NyA2MS41NzJMNDQuMDA5MyA1Ni43NTY0WiIgZmlsbD0iIzE2MTYxNiIgc3Ryb2tlPSIjMTYxNjE2IiBzdHJva2Utd2lkdGg9IjAuMTI0NTE0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTY1Ljg4NjQgMzEuMzI3N0w2Ny43Mzg1IDIyLjQzNzRMNjQuOTcxMiAxNC4xNzlMNDQuMDA5MyAyOS43MzdMNTIuMDcxNiAzNi41NTcyTDYzLjQ2NzcgMzkuODkxMUw2NS45OTUzIDM2Ljk0OTRMNjQuOTA1OCAzNi4xNjVMNjYuNjQ5IDM0LjU3NDNMNjUuMjk4MSAzMy41Mjg0TDY3LjA0MTIgMzIuMTk5Mkw2NS44ODY0IDMxLjMyNzdaTTEyLjE3NDMgMjIuNDM3NEwxNC4wMjY1IDMxLjMyNzdMMTIuODQ5OCAzMi4xOTkyTDE0LjU5MyAzMy41Mjg0TDEzLjI2MzggMzQuNTc0M0wxNS4wMDcgMzYuMTY1TDEzLjkxNzUgMzYuOTQ5NEwxNi40MjMzIDM5Ljg5MTFMMjcuODE5NSAzNi41NTcyTDM1Ljg4MTcgMjkuNzM3TDE0LjkxOTggMTQuMTc5TDEyLjE3NDMgMjIuNDM3NFoiIGZpbGw9IiM3NjNEMTYiIHN0cm9rZT0iIzc2M0QxNiIgc3Ryb2tlLXdpZHRoPSIwLjEyNDUxNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02My40Njc3IDM5Ljg5MUw1Mi4wNzE2IDM2LjU1NzJMNTUuNTM2MiA0MS43NjVMNTAuMzcyIDUxLjc4ODNMNTcuMTcwNCA1MS43MDEySDY3LjMwMjdMNjMuNDY3NyAzOS44OTFaTTI3LjgxOTQgMzYuNTU3MkwxNi40MjMzIDM5Ljg5MUwxMi42MzE5IDUxLjcwMTJIMjIuNzQyNEwyOS41MTkxIDUxLjc4ODNMMjQuMzc2NiA0MS43NjVMMjcuODE5NCAzNi41NTcyWk00My4yOTAzIDQyLjMwOTdMNDQuMDA5MyAyOS43MzdMNDcuMzIxNCAyMC43ODEzSDMyLjYxMzJMMzUuODgxNyAyOS43MzdMMzYuNjQ0MyA0Mi4zMDk3TDM2LjkwNTggNDYuMjc1NUwzNi45Mjc2IDU2LjAzNzNINDIuOTYzNEw0My4wMDcgNDYuMjc1NUw0My4yOTAzIDQyLjMwOTdaIiBmaWxsPSIjRjY4NTFCIiBzdHJva2U9IiNGNjg1MUIiIHN0cm9rZS13aWR0aD0iMC4xMjQ1MTQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
    },
    create: walletOptions => {
      const wallet = new wallets.MetaMaskWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      if (connectionMethod === "walletConnect") {
        handelWCSessionRequest(wallet, metamaskUris);
      }
      return wallet;
    },
    connectUI(props) {
      return /*#__PURE__*/jsxRuntime.jsx(MetamaskConnectUI, {
        ...props,
        connectionMethod: connectionMethod
      });
    },
    isInstalled() {
      return !!wallets.getInjectedMetamaskProvider();
    }
  };
};

var metamaskWallet$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  metamaskWallet: metamaskWallet
});

const TW_WC_PROJECT_ID = "145769e410f16970a79ff77b2d89a1e0";

const WalletConnectScan = props => {
  const {
    onBack,
    onConnected,
    walletConfig,
    hide,
    show,
    setConnectedWallet,
    setConnectionStatus,
    createWalletInstance
  } = props;
  const locale = formElements.useTWLocale().wallets.walletConnect;
  const [qrCodeUri, setQrCodeUri] = React.useState();
  const {
    chainToConnect
  } = reactCore.useWalletContext();
  const [isWCModalOpen, setIsWCModalOpen] = React.useState(false);
  const handleWCModalConnect = async () => {
    const walletInstance = createWalletInstance();
    setConnectionStatus("connecting");
    try {
      setQrCodeUri(undefined);
      setIsWCModalOpen(true);
      wait(1000).then(() => {
        hide();
      });
      await walletInstance.connectWithModal({
        chainId: chainToConnect?.chainId
      });
      setConnectedWallet(walletInstance);
      onConnected();
      show();
    } catch {
      show();
      setIsWCModalOpen(false);
    }
  };
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    fullHeight: true,
    animate: "fadein",
    flex: "column",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
        onBack: props.hideBackButton ? undefined : onBack,
        title: walletConfig.meta.name
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      flex: "column",
      center: "both",
      px: "lg",
      expand: true,
      children: isWCModalOpen ? /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
        style: {
          minHeight: "300px"
        },
        flex: "column",
        center: "both",
        children: /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
          size: "xl",
          color: "accentText"
        })
      }) : /*#__PURE__*/jsxRuntime.jsx(WalletConnectQRScanConnect, {
        createInstance: createWalletInstance,
        onConnected: onConnected,
        qrCodeUri: qrCodeUri,
        setConnectedWallet: setConnectedWallet,
        setConnectionStatus: setConnectionStatus,
        setQrCodeUri: setQrCodeUri,
        walletConfig: walletConfig,
        chainIdToConnect: chainToConnect?.chainId
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      p: "lg",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        multiline: true,
        center: true,
        balance: true,
        children: locale.scanInstruction
      })
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Line, {}), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      py: "lg",
      flex: "row",
      center: "x",
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
        variant: "link",
        onClick: handleWCModalConnect,
        children: "Open Official WalletConnect Modal"
      })
    })]
  });
};
function WalletConnectQRScanConnect(props) {
  const {
    qrCodeUri,
    walletConfig,
    onConnected,
    setConnectedWallet,
    createInstance,
    setQrCodeUri,
    chainIdToConnect,
    setConnectionStatus
  } = props;
  const scanStarted = React.useRef(false);
  React.useEffect(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    const walletInstance = createInstance(walletConfig);
    setConnectionStatus("connecting");
    walletInstance.connectWithQrCode({
      chainId: chainIdToConnect,
      onQrCodeUri(uri) {
        setQrCodeUri(uri);
      },
      onConnected() {
        setConnectedWallet(walletInstance);
        onConnected();
      }
    });
  }, [createInstance, setConnectedWallet, chainIdToConnect, onConnected, walletConfig, setConnectionStatus, setQrCodeUri]);
  return /*#__PURE__*/jsxRuntime.jsx(QRCode, {
    qrCodeUri: qrCodeUri,
    QRIcon: /*#__PURE__*/jsxRuntime.jsx(formElements.Img, {
      width: formElements.iconSize.xxl,
      height: formElements.iconSize.xxl,
      src: walletConfig.meta.iconURL
    })
  });
}

// export const CopyButton: React.FC<{
//   text: string;
//   tip: string;
//   side?: "top" | "bottom" | "left" | "right";
//   align?: "start" | "center" | "end";
//   hide?: boolean;
// }> = (props) => {
//   const { hasCopied, onCopy } = useClipboard(props.text);

//   return (
//     <Button
//       variant="outline"
//       onClick={onCopy}
//       style={{
//         padding: spacing.xs,
//         fontSize: fontSize.xs,
//       }}
//     >
//       <Container flex="row" center="both" gap="xs" color="secondaryText">
//         {hasCopied ? <CheckIconStyled /> : <CopyIcon />}
//         Copy
//       </Container>
//     </Button>
//   );
// };


//   color: ${(p) => p.theme.colors.success};
// `;

const HeadlessConnectUI = props => {
  const {
    connected,
    hide,
    show,
    connect,
    setConnectionStatus,
    supportedWallets
  } = props;
  const prompted = React.useRef(false);
  const [connectionFailed, setConnectionFailed] = React.useState(false);
  const showBack = supportedWallets.length > 1;
  const handleConnect = React.useCallback(async () => {
    setConnectionFailed(false);
    try {
      setConnectionStatus("connecting");
      await wait(1000);
      hide();
      await connect();
      connected();
      show();
    } catch (e) {
      setConnectionStatus("disconnected");
      setConnectionFailed(true);
      show();
      console.error(e);
    }
  }, [connect, connected, hide, show, setConnectionStatus]);
  React.useEffect(() => {
    if (prompted.current) {
      return;
    }
    prompted.current = true;
    handleConnect();
  }, [handleConnect]);
  let content = null;
  if (connectionFailed) {
    content = /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        children: "Failed to connect"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
        variant: "primary",
        onClick: handleConnect,
        children: "Try again"
      })]
    });
  } else {
    content = /*#__PURE__*/jsxRuntime.jsx(formElements.Spinner, {
      size: "xl",
      color: "accentText"
    });
  }
  return /*#__PURE__*/jsxRuntime.jsxs(formElements.Container, {
    p: "lg",
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.ModalHeader, {
      onBack: showBack ? props.goBack : undefined,
      title: props.walletConfig.meta.name,
      imgSrc: props.walletConfig.meta.iconURL
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Container, {
      flex: "column",
      center: "both",
      style: {
        minHeight: "250px"
      },
      children: content
    })]
  });
};

/**
 * A wallet configurator for [WalletConnect](https://walletconnect.com/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * walletConnect({
 *   projectId: "your_project_id",
 *   qrModal: "custom", // or "walletConnect"
 *   qrModalOptions: {
 *     themeMode: "dark",
 *   },
 *   recommended: true,
 * });
 * ```
 *
 * @param config -
 * Optional configuration options for the wallet
 *
 * ### projectId (optional)
 * When connecting Trust using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### qrModal (optional)
 * Specify wheher a custom QR Modal or the Official WalletConnect Modal should be used on desktop. The custom screen has an option to open the official WalletConnect Modal too.
 *
 * Note that the official WalletConnect Modal is always used on mobile devices.
 *
 * The default is `"custom"` ( for desktop )
 *
 * ### qrModalOptions (optional)
 * The [WalletConnect Modal options](https://docs.walletconnect.com/advanced/walletconnectmodal/options) to customize the official WalletConnect Modal.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
const walletConnect = config => {
  const projectId = config?.projectId || TW_WC_PROJECT_ID;

  // on mobile - always use the official WalletConnect Modal
  // on desktop - use the official WalletConnect Modal if qrModal is set to "walletconnect"
  const showOfficialModal = formElements.isMobile() ? true : config?.qrModal === "walletConnect" ? true : false;
  return {
    recommended: config?.recommended,
    id: wallets.WalletConnect.id,
    meta: {
      ...wallets.WalletConnect.meta,
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiMxQzdERkMiLz4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9InVybCgjcGFpbnQwX3JhZGlhbF8xXzQ2KSIvPgo8cGF0aCBkPSJNMjYuNDIyNyAzMS40NzMxQzMzLjkxNzEgMjQuMTc1NiA0Ni4wODI5IDI0LjE3NTYgNTMuNTc3MyAzMS40NzMxTDU0LjQ3OTYgMzIuMzU4QzU0Ljg1OCAzMi43MjA3IDU0Ljg1OCAzMy4zMTU1IDU0LjQ3OTYgMzMuNjc4Mkw1MS4zOTQ1IDM2LjY4MTNDNTEuMjA1MyAzNi44Njk5IDUwLjg5OTcgMzYuODY5OSA1MC43MTA1IDM2LjY4MTNMNDkuNDczNiAzNS40NzcyQzQ0LjIzNDcgMzAuMzg1IDM1Ljc2NTMgMzAuMzg1IDMwLjUyNjQgMzUuNDc3MkwyOS4yMDIxIDM2Ljc2ODRDMjkuMDEzIDM2Ljk1NyAyOC43MDc0IDM2Ljk1NyAyOC41MTgyIDM2Ljc2ODRMMjUuNDMzMSAzMy43NjUzQzI1LjA1NDcgMzMuNDAyNiAyNS4wNTQ3IDMyLjgwNzggMjUuNDMzMSAzMi40NDUxTDI2LjQyMjcgMzEuNDczMVpNNTkuOTY1OCAzNy42ODI0TDYyLjcxNjIgNDAuMzUxOEM2My4wOTQ2IDQwLjcxNDUgNjMuMDk0NiA0MS4zMDkzIDYyLjcxNjIgNDEuNjcyTDUwLjMzMjIgNTMuNzI4QzQ5Ljk1MzggNTQuMDkwNyA0OS4zNDI2IDU0LjA5MDcgNDguOTc4OCA1My43MjhMNDAuMTg5MiA0NS4xNjg0QzQwLjEwMTkgNDUuMDgxMyAzOS45NDE4IDQ1LjA4MTMgMzkuODU0NSA0NS4xNjg0TDMxLjA2NDkgNTMuNzI4QzMwLjY4NjUgNTQuMDkwNyAzMC4wNzUzIDU0LjA5MDcgMjkuNzExNSA1My43MjhMMTcuMjgzOCA0MS42NzJDMTYuOTA1NCA0MS4zMDkzIDE2LjkwNTQgNDAuNzE0NSAxNy4yODM4IDQwLjM1MThMMjAuMDM0MiAzNy42ODI0QzIwLjQxMjUgMzcuMzE5NyAyMS4wMjM3IDM3LjMxOTcgMjEuMzg3NSAzNy42ODI0TDMwLjE3NzIgNDYuMjQyQzMwLjI2NDUgNDYuMzI5IDMwLjQyNDUgNDYuMzI5IDMwLjUxMTkgNDYuMjQyTDM5LjMwMTUgMzcuNjgyNEMzOS42Nzk5IDM3LjMxOTcgNDAuMjkxIDM3LjMxOTcgNDAuNjU0OSAzNy42ODI0TDQ5LjQ0NDUgNDYuMjQyQzQ5LjUzMTggNDYuMzI5IDQ5LjY5MTkgNDYuMzI5IDQ5Ljc3OTIgNDYuMjQyTDU4LjU2ODggMzcuNjgyNEM1OC45NzYzIDM3LjMxOTcgNTkuNTg3NSAzNy4zMTk3IDU5Ljk2NTggMzcuNjgyNFoiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMV80NiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDI0Nzk1NSA0MC4wMDEyKSBzY2FsZSg4MCkiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNUQ5REY2Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwNkZGRiIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
    },
    create(options) {
      return new wallets.WalletConnect({
        ...options,
        qrcode: showOfficialModal,
        projectId,
        qrModalOptions: config?.qrModalOptions
      });
    },
    connectUI(props) {
      if (showOfficialModal) {
        return /*#__PURE__*/jsxRuntime.jsx(HeadlessConnectUI, {
          ...props
        });
      }
      return /*#__PURE__*/jsxRuntime.jsx(WalletConnectScan, {
        onBack: props.goBack,
        onConnected: props.connected,
        walletConfig: props.walletConfig,
        hideBackButton: props.supportedWallets.length === 1,
        modalSize: props.modalSize,
        createWalletInstance: props.createWalletInstance,
        setConnectedWallet: props.setConnectedWallet,
        setConnectionStatus: props.setConnectionStatus,
        hide: props.hide,
        show: props.show
      });
    }
  };
};

var walletConnect$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  walletConnect: walletConnect
});

const WalletConnectScanUI = props => {
  const {
    onBack,
    onConnected,
    onGetStarted,
    hideBackButton,
    setConnectionStatus,
    setConnectedWallet,
    createWalletInstance
  } = props;
  const locale = props.walletLocale;
  const [qrCodeUri, setQrCodeUri] = React.useState();
  const {
    chainToConnect
  } = reactCore.useWalletContext();
  const scanStarted = React.useRef(false);
  React.useEffect(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    const wallet = createWalletInstance();
    wallet.connectWithQrCode({
      chainId: chainToConnect?.chainId,
      onQrCodeUri(uri) {
        setQrCodeUri(uri);
      },
      onConnected() {
        setConnectionStatus("connecting");
        setConnectedWallet(wallet);
        onConnected();
      }
    });
  }, [createWalletInstance, setConnectedWallet, chainToConnect, onConnected, setConnectionStatus]);
  return /*#__PURE__*/jsxRuntime.jsx(ScanScreen, {
    qrScanInstruction: locale.scanScreen.instruction,
    onBack: onBack,
    onGetStarted: onGetStarted,
    qrCodeUri: qrCodeUri,
    walletName: props.meta.name,
    walletIconURL: props.meta.iconURL,
    hideBackButton: hideBackButton,
    getStartedLink: locale.getStartedLink
  });
};

const ExtensionOrWCConnectionUI = props => {
  const [screen, setScreen] = React.useState("connecting");
  const {
    connected,
    connect,
    supportedWallets,
    isInstalled,
    meta,
    createWalletInstance,
    setConnectedWallet,
    setConnectionStatus,
    goBack,
    walletConnectUris,
    walletLocale: locale
  } = props;
  const connectingLocale = {
    getStartedLink: locale.getStartedLink,
    instruction: locale.connectionScreen.instruction,
    tryAgain: locale.connectionScreen.retry,
    inProgress: locale.connectionScreen.inProgress,
    failed: locale.connectionScreen.failed
  };
  const [errorConnecting, setErrorConnecting] = React.useState(false);
  const hideBackButton = supportedWallets.length === 1;
  const connectToExtension = React.useCallback(async () => {
    try {
      connectPrompted.current = true;
      setErrorConnecting(false);
      setScreen("connecting");
      await wait(1000);
      await connect();
      connected();
    } catch (e) {
      setErrorConnecting(true);
      console.error(e);
    }
  }, [connected, connect]);
  const connectPrompted = React.useRef(false);
  React.useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    const isInstalledVal = isInstalled ? isInstalled() : false;

    // if loading
    (async () => {
      if (isInstalledVal) {
        connectToExtension();
      }

      // if wallet is not injected
      else {
        // on mobile, open the Coin98 Mobile via wallet connect
        if (formElements.isMobile()) {
          setScreen("open-wc-uri");
        } else {
          // on desktop, show the Coin98 app scan qr code
          setScreen("scanning");
        }
      }
    })();
  }, [connectToExtension, isInstalled]);
  if (screen === "connecting") {
    return /*#__PURE__*/jsxRuntime.jsx(ConnectingScreen, {
      locale: connectingLocale,
      errorConnecting: errorConnecting,
      onGetStarted: () => {
        setScreen("get-started");
      },
      onRetry: connectToExtension,
      hideBackButton: hideBackButton,
      onBack: goBack,
      walletName: meta.name,
      walletIconURL: meta.iconURL
    });
  }
  if (screen === "open-wc-uri") {
    return /*#__PURE__*/jsxRuntime.jsx(WCOpenURI, {
      locale: connectingLocale,
      onRetry: () => {
        // NOOP - TODO make onRetry optional
      },
      errorConnecting: errorConnecting,
      onGetStarted: () => {
        setScreen("get-started");
      },
      hideBackButton: hideBackButton,
      onBack: goBack,
      onConnected: connected,
      appUriPrefix: walletConnectUris,
      createWalletInstance: createWalletInstance,
      meta: meta,
      setConnectedWallet: w => {
        setConnectedWallet(w);
      },
      setConnectionStatus: setConnectionStatus
    });
  }
  if (screen === "get-started") {
    return /*#__PURE__*/jsxRuntime.jsx(GetStartedScreen, {
      locale: {
        scanToDownload: locale.getStartedScreen.instruction
      },
      walletIconURL: meta.iconURL,
      walletName: meta.name,
      chromeExtensionLink: meta.urls?.chrome,
      googlePlayStoreLink: meta.urls?.android,
      appleStoreLink: meta.urls?.ios,
      onBack: goBack
    });
  }
  if (screen === "scanning") {
    return /*#__PURE__*/jsxRuntime.jsx(WalletConnectScanUI, {
      onBack: goBack,
      onConnected: connected,
      onGetStarted: () => {
        setScreen("get-started");
      },
      hideBackButton: hideBackButton,
      createWalletInstance: createWalletInstance,
      meta: meta,
      setConnectedWallet: w => {
        setConnectedWallet(w);
      },
      setConnectionStatus: setConnectionStatus,
      walletLocale: locale
    });
  }
  return null;
};

const trustWalletUris = {
  ios: "trust://",
  android: "https://link.trustwallet.com/",
  other: "https://link.trustwallet.com/"
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Trust Wallet](https://trustwallet.com/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * trustWallet({
 *  projectId: 'your_project_id',
 *  recommended: true,
 * })
 * ```
 *
 * @param config -
 * Optional configuration options for the wallet
 *
 * ### projectId (optional)
 * When connecting Trust using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
const trustWallet = options => {
  return {
    id: wallets.TrustWallet.id,
    recommended: options?.recommended,
    meta: {
      ...wallets.TrustWallet.meta,
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00MC41MzAzIDE3LjE0MjVDNDguMjQ3NyAyMy42ODU3IDU3LjE1NiAyMy4zNTE4IDU5LjcwMDMgMjMuMzcwN0M1OC44Njk4IDYwLjI1MTMgNTQuNjgzNSA1Mi45MDU4IDQwLjE4ODcgNjMuMTQxMkMyNS44NDc0IDUyLjY5MTYgMjEuNTc5IDU5Ljk3NDQgMjEuMjk2NCAyMy4wODU1QzIzLjgxNDIgMjMuMTA0MiAzMi43MTY1IDIzLjU3MDQgNDAuNTMwMyAxNy4xNDI1WiIgc3Ryb2tlPSIjMzM3NUJCIiBzdHJva2Utd2lkdGg9IjciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
    },
    create: walletOptions => {
      const wallet = new wallets.TrustWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      handelWCSessionRequest(wallet, trustWalletUris);
      return wallet;
    },
    connectUI: ConnectUI$2,
    isInstalled: isInstalled$2
  };
};
function isInstalled$2() {
  if (wallets.assertWindowEthereum(globalThis.window)) {
    return !!globalThis.window.ethereum.isTrust;
  }
  return false;
}
function ConnectUI$2(props) {
  const locale = formElements.useTWLocale();
  return /*#__PURE__*/jsxRuntime.jsx(ExtensionOrWCConnectionUI, {
    connect: props.connect,
    connected: props.connected,
    createWalletInstance: props.createWalletInstance,
    goBack: props.goBack,
    meta: props.walletConfig["meta"],
    setConnectedWallet: w => props.setConnectedWallet(w),
    setConnectionStatus: props.setConnectionStatus,
    supportedWallets: props.supportedWallets,
    walletConnectUris: trustWalletUris,
    walletLocale: locale.wallets.trustWallet,
    isInstalled: isInstalled$2
  });
}

var TrustWallet = /*#__PURE__*/Object.freeze({
  __proto__: null,
  trustWallet: trustWallet
});

const zerionWalletUris = {
  ios: "zerion://",
  android: "https://link.zerion.io/pt3gdRP0njb/",
  other: "https://link.zerion.io/pt3gdRP0njb/"
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Zerion Wallet](https://zerion.io/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * zerionWallet({
 *  projectId: "your_project_id",
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional configuration options for the wallet
 *
 * ### projectId (optional)
 * When connecting MetaMask using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in ConnectWallet Modal
 *
 * @wallet
 */
const zerionWallet = options => {
  return {
    id: wallets.ZerionWallet.id,
    recommended: options?.recommended,
    meta: {
      ...wallets.ZerionWallet.meta,
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiMyMzYxRUMiLz4KPHBhdGggZD0iTTE3LjM3OSAyMEMxNi4wMDggMjAgMTUuNDc5OCAyMS42OTUyIDE2LjYzMDEgMjIuNDAzNEw0NS40MDk0IDM5Ljc1NjJDNDYuMTI2OCA0MC4xOTc4IDQ3LjA4MzUgNDAuMDIzNCA0Ny41Nzc0IDM5LjM2MDhMNjAuMjMwOSAyMi43NDlDNjEuMDkxMiAyMS41OTUgNjAuMjIyIDIwIDU4LjczMjkgMjBIMTcuMzc5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYyLjYxMTcgNjAuMDAwMUM2My45ODI3IDYwLjAwMDEgNjQuNTI0NSA1OC4yOTU1IDYzLjM3NDMgNTcuNTg3NUwzNC41ODY4IDQwLjIzNjlDMzMuODY5NCAzOS43OTUzIDMyLjkzNTkgMzkuOTkxOSAzMi40NDIxIDQwLjY1NDNMMTkuNzY0IDU3LjI2MjlDMTguOTAzOSA1OC40MTY3IDE5LjgwMDMgNjAuMDAwMSAyMS4yODkyIDYwLjAwMDFINjIuNjExN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
    },
    create: walletOptions => {
      const wallet = new wallets.ZerionWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      handelWCSessionRequest(wallet, zerionWalletUris);
      return wallet;
    },
    connectUI: ConnectUI$1,
    isInstalled: isInstalled$1
  };
};
function isInstalled$1() {
  if (wallets.assertWindowEthereum(globalThis.window)) {
    return !!globalThis.window.ethereum.isZerion;
  }
  return false;
}
function ConnectUI$1(props) {
  const locale = formElements.useTWLocale();
  return /*#__PURE__*/jsxRuntime.jsx(ExtensionOrWCConnectionUI, {
    connect: props.connect,
    connected: props.connected,
    createWalletInstance: props.createWalletInstance,
    goBack: props.goBack,
    meta: props.walletConfig["meta"],
    setConnectedWallet: w => props.setConnectedWallet(w),
    setConnectionStatus: props.setConnectionStatus,
    supportedWallets: props.supportedWallets,
    walletConnectUris: zerionWalletUris,
    walletLocale: locale.wallets.zerionWallet,
    isInstalled: isInstalled$1
  });
}

const rainbowWalletUris = {
  ios: "rainbow://",
  android: "https://rnbwapp.com/",
  other: "https://rnbwapp.com/"
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Rainbow Wallet](https://rainbow.me/en/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * rainbowWallet({
 *  projectId: 'YOUR_PROJECT_ID',
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional configuration options for the wallet
 *
 * ### projectId (optional)
 * When connecting Core using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
const rainbowWallet = options => {
  return {
    id: wallets.RainbowWallet.id,
    recommended: options?.recommended,
    meta: {
      ...wallets.RainbowWallet.meta,
      name: "Rainbow",
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzVfMTQ5KSI+CjxwYXRoIGQ9Ik04MCAwSDBWODBIODBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl81XzE0OSkiLz4KPHBhdGggZD0iTTEzLjMzMzMgMjUuMzMzNEgxNy4zMzMzQzM3Ljk1MTkgMjUuMzMzNCA1NC42NjY2IDQyLjA0ODEgNTQuNjY2NiA2Mi42NjY3VjY2LjY2NjdINjIuNjY2NkM2NC44NzU4IDY2LjY2NjcgNjYuNjY2NiA2NC44NzU4IDY2LjY2NjYgNjIuNjY2N0M2Ni42NjY2IDM1LjQyMDYgNDQuNTc5NCAxMy4zMzM0IDE3LjMzMzMgMTMuMzMzNEMxNS4xMjQyIDEzLjMzMzQgMTMuMzMzMyAxNS4xMjQyIDEzLjMzMzMgMTcuMzMzNFYyNS4zMzM0WiIgZmlsbD0idXJsKCNwYWludDFfcmFkaWFsXzVfMTQ5KSIvPgo8cGF0aCBkPSJNNTYgNjIuNjY2Nkg2Ni42NjY3QzY2LjY2NjcgNjQuODc1OCA2NC44NzU4IDY2LjY2NjYgNjIuNjY2NyA2Ni42NjY2SDU2VjYyLjY2NjZaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfNV8xNDkpIi8+CjxwYXRoIGQ9Ik0xNy4zMzMzIDEzLjMzMzRWMjRIMTMuMzMzM1YxNy4zMzM0QzEzLjMzMzMgMTUuMTI0MiAxNS4xMjQyIDEzLjMzMzQgMTcuMzMzMyAxMy4zMzM0WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzVfMTQ5KSIvPgo8cGF0aCBkPSJNMTMuMzMzMyAyNEgxNy4zMzMzQzM4LjY4ODMgMjQgNTYgNDEuMzExNyA1NiA2Mi42NjY3VjY2LjY2NjdINDRWNjIuNjY2N0M0NCA0Ny45MzkxIDMyLjA2MDkgMzYgMTcuMzMzMyAzNkgxMy4zMzMzVjI0WiIgZmlsbD0idXJsKCNwYWludDRfcmFkaWFsXzVfMTQ5KSIvPgo8cGF0aCBkPSJNNDUuMzMzMyA2Mi42NjY2SDU2VjY2LjY2NjZINDUuMzMzM1Y2Mi42NjY2WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzVfMTQ5KSIvPgo8cGF0aCBkPSJNMTMuMzMzMyAzNC42NjY3VjI0SDE3LjMzMzNWMzQuNjY2N0gxMy4zMzMzWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzVfMTQ5KSIvPgo8cGF0aCBkPSJNMTMuMzMzMyA0MS4zMzMzQzEzLjMzMzMgNDMuNTQyNCAxNS4xMjQyIDQ1LjMzMzMgMTcuMzMzMyA0NS4zMzMzQzI2LjkwNjIgNDUuMzMzMyAzNC42NjY2IDUzLjA5MzcgMzQuNjY2NiA2Mi42NjY2QzM0LjY2NjYgNjQuODc1OCAzNi40NTc1IDY2LjY2NjYgMzguNjY2NiA2Ni42NjY2SDQ1LjMzMzNWNjIuNjY2NkM0NS4zMzMzIDQ3LjIwMjYgMzIuNzk3MyAzNC42NjY2IDE3LjMzMzMgMzQuNjY2NkgxMy4zMzMzVjQxLjMzMzNaIiBmaWxsPSJ1cmwoI3BhaW50N19yYWRpYWxfNV8xNDkpIi8+CjxwYXRoIGQ9Ik0zNC42NjY3IDYyLjY2NjZINDUuMzMzNFY2Ni42NjY2SDM4LjY2NjdDMzYuNDU3NiA2Ni42NjY2IDM0LjY2NjcgNjQuODc1OCAzNC42NjY3IDYyLjY2NjZaIiBmaWxsPSJ1cmwoI3BhaW50OF9yYWRpYWxfNV8xNDkpIi8+CjxwYXRoIGQ9Ik0xNy4zMzMzIDQ1LjMzMzNDMTUuMTI0MiA0NS4zMzMzIDEzLjMzMzMgNDMuNTQyNCAxMy4zMzMzIDQxLjMzMzNWMzQuNjY2NkgxNy4zMzMzVjQ1LjMzMzNaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNV8xNDkpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81XzE0OSIgeDE9IjQwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iODAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE3NDI5OSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDFFNTkiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDFfcmFkaWFsXzVfMTQ5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjMzMzMgNjIuNjY2Nykgcm90YXRlKC05MCkgc2NhbGUoNDkuMzMzMykiPgo8c3RvcCBvZmZzZXQ9IjAuNzcwMjc3IiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg3NTRDOSIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNV8xNDkiIHgxPSI1NS4zMzMzIiB5MT0iNjQuNjY2NiIgeDI9IjY2LjY2NjciIHkyPSI2NC42NjY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl81XzE0OSIgeDE9IjE1LjMzMzMiIHkxPSIxMy4zMzM0IiB4Mj0iMTUuMzMzMyIgeTI9IjI0LjY2NjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzg3NTRDOSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDRfcmFkaWFsXzVfMTQ5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjMzMzMgNjIuNjY2Nykgcm90YXRlKC05MCkgc2NhbGUoMzguNjY2NykiPgo8c3RvcCBvZmZzZXQ9IjAuNzIzOTI5IiBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NV9saW5lYXJfNV8xNDkiIHgxPSI0NS4zMzMzIiB5MT0iNjQuNjY2NiIgeDI9IjU2IiB5Mj0iNjQuNjY2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNV8xNDkiIHgxPSIxNS4zMzMzIiB5MT0iMzQuNjY2NyIgeDI9IjE1LjMzMzMiIHkyPSIyNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50N19yYWRpYWxfNV8xNDkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMzMzMyA2Mi42NjY2KSByb3RhdGUoLTkwKSBzY2FsZSgyOCkiPgo8c3RvcCBvZmZzZXQ9IjAuNTk1MTMiIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ4X3JhZGlhbF81XzE0OSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzNCA2NC42NjY2KSBzY2FsZSgxMS4zMzMzIDMwLjIyMjIpIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzAwQUFGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMURBNDAiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDlfcmFkaWFsXzVfMTQ5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjMzMzMgNDYpIHJvdGF0ZSgtOTApIHNjYWxlKDExLjMzMzMgMjE0LjkxMykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzVfMTQ5Ij4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
    },
    create: walletOptions => {
      const wallet = new wallets.RainbowWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      handelWCSessionRequest(wallet, rainbowWalletUris);
      return wallet;
    },
    connectUI: ConnectUI,
    isInstalled: isInstalled
  };
};
function isInstalled() {
  return !!wallets.getInjectedRainbowProvider();
}
function ConnectUI(props) {
  const locale = formElements.useTWLocale();
  return /*#__PURE__*/jsxRuntime.jsx(ExtensionOrWCConnectionUI, {
    connect: props.connect,
    connected: props.connected,
    createWalletInstance: props.createWalletInstance,
    goBack: props.goBack,
    meta: props.walletConfig["meta"],
    setConnectedWallet: w => props.setConnectedWallet(w),
    setConnectionStatus: props.setConnectionStatus,
    supportedWallets: props.supportedWallets,
    walletConnectUris: rainbowWalletUris,
    walletLocale: locale.wallets.rainbowWallet,
    isInstalled: isInstalled
  });
}

var RainbowWallet = /*#__PURE__*/Object.freeze({
  __proto__: null,
  rainbowWallet: rainbowWallet
});

const PhantomConnectUI = props => {
  const [screen, setScreen] = React.useState("connecting");
  const locale = formElements.useTWLocale().wallets.phantomWallet;
  const {
    walletConfig,
    connected
  } = props;
  const [errorConnecting, setErrorConnecting] = React.useState(false);
  const {
    connect
  } = props;
  const hideBackButton = props.supportedWallets.length === 1;
  const {
    goBack
  } = props;
  const connectToExtension = React.useCallback(async () => {
    try {
      connectPrompted.current = true;
      setScreen("connecting");
      setErrorConnecting(false);
      await wait(1000);
      await connect();
      connected();
    } catch (e) {
      setErrorConnecting(true);
      console.error(e);
    }
  }, [connected, connect]);
  const connectPrompted = React.useRef(false);
  React.useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    const isInstalled = walletConfig.isInstalled ? walletConfig.isInstalled() : false;
    (async () => {
      if (isInstalled) {
        connectToExtension();
      }

      // if phantom is not injected
      else {
        setScreen("get-started");
      }
    })();
  }, [walletConfig, connected, connect, goBack, connectToExtension]);
  if (screen === "connecting") {
    return /*#__PURE__*/jsxRuntime.jsx(ConnectingScreen, {
      locale: {
        getStartedLink: locale.getStartedLink,
        instruction: locale.connectionScreen.instruction,
        tryAgain: locale.connectionScreen.retry,
        inProgress: locale.connectionScreen.inProgress,
        failed: locale.connectionScreen.failed
      },
      hideBackButton: hideBackButton,
      onBack: props.goBack,
      walletName: walletConfig.meta.name,
      walletIconURL: walletConfig.meta.iconURL,
      onGetStarted: () => {
        setScreen("get-started");
      },
      onRetry: () => {
        connectToExtension();
      },
      errorConnecting: errorConnecting
    });
  }
  if (screen === "get-started") {
    return /*#__PURE__*/jsxRuntime.jsx(GetStartedScreen, {
      locale: {
        scanToDownload: locale.getStartedScreen.instruction
      },
      walletIconURL: walletConfig.meta.iconURL,
      walletName: walletConfig.meta.name,
      chromeExtensionLink: walletConfig.meta.urls?.chrome,
      googlePlayStoreLink: walletConfig.meta.urls?.android,
      appleStoreLink: walletConfig.meta.urls?.ios,
      onBack: () => {
        props.goBack();
      }
    });
  }
  return null;
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Phantom Wallet](https://phantom.app/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * phantomWallet({
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional configuration options for the wallet
 *
 * ### recommended (optional)
 * If `true`, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI. Default is `false`
 *
 * @wallet
 */
const phantomWallet = options => {
  return {
    recommended: options?.recommended,
    id: wallets.PhantomWallet.id,
    meta: {
      ...wallets.PhantomWallet.meta,
      iconURL: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPgo="
    },
    create: walletOptions => new wallets.PhantomWallet(walletOptions),
    connectUI: PhantomConnectUI,
    isInstalled() {
      return !!wallets.getInjectedPhantomProvider();
    }
  };
};

/**
 * The default wallets that are used by the [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) if no `supportedWallets` prop is provided.
 *
 * The defaults wallets are:
 * - Metamask
 * - Coinbase
 * - WalletConnect
 * - TrustWallet
 * - RainbowWallet
 * - ZerionWallet
 * - PhantomWallet
 */
const defaultWallets = /* @__PURE__ */(() => [metamaskWallet(), coinbaseWallet(), walletConnect(), trustWallet(), rainbowWallet(), zerionWallet(), phantomWallet()])();

const FormFieldWithIconButton = props => {
  const errorEl = /*#__PURE__*/jsxRuntime.jsxs("div", {
    style: {
      opacity: props.error ? 1 : 0,
      transition: "opacity 0.2s ease"
    },
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.Text, {
      color: "danger",
      size: "sm",
      children: [props.error, " \xA0"]
    })]
  });
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
      htmlFor: props.id,
      children: props.label
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsxRuntime.jsxs(formElements.InputContainer, {
      "data-error": !!props.error,
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
        variant: "transparent",
        required: props.required,
        name: props.name,
        autoComplete: props.autocomplete,
        id: props.id,
        onChange: e => props.onChange(e.target.value),
        value: props.value,
        type: props.noSave ? "text" : props.type,
        style: props.type === "password" && props.noSave ? {
          WebkitTextSecurity: "disc"
        } : undefined,
        "data-test": props.dataTest,
        placeholder: props.placeholder
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.InputButton, {
        type: "button",
        onClick: props.right.onClick,
        children: props.right.icon
      })]
    }), props.error && !props.noErrorShift && errorEl, props.noErrorShift && errorEl]
  });
};
const FormField = props => {
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Label, {
      htmlFor: props.id,
      children: props.label
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
      variant: "outline",
      required: props.required,
      name: props.name,
      autoComplete: props.autocomplete,
      id: props.id,
      onChange: e => props.onChange(e.target.value),
      value: props.value,
      type: props.type,
      "data-error": !!props.errorMessage,
      placeholder: props.placeholder,
      disabled: props.disabled
    }), props.errorMessage && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        size: "sm",
        children: props.errorMessage
      })]
    })]
  });
};

const safeSlugToChainId = {
  eth: 1,
  matic: 137,
  avax: 43114,
  bnb: 56,
  oeth: 10,
  gor: 5,
  "base-gor": 84531
};
const safeChainIdToSlug = {
  1: "eth",
  137: "matic",
  43114: "avax",
  56: "bnb",
  10: "oeth",
  5: "gor",
  84531: "base-gor"
};

exports.ButtonLink = ButtonLink;
exports.ConnectingScreen = ConnectingScreen;
exports.ExtensionOrWCConnectionUI = ExtensionOrWCConnectionUI;
exports.FormField = FormField;
exports.FormFieldWithIconButton = FormFieldWithIconButton;
exports.GetStartedScreen = GetStartedScreen;
exports.HeadlessConnectUI = HeadlessConnectUI;
exports.QRCode = QRCode;
exports.RainbowWallet = RainbowWallet;
exports.ScanScreen = ScanScreen;
exports.TrustWallet = TrustWallet;
exports.WalletLogoSpinner = WalletLogoSpinner;
exports.coinbaseWallet = coinbaseWallet;
exports.coinbaseWallet$1 = coinbaseWallet$1;
exports.defaultWallets = defaultWallets;
exports.handelWCSessionRequest = handelWCSessionRequest;
exports.metamaskWallet = metamaskWallet;
exports.metamaskWallet$1 = metamaskWallet$1;
exports.openWindow = openWindow;
exports.phantomWallet = phantomWallet;
exports.rainbowWallet = rainbowWallet;
exports.safeChainIdToSlug = safeChainIdToSlug;
exports.safeSlugToChainId = safeSlugToChainId;
exports.trustWallet = trustWallet;
exports.wait = wait;
exports.walletConnect = walletConnect;
exports.walletConnect$1 = walletConnect$1;
exports.zerionWallet = zerionWallet;
