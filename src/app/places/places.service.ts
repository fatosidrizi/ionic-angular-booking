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
            'Podujeve',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p4',
            'Ferizaj',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p5',
            'Gjilan',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p6',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p7',
            'Prishtina',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p8',
            'Podujeve',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p9',
            'Ferizaj',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p10',
            'Gjilan',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p11',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p12',
            'Prishtina',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p13',
            'Podujeve',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p14',
            'Ferizaj',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p15',
            'Gjilan',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p16',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p17',
            'Prishtina',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p18',
            'Podujeve',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p19',
            'Ferizaj',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p20',
            'Gjilan',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p21',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p22',
            'Prishtina',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p23',
            'Podujeve',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p24',
            'Ferizaj',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p25',
            'Gjilan',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p26',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p27',
            'Prishtina',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p28',
            'Podujeve',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p29',
            'Ferizaj',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p30',
            'Gjilan',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p31',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p32',
            'Prishtina',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p33',
            'Podujeve',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p34',
            'Ferizaj',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p35',
            'Gjilan',
            'City Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p36',
            'Prishtina',
            'In the heart of PRC',
            'https://cdn.pixabay.com/photo/2019/09/07/12/00/kosovo-4458639_960_720.jpg',
            149.99
        ),
        new Place(
            'p37',
            'Kamenice',
            'Near National Library',
            'https://image.shutterstock.com/image-photo/national-public-library-pristina-kosovo-600w-381413563.jpg',
            99.99
        ),
        new Place(
            'p38',
            'Mitrovice',
            'Center',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            1320
        ),
        new Place(
            'p39',
            'Ferizaj',
            'City ',
            'https://image.shutterstock.com/image-photo/panorama-pristina-kosovo-600w-1512818744.jpg',
            120
        ),
        new Place(
            'p40',
            'Gjilan',
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
