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
    } = await import('./magicLink-47c75a59.browser.esm.js');
    return connect(magicLink(options), options);
  }, [connect]);
}

export { useMagic as u };