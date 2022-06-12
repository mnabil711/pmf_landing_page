const xIcon= document.getElementById('x');
const barsIcon= document.getElementById('bars');
const menu= document.getElementById('nav-links');
barsIcon.addEventListener('click',() => { menu.style.right = '0px'; });
xIcon.addEventListener('click',() => {  menu.style.right = '-500px'; });

const links = document.getElementById('nav-links');
for (const link of links){
    link.addEventListener('click',function(event){
    event.preventDefault();
    const selectedLink= document.querySelector(`${link.getAttribute('href')}`);
    selectedLink.scrollIntoView( { behavior:"smooth" , block :"center"} );
});
};