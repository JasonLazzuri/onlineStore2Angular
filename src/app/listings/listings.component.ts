import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [ListingService]

})
export class ListingsComponent implements OnInit {
  listings: FirebaseListObservable<any[]>;


  constructor(private router: Router, private listingService: ListingService){}


  goToDetailPage(clickedListing: Listing) {
    this.router.navigate(['listings', clickedListing.id]);
  };

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

}
