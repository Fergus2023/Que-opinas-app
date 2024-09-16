import { Component } from '@angular/core';
import { Demo2Component } from './demo2/demo2.component';
import { Demo1Component } from './demo1/demo1.component';
@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [Demo2Component,Demo1Component],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  usuario = 'juan';
  edad:number = 10;
}
