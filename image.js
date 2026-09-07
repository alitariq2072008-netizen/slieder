let images=[
'1tamara2-solar-system-8735257_1920.jpg',
'mark-koch-KiRlN3jjVNU-unsplash (1).jpg',
'pietro-de-grandi-T7K4aEPoGGk-unsplash (1).jpg',
'alex-safareli-BZWotuyLnMI-unsplash.jpg',
'drivar-sports-car-4815234.jpg',
];

let currentImage = 0;


let image=document.querySelector('.image');

let rightButton=document.querySelector('.right');
let leftButton=document.querySelector('.left')


rightButton.addEventListener('click',function(){
   currentImage++;

    if (currentImage === images.length) {
        currentImage = 0;
    }

    image.src = images[currentImage];
});


leftButton.addEventListener('click',function(){
   currentImage--;
    if(currentImage<0){
       currentImage=images.length-1;
       
    }
    image.src=images[currentImage];
    
})





