import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricing:any;
	
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.pricing = this.getData();
  }

  getData(){
  	return this.config.getConfig().pricing;
  }

}
