let leadingImg = document.querySelector('.leading > img');
let body = document.querySelector('body');
let leading = document.querySelector('.leading');
let leadingTxt = document.querySelector('.leadingTxt');

// document.addEventListener('scroll', function(e){

//    let currentScroll = window.scrollY;
//    let pageHeight = body.getBoundingClientRect().height;
//    let scrollPhase = currentScroll / (pageHeight - window.innerHeight);

//    leadingImg.style.top = -leadingImg.height * scrollPhase + 'px';
// })

// window.addEventListener('scroll', function() {
    
//     // Задаем скорость скроллинга (чем меньше число, тем медленнее движение)
//     let scrollSpeed = 0.5;
    
//     // Меняем положение изображения в зависимости от прокрутки
//     const offset = -window.scrollY * scrollSpeed;
    
//     // Смещаем изображение по вертикали
//     leadingImg.style.top = offset + 'px';

//   });

window.addEventListener('scroll', function() {
    
    // Задаем скорость скроллинга (чем меньше число, тем медленнее движение)
    let scrollSpeed = 1;
    
    // Меняем положение изображения в зависимости от прокрутки
    const offset = window.scrollY * scrollSpeed;
    
    // Смещаем изображение по вертикали
    leadingTxt.style.top = offset + 'px';

    if (window.scrollY < 300) {
        leadingTxt.style.opacity = '1';
    } else {
        leadingTxt.style.opacity = '0';
    }

});

// Увеличивающееся ИЛИ
// let finalSize = 10;
// let offerTxt = document.querySelector('.offerTxt');
// let offer = document.querySelector('.offer');


// document.addEventListener('scroll', function(){
//     let offerBlock = offer.getBoundingClientRect();
//     let phase = -offerBlock.top  / (offerBlock.height * 0.5) ;


//     if (phase >= 0 && phase <= 1){
//         offerTxt.style.transform = 'scale(' + finalSize * phase + ')';     /*finalSize * phase + 'em'*/
//         offerTxt.style.top = offerBlock.height * 0.25 + (offerBlock.height * 0.5) * phase + 'px';
//     }

// });


















// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // Элемент появился в области видимости
//         leading.style.display = 'visible';
//       } else {
//         // Элемент вне видимости
//         leading.style.display = 'none';
//       }
//     });
//   }, {
//     threshold: 0 // Порог, при котором срабатывает событие (0.1 = 10% видимости)
//   });
  
//   // Запускаем наблюдение за элементом
// observer.observe(leadingImg);