/// <reference types="react" />
import { Theme } from "../../design-system";
import type { NetworkSelectorProps } from "./NetworkSelector";
import { WelcomeScreen } from "./screens/types";
import { SupportedTokens } from "./defaultTokens";
export type ConnectWalletProps = {
    /**
     * CSS class to apply to the button element
     *
     * For some CSS properties, you may need to use the !important to override the default styles
     *
     * ```tsx
     * <ConnectWallet className="my-custom-class" />
     * ```
     */
    className?: string;
    /**
     * Set the theme for the button and modal.
     *
     * By default it is set to "dark" if `theme` is not set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
     * If a `theme` is set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) then that theme will be used by default which can be overridden by setting `theme` prop on [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component
     *
     * theme can be set to either "dark" or "light" or a custom theme object. You can also import `lightTheme` or `darkTheme` functions from `@thirdweb-dev/react` to use the default themes as base and overrides parts of it.
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
    theme?: "dark" | "light" | Theme;
    /**
     * set custom label for the button.
     *
     * The default is `"Connect"`
     *
     * @example
     * ```tsx
     * <ConnectWallet btnTitle="Sign in" />
     * ```
     */
    btnTitle?: string;
    /**
     * Set a custom label for the "Switch Network" button
     */
    switchNetworkBtnTitle?: string;
    /**
     * Change the title of ConnectWallet Modal
     *
     * The default is `"Connect"`
     */
    modalTitle?: string;
    /**
     * Replace the thirdweb icon next to modalTitle and set your own iconUrl
     *
     * Set to empty string to hide the icon
     */
    modalTitleIconUrl?: string;
    /**
     * Render a custom button to display connected wallet details instead of the default one
     *
     * ```tsx
     * const address = useAddress();
     *
     * <ConnectWallet
     *  detailsBtn={() => {
     *    return (
     *      <button>
     *        connected to {address}
     *      </button>
     *    )
     *  }}
     * />
     * ```
     */
    detailsBtn?: () => JSX.Element;
    /**
     * Enforce that users must sign in with their wallet using [auth](https://portal.thirdweb.com/wallets/auth) after connecting their wallet.
     *
     * This requires the `authConfig` prop to be set on the [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) component.
     */
    auth?: {
        /**
         * specify whether signing in is optional or not.
         *
         * By default it is `false` ( sign in required )  if `authConfig` is set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
         */
        loginOptional?: boolean;
        /**
         * Callback to be called after user signs in with their wallet
         */
        onLogin?: (token: string) => void;
        /**
         * Callback to be called after user signs out
         */
        onLogout?: () => void;
    };
    /**
     * CSS styles to apply to the button element
     */
    style?: React.CSSProperties;
    /**
     * customize the Network selector shown
     */
    networkSelector?: Omit<NetworkSelectorProps, "theme" | "onClose" | "chains" | "open">;
    /**
     * Hide the "Request Testnet funds" link in ConnectWallet Details Modal when user is connected to a testnet.
     *
     * By default it is `true`, If you want to show the "Request Testnet funds" link when user is connected to a testnet, set this prop to `false`
     *
     * @example
     * ```tsx
     * <ConnectWallet hideTestnetFaucet={false} />
     * ```
     */
    hideTestnetFaucet?: boolean;
    /**
     * Whether to show "Switch Network" button if the wallet is connected,
     * but it is not connected to the `activeChain` provided in [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
     *
     * Please, note that if you support multiple networks in your app this prop should
     * be set to `false` to allow users to switch between networks.
     *
     * By default it is `false`
     */
    switchToActiveChain?: boolean;
    /**
     * Set the size of the modal - `compact` or `wide` on desktop
     *
     * Modal size is always `compact` on mobile
     *
     * By default it is `"wide"` for desktop.
     */
    modalSize?: "compact" | "wide";
    /**
     * URL of the "terms of service" page
     *
     * If provided, Modal will show a Terms of Service message at the bottom with below link
     *
     * @example
     * ```tsx
     * <ConnectWallet termsOfServiceUrl="https://your-terms-of-service-url.com" />
     * ```
     */
    termsOfServiceUrl?: string;
    /**
     * URL of the "privacy policy" page
     *
     * If provided, Modal will show a Privacy Policy message at the bottom with below link
     *
     * @example
     * ```tsx
     * <ConnectWallet privacyPolicyUrl="https://your-privacy-policy-url.com" />
     * ```
     */
    privacyPolicyUrl?: string;
    /**
     * Customize the welcome screen. This prop is only applicable when modalSize prop is set to "wide". On "wide" Modal size, a welcome screen is shown on the right side of the modal.
     *
     * This screen can be customized in two ways
     *
     * #### 1. Customize Metadata and Image
     *
     * ```tsx
     * <ConnectWallet welcomeScreen={{
     *  title: "your title",
     *  subtitle: "your subtitle",
     *  img: {
     *   src: "https://your-image-url.png",
     *   width: 300,
     *   height: 50,
     *  },
     * }} />
     * ```
     *
     * #### 2. Render Custom Component
     *
     * ```tsx
     * <ConnectWallet
     *  welcomeScreen={() => {
     *  return <YourCustomComponent />
     * }}
     * />
     * ```
     */
    welcomeScreen?: WelcomeScreen;
    /**
     * Customize the tokens shown in the "Send Funds" screen for various networks.
     *
     * By default, The "Send Funds" screen shows a few popular tokens for default chains and the native token. For other chains it only shows the native token.
     *
     * @example
     *
     * supportedTokens prop allows you to customize this list as shown below which shows  "Dai Stablecoin" when users wallet is connected to the "Base" mainnet.
     *
     * ```tsx
     * import { ConnectWallet } from '@thirdweb-dev/react';
     * import { Base } from '@thirdweb-dev/chains';
     *
     * function Example() {
     *   return (
     * 		<ConnectWallet
     * 			supportedTokens={{
     * 				[Base.chainId]: [
     * 					{
     * 						address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', // token contract address
     * 						name: 'Dai Stablecoin',
     * 						symbol: 'DAI',
     * 						icon: 'https://assets.coingecko.com/coins/images/9956/small/Badge_Dai.png?1687143508',
     * 					},
     * 				],
     * 			}}
     * 		/>
     * 	);
     * }
     * ```
     */
    supportedTokens?: SupportedTokens;
    /**
     * Display the balance of a token instead of the native token in ConnectWallet details button.
     *
     * @example
     * ```tsx
     * import { Base } from "@thirdweb-dev/chains";
     *
     * <ConnectWallet balanceToken={{
     *    1: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" // show USDC balance when connected to Ethereum mainnet
     *    [Base.chainId]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", // show Dai stablecoin token balance when connected to Base mainnet
     *  }}
     * />
     * ```
     */
    displayBalanceToken?: Record<number, string>;
    /**
     * Hide the "Switch to Personal wallet" option in the wallet modal which is shown when wallet is connected to either Smart Wallet or Safe.
     *
     * By default it is `false`
     *
     * @example
     * ```tsx
     * <ConnectWallet hideSwitchToPersonalWallet={true} />
     * ```
     */
    hideSwitchToPersonalWallet?: boolean;
    /**
     * Hide the "Disconnect Wallet" button in the ConnectWallet Details Modal.
     *
     * By default it is `false`
     *
     * @example
     * ```tsx
     * <ConnectWallet hideDisconnect={true} />
     * ```
     */
    hideDisconnect?: boolean;
    /**
     * Callback to be called on successful connection of wallet
     *
     * ```tsx
     * <ConnectWallet
     *  onConnect={() => {
     *    console.log("wallet connected")
     *  }}
     * />
     * ```
     *
     * Note that this does not include the sign in, If you want to call a callback after user connects AND signs in with their wallet, use `auth.onLogin` prop instead
     *
     * ```tsx
     * <ConnectWallet
     *  auth={{
     *   onLogin: () => {
     *     console.log("wallet connected and signed in")
     *   }
     *  }}
     * />
     * ```
     *
     */
    onConnect?: () => void;
};
/**
 * A component that allows the user to connect their wallet.
 *
 * it renders a button which when clicked opens a modal to allow users to connect to wallets specified in the [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)'s supportedWallets prop.
 *
 * This component must be descendant of [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
 *
 * @example
 * ```tsx
 * <ConnectWallet />
 * ```
 *
 * @param props -
 * Props for the ConnectWallet component
 *
 * ### btnTitle (optional)
 * set custom label for the button.
 *
 * The default is `"Connect"`
 *
 * ```tsx
 * <ConnectWallet btnTitle="Sign in" />
 * ```
 *
 * ### modalSize (optional)
 * Set the size of the modal - `compact` or `wide` on desktop
 *
 * Modal size is always `compact` on mobile
 *
 * By default it is `"wide"` for desktop.
 *
 * ### modalTitle (optional)
 * Change the title of ConnectWallet Modal
 *
 * The default is `"Connect"`
 *
 * ### modalTitleIconUrl (optional)
 * Replace the thirdweb icon next to modalTitle and set your own iconUrl
 *
 * Set to empty string to hide the icon
 *
 * ### auth (optional)
 * The object contains the following properties to customize the authentication
 * - `loginOptional` - specify whether signing in is optional or not. By default it is `false` ( Sign in is required ) if `authConfig` is set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
 * - `onLogin` - Callback to be called after user signs in with their wallet
 * - `onLogout` - Callback to be called after user signs out
 *
 * ### theme (optional)
 * Set the theme for the button and modal.
 *
 * By default it is set to "dark" if `theme` is not set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
 * If a `theme` is set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) then that theme will be used by default which can be overridden by setting `theme` prop on [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component
 *
 * theme can be set to either "dark" or "light" or a custom theme object. You can also import `lightTheme` or `darkTheme` functions from `@thirdweb-dev/react` to use the default themes as base and overrides parts of it.
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
 * ### className (optional)
 * CSS class to apply to the button element
 *
 * ### detailsBtn
 * Render a custom button to display connected wallet details instead of the default one
 *
 * ```tsx
 * const address = useAddress();
 *
 * <ConnectWallet
 *  detailsBtn={() => {
 *    return (
 *      <button>
 *        connected to {address}
 *      </button>
 *    )
 *  }}
 * />
 * ```
 *
 *
 * ### style (optional)
 * CSS styles to apply to the button element
 *
 * ### networkSelector (optional)
 * Customize the Network selector shown
 *
 * ### hideTestnetFaucet (optional)
 * Hide the "Request Testnet funds" link in ConnectWallet Details Modal when user is connected to a testnet. By default it is `true`
 *
 * If you want to show the "Request Testnet funds" link when user is connected to a testnet, set this prop to `false`
 *
 * ```tsx
 * <ConnectWallet hideTestnetFaucet={false} />
 * ```
 *
 * ### switchToActiveChain (optional)
 * Whether to show "Switch Network" button if the wallet is connected,
 * but it is not connected to the `activeChain` provided in [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
 *
 * Please, note that if you support multiple networks in your app this prop should
 * be set to `false` to allow users to switch between networks.
 *
 * By default it is `false`
 *
 * For some CSS properties, you may need to use the !important to override the default styles
 *
 * ```tsx
 * <ConnectWallet className="my-custom-class" />
 * ```
 *
 * ### termsOfServiceUrl
 * If provided, Modal will show a Terms of Service message at the bottom with below link
 *
 * ```tsx
 * <ConnectWallet termsOfServiceUrl="https://your-terms-of-service-url.com" />
 * ```
 *
 * ### privacyPolicyUrl
 * If provided, Modal will show a Privacy Policy message at the bottom with below link
 *
 * ```tsx
 * <ConnectWallet privacyPolicyUrl="https://your-privacy-policy-url.com" />
 * ```
 *
 * ### welcomeScreen
 * Customize the welcome screen. This prop is only applicable when modalSize prop is set to "wide". On "wide" Modal size, a welcome screen is shown on the right side of the modal.
 *
 * This screen can be customized in two ways
 *
 * #### 1. Customize Metadata and Image
 *
 * ```tsx
 * <ConnectWallet welcomeScreen={{
 *  title: "your title",
 *  subtitle: "your subtitle",
 *  img: {
 *   src: "https://your-image-url.png",
 *   width: 300,
 *   height: 50,
 *  },
 * }} />
 * ```
 *
 * #### 2. Render Custom Component
 *
 * ```tsx
 * <ConnectWallet
 *  welcomeScreen={() => {
 *  return <YourCustomComponent />
 * }}
 * />
 * ```
 *
 *
 * ### supportedTokens
 * Customize the tokens shown in the "Send Funds" screen for various networks.
 *
 * By default, The "Send Funds" screen shows a few popular tokens for default chains and the native token. For other chains it only shows the native token.
 *
 * supportedTokens prop allows you to customize this list as shown below which shows  "Dai Stablecoin" when users wallet is connected to the "Base" mainnet.
 *
 * ```tsx
 * import { ConnectWallet } from '@thirdweb-dev/react';
 * import { Base } from '@thirdweb-dev/chains';
 *
 * function Example() {
 *   return (
 * 		<ConnectWallet
 * 			supportedTokens={{
 * 				[Base.chainId]: [
 * 					{
 * 						address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb', // token contract address
 * 						name: 'Dai Stablecoin',
 * 						symbol: 'DAI',
 * 						icon: 'https://assets.coingecko.com/coins/images/9956/small/Badge_Dai.png?1687143508',
 * 					},
 * 				],
 * 			}}
 * 		/>
 * 	);
 * }
 * ```
 *
 * ### displayBalanceToken
 * Display the balance of a token instead of the native token in ConnectWallet details button.
 *
 * ```tsx
 * import { Base } from "@thirdweb-dev/chains";
 *
 * <ConnectWallet balanceToken={{
 *    1: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" // show USDC balance when connected to Ethereum mainnet
 *    [Base.chainId]: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", // show Dai stablecoin token balance when connected to Base mainnet
 *  }}
 * />
 * ```
 *
 * ### hideSwitchToPersonalWallet
 * Hide the "Switch to Personal wallet" option in the wallet modal which is shown when wallet is connected to either Smart Wallet or Safe.
 *
 * By default it is `false`
 *
 * ```tsx
 * <ConnectWallet hideSwitchToPersonalWallet={true} />
 * ```
 *
 * ### hideDisconnect
 * Hide the "Disconnect Wallet" button in the ConnectWallet Details Modal
 *
 * By default it is `false`
 *
 * ```tsx
 * <ConnectWallet hideDisconnect={true} />
 * ```
 */
export declare function ConnectWallet(props: ConnectWalletProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ConnectWallet.d.ts.map