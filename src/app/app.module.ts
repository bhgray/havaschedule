import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dash/dash';
import { RosterPage } from '../pages/roster/roster';
import { BellsPage } from '../pages/bells/bells';
import { TabsPage } from '../pages/tabs/tabs';
import { PrefsPage } from '../pages/prefs/prefs';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    RosterPage,
    BellsPage,
    TabsPage,
    PrefsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    RosterPage,
    BellsPage,
    TabsPage,
    PrefsPage
  ],
  providers: []
})
export class AppModule {}
