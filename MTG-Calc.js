var $menuButton = $(".menu-button");
var $navPanel = $(".navigation-panel");
var $mainPanel = $(".main-menu");
var slideTime = 300;


function objectPanelAnimate(object,openOrClose)
{
	if(openOrClose)
	{
		object
			.addClass("ui-panel-open ui-panel-animate")
			.removeClass("ui-panel-close");
	}
	else 
	{
		object 
			.addClass('ui-panel-close ui-panel-animate')
			.removeClass('ui-panel-open');
	}
}

function objectBodyAnimate(openOrClose)
{
	if(openOrClose)
	{
		$("body")
			.addClass("body-open body-animate")
			.removeClass("body-close");
	}
	else 
	{
		$("body")
			.addClass("body-close body-animate")
			.removeClass("body-open");
	}
}


$menuButton.click(function(){
	$(this).toggleClass("menu-open");
	$(this).toggleClass("EXIT_ON_CLOSE");
	if($(this).hasClass("menu-open"))
	{
		objectPanelAnimate($navPanel,false);

		objectBodyAnimate(false);
	}
	else if($(this).hasClass("EXIT_ON_CLOSE"))
	{
		objectPanelAnimate($navPanel,true);

		objectBodyAnimate(true);
	}
});

$(".side-menu-button").click(function(){
	// buttonLocator.clickMethod($(this));
	var ul = $(this).closest("ul");
	if(ul.hasClass("main"))
	{
		objectPanelAnimate($("div.main-menu"),false);

		if($(this).hasClass("location-1"))
		{
			objectPanelAnimate($("ul.location-1"),true);
		}
		else if($(this).hasClass("location-2"))
		{
			objectPanelAnimate($("ul.location-2"),true);
		}
		else if($(this).hasClass("location-3"))
		{
			objectPanelAnimate($("ul.location-3"),true);
		}
		else if($(this).hasClass("location-4"))
		{
			objectPanelAnimate($("ul.location-4"),true);
		}
		else if($(this).hasClass("location-5"))
		{
			objectPanelAnimate($("ul.location-5"),true);
		}

	}
	else if(ul.hasClass("location-2"))
	{
		objectPanelAnimate(ul,false);
		if($(this).hasClass("location-2-3"))
		{
			objectPanelAnimate($("ul.location-2-3"),true);
		}
		else if($(this).hasClass("location-2-4"))
		{
			objectPanelAnimate($("ul.location-2-4"),true);
		}
		else if($(this).hasClass("location-2-5"))
		{
			objectPanelAnimate($("ul.location-2-5"),true);
		}
	}
	else if(ul.hasClass("location-3"))
	{
		objectPanelAnimate(ul,false);
		if($(this).hasClass("location-3-6"))
		{
			objectPanelAnimate($("ul.location-3-6"),true);
		}
		else if($(this).hasClass("location-3-8"))
		{
			objectPanelAnimate($("ul.location-3-8"),true);
		}

	}
	else if(ul.hasClass("location-4"))
	{
		objectPanelAnimate(ul,false);
		if($(this).hasClass("location-4-4"))
		{
			objectPanelAnimate($("ul.location-4-4"),true);
		}
		else if($(this).hasClass("location-4-8"))
		{
			objectPanelAnimate($("ul.location-4-8"),true);
		}
	}
	
});

$(".back-button").click(function(){
	if($(this).hasClass("return-main"))
	{
		objectPanelAnimate($(this).closest("ul"),false);

		objectPanelAnimate($("div.main-menu"),true);
	}
	else if($(this).hasClass("return-location-2"))
	{
		objectPanelAnimate($(this).closest("ul"),false);

		objectPanelAnimate($("ul.location-2"),true);
	}
	else if($(this).hasClass("return-location-3"))
	{
		objectPanelAnimate($(this).closest("ul"),false);

		objectPanelAnimate($("ul.location-3"),true);
	}
	else if($(this).hasClass("return-location-4"))
	{
		objectPanelAnimate($(this).closest("ul"),false);

		objectPanelAnimate($("ul.location-4"),true);
	}

});

$(".footer-promotion button").mouseenter(function(){
	$(this)
		.css("background","#000")
		.delay(100)
		.css("transition","background-color .25s ease-in-out, color .25s ease-in-out")
		.css("background","#fff")
		.css("color","#be630e");

}).mouseleave(function(){
	$(this)
		.css("transition","background-color 0s linear, color .25s ease-in-out")
		.css("color","#fff")
		.css("background","linear-gradient(#6f6f6f,#525252,#333)");
});



