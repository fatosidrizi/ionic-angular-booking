import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../places.service';
import {Place} from '../place.model';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-discover',
    templateUrl: './discover.page.html',
    styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

    loadedPlaces: Place[];
    listedLoadedPlaces: Place[];

    constructor(private placesService: PlacesService, private menuCtrl: MenuController) {
    }

    ngOnInit() {
        this.loadedPlaces = this.placesService.places;
        this.listedLoadedPlaces = this.loadedPlaces;
    }

    // onOpenMenu(): void {
    //     this.menuCtrl.toggle();
    // }
    onFilterUpdate(event: CustomEvent) {
        console.log(event.detail);
    }
}
