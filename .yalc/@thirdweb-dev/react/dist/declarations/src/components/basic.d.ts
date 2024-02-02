/// <reference types="react" />
import { Theme, spacing } from "../design-system";
import type { CSSObject } from "@emotion/react";
export declare const ScreenBottomContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const noScrollBar: CSSObject;
export declare function ModalHeader(props: {
    onBack?: () => void;
    title: React.ReactNode;
    imgSrc?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const Line: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare function Container(props: {
    animate?: "fadein" | "floatup" | "floatdown";
    fullHeight?: boolean;
    flex?: "row" | "column";
    expand?: boolean;
    center?: "x" | "y" | "both";
    gap?: keyof typeof spacing;
    children: React.ReactNode;
    style?: React.CSSProperties;
    p?: keyof typeof spacing;
    px?: keyof typeof spacing;
    py?: keyof typeof spacing;
    relative?: boolean;
    scrollY?: boolean;
    color?: keyof Theme["colors"];
    debug?: boolean;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=basic.d.ts.map