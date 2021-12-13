/* Objectif : document CSS pour la page des infos de client */
/* Développé par: Beatriz Fortes */
/* Script Date: 04 september, 2021 */


var $ = function (id) 
{
		return  document.getElementById(id);

}

function validerInfos(){ 
	
	var nom = $("nomid").value;
	var pnom = $("pnomid").value;
	var courriel = $("courrielid").value;
	var adresse = $("adresseid").value;
	var dateN = $("dateNid").value;
	
$("formInscription").innerHTML = ("Merci " + pnom + " " + nom + ", vous êtes enregistrer!");

	if($("nomid").value.length == 0)
	{
		alert("Attention! Ecrivez le nom.");
	}
	if($("pnomid").value.length == 0)
	{
		alert("Attention! Ecrivez le Prénom.");
	}
		if($("courrielid").value.length == 0)
	{
		alert("Attention! Ecrivez le courriel.");
	}
		if($("adresseid").value.length == 0)
	{
		alert("Attention! Ecrivez l'adresse.");
	}
		if($("dateNid").value.length == 0)
	{
		alert("Attention! Ecrivez la date de naissance.");
	}
	



}




function effacer_Click(){
	
 $("formInscription").reset();


alert( "Le formulaire est vide!"   );

}


