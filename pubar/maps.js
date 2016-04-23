var map
function initialize() {
	// KTH

	var KTHMapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(59.350, 18.070)
	}
	KTHMap = new google.maps.Map(document.getElementById('kthmap-canvas'), KTHMapOptions)

	var CLWLatlng = new google.maps.LatLng(59.347423, 18.072859)
	var CLWMarker = new google.maps.Marker({
		position: CLWLatlng,
		map: KTHMap,
		title: 'CLW'
	})
	var CLWInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">CLW</h1><div id="bodyContent"><p>Osquars Backe 8</p></div></div>'
	})
	google.maps.event.addListener(CLWMarker, 'click', function() {
		CLWInfoWindow.open(KTHMap, CLWMarker)
	})

	var fkmLatlng = new google.maps.LatLng(59.348680, 18.075179)
	var fkmMarker = new google.maps.Marker({
		position: fkmLatlng,
		map: KTHMap,
		title: 'fkm*'
	})
	var fkmInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">fkm*</h1><div id="bodyContent"><p>Teknikringen 26</p></div></div>'
	})
	google.maps.event.addListener(fkmMarker, 'click', function() {
		fkmInfoWindow.open(KTHMap, fkmMarker)
	})

	var KBMLatlng = new google.maps.LatLng(59.353912, 18.065752)
	var KBMMarker = new google.maps.Marker({
		position: KBMLatlng,
		map: KTHMap,
		title: 'KBM'
	})
	var KBMInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">KBM</h1><div id="bodyContent"><p>Brinellvägen 89</p></div></div>'
	})
	google.maps.event.addListener(KBMMarker, 'click', function() {
		KBMInfoWindow.open(KTHMap, KBMMarker)
	})

	var KFKLatlng = new google.maps.LatLng(59.348121, 18.068895)
	var KFKMarker = new google.maps.Marker({
		position: KFKLatlng,
		map: KTHMap,
		title: 'KFK'
	})
	var KFKInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">KFK</h1><div id="bodyContent"><p>Drottning Kristinas väg 29</p></div></div>'
	})
	google.maps.event.addListener(KFKMarker, 'click', function() {
		KFKInfoWindow.open(KTHMap, KFKMarker)
	})

	var KKLatlng = new google.maps.LatLng(59.349260, 18.074499)
	var KKMarker = new google.maps.Marker({
		position: KKLatlng,
		map: KTHMap,
		title: 'KK'
	})
	var KKInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">KK</h1><div id="bodyContent"><p>Teknikringen 36B</p></div></div>'
	})
	google.maps.event.addListener(KKMarker, 'click', function() {
		KKInfoWindow.open(KTHMap, KKMarker)
	})

	var DKMLatlng = new google.maps.LatLng(59.347915, 18.071477)
	var DKMMarker = new google.maps.Marker({
		position: DKMLatlng,
		map: KTHMap,
		title: 'DKM'
	})
	var DKMInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">DKM</h1><div id="bodyContent"><p>Osquars Backe 21</p></div></div>'
	})
	google.maps.event.addListener(DKMMarker, 'click', function() {
		DKMInfoWindow.open(KTHMap, DKMMarker)
	})

	var QBMLatlng = new google.maps.LatLng(59.350072, 18.069601)
	var QBMMarker = new google.maps.Marker({
		position: QBMLatlng,
		map: KTHMap,
		title: 'QBM'
	})
	var QBMInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">QBM</h1><div id="bodyContent"><p>Brinellvägen 1</p></div></div>'
	})
	google.maps.event.addListener(QBMMarker, 'click', function() {
		QBMInfoWindow.open(KTHMap, QBMMarker)
	})

	var SophiaHemmetLatlng = new google.maps.LatLng(59.346224, 18.074685)
	var SophiaHemmetMarker = new google.maps.Marker({
		position: SophiaHemmetLatlng,
		map: KTHMap,
		title: 'SophiaHemmet'
	})
	var SophiaHemmetInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">SophiaHemmet</h1><div id="bodyContent"><p>Lindstedtsvägen 8</p></div></div>'
	})
	google.maps.event.addListener(SophiaHemmetMarker, 'click', function() {
		SophiaHemmetInfoWindow.open(KTHMap, SophiaHemmetMarker)
	})

	// SU

	var SUMapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(59.364787, 18.057702)
	}
	SUMap = new google.maps.Map(document.getElementById('sumap-canvas'), SUMapOptions)

	var NFLatlng = new google.maps.LatLng(59.365350, 18.058217)
	var NFMarker = new google.maps.Marker({
		position: NFLatlng,
		map: SUMap,
		title: 'NF KM & SUS KM'
	})
	var NFInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">NF KM & SUS KM</h1><div id="bodyContent"><p>Gröna villan</p></div></div>'
	})
	google.maps.event.addListener(NFMarker, 'click', function() {
		NFInfoWindow.open(SUMap, NFMarker)
	})

	var LASLatlng = new google.maps.LatLng(59.364806, 18.054990)
	var LASMarker = new google.maps.Marker({
		position: LASLatlng,
		map: SUMap,
		title: 'LÄS KM'
	})
	var LASInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">LÄS KM</h1><div id="bodyContent"><p>Frescativägen 14B</p></div></div>'
	})
	google.maps.event.addListener(LASMarker, 'click', function() {
		LASInfoWindow.open(SUMap, LASMarker)
	})

	var SUSLatlng = new google.maps.LatLng(59.363671, 18.063027)
	var SUSMarker = new google.maps.Marker({
		position: SUSLatlng,
		map: SUMap,
		title: 'HumF'
	})
	var SUSInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">HumF</h1><div id="bodyContent"><p>Gula villan</p></div></div>'
	})
	google.maps.event.addListener(SUSMarker, 'click', function() {
		SUSInfoWindow.open(SUMap, SUSMarker)
	})

	var JFLatlng = new google.maps.LatLng(59.364366, 18.055672)
	var JFMarker = new google.maps.Marker({
		position: JFLatlng,
		map: SUMap,
		title: 'JF KM'
	})
	var JFInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">JF KM</h1><div id="bodyContent"><p>Gula villan</p></div></div>'
	})
	google.maps.event.addListener(JFMarker, 'click', function() {
		JFInfoWindow.open(SUMap, JFMarker)
	})

	// KISTA

	var KistaMapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(59.404974, 17.945768)
	}
	KistaMap = new google.maps.Map(document.getElementById('kistamap-canvas'), KistaMapOptions)

	var DiskLatlng = new google.maps.LatLng(59.407521, 17.945904)
	var DiskMarker = new google.maps.Marker({
		position: DiskLatlng,
		map: KistaMap,
		title: 'Disk'
	})
	var DiskInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Disk</h1><div id="bodyContent"><p>Borgarfjordsgatan 6C</p></div></div>'
	})
	google.maps.event.addListener(DiskMarker, 'click', function() {
		DiskInfoWindow.open(KistaMap, DiskMarker)
	})

	var QmiskLatlng = new google.maps.LatLng(59.404563, 17.950229)
	var QmiskMarker = new google.maps.Marker({
		position: QmiskLatlng,
		map: KistaMap,
		title: 'Qmisk &amp; TMEIT'
	})
	var QmiskInfoWindow = new google.maps.InfoWindow({
		content: '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Qmisk &amp; TMEIT</h1><div id="bodyContent"><p>Kistagången 16</p></div></div>'
	})
	google.maps.event.addListener(QmiskMarker, 'click', function() {
		QmiskInfoWindow.open(KistaMap, QmiskMarker)
	})
}

google.maps.event.addDomListener(window, 'load', initialize)
