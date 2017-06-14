import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-listings';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class ListingService {
  listings: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
      this.listings = database.list('listings');
    }

  getListings(){
    return this.listings;
  }


  getListingById(listingId: number){
    for (var i = 0; i <= LISTINGS.length - 1; i++) {
      if (LISTINGS[i].id === listingId) {
        return LISTINGS[i];
      }
    }
  }

}
