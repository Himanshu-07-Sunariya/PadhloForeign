// navbar functions

// ids ka use yaha element extract krne k liye 
const menutoggle=document.getElementById('menutoggle');
const navlinks=document.getElementById('navlinks');

menutoggle.addEventListener('click',()=>{
    // toggle k use ye h ki agr show class hogi to remove krega agr nahi hogi to add krega
    navlinks.classList.toggle('show');
});


// slideshow
let slideIdx=0;

showSlides();

function showSlides(){
    let slides = document.getElementsByClassName("slide");
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIdx++;
    if (slideIdx > slides.length) { slideIdx = 1; }

    // jisko dikhana h use display block krenge
    slides[slideIdx-1].style.display="block";
    setTimeout(showSlides,3000);
}


// // prev next button wala kaam
// function changeSlide(n) {
//     slideIdx += n - 1;
//     showSlides();
// }