import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  service:any;
	
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.service = this.getData();
  }

  getData(){
  	return this.config.getConfig().service;
  }

}
