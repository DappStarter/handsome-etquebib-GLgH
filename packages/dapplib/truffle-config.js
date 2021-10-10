require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remain purse imitate private flat spoon'; 
let testAccounts = [
"0x81cd5b8635c4d8c9472615cf198b526f410c9ab98d6151a257739127924e2b12",
"0x29688e16803882d8b45dcacc95099138dcd5abb86bb659c5dfeec894f3d13f28",
"0x0b81dc4e08abb2554d98a3083aee2040fc6a08e1098e37ee189435b0fecaf272",
"0xc69b5830f6fa17629ba27a680d5a19f25fb3734aa62aac479fc0f4145977415f",
"0x8ff35f9f29932701c1efc79db7b67e731ec65a00e22aaada1d3b51850b1ecb17",
"0x03d2470b061e0de49f4ad36b260ba3e87196b89711ba92e6b0146a7a434572c3",
"0xbfbc611e1965fef70e80edc64127ef21d1f4edefe8d522c782c37fb7f0ed9624",
"0xa8846640acec633d2d0d244d4f8de76f8ff8b848b137bab62f5450c40e046942",
"0x103bd7ce966b9eb16b450d1bc033d794adb5216170b5df745729b2aac3d1f65f",
"0x592c44d1495015ee23e71f6011574b6d892c7af3d22f3e0d7164470c3b6ccd2a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

