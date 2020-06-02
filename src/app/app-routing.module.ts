import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PublicacionComponent } from './pages/publicacion/publicacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AcercaComponent } from './pages/acerca/acerca.component';


const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'publicacion', component: PublicacionComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'acerca', component: AcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
