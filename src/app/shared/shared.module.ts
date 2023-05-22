import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ShortenPipe } from './shorten.pipe';

const components = [NavigationComponent, ModalComponent, ShortenPipe];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class SharedModule {}
