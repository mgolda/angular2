import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recepies/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recepies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from './recepies/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { routing } from './app.routing';
import { RecipeEditComponent } from './recepies/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recepies/recipe-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    RecipeService, 
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
