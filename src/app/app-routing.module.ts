import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortestpathComponent } from './shortestpath/shortestpath.component';

const routes: Routes = [

  { path: '', redirectTo: '/shortestpath', pathMatch: 'full' },
  { path: 'shortestpath', component: ShortestpathComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
