import { ThirdwebProviderCoreProps, WalletConfig } from "@thirdweb-dev/react-core";
import { ThemeObjectOrType } from "../../design-system";
import { PropsWithChildren } from "react";
import type { Chain, defaultChains } from "@thirdweb-dev/chains";
import { Signer } from "ethers";
import { ThirdwebLocale } from "../locales/types";
export interface ThirdwebProviderProps<TChains extends Chain[]> extends Omit<ThirdwebProviderCoreProps<TChains>, "createWalletStorage" | "supportedWallets" | "theme" | "signerWallet"> {
    /**
     * Wallets supported by the dApp
     *
     * If no wallets are provided, the default wallets will be used which is equivalent to the following:
     *
     * ```tsx
     * [
     *  metamaskWallet(),
     *  coinbaseWallet(),
     *  walletConnect(),
     *  trustWallet(),
     *  rainbowWallet(),
     *  zerionWallet(),
     *  phantomWallet(),
     * ]
     * ```
     *
     * ```jsx
     * import { metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
     *
     * <ThirdwebProvider
     *  supportedWallets={[
     *    metamaskWallet(),
     *    coinbaseWallet(),
     *    walletConnect()
     *  ]}
     * />
     * ```
     */
    supportedWallets?: WalletConfig<any>[];
    /**
     * Set the theme for all thirdweb components
     *
     * By default it is set to "dark".
     *
     * theme can be set to either "dark" or "light" or a custom theme object.
     *
     * You can also import `lightTheme` or `darkTheme` functions from `@thirdweb-dev/react` to use the default themes as base and overrides parts of it.
     *
     * @example
     * ```ts
     * import { lightTheme } from "@thirdweb-dev/react";
     * const customTheme = lightTheme({
     *  colors: {
     *    modalBg: 'red'
     *  }
     * })
     * ```
     */
    theme?: ThemeObjectOrType;
    /**
     * Use a signer instead of `supportedWallets` if you want to provide your own wallet connection logic.
     */
    signer?: Signer;
    /**
     * locale object contains text used for all thirdweb components
     *
     * it allows you to change the language used in UI components or override the texts used in the UI
     *
     * React SDK comes out of the box with Spanish and Japanese locale functions, but you can add support for any language you want just by passing an object with the required strings
     *
     * @example
     *
     * ## Using Built-in Locales
     *
     * ### Using the Spanish locale
     * ```tsx
     * import { ThirdwebProvider, es } from "@thirdweb-dev/react";
     *
     * const spanish = es();
     *
     * <ThirdwebProvider locale={spanish}> <App /> </ThirdwebProvider>
     * ```
     *
     * ### Using the Japanese locale
     * ```tsx
     * import { ThirdwebProvider, jp } from "@thirdweb-dev/react";
     *
     * const japanese = jp();
     *
     * <ThirdwebProvider locale={japanese}> <App /> </ThirdwebProvider>
     * ```
     *
     * ### Using English locale ( default )
     * ```tsx
     * import { ThirdwebProvider, en } from "@thirdweb-dev/react";
     *
     * const english = en();
     *
     * <ThirdwebProvider locale={english}> <App /> </ThirdwebProvider>
     * ```
     *
     * ## Overriding the locale
     *
     * ```tsx
     * import { ThirdwebProvider, en } from "@thirdweb-dev/react";
     *
     * // override some texts
     * const english = en({
     *   connectWallet: {
     *     confirmInWallet: "Confirm in your wallet",
     *   },
     *   wallets: {
     *     metamaskWallet: {
     *       connectionScreen: {
     *         inProgress: "Awaiting Confirmation",
     *         instruction: "Accept connection request in your MetaMask wallet",
     *       },
     *     },
     *   },
     * });
     *
     * <ThirdwebProvider locale={english}>
     *   <App />
     * </ThirdwebProvider>;
     *
     * ```
     *
     * ### Custom locale object
     *
     * ```tsx
     * import { ThirdwebProvider } from "@thirdweb-dev/react";
     *
     * <ThirdwebProvider locale={{ .... }}>
     *   <App />
     * </ThirdwebProvider>;
     *```
     *
     */
    locale?: ThirdwebLocale;
}
/**
 * Array of default supported chains by the thirdweb SDK
 */
export type DefaultChains = typeof defaultChains;
/**
 * The `<ThirdwebProvider />` component lets you control what networks you want users to connect to,
 * what types of wallets can connect to your app, and the settings for the [Thirdweb SDK](https://docs.thirdweb.com/typescript).
 *
 * @example
 * You can wrap your application with the provider as follows:
 *
 * ```jsx title="App.jsx"
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   return (
 *     <ThirdwebProvider clientId="YOUR_CLIENT_ID" activeChain="ethereum">
 *       <YourApp />
 *     </ThirdwebProvider>
 *   );
 * };
 * ```
 *
 * @param props -
 * The props for the component.
 *
 * ### activeChain (optional)
 * The activeChain prop determines which chain you want your app to be operating on.
 *
 * There are 1000+ chains available in the `@thirdweb-dev/chains` package. Import the chain you want and pass it to the `activeChain` prop.
 *
 * You can override the imported object or pass a custom chain object with required properties.
 *
 * ### supportedChains (optional)
 * An array of chains supported by your app.
 * There are 1000+ chains available in the `@thirdweb-dev/chains` package. You can import the chain you want and pass it to the `supportedChains` prop in an array.
 *
 * If not provided, it will default to the default supported chains supported by the thirdweb SDK.
 *
 * ```tsx
 * import { Ethereum, Polygon } from "@thirdweb-dev/chains";
 *
 * function Example() {
 *  return (
 *    <ThirdwebSDKProvider supportedChains={[ Ethereum, Polygon ]} activeChain={Ethereum}>
 *       <App />
 *    </ThirdwebSDKProvider>
 *  )
 * }
 * ```
 *
 * ### clientId (optional)
 * The clientId prop is required to use the thirdweb infrastructure services with the SDK.
 *
 * You can get a client ID by creating an API key on [thirdweb dashboard](https://thirdweb.com/dashboard/settings/api-keys)
 *
 * ### supportedWallets (optional)
 * Wallets supported by the dApp
 *
 * If no wallets are provided, the default wallets will be used which is equivalent to the following:
 *
 * ```tsx
 * [
 *  metamaskWallet(),
 *  coinbaseWallet(),
 *  walletConnect(),
 *  trustWallet(),
 *  rainbowWallet(),
 *  zerionWallet(),
 *  phantomWallet(),
 * ]
 * ```
 *
 * ```jsx
 * import { metamaskWallet, coinbaseWallet, walletConnect } from "@thirdweb-dev/react";
 *
 * <ThirdwebProvider
 *  supportedWallets={[
 *    metamaskWallet(),
 *    coinbaseWallet(),
 *    walletConnect()
 *  ]}
 * />
 * ```
 *
 * ### theme (optional)
 * Set the theme for all thirdweb components
 *
 * By default it is set to "dark".
 *
 * theme can be set to either "dark" or "light" or a custom theme object.
 *
 * You can also import `lightTheme` or `darkTheme` functions from `@thirdweb-dev/react` to use the default themes as base and overrides parts of it.
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
 * ### locale (optional)
 * locale object contains text used for all thirdweb components
 *
 * it allows you to change the language used in UI components or override the texts used in the UI
 *
 * React SDK comes out of the box with Spanish and Japanese locale functions, but you can add support for any language you want just by passing an object with the required strings
 *
 * #### Using Built-in Locales
 *
 * ##### Using the Spanish locale
 * ```tsx
 * import { ThirdwebProvider, es } from "@thirdweb-dev/react";
 *
 * const spanish = es();
 *
 * <ThirdwebProvider locale={spanish}> <App /> </ThirdwebProvider>
 * ```
 *
 * ##### Using the Japanese locale
 * ```tsx
 * import { ThirdwebProvider, jp } from "@thirdweb-dev/react";
 *
 * const japanese = jp();
 *
 * <ThirdwebProvider locale={japanese}> <App /> </ThirdwebProvider>
 * ```
 *
 * ##### Using English locale ( default )
 * ```tsx
 * import { ThirdwebProvider, en } from "@thirdweb-dev/react";
 *
 * const english = en();
 *
 * <ThirdwebProvider locale={english}> <App /> </ThirdwebProvider>
 * ```
 *
 * ##### Overriding the locale
 *
 * ```tsx
 * import { ThirdwebProvider, en } from "@thirdweb-dev/react";
 *
 * // override some texts
 * const english = en({
 *   connectWallet: {
 *     confirmInWallet: "Confirm in your wallet",
 *   },
 *   wallets: {
 *     metamaskWallet: {
 *       connectionScreen: {
 *         inProgress: "Awaiting Confirmation",
 *         instruction: "Accept connection request in your MetaMask wallet",
 *       },
 *     },
 *   },
 * });
 *
 * <ThirdwebProvider locale={english}>
 *   <App />
 * </ThirdwebProvider>;
 *
 * ```
 *
 * #### Custom locale object
 *
 * ```tsx
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 *
 * <ThirdwebProvider locale={{ .... }}>
 *   <App />
 * </ThirdwebProvider>;
 * ```
 *
 * ### dAppMeta (optional)
 * Metadata to pass to wallet connect and walletlink wallet connect. (Used to show *which* dApp is being connected to in mobile wallets that support it)
 * Defaults to just the name being passed as `thirdweb powered dApp`.
 *
 * ### autoConnect (optional)
 * When the user has connected their wallet to your site, this flag determines whether or not you want to automatically connect to the last connected wallet when user visits your site again in the future.
 * Defaults to `true`.
 *
 * ### sdkOptions (optional)
 * Override any of the default values for the SDK. Gas settings, gasless transactions, RPC configuration, and more.
 * ```tsx
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 *
 * const sdkOptions = {
 *   readonlySettings: {
 *     rpcUrl: "<rpc-url>", // force read calls to go through your own RPC url
 *     chainId: 1, // reduce RPC calls by specifying your chain ID
 *   },
 *   gasSettings: {
 *     maxPriceInGwei: 123, // Maximum gas price for transactions (default 300 gwei)
 *     speed: "fastest", // the tx speed setting: 'standard'|'fast|'fastest' (default: 'fastest')
 *   },
 *   gasless: {
 *     // By specifying a gasless configuration - all transactions will get forwarded to enable gasless transactions
 *     openzeppelin: {
 *       relayerUrl: "<open-zeppelin-relayer-url>", // your OZ Defender relayer URL
 *       relayerForwarderAddress: "<open-zeppelin-forwarder-address>", // the OZ defender relayer address (defaults to the standard one)
 *     },
 *     biconomy: {
 *       apiId: "biconomy-api-id", // your Biconomy API Id
 *       apiKey: "biconomy-api-key", // your Biconomy API Key
 *       deadlineSeconds: 123, // your Biconomy timeout preference
 *     },
 *   },
 *   infuraApiKey: "<infura-api-key>", // your Infura API key
 *   alchemyApiKey: "<alchemy-api-key>", // your Alchemy API key
 * };
 *
 * function Example() {
 *   return (
 *     <ThirdwebProvider sdkOptions={sdkOptions}>
 *       <App />
 *     </ThirdwebProvider>
 *   );
 * }
 * ```
 *
 * ### authConfig (optional)
 * The configuration object for setting up [Auth](https://portal.thirdweb.com/wallets/auth); allowing users to sign in with their wallet.
 * It takes an object with the following properties:
 * - `authUrl` - The backend URL of the authentication endpoints. For example, if your endpoints are at `/api/auth/login`, `/api/auth/logout`, etc. then this should be set to `/api/auth`
 * - `domain` - The frontend domain used to generate the login payload. This domain should match the domain used on your auth backend.
 * - `secureStorage` - Secure storage to use when working with JWT tokens. By default auth uses cookies so no need to set this unless you want to specifically use JWT tokens
 *
 * ```tsx
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 *
 * function MyApp() {
 *   return (
 *     <ThirdwebProvider
 *       authConfig={{
 *         authUrl: "/api/auth",
 *         domain: "https://example.com",
 *       }}
 *     >
 *       <YourApp />
 *     </ThirdwebProvider>
 *   );
 * }
 * ```
 *
 * ### signer (optional)
 * Use a signer instead of `supportedWallets` if you want to provide your own wallet connection logic.
 *
 * ### storageInterface
 * Override the default [Storage](/storage) interface used by the SDK.
 *
 * Allows you to create an instance of `ThirdwebStorage` with your own customized config, and pass it to the SDK. This requires the `@thirdweb-dev/storage` package to be installed.
 *
 * [Learn more about storage](https://portal.thirdweb.com/infrastructure/storage/overview)
 *
 * ```jsx
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 * import {
 * 	ThirdwebStorage,
 * 	StorageDownloader,
 * 	IpfsUploader,
 * } from "@thirdweb-dev/storage";
 *
 * // Configure a custom ThirdwebStorage instance
 * const storage = new ThirdwebStorage({
 * 	uploader: new IpfsUploader(),
 * 	downloader: new StorageDownloader(),
 * 	gatewayUrls: {
 * 		"ipfs://": [
 * 			"https://gateway.ipfscdn.io/ipfs/",
 * 			"https://cloudflare-ipfs.com/ipfs/",
 * 			"https://ipfs.io/ipfs/",
 * 		],
 * 	},
 * });
 *
 * // Provide the custom storage instance to the SDK
 * function MyApp() {
 * 	return (
 * 		<ThirdwebProvider storageInterface={storage}>
 * 			<YourApp />
 * 		</ThirdwebProvider>
 * 	);
 * }
 * ```
 *
 * ### queryClient (optional)
 * If you are using [React Query](https://react-query.tanstack.com/) and have your own `QueryClient`,
 * you can pass it as the `queryClient` prop to use this client instead of the SDK's default client.
 *
 * ```jsx
 * import { ThirdwebProvider } from "@thirdweb-dev/react";
 * import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 *
 * function MyApp() {
 * 	// Your React Query client (or client from other library such as wagmi)
 * 	const queryClient = new QueryClient();
 *
 * 	return (
 * 		<QueryClientProvider client={queryClient}>
 * 			<ThirdwebProvider queryClient={queryClient}>
 * 				<YourApp />
 * 			</ThirdwebProvider>
 * 		</QueryClientProvider>
 * 	);
 * }
 * ```
 *
 */
export declare const ThirdwebProvider: <TChains extends Chain[] = ({
    readonly chain: "ETH";
    readonly chainId: 1;
    readonly ens: {
        readonly registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://eth.blockscout.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
    }, {
        readonly name: "dexguru";
        readonly url: "https://ethereum.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [{
        readonly name: "EIP155";
    }, {
        readonly name: "EIP1559";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://ethereum.org";
    readonly name: "Ethereum Mainnet";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 1;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://ethereum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://1.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.infura.io/v3/${INFURA_API_KEY}", "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}", "https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com", "https://ethereum.publicnode.com", "wss://ethereum.publicnode.com", "https://mainnet.gateway.tenderly.co", "wss://mainnet.gateway.tenderly.co", "https://rpc.blocknative.com/boost", "https://rpc.flashbots.net/fast", "https://rpc.mevblocker.io/fullprivacy"];
    readonly shortName: "eth";
    readonly slip44: 60;
    readonly slug: "ethereum";
    readonly testnet: false;
} | {
    readonly chain: "ETH";
    readonly chainId: 5;
    readonly ens: {
        readonly registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010";
    };
    readonly explorers: readonly [{
        readonly name: "etherscan-goerli";
        readonly url: "https://goerli.etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout-goerli";
        readonly url: "https://eth-goerli.blockscout.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
    }];
    readonly faucets: readonly ["http://fauceth.komputing.org?chain=5&address=${ADDRESS}", "https://goerli-faucet.slock.it?address=${ADDRESS}", "https://faucet.goerli.mudit.blog"];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://goerli.net/#about";
    readonly name: "Goerli";
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 5;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://5.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.infura.io/v3/${INFURA_API_KEY}", "wss://goerli.infura.io/v3/${INFURA_API_KEY}", "https://rpc.goerli.mudit.blog/", "https://ethereum-goerli.publicnode.com", "wss://ethereum-goerli.publicnode.com", "https://goerli.gateway.tenderly.co", "wss://goerli.gateway.tenderly.co"];
    readonly shortName: "gor";
    readonly slip44: 1;
    readonly slug: "goerli";
    readonly testnet: true;
    readonly title: "Ethereum Testnet Goerli";
} | {
    readonly chain: "ETH";
    readonly chainId: 8453;
    readonly explorers: readonly [{
        readonly name: "basescan";
        readonly url: "https://basescan.org";
        readonly standard: "none";
    }, {
        readonly name: "basescout";
        readonly url: "https://base.blockscout.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
    }, {
        readonly name: "dexguru";
        readonly url: "https://base.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://base.org";
    readonly name: "Base";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 8453;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://base.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://8453.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://mainnet.base.org/", "https://developer-access-mainnet.base.org/", "https://base.gateway.tenderly.co", "wss://base.gateway.tenderly.co", "https://base.publicnode.com", "wss://base.publicnode.com"];
    readonly shortName: "base";
    readonly slug: "base";
    readonly status: "active";
    readonly testnet: false;
} | {
    readonly chain: "ETH";
    readonly chainId: 84531;
    readonly explorers: readonly [{
        readonly name: "basescan";
        readonly url: "https://goerli.basescan.org";
        readonly standard: "none";
    }, {
        readonly name: "basescout";
        readonly url: "https://base-goerli.blockscout.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
    }, {
        readonly name: "dexguru";
        readonly url: "https://base-goerli.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly ["https://www.coinbase.com/faucets/base-ethereum-goerli-faucet"];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmW5Vn15HeRkScMfPcW12ZdZcC2yUASpu6eCsECRdEmjjj/base-512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://base.org";
    readonly name: "Base Goerli Testnet";
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 84531;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://base-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://84531.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.base.org", "https://base-goerli.gateway.tenderly.co", "wss://base-goerli.gateway.tenderly.co", "https://base-goerli.publicnode.com", "wss://base-goerli.publicnode.com"];
    readonly shortName: "basegor";
    readonly slip44: 1;
    readonly slug: "base-goerli";
    readonly testnet: true;
} | {
    readonly chain: "Polygon";
    readonly chainId: 137;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://polygonscan.com";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://polygon.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://polygon.technology/";
    readonly name: "Polygon Mainnet";
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly networkId: 137;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://polygon.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://137.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://polygon-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://polygon-rpc.com/", "https://rpc-mainnet.matic.network", "https://matic-mainnet.chainstacklabs.com", "https://rpc-mainnet.maticvigil.com", "https://rpc-mainnet.matic.quiknode.pro", "https://matic-mainnet-full-rpc.bwarelabs.com", "https://polygon-bor.publicnode.com", "wss://polygon-bor.publicnode.com", "https://polygon.gateway.tenderly.co", "wss://polygon.gateway.tenderly.co"];
    readonly shortName: "matic";
    readonly slip44: 966;
    readonly slug: "polygon";
    readonly testnet: false;
} | {
    readonly chain: "Polygon";
    readonly chainId: 80001;
    readonly explorers: readonly [{
        readonly name: "polygonscan";
        readonly url: "https://mumbai.polygonscan.com";
        readonly standard: "EIP3091";
    }];
    readonly faucets: readonly ["https://faucet.polygon.technology/"];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/polygon/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://polygon.technology/";
    readonly name: "Mumbai";
    readonly nativeCurrency: {
        readonly name: "MATIC";
        readonly symbol: "MATIC";
        readonly decimals: 18;
    };
    readonly networkId: 80001;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://mumbai.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://80001.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc-mumbai.maticvigil.com", "https://polygon-mumbai-bor.publicnode.com", "wss://polygon-mumbai-bor.publicnode.com", "https://polygon-mumbai.gateway.tenderly.co", "wss://polygon-mumbai.gateway.tenderly.co"];
    readonly shortName: "maticmum";
    readonly slip44: 1;
    readonly slug: "mumbai";
    readonly testnet: true;
    readonly title: "Polygon Testnet Mumbai";
} | {
    readonly chain: "ETH";
    readonly chainId: 42161;
    readonly explorers: readonly [{
        readonly name: "Arbiscan";
        readonly url: "https://arbiscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "Arbitrum Explorer";
        readonly url: "https://explorer.arbitrum.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://arbitrum.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://arbitrum.io";
    readonly name: "Arbitrum One";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 42161;
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-1";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io";
        }];
    };
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://arbitrum.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://42161.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://arb1.arbitrum.io/rpc", "https://arbitrum-one.publicnode.com", "wss://arbitrum-one.publicnode.com"];
    readonly shortName: "arb1";
    readonly slug: "arbitrum";
    readonly testnet: false;
} | {
    readonly chain: "ETH";
    readonly chainId: 421613;
    readonly explorers: readonly [{
        readonly name: "Arbitrum Goerli Arbiscan";
        readonly url: "https://goerli.arbiscan.io";
        readonly standard: "EIP3091";
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/arbitrum/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://arbitrum.io/";
    readonly name: "Arbitrum Goerli";
    readonly nativeCurrency: {
        readonly name: "Arbitrum Goerli Ether";
        readonly symbol: "AGOR";
        readonly decimals: 18;
    };
    readonly networkId: 421613;
    readonly parent: {
        readonly type: "L2";
        readonly chain: "eip155-5";
        readonly bridges: readonly [{
            readonly url: "https://bridge.arbitrum.io/";
        }];
    };
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://arbitrum-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://421613.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli-rollup.arbitrum.io/rpc", "https://arbitrum-goerli.publicnode.com", "wss://arbitrum-goerli.publicnode.com"];
    readonly shortName: "arb-goerli";
    readonly slip44: 1;
    readonly slug: "arbitrum-goerli";
    readonly testnet: true;
    readonly title: "Arbitrum Goerli Rollup Testnet";
} | {
    readonly chain: "ETH";
    readonly chainId: 10;
    readonly explorers: readonly [{
        readonly name: "etherscan";
        readonly url: "https://optimistic.etherscan.io";
        readonly standard: "EIP3091";
    }, {
        readonly name: "blockscout";
        readonly url: "https://optimism.blockscout.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
    }, {
        readonly name: "dexguru";
        readonly url: "https://optimism.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://optimism.io";
    readonly name: "OP Mainnet";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 10;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://optimism.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://10.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://optimism-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}", "https://mainnet.optimism.io", "https://optimism.publicnode.com", "wss://optimism.publicnode.com", "https://optimism.gateway.tenderly.co", "wss://optimism.gateway.tenderly.co"];
    readonly shortName: "oeth";
    readonly slug: "optimism";
    readonly testnet: false;
} | {
    readonly chain: "ETH";
    readonly chainId: 420;
    readonly explorers: readonly [{
        readonly name: "blockscout";
        readonly url: "https://optimism-goerli.blockscout.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmYtUimyqHkkFxYdbXXRbUqNg2VLPUg6Uu2C2nmFWowiZM";
            readonly width: 551;
            readonly height: 540;
            readonly format: "png";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/optimism/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://optimism.io";
    readonly name: "Optimism Goerli Testnet";
    readonly nativeCurrency: {
        readonly name: "Goerli Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 420;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://optimism-goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://420.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://goerli.optimism.io", "https://optimism-goerli.publicnode.com", "wss://optimism-goerli.publicnode.com", "https://optimism-goerli.gateway.tenderly.co", "wss://optimism-goerli.gateway.tenderly.co"];
    readonly shortName: "ogor";
    readonly slip44: 1;
    readonly slug: "optimism-goerli";
    readonly testnet: true;
} | {
    readonly chain: "BSC";
    readonly chainId: 56;
    readonly explorers: readonly [{
        readonly name: "bscscan";
        readonly url: "https://bscscan.com";
        readonly standard: "EIP3091";
    }, {
        readonly name: "dexguru";
        readonly url: "https://bnb.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://www.bnbchain.org/en";
    readonly name: "BNB Smart Chain Mainnet";
    readonly nativeCurrency: {
        readonly name: "BNB Chain Native Token";
        readonly symbol: "BNB";
        readonly decimals: 18;
    };
    readonly networkId: 56;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://binance.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://56.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://bsc-dataseed1.bnbchain.org", "https://bsc-dataseed2.bnbchain.org", "https://bsc-dataseed3.bnbchain.org", "https://bsc-dataseed4.bnbchain.org", "https://bsc-dataseed1.defibit.io", "https://bsc-dataseed2.defibit.io", "https://bsc-dataseed3.defibit.io", "https://bsc-dataseed4.defibit.io", "https://bsc-dataseed1.ninicoin.io", "https://bsc-dataseed2.ninicoin.io", "https://bsc-dataseed3.ninicoin.io", "https://bsc-dataseed4.ninicoin.io", "https://bsc.publicnode.com", "wss://bsc.publicnode.com", "wss://bsc-ws-node.nariox.org"];
    readonly shortName: "bnb";
    readonly slip44: 714;
    readonly slug: "binance";
    readonly testnet: false;
} | {
    readonly chain: "BSC";
    readonly chainId: 97;
    readonly explorers: readonly [{
        readonly name: "bscscan-testnet";
        readonly url: "https://testnet.bscscan.com";
        readonly standard: "EIP3091";
    }];
    readonly faucets: readonly ["https://testnet.bnbchain.org/faucet-smart"];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/binance-coin/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://www.bnbchain.org/en";
    readonly name: "BNB Smart Chain Testnet";
    readonly nativeCurrency: {
        readonly name: "BNB Chain Native Token";
        readonly symbol: "tBNB";
        readonly decimals: 18;
    };
    readonly networkId: 97;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://binance-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://97.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://data-seed-prebsc-1-s1.bnbchain.org:8545", "https://data-seed-prebsc-2-s1.bnbchain.org:8545", "https://data-seed-prebsc-1-s2.bnbchain.org:8545", "https://data-seed-prebsc-2-s2.bnbchain.org:8545", "https://data-seed-prebsc-1-s3.bnbchain.org:8545", "https://data-seed-prebsc-2-s3.bnbchain.org:8545", "https://bsc-testnet.publicnode.com", "wss://bsc-testnet.publicnode.com"];
    readonly shortName: "bnbt";
    readonly slip44: 1;
    readonly slug: "binance-testnet";
    readonly testnet: true;
} | {
    readonly chain: "FTM";
    readonly chainId: 250;
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://ftmscan.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf";
            readonly width: 73;
            readonly height: 73;
            readonly format: "png";
        };
    }, {
        readonly name: "dexguru";
        readonly url: "https://fantom.dex.guru";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRaASKRSjQ5btoUQ2rNTJNxKtx2a2RoewgA7DMQkLVEne";
            readonly width: 83;
            readonly height: 82;
            readonly format: "svg";
        };
    }];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://fantom.foundation";
    readonly name: "Fantom Opera";
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly networkId: 250;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://fantom.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://250.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.ftm.tools", "https://fantom.publicnode.com", "wss://fantom.publicnode.com"];
    readonly shortName: "ftm";
    readonly slug: "fantom";
    readonly testnet: false;
} | {
    readonly chain: "FTM";
    readonly chainId: 4002;
    readonly explorers: readonly [{
        readonly name: "ftmscan";
        readonly url: "https://testnet.ftmscan.com";
        readonly standard: "EIP3091";
        readonly icon: {
            readonly url: "ipfs://QmRqbK449Fo9sJ3xMpkPbg6uV1weQj4yVV1xNMP9cdPmjf";
            readonly width: 73;
            readonly height: 73;
            readonly format: "png";
        };
    }];
    readonly faucets: readonly ["https://faucet.fantom.network"];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/fantom/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://docs.fantom.foundation/quick-start/short-guide#fantom-testnet";
    readonly name: "Fantom Testnet";
    readonly nativeCurrency: {
        readonly name: "Fantom";
        readonly symbol: "FTM";
        readonly decimals: 18;
    };
    readonly networkId: 4002;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://fantom-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://4002.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://rpc.testnet.fantom.network", "https://fantom-testnet.publicnode.com", "wss://fantom-testnet.publicnode.com"];
    readonly shortName: "tftm";
    readonly slip44: 1;
    readonly slug: "fantom-testnet";
    readonly testnet: true;
} | {
    readonly chain: "AVAX";
    readonly chainId: 43114;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly faucets: readonly [];
    readonly features: readonly [{
        readonly name: "EIP1559";
    }];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://www.avax.network/";
    readonly name: "Avalanche C-Chain";
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly networkId: 43114;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://avalanche.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://43114.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://avalanche-mainnet.infura.io/v3/${INFURA_API_KEY}", "https://api.avax.network/ext/bc/C/rpc", "https://avalanche-c-chain.publicnode.com", "wss://avalanche-c-chain.publicnode.com"];
    readonly shortName: "avax";
    readonly slip44: 9005;
    readonly slug: "avalanche";
    readonly testnet: false;
} | {
    readonly chain: "AVAX";
    readonly chainId: 43113;
    readonly explorers: readonly [{
        readonly name: "snowtrace";
        readonly url: "https://testnet.snowtrace.io";
        readonly standard: "EIP3091";
    }];
    readonly faucets: readonly ["https://faucet.avax-test.network/"];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/avalanche/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly infoURL: "https://cchain.explorer.avax-test.network";
    readonly name: "Avalanche Fuji Testnet";
    readonly nativeCurrency: {
        readonly name: "Avalanche";
        readonly symbol: "AVAX";
        readonly decimals: 18;
    };
    readonly networkId: 43113;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["https://avalanche-fuji.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://43113.rpc.thirdweb.com/${THIRDWEB_API_KEY}", "https://api.avax-test.network/ext/bc/C/rpc", "https://avalanche-fuji-c-chain.publicnode.com", "wss://avalanche-fuji-c-chain.publicnode.com"];
    readonly shortName: "Fuji";
    readonly slip44: 1;
    readonly slug: "avalanche-fuji";
    readonly testnet: true;
} | {
    readonly chain: "ETH";
    readonly chainId: 1337;
    readonly explorers: readonly [];
    readonly faucets: readonly [];
    readonly features: readonly [];
    readonly icon: {
        readonly url: "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png";
        readonly width: 512;
        readonly height: 512;
        readonly format: "png";
    };
    readonly name: "Localhost";
    readonly nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    readonly networkId: 1337;
    readonly redFlags: readonly [];
    readonly rpc: readonly ["http://localhost:8545"];
    readonly shortName: "local";
    readonly slug: "localhost";
    readonly testnet: true;
})[]>(props: PropsWithChildren<ThirdwebProviderProps<TChains>>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=thirdweb-provider.d.ts.map