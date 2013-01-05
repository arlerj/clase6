//Acelerómetro
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		var verID = null;
		$('#brujula .greenButton').tap(function(){ //Obtener posición actual
			navigator.compass.getCurrentHeading(function(h){ //No hay problemas (errores)
				pgAlert("Grados: "+h.magneticHeading, "Posición actual");
			}, comError);
		});
		
		$('#brujula .individual li').tap(function(){
			switch($(this).index()){
				
				case 0: //Comenzar actualización de brújula
					if(verID == null){
						verID = navigator.compass.watchHeading(function(h){
						$('#brujula .plastic li').eq(0).children('span').text("Grados: ");
						$('#brujula .plastic li').eq(0).children('strong').text(h.magneticHeading);
					}, comError, { frequency: 500});
					}
					break;
					
				case 1: //Detener actualización de la brújula
					if(verID){
						navigator.compass.clearWatch(verID);
						verID = null;
						$('#brujula .plastic li').eq(0).children('span').text("Apagado");
						$('#brujula .plastic li').eq(0).children('strong').text("");
					}else{
						pgAlert('La brújula está apagada', 'Brújula');
					}
			}
		});
		
		function comError(err){ //Error
			pgAlert('Error: '+err.code, 'Error');
		}
	}, false);
});