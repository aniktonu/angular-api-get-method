import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name: string = "Service In Angular "
  userlist: any;

  constructor(
    private userData: UserDataService
  ) {
    this.userlist = userData.userData()
    // console.log(this.userlist)
  }

}


