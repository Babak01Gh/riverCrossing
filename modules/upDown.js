const upSide = document.querySelector('.leftSide');
const downSide = document.querySelector('.rightSide');
const People = {
    'Police':upSide.children[1],
    'Boy1':upSide.children[2],
    'Boy2':upSide.children[3],
    'Father':upSide.children[4],
    'Girl1':upSide.children[5],
    'Girl2':upSide.children[6],
    'Mother':upSide.children[7],
    'Robber':upSide.children[8]
}
const river = document.querySelector('.river');
class PeopleRadioClass {
    constructor(radios){
        this.radios = radios
    }
}
const upDownControllerList = new PeopleRadioClass(document.querySelectorAll(`.sideBar div[class$='Radio']`));

// Functions

const upDownSetter = (upDownControllerList)=>{
    upDownControllerList.radios.forEach(el=>{
    const checked = el.children[1].checked?el.children[1]:el.children[2];
    if (checked.value === '1'){
        if(el.children[0].textContent === 'Boat'){
            river.style.alignItems = "flex-end";
        }
        else{
            downSide.appendChild(People[el.children[0].textContent])
        }
    }
    else{
        if(el.children[0].textContent === 'Boat'){
            river.style.alignItems = "flex-start";
        }
        else{
            upSide.appendChild(People[el.children[0].textContent])
        }
    }
})
}
const upDownController = ()=>{
    upDownSetter(upDownControllerList)
}
const setDefault = ()=>{
    upDownControllerList.radios.forEach(el=>{
        el.children[1].checked = true
    })
}

export {upDownController,setDefault}