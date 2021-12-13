// Développé par: Beatriz Fortes //



//Calcul hypotheque
	var montantEmprunter = 0;
	var termeMois = 0;
	var tauxAnnuel = 0;
	var tauxMensuel = 0;
	var paiementMensuel = 0;
	var paiementAnnuel = 0;
 

 
var $ = function (id) 
{
		return  document.getElementById(id);

}
//function avec les infos du terme et montant
function calculerMontant(){
	
    montantEmprunter = parseFloat($('montantInput').value);   
    termeMois = parseFloat($('termeInput').value)*12;
    
	if (termeMois < 60){
		tauxAnnuel = 0.15;
	}
	
	else if (termeMois <=120){
		tauxAnnuel = 0.25;
	}
	
	else {
		tauxAnnuel = 0.35;
	}


	if($("montantInput").value.length == 0)
	{
		alert("Attention! Ecrivez le montant.");
	}
	
	if($("termeInput").value.length == 0)
	{
		alert("Attention! Ecrivez le terme.");
	}
 
	$("tauxInput").value = tauxAnnuel;
	$("tauxInput").style.backgroundColor =  "#FFFACD";
 
    calculerPaiement();
} 

 
// function pour calculer le montant à returner 
function calculerPaiement() {
	
    tauxMensuel = tauxAnnuel / 1200;    
    paiementMensuel = ((montantEmprunter * tauxMensuel) / (1 - (Math.pow((1 + tauxMensuel), termeMois* -1))));    
	paiementAnnuel = paiementMensuel * 12;	

	afficherPaiement();   
    
}

// affichage du montant à returner
function afficherPaiement() {
	
	$("moisInputId").value = (paiementMensuel.toFixed(2));
	$("AnneeInputId").value = (paiementAnnuel.toFixed(2));

}

function effacer_Click(){
	
	$("formId").reset();


		alert( "Le formulaire est vide!"   );

};