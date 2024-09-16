import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flujo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flujo.component.html',
  styleUrl: './flujo.component.css'
})
export class FlujoComponent {
  esAdmin = false;

  mensaje = "";

  ciudades = [{id:1, nombre:'la paz'},{id:2, nombre:'Santa cruz'},{id:3, nombre:'cochabamba'},{id:4, nombre:'El alto'}]


  guardar(){
    this.mensaje = "Datos guardados";
  }
}
