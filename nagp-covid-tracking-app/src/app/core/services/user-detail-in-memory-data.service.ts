import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUserDetail } from '../../shared/interfaces/IUserDetail';

@Injectable({
  providedIn: 'root'
})
export class InMemoryLoginDataService implements InMemoryDbService {
  createDb() {

    /** Default User data collection. */
    const userDetail: IUserDetail[] = [{
      "id": 1,
      "name": "Neha Jain",
      "email": "nj@gmail.com",
      "phoneNumber": "9876543210"
    }, {
      "id": 2,
      "name": "Aastha Jain",
      "email": "aj@gmail.com",
      "phoneNumber": "8876543210"
    }];

    return {userDetail};
  }

/** Method that generates the ids of user when not passed. */
  genId(userDetail: IUserDetail[]): number {
    return userDetail.length > 0 ? Math.max(...userDetail.map(user => user.id)) + 1 : 1;
  }
}
