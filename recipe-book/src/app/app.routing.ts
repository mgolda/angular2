import { Routes, RouterModule } from "@angular/router";
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RECIPE_ROUTES } from './recepies/recipes.routes';

const APP_ROUTES = [
	{path: '', redirectTo: '/recipes', pathMatch: 'full'},
	{path: 'recipes', component: RecepiesComponent, children: RECIPE_ROUTES},
	{path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);