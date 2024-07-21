import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string='';

  updateSearch(event:any){
    this.searchText=event.target.value;
  }

  @Output()
  searchTextChanged: EventEmitter<string>= new EventEmitter<string>();

  @ViewChild('searchTextt') searchInputEl:ElementRef;

                  // inputEl:HTMLInputElement
  onSearchTextChanged(){
    // this.searchTextChanged.emit(this.searchText);
    this.searchText=this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);
    // console.log(inputEl.value);
  }

}
