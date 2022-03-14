import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
const routes : Routes = [
  {
  path: '',
  component: MainComponent
},
{
  path:'User',
  component:LoginComponent
}
]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, MainComponent, LoginComponent],
  imports: [BrowserModule,RouterModule.forRoot(routes),HttpClientModule,ReactiveFormsModule,TableModule,CardModule,ButtonModule,FormsModule,InputTextModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
