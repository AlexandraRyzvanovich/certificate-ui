import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {TagService} from '../../../core/services/tag.service';
import {Tag} from '../../../model/tag';
import {CertificateService} from '../../../core/services/certificate.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-certificate-creation-form',
  templateUrl: './certificate-create-page.component.html',
  styleUrls: ['./certificate-create-page.component.scss', '../../../app.component.scss'],
  providers: [TagService, CertificateService
  ]
})
export class CertificateCreatePageComponent implements OnInit {
  certificateCreationForm: FormGroup;
  allTags: Tag[] = [];
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<Tag[]>;
  tags: Tag[] = [];

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private tagService: TagService,
              private certificateService: CertificateService,
              private formBuilder: FormBuilder) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        console.log(tag);
        return tag ? this._filter(tag) : this.allTags.slice();
      }));
    this.createForm();
  }
  private createForm() {
    this.certificateCreationForm = this.formBuilder.group({
      certificateName: ['',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(16)]
      ],
      certificateDescription: ['', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16)]
      ],
      validDays: ['', [Validators.required,
        Validators.min(1),
        Validators.max(365)]
      ],
      price: ['', [Validators.required,
        Validators.min(1),
        Validators.maxLength(10000)]
      ]
    });
  }
  get _certificateName() {
    return this.certificateCreationForm.get('certificateName');
  }
  get _certificateDescription() {
    return this.certificateCreationForm.get('certificateDescription');
  }
  get _validDays() {
    return this.certificateCreationForm.get('validDays');
  }
  get _price() {
    return this.certificateCreationForm.get('price');
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      console.log(value);
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

  createCertificate() {
    if (this._certificateName.invalid || this._certificateDescription.invalid ||
      this._price.invalid || this._validDays.invalid){
      return;
    }
    this.certificateService
      .createCertificate(this._certificateName.value, this._certificateDescription.value,
        this._validDays.value, this._price.value, this.tags);
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => this.allTags = data);
  }
}
