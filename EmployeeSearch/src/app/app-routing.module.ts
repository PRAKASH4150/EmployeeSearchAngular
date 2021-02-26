import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchByEmployeeIdComponent } from './search-by-employee-id/search-by-employee-id.component';
import { SearchEmployeeByNameComponent } from './search-employee-by-name/search-employee-by-name.component';


const routes: Routes = [
  {
    path:"search-by-id",
    component:SearchByEmployeeIdComponent
  },
  {
    path:"search-by-name",
    component:SearchEmployeeByNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
