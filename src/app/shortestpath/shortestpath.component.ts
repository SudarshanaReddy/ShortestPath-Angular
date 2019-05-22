import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../model/Planet';

@Component({
  selector: 'app-shortestpath',
  templateUrl: './shortestpath.component.html',
  styleUrls: ['./shortestpath.component.css']
})
export class ShortestpathComponent implements OnInit {

  planets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
     'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  startPlanet;
  endPlanet;
  planetHops: Planet[] = [];
  submitFlag = false;
  hopsSize = new Array<number>();
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {

    this.createGalaxy();

  }


  createGalaxy() {

    this.httpClient.post('http://localhost:8081/creategalaxy', {})
      .subscribe(data => console.log(data));
  }

  findShortestPath() {

    this.httpClient.get('http://localhost:8081/calculateshortestpath' + '/' + this.startPlanet + '/' + this.endPlanet)
      .subscribe(data => {
        this.capturePlanetHops(data);
      });

    this.submitFlag = true;
  }

  captureSource(event) {
     this.startPlanet = event.target.value;
     alert(this.startPlanet);
  }

  captureTarget(event) {
    this.endPlanet = event.target.value;
    alert(this.endPlanet);
  }

  capturePlanetHops(planets) {
     this.planetHops = planets;
     console.log(this.planetHops);
     for (let i = 0 ; i <  this.planetHops.length; i++) {
          this.hopsSize.push(i);
    }
  }

}
