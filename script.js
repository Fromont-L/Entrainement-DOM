console.log("Entraînement pour exploiter le DOM en JavaScript")

console.log("Méthode n°1 pour récupérer le HTML de la première balise <li>");
const li1 = document.body.getElementsByTagName("li")[0];
console.log(li1);

console.log("Méthode n°2 pour récupérer le HTML de la première balise <li>");
console.log(document.body.querySelectorAll("li")[0]);


console.log("Méthode n°3 pour récupérer le HTML de la première balise <li>");
console.log(document.body.firstElementChild.children[2].firstElementChild.firstElementChild);

console.log("Méthode pour récupérer le HTML de la dernière balise <li>");
console.log(document.body.children[0].children[2].children[0].lastElementChild);

console.log("Méthode pour récupérer le nombre de <li>");
console.log(document.body.querySelectorAll("li").length);

console.log("Méthode pour récupérer le HTML de la troisième balise <li>");
console.log(document.body.getElementsByTagName("li")[2]);

console.log("Méthode pour récupérer le parent de <ul>");
console.log(document.body.querySelector("ul").parentNode);

console.log("Méthode pour faire le même truc qu'avant mais c'est pas pareil");
console.log(document.body.querySelectorAll("li")[3].parentNode);

console.log("Méthode pour faire changer la couleur du texte lors du passage de la souris");
let d1 = document.querySelector('ul');
d1.addEventListener('mouseover', function(){this.style.color ='#FA8072'});
d1.addEventListener('mouseout', function(){this.style.color ='black'});
console.log(d1);