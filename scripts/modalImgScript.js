/*GOV SCRIPT-------------------------------------------------*/
// Get the modal
var govModal = document.getElementById("govModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var govImg = document.getElementById("govImg");
var govModalImg = document.getElementById("govImg01");
var govCaptionText = document.getElementById("govCaption");


govImg.onclick = function(){
  govModal.style.display = "block";
  govModalImg.src = this.src;
  govCaptionText.innerHTML = "Realizamos planejamento urbano completo, com análises logísticas envolvendo população e terreno, presando por um projeto final que agrade o Estado e tenha apoio populacional positivo";
}
/*GOV SCRIPT-------------------------------------------------*/

/*IND SCRIPT-------------------------------------------------------*/ 
var indModal = document.getElementById("indModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var indImg = document.getElementById("indImg");
var indModalImg = document.getElementById("indImg01");
var indCaptionText = document.getElementById("indCaption");


indImg.onclick = function(){
  indModal.style.display = "block";
  indModalImg.src = this.src;
  indCaptionText.innerHTML = "Analisamos os arredores, evitando agressões ao meio ambiente de maneira a projetar uma fábrica verde com localização segura.";
}
/*IND SCRIPT-----------------------------------------------------*/

/*EMP SCRIPT--------------------------------------------------------------------*/

var empModal = document.getElementById("empModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var empImg = document.getElementById("empImg");
var empModalImg = document.getElementById("empImg01");
var empCaptionText = document.getElementById("empCaption");


empImg.onclick = function(){
  empModal.style.display = "block";
  empModalImg.src = this.src;
  empCaptionText.innerHTML = "Desenvolvemos projetos de expansão e integração para prédios empresariais";
}
/*EMP SCRIPT--------------------------------------------------------------------*/


/*CLOSE SCRIPT----------------------------------------------------------------*/
// Get the <span> element that closes the modal
var govSpan = document.getElementsByClassName("gov-close")[0];
var indSpan = document.getElementsByClassName("ind-close")[0];
var empSpan = document.getElementsByClassName("emp-close")[0];

// When the user clicks on <span> (x), close the modal
govSpan.onclick = function() {
  govModal.style.display = "none";
  
}

indSpan.onclick = function() {
  indModal.style.display = "none";
}

empSpan.onclick = function() {
  empModal.style.display = "none";
}

/*CLOSE SCRIPT----------------------------------------------------------------*/