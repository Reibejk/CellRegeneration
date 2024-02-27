
function change(over) {
	var over = document.getElementsByClassName("overlay");
	for(var pixel of over.values())
		pixel.getRed() = pixel.setRed(255);
}