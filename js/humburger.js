const humburger = document.querySelector('.hamburger')
const header = document.querySelector('.header')
const mainMenu = document.querySelector('.mainMenu')
const headerNavBarHeight = document.querySelector('.header__navBar').offsetHeight
const headerHeight =
	document.querySelector('header').offsetHeight - headerNavBarHeight - $('.header__navBar').offset().top

const tarnsitionToggle = () => {
	mainMenu.classList.toggle('transition')
}

const humburgerToggle = () => {
	humburger.classList.toggle('is-active')
	tarnsitionToggle()
	mainMenu.classList.toggle('active')
	let timerId = setTimeout(tarnsitionToggle, 500)
	document.querySelectorAll('.mainMenu__link').forEach((element) => {
		element.classList.remove('active')
	})
	event.target.classList.add('active')
}

humburger.addEventListener('click', humburgerToggle)

header.addEventListener('click', () => {
	if (event.target.tagName === 'A') {
		if (event.target.parentNode.tagName === 'LI') humburgerToggle()

		event.preventDefault()
		let id = $(event.target).attr('href')
		let axeY = $(id).offset().top - headerNavBarHeight
		console.log(axeY)
		$('html').animate({ scrollTop: axeY }, 1500)
	}
})

window.addEventListener('scroll', () => {
	pageYOffset >= headerHeight
		? document.querySelector('.header__navBar').classList.add('fix')
		: document.querySelector('.header__navBar').classList.remove('fix')
})

console.log(navigator)
