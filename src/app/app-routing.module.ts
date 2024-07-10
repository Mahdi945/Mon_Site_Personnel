import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Importation du composant Home
import { AboutComponent } from './about/about.component'; // Importation du composant About
import { ContactComponent } from './contact/contact.component'; // Importation du composant Contact

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection vers Home par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes à la racine de l'application
  exports: [RouterModule] // Exportation de RouterModule pour être utilisé dans le reste de l'application
})
export class AppRoutingModule { }
