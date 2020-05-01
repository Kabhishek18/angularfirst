import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { BannerComponent } from './banner/banner.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientComponent } from './client/client.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{ path: '',   redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: BannerComponent },
  { path: 'Services', component: ContentComponent },
  { path: 'About', component: IntroComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Testimonials', component: TestimonialComponent },
  { path: 'Clients', component: ClientComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'Article/:id', component: ArticleComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo:'/404' }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
