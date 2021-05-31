(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{605:function(t,e,a){"use strict";a.r(e);var s=a(50),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-submit-a-pull-request-to-add-a-coin-to-mmv1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-submit-a-pull-request-to-add-a-coin-to-mmv1"}},[t._v("#")]),t._v(" How to submit a Pull Request to add a coin to mmV1")]),t._v(" "),a("h2",{attrs:{id:"barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[t._v("#")]),t._v(" BarterDEX is officially deprecated as of this writing and mm2 is under testing before public release.")]),t._v(" "),a("ul",[a("li",[t._v("First go through "),a("RouterLink",{attrs:{to:"/mmV1/coin-integration/coin-integration.html"}},[t._v("this document")]),t._v(" to make sure that all the requirements are satisfied by the coin.")],1),t._v(" "),a("li",[t._v("The relevant repository is "),a("a",{attrs:{href:"https://github.com/jl777/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/jl777/coins"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("This repository is the coins database which is accessed by the graphical applications like the "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX",target:"_blank",rel:"noopener noreferrer"}},[t._v("BarterDEX GUI"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/atomiclabs/hyperdex",target:"_blank",rel:"noopener noreferrer"}},[t._v("HyperDEX"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("When submitting a pull request to add a coin to BarterDEX, make sure you have completed this checklist:")]),t._v(" "),a("h2",{attrs:{id:"_0-the-coin-must-be-tested-with-mmv1-atomic-swaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-the-coin-must-be-tested-with-mmv1-atomic-swaps"}},[t._v("#")]),t._v(" 0. The coin must be tested with mmV1 atomic swaps")]),t._v(" "),a("ul",[a("li",[t._v("When submitting your coin addition request, please submit the URLs of the three transctions ("),a("code",[t._v("bobdeposit")]),t._v(", "),a("code",[t._v("alicepayment")]),t._v(" and "),a("code",[t._v("bobpayment")]),t._v(") which are produced by the "),a("RouterLink",{attrs:{to:"/mmV1/usage/trade.html"}},[t._v("atomic swap")]),t._v(" performed through the marketmaker API. This means that before going through the further steps in this doc and submit the data to this coins database "),a("a",{attrs:{href:"https://github.com/jl777/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("repo"),a("OutboundLink")],1),t._v(" , you would have performed an atomic swap. The further steps explain the expected files/values to be submitted.")],1),t._v(" "),a("li",[t._v("You can learn about performing an atomic swap "),a("RouterLink",{attrs:{to:"/mmV1/installation/install-marketmakerV1.html"}},[t._v("here (Installing)")]),t._v(" and "),a("RouterLink",{attrs:{to:"/mmV1/usage/trade.html"}},[t._v("here (trading)")])],1),t._v(" "),a("li",[t._v("Or you can contact the team at "),a("a",{attrs:{href:"mailto:coinintegration@komodoplatform.com"}},[t._v("coinintegration@komodoplatform.com")]),t._v(" or in the "),a("code",[t._v("#dev-tradebots")]),t._v(" channel in our "),a("a",{attrs:{href:"https://komodoplatform.com/discord",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),a("OutboundLink")],1),t._v(" to get help if required.")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("bobdeposit: "),a("a",{attrs:{href:"https://btc.example.org/tx/746179890c7cb6b10fe4fef1c835c51a648bba087d52903d9d889d84779b1b9b",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://btc.example.org/tx/746179890c7cb6b10fe4fef1c835c51a648bba087d52903d9d889d84779b1b9b"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("alicepayment: "),a("a",{attrs:{href:"https://kmd.example.net/tx/2aa3cdc0000936f8fb2a5285e852a57f128913edea4d562433975fe84f6e6a8c",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://kmd.example.net/tx/2aa3cdc0000936f8fb2a5285e852a57f128913edea4d562433975fe84f6e6a8c"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("bobpayment: "),a("a",{attrs:{href:"https://btc.example.org/tx/f64ae4b56b43ab9017ccc767c16b9d9cdf438ed83de94ba0629f1213b5ecba72",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://btc.example.org/tx/f64ae4b56b43ab9017ccc767c16b9d9cdf438ed83de94ba0629f1213b5ecba72"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"_1-coin-info-added-to-coins-file-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-coin-info-added-to-coins-file-required"}},[t._v("#")]),t._v(" 1. Coin info added to "),a("code",[t._v("coins")]),t._v(" file (Required)")]),t._v(" "),a("p",[t._v("You need to add the following info in JSON format to "),a("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("coins"),a("OutboundLink")],1),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("# Example "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LTC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"litecoin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Litecoin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9332")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p2shtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wiftype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("176")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"txfee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# Example "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PEW"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"brofist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Brofist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confpath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USERHOME/.brofistcore/brofist.conf"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12454")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"p2shtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wiftype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("198")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"txfee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# Example "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"augur"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Augur"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"etomic"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xE94327D07Fc17907b4DB788E5aDf2ed424adDff6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rpcport"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"bitcoin-protocol-specific-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-protocol-specific-json"}},[t._v("#")]),t._v(" Bitcoin Protocol specific JSON")]),t._v(" "),a("ul",[a("li",[t._v("The value of the key "),a("code",[t._v('"coin"')]),t._v(" must be the coin ticker.")]),t._v(" "),a("li",[t._v("The value of the key "),a("code",[t._v('"name"')]),t._v(" must be coin's name, in all small letters. This is the value which is expected to be the default data directory name for that coin in Linux. For example if the coin's name is Litecoin then it's expected data directory on Linux is "),a("code",[t._v("~/.litecoin/")]),t._v(", on Mac - "),a("code",[t._v("~/Library/Applications Support/Litecoin/")]),t._v(", on Windows - "),a("code",[t._v("%AppData%\\\\Litecoin")]),t._v(". Please keep this key's value in small letters only.")]),t._v(" "),a("li",[a("code",[t._v('"confpath"')]),t._v(" must be used "),a("strong",[t._v("ONLY")]),t._v(" in case the expected data directory name of the coin/project is different to the key - "),a("code",[t._v('"name"')]),t._v("'s value, as explained in last point. Please refer to Example 2 above for better understanding. Make sure to use the exact format for "),a("code",[t._v("confpath")]),t._v(". You don't need to change the word "),a("code",[t._v("USERHOME")]),t._v(", it remains as is. Make sure you have a "),a("code",[t._v("/")]),t._v(". after "),a("code",[t._v("USERHOME")]),t._v(". And then the expected coin/project's data directory path and its expected "),a("code",[t._v(".conf")]),t._v(" file name.")]),t._v(" "),a("li",[a("code",[t._v('"fname"')]),t._v(" must be the coin's full name.")]),t._v(" "),a("li",[a("code",[t._v('"rpcport"')]),t._v(" must be coin's default RPC port. It is expected that it doesn't conflict with any other existing coin in the coins db.")]),t._v(" "),a("li",[a("code",[t._v('"pubtype"')]),t._v(", "),a("code",[t._v('"p2shtype"')]),t._v(", and "),a("code",[t._v('"wiftype"')]),t._v(" is also the very specific information about the coin's parameters. This is specific to Bitcoin Protocol compatible coins only, and such information can be found in the source code of the project. These parameters' information can be expected in files like "),a("code",[t._v("src/init.cpp")]),t._v(", "),a("code",[t._v("src/base58.h")]),t._v(", and "),a("code",[t._v("src/chainparamsbase.h")]),t._v(" if the project is following the "),a("strong",[t._v("bitcoin")]),t._v(" source code directory/files structure. If the parameters info is unclear then please have these confirmed by that coin/project's developers and make sure it's correct.")]),t._v(" "),a("li",[a("code",[t._v('"txfee"')]),t._v(" is a value of default transactions fee, which must be specified in satoshis. BarterDEX uses this as the default transaction fee value for the coin, when making the atomic swap transactions.")])]),t._v(" "),a("h3",{attrs:{id:"ethereum-protocol-specific-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-protocol-specific-json"}},[t._v("#")]),t._v(" Ethereum Protocol specific JSON")]),t._v(" "),a("ul",[a("li",[t._v("Ethereum protocol specific coin/project addition requests are very simple. "),a("code",[t._v('"coin"')]),t._v(", "),a("code",[t._v('"name"')]),t._v(", and "),a("code",[t._v('"fname"')]),t._v(" information is same as explained in the above bitcoin protocol specific json section.")]),t._v(" "),a("li",[a("code",[t._v('"rpcport"')]),t._v(" must remain default for all ERC20 token/coins. Make sure its only specified as "),a("code",[t._v("80")]),t._v(".")]),t._v(" "),a("li",[a("code",[t._v('"etomic"')]),t._v(" must be the ERC20 token/coin's smart contract address.")])]),t._v(" "),a("h2",{attrs:{id:"_2-icon-file-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-icon-file-required"}},[t._v("#")]),t._v(" 2. Icon file (Required)")]),t._v(" "),a("ul",[a("li",[t._v("An icon that represents the coin is required.")]),t._v(" "),a("li",[t._v("The icon file must be in the "),a("strong",[t._v(".png")]),t._v(" format.")]),t._v(" "),a("li",[t._v("Dimentions of icon file: "),a("code",[t._v("82x82")]),t._v(" pixels.")]),t._v(" "),a("li",[t._v("The icon file's name "),a("strong",[t._v("MUST")]),t._v(" be in "),a("strong",[t._v("small letters")]),t._v(".")]),t._v(" "),a("li",[t._v("The icon file should be submitted to the directory: "),a("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/icons",target:"_blank",rel:"noopener noreferrer"}},[t._v("icons"),a("OutboundLink")],1),t._v(" through a Pull Request.")])]),t._v(" "),a("h2",{attrs:{id:"_3-explorer-url-required"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-explorer-url-required"}},[t._v("#")]),t._v(" 3. Explorer URL (Required)")]),t._v(" "),a("ul",[a("li",[t._v("Explorer file name must be coin's ticker name matching the "),a("code",[t._v('"coin"')]),t._v(" value as specified in "),a("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("coins"),a("OutboundLink")],1),t._v(" file.")]),t._v(" "),a("li",[t._v("Explorer file name must not have any file extension. It is a file without any "),a("code",[t._v(".")]),t._v(" extension.")]),t._v(" "),a("li",[t._v("Explorer file name must be all in "),a("strong",[t._v("capital")]),t._v(" letters.")]),t._v(" "),a("li",[t._v("It must have a valid JSON array with at least one Explorer URL in it. It's better if there are more than one explorer URLs in this JSON array. Example: "),a("code",[t._v('["http://example1.com/tx/","http://example2.com/tx/"]')]),t._v(".")]),t._v(" "),a("li",[t._v("The URL of Explorer must be pointing to the transactions URL. Check BTC file for an example: "),a("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/explorers/BTC",target:"_blank",rel:"noopener noreferrer"}},[t._v("explorers/BTC"),a("OutboundLink")],1),t._v(" , which has "),a("code",[t._v('["https://www.blocktrail.com/BTC/tx/"]')]),t._v(". This explorer's URL is used to show in graphical applications to link to the transactions like this "),a("a",{attrs:{href:"https://www.blocktrail.com/BTC/tx/5268d045196e940ca8ba53b442c38a0f8c159002c912f8427239153dce984cc3",target:"_blank",rel:"noopener noreferrer"}},[t._v("example link"),a("OutboundLink")],1),t._v(" . Make sure this URL ends with "),a("code",[t._v("/")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"_4-electrum-servers-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-electrum-servers-optional"}},[t._v("#")]),t._v(" 4. Electrum Servers (Optional)")]),t._v(" "),a("ul",[a("li",[t._v("Electrum file name must be coin's ticker name matching the "),a("code",[t._v('"coin"')]),t._v(" value as specified in the "),a("a",{attrs:{href:"https://github.com/jl777/coins/blob/master/coins",target:"_blank",rel:"noopener noreferrer"}},[t._v("coins"),a("OutboundLink")],1),t._v(" file.")]),t._v(" "),a("li",[t._v("Electrum file name must not have any file extension. It is a file without any "),a("code",[t._v(".")]),t._v(" extension.")]),t._v(" "),a("li",[t._v("Electrum file name must be in all "),a("strong",[t._v("capital")]),t._v(" letters.")]),t._v(" "),a("li",[t._v("It must be a valid JSON format as shown in the following example:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"electrum1.example.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electrum1_admin_email@example.com"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"matrix"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@electrum1_admin:matrix.org"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"skype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"twitter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reddit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"github"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keybaseio"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example_username"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"electrum2.example.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"contact"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"electrum2_admin_email@example.com"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("A minimum of 2 or more Electrum servers information must be provided.")]),t._v(" "),a("li",[t._v("Contact information must be provided in case the server admin needs to be contacted in urgent cases when required. It can be any contact information out of the examples provided. Or may be add your own service/contact information as it suites you.")]),t._v(" "),a("li",[t._v("The address and port of electrum server are required. The address of electrum server can either be a DNS or an IP address.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);