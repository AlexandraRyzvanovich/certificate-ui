import {Component, OnInit} from '@angular/core';
import {TagService} from '../../core/services/tag.service';
import {Tag} from '../../model/tag';
import {CertificateService} from '../../core/services/certificate.service';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tags: Tag[] = [];
  role: string;
  route: string;

  constructor(private tagService: TagService,
              private certificateService: CertificateService,
              private authService: AuthService,
              private router: Router
              ) {
  }

  isCertificatesRoute(): boolean {
    return this.router.url === '/certificates';
  }
  isAuthentificated(): boolean {
    return this.authService.isAuthenticated();
  }
  logOut(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => this.tags = data);
    this.role = this.authService.getRole();
  }

}
