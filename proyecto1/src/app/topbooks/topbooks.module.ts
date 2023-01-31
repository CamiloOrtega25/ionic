import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopBooksPage } from './topbooks.page';
import { TopbooksPageRoutingModule } from './topbooks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopbooksPageRoutingModule
  ],
  declarations: [TopBooksPage]
})
export class TopBooksPageModule {}
