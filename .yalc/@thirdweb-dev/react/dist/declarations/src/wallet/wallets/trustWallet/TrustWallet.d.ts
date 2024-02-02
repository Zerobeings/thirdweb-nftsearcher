import type { WalletConfig } from "@thirdweb-dev/react-core";
import { TrustWallet } from "@thirdweb-dev/wallets";
/**
 * @wallet
 */
export type TrustWalletConfigOptions = {
    /**
     * When connecting Trust using the QR Code - Wallet Connect connector is used which requires a project id.
     * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
     *
     * https://docs.walletconnect.com/2.0/web3modal/options#projectid-required
     */
    projectId?: string;
    /**
     * If true, the wallet will be tagged as "recommended" in ConnectWallet Modal
     */
    recommended?: boolean;
};
/**
 * A wallet configurator for [Trust Wallet](https://trustwallet.com/) which allows integrating the wallet with React.
 *
 * It returns a [`WalletConfig`](https://portal.thirdweb.com/references/react/v4/WalletConfig) object which can be used to connect the wallet to via [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) component or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) hook as mentioned in [Connecting Wallets](https://portal.thirdweb.com/react/v4/connecting-wallets) guide
 *
 * @example
 * ```ts
 * trustWallet({
 *  projectId: 'your_project_id',
 *  recommended: true,
 * })
 * ```
 *
 * @param config -
 * Optional configuration options for the wallet
 *
 * ### projectId (optional)
 * When connecting Trust using the QR Code - Wallet Connect connector is used which requires a project id.
 * This project id is Your project’s unique identifier for wallet connect that can be obtained at cloud.walletconnect.com.
 *
 * ### recommended (optional)
 * If true, the wallet will be tagged as "recommended" in [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) Modal UI
 *
 * @wallet
 */
export declare const trustWallet: (options?: TrustWalletConfigOptions) => WalletConfig<TrustWallet>;
//# sourceMappingURL=TrustWallet.d.ts.map