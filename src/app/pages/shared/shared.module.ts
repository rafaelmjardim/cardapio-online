import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, Home, BadgePercent, ShoppingBag, ShoppingCart, User, Search, XCircle, X, BaggageClaim, Minus, Plus, Info, LogOut, CheckCircle, CalendarClock } from "lucide-angular";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import {MatBadgeModule} from '@angular/material/badge';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatMenuModule,
        MatBadgeModule,
        MatSnackBarModule,
        LucideAngularModule.pick({ Menu, Home, BadgePercent, ShoppingBag, ShoppingCart, User, Search, XCircle, X, BaggageClaim, Minus, Plus, Info, LogOut, CheckCircle, CalendarClock }),
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatBadgeModule,
        MatSnackBarModule,
        LucideAngularModule
    ]
})
export class SharedModule { }
