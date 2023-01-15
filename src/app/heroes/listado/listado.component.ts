import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] =['Spiderman','Hulk','Wolverine','Thor'];
  borrado: string= '....';
  estado:boolean=true;
  borrarultimo(){
    this.borrado = this.heroes.shift() || '';
    
  }
}
