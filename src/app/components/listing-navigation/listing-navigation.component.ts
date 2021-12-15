import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SubscriptionLike } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-listing-navigation',
  templateUrl: './listing-navigation.component.html',
  styleUrls: ['./listing-navigation.component.scss']
})
export class ListingNavigationComponent implements OnDestroy {

  // Booleans
  isCarPage: boolean = false;
  isColorPage: boolean = false;
  isUserPage: boolean = false;

  // Subscriptions
  routerSubscription: SubscriptionLike;

  constructor(private router: Router) {
    this.routerSubscription = this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      ).subscribe(
        (event: NavigationEnd) => {
          this.isCarPage = event.url.includes('car');
          this.isColorPage = event.url.includes('color');
          this.isUserPage = event.url.includes('user');
        }
      );
   }

   ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  public navigate(name: string): void {
    this.router.navigateByUrl('listing/' + name);
  }
}
