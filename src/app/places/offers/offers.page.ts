import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../places.service';
import {Place} from '../place.model';

import {Router} from '@angular/router';
import {IonItemSliding} from '@ionic/angular';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.page.html',
    styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

    offers: Place[];

    constructor(
        private placesService: PlacesService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.offers = this.placesService.places;
    }

    // IonItemSliding is used to close sliding on edit.
    onEdit(offerId: string, slidingItem: IonItemSliding) {
      slidingItem.close();
      this.router.navigate(['/places', 'tabs', 'offers', 'edit-offer', offerId]);
      console.log('Editing Item', offerId);
    }
}
