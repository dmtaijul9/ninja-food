const clickBtn = document.querySelector("#menu-clicker");
const menuShow = document.querySelector("#menu-show");

clickBtn.addEventListener("click", () => {
  console.log(menuShow.classList.contains("hidden"));
  if (menuShow.classList.contains("hidden")) {
    menuShow.classList.remove("hidden");
  } else {
    menuShow.classList.add("hidden");
  }
});
