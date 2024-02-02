/**
 * @theme
 */
export type Theme = {
    type: "light" | "dark";
    colors: {
        primaryText: string;
        secondaryText: string;
        accentText: string;
        danger: string;
        success: string;
        modalOverlayBg: string;
        accentButtonBg: string;
        accentButtonText: string;
        primaryButtonBg: string;
        primaryButtonText: string;
        secondaryButtonBg: string;
        secondaryButtonText: string;
        secondaryButtonHoverBg: string;
        modalBg: string;
        tooltipBg: string;
        tooltipText: string;
        inputAutofillBg: string;
        scrollbarBg: string;
        walletSelectorButtonHoverBg: string;
        separatorLine: string;
        secondaryIconColor: string;
        secondaryIconHoverBg: string;
        secondaryIconHoverColor: string;
        borderColor: string;
        skeletonBg: string;
        selectedTextColor: string;
        selectedTextBg: string;
        connectedButtonBg: string;
        connectedButtonBgHover: string;
    };
    fontFamily: string;
};
export declare const darkThemeObj: Theme;
export declare const lightThemeObj: Theme;
export type ThemeObjectOrType = "light" | "dark" | Theme;
/**
 * @theme
 */
export type ThemeOverrides = {
    [key in Exclude<keyof Theme, "type">]?: Partial<Theme[key]>;
};
export declare const fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export declare const spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    "3xl": string;
};
export declare const radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
export declare const iconSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
export declare const media: {
    mobile: string;
};
export declare const shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
/**
 * Create a custom light theme object by using the default dark theme as a base and applying overrides.
 *
 * @example
 * ### Get the default light theme
 * ```ts
 * const defaultLightTheme = lightTheme()
 * ```
 *
 * ### Create a custom light theme
 * ```ts
 * const customTheme = lightTheme({
 *   colors: {
 *     modalBg: "red",
 *   },
 * });
 * ```
 *
 * @param overrides - The overrides to apply to the default light theme.
 * @theme
 */
export declare function lightTheme(overrides?: ThemeOverrides): Theme;
/**
 * Create a custom dark theme object by using the default dark theme as a base and applying overrides.
 *
 * @example
 * ### Get the default dark theme
 * ```ts
 * const defaultDarkTheme = darkTheme()
 * ```
 *
 * ### Create a custom dark theme
 * ```ts
 * const customTheme = darkTheme({
 *   colors: {
 *     modalBg: "red",
 *   },
 * });
 * ```
 *
 * @param overrides - The overrides to apply to the default dark theme.
 * @theme
 */
export declare function darkTheme(overrides?: ThemeOverrides): Theme;
export declare function applyThemeOverrides(baseTheme: Theme, themeOverrides: ThemeOverrides): Theme;
//# sourceMappingURL=index.d.ts.map