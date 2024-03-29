(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/@angular/common/locales/dsb.js":
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/dsb.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
        if (v === 0 && i % 100 === 1 || f % 100 === 1)
            return 1;
        if (v === 0 && i % 100 === 2 || f % 100 === 2)
            return 2;
        if (v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 3 && i % 100 <= 4 ||
            f % 100 === Math.floor(f % 100) && f % 100 >= 3 && f % 100 <= 4)
            return 3;
        return 5;
    }
    exports.default = [
        'dsb',
        [['dop.', 'wótp.'], ['dopołdnja', 'wótpołdnja'], u],
        [['dopołdnja', 'wótpołdnja'], u, u],
        [
            ['n', 'p', 'w', 's', 's', 'p', 's'], ['nje', 'pón', 'wał', 'srj', 'stw', 'pět', 'sob'],
            ['njeźela', 'pónjeźele', 'wałtora', 'srjoda', 'stwórtk', 'pětk', 'sobota'],
            ['nj', 'pó', 'wa', 'sr', 'st', 'pě', 'so']
        ],
        u,
        [
            ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
            [
                'jan.', 'feb.', 'měr.', 'apr.', 'maj.', 'jun.', 'jul.', 'awg.', 'sep.', 'okt.', 'now.',
                'dec.'
            ],
            [
                'januara', 'februara', 'měrca', 'apryla', 'maja', 'junija', 'julija', 'awgusta', 'septembra',
                'oktobra', 'nowembra', 'decembra'
            ]
        ],
        [
            ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
            ['jan', 'feb', 'měr', 'apr', 'maj', 'jun', 'jul', 'awg', 'sep', 'okt', 'now', 'dec'],
            [
                'januar', 'februar', 'měrc', 'apryl', 'maj', 'junij', 'julij', 'awgust', 'september',
                'oktober', 'nowember', 'december'
            ]
        ],
        [['pś.Chr.n.', 'pó Chr.n.'], u, ['pśed Kristusowym naroźenim', 'pó Kristusowem naroźenju']],
        1,
        [6, 0],
        ['d.M.yy', 'd.M.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
        ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        { 'AUD': [u, '$'], 'PLN': ['zł'], 'THB': ['฿'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMvZHNiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUM3RSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztZQUMxRSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUks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LEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBQzdDLEtBQUs7UUFDTCxHQUFHO1FBQ0gsTUFBTTtRQUNOLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBQzlDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoLFxuICAgICAgZiA9IHBhcnNlSW50KG4udG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLCAxMCkgfHwgMDtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwMCA9PT0gMSB8fCBmICUgMTAwID09PSAxKSByZXR1cm4gMTtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwMCA9PT0gMiB8fCBmICUgMTAwID09PSAyKSByZXR1cm4gMjtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwMCA9PT0gTWF0aC5mbG9vcihpICUgMTAwKSAmJiBpICUgMTAwID49IDMgJiYgaSAlIDEwMCA8PSA0IHx8XG4gICAgICBmICUgMTAwID09PSBNYXRoLmZsb29yKGYgJSAxMDApICYmIGYgJSAxMDAgPj0gMyAmJiBmICUgMTAwIDw9IDQpXG4gICAgcmV0dXJuIDM7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdkc2InLFxuICBbWydkb3AuJywgJ3fDs3RwLiddLCBbJ2RvcG/FgmRuamEnLCAnd8OzdHBvxYJkbmphJ10sIHVdLFxuICBbWydkb3BvxYJkbmphJywgJ3fDs3Rwb8WCZG5qYSddLCB1LCB1XSxcbiAgW1xuICAgIFsnbicsICdwJywgJ3cnLCAncycsICdzJywgJ3AnLCAncyddLCBbJ25qZScsICdww7NuJywgJ3dhxYInLCAnc3JqJywgJ3N0dycsICdwxJt0JywgJ3NvYiddLFxuICAgIFsnbmplxbplbGEnLCAncMOzbmplxbplbGUnLCAnd2HFgnRvcmEnLCAnc3Jqb2RhJywgJ3N0d8OzcnRrJywgJ3DEm3RrJywgJ3NvYm90YSddLFxuICAgIFsnbmonLCAncMOzJywgJ3dhJywgJ3NyJywgJ3N0JywgJ3DEmycsICdzbyddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ2onLCAnZicsICdtJywgJ2EnLCAnbScsICdqJywgJ2onLCAnYScsICdzJywgJ28nLCAnbicsICdkJ10sXG4gICAgW1xuICAgICAgJ2phbi4nLCAnZmViLicsICdtxJtyLicsICdhcHIuJywgJ21hai4nLCAnanVuLicsICdqdWwuJywgJ2F3Zy4nLCAnc2VwLicsICdva3QuJywgJ25vdy4nLFxuICAgICAgJ2RlYy4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnamFudWFyYScsICdmZWJydWFyYScsICdtxJtyY2EnLCAnYXByeWxhJywgJ21hamEnLCAnanVuaWphJywgJ2p1bGlqYScsICdhd2d1c3RhJywgJ3NlcHRlbWJyYScsXG4gICAgICAnb2t0b2JyYScsICdub3dlbWJyYScsICdkZWNlbWJyYSdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ2onLCAnZicsICdtJywgJ2EnLCAnbScsICdqJywgJ2onLCAnYScsICdzJywgJ28nLCAnbicsICdkJ10sXG4gICAgWydqYW4nLCAnZmViJywgJ23Em3InLCAnYXByJywgJ21haicsICdqdW4nLCAnanVsJywgJ2F3ZycsICdzZXAnLCAnb2t0JywgJ25vdycsICdkZWMnXSxcbiAgICBbXG4gICAgICAnamFudWFyJywgJ2ZlYnJ1YXInLCAnbcSbcmMnLCAnYXByeWwnLCAnbWFqJywgJ2p1bmlqJywgJ2p1bGlqJywgJ2F3Z3VzdCcsICdzZXB0ZW1iZXInLFxuICAgICAgJ29rdG9iZXInLCAnbm93ZW1iZXInLCAnZGVjZW1iZXInXG4gICAgXVxuICBdLFxuICBbWydwxZsuQ2hyLm4uJywgJ3DDsyBDaHIubi4nXSwgdSwgWydwxZtlZCBLcmlzdHVzb3d5bSBuYXJvxbplbmltJywgJ3DDsyBLcmlzdHVzb3dlbSBuYXJvxbplbmp1J11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZC5NLnl5JywgJ2QuTS55JywgJ2QuIE1NTU0geScsICdFRUVFLCBkLiBNTU1NIHknXSxcbiAgWydIOm1tJywgJ0g6bW06c3MnLCAnSDptbTpzcyB6JywgJ0g6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycsJywgJy4nLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8K3JywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnRVVSJyxcbiAgJ+KCrCcsXG4gICdldXJvJyxcbiAgeydBVUQnOiBbdSwgJyQnXSwgJ1BMTic6IFsnesWCJ10sICdUSEInOiBbJ+C4vyddfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==

/***/ })

}]);
//# sourceMappingURL=81.js.map