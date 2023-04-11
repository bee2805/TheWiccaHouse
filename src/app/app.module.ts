import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthOnlyDirective } from './directives/auth-only.directive';
import { FilterPipe } from './Pipes/filter.pipe';
import { PotionCraftedModalComponent } from './potion-crafted-modal/potion-crafted-modal.component';
import { UpdatedModalComponent } from './updated-modal/updated-modal.component';
import { LoaderComponent } from './loader/loader.component';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CraftingComponent } from './crafting/crafting.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { LoggedOutComponent } from './logged-out/logged-out.component';
import { CannotCraftComponent } from './cannot-craft/cannot-craft.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    HomeComponent,
    InventoryComponent,
    CraftingComponent,
    ModalComponent,
    AuthOnlyDirective,
    FilterPipe,
    PotionCraftedModalComponent,
    UpdatedModalComponent,
    LoaderComponent,
    LoggedOutComponent,
    CannotCraftComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule, // for http functionality
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCheckboxModule, 
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
