(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{246:function(e,t,a){"use strict";a.r(t);var r=a(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"wallet-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet-generation"}},[e._v("#")]),e._v(" Wallet Generation")]),e._v(" "),a("p",[e._v("With Wasabi you can generate unlimited number of Bitcoin wallets very fast, without any cost, and without asking anyone for permission.\nEach wallet has separate private and public keys in a unique backup, and they are not at all linked to the other wallets generated on the same computer.\nSo with several wallets you can conveniently manage your bitcoin for different use cases without worrying about revealing that you control them.")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#generating-the-wallet-step-by-step"}},[e._v("Generating the wallet step-by-step")])]),a("li",[a("a",{attrs:{href:"#what-password-to-choose"}},[e._v("What password to choose")]),a("ul",[a("li",[a("a",{attrs:{href:"#what-not-to-do"}},[e._v("What not to do")])]),a("li",[a("a",{attrs:{href:"#best-practices"}},[e._v("Best Practices")])])])]),a("li",[a("a",{attrs:{href:"#how-are-the-secrets-created"}},[e._v("How are the secrets created")])]),a("li",[a("a",{attrs:{href:"#what-do-you-need-to-get-the-keys"}},[e._v("What do you need to get the keys?")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"generating-the-wallet-step-by-step"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-wallet-step-by-step"}},[e._v("#")]),e._v(" Generating the wallet step-by-step")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Launch Wasabi Wallet.\nThe very first time you run the software the "),a("code",[e._v("Generate Wallet")]),e._v(" tab will be automatically open, but you can also access it by clicking on File -> Generate Wallet in the menu bar.")])]),e._v(" "),a("li",[a("p",[e._v("Label the new wallet precisely to ensure a proper differentiation at any point in the future.\nThis label is not shared with anyone, it is only stored locally on your computer.")])]),e._v(" "),a("li",[a("p",[e._v("Write a long and random password and back it up.\nIt encrypts your secrets and you will need it every time you want to spend bitcoin from this wallet.\nConsider using "),a("a",{attrs:{href:"https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases",target:"_blank",rel:"noopener noreferrer"}},[e._v("diceware wordlists"),a("OutboundLink")],1),e._v(" or a secure password generator to protect yourself against brute force attacks.")])])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Backup your password!")]),e._v(" "),a("p",[e._v("Without the password, you cannot spend your bitcoin or recover your wallet, even if you have the recovery words (Seed phrase).\nSo tripple check that you have a proper backup!")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("Click the checkbox after carefully reading the Terms and Conditions, the Privacy Policy and the Legal Issues of zkSNACKs Ltd. and Wasabi Wallet.")])]),e._v(" "),a("li",[a("p",[e._v("Click the "),a("code",[e._v("Generate")]),e._v(" button")])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/WalletManagerGenerateWallet.png",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Write down the 12 recovery words (Seed phrase).\nYou can use this seed phrase with your password to recover your wallet on a different computer using Wasabi or another "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 38"),a("OutboundLink")],1),e._v(" compliant wallet.\nIf you have only the recovery words, but not the password, then you cannot spend the bitcoin nor recover this wallet.\nBut whoever has both, gets full access to all the transaction history and gains control over every satoshi locked up in this wallet.")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Backup your recovery words!")]),e._v(" "),a("p",[e._v("Without the recovery words (Seed phrase) and the password, you cannot recover your wallet.\nSo tripple check that you have a proper backup!\nMake sure the backup is separate from the password.")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/WalletManagerRecoveryWords.png",alt:""}})]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Test the password before you can load the wallet, to make sure that your backup password is correct.\nSo type or paste the password in the text box, and click "),a("code",[e._v("Load Wallet")]),e._v(".")])]),e._v(" "),a("p",[a("img",{attrs:{src:"/TestPassword.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"what-password-to-choose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-password-to-choose"}},[e._v("#")]),e._v(" What password to choose")]),e._v(" "),a("p",[e._v("Wasabi integrates "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 38: Password-Protected Private Key"),a("OutboundLink")],1),e._v(", which means that the secrets needed to spend the bitcoin are encrypted on the computer.\nIf someone has compromised your operating system and hardware and he only has the encrypted secrets, then no bitcoin can be spent.\nYou need "),a("strong",[e._v("both")]),e._v(" the encrypted secrets, and the password in order to get the private key which can sign a spending transaction.\nThis means that the password is your last line of defense against anyone who tries to steal your bitcoin.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("It is very much recommended to use long and random passwords for everything, especially for your money!.")])]),e._v(" "),a("h3",{attrs:{id:"what-not-to-do"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-not-to-do"}},[e._v("#")]),e._v(" What not to do")]),e._v(" "),a("p",[e._v("Here are a couple of examples that do it completely wrong, you should not generate your password like this:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Do not use publicly known information like your grandma's maiden name and the birthday of your Dog.\n"),a("code",[e._v("Emma1992")]),e._v(" is a really really really bad password, because it can easily be guessed and it is very short.")])]),e._v(" "),a("li",[a("p",[e._v("Do not use the same password that you have used in other places.\nBecause if one password is leaked, then other ones are compromised.")])]),e._v(" "),a("li",[a("p",[e._v("Do not use only letters, or only numbers in your password.")])])]),e._v(" "),a("h3",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("p",[e._v("Don't roll your own crypto.\nYou shouldn't try to re-invent the wheel for something as complicated and nuanced as cryptography, and especially in regards to entropy.\nThese are some of the industry best practices:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Rolling a dice might be the easiest way to get high entropy and randomness in numbers.\nYou can also use the "),a("a",{attrs:{href:"https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases",target:"_blank",rel:"noopener noreferrer"}},[e._v("diceware wordlists"),a("OutboundLink")],1),e._v(" to get something similar to your Bitcoin recovery words (Seed phrase).\nNow you have a verbal password that was generated completely off-line with sufficient randomness.")])]),e._v(" "),a("li",[a("p",[e._v("Flip through the pages of a book, stopping on an arbitrary page and pick up one word somewhere on that page.\nAlthough this is not as random as a dice-roll, there is still a large set of possible words in a book.\nYou can further increase the randomness by selecting different books.")])]),e._v(" "),a("li",[a("p",[e._v("Use a well tested password manager with a cryptographic secure random number generator.\nA good password manager will use sufficient entropy to generate a password with letters, numbers and special characters.\nAlthough this is on-line and digital, a good software should still be secure enough for most cases.")])])]),e._v(" "),a("h2",{attrs:{id:"how-are-the-secrets-created"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-are-the-secrets-created"}},[e._v("#")]),e._v(" How are the secrets created")]),e._v(" "),a("p",[e._v("Wasabi uses "),a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 38: Password-Protected Private Key"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("                      +--------------+\n                      | Entropy      |\n                      +--------------+\n  +------------+             |\n  | Word list  +------------\x3e+\n  +------------+             |\n                      +------v-------+\n                      | Mnemonics    |\n                      +--------------+\n                             |\n                   +---------\x3e\n                   |         |\n                   |  +------v-------+\n                   |  | Seed         |\n                   |  +--------------+\n                   |         |\n   +-----------+   |         |\n   | Password  +---+  +------v-------+\n   +-----------+   |  | Extended Key |\n                   |  +--------------+\n                   |         |\n                   |         |\n                   |  +------v-------+\n                   |  | Private key  |     ** This step is needed to use bip38\n                   |  +--------------+\n                   |         |              +-------------+\n                   +--------\x3e+<-------------+  Network    |\n                             |              +-------------+\n                      +------v-------+\n                      | Encrypted    |\n                      | secret       |\n                      +--------------+\n                             |\n                             |\n                             |\n                  +--------------------+\n                  | Save encrypted     |\n                  | secret+chaincode+  |\n                  | Fingerprint+ExtPub |\n                  +--------------------+\n\n")])])]),a("h2",{attrs:{id:"what-do-you-need-to-get-the-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-do-you-need-to-get-the-keys"}},[e._v("#")]),e._v(" What do you need to get the keys?")]),e._v(" "),a("p",[e._v("This is needed to backup and recover your wallet:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Data")]),e._v(" "),a("th",[e._v("Does it need password to recover?")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("entropy")]),e._v(" "),a("td",[e._v("No, this is unencrypted")])]),e._v(" "),a("tr",[a("td",[e._v("mnemonic")]),e._v(" "),a("td",[e._v("No, this is unencrypted")])]),e._v(" "),a("tr",[a("td",[e._v("seed")]),e._v(" "),a("td",[e._v("Yes, it is encrypted")])]),e._v(" "),a("tr",[a("td",[e._v("extendedkey")]),e._v(" "),a("td",[e._v("Yes, it is encrypted")])]),e._v(" "),a("tr",[a("td",[e._v("privatekey+chaincode+fingerprint")]),e._v(" "),a("td",[e._v("Yes, it is encrypted")])]),e._v(" "),a("tr",[a("td",[e._v("encryptedsecret+chaincode+fingerprint")]),e._v(" "),a("td",[e._v("Yes, "),a("strong",[e._v("(this is the Wasabi Backup)")])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);