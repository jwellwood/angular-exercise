import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MemberEntity } from 'src/app/members/models/member.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [],
})
export class PaginationComponent implements OnChanges {
  @Input() members: MemberEntity[];
  @Input() membersPerPage: number;
  @Output() changePage = new EventEmitter<any>();
  @Output() changeMembersPerPage = new EventEmitter<any>();
  pageNumbers: number[] = [];

  constructor() {}

  onChangePage(page: number) {
    this.changePage.emit(page);
  }

  onChangeMembersPerPage(members: number) {
    this.changeMembersPerPage.emit(members);
    this.onChangePage(1);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.members) this.updatePages();
    if (changes.membersPerPage) this.updatePages();
  }

  updatePages() {
    // reset to empty array each time before updating
    this.pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.members.length / this.membersPerPage);
      i++
    ) {
      this.pageNumbers.push(i);
    }
  }
}
