import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CategoriesComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tobeto-angular-1-form';
}
