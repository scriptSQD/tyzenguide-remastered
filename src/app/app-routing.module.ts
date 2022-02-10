import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './sights/home/home.component';
import { SightComponent } from './sights/sight/sight.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sights', children:
    [
      { path: '', component: HomeComponent, pathMatch: 'prefix' },
      { path: 'sights/:sight', component: SightComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
