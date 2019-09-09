//Service Worker

if('serviceWorker' in navigator){
	console.log('pueder usar los serviceWorker en tu navegaor');

	navigator.serviceWorker.register('./sw.js')
						.then(res=> console.log('serviceWorker cargado correctamente', res))
						.catch(err => console.log('serviceWorker no se ha posido registrar', err));

}
else{
	console.log('no puedes');
}

//Scroll suavizado
$(document).ready(function(){

	$("#menu a").click(function(e){
		e.preventDefault();


		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top
		});

		return false;
	})

});