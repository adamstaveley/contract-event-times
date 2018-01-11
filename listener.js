const Web3 = require('web3');

const web3 = new Web3('ws://localhost:8546');

const build = require('./build/contracts/EventEmitter.json');
const abi = build.abi;
const addr = build.networks['38051'].address;
const contract = new web3.eth.Contract(abi, addr);

contract.events.LogEvent({})
    .on('data', ev => console.log(`${ev.event}: ${web3.utils.hexToAscii(ev.returnValues.message)}`))
    .on('error', console.log);
