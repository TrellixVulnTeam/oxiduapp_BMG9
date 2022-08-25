import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EstablishmentDetailPage } from './establishment-detail.page';
import { EstablishmentDetailPageRoutingModule } from './establishment-detail-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentDetailPageRoutingModule
  ],
  declarations: [EstablishmentDetailPage]
})
export class EstablishmentDetailPageModule {}
