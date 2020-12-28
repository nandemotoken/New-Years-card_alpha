let web3tr;
let torus;
 
async function newTorus() {

torus = new Torus({
  buttonPosition: "top-right" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "ropsten", // default: mainnet
    chainId: 3, // default: 1
    networkName: "Ropsten Testnet" // default: Main Ethereum Network
  },
  showTorusButton: true // default: true
});
await torus.login(); // await torus.ethereum.enable()
web3tr = new Web3(torus.provider);
}

const Address = "0xf8203681B565AC71514ce48C801b3503af5622b4";

async function checkcard(){
  console.log("check card");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
  let fromblockchain1 = await mycontract.methods.getmycardNumber().call();
  console.log(fromblockchain1);
}

async function makecard(){
  console.log("make card");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
 
 	let useraddress = await web3tr.eth.getAccounts();
  	mycontract.methods.mint().send({ from: useraddress[0] });
	console.log("useraddress[0]_is_your_Address:" + useraddress[0]);
}



newTorus();
