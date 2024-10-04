import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X, Minus, Plus, Info } from 'lucide-angular';
import { MatTabsModule } from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideNgxMask, NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, ReactiveFormsModule, FormsModule, LayoutModule, MatTabsModule, LucideAngularModule.pick({ Menu, Home, BadgePercent, ShoppingBag, User, Search, XCircle, BaggageClaim, X, Minus, Plus, Info }), NgxMaskDirective, NgxMaskPipe),
        provideNgxMask(),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    ]
})
  .catch(err => console.error(err));
