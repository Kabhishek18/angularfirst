import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BannerComponent } from './banner/banner.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientComponent } from './client/client.component';
import { PricingComponent } from './pricing/pricing.component';
import { SocialComponent } from './social/social.component';
import { ConfigService } from './config.service';
import { ArticleComponent } from './article/article.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    BannerComponent,
    IntroComponent,
    GalleryComponent,
    TestimonialComponent,
    ClientComponent,
    PricingComponent,
    SocialComponent,
    ArticleComponent,
    BlogComponent,
    PostComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
