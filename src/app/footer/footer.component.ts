import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  users: any;

  constructor(
    private userData: UserDataService
  ) {
    this.users = userData.userData()
    // console.log(this.users)

  }



}
