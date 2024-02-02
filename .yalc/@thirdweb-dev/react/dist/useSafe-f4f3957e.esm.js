import { useConnect } from '@thirdweb-dev/react-core';
import { useCallback } from 'react';

/**
 * @deprecated use [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) instead
 * @walletConnection
 * @internal
 */
function useSafe() {
  const connect = useConnect();
  return useCallback(async connectProps => {
    const {
      safeWallet
    } = await import('./safeWallet-0521b1de.esm.js');
    return connect(safeWallet(), connectProps);
  }, [connect]);
}

// for backwards compatibility

/**
 * @deprecated use [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) instead
 * @walletConnection
 * @internal
 */
const useGnosis = useSafe;

export { useGnosis as a, useSafe as u };
