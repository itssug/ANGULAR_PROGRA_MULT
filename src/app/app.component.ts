import { Component } from '@angular/core';
import { AgregarPalabraComponent } from './components/agregar-palabra/agregar-palabra.component';
import { ListaPalabrasComponent } from './components/lista-palabras/lista-palabras.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgregarPalabraComponent, ListaPalabrasComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listaPalabras: string[] = [];

  // Función que recibe la palabra del componente hijo
  agregarPalabraAlista(palabra: string) {
    this.listaPalabras.push(palabra);
  }
}
