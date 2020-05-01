import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:any;
	
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.blog = this.getData();
  }

  getData(){
  	return this.config.getConfig().blog;
  }

}
