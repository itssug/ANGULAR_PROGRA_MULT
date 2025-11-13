import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-palabra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar-palabra.component.html',
  styleUrls: ['./agregar-palabra.component.scss'] 
})
export class AgregarPalabraComponent {
  nuevaPalabra: string = '';

  @Output() palabraAgregada = new EventEmitter<string>(); 

  agregarPalabra() {
    if (this.nuevaPalabra.trim() !== '') {
      this.palabraAgregada.emit(this.nuevaPalabra.trim());
      this.nuevaPalabra = '';
    }
  }
}
