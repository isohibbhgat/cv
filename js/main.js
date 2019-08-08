// animatian scroll
$(document).ready(function () {
	$(".scroll").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html').animate({
				scrollTop: $(hash).offset().top
			}, 1500, function () {
				window.location.hash = hash;
			});
		}
	});
});


// hide & show
$(document).ready(function () {
	$(window).scroll(function () {
		$('.hideme').each(function (i) {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({
					'opacity': '1'
				}, 500);
			}
		});
	});
});


// counter years old
var date = document.querySelector('#birth'),
    attr = date.getAttribute('data-birth'),
    curr = Date.now();

var difference = curr - new Date(attr);

var years = new Date(difference).getFullYear() - 1970;

date.innerHTML = years;


//loader
var myVar;

function myFunction() {
	myVar = setTimeout(showPage, 0);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("body").style.display = "block";
}


// get year now
var d = new Date().getFullYear();
document.getElementById("year").innerHTML = d;