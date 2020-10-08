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
import {Router} from '@angular/router';
import {DialogGeneralData} from '../../../shared/dialog/dialig-general/dialog-general-data';
import {DialogGeneralComponent} from '../../../shared/dialog/dialig-general/dialog-general.component';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-certificate-creation-form',
  templateUrl: './certificate-create-page.component.html',
  styleUrls: ['./certificate-create-page.component.scss', '../../../app.component.scss'],
  providers: [TagService, CertificateService
  ]
})
export class CertificateCreatePageComponent implements OnInit {

  constructor(private tagService: TagService,
              private certificateService: CertificateService,
              private formBuilder: FormBuilder,
              private router: Router,
              private dialog: MatDialog) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        console.log(tag);
        return tag ? this._filter(tag) : this.allTags.slice();
      }));
    this.createForm();
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
  certificateCreationForm: FormGroup;
  allTags: Tag[] = [];
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<Tag[]>;
  tags: Tag[] = [];
  dialogData: DialogGeneralData;

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private createForm() {
    this.certificateCreationForm = this.formBuilder.group({
      certificateName: ['',
        [Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50)]
      ],
      certificateDescription: ['', [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)]
      ],
      validDays: ['', [Validators.required,
        Validators.min(1),
        Validators.max(365)]
      ],
      price: ['', [Validators.required,
        Validators.min(1),
        Validators.max(10000)]
      ]
    });
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
    const payload = {
      name: this._certificateName.value,
      description: this._certificateDescription.value,
      price: this._price.value,
      validDays: this._validDays.value,
      tags: this.tags
    };
    this.certificateService
      .createCertificate(payload)
      .subscribe(resp => {
      this.dialogData = {title: 'Create certificate', message: 'Certificate has been successfully created.'};
      this.openDialog(this.dialogData);
      this.router.navigate(['/create']);
      }, (error: HttpErrorResponse) => {
      if (error.status === 409 ) {
        this.dialogData = {title: 'Create certificate', message: 'Certificate with such name already exists'};
        this.openDialog(this.dialogData);
      }
      if (error.status === 400) {
        this.dialogData = {title: 'Create certificate', message: ' Please, contact support center.'};
      }
    });
  }
  openDialog(dialogsData: DialogGeneralData): void {
    this.dialog.open(DialogGeneralComponent, {
      width: '500px',
      data: dialogsData
    });
  }
  back(): void {
    this.router.navigateByUrl('/certificates');
  }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => this.allTags = data);
  }
}
