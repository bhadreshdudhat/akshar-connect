import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'account', loadChildren: () => import('./account/account.module') .then(mod => mod.AccountModule)},

  { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(mod => mod.AttendanceModule)},

  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)},

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
