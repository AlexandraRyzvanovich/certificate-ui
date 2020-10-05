import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../model/tag';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  tag: Tag;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  // tslint:disable-next-line:typedef
  getCertificatesByTag() {
    const url = '/certificates';
    this.router.navigateByUrl(url);
  }

}
