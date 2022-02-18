/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
import Book from './modules/book.js';
import Library from './modules/library.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const mainList = document.querySelector('.main__list');
const form = document.querySelector('.form');
const infoPage = document.querySelector('.info');

const toggleInfo = (page) => {
  switch (page) {
    case 'list':
      infoPage.classList.add('none');
      form.classList.add('none');
      mainList.classList.remove('none');
      break;
    case 'add':
      infoPage.classList.add('none');
      form.classList.remove('none');
      mainList.classList.add('none');
      break;
    case 'info':
      form.classList.add('none');
      mainList.classList.add('none');
      infoPage.classList.remove('none');
      break;
    default:
  }
};

const Lib = new Library();

const addBtn = document.querySelector('.form__btn');
addBtn.addEventListener('click', () => {
  const BookTitle = document.getElementById('title').value;
  const BookAuthor = document.getElementById('form').value;

  const book = new Book(BookTitle, BookAuthor);
  Lib.addBook(book);
  Lib.updateDom();
  localStorage.setItem('library', JSON.stringify(Lib.list));
});

window.onload = () => {
  Lib.list = JSON.parse(localStorage.getItem('library' || '[]'));
  if (Lib.list === null) {
    Lib.list = [];
    return;
  }
  Lib.updateDom();
  infoPage.classList.add('none');
  form.classList.add('none');
  mainList.classList.remove('none');
};

window.toggleInfo = toggleInfo;

function displayDate() {
  const dateString = document.querySelector('.nav__para');
  dateString.innerHTML = DateTime.now().toFormat('LLLL dd yyyy, t');
}

displayDate();

/* eslint-enable max-classes-per-file */
/* eslint-disable no-unused-vars */
