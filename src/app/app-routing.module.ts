import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'src/components/menu/menu.component';
import { HomeComponent } from 'src/components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }