import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderUtilComponent } from './components/header-util/header-util.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { LayoutComponent } from './components/layout/layout.component';
import {MatCardModule} from '@angular/material/card';

import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardsComponent } from './components/cards/cards.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUtilComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    SearchbarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgxStarRatingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
