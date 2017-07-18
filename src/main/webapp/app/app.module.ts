import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { TestJhipsterOnline2SharedModule, UserRouteAccessService } from './shared';
import { TestJhipsterOnline2HomeModule } from './home/home.module';
import { TestJhipsterOnline2AdminModule } from './admin/admin.module';
import { TestJhipsterOnline2AccountModule } from './account/account.module';
import { TestJhipsterOnline2EntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TestJhipsterOnline2SharedModule,
        TestJhipsterOnline2HomeModule,
        TestJhipsterOnline2AdminModule,
        TestJhipsterOnline2AccountModule,
        TestJhipsterOnline2EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TestJhipsterOnline2AppModule {}
