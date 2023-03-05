const addHamActivation = ()=>{
    const hamMenu = document.querySelector('.hamMenu');
    const sideBar = document.querySelector('.sideBar');

    hamMenu.addEventListener('click',()=>{
        sideBar.classList.toggle('active');
        hamMenu.classList.toggle('active');
})
}
export default addHamActivation