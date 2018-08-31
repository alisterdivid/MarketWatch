// Core Dependencies
import { RouterModule } from "@angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { IndexRoutes } from "../index/index.routing";
//import { ProductModule } from "./../product/product.module";

// Components
import { IndexComponent } from "../index/index.component";
import { FooterComponent } from "../index/footer/footer.component";
import { NavbarComponent } from "../index/navbar/navbar.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(IndexRoutes)
  ],
  declarations: [
    IndexComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [NavbarComponent, FooterComponent],
  providers: []
})
export class UserModule {}