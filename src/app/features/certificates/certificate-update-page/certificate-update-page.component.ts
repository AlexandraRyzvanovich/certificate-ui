import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Tag} from '../../../model/tag';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Observable, of} from 'rxjs';
import {MatAutocomplete} from '@angular/material/autocomplete';
import {TagService} from '../../../core/services/tag.service';
import {CertificateService} from '../../../core/services/certificate.service';
import {map, startWith} from 'rxjs/operators';
import {MatChipInputEvent} from '@angular/material/chips';
import {Certificate} from '../../../model/certificate';
import {ActivatedRoute, Router} from '@angular/router';

export interface CertificateParams {
  name: string;
  description: string;
  price: number;
  validDays: number;
  tags: Tag[];
}

@Component({
  selector: 'app-certificate-update-page',
  templateUrl: './certificate-update-page.component.html',
  styleUrls: ['./certificate-update-page.component.scss', '../../../app.component.scss']
})


export class CertificateUpdatePageComponent implements OnInit {
  certificateUpdateForm: FormGroup;
  allTags: Tag[] = [];
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<Tag[]>;
  oldCertificate: Certificate = null;
  tags: Tag[] = [];
  certificateParams: CertificateParams;

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private tagService: TagService,
              private certificateService: CertificateService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        return tag ? this._filter(tag) : this.allTags.slice();
      }));
    this.createForm();
  }

  private createForm() {
    this.certificateUpdateForm = this.formBuilder.group({
      certificateName: ['',
        [Validators.minLength(5),
          Validators.maxLength(16)]
      ],
      certificateDescription: ['',
        [Validators.minLength(5),
          Validators.maxLength(16)]
      ],
      validDays: ['',
        [Validators.min(1),
          Validators.max(365)]
      ],
      price: ['',
        [Validators.min(1),
          Validators.maxLength(10000)]
      ]
    });
  }

  get _certificateName() {
    return this.certificateUpdateForm.get('certificateName');
  }

  get _certificateDescription() {
    return this.certificateUpdateForm.get('certificateDescription');
  }

  get _validDays() {
    return this.certificateUpdateForm.get('validDays');
  }

  get _price() {
    return this.certificateUpdateForm.get('price');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.tags.push({name: value.trim(), id: null});
    }
    if (input) {
      input.value = '';
    }
    this.tagCtrl.setValue(null);
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(tag: Tag): void {
    this.tags.push(tag);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): Tag[] {
    console.log(value);
    const filterValue = value ? value.toLowerCase() : '';

    return this.allTags.filter(tag => tag.name.toLowerCase() === filterValue);
  }

  // tslint:disable-next-line:typedef
  updateCertificate() {
    if (this._certificateName.invalid || this._certificateDescription.invalid ||
      this._price.invalid || this._validDays.invalid) {
      return;
    }
    this.certificateParams = {
      name: this._certificateName.value,
      description: this._certificateDescription.value,
      price: this._price.value,
      validDays: this._validDays.value,
      tags: this.tags
    };

    this.certificateService
      .updateCertificate(this.oldCertificate.id, this.certificateParams);
  }
  back(): void {
    this.router.navigateByUrl('/certificates');
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => this.allTags = data);

    this.route.paramMap.subscribe(
      params => {
        const certificateId = Number(params.get('id'));
        this.certificateService.getCertificate(certificateId).subscribe((resp: Certificate) => {
          this.oldCertificate = resp;
          this.tags = resp.tags;
        });
      });
  }
}
