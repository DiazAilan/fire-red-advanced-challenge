import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './FAQ/faq.component';


const routes: Routes = [
  {path: 'fire-red-advanced-challenge/FAQ', component: FaqComponent}, 
  {path: 'fire-red-advanced-challenge', component: HomeComponent},
  {path: '**', redirectTo: '/fire-red-advanced-challenge'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
