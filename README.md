<p align="center">
  <a href="https://verto.exchange">
    <img src="https://raw.githubusercontent.com/useverto/design/master/logo/logo_light.svg" alt="Verto logo (dark version)" width="110">
  </a>

  <h3 align="center">Verto</h3>

  <p align="center">
    A decentralized PST exchange for Arweave
 </p>
</p>

## About

This is a service that allows you to import trading statistics from Verto straight into your applications!

You can access the code for trading posts [here](https://github.com/useverto/trading-post).

> Important Notice: Verto is in its Alpha stage. If you have a suggestion, idea, or find a bug, please report it! The Verto team will not be held accountable for any funds lost.

## Guide

### `/price`

This endpoint accepts a `token` in the form of a url query.

You can pass it in as follows: `/price?token=<MY_TOKEN_ID_HERE>`.

A token is a valid transaction ID for your PST smart contract.

Once you visit this url, you will be given a graph of your PST price over time.

You can then embed this using an iframe as follows:

```html
<iframe
  src="https://stats.verto.exchange/price?token=<MY_TOKEN_ID_HERE>"
  title="Token Price"
></iframe>
```

Alternatively, if you'd like to embed a direct Arweave url, you can use:

```html
<iframe
  src="https://sw6w75qajmpfz6ejcyygix4lqprtrhiq4ieqlsk7fthhwtx7fapa.arweave.net/lb1v9gBLHlz4iRYwZF-Lg-M4nRDiCQXJXyzOe07_KB4?token=<MY_TOKEN_ID_HERE>"
  title="Token Price"
></iframe>
```

### `/volume`

This endpoint accepts a `token` in the form of a url query.

You can pass it in as follows: `/volume?token=<MY_TOKEN_ID_HERE>`.

A token is a valid transaction ID for your PST smart contract.

Once you visit this url, you will be given a graph of how much of that PST has gone through the Verto Exchange Network.

You can then embed this using an iframe as follows:

```html
<iframe
  src="https://stats.verto.exchange/volume?token=<MY_TOKEN_ID_HERE>"
  title="Token Volume"
></iframe>
```

Alternatively, if you'd like to embed a direct Arweave url, you can use:

```html
<iframe
  src="https://ypxhi2bmkoqsrinuvy5a4jp4iqkgqxemge3dqosl2eqhakpyeyvq.arweave.net/w-50aCxToSihtK46DiX8RBRoXIwxNjg6S9EgcCn4Jis?token=<MY_TOKEN_ID_HERE>"
  title="Token Volume"
></iframe>
```

## Special Thanks

- [Sam Williams](https://github.com/samcamwilliams)
- [Cedrik Boudreau](https://github.com/cedriking)
- [Aidan O'Kelly](https://github.com/aidanok)

## License

The code contained within this repository is licensed under the MIT license.
See [`./LICENSE`](./LICENSE) for more information.
