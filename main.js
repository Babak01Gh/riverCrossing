import addHamActivation from "./modules/hamMenu.js";
import { upDownController,setDefault} from "./modules/upDown.js";
addHamActivation()
document.querySelector('.subBtn').addEventListener('click',upDownController)

window.onload = ()=>{ 
    setDefault()
}