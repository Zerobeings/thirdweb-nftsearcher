/// <reference types="react" />
import { fontSize, Theme } from "../design-system";
type TextProps = {
    theme?: Theme;
    color?: keyof Theme["colors"];
    center?: boolean;
    inline?: boolean;
    size?: keyof typeof fontSize;
    weight?: 400 | 500 | 600 | 700;
    multiline?: boolean;
    balance?: boolean;
};
export declare const Text: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & TextProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
type LinkProps = {
    theme?: Theme;
    size?: keyof typeof fontSize;
    weight?: 400 | 500 | 600 | 700;
    inline?: boolean;
    center?: boolean;
    color?: keyof Theme["colors"];
    hoverColor?: keyof Theme["colors"];
};
export declare const Link: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & LinkProps, import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
export {};
//# sourceMappingURL=text.d.ts.map