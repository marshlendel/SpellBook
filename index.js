const form = document.querySelector("form");

const changeHeading = function (e) {
  e.preventDefault();
  const input = e.target[0];
  if (input.value !== "") {
    const spellList = document.querySelector(".spell-list");
    spellList.innerHTML += `<li>${input.value}</li>`;
    setTimeout(() => {
      document.querySelectorAll("li").forEach((item) => {
        item.classList.add("un-fade");
      });
    }, 100);
    input.value = "";
  }
};

form.addEventListener("submit", changeHeading);
