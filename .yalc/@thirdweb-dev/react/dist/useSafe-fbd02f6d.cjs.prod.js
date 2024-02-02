'use strict';

var reactCore = require('@thirdweb-dev/react-core');
var React = require('react');

/**
 * @deprecated use [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) instead
 * @walletConnection
 * @internal
 */
function useSafe() {
  const connect = reactCore.useConnect();
  return React.useCallback(async connectProps => {
    const {
      safeWallet
    } = await Promise.resolve().then(function () { return require('./safeWallet-25252665.cjs.prod.js'); });
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

exports.useGnosis = useGnosis;
exports.useSafe = useSafe;