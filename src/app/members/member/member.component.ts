import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersApiService } from '../members-api.service';
import { MemberEntity } from '../models/member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: [],
})
export class MemberComponent implements OnInit {
  user: MemberEntity = null;

  constructor(
    private route: ActivatedRoute,
    private memberApi: MembersApiService
  ) {}

  ngOnInit() {
    this.memberApi
      .getMember(this.route.snapshot.params['id'])
      .subscribe((user) => {
        this.user = user;
      });
  }
}
