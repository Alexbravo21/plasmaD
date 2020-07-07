import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectoDetailComponent } from './components/proyecto-detail/proyecto-detail.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'proyectos/:id', component: ProyectoDetailComponent },
    { path: 'blog/:id', component: ProyectoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
