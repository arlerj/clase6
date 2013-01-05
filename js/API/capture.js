//pgAlert
function pgAlert(msj,tit){ navigator.notification.alert(msj, null, tit, 'Aceptar'); }

//Captura
function deviceReady(){
	//Obteniendo taps de los botones
	$('#capturar .rounded .arrow').tap(function(){
	
		switch($(this).index()){
	
			case 0: //Grabar Audio
				navigator.device.capture.captureAudio(function(mF){
					for(i=0; i<mF.length; i++){
						pgAlert(mf[i].fullpath, "Audio");
					}
				}, errorCaptura, { limit: 2 });
				break;

			case 1: //Grabar Video
				navigator.device.capture.captureVideo(function(mF){
					for(i=0; i<mF.length; i++){
						pgAlert(mf[i].fullpath, "Vídeo");
					}
				}, errorCaptura, { limit: 2 });
				break;
	
			case 2: //Capturar Imagen
			navigator.device.capture.captureImage(function(mF){
					for(i=0; i<mF.length; i++){
						pgAlert(mf[i].fullpath, "Imagen");
					}
				}, errorCaptura, { limit: 2 });
				break;	
		}
	});
}
//Errores de captura
function errorCaptura(err){ //Error
	pgAlert('Error; '+err.code, 'Error de Captura');
}
//Dispositivo Listo
function pageReady(){
	document.addEventListener("deviceready", deviceReady, false);
}
//WebView Listo
$(document).ready(pageReady);