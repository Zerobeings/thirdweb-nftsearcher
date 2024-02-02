'use strict';

var coinbaseWallet = require('./safeChainSlug-676eb36b.cjs.dev.js');
require('@thirdweb-dev/wallets');
require('./formElements-a5b9f4ea.cjs.dev.js');
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
