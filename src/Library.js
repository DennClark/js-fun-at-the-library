function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
}

function addBook(name, book) {
  name.shelves[book.genre].push(book);
}

function checkoutBook(library, bookTitle) {
  for (var i = 0; i < library.shelves.fiction.length; i++) {
    if (bookTitle === library.shelves.fiction[i].title) {
      library.shelves.fiction.splice(i, 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  for (var i = 0; i < library.shelves.fantasy.length; i++) {
    if (bookTitle === library.shelves.fantasy[i].title) {
      library.shelves.fantasy.splice(i, 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  for (var i = 0; i < library.shelves.nonFiction.length; i++) {
    if (bookTitle === library.shelves.nonFiction[i].title) {
      library.shelves.nonFiction.splice(i, 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}
//iterate through the shelves array and return the object of the selected title that the patron checks out

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
