export type TokenInfo = {
    name: string;
    symbol: string;
    address: string;
    icon: string;
};
export type SupportedTokens = Record<number, TokenInfo[]>;
/**
 * Default tokens shown in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet)'s SendFunds screen for each network.
 *
 * You can use the default tokens as a starting point for your own list of tokens and override tokens for specific networks.
 *
 * @example
 * Below example shows adding a custom token for the Ethereum mainnet at start of the list of default tokens for the Ethereum mainnet. Here the `1` represents the chainId of Ethereum mainnet.
 *
 * ```tsx
 * const ethereumChainId = 1;
 *
 * <ConnectWallet supportedTokens={{
 *  ...defaultTokens,
 *  [ethereumChainId]: [
 *    {
 *      address: 'YOUR_TOKEN_ADDRESS',
 *      name: 'YOUR_TOKEN_NAME',
 *      symbol: 'YOUR_TOKEN_SYMBOL',
 *      icon: 'YOUR_TOKEN_ICON_URL'
 *    },
 *    ...defaultTokens[ethereumChainId],
 *  ]
 * }} />
 * ```
 */
export declare const defaultTokens: SupportedTokens;
//# sourceMappingURL=defaultTokens.d.ts.map