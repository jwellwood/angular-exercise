import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {
  MemberRowComponent,
  MemberHeadComponent,
  MembersTableComponent,
} from './members-table';
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from '../loading/loading-spinner/loading-spinner.component';
import { PaginationComponent } from '../pagination/pagination/pagination.component';
import { MemberComponent } from './member/member.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  declarations: [
    MemberRowComponent,
    MemberHeadComponent,
    MembersTableComponent,
    LoadingSpinnerComponent,
    PaginationComponent,
    MemberComponent,
  ],
  exports: [MembersTableComponent],
})
export class MembersModule {}
