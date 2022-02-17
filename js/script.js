$(window).scroll(() => {
	let scrollCoord = $(window).scrollTop();
	if (scrollCoord >= 400) {
		$("nav.nav").css("background", "white");
		$("nav.nav .brand, nav.nav .menu a").css("color", "#FFBF85");
	} else {
		$("nav.nav").css("background", "#FFBF85");
		$("nav.nav .brand, nav.nav .menu a").css("color", "white");
	}
})

  
    //javascript for responsive navigation sidebar menu
    var menu = document.querySelector('nav.nav .menu');
    var menuBtn = document.querySelector('nav.nav .menu-btn');
    var closeBtn = document.querySelector('nav.nav .close-btn');

    menuBtn.addEventListener("click", () => {
      menu.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove('active');
    });
    
