import { Component } from '@angular/core';
import { SeedOperationService } from '../seed-operation.service';
import { Seed } from '../seed';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __seedService:SeedOperationService;

  constructor(seedService:SeedOperationService)
  {
    this.__seedService=seedService;
  }

  readSeed(seedId:string,seedName:string,typesOfSeeds:string,seedsStock:string,seedsPerPacket:string,image:string,about:string,discount:string,price:string,starRating:string)
  {
    console.log(seedId+" "+seedName+" "+typesOfSeeds+" "+seedsStock+" "+seedsPerPacket+" "+image+" "+about+" "+discount+" "+price+" "+starRating);
    let seedFromUser:Seed = new Seed(parseInt(seedId),seedName,typesOfSeeds,parseInt(seedsStock),parseInt(seedsPerPacket),image,about,parseInt(discount),parseInt(price),parseInt(starRating));
    this.__seedService.addSeed(seedFromUser);
  }

}
