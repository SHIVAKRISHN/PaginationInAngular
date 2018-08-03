import { Component, OnInit } from '@angular/core';
import { PaginationTestService } from './pagination-test.service';



interface dummyDataInterface
{
  id : string,
  name : string,
  genre : string,
 
}
@Component({
  selector: 'app-pagination-test',
  templateUrl: './pagination-test.component.html',
  styleUrls: ['./pagination-test.component.css']
})
export class PaginationTestComponent implements OnInit {


  private games: dummyDataInterface[];

  constructor(private paginationTestService : PaginationTestService) { }

  ngOnInit() {
    this.paginationTestService.getDummyData().subscribe(data =>{
      this.games= data;
      console.log("the items from the json file is ", this.games);
      
    })
  }


  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  p: number = 1;

  
}
