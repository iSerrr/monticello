const masonryRender = () => {
	const gallery = $('.gallery__content')
	const galleryWidth = +gallery.css('width').slice(0, gallery.css('width').length - 2)
	$(gallery).children().removeClass('grid-item--gigante')
	gallery.masonry({
		itemSelector: '.grid-item',
		columnWidth: galleryWidth / 4,
		transitionDuration: '0.8s',
	})
}
$(document).ready(masonryRender)
window.addEventListener('resize', masonryRender)
