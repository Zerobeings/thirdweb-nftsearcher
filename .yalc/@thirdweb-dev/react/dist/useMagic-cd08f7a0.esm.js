import { useCallback } from 'react';
import { useConnect } from '@thirdweb-dev/react-core';

/**
 * @deprecated use [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) instead
 * @walletConnection
 * @internal
 */
function useMagic() {
  const connect = useConnect();
  return useCallback(async options => {
    const {
      magicLink
    } = await import('./magicLink-f46bdbd6.esm.js');
    return connect(magicLink(options), options);
  }, [connect]);
}

export { useMagic as u };
