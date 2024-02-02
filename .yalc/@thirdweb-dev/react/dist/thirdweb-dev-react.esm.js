import { E as ExportLocalWallet } from './oneKeyWallet-63347c54.esm.js';
export { b as ConnectEmbed, a as ConnectModalInline, C as ConnectWallet, M as MediaRenderer, c as NFTSearcher, N as NetworkSelector, w as ThirdwebNftMedia, T as ThirdwebProvider, W as Web3Button, d as defaultTokens, e as embeddedWallet, t as oneKeyWallet, l as useBloctoWallet, j as useCoinbaseWallet, m as useEmbeddedWallet, o as useEmbeddedWalletSendVerificationEmail, n as useEmbeddedWalletUserEmail, k as useFrameWallet, f as useInstalledWallets, i as useMetamask, q as usePaperWallet, p as usePaperWalletUserEmail, g as useRainbowWallet, v as useResolvedMediaType, u as useShowConnectEmbed, h as useTrustWallet, r as useWalletConnect, s as useWalletConnectV1 } from './oneKeyWallet-63347c54.esm.js';
import { F as FormFieldWithIconButton, w as wait, C as ConnectingScreen, G as GetStartedScreen, H as HeadlessConnectUI, S as ScanScreen, h as handelWCSessionRequest, E as ExtensionOrWCConnectionUI } from './safeChainSlug-5618ef58.esm.js';
export { c as coinbaseWallet, d as defaultWallets, m as metamaskWallet, p as phantomWallet, r as rainbowWallet, t as trustWallet, a as walletConnect, z as zerionWallet } from './safeChainSlug-5618ef58.esm.js';
import { useCreateWalletInstance, useSetConnectionStatus, useSetConnectedWallet, useWalletContext, useWallets, shortenAddress, useConnect, useSDKChainId, useConnectionStatus } from '@thirdweb-dev/react-core';
export * from '@thirdweb-dev/react-core';
import { getSmartWalletAddress } from '@thirdweb-dev/wallets/evm/wallets/smart-wallet';
import { useCallback, useState, useEffect, useRef, useContext, useMemo, createContext } from 'react';
export { bloctoWallet } from './bloctoWallet-b6a973b6.esm.js';
export { frameWallet } from './frameWallet-d3e73812.esm.js';
import { LocalWallet, XDEFIWallet, getInjectedXDEFIProvider, SmartWallet, OKXWallet, getInjectedOKXProvider, CoreWallet, getInjectedCoreWalletProvider, CryptoDefiWallet, getInjectedCryptoDefiWalletProvider, RabbyWallet, getInjectedRabbyProvider, Coin98Wallet, getInjectedCoin98Provider } from '@thirdweb-dev/wallets';
export { BloctoWallet, Coin98Wallet, CoinbaseWallet, CoreWallet, CryptoDefiWallet, EmbeddedWallet, FrameWallet, InjectedWallet, LocalWallet, MagicLink, MetaMaskWallet, OKXWallet, OneKeyWallet, PaperWallet, PhantomWallet, RabbyWallet, RainbowWallet, SafeWallet, SignerWallet, SmartWallet, TrustWallet, WalletConnect, ZerionWallet, setWalletAnalyticsEnabled } from '@thirdweb-dev/wallets';
import { i as isMobile, a as iconSize, S as Spacer, T as Text, C as Container, u as useCustomTheme, b as StyledDiv, r as radius, s as spacing, c as useTWLocale, M as ModalHeader, L as Line, d as ModalDescription, B as Button$1, e as Spinner$1, f as Label, g as ModalConfigCtx, h as fontSize, W as WalletEntryButton, j as immutableOverride } from './formElements-76996230.esm.js';
export { k as darkTheme, m as en, l as lightTheme, n as useIsWalletModalOpen, o as useSetIsWalletModalOpen, p as useSetWalletModalConfig } from './formElements-76996230.esm.js';
import { UploadIcon, EyeClosedIcon, EyeOpenIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import styled from '@emotion/styled';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
export { magicLink } from './magicLink-f46bdbd6.esm.js';
export { paperWallet } from './paperWallet-d2be8dd8.esm.js';
export { safeWallet } from './safeWallet-0521b1de.esm.js';
export { walletConnectV1 } from './walletConnectV1-02a5970c.esm.js';
export { u as useSafe } from './useSafe-f4f3957e.esm.js';
export { u as useMagic } from './useMagic-cd08f7a0.esm.js';
import { DEFAULT_BRAND_OPTIONS, createCheckoutWithCardElement, PAPER_APP_URL, PaymentsSDKErrorCode } from '@thirdweb-dev/payments';
export { PayWithCryptoErrorCode, PaymentsSDKErrorCode } from '@thirdweb-dev/payments';
import { css, keyframes, cx } from '@emotion/css';
import './Tooltip-aa542e9d.esm.js';
import '@emotion/react';
import '@radix-ui/react-tooltip';
import '@radix-ui/react-popover';
import 'copy-to-clipboard';
import '@radix-ui/react-tabs';
import 'fuse.js';
import '@thirdweb-dev/chains';
import '@tanstack/react-query';
import 'ethers';
import '@thirdweb-dev/sdk';
import 'tiny-invariant';
import '@radix-ui/react-dialog';
import '@radix-ui/react-focus-scope';
import 'qrcode';
import 'detect-browser';
import '@radix-ui/colors';

/**
 * Hook to connect [Smart wallet](https://portal.thirdweb.com/references/wallets/v2/SmartWallet)
 *
 * `useSmartWallet()` handles connecting both the personal wallet and the Smart Wallet.
 *
 * The `smartWallet()` also need to be added in [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)'s `supportedWallets` prop to enable auto-connection on page load
 *
 * ### Example
 *
 * Set up ThirdwebProvider with supportedWallets
 *
 * ```tsx
 * <ThirdwebProvider
 *  supportedWallets={[
 *    smartWallet(
 *      metamaskWallet(),
 *    ),
 *    smartWallet(
 *      coinbaseWallet(),
 *    )
 *    // ...etc
 *  ]}
 * />
 * ```
 *
 * And then use the hook in your app to connect smart wallet
 *
 * ```tsx
 * import { useSmartWallet } from "@thirdweb-dev/react";
 *
 * function Example() {
 *   // Here we use metamask as the personal wallet
 *   const { connect } = useSmartWallet(metamaskWallet(), {
 *     factoryAddress: "0x...",
 *     gasless: true,
 *   });
 *
 *   return (
 *     <button
 *       onClick={async () => {
 *         await connect();
 *       }}
 *     >
 *       Connect Smart Wallet
 *     </button>
 *   );
 * }
 * ```
 *
 * ## Using `EmbeddedWallet` as the personal signer
 *
 * You can have your users sign in with email or social and then connect their associated Smart Wallet.
 *
 * ```tsx
 * const { connect } = useSmartWallet(embeddedWallet(), {
 *   factoryAddress: factoryAddress,
 *   gasless: true,
 * });
 *
 * const onClick = async () => {
 *   await connect({
 *     connectPersonalWallet: async (embeddedWallet) => {
 *       // login with google and connect the embedded wallet
 *       const authResult = await embeddedWallet.authenticate({
 *         strategy: "google",
 *       });
 *       await embeddedWallet.connect({ authResult });
 *     },
 *   });
 * };
 * ```
 *
 * ## Using `LocalWallet` as the personal signer
 *
 * You can generate wallets on device for your users and connect to the associated Smart Wallet.
 *
 * ```tsx
 * const { connect } = useSmartWallet(localWallet(), {
 *   factoryAddress: "0x...",
 *   gasless: true,
 * });
 *
 * const onClick = async () => {
 *   await connect({
 *     connectPersonalWallet: async (localWallet) => {
 *       // Generate and connect s local wallet before using it as the personal signer
 *       await localWallet.generate();
 *       await localWallet.connect();
 *     },
 *   });
 * };
 * ```
 *
 * ## Predicting the Smart Wallet address
 *
 * THe `useSmartWallet()` also returns a function to predict a smart wallet address given a personal wallet address before connecting to it.
 *
 * ```tsx
 * const { predictAddress } = useSmartWallet(localWallet(), {
 *   factoryAddress: "0x...",
 *   gasless: true,
 * });
 *
 * const onClick = async () => {
 *   const address = await predictAddress({
 *     personalWalletAddress: "0x...",
 *   });
 *   console.log("Predicted Smart Wallet address", address);
 * };
 * ```
 *
 * @param personalWallet - A wallet configuration object from [\@thirdweb-dev/react](https://www.npmjs.com/package/\@thirdweb-dev/react) package.
 *
 * Ex: `metamaksWallet()`, `coinbaseWallet()`, `walletConnectWallet()`, `embeddedWallet()`, `localWallet()`, etc.
 *
 * @param options - Smart Wallet configuration options
 *
 * #### factoryAddress (required)
 * The address of the Smart Wallet Factory contract. Must be of type `string`.
 *
 * #### gasless (required)
 * Whether to turn on or off gasless transactions.
 *
 * - If set to `true`, all gas fees will be paid by a paymaster.
 * - If set to `false`, all gas fees will be paid by the Smart Wallet itself (needs to be funded).
 *
 * Must be a `boolean`.
 *
 * #### factoryInfo (optional)
 * Customize how the Smart Wallet Factory contract is interacted with. If not provided, the default functions will be used.
 *
 * Must be a `object`. The object can contain the following properties:
 *
 * - `createAccount` - a function that returns the transaction object to create a new Smart Wallet.
 * - `getAccountAddress` - a function that returns the address of the Smart Wallet contract given the owner address.
 * - `abi` - optional ABI. If not provided, the ABI will be auto-resolved.
 *
 * ```javascript
 *  {
 *   createAccount: (factory, owner) => {
 *     return factory.prepare("customCreateAccount", [
 *       owner,
 *       getExtraData(),
 *     ]);
 *   },
 *   getAccountAddress(factory, owner) {
 *     return factory.call("getAccountAddress", [owner]);
 *   },
 *   abi: [...]
 * }
 * ```
 *
 * #### accountInfo (optional)
 * Customize how the Smart Wallet Account contract is interacted with. If not provided, the default functions will be used.
 *
 * Must be a `object`. The object can contain the following properties:
 *
 * - `execute` - a function that returns the transaction object to execute an arbitrary transaction.
 * - `getNonce` - a function that returns the current nonce of the account.
 * - `abi` - optional ABI. If not provided, the ABI will be auto-resolved.
 *
 * ```javascript
 * {
 *   execute(account, target, value, data) {
 *     return account.prepare("customExecute", [
 *       target, value, data
 *     ]);
 *   },
 *   getNonce(account) {
 *     return account.call("getNonce");
 *   },
 *   abi: [...]
 * }
 * ```
 *
 * #### bundlerUrl (optional)
 * Your own bundler URL to send user operations to. Uses thirdweb's bundler by default.
 *
 * Must be a `string`.
 *
 * #### paymasterUrl (optional)
 * Your own paymaster URL to send user operations to for gasless transactions. Uses thirdweb's paymaster by default.
 *
 * Must be a `string`.
 *
 * #### entryPointAddress
 * The entrypoint contract address. Uses v0.6 by default.
 *
 * Must be a `string`.
 * 
 * #### deployOnSign
 * Whether to deploy the smart wallet when the user signs a message. Defaults to true.
 * 
 * Must be a `boolean`.
 *
 * @walletConnection
 */
function useSmartWallet(personalWallet, options) {
  const create = useCreateWalletInstance();
  const setStatus = useSetConnectionStatus();
  const setWallet = useSetConnectedWallet();
  const context = useWalletContext();
  const supportedWallets = useWallets();
  const predictAddress = useCallback(async args => {
    return getSmartWalletAddress(context.activeChain, options.factoryAddress, args.personalWalletAddress, args.data);
  }, [context.activeChain, options.factoryAddress]);
  const connect = useCallback(async args => {
    if (!supportedWallets.find(w => w.id === personalWallet.id)) {
      console.warn("Please, add your smart wallet to the supportedWallets prop of the ThirdwebProvider to enjoy auto-connecting to the wallet.");
    }
    const {
      smartWallet
    } = await Promise.resolve().then(function () { return smartWallet$1; });
    setStatus("connecting");
    const pw = create(personalWallet);
    const sw = create(smartWallet(personalWallet, options));
    try {
      if (args?.connectPersonalWallet) {
        // if passed in, use custom function to connect personal wallet
        await args.connectPersonalWallet(pw);
      } else {
        // otherwise default to auto-connecting personal wallet with chainId
        await pw.connect({
          chainId: context.activeChain.chainId
        });
      }
      await sw.connect({
        ...args?.connectionArgs,
        personalWallet: pw
      });
      setStatus("connected");
      setWallet(sw);
    } catch (e) {
      console.error("Error connecting to smart wallet", e);
      setStatus("disconnected");
      throw e;
    }
    return sw;
  }, [context.activeChain.chainId, create, options, personalWallet, setStatus, setWallet, supportedWallets]);
  return {
    connect,
    predictAddress
  };
}

function useLocalWalletInfo(localWalletConfig, persist) {
  const [walletData, setWalletData] = useState("loading");
  const createWalletInstance = useCreateWalletInstance();
  const [localWallet, setLocalWallet] = useState(null);
  useEffect(() => {
    const wallet = createWalletInstance(localWalletConfig);
    setLocalWallet(wallet);
    if (persist) {
      wallet.getSavedData().then(data => {
        setWalletData(data);
      });
    }
  }, [createWalletInstance, localWalletConfig, persist]);
  return {
    setLocalWallet,
    localWallet,
    walletData,
    meta: localWalletConfig.meta,
    persist: persist
  };
}

const DragNDrop = props => {
  const [error, setError] = useState(false);
  const [uploaded, setUploaded] = useState();
  const [isDragging, setIsDragging] = useState(false);
  const dragIn = e => {
    setError(false);
    setUploaded(undefined);
    setIsDragging(true);
    e.preventDefault();
    e.stopPropagation();
  };
  const dragOut = e => {
    setIsDragging(false);
    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileUpload = file => {
    if (file.type !== props.accept) {
      setError(true);
    } else {
      setUploaded(file);
      props.onUpload(file);
    }
  };
  const drop = e => {
    setIsDragging(false);
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const fileContent = e.dataTransfer.files[0];
      if (fileContent) {
        handleFileUpload(fileContent);
        e.dataTransfer.clearData();
      }
    }
  };
  const message = isMobile() ? "Click to Upload" : "Drop your file here or click to upload";
  return /*#__PURE__*/jsx("div", {
    onDragEnter: dragIn,
    onDragLeave: dragOut,
    onDragOver: e => {
      setIsDragging(true);
      e.preventDefault();
      e.stopPropagation();
    },
    onClick: () => {
      setError(false);
    },
    onDrop: drop,
    style: {
      cursor: "pointer"
    },
    children: /*#__PURE__*/jsxs("label", {
      htmlFor: "file-upload",
      children: [/*#__PURE__*/jsx("input", {
        id: "file-upload",
        type: "file",
        accept: props.accept,
        multiple: false,
        style: {
          display: "none"
        },
        onChange: e => {
          if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
          }
        }
      }), /*#__PURE__*/jsx(DropContainer, {
        "data-error": error,
        "data-is-dragging": isDragging,
        children: !uploaded ? /*#__PURE__*/jsxs(Fragment, {
          children: [" ", /*#__PURE__*/jsx(UploadIconSecondary, {
            width: iconSize.lg,
            height: iconSize.lg
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          }), /*#__PURE__*/jsxs(Text, {
            color: "primaryText",
            weight: 600,
            center: true,
            multiline: true,
            children: [" ", message]
          }), /*#__PURE__*/jsx(Spacer, {
            y: "lg"
          }), error ? /*#__PURE__*/jsx(Text, {
            color: "danger",
            size: "sm",
            children: props.locale.wrongFileError
          }) : /*#__PURE__*/jsxs(Text, {
            size: "sm",
            children: [" ", props.extension, " "]
          })]
        }) : /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsxs(Text, {
            weight: 600,
            color: "primaryText",
            center: true,
            multiline: true,
            children: [uploaded.name, " ", props.locale.uploadedSuccessfully]
          }), /*#__PURE__*/jsx(Spacer, {
            y: "md"
          }), /*#__PURE__*/jsx(Container, {
            color: "success",
            children: /*#__PURE__*/jsx(CheckCircleIcon, {
              size: iconSize.xl
            })
          })]
        })
      })]
    })
  });
};
const UploadIconSecondary = /* @__PURE__ */styled(UploadIcon)(() => {
  const theme = useCustomTheme();
  return {
    color: theme.colors.secondaryIconColor,
    transition: "transform 200ms ease, color 200ms ease"
  };
});
const DropContainer = /* @__PURE__ */StyledDiv(() => {
  const theme = useCustomTheme();
  return {
    border: `2px solid ${theme.colors.borderColor}`,
    borderRadius: radius.md,
    padding: `${spacing.xl} ${spacing.md}`,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer",
    transition: "border-color 200ms ease",
    "&:hover, &[data-is-dragging='true']": {
      borderColor: theme.colors.accentText,
      svg: {
        color: theme.colors.accentText
      }
    },
    "&[data-error='true']": {
      borderColor: theme.colors.danger
    }
  };
});
const CheckCircleIcon = props => /*#__PURE__*/jsxs("svg", {
  width: props.size,
  height: props.size,
  viewBox: "0 0 38 38",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/jsx("path", {
    d: "M35.6666 17.4671V19.0004C35.6645 22.5945 34.5008 26.0916 32.3488 28.9701C30.1969 31.8487 27.1721 33.9546 23.7255 34.9736C20.279 35.9926 16.5954 35.8703 13.224 34.6247C9.85272 33.3792 6.97434 31.0773 5.01819 28.0622C3.06203 25.0472 2.1329 21.4805 2.36938 17.8943C2.60586 14.308 3.99526 10.8943 6.33039 8.16221C8.66551 5.43012 11.8212 3.52606 15.3269 2.734C18.8326 1.94194 22.5004 2.30432 25.7833 3.76709",
    stroke: "currentColor",
    strokeWidth: "3.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/jsx("path", {
    d: "M35.6667 5.66699L19 22.3503L14 17.3503",
    stroke: "currentColor",
    strokeWidth: "3.33333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});

const ImportLocalWallet = props => {
  const locale = useTWLocale().wallets.localWallet;
  const [jsonString, setJsonString] = useState();
  const {
    setLocalWallet
  } = useLocalWalletInfo(props.localWalletConf, props.persist);
  const createWalletInstance = useCreateWalletInstance();
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [importedAddress, setImportedAddress] = useState();
  const {
    setConnectedWallet,
    setConnectionStatus
  } = props;
  const handleImport = async () => {
    const localWallet = createWalletInstance(props.localWalletConf);
    if (!localWallet || !jsonString) {
      throw new Error("Invalid state");
    }
    try {
      await localWallet.import({
        encryptedJson: jsonString,
        password
      });
    } catch (e) {
      console.error(e);
      setIsWrongPassword(true);
      return;
    }
    setConnectionStatus("connecting");
    await localWallet.connect();
    await localWallet.save({
      strategy: "encryptedJson",
      password
    });
    setConnectedWallet(localWallet);
    setLocalWallet(localWallet);
    props.onConnect();
  };
  return /*#__PURE__*/jsxs(Container, {
    animate: "fadein",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        onBack: props.goBack,
        title: locale.importScreen.title
      })
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
      p: "lg",
      children: [/*#__PURE__*/jsx(ModalDescription, {
        children: locale.importScreen.description1
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsx(ModalDescription, {
        children: locale.importScreen.description2
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsx(DragNDrop, {
        locale: {
          uploadedSuccessfully: locale.importScreen.uploadedSuccessfully,
          wrongFileError: locale.importScreen.uploadJSON
        },
        extension: "JSON",
        accept: "application/json",
        onUpload: file => {
          const reader = new FileReader();
          reader.onload = event => {
            setJsonString(event.target?.result);
            const obj = JSON.parse(event.target?.result);
            setImportedAddress(obj.address);
          };
          reader.readAsText(file, "utf-8");
        }
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleImport();
        },
        children: [jsonString && /*#__PURE__*/jsxs(Fragment, {
          children: [/*#__PURE__*/jsx("input", {
            type: "text",
            name: "username",
            autoComplete: "off",
            value: importedAddress || "",
            disabled: true,
            style: {
              display: "none"
            }
          }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
            required: true,
            noSave: true,
            name: "password",
            autocomplete: "off",
            id: "password",
            onChange: value => {
              setPassword(value);
              setIsWrongPassword(false);
            },
            right: {
              onClick: () => setShowPassword(!showPassword),
              icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {})
            },
            label: locale.passwordLabel,
            type: showPassword ? "text" : "password",
            value: password,
            error: isWrongPassword ? "Wrong Password" : ""
          }), /*#__PURE__*/jsx(Spacer, {
            y: "xl"
          })]
        }), /*#__PURE__*/jsx(Container, {
          flex: "row",
          style: {
            justifyContent: "flex-end"
          },
          children: /*#__PURE__*/jsx(Button$1, {
            variant: "accent",
            type: "submit",
            disabled: !jsonString,
            style: {
              minWidth: "110px",
              opacity: jsonString ? 1 : 0.5
            },
            children: locale.importScreen.import
          })
        })]
      })]
    })]
  });
};

const CreateLocalWallet_Password = props => {
  const locale = useTWLocale().wallets.localWallet;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordMismatch = confirmPassword && password !== confirmPassword;
  const [isConnecting, setIsConnecting] = useState(false);
  const {
    localWallet
  } = useLocalWalletInfo(props.localWalletConf, props.persist);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = props;
  const [showImportScreen, setShowImportScreen] = useState(false);
  const [generatedAddress, setGeneratedAddress] = useState(null);

  // generating wallet before it's required to render a form with hidden address as username for better autofill
  useEffect(() => {
    if (!localWallet || showImportScreen || localWallet.ethersWallet) {
      return;
    }
    localWallet.generate().then(_address => {
      setGeneratedAddress(_address);
    });
  }, [localWallet, showImportScreen]);
  if (showImportScreen) {
    return /*#__PURE__*/jsx(ImportLocalWallet, {
      localWalletConf: props.localWalletConf,
      onConnect: props.onConnect,
      goBack: () => {
        setShowImportScreen(false);
      },
      persist: props.persist,
      setConnectedWallet: props.setConnectedWallet,
      setConnectionStatus: props.setConnectionStatus
    });
  }
  const handleConnect = async () => {
    if (passwordMismatch || !localWallet) {
      throw new Error("Invalid state");
    }
    setIsConnecting(true);
    setConnectionStatus("connecting");
    await localWallet.connect();
    await localWallet.save({
      strategy: "encryptedJson",
      password
    });
    setConnectedWallet(localWallet);
    setIsConnecting(false);
    props.onConnect();
  };
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    flex: "column",
    animate: "fadein",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        onBack: props.renderBackButton ? props.goBack : undefined,
        title: props.localWalletConf.meta.name
      })
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
      expand: true,
      p: "lg",
      children: [/*#__PURE__*/jsx(ModalDescription, {
        children: locale.createScreen.instruction
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleConnect();
        },
        children: [/*#__PURE__*/jsx("input", {
          type: "text",
          name: "username",
          autoComplete: "off",
          value: generatedAddress || "",
          disabled: true,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
          name: "password",
          required: true,
          autocomplete: "new-password",
          id: "new-password",
          onChange: value => setPassword(value),
          right: {
            icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {}),
            onClick: () => setShowPassword(!showPassword)
          },
          label: locale.passwordLabel,
          type: showPassword ? "text" : "password",
          value: password,
          dataTest: "new-password"
        }), /*#__PURE__*/jsx(Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
          name: "confirm-password",
          required: true,
          autocomplete: "new-password",
          id: "confirm-password",
          onChange: value => setConfirmPassword(value),
          right: {
            icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {}),
            onClick: () => setShowPassword(!showPassword)
          },
          label: locale.confirmPasswordLabel,
          type: showPassword ? "text" : "password",
          value: confirmPassword,
          error: passwordMismatch ? "Passwords don't match" : "",
          dataTest: "confirm-password",
          noErrorShift: true
        }), /*#__PURE__*/jsx(Spacer, {
          y: "md"
        }), /*#__PURE__*/jsxs(Button$1, {
          variant: "accent",
          type: "submit",
          disabled: isConnecting,
          fullWidth: true,
          style: {
            gap: spacing.xs,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          "data-test": "create-new-wallet-button",
          children: [isConnecting ? locale.createScreen.connecting : locale.createScreen.createNewWallet, isConnecting && /*#__PURE__*/jsx(Spinner$1, {
            size: "sm",
            color: "accentButtonText"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx(Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(Button$1, {
        fullWidth: true,
        variant: "link",
        onClick: () => {
          setShowImportScreen(true);
        },
        style: {
          display: "flex",
          gap: spacing.sm,
          alignItems: "center"
        },
        children: locale.createScreen.importWallet
      })
    })]
  });
};
const CreateLocalWallet_Guest = props => {
  const {
    localWallet
  } = useLocalWalletInfo(props.localWallet, props.persist);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = props;
  const {
    onConnect
  } = props;
  const handleConnect = useCallback(async () => {
    if (!localWallet) {
      throw new Error("Invalid state");
    }
    await localWallet.generate();
    setConnectionStatus("connecting");
    await wait(1000);
    await localWallet.connect();
    setConnectedWallet(localWallet);
    onConnect();
  }, [localWallet, setConnectedWallet, onConnect, setConnectionStatus]);
  const connecting = useRef(false);
  useEffect(() => {
    if (connecting.current || !localWallet) {
      return;
    }
    connecting.current = true;
    handleConnect();
  }, [handleConnect, localWallet]);
  return /*#__PURE__*/jsx(Container, {
    flex: "row",
    center: "both",
    fullHeight: true,
    style: {
      minHeight: "300px"
    },
    children: /*#__PURE__*/jsx(Spinner$1, {
      size: "xl",
      color: "accentText"
    })
  });
};

const OverrideConfirmation = props => {
  const locale = useTWLocale().wallets.localWallet.warningScreen;
  const isCompact = props.modalSize === "compact";
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    flex: "column",
    animate: "fadein",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        onBack: props.onBack,
        title: locale.title
      })
    }), /*#__PURE__*/jsxs(Container, {
      p: isCompact ? "lg" : "xxl",
      expand: true,
      center: "y",
      flex: "column",
      children: [/*#__PURE__*/jsx(Container, {
        flex: "row",
        center: "x",
        color: "danger",
        children: /*#__PURE__*/jsx(ExclamationTriangleIcon, {
          width: iconSize.xl,
          height: iconSize.xl
        })
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsx(Text, {
        multiline: true,
        center: true,
        balance: true,
        children: locale.warning
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsx(Container, {
        flex: "row",
        style: {
          justifyContent: "flex-end"
        },
        children: /*#__PURE__*/jsx(Button$1, {
          variant: "accent",
          fullWidth: true,
          onClick: props.onBackup,
          children: locale.backupWallet
        })
      })]
    })]
  });
};

/**
 * For No-Credential scenario
 */
const ReconnectLocalWallet = props => {
  const locale = useTWLocale().wallets.localWallet;
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const {
    setConnectedWallet,
    setConnectionStatus
  } = props;
  const [isConnecting, setIsConnecting] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showBackupConfirmation, setShowBackupConfirmation] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const {
    localWallet,
    meta,
    walletData
  } = useLocalWalletInfo(props.localWallet, props.persist);
  const savedAddress = walletData ? walletData === "loading" ? "" : walletData.address : "";
  if (showExport) {
    if (!localWallet) {
      throw new Error("Invalid state");
    }
    return /*#__PURE__*/jsx(ExportLocalWallet, {
      modalSize: props.modalSize,
      localWalletConfig: props.localWallet,
      onBack: () => {
        setShowExport(false);
      },
      onExport: () => {
        setShowExport(false);
        setShowBackupConfirmation(false);
        setShowCreate(true);
      },
      walletInstance: props.walletInstance,
      walletAddress: props.connectedWalletAddress
    });
  }
  if (showBackupConfirmation) {
    return /*#__PURE__*/jsx(OverrideConfirmation, {
      meta: meta,
      onBackup: () => {
        setShowExport(true);
      },
      onBack: () => {
        setShowBackupConfirmation(false);
      },
      modalSize: props.modalSize
    });
  }
  if (showCreate) {
    return /*#__PURE__*/jsx(CreateLocalWallet_Password, {
      renderBackButton: props.supportedWallets.length > 1,
      localWalletConf: props.localWallet,
      goBack: () => {
        setShowCreate(false);
      },
      onConnect: props.onConnect,
      persist: props.persist,
      setConnectedWallet: props.setConnectedWallet,
      setConnectionStatus: props.setConnectionStatus
    });
  }
  const handleReconnect = async () => {
    if (!localWallet) {
      throw new Error("Invalid state");
    }
    setIsConnecting(true);
    try {
      await localWallet.load({
        strategy: "encryptedJson",
        password
      });
      setConnectionStatus("connecting");
      await localWallet.connect();
      setConnectedWallet(localWallet);
      props.onConnect();
    } catch (e) {
      setIsWrongPassword(true);
    }
    setIsConnecting(false);
  };
  return /*#__PURE__*/jsxs(Container, {
    animate: "fadein",
    flex: "column",
    fullHeight: true,
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        onBack: props.renderBackButton ? props.goBack : undefined,
        title: meta.name
      })
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsxs(Container, {
      p: "lg",
      expand: true,
      children: [/*#__PURE__*/jsx(Text, {
        multiline: true,
        size: "lg",
        color: "primaryText",
        children: locale.reconnectScreen.title
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsx(Label, {
        children: locale.reconnectScreen.savedWallet
      }), /*#__PURE__*/jsx(Spacer, {
        y: "sm"
      }), /*#__PURE__*/jsx(Text, {
        children: savedAddress === "" ? "Loading..." : shortenAddress(savedAddress)
      }), /*#__PURE__*/jsx(Spacer, {
        y: "xl"
      }), /*#__PURE__*/jsxs("form", {
        onSubmit: e => {
          e.preventDefault();
          handleReconnect();
        },
        children: [/*#__PURE__*/jsx("input", {
          type: "text",
          name: "username",
          autoComplete: "off",
          value: savedAddress,
          disabled: true,
          style: {
            display: "none"
          }
        }), /*#__PURE__*/jsx(FormFieldWithIconButton, {
          required: true,
          name: "current-password",
          autocomplete: "current-password",
          id: "current-password",
          onChange: value => {
            setPassword(value);
            setIsWrongPassword(false);
          },
          right: {
            onClick: () => setShowPassword(!showPassword),
            icon: showPassword ? /*#__PURE__*/jsx(EyeClosedIcon, {}) : /*#__PURE__*/jsx(EyeOpenIcon, {})
          },
          label: locale.passwordLabel,
          type: showPassword ? "text" : "password",
          value: password,
          error: isWrongPassword ? "Wrong Password" : "",
          dataTest: "current-password",
          placeholder: locale.enterYourPassword
        }), /*#__PURE__*/jsx(Spacer, {
          y: "md"
        }), /*#__PURE__*/jsxs(Button$1, {
          variant: "accent",
          type: "submit",
          fullWidth: true,
          style: {
            display: "flex",
            gap: spacing.sm
          },
          children: [locale.reconnectScreen.continue, isConnecting && /*#__PURE__*/jsx(Spinner$1, {
            size: "sm",
            color: "accentButtonText"
          })]
        })]
      })]
    }), /*#__PURE__*/jsx(Spacer, {
      y: "sm"
    }), /*#__PURE__*/jsx(Line, {}), /*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(Button$1, {
        variant: "link",
        fullWidth: true,
        style: {
          textAlign: "center"
        },
        onClick: () => {
          setShowBackupConfirmation(true);
        },
        children: locale.reconnectScreen.createNewWallet
      })
    })]
  });
};

const LocalWalletConnectUI = props => {
  const {
    walletData
  } = useLocalWalletInfo(props.walletConfig, props.persist);
  if (!props.persist) {
    return /*#__PURE__*/jsx(CreateLocalWallet_Guest, {
      persist: props.persist,
      localWallet: props.walletConfig,
      goBack: props.goBack,
      onConnect: props.connected,
      setConnectedWallet: props.setConnectedWallet,
      setConnectionStatus: props.setConnectionStatus
    });
  }
  if (walletData === "loading") {
    return /*#__PURE__*/jsx(Container, {
      flex: "row",
      center: "both",
      style: {
        height: "300px"
      },
      children: /*#__PURE__*/jsx(Spinner$1, {
        size: "xl",
        color: "accentText"
      })
    });
  }
  if (walletData) {
    return /*#__PURE__*/jsx(ReconnectLocalWallet, {
      modalSize: props.modalSize,
      renderBackButton: props.supportedWallets.length > 1,
      supportedWallets: props.supportedWallets,
      onConnect: props.connected,
      goBack: props.goBack,
      localWallet: props.walletConfig,
      persist: props.persist,
      walletInstance: props.connectedWallet,
      connectedWalletAddress: props.connectedWalletAddress,
      setConnectedWallet: props.setConnectedWallet,
      setConnectionStatus: props.setConnectionStatus
    });
  }
  return /*#__PURE__*/jsx(CreateLocalWallet_Password, {
    goBack: props.goBack,
    localWalletConf: props.walletConfig,
    onConnect: props.connected,
    renderBackButton: props.supportedWallets.length > 1,
    persist: props.persist,
    setConnectedWallet: props.setConnectedWallet,
    setConnectionStatus: props.setConnectionStatus
  });
};

const desktopIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzY0KSIvPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMV82NCkiPgo8cGF0aCBkPSJNNTguNzUgMTkuMTY2N0gyMS4yNUMxOC45NTgzIDE5LjE2NjcgMTcuMDgzMyAyMS4wNDE3IDE3LjA4MzMgMjMuMzMzNFY0OC4zMzM0QzE3LjA4MzMgNTAuNjI1IDE4Ljk1ODMgNTIuNSAyMS4yNSA1Mi41SDM1LjgzMzNMMzEuNjY2NyA1OC43NVY2MC44MzM0SDQ4LjMzMzNWNTguNzVMNDQuMTY2NyA1Mi41SDU4Ljc1QzYxLjA0MTcgNTIuNSA2Mi45MTY3IDUwLjYyNSA2Mi45MTY3IDQ4LjMzMzRWMjMuMzMzNEM2Mi45MTY3IDIxLjA0MTcgNjEuMDQxNyAxOS4xNjY3IDU4Ljc1IDE5LjE2NjdaTTU4Ljc1IDQ0LjE2NjdIMjEuMjVWMjMuMzMzNEg1OC43NVY0NC4xNjY3WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfNjQiIHgxPSI0MCIgeTE9IjAiIHgyPSI0MCIgeTI9IjgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNDRTExQUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTAwQkI1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV82NCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1IDE1KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
const phoneIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl80NF8yKSIvPgo8cGF0aCBkPSJNNDguNjE1NCAxNkgzMS4zODQ2QzI4LjQxMjMgMTYgMjYgMTguMzkyNyAyNiAyMS4zNDA5VjU3LjY1OTFDMjYgNjAuNjA3MyAyOC40MTIzIDYzIDMxLjM4NDYgNjNINDguNjE1NEM1MS41ODc3IDYzIDU0IDYwLjYwNzMgNTQgNTcuNjU5MVYyMS4zNDA5QzU0IDE4LjM5MjcgNTEuNTg3NyAxNiA0OC42MTU0IDE2Wk00MCA2MC44NjM2QzM4LjIxMjMgNjAuODYzNiAzNi43NjkyIDU5LjQzMjMgMzYuNzY5MiA1Ny42NTkxQzM2Ljc2OTIgNTUuODg1OSAzOC4yMTIzIDU0LjQ1NDUgNDAgNTQuNDU0NUM0MS43ODc3IDU0LjQ1NDUgNDMuMjMwOCA1NS44ODU5IDQzLjIzMDggNTcuNjU5MUM0My4yMzA4IDU5LjQzMjMgNDEuNzg3NyA2MC44NjM2IDQwIDYwLjg2MzZaTTQ5LjY5MjMgNTIuMzE4MkgzMC4zMDc3VjIyLjQwOTFINDkuNjkyM1Y1Mi4zMTgyWiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl80NF8yIiB4MT0iNDAiIHkxPSIwIiB4Mj0iNDAiIHkyPSI4MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQ0UxMUFCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzkwMEJCNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=`;

/**
 * A wallet configurator for Local wallet which allows integrating a "Guest Login" experience to app.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * localWallet({
 *  persist: true,
 * })
 * ```
 *
 * @param config -
 * Optional object containing the following properties to configure the wallet
 *
 * ### persist (optional)
 *
 * If `true`, the encrypted wallet JSON will be stored on localStorage with user's password.
 * the user will not need to enter their password again when they visit the site. Because of this, the wallet can not be auto connected.
 *
 * If `false`, wallet will not be stored, and no password will be required to connect.
 * the wallet will be lost when the user leaves or reloads the page.
 *
 * By default, it is set to `true`.
 *
 * @wallet
 */
const localWallet = config => {
  return {
    id: LocalWallet.id,
    isHeadless: true,
    meta: {
      ...LocalWallet.meta,
      name: "Guest Wallet",
      iconURL: isMobile() ? phoneIcon : desktopIcon
    },
    create: options => new LocalWallet(options),
    connectUI(props) {
      return /*#__PURE__*/jsx(LocalWalletConnectUI, {
        ...props,
        persist: config && config.persist !== undefined ? config.persist : true
      });
    }
  };
};

const XDefiConnectUI = props => {
  const [screen, setScreen] = useState("connecting");
  const locale = useTWLocale().wallets.xdefiWallet;
  const {
    walletConfig,
    connected
  } = props;
  const [errorConnecting, setErrorConnecting] = useState(false);
  const {
    connect
  } = props;
  const hideBackButton = props.supportedWallets.length === 1;
  const {
    goBack
  } = props;
  const connectToExtension = useCallback(async () => {
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
  const connectPrompted = useRef(false);
  useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    const isInstalled = walletConfig.isInstalled ? walletConfig.isInstalled() : false;
    (async () => {
      if (isInstalled) {
        connectToExtension();
      }

      // if xdefi is not injected
      else {
        setScreen("get-started");
      }
    })();
  }, [walletConfig, connected, connect, goBack, connectToExtension]);
  if (screen === "connecting") {
    return /*#__PURE__*/jsx(ConnectingScreen, {
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
    return /*#__PURE__*/jsx(GetStartedScreen, {
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
const xdefiWallet = options => {
  return {
    recommended: options?.recommended,
    id: "XDEFI",
    meta: {
      name: "XDEFI Wallet",
      urls: {
        chrome: "https://chromewebstore.google.com/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf"
      },
      iconURL: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='12' fill='%23335DE5'/%3E%3Cpath d='M44.3735 42.8737C40.1971 45.4756 34.607 46.8157 28.9456 46.5293C24.1856 46.2952 20.2816 44.5779 17.9211 41.7548C15.8459 39.231 15.0418 35.9006 15.5865 32.0692C15.7711 30.7959 16.1495 29.5586 16.7084 28.4005L16.7862 28.2379C18.7456 24.4541 21.6534 21.2473 25.2235 18.933C28.7936 16.6188 32.9031 15.2768 37.1472 15.0392C41.3913 14.8017 45.624 15.6767 49.4287 17.5781C53.2333 19.4796 56.4788 22.3419 58.8457 25.8835C61.2128 29.4252 62.6196 33.5239 62.9277 37.7764C63.2359 42.029 62.4348 46.2887 60.6035 50.1363C58.772 53.9841 55.9733 57.2872 52.4827 59.7206C48.9923 62.154 44.9302 63.6337 40.6964 64.0144L40.9557 67C45.7093 66.5753 50.2705 64.9158 54.1899 62.1849C58.1096 59.4542 61.2523 55.7461 63.3084 51.4264C65.3647 47.1067 66.2635 42.3241 65.9163 37.5499C65.5691 32.7757 63.988 28.1746 61.3286 24.1998C58.6694 20.225 55.0235 17.0137 50.7504 14.8823C46.4772 12.7508 41.7242 11.7728 36.9596 12.0444C32.1951 12.3161 27.5832 13.8281 23.5784 16.4315C19.5736 19.0349 16.3141 22.64 14.1209 26.8914L14.0171 27.1061C13.3238 28.5432 12.8557 30.079 12.6293 31.6594C11.9808 36.3299 12.986 40.4864 15.6124 43.6869C18.4853 47.1864 23.161 49.268 28.7705 49.5411C35.5993 49.8859 42.389 48.019 47.2074 44.5844L44.3735 42.8737Z' fill='white'/%3E%3Cpath d='M50.0863 46.2693C47.3691 48.637 41.0527 52.9301 30.573 53.5155C18.8417 54.1661 13.952 50.3412 13.9066 50.3022L12.9598 51.4731L13.9131 50.3218L12 52.6244C12.2075 52.8 16.8962 56.5988 27.9077 56.5988C28.8091 56.5988 29.7559 56.5988 30.7416 56.5208C43.4069 55.8118 50.3652 50.2697 52.7906 47.9019L50.0863 46.2693Z' fill='white'/%3E%3Cpath d='M55.1712 49.366C53.5646 51.4845 51.5868 53.2919 49.3347 54.6999C41.397 59.8388 31.2999 60.5023 24.2313 60.1444L24.0822 63.1431C25.2689 63.2017 26.4103 63.2277 27.5192 63.2277C47.4541 63.2277 55.5085 54.1211 57.7588 50.8687L55.1647 49.34' fill='white'/%3E%3Cpath d='M54.4124 38.0117C55.7338 38.0117 56.805 36.9372 56.805 35.6117C56.805 34.2862 55.7338 33.2116 54.4124 33.2116C53.0908 33.2116 52.0195 34.2862 52.0195 35.6117C52.0195 36.9372 53.0908 38.0117 54.4124 38.0117Z' fill='white'/%3E%3C/svg%3E%0A"
    },
    create: walletOptions => new XDEFIWallet(walletOptions),
    connectUI: XDefiConnectUI,
    isInstalled() {
      return !!getInjectedXDEFIProvider();
    }
  };
};

const SmartWalletConnecting = props => {
  const locale = useTWLocale().wallets.smartWallet;
  const {
    personalWallet,
    personalWalletChainId,
    switchChainPersonalWallet
  } = props;
  const connect = useConnect();
  const targetChain = useWalletContext().activeChain;
  const sdkChainId = useSDKChainId();
  const wrongNetwork = sdkChainId !== personalWalletChainId;
  const [connectError, setConnectError] = useState(false);
  const [switchError, setSwitchError] = useState(false);
  const [switchingNetwork, setSwitchingNetwork] = useState(false);
  const connectionStatus = useConnectionStatus();
  const {
    onConnect
  } = props;
  const connectStarted = useRef(false);
  const modalSize = useContext(ModalConfigCtx).modalSize;
  const handleConnect = useCallback(async () => {
    if (!personalWallet || connectStarted.current) {
      return;
    }
    setConnectError(false);
    try {
      connectStarted.current = true;
      await connect(props.smartWallet, {
        personalWallet: personalWallet
      });
      onConnect();
    } catch (e) {
      console.error(e);
      setConnectError(true);
    }
  }, [personalWallet, connect, props.smartWallet, onConnect]);
  useEffect(() => {
    if (!wrongNetwork) {
      handleConnect();
    }
  }, [wrongNetwork, handleConnect, personalWallet]);
  if (!connectError && (connectionStatus === "connecting" || !wrongNetwork)) {
    return /*#__PURE__*/jsxs(Container, {
      fullHeight: true,
      flex: "column",
      center: "both",
      style: {
        minHeight: "300px"
      },
      children: [/*#__PURE__*/jsx(Text, {
        color: "primaryText",
        multiline: true,
        center: true,
        children: locale.connecting
      }), /*#__PURE__*/jsx(Spacer, {
        y: "lg"
      }), /*#__PURE__*/jsx(Spinner$1, {
        color: "accentText",
        size: "lg"
      })]
    });
  }
  if (connectError) {
    return /*#__PURE__*/jsx(Container, {
      fullHeight: true,
      animate: "fadein",
      flex: "column",
      center: "both",
      p: "lg",
      style: {
        minHeight: "300px"
      },
      children: /*#__PURE__*/jsx(Text, {
        color: "danger",
        children: locale.failedToConnect
      })
    });
  }
  return /*#__PURE__*/jsxs(Container, {
    fullHeight: true,
    animate: "fadein",
    flex: "column",
    children: [/*#__PURE__*/jsx(Container, {
      p: "lg",
      children: /*#__PURE__*/jsx(ModalHeader, {
        title: props.personalWalletConfig.meta.name,
        imgSrc: props.personalWalletConfig.meta.iconURL,
        onBack: props.onBack
      })
    }), modalSize === "compact" && /*#__PURE__*/jsx(Spacer, {
      y: "lg"
    }), /*#__PURE__*/jsx(Container, {
      expand: true,
      flex: "column",
      center: "both",
      p: "lg",
      children: /*#__PURE__*/jsxs(Container, {
        p: modalSize === "wide" ? "lg" : undefined,
        children: [/*#__PURE__*/jsx(Container, {
          flex: "row",
          center: "x",
          color: "danger",
          children: /*#__PURE__*/jsx(ExclamationTriangleIcon, {
            width: iconSize.lg,
            height: iconSize.lg
          })
        }), /*#__PURE__*/jsx(Spacer, {
          y: "md"
        }), /*#__PURE__*/jsx(Text, {
          size: "lg",
          color: "primaryText",
          center: true,
          weight: 500,
          children: locale.wrongNetworkScreen.title
        }), /*#__PURE__*/jsx(Spacer, {
          y: "lg"
        }), /*#__PURE__*/jsx(Text, {
          multiline: true,
          center: true,
          children: locale.wrongNetworkScreen.subtitle
        }), /*#__PURE__*/jsx(Spacer, {
          y: "xl"
        }), /*#__PURE__*/jsxs(Container, {
          flex: "column",
          gap: "md",
          children: [/*#__PURE__*/jsxs(Button$1, {
            type: "button",
            fullWidth: true,
            variant: "accent",
            style: {
              display: "flex",
              alignItems: "center",
              gap: spacing.sm
            },
            onClick: async () => {
              setConnectError(false);
              setSwitchError(false);
              setSwitchingNetwork(true);
              try {
                await switchChainPersonalWallet(targetChain.chainId);
              } catch (e) {
                setSwitchError(true);
              } finally {
                setSwitchingNetwork(false);
              }
            },
            children: [" ", switchingNetwork ? "Switching" : "Switch Network", switchingNetwork && /*#__PURE__*/jsx(Spinner$1, {
              size: "sm",
              color: "accentButtonText"
            })]
          }), /*#__PURE__*/jsxs(Container, {
            flex: "row",
            gap: "sm",
            center: "both",
            color: "danger",
            style: {
              textAlign: "center",
              fontSize: fontSize.sm,
              opacity: switchError ? 1 : 0,
              transition: "opacity 200ms ease"
            },
            children: [/*#__PURE__*/jsx(ExclamationTriangleIcon, {
              width: iconSize.sm,
              height: iconSize.sm
            }), /*#__PURE__*/jsx("span", {
              children: locale.wrongNetworkScreen.failedToSwitch
            })]
          })]
        })]
      })
    })]
  });
};

const smartWallet = (walletConfig, config) => {
  return {
    ...walletConfig,
    create: options => new SmartWallet({
      ...options,
      ...config
    }),
    connectUI(props) {
      return /*#__PURE__*/jsx(SmartConnectUI, {
        ...props,
        personalWalletConfig: walletConfig
      });
    },
    selectUI: walletConfig.selectUI ? props => /*#__PURE__*/jsx(SmartSelectUI, {
      ...props,
      personalWalletConfig: walletConfig
    }) : undefined,
    personalWallets: [walletConfig]
  };
};
const SmartSelectUI = props => {
  const {
    personalWalletConnection
  } = useWalletContext();
  const PersonalWalletSelectUI = props.personalWalletConfig.selectUI;
  if (!PersonalWalletSelectUI) {
    return /*#__PURE__*/jsx(WalletEntryButton, {
      walletConfig: props.personalWalletConfig,
      selectWallet: () => {
        props.onSelect(undefined);
      }
    });
  }
  return /*#__PURE__*/jsx(PersonalWalletSelectUI, {
    walletConfig: props.personalWalletConfig,
    connect: options => {
      return personalWalletConnection.connectWallet(props.personalWalletConfig, options);
    },
    createWalletInstance: () => {
      return personalWalletConnection.createWalletInstance(props.personalWalletConfig);
    },
    modalSize: props.modalSize,
    onSelect: props.onSelect,
    setConnectedWallet: wallet => {
      personalWalletConnection.setConnectedWallet(wallet);
    },
    setConnectionStatus: status => {
      personalWalletConnection.setConnectionStatus(status);
    },
    connectionStatus: personalWalletConnection.connectionStatus,
    supportedWallets: props.supportedWallets,
    theme: props.theme,
    connectedWallet: personalWalletConnection.activeWallet,
    connectedWalletAddress: personalWalletConnection.address
  });
};
const SmartConnectUI = props => {
  const {
    personalWalletConnection
  } = useWalletContext();
  const {
    walletConfig
  } = props;
  const {
    personalWalletConfig
  } = props;
  if (!personalWalletConnection.activeWallet) {
    const _props = {
      walletConfig: personalWalletConfig,
      connected: () => {
        // override to no-op
      },
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
      createWalletInstance: () => {
        return personalWalletConnection.createWalletInstance(props.personalWalletConfig);
      },
      goBack: props.goBack,
      hide: props.hide,
      isOpen: props.isOpen,
      modalSize: props.modalSize,
      selectionData: props.selectionData,
      setSelectionData: props.setSelectionData,
      show: props.show,
      supportedWallets: props.supportedWallets,
      theme: props.theme,
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
  return /*#__PURE__*/jsx(SmartWalletConnecting, {
    onBack: props.goBack,
    onConnect: () => {
      props.connected();
    },
    smartWallet: walletConfig,
    personalWalletConfig: personalWalletConfig,
    personalWallet: personalWalletConnection.activeWallet,
    personalWalletChainId: personalWalletConnection.chainId || 1,
    switchChainPersonalWallet: personalWalletConnection.switchChain
  });
};

var smartWallet$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  smartWallet: smartWallet,
  SmartConnectUI: SmartConnectUI
});

const OKXScan = props => {
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
  const locale = useTWLocale().wallets.okxWallet;
  const [qrCodeUri, setQrCodeUri] = useState();
  const {
    chainToConnect
  } = useWalletContext();
  const scanStarted = useRef(false);
  useEffect(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    const wallet = createWalletInstance();
    setConnectionStatus("connecting");
    wallet.connectWithQrCode({
      chainId: chainToConnect?.chainId,
      onQrCodeUri(uri) {
        setQrCodeUri(uri);
      },
      onConnected() {
        setConnectedWallet(wallet);
        onConnected();
      }
    });
  }, [createWalletInstance, setConnectedWallet, chainToConnect, onConnected, walletConfig, setConnectionStatus]);
  return /*#__PURE__*/jsx(ScanScreen, {
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

const OKXConnectUI = props => {
  const [screen, setScreen] = useState("connecting");
  const locale = useTWLocale().wallets.okxWallet;
  const {
    walletConfig,
    connected,
    connect
  } = props;
  const [errorConnecting, setErrorConnecting] = useState(false);
  const hideBackButton = props.supportedWallets.length === 1;
  const connectToExtension = useCallback(async () => {
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
  const connectPrompted = useRef(false);
  useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    const isInstalled = walletConfig.isInstalled ? walletConfig.isInstalled() : false;

    // if loading
    (async () => {
      if (isInstalled) {
        connectToExtension();
      }

      // if wallet is not injected
      else {
        // on mobile, deep link to the okx app
        if (isMobile()) {
          window.open(`okx://wallet/dapp/details?dappUrl=${window.location.toString()}`);
        } else {
          // on desktop, show the OKX scan qr code
          setScreen("scanning");
        }
      }
    })();
  }, [connectToExtension, walletConfig]);
  if (screen === "connecting") {
    return /*#__PURE__*/jsx(ConnectingScreen, {
      locale: {
        getStartedLink: locale.getStartedLink,
        instruction: locale.connectionScreen.instruction,
        tryAgain: locale.connectionScreen.retry,
        inProgress: locale.connectionScreen.inProgress,
        failed: locale.connectionScreen.failed
      },
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
    return /*#__PURE__*/jsx(GetStartedScreen, {
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
  if (screen === "scanning") {
    return /*#__PURE__*/jsx(OKXScan, {
      onBack: props.goBack,
      onConnected: props.connected,
      onGetStarted: () => {
        setScreen("get-started");
      },
      hideBackButton: hideBackButton,
      walletConfig: walletConfig,
      createWalletInstance: props.createWalletInstance,
      setConnectedWallet: props.setConnectedWallet,
      setConnectionStatus: props.setConnectionStatus
    });
  }
  return null;
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [OKX Wallet](https://www.okx.com/web3) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * okxWallet({
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
const okxWallet = options => {
  return {
    id: OKXWallet.id,
    recommended: options?.recommended,
    meta: {
      name: "OKX Wallet",
      urls: {
        chrome: "https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
        android: "https://play.google.com/store/apps/details?id=com.okinc.okex.gp&pli=1",
        ios: "https://apps.apple.com/us/app/okx-buy-bitcoin-eth-crypto/id1327268470"
      },
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik00Ni4wMjg0IDMyLjk2NjhIMzMuMDE5OUMzMi40Njc3IDMyLjk2NjggMzIuMDE1IDMzLjQxOTUgMzIuMDE1IDMzLjk3MTZWNDYuOTgwMUMzMi4wMTUgNDcuNTMyMyAzMi40Njc3IDQ3Ljk4NSAzMy4wMTk5IDQ3Ljk4NUg0Ni4wMjg0QzQ2LjU4MDUgNDcuOTg1IDQ3LjAzMzIgNDcuNTMyMyA0Ny4wMzMyIDQ2Ljk4MDFWMzMuOTcxNkM0Ny4wMzMyIDMzLjQxOTUgNDYuNTgwNSAzMi45NjY4IDQ2LjAyODQgMzIuOTY2OFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0zMS4wMTMzIDE4SDE4LjAwNDlDMTcuNDUyNyAxOCAxNyAxOC40NTI3IDE3IDE5LjAwNDlWMzIuMDEzM0MxNyAzMi41NjU1IDE3LjQ1MjcgMzMuMDE4MiAxOC4wMDQ5IDMzLjAxODJIMzEuMDEzM0MzMS41NjU1IDMzLjAxODIgMzIuMDE4MiAzMi41NjU1IDMyLjAxODIgMzIuMDEzM1YxOS4wMDQ5QzMyLjAxNSAxOC40NTI3IDMxLjU2NTUgMTggMzEuMDEzMyAxOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MC45OTUyIDE4SDQ3Ljk4NjdDNDcuNDM0NSAxOCA0Ni45ODE4IDE4LjQ1MjcgNDYuOTgxOCAxOS4wMDQ5VjMyLjAxMzNDNDYuOTgxOCAzMi41NjU1IDQ3LjQzNDUgMzMuMDE4MiA0Ny45ODY3IDMzLjAxODJINjAuOTk1MkM2MS41NDczIDMzLjAxODIgNjIgMzIuNTY1NSA2MiAzMi4wMTMzVjE5LjAwNDlDNjIgMTguNDUyNyA2MS41NDczIDE4IDYwLjk5NTIgMThaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzEuMDEzMyA0Ny45MzM3SDE4LjAwNDlDMTcuNDUyNyA0Ny45MzM3IDE3IDQ4LjM4NjQgMTcgNDguOTM4NlY2MS45NDcxQzE3IDYyLjQ5OTIgMTcuNDUyNyA2Mi45NTE5IDE4LjAwNDkgNjIuOTUxOUgzMS4wMTMzQzMxLjU2NTUgNjIuOTUxOSAzMi4wMTgyIDYyLjQ5OTIgMzIuMDE4MiA2MS45NDcxVjQ4LjkzODZDMzIuMDE1IDQ4LjM4NjQgMzEuNTY1NSA0Ny45MzM3IDMxLjAxMzMgNDcuOTMzN1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MC45OTUyIDQ3LjkzMzdINDcuOTg2N0M0Ny40MzQ1IDQ3LjkzMzcgNDYuOTgxOCA0OC4zODY0IDQ2Ljk4MTggNDguOTM4NlY2MS45NDcxQzQ2Ljk4MTggNjIuNDk5MiA0Ny40MzQ1IDYyLjk1MTkgNDcuOTg2NyA2Mi45NTE5SDYwLjk5NTJDNjEuNTQ3MyA2Mi45NTE5IDYyIDYyLjQ5OTIgNjIgNjEuOTQ3MVY0OC45Mzg2QzYyIDQ4LjM4NjQgNjEuNTQ3MyA0Ny45MzM3IDYwLjk5NTIgNDcuOTMzN1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
    },
    create: walletOptions => {
      const wallet = new OKXWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      return wallet;
    },
    connectUI: OKXConnectUI,
    isInstalled() {
      return !!getInjectedOKXProvider();
    }
  };
};

const coreWalletUris = {
  ios: "core://",
  android: "core://",
  other: "core://"
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Core Wallet](https://core.app/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * coreWallet({
 *  projectId: "my-project-id",
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional object containing the following properties to configure the wallet
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
const coreWallet = options => {
  return {
    id: CoreWallet.id,
    recommended: options?.recommended,
    meta: {
      name: "Core Wallet",
      urls: {
        chrome: "https://chrome.google.com/webstore/detail/core-crypto-wallet-nft-ex/agoakfejjabomempkjlepdflaleeobhb",
        android: "https://play.google.com/store/apps/details?id=com.avaxwallet",
        ios: "https://apps.apple.com/us/app/core-crypto-wallet-nfts/id6443685999"
      },
      iconURL: "data:image/png;base64,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"
    },
    create: walletOptions => {
      const wallet = new CoreWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      handelWCSessionRequest(wallet, coreWalletUris);
      return wallet;
    },
    connectUI: ConnectUI$2,
    isInstalled: isCoreWalletInstalled
  };
};
function isCoreWalletInstalled() {
  return !!getInjectedCoreWalletProvider();
}
function ConnectUI$2(props) {
  const locale = useTWLocale();
  return /*#__PURE__*/jsx(ExtensionOrWCConnectionUI, {
    connect: props.connect,
    connected: props.connected,
    createWalletInstance: props.createWalletInstance,
    goBack: props.goBack,
    meta: props.walletConfig["meta"],
    setConnectedWallet: w => props.setConnectedWallet(w),
    setConnectionStatus: props.setConnectionStatus,
    supportedWallets: props.supportedWallets,
    walletConnectUris: coreWalletUris,
    walletLocale: locale.wallets.coreWallet,
    isInstalled: isCoreWalletInstalled
  });
}

const cryptoDefiWalletUris = {
  ios: "dfw://",
  android: "dfw://",
  other: "dfw://"
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Crypto.com Defi Wallet](https://crypto.com/defi-wallet) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * cryptoDefiWallet({
 *  projectId: "my-project-id",
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional object containing the following properties to configure the wallet
 *
 * ### projectId (optional)
 * When connecting Defi wallet using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
const cryptoDefiWallet = options => {
  return {
    id: CryptoDefiWallet.id,
    recommended: options?.recommended,
    meta: {
      name: "Crypto Defi Wallet",
      urls: {
        chrome: "https://chrome.google.com/webstore/detail/cryptocom-wallet-extensio/hifafgmccdpekplomjjkcfgodnhcellj",
        android: "https://play.google.com/store/apps/details?id=com.defi.wallet",
        ios: "https://apps.apple.com/us/app/crypto-com-l-defi-wallet/id1512048310"
      },
      iconURL: "data:image/png;base64,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"
    },
    create: walletOptions => {
      const wallet = new CryptoDefiWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      handelWCSessionRequest(wallet, cryptoDefiWalletUris);
      return wallet;
    },
    connectUI: ConnectUI$1,
    isInstalled: isWalletInstalled
  };
};
function isWalletInstalled() {
  return !!getInjectedCryptoDefiWalletProvider();
}
function ConnectUI$1(props) {
  const locale = useTWLocale();
  return /*#__PURE__*/jsx(ExtensionOrWCConnectionUI, {
    connect: props.connect,
    connected: props.connected,
    createWalletInstance: props.createWalletInstance,
    goBack: props.goBack,
    meta: props.walletConfig["meta"],
    setConnectedWallet: w => props.setConnectedWallet(w),
    setConnectionStatus: props.setConnectionStatus,
    supportedWallets: props.supportedWallets,
    walletConnectUris: cryptoDefiWalletUris,
    walletLocale: locale.wallets.cryptoDefiWallet,
    isInstalled: isWalletInstalled
  });
}

const RabbyScan = props => {
  const {
    onBack,
    onConnected,
    onGetStarted,
    walletConfig,
    hideBackButton,
    setConnectedWallet,
    setConnectionStatus
  } = props;
  const locale = useTWLocale().wallets.rabbyWallet;
  const createInstance = useCreateWalletInstance();
  const [qrCodeUri, setQrCodeUri] = useState();
  const {
    chainToConnect
  } = useWalletContext();
  const scanStarted = useRef(false);
  useEffect(() => {
    if (scanStarted.current) {
      return;
    }
    scanStarted.current = true;
    const wallet = createInstance(walletConfig);
    setConnectionStatus("connecting");
    wallet.connectWithQrCode({
      chainId: chainToConnect?.chainId,
      onQrCodeUri(uri) {
        setQrCodeUri(uri);
      },
      onConnected() {
        setConnectedWallet(wallet);
        onConnected();
      }
    });
  }, [createInstance, setConnectedWallet, chainToConnect, onConnected, walletConfig, setConnectionStatus]);
  return /*#__PURE__*/jsx(ScanScreen, {
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

const RabbyConnectUI = props => {
  const [screen, setScreen] = useState("connecting");
  const locale = useTWLocale().wallets.rabbyWallet;
  const {
    walletConfig,
    connected
  } = props;
  const {
    connect
  } = props;
  const [errorConnecting, setErrorConnecting] = useState(false);
  const hideBackButton = props.supportedWallets.length === 1;
  const connectToExtension = useCallback(async () => {
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
  const connectPrompted = useRef(false);
  useEffect(() => {
    if (connectPrompted.current) {
      return;
    }
    const isInstalled = walletConfig.isInstalled ? walletConfig.isInstalled() : false;

    // if loading
    (async () => {
      if (isInstalled) {
        connectToExtension();
      }

      // if wallet is not injected
      else {
        // No Rabby mobile app yet
        setScreen("get-started");
      }
    })();
  }, [connectToExtension, walletConfig]);
  if (screen === "connecting") {
    return /*#__PURE__*/jsx(ConnectingScreen, {
      locale: {
        getStartedLink: locale.getStartedLink,
        instruction: locale.connectionScreen.instruction,
        tryAgain: locale.connectionScreen.retry,
        inProgress: locale.connectionScreen.inProgress,
        failed: locale.connectionScreen.failed
      },
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
    return /*#__PURE__*/jsx(GetStartedScreen, {
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
  if (screen === "scanning") {
    return /*#__PURE__*/jsx(RabbyScan, {
      onBack: props.goBack,
      onConnected: props.connected,
      onGetStarted: () => {
        setScreen("get-started");
      },
      hideBackButton: hideBackButton,
      walletConfig: walletConfig,
      setConnectedWallet: props.setConnectedWallet,
      setConnectionStatus: props.setConnectionStatus
    });
  }
  return null;
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Rabby Wallet](https://rabby.io/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * rabbyWallet({
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
const rabbyWallet = options => {
  return {
    id: RabbyWallet.id,
    recommended: options?.recommended,
    meta: {
      name: "Rabby Wallet",
      urls: {
        chrome: "https://chrome.google.com/webstore/detail/rabby-wallet/acmacodkjbdgmoleebolmdjonilkdbch"
      },
      iconURL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9IiM3QjdERkYiLz4KPG1hc2sgaWQ9Im1hc2swXzUzXzI0IiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTIiIHk9IjE2IiB3aWR0aD0iNTUiIGhlaWdodD0iNDkiPgo8cGF0aCBkPSJNNjcgMTZIMTJWNjQuODg4OUg2N1YxNloiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF81M18yNCkiPgo8cGF0aCBkPSJNNjUuNjQ3NSA0NC4zNDE1QzY3Ljc2NTQgMzkuMzE2NiA1Ny4yOTUxIDI1LjI3ODEgNDcuMjkyNCAxOS40MjkzQzQwLjk4NzQgMTQuODk4NCAzNC40MTc3IDE1LjUyMDggMzMuMDg3IDE3LjUxMDNDMzAuMTY3IDIxLjg3NjMgNDIuNzU2MyAyNS41NzU4IDUxLjE3NTkgMjkuODkyOUM0OS4zNjYxIDMwLjcyNzcgNDcuNjYwNSAzMi4yMjU5IDQ2LjY1NzUgMzQuMTQxOUM0My41MTg3IDMwLjUwMjQgMzYuNjI5MyAyNy4zNjg0IDI4LjU0NTIgMjkuODkyOUMyMy4wOTc2IDMxLjU5NDIgMTguNTcwMiAzNS42MDQ5IDE2LjgyMDQgNDEuNjYyNUMxNi4zOTUyIDQxLjQ2MTkgMTUuOTI0NSA0MS4zNTA0IDE1LjQyOTIgNDEuMzUwNEMxMy41MzUzIDQxLjM1MDQgMTIgNDIuOTgxIDEyIDQ0Ljk5MjNDMTIgNDcuMDAzOCAxMy41MzUzIDQ4LjYzNDMgMTUuNDI5MiA0OC42MzQzQzE1Ljc4MDIgNDguNjM0MyAxNi44Nzc4IDQ4LjM4NDMgMTYuODc3OCA0OC4zODQzTDM0LjQxNzcgNDguNTE5MkMyNy40MDMxIDYwLjMzNzUgMjEuODU5NiA2Mi4wNjUxIDIxLjg1OTYgNjQuMTEyNUMyMS44NTk2IDY2LjE2IDI3LjE2MzcgNjUuNjA1MSAyOS4xNTUzIDY0Ljg0MkMzOC42ODkyIDYxLjE4ODUgNDguOTI5MSA0OS44MDIyIDUwLjY4NjIgNDYuNTI0NUM1OC4wNjUyIDQ3LjUwMjIgNjQuMjY2NSA0Ny42MTc4IDY1LjY0NzUgNDQuMzQxNVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl81M18yNCkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MS4xNzQ1IDI5Ljg5MzVDNTEuNTY0NyAyOS43MzAzIDUxLjUwMyAyOS4xMTg3IDUxLjM5NTkgMjguNjM4QzUxLjE0OTUgMjcuNTMzMSA0Ni44OTk4IDIzLjA3NjMgNDIuOTA5MyAyMS4wODAxQzM3LjQ3MTcgMTguMzYwMyAzMy40Njc3IDE4LjUwMDMgMzIuODc1NyAxOS43NTM3QzMzLjk4MzEgMjIuMTY0OCAzOS4xMTg0IDI0LjQyODYgNDQuNDgxOCAyNi43OTI5QzQ2Ljc3IDI3LjgwMTYgNDkuMDk4NCAyOC44MjkgNTEuMTc0NSAyOS44OTM1WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzUzXzI0KSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ0LjI3NCA1NC4xNTk2QzQzLjE3NDMgNTMuNzEzMiA0MS45MzIxIDUzLjMwMzggNDAuNTE5OCA1Mi45MzIyQzQyLjAyNTYgNTAuMDcwNSA0Mi4zNDE1IDQ1LjgzNCA0MC45MTk1IDQzLjE1NTVDMzguOTIzNCAzOS4zOTY0IDM2LjQxOCAzNy4zOTU2IDMwLjU5NiAzNy4zOTU2QzI3LjM5MzcgMzcuMzk1NiAxOC43NzIyIDM4LjU0MTIgMTguNjE5MSA0Ni4xODQ4QzE4LjYwMzEgNDYuOTg2NyAxOC42MTg3IDQ3LjcyMTcgMTguNjczNCA0OC4zOTc2TDM0LjQxNzEgNDguNTE4OEMzMi4yOTQ1IDUyLjA5NDggMzAuMzA2NyA1NC43NDcxIDI4LjU2NjUgNTYuNzYzN0MzMC42NTYgNTcuMzMyNCAzMi4zODAzIDU3LjgwOTYgMzMuOTYzMyA1OC4yNDhDMzUuNDY1MyA1OC42NjM4IDM2Ljg0MDMgNTkuMDQ0NSAzOC4yNzkyIDU5LjQzNDRDNDAuNDUgNTcuNzU0OCA0Mi40OTA2IDU1LjkyMzMgNDQuMjc0IDU0LjE1OTZaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfNTNfMjQpIi8+CjxwYXRoIGQ9Ik0xNi42MTA0IDQ3LjYxMjZDMTcuMjUzNiA1My40MTkxIDIwLjM2MDcgNTUuNjk0NyAyNi43MSA1Ni4zNjgyQzMzLjA1OTMgNTcuMDQxNiAzNi43MDEyIDU2LjU4OTkgNDEuNTQ5OSA1Ny4wNTgzQzQ1LjU5OTYgNTcuNDQ5NyA0OS4yMTU1IDU5LjY0MTMgNTAuNTU2OSA1OC44ODRDNTEuNzY0MiA1OC4yMDIzIDUxLjA4ODcgNTUuNzM5NiA0OS40NzMzIDU0LjE1OThDNDcuMzc5NSA1Mi4xMTE2IDQ0LjQ4MTQgNTAuNjg3NyAzOS4zODIxIDUwLjE4MjVDNDAuMzk4NCA0Ny4yMjc1IDQwLjExMzYgNDMuMDg0MSAzOC41MzUzIDQwLjgyOTlDMzYuMjUzMyAzNy41NzA0IDMyLjA0MSAzNi4wOTY4IDI2LjcxIDM2Ljc0MDdDMjEuMTQwMiAzNy40MTMzIDE1LjgwMzIgNDAuMzI1NiAxNi42MTA0IDQ3LjYxMjZaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNTNfMjQpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81M18yNCIgeDE9IjI3LjkxMDkiIHkxPSIzOS44OTE4IiB4Mj0iNjUuNTA4OSIgeTI9IjQ5LjkzMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl81M18yNCIgeDE9IjU4LjkxMzIiIHkxPSIzOS4xMzkxIiB4Mj0iMzAuMzkyMiIgeTI9IjEyLjIxODgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzg2OTdGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4Njk3RkYiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfNTNfMjQiIHgxPSI0NS4wMjIzIiB5MT0iNTUuMTU3MSIgeDI9IjE4LjQzMzIiIHkyPSI0MC43NjMzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4Njk3RkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODY5N0ZGIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzUzXzI0IiB4MT0iMzAuMTM2NiIgeTE9IjM5LjU5NjQiIHgyPSI0OC45MTgxIiB5Mj0iNjIuMDY2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IndoaXRlIi8+CjxzdG9wIG9mZnNldD0iMC45ODM4OTUiIHN0b3AtY29sb3I9IiNEMUQ4RkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"
    },
    create: walletOptions => {
      const wallet = new RabbyWallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      return wallet;
    },
    connectUI: RabbyConnectUI,
    isInstalled() {
      return !!getInjectedRabbyProvider();
    }
  };
};

const coin98WalletUris = {
  ios: "coin98://",
  android: "coin98://",
  other: "coin98://"
};

/**
 * @wallet
 */

/**
 * A wallet configurator for [Coin98 Wallet](https://coin98.com/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * coin98Wallet({
 *  projectId: "my-project-id",
 *  recommended: true,
 * })
 * ```
 *
 * @param options -
 * Optional object containing the following properties to configure the wallet
 *
 * ### projectId (optional)
 * When connecting Coin98 using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
const coin98Wallet = options => {
  return {
    id: Coin98Wallet.id,
    recommended: options?.recommended,
    meta: {
      name: "Coin98 Wallet",
      urls: {
        chrome: "https://chrome.google.com/webstore/detail/coin98-wallet/aeachknmefphepccionboohckonoeemg",
        android: "https://play.google.com/store/apps/details?id=coin98.crypto.finance.media",
        ios: "https://apps.apple.com/us/app/coin98-super-wallet/id1561969966"
      },
      iconURL: "data:image/png;base64,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"
    },
    create: walletOptions => {
      const wallet = new Coin98Wallet({
        ...walletOptions,
        projectId: options?.projectId,
        qrcode: false
      });
      return wallet;
    },
    connectUI: ConnectUI,
    isInstalled: isCoin98Installed
  };
};
function isCoin98Installed() {
  return !!getInjectedCoin98Provider();
}
function ConnectUI(props) {
  const locale = useTWLocale();
  return /*#__PURE__*/jsx(ExtensionOrWCConnectionUI, {
    connect: props.connect,
    connected: props.connected,
    createWalletInstance: props.createWalletInstance,
    goBack: props.goBack,
    meta: props.walletConfig["meta"],
    setConnectedWallet: w => props.setConnectedWallet(w),
    setConnectionStatus: props.setConnectionStatus,
    supportedWallets: props.supportedWallets,
    walletConnectUris: coin98WalletUris,
    walletLocale: locale.wallets.coin98Wallet,
    isInstalled: isCoin98Installed
  });
}

// wallets that connect via extension and QR scan
function extensionAndQRScanScreens$1(walletName) {
  return {
    connectionScreen: {
      inProgress: "確認待ち",
      failed: "接続に失敗しました",
      instruction: `${walletName}のウォレットで接続リクエストを承認してください`,
      retry: "再試行"
    },
    getStartedScreen: {
      instruction: `QRコードをスキャンして${walletName}アプリをダウンロードしてください`
    },
    scanScreen: {
      instruction: `${walletName}のウォレットアプリでQRコードをスキャンして接続してください`
    },
    getStartedLink: `${walletName}のウォレットを持っていませんか？`
  };
}
function jaDefault() {
  return {
    connectWallet: {
      signIn: "サインイン",
      defaultButtonTitle: "ウォレット接続",
      connecting: "接続中",
      switchNetwork: "ネットワークを切り替える",
      switchingNetwork: "ネットワークの切替中",
      defaultModalTitle: "接続",
      recommended: "推奨",
      installed: "インストール済み",
      continueAsGuest: "ゲストとして続ける",
      connectAWallet: "ウォレットを接続する",
      newToWallets: "ウォレットは初めてですか？",
      getStarted: "始める",
      guest: "ゲスト",
      send: "送る",
      receive: "受け取る",
      currentNetwork: "現在のネットワーク",
      switchAccount: "アカウントを切り替える",
      requestTestnetFunds: "テストネットの資金をリクエストする",
      transactionHistory: "取引履歴",
      backupWallet: "ウォレットのバックアップ",
      guestWalletWarning: "これは一時的なゲストウォレットです。アクセスできなくなることを防ぐため、バックアップをしてください",
      switchTo: "切り替え先",
      // Used in "Switch to <Wallet-Name>"
      connectedToSmartWallet: "スマートウォレットに接続済み",
      confirmInWallet: "ウォレットで確認",
      disconnectWallet: "ウォレットの切断",
      copyAddress: "アドレスをコピー",
      personalWallet: "パーソナルウォレット",
      smartWallet: "スマートウォレット",
      or: "または",
      goBackButton: "戻る",
      // TODO - check translation
      download: {
        chrome: "Chrome拡張をダウンロード",
        android: "Google Playでダウンロード",
        iOS: "App Storeでダウンロード"
      },
      welcomeScreen: {
        defaultTitle: "分散型世界へのゲートウェイ",
        defaultSubtitle: "始めるためにウォレットを接続してください"
      },
      agreement: {
        prefix: "接続することで、以下に同意したことになります：",
        termsOfService: "利用規約",
        and: "および",
        privacyPolicy: "プライバシーポリシー"
      },
      networkSelector: {
        title: "ネットワークの選択",
        mainnets: "メインネット",
        testnets: "テストネット",
        allNetworks: "すべて",
        addCustomNetwork: "カスタムネットワークを追加",
        inputPlaceholder: "ネットワーク名またはチェーンIDを検索",
        categoryLabel: {
          recentlyUsed: "最近使用したもの",
          popular: "人気",
          others: "全てのネットワーク"
        },
        loading: "読み込み中",
        failedToSwitch: "ネットワークの切替に失敗しました"
      },
      receiveFundsScreen: {
        title: "資金を受け取る",
        instruction: "このウォレットに資金を送るためのウォレットアドレスをコピーしてください"
      },
      sendFundsScreen: {
        title: "資金の送付",
        submitButton: "送信",
        token: "トークン",
        sendTo: "送信先",
        amount: "金額",
        successMessage: "取引成功",
        invalidAddress: "無効なアドレス",
        noTokensFound: "トークンが見つかりません",
        searchToken: "トークンのアドレスを検索するか、貼り付けてください",
        transactionFailed: "取引に失敗しました",
        transactionRejected: "取引が拒否されました",
        insufficientFunds: "資金が不足しています",
        selectTokenTitle: "トークンを選択",
        sending: "送信中"
      },
      signatureScreen: {
        instructionScreen: {
          title: "サインイン",
          instruction: "続行するためにウォレットでメッセージリクエストにサインしてください",
          signInButton: "サインイン",
          disconnectWallet: "ウォレットの切断"
        },
        signingScreen: {
          title: "サインイン中",
          prompt: "ウォレットで署名リクエストにサインしてください",
          promptForSafe: "ウォレットで署名リクエストにサインし、Safeで取引を承認してください",
          approveTransactionInSafe: "Safeで取引を承認",
          tryAgain: "再試行",
          failedToSignIn: "サインインに失敗しました",
          inProgress: "確認待ち"
        }
      }
    },
    wallets: {
      walletConnect: {
        scanInstruction: "接続するためにウォレットアプリでこちらをスキャンしてください"
      },
      smartWallet: {
        connecting: "スマートウォレットに接続中",
        failedToConnect: "スマートウォレットに接続できませんでした",
        wrongNetworkScreen: {
          title: "異なるネットワーク",
          subtitle: "ウォレットが必要なネットワークに接続されていません",
          failedToSwitch: "ネットワークの切り替えに失敗しました"
        }
      },
      safeWallet: {
        connectWalletScreen: {
          title: "パーソナルウォレットのリンク",
          subtitle: "Safeを使用するためにパーソナルウォレットを接続してください。",
          learnMoreLink: "もっと詳しく"
        },
        accountDetailsScreen: {
          title: "Safeの詳細を入力してください",
          findSafeAddressIn: "Safeのアドレスは以下で見つけることができます",
          // You can find your safe address in + <dashboardLink>
          dashboardLink: "Safeダッシュボード",
          // <dashboardLink>
          network: "Safeネットワーク",
          selectNetworkPlaceholder: "Safeがデプロイされているネットワーク",
          invalidChainConfig: "アプリにSafeをサポートするチェーンが設定されていないため、Safeを使用できません",
          failedToConnect: "Safeに接続できませんでした。Safeアドレスとネットワークが正しいことを確認してください。",
          failedToSwitch: "ネットワークの切り替えに失敗しました",
          switchNetwork: "ネットワークを切り替える",
          switchingNetwork: "ネットワークを切り替え中",
          connectToSafe: "Safeに接続",
          connecting: "接続中",
          mainnets: "メインネット",
          testnets: "テストネット",
          safeAddress: "Safeアドレス"
        }
      },
      coinbaseWallet: extensionAndQRScanScreens$1("Coinbase"),
      metamaskWallet: extensionAndQRScanScreens$1("MetaMask"),
      okxWallet: extensionAndQRScanScreens$1("OKX"),
      coreWallet: extensionAndQRScanScreens$1("Core"),
      coin98Wallet: extensionAndQRScanScreens$1("Coin98"),
      phantomWallet: extensionAndQRScanScreens$1("Phantom"),
      xdefiWallet: extensionAndQRScanScreens$1("XDEFI"),
      rainbowWallet: extensionAndQRScanScreens$1("Rainbow"),
      trustWallet: extensionAndQRScanScreens$1("Trust"),
      zerionWallet: extensionAndQRScanScreens$1("Zerion"),
      oneKeyWallet: extensionAndQRScanScreens$1("OneKey"),
      cryptoDefiWallet: extensionAndQRScanScreens$1("Crypto Defi"),
      rabbyWallet: extensionAndQRScanScreens$1("Rabby"),
      paperWallet: {
        signIn: "サインイン",
        signInWithGoogle: "Googleでサインイン",
        emailPlaceholder: "メールアドレスを入力してください",
        submitEmail: "続ける",
        invalidEmail: "無効なメールアドレス",
        emailRequired: "メールアドレスが必要です",
        googleLoginScreen: {
          title: "サインイン",
          instruction: "ポップアップ内でGoogleアカウントを選択してください",
          failed: "サインインに失敗しました",
          retry: "再試行"
        },
        emailLoginScreen: {
          title: "サインイン",
          enterCodeSendTo: "送信された確認コードを入力してください",
          // Enter the verification code sent to + <email>
          newDeviceDetected: "新しいデバイスが検出されました",
          enterRecoveryCode: "初回サインアップ時にメールで送信されたリカバリーコードを入力してください",
          invalidCode: "無効な確認コード",
          invalidCodeOrRecoveryCode: "無効な確認コードまたはリカバリーコード",
          verify: "確認",
          failedToSendCode: "確認コードの送信に失敗しました",
          sendingCode: "確認コードを送信中",
          resendCode: "確認コードを再送"
        }
      },
      embeddedWallet: {
        signInWithGoogle: "Googleでサインイン",
        signInWithFacebook: "Facebookでサインイン",
        signInWithApple: "Appleでサインイン",
        emailPlaceholder: "メールアドレスを入力してください",
        submitEmail: "続ける",
        emailRequired: "メールアドレスが必要です",
        invalidEmail: "無効なメールアドレス",
        signIn: "サインイン",
        maxAccountsExceeded: "アカウントの最大数を超えました",
        socialLoginScreen: {
          title: "サインイン",
          instruction: "ポップアップウィンドウでアカウントにサインインします",
          // TODO: check if this is correct
          failed: "サインインに失敗しました",
          retry: "再試行"
        },
        emailLoginScreen: {
          title: "サインイン",
          enterCodeSendTo: "送信された確認コードを入力してください",
          newDeviceDetected: "新しいデバイスが検出されました",
          enterRecoveryCode: "初回サインアップ時にメールで送信されたリカバリーコードを入力してください",
          invalidCode: "無効な確認コード",
          invalidCodeOrRecoveryCode: "無効な確認コードまたはリカバリーコード",
          verify: "確認",
          failedToSendCode: "確認コードの送信に失敗しました",
          sendingCode: "確認コードを送信中",
          resendCode: "確認コードを再送"
        },
        createPassword: {
          title: "パスワードを作成",
          instruction: "アカウントのパスワードを設定してください。新しいデバイスから接続する際にこのパスワードが必要となります。",
          saveInstruction: "パスワードは必ず保存してください。",
          inputPlaceholder: "パスワードを入力してください",
          confirmation: "パスワードを保存しました。",
          submitButton: "パスワードを設定",
          failedToSetPassword: "パスワードの設定に失敗しました。"
        },
        enterPassword: {
          title: "パスワードを入力",
          instruction: "アカウントのパスワードを入力してください",
          inputPlaceholder: "パスワードを入力してください",
          submitButton: "確認",
          wrongPassword: "パスワードが違います"
        }
      },
      magicLink: {
        signIn: "サインイン",
        loginWith: "次でログイン：",
        submitEmail: "続ける",
        loginWithEmailOrPhone: "メールアドレスまたは電話番号でログイン",
        emailOrPhoneRequired: "メールアドレスまたは電話番号が必要です",
        loginWithPhone: "電話番号でログイン",
        phoneRequired: "電話番号が必要です",
        invalidEmail: "無効なメールアドレス",
        invalidPhone: "無効な電話番号",
        invalidEmailOrPhone: "無効なメールアドレスまたは電話番号",
        countryCodeMissing: "電話番号は国コードから始める必要があります",
        emailPlaceholder: "メールアドレスを入力してください",
        emailRequired: "メールアドレスが必要です"
      },
      localWallet: {
        passwordLabel: "パスワード",
        confirmPasswordLabel: "パスワードを確認",
        enterYourPassword: "パスワードを入力してください",
        warningScreen: {
          title: "警告",
          warning: "新しいウォレットを作成すると、現在のウォレットは削除されます。新しいウォレットを作成する前に、ウォレットのバックアップをデバイスに保存してください",
          backupWallet: "ウォレットのバックアップ"
        },
        reconnectScreen: {
          title: "保存されたウォレットへの接続",
          savedWallet: "保存されたウォレット",
          continue: "続ける",
          createNewWallet: "新しいウォレットを作成"
        },
        createScreen: {
          instruction: "ウォレットのパスワードを選択してください。このパスワードで、このウォレットにアクセスしたり、同じパスワードでエクスポートすることができます",
          importWallet: "ウォレットをインポート",
          createNewWallet: "新しいウォレットを作成",
          connecting: "接続中"
        },
        exportScreen: {
          description1: "この操作は、ウォレット情報を含む、パスワードで暗号化されたJSONファイルをデバイスにダウンロードします",
          description2: "このJSONファイルを使用して、同じパスワードでMetaMaskにアカウントをインポートすることができます",
          walletAddress: "ウォレットアドレス",
          download: "ダウンロード",
          title: "ウォレットのバックアップ"
        },
        importScreen: {
          title: "ウォレットをインポート",
          description1: "アプリケーションは、ウォレットの代わりに任意の取引を承認なしで認証することができます",
          description2: "信頼できるアプリケーションにのみ接続することをお勧めします",
          import: "インポート",
          uploadJSON: "JSONファイルをアップロードしてください",
          uploadedSuccessfully: "正常にアップロードされました"
        }
      },
      frameWallet: {
        ...extensionAndQRScanScreens$1("Frame"),
        connectionFailedScreen: {
          title: "Frameに接続できませんでした",
          description: "デスクトップアプリがインストールされていて実行中であることを確認してください。以下のリンクからFrameをダウンロードすることができます。Frameが実行されている場合は、このページをリフレッシュしてください。",
          downloadFrame: "Frameをダウンロード",
          supportLink: "まだ接続に問題がありますか？"
        }
      }
    }
  };
}

/**
 * Calling this function will return the default Japanese locale object to be set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) to localize the thirdweb components.
 *
 * You can also overrides parts of the default locale object by passing an object with the same structure as the default locale object and only those parts will be overridden.
 *
 * @example
 * ### Use default Locale
 * ```tsx
 * const japanese = ja();
 * ```
 *
 * ### Override Locale
 * ```ts
 * const japanese = ja({
 *  connectWallet: {
 *    signIn: "サインイン"
 *  }
 * })
 * ```
 *
 * Pass it to [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)'s `locale` prop to localize the thirdweb components.
 *
 * ```tsx
 * function Example() {
 *   return (
 *      <ThirdwebProvider locale={japanese}>
 *        <App />
 *      </ThirdwebProvider>
 *    )
 * }
 * ```
 *
 * @locale
 */
function ja(overrides) {
  const defaultObj = jaDefault();
  if (!overrides) {
    return defaultObj;
  }
  return immutableOverride(defaultObj, overrides);
}

// ...

function extensionAndQRScanScreens(walletName) {
  return {
    connectionScreen: {
      inProgress: "Esperando confirmación",
      failed: "Conexión fallida",
      instruction: `Acepta la solicitud de conexión en tu cartera ${walletName}`,
      retry: "Intentar de nuevo"
    },
    getStartedScreen: {
      instruction: `Escanea el código QR para descargar la aplicación ${walletName}`
    },
    scanScreen: {
      instruction: `Escanea el código QR con la aplicación de cartera ${walletName} para conectarte`
    },
    getStartedLink: `¿No tienes la cartera ${walletName}?`
  };
}
function esDefault() {
  return {
    connectWallet: {
      signIn: "Iniciar sesión",
      defaultButtonTitle: "Conectar cartera",
      connecting: "Conectando",
      switchNetwork: "Cambiar red",
      switchingNetwork: "Cambiando de red",
      defaultModalTitle: "Conectar",
      recommended: "Recomendado",
      installed: "Instalado",
      continueAsGuest: "Continuar como invitado",
      connectAWallet: "Conectar una cartera",
      newToWallets: "¿Nuevo en carteras?",
      getStarted: "Comenzar",
      guest: "Invitado",
      send: "Enviar",
      receive: "Recibir",
      currentNetwork: "Red actual",
      switchAccount: "Cambiar cuenta",
      requestTestnetFunds: "Solicitar fondos de Testnet",
      transactionHistory: "Historial de transacciones",
      backupWallet: "Respaldar cartera",
      guestWalletWarning: "Esta es una cartera de invitado temporal. Haz una copia de seguridad si no quieres perder el acceso a ella",
      switchTo: "Cambiar a",
      connectedToSmartWallet: "Conectado a la cartera inteligente",
      confirmInWallet: "Confirmar en cartera",
      disconnectWallet: "Desconectar cartera",
      copyAddress: "Copiar dirección",
      personalWallet: "Cartera personal",
      smartWallet: "Cartera inteligente",
      or: "O",
      goBackButton: "Atras",
      download: {
        chrome: "Descargar extensión para Chrome",
        android: "Descargar en Google Play",
        iOS: "Descargar en App Store"
      },
      welcomeScreen: {
        defaultTitle: "Tu puerta de entrada al mundo descentralizado",
        defaultSubtitle: "Conecta una cartera para empezar"
      },
      agreement: {
        prefix: "Al conectar, aceptas los",
        termsOfService: "Términos de servicio",
        and: "y",
        privacyPolicy: "Política de privacidad"
      },
      networkSelector: {
        title: "Seleccionar red",
        mainnets: "Redes principales",
        testnets: "Redes de prueba",
        allNetworks: "Todas",
        addCustomNetwork: "Agregar red personalizada",
        inputPlaceholder: "Buscar red o ID de cadena",
        categoryLabel: {
          recentlyUsed: "Usadas recientemente",
          popular: "Populares",
          others: "Todas las redes"
        },
        loading: "Cargando",
        failedToSwitch: "Error al cambiar de red"
      },
      receiveFundsScreen: {
        title: "Recibir fondos",
        instruction: "Copia la dirección de la cartera para enviar fondos a esta cartera"
      },
      sendFundsScreen: {
        title: "Enviar fondos",
        submitButton: "Enviar",
        token: "Token",
        sendTo: "Enviar a",
        amount: "Cantidad",
        successMessage: "Transacción exitosa",
        invalidAddress: "Dirección inválida",
        noTokensFound: "No se encontraron tokens",
        searchToken: "Buscar o pegar la dirección del token",
        transactionFailed: "Transacción fallida",
        transactionRejected: "Transacción rechazada",
        insufficientFunds: "Fondos insuficientes",
        selectTokenTitle: "Seleccione un Token",
        sending: "Enviando"
      },
      signatureScreen: {
        instructionScreen: {
          title: "Iniciar sesión",
          instruction: "Por favor, firma la solicitud de mensaje en tu cartera para continuar",
          signInButton: "Iniciar sesión",
          disconnectWallet: "Desconectar cartera"
        },
        signingScreen: {
          title: "Iniciando sesión",
          prompt: "Firma la solicitud de firma en tu cartera",
          promptForSafe: "Firma la solicitud de firma en tu cartera y aprueba la transacción en Safe",
          approveTransactionInSafe: "Aprobar transacción en Safe",
          tryAgain: "Intentar de nuevo",
          failedToSignIn: "Error al iniciar sesión",
          inProgress: "Esperando confirmación"
        }
      }
    },
    wallets: {
      walletConnect: {
        scanInstruction: "Escanea esto con tu aplicación de cartera para conectar"
      },
      smartWallet: {
        connecting: "Conectando a Smart Wallet",
        failedToConnect: "Error al conectar con Smart Wallet",
        wrongNetworkScreen: {
          title: "Red incorrecta",
          subtitle: "Tu cartera no está conectada a la red requerida",
          failedToSwitch: "Error al cambiar de red"
        }
      },
      safeWallet: {
        connectWalletScreen: {
          title: "Vincular cartera personal",
          subtitle: "Conecta tu cartera personal para usar Safe",
          learnMoreLink: "Saber más"
        },
        accountDetailsScreen: {
          title: "Introduce los detalles de tu safe",
          findSafeAddressIn: "Puedes encontrar tu dirección de safe en",
          dashboardLink: "Tablero de Safe",
          network: "Red de Safe",
          selectNetworkPlaceholder: "Red a la que se ha desplegado tu safe",
          invalidChainConfig: "No se puede usar Safe: No hay cadenas compatibles con Safe configuradas en la aplicación",
          failedToConnect: "No se pudo conectar con Safe. Asegúrate de que la dirección y red del safe son correctas",
          failedToSwitch: "Error al cambiar de red",
          switchNetwork: "Cambiar de red",
          switchingNetwork: "Cambiando de red",
          connectToSafe: "Conectar a Safe",
          connecting: "Conectando",
          mainnets: "Redes principales",
          testnets: "Redes de prueba",
          safeAddress: "Dirección de Safe"
        }
      },
      coinbaseWallet: extensionAndQRScanScreens("Coinbase"),
      metamaskWallet: extensionAndQRScanScreens("MetaMask"),
      okxWallet: extensionAndQRScanScreens("OKX"),
      coreWallet: extensionAndQRScanScreens("Core"),
      coin98Wallet: extensionAndQRScanScreens("Coin98"),
      phantomWallet: extensionAndQRScanScreens("Phantom"),
      xdefiWallet: extensionAndQRScanScreens("XDEFI"),
      rainbowWallet: extensionAndQRScanScreens("Rainbow"),
      trustWallet: extensionAndQRScanScreens("Trust"),
      zerionWallet: extensionAndQRScanScreens("Zerion"),
      oneKeyWallet: extensionAndQRScanScreens("OneKey"),
      cryptoDefiWallet: extensionAndQRScanScreens("Crypto Defi"),
      rabbyWallet: extensionAndQRScanScreens("Rabby"),
      paperWallet: {
        signIn: "Iniciar sesión",
        signInWithGoogle: "Iniciar sesión con Google",
        emailPlaceholder: "Ingresa tu dirección de correo electrónico",
        submitEmail: "Continuar",
        invalidEmail: "Dirección de correo electrónico inválida",
        emailRequired: "Se requiere dirección de correo electrónico",
        googleLoginScreen: {
          title: "Iniciar sesión",
          instruction: "Selecciona tu cuenta de Google en la ventana emergente",
          failed: "Error al iniciar sesión",
          retry: "Reintentar"
        },
        emailLoginScreen: {
          title: "Iniciar sesión",
          enterCodeSendTo: "Ingresa el código de verificación enviado a",
          newDeviceDetected: "Nuevo dispositivo detectado",
          enterRecoveryCode: "Ingresa el código de recuperación que se te envió por correo electrónico cuando te registraste por primera vez",
          invalidCode: "Código de verificación inválido",
          invalidCodeOrRecoveryCode: "Código de verificación o de recuperación inválido",
          verify: "Verificar",
          failedToSendCode: "Error al enviar el código de verificación",
          sendingCode: "Enviando código de verificación",
          resendCode: "Reenviar código de verificación"
        }
      },
      embeddedWallet: {
        signInWithGoogle: "Iniciar sesión con Google",
        signInWithFacebook: "Iniciar sesión con Facebook",
        signInWithApple: "Iniciar sesión con Apple",
        emailPlaceholder: "Ingresa tu dirección de correo electrónico",
        submitEmail: "Continuar",
        signIn: "Iniciar sesión",
        emailRequired: "Se requiere dirección de correo electrónico",
        invalidEmail: "Dirección de correo electrónico inválida",
        maxAccountsExceeded: "Número máximo de cuentas alcanzado",
        socialLoginScreen: {
          title: "Iniciar sesión",
          instruction: "Inicie sesión en su cuenta en la ventana abierta",
          failed: "Error al iniciar sesión",
          retry: "Reintentar"
        },
        emailLoginScreen: {
          title: "Iniciar sesión",
          enterCodeSendTo: "Ingresa el código de verificación enviado a",
          newDeviceDetected: "Nuevo dispositivo detectado",
          enterRecoveryCode: "Ingresa el código de recuperación que se te envió por correo electrónico cuando te registraste por primera vez",
          invalidCode: "Código de verificación inválido",
          invalidCodeOrRecoveryCode: "Código de verificación o de recuperación inválido",
          verify: "Verificar",
          failedToSendCode: "Error al enviar el código de verificación",
          sendingCode: "Enviando código de verificación",
          resendCode: "Reenviar código de verificación"
        },
        createPassword: {
          title: "Crear contraseña",
          instruction: "Establezca una contraseña para su cuenta. Necesitará esta contraseña cuando se conecte desde un nuevo dispositivo.",
          saveInstruction: "Asegúrese de guardarla",
          inputPlaceholder: "Ingrese su contraseña",
          confirmation: "He guardado mi contraseña",
          submitButton: "Establecer contraseña",
          failedToSetPassword: "Error al establecer la contraseña"
        },
        enterPassword: {
          title: "Ingrese la contraseña",
          instruction: "Ingrese la contraseña de su cuenta",
          inputPlaceholder: "Ingrese su contraseña",
          submitButton: "Verificar",
          wrongPassword: "Contraseña incorrecta"
        }
      },
      magicLink: {
        signIn: "Iniciar sesión",
        loginWith: "Iniciar sesión con",
        submitEmail: "Continuar",
        loginWithEmailOrPhone: "Iniciar sesión con correo electrónico o número de teléfono",
        emailOrPhoneRequired: "Se requiere correo electrónico o número de teléfono",
        loginWithPhone: "Iniciar sesión con número de teléfono",
        phoneRequired: "Se requiere número de teléfono",
        invalidEmail: "Dirección de correo electrónico inválida",
        invalidPhone: "Número de teléfono inválido",
        invalidEmailOrPhone: "Dirección de correo electrónico o número de teléfono inválido",
        countryCodeMissing: "El número de teléfono debe comenzar con un código de país",
        emailPlaceholder: "Ingresa tu dirección de correo electrónico",
        emailRequired: "Se requiere dirección de correo electrónico"
      },
      localWallet: {
        passwordLabel: "Contraseña",
        confirmPasswordLabel: "Confirmar contraseña",
        enterYourPassword: "Ingresa tu contraseña",
        warningScreen: {
          title: "Advertencia",
          warning: "Tu cartera actual se eliminará si creas una nueva. Haz una copia de seguridad de la cartera en tu dispositivo antes de crear una nueva",
          backupWallet: "Copia de seguridad de la cartera"
        },
        reconnectScreen: {
          title: "Conectar a cartera guardada",
          savedWallet: "Cartera guardada",
          continue: "Continuar",
          createNewWallet: "Crear una nueva cartera"
        },
        createScreen: {
          instruction: "Elige una contraseña para tu cartera. Podrás acceder y exportar esta cartera con la misma contraseña",
          importWallet: "Importar cartera",
          createNewWallet: "Crear nueva cartera",
          connecting: "Conectando"
        },
        exportScreen: {
          description1: "Esto descargará un archivo JSON que contiene la información de la cartera en tu dispositivo cifrado con la contraseña",
          description2: "Puedes usar este archivo JSON para importar la cuenta en MetaMask usando la misma contraseña",
          walletAddress: "Dirección de la cartera",
          download: "Descargar",
          title: "Respaldar cartera"
        },
        importScreen: {
          title: "Importar cartera",
          description1: "La aplicación puede autorizar cualquier transacción en nombre de la cartera sin ninguna aprobación",
          description2: "Recomendamos conectar solo con aplicaciones de confianza",
          import: "Importar",
          uploadJSON: "Por favor sube un archivo JSON",
          uploadedSuccessfully: "Subido con éxito"
        }
      },
      frameWallet: {
        ...extensionAndQRScanScreens("Frame"),
        connectionFailedScreen: {
          title: "Fallo al conectar con Frame",
          description: "Asegúrate de que la aplicación de escritorio esté instalada y en funcionamiento. Puedes descargar Frame desde el enlace de abajo. Asegúrate de actualizar esta página una vez que Frame esté funcionando.",
          downloadFrame: "Descargar Frame",
          supportLink: "¿Sigues teniendo problemas para conectar?"
        }
      }
    }
  };
}

/**
 * Calling this function will return the default Spanish locale object to be set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) to localize the thirdweb components.
 *
 * You can also overrides parts of the default locale object by passing an object with the same structure as the default locale object and only those parts will be overridden.
 *
 * @example
 * ### Use default Locale
 * ```tsx
 * const spanish = es();
 * ```
 *
 * ### Override Locale
 * ```ts
 * const spanish = es({
 *  connectWallet: {
 *    signIn: "Iniciar sesión"
 *  }
 * })
 * ```
 *
 * Pass it to [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)'s `locale` prop to localize the thirdweb components.
 *
 * ```tsx
 * function Example() {
 *   return (
 *      <ThirdwebProvider locale={spanish}>
 *        <App />
 *      </ThirdwebProvider>
 *    )
 * }
 * ```
 *
 * @locale
 */
function es(overrides) {
  const defaultObj = esDefault();
  if (!overrides) {
    return defaultObj;
  }
  return immutableOverride(defaultObj, overrides);
}

// UNCHANGED
const defaultContextValue = {
  chainName: "Polygon",
  setChainName: () => {},
  clientId: "",
  appName: ""
};
const PaymentsSDKContext = /* @__PURE__ */createContext(defaultContextValue);
const PaymentsSDKProvider = _ref => {
  let {
    appName = "",
    chainName = "Polygon",
    clientId = "",
    children
  } = _ref;
  const [chainName_, setChainName] = useState(chainName);
  const contextValue = useMemo(() => ({
    chainName: chainName_,
    setChainName,
    appName: appName,
    clientId: clientId
  }), [chainName_, appName, clientId]);
  return /*#__PURE__*/jsx(PaymentsSDKContext.Provider, {
    value: contextValue,
    children: children
  });
};
const usePaymentsSDKContext = () => {
  return useContext(PaymentsSDKContext);
};

// UNCHANGED
css`
  opacity: 0;
`;
css`
  opacity: 1;
`;
const iframeContainer = css`
  position: relative;
  width: 100%;
  height: 100%;
`;
css`
  display: grid;
  position: relative;
  width: 100%;
`;
css`
  transition-delay: 150ms;
  transition-property: opacity;
  transition-duration: 75ms;
`;
css`
  transition-property: opacity;
  transition-duration: 150ms;
`;
css`
  background-color: transparent;
  grid-column-start: 1;
  grid-row-start: 1;
`;

// UNCHANGED
const Spinner = _ref => {
  let {
    className
  } = _ref;
  return /*#__PURE__*/jsx("div", {
    id: "loader",
    className: cx(loader, className)
  });
};
const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const loader = css`
  border: 0.15rem solid #f3f3f300;
  border-top: 0.15rem solid #000000;
  border-left: 0.15rem solid #000000;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${Spin} 1s linear infinite;
`;

// UNCHANGED
const SpinnerWrapper = () => {
  return /*#__PURE__*/jsx("div", {
    className: wrapperStyle,
    children: /*#__PURE__*/jsx(Spinner, {
      className: spinnerStyle
    })
  });
};
const wrapperStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;
const spinnerStyle = css`
  color: #000000;
  width: 2rem;
  height: 2rem;
`;

var packageJson = {
	name: "@thirdweb-dev/react",
	version: "4.4.0",
	repository: "https://github.com/thirdweb-dev/js/tree/main/packages/react",
	author: "thirdweb eng <eng@thirdweb.com>",
	license: "Apache-2.0",
	main: "dist/thirdweb-dev-react.cjs.js",
	types: "dist/thirdweb-dev-react.cjs.d.ts",
	module: "dist/thirdweb-dev-react.esm.js",
	browser: {
		"./dist/thirdweb-dev-react.esm.js": "./dist/thirdweb-dev-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				browser: "./dist/thirdweb-dev-react.browser.esm.js",
				"default": "./dist/thirdweb-dev-react.esm.js"
			},
			"default": "./dist/thirdweb-dev-react.cjs.js"
		},
		"./evm": {
			module: {
				browser: "./evm/dist/thirdweb-dev-react-evm.browser.esm.js",
				"default": "./evm/dist/thirdweb-dev-react-evm.esm.js"
			},
			"default": "./evm/dist/thirdweb-dev-react-evm.cjs.js"
		},
		"./evm/connectors/magic": {
			module: {
				browser: "./evm/connectors/magic/dist/thirdweb-dev-react-evm-connectors-magic.browser.esm.js",
				"default": "./evm/connectors/magic/dist/thirdweb-dev-react-evm-connectors-magic.esm.js"
			},
			"default": "./evm/connectors/magic/dist/thirdweb-dev-react-evm-connectors-magic.cjs.js"
		},
		"./evm/connectors/gnosis": {
			module: {
				browser: "./evm/connectors/gnosis/dist/thirdweb-dev-react-evm-connectors-gnosis.browser.esm.js",
				"default": "./evm/connectors/gnosis/dist/thirdweb-dev-react-evm-connectors-gnosis.esm.js"
			},
			"default": "./evm/connectors/gnosis/dist/thirdweb-dev-react-evm-connectors-gnosis.cjs.js"
		},
		"./package.json": "./package.json"
	},
	files: [
		"dist/",
		"evm/"
	],
	preconstruct: {
		entrypoints: [
			"index.ts",
			"evm/index.ts",
			"evm/connectors/**/index.ts"
		],
		exports: {
			envConditions: [
				"browser"
			]
		}
	},
	"private": false,
	scripts: {
		format: "prettier --write 'src/**/*'",
		lint: "eslint src/ && bunx publint --strict --level warning",
		fix: "eslint src/ --fix",
		clean: "rm -rf dist/",
		"generate-docs": "mkdir -p etc && pnpm generate-docs:evm && pnpm generate-snippets",
		"generate-docs:evm": "api-extractor run --local --config ./config/api-extractor-evm.json && api-documenter markdown -i ./temp -o ./docs/evm && rm -rf ./temp-evm && mv ./temp ./temp-evm",
		"generate-snippets": "node ./scripts/generate-snippets-evm.mjs && node ./scripts/generate-feature-snippets-evm.mjs",
		build: "tsc && preconstruct build",
		push: "yalc push",
		typedoc: "node scripts/typedoc.mjs"
	},
	"sideEffects:": false,
	devDependencies: {
		"@babel/core": "^7.23.7",
		"@babel/preset-env": "^7.23.8",
		"@babel/preset-react": "^7.23.3",
		"@babel/preset-typescript": "^7.23.3",
		"@babel/runtime": "^7.23.8",
		"@microsoft/api-documenter": "^7.22.30",
		"@microsoft/api-extractor": "^7.36.3",
		"@microsoft/tsdoc": "^0.14.1",
		"@preconstruct/cli": "2.7.0",
		"@thirdweb-dev/auth": "workspace:*",
		"@thirdweb-dev/sdk": "workspace:*",
		"@thirdweb-dev/tsconfig": "workspace:*",
		"@types/qrcode": "^1.5.2",
		"@types/react": "^18.2.17",
		"@types/react-dom": "^18.2.7",
		"@types/uuid": "^9.0.5",
		"@typescript-eslint/eslint-plugin": "^6.2.0",
		"@typescript-eslint/parser": "^6.2.0",
		eslint: "^8.56.0",
		"eslint-config-prettier": "^8.9.0",
		"eslint-config-thirdweb": "workspace:*",
		"eslint-plugin-better-tree-shaking": "0.0.4",
		"eslint-plugin-import": "^2.26.0",
		"eslint-plugin-inclusive-language": "^2.2.0",
		"eslint-plugin-prettier": "^5.0.0",
		"eslint-plugin-tsdoc": "^0.2.16",
		ethers: "^5.7.2",
		prettier: "^3.1.1",
		react: "^18.2.0",
		"react-dom": "^18.2.0",
		stream: "npm:stream-browserify@^3.0.0",
		"typedoc-gen": "workspace:*",
		typescript: "^5.3.3"
	},
	dependencies: {
		"@emotion/css": "11.10.5",
		"@emotion/react": "^11.11.1",
		"@emotion/styled": "^11.11.0",
		"@google/model-viewer": "^2.1.1",
		"@headlessui/react": "1.7.6",
		"@radix-ui/colors": "^0.1.9",
		"@radix-ui/react-dialog": "^1.0.5",
		"@radix-ui/react-focus-scope": "^1.0.4",
		"@radix-ui/react-icons": "^1.3.0",
		"@radix-ui/react-popover": "^1.0.6",
		"@radix-ui/react-tabs": "^1.0.4",
		"@radix-ui/react-tooltip": "^1.0.7",
		"@tanstack/react-query": "^4.33.0",
		"@thirdweb-dev/chains": "workspace:*",
		"@thirdweb-dev/payments": "workspace:*",
		"@thirdweb-dev/react-core": "workspace:*",
		"@thirdweb-dev/sdk": "workspace:*",
		"@thirdweb-dev/wallets": "workspace:*",
		buffer: "^6.0.3",
		"copy-to-clipboard": "^3.3.2",
		"detect-browser": "^5.3.0",
		"fuse.js": "^7.0.0",
		qrcode: "^1.5.3",
		"tiny-invariant": "^1.2.0"
	},
	peerDependencies: {
		"@thirdweb-dev/sdk": "workspace:*",
		ethers: ">=5.5.1",
		react: ">=18.0.0",
		"react-dom": ">=18.0.0"
	},
	engines: {
		node: ">=18"
	}
};

// CHANGED: Import packageJSON + sdk-version only
function CheckoutWithCard(props) {
  const {
    clientId,
    sdkClientSecret,
    appName,
    options = {
      ...DEFAULT_BRAND_OPTIONS
    },
    onPaymentSuccess,
    onReview,
    onError,
    onBeforeModalOpen,
    onPriceUpdate,
    locale,
    configs
  } = props;
  const {
    appName: appNameContext
  } = usePaymentsSDKContext();
  const [isCardDetailIframeLoading, setIsCardDetailIframeLoading] = useState(true);
  const onCardDetailLoad = useCallback(() => {
    setIsCardDetailIframeLoading(false);
  }, []);
  const CheckoutWithCardIframeContainerRef = useRef(null);
  const appNameToUse = appName || appNameContext;

  // force hide spinner if iframe taking too long
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardDetailIframeLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts before the delay
    };
  }, []);
  // Handle message events from the popup. Pass along the message to the iframe as well
  useEffect(() => {
    if (!CheckoutWithCardIframeContainerRef.current) {
      return;
    }
    createCheckoutWithCardElement({
      clientId,
      sdkClientSecret,
      appName: appNameToUse,
      elementOrId: CheckoutWithCardIframeContainerRef.current,
      locale,
      onError,
      onLoad: onCardDetailLoad,
      onPaymentSuccess,
      onReview,
      onBeforeModalOpen,
      onPriceUpdate,
      options,
      configs
    });
  }, [appNameToUse, clientId, configs, locale, onBeforeModalOpen, onCardDetailLoad, onError, onPaymentSuccess, onPriceUpdate, onReview, options, sdkClientSecret]);
  return /*#__PURE__*/jsx("div", {
    className: iframeContainer,
    ref: CheckoutWithCardIframeContainerRef
    // Label the package version.
    ,
    "data-thirdweb-sdk-version": `${packageJson.name}@${packageJson.version}`,
    children: isCardDetailIframeLoading && /*#__PURE__*/jsx(SpinnerWrapper, {})
  });
}

// UNCHANGED
/**
 * Opens a popup centered on the parent page and returns a reference to the window.
 * The caller can close the popup with `popupWindow.close()`.
 * @returns The Window that was popped up
 */
function openCenteredPopup(_ref) {
  let {
    url,
    target,
    win,
    w,
    h
  } = _ref;
  const height = win?.top?.outerHeight || 100;
  const width = win?.top?.outerWidth || 100;
  const screenX = win?.top?.screenX || 100;
  const screenY = win?.top?.screenY || 100;
  const y = height / 2 + screenY - h / 2;
  const x = width / 2 + screenX - w / 2;
  return win.open(url, target, `toolbar=no,
    location=no,
    status=no,
    menubar=no,
    scrollbars=yes,
    resizable=yes,
    width=${w},
    height=${h},
    top=${y},
    left=${x}`);
}

// Unchanged
const Button = _ref => {
  let {
    isLoading = false,
    loadingText = "",
    ...props
  } = _ref;
  return /*#__PURE__*/jsx("button", {
    ...props,
    type: props.type,
    disabled: isLoading || props.disabled,
    className: cx(buttonClass, props.className),
    children: isLoading ? /*#__PURE__*/jsxs("div", {
      className: css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          `,
      children: [/*#__PURE__*/jsx(Spinner, {
        className: loadingText ? css`
                    margin-right: 0.5rem;
                  ` : ""
      }), loadingText]
    }) : props.children
  });
};
const buttonClass = css`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #1f2937;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`;

// CHANGED: packageJson import + sdk-version + clientId
var VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE = /*#__PURE__*/function (VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE) {
  VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE["USER_LOGIN_SUCCESS"] = "userLoginSuccess";
  VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE["USER_LOGIN_FAILED"] = "userLoginFailed";
  VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE["USER_CLOSE_LOGIN_PAGE"] = "userCloseLoginPage";
  return VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE;
}(VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE || {});
const VerifyOwnershipWithPaper = _ref => {
  let {
    onSuccess,
    onError,
    onWindowClose,
    className,
    children,
    redirectUrl,
    chainName,
    clientId
  } = _ref;
  const {
    chainName: chainNameContext,
    clientId: clientIdContext
  } = usePaymentsSDKContext();
  const isChildrenFunction = typeof children === "function";
  const chainNameToUse = chainName || chainNameContext;
  const clientIdToUse = clientId || clientIdContext;
  useEffect(() => {
    const handleMessage = event => {
      const data = event.data;
      switch (data.eventType) {
        case VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE.USER_LOGIN_SUCCESS:
          if (onSuccess) {
            onSuccess(data.values.accessCode);
          }
          break;
        case VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE.USER_CLOSE_LOGIN_PAGE:
          {
            if (onWindowClose) {
              onWindowClose();
            }
            break;
          }
        case VERIFY_OWNERSHIP_WITH_PAPER_EVENT_TYPE.USER_LOGIN_FAILED:
          if (onError) {
            onError({
              code: PaymentsSDKErrorCode.UserLoginFailed,
              error: new Error(PaymentsSDKErrorCode.UserLoginFailed)
            });
          }
          break;
        // Ignore unrecognized event
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [onError, onSuccess, onWindowClose]);
  const url = new URL("/sdk/v1/login-with-paper", PAPER_APP_URL);
  url.searchParams.append("chainName", chainNameToUse);
  url.searchParams.append("clientId", clientIdToUse);
  url.searchParams.append("redirectUrl", redirectUrl || "");
  const onClick = () => {
    const loginWindow = openCenteredPopup({
      url: url.href,
      target: "_blank",
      win: window,
      w: 400,
      h: 600
    });
    loginWindow?.focus();
  };
  return /*#__PURE__*/jsx(Fragment, {
    children: children && isChildrenFunction ? children({
      onClick
    }) : children ? /*#__PURE__*/jsx("a", {
      onClick: onClick,
      "data-thirdweb-sdk-version": `${packageJson.name}@${packageJson.version}`,
      children: children
    }) : /*#__PURE__*/jsx(Button, {
      onClick: onClick,
      className: className,
      "data-thirdweb-sdk-version": `${packageJson.name}@${packageJson.version}`,
      children: /*#__PURE__*/jsxs("div", {
        className: css`
              display: flex;
              align-items: center;
            `,
        children: [/*#__PURE__*/jsx("span", {
          style: {
            marginRight: "8px"
          },
          children: "Login with"
        }), " ", /*#__PURE__*/jsxs("svg", {
          width: "15",
          height: "30",
          viewBox: "0 0 26 49",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/jsx("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M25.8824 8.91421C25.8824 8.47803 25.5996 8.09218 25.1838 7.96071L0 0V11.7963L14.7899 16.276L2.77311 24.5V34.4815L5.58074 37.3767L3.1009 39.6283C2.89214 39.8178 2.77311 40.0867 2.77311 40.3687V49L11.0924 42.6481V32.6667L8.60325 30.5207L25.8824 19.963V8.91421Z",
            fill: "#19A8D6"
          }), /*#__PURE__*/jsx("path", {
            d: "M25.8824 8.91421C25.8824 8.47803 25.5996 8.09218 25.1838 7.96071L0 0V11.7963L25.8824 19.963V8.91421Z",
            fill: "#39D0FF"
          }), /*#__PURE__*/jsx("path", {
            d: "M11.0924 32.6667L2.77311 24.5V34.4815L11.0924 42.6481V32.6667Z",
            fill: "#39D0FF"
          })]
        }), " ", /*#__PURE__*/jsx("span", {
          style: {
            marginLeft: "5px"
          },
          children: "Paper"
        })]
      })
    })
  });
};

// UNCHANGED
const fetchCustomContractArgsFromProps = props => {
  const propsToReturn = {};
  if ("contractType" in props) {
    propsToReturn.contractType = props.contractType;
  }
  if ("contractArgs" in props) {
    propsToReturn.contractArgs = props.contractArgs;
  }
  return propsToReturn;
};

/** This is basically a map from argument name to the value
 * Example:
 * json
 *    recipient: "0x...",
 *    quantity: 1,
 *
 * Corresponds to the following argument stub in solidity:
 *  solidity
 * function myFunction (address recipient, uint128 quantity)
 *
 *
 * You can also pass your complex params for your contract like so:
 *
 * json
 * 	  _user:address: "0x...", age: 24,
 *    _quantity: 2,
 *
 *
 *
 * The above correspond to the following argument stub in solidity:
 * solidity
 * struct User
 *    string name;
 *    uint256 age;
 *
 *
 * function myFunction(User calldata _user, uint256 _quantity)
 *
 *
 */

/** This specifies the way a method should be called.
 *
 * Note that the argument names should match the argument names in your contract.
 *
 * Example:
 * ```json
 *  {
 *    name: "claim",
 *    args: { _recipient: "0x...", _quantity: 2 }
 *  }
 * ```
 *
 * Corresponds to the following function stub in solidity:
 * ```solidity
 * function claim(address _recipient, uint256 _quantity)
 * ```
 *
 * For more on the types of arguments you can pass, see ArgumentMapType
 */

/**
 * This is similar to ReadMethodCallType with two added properties
 *
 * ## payment
 *  * We will automatically call the `approve` function for non native coins.
 *  * The `value` should be human readable. So "1.2" represents "1.2" ETH or "1.2" USDC depending on the `currency` field
 *
 * ## callOptions
 * * As of now, we only support specifying the relative amount of gas to use.
 * * They correspond to the values of the [gas trackers](https://etherscan.io/gastracker) at the time of calling the function
 */

// CHANGED: imports only
let PaperCheckoutDisplay = /*#__PURE__*/function (PaperCheckoutDisplay) {
  PaperCheckoutDisplay["POPUP"] = "POPUP";
  PaperCheckoutDisplay["NEW_TAB"] = "NEW_TAB";
  PaperCheckoutDisplay["MODAL"] = "MODAL";
  PaperCheckoutDisplay["DRAWER"] = "DRAWER";
  PaperCheckoutDisplay["EMBED"] = "EMBED";
  return PaperCheckoutDisplay;
}({});
const PaperCheckout = _ref => {
  let {
    checkoutId,
    display = PaperCheckoutDisplay.POPUP,
    recipientWalletAddress,
    emailAddress,
    quantity,
    eligibilityMethod,
    mintMethod,
    metadata,
    appName,
    options = {
      width: 400,
      height: 800,
      ...DEFAULT_BRAND_OPTIONS
    },
    onOpenCheckout,
    onCloseCheckout,
    onPaymentSuccess,
    onTransferSuccess,
    children,
    ...props
  } = _ref;
  const [isOpen, setIsOpen] = useState(false);
  const {
    contractType,
    contractArgs
  } = fetchCustomContractArgsFromProps(props);

  // Handle message events from iframe.
  useEffect(() => {
    const handleMessage = event => {
      const data = event.data;
      switch (data.eventType) {
        case "paymentSuccess":
          if (onPaymentSuccess) {
            onPaymentSuccess({
              id: data.id
            });
          }
          break;
        case "transferSuccess":
          if (onTransferSuccess) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onTransferSuccess({
              id: data.id
              // ...
            });
          }
          break;
        case "modalClosed":
          // Emitted when the iframe decides to close, such as when the purchase is completed.
          setIsOpen(false);
          if (onCloseCheckout) {
            onCloseCheckout();
          }
          break;
        // Ignore unrecognized event
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [onCloseCheckout, onPaymentSuccess, onTransferSuccess]);

  // Build iframe URL with query params.
  const checkoutUrl = new URL(`/checkout/${checkoutId}`, PAPER_APP_URL);
  checkoutUrl.searchParams.append("display", display);
  const mintMethodStringified = JSON.stringify(mintMethod);
  const eligibilityMethodStringified = JSON.stringify(eligibilityMethod);
  const metadataStringified = JSON.stringify(metadata);
  const contractArgsStringified = JSON.stringify(contractArgs);
  if (options.colorPrimary) {
    checkoutUrl.searchParams.append("colorPrimary", options.colorPrimary);
  }
  if (options.colorBackground) {
    checkoutUrl.searchParams.append("colorBackground", options.colorBackground);
  }
  if (options.colorText) {
    checkoutUrl.searchParams.append("colorText", options.colorText);
  }
  if (options.borderRadius !== undefined) {
    checkoutUrl.searchParams.append("borderRadius", options.borderRadius.toString());
  }
  if (options.fontFamily) {
    checkoutUrl.searchParams.append("fontFamily", options.fontFamily);
  }
  if (mintMethod) {
    checkoutUrl.searchParams.append("mintMethod", Buffer.from(mintMethodStringified, "utf-8").toString("base64"));
  }
  if (eligibilityMethod) {
    checkoutUrl.searchParams.append("eligibilityMethod", Buffer.from(eligibilityMethodStringified, "utf-8").toString("base64"));
  }
  if (contractType) {
    checkoutUrl.searchParams.append("contractType", contractType);
  }
  if (contractArgs) {
    checkoutUrl.searchParams.append("contractArgs",
    // Base 64 encode
    Buffer.from(contractArgsStringified, "utf-8").toString("base64"));
  }
  if (appName) {
    checkoutUrl.searchParams.append("appName", appName);
  }
  if (recipientWalletAddress) {
    checkoutUrl.searchParams.append("wallet", recipientWalletAddress);
  }
  if (emailAddress) {
    checkoutUrl.searchParams.append("username", emailAddress);
  }
  if (quantity) {
    checkoutUrl.searchParams.append("quantity", quantity.toString());
  }
  if (metadata) {
    checkoutUrl.searchParams.append("metadata", encodeURIComponent(metadataStringified));
  }

  // Default button if the app doesn't pass one in.
  const clickableElement = children || /*#__PURE__*/jsx("button", {
    style: {
      backgroundColor: "#cf3781",
      padding: "8px 20px 8px 20px",
      borderRadius: "8px",
      color: "white",
      fontWeight: "bold"
    },
    children: "Buy Now"
  });
  switch (display) {
    case PaperCheckoutDisplay.POPUP:
      {
        const onClick = () => {
          openCenteredPopup({
            url: checkoutUrl.href,
            h: options.height,
            w: options.width,
            win: window,
            target: "_blank"
          });
          if (onOpenCheckout) {
            onOpenCheckout();
          }
        };
        return /*#__PURE__*/jsx("a", {
          onClick: onClick,
          children: clickableElement
        });
      }
    case PaperCheckoutDisplay.NEW_TAB:
      {
        const onClick = () => {
          window.open(checkoutUrl, "_blank");
          if (onOpenCheckout) {
            onOpenCheckout();
          }
        };
        return /*#__PURE__*/jsx("a", {
          onClick: onClick,
          children: clickableElement
        });
      }
    case PaperCheckoutDisplay.MODAL:
      {
        const onOpen = () => {
          setIsOpen(true);
          if (onOpenCheckout) {
            onOpenCheckout();
          }
        };
        const onClose = () => {
          setIsOpen(false);
          if (onCloseCheckout) {
            onCloseCheckout();
          }
        };
        return /*#__PURE__*/jsx(PaperCheckoutModal, {
          clickableElement: clickableElement,
          checkoutUrl: checkoutUrl.href,
          width: options.width,
          height: options.height,
          isOpen: isOpen,
          onOpen: onOpen,
          onClose: onClose
        });
      }
    case PaperCheckoutDisplay.DRAWER:
      {
        const onOpen = () => {
          setIsOpen(true);
          if (onOpenCheckout) {
            onOpenCheckout();
          }
        };
        const onClose = () => {
          setIsOpen(false);
          if (onCloseCheckout) {
            onCloseCheckout();
          }
        };
        return /*#__PURE__*/jsx(PaperCheckoutDrawer, {
          clickableElement: clickableElement,
          checkoutUrl: checkoutUrl.href,
          width: options.width,
          isOpen: isOpen,
          onOpen: onOpen,
          onClose: onClose
        });
      }
    case PaperCheckoutDisplay.EMBED:
      {
        return /*#__PURE__*/jsx("iframe", {
          src: checkoutUrl.href,
          width: options.width,
          height: options.height
        });
      }
    default:
      console.error(`Invalid or unimplemented display type: ${display}`);
      return /*#__PURE__*/jsx(Fragment, {});
  }
};
const inlineStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    zIndex: 1000,
    overflow: "hidden",
    display: "flex",
    visibility: "hidden",
    opacity: 0,
    transition: "all 0.2s ease"
  },
  overlayIsVisible: {
    visibility: "visible",
    opacity: 1,
    background: "#0008"
  },
  modalOverlay: {
    alignItems: "center",
    justifyContent: "center"
  },
  drawerOverlay: {
    justifyContent: "flex-end"
  },
  modalDialog: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    visibility: "hidden",
    opacity: 0,
    top: "5%",
    transition: "all 0.2s ease",
    maxWidth: "100vw"
  },
  modalDialogIsVisible: {
    visibility: "visible",
    opacity: 1,
    top: 0
  },
  drawerDialog: {
    position: "relative",
    visibility: "hidden",
    opacity: 0,
    right: "-10%",
    transition: "all 0.2s ease"
  },
  drawerDialogIsVisible: {
    visibility: "visible",
    opacity: 1,
    right: 0
  },
  modalCloseButton: {
    position: "absolute",
    top: "0.1em",
    right: "0.2em",
    borderRadius: "8px",
    fontSize: "x-large",
    padding: "0 0.4em",
    color: "#888"
  }
};
const PaperCheckoutDrawer = _ref2 => {
  let {
    clickableElement,
    checkoutUrl,
    width,
    isOpen,
    onOpen,
    onClose
  } = _ref2;
  return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsx("a", {
      onClick: onOpen,
      children: clickableElement
    }), /*#__PURE__*/jsx("div", {
      className: "paper-overlay",
      style: {
        ...inlineStyles.overlay,
        ...(isOpen ? inlineStyles.overlayIsVisible : {}),
        ...inlineStyles.drawerOverlay
      },
      children: /*#__PURE__*/jsxs("div", {
        className: "paper-drawer",
        style: {
          ...inlineStyles.drawerDialog,
          ...(isOpen ? inlineStyles.drawerDialogIsVisible : {}),
          width
        },
        children: [/*#__PURE__*/jsx("button", {
          onClick: onClose,
          style: inlineStyles.modalCloseButton,
          children: "\xD7"
        }), isOpen && /*#__PURE__*/jsx("iframe", {
          src: checkoutUrl,
          width: "100%",
          height: "100%"
        })]
      })
    })]
  });
};
const PaperCheckoutModal = _ref3 => {
  let {
    clickableElement,
    checkoutUrl,
    width,
    height,
    isOpen,
    onOpen,
    onClose
  } = _ref3;
  // Set the max height to the window's inner height.
  // This method handles mobile browser heights more reliably than 100vh.
  const [innerHeight, setInnerHeight] = useState(height);
  useEffect(() => setInnerHeight(window.innerHeight), []);
  return /*#__PURE__*/jsxs(Fragment, {
    children: [/*#__PURE__*/jsx("a", {
      onClick: onOpen,
      children: clickableElement
    }), /*#__PURE__*/jsx("div", {
      className: "paper-overlay",
      style: {
        ...inlineStyles.overlay,
        ...(isOpen ? inlineStyles.overlayIsVisible : {}),
        ...inlineStyles.modalOverlay
      },
      children: /*#__PURE__*/jsxs("div", {
        className: "paper-modal",
        style: {
          ...inlineStyles.modalDialog,
          ...(isOpen ? inlineStyles.modalDialogIsVisible : {}),
          width,
          height,
          maxHeight: innerHeight
        },
        children: [/*#__PURE__*/jsx("button", {
          onClick: onClose,
          style: inlineStyles.modalCloseButton,
          children: "\xD7"
        }), isOpen && /*#__PURE__*/jsx("iframe", {
          src: checkoutUrl,
          width: "100%",
          height: "100%"
        })]
      })
    })]
  });
};

export { CheckoutWithCard, VerifyOwnershipWithPaper as LoginWithPaper, PaperCheckout, PaperCheckoutDisplay, PaymentsSDKProvider, VerifyOwnershipWithPaper, coin98Wallet, coreWallet, cryptoDefiWallet, es, ja, localWallet, okxWallet, rabbyWallet, smartWallet, usePaymentsSDKContext, useSmartWallet, xdefiWallet };
