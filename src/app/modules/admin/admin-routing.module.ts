import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../admin/components/dashboard-admin/dashboard-admin.component';
import { CandidatesComponent } from '../admin/components/candidates/candidates.component';
import { AdminComponent } from './admin.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { EmployeeMappingComponent } from './components/employee-mapping/employee-mapping.component';

/*
add the auth guard for all the children in the parent path
i.e to the path admin => doing this will resolve the login check
for admin and then sub admins and then candidate
*/
const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'candidates/create',
        component: CreateCandidateComponent
      },
      {
        path: 'candidates',
        component: CandidatesComponent
      },
      {
        path: 'activeCandidates',
        component: EmployeesComponent
      },
      {
        path: 'employee-mapping/:id',
        component: EmployeeMappingComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
