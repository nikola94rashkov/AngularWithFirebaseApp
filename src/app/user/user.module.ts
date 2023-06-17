import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [AuthComponent, AuthComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [AuthComponent]
})
export class UserModule {}
