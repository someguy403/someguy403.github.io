const app = document.querySelector('#app');
const togglebuttonlight = document.querySelector('#light');
const togglebuttondark = document.querySelector('#dark');
const togglebutton = document.querySelector('#togglebtn');
const linksbutton = document.querySelector('#linksbtn');
const backbutton = document.querySelector('#backbtn');
const sections = document.querySelectorAll('.section');

window.addEventListener('DOMContentLoaded', (e) => {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		app.setAttribute('data-theme', 'dark');
	} else {
		app.setAttribute('data-theme', 'light');
	}
	ChangeTheme(app.dataset.theme);
	if (app.dataset.theme === 'dark') {
		togglebuttondark.style.display = 'none';
		togglebuttonlight.style.display = 'block';
	} else if (app.dataset.theme === 'light') {
		togglebuttondark.style.display = 'block';
		togglebuttonlight.style.display = 'none';
	}
});

if (document.readyState === 'interactive') {
	scrollUp();
}

linksbutton.addEventListener('click', scrollDown);
backbutton.addEventListener('click', scrollUp);

document.onkeydown = (e) => {
	if (e.key === 'ArrowDown') {
		scrollDown();
	} else if (e.key === 'ArrowUp') {
		scrollUp();
	}
};

window.onresize = function RecalibrateSectionHeight () {
	const windowheight = window.innerHeight;
	sections.forEach((section) => {
		section.style.height = windowheight;
	});
};

togglebutton.addEventListener('click', () => {
	const currentTheme = app.dataset.theme;
	if (currentTheme === 'light') {
		togglebuttondark.style.display = 'none';
		togglebuttonlight.style.display = 'block';
		app.setAttribute('data-theme', 'dark');
	} else if (currentTheme === 'dark') {
		togglebuttonlight.style.display = 'none';
		togglebuttondark.style.display = 'block';
		app.setAttribute('data-theme', 'light');
	}
	const newTheme = app.dataset.theme;
	ChangeTheme(newTheme);
});

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

//todo Theme changer
const r = document.querySelector(':root');
function ChangeTheme (theme) {
	console.log(theme);
	if (theme === 'dark') {
		r.style.setProperty('--body-bgc', '#1c1c1c');
		r.style.setProperty('--section-outline', 'white');
		r.style.setProperty('--gogsi-border', 'white');
		r.style.setProperty('--div1-bgc', 'grey');
		r.style.setProperty('--btntogglebtn-bgc', '#2b2a33');
		r.style.setProperty('--links-border', 'white');
		r.style.setProperty('--linkshover-border', 'white');
		r.style.setProperty('--linkshover-color', '#071a8c');
	} else if (theme === 'light') {
		r.style.setProperty('--body-bgc', '#a9a9a9');
		r.style.setProperty('--section-outline', 'rgba(0, 0, 0, 0.6)');
		r.style.setProperty('--gogsi-border', 'rgba(0, 0, 0, 0.4)');
		r.style.setProperty('--div1-bgc', 'rgba(240, 240, 240, 0.3)');
		r.style.setProperty('--btntogglebtn-bgc', '#6b6b6b');
		r.style.setProperty('--links-border', 'black');
		r.style.setProperty('--linkshover-border', 'rgba(35, 36, 42, 0.5)');
		r.style.setProperty('--linkshover-color', '#b1dae7');
	} else {
		console.error('Cannot Change Theme: Error!');
	}
}
