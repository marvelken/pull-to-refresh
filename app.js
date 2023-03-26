const pullToRefresh = document.querySelector(".pull-to-refresh");
const color = document.getElementById("color")
let touchstartY = 0;

let colors=['red', 'blue', 'green', 'orange', 'black' ]
window.addEventListener("load", function() {
	setTimeout(function() {
	   color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];;
	}, 100); 
 });



document.addEventListener("touchstart", (e) => {
	touchstartY = e.touches[0].clientY;
});

document.addEventListener("touchmove", (e) => {
	const touchY = e.touches[0].clientY;
	const touchDiff = touchY - touchstartY;
	if (touchDiff > 0 && window.scrollY === 0) {
		pullToRefresh.classList.add("visible");
		e.preventDefault();
	}
});

document.addEventListener("touchend", refresh=(e) => {
	if (pullToRefresh.classList.contains("visible")) {
		pullToRefresh.classList.remove("visible");
		location.reload();
	}
});

