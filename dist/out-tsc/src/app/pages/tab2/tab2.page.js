import * as tslib_1 from "tslib";
import { NoticiasService } from './../../sercices/noticias.service';
import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(noticiasService) {
        this.noticiasService = noticiasService;
        this.categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
        this.noticias = [];
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.segment.value = this.categorias[0];
        this.cargarNoticias(this.segment.value);
    };
    Tab2Page.prototype.cambioCategoria = function (e) {
        this.noticias = [];
        this.cargarNoticias(e.detail.value);
    };
    Tab2Page.prototype.cargarNoticias = function (categoria, event) {
        var _this = this;
        this.noticiasService.getTopHeadLinesCategoria(categoria)
            .subscribe(function (resp) {
            var _a;
            if (event) {
                event.target.complete();
            }
            (_a = _this.noticias).push.apply(_a, resp.articles);
        });
    };
    Tab2Page.prototype.loadData = function (event) {
        this.cargarNoticias(this.segment.value, event);
    };
    tslib_1.__decorate([
        ViewChild(IonSegment),
        tslib_1.__metadata("design:type", IonSegment)
    ], Tab2Page.prototype, "segment", void 0);
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NoticiasService])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map