"use strict";

const dogCard = document.querySelector("#dog");

let dogInfo = [
  {
    id: 0,
    name: "Holly",
    picture: "./images/Border-Collie.jpg",
    age: 5,
    breed: "Border Collie",
    location: "New York",
    price: "3ETH",
  },

  {
    id: 1,
    name: "Hope",
    picture: "./images/Boston-Terrier.jpg",
    age: 8,
    breed: "Boston Terrier",
    location: "Chicago",
    price: "2ETH",
  },

  {
    id: 2,
    name: "Love",
    picture: "./images/Chihuahua.jpg",
    age: 4,
    breed: "Chihuahua",
    location: "Minnesota",
    price: "1ETH",
  },
  {
    id: 3,
    name: "Future",
    picture: "./images/Chow-Chow.jpg",
    age: 2,
    breed: "Chow-Chow",
    location: "Kentucky",
    price: "3ETH",
  },
  {
    id: 4,
    name: "Heebong",
    picture: "./images/Dachshund.jpg",
    age: 7,
    breed: "Dachshund",
    location: "Seoul",
    price: "2ETH",
  },
  {
    id: 5,
    name: "Coco",
    picture: "./images/French-bulldog.jpg",
    age: 3,
    breed: "French bulldog",
    location: "Pennsylvania",
    price: "1ETH",
  },
  {
    id: 6,
    name: "Alpha",
    picture: "./images/German-Shepherd.jpg",
    age: 7,
    breed: "German Shepherd",
    location: "Michigan",
    price: "2ETH",
  },
  {
    id: 7,
    name: "Beta",
    picture: "./images/Golden-Retriever.jpg",
    age: 5,
    breed: "Golden Retriever",
    location: "Los Angeles",
    price: "3ETH",
  },
  {
    id: 8,
    name: "Niko",
    picture: "./images/greyhound.jpg",
    age: 4,
    breed: "Greyhound",
    location: "Tokyo",
    price: "2ETH",
  },
  {
    id: 9,
    name: "Goguma",
    picture: "./images/Pomeranian.jpg",
    age: 4,
    breed: "Pomeranian",
    location: "Busan",
    price: "3ETH",
  },
  {
    id: 10,
    name: "Gamja",
    picture: "./images/poodle.jpg",
    age: 6,
    breed: "Poodle",
    location: "Gangwon",
    price: "1ETH",
  },
  {
    id: 11,
    name: "Mountain",
    picture: "./images/Saint-Bernard.jpg",
    age: 9,
    breed: "Saint Bernard",
    location: "Hefei",
    price: "1ETH",
  },
  {
    id: 12,
    name: "Eiffel",
    picture: "./images/Samoyed.jpg",
    age: 3,
    breed: "Samoyed",
    location: "Paris",
    price: "3ETH",
  },
  {
    id: 13,
    name: "Beach",
    picture: "./images/Shiba-dog.jpg",
    age: 6,
    breed: "Shiba",
    location: "Hawaii",
    price: "1ETH",
  },
  {
    id: 14,
    name: "Oak",
    picture: "./images/Siberian-Husky.jpg",
    age: 5,
    breed: "Siberian Husky",
    location: "West Virginia",
    price: "4ETH",
  },
  {
    id: 15,
    name: "Hola",
    picture: "./images/Yorkshire-Terrier.jpg",
    age: 5,
    breed: "Yorkshire Terrier",
    location: "Santiego",
    price: "2ETH",
  },
];

let h = [];
// for (let dog of dogInfo)
for (const [i, v] of [dogInfo].entries()) {
  console.log(i, v);
  console.log(i, i.id);
}
for (const [index, value] of [1, 2, 3, 4, 5].entries()) {
  console.log(index, value);
}
for (let dog of dogInfo) {
  h.push(`<div class='card'><img src=" 
    ${dog.picture}"/> 
    <div class='container'> 
    <h4> 
    ${dog.name} 
    </h4>
    <h5 id='connectPrice' class='money'> 
    ${dog.price} 
    </h5> 
    <h6> 
    Age:  
    ${dog.age} 
    </h6><h6> 
    Breed:  
    ${dog.breed} 
    </h6><h6> 
    Location:  
    ${dog.location} 
    </h6><button class="btn" onclick="getAdopters" style="display:inline">
    Adopt 
    </button> 
    <div id = "showText
    "></div></div></div>`);
}

dogCard.innerHTML = h.join("");

let provider;
let web3;
let account;

async function connect() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
      web3.eth.getAccounts().then(function (accounts) {
        account = accounts[0];
        document.getElementById("account").innerText = account;
      });
    } catch (error) {}
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use Mist/MetaMask's provider.
    web3 = window.web3;
    console.log("Injected web3 detected.");
  }
}
function getContract() {
  let abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "adopt",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "adopters",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "getOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  contract = new web3.eth.Contract(
    abi,
    "0x09C522617d81E3989A7DCC3562173996dCD80260"
  );
  document.getElementById("contract").innerHTML = contract._address;
  console.log(contract);
  getOwner(0);
}

function getAdopters(id) {
  console.log(id);
  contract.methods
    .adopt(id)
    .send({ from: account })
    .then(function (receipt) {
      console.log(receipt);
      // getAdopters 함수 안에 getOwner 함수 써주는 이유는 입양된 강아지 버튼 바로  바꿔주기 위해서
      getOwner(id);
    });
}

function getOwner(id) {
  // for (i=0; i<dogInfo.length; i++) {
  contract.methods
    .getOwner(id)
    .call()
    .then(function (result) {
      console.log(result);

      document.getElementById(id).style.display = "none";

      const btnElement = document.getElementById("showText");
      btnElement.innerText = "Already adopted";
    });
}

// console.log(contract);
