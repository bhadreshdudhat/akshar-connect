import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { FamilyComponent } from './family/family.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { OccupationComponent } from './occupation/occupation.component';
import { ProfileComponent } from './profile.component';
import { SabhaComponent } from './sabha/sabha.component';
import { SocialProfilesComponent } from './social-profiles/social-profiles.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  { path: '', component: ProfileComponent ,
   children:[
         { path: "education", component: EducationComponent },
         { path: "family", component: FamilyComponent },
         { path: "insurance", component: InsuranceComponent },
         { path: "occupation", component: OccupationComponent },
         { path: "sabha", component: SabhaComponent },
         { path: "social-profiles", component: SocialProfilesComponent },
         { path: "view-profile", component: ViewProfileComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
