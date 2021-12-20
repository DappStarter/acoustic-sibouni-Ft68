require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remind honey give knife fortune spread'; 
let testAccounts = [
"0xbb0c184ab3b92ad0b553a1810dce08fadffa2b6cd2d93df0b080c011d6baff45",
"0xcc89d36ddfb2808176ca964fcca83eb91f0791bd54a74e9dd478a29e2573b6ae",
"0x145c86c3d13b0adf7374ef6208fe3821d768ac4641ba50639011564fa14ee250",
"0xcde8201e2de141bec3221eb73309f752bcc7e441b89404194d75290bbe336291",
"0x302ba1a13f79d99c59355015d03e881aefdd010c0d15b5380fabe158718bc580",
"0x53674ee9ad69fd96b639b37437b1d898f2795694f244f4d217f66589bd92b623",
"0x3a3509bbdcd7677fc6805b03c08a3f32476aa6a816c4de090a3450b9a42ddfe9",
"0x65f23a38fbe9ced3bbbd43af960e020a1034e1428391f00f61e80dc348a36d6f",
"0xc77af0490f5a558d435d64afed0f6a85f46726427b6d288260778b3309230f81",
"0x74371e6c45f8d20b1611aff2118da87012e8a08f2962b16d5bf721168c19e305"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


