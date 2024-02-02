import { Theme } from "../../../design-system";
import type { SmartContract } from "@thirdweb-dev/sdk";
import type { ContractInterface } from "ethers";
import { PropsWithChildren } from "react";
import { WelcomeScreen } from "../../../wallet/ConnectWallet/screens/types";
export type ActionFn = (contract: SmartContract) => any;
export interface Web3ButtonProps<TActionFn extends ActionFn> {
    /**
     * the class to apply to the button for adding custom styles
     *
     * @example
     * ```tsx
     * <Web3Button className="my-custom-class" contractAddress={contractAddress} action={someAction} >
     * Claim NFT
     * </Web3Button>
     * ```
     */
    className?: string;
    /**
     * the address of the contract
     *
     * If you have not imported your contract to [thirdweb dashboard](https://thirdweb.com/dashboard), you must additionally specify the contractAbi prop.
     */
    contractAddress: `0x${string}` | `${string}.eth` | string;
    /**
     * The [Application Binary Interface](https://docs.soliditylang.org/en/v0.8.17/abi-spec.html) (ABI) of the contract.
     *
     * This is only required if you have not imported your contract to the [thirdweb dashboard](https://thirdweb.com/dashboard).
     */
    contractAbi?: ContractInterface;
    /**
     * Callback function to be run when the contract method call is successful.
     * @param result - value returned from given `action` function when it is called
     */
    onSuccess?: (result: Awaited<ReturnType<TActionFn>>) => void;
    /**
     * Callback function to be run when the contract method call fails.
     * @param error - error thrown when running given `action` function
     */
    onError?: (error: Error) => void;
    /**
     * Callback function to be run after the user has confirmed the transaction.
     * It is called just before the `action` function is called
     */
    onSubmit?: () => void;
    /**
     * Whether the button should be disabled or not
     *
     * The button is disabled and shows a spinner when the transaction is executing.
     */
    isDisabled?: boolean;
    /**
     * The logic to execute when the button is clicked.
     *
     * The contract instance is available as the first argument of the function for you to interact with.
     *
     * If the action you are performing is async, make sure to return a Promise from the action function so that the SDK knows when the action is complete
     *
     * @example
     * ```tsx
     * <Web3Button
     *  contractAddress="0x..."
     *  action={(contract) => contract.erc721.claim(1)}
     * >
     *  Claim NFT
     * </Web3Button>
     * ```
     */
    action: TActionFn;
    /**
     * button element's `type` attribute
     */
    type?: "button" | "submit" | "reset";
    /**
     * The theme to use for the button
     */
    theme?: "dark" | "light" | Theme;
    /**
     * The style to apply to the button element
     */
    style?: React.CSSProperties;
    /**
     * Web3Button renders a [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) if no wallet is connected. You can pass props for that component by passing a `connectWallet` prop to Web3Button
     *
     * @example
     * ```tsx
     * <Web3Button
     *  contractAddress="0x..."
     *  action={(contract) => contract.erc721.claim(1)}
     * >
     *  Claim NFT
     * </Web3Button>
     * ```
     */
    connectWallet?: {
        /**
         * The class to apply to the ConnectWallet component for adding custom styles
         */
        className?: string;
        /**
         * text to render in ConnectWallet button
         *
         * The default is `"Connect Wallet"`.
         */
        btnTitle?: string;
        /**
         * title of the [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal.
         *
         * The default is `"Connect"`.
         */
        modalTitle?: string;
        /**
         * Replace the thirdweb icon next to modalTitle and set your own iconUrl
         *
         * Set to empty string to hide the icon
         */
        modalTitleIconUrl?: string;
        auth?: {
            loginOptional?: boolean;
            onLogin?: (token: string) => void;
            onLogout?: () => void;
        };
        /**
         * apply custom styles to ConnectWallet button element
         */
        style?: React.CSSProperties;
        /**
         * Set the size of the modal - `compact` or `wide` on desktop
         *
         * Modal size is always `compact` on mobile.
         *
         * By default it is set to `"wide"` for desktop
         */
        modalSize?: "compact" | "wide";
        /**
         * If provided, ConnectWallet Modal will show a Terms of Service message at the bottom with below link
         */
        termsOfServiceUrl?: string;
        /**
         * If provided, ConnectWallet Modal will show a Privacy Policy message at the bottom with below link
         */
        privacyPolicyUrl?: string;
        /**
         * Customize the welcome screen of the ConnectWallet Modal
         *
         * Either provide a component to replace the default screen entirely or an object with title, subtitle and imgSrc to change the content of the default screen
         */
        welcomeScreen?: WelcomeScreen;
    };
    /**
     * Set a custom label for the "Switch Network" button
     */
    switchNetworkBtnTitle?: string;
}
/**
 * Button that executes a function on a smart contract from the connected wallet when clicked.
 *
 * It ensures the following criteria before attempting to call the contract function:
 *
 * 1. There is a connected wallet (if there is not, it renders a [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component instead.
 *
 * 2. The connected wallet is on the correct network as specified in the [`ThirdwebProvider`](https://portal.thirdweb.com/react/v4/ThirdwebProvider)'s `activeChain` prop. if it is not, it renders a "switch network" button instead.
 *
 * If the action you are performing is async, make sure to return a `Promise` from the action function so that the SDK knows when the action is complete. This can be done by either using async/await or by returning a `Promise`.
 *
 * @example
 * ```javascript
 * import { Web3Button } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *  return (
 *   <div>
 *     <Web3Button
 *       contractAddress="0x..."
 *       action={(contract) => contract.erc721.transfer("0x...", 1)}
 *     >
 *       Claim NFT
 *     </Web3Button>
 *   </div>
 *  )
 * }
 * ```
 *
 * @param props -
 * The props for the component.
 *
 * Refer to [Web3ButtonProps](https://portal.thirdweb.com/references/react/v4/Web3ButtonProps) for more details.
 *
 */
export declare const Web3Button: <TAction extends ActionFn>(props: PropsWithChildren<Web3ButtonProps<TAction>>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map