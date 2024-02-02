'use strict';

var reactCore = require('@thirdweb-dev/react-core');
var React = require('react');
var formElements = require('./formElements-a5b9f4ea.cjs.dev.js');
var jsxRuntime = require('react/jsx-runtime');
var react = require('@emotion/react');
var styled = require('@emotion/styled');
var RadixTooltip = require('@radix-ui/react-tooltip');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var styled__default = /*#__PURE__*/_interopDefault(styled);
var RadixTooltip__namespace = /*#__PURE__*/_interopNamespace(RadixTooltip);

const reservedScreens = {
  main: "main",
  getStarted: "getStarted",
  signIn: "signIn"
};
const modalMaxWidthCompact = "360px";
const modalMaxWidthWide = "730px";
const wideModalMaxHeight = "570px";
const compactModalMaxHeight = "600px";
const defaultTheme = "dark";
const modalCloseFadeOutDuration = 250;
function onModalUnmount(cb) {
  setTimeout(cb, modalCloseFadeOutDuration + 100);
}

const ScreenContext = /* @__PURE__ */React.createContext(undefined);
function useScreen() {
  const walletConfigs = reactCore.useWallets();
  const initialScreen = (walletConfigs.length === 1 && !walletConfigs[0]?.selectUI ? walletConfigs[0] : reservedScreens.main) || reservedScreens.main;
  const [screen, setScreen] = React.useState(initialScreen);
  const prevInitialScreen = React.useRef(initialScreen);
  const wallet = reactCore.useWallet();

  // when the initial screen changes, reset the screen to the initial screen ( if the modal is closed )
  React.useEffect(() => {
    if (initialScreen !== prevInitialScreen.current) {
      prevInitialScreen.current = initialScreen;
      setScreen(initialScreen);
    }
  }, [initialScreen]);

  // if on signature screen and suddenly the wallet is disconnected, go back to the main screen
  React.useEffect(() => {
    if (!wallet && screen === reservedScreens.signIn) {
      setScreen(reservedScreens.main);
    }
  }, [wallet, screen]);
  return {
    screen,
    setScreen,
    initialScreen
  };
}
function useScreenContext() {
  const screen = React.useContext(ScreenContext);
  if (!screen) {
    throw new Error("useScreenContext must be used within a <ScreenProvider />");
  }
  return screen;
}

const emailIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzM1ODlfODY0OSkiPgo8cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzU4OV84NjQ5KSIvPgo8cmVjdCB4PSItMSIgeT0iLTEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcng9IjkuOCIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM1ODlfODY0OSkiLz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxXzM1ODlfODY0OSkiPgo8cGF0aCBkPSJNMjQgMTQuMjVDMTguNjE3MiAxNC4yNSAxNC4yNSAxOC42MTcyIDE0LjI1IDI0QzE0LjI1IDI5LjM4MjggMTguNjE3MiAzMy43NSAyNCAzMy43NUMyNC44OTg4IDMzLjc1IDI1LjYyNSAzNC40NzYyIDI1LjYyNSAzNS4zNzVDMjUuNjI1IDM2LjI3MzggMjQuODk4OCAzNyAyNCAzN0MxNi44MTk1IDM3IDExIDMxLjE4MDUgMTEgMjRDMTEgMTYuODE5NSAxNi44MTk1IDExIDI0IDExQzMxLjE4MDUgMTEgMzcgMTYuODE5NSAzNyAyNFYyNS42MjVDMzcgMjguMzE2NCAzNC44MTY0IDMwLjUgMzIuMTI1IDMwLjVDMzAuNjM3MSAzMC41IDI5LjMwMTYgMjkuODI5NyAyOC40MDc4IDI4Ljc3ODVDMjcuMjUgMjkuODQ0OSAyNS43MDEyIDMwLjUgMjQgMzAuNUMyMC40MDk4IDMwLjUgMTcuNSAyNy41OTAyIDE3LjUgMjRDMTcuNSAyMC40MDk4IDIwLjQwOTggMTcuNSAyNCAxNy41QzI1LjQxNjggMTcuNSAyNi43MjcgMTcuOTUyIDI3Ljc5MzQgMTguNzIzOEMyOC4wODI4IDE4LjQ2OTkgMjguNDU4NiAxOC4zMTI1IDI4Ljg3NSAxOC4zMTI1QzI5Ljc3MzggMTguMzEyNSAzMC41IDE5LjAzODcgMzAuNSAxOS45Mzc1VjI1LjYyNUMzMC41IDI2LjUyMzggMzEuMjI2MiAyNy4yNSAzMi4xMjUgMjcuMjVDMzMuMDIzOCAyNy4yNSAzMy43NSAyNi41MjM4IDMzLjc1IDI1LjYyNVYyNEMzMy43NSAxOC42MTcyIDI5LjM4MjggMTQuMjUgMjQgMTQuMjVaTTI3LjI1IDI0QzI3LjI1IDIzLjEzOCAyNi45MDc2IDIyLjMxMTQgMjYuMjk4MSAyMS43MDE5QzI1LjY4ODYgMjEuMDkyNCAyNC44NjIgMjAuNzUgMjQgMjAuNzVDMjMuMTM4IDIwLjc1IDIyLjMxMTQgMjEuMDkyNCAyMS43MDE5IDIxLjcwMTlDMjEuMDkyNCAyMi4zMTE0IDIwLjc1IDIzLjEzOCAyMC43NSAyNEMyMC43NSAyNC44NjIgMjEuMDkyNCAyNS42ODg2IDIxLjcwMTkgMjYuMjk4MUMyMi4zMTE0IDI2LjkwNzYgMjMuMTM4IDI3LjI1IDI0IDI3LjI1QzI0Ljg2MiAyNy4yNSAyNS42ODg2IDI2LjkwNzYgMjYuMjk4MSAyNi4yOTgxQzI2LjkwNzYgMjUuNjg4NiAyNy4yNSAyNC44NjIgMjcuMjUgMjRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8zNTg5Xzg2NDkiIHgxPSIyNS41IiB5MT0iLTYuMjk1NzJlLTA2IiB4Mj0iMzAuMjAxNiIgeTI9IjQ3LjUzNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODM1OEJBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdCMUNGNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMzU4OV84NjQ5IiB4MT0iMjUuNTYyNSIgeTE9Ii0xLjAwMDAxIiB4Mj0iMzAuNDYiIHkyPSI0OC41MTU2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4MzU4QkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN0IxQ0Y3Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzU4OV84NjQ5Ij4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPGNsaXBQYXRoIGlkPSJjbGlwMV8zNTg5Xzg2NDkiPgo8cmVjdCB3aWR0aD0iMjYiIGhlaWdodD0iMjYiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMSAxMSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
const phoneIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzM1ODlfODYwMikiPgo8cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzU4OV84NjAyKSIvPgo8cmVjdCB4PSItMSIgeT0iLTEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcng9IjkuOCIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM1ODlfODYwMikiLz4KPHBhdGggZD0iTTE4Ljg2MjIgMjYuODY0NkwxOS41MTk0IDI3LjUxODlDMTkuNTE5NCAyNy41MTg5IDIxLjA4MzcgMjkuMDczMSAyNS4zNTIxIDI0LjgyOTNDMjkuNjIwNSAyMC41ODU1IDI4LjA1NjEgMTkuMDMxMyAyOC4wNTYxIDE5LjAzMTNMMjcuNjQzIDE4LjYxODFDMjYuNjIxOCAxNy42MDQxIDI2LjUyNSAxNS45NzQ4IDI3LjQxNjIgMTQuNzg0NkwyOS4yMzYyIDEyLjM1MzVDMzAuMzM5OCAxMC44ODAyIDMyLjQ3MDQgMTAuNjg1MiAzMy43MzQzIDExLjk0MTlMMzYuMDAyMSAxNC4xOTUyQzM2LjYyNzUgMTQuODE5MiAzNy4wNDY0IDE1LjYyNTIgMzYuOTk1OSAxNi41MjA4QzM2Ljg2NTkgMTguODEzMSAzNS44Mjg4IDIzLjc0MzEgMzAuMDQ1MSAyOS40OTQ5QzIzLjkxMDUgMzUuNTkzNCAxOC4xNTQ0IDM1LjgzNjEgMTUuODAxNCAzNS42MTY1QzE1LjA1NiAzNS41NDcyIDE0LjQwODkgMzUuMTY4NyAxMy44ODc0IDM0LjY0ODdMMTEuODM2MyAzMi42MDkyQzEwLjQ0OTYgMzEuMjMyNiAxMC44Mzk2IDI4Ljg3MDkgMTIuNjEzNCAyNy45MDc0TDE1LjM3MjMgMjYuNDA2N0MxNi41MzY2IDI1Ljc3NCAxNy45NTIxIDI1Ljk2MDMgMTguODYyMiAyNi44NjQ2WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM1ODlfODYwMiIgeDE9IjI1LjUiIHkxPSItNi4yOTU3MmUtMDYiIHgyPSIzMC4yMDE2IiB5Mj0iNDcuNTM1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4MzU4QkEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN0IxQ0Y3Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8zNTg5Xzg2MDIiIHgxPSIyNS41NjI1IiB5MT0iLTEuMDAwMDEiIHgyPSIzMC40NiIgeTI9IjQ4LjUxNTYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzgzNThCQSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QjFDRjciLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zNTg5Xzg2MDIiPgo8cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";
const emailAndPhoneIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzM2ODVfNjcwMikiPgo8cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzY4NV82NzAyKSIvPgo8cmVjdCB4PSItMSIgeT0iLTEiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgcng9IjkuOCIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzM2ODVfNjcwMikiLz4KPHBhdGggZD0iTTE3IDExQzEzLjY4NzUgMTEgMTEgMTMuNjg3NSAxMSAxN0MxMSAyMC4zMTI1IDEzLjY4NzUgMjMgMTcgMjNDMTcuNTUzMSAyMyAxOCAyMy40NDY5IDE4IDI0QzE4IDI0LjU1MzEgMTcuNTUzMSAyNSAxNyAyNUMxMi41ODEzIDI1IDkgMjEuNDE4NyA5IDE3QzkgMTIuNTgxMyAxMi41ODEzIDkgMTcgOUMyMS40MTg3IDkgMjUgMTIuNTgxMyAyNSAxN1YxOEMyNSAxOS42NTYyIDIzLjY1NjIgMjEgMjIgMjFDMjEuMDg0NCAyMSAyMC4yNjI1IDIwLjU4NzUgMTkuNzEyNSAxOS45NDA2QzE5IDIwLjU5NjkgMTguMDQ2OSAyMSAxNyAyMUMxNC43OTA2IDIxIDEzIDE5LjIwOTQgMTMgMTdDMTMgMTQuNzkwNiAxNC43OTA2IDEzIDE3IDEzQzE3Ljg3MTkgMTMgMTguNjc4MSAxMy4yNzgxIDE5LjMzNDQgMTMuNzUzMUMxOS41MTI1IDEzLjU5NjkgMTkuNzQzOCAxMy41IDIwIDEzLjVDMjAuNTUzMSAxMy41IDIxIDEzLjk0NjkgMjEgMTQuNVYxOEMyMSAxOC41NTMxIDIxLjQ0NjkgMTkgMjIgMTlDMjIuNTUzMSAxOSAyMyAxOC41NTMxIDIzIDE4VjE3QzIzIDEzLjY4NzUgMjAuMzEyNSAxMSAxNyAxMVpNMTkgMTdDMTkgMTYuNDY5NiAxOC43ODkzIDE1Ljk2MDkgMTguNDE0MiAxNS41ODU4QzE4LjAzOTEgMTUuMjEwNyAxNy41MzA0IDE1IDE3IDE1QzE2LjQ2OTYgMTUgMTUuOTYwOSAxNS4yMTA3IDE1LjU4NTggMTUuNTg1OEMxNS4yMTA3IDE1Ljk2MDkgMTUgMTYuNDY5NiAxNSAxN0MxNSAxNy41MzA0IDE1LjIxMDcgMTguMDM5MSAxNS41ODU4IDE4LjQxNDJDMTUuOTYwOSAxOC43ODkzIDE2LjQ2OTYgMTkgMTcgMTlDMTcuNTMwNCAxOSAxOC4wMzkxIDE4Ljc4OTMgMTguNDE0MiAxOC40MTQyQzE4Ljc4OTMgMTguMDM5MSAxOSAxNy41MzA0IDE5IDE3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI3LjgzODQgMzMuMjY0NEwyOC4yNDI5IDMzLjY5MDdDMjguMjQyOSAzMy42OTA3IDI5LjIwNTUgMzQuNzAzNCAzMS44MzIyIDMxLjkzODNDMzQuNDU4OCAyOS4xNzMxIDMzLjQ5NjIgMjguMTYwNCAzMy40OTYyIDI4LjE2MDRMMzMuMjQxOSAyNy44OTEyQzMyLjYxMzUgMjcuMjMwNSAzMi41NTM5IDI2LjE2ODkgMzMuMTAyNCAyNS4zOTM0TDM0LjIyMjQgMjMuODA5NEMzNC45MDE1IDIyLjg0OTQgMzYuMjEyNiAyMi43MjIzIDM2Ljk5MDQgMjMuNTQxMkwzOC4zODU5IDI1LjAwOTRDMzguNzcwOCAyNS40MTYgMzkuMDI4NiAyNS45NDExIDM4Ljk5NzUgMjYuNTI0N0MzOC45MTc1IDI4LjAxODMgMzguMjc5MiAzMS4yMzA1IDM0LjcyMDIgMzQuOTc4M0MzMC45NDUxIDM4Ljk1MTkgMjcuNDAyOSAzOS4xMSAyNS45NTQ5IDM4Ljk2NjlDMjUuNDk2MiAzOC45MjE4IDI1LjA5OCAzOC42NzUyIDI0Ljc3NzEgMzguMzM2M0wyMy41MTQ5IDM3LjAwNzRDMjIuNjYxNiAzNi4xMTA1IDIyLjkwMTYgMzQuNTcxNyAyMy45OTMxIDMzLjk0MzlMMjUuNjkwOSAzMi45NjZDMjYuNDA3MyAzMi41NTM4IDI3LjI3ODQgMzIuNjc1MiAyNy44Mzg0IDMzLjI2NDRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzY4NV82NzAyIiB4MT0iMjUuNSIgeTE9Ii02LjI5NTcyZS0wNiIgeDI9IjMwLjIwMTYiIHkyPSI0Ny41MzUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzgzNThCQSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3QjFDRjciLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzM2ODVfNjcwMiIgeDE9IjI1LjU2MjUiIHkxPSItMS4wMDAwMSIgeDI9IjMwLjQ2IiB5Mj0iNDguNTE1NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODM1OEJBIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzdCMUNGNyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzM2ODVfNjcwMiI+CjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgcng9IjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
const smartWalletIcon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiByeD0iMTIiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzkxKSIvPgo8cGF0aCBkPSJNMzkuOTk2OSAxOEw0MC4yMzMzIDE4LjAxNTZMNDAuMzUxMyAxOC4wMzMzTDQwLjQ3MzYgMTguMDYyMkw0MC42OTU4IDE4LjEzNzhDNDAuODQ5NCAxOC4yMDA2IDQwLjk5NTQgMTguMjg0MiA0MS4xMzA1IDE4LjM4NjdMNDEuMzM4NyAxOC41Njg5TDQxLjg0OTMgMTkuMDUzM0M0NS44ODkxIDIyLjc3NjggNTAuOTk0NyAyNC43NzYyIDU2LjI0NTggMjQuNjkxMUw1Ni45MzA3IDI0LjY2ODlDNTcuMzc4MyAyNC42NDYyIDU3LjgyIDI0Ljc5MDkgNTguMTg0OSAyNS4wNzk4QzU4LjU0OTggMjUuMzY4NyA1OC44MTY3IDI1Ljc4NSA1OC45NDMxIDI2LjI2MjJDNTkuOTI3MSAyOS45NzY5IDYwLjIyODMgMzMuODczMSA1OS44Mjg3IDM3LjcxOTRDNTkuNDI4OSA0MS41NjU4IDU4LjMzNjcgNDUuMjgzNiA1Ni42MTY1IDQ4LjY1MjNDNTQuODk2NSA1Mi4wMjA3IDUyLjU4MzYgNTQuOTcxNCA0OS44MTU2IDU3LjMyODVDNDcuMDQ3NiA1OS42ODU2IDQzLjg4MDkgNjEuNDAxMiA0MC41MDM2IDYyLjM3MzRDNDAuMTc0IDYyLjQ2ODMgMzkuODI4IDYyLjQ2ODMgMzkuNDk4MiA2Mi4zNzM0QzM2LjEyMDkgNjEuNDAxNCAzMi45NTM4IDU5LjY4NiAzMC4xODU2IDU3LjMyODlDMjcuNDE3NiA1NC45NzE4IDI1LjEwNDUgNTIuMDIxNCAyMy4zODQyIDQ4LjY1MjlDMjEuNjYzOCA0NS4yODQzIDIwLjU3MTMgNDEuNTY2MiAyMC4xNzE1IDM3LjcxOThDMTkuNzcxNyAzMy44NzM0IDIwLjA3MjcgMjkuOTc2OSAyMS4wNTY3IDI2LjI2MjJDMjEuMTgzMSAyNS43ODUgMjEuNDUwMSAyNS4zNjg3IDIxLjgxNSAyNS4wNzk4QzIyLjE3OTkgMjQuNzkwOSAyMi42MjE1IDI0LjY0NjIgMjMuMDY5MyAyNC42Njg5QzI4LjU1MTMgMjQuOTQ3IDMzLjkyOTMgMjIuOTQ0NCAzOC4xNTA3IDE5LjA1MzNMMzguNjc3MyAxOC41NTMzTDM4Ljg2OTYgMTguMzg2N0MzOS4wMDQ3IDE4LjI4NDIgMzkuMTUwNSAxOC4yMDA2IDM5LjMwNCAxOC4xMzc4TDM5LjUyODIgMTguMDYyMkMzOS42MDY5IDE4LjA0MTIgMzkuNjg2NSAxOC4wMjU2IDM5Ljc2NjcgMTguMDE1NkwzOS45OTY5IDE4Wk00MC4wMDA5IDMzLjU1NTZDMzguOTkwNSAzMy41NTUxIDM4LjAxNzMgMzMuOTc4NyAzNy4yNzY1IDM0Ljc0MTFDMzYuNTM1NiAzNS41MDM2IDM2LjA4MTYgMzYuNTQ4NSAzNi4wMDU4IDM3LjY2NjdMMzUuOTk1OCAzOEwzNi4wMDU4IDM4LjMzMzRDMzYuMDU1MSAzOS4wNTQ3IDM2LjI2MjUgMzkuNzUxOCAzNi42MDk4IDQwLjM2NEMzNi45NTY5IDQwLjk3NjIgMzcuNDMzNiA0MS40ODUxIDM3Ljk5ODUgNDEuODQ2N1Y0NS43Nzc4TDM4LjAxMjUgNDYuMDM3OEMzOC4wNzI3IDQ2LjYwMDMgMzguMzI0MiA0Ny4xMTU4IDM4LjcxNTYgNDcuNDc5NEMzOS4xMDcxIDQ3Ljg0MjkgMzkuNjA4NyA0OC4wMjY5IDQwLjExODIgNDcuOTkzOEM0MC42Mjc4IDQ3Ljk2MDUgNDEuMTA2NyA0Ny43MTI3IDQxLjQ1NzEgNDcuMzAwOUM0MS44MDc2IDQ2Ljg4ODkgNDIuMDAyOSA0Ni4zNDQzIDQyLjAwMzYgNDUuNzc3OEw0Mi4wMDU2IDQxLjg0ODlDNDIuNzY5MSA0MS4zNTk2IDQzLjM2NiA0MC42MDQyIDQzLjcwMzQgMzkuNzAwMkM0NC4wNDA3IDM4Ljc5NiA0NC4wOTk2IDM3Ljc5MzggNDMuODcxMSAzNi44NDg3QzQzLjY0MjcgMzUuOTAzNiA0My4xMzk2IDM1LjA2ODUgNDIuNDM5OCAzNC40NzMxQzQxLjc0IDMzLjg3NzYgNDAuODgyNyAzMy41NTUxIDQwLjAwMDkgMzMuNTU1NloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xXzkxKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfOTEiIHgxPSI0MCIgeTE9IjAiIHgyPSI0MCIgeTI9IjgwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4MzU2QkQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjN0MyMEY0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzkxIiB4MT0iNDAiIHkxPSIxOCIgeDI9IjQwIiB5Mj0iNjIuNDQ0NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFMUQ4RkIiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K";

function InputSelectionUI(props) {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState();
  const [showError, setShowError] = React.useState(false);
  const handleSelect = () => {
    setShowError(true);
    if (!input || !!error) {
      return;
    }
    props.onSelect(input);
  };
  const renderingError = showError && !!error || !input && !!props.emptyErrorMessage && showError;
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
      style: {
        position: "relative"
      },
      children: /*#__PURE__*/jsxRuntime.jsx(formElements.Input, {
        tabIndex: -1,
        placeholder: props.placeholder,
        variant: "outline",
        type: props.type,
        name: props.name,
        value: input,
        "data-error": renderingError,
        onChange: e => {
          setInput(e.target.value);
          if (props.errorMessage) {
            setError(props.errorMessage(e.target.value));
          } else {
            setError(undefined);
          }
        },
        onKeyDown: e => {
          if (e.key === "Enter") {
            handleSelect();
          }
        }
      })
    }), showError && error && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        size: "sm",
        children: error
      })]
    }), !(showError && error) && !input && props.emptyErrorMessage && showError && /*#__PURE__*/jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [/*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
        y: "xs"
      }), /*#__PURE__*/jsxRuntime.jsx(formElements.Text, {
        color: "danger",
        size: "sm",
        children: props.emptyErrorMessage
      })]
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Spacer, {
      y: "md"
    }), /*#__PURE__*/jsxRuntime.jsx(formElements.Button, {
      variant: "accent",
      onClick: handleSelect,
      fullWidth: true,
      children: props.submitButtonText
    })]
  });
}

const googleIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDUuNiIgaGVpZ2h0PSI3MjAiIHZpZXdCb3g9IjAgMCAxODYuNjkgMTkwLjUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4NC41ODMgNzY1LjE3MSkiPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMDg5LjMzMy02ODcuMjM5djM2Ljg4OGg1MS4yNjJjLTIuMjUxIDExLjg2My05LjAwNiAyMS45MDgtMTkuMTM3IDI4LjY2MmwzMC45MTMgMjMuOTg2YzE4LjAxMS0xNi42MjUgMjguNDAyLTQxLjA0NCAyOC40MDItNzAuMDUyIDAtNi43NTQtLjYwNi0xMy4yNDktMS43MzItMTkuNDgzeiIgZmlsbD0iIzQyODVmNCIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTQyLjcxNC02NTEuNzkxbC02Ljk3MiA1LjMzNy0yNC42NzkgMTkuMjIzaDBjMTUuNjczIDMxLjA4NiA0Ny43OTYgNTIuNTYxIDg1LjAzIDUyLjU2MSAyNS43MTcgMCA0Ny4yNzgtOC40ODYgNjMuMDM4LTIzLjAzM2wtMzAuOTEzLTIzLjk4NmMtOC40ODYgNS43MTUtMTkuMzEgOS4xNzktMzIuMTI1IDkuMTc5LTI0Ljc2NSAwLTQ1LjgwNi0xNi43MTItNTMuMzQtMzkuMjI2eiIgZmlsbD0iIzM0YTg1MyIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTc0LjM2NS03MTIuNjFjLTYuNDk0IDEyLjgxNS0xMC4yMTcgMjcuMjc2LTEwLjIxNyA0Mi42ODlzMy43MjMgMjkuODc0IDEwLjIxNyA0Mi42ODljMCAuMDg2IDMxLjY5My0yNC41OTIgMzEuNjkzLTI0LjU5Mi0xLjkwNS01LjcxNS0zLjAzMS0xMS43NzYtMy4wMzEtMTguMDk4czEuMTI2LTEyLjM4MyAzLjAzMS0xOC4wOTh6IiBmaWxsPSIjZmJiYzA1Ii8+PHBhdGggZD0iTS0xMDg5LjMzMy03MjcuMjQ0YzE0LjAyOCAwIDI2LjQ5NyA0Ljg0OSAzNi40NTUgMTQuMjAxbDI3LjI3Ni0yNy4yNzZjLTE2LjUzOS0xNS40MTMtMzguMDEzLTI0Ljg1Mi02My43MzEtMjQuODUyLTM3LjIzNCAwLTY5LjM1OSAyMS4zODgtODUuMDMyIDUyLjU2MWwzMS42OTIgMjQuNTkyYzcuNTMzLTIyLjUxNCAyOC41NzUtMzkuMjI2IDUzLjM0LTM5LjIyNnoiIGZpbGw9IiNlYTQzMzUiIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIvPjwvZz48L3N2Zz4=";
const facebookIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iRWJlbmUgMSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgaWQ9ImZhY2Vib29rLWxvZ28tMjAxOSI+PHBhdGggZmlsbD0iIzE4NzdmMiIgZD0iTTEwMjQsNTEyQzEwMjQsMjI5LjIzMDE2LDc5NC43Njk3OCwwLDUxMiwwUzAsMjI5LjIzMDE2LDAsNTEyYzAsMjU1LjU1NCwxODcuMjMxLDQ2Ny4zNzAxMiw0MzIsNTA1Ljc3Nzc3VjY2MEgzMDJWNTEySDQzMlYzOTkuMkM0MzIsMjcwLjg3OTgyLDUwOC40Mzg1NCwyMDAsNjI1LjM4OTIyLDIwMCw2ODEuNDA3NjUsMjAwLDc0MCwyMTAsNzQwLDIxMFYzMzZINjc1LjQzNzEzQzYxMS44MzUwOCwzMzYsNTkyLDM3NS40NjY2Nyw1OTIsNDE1Ljk1NzI4VjUxMkg3MzRMNzExLjMsNjYwSDU5MnYzNTcuNzc3NzdDODM2Ljc2OSw5NzkuMzcwMTIsMTAyNCw3NjcuNTU0LDEwMjQsNTEyWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03MTEuMyw2NjAsNzM0LDUxMkg1OTJWNDE1Ljk1NzI4QzU5MiwzNzUuNDY2NjcsNjExLjgzNTA4LDMzNiw2NzUuNDM3MTMsMzM2SDc0MFYyMTBzLTU4LjU5MjM1LTEwLTExNC42MTA3OC0xMEM1MDguNDM4NTQsMjAwLDQzMiwyNzAuODc5ODIsNDMyLDM5OS4yVjUxMkgzMDJWNjYwSDQzMnYzNTcuNzc3NzdhNTE3LjM5NjE5LDUxNy4zOTYxOSwwLDAsMCwxNjAsMFY2NjBaIj48L3BhdGg+PC9zdmc+";
const twitterIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9InR3aXR0ZXIiPjxwYXRoIGZpbGw9IiMwM0E5RjQiIGQ9Ik0xNiAzLjUzOWE2LjgzOSA2LjgzOSAwIDAgMS0xLjg5LjUxOCAzLjI2MiAzLjI2MiAwIDAgMCAxLjQ0My0xLjgxMyA2LjU1NSA2LjU1NSAwIDAgMS0yLjA4Ljc5NCAzLjI4IDMuMjggMCAwIDAtNS42NzQgMi4yNDNjMCAuMjYuMDIyLjUxLjA3Ni43NDhhOS4yODQgOS4yODQgMCAwIDEtNi43NjEtMy40MzEgMy4yODUgMy4yODUgMCAwIDAgMS4wMDggNC4zODRBMy4yNCAzLjI0IDAgMCAxIC42NCA2LjU3OHYuMDM2YTMuMjk1IDMuMjk1IDAgMCAwIDIuNjI4IDMuMjIzIDMuMjc0IDMuMjc0IDAgMCAxLS44Ni4xMDggMi45IDIuOSAwIDAgMS0uNjIxLS4wNTYgMy4zMTEgMy4zMTEgMCAwIDAgMy4wNjUgMi4yODUgNi41OSA2LjU5IDAgMCAxLTQuMDY3IDEuMzk5Yy0uMjY5IDAtLjUyNy0uMDEyLS43ODUtLjA0NUE5LjIzNCA5LjIzNCAwIDAgMCA1LjAzMiAxNWM2LjAzNiAwIDkuMzM2LTUgOS4zMzYtOS4zMzQgMC0uMTQ1LS4wMDUtLjI4NS0uMDEyLS40MjRBNi41NDQgNi41NDQgMCAwIDAgMTYgMy41Mzl6Ij48L3BhdGg+PC9zdmc+";
const githubIconUri = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEwXzIpIj4KPHBhdGggZD0iTTcuOTk5IDBDMy41ODIwMSAwIDQuNjE2NDhlLTA2IDMuNTk2IDQuNjE2NDhlLTA2IDguMDMyQy0wLjAwMTggOS43MTU1NSAwLjUyNTUxOSAxMS4zNTcxIDEuNTA3NDQgMTIuNzI0NkMyLjQ4OTM1IDE0LjA5MjIgMy44NzYyMSAxNS4xMTY2IDUuNDcyIDE1LjY1M0M1Ljg3MiAxNS43MjcgNi4wMTggMTUuNDc5IDYuMDE4IDE1LjI2NkM2LjAxOCAxNS4wNzUgNi4wMTEgMTQuNTcgNi4wMDcgMTMuOUMzLjc4MiAxNC4zODUgMy4zMTIgMTIuODIzIDMuMzEyIDEyLjgyM0MyLjk0OSAxMS44OTUgMi40MjQgMTEuNjQ4IDIuNDI0IDExLjY0OEMxLjY5NyAxMS4xNSAyLjQ3OCAxMS4xNiAyLjQ3OCAxMS4xNkMzLjI4MSAxMS4yMTcgMy43MDMgMTEuOTg4IDMuNzAzIDExLjk4OEM0LjQxNyAxMy4yMTUgNS41NzYgMTIuODYxIDYuMDMyIDEyLjY1NUM2LjEwNCAxMi4xMzYgNi4zMTEgMTEuNzgyIDYuNTQgMTEuNTgxQzQuNzY0IDExLjM3OCAyLjg5NiAxMC42ODkgMi44OTYgNy42MTJDMi44OTYgNi43MzUgMy4yMDggNi4wMTggMy43MiA1LjQ1NkMzLjYzNyA1LjI1MyAzLjM2MyA0LjQzNiAzLjc5OCAzLjMzMUMzLjc5OCAzLjMzMSA0LjQ3IDMuMTE1IDUuOTk4IDQuMTU0QzYuNjUwNzUgMy45NzU2MSA3LjMyNDMyIDMuODg0ODIgOC4wMDEwMSAzLjg4NEM4LjY3NzcyIDMuODg1MzQgOS4zNTEyNiAzLjk3NjQ3IDEwLjAwNCA0LjE1NUMxMS41MzEgMy4xMTYgMTIuMjAyIDMuMzMyIDEyLjIwMiAzLjMzMkMxMi42MzggNC40MzggMTIuMzY0IDUuMjU0IDEyLjI4MiA1LjQ1N0MxMi43OTUgNi4wMTkgMTMuMTA0IDYuNzM2IDEzLjEwNCA3LjYxM0MxMy4xMDQgMTAuNjk4IDExLjIzNCAxMS4zNzcgOS40NTIgMTEuNTc2QzkuNzM5IDExLjgyNCA5Ljk5NSAxMi4zMTQgOS45OTUgMTMuMDYzQzkuOTk1IDE0LjEzNyA5Ljk4NSAxNS4wMDMgOS45ODUgMTUuMjY2QzkuOTg1IDE1LjQ4MSAxMC4xMjkgMTUuNzMxIDEwLjUzNSAxNS42NTJDMTIuMTI5MiAxNS4xMTQzIDEzLjUxNDQgMTQuMDg5NSAxNC40OTQ5IDEyLjcyMjNDMTUuNDc1NSAxMS4zNTUxIDE2LjAwMTkgOS43MTQ0OCAxNiA4LjAzMkMxNiAzLjU5NiAxMi40MTggMCA3Ljk5OSAwWiIgZmlsbD0iIzhCOEI4QiIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzEwXzIiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==";
const appleIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDM4IiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCA0OTYuMjU1IDYwOC43MjgiIGlkPSJhcHBsZSI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTI3My44MSA1Mi45NzNDMzEzLjgwNi4yNTcgMzY5LjQxIDAgMzY5LjQxIDBzOC4yNzEgNDkuNTYyLTMxLjQ2MyA5Ny4zMDZjLTQyLjQyNiA1MC45OC05MC42NDkgNDIuNjM4LTkwLjY0OSA0Mi42MzhzLTkuMDU1LTQwLjA5NCAyNi41MTItODYuOTcxek0yNTIuMzg1IDE3NC42NjJjMjAuNTc2IDAgNTguNzY0LTI4LjI4NCAxMDguNDcxLTI4LjI4NCA4NS41NjIgMCAxMTkuMjIyIDYwLjg4MyAxMTkuMjIyIDYwLjg4M3MtNjUuODMzIDMzLjY1OS02NS44MzMgMTE1LjMzMWMwIDkyLjEzMyA4Mi4wMSAxMjMuODg1IDgyLjAxIDEyMy44ODVzLTU3LjMyOCAxNjEuMzU3LTEzNC43NjIgMTYxLjM1N2MtMzUuNTY1IDAtNjMuMjE1LTIzLjk2Ny0xMDAuNjg4LTIzLjk2Ny0zOC4xODggMC03Ni4wODQgMjQuODYxLTEwMC43NjYgMjQuODYxQzg5LjMzIDYwOC43MyAwIDQ1NS42NjYgMCAzMzIuNjI4YzAtMTIxLjA1MiA3NS42MTItMTg0LjU1NCAxNDYuNTMzLTE4NC41NTQgNDYuMTA1IDAgODEuODgzIDI2LjU4OCAxMDUuODUyIDI2LjU4OHoiPjwvcGF0aD48L3N2Zz4=";
const linkedinIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0MCIgaWQ9ImxpbmtlZGluIj48cGF0aCBmaWxsPSIjMDA3RUJCIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NCA0MGgtOS43MjVWMjUuOTM4YzAtMy42OC0xLjUyLTYuMTkzLTQuODY2LTYuMTkzLTIuNTU4IDAtMy45ODEgMS42OTYtNC42NDMgMy4zMy0uMjQ5LjU4Ni0uMjEgMS40MDMtLjIxIDIuMjJWNDBoLTkuNjM0cy4xMjQtMjQuOTA5IDAtMjcuMTczaDkuNjM0djQuMjY1Yy41Ny0xLjg2NSAzLjY0OC00LjUyNiA4LjU2LTQuNTI2QzM5LjIxMSAxMi41NjYgNDQgMTYuNDc0IDQ0IDI0Ljg5MVY0MHpNNS4xOCA5LjQyOGgtLjA2M0MyLjAxMyA5LjQyOCAwIDcuMzUxIDAgNC43MTggMCAyLjAzNCAyLjA3MiAwIDUuMjM5IDBjMy4xNjQgMCA1LjExIDIuMDI5IDUuMTcxIDQuNzEgMCAyLjYzMy0yLjAwNyA0LjcxOC01LjIzIDQuNzE4em0tNC4wNyAzLjM5OWg4LjU3NlY0MEgxLjExVjEyLjgyN3oiPjwvcGF0aD48L3N2Zz4=";
const bitbucketIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImJpdGJ1Y2tldCI+PHBhdGggZmlsbD0iIzI2ODBGOCIgZD0iTTQuMjk3IDIzaDE1LjY1OWEuNzc2Ljc3NiAwIDAgMCAuNzY5LS42NTdMMjMuOTkgMS45MTZhLjc4Ljc4IDAgMCAwLS42MzUtLjg5NyAxLjEzIDEuMTMgMCAwIDAtLjEzNC0uMDA5TC43NzkgMUEuNzc1Ljc3NSAwIDAgMCAwIDEuNzc1YzAgLjA0NC4wMDUuMDkzLjAwOS4xMzdsMy4yNjUgMjAuMTk2Yy4wODIuNTA5LjUxNS44ODcgMS4wMjMuODkyek0xNS43MzYgOC4zOTFsLTEuMjExIDcuMjA1aC01TDguMTczIDguMzkxaDcuNTYzeiI+PC9wYXRoPjwvc3ZnPg==";
const gitlabIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAwIiBoZWlnaHQ9IjIzMDUiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAyNTYgMjM2IiBpZD0iZ2l0bGFiIj48cGF0aCBmaWxsPSIjRTI0MzI5IiBkPSJNMTI4LjA3NSAyMzYuMDc1bDQ3LjEwNC0xNDQuOTdIODAuOTdsNDcuMTA0IDE0NC45N3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkM2RDI2IiBkPSJNMTI4LjA3NSAyMzYuMDc0TDgwLjk3IDkxLjEwNEgxNC45NTZsMTEzLjExOSAxNDQuOTd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZDQTMyNiIgZD0iTTE0Ljk1NiA5MS4xMDRMLjY0MiAxMzUuMTZhOS43NTIgOS43NTIgMCAwIDAgMy41NDIgMTAuOTAzbDEyMy44OTEgOTAuMDEyLTExMy4xMi0xNDQuOTd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0UyNDMyOSIgZD0iTTE0Ljk1NiA5MS4xMDVIODAuOTdMNTIuNjAxIDMuNzljLTEuNDYtNC40OTMtNy44MTYtNC40OTItOS4yNzUgMGwtMjguMzcgODcuMzE1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGQzZEMjYiIGQ9Ik0xMjguMDc1IDIzNi4wNzRsNDcuMTA0LTE0NC45N2g2Ni4wMTVsLTExMy4xMiAxNDQuOTd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZDQTMyNiIgZD0iTTI0MS4xOTQgOTEuMTA0bDE0LjMxNCA0NC4wNTZhOS43NTIgOS43NTIgMCAwIDEtMy41NDMgMTAuOTAzbC0xMjMuODkgOTAuMDEyIDExMy4xMTktMTQ0Ljk3eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFMjQzMjkiIGQ9Ik0yNDEuMTk0IDkxLjEwNWgtNjYuMDE1bDI4LjM3LTg3LjMxNWMxLjQ2LTQuNDkzIDcuODE2LTQuNDkyIDkuMjc1IDBsMjguMzcgODcuMzE1eiI+PC9wYXRoPjwvc3ZnPg==";
const twitchIconUri = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCAwIDExMS43ODY2NyAxMjcuMzg2NjciCiAgIGhlaWdodD0iMTI3LjM4NjY3IgogICB3aWR0aD0iMTExLjc4NjY3IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmczMzU1IgogICBzb2RpcG9kaTpkb2NuYW1lPSJUd2l0Y2hfbG9nby5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMS4xICgzYmY1YWUwZDI1LCAyMDIxLTA5LTIwKSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcwogICBpZD0iZGVmczI5Ij4KICAgIAogICAgCiAgPC9kZWZzPjxzb2RpcG9kaTpuYW1lZHZpZXcKICAgaWQ9Im5hbWVkdmlldzI3IgogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iNC4xOTkyMjg0IgogICBpbmtzY2FwZTpjeD0iLTUwLjYwNDUzNSIKICAgaW5rc2NhcGU6Y3k9IjE0MC4zODI5MyIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIyNTYwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMzg3IgogICBpbmtzY2FwZTp3aW5kb3cteD0iMTkxMiIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJzdmczMzU1IiAvPgogIDxnCiAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMzMzMzMzMywwLDAsLTEuMzMzMzMzMywxMDEuMzkzMzMsNjcuNTg5MzMyKSIKICAgaWQ9ImczMzY1Ij4KICAgICAgPHBhdGgKICAgaWQ9InBhdGgzMzY3IgogICBzdHlsZT0iZmlsbDojNjQ0MWE1O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lIgogICBkPSJtIDAsMCAtMTMuNjUyLC0xMy42NTEgaCAtMjEuNDQ1IGwgLTExLjY5OSwtMTEuNjk3IHYgMTEuNjk3IEggLTY0LjM0NCBWIDQyLjg5MyBIIDAgWiBtIC03Mi4xNDYsNTAuNjkyIC0zLjg5OSwtMTUuNTk5IHYgLTcwLjE5IGggMTcuNTUgdiAtOS43NTEgaCA5Ljc0NiBsIDkuNzUyLDkuNzUxIGggMTUuNTk2IEwgNy43OTUsLTMuOTA1IHYgNTQuNTk3IHoiIC8+CiAgICA8L2c+PHBhdGgKICAgaWQ9InBhdGgzMzY5IgogICBzdHlsZT0iZmlsbDojNjQ0MWE1O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxLjMzMzMzIgogICBkPSJtIDQ0LjE5NzMzMSw2Mi4zOTQyNjYgaCAxMC4zOTg2NyBWIDMxLjE5MjkzMyBoIC0xMC4zOTg2NyB6IG0gMjguNTk0NjcsMCBoIDEwLjM5ODY2IFYgMzEuMTkyOTMzIGggLTEwLjM5ODY2IHoiIC8+Cjwvc3ZnPgo=";
const discordIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEwMCAxMDAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBpZD0iZGlzY29yZCI+PHBhdGggZmlsbD0iIzY2NjVkMiIgZD0iTTg1LjIyLDI0Ljk1OGMtMTEuNDU5LTguNTc1LTIyLjQzOC04LjMzNC0yMi40MzgtOC4zMzRsLTEuMTIyLDEuMjgyCgkJCQljMTMuNjIzLDQuMDg3LDE5Ljk1NCwxMC4wOTcsMTkuOTU0LDEwLjA5N2MtMTkuNDkxLTEwLjczMS00NC4zMTctMTAuNjU0LTY0LjU5LDBjMCwwLDYuNTcxLTYuMzMxLDIwLjk5Ni0xMC40MThsLTAuODAxLTAuOTYyCgkJCQljMCwwLTEwLjg5OS0wLjI0LTIyLjQzOCw4LjMzNGMwLDAtMTEuNTQsMjAuNzU1LTExLjU0LDQ2LjMxOWMwLDAsNi43MzIsMTEuNTQsMjQuNDQyLDEyLjEwMWMwLDAsMi45NjUtMy41MjYsNS4zNjktNi41NzEKCQkJCWMtMTAuMTc3LTMuMDQ1LTE0LjAyNC05LjM3Ni0xNC4wMjQtOS4zNzZjNi4zOTQsNC4wMDEsMTIuODU5LDYuNTA1LDIwLjkxNiw4LjA5NGMxMy4xMDgsMi42OTgsMjkuNDEzLTAuMDc2LDQxLjU5MS04LjA5NAoJCQkJYzAsMC00LjAwNyw2LjQ5MS0xNC41MDUsOS40NTZjMi40MDQsMi45NjUsNS4yODksNi40MTEsNS4yODksNi40MTFjMTcuNzEtMC41NjEsMjQuNDQxLTEyLjEwMSwyNC40NDEtMTIuMDIKCQkJCUM5Ni43NTksNDUuNzEzLDg1LjIyLDI0Ljk1OCw4NS4yMiwyNC45NTh6IE0zNS4wNTUsNjMuODI0Yy00LjQ4OCwwLTguMTc0LTMuOTI3LTguMTc0LTguODE1CgkJCQljMC4zMjgtMTEuNzA3LDE2LjEwMi0xMS42NzEsMTYuMzQ4LDBDNDMuMjI5LDU5Ljg5NywzOS42MjIsNjMuODI0LDM1LjA1NSw2My44MjR6IE02NC4zMDQsNjMuODI0CgkJCQljLTQuNDg4LDAtOC4xNzQtMy45MjctOC4xNzQtOC44MTVjMC4zNi0xMS42ODQsMTUuOTM3LTExLjY4OSwxNi4zNDgsMEM3Mi40NzgsNTkuODk3LDY4Ljg3Miw2My44MjQsNjQuMzA0LDYzLjgyNHoiPjwvcGF0aD48L3N2Zz4=";
const microsoftIconUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNmZjU3MjIiIGQ9Ik02IDZIMjJWMjJINnoiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgMTQgMTQpIi8+PHBhdGggZmlsbD0iIzRjYWY1MCIgZD0iTTI2IDZINDJWMjJIMjZ6IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDM0IDE0KSIvPjxwYXRoIGZpbGw9IiNmZmMxMDciIGQ9Ik0yNiAyNkg0MlY0MkgyNnoiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgMzQgMzQpIi8+PHBhdGggZmlsbD0iIzAzYTlmNCIgZD0iTTYgMjZIMjJWNDJINnoiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgMTQgMzQpIi8+PC9zdmc+";

const ToolTip = props => {
  return /*#__PURE__*/jsxRuntime.jsx(RadixTooltip__namespace.Provider, {
    delayDuration: 200,
    children: /*#__PURE__*/jsxRuntime.jsxs(RadixTooltip__namespace.Root, {
      children: [/*#__PURE__*/jsxRuntime.jsx(RadixTooltip__namespace.Trigger, {
        asChild: true,
        children: props.children
      }), /*#__PURE__*/jsxRuntime.jsx(RadixTooltip__namespace.Portal, {
        children: /*#__PURE__*/jsxRuntime.jsxs(TooltipContent, {
          sideOffset: props.sideOffset || 6,
          align: props.align,
          side: props.side,
          children: [props.tip, /*#__PURE__*/jsxRuntime.jsx(TooltipArrow, {})]
        })
      })]
    })
  });
};
const slideUpAndFade = react.keyframes`
from {
  opacity: 0;
  transform: translateY(2px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;
const TooltipContent = /* @__PURE__ */(() => styled__default["default"](RadixTooltip__namespace.Content)(() => {
  const theme = formElements.useCustomTheme();
  return {
    background: theme.colors.tooltipBg,
    color: theme.colors.tooltipText,
    borderRadius: formElements.radius.sm,
    padding: `${formElements.spacing.xs} ${formElements.spacing.sm}`,
    fontSize: formElements.fontSize.sm,
    boxShadow: formElements.shadow.sm,
    userSelect: "none",
    willChange: "transform, opacity",
    animation: `${slideUpAndFade} 200ms cubic-bezier(0.16, 1, 0.3, 1)`,
    zIndex: 999999999999999,
    maxWidth: "300px",
    lineHeight: 1.5
  };
}))();
const TooltipArrow = /* @__PURE__ */(() => styled__default["default"](RadixTooltip__namespace.Arrow)(() => {
  const theme = formElements.useCustomTheme();
  return {
    fill: theme.colors.tooltipBg
  };
}))();

exports.InputSelectionUI = InputSelectionUI;
exports.ScreenContext = ScreenContext;
exports.ToolTip = ToolTip;
exports.appleIconUri = appleIconUri;
exports.bitbucketIconUri = bitbucketIconUri;
exports.compactModalMaxHeight = compactModalMaxHeight;
exports.defaultTheme = defaultTheme;
exports.discordIconUri = discordIconUri;
exports.emailAndPhoneIcon = emailAndPhoneIcon;
exports.emailIcon = emailIcon;
exports.facebookIconUri = facebookIconUri;
exports.githubIconUri = githubIconUri;
exports.gitlabIconUri = gitlabIconUri;
exports.googleIconUri = googleIconUri;
exports.linkedinIconUri = linkedinIconUri;
exports.microsoftIconUri = microsoftIconUri;
exports.modalCloseFadeOutDuration = modalCloseFadeOutDuration;
exports.modalMaxWidthCompact = modalMaxWidthCompact;
exports.modalMaxWidthWide = modalMaxWidthWide;
exports.onModalUnmount = onModalUnmount;
exports.phoneIcon = phoneIcon;
exports.reservedScreens = reservedScreens;
exports.smartWalletIcon = smartWalletIcon;
exports.twitchIconUri = twitchIconUri;
exports.twitterIconUri = twitterIconUri;
exports.useScreen = useScreen;
exports.useScreenContext = useScreenContext;
exports.wideModalMaxHeight = wideModalMaxHeight;
