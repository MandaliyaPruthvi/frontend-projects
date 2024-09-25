import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'search-input';
}