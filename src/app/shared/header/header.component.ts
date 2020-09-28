import {Component, OnInit} from '@angular/core';
import {TagService} from '../../core/services/tag.service';
import {Tag} from '../../model/tag';
import {CertificateService} from '../../core/services/certificate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private tagService: TagService,
              private certificateService: CertificateService) {
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => this.tags = data);
  }

}
