import { Component } from '@angular/core';

import { AuthAdminService } from './shared/services/auth-admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _auth: AuthAdminService) {
    // Check for authentication and handle if hash present
    // _auth.handleAuth();
  }

}
