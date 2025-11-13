import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-palabras',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-palabras.component.html',
  styleUrls: ['./lista-palabras.component.scss']
})
export class ListaPalabrasComponent {
  @Input() palabras: string[] = [];

  // edición
  editIndex: number | null = null;
  editValue: string = '';

  editarPalabra(index: number) {
    this.editIndex = index;
    this.editValue = this.palabras[index];
  }

  // Guardar 
  guardarEdicion() {
    if (this.editValue.trim() !== '' && this.editIndex !== null) {
      this.palabras[this.editIndex] = this.editValue.trim();
      this.editIndex = null;
      this.editValue = '';
    }
  }

  cancelarEdicion() {
    this.editIndex = null;
    this.editValue = '';
  }
  eliminarPalabra(index: number) {
    this.palabras.splice(index, 1);
    if (this.editIndex === index) this.cancelarEdicion();
  }
}
