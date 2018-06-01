/* GLOBAL VARIABLES */
window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {

        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
        console.log("MetaMask is awesome");

    } else {

        console.log('No web3? You should consider trying MetaMask!');
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

    }
});

abi = JSON.parse('Paste your contract abi here');

contractAddress = 'Your hex string address, at which the contract is deployed';

VotingContract = web3.eth.contract(abi);

contractInstance = VotingContract.at(contractAddress);

const VotingService = _ => {
  /* PRIVATE FUNCTIONS */
    const _formatVotes = votes => votes.map(vote => vote.value);

    const getVotes = new Promise( function (resolve, reject) {
        /*
        * Logic to fetch the data by calling your functions from smart contract
        * */
    });



    const vote = (id) => new Promise(function (resolve, reject) {

        web3.version.getNetwork((error, netId) => {
            /*This is just to know who is sending the transactions*/
            console.log(netId);
            console.log(web3.eth.coinbase);
            console.log(web3.currentProvider.isMetaMask);
        });

        if (web3.isConnected()) {
            /*
            * call the voting function and cast your vote by sending a transaction
            * */
        } else {
            reject(Error("No Blockchain Connection"));
        }
    });


    return {
    /* PUBLIC FUNCTIONS */
        getAllVotes: _ => Promise.resolve(getVotes).then(_formatVotes),
        submitVote: (id) => Promise.resolve(id).then(vote)
  };
};
