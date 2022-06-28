import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component'
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import{MatButtonModule} from '@angular/material/button';
import{MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule} from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import localPt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion'

import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
registerLocaleData(localPt);

import {MatGridListModule} from '@angular/material/grid-list';

import  {SlickCarouselModule}  from 'ngx-slick-carousel';
import { LinkComponent } from './components/link/link.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    LinkComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    SlickCarouselModule,
    FormsModule,
    MatGridListModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
