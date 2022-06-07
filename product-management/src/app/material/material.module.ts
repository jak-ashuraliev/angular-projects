import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';


const Material = [
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule
]

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
