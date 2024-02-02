'use strict';

var React = require('react');
var reactCore = require('@thirdweb-dev/react-core');

/**
 * @deprecated use [`ConnectWallet`](https://portal.thirdweb.com/react/v4/components/ConnectWallet) or [`useConnect`](https://portal.thirdweb.com/references/react/v4/useConnect) instead
 * @walletConnection
 * @internal
 */
function useMagic() {
  const connect = reactCore.useConnect();
  return React.useCallback(async options => {
    const {
      magicLink
    } = await Promise.resolve().then(function () { return require('./magicLink-6810d45f.cjs.dev.js'); });
    return connect(magicLink(options), options);
  }, [connect]);
}

exports.useMagic = useMagic;
