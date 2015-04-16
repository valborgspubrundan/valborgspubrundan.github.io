document.addEventListener('scroll', function() {
	var offset = (document.documentElement.scrollTop||document.body.scrollTop)*(-0.25)

	var els = document.getElementsByClassName('colorblock')
	Array.prototype.forEach.call(els, function(el) {
	    el.style.top = offset+"px"
	})

	console.log(document.getElementById("maintitle"))
	offset += 228
	document.getElementById("maintitle").style.top = offset+"px"
})