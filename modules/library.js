const removeElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

class Library {
  constructor() {
    this.list = [];
  }

  removeBook(id) {
    this.list = this.list.filter((item) => item.id !== id);
    localStorage.setItem('library', JSON.stringify(this.list));
  }

  addBook(book) {
    this.list.push(book);
  }

  updateDom() {
    const list = document.querySelector('.listing');
    removeElement(list);
    this.list.forEach((el) => {
      const book = document.createElement('li');
      const rmBtn = document.createElement('button');
      rmBtn.innerHTML = 'remove';
      book.innerHTML = `${el.title} by ${el.author}`;
      book.classList.add('book-item');
      rmBtn.classList.add('remove-book');
      book.appendChild(rmBtn);
      list.appendChild(book);
      rmBtn.addEventListener('click', () => {
        this.removeBook(el.id);
        book.remove(book.id);
      });
    });
  }
}

export default Library;