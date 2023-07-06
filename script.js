let btnSearch = document.querySelector('.btn-search');
let modalContainer = document.querySelector('.modal-container');
let btnClose = document.querySelector('.modal-close');

btnSearch.onclick = function(){
  modalContainer.classList.add('modal-active');
};

btnClose.onclick = function(){
  modalContainer.classList.remove('modal-active');
};
