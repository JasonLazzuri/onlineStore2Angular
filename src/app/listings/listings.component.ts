import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [ListingService]

})
export class ListingsComponent implements OnInit {

  constructor(private router: Router, private listingService: ListingService){}


  listings:Listing[];

  goToDetailPage(clickedListing: Listing) {
    this.router.navigate(['listings', clickedListing.id]);
  };

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

}
