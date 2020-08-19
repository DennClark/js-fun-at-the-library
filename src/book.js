function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
  } else {
  reviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(bookTitle, bookCharacter, pageCount, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy",
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
