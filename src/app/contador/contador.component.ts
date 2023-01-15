import {Component} from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
            <h1>{{title}}</h1>
            <h2>La base es: </h2>
            <button (click)="numero=numero-5">-5</button>
            <span> {{numero}} </span>
            <button (click)="numero= numero+5">+5</button>
    `
})

export class ContadorComponent{
    title = 'Contador app';
    numero: number = 10;
    base:number=5;
    aumentar( valor:number){
        this.numero += valor;
    }
}