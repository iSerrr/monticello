const formConacts = document.forms.contacts
formConacts.addEventListener('submit', () => {
	event.preventDefault()
	let contact = []
	if (localStorage.getItem('contact')) {
		contact = JSON.parse(localStorage.getItem('contact'))
		console.log(contact)
	}
	contact.push({
		name: formConacts.elements.name.value,
		email: formConacts.elements.email.value,
	})
	localStorage.setItem('contact', JSON.stringify(contact))
})
