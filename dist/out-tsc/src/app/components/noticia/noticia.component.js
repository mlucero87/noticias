import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var NoticiaComponent = /** @class */ (function () {
    function NoticiaComponent() {
    }
    NoticiaComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], NoticiaComponent.prototype, "noticia", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NoticiaComponent.prototype, "indice", void 0);
    NoticiaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-noticia',
            templateUrl: './noticia.component.html',
            styleUrls: ['./noticia.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], NoticiaComponent);
    return NoticiaComponent;
}());
export { NoticiaComponent };
//# sourceMappingURL=noticia.component.js.map