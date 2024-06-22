import { createDropDown } from "./dropdown";
import { createCarousel } from "./carousel";
import './styles.css';
document.body.appendChild(createDropDown("hello world this is my dropdown".split(" "), "test menu"));
let images = ["https://i.imgur.com/zqcJZeN.png", 
                "https://i.imgur.com/xGUIZuL.png",
                "https://i.imgur.com/1QXFP13.png",
                "https://i.imgur.com/ykwmZxo.png",
                "https://i.imgur.com/QVtkFvy.png",
                "https://i.imgur.com/bCs7TNf.png",
                "https://i.imgur.com/aUotSCb.png",
                "https://i.imgur.com/yxMcbXG.png",
                "https://i.imgur.com/D4e2AcK.png",
                "https://i.imgur.com/gT9t7ZD.png",
                "https://i.imgur.com/WfWArto.png",
                "https://i.imgur.com/ySAXueI.png",
                "https://i.imgur.com/W5n1dV3.png",
                "https://i.imgur.com/U5EGQpO.png",
            ];
// images = images.map(i => "../pictures/" + i);
document.body.appendChild(createCarousel(images, images));