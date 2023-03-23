const crear=document.getElementById('crear')
const tbody=document.getElementById('tbody')
const busqueda=document.getElementById('busqueda')

let datos= null

crear.addEventListener('click', () => {
    location.href='./index2.html'
})

let nombre=[]

 datos=JSON.parse(localStorage.getItem('datos'))
function filtrar(){
    tbody.innerHTML=''
    datos.forEach(element => {
        nombre=element.nombre.toLowerCase()
        if(nombre.indexOf(busqueda.value.toLowerCase())!= -1){
            fila=`<tr><th rowspan = 1>${element.area}</th><td>${element.nombre} ${element.apellido}</td><td>${element.usuario}</td><td  class="trojo">${element.email}</td><td>${element.edad}</td></tr>`; tbody.innerHTML+=fila


        }
        
    });
}

busqueda.addEventListener('keyup',filtrar)
filtrar()

