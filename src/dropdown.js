function createDropDown(options, placeholder) {
    const dropDownContainer = document.createElement("div");
    const head = document.createElement("div");
    const headLabel = document.createElement("p");
    head.appendChild(headLabel);
    const optionMenu = document.createElement("div");
    const children = options.map(i => createChild(i));
    children.forEach(element => {
        optionMenu.appendChild(element);
    }); 
    dropDownContainer.appendChild(head);
    dropDownContainer.appendChild(optionMenu);
    return dropDownContainer;
}

function createChild(option) {
    const optionContainer = document.createElement("div");
    const optionLabel = document.createElement("p");
    optionLabel.textContent = option;
    option.appendChild(optionLabel);
    return optionContainer;
}