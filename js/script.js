

$(function(){
    $('.nav__items').on('click',function(){
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




var mixer = mixitup(containerEl, {
    selectors: {
        target: '.portfolio__wrapper'
    },
    animation: {
        duration: 300
    }
});