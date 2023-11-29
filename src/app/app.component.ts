import { Component } from '@angular/core';
import {LocationDataService} from './services/location-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';
  locations: any;

constructor() { }

// ngOnInit() {
//   this.locationData.getLocations().subscribe((data: any) => {
//     this.locations = data; // Assign fetched data to locations property
//     console.log(this.locations); // Log the fetched data
//   });
}

  

