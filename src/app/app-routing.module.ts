import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeGeneratorComponent } from './components/code-generator/code-generator.component';
import { ImageGeneratorComponent } from './components/image-generator/image-generator.component';

const routes: Routes = [
  {path: 'code', component: CodeGeneratorComponent},
  {path: 'image', component: ImageGeneratorComponent},
  {path: '', redirectTo: 'code', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
