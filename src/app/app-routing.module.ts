import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './sights/home/home.component';
import { SightComponent } from './sights/sight/sight.component';
import { SightsComponent } from './sights/sights.component';
import { TyzenhausComponent } from './tyzenhaus/tyzenhaus.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sights', component: SightsComponent, children:
    [
      { path: '', component: HomeComponent, pathMatch: 'prefix' },
    ]
  },
  { path: 'sights/:sight', component: SightComponent },
  { path: 'tyzenhaus', component: TyzenhausComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'authors', component: AuthorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
