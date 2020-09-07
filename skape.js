/*jslint plusplus: true, evil: true*/
/*global console, alert, prompt*/
var nextSlide, prevSlide, theChecker, removeAllActive;
var beforeSlide, afterSlide, theChecker2, removeAllActive2;

var sliderWords = Array.from(document.querySelectorAll('.testimonials .slider2')),
    sliderImg = Array.from(document.querySelectorAll('.cases .slider')),
    sliderCount = sliderWords.length,
    sliderCount2 = sliderImg.length,
    currentSlide = 1,
    currentSlide2 = 1;

var nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev'),
    afterButton = document.getElementById('after'),
    beforeButton = document.getElementById('before');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

afterButton.onclick = afterSlide;
beforeButton.onclick = beforeSlide;

theChecker();
theChecker2();

function nextSlide() {
    'use strict';
    if (nextButton.classList.contains('disable')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function afterSlide() {
    'use strict';
    if (afterButton.classList.contains('disable')) {
        return false;
    } else {
        currentSlide2++;
        theChecker2();
    }
}

function prevSlide() {
    'use strict';
    if (prevButton.classList.contains('disable')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function beforeSlide() {
    'use strict';
    if (beforeButton.classList.contains('disable')) {
        return false;
    } else {
        currentSlide2--;
        theChecker2();
    }
}

function theChecker() {
    'use strict';
    
    // add the counter of the image
    document.getElementById('number').textContent = currentSlide + ' / ' + sliderCount;
    
    // remove all active classes
    removeAllActive();
    
    // set active class on the current paragraph
    sliderWords[currentSlide - 1].classList.add('active');
    
    if (currentSlide === 1) {
        prevButton.classList.add('disable');
        prevButton.classList.remove('click');
    } else {
        prevButton.classList.remove('disable');
        prevButton.classList.add('click');
    }
    
    if (currentSlide === sliderCount) {
        nextButton.classList.add('disable');
        nextButton.classList.remove('click');
    } else {
        nextButton.classList.remove('disable');
        nextButton.classList.add('click');
    }
}

function theChecker2() {
    'use strict';
    document.getElementById('num').textContent = currentSlide2 + ' / ' + sliderCount2;
    
    removeAllActive2(currentSlide2);
    
    sliderImg[currentSlide2 - 1].classList.add('active');
    
    if (currentSlide2 === 1) {
        beforeButton.classList.add('disable');
        beforeButton.classList.remove('click');
    } else {
        beforeButton.classList.remove('disable');
        beforeButton.classList.add('click');
    }
    
    if (currentSlide2 === sliderCount) {
        afterButton.classList.add('disable');
        afterButton.classList.remove('click');
    } else {
        afterButton.classList.remove('disable');
        afterButton.classList.add('click');
    }
    
}

function removeAllActive() {
    'use strict';
    
    // loop through words
    sliderWords.forEach(function (word) {
        word.classList.remove('active');
    });
}

function removeAllActive2(testScr) {
    'use strict';
    sliderImg.forEach(function (img) {
        img.classList.remove('active');
    });
    if (testScr > 1) {
        document.getElementById('scrollSlide1').classList.add('plusScroll');
    } else {
        document.getElementById('scrollSlide1').classList.remove('plusScroll');
    }
}

var digital = document.getElementById('digital'),
    digitalPar = document.getElementById('digital-par'),
    digitalButton = document.getElementById('digital-button');

function digitalBackInDown() {
    'use strict';
    digital.classList.add('animate__animated');
    digital.classList.add('animate__fadeInUp');
    digital.classList.remove('displayNone');
}

function digitalParBackInDown() {
    'use strict';
    digitalPar.classList.add('animate__animated');
    digitalPar.classList.add('animate__fadeInUp');
    digitalPar.classList.remove('displayNone');
}

function digitalButtonBackInDown() {
    'use strict';
    digitalButton.classList.add('animate__animated');
    digitalButton.classList.add('animate__fadeInUp');
    digitalButton.classList.remove('displayNone');
}

window.onload = setTimeout(digitalBackInDown, 0);

window.onload = setTimeout(digitalParBackInDown, 500);

window.onload = setTimeout(digitalButtonBackInDown, 1000);

window.onscroll = function () {
    'use strict';
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 230) {
        
        setTimeout(function () {
            document.getElementById('services').classList.add('animate__animated');
            document.getElementById('services').classList.add('animate__fadeInUp');
            document.getElementById('services').classList.remove('visibilty');
        }, 0);
        
        setTimeout(function () {
            document.getElementById('services-par').classList.add('animate__animated');
            document.getElementById('services-par').classList.add('animate__fadeInUp');
            document.getElementById('services-par').classList.remove('visibilty');
        }, 500);
        
    }
    
    if (window.pageYOffset >= 245) {
        console.log(window.pageYOffset);
        setTimeout(function () {
            document.getElementById('one').classList.add('animate__animated');
            document.getElementById('one').classList.add('animate__fadeInLeft');
            document.getElementById('one').classList.remove('visibilty');
        }, 1500);
        
        setTimeout(function () {
            document.getElementById('two').classList.add('animate__animated');
            document.getElementById('two').classList.add('animate__fadeInLeft');
            document.getElementById('two').classList.remove('visibilty');
        }, 1000);
        
        setTimeout(function () {
            document.getElementById('three').classList.add('animate__animated');
            document.getElementById('three').classList.add('animate__fadeInLeft');
            document.getElementById('three').classList.remove('visibilty');
        }, 500);
        
        setTimeout(function () {
            document.getElementById('four').classList.add('animate__animated');
            document.getElementById('four').classList.add('animate__fadeInLeft');
            document.getElementById('four').classList.remove('visibilty');
        }, 0);
        
    }
    
    if (window.pageYOffset >= 908) {
        document.getElementById('visi1').classList.add('animate__animated');
        document.getElementById('visi1').classList.add('animate__fadeIn');
        document.getElementById('visi1').classList.remove('visi');
        
        document.getElementById('visi2').classList.add('animate__animated');
        document.getElementById('visi2').classList.add('animate__fadeIn');
        document.getElementById('visi2').classList.remove('visi');
    }
    
    if (window.pageYOffset >= 1200) {
        document.getElementById('plus').classList.add('animate__animated');
        document.getElementById('plus').classList.add('animate__fadeInLeft');
        document.getElementById('plus').classList.remove('plusScroll');
        
        document.getElementById('titl').classList.add('animate__animated');
        document.getElementById('titl').classList.add('animate__fadeIn');
        document.getElementById('titl').classList.remove('plusScroll');
        
        document.getElementById('scrollSlide1').classList.add('animate__animated');
        document.getElementById('scrollSlide1').classList.add('animate__fadeIn');
        document.getElementById('scrollSlide1').classList.remove('plusScroll');

        document.getElementById('scrollSliderControl').classList.add('animate__animated');
        document.getElementById('scrollSliderControl').classList.add('animate__fadeIn');
        document.getElementById('scrollSliderControl').classList.remove('plusScroll');
    }
    
    if (window.pageYOffset >= 2000) {
        document.getElementById('hide').classList.add('animate__animated');
        document.getElementById('hide').classList.add('animate__fadeIn');
        document.getElementById('hide').classList.remove('hide');
    }
    
    if (window.pageYOffset >= 2555) {
        setTimeout(function () {
            document.getElementById('titleS').classList.add('animate__animated');
            document.getElementById('titleS').classList.add('animate__fadeIn');
            document.getElementById('titleS').classList.remove('visib');
        }, 0);
        
        setTimeout(function () {
            document.getElementById('ulScroll').classList.add('animate__animated');
            document.getElementById('ulScroll').classList.add('animate__fadeIn');
            document.getElementById('ulScroll').classList.remove('visib');
        }, 300);
        
        setTimeout(function () {
            document.getElementById('imgSc').classList.add('animate__animated');
            document.getElementById('imgSc').classList.add('animate__fadeIn');
            document.getElementById('imgSc').classList.remove('visib');
        }, 600);
    }
    
    if (window.pageYOffset >= 2812) {
        setTimeout(function () {
            document.getElementById('para0').classList.add('animate__animated');
            document.getElementById('para0').classList.add('animate__fadeIn');
            document.getElementById('para0').classList.remove('visib');
        }, 0);
        
        setTimeout(function () {
            document.getElementById('para1').classList.add('animate__animated');
            document.getElementById('para1').classList.add('animate__fadeIn');
            document.getElementById('para1').classList.remove('visib');
        }, 500);
        
        setTimeout(function () {
            document.getElementById('para2').classList.add('animate__animated');
            document.getElementById('para2').classList.add('animate__fadeIn');
            document.getElementById('para2').classList.remove('visib');
        }, 1000);
    }
    
    if (window.pageYOffset >= 3414) {
        setTimeout(function () {
            document.getElementById('first').classList.add('animate__animated');
            document.getElementById('first').classList.add('animate__fadeIn');
            document.getElementById('first').classList.remove('visib');
        }, 0);
        
        setTimeout(function () {
            document.getElementById('second').classList.add('animate__animated');
            document.getElementById('second').classList.add('animate__fadeIn');
            document.getElementById('second').classList.remove('visib');
        }, 500);
        
        setTimeout(function () {
            document.getElementById('third').classList.add('animate__animated');
            document.getElementById('third').classList.add('animate__fadeIn');
            document.getElementById('third').classList.remove('visib');
        }, 1000);
    }
};


