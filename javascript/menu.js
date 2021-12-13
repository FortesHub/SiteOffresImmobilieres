var maintenant = new Date();
var jours = new Array('Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi');
var date = ((maintenant.getDate()<10) ? "0" : "")+ maintenant.getDate();

if(maintenant.getMinutes()<10){ 
  addZero = "0"; 
} else {
  addZero = ""; 
  }

function fourdigits(number)  {
	return (number < 1000) ? number + 1900 : number;
								}
aujourdhui =  jours[maintenant.getDay()] + ", " +
         date + "/" +
		 [maintenant.getMonth() + 1] + "/" +
         (fourdigits(maintenant.getYear()))  + " - " +
		[maintenant.getHours()] + ":" +
		[addZero + maintenant.getMinutes()];

    document.write(aujourdhui);