'use strict';

var coinbaseWallet = require('./safeChainSlug-fd1debda.cjs.prod.js');
require('@thirdweb-dev/wallets');
require('./formElements-c3eed36c.cjs.prod.js');
require('@emotion/react');
require('react/jsx-runtime');
require('react');
require('@thirdweb-dev/react-core');
require('@radix-ui/react-icons');
require('detect-browser');
require('@radix-ui/colors');
require('@emotion/styled');
require('qrcode');

/**
 * @deprecated Use `walletConnect` instead
 *
 * The WalletConnect v1.0 protocol has been shut down and no longer works.
 * To avoid breaking change, `walletConnectV1` is still available but is an alias of `walletConnect`.
 *
 * @internal
 */
const walletConnectV1 = coinbaseWallet.walletConnect;

exports.walletConnectV1 = walletConnectV1;
