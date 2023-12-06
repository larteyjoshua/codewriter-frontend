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
import { SpinnerService } from './services/spinner.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ClipboardButtonComponent, ClipboardOptions, MarkdownModule } from 'ngx-markdown';
import { SenderCardComponent } from './components/sender-card/sender-card.component';
import { ReceiverCardComponent } from './components/receiver-card/receiver-card.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CodeGeneratorComponent,
    ImageGeneratorComponent,
    SpinnerComponent,
    SenderCardComponent,
    ReceiverCardComponent
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
    MarkdownModule.forRoot({
      clipboardOptions: {
        provide: ClipboardOptions,
        useValue: {
          buttonComponent: ClipboardButtonComponent,
        },
      },
    }),
    ToastrModule.forRoot(), 
    
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
