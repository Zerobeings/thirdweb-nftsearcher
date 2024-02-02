import { walletIds, SafeSupportedChainsSet, SafeWallet } from '@thirdweb-dev/wallets';
import { useWalletContext, useSupportedChains, useDisconnect } from '@thirdweb-dev/react-core';
import { b as FormField, e as safeSlugToChainId, d as defaultWallets, H as HeadlessConnectUI } from './safeChainSlug-40029368.browser.esm.js';
import { useRef, useEffect, useState, useContext } from 'react';
import { c as useTWLocale, C as Container, M as ModalHeader, L as Line, S as Spacer, T as Text, N as Link, Z as WalletSelection, D as ScreenBottomContainer, B as Button, g as ModalConfigCtx, d as ModalDescription, f as Label, a as iconSize, s as spacing, e as Spinner, _ as StyledSelect, u as useCustomTheme, h as fontSize } from './formElements-9ee7ad15.browser.esm.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import styled from '@emotion/styled';
import { ExclamationTriangleIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import { utils } from 'ethers';
import '@emotion/react';
import 'qrcode';
import 'detect-browser';
import '@radix-ui/colors';

const SelectpersonalWallet = props => {
  const twLocale = useTWLocale();
  const locale = twLocale.wallets.safeWallet;
  const guestWallet = props.personalWallets.find(w => w.id === walletIds.localWallet);
  const personalWallets = props.personalWallets.filter(w => w.id !== walletIds.localWallet);
  const {
    personalWalletConnection
  } = useWalletContext();

  // auto select guest wallet if no other wallets
  const {
    selectWallet
  } = props;
  const selected = useRef(false);
  useEffect(() => {
    if (selected.current) {
      return;
    }
    if (guestWallet && personalWallets.length === 0) {
      selected.current = true;
      selectWallet(guestWallet);
    }
  }, [guestWallet, personalWallets.length, selectWallet]);
  if (guestWallet && personalWallets.length === 0) {
    return /*#__PURE__*/jsx("div", {
      style: {
        height: "250px"
      }
    });
  }
  return /*#__PURE__*/jsxs(Container, {
    flex: "column",
    scrollY: true,
    animate: "fadein",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        title: props.safeWallet.meta.name,
        onBack: props.renderBackButton ? props.onBack : undefined,
        imgSrc: props.safeWallet.meta.iconURL
      })
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsx(Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsxs(Container, {
      px: "lg",
      children: [/*#__PURE__*/jsx(Spacer, {
        y: "md"
      }), /*#__PURE__*/jsx(Text, {
        size: "lg",
        color: "primaryText",
        weight: 500,
        children: locale.connectWalletScreen.title
      }), /*#__PURE__*/jsx(Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsxs(Text, {
        multiline: true,
        children: [locale.connectWalletScreen.subtitle, " ", /*#__PURE__*/jsx(Link, {
          inline: true,
          target: "_blank",
          href: "https://docs.safe.global/getting-started/readme",
          style: {
            whiteSpace: "nowrap"
          },
          children: locale.connectWalletScreen.learnMoreLink
        }), " "]
      })]
    }), /*#__PURE__*/jsx(Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsx(Container, {
      expand: true,
      px: "md",
      scrollY: true,
      children: /*#__PURE__*/jsx(WalletSelection, {
        maxHeight: "300px",
        walletConfigs: personalWallets,
        selectWallet: props.selectWallet,
        selectUIProps: {
          connect: personalWalletConnection.connectWallet,
          connectionStatus: personalWalletConnection.connectionStatus,
          createWalletInstance: personalWalletConnection.createWalletInstance,
          setConnectedWallet: personalWalletConnection.setConnectedWallet,
          setConnectionStatus: personalWalletConnection.setConnectionStatus,
          connectedWallet: personalWalletConnection.activeWallet,
          connectedWalletAddress: personalWalletConnection.address
        }
      })
    }), guestWallet && /*#__PURE__*/jsx(ScreenBottomContainer, {
      children: /*#__PURE__*/jsx(Button, {
        variant: "link",
        fullWidth: true,
        onClick: () => {
          props.selectWallet(guestWallet);
        },
        "data-test": "continue-as-guest-button",
        children: twLocale.connectWallet.continueAsGuest
      })
    })]
  });
};

const SelectAccount = props => {
  const locale = useTWLocale().wallets.safeWallet.accountDetailsScreen;
  const {
    personalWalletConnection
  } = useWalletContext();
  const {
    activeWallet,
    chainId,
    switchChain
  } = personalWalletConnection;
  const {
    connect,
    connectionStatus
  } = props;
  const [safeAddress, setSafeAddress] = useState("");
  const [safeChainId, setSafeChainId] = useState(-1);
  const [safeConnectError, setSafeConnectError] = useState(false);
  const [switchError, setSwitchError] = useState(false);
  const [switchingNetwork, setSwitchingNetwork] = useState(false);
  const chains = useSupportedChains();

  // put supported chains first
  const supportedChains = chains.filter(c => SafeSupportedChainsSet.has(c.chainId));
  const selectedSafeChain = supportedChains.find(c => c.chainId === safeChainId);
  const testnets = supportedChains.filter(c => c.testnet);
  const mainnets = supportedChains.filter(c => !c.testnet);

  // if there are more than one mainnet and testnet, group them
  const useOptGroup = mainnets.length > 0 && testnets.length > 0;
  const handleSubmit = async () => {
    if (!selectedSafeChain || !activeWallet) {
      return;
    }
    setSafeConnectError(false);
    try {
      await connect({
        chain: selectedSafeChain,
        personalWallet: activeWallet,
        safeAddress
      });
      props.onConnect();
    } catch (e) {
      console.error(e);
      setSafeConnectError(true);
    }
  };
  const mismatch = safeChainId !== -1 && chainId !== safeChainId;
  const isValidAddress = utils.isAddress(safeAddress);
  const disableNetworkSelection = supportedChains.length === 1;
  const modalConfig = useContext(ModalConfigCtx);
  return /*#__PURE__*/jsx(Container, {
    fullHeight: true,
    flex: "column",
    scrollY: true,
    children: /*#__PURE__*/jsxs("form", {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      onSubmit: e => {
        e.preventDefault();
        handleSubmit();
      },
      children: [/*#__PURE__*/jsx(Container, {
        p: "lg",
        children: /*#__PURE__*/jsx(ModalHeader, {
          title: props.meta.name,
          onBack: props.renderBackButton ? props.onBack : undefined,
          imgSrc: props.meta.iconURL
        })
      }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
        expand: true,
        flex: "column",
        p: "lg",
        scrollY: true,
        style: {
          paddingTop: 0
        },
        children: [/*#__PURE__*/jsx(Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsx(Text, {
          color: "primaryText",
          size: "lg",
          weight: 500,
          children: locale.title
        }), /*#__PURE__*/jsx(Spacer, {
          y: "sm"
        }), /*#__PURE__*/jsxs(ModalDescription, {
          children: [locale.findSafeAddressIn, " ", /*#__PURE__*/jsx(Link, {
            inline: true,
            target: "_blank",
            href: "https://app.safe.global/home",
            style: {
              display: "inline",
              whiteSpace: "nowrap"
            },
            children: locale.dashboardLink
          })]
        }), /*#__PURE__*/jsx(Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsx(FormField, {
          name: "safeAddress",
          id: "safeAddress",
          errorMessage: safeAddress && !isValidAddress ? "Invalid Safe Address" : undefined,
          autocomplete: "on",
          onChange: value => {
            setSafeConnectError(false);
            if (value.length > 4) {
              const prefix = value.split(":")[0];
              if (prefix && prefix in safeSlugToChainId) {
                setSafeChainId(safeSlugToChainId[prefix]);
                setSafeAddress(value.slice(prefix.length + 1));
              } else {
                setSafeAddress(value);
              }
            } else {
              setSafeAddress(value);
            }
          },
          label: locale.safeAddress,
          type: "text",
          value: safeAddress,
          required: true,
          placeholder: "0x123..."
        }), /*#__PURE__*/jsx(Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsx(Label, {
          htmlFor: "safeNetwork",
          children: locale.network
        }), /*#__PURE__*/jsx(Spacer, {
          y: "sm"
        }), /*#__PURE__*/jsxs("div", {
          style: {
            position: "relative"
          },
          children: [/*#__PURE__*/jsxs(NetworkSelect, {
            "data-error": supportedChains.length === 0 || safeConnectError,
            required: true,
            name: "safeNetwork",
            id: "safeNetwork",
            value: safeChainId,
            disabled: disableNetworkSelection,
            placeholder: locale.selectNetworkPlaceholder,
            onChange: e => {
              setSafeConnectError(false);
              setSwitchError(false);
              setSafeChainId(Number(e.target.value));
            },
            children: [!disableNetworkSelection && /*#__PURE__*/jsx("option", {
              value: "",
              hidden: true,
              children: locale.selectNetworkPlaceholder
            }), useOptGroup ? /*#__PURE__*/jsxs(Fragment, {
              children: [/*#__PURE__*/jsx("optgroup", {
                label: locale.mainnets,
                children: mainnets.map(chain => {
                  return /*#__PURE__*/jsx("option", {
                    value: chain.chainId,
                    children: chain.name
                  }, chain.chainId);
                })
              }), /*#__PURE__*/jsx("optgroup", {
                label: locale.testnets,
                children: testnets.map(chain => {
                  return /*#__PURE__*/jsx("option", {
                    value: chain.chainId,
                    children: chain.name
                  }, chain.chainId);
                })
              })]
            }) : supportedChains.map(chain => {
              return /*#__PURE__*/jsx("option", {
                value: chain.chainId,
                children: chain.name
              }, chain.chainId);
            })]
          }), !disableNetworkSelection && /*#__PURE__*/jsx(StyledChevronDownIcon, {
            width: iconSize.sm,
            height: iconSize.sm,
            style: {
              position: "absolute",
              top: "50%",
              right: spacing.sm,
              transform: "translateY(-50%)",
              pointerEvents: "none"
            }
          })]
        }), /*#__PURE__*/jsx(Spacer, {
          y: "sm"
        }), supportedChains.length === 0 && /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsxs(Text, {
            color: "danger",
            multiline: true,
            size: "xs",
            children: [" ", locale.invalidChainConfig]
          }), /*#__PURE__*/jsx(Spacer, {
            y: "sm"
          })]
        }), safeConnectError && /*#__PURE__*/jsxs(Text, {
          size: "xs",
          multiline: true,
          color: "danger",
          style: {
            display: "flex",
            gap: spacing.sm,
            alignItems: "center"
          },
          children: [/*#__PURE__*/jsx(ExclamationTriangleIcon, {
            width: iconSize.sm,
            height: iconSize.sm
          }), /*#__PURE__*/jsx("span", {
            children: locale.failedToConnect
          })]
        }), switchError && /*#__PURE__*/jsx(Text, {
          color: "danger",
          size: "sm",
          children: /*#__PURE__*/jsxs(Container, {
            flex: "row",
            gap: "sm",
            center: "y",
            children: [/*#__PURE__*/jsx(ExclamationTriangleIcon, {
              width: iconSize.sm,
              height: iconSize.sm
            }), locale.failedToSwitch]
          })
        })]
      }), /*#__PURE__*/jsx(Container, {
        p: "lg",
        flex: "row",
        style: {
          paddingTop: 0,
          justifyContent: "flex-end"
        },
        children: mismatch ? /*#__PURE__*/jsxs(Button, {
          type: "button",
          variant: "primary",
          style: {
            display: "flex",
            alignItems: "center",
            gap: spacing.sm,
            width: modalConfig.modalSize === "compact" ? "100%" : undefined
          },
          onClick: async () => {
            if (!activeWallet) {
              throw new Error("No active wallet");
            }
            setSafeConnectError(false);
            setSwitchError(false);
            setSwitchingNetwork(true);
            try {
              await switchChain(safeChainId);
            } catch (e) {
              setSwitchError(true);
            } finally {
              setSwitchingNetwork(false);
            }
          },
          children: [" ", switchingNetwork ? locale.switchingNetwork : locale.switchNetwork, switchingNetwork && /*#__PURE__*/jsx(Spinner, {
            size: "sm",
            color: "primaryButtonText"
          })]
        }) : /*#__PURE__*/jsxs(Button, {
          variant: "accent",
          type: "submit",
          disabled: connectionStatus === "connecting",
          style: {
            display: "flex",
            alignItems: "center",
            gap: spacing.sm,
            width: modalConfig.modalSize === "compact" ? "100%" : undefined
          },
          children: [connectionStatus === "connecting" ? locale.connecting : locale.connectToSafe, connectionStatus === "connecting" && /*#__PURE__*/jsx(Spinner, {
            size: "sm",
            color: "accentButtonText"
          })]
        })
      })]
    })
  });
};
const NetworkSelect = /* @__PURE__ */StyledSelect(() => {
  const theme = useCustomTheme();
  return {
    width: "100%",
    padding: spacing.sm,
    boxSizing: "border-box",
    outline: "none",
    border: "none",
    borderRadius: "6px",
    color: theme.colors.primaryText,
    background: "none",
    fontSize: fontSize.md,
    boxShadow: `0 0 0 1.5px ${theme.colors.secondaryButtonBg}`,
    appearance: "none",
    "&:focus": {
      boxShadow: `0 0 0 2px ${theme.colors.accentText}`
    },
    "&:invalid": {
      color: theme.colors.secondaryText
    },
    "&[data-error='true']": {
      boxShadow: `0 0 0 1.5px ${theme.colors.danger}`
    },
    "&[disabled]": {
      opacity: 1,
      cursor: "not-allowed"
    }
  };
});
const StyledChevronDownIcon = /* @__PURE__ */styled(ChevronDownIcon)(() => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryText
  };
});

/**
 * A wallet configurator for [Safe](https://safe.global/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * safeWallet({
 *  personalWallets: [
 *    metamaskWallet(),
 *    coinbaseWallet(),
 *    walletConnect()
 *  ],
 * })
 * ```
 *
 * @param config -
 * Optional configuration options for the wallet
 *
 * ### personalWallets (optional)
 * An array of personal wallets to show in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal for personal wallet selection
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
const safeWallet = config => {
  const personalWallets = config?.personalWallets || defaultWallets;
  return {
    id: SafeWallet.id,
    recommended: config?.recommended,
    meta: {
      ...SafeWallet.meta,
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiMxMkZGODAiLz4KPG1hc2sgaWQ9Im1hc2swXzFfNDgiIHN0eWxlPSJtYXNrLXR5cGU6bHVtaW5hbmNlIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxMiIgeT0iMTIiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiI+CjxwYXRoIGQ9Ik00MCA2OEM1NS40NjQgNjggNjggNTUuNDY0IDY4IDQwQzY4IDI0LjUzNiA1NS40NjQgMTIgNDAgMTJDMjQuNTM2IDEyIDEyIDI0LjUzNiAxMiA0MEMxMiA1NS40NjQgMjQuNTM2IDY4IDQwIDY4WiIgZmlsbD0id2hpdGUiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzFfNDgpIj4KPHBhdGggZD0iTTY4LjEzNzUgNy40MjY3Nkg5LjMzNzUyVjcxLjk5NDhINjguMTM3NVY3LjQyNjc2WiIgZmlsbD0iIzEyRkY4MCIvPgo8L2c+CjxwYXRoIGQ9Ik01NS42NjgzIDQwLjAwNDZINTEuODQyOUM1MC43MDA1IDQwLjAwNDYgNDkuNzc0OCA0MC45MzA5IDQ5Ljc3NDggNDIuMDcyN1Y0Ny42MjQ2QzQ5Ljc3NDggNDguNzY3IDQ4Ljg0ODYgNDkuNjkyNyA0Ny43MDY4IDQ5LjY5MjdIMzIuNDg3NkMzMS4zNDUyIDQ5LjY5MjcgMzAuNDE5NiA1MC42MTg5IDMwLjQxOTYgNTEuNzYwN1Y1NS41ODYxQzMwLjQxOTYgNTYuNzI4NSAzMS4zNDU4IDU3LjY1NDIgMzIuNDg3NiA1Ny42NTQySDQ4LjU4NzZDNDkuNzMgNTcuNjU0MiA1MC42NDM0IDU2LjcyNzkgNTAuNjQzNCA1NS41ODYxVjUyLjUxNzNDNTAuNjQzNCA1MS4zNzQ5IDUxLjU2OTYgNTAuNTY0IDUyLjcxMTUgNTAuNTY0SDU1LjY2ODNDNTYuODEwNyA1MC41NjQgNTcuNzM2NCA0OS42Mzc4IDU3LjczNjQgNDguNDk1OVY0Mi4wNDgxQzU3LjczNjQgNDAuOTA1NyA1Ni44MTAxIDQwLjAwNDEgNTUuNjY4MyA0MC4wMDQxVjQwLjAwNDZaIiBmaWxsPSIjMTIxMzEyIi8+CjxwYXRoIGQ9Ik0zMC40MjQgMzIuMzk5N0MzMC40MjQgMzEuMjU3MyAzMS4zNTAzIDMwLjMzMTYgMzIuNDkyMSAzMC4zMzE2SDQ3LjcwMTdDNDguODQ0MSAzMC4zMzE2IDQ5Ljc2OTggMjkuNDA1NCA0OS43Njk4IDI4LjI2MzZWMjQuNDM4MkM0OS43Njk4IDIzLjI5NTggNDguODQzNiAyMi4zNzAxIDQ3LjcwMTcgMjIuMzcwMUgzMS42MTA3QzMwLjQ2ODMgMjIuMzcwMSAyOS41NDI2IDIzLjI5NjQgMjkuNTQyNiAyNC40MzgyVjI3LjM4NTVDMjkuNTQyNiAyOC41Mjc5IDI4LjYxNjQgMjkuNDUzNiAyNy40NzQ1IDI5LjQ1MzZIMjQuNTMwNkMyMy4zODgyIDI5LjQ1MzYgMjIuNDYyNSAzMC4zNzk4IDIyLjQ2MjUgMzEuNTIxNlYzNy45NzYyQzIyLjQ2MjUgMzkuMTE4NiAyMy4zOTIxIDM5Ljk5NzggMjQuNTM0NSAzOS45OTc4SDI4LjM1OTlDMjkuNTAyMyAzOS45OTc4IDMwLjQyOCAzOS4wNzE2IDMwLjQyOCAzNy45Mjk3TDMwLjQyNDYgMzIuNDAwM0wzMC40MjQgMzIuMzk5N1oiIGZpbGw9IiMxMjEzMTIiLz4KPHBhdGggZD0iTTM4LjI5MjkgMzUuOTc1SDQxLjk2NzZDNDMuMTY0OSAzNS45NzUgNDQuMTM3MSAzNi45NDcxIDQ0LjEzNzEgMzguMTQ0NFY0MS44MTkxQzQ0LjEzNzEgNDMuMDE2NCA0My4xNjQ5IDQzLjk4ODYgNDEuOTY3NiA0My45ODg2SDM4LjI5MjlDMzcuMDk1NiA0My45ODg2IDM2LjEyMzUgNDMuMDE2NCAzNi4xMjM1IDQxLjgxOTFWMzguMTQ0NEMzNi4xMjM1IDM2Ljk0NzEgMzcuMDk1NiAzNS45NzUgMzguMjkyOSAzNS45NzVaIiBmaWxsPSIjMTIxMzEyIi8+Cjwvc3ZnPgo="
    },
    create: options => new SafeWallet({
      ...options
    }),
    connectUI(props) {
      return /*#__PURE__*/jsx(SafeConnectUI, {
        ...props,
        personalWallets: personalWallets
      });
    },
    isInstalled() {
      return false;
    },
    personalWallets: personalWallets
  };
};
const SafeConnectUI = props => {
  const {
    personalWalletConnection
  } = useWalletContext();
  const [personalWalletConfig, setPersonalWalletConfig] = useState();
  const disconnect = useDisconnect();

  // screen 2
  if (personalWalletConfig) {
    const _props = {
      goBack: () => {
        personalWalletConnection.disconnectWallet();
        disconnect();
        setPersonalWalletConfig(undefined);
      },
      connected() {
        setPersonalWalletConfig(undefined);
      },
      isOpen: props.isOpen,
      hide: props.hide,
      show: props.show,
      theme: props.theme,
      walletConfig: personalWalletConfig,
      supportedWallets: props.personalWallets,
      selectionData: props.selectionData,
      setSelectionData: props.setSelectionData,
      modalSize: props.modalSize,
      connect(options) {
        return personalWalletConnection.connectWallet(personalWalletConfig, options);
      },
      setConnectedWallet(wallet) {
        personalWalletConnection.setConnectedWallet(wallet);
      },
      setConnectionStatus(status) {
        personalWalletConnection.setConnectionStatus(status);
      },
      connectionStatus: personalWalletConnection.connectionStatus,
      createWalletInstance() {
        return personalWalletConnection.createWalletInstance(personalWalletConfig);
      },
      connectedWallet: personalWalletConnection.activeWallet,
      connectedWalletAddress: personalWalletConnection.address
    };
    if (personalWalletConfig.connectUI) {
      return /*#__PURE__*/jsx(personalWalletConfig.connectUI, {
        ..._props
      });
    }
    return /*#__PURE__*/jsx(HeadlessConnectUI, {
      ..._props
    });
  }

  // screen 1
  if (!personalWalletConnection.activeWallet) {
    return /*#__PURE__*/jsx(SelectpersonalWallet, {
      personalWallets: props.personalWallets,
      onBack: props.goBack,
      safeWallet: props.walletConfig,
      selectWallet: setPersonalWalletConfig,
      renderBackButton: props.supportedWallets.length > 1
    });
  }

  // screen 3
  return /*#__PURE__*/jsx(SelectAccount, {
    renderBackButton: props.supportedWallets.length > 1,
    onBack: () => {
      personalWalletConnection.disconnectWallet();
      disconnect();
      props.goBack();
    },
    onConnect: props.connected,
    connect: props.connect,
    connectionStatus: props.connectionStatus,
    meta: props.walletConfig.meta
  });
};

export { SafeConnectUI, safeWallet };