import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../model/Planet';

@Component({
  selector: 'app-shortestpath',
  templateUrl: './shortestpath.component.html',
  styleUrls: ['./shortestpath.component.css']
})
export class ShortestpathComponent implements OnInit {

  planets;
  startPlanet;
  endPlanet;
  planetHops = new Array<Planet>();
  submitFlag = false;
  hopsSize = new Array<number>();
  submitCount;
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {

    this.createGalaxy();
    this.getAllPlanets();

  }


  createGalaxy() {

    this.httpClient.post('http://localhost:8081/creategalaxy', {});
  }

  getAllPlanets() {
    this.httpClient.get('http://localhost:8081/getAllPlanets')
      .subscribe(data => {
        this.planets = data;
      });
  }

  findShortestPath() {

    this.httpClient.get('http://localhost:8081/calculateshortestpath' + '/' + this.startPlanet + '/' + this.endPlanet)
      .subscribe(data => {
        this.capturePlanetHops(data);
      });

    this.hopsSize = [];
    this.submitFlag = true;
  }

  captureSource(event) {
     this.startPlanet = event.target.value;
  }

  captureTarget(event) {
    this.endPlanet = event.target.value;
  }

  capturePlanetHops(planets) {
     this.planetHops = planets;
     for (let i = 0 ; i <  this.planetHops.length; i++) {
          this.hopsSize.push(i);
    }


  }

}
