import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRequestGetComponent } from './test-request-get/test-request-get.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    TestRequestGetComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    TestRequestGetComponent
  ]
})
export class TestRequestModule { }
