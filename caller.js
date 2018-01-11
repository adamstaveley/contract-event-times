const Web3 = require('web3');

const web3 = new Web3('ws://localhost:8546');

const build = require('./build/contracts/EventEmitter.json');
const abi = build.abi;
const addr = build.networks['38051'].address;
const contract = new web3.eth.Contract(abi, addr);

web3.eth.getAccounts()
    .then(accounts => {
        contract.methods.emitEvent(web3.utils.fromAscii('hello world')).send({from: accounts[0], gas: 50000})
            .then(receipt => console.log(`${receipt.transactionHash} mined in block ${receipt.blockNumber}`))
            .catch(console.log);
    })
    .catch(console.log);