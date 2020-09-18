function initMap() {
	let centerPosition = { lat: 40.6576, lng: -73.8855 }
	if (document.documentElement.clientWidth < 768) centerPosition = { lat: 40.682119, lng: -73.899277 }
	let map = new google.maps.Map(document.querySelector('.map__conteiner'), {
		mapId: '43c435e5b15c6619',
		zoom: 13,
		center: centerPosition,
		disableDefaultUI: true,
	})
	let markerImage = {
		url: './assets/img/contacts/marker-map.png',
		anchor: new google.maps.Point(54, 54),
	}
	let marker = new google.maps.Marker({
		position: { lat: 40.682119, lng: -73.899277 },
		map: map,
		icon: markerImage,
	})
}
