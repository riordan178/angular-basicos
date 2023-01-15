import { Component } from '@angular/core';



@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:string='IronMan';
    edad:number=45;
    
    get NombreCapitalizado(){
        return this.nombre.toUpperCase()
    };
    ObtenerNombre(){
        return this.nombre +' - '+ this.edad;
    }

    CambiarNombre(){
        this.nombre='SpiderMan'
    }
    CambiarEdad(){
        this.edad=30;
    }
}