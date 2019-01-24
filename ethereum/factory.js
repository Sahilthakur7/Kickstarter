import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(campaignFactory.interface),
'0xcf20BA1c4003B85126F35270fd53C5ef72510cFD'
);

export default instance;
