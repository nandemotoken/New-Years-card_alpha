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
    host: "https://rpc.xdaichain.com/", // default: mainnet
    chainId: 100, // default: 1
    networkName: "xDai Stable Network" // default: Main Ethereum Network
  },
  showTorusButton: true // default: true
});
await torus.login(); // await torus.ethereum.enable()
web3tr = new Web3(torus.provider);
}

const Address = "0xf776b7eCf7d722f5A75ee1fAE453A1014353154f";

async function checkcake(){
  console.log("check cake");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
  let fromblockchain1 = await mycontract.methods.name().call();
  console.log(fromblockchain1);
}

async function makecake(){
  console.log("make cake");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
 
 	let useraddress = await web3tr.eth.getAccounts();
  mycontract.methods.mint().send({ from: useraddress[0] });
	console.log("useraddress[0]_is_your_Address:" + useraddress[0]);
}



newTorus();
