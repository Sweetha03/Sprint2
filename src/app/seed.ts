export class Seed {
    seedId:number;
    seedName:string;
    typesOfSeeds:string;
    seedsStock:number;
    seedsPerPacket:number;
    image:string;
    about:string;
    discount:number;
    price:number;
    starRating:number;

    constructor(
        seedId:number,
        seedName:string,
        typesOfSeeds:string,
        seedsStock:number,
        seedsPerPacket:number,
        image:string,
        about:string,
        discount:number,
        price:number,
        starRating:number
    )
    {
        this.seedId = seedId;
        this.seedName = seedName;
        this.typesOfSeeds = typesOfSeeds;
        this.seedsStock = seedsStock;
        this.seedsPerPacket = seedsPerPacket;
        this.image = image;
        this.about = about;
        this.discount = discount;
        this.price = price;
        this.starRating = starRating;
    }
}
