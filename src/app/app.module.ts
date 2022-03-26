import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StateListComponent } from "./components/state-list/state-list.component";

//SERVICIOS
import { ServiceModule } from "./services/service.module";

@NgModule({
  declarations: [AppComponent, StateListComponent],
  imports: [BrowserModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent, StateListComponent]
})
export class AppModule {}
