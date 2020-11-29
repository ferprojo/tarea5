import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatfactsComponent} from './catfacts/catfacts.component';
import {LastFactComponent} from './last-fact/last-fact.component';

const routes: Routes = [{path: '', component: CatfactsComponent}, {path: 'last', component: LastFactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
