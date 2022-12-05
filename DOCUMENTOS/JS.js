cargaPro()
pagina_1()

/*__________________________________________*/	
function cargaPro(){
let url ="https://script.google.com/macros/s/AKfycbwxRMt7ioudXWfbCi37lm4HT0y8pn9r1jFTveLhU_NOG0u4TICIEqYwlMI1J-33MLo/exec";
fetch(url)
.then( response => response.json() )
.then( data => mostrarData(data) )
.catch( error => console.log(error) )
const mostrarData = (data) => {
localStorage.setItem('libreia-icon-1', JSON.stringify(data))	
}
}
/*__________________________________________*/	






function copy(id) {
var content = document.getElementById(id);
if (id==id) {
content.select();
document.execCommand('copy');
document.getElementById('valido'+id).innerHTML = "copiado";
} else {
document.getElementById('valido'+id).innerHTML = "salio mal";
}
}


/*__________________________________________*/	
function pagina_1(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 0; i < 100; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}
Buscar()
}
/*__________________________________________*/	
function pagina_2(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 100; i < 200; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}
Buscar()
}
/*________________________________________________________________________________*/

/*__________________________________________*/	
function pagina_3(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 200; i < 300; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*__________________________________________*/	
function pagina_4(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 300; i < 400; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
function pagina_5(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 400; i < 500; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
function pagina_6(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 500; i < 600; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
function pagina_7(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 600; i < 700; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
function pagina_8(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 700; i < 800; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
function pagina_9(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 800; i < 900; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
function pagina_10(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 900; i < 1000; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_11(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1000; i < 1100; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_12(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1100; i < 1200; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_13(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1200; i < 1300; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_14(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1300; i < 1400; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_15(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1400; i < 1500; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_16(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1500; i < 1600; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_17(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1600; i < 1700; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_18(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1700; i < 1800; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_19(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1800; i < 1900; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/
/*________________________________________________________________________________*/
function pagina_20(){
document.getElementById('table').innerHTML = '';
carrito =JSON.parse(localStorage.getItem('libreia-icon-1')) ?? []
for (var i = 1900; i < 2000; i++) {
var table = document.getElementById('table')
table.innerHTML += `
<tr><td><div class="con-imagen" >
<h4 id="valido${[i]}"></h4><h3>${[i]}. ${carrito[i].nombre}</h3><h2><i class="${carrito[i].codi} ${carrito[i].icono}"></i></h2>
<div class="con-todo" >
<button class="bt-1" onclick="copy(${[i]})"><textarea readonly="readonly" id="${[i]}"  cols="35" rows="1"><i class="${carrito[i].codi} ${carrito[i].icono}"></i></textarea>
</button><i class="fa-regular fa-paste"></i></div></div></td></tr>
`
}Buscar()}
/*________________________________________________________________________________*/













	/*==================== busqueda ====================*/
function Buscar() {
var tabla = document.getElementById('table');
var busqueda = document.getElementById('txtBusqueda').value.toLowerCase();
var cellsOfRow="";
var found=false;
var compareWith="";
for (var i = 0; i < tabla.rows.length; i++) {
cellsOfRow = tabla.rows[i].getElementsByTagName('h3');
found = false;
for (var j = 0; j < cellsOfRow.length && !found; j++) { 
compareWith = cellsOfRow[j].innerHTML.toLowerCase();
if (busqueda.length == 0 || (compareWith.indexOf(busqueda) > -1))
{
found = true;
}
}
if(found){	
tabla.rows[i].style.display = ''; 
} else {
tabla.rows[i].style.display = 'none';
}
}
}
        
        // ]]>
/*==================================================*/	




























// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
linkColor.forEach(l => l.classList.remove('active'));
this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));


































