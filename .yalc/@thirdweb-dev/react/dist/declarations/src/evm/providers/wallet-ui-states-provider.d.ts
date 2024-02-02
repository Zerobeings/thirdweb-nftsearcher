/// <reference types="react" />
import { Theme } from "../../design-system";
import { WelcomeScreen } from "../../wallet/ConnectWallet/screens/types";
type BoolSetter = (value: boolean) => void;
export type ModalConfig = {
    title: string;
    theme: "light" | "dark" | Theme;
    data: any;
    modalSize: "wide" | "compact";
    termsOfServiceUrl?: string;
    privacyPolicyUrl?: string;
    welcomeScreen?: WelcomeScreen;
    titleIconUrl?: string;
    auth?: {
        loginOptional?: boolean;
        onLogin?: (token: string) => void;
        onLogout?: () => void;
    };
    isEmbed?: boolean;
    onConnect?: () => void;
};
export declare const ModalConfigCtx: import("react").Context<ModalConfig>;
export declare const SetModalConfigCtx: import("react").Context<import("react").Dispatch<import("react").SetStateAction<ModalConfig>>>;
export declare const WalletUIStatesProvider: (props: import("react").PropsWithChildren<{
    theme?: "dark" | "light" | Theme | undefined;
    modalSize?: "compact" | "wide" | undefined;
    title?: string | undefined;
    titleIconUrl?: string | undefined;
    termsOfServiceUrl?: string | undefined;
    privacyPolicyUrl?: string | undefined;
    welcomeScreen?: WelcomeScreen | undefined;
    isEmbed?: boolean | undefined;
    auth?: {
        loginOptional?: boolean | undefined;
        onLogin?: ((token: string) => void) | undefined;
        onLogout?: (() => void) | undefined;
    } | undefined;
    onConnect?: (() => void) | undefined;
}>) => import("react/jsx-runtime").JSX.Element;
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
export declare const useIsWalletModalOpen: () => boolean;
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
export declare const useSetIsWalletModalOpen: () => BoolSetter;
export type ModalConfigOptions = {
    /**
     * Title of the Modal
     */
    title?: string;
    /**
     * Set the theme for the Modal
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
     */
    theme?: "light" | "dark" | Theme;
    /**
     * Set the size of the modal - `compact` or `wide` on desktop
     *
     * Modal size is always `compact` on mobile
     *
     * By default it is `"wide"` for desktop.
     */
    modalSize: "wide" | "compact";
    /**
     * URL of the "terms of service" page
     *
     * If provided, Modal will show a Terms of Service message at the bottom with below link
     */
    termsOfServiceUrl?: string;
    /**
     * URL of the "privacy policy" page
     *
     * If provided, Modal will show a Privacy Policy message at the bottom with below link
     */
    privacyPolicyUrl?: string;
    /**
     * Customize the welcome screen. This is only applicable when `modalSize` is set to "wide".
     * On "wide" Modal size, a welcome screen is shown on the right side of the modal.
     *
     * This screen can be customized in two ways
     *
     * #### 1. Customize Metadata and Image
     *
     * ```tsx
     * const welcomeScreen = {
     *  title: "your title",
     *  subtitle: "your subtitle",
     *  img: {
     *   src: "https://your-image-url.png",
     *   width: 300,
     *   height: 50,
     *  },
     * }
     * ```
     *
     * #### 2. Render Custom Component
     *
     * ```tsx
     * const welcomeScreen = () => {
     *  return <YourCustomComponent />
     * }
     * ```
     */
    welcomeScreen?: WelcomeScreen;
    /**
     * Replace the thirdweb icon next to modalTitle and set your own iconUrl
     */
    titleIconUrl?: string;
    /**
     * The object contains the following properties to customize the authentication
     * - `loginOptional` - specify whether signing in is optional or not. By default it is `false` ( Sign in is required ) if `authConfig` is set on [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
     * - `onLogin` - Callback to be called after user signs in with their wallet
     * - `onLogout` - Callback to be called after user signs out
     */
    auth?: {
        loginOptional?: boolean;
        onLogin?: (token: string) => void;
        onLogout?: () => void;
    };
    /**
     * Callback to be called on successful connection of wallet
     *
     * Note that this does not include the sign in, If you want to call a callback after user connects AND signs in with their wallet, use `auth.onLogin` instead
     */
    onConnect?: () => void;
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
export declare const useSetWalletModalConfig: () => (value: ModalConfigOptions) => void;
export {};
//# sourceMappingURL=wallet-ui-states-provider.d.ts.map