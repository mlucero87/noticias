import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NoticiasService } from 'src/app/sercices/noticias.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(noticiasServices) {
        this.noticiasServices = noticiasServices;
        this.noticias = [];
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.cargarNoticias();
    };
    Tab1Page.prototype.loadData = function (event) {
        this.cargarNoticias(event);
    };
    Tab1Page.prototype.cargarNoticias = function (event) {
        var _this = this;
        this.noticiasServices.getTopHeadLines()
            .subscribe(function (resp) {
            var _a;
            if (resp.articles.length === 0) {
                debugger;
                if (event) {
                    event.target.disabled = true;
                    event.target.complete();
                    return;
                }
            }
            (_a = _this.noticias).push.apply(_a, resp.articles);
            if (event) {
                event.target.complete();
            }
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [NoticiasService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map