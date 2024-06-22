function createCarousel(images, alt) {
    //init containers and carousel scope variables
    let currImg = 0;
    const carousel = document.createElement("div");
    const dotContainer = document.createElement("div");
    const arrowLeftContainer = document.createElement("div");
    const arrowRightContainer = document.createElement("div");
    const imageContainer = document.createElement("div");
    const carouselImageContainer = document.createElement("div");

    //init images, expects list of src strings
    images = images = images.map((i, j) => {
        let img = document.createElement("img");
        img.src = i;
        img.alt = alt[j];
        img.classList.add("carousel-img");
        if (j !== 0)
            img.style.transform = `translateX(${j * -100 + 100}%)`;
        else 
            img.style.transform = `translateX(${0}%)`;
        carouselImageContainer.appendChild(img);
        return img;
    });

    //init children of containers
    imageContainer.appendChild(carouselImageContainer);
    createArrow(arrowLeftContainer, "left");
    createArrow(arrowRightContainer, "right");
    images.map(i => {
        const dot = document.createElement("span");
        dot.classList.add("carousel-dot");
        dotContainer.appendChild(dot);
    });
    dotContainer.children[currImg].classList.add("active");
    [].slice.call(arrowRightContainer.children).forEach(i => {
        i.classList.toggle("active");
    });
    arrowLeftContainer.addEventListener("click", () => {
    dotContainer.children[currImg].classList.toggle("active");
    let prev = prevImg(currImg, images, carouselImageContainer);
    prev.classList.add("active");
    currImg = images.indexOf(prev);
    dotContainer.children[currImg].classList.toggle("active");
        
    });
    arrowRightContainer.addEventListener("click", () => {
        dotContainer.children[currImg].classList.toggle("active");
            let next = nextImg(currImg, images,  carouselImageContainer);
            currImg = images.indexOf(next);
            dotContainer.children[currImg].classList.toggle("active");
    });
    imageContainer.appendChild(dotContainer);

    //add containers to carousel element
    carousel.appendChild(arrowLeftContainer);
    carousel.appendChild(imageContainer);
    carousel.appendChild(arrowRightContainer);

    //styling
    imageContainer.classList.add("img-container");
    carouselImageContainer.classList.add("carousel-img-container");
    carousel.classList.add("carousel-container");
    arrowLeftContainer.classList.add("arrow-left-container");
    arrowRightContainer.classList.add("arrow-right-container");
    dotContainer.classList.add("dot-container");

    return carousel;
}

function createArrow(container, dir) {
    const arrowTop = document.createElement("span");
    if (dir === "left"){
        arrowTop.classList.add("arrow-left-car");
    } else {
        arrowTop.classList.add("arrow-right-car");
    }
    container.appendChild(arrowTop);
}

//1. both images must transition in parallel
//2. the next img MUST stay in place after the previous img is removed
//3. the previous img MUST be removed from the DOM
function nextImg(currImg, images, imageContainer) {
    const nextIndex = (currImg + 1) % images.length;
    if (currImg === images.length - 1) {
        for (let i = images.length - 1; i >= 0; i--) {
            if (i !== 0)
                images[i].style.transform = `translateX(${(images.indexOf(images[i]) - 1) * -100}%)`;
            else 
                images[i].style.transform = "translateX(0)";
        }
        return images[nextIndex];
    }
    images[currImg].style.transform = `translateX(${(images.indexOf(images[currImg]) + 1) * -100}%)`;
    images[nextIndex].style.transform = `translateX(${nextIndex * -100}%)`;
    return images[nextIndex];
}

function prevImg(currImg, images, imageContainer) {
    const prevIndex = currImg - 1 >= 0 ? currImg - 1 : images.length - 1;
    console.log(prevIndex);
    if (currImg === 0) {
        for (let i = 0; i < images.length; i++) {
            if (i !== images.length - 1)
                images[i].style.transform = `translateX(${(images.indexOf(images[i]) + 1) * -100}%)`;
            else 
                images[i].style.transform = `translateX(${prevIndex * -100}%)`;
        }
        return images[prevIndex];
    }
    images[currImg].style.transform = `translateX(${(images.indexOf(images[currImg]) - 1) * -100}%)`;
    images[prevIndex].style.transform = `translateX(${prevIndex * -100}%)`;
    return images[prevIndex];
}

export {createCarousel};