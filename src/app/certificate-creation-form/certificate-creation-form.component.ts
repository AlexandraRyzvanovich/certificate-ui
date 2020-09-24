import {Component, forwardRef, OnInit} from '@angular/core';
import {TagService} from '../services/tag/tag.service';
import {Tag} from '../module/tag';
import {Certificate} from '../module/certificate';
import {CertificateService} from '../services/certificate/certificate.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-certificate-creation-form',
  templateUrl: './certificate-creation-form.component.html',
  styleUrls: ['./certificate-creation-form.component.scss', '../app.component.scss'],
  providers: [TagService, CertificateService
]
})
export class CertificateCreationFormComponent implements OnInit {
  tags: Tag[] = [];
  certificate: { name: string; description: string; price: number; validDays: number; tagIds: Tag[] } = {
    name: '',
    description: '',
    price: 0,
    validDays: 0,
    tagIds: []
  };
  selected: number;

  constructor(private tagService: TagService, private certificateService: CertificateService) { }
  // tslint:disable-next-line:typedef
  GetTags() {
    this.tagService.getTags().subscribe(data => this.tags = data);
  }
  // tslint:disable-next-line:typedef
  createCertificate() {
    this.certificateService
      .createCertificate(this.certificate.name, this.certificate.description,
        this.certificate.price, this.certificate.validDays, this.certificate.tagIds);
  }
  // tslint:disable-next-line:typedef
  public onOptionsSelected(event) {
    const value = event.target.value;
    this.selected = value;
    console.log(value);
  }

  ngOnInit(): void {
    this.GetTags();
  }
}
