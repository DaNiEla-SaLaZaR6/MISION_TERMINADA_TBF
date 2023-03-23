
const boton=document.getElementById('boton')
const area=document.getElementById('area')
const nombre=document.getElementById('nombre')
const usuario=document.getElementById('usuario')
const email=document.getElementById('email')
const edad=document.getElementById('edad')

let obj=JSON.parse(localStorage.getItem('datos')) || [];
class Añadir{
    nombre
    apellido
    area
    usuario
    edad
    direccion
    email
    constructor(nombre,apellido,area,usuario,edad,direccion,email){
        this.nombre=nombre
        this.apellido=apellido
        this.area=area
        this.usuario=usuario
        this.edad=edad
        this.direccion=direccion
        this.email=email
    }
}
boton.addEventListener('click', (e) => {
    e.preventDefault()
    if(obj.find(element => element.usuario==usuario.value)){
        alert('usuario existente')
    }else{
        añadir =new Añadir (nombre.value, apellido.value, area.value, usuario.value, edad.value, direccion.value, email.value)
        obj.push(añadir)
        localStorage.setItem('datos',JSON.stringify(obj))
        location.href='./index.html' 
    }

})
