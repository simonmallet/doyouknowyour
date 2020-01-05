import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'doyouknowyour';

  public hideOverlay() {
    const overLayMenu = document.getElementById('open-menu-overlay');
    const statsMenu = document.getElementById('stats');
    overLayMenu.classList.remove('shown');
    statsMenu.classList.remove('shown');
  }
}
