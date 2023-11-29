import { Component, OnInit } from '@angular/core';
import { LocationDataService } from '../services/location-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { LocationModel } from '../location.model';
import { Subscribable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [LocationDataService]
})
export class GridComponent implements OnInit{
  locations: LocationModel[] = []; // Initialize locations array
  isAddButtonEnabled: boolean = true;
  isDeleteButtonEnabled = false;
  isCancelButtonEnabled: boolean = false;
  // enableDeleteButton: boolean = false;
  isChecked: boolean = false;
 

  enableButton(checked: boolean) {
    this.isChecked = checked;
  }
  
  deleteCheckedRows() {
    this.locations = this.locations.filter(location => !location.selected);
    // Reset the isChecked flag after deletion
    this.isChecked = false;
  }
  
  // onDeleteClick() {
   
  //   alert('Delete button clicked!')
  //   // this.locations = this.locations.filter(location => !location.selected);
  //   // this.isDeleteButtonEnabled = false; // Disable delete button after deletion
  // }

onAddClick() {
  alert('Add button clicked!');
  this.isAddButtonEnabled = false;
  this.isDeleteButtonEnabled=false;
  this.isCancelButtonEnabled = true;
   // Create a new row and add it at the top of the grid
   const newLocation: LocationModel = {
    nlcCode: 'New NLC Code',
    crsCode: 'New CRS Code',
    description: 'New Description',
    selected: false,
  };
  this.locations$ = this.locations$.pipe(
    map((locations: LocationModel[]) =>[newLocation, ...locations])
    );
    // Remove the first element
  
}

// onDeleteClick(){
//   alert('Delete button clicked!');
//   this.isDeleteButtonEnabled=false;
// }
onCancelClick(){
  alert('Cancel button clicked!');
  this.isAddButtonEnabled = true;
  this.isCancelButtonEnabled = false;
  this.isDeleteButtonEnabled=true;
  this.locations$ = this.locations$.pipe(
    map((locations: LocationModel[]) => locations.slice(1)) // Remove the first element
  );
}




Location: any;
locations$!: Observable<LocationModel[]>;

  constructor(private ldservice:LocationDataService){

  }

    // this.locations$ = this.rservice.getLocations();
   
 ngOnInit():void{
  this.locations$ =  this.ldservice.getLocations()
  // this.enableDeleteButton = false;
 }
  goBack(): void {
    window.history.back(); // Implement your logic for going back
  }

  goForward(): void {
    window.history.forward(); // Implement your logic for going forward
  }

  reloadPage(): void {
    // Implement your logic for reloading the page
    location.reload();
  }

  onClick(): void {
    // Implement the action you want to perform when the button is clicked
    // console.log('Button clicked!');
    // this.locations=this.locationService.getLocations()
    // You can add more functionality here
  }














  // gridData = [
   
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },
  //   { selected: false, nlcCode: '', crsCode: '', description: '' },


   
    
    
  //   // Add more data as needed
  // ];

}
