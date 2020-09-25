import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {TagService} from '../services/tag/tag.service';
import {Tag} from '../module/tag';
import {CertificateService} from '../services/certificate/certificate.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-certificate-creation-form',
  templateUrl: './certificate-creation-form.component.html',
  styleUrls: ['./certificate-creation-form.component.scss', '../app.component.scss'],
  providers: [TagService, CertificateService
  ]
})
export class CertificateCreationFormComponent implements OnInit {
  allTags: Tag[] = [];
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<Tag[]>;
  tags: Tag[] = [];
  certificate: { name: string; description: string; price: number; validDays: number; tags: Tag[] } = {
    name: '',
    description: '',
    price: 0,
    validDays: 0,
    tags: this.tags
  };

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private tagService: TagService, private certificateService: CertificateService) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => {
        console.log(tag);
        return tag ? this._filter(tag) : this.allTags.slice();
      }));
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

  // tslint:disable-next-line:typedef
  GetTags() {
    this.tagService.getTags().subscribe(data => this.allTags = data);
  }

  // tslint:disable-next-line:typedef
  createCertificate() {
    this.certificateService
      .createCertificate(this.certificate.name, this.certificate.description,
        this.certificate.price, this.certificate.validDays, this.certificate.tags);
  }

  ngOnInit(): void {
    this.GetTags();
  }
}
