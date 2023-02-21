import { Injectable } from '@angular/core';
import { Seed } from './seed';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeedOperationService {

  seedArr:Seed[] = [];

  constructor(private http:HttpClient) { 
    
  }

  addSeed(seedFromUser:Seed)
  {
    this.seedArr.push(seedFromUser); 
    console.log("Inside Seed Service : Seed Added "+seedFromUser.seedId);
    console.log(" Total Seed Are :- "+this.seedArr.length);
  }
  getSeedByNumber(searchSeedId:number):Seed
  {
    let outputSeed:Seed = new Seed(0,'','',0,0,'','',0,0,0);
    for(let i=0;i<this.seedArr.length;i++)
    {
      let thisSeed:Seed = this.seedArr[i];
        if(thisSeed.seedId == searchSeedId)
        {
          outputSeed = thisSeed;
          break;
        }
    }
    return outputSeed;
  }

  getSeedArr():Seed[]
  {
    return this.seedArr;
  }

  getSeedsByStock(filterSeedsStock:number):Seed[]
  {
    let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.seedsStock == filterSeedsStock)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }

  getSeedsPerPacket(filterSeedsPerPacket:number):Seed[]
  {
    let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.seedsPerPacket == filterSeedsPerPacket)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }
  getSeedByTypesOfSeeds(filterTypesOfSeeds:string):Seed[]
  {
    let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.typesOfSeeds == filterTypesOfSeeds)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }
  getSeedByStarRating(filterStarRating:number):Seed[]
  {
   
   let outputArr:Seed[] = [];

    this.seedArr.forEach(s=>{
      if(s.starRating == filterStarRating)
      {
        outputArr.push(s);
      }
    });

    return outputArr;
  }
}
