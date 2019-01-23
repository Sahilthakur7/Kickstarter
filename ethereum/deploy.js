const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'possible mandate end hero duck donor fatigue ensure car sting mule alley',
    'https://rinkeby.infura.io/v3/4243263ffb434a429f996fca85801d8b'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)).deploy({data: compiledFactory.bytecode}).send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
}

deploy();
