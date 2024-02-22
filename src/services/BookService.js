const BOOKS = [
  {
    id: 1,
    name: "The Google story",
    price:562,
    author:"Sardar Tariq",
    image:require("../../assets/product_images/googleBook.png"),
    description:
    "Here is the story behind one of the most remarkable Internet successes of our time",
  },
  {
    id: 2,
    name: "The Amazing story",
    price:662,
    author:"Gautam gulati",
    image: require("../../assets/product_images/TheAmazingStory.jpg"),
    description:
    "This is a story about a adventuror who when went on a adventure to have amazing experiences",
  },
  {
    id: 3,
    name: "The phantom story",
    price:702,
    author:"Vivek khan",
    image:require("../../assets/product_images/phantom.jpg") ,
    description:
    "This is a story about 4 phantoms hero who are amazing at their job . Come with me in this journey",
  },
  {
    id: 4,
    name: "The Mother's Love",
    price:992,
    author:"Rahul Kumar",
    image: require("../../assets/product_images/motherLove.jpg"),
    description:
      "This is a story of my mother who sacrifies everything just for my own happiness",
  },
];

export function getBooks (){
    return BOOKS;
}

export function getBookId(id){
    return BOOKS.find((book) => book.id == id);
}