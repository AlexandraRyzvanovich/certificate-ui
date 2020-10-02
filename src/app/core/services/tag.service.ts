import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Tag} from '../../model/tag';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  api = 'http://localhost:8080/tags';
  constructor(private http: HttpClient, private router: Router) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.api + '?size=100&page=1').pipe(map(data => {
      const tags = data['items'].content;
      // tslint:disable-next-line:only-arrow-functions typedef
      return tags.map(function(tag: any) {
        return {id: tag.id, name: tag.name};
      });
    }));
  }
  getMostPopular(): Observable<Tag[]> {
    return this.http.get(this.api + '/popular').pipe(map(data => {
      const tags = data['items'].content;
      // tslint:disable-next-line:only-arrow-functions
      return tags;
    }));
  }
}
