import * as tslib_1 from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var apiKey = environment.apiKey;
var apiUrl = environment.apiUrl;
var headers = new HttpHeaders({
    'X-Api-key': apiKey
});
var NoticiasService = /** @class */ (function () {
    function NoticiasService(http) {
        this.http = http;
        this.topHeadlinesPage = 0;
        this.catagoriaPage = 0;
        this.categoriaActual = "";
    }
    NoticiasService.prototype.ejecutarQuery = function (query) {
        query = apiUrl + query;
        return this.http.get(query, { headers: headers });
    };
    NoticiasService.prototype.getTopHeadLines = function () {
        this.topHeadlinesPage++;
        return this.ejecutarQuery("/top-headlines?country=us&page=" + this.topHeadlinesPage);
    };
    NoticiasService.prototype.getTopHeadLinesCategoria = function (categoria) {
        if (this.categoriaActual == categoria) {
            this.catagoriaPage++;
        }
        else {
            this.catagoriaPage = 1;
            this.categoriaActual = categoria;
        }
        return this.ejecutarQuery("/top-headlines?country=us&category=" + categoria + "&page=" + this.catagoriaPage);
    };
    NoticiasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], NoticiasService);
    return NoticiasService;
}());
export { NoticiasService };
//# sourceMappingURL=noticias.service.js.map