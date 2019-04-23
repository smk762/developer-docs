# DEX API

## Note About Current Limitations

This API documentation currently only features RPC methods that are available in MarketMaker 2.0 (MM2). There are many commands from the legacy Market Maker 1.0 that Komodo intends to import to MM2 as soon as possible. For now, these commands are available at [this external website.](api.kmd.host)

## electrum

**electrum coin urls (mm2)**

::: warning Important

This command must be executed at the initiation of each MM2 instance. Also, Komodo DEX software requires the `mm2` parameter to be set for each `coin`; the methods to activate the parameter vary. See below for further information.

:::

::: tip

Electrum mode is available for utxo-based coins only; this includes Bitcoin and Bitcoin-based forks. Electrum mode is not available for ETH/ERC20.

:::

The `electrum` method enables a `coin` by connecting the user's software instance to the `coin` blockchain using electrum technology (e.g. lite mode). This allows the user to avoid syncing the entire blockchain to their local machine.

Each `coin` can be enabled only once, and in either Electrum or Native mode. The DEX software does not allow a `coin` to be active in both modes at once.  

#### Notes on the mm2 Parameter

For each `coin`, Komodo software requires the user/developer to set the `mm2` parameter. This can be achieved either in the [coins](../atomic-swap-dex/dex-walkthrough.md#setting-up-coin-list) for more details), or via the [electrum](../atomic-swap-dex/dex-api.html#electrum) and [enable](../atomic-swap-dex/dex-api.html#enable) methods.

The value of the `mm2` parameter informs the software as to whether the `coin` is expected to function.

- `0` = `non-functioning`
- `1` = `functioning`

::: tip
GUI software developers may refer to the `coins` file [in this link](https://github.com/jl777/coins) for the default coin json configuration.
:::

Volunteers are welcome to test coins with Komodo DEX software at any time. After testing a coin, please create a pull request with the desired coin configuration and successful swap details using the guide linked below.

[Guide to Submitting Coin Test Results](https://github.com/jl777/coins#0-the-coin-must-be-tested-with-barterdex-atomic-swaps)


##### Examples of the Parameter Settings

Set the value of the `mm2` parameter in the [coins](../atomic-swap-dex/dex-walkthrough.md#setting-up-coin-list) file as follows:

```bash
mm2=1
```

For terminal interface examples, see the examples section below.

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| coin      | string | the name of the coin you want to enable |
| urls      | array of strings | the urls of Electrum servers to which you want to connect |
| mm2       | number (required if not set in the `coins` file) | this property informs the Komodo DEX software as to whether the coin is expected to function; accepted values are either `0` or `1` |

::: warning Note
If the connection to at least one of the provided `urls` fails for any reason the software will not enable the coin. Instead, the software will return an error.
:::

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| address    | string  | the address of the user's `coin` wallet, based on the user's passphrase |
| balance   | number    | the amount of `coin` the user holds in their wallet |
| result    | string    | the result of the request; this will be either `success`, or will indicate an error or failure otherwise |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"electrum\",\"coin\":\"HELLOWORLD\",\"urls\":[\"electrum1.cipig.net:10022\",\"electrum2.cipig.net:10022\",\"electrum3.cipig.net:10022\"]}"
```

Response (Success):

```json
{
  "coin": "HELLOWORLD",
  "address": "RQNUR7qLgPUgZxYbvU9x5Kw93f6LU898CQ",
  "balance": 10,
  "result": "success"
}
```

Response (Error):

```bash
{
  "error":"lp_coins:829] lp_coins:786] utxo:951] rpc_clients:557] rpc_clients:384] electrum4.cipig.net:10025 error Custom { kind: Other, error: StringError(\"failed to lookup address information: Name or service not known\") }"
}
```

Command (With `mm2` argument):

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"electrum\",\"coin\":\"HELLOWORLD\",\"urls\":[\"electrum1.cipig.net:10022\",\"electrum2.cipig.net:10022\",\"electrum3.cipig.net:10022\"],\"mm2\":1}"
```

Response (Success):

```bash
{
  "coin": "HELLOWORLD",
  "address": "RQNUR7qLgPUgZxYbvU9x5Kw93f6LU898CQ",
  "balance": 10,
  "result": "success"
}
```

Response (Error, `mm2` is not set):

```bash
{
  "error":"lp_coins:943] lp_coins:693] mm2 param is not set neither in coins config nor enable request, assuming that coin is not supported"
}
```

## enable

**enable coin (urls swap_contract_address mm2)**

::: warning Important

Komodo DEX software requires the `mm2` parameter to be set for each `coin`; the methods to activate the parameter vary. See below for further information.

:::

The `enable` method enables a coin by connecting the user's software instance to the `coin` blockchain using the `native` coin daemon.

Each `coin` can be enabled only once, and in either Electrum or Native mode. The DEX software does not allow a `coin` to be active in both modes at once.  

For utxo-based coins the daemon of this blockchain must also be running on the user's machine for `enable` to function.  

ETH/ERC20 coins are also enabled by the `enable` method, but a local installation of an ETH node is not required.  

#### Notes on the mm2 Parameter

Please refer to the `mm2` explanatory section in the `electrum` method for information about setting the `mm2` parameter and testing new coins.

[Link to `mm2` explanatory section](../atomic-swap-dex/dex-api.html#notes-on-the-mm2-parameter)

For terminal interface examples using the `mm2` parameter with the `enable` method, see the examples section below.

#### Using Komodo DEX Software on an ETH-Based Network

The following information can assist the user/developer in connecting Komodo DEX software to the Ethereum network:

- Swap smart contract on the ETH mainnet: [0x8500AFc0bc5214728082163326C2FF0C73f4a871](https://etherscan.io/address/0x8500AFc0bc5214728082163326C2FF0C73f4a871) 
  - Main-net node maintained by the Komodo team: <b>http://195.201.0.6:8555</b>  
- Swap smart contract on the Ropsten testnet: [0x7Bc1bBDD6A0a722fC9bffC49c921B685ECB84b94](https://ropsten.etherscan.io/address/0x7bc1bbdd6a0a722fc9bffc49c921b685ecb84b94) 
  - Ropsten node maintained by the Komodo team: <b>http://195.201.0.6:8545</b> 

To use Komodo DEX software on another Ethereum-based network, such as the Kovan testnet or ETC, deploy the Etomic swap contract code from the repository linked below. Use of this code requires either an ETH node setup or access to a public service such as [Infura.](https://infura.io/)

[Link to repository code for Ethereum-based networks](https://github.com/artemii235/etomic-swap)

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| coin      | string | the name of the coin the user desires to enable |
| urls      | array of strings (required for ETH/ERC20) | urls of Ethereum RPC nodes to which the user desires to connect |
| swap_contract_address | string (required for ETH/ERC20) | address of etomic swap smart contract |
| mm2       | number (required if not set in the `coins` file) | this property informs the Komodo DEX software as to whether the coin is expected to function; accepted values are either `0` or `1` |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| address    | string  | the address of the user's `coin` wallet, based on the user's passphrase |
| balance   | number    | the amount of `coin` the user holds in their wallet |
| result    | string    | the result of the request; this will be either `success`, or will indicate an error or failure otherwise |

#### :pushpin: Examples:

Command (for Bitcoin-based blockchains):

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"enable\",\"coin\":\"HELLOWORLD\"}"
```

Response:

```json
{
  "coin": "HELLOWORLD",
  "address": "RQNUR7qLgPUgZxYbvU9x5Kw93f6LU898CQ",
  "balance": 10,
  "result": "success"
}
```

Command (for Ethereum and ERC20-based blockchains):

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"enable\",\"coin\":\"ETH\",\"urls\":[\"http://195.201.0.6:8545\"],\"swap_contract_address\":\"0x7Bc1bBDD6A0a722fC9bffC49c921B685ECB84b94\"}"
```

Response:

```json
{
  "coin": "ETH",
  "address": "0x3c7aad7b693e94f13b61d4be4abaeaf802b2e3b5",
  "balance": 50,
  "result": "success"
}
```

Command (With `mm2` argument):

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"enable\",\"coin\":\"HELLOWORLD\",\"mm2\":1}"
```

Response (Success):

```bash
{
  "coin": "HELLOWORLD",
  "address": "RQNUR7qLgPUgZxYbvU9x5Kw93f6LU898CQ",
  "balance": 10,
  "result": "success"
}
```

Response (Error, `mm2` is not set):

```bash
{
  "error":"lp_coins:943] lp_coins:693] mm2 param is not set neither in coins config nor enable request, assuming that coin is not supported"
}
```

## my_balance

**my_balance coin**

The `my_balance` method returns the current balance of the specified `coin`.

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| coin      | string | the name of the coin to retrieve the balance |

### Response:


| Structure | Type     | Description |
| --------- | -------- | ----------- |
| address | string | the address that holds the coins |
| balance | number | the number of coins in the address |
| coin  | string    | the name of the coin |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"my_balance\",\"coin\":\"HELLOWORLD\"}"
```

Response:

```json
{
  "address": "RQNUR7qLgPUgZxYbvU9x5Kw93f6LU898CQ",
  "balance": 10,
  "coin": "HELLOWORLD"
}
```

## orderbook

**orderbook base rel (duration=number)**

The `orderbook` method requests from the network the currently available orders for the specified trading pair.

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| base       | string | the name of the coin the user desires to receive |
| rel       | string | the name of the coin the user desires to sell |
| duration  | number | `deprecated` |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| bids | array | an array of objects containing outstanding bids (from Alice nodes) |
| numbids | number | the number of outstanding bids |
| biddepth | number | `deprecated` |
| asks | array | an array of objects containing outstanding asks (from Bob nodes) |
| coin | string | the name of the `base` coin; the user desires this |
| address | string | the address offering the trade |
| price     | number | the price in `rel` the user is willing to pay per one unit of the `base` coin |
| numutxos | number | `deprecated` the number of utxos the offer provider has in their wallet |
| avevolume | number | `deprecated` the average volume of `coin` per utxo |
| maxvolume | number | the total amount of `base` coins the offer provider has in their wallet |
| depth | number | `deprecated` |
| pubkey | string | the pubkey of the offer provider |
| age | number | the age of the offer |
| zcredits | number | the zeroconf deposit amount |
| numasks | number | the total number of asks |
| askdepth | number | the depth of the ask requests |
| base | string | the name of the coin the user desires to receive |
| rel | string | the name of the coin the user will trade |
| timestamp | number | the timestamp of the orderbook request |
| netid | number | the id of the network on which the requst is made (default is `0`) |

#### :pushpin: Examples

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"orderbook\",\"base\":\"HELLO\",\"rel\":\"WORLD\"}"
```

Response:

```json
{
  "bids": [],
  "numbids": 0,
  "biddepth": 0,
  "asks": [
    {
      "coin": "HELLO",
      "address": "RJTYiYeJ8eVvJ53n2YbrVmxWNNMVZjDGLh",
      "price": 0.89999998,
      "numutxos": 0,
      "avevolume": 0,
      "maxvolume": 10855.85028615,
      "depth": 0,
      "pubkey": "5a2f1c468b7083c4f7649bf68a50612ffe7c38b1d62e1ece3829ca88e7e7fd12",
      "age": 11,
      "zcredits": 0
    }
  ],
  "numasks": 1,
  "askdepth": 0,
  "base": "HELLO",
  "rel": "WORLD",
  "timestamp": 1549327944,
  "netid": 9999
}
```

## buy

**buy base rel price relvolume (timeout=number) (duration=number)**

The `buy` method issues a buy request and attempts to match an order from the orderbook based on the provided arguments.

MM2 will set the `timeout` value by default, but the user may override by giving it a value.

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| base       | string | the name of the coin the user desires to receive |
| rel       | string | the name of the coin the user desires to sell |
| price     | number | the price in `rel` the user is willing to pay per one unit of the `base` coin |
| relvolume | number | the amount of coins the user is willing to spend of the `rel` coin |
| timeout | number | the amount of time to wait until the request expires; MM2 handles automatically |
| duration | number | `deprecated |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| result | string | whether the request was entered successfully |
| swaps | array | an array of swap ids; indicates current ongoing swaps |
| netamounts | array | `deprecated, will be removed` |
| pending |  object | an object containing the swap information |
| pending.uuid | string | the pending swap uuid -- same as request uuid |
| pending.expiration | number | indicates the time at which the swap expires |
| pending.timeleft | number | indicates the amount of time remaining before the swap times out |
| pending.tradeid | number | the unique id of this trade on this network |
| pending.requestid | number | the unique id of this trade request |
| pending.quoteid | number | `deprecated, will be removed` |
| pending.bob | string | `deprecated, will be removed`; the name of the coin bob is trading, same as `base` |
| pending.base | string | the name of the `base` coin the user desires |
| pending.basevalue | number | the value of `base` coin to be exchanged | 
| pending.alice | string | `deprecated, will be removed`; the name of the coin alice is trading, same as `rel` |
| pending.rel | string | the name of the `rel` coin the user is trading |
| pending.relvalue | number | the value of `rel` coin to be exchanged |
| pending.desthash | string | `deprecated, will be renamed`; taker (alice) curve25519 pubkey |
| pending.aliceid | number | `deprecated, will be removed or renamed`; alice's unique id on this network |
| uuid | string | the request uuid |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"buy\",\"base\":\"HELLO\",\"rel\":\"WORLD\",\"relvolume\":1,\"price\":0.95}"
```

Response (success):

```json
{
  "result": "success",
  "swaps": [
    [
      2840245791,
      3687103952
    ],
    [
      925874441,
      2994130620
    ],
    [
      2153536788,
      640664548
    ]
  ],
  "netamounts": [],
  "pending": {
    "uuid": "611b85f8721d37c71e77e8d116fb60b5ebe51d949aa8d2ff15c5b34da26bfdf3",
    "expiration": 1549329023,
    "timeleft": 29,
    "tradeid": 329880305,
    "requestid": 0,
    "quoteid": 0,
    "bob": "HELLO",
    "base": "HELLO",
    "basevalue": 1.0530423,
    "alice": "WORLD",
    "rel": "WORLD",
    "relvalue": 1.0002,
    "desthash": "edb2a3d86a7c1b3665a9bd269974ca154e005c0afa3e95e0e7da6e9bd231ae11",
    "aliceid": 502776683
  },
  "uuid": "611b85f8721d37c71e77e8d116fb60b5ebe51d949aa8d2ff15c5b34da26bfdf3"
}
```

Response (error):

```json
{"error":"rpc:278] utxo:884] REL balance 12.88892991 is too low, required 21.15"}
```

## sell

**sell base rel price basevolume (timeout=number) (duration=number)**

The `sell` method issues a sell request and attempts to match an order from the orderbook based on the provided arguments.

Komodo software will set the `timeout` value by default, but the user may override by giving a value.

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| base       | string | the name of the coin the user desires to receive |
| rel       | string | the name of the coin the user desires to sell |
| price     | number | the price in `base` the user is willing to receive per one unit of the `rel` coin |
| basevolume | number | the amount of coins the user is willing to spend of the `base` coin |
| timeout | number | the amount of time to wait until the request expires |
| duration | number | `deprecated` |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| result | string | whether the request was entered successfully |
| swaps | array | an array of swap ids; indicates current ongoing swaps |
| netamounts | array | `deprecated, will be removed` |
| pending |  object | an object containing the swap information |
| pending.uuid | string | pending swap uuid, same as request uuid |
| pending.expiration | number | indicates the time at which the swap expires |
| pending.timeleft | number | indicates the amount of time remaining before the swap times out |
| pending.tradeid | number | the unique id of this trade on this network |
| pending.requestid | number | the unique id of this trade request |
| pending.quoteid | number | `deprecated, will be removed` |
| pending.bob | string | `deprecated, will be removed`, the name of the coin bob is trading, same as `base` |
| pending.base | string | the name of the `base` coin the user desires |
| pending.basevalue | number | the value of `base` coin to be exchanged | 
| pending.alice | string | `deprecated, will be removed`, the name of the coin alice is trading, same as `rel` |
| pending.rel | string | the name of the `rel` coin the user is trading |
| pending.relvalue | number | the value of `rel` coin to be exchanged |
| pending.desthash | string | `deprecated, will be renamed` the taker's (alice) curve25519 pubkey |
| pending.aliceid | number | `deprecated, will be removed or renamed` alice's unique id on this network |
| uuid | string | the request uuid |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"sell\",\"base\":\"BASE\",\"rel\":\"REL\",\"basevolume\":0.1,\"price\":2}"
```

Response (success):

```json
{
"result":"success",
"swaps":[[185307610, 3224582451], [1966701661, 660662362], [1689278922, 1884083697]],
"netamounts":[],
"pending":{
    "uuid":"858b786db415182d8ff60e7a928b3350e16e632ceb95e3a0296ef78c1d28caac",
    "expiration":1549376070,
    "timeleft":9,
    "tradeid":1486969254,
    "requestid":0,
    "quoteid":0,
    "bob":"BASE",
    "base":"BASE",
    "basevalue":0.20060019,
    "alice":"REL",
    "rel":"REL",
    "relvalue":0.10020000,
    "desthash":"c213230771ebff769c58ade63e8debac1b75062ead66796c8d793594005f3920",
    "aliceid":2946902639
    },
"uuid":"858b786db415182d8ff60e7a928b3350e16e632ceb95e3a0296ef78c1d28caac"}
```

Response (error):

```json
{"error":"rpc:278] utxo:884] REL balance 12.88892991 is too low, required 21.15"}
```

## setprice

**setprice base rel price broadcast=number**

::: warning Note
This API method's documentation is currently limited, as we are still testing.
:::

The `setprice` method places an order on the orderbook, and it relies on this node acting as a `maker` -- also called a `Bob` node.

::: warning Note
`setprice` currently requires that the node can bind ports on a public IP to accept direct TCP connections from other nodes for ordermatching. This requirement will be removed soon.
:::

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| base       | string | the name of the coin the user desires to receive |
| rel       | string | the name of the coin the user desires to sell |
| price     | number | the price in `rel` the user is willing to pay per one unit of the `base` coin |
| broadcast | number | defines whether the price should be broadcast to p2p network as an order; the default value is `1` |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| result | string | whether the request succeeded | 

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"setprice\",\"base\":\"BASE\",\"rel\":\"REL\",\"price\":0.9}
```

Response (success):

```json
{"result":"success"}
```

Response (error):

```json
{"error":"Rel coin REL is not found"}
```

## stop

**stop()**

The `stop` method stops the MM2 software if there are no swaps in process. 

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| (none)    |   | |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| (none)    |   | |

## help

**help()**

The `help` method returns the full API documentation in the terminal. 

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| (none)    |   | |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| (returns the full docs in terminal)    |   | |

## withdraw

**withdraw coin to amount**

The `withdraw` method generates, signs, and returns a transaction that transfers the `amount` of `coin` to the address indicated in the `to` argument.  

This method generates a raw transaction which should then be broadcast using [send_raw_transaction](../atomic-swap-dex/dex-api.html#send-raw-transaction).

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| coin      | string | the name of the coin the user desires to withdraw |
| to        | string | coins will be withdrawn to this address |
| amount    | number | the amount the user desires to withdraw |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| tx_hex    | string    | transaction bytes in hexadecimal format; use this value as input for the `send_raw_transaction` method |
| from      | string    | coins will be withdrawn from this address |
| to        | string    | coins with be withdrawn to this address |
| amount    | number    | the amount of coins to be withdrawn |
| fee_details | object    | the fee details of the generated transaction; this value differs for utxo and ETH/ERC20 coins, check the examples for more details |


#### :pushpin: Examples:

Command (BTC, KMD, and other BTC-based forks):

```bash
curl --url "http://127.0.0.1:7783" --data "{\"method\":\"withdraw\",\"coin\":\"KMD\",\"to\":\"R9o9xTocqr6CeEDGDH6mEYpwLoMz6jNjMW\",\"amount\":10,\"userpass\":\"$userpass\"}"
```

Response (success):

```json
{
    "tx_hex":"0400008085202f8903d6a5b976db5e5c9e8f9ead50713b25f22cd061edc8ff0ff1049fd2cd775ba087000000006a473044022023b228a198d0845320b91471152727aa192831e37e1e909777660ea81d2cec930220634992c2a37e4439b92cf5b866bccec0f0e343fa2601cc441535faa2cebc2b11012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffffd04d4e07ac5dacd08fb76e08d2a435fc4fe2b16eb0158695c820b44f42f044cb010000006b483045022100c4b0bab86626124cb2eba8b0ed76870a75564dba0d4efc347799e5bbf162d48702206b673f63d9505d6d06e9c8e3f52f683a04f1323b5cd527d589ced18697cac83d012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff230946ea9795558bcdecda5e56b3ff823664e2f4627faedb0e6edf2961a1079c010000006a47304402201e8afe0429897cbf2fb45261985d75489cfce41d21034da8eb7962e1d7b8aa8102200273c6d337de43af8b188da303ff622c645b4c2149e62888af2202d1ed362a2f012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff0200ca9a3b000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac1f9abe2d000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac00000000000000000000000000000000000000",
    "from":"R9o9xTocqr6CeEDGDH6mEYpwLoMz6jNjMW",
    "to":"R9o9xTocqr6CeEDGDH6mEYpwLoMz6jNjMW",
    "amount":10.0,
    "fee_details":{
        "amount":0.00001
    }
}
```

Command (ETH, ERC20, and other ETH-based forks):

```bash
curl --url "http://127.0.0.1:7783" --data "{\"method\":\"withdraw\",\"coin\":\"ETH\",\"to\":\"0xbAB36286672fbdc7B250804bf6D14Be0dF69fa29\",\"amount\":10,\"userpass\":\"$userpass\"}"
```

Response (success):

```json
{
    "tx_hex":"f86d820a4c843b9aca0082520894bab36286672fbdc7b250804bf6d14be0df69fa29888ac7230489e80000801ca00813afcd3661b62879aa01e1b90f3cbb8c355a318aa3a020c1da21d6b19ea1d6a01492bf4698105f5d81c4ebcce4913cb026a323b9b34b5896a562ea19524728c8",
    "from":"0xbab36286672fbdc7b250804bf6d14be0df69fa29",
    "to":"0xbab36286672fbdc7b250804bf6d14be0df69fa29",
    "amount":10.0,
    "fee_details":{
        "coin":"ETH",
        "gas":21000,
        "gas_price":1e-9,
        "total_fee":0.000021
    }
}
```

## send_raw_transaction

**send_raw_transaction coin tx_hex**

The `send_raw_transaction` method broadcasts the transaction to the network of selected coin.  

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| coin      | string | the name of the coin network on which to broadcast the transaction |
| tx_hex    | string | the transaction bytes in hexadecimal format; this is typically generated by the `withdraw` method |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| tx_hash   | string   | the hash of the broadcasted transaction |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"method\":\"send_raw_transaction\",\"coin\":\"KMD\",\"tx_hex\":\"0400008085202f8902d6a5b976db5e5c9e8f9ead50713b25f22cd061edc8ff0ff1049fd2cd775ba087000000006b483045022100bf2073c1ecfef3fc78f272045f46a722591401f61c2d2fac87fc474a17df7c3102200ca1bd0664ba75f3383e5cbbe96127ad534a86238dbea256e000b0fe2067ab8c012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffffd04d4e07ac5dacd08fb76e08d2a435fc4fe2b16eb0158695c820b44f42f044cb010000006a47304402200a0c21e8c0ae4a740f3663fe08aeff02cea6495157d531045b58d2dd79fb802702202f80dddd264db33f55e49799363997a175d39a91242a95f268c40f7ced97030b012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff0200e1f505000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788acc3b3ca27000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac00000000000000000000000000000000000000\",\"userpass\":\"$userpass\"}"
```

Response (success):

```json
{
    "tx_hash":"0b024ea6997e16387c0931de9f203d534c6b2b8500e4bda2df51a36b52a3ef33",
}
```

## my_swap_status

**uuid**

The `my_swap_status` method returns the data of atomic swap that was done by MM2 node.  

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| params uuid | string | the uuid of swap, typically received from buy/sell call |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| events         | array of objects | events happened during the swap |
| success_events | array of strings | list of events that considered as `success` swap state, they are also listed in order which they should occur in `events` array |
| error_events   | array of strings | list of events that considered as `error` swap state, if at least 1 of the event happens swap is considered as failed  |
| type           | string           | whether the node acted as market `Maker` or `Taker` |
| uuid           | string           | swap uuid |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"method\":\"my_swap_status\",\"params\":{\"uuid\":\"fb5b23301f71a2d7262534e125915fc0dd088fc7d7919cb459aebee759db593d\"},\"userpass\":\"$userpass\"}"
```

Response (success):

```json
{
    "result": {
        "error_events": [
            "StartFailed",
            "NegotiateFailed",
            "TakerFeeSendFailed",
            "MakerPaymentValidateFailed",
            "TakerPaymentTransactionFailed",
            "TakerPaymentDataSendFailed",
            "TakerPaymentWaitForSpendFailed",
            "MakerPaymentSpendFailed",
            "TakerPaymentRefunded",
            "TakerPaymentRefundFailed"
        ],
        "events": [
            {
                "event": {
                    "data": {
                        "lock_duration": 7800,
                        "maker": "5a2f1c468b7083c4f7649bf68a50612ffe7c38b1d62e1ece3829ca88e7e7fd12",
                        "maker_amount": 10000000,
                        "maker_coin": "BEER",
                        "maker_payment_confirmations": 1,
                        "maker_payment_wait": 1555666193,
                        "my_persistent_pub": "02031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3",
                        "started_at": 1555663593,
                        "taker_amount": 10000000,
                        "taker_coin": "ETOMIC",
                        "taker_payment_confirmations": 1,
                        "taker_payment_lock": 1555671393,
                        "uuid": "fb5b23301f71a2d7262534e125915fc0dd088fc7d7919cb459aebee759db593d"
                    },
                    "type": "Started"
                },
                "timestamp": 1555663593989
            },
            {
                "event": {
                    "data": [
                        1555679156,
                        "02631dcf1d4b1b693aa8c2751afc68e4794b1e5996566cfc701a663f8b7bbbe640",
                        "69dc854ff3466bb30aa1452306470e3f73f51a91"
                    ],
                    "type": "Negotiated"
                },
                "timestamp": 1555663654754
            },
            {
                "event": {
                    "data": {
                        "block_height": 0,
                        "fee_details": null,
                        "from": [
                            ""
                        ],
                        "received_by_me": 0.0,
                        "spent_by_me": 0.0,
                        "to": [
                            ""
                        ],
                        "total_amount": 0.0,
                        "tx_hash": "ee2b1ac914b41b5afed119ba4c420d8cc451bf9cdb6a46cb5c93d4b2c597fd81",
                        "tx_hex": "0400008085202f8901e2a7ee8d70b196e014de63935a3db3caf8a987b7c1f8ddc24e9dc3d5f06e3449010000006a4730440220477370199bb385912a88b7b1ad62c9e730414095876eaf60782d7df8c4259c9e022033c3921830ad6cc37ced1f63bd8de57f768477514b9556a8166cd2919f7e9c99012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff0246320000000000001976a914ca1e04745e8ca0c60d8c5881531d51bec470743f88acad4d6c07000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac00000000000000000000000000000000000000"
                    },
                    "type": "TakerFeeSent"
                },
                "timestamp": 1555663656254
            },
            {
                "event": {
                    "data": {
                        "block_height": 0,
                        "fee_details": null,
                        "from": [
                            ""
                        ],
                        "received_by_me": 0.0,
                        "spent_by_me": 0.0,
                        "to": [
                            ""
                        ],
                        "total_amount": 0.0,
                        "tx_hash": "ea1ebb48d8d936f17afe6c6fa7ec1b16675d6090fac5a2657bb3f3d6d0422999",
                        "tx_hex": "0400008085202f8901f72b8402a151b4e6956eb9630e93c7418d0cedbfa45faa57f02568bdcebdfadd010000006a4730440220595d1d95269499859b473fdc051a718bae9161039e4f83832c53701076f4e28702205b3435b347f1c72e04875ad5b2a7ab8185c93c1ecb1fa26e3201c13129fa6403012102631dcf1d4b1b693aa8c2751afc68e4794b1e5996566cfc701a663f8b7bbbe640ffffffff02809698000000000017a91487b5808c912149a8765602f8e82037158f0cfeb28705772d79e50000001976a91464ae8510aac9546d5e7704e31ce177451386455588ac00000000000000000000000000000000000000"
                    },
                    "type": "MakerPaymentReceived"
                },
                "timestamp": 1555663696666
            },
            {
                "event": {
                    "type": "MakerPaymentWaitConfirmStarted"
                },
                "timestamp": 1555663696667
            },
            {
                "event": {
                    "type": "MakerPaymentValidatedAndConfirmed"
                },
                "timestamp": 1555663697005
            },
            {
                "event": {
                    "data": {
                        "block_height": 0,
                        "fee_details": null,
                        "from": [
                            ""
                        ],
                        "received_by_me": 0.0,
                        "spent_by_me": 0.0,
                        "to": [
                            ""
                        ],
                        "total_amount": 0.0,
                        "tx_hash": "1fc1927e953ff466b484d402671df65fee9e3b721b926dfb81a13bb72ce92a04",
                        "tx_hex": "0400008085202f890181fd97c5b2d4935ccb466adb9cbf51c48c0d424cba19d1fe5a1bb414c91a2bee010000006b483045022100add34ed2cebcdd60b253a55e6329ae1dea1e22cd50504edd6c07e375da20b9a702205ae3952c6323766cf541657966cba05734c3cc63257426c3a7205e80d56bfd33012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff02809698000000000017a9149d873af7a8335242420ac8994270dca8b1e56db98745b3d306000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac00000000000000000000000000000000000000"
                    },
                    "type": "TakerPaymentSent"
                },
                "timestamp": 1555663701006
            },
            {
                "event": {
                    "data": [
                        {
                            "block_height": 0,
                            "fee_details": null,
                            "from": [
                                ""
                            ],
                            "received_by_me": 0.0,
                            "spent_by_me": 0.0,
                            "to": [
                                ""
                            ],
                            "total_amount": 0.0,
                            "tx_hash": "c6dd004559e97453d70dc3df06347d3a73bd8824457d705e97a0b420d11cf039",
                            "tx_hex": "0400008085202f8901042ae92cb73ba181fb6d921b723b9eee5ff61d6702d484b466f43f957e92c11f00000000d8483045022100d3261227b2625a05c6f03930c33b33642a625c60305d279d761257f30a59a2cb0220163f02abfac84531c7ca057b2f2f3cce7299c6956d3a91fb07424876a952eede0120f2250f034ad417d241ebae6f9c70afa929cdf57051279828cf9aed74a29a1cd9004c6b630461a9b95cb1752102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ac6782012088a91469dc854ff3466bb30aa1452306470e3f73f51a91882102631dcf1d4b1b693aa8c2751afc68e4794b1e5996566cfc701a663f8b7bbbe640ac68ffffffff0198929800000000001976a91464ae8510aac9546d5e7704e31ce177451386455588ac438bb95c000000000000000000000000000000"
                        },
                        "f2250f034ad417d241ebae6f9c70afa929cdf57051279828cf9aed74a29a1cd9"
                    ],
                    "type": "TakerPaymentSpent"
                },
                "timestamp": 1555663722211
            },
            {
                "event": {
                    "data": {
                        "block_height": 0,
                        "fee_details": null,
                        "from": [
                            ""
                        ],
                        "received_by_me": 0.0,
                        "spent_by_me": 0.0,
                        "to": [
                            ""
                        ],
                        "total_amount": 0.0,
                        "tx_hash": "b69c3fe0a414125cfe10776a38105a45477ade1128922b60ffb33fbb82e45a1f",
                        "tx_hex": "0400008085202f8901992942d0d6f3b37b65a2c5fa90605d67161beca76f6cfe7af136d9d848bb1eea00000000d8483045022100c0980b802969f90ffa1fbf2e43df4597255cfbf19baf7bf7e3aafc4392bab533022016c75fccd2920ebdcc48b6b06bc7fe2b4dc931113e1c1118afd3341e003767410120f2250f034ad417d241ebae6f9c70afa929cdf57051279828cf9aed74a29a1cd9004c6b6304b4c7b95cb1752102631dcf1d4b1b693aa8c2751afc68e4794b1e5996566cfc701a663f8b7bbbe640ac6782012088a91469dc854ff3466bb30aa1452306470e3f73f51a91882102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ac68ffffffff0198929800000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac6a8bb95c000000000000000000000000000000"
                    },
                    "type": "MakerPaymentSpent"
                },
                "timestamp": 1555663723629
            },
            {
                "event": {
                    "type": "Finished"
                },
                "timestamp": 1555663723631
            }
        ],
        "success_events": [
            "Started",
            "Negotiated",
            "TakerFeeSent",
            "MakerPaymentReceived",
            "MakerPaymentWaitConfirmStarted",
            "MakerPaymentValidatedAndConfirmed",
            "TakerPaymentSent",
            "TakerPaymentSpent",
            "MakerPaymentSpent",
            "Finished"
        ],
        "type": "Taker",
        "uuid": "fb5b23301f71a2d7262534e125915fc0dd088fc7d7919cb459aebee759db593d"
    }
}
```

Response (error)

```json
{
    "error": "swap data is not found"
}
```

## my_recent_swaps

**(from_uuid limit=10)**

The `my_recent_swaps` method returns the data of the most recent atomic swaps that was done by MM2 node.  

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| limit     | number   | limits the number of returned swaps |
| from_uuid | string   | MM2 will skip records until this uuid (skipping the `from_uuid` too) |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| swaps     | array of objects | swaps data, each record has format of `my_swap_status` response |
| from_uuid | string           | from_uuid that was set in request (null if it was not set) |
| skipped   | number           | the number of skipped records (the position of `from_uuid` in list + 1, 0 if `from_uuid` was not set) | 
| limit     | number           | the limit that was set in request, note that actual number of swaps can differ from specified limit (e.g. on last page) |
| total     | number           | total number of swaps available |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"my_recent_swaps\",\"from_uuid\":\"e299c6ece7a7ddc42444eda64d46b163eaa992da65ce6de24eb812d715184e4c\",\"limit\":1}"
```

Response (success):

```json
{
    "result": {
        "from_uuid": "e299c6ece7a7ddc42444eda64d46b163eaa992da65ce6de24eb812d715184e4c",
        "limit": 1,
        "skipped": 1,
        "swaps": [
            {
                "error_events": [
                    "StartFailed",
                    "NegotiateFailed",
                    "TakerFeeSendFailed",
                    "MakerPaymentValidateFailed",
                    "TakerPaymentTransactionFailed",
                    "TakerPaymentDataSendFailed",
                    "TakerPaymentWaitForSpendFailed",
                    "MakerPaymentSpendFailed",
                    "TakerPaymentRefunded",
                    "TakerPaymentRefundFailed"
                ],
                "events": [
                    {
                        "event": {
                            "data": {
                                "lock_duration": 7800,
                                "maker": "2de6021ebcc1c8e4df14213514c16864ae78f2fa2d8322e7187320132d86f25d",
                                "maker_amount": 20000000,
                                "maker_coin": "RICK",
                                "maker_payment_confirmations": 1,
                                "maker_payment_wait": 1554982829,
                                "my_persistent_pub": "02031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3",
                                "started_at": 1554980229,
                                "taker_amount": 10000000,
                                "taker_coin": "MORTY",
                                "taker_payment_confirmations": 1,
                                "taker_payment_lock": 1554988029,
                                "uuid": "f413fbcc111974abbbb8f0340023c7ce85d408d6a642ba3752da34e06ebf000a"
                            },
                            "type": "Started"
                        },
                        "timestamp": 1554980229973
                    },
                    {
                        "event": {
                            "data": [
                                1554995829,
                                "039727ffa665389a4fed0a2b75687d1a7ad23a430f0aa06dfbf9edb9b972da7808",
                                "736819faee9d04ea3da5eebb88f474c8d354e9e7"
                            ],
                            "type": "Negotiated"
                        },
                        "timestamp": 1554980290452
                    },
                    {
                        "event": {
                            "data": "lp_swap:1153] utxo:407] jsonrpc_client:66] Rpc request JsonRpcRequest { jsonrpc: \"2.0\", id: \"8\", method: \"blockchain.transaction.broadcast\", params: [String(\"01000000012828a368f6ff9fe8b764602a2b60302ef5e766b4375a5ab517acd8bfdda81388000000006a4730440220641ccdd842691ecb23fbc442a65332c6a5d0d443b25ea3dae958a915891d7f3102203db40e562cd4fd0a917b59429c8ee11a704fcfc934792cfa8ab3acc89eec1a7e012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff0246320000000000001976a914ca1e04745e8ca0c60d8c5881531d51bec470743f88acd2939a3b000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac00000000\")] } failed with error, response: JsonRpcResponse { jsonrpc: \"2.0\", id: \"8\", result: Null, error: Object({\"code\": Number(1), \"message\": String(\"the transaction was rejected by network rules.\\n\\n16: tx-overwinter-active\\n[01000000012828a368f6ff9fe8b764602a2b60302ef5e766b4375a5ab517acd8bfdda81388000000006a4730440220641ccdd842691ecb23fbc442a65332c6a5d0d443b25ea3dae958a915891d7f3102203db40e562cd4fd0a917b59429c8ee11a704fcfc934792cfa8ab3acc89eec1a7e012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff0246320000000000001976a914ca1e04745e8ca0c60d8c5881531d51bec470743f88acd2939a3b000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac00000000]\")}) }",
                            "type": "TakerFeeSendFailed"
                        },
                        "timestamp": 1554980290854
                    },
                    {
                        "event": {
                            "type": "Finished"
                        },
                        "timestamp": 1554980290854
                    }
                ],
                "success_events": [
                    "Started",
                    "Negotiated",
                    "TakerFeeSent",
                    "MakerPaymentReceived",
                    "MakerPaymentWaitConfirmStarted",
                    "MakerPaymentValidatedAndConfirmed",
                    "TakerPaymentSent",
                    "TakerPaymentSpent",
                    "MakerPaymentSpent",
                    "Finished"
                ],
                "type": "Taker",
                "uuid": "f413fbcc111974abbbb8f0340023c7ce85d408d6a642ba3752da34e06ebf000a"
            }
        ],
        "total": 97
    }
}
```

Response (error)

```json
{
    "error": "lp_swap:1454] from_uuid e299c6ece7a7ddc42444eda64d46b163eaa992da65ce6de24eb812d715184e41 swap is not found"
}
```

## my_tx_history

**(from_tx_hash limit=10)**

The `my_tx_history` method returns the blockchain transactions involving MM2 coin address.  

### Arguments:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| coin      | string   | the name of the coin to get the history |
| limit     | number   | limits the number of returned transactions |
| from_tx_hash | string   | MM2 will skip records until this hash (skipping the `from_tx_hash` too) |

### Response:

| Structure | Type     | Description |
| --------- | -------- | ----------- |
| transactions | array of objects | transactions data |
| from_tx_hash | string           | from_tx_hash that was set in request (null if it was not set) |
| skipped   | number           | the number of skipped records (the position of `from_tx_hash` in list + 1, 0 if `from_tx_hash` was not set) | 
| limit     | number           | the limit that was set in request, note that actual number of transactions can differ from specified limit (e.g. on last page) |
| total     | number           | total number of transactions available |

#### :pushpin: Examples:

Command:

```bash
curl --url "http://127.0.0.1:7783" --data "{\"userpass\":\"$userpass\",\"method\":\"my_tx_history\",\"coin\":\"RICK\",\"limit\":1,\"from_tx_hash\":\"1d5c1b67f8ebd3fc480e25a1d60791bece278f5d1245c5f9474c91a142fee8e1\"}"
```

Response (success):

```json
{
    "result": {
        "from_tx_hash": "1d5c1b67f8ebd3fc480e25a1d60791bece278f5d1245c5f9474c91a142fee8e1",
        "limit": 1,
        "skipped": 1,
        "total": 13,
        "transactions": [
            {
                "block_height": 41459,
                "coin": "RICK",
                "confirmations": 10055,
                "fee_details": {
                    "amount": 1e-05
                },
                "from": [
                    "R9o9xTocqr6CeEDGDH6mEYpwLoMz6jNjMW"
                ],
                "received_by_me": 0.998363,
                "spent_by_me": 0.998373,
                "to": [
                    "R9o9xTocqr6CeEDGDH6mEYpwLoMz6jNjMW"
                ],
                "total_amount": 0.998373,
                "tx_hash": "7a9b407125ac245336dfed04084c5624dbc1c8851108364d5c6a5fae7fcf930f",
                "tx_hex": "0400008085202f8902fd429d8dd29167c2f0e27760c0947a99be008c657d86836e1bb12f66918ef184000000006b483045022100ffc926e5ccd495dbde6b4882acc4b15ccb55f945401f2705ad735d4f9025938902201c399c1ad7fa21db2dbefe6d271f611337df0df3fe046fb8b49c64a25b08f171012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3fffffffffd429d8dd29167c2f0e27760c0947a99be008c657d86836e1bb12f66918ef184010000006a473044022079cb728081017df7a501635968fcd145bbe23d7039f20578245c38b0bb11674b022042e295a56a88535fae2eedc2fdfa1a5a80ea60023e3c7a6bbe39563f360c3d34012102031d4256c4bc9f99ac88bf3dba21773132281f65f9bf23a59928bce08961e2f3ffffffff0280969800000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac0ccb5a05000000001976a91405aab5342166f8594baf17a7d9bef5d56744332788ac00000000000000000000000000000000000000"
            }
        ]
    }
}
```

Response (error)

```json
{
    "error": "lp_coins:1011] from_tx_hash 1d5c1b67f8ebd3fc480e25a1d60791bece278f5d1245c5f9474c91a142fee8e2 is not found"
}
```