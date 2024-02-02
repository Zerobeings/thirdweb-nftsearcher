export type DeepPartial<T extends Record<string, any>> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
/**
 * Create a new object with given overrides object applied on top of given base object without mutating the base and overrides object
 *
 * @param defaultObj - The object to use as the base object
 * @param overrides - The object to use as the overrides
 */
export declare function immutableOverride<T extends Record<string, any>>(defaultObj: T, overrides: DeepPartial<T>): T;
//# sourceMappingURL=applyOverrides.d.ts.map