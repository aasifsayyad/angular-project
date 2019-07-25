import { DirectoryComponent } from "./directory/directory.component";
import { HomeComponent } from "./home/home.component";
import { provideRouter } from '@angular/router';

const APP_ROUTES = [
  { path: 'directory/:root', component : DirectoryComponent },
  { path: '', component : HomeComponent }
];

export const APP_ROUTES_PROVIDER = [{
  provideRouter(APP_ROUTES);
}
];
