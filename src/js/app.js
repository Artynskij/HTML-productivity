const dropItem = document.getElementsByClassName("faq__dropdown_item");

for (i = 0; i < dropItem.length; i++) {
  dropItem[i].addEventListener("click", function () {
    const icon =
      this.firstChild.nextElementSibling.firstChild.nextElementSibling;
    const text = this.firstChild.nextElementSibling.lastChild.previousSibling;
    console.log(icon);
    console.log(window.innerWidth);

    if (this.style.height === "45px" && window.innerWidth>426 ) {
      this.style.transition = "0.6s";
      this.style.height = "176px";
      icon.style.color = "#495274";
      icon.style.transform = "rotate(180deg)";
      text.style.fontFamily = "Quicksand-Bold";
      text.style.color = "#495274";
     
    } else if (this.style.height === "45px" && window.innerWidth<426 && window.innerWidth>321) {
      this.style.transition = "0.6s";
      this.style.height = "220px";
      icon.style.color = "#495274";
      icon.style.transform = "rotate(180deg)";
      text.style.fontFamily = "Quicksand-Bold";
      text.style.color = "#495274";
    } else if (this.style.height === "45px" && window.innerWidth<321) {
      this.style.transition = "0.6s";
      this.style.height = "250px";
      icon.style.color = "#495274";
      icon.style.transform = "rotate(180deg)";
      text.style.fontFamily = "Quicksand-Bold";
      text.style.color = "#495274";
    } else {
      this.style.height = "45px";
      icon.style.color = "";
      text.style.color = "";
      icon.style.transform = "";
      text.style.fontFamily = "";
    }
  });
}
//
