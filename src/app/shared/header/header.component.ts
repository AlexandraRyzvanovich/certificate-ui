import {Component, OnInit} from '@angular/core';
import {TagService} from '../../services/tag/tag.service';
import {Tag} from '../../module/tag';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private tagService: TagService) {
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => this.tags = data);
  }

}
