/// <reference types="react" />
import { Theme } from "../../design-system";
import { type NetworkSelectorProps } from "./NetworkSelector";
import { SupportedTokens } from "./defaultTokens";
export declare const ConnectedWalletDetails: React.FC<{
    onDisconnect: () => void;
    style?: React.CSSProperties;
    networkSelector?: Omit<NetworkSelectorProps, "theme" | "onClose" | "chains" | "open">;
    className?: string;
    detailsBtn?: () => JSX.Element;
    hideTestnetFaucet?: boolean;
    theme: "light" | "dark" | Theme;
    supportedTokens: SupportedTokens;
    displayBalanceToken?: Record<number, string>;
    hideSwitchToPersonalWallet?: boolean;
    hideDisconnect?: boolean;
}>;
export declare const StyledChevronRightIcon: import("@emotion/styled").StyledComponent<import("@radix-ui/react-icons/dist/types").IconProps & import("react").RefAttributes<SVGSVGElement> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
//# sourceMappingURL=Details.d.ts.map