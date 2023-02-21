//navbar
const toggleBtn = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    navLinks.classList.toggle("active");
})





//elements of slider

const carouselTrack = document.querySelector(".carousel__track");
const slides = Array.from(carouselTrack.children);

const prevBtn = document.querySelector(".carousel__button--left");
const nextBtn = document.querySelector(".carousel__button--right");

const carouselNav = document.querySelector(".carousel__nav");
const dots = Array.from(carouselNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;



const setSlidePos = (element, index)=>{
    element.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePos);


const moveToSlide = (currentSlide, nextSlide, track)=>{
    track.style.transform = "translateX(-" + nextSlide.style.left+")";

    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const targetIndex = slides.findIndex(slide => slide === nextSlide);

    dots[currentIndex].classList.remove("current_slide");
    dots[targetIndex].classList.add("current_slide");

    currentSlide.classList.remove("current_slide");
    nextSlide.classList.add("current_slide");    
}


nextBtn.addEventListener("click", e =>{

    const currentSlide = carouselTrack.querySelector(".current_slide");
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(currentSlide, nextSlide, carouselTrack);
})


prevBtn.addEventListener("click", e =>{

    const currentSlide = carouselTrack.querySelector(".current_slide");
    const prevSlide = currentSlide.previousElementSibling;
    
    moveToSlide(currentSlide, prevSlide, carouselTrack);
})



carouselNav.addEventListener("click",e=>{
    const targetDot = e.target.closest("button");

    if(!targetDot) return; 

    const currentSlide = carouselTrack.querySelector(".current_slide");
    const currentDot = carouselNav.querySelector(".current_slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(currentSlide,targetSlide,carouselTrack);
    
    currentDot.classList.remove("current_slide");
    dots[targetIndex].classList.add("current_slide");
})

window.addEventListener("resize", ()=>{
    slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach(setSlidePos);
    const currentSlide = carouselTrack.querySelector(".current_slide");

    moveToSlide(currentSlide, currentSlide, carouselTrack);
})


//grid 



