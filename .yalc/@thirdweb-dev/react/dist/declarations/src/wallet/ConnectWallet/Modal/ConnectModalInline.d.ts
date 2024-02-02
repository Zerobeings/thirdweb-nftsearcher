/// <reference types="react" />
import { Theme } from "../../../design-system";
import { WelcomeScreen } from "../screens/types";
/**
 * @internal
 */
export type ConnectModalInlineProps = {
    className?: string;
    theme?: "dark" | "light" | Theme;
    /**
     * Set a custom title for the modal
     * @defaultValue "Connect"
     */
    modalTitle?: string;
    /**
     * Replace the thirdweb icon next to modalTitle and set your own iconUrl
     *
     * Set to empty string to hide the icon
     */
    modalTitleIconUrl?: string;
    style?: React.CSSProperties;
    /**
     * Set the size of the modal - `compact` or `wide` on desktop
     *
     * Modal size is always `compact` on mobile
     *
     * @defaultValue "wide"
     */
    modalSize?: "compact" | "wide";
    /**
     * If provided, Modal will show a Terms of Service message at the bottom with below link
     */
    termsOfServiceUrl?: string;
    /**
     * If provided, Modal will show a Privacy Policy message at the bottom with below link
     */
    privacyPolicyUrl?: string;
    /**
     * Customize the welcome screen
     *
     * Either provide a component to replace the default screen entirely
     *
     * or an object with title, subtitle and imgSrc to change the content of the default screen
     */
    welcomeScreen?: WelcomeScreen;
};
/**
 * @internal
 */
export declare const ConnectModalInline: (props: ConnectModalInlineProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ConnectModalInline.d.ts.map