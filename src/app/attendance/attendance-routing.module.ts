import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { AttendanceComponent } from './attendance/attendance.component';

const routes: Routes = [
  { path: '', component: AttendanceComponent },
  { path:"report", component: AttendanceReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
