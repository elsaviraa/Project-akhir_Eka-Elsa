import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// @Output() featureSelected=new EventEmitter<string>();

//   onSelect(feature:string){
//     this.featureSelected.emit(feature);
//   }
  
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }  
}
