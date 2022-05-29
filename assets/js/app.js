const divImgChild = document.querySelectorAll(".divImg > div");
const divArticleChild = document.querySelectorAll(".divArticle > article");
const starterArticle = divArticleChild[1];
const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");
var aLenght = divImgChild.length
i=1;

starterArticle.style.display = "block";

//right button
rightButton.addEventListener("click", ()=>{
    divImgChild.forEach(e => {
        e.classList.remove("prec");
        e.classList.remove("active");
        e.classList.remove("next");
    });
    divArticleChild.forEach(el=>{
        el.style.display = "none";
    })
    if (i>=0 && i<=aLenght-2) {       
    i++;
    divImgChild[i-1].classList.add("prec");
    divImgChild[i].classList.add("active");
        if (i<aLenght-1) {
        divImgChild[i+1].classList.add("next");    
        }else{
        divImgChild[0].classList.add("next");    
        }
    divArticleChild[i].style.display = "block";        
    }else if (i >= aLenght-1) {
    i=0;    
    divImgChild[aLenght-1].classList.add("prec");
    divImgChild[i].classList.add("active");
    divImgChild[i+1].classList.add("next");   
    divArticleChild[i].style.display = "block"; 
    }
})

//leftButton
leftButton.addEventListener("click", ()=>{
    divImgChild.forEach(e =>{
        e.classList.remove("prec");
        e.classList.remove("active");
        e.classList.remove("next");    
    })
    divArticleChild.forEach(el=>{
        el.style.display = "none";
    })
    if (i<1) {
        i=aLenght-1;
        divImgChild[i-1].classList.add("prec");
        divImgChild[i].classList.add("active");
        divImgChild[0].classList.add("next");
        divArticleChild[i].style.display = "block"; 
    }else if (i>=1) {
        i=i-1;
        console.log(i);
        if (i<1) {
            divImgChild[aLenght-1].classList.add("prec");
        }else{
            divImgChild[i-1].classList.add("prec");
        }
        divImgChild[i].classList.add("active");
        divImgChild[i+1].classList.add("next");
        divArticleChild[i].style.display = "block";
    }
})