window.addEventListener('DOMContentLoaded', (e) => { console.log(e); });
if (document.readyState === 'interactive') {
	scrollUp();
}

const linksbutton = document.querySelector('#linksbtn');
linksbutton.addEventListener('click', scrollDown);

const backbutton = document.querySelector('#backbtn');
backbutton.addEventListener('click', scrollUp);

document.onkeydown = (e) => {
	if (e.key === 'ArrowDown') {
		scrollDown();
	} else if (e.key === 'ArrowUp') {
		scrollUp();
	}
};
function scrollUp () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

function scrollDown () {
	window.scrollTo({
		top: window.innerHeight,
		behavior: 'smooth'
	});
}

window.onresize = () => {
	window.location.reload();
};
