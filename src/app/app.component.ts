import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lateStudent = 'Franklin';
  coaches = [{
  	name:'Yuchin',
  	description:'Special in Golf',
  	image_url:'http://www.facebook.com'

  },
  {
  	name:'Franklin',
  	description:'Lost weight ... 500 calories per day!',
  	image_url:'http://www.facebook.com'
  },
  {
  	name:'Ken',
  	description:'Weight Lifting!',
  	image_url:'http://www.facebook.com'
}
  ]
}
