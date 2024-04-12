// test file book info

/**
 * description of a book
 * @param {string} title title of the book
 * @param {string} author author of the book
 * @param {number} price price of the book
 * @returns {object} returns book details
 */
const book = (title, author, price) => {
  return {
    title: title,
    author: author,
    price: price,
  };
};

class myBook {
  /**
   * class of a book
   * @param {string} title title of the book
   * @param {string} author author of the book
   * @param {number} price price of the book
   */
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

/**
 * New Book Object
 * @type {{title : string, author : string, price : number}}
 */
const newBook = new myBook("Geetanjali", "Rabindranath Tagore", 540);
console.log(
  `Book Name : ${newBook.title}, Book Author : ${newBook.author}, Book Price : ${newBook.price}`
);
