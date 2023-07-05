
$(function () {
  $('.btn-search').click(function () {
    $('.modal-container').addClass('modal-active');
  });

$('.modal-close').click(function () {
  $('.modal-container').removeClass('modal-active');
});

$('.modal-container').mouseup(function (e) {
  let modalContent = $(".modal-content");
  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
    $(this).removeClass('modal-active');
  }
});
});
