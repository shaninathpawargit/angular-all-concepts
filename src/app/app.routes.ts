import { Routes } from '@angular/router';
import { BindingsComponent } from './components/bindings/bindings.component';
import { AppComponent } from './app.component';
import { FormgroupFormcontrolsComponent } from './components/formgroup-formcontrols/formgroup-formcontrols.component';
import { ConceptsListComponent } from './components/concepts-list/concepts-list.component';

export const routes: Routes = [
    {path:'', component:ConceptsListComponent},
    {path:'bindings', component:BindingsComponent},
    {path:'reactiveforms', component:FormgroupFormcontrolsComponent}
];

