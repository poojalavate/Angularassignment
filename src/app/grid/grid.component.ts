import { Component } from '@angular/core';
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
export class GridComponent{
  // locations: Location[] = []; // Initialize locations array
  // LocationModel: any;
  Location: any;
locations$!: Observable<LocationModel[]>;

//   locations!: any; 
// locations$: Observable<undefined>|Subscribable<undefined>|Promise<undefined>;


  constructor(private ldservice:LocationDataService){

  }

    // this.locations$ = this.rservice.getLocations();
   
 ngOnInit():void{
  this.locations$ =  this.ldservice.getLocations()
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
