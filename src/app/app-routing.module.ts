import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersTableComponent } from './members/members-table';
import { MemberComponent } from './members/member/member.component';

const routes: Routes = [
  { path: ':id', component: MemberComponent },
  { path: '', component: MembersTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
