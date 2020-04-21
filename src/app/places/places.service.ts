import {Injectable} from '@angular/core';
import {Place} from './place.model';

@Injectable({
    providedIn: 'root'
})
export class PlacesService {

    constructor() {
    }

    private _places: Place[] = [
        new Place(
            'p1',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p2',
            'Prishtina',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p3',
            'Prishtina',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
    ];

    get places() {
        return [...this._places];
    }

    getPlace(id: string) {
        return {...this._places.find(p => p.id === id)};
    }
}
