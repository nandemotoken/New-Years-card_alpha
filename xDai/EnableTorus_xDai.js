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

const Address = "0x81c576e01B2441206877675584504012c6bc35d0";

async function checkcard(){
  console.log("check card");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
  let useraddress = await web3tr.eth.getAccounts();
  console.log(useraddress[0]);
  let fromblockchain1 = await mycontract.methods.getmycardNumber(useraddress[0]).call();
  console.log(fromblockchain1);
	if (fromblockchain1 != 0){
  document.getElementById("idn").innerHTML =  '<a href="https://blockscout.com/poa/xdai/tokens/0x81c576e01b2441206877675584504012c6bc35d0/instance/' + fromblockchain1 + '/token-transfers' + '">https://blockscout.com/poa/xdai/tokens/0x81c576e01b2441206877675584504012c6bc35d0/instance/' + fromblockchain1 + '/token-transfers';
	}
	}

async function makecard(){
  console.log("make card");
  
  mycontract = await new web3tr.eth.Contract(abi, Address);
 	let useraddress = await web3tr.eth.getAccounts();
  	mycontract.methods.mint().send({ from: useraddress[0] }).on( "receipt" , () => {window.alert("年賀状が発行されました"); checkcard(); } );
	console.log("useraddress[0]_is_your_Address:" + useraddress[0]);
}



newTorus();
