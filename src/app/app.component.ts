import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlujoComponent } from './controles/flujo/flujo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FlujoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'que-opinas';
}
