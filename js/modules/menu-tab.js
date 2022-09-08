export default function initTabNav() {
  const classeAtivo = "ativo";
  const tabImg = document.querySelectorAll("[data-tab='img'] li");
  const tabInfo = document.querySelectorAll("[data-tab='info'] section");
  if (tabImg.length && tabInfo.length) {
    tabInfo[0].classList.add(classeAtivo);
    tabImg.forEach((img, index) => {
      img.addEventListener("click", () => {
        const { anime } = tabInfo[index].dataset;

        tabInfo.forEach((info) =>
          info.classList.remove(classeAtivo, "show-down", "show-right")
        );
        tabInfo[index].classList.add(classeAtivo);

        if (anime === "show-down") tabInfo[index].classList.add("show-down");
        if (anime === "show-right") tabInfo[index].classList.add("show-right");
      });
    });
  }
}
