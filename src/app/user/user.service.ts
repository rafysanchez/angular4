import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private _http: Http) {}

  create(user) {
    return this._http.post(
      'http://jcpvipexecutivo.com/api/create.php',
      user
    );
  }

  ndelete(user) {
    // tslint:disable-next-line:max-line-length
    return this._http
      .post(
        'http://jcpvipexecutivo.com/api/delete.php',
        { id: user }
      )
      .map(() => this.getUsers());
  }

  update(user) {
    return this._http
      .post(
        'http://jcpvipexecutivo.com/api/update.php',
        user
      )
      .map(() => '');
  }

  getUsers() {
    // tslint:disable-next-line:max-line-length
    return this._http
      .get(
        'http://jcpvipexecutivo.com/api/getAll.php'
      )
      .map(data => data.json());
  }

  getUser(user: User): Observable<User> {
    // tslint:disable-next-line:max-line-length
    return this._http
      .get('/users/' + user.id)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Error'));
  }
}
