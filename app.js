const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


//text typing effect

const textElement = document.getElementById('dynamic-text');

const texts = ["Bhavana Vijay Manjulkar", "Frontend Developer", "Web Developer"];
let textIndex = 0;
let charIndex = 0;

const typing = () => {
  if (charIndex < texts[textIndex].length) {
    textElement.innerText += texts[textIndex].charAt(charIndex);
    textElement.style.width = `${textElement.offsetWidth}px`; // Adjust width
    charIndex++;
    setTimeout(typing, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

const erase = () => {
  if (charIndex > 0) {
    textElement.innerText = texts[textIndex].substring(0, charIndex - 1);
    textElement.style.width = `${textElement.offsetWidth}px`; // Adjust width
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typing, 1000);
  }
}

typing();
