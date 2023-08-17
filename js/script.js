

$(function(){
    $('.nav__items').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
});
$(function(){
    $('.portfolio__mixitup__button').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
});
// tayping animation==================


$(function(){
    $('.nav__toggler').on('click',function(){
        $('.aside').toggleClass('active')
    });
});
// const styleSwitcherToggle = document.querySelector(".nav__toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".aside").classList.toggle("active");
// });

// acrol top =================
 $(function(){
	$('.send__up__switch').on('click',function(){
		$("body,html").animate({scrollTop:0},1500)
	})

	$(window).scroll(function(){
		let scroll = $(this).scrollTop()
		if(scroll > 300){
			$(".send__up__switch").fadeIn(500)
		}else{
			$(".send__up__switch").fadeOut(500)
		}
		if(scroll > 60){
			$(".navbar").addClass("fixed")
		}else{
			$(".navbar").removeClass("fixed")
		}
	})
 })





$(function(){
	$(".typed").typed({
		strings: ["Web Designers.","Web Developers.",  ],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: Infinity,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// mixitup===================
// $(document).ready(function(){
//     var mixer = mixitup('.portfolio__wrapper');
// });




$(function(){
    var mixer = mixitup('.portfolio__item__wrapper');
});


// contact from js ====================
let name__fild = document.querySelector(".name__fild")
let email = document.querySelector(".email")
let subject = document.querySelector(".subject")
let contact__form__messages = document.querySelector(".contact__form__messages")

let name__err = document.querySelector(".name__err")
let email__err = document.querySelector(".email__err")
let subject__err = document.querySelector(".subject__err")
let Messages__err = document.querySelector(".Messages__err")
let valid_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

let contact__button = document.querySelector(".contact__button")


contact__button.addEventListener("click",function(){
    if(name__fild.value == ""){
        name__err.innerHTML = "taype your name"
        name__fild.style.border = "1px solid red"
    }else{
		name__err.innerHTML = ""
        name__fild.style.border = ""
    }
    if(email.value == ""){
		email__err.innerHTML = "taype your email"
		email.style.border = "1px solid red"
    }else{
        if(email.value.match(valid_email)){
            email__err.innerHTML = ""
        }else{
            email__err.innerHTML = "taype your valid email"
        }
    }
	if(subject.value == ""){
        subject__err.innerHTML = "enter your subject"
        subject.style.border = "1px solid red"
    }else{
		subject__err.innerHTML = ""
        subject.style.border = ""
    }
	if(contact__form__messages.value == ""){
        Messages__err.innerHTML = "describe your requirements"
        contact__form__messages.style.border = "1px solid red"
    }else{
		Messages__err.innerHTML = ""
        contact__form__messages.style.border = ""
    }
});