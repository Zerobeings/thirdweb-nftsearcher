export interface SearchBarProps {
    activeNetwork?: string;
    limit?: number;
    start?: number;
    theme?: string;
    onNFTsFetched?: (nfts: any[]) => void;
    classNames?: {
        searchBarContainer?: string;
        selectNetwork?: string;
        searchBar?: string;
        searchBarMatic?: string;
        clearButton?: string;
        suggestionsContainer?: string;
        suggestion?: string;
        suggestionLogo?: string;
    };
}
export interface Collection {
    name?: string;
    contract?: string;
    image?: string;
    symbol?: string;
}
export interface Collections {
    [key: string]: Collection[];
}
export declare const NFTSearcher: ({ activeNetwork, limit, start, theme, onNFTsFetched, classNames }: SearchBarProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map