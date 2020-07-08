import { Component } from '@angular/core';
import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: [],
})
export class MembersTableComponent {
  members: MemberEntity[];
  organizationName: string = 'lemoncode';
  // UI
  error: string = '';
  loading: boolean;
  // Pagination
  membersToShow: MemberEntity[];
  currentPage: number = 1;
  membersPerPage: number = 5;

  constructor(private membersApi: MembersApiService) {}

  pageChangeHandler(page: number) {
    this.currentPage = page;
    const indexOfLastMember: number = page * this.membersPerPage;
    const indexOfFirstMember: number = indexOfLastMember - this.membersPerPage;
    const currentMembers = this.members.slice(
      indexOfFirstMember,
      indexOfLastMember
    );
    this.membersToShow = currentMembers;
  }

  perPageHandler(members: number) {
    this.membersPerPage = members;
  }

  loadMembers() {
    this.loading = true;
    this.error = '';

    this.membersApi.getAllMembers(this.organizationName).subscribe(
      (ms) => ((this.members = ms), this.pageChangeHandler(1)), // reset page to first for new org
      (error) => (this.error = error.statusText),
      () => (this.loading = false)
    );
  }
}
