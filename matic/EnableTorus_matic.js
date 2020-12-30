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
    host: "matic", // default: mainnet
    chainId: 137, // default: 1
    networkName: "Matic Network" // default: Main Ethereum Network
  },
  showTorusButton: true // default: true
});
await torus.login(); // await torus.ethereum.enable()
web3tr = new Web3(torus.provider);
}

const Address = "0x0f949540365F95426C6f639e81b5B5A38700cD79";

async function checkcard(){
  console.log("check card");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
  let useraddress = await web3tr.eth.getAccounts();
  console.log(useraddress[0]);
  let fromblockchain1 = await mycontract.methods.getmycardNumber(useraddress[0]).call();
  console.log(fromblockchain1);
	if (fromblockchain1 != 0){
  document.getElementById("idn").innerHTML =  '<a href="https://explorer-mainnet.maticvigil.com/tokens/0x64f02d67374cf446a6ebf05f3baed5143a6967ad/instance/' + fromblockchain1 + '/token-transfers' + '">https://explorer-mainnet.maticvigil.com/tokens/0x64f02d67374cf446a6ebf05f3baed5143a6967ad/instance/' + fromblockchain1 + '/token-transfers';
	}
	}

async function makecard(){
  console.log("make card");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
 	let useraddress = await web3tr.eth.getAccounts();
  	mycontract.methods.mint().send({ from: useraddress[0] }).on("receipt" , checkcard());
	console.log("useraddress[0]_is_your_Address:" + useraddress[0]);
}



newTorus();
