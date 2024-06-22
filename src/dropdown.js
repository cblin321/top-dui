function createDropDown(options, placeholder = "") {
  const dropDownContainer = document.createElement("div");
  const optionMenu = document.createElement("div");
  const head = document.createElement("div");
  const headLabel = document.createElement("p");
  headLabel.textContent = placeholder;
  head.appendChild(headLabel);
  head.appendChild(createArrow(optionMenu, head));
  head.classList.add("options-header");
  optionMenu.classList.add("option-menu");
  const children = options.map((i) => createChild(i));
  children.forEach((element) => {
    optionMenu.appendChild(element);
  });
  dropDownContainer.appendChild(head);
  dropDownContainer.appendChild(optionMenu);
  return dropDownContainer;
}

function createArrow(optionMenu, header) {
  const arrowContainer = document.createElement("div");
  const left = document.createElement("span");
  const right = document.createElement("span");
  arrowContainer.appendChild(left);
  arrowContainer.appendChild(right);
  arrowContainer.classList.add("arrow-container");
  left.classList.add("arrow-left");
  right.classList.add("arrow-right");
  arrowContainer.addEventListener("click", () => {
    drowDown(left, right, optionMenu, header);
  });
  return arrowContainer;
}

function drowDown(left, right, optionMenu, header) {
  if (optionMenu.classList.contains("active")) {
    optionMenu.classList.add("deactivate");
    optionMenu.addEventListener(
      "transitionend",
      () => {
        optionMenu.classList.remove("deactivate");
      },
      { once: true }
    );
  }
  left.classList.toggle("active");
  right.classList.toggle("active");
  optionMenu.classList.toggle("active");
  header.classList.toggle("active");
}

function createChild(option) {
  const optionContainer = document.createElement("div");
  const optionLabel = document.createElement("p");
  optionLabel.textContent = option;
  optionContainer.appendChild(optionLabel);
  optionContainer.classList.add("option-container");
  return optionContainer;
}

export { createDropDown };
