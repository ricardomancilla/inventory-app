import { stringify } from '@angular/core/src/util';

export class Product {
    
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number
        ) {
    }
}