import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule, ClrIconModule } from '@clr/angular';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { CodeGeneratorComponent } from './components/code-generator/code-generator.component';
import { ImageGeneratorComponent } from './components/image-generator/image-generator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowDownCircle, heroClipboard,heroPaperAirplane } from '@ng-icons/heroicons/outline';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import { ErrorAlertComponent } from './components/error-alert/error-alert.component'
import { SpinnerService } from './services/spinner.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CodeGeneratorComponent,
    ImageGeneratorComponent,
    SpinnerComponent,
    SuccessAlertComponent,
    ErrorAlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    ClrIconModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ heroArrowDownCircle, heroClipboard,heroPaperAirplane  }),
  ],
  providers: [SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
