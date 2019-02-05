import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// mes page cree manuelement
import { LendkListPage } from '../pages/booklist/lendbook/lendbook';
import { BookListPage } from '../pages/booklist/booklist';
import { CdListPage } from '../pages/cdlist/cdlist';
import { LendCdPage } from '../pages/cdlist/lendcd/lendcd';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { BooksService } from '../services/books.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookListPage,
    LendkListPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    TabsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookListPage,
    LendkListPage,
    CdListPage,
    LendCdPage,
    SettingsPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
