import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface dummyDataInterface
{
  id : string,
  name : string,
  genre : string,
 
}

@Injectable({
  providedIn: 'root'
})
export class PaginationTestService {

  constructor(private http:HttpClient) { }

  getDummyData()
  {
    return this.http.get<dummyDataInterface[]>('assets/dummy-data.json');
  }

}
