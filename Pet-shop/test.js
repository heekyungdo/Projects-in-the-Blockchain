"use strict";

const dogCard = document.querySelector("#dog");

let dogInfo = [
  {
    id: 0,
    name: "Holly",
    picture: "images/Border-Collie.jpg",
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
    picture: "images/Saint-Bernard.jpg",
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
h.push(`<div class='card'>`);
for (let dog of dogInfo) {
  h.push(`<img src=" 
    ${dog.picture}" /> 
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
    </h6>`);
}

h.push(` </div>`);

dogCard.innerHTML = h.join("");
