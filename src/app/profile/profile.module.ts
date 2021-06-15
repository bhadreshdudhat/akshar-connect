import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { EducationComponent } from './education/education.component';
import { FamilyComponent } from './family/family.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { OccupationComponent } from './occupation/occupation.component';
import { SabhaComponent } from './sabha/sabha.component';
import { SocialProfilesComponent } from './social-profiles/social-profiles.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EducationComponent,
    FamilyComponent,
    InsuranceComponent,
    OccupationComponent,
    SabhaComponent,
    SocialProfilesComponent,
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
