/*Deleting item from basket*/
window.onload = function deleteIt() {
  var allSubjectName = document.querySelectorAll(".basket-item");
  for (var index = 0; index < allSubjectName.length; index++) {
    allSubjectName[index].addEventListener("click", function () {
      this.classList.toggle("active");
    });
    allSubjectName[index]
      .querySelector(".basket-item-delete")
      .addEventListener("click", function () {
        this.closest(".basket-item").remove();
      });
  }
};
/*Adding item to basket*/
function addToBasket() {
   var element = document.querySelector('.basket-item');
   var copyOfItem = element.cloneNode(true);
   var list = document.querySelector('.basket-list');
   copyOfItem.addEventListener("click", function () {
      this.classList.toggle("active");
   });
   copyOfItem.querySelector(".basket-item-delete").addEventListener("click",
      function () {
         this.closest(".basket-item").remove();
      });
   list.appendChild(copyOfItem);
}