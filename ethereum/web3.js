import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //In the browser and metamask is running 
    web3 = new Web3(window.web3.currentProvider);
} else {
    //The user is not running metamask or we are in the next server
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/4243263ffb434a429f996fca85801d8b'
    );

    web3 = new Web3(provider);
}


export default web3;
