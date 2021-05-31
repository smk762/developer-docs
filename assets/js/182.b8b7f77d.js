(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{577:function(e,t,a){"use strict";a.r(t);var o=a(50),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"inflation-mechanisms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inflation-mechanisms"}},[e._v("#")]),e._v(" Inflation Mechanisms")]),e._v(" "),a("p",[e._v("New KMD coins are created in two ways:")]),e._v(" "),a("ol",[a("li",[e._v("Mining (Normal mining - "),a("code",[e._v("25%")]),e._v(" and notary mining - "),a("code",[e._v("75%")]),e._v(")")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/whitepaper/chapter8.html#rewards"}},[e._v("Rewards")]),e._v(" (~ "),a("code",[e._v("5.1%")]),e._v(" reward to active users that have atleast "),a("code",[e._v("10 KMD")]),e._v(")")],1)]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("The emission schedule for KMD is as follows:")]),e._v(" "),a("ul",[a("li",[e._v("3 KMD per block till the block height of KMD reaches "),a("code",[e._v("7777777")]),e._v(". This is the same block height at which Reward creation stops")]),e._v(" "),a("li",[e._v("2 KMD per block from the block height "),a("code",[e._v("7777777")]),e._v(" till the block height of KMD reaches "),a("code",[e._v("2 * 7777777")])]),e._v(" "),a("li",[e._v("1 KMD per block from the block height "),a("code",[e._v("2 * 7777777")]),e._v(" till forever")])])]),e._v(" "),a("p",[e._v("Let us explore the amount of KMD created each year through these two mechanisms.")]),e._v(" "),a("h2",{attrs:{id:"mining"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mining"}},[e._v("#")]),e._v(" Mining")]),e._v(" "),a("ul",[a("li",[e._v("Each block of KMD mined, creates "),a("code",[e._v("3 KMD")])]),e._v(" "),a("li",[e._v("KMD block creation rate: 1 block per minute")]),e._v(" "),a("li",[e._v("Total minutes in a year = "),a("code",[e._v("365 * 1440")]),e._v(" = "),a("code",[e._v("525600")])]),e._v(" "),a("li",[e._v("Total KMD mined in a year = "),a("code",[e._v("525600 * 3")]),e._v(" = "),a("code",[e._v("1576800")]),e._v(" ~ "),a("code",[e._v("1.58")]),e._v(" million")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Out of the above mining rewards,")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("25%")]),e._v(" is mined by normal miners = "),a("code",[e._v("0.25 * 1576800")]),e._v(" = "),a("code",[e._v("394200")]),e._v(" ~ "),a("code",[e._v("0.4")]),e._v(" million")]),e._v(" "),a("li",[a("code",[e._v("75%")]),e._v(" is mined by notaries = "),a("code",[e._v("0.75 * 1576800")]),e._v(" = "),a("code",[e._v("1182600")]),e._v(" ~ "),a("code",[e._v("1.18")]),e._v(" million")])])]),e._v(" "),a("h2",{attrs:{id:"rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewards"}},[e._v("#")]),e._v(" Rewards")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/whitepaper/chapter8.html#rewards"}},[e._v("Rewards")]),e._v(', more accurately called the "Active User Rewards", are a unique feature to Komodo, made possible by our consensus mechanism '),a("RouterLink",{attrs:{to:"/whitepaper/chapter3.html"}},[e._v("Delayed Proof of Work (dPoW)")]),e._v(". The important point to note is that, as KMD chain is secured by dPoW (thereby recycling BTC chain's hash power), there is no need to attract huge quantities of its own hash power for security. This is the rationale behind having a "),a("code",[e._v("75%")]),e._v(" notary mining even in the comparitively smaller amount of the mining induced inflation.")],1),e._v(" "),a("h3",{attrs:{id:"how-rewards-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-rewards-work"}},[e._v("#")]),e._v(" How "),a("RouterLink",{attrs:{to:"/whitepaper/chapter8.html#rewards"}},[e._v("Rewards")]),e._v(" work")],1),e._v(" "),a("ul",[a("li",[e._v("Any utxo on the KMD chain whose age is greater than "),a("code",[e._v("1 hour")]),e._v(" and value greater than "),a("code",[e._v("10 KMD")]),e._v(" is eligible to send a transaction whose output is greater than its input.")]),e._v(" "),a("li",[e._v("The amount that can be claimed keeps increasing as the age of the utxo increases and caps at the age of 1 month. If the utxo hasn't claimed the rewards or done another transaction in a month, the rewards are capped.")]),e._v(" "),a("li",[e._v("The monthly reward comes out to be approximately: ~ "),a("code",[e._v("0.42%")]),e._v(". Please see this "),a("a",{attrs:{href:"https://github.com/atomiclabs/get-komodo-rewards/blob/master/index.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm module"),a("OutboundLink")],1),e._v(" or the "),a("a",{attrs:{href:"https://github.com/jl777/komodo/blob/jl777/src/komodo_interest.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("source code"),a("OutboundLink")],1),e._v(" to learn about the exact way the rewards are calculated.")]),e._v(" "),a("li",[e._v("The above rule and the value of extra satoshis that can be claimed is part of the KMD chain's consensus rules")]),e._v(" "),a("li",[e._v("The total value of the rewards that can be claimed by a person claiming atleast once a month compounded is approximately ~ "),a("code",[e._v("5.1%")]),e._v(" . This "),a("a",{attrs:{href:"https://www.atomicexplorer.com/#/rewards-calc",target:"_blank",rel:"noopener noreferrer"}},[e._v("page"),a("OutboundLink")],1),e._v(" has a handy rewards calculator.")]),e._v(" "),a("li",[e._v("Rewards cannot be claimed by utxos created after the KMD block height: "),a("code",[e._v("7777777")])])]),e._v(" "),a("h3",{attrs:{id:"now-let-us-calculate-the-inflation-caused-by-rewards"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#now-let-us-calculate-the-inflation-caused-by-rewards"}},[e._v("#")]),e._v(' Now let us calculate the inflation caused by "Rewards"')]),e._v(" "),a("p",[e._v("Assume that, all the KMD currently in circulation is in utxos whose size is greater than "),a("code",[e._v("10")]),e._v(" and all the users will claim atleast once a month for the next 1 year = 12 months.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This is not actually the reality, as many exchanges and cold storage wallets don't regularly claim their rewards. These unclaimed rewards are minable.")])]),e._v(" "),a("ul",[a("li",[e._v("KMD in circulation currently: ~ "),a("code",[e._v("112462628")]),e._v(" ~ "),a("code",[e._v("122.4")]),e._v(" million")]),e._v(" "),a("li",[e._v("Approximate amount of rewards claimable (excluding the mined KMD as that too will be eligible to claim rewards) = "),a("code",[e._v("112462628 * 0.051")]),e._v(" = "),a("code",[e._v("5735594")]),e._v(" ~ "),a("code",[e._v("5.73")]),e._v(" million")])]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("In 1 year:")]),e._v(" "),a("ul",[a("li",[e._v("KMD created by normal miners : ~ "),a("code",[e._v("0.4")]),e._v(" million")]),e._v(" "),a("li",[e._v("KMD created by notaries : ~ "),a("code",[e._v("1.18")]),e._v(" million")]),e._v(" "),a("li",[e._v('KMD created by claims of the "Active User Reward": ~ '),a("code",[e._v("5.73")]),e._v(" million")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Also worth observing is that, while the mining rewards stay the same for both notaries and miners, the KMD produced through the rewards claim process keeps increasing every year as the amount of KMD held by the community increases.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);