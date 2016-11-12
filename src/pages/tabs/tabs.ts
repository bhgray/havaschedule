import { Component } from '@angular/core';

import { DashboardPage } from '../dash/dash';
import { BellsPage } from '../bells/bells';
import { RosterPage } from '../roster/roster';
import { PrefsPage } from '../prefs/prefs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = DashboardPage;
  tab2Root: any = BellsPage;
  tab3Root: any = RosterPage;
  tab4Root: any = PrefsPage;

  constructor() {

  }
}
