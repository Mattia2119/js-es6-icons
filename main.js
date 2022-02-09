//Array di oggetti/icons//
const icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

/*Milestone 1 
Partendo dalla struttura dati fornita, 
visualizzare in pagina un box per ogni icona,
 in cui è presente il nome dell’icona e l’icona stessa. */

/*Milestone 2 
Ciascuna icona ha una proprietà “color”: utilizzare questa
 proprietà per visualizzare le icone del colore corrispondente.*/
 
 //Creo il riferimento ad icons container//

 const container = document.getElementById("icons-container");

 //Creo una variabile stringa vuota, dove ciclare gli oggetti del mio array//

 let content = "";

 //Ciclo gli oggetti all'interno del container mediante il ciclo for each e l'interpolazione con template literals//

 icons.forEach(element => {
      content += `<div class="icon">
      <i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>
      <span>${element.name}</span>
      </div>`     
 });

 container.innerHTML = content;

/*Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
 Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.*/

 const select = document.getElementById("select-type");

 select.addEventListener("change", function() {
 
	 let selection = this.value;

	 const filtered = icons.filter( icons => {
		 if (icons.type == selection) {
			 return true;
		 }
			 return false;
	 });
 
 //DA FINIRE//
 });
