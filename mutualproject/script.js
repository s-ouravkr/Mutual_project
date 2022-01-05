const navslide = ()=>{
    const burger2=document.querySelector('.hamburger2');
    const closebtn=document.querySelector('.close-icon');
    const rightmenu=document.querySelector('.right-menu-list');
        
       
    
    burger2.addEventListener('click',()=>{
        burger2.classList.add('ham2view');
        rightmenu.classList.add('active');
        closebtn.classList.add('crossview');
        
    })

    closebtn.addEventListener('click',()=>{
        rightmenu.classList.remove('active');
        closebtn.classList.remove('crossview');
        burger2.classList.remove('ham2view');
    })
}

const searchbar=()=>{
    const srcbtn=document.querySelector('.search-icon');
    const fullseatrch=document.querySelector('.search');
    const closebtn=document.querySelector('.close-icon');

    srcbtn.addEventListener('click',()=>{
        fullseatrch.classList.add('show');
        srcbtn.classList.add('srciconview');
        closebtn.classList.add('crossshow');
    })

    closebtn.addEventListener('click',()=>{
        fullseatrch.classList.remove('show');
        srcbtn.classList.remove('srciconview');
        closebtn.classList.remove('crossshow');
    })
}

const allnavitemslide=()=>{
    const closebtn=document.querySelector('.close-btn'); 
    const burger1=document.querySelector('.hamburger1');
    const allnavitem=document.querySelector('.allnavitems');

    burger1.addEventListener('click',()=>{
        allnavitem.classList.add('showallitems');
        burger1.classList.add('ham1view');
        closebtn.classList.add('h1-cross');
    })
    closebtn.addEventListener('click',()=>{
        allnavitem.classList.remove('showallitems');
        burger1.classList.remove('ham1view');
        closebtn.classList.remove('h1-cross');
    })

}

navslide();
searchbar();
allnavitemslide();