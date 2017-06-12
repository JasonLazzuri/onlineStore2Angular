import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-listings';

@Injectable()
export class ListingService {

  constructor() { }

  getListings(){
    return LISTINGS;
  }


  getListingById(listingId: number){
    for (var i = 0; i <= LISTINGS.length - 1; i++) {
      if (LISTINGS[i].id === listingId) {
        return LISTINGS[i];
      }
    }
  }

}
