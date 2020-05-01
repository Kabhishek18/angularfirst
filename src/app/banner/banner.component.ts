import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  header:any;
	
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
  	this.header = this.getHeader();
  }

  getHeader(){
  	return this.config.getConfig().header;
  }
}
