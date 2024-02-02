import { WalletUIStatesProvider } from "../../../evm/providers/wallet-ui-states-provider";
import { ComponentProps } from "react";
import { Theme } from "../../../design-system";
export type ConnectEmbedProps = {
    /**
     * Class name to be added to the root element of ConnectEmbed
     */
    className?: string;
    /**
     * theme for the ConnectEmbed
     *
     * If a theme is set on the [`ThirdWebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) component, it will be used as the default theme for all thirdweb components, else the default will be "dark"
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
    theme?: "dark" | "light" | Theme;
    /**
     * CSS styles to be applied to the root element of ConnectEmbed
     */
    style?: React.CSSProperties;
    /**
     * If provided, Embed will show a Terms of Service message at the bottom with below link
     */
    termsOfServiceUrl?: string;
    /**
     * If provided, Embed will show a Privacy Policy message at the bottom with below link
     */
    privacyPolicyUrl?: string;
    /**
     * Enforce that users must sign in with their wallet using [auth](https://portal.thirdweb.com/auth) after connecting their wallet.
     *
     * This requires the `authConfig` prop to be set on the [`ThirdWebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) component.
     */
    auth?: {
        /**
         * specify whether signing in is optional or not.
         *
         * By default it is `false` ( sign in is required ) if `authConfig` is set on [`ThirdWebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
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
     * Callback to be called on successful connection of wallet
     *
     * ```tsx
     * <ConnectEmbed
     *  onConnect={() => {
     *    console.log("wallet connected")
     *  }}
     * />
     * ```
     *
     * Note that this does not include the sign in, If you want to call a callback after user connects AND signs in with their wallet, use `auth.onLogin` prop instead
     *
     * ```tsx
     * <ConnectEmbed
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
 * Returns `true` if the `<ConnectEmbed />` should be rendered.
 * It returns true if either one of the following conditions are met:
 * - the wallet is not connected
 * - the wallet is connected but the user is not signed in and `auth` is required ( loginOptional is not set to false )
 *
 *  @example
 * ```tsx
 * function Example() {
 *   const loginOptional = false;
 *   const showConnectEmbed = useShowConnectEmbed(loginOptional);
 *
 *   if (!showConnectEmbed) {
 *     return <div> Wallet is connected </div>
 *   }
 *
 *   return (
 *     <div>
 *       <ConnectEmbed
 *         auth={{
 *           loginOptional,
 *         }}
 *       />
 *     </div>
 *   );
 * }
 *```
 *
 * @param loginOptional -
 * Specify whether the `<ConnectEmbed />` you want to render has auth enabled or not.
 * If not specified, it is assumed to be `false` ( login is required )
 *
 */
export declare function useShowConnectEmbed(loginOptional?: boolean): boolean;
/**
 * A component that allows the user to connect their wallet.
 *
 * it renders the same UI as the [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component's modal - but directly on the page instead of being in a modal.
 *
 * It only renders UI if either one of the following conditions are met:
 * - wallet is not connected
 * - wallet is connected but the user is not signed in and `auth` is required ( loginOptional is not set to false )
 *
 * `ConnectEmbed` uses the [`useShowConnectEmbed`](https://portal.thirdweb.com/react/v4/useShowConnectEmbed) hook internally to determine if it should be rendered or not. You can also use this hook to determine if you should render something else instead of `ConnectEmbed`
 *
 * @example
 * ```tsx
 * function Example() {
 *   const loginOptional = false;
 *   const showConnectEmbed = useShowConnectEmbed(loginOptional);
 *
 *   if (!showConnectEmbed) {
 *     return <div> Wallet is connected </div>
 *   }
 *
 *   return (
 *     <div>
 *       <ConnectEmbed
 *         auth={{
 *           loginOptional,
 *         }}
 *       />
 *     </div>
 *   );
 * }
 * ```
 *
 * @param props -
 * The props for the component.
 *
 * ### className
 * Class name to be added to the root element of ConnectEmbed
 *
 * ### theme
 * theme for the ConnectEmbed
 *
 * If a theme is set on the [`ThirdWebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) component, it will be used as the default theme for all thirdweb components, else the default will be "dark"
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
 * ### style
 * CSS styles to be applied to the root element of ConnectEmbed
 *
 * ### termsOfServiceUrl
 * If provided, Embed will show a Terms of Service message at the bottom with below link
 *
 * ### privacyPolicyUrl
 * If provided, Embed will show a Privacy Policy message at the bottom with below link
 *
 * ### auth
 * Enforce that users must sign in with their wallet using [auth](https://portal.thirdweb.com/auth) after connecting their wallet.
 *
 * This requires the `authConfig` prop to be set on the [`ThirdWebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider) component.
 *
 * The `auth` prop accepts an object with the following properties:
 * - `loginOptional` - specify whether signing in is optional or not. By default it is `false` ( sign in is required ) if `authConfig` is set on [`ThirdWebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)
 * - `onLogin` - Callback to be called after user signs in with their wallet
 * - `onLogout` - Callback to be called after user signs out
 *
 * ### onConnect
 * Callback to be called on successful connection of wallet
 *
 * ```tsx
 * <ConnectEmbed
 *  onConnect={() => {
 *    console.log("wallet connected")
 *  }}
 * />
 * ```
 *
 * Note that this does not include the sign in, If you want to call a callback after user connects AND signs in with their wallet, use `auth.onLogin` prop instead
 *
 * ```tsx
 * <ConnectEmbed
 *  auth={{
 *   onLogin: () => {
 *     console.log("wallet connected and signed in")
 *   }
 *  }}
 * />
 * ```
 *
 */
export declare function ConnectEmbed(props: ConnectEmbedProps): import("react/jsx-runtime").JSX.Element;
export declare function SyncedWalletUIStates(props: ComponentProps<typeof WalletUIStatesProvider>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ConnectEmbed.d.ts.map