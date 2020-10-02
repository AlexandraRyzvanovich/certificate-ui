import { Component, OnInit } from '@angular/core';
import {CertificateService} from '../../core/services/certificate.service';
import {Certificate} from '../../model/certificate';
import {Tag} from '../../model/tag';
import {TagService} from '../../core/services/tag.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  tags: Tag[];
  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getMostPopular().subscribe((resp: Tag[]) => {
    this.tags = resp;
    });
  }

}
