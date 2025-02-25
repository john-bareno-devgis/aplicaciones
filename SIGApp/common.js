"use strict";
(self["webpackChunkrealgis"] = self["webpackChunkrealgis"] || []).push([["common"],{

/***/ 21172:
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/Button.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ o),
/* harmony export */   "R": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _Theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Theme.js */ 85741);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/

class n extends _Theme_js__WEBPACK_IMPORTED_MODULE_0__.a5 {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) && (this._clear = !0);
  }
  _draw() {
    let e = this.width(),
      a = this.height(),
      r = e,
      n = a,
      o = r / Math.abs(e),
      h = n / Math.abs(a);
    if ((0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.g)(r) && (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.g)(n)) {
      let e = Math.min(r, n) / 2,
        s = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.az)(this.get("cornerRadiusTL", 8), e),
        a = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.az)(this.get("cornerRadiusTR", 8), e),
        c = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.az)(this.get("cornerRadiusBR", 8), e),
        l = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.az)(this.get("cornerRadiusBL", 8), e),
        d = Math.min(Math.abs(r / 2), Math.abs(n / 2));
      s = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.aj)(s, 0, d), a = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.aj)(a, 0, d), c = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.aj)(c, 0, d), l = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.aj)(l, 0, d);
      const b = this._display;
      b.moveTo(s * o, 0), b.lineTo(r - a * o, 0), a > 0 && b.arcTo(r, 0, r, a * h, a), b.lineTo(r, n - c * h), c > 0 && b.arcTo(r, n, r - c * o, n, c), b.lineTo(l * o, n), l > 0 && b.arcTo(0, n, 0, n - l * h, l), b.lineTo(0, s * h), s > 0 && b.arcTo(0, 0, s * o, 0, s), b.closePath();
    }
  }
}
Object.defineProperty(n, "className", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "RoundedRectangle"
}), Object.defineProperty(n, "classNames", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: _Theme_js__WEBPACK_IMPORTED_MODULE_0__.a5.classNames.concat([n.className])
});
class o extends _Theme_js__WEBPACK_IMPORTED_MODULE_0__.a3 {
  _afterNew() {
    this._settings.themeTags = (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.ak)(this._settings.themeTags, ["button"]), super._afterNew(), this._settings.background || this.set("background", n.new(this._root, {
      themeTags: (0,_Theme_js__WEBPACK_IMPORTED_MODULE_0__.ak)(this._settings.themeTags, ["background"])
    }));
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("icon")) {
      const e = this._prevSettings.icon,
        s = this.get("icon");
      s !== e && (this._disposeProperty("icon"), e && e.dispose(), s && this.children.push(s), this._prevSettings.icon = s);
    }
    if (this.isDirty("label")) {
      const e = this._prevSettings.label,
        s = this.get("label");
      s !== e && (this._disposeProperty("label"), e && e.dispose(), s && this.children.push(s), this._prevSettings.label = s);
    }
  }
}
Object.defineProperty(o, "className", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "Button"
}), Object.defineProperty(o, "classNames", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: _Theme_js__WEBPACK_IMPORTED_MODULE_0__.a3.classNames.concat([o.className])
});


/***/ }),

/***/ 58222:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/geometryEngineJSON.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ T),
/* harmony export */   "B": () => (/* binding */ b),
/* harmony export */   "C": () => (/* binding */ v),
/* harmony export */   "D": () => (/* binding */ z),
/* harmony export */   "E": () => (/* binding */ I),
/* harmony export */   "F": () => (/* binding */ V),
/* harmony export */   "G": () => (/* binding */ H),
/* harmony export */   "H": () => (/* binding */ B),
/* harmony export */   "I": () => (/* binding */ _),
/* harmony export */   "J": () => (/* binding */ q),
/* harmony export */   "K": () => (/* binding */ C),
/* harmony export */   "L": () => (/* binding */ P),
/* harmony export */   "M": () => (/* binding */ G),
/* harmony export */   "N": () => (/* binding */ M),
/* harmony export */   "a": () => (/* binding */ i),
/* harmony export */   "b": () => (/* binding */ a),
/* harmony export */   "c": () => (/* binding */ r),
/* harmony export */   "d": () => (/* binding */ o),
/* harmony export */   "e": () => (/* binding */ t),
/* harmony export */   "f": () => (/* binding */ s),
/* harmony export */   "g": () => (/* binding */ O),
/* harmony export */   "h": () => (/* binding */ u),
/* harmony export */   "i": () => (/* binding */ c),
/* harmony export */   "j": () => (/* binding */ p),
/* harmony export */   "k": () => (/* binding */ m),
/* harmony export */   "l": () => (/* binding */ y),
/* harmony export */   "m": () => (/* binding */ x),
/* harmony export */   "n": () => (/* binding */ S),
/* harmony export */   "o": () => (/* binding */ g),
/* harmony export */   "p": () => (/* binding */ w),
/* harmony export */   "q": () => (/* binding */ D),
/* harmony export */   "r": () => (/* binding */ d),
/* harmony export */   "s": () => (/* binding */ h),
/* harmony export */   "t": () => (/* binding */ f),
/* harmony export */   "u": () => (/* binding */ A),
/* harmony export */   "v": () => (/* binding */ R),
/* harmony export */   "w": () => (/* binding */ l),
/* harmony export */   "x": () => (/* binding */ j),
/* harmony export */   "y": () => (/* binding */ E),
/* harmony export */   "z": () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometryEngineBase.js */ 77640);
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/geometryAdapters/json.js */ 17409);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/


function t(n) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.extendedSpatialReferenceInfo(n);
}
function r(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.clip(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function i(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.cut(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function a(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.contains(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function o(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.crosses(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function s(t, r, i, a) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.distance(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a);
}
function u(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.equals(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function c(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.intersects(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function f(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.touches(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function l(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.within(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function p(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.disjoint(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function g(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.overlaps(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function d(t, r, i, a) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.relate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a);
}
function m(t, r) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.isSimple(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r);
}
function h(t, r) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.simplify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r);
}
function y(t, r, i = !1) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.convexHull(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function x(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.difference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function S(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.symmetricDifference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function w(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.intersect(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function A(t, r, i = null) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.union(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function D(t, r, i, a, o, s, u) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.offset(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a, o, s, u);
}
function R(t, r, i, a, o = !1) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.buffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a, o);
}
function j(t, r, i, a, o, s, u) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicBuffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a, o, s, u);
}
function E(t, r, i, a = !0) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestCoordinate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a);
}
function L(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestVertex(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function T(t, r, i, a, o) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.nearestVertices(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a, o);
}
function b(n, t, r, i) {
  if (null == t || null == i) throw new Error("Illegal Argument Exception");
  const a = _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.rotate(t, r, i);
  return a.spatialReference = n, a;
}
function v(n, t, r) {
  if (null == t || null == r) throw new Error("Illegal Argument Exception");
  const i = _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.flipHorizontal(t, r);
  return i.spatialReference = n, i;
}
function z(n, t, r) {
  if (null == t || null == r) throw new Error("Illegal Argument Exception");
  const i = _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.flipVertical(t, r);
  return i.spatialReference = n, i;
}
function I(t, r, i, a, o) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.generalize(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a, o);
}
function V(t, r, i, a) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.densify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a);
}
function H(t, r, i, a, o = 0) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicDensify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a, o);
}
function B(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.planarArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function _(t, r, i) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.planarLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function q(t, r, i, a) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a);
}
function C(t, r, i, a) {
  return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.geodesicLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i, a);
}
function P(t, r, i) {
  return null == r || null == i ? [] : _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.intersectLinesToPoints(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__.jsonAdapter, t, r, i);
}
function G(n, t) {
  _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.changeDefaultSpatialReferenceTolerance(n, t);
}
function M(n) {
  _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__.G.clearDefaultSpatialReferenceTolerance(n);
}
const O = Object.freeze(Object.defineProperty({
  __proto__: null,
  buffer: R,
  changeDefaultSpatialReferenceTolerance: G,
  clearDefaultSpatialReferenceTolerance: M,
  clip: r,
  contains: a,
  convexHull: y,
  crosses: o,
  cut: i,
  densify: V,
  difference: x,
  disjoint: p,
  distance: s,
  equals: u,
  extendedSpatialReferenceInfo: t,
  flipHorizontal: v,
  flipVertical: z,
  generalize: I,
  geodesicArea: q,
  geodesicBuffer: j,
  geodesicDensify: H,
  geodesicLength: C,
  intersect: w,
  intersectLinesToPoints: P,
  intersects: c,
  isSimple: m,
  nearestCoordinate: E,
  nearestVertex: L,
  nearestVertices: T,
  offset: D,
  overlaps: g,
  planarArea: B,
  planarLength: _,
  relate: d,
  rotate: b,
  simplify: h,
  symmetricDifference: S,
  touches: f,
  union: A,
  within: l
}, Symbol.toStringTag, {
  value: "Module"
}));


/***/ }),

/***/ 2153:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "persistable": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Error.js */ 32995);
/* harmony import */ var _MD5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MD5.js */ 95409);
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../multiOriginJSONSupportUtils.js */ 65341);
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../urlUtils.js */ 55050);
/* harmony import */ var _uuid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../uuid.js */ 28772);
/* harmony import */ var _metadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../metadata.js */ 69778);
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PropertyOrigin.js */ 61434);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property.js */ 9497);
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ 87640);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/persistableUrlUtils.js */ 29184);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/










function j(t) {
  const r = t?.origins ?? [void 0];
  return (e, o) => {
    const s = U(t, e, o);
    for (const t of r) {
      const r = (0,_property_js__WEBPACK_IMPORTED_MODULE_7__.propertyJSONMeta)(e, t, o);
      for (const t in s) r[t] = s[t];
    }
  };
}
function U(t, r, e) {
  if ("resource" === t?.type) return w(t, r, e);
  switch (t?.type ?? "other") {
    case "other":
      return {
        read: !0,
        write: !0
      };
    case "url":
      {
        const {
          read: t,
          write: r
        } = _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.a;
        return {
          read: t,
          write: r
        };
      }
  }
}
function w(t, r, n) {
  const i = (0,_metadata_js__WEBPACK_IMPORTED_MODULE_5__.getPropertyMetadata)(r, n);
  return {
    type: String,
    read: (t, r, e) => {
      const o = (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.r)(t, r, e);
      return i.type === String ? o : "function" == typeof i.type ? new i.type({
        url: o
      }) : void 0;
    },
    write: {
      writer(r, p, c, u) {
        if (!u?.resources) return "string" == typeof r ? void (p[c] = (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(r, u)) : void (p[c] = r.write({}, u));
        const l = x(r),
          m = (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.t)(l, {
            ...u,
            verifyItemRelativeUrls: u?.verifyItemRelativeUrls ? {
              writtenUrls: u.verifyItemRelativeUrls.writtenUrls,
              rootPath: void 0
            } : void 0
          }, _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.M.NO),
          d = i.type !== String && (!(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_2__.isMultiOriginJSONMixin)(this) || u?.origin && this.originIdOf(n) > (0,_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_6__.nameToId)(u.origin)),
          h = {
            object: this,
            propertyName: n,
            value: r,
            targetUrl: m,
            dest: p,
            targetPropertyName: c,
            context: u,
            params: t
          };
        u?.portalItem && m && !(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isAbsolute)(m) ? d && t?.contentAddressed ? I(h) : d ? N(h) : P(h) : u?.portalItem && (null == m || null != (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.i)(m) || (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isBlobProtocol)(m) || d) ? I(h) : p[c] = m;
      }
    }
  };
}
function I(e) {
  const {
    targetUrl: o,
    params: p,
    value: u,
    context: a,
    dest: l,
    targetPropertyName: d
  } = e;
  if (!a.portalItem) return;
  const f = (0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_9__.p)(o),
    y = b(u, o, a);
  if (p?.contentAddressed && "json" !== y.type) return void a.messages?.push(new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("persistable:contentAddressingUnsupported", `Property "${d}" is trying to serializing a resource with content of type ${y.type} with content addressing. Content addressing is only supported for json resources.`, {
    content: y
  }));
  const g = p?.contentAddressed && "json" === y.type ? (0,_MD5_js__WEBPACK_IMPORTED_MODULE_1__.createMD5Hash)(y.jsonString) : f?.filename ?? (0,_uuid_js__WEBPACK_IMPORTED_MODULE_4__.generateUUID)(),
    v = (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.join)(p?.prefix ?? f?.prefix, g),
    j = `${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)(y)}`;
  if (p?.contentAddressed && a.resources && "json" === y.type) {
    const t = a.resources.toKeep.find(t => t.resource.path === j) ?? a.resources.toAdd.find(t => t.resource.path === j);
    if (t) return void (l[d] = t.resource.itemRelativeUrl);
  }
  const U = a.portalItem.resourceFromPath(j);
  (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.isBlobProtocol)(o) && a.resources && a.resources.pendingOperations.push((0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.blobUrlToBlob)(o).then(t => {
    U.path = `${v}.${(0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)({
      type: "blob",
      blob: t
    })}`, l[d] = U.itemRelativeUrl;
  }).catch(() => {}));
  const w = p?.compress ?? !1;
  a.resources && S({
    ...e,
    resource: U,
    content: y,
    compress: w,
    updates: a.resources.toAdd
  }), l[d] = U.itemRelativeUrl;
}
function N(t) {
  const {
    context: r,
    targetUrl: e,
    params: o,
    value: s,
    dest: n,
    targetPropertyName: i
  } = t;
  if (!r.portalItem) return;
  const c = r.portalItem.resourceFromPath(e),
    u = b(s, e, r),
    a = (0,_portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__.getResourceContentExtension)(u),
    l = (0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__.getPathExtension)(c.path),
    d = o?.compress ?? !1;
  a === l ? (r.resources && S({
    ...t,
    resource: c,
    content: u,
    compress: d,
    updates: r.resources.toUpdate
  }), n[i] = e) : I(t);
}
function P({
  context: t,
  targetUrl: r,
  dest: e,
  targetPropertyName: o
}) {
  t.portalItem && t.resources && (t.resources.toKeep.push({
    resource: t.portalItem.resourceFromPath(r),
    compress: !1
  }), e[o] = r);
}
function S({
  object: t,
  propertyName: r,
  updates: e,
  resource: o,
  content: s,
  compress: n
}) {
  e.push({
    resource: o,
    content: s,
    compress: n,
    finish: e => {
      O(t, r, e);
    }
  });
}
function b(t, r, e) {
  return "string" == typeof t ? {
    type: "url",
    url: r
  } : {
    type: "json",
    jsonString: JSON.stringify(t.toJSON(e))
  };
}
function x(t) {
  return null == t ? null : "string" == typeof t ? t : t.url;
}
function O(t, r, e) {
  "string" == typeof t[r] ? t[r] = e.url : t[r].url = e.url;
}


/***/ }),

/***/ 69851:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/perspectiveUtils.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectiveTransform": () => (/* binding */ j),
/* harmony export */   "transformProjective": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/mat3.js */ 38974);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chunks/mat3f64.js */ 53251);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/vec2.js */ 80775);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/vec3.js */ 92950);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/vec3f64.js */ 77765);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





const f = (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.c)(),
  i = (0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),
  e = (0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),
  p = (0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)();
function h(t, r, n) {
  return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.s)(f, r[0], r[1], 1), (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.t)(f, f, (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.t)(i, n)), 0 === f[2] ? (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__.s)(t, f[0], f[1]) : (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_2__.s)(t, f[0] / f[2], f[1] / f[2]);
}
function j(s, n, o) {
  return k(e, n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]), k(p, o[0], o[1], o[2], o[3], o[4], o[5], o[6], o[7]), (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(s, (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.a)(e, e), p), 0 !== s[8] && (s[0] /= s[8], s[1] /= s[8], s[2] /= s[8], s[3] /= s[8], s[4] /= s[8], s[5] /= s[8], s[6] /= s[8], s[7] /= s[8], s[8] /= s[8]), s;
}
function k(o, c, u, e, p, h, j, k, v) {
  (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.s)(o, c, e, h, u, p, j, 1, 1, 1), (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.s)(f, k, v, 1), (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.a)(i, o);
  const [x, b, d] = (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.t)(f, f, (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.t)(i, i));
  return (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.s)(i, x, 0, 0, 0, b, 0, 0, 0, d), (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_0__.m)(o, i, o);
}


/***/ }),

/***/ 60146:
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/WorkerHandle.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkerHandle": () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../arrayUtils.js */ 19420);
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handleUtils.js */ 70120);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Logger.js */ 28191);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../promiseUtils.js */ 30801);
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workers.js */ 78914);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





class h {
  constructor(e, t, r, h, o = {}) {
    this._mainMethod = t, this._transferLists = r, this._listeners = [], this._promise = (0,_workers_js__WEBPACK_IMPORTED_MODULE_4__.open)(e, {
      ...o,
      schedule: h
    }).then(e => {
      if (void 0 === this._thread) {
        this._thread = e, this._promise = null, o.hasInitialize && this.broadcast({}, "initialize");
        for (const e of this._listeners) this._connectListener(e);
      } else e.close();
    }), this._promise.catch(t => _Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`));
  }
  on(s, r) {
    const i = {
      removed: !1,
      eventName: s,
      callback: r,
      threadHandle: null
    };
    return this._listeners.push(i), this._connectListener(i), (0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__.makeHandle)(() => {
      i.removed = !0, (0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__.remove)(this._listeners, i), this._thread && null != i.threadHandle && i.threadHandle.remove();
    });
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null, this._listeners.length = 0, this._transferLists = {};
  }
  invoke(e, t) {
    return this.invokeMethod(this._mainMethod, e, t);
  }
  invokeMethod(e, t, s) {
    if (this._thread) {
      const r = this._transferLists[e],
        i = r ? r(t) : [];
      return this._thread.invoke(e, t, {
        transferList: i,
        signal: s
      });
    }
    return this._promise ? this._promise.then(() => ((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__.throwIfAborted)(s), this.invokeMethod(e, t, s))) : Promise.reject(null);
  }
  broadcast(e, t) {
    return this._thread ? Promise.all(this._thread.broadcast(t, e)).then(() => {}) : this._promise ? this._promise.then(() => this.broadcast(e, t)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e) {
    this._thread && this._thread.on(e.eventName, e.callback).then(t => {
      e.removed || (e.threadHandle = t);
    });
  }
}


/***/ }),

/***/ 86074:
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/geohash/geohashUtils.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertGeohash32ToXY": () => (/* binding */ C),
/* harmony export */   "decodeBase32Char": () => (/* binding */ a),
/* harmony export */   "decodeGeohash": () => (/* binding */ y),
/* harmony export */   "decodeGeohashXY": () => (/* binding */ X),
/* harmony export */   "encodeBase32Char": () => (/* binding */ g),
/* harmony export */   "encodeGeohash": () => (/* binding */ p),
/* harmony export */   "getRelativeGeohash": () => (/* binding */ k),
/* harmony export */   "setGeohashBuf": () => (/* binding */ b),
/* harmony export */   "setGeohashXY": () => (/* binding */ Y),
/* harmony export */   "unpackXBits": () => (/* binding */ F),
/* harmony export */   "unpackYBits": () => (/* binding */ j)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t = 16,
  n = 8,
  o = 4,
  e = 2,
  r = 1,
  c = new Float64Array(2),
  f = new Float64Array(2),
  l = -90,
  u = 90,
  h = -180,
  s = 180,
  i = "0123456789bcdefghjkmnpqrstuvwxyz";
function a(t) {
  return t <= 57 ? t - 48 : t <= 104 ? t - 88 : t <= 107 ? t - 89 : t <= 110 ? t - 90 : t - 91;
}
function g(t) {
  return i[t];
}
function A(t) {
  return (t[0] + t[1]) / 2;
}
function d(t, n, o) {
  return t[0] = n, t[1] = o, t;
}
function M(t, n) {
  const o = A(t),
    e = n,
    r = !n;
  t[0] = r * t[0] + e * o, t[1] = r * o + e * t[1];
}
function w(t, n) {
  const o = n > A(t);
  return M(t, o), o;
}
function y(i, g) {
  const w = d(c, l, u),
    y = d(f, h, s);
  for (let c = 0; c < g.length; c++) {
    const f = a(g.charCodeAt(c));
    c % 2 == 0 ? (M(y, !!(t & f)), M(y, !!(o & f)), M(y, !!(r & f)), M(w, !!(n & f)), M(w, !!(e & f))) : (M(w, !!(t & f)), M(w, !!(o & f)), M(w, !!(r & f)), M(y, !!(n & f)), M(y, !!(e & f)));
  }
  return i[0] = A(w), i[1] = A(y), i;
}
function C(t, n) {
  let o = 0,
    e = 0,
    r = 30,
    c = 30;
  for (let f = 0; f < n.length; f++) {
    const t = a(n.charCodeAt(f)),
      l = f % 2 == 0;
    r -= l ? 3 : 2, c -= l ? 2 : 3, o |= F(t, l) << r, e |= j(t, l) << c;
  }
  return {
    geohashX: o,
    geohashY: e
  };
}
function X(t, n) {
  let o = -90,
    e = 90,
    r = -180,
    c = 180;
  for (let f = 0; f < n; f++) {
    const n = Math.ceil((f + 1) / 2),
      l = Math.floor((f + 1) / 2),
      u = 1 - f % 2,
      h = 30 - (3 * n + 2 * l),
      s = 30 - (2 * n + 3 * l),
      i = 3 * u + 2 * (1 - u),
      a = 2 * u + 3 * (1 - u),
      g = 3 * u + 7 * (1 - u) << s,
      A = (7 * u + 3 * (1 - u) << h & t.geohashX) >> h,
      d = (g & t.geohashY) >> s;
    for (let t = i - 1; t >= 0; t--) {
      const n = (r + c) / 2,
        o = A & 1 << t ? 1 : 0;
      r = (1 - o) * r + o * n, c = (1 - o) * n + o * c;
    }
    for (let t = a - 1; t >= 0; t--) {
      const n = (o + e) / 2,
        r = d & 1 << t ? 1 : 0;
      o = (1 - r) * o + r * n, e = (1 - r) * n + r * e;
    }
  }
  return [r, o, c, e];
}
function Y(t, n, o, e) {
  e % 2 && (e += 1);
  let r = 0,
    c = 0,
    f = -90,
    l = 90,
    u = -180,
    h = 180;
  for (let s = 0; s < e / 2; s++) {
    for (let t = 0; t < 5; t++) {
      const n = (u + h) / 2,
        e = o > n ? 1 : 0;
      r |= e << 29 - (t + 5 * s), u = (1 - e) * u + e * n, h = (1 - e) * n + e * h;
    }
    for (let t = 0; t < 5; t++) {
      const o = (f + l) / 2,
        e = n > o ? 1 : 0;
      c |= e << 29 - (t + 5 * s), f = (1 - e) * f + e * o, l = (1 - e) * o + e * l;
    }
  }
  t.geohashX = r, t.geohashY = c;
}
function b(t, n, o, e, r) {
  r % 2 && (r += 1);
  let c = 0,
    f = 0,
    l = -90,
    u = 90,
    h = -180,
    s = 180;
  for (let i = 0; i < r / 2; i++) {
    for (let t = 0; t < 5; t++) {
      const n = (h + s) / 2,
        o = e > n ? 1 : 0;
      c |= o << 29 - (t + 5 * i), h = (1 - o) * h + o * n, s = (1 - o) * n + o * s;
    }
    for (let t = 0; t < 5; t++) {
      const n = (l + u) / 2,
        e = o > n ? 1 : 0;
      f |= e << 29 - (t + 5 * i), l = (1 - e) * l + e * n, u = (1 - e) * n + e * u;
    }
  }
  t[2 * n] = c, t[2 * n + 1] = f;
}
function p(t, n, o) {
  let e = "";
  const r = d(c, -90, 90),
    l = d(f, -180, 180);
  for (let c = 0; c < o; c++) {
    let o = 0;
    !(c % 2) ? (o |= w(l, n) << 4, o |= w(r, t) << 3, o |= w(l, n) << 2, o |= w(r, t) << 1, o |= w(l, n) << 0) : (o |= w(r, t) << 4, o |= w(l, n) << 3, o |= w(r, t) << 2, o |= w(l, n) << 1, o |= w(r, t) << 0), e += g(o);
  }
  return e;
}
function x(t, n, c) {
  return c ? t & r | (n & r) << 1 | (t & e) << 1 | (n & e) << 2 | (t & o) << 2 : n & r | (t & r) << 1 | (n & e) << 1 | (t & e) << 2 | (n & o) << 2;
}
function F(c, f) {
  return f ? r & c | (o & c) >> 1 | (t & c) >> 2 : (e & c) >> 1 | (n & c) >> 2;
}
function j(c, f) {
  return f ? (e & c) >> 1 | (n & c) >> 2 : r & c | (o & c) >> 1 | (t & c) >> 2;
}
function k(c, f, l) {
  const u = !((c.length - 1) % 2),
    h = c.substring(0, c.length - 1),
    s = a(c.charCodeAt(c.length - 1));
  let i = 0,
    A = 0,
    d = 0,
    M = 0;
  u ? (i = 8, A = 4, d = r & s | (o & s) >> 1 | (t & s) >> 2, M = (e & s) >> 1 | (n & s) >> 2) : (i = 4, A = 8, M = r & s | (o & s) >> 1 | (t & s) >> 2, d = (e & s) >> 1 | (n & s) >> 2);
  const w = d + f,
    y = M + l,
    C = Math.floor(w / i),
    X = Math.floor(y / A),
    Y = g(x(w - C * i, y - X * A, u));
  return c.length > 1 && (C || X) ? k(h, C, X) + Y : h + Y;
}


/***/ }),

/***/ 15390:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryEngineJSON.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buffer": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.v),
/* harmony export */   "changeDefaultSpatialReferenceTolerance": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "clearDefaultSpatialReferenceTolerance": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.N),
/* harmony export */   "clip": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.c),
/* harmony export */   "contains": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "convexHull": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.l),
/* harmony export */   "crosses": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.d),
/* harmony export */   "cut": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.a),
/* harmony export */   "densify": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "difference": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.m),
/* harmony export */   "disjoint": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.j),
/* harmony export */   "distance": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   "equals": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.h),
/* harmony export */   "extendedSpatialReferenceInfo": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.e),
/* harmony export */   "flipHorizontal": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "flipVertical": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.D),
/* harmony export */   "generalize": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "geodesicArea": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.J),
/* harmony export */   "geodesicBuffer": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.x),
/* harmony export */   "geodesicDensify": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.G),
/* harmony export */   "geodesicLength": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.K),
/* harmony export */   "intersect": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.p),
/* harmony export */   "intersectLinesToPoints": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.L),
/* harmony export */   "intersects": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.i),
/* harmony export */   "isSimple": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.k),
/* harmony export */   "nearestCoordinate": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.y),
/* harmony export */   "nearestVertex": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.z),
/* harmony export */   "nearestVertices": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   "offset": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.q),
/* harmony export */   "overlaps": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.o),
/* harmony export */   "planarArea": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.H),
/* harmony export */   "planarLength": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "relate": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.r),
/* harmony export */   "rotate": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.B),
/* harmony export */   "simplify": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.s),
/* harmony export */   "symmetricDifference": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.n),
/* harmony export */   "touches": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.t),
/* harmony export */   "union": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.u),
/* harmony export */   "within": () => (/* reexport safe */ _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__.w)
/* harmony export */ });
/* harmony import */ var _chunks_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/geometryEngineBase.js */ 77640);
/* harmony import */ var _geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometryAdapters/json.js */ 17409);
/* harmony import */ var _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/geometryEngineJSON.js */ 58222);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/




/***/ }),

/***/ 61849:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/projection/projectVectorToDehydratedPoint.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectVectorToDehydratedPoint": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ 77765);
/* harmony import */ var _projectBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectBuffer.js */ 99128);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/


function o(r, o, c) {
  return (0,_projectBuffer_js__WEBPACK_IMPORTED_MODULE_1__.projectBuffer)(r, o, 0, t, c.spatialReference, 0, 1) ? (c.x = t[0], c.y = t[1], c.z = t[2], c) : null;
}
const t = (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)();


/***/ }),

/***/ 26793:
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/objectIdUtils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findLastObjectIdFromFeatures": () => (/* binding */ n),
/* harmony export */   "initialObjectId": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t = 1;
function n(t, n) {
  let o = 0;
  for (const e of n) {
    const n = e.attributes?.[t];
    "number" == typeof n && isFinite(n) && (o = Math.max(o, n));
  }
  return o;
}


/***/ }),

/***/ 32927:
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uploadProgressWeights": () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e = {
  upload: {
    createFromFiles: .8,
    loadMesh: .2
  },
  uploadAssetBlobs: {
    prepareAssetItems: .9,
    uploadAssetItems: .1
  },
  uploadConvertibleSource: {
    uploadEditSource: .5,
    serviceAssetsToGlb: .5
  },
  uploadLocalMesh: {
    meshToAssetBlob: .5,
    uploadAssetBlobs: .5
  }
};


/***/ }),

/***/ 61223:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcGISCachedService": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry.js */ 6010);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 9497);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 83382);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 19420);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 67087);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ 66508);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 20891);
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../support/TileInfo.js */ 51015);
/* harmony import */ var _support_TileInfoTilemapCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../support/TileInfoTilemapCache.js */ 64914);
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/TilemapCache.js */ 75512);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 68230);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/












const p = p => {
  let n = class extends p {
    constructor() {
      super(...arguments), this.copyright = null, this.minScale = 0, this.maxScale = 0, this.spatialReference = null, this.tileInfo = null, this.tilemapCache = null;
    }
    destroy() {
      this.tilemapCache?.destroy?.();
    }
    readMinScale(e, o) {
      return null != o.minLOD && null != o.maxLOD ? e : 0;
    }
    readMaxScale(e, o) {
      return null != o.minLOD && null != o.maxLOD ? e : 0;
    }
    get supportsBlankTile() {
      return this.version >= 10.2;
    }
    readTilemapCache(e, o, r) {
      const t = o.capabilities?.includes("Tilemap");
      let {
        minLOD: a,
        maxLOD: p,
        minScale: n,
        maxScale: c
      } = o;
      if (null == a && null == p && 0 !== n && 0 !== c) {
        const e = e => Math.round(1e4 * e) / 1e4;
        n = e(n || o.tileInfo.lods[0].scale), c = e(c || o.tileInfo.lods[o.tileInfo.lods.length - 1].scale);
        for (const r of o.tileInfo.lods) {
          const o = e(r.scale);
          a = o >= n ? r.level : a, p = o >= c ? r.level : p;
        }
      }
      if (t) return new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_10__.TilemapCache({
        layer: this,
        minLOD: a,
        maxLOD: p
      });
      if (o.tileInfo) {
        const e = new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
        return e.read(o.tileInfo, r), new _support_TileInfoTilemapCache_js__WEBPACK_IMPORTED_MODULE_9__["default"](e, a, p);
      }
      return null;
    }
  };
  return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
    json: {
      read: {
        source: "copyrightText"
      }
    }
  })], n.prototype, "copyright", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], n.prototype, "minScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service", "minScale")], n.prototype, "readMinScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], n.prototype, "maxScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service", "maxScale")], n.prototype, "readMaxScale", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
    type: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__["default"]
  })], n.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
    readOnly: !0
  })], n.prototype, "supportsBlankTile", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
    type: _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]
  })], n.prototype, "tileInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], n.prototype, "tilemapCache", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__.reader)("service", "tilemapCache", ["capabilities", "tileInfo"])], n.prototype, "readTilemapCache", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], n.prototype, "version", void 0), n = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__.subclass)("esri.layers.mixins.ArcGISCachedService")], n), n;
};


/***/ }),

/***/ 5436:
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/ogc/crsUtils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAxesOrderReversedForWkid": () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n = [[3819, 3819], [3821, 3824], [3889, 3889], [3906, 3906], [4001, 4025], [4027, 4036], [4039, 4047], [4052, 4055], [4074, 4075], [4080, 4081], [4120, 4176], [4178, 4185], [4188, 4216], [4218, 4289], [4291, 4304], [4306, 4319], [4322, 4326], [4463, 4463], [4470, 4470], [4475, 4475], [4483, 4483], [4490, 4490], [4555, 4558], [4600, 4646], [4657, 4765], [4801, 4811], [4813, 4821], [4823, 4824], [4901, 4904], [5013, 5013], [5132, 5132], [5228, 5229], [5233, 5233], [5246, 5246], [5252, 5252], [5264, 5264], [5324, 5340], [5354, 5354], [5360, 5360], [5365, 5365], [5370, 5373], [5381, 5381], [5393, 5393], [5451, 5451], [5464, 5464], [5467, 5467], [5489, 5489], [5524, 5524], [5527, 5527], [5546, 5546], [2044, 2045], [2081, 2083], [2085, 2086], [2093, 2093], [2096, 2098], [2105, 2132], [2169, 2170], [2176, 2180], [2193, 2193], [2200, 2200], [2206, 2212], [2319, 2319], [2320, 2462], [2523, 2549], [2551, 2735], [2738, 2758], [2935, 2941], [2953, 2953], [3006, 3030], [3034, 3035], [3038, 3051], [3058, 3059], [3068, 3068], [3114, 3118], [3126, 3138], [3150, 3151], [3300, 3301], [3328, 3335], [3346, 3346], [3350, 3352], [3366, 3366], [3389, 3390], [3416, 3417], [3833, 3841], [3844, 3850], [3854, 3854], [3873, 3885], [3907, 3910], [4026, 4026], [4037, 4038], [4417, 4417], [4434, 4434], [4491, 4554], [4839, 4839], [5048, 5048], [5105, 5130], [5253, 5259], [5269, 5275], [5343, 5349], [5479, 5482], [5518, 5519], [5520, 5520], [20004, 20032], [20064, 20092], [21413, 21423], [21473, 21483], [21896, 21899], [22171, 22177], [22181, 22187], [22191, 22197], [25884, 25884], [27205, 27232], [27391, 27398], [27492, 27492], [28402, 28432], [28462, 28492], [30161, 30179], [30800, 30800], [31251, 31259], [31275, 31279], [31281, 31290], [31466, 31700]];
function o(o) {
  return null != o && n.some(([n, t]) => o >= n && o <= t);
}


/***/ }),

/***/ 75342:
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/save/utils.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItem": () => (/* binding */ v),
/* harmony export */   "createErrorMessage": () => (/* binding */ m),
/* harmony export */   "ensureItemConfig": () => (/* binding */ d),
/* harmony export */   "ensureLayerConfig": () => (/* binding */ l),
/* harmony export */   "getLayerJSON": () => (/* binding */ y),
/* harmony export */   "getPortalItem": () => (/* binding */ u),
/* harmony export */   "save": () => (/* binding */ I),
/* harmony export */   "saveAs": () => (/* binding */ b),
/* harmony export */   "setCommonItemProperties": () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ 32995);
/* harmony import */ var _core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/originUtils.js */ 58787);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../portal/Portal.js */ 9058);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../portal/PortalItem.js */ 28518);
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/support/jsonContext.js */ 45773);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/support/portalItemUtils.js */ 39712);
/* harmony import */ var _webdoc_saveAPIKeyUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webdoc/saveAPIKeyUtils.js */ 86502);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/







function l(t, r, o) {
  const a = o(t);
  if (!a.isValid) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${r}:invalid-parameters`, a.errorMessage, {
    layer: t
  });
}
function p(_x) {
  return _p.apply(this, arguments);
}
function _p() {
  _p = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
    const {
      layer: t,
      errorNamePrefix: r,
      validateLayer: o
    } = e;
    yield t.load(), l(t, r, o);
  });
  return _p.apply(this, arguments);
}
function m(e, t) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`;
}
function c(t) {
  const {
    item: r,
    itemType: o,
    errorNamePrefix: a,
    layer: i,
    validateItem: n
  } = t;
  if ((0,_webdoc_saveAPIKeyUtils_js__WEBPACK_IMPORTED_MODULE_7__.validateSaveAPIKey)(r), r.type !== o) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${a}:portal-item-wrong-type`, `Portal item type should be "${o}"`, {
    item: r,
    layer: i
  });
  if (n) {
    const t = n(r);
    if (!t.isValid) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${a}:invalid-parameters`, t.errorMessage, {
      layer: i
    });
  }
}
function d(t) {
  const {
      layer: r,
      errorNamePrefix: o
    } = t,
    {
      portalItem: a
    } = r;
  if (!a) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${o}:portal-item-not-set`, m(r, "requires the portalItem property to be set"));
  if (!a.loaded) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`${o}:portal-item-not-loaded`, m(r, "cannot be saved to a portal item that does not exist or is inaccessible"));
  c({
    ...t,
    item: a
  });
}
function u(e) {
  const {
    newItem: t,
    itemType: a
  } = e;
  let i = _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"].from(t);
  return i.id && (i = i.clone(), i.id = null), i.type ??= a, i.portal ??= _portal_Portal_js__WEBPACK_IMPORTED_MODULE_3__["default"].getDefault(), c({
    ...e,
    item: i
  }), i;
}
function f(t, r) {
  let o = (t.messages ?? []).filter(({
    type: e
  }) => "error" === e).map(({
    name: t,
    message: r,
    details: o
  }) => new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](t, r, o));
  if (t.blockedRelativeUrls && (o = o.concat(t.blockedRelativeUrls.map(t => new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("url:unsupported", `Relative url '${t}' is not supported`)))), r?.ignoreUnsupported && (o = o.filter(({
    name: e
  }) => "layer:unsupported" !== e && "symbol:unsupported" !== e && "symbol-layer:unsupported" !== e && "property:unsupported" !== e && "url:unsupported" !== e)), o.length > 0) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("layer-write:unsupported", "Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information", {
    errors: o
  });
}
function y(_x2, _x3, _x4) {
  return _y.apply(this, arguments);
}
function _y() {
  _y = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, t, r) {
    "beforeSave" in e && "function" == typeof e.beforeSave && (yield e.beforeSave());
    const o = e.write({}, t);
    return yield Promise.all(t.resources?.pendingOperations ?? []), f(t, r), o;
  });
  return _y.apply(this, arguments);
}
function w(e) {
  (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_6__.addTypeKeyword)(e, _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_6__.TypeKeyword.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e, t, r) => r.indexOf(e) === t));
}
function v(_x5, _x6, _x7) {
  return _v.apply(this, arguments);
}
function _v() {
  _v = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, t, r) {
    const o = e.portal;
    yield o.signIn(), yield o.user?.addItem({
      item: e,
      data: t,
      folder: r?.folder
    });
  });
  return _v.apply(this, arguments);
}
function I(_x8, _x9) {
  return _I.apply(this, arguments);
}
function _I() {
  _I = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, r) {
    const {
      layer: o,
      createItemData: i,
      createJSONContext: n,
      saveResources: s
    } = e;
    yield p(e), d(e);
    const l = o.portalItem,
      m = n ? n(l) : (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_5__.createForItemWrite)(l),
      c = yield y(o, m, r),
      u = yield i({
        layer: o,
        layerJSON: c
      }, l);
    return w(l), yield l.update({
      data: u
    }), (0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_2__.updateOrigins)(m), yield s?.(l, m), l;
  });
  return _I.apply(this, arguments);
}
function b(_x10, _x11) {
  return _b.apply(this, arguments);
}
function _b() {
  _b = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, r) {
    const {
      layer: o,
      createItemData: i,
      createJSONContext: n,
      setItemProperties: s,
      saveResources: l
    } = e;
    yield p(e);
    const m = u(e),
      c = n ? n(m) : (0,_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_5__.createForItemWrite)(m),
      d = yield y(o, c, r),
      f = yield i({
        layer: o,
        layerJSON: d
      }, m);
    return yield s(o, m), w(m), yield v(m, f, r), o.portalItem = m, (0,_core_accessorSupport_originUtils_js__WEBPACK_IMPORTED_MODULE_2__.updateOrigins)(c), yield l?.(m, c), m;
  });
  return _b.apply(this, arguments);
}


/***/ }),

/***/ 86805:
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportWMSImageParameters": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 2299);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 9497);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 83382);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 19420);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 67087);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 20891);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/







const a = {
  visible: "visibleSublayers"
};
let o = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(e) {
    super(e), this.scale = 0;
  }
  set layer(e) {
    this._get("layer") !== e && (this._set("layer", e), this.removeHandles("layer"), e && this.addHandles([e.sublayers.on("change", () => this.notifyChange("visibleSublayers")), e.on("wms-sublayer-update", e => this.notifyChange(a[e.propertyName]))], "layer"));
  }
  get layers() {
    return this.visibleSublayers.filter(({
      name: e
    }) => e).map(({
      name: e
    }) => e).join();
  }
  get version() {
    this.commitProperty("layers");
    const e = this.layer;
    return e && e.commitProperty("imageTransparency"), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const {
        layer: e,
        scale: r
      } = this,
      s = e?.sublayers,
      t = [],
      a = e => {
        const {
          minScale: s,
          maxScale: o,
          sublayers: l,
          visible: i
        } = e;
        i && (0 === r || (0 === s || r <= s) && (0 === o || r >= o)) && (l ? l.forEach(a) : t.push(e));
      };
    return s?.forEach(a), t;
  }
  toJSON() {
    const {
        layer: e,
        layers: r
      } = this,
      {
        imageFormat: s,
        imageTransparency: t,
        version: a
      } = e;
    return {
      format: s,
      request: "GetMap",
      service: "WMS",
      styles: "",
      transparent: t ? "TRUE" : "FALSE",
      version: a,
      layers: r
    };
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], o.prototype, "layer", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  readOnly: !0
})], o.prototype, "layers", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  type: Number
})], o.prototype, "scale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  readOnly: !0
})], o.prototype, "version", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  readOnly: !0
})], o.prototype, "visibleSublayers", null), o = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.ExportWMSImageParameters")], o);


/***/ }),

/***/ 6264:
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/MediaElementView.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaElementView": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Accessor.js */ 2299);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ 9497);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ 83382);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/arrayUtils.js */ 19420);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/has.js */ 67087);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ 20891);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/Polygon.js */ 55733);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/projection.js */ 89487);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ 6848);
/* harmony import */ var _geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/normalizeUtilsSync.js */ 18661);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/











let i = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(o) {
    super(o);
  }
  get bounds() {
    const o = this.coords;
    return null == o?.extent ? null : (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__.fromExtent)(o.extent);
  }
  get coords() {
    const o = this.element.georeference?.coords;
    return (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_8__.projectOrLoad)(o, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON((0,_geometry_support_normalizeUtilsSync_js__WEBPACK_IMPORTED_MODULE_10__.normalizeCentralMeridianSync)(this.coords));
  }
  get normalizedBounds() {
    const o = null != this.normalizedCoords ? this.normalizedCoords.extent : null;
    return null != o ? (0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__.fromExtent)(o) : null;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "spatialReference", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "element", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "bounds", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "coords", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "normalizedCoords", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "normalizedBounds", null), i = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.layers.support.MediaElementView")], i);


/***/ }),

/***/ 64914:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TileInfoTilemapCache.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ 32995);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ 30801);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/


class e {
  constructor(l, t = 0, i = l.lods[l.lods.length - 1].level) {
    this.tileInfo = l, this.minLOD = t, this.maxLOD = i, l.lodAt(t) || (this.minLOD = l.lods[0].level), l.lodAt(i) || (this.maxLOD = l.lods[l.lods.length - 1].level);
  }
  get effectiveMinLOD() {
    return this.minLOD ?? this.tileInfo.lods[0].level;
  }
  get effectiveMaxLOD() {
    return this.maxLOD ?? this.tileInfo.lods[this.tileInfo.lods.length - 1].level;
  }
  getAvailability(l, t, i) {
    const e = this.tileInfo?.lodAt(l);
    return !e || l < this.minLOD || l > this.maxLOD ? "unavailable" : e.cols && e.rows ? i >= e.cols[0] && i <= e.cols[1] && t >= e.rows[0] && t <= e.rows[1] ? "unknown" : "unavailable" : "unknown";
  }
  fetchAvailability(i, e, o, s) {
    var _this = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.waitTick)(s);
      const a = _this.getAvailability(i, e, o);
      if ("unavailable" === a) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tile-map:tile-unavailable", "Tile is not available", {
        level: i,
        row: e,
        col: o
      });
      return a;
    })();
  }
  fetchAvailabilityUpsample(l, e, o, s, a) {
    var _this2 = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.waitTick)(a), s.level = l, s.row = e, s.col = o;
      const n = _this2.tileInfo;
      return n.updateTileInfo(s), _this2.fetchAvailability(l, e, o, a).catch(l => {
        if ((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__.isAbortError)(l)) throw l;
        if (n.upsampleTile(s)) return _this2.fetchAvailabilityUpsample(s.level, s.row, s.col, s, a);
        throw l;
      });
    })();
  }
}


/***/ }),

/***/ 50714:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/fetchService.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchFeatureService": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../support/requestPresets.js */ 2013);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/

function t(_x, _x2) {
  return _t.apply(this, arguments);
}
function _t() {
  _t = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (t, r) {
    const a = yield (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_1__.fetchArcGISServiceJSON)(t, r);
    y(a), n(a);
    const s = {
      serviceJSON: a
    };
    if ((a.currentVersion ?? 0) < 10.5) return s;
    const o = yield (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_1__.fetchArcGISServiceJSON)(t + "/layers", r);
    return y(o), n(o), s.layersJSON = {
      layers: o.layers,
      tables: o.tables
    }, s;
  });
  return _t.apply(this, arguments);
}
function r(e) {
  return "Feature Layer" === e.type || "Oriented Imagery Layer" === e.type;
}
function a(e) {
  return "Table" === e.type;
}
function n(e) {
  e.layers = e.layers?.filter(r), e.tables = e.tables?.filter(a);
}
function s(e) {
  e.type ||= "Feature Layer";
}
function o(e) {
  e.type ||= "Table";
}
function y(e) {
  e.layers?.forEach(s), e.tables?.forEach(o);
}


/***/ }),

/***/ 14103:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/kmlUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computeExtent": () => (/* binding */ j),
/* harmony export */   "fetchService": () => (/* binding */ g),
/* harmony export */   "getGraphics": () => (/* binding */ b),
/* harmony export */   "parseKML": () => (/* binding */ d),
/* harmony export */   "sublayersFromJSON": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ 68327);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../kernel.js */ 84489);
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../PopupTemplate.js */ 95459);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../request.js */ 1897);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/lang.js */ 88684);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ 55050);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ 68230);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ 73327);
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ 71949);
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ 59574);
/* harmony import */ var _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../rest/support/FeatureSet.js */ 87096);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/











const c = {
  esriGeometryPoint: "points",
  esriGeometryPolyline: "polylines",
  esriGeometryPolygon: "polygons"
};
function d(e) {
  const o = e.folders || [],
    t = o.slice(),
    r = new Map(),
    n = new Map(),
    i = new Map(),
    f = new Map(),
    a = new Map(),
    l = {
      esriGeometryPoint: n,
      esriGeometryPolyline: i,
      esriGeometryPolygon: f
    };
  (e.featureCollection?.layers || []).forEach(e => {
    const o = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(e);
    o.featureSet.features = [];
    const t = e.featureSet.geometryType;
    r.set(t, o);
    const a = e.layerDefinition.objectIdField;
    "esriGeometryPoint" === t ? h(n, a, e.featureSet.features) : "esriGeometryPolyline" === t ? h(i, a, e.featureSet.features) : "esriGeometryPolygon" === t && h(f, a, e.featureSet.features);
  }), e.groundOverlays && e.groundOverlays.forEach(e => {
    a.set(e.id, e);
  }), o.forEach(o => {
    o.networkLinkIds.forEach(r => {
      const s = P(r, o.id, e.networkLinks);
      s && t.push(s);
    });
  }), t.forEach(e => {
    if (e.featureInfos) {
      e.points = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(r.get("esriGeometryPoint")), e.polylines = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(r.get("esriGeometryPolyline")), e.polygons = (0,_core_lang_js__WEBPACK_IMPORTED_MODULE_5__.clone)(r.get("esriGeometryPolygon")), e.mapImages = [];
      for (const o of e.featureInfos) switch (o.type) {
        case "esriGeometryPoint":
        case "esriGeometryPolyline":
        case "esriGeometryPolygon":
          {
            const t = l[o.type].get(o.id);
            t && e[c[o.type]]?.featureSet.features.push(t);
            break;
          }
        case "GroundOverlay":
          {
            const t = a.get(o.id);
            t && e.mapImages.push(t);
            break;
          }
      }
      e.fullExtent = j([e]);
    }
  });
  const u = j(t);
  return {
    folders: o,
    sublayers: t,
    extent: u
  };
}
function g(t, s, i, f) {
  const a = _kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findCredential(t);
  t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.addQueryParameters)(t, {
    token: a?.token
  });
  const l = _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].kmlServiceUrl;
  return (0,_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(l, {
    query: {
      url: t,
      model: "simple",
      folders: "",
      refresh: 0 !== i || void 0,
      outSR: JSON.stringify(s)
    },
    responseType: "json",
    signal: f
  });
}
function S(e, o, t = null, r = []) {
  const s = [],
    n = {},
    i = o.sublayers,
    f = new Set(o.folders.map(e => e.id));
  return i.forEach(o => {
    const i = new e();
    if (t ? i.read(o, t) : i.read(o), r.length && f.has(i.id) && (i.visible = r.includes(i.id)), n[o.id] = i, null != o.parentFolderId && -1 !== o.parentFolderId) {
      const e = n[o.parentFolderId];
      e.sublayers || (e.sublayers = []), e.sublayers?.unshift(i);
    } else s.unshift(i);
  }), s;
}
function h(e, o, t) {
  t.forEach(t => {
    e.set(t.attributes[o], t);
  });
}
function G(e, o) {
  let t;
  return o.some(o => o.id === e && (t = o, !0)), t;
}
function P(e, o, t) {
  const r = G(e, t);
  return r && (r.parentFolderId = o, r.networkLink = r), r;
}
function b(_x) {
  return _b.apply(this, arguments);
}
function _b() {
  _b = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
    const o = _rest_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(e.featureSet).features,
      r = e.layerDefinition,
      s = (0,_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__.fromJSON)(r.drawingInfo.renderer),
      n = _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e.popupInfo),
      i = [];
    for (const t of o) {
      const e = yield s.getSymbolAsync(t);
      t.symbol = e, t.popupTemplate = n, t.visible = !0, i.push(t);
    }
    return i;
  });
  return _b.apply(this, arguments);
}
function j(e) {
  const o = (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.create)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.negativeInfinity),
    t = (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.create)(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.negativeInfinity);
  for (const r of e) {
    if (r.polygons?.featureSet?.features) for (const e of r.polygons.featureSet.features) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.geometry), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
    if (r.polylines?.featureSet?.features) for (const e of r.polylines.featureSet.features) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.geometry), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
    if (r.points?.featureSet?.features) for (const e of r.points.featureSet.features) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.geometry), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
    if (r.mapImages) for (const e of r.mapImages) (0,_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_9__.getBoundsXYZ)(o, e.extent), (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.expandWithAABB)(t, o);
  }
  return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.equals)(t, _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__.negativeInfinity) ? void 0 : {
    xmin: t[0],
    ymin: t[1],
    zmin: t[2],
    xmax: t[3],
    ymax: t[4],
    zmax: t[5],
    spatialReference: _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_7__["default"].WGS84
  };
}


/***/ }),

/***/ 97174:
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/layersCreator.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateGroupLayer": () => (/* binding */ w),
/* harmony export */   "populateOperationalLayers": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Collection.js */ 28586);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/has.js */ 67087);
/* harmony import */ var _LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LayerLoadContext.js */ 72756);
/* harmony import */ var _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazyLayerLoader.js */ 15392);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/PortalItem.js */ 28518);
/* harmony import */ var _portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/support/featureCollectionUtils.js */ 72047);
/* harmony import */ var _portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../portal/support/portalLayers.js */ 22517);
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ 2929);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/








function c(_x, _x2, _x3) {
  return _c.apply(this, arguments);
}
function _c() {
  _c = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, r, a) {
    if (!r) return;
    const t = [];
    for (const i of r) t.push(g(i, a));
    const y = yield Promise.allSettled(t);
    for (const i of y) "rejected" === i.status || i.value && e.add(i.value);
  });
  return _c.apply(this, arguments);
}
const l = {
    ArcGISDimensionLayer: "DimensionLayer",
    ArcGISFeatureLayer: "FeatureLayer",
    ArcGISImageServiceLayer: "ImageryLayer",
    ArcGISMapServiceLayer: "MapImageLayer",
    PointCloudLayer: "PointCloudLayer",
    ArcGISSceneServiceLayer: "SceneLayer",
    IntegratedMeshLayer: "IntegratedMeshLayer",
    OGCFeatureLayer: "OGCFeatureLayer",
    BuildingSceneLayer: "BuildingSceneLayer",
    ArcGISTiledElevationServiceLayer: "ElevationLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    ArcGISTiledMapServiceLayer: "TileLayer",
    GroupLayer: "GroupLayer",
    GeoJSON: "GeoJSONLayer",
    WebTiledLayer: "WebTileLayer",
    CSV: "CSVLayer",
    VectorTileLayer: "VectorTileLayer",
    WFS: "WFSLayer",
    WMS: "WMSLayer",
    DefaultTileLayer: "TileLayer",
    KML: "KMLLayer",
    RasterDataLayer: "UnsupportedLayer",
    Voxel: "VoxelLayer",
    LineOfSightLayer: "LineOfSightLayer"
  },
  s = {
    ArcGISTiledElevationServiceLayer: "ElevationLayer",
    DefaultTileLayer: "ElevationLayer",
    RasterDataElevationLayer: "UnsupportedLayer"
  },
  p = {
    ArcGISFeatureLayer: "FeatureLayer"
  },
  S = {
    ArcGISTiledMapServiceLayer: "TileLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    OpenStreetMap: "OpenStreetMapLayer",
    WebTiledLayer: "WebTileLayer",
    VectorTileLayer: "VectorTileLayer",
    ArcGISImageServiceLayer: "UnsupportedLayer",
    WMS: "UnsupportedLayer",
    ArcGISMapServiceLayer: "UnsupportedLayer",
    ArcGISSceneServiceLayer: "SceneLayer",
    DefaultTileLayer: "TileLayer"
  },
  u = {
    ArcGISAnnotationLayer: "UnsupportedLayer",
    ArcGISDimensionLayer: "UnsupportedLayer",
    ArcGISFeatureLayer: "FeatureLayer",
    ArcGISImageServiceLayer: "ImageryLayer",
    ArcGISImageServiceVectorLayer: "ImageryLayer",
    ArcGISMapServiceLayer: "MapImageLayer",
    ArcGISStreamLayer: "StreamLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    ArcGISTiledMapServiceLayer: "TileLayer",
    BingMapsAerial: "BingMapsLayer",
    BingMapsRoad: "BingMapsLayer",
    BingMapsHybrid: "BingMapsLayer",
    CSV: "CSVLayer",
    DefaultTileLayer: "TileLayer",
    GeoRSS: "GeoRSSLayer",
    GeoJSON: "GeoJSONLayer",
    GroupLayer: "GroupLayer",
    KML: "KMLLayer",
    MediaLayer: "MediaLayer",
    OGCFeatureLayer: "OGCFeatureLayer",
    OrientedImageryLayer: "OrientedImageryLayer",
    SubtypeGroupLayer: "SubtypeGroupLayer",
    VectorTileLayer: "VectorTileLayer",
    WFS: "WFSLayer",
    WMS: "WMSLayer",
    WebTiledLayer: "WebTileLayer"
  },
  d = {
    ArcGISFeatureLayer: "FeatureLayer"
  },
  I = {
    ArcGISImageServiceLayer: "ImageryLayer",
    ArcGISImageServiceVectorLayer: "ImageryLayer",
    ArcGISMapServiceLayer: "MapImageLayer",
    ArcGISTiledImageServiceLayer: "ImageryTileLayer",
    ArcGISTiledMapServiceLayer: "TileLayer",
    OpenStreetMap: "OpenStreetMapLayer",
    VectorTileLayer: "VectorTileLayer",
    WebTiledLayer: "WebTileLayer",
    BingMapsAerial: "BingMapsLayer",
    BingMapsRoad: "BingMapsLayer",
    BingMapsHybrid: "BingMapsLayer",
    WMS: "WMSLayer",
    DefaultTileLayer: "TileLayer"
  },
  m = {
    ...u,
    LinkChartLayer: "LinkChartLayer"
  },
  f = {
    ...d
  },
  T = {
    ...I
  };
function g(_x4, _x5) {
  return _g.apply(this, arguments);
}
function _g() {
  _g = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, r) {
    return G(yield M(e, r), e, r);
  });
  return _g.apply(this, arguments);
}
function G(_x6, _x7, _x8) {
  return _G.apply(this, arguments);
}
function _G() {
  _G = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, r, a) {
    const t = new e();
    return t.read(r, a.context), "group" === t.type && ("GroupLayer" === r.layerType ? yield w(t, r, a) : v(r) ? h(t, r, a.context) : A(r) && (yield C(t, r, a.context))), yield (0,_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__.loadStyleRenderer)(t, a.context), t;
  });
  return _G.apply(this, arguments);
}
function M(_x9, _x10) {
  return _M.apply(this, arguments);
}
function _M() {
  _M = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, n) {
    const c = n.context,
      l = b(c);
    let s = e.layerType || e.type;
    !s && n?.defaultLayerType && (s = n.defaultLayerType);
    const p = l[s];
    let S = p ? _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap[p] : _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.UnknownLayer;
    if (v(e)) {
      const y = c?.portal;
      if (e.itemId) {
        const i = new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          id: e.itemId,
          portal: y
        });
        yield i.load();
        const L = (yield (0,_portal_support_portalLayers_js__WEBPACK_IMPORTED_MODULE_7__.selectLayerClassPath)(i, new _LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__.LayerLoadContext())).className || "UnknownLayer";
        S = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap[L];
      }
    } else "ArcGISFeatureLayer" === s ? (0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__.isMapNotesLayer)(e) || (0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__.isMarkupLayer)(e) ? S = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.MapNotesLayer : (0,_portal_support_featureCollectionUtils_js__WEBPACK_IMPORTED_MODULE_6__.isRouteLayer)(e) ? S = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.RouteLayer : A(e) && (S = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.GroupLayer) : e.wmtsInfo?.url && e.wmtsInfo.layerIdentifier ? S = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.WMTSLayer : "WFS" === s && "2.0.0" !== e.wfsInfo?.version && (S = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.UnsupportedLayer);
    return S();
  });
  return _M.apply(this, arguments);
}
function A(e) {
  if ("ArcGISFeatureLayer" !== e.layerType || v(e)) return !1;
  return (e.featureCollection?.layers?.length ?? 0) > 1;
}
function v(e) {
  return "Feature Collection" === e.type;
}
function b(e) {
  let r;
  switch (e.origin) {
    case "web-scene":
      switch (e.layerContainerType) {
        case "basemap":
          r = S;
          break;
        case "ground":
          r = s;
          break;
        case "tables":
          r = p;
          break;
        default:
          r = l;
      }
      break;
    case "link-chart":
      switch (e.layerContainerType) {
        case "basemap":
          r = T;
          break;
        case "tables":
          r = f;
          break;
        default:
          r = m;
      }
      break;
    default:
      switch (e.layerContainerType) {
        case "basemap":
          r = I;
          break;
        case "tables":
          r = d;
          break;
        default:
          r = u;
      }
  }
  return r;
}
function w(_x11, _x12, _x13) {
  return _w.apply(this, arguments);
}
function _w() {
  _w = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (r, a, t) {
    const y = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      i = c(y, Array.isArray(a.layers) ? a.layers : [], t);
    try {
      try {
        if (yield i, "group" === r.type) return r.layers.addMany(y), r;
      } catch (L) {
        r.destroy();
        for (const e of y) e.destroy();
        throw L;
      }
    } catch (L) {
      throw L;
    }
  });
  return _w.apply(this, arguments);
}
function h(e, r, a) {
  r.itemId && (e.portalItem = new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
    id: r.itemId,
    portal: a?.portal
  }), e.when(() => {
    const t = t => {
      const y = t.layerId;
      F(t, e, r, y, a);
      const i = r.featureCollection?.layers?.[y];
      i && t.read(i, a);
    };
    e.layers?.forEach(t), e.tables?.forEach(t);
  }));
}
function C(_x14, _x15, _x16) {
  return _C.apply(this, arguments);
}
function _C() {
  _C = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e, r, t) {
    const y = _lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_4__.layerLookupMap.FeatureLayer,
      i = yield y(),
      L = r.featureCollection,
      o = L?.showLegend,
      n = L?.layers?.map((a, y) => {
        const L = new i();
        L.read(a, t);
        const n = {
          ...t,
          ignoreDefaults: !0
        };
        return F(L, e, r, y, n), null != o && L.read({
          showLegend: o
        }, n), L;
      });
    e.layers.addMany(n ?? []);
  });
  return _C.apply(this, arguments);
}
function F(e, r, a, t, y) {
  e.read({
    id: `${r.id}-sublayer-${t}`,
    visibility: a.visibleLayers?.includes(t) ?? !0
  }, y);
}


/***/ }),

/***/ 47145:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t {
  constructor(t = 15e3, e = 5e3) {
    this._timer = null, this._cachedBlocks = new Map(), this._size = -1, this._duration = t, this._interval = Math.min(t, e);
  }
  decreaseRefCount(t, e) {
    const s = t + "/" + e,
      r = this._cachedBlocks;
    if (r.has(s)) {
      const t = r.get(s);
      return t.refCount--, t.refCount <= 0 && (r.delete(s), t.controller && t.controller.abort()), t.refCount;
    }
    return 0;
  }
  getBlock(t, e) {
    const s = t + "/" + e,
      r = this._cachedBlocks;
    if (r.has(s)) {
      const t = r.get(s);
      return t.ts = Date.now(), t.refCount++, r.delete(s), r.set(s, t), t.block;
    }
    return null;
  }
  putBlock(t, e, s, r) {
    const i = this._cachedBlocks,
      c = t + "/" + e;
    if (i.has(c)) {
      const t = i.get(c);
      t.ts = Date.now(), t.refCount++;
    } else i.set(c, {
      block: s,
      ts: Date.now(),
      refCount: 1,
      controller: r
    });
    this._trim(), this._updateTimer();
  }
  deleteBlock(t, e) {
    const s = this._cachedBlocks,
      r = t + "/" + e;
    s.has(r) && s.delete(r);
  }
  updateMaxSize(t) {
    this._size = t, this._trim();
  }
  empty() {
    this._cachedBlocks.clear(), this._clearTimer();
  }
  getCurrentSize() {
    return this._cachedBlocks.size;
  }
  _updateTimer() {
    if (null != this._timer) return;
    const t = this._cachedBlocks;
    this._timer = setInterval(() => {
      const e = Array.from(t),
        s = Date.now();
      for (let r = 0; r < e.length && e[r][1].ts <= s - this._duration; r++) t.delete(e[r][0]);
      0 === t.size && this._clearTimer();
    }, this._interval);
  }
  _trim() {
    const t = this._cachedBlocks;
    if (-1 === this._size || this._size >= t.size) return;
    const e = Array.from(t);
    for (let s = 0; s < e.length - this._size; s++) t.delete(e[s][0]);
  }
  _clearTimer() {
    null != this._timer && (clearInterval(this._timer), this._timer = null);
  }
}


/***/ }),

/***/ 59813:
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decreaseRefCount": () => (/* binding */ s),
/* harmony export */   "deleteBlock": () => (/* binding */ h),
/* harmony export */   "deleteRaster": () => (/* binding */ f),
/* harmony export */   "getBlock": () => (/* binding */ m),
/* harmony export */   "getRasterId": () => (/* binding */ i),
/* harmony export */   "putBlock": () => (/* binding */ x),
/* harmony export */   "register": () => (/* binding */ u),
/* harmony export */   "unregister": () => (/* binding */ a),
/* harmony export */   "update": () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry.js */ 6010);
/* harmony import */ var _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EphemeralBlockCache.js */ 47145);
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rasterFunctions/rasterProjectionHelper.js */ 13110);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/Point.js */ 72062);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/




const r = new Map(),
  c = new _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
function i(e, t) {
  return null == t ? e : `${e}?sliceId=${t}`;
}
function u(e, t) {
  const n = {
      extent: null,
      rasterInfo: t,
      cache: new Map()
    },
    o = r.get(e);
  return o ? (o.push(n), o.length - 1) : (r.set(e, [n]), 0);
}
function a(e, t) {
  const n = r.get(e);
  n && (n[t] = null, n.some(e => null != e) || r.delete(e));
}
function f(e) {
  r.delete(e);
}
function s(e, t, n) {
  const o = r.get(e);
  if (!o) return null == t ? c.decreaseRefCount(e, n) : 0;
  if (null == t || null == o[t]) return c.decreaseRefCount(e, n);
  const l = o[t]?.cache,
    i = l?.get(n);
  if (l && i) {
    if (i.refCount--, 0 === i.refCount) {
      l.delete(n);
      for (let e = 0; e < o.length; e++) o[e]?.cache.delete(n);
      i.controller && i.controller.abort();
    }
    return i.refCount;
  }
  return 0;
}
function m(e, t, n) {
  const o = r.get(e);
  if (!o) return null == t ? c.getBlock(e, n) : null;
  if (null == t || null == o[t]) {
    for (let e = 0; e < o.length; e++) {
      const t = o[e]?.cache.get(n);
      if (t) return t.refCount++, t.block;
    }
    return c.getBlock(e, n);
  }
  const l = o[t]?.cache.get(n);
  if (l) return l.refCount++, l.block;
  for (let r = 0; r < o.length; r++) {
    if (r === t || !o[r]) continue;
    const e = o[r]?.cache,
      l = e?.get(n);
    if (e && l) return l.refCount++, e.set(n, l), l.block;
  }
  return null;
}
function x(e, t, n, o, l = null) {
  const i = r.get(e);
  if (!i) return void (null == t && c.putBlock(e, n, o, l));
  if (null == t || null == i[t]) return void c.putBlock(e, n, o, l);
  const u = {
    refCount: 1,
    block: o,
    isResolved: !1,
    isRejected: !1,
    controller: l
  };
  o.then(() => u.isResolved = !0).catch(() => u.isRejected = !0), i[t]?.cache.set(n, u);
}
function h(e, t, n) {
  const o = r.get(e);
  o ? null != t && null != o[t] ? o[t]?.cache.delete(n) : c.deleteBlock(e, n) : null == t && c.deleteBlock(e, n);
}
function d(e, t) {
  const n = r.get(e);
  return n ? n[t] ?? null : null;
}
function g(e, r, c, i, u, a, f = null) {
  const s = d(e, r);
  if (!s) return;
  const m = s.extent,
    {
      cache: x,
      rasterInfo: h
    } = s;
  if (m && m.xmin === c.xmin && m.xmax === c.xmax && m.ymin === c.ymin && m.ymax === c.ymax) return;
  i = i ?? 0;
  const g = c.clone().normalize(),
    {
      spatialReference: y,
      transform: p
    } = h,
    k = new Set();
  for (let d = 0; d < g.length; d++) {
    const e = g[d];
    if (e.xmax - e.xmin <= i || e.ymax - e.ymin <= i) continue;
    let r = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_2__.projectExtent)(e, y, f);
    null != p && (r = p.inverseTransform(r));
    const c = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      x: i,
      y: i,
      spatialReference: e.spatialReference
    });
    if (null == u && !(u = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_2__.projectResolution)(c, y, e, f))) return;
    const {
      pyramidLevel: s,
      pyramidResolution: m,
      excessiveReading: x
    } = (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_2__.snapPyramid)(u, h, a || "closest");
    if (x) return;
    const {
        storageInfo: M
      } = h,
      {
        origin: R
      } = M,
      C = {
        x: Math.max(0, Math.floor((r.xmin - R.x) / m.x)),
        y: Math.max(0, Math.floor((R.y - r.ymax) / m.y))
      },
      B = Math.ceil((r.xmax - r.xmin) / m.x - .1),
      j = Math.ceil((r.ymax - r.ymin) / m.y - .1),
      v = s > 0 ? M.pyramidBlockWidth : M.blockWidth,
      b = s > 0 ? M.pyramidBlockHeight : M.blockHeight,
      w = 1,
      $ = Math.max(0, Math.floor(C.x / v) - w),
      I = Math.max(0, Math.floor(C.y / b) - w),
      H = Math.floor((C.x + B - 1) / v) + w,
      E = Math.floor((C.y + j - 1) / b) + w;
    for (let t = I; t <= E; t++) for (let e = $; e <= H; e++) k.add(`${s}/${t}/${e}`);
  }
  x.forEach((e, t) => {
    if (!k.has(t)) {
      const e = x.get(t);
      (null == e || e.isResolved || e.isRejected) && x.delete(t);
    }
  }), s.extent = {
    xmin: c.xmin,
    ymin: c.ymin,
    xmax: c.xmax,
    ymax: c.ymax
  };
}


/***/ }),

/***/ 72047:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMapNotesLayer": () => (/* binding */ e),
/* harmony export */   "isMarkupLayer": () => (/* binding */ r),
/* harmony export */   "isRouteLayer": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e) {
  return t(e, "notes");
}
function r(e) {
  return t(e, "markup");
}
function n(e) {
  return t(e, "route");
}
function t(e, r) {
  return !(!e.layerType || "ArcGISFeatureLayer" !== e.layerType) && e.featureCollectionType === r;
}


/***/ }),

/***/ 11567:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGeometryServiceURL": () => (/* binding */ n),
/* harmony export */   "projectGeometry": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ 68327);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Error.js */ 32995);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portal.js */ 9058);
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/geometryService/project.js */ 46395);
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../rest/support/ProjectParameters.js */ 19569);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





function n() {
  return _n.apply(this, arguments);
}
function _n() {
  _n = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (o = null, i) {
    if (_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].geometryServiceUrl) return _config_js__WEBPACK_IMPORTED_MODULE_1__["default"].geometryServiceUrl;
    if (!o) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("internal:geometry-service-url-not-configured");
    let n;
    n = "portal" in o ? o.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_3__["default"].getDefault() : o, yield n.load({
      signal: i
    });
    const a = n.helperServices?.geometry?.url;
    if (!a) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("internal:geometry-service-url-not-configured");
    return a;
  });
  return _n.apply(this, arguments);
}
function a(_x, _x2) {
  return _a.apply(this, arguments);
}
function _a() {
  _a = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (r, t, a = null, l) {
    const c = yield n(a, l),
      s = new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    s.geometries = [r], s.outSpatialReference = t;
    const m = yield (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_4__.project)(c, s, {
      signal: l
    });
    if (m && Array.isArray(m) && 1 === m.length) return m[0];
    throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("internal:geometry-service-projection-failed");
  });
  return _a.apply(this, arguments);
}


/***/ }),

/***/ 45773:
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForGroupLayerItemRead": () => (/* binding */ l),
/* harmony export */   "createForGroupLayerItemWrite": () => (/* binding */ a),
/* harmony export */   "createForItemRead": () => (/* binding */ e),
/* harmony export */   "createForItemWrite": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ 55050);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ 9058);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/


function e(e) {
  return {
    origin: "portal-item",
    url: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(e.itemUrl),
    portal: e.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),
    portalItem: e,
    readResourcePaths: []
  };
}
function o(e) {
  const o = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(e.itemUrl);
  return {
    origin: "portal-item",
    messages: [],
    writtenProperties: [],
    url: o,
    portal: e.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),
    portalItem: e,
    verifyItemRelativeUrls: o ? {
      rootPath: o.path,
      writtenUrls: []
    } : null,
    blockedRelativeUrls: []
  };
}
function l(e) {
  return {
    origin: "web-map",
    url: (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(e.itemUrl),
    portal: e.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),
    portalItem: e,
    readResourcePaths: []
  };
}
function a(e, o) {
  const l = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.urlToObject)(e.itemUrl);
  return {
    origin: "web-map",
    messages: [],
    writtenProperties: [],
    url: l,
    portal: e.portal || _Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),
    portalItem: e,
    initiator: o,
    verifyItemRelativeUrls: l ? {
      rootPath: l.path,
      writtenUrls: []
    } : null,
    blockedRelativeUrls: [],
    resources: {
      toAdd: [],
      toUpdate: [],
      toKeep: [],
      pendingOperations: []
    }
  };
}


/***/ }),

/***/ 87640:
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceExtension.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourceContentExtension": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ 55050);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/

function p(i) {
  return o[t(i)] || e;
}
function t(i) {
  return "json" === i.type ? "application/json" : "blob" === i.type ? i.blob.type : n(i.url);
}
function n(p) {
  const t = (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__.getPathExtension)(p);
  return g[t] || a;
}
const o = {},
  a = "text/plain",
  e = o[a],
  g = {
    png: "image/png",
    jpeg: "image/jpeg",
    jpg: "image/jpg",
    bmp: "image/bmp",
    gif: "image/gif",
    json: "application/json",
    txt: "text/plain",
    xml: "application/xml",
    svg: "image/svg+xml",
    zip: "application/zip",
    pbf: "application/vnd.mapbox-vector-tile",
    gz: "application/gzip",
    "bin.gz": "application/octet-stream"
  };
for (const l in g) o[g[l]] = l;


/***/ }),

/***/ 21341:
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/networks/support/Association.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry.js */ 6010);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ 69237);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 9497);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 83382);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 19420);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/has.js */ 67087);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/reader.js */ 66508);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 20891);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ 70425);
/* harmony import */ var _NetworkElement_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkElement.js */ 55355);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/Polyline.js */ 7913);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/












let m = class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__.JSONSupport {
  constructor(o) {
    super(o), this.globalId = null, this.associationType = null, this.fromNetworkElement = null, this.toNetworkElement = null, this.geometry = null, this.errorMessage = null, this.percentAlong = null, this.errorCode = null, this.isContentVisible = null, this.status = null;
  }
  readFromNetworkElement(o, e) {
    const r = new _NetworkElement_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
    return r.globalId = e.fromGlobalId, r.networkSourceId = e.fromNetworkSourceId, r.terminalId = e.fromTerminalId, r;
  }
  writeFromNetworkElement(o, e) {
    o && (e.fromGlobalId = o.globalId, e.fromNetworkSourceId = o.networkSourceId, e.fromTerminalId = o.terminalId);
  }
  readToNetworkElement(o, e) {
    const r = new _NetworkElement_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
    return r.globalId = e.toGlobalId, r.networkSourceId = e.toNetworkSourceId, r.terminalId = e.toTerminalId, r;
  }
  writeToNetworkElement(o, e) {
    o && (e.toGlobalId = o.globalId, e.toNetworkSourceId = o.networkSourceId, e.toTerminalId = o.terminalId);
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: String,
  json: {
    write: !0
  }
})], m.prototype, "globalId", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: ["attachment", "connectivity", "containment"],
  json: {
    write: !0
  }
})], m.prototype, "associationType", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: _NetworkElement_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  json: {
    write: {
      target: {
        fromGlobalId: {
          type: String
        },
        fromNetworkSourceId: {
          type: Number
        },
        fromTerminalId: {
          type: Number
        }
      }
    },
    read: {
      source: ["fromGlobalId", "fromNetworkSourceId", "fromTerminalId"]
    }
  }
})], m.prototype, "fromNetworkElement", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("fromNetworkElement")], m.prototype, "readFromNetworkElement", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("fromNetworkElement")], m.prototype, "writeFromNetworkElement", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: _NetworkElement_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  json: {
    write: {
      target: {
        toGlobalId: {
          type: String
        },
        toNetworkSourceId: {
          type: Number
        },
        toTerminalId: {
          type: Number
        }
      }
    },
    read: {
      source: ["toGlobalId", "toNetworkSourceId", "toTerminalId"]
    }
  }
})], m.prototype, "toNetworkElement", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__.reader)("toNetworkElement")], m.prototype, "readToNetworkElement", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__.writer)("toNetworkElement")], m.prototype, "writeToNetworkElement", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  json: {
    write: !0
  }
})], m.prototype, "geometry", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: String,
  json: {
    write: !0
  }
})], m.prototype, "errorMessage", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: Number,
  json: {
    write: !0
  }
})], m.prototype, "percentAlong", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: Number,
  json: {
    write: !0
  }
})], m.prototype, "errorCode", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: Boolean,
  json: {
    write: !0
  }
})], m.prototype, "isContentVisible", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__.property)({
  type: Number,
  json: {
    write: !0
  }
})], m.prototype, "status", void 0), m = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__.subclass)("esri.rest.networks.support.Association")], m);
const p = m;


/***/ }),

/***/ 25080:
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/query/operations/queryTopFeatures.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQueryForTopCount": () => (/* binding */ a),
/* harmony export */   "executeQueryForTopExtents": () => (/* binding */ d),
/* harmony export */   "executeQueryForTopIds": () => (/* binding */ m),
/* harmony export */   "executeTopFeaturesQuery": () => (/* binding */ p),
/* harmony export */   "queryToQueryStringParameters": () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../request.js */ 1897);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/urlUtils.js */ 55050);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/support/jsonUtils.js */ 71182);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/normalizeUtils.js */ 93136);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils.js */ 53492);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../operations/urlUtils.js */ 58558);
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queryZScale.js */ 59937);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/







const u = "Layer does not support extent calculation.";
function y(t, e) {
  const r = t.geometry,
    o = t.toJSON(),
    s = o;
  if (null != r && (s.geometry = JSON.stringify(r), s.geometryType = (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__.getJsonType)(r), s.inSR = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.srToRESTValue)(r.spatialReference)), o.topFilter?.groupByFields && (s.topFilter.groupByFields = o.topFilter.groupByFields.join(",")), o.topFilter?.orderByFields && (s.topFilter.orderByFields = o.topFilter.orderByFields.join(",")), o.topFilter && (s.topFilter = JSON.stringify(s.topFilter)), o.objectIds && (s.objectIds = o.objectIds.join(",")), o.orderByFields && (s.orderByFields = o.orderByFields.join(",")), o.outFields && !(e?.returnCountOnly || e?.returnExtentOnly || e?.returnIdsOnly) ? o.outFields.includes("*") ? s.outFields = "*" : s.outFields = o.outFields.join(",") : delete s.outFields, o.outSR ? s.outSR = (0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__.srToRESTValue)(o.outSR) : r && o.returnGeometry && (s.outSR = s.inSR), o.returnGeometry && delete o.returnGeometry, o.timeExtent) {
    const t = o.timeExtent,
      {
        start: e,
        end: r
      } = t;
    null == e && null == r || (s.time = e === r ? e : `${e ?? "null"},${r ?? "null"}`), delete o.timeExtent;
  }
  return s;
}
function p(_x, _x2, _x3, _x4) {
  return _p.apply(this, arguments);
}
function _p() {
  _p = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (t, e, r, n) {
    const o = yield c(t, e, "json", n);
    return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_7__.applyFeatureSetZUnitScaling)(e, r, o.data), o;
  });
  return _p.apply(this, arguments);
}
function m(_x5, _x6, _x7) {
  return _m.apply(this, arguments);
}
function _m() {
  _m = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (t, e, r) {
    return null != e.timeExtent && e.timeExtent.isEmpty ? {
      data: {
        objectIds: []
      }
    } : c(t, e, "json", r, {
      returnIdsOnly: !0
    });
  });
  return _m.apply(this, arguments);
}
function d(_x8, _x9, _x10) {
  return _d.apply(this, arguments);
}
function _d() {
  _d = (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (t, e, r) {
    return null != e.timeExtent && e.timeExtent.isEmpty ? {
      data: {
        count: 0,
        extent: null
      }
    } : c(t, e, "json", r, {
      returnExtentOnly: !0,
      returnCountOnly: !0
    }).then(t => {
      const e = t.data;
      if (e.hasOwnProperty("extent")) return t;
      if (e.features) throw new Error(u);
      if (e.hasOwnProperty("count")) throw new Error(u);
      return t;
    });
  });
  return _d.apply(this, arguments);
}
function a(t, e, r) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? Promise.resolve({
    data: {
      count: 0
    }
  }) : c(t, e, "json", r, {
    returnIdsOnly: !0,
    returnCountOnly: !0
  });
}
function c(n, i, l, u = {}, p = {}) {
  const m = "string" == typeof n ? (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.urlToObject)(n) : n,
    d = i.geometry ? [i.geometry] : [];
  return u.responseType = "pbf" === l ? "array-buffer" : "json", (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_4__.normalizeCentralMeridian)(d, null, u).then(e => {
    const n = e?.[0];
    null != n && ((i = i.clone()).geometry = n);
    const o = (0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__.mapParameters)({
      ...m.query,
      f: l,
      ...p,
      ...y(i, p)
    });
    return (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__.join)(m.path, "queryTopFeatures"), {
      ...u,
      query: {
        ...o,
        ...u.query
      }
    });
  });
}


/***/ }),

/***/ 12928:
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/progressUtils.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressManager": () => (/* binding */ n),
/* harmony export */   "estimatedConversionTime": () => (/* binding */ m),
/* harmony export */   "estimatedTransferTime": () => (/* binding */ h),
/* harmony export */   "makeProgressManager": () => (/* binding */ i),
/* harmony export */   "simulateProgress": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/handleUtils.js */ 70120);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ 67087);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/MapUtils.js */ 20359);
/* harmony import */ var _core_time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/time.js */ 69354);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/




function i(s, t = s => {}, e) {
  return new n(s, t, e);
}
class n {
  constructor(s, t = s => {}, e) {
    if (this.onProgress = t, this.taskName = e, this._progressMap = new Map(), this._startTime = void 0, this._timingsMap = new Map(), "number" == typeof s) {
      this._weights = {};
      for (let t = 0; t < s; t++) {
        const e = t,
          r = 1 / s;
        this._weights[e] = r, this._progressMap.set(e, 0);
      }
    } else this._weights = s;
    this.emitProgress();
  }
  emitProgress() {
    let s = 0;
    for (const [t, e] of this._progressMap.entries()) {
      s += e * this._weights[t];
    }
    if (1 === s && (0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("enable-feature:esri-3dofl-upload-timings")) {
      const s = Math.round(performance.now() - (this._startTime ?? 0)) / 1e3;
      console.log(`${this.taskName} done in ${s} sec`);
      for (const [t, e] of this._timingsMap) {
        const r = Math.round(e.end - e.start) / 1e3,
          o = Math.round(r / s * 100);
        console.log(this.taskName ?? "Task", {
          stepKey: t,
          stepTime: r,
          relativeTime: o
        });
      }
    }
    this.onProgress(s);
  }
  setProgress(s, e) {
    if (this._progressMap.set(s, e), (0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("enable-feature:esri-3dofl-upload-timings")) {
      const r = performance.now();
      this._startTime ??= r;
      const o = (0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_2__.getOrCreateMapValue)(this._timingsMap, s, () => ({
        start: r,
        end: 0
      }));
      1 === e && (o.end = r);
    }
    this.emitProgress();
  }
  simulate(s, t) {
    return a(t => this.setProgress(s, t), t);
  }
  makeOnProgress(s) {
    return t => this.setProgress(s, t);
  }
}
function a(t = s => {}, e = l) {
  const r = performance.now();
  t(0);
  const o = setInterval(() => {
    const s = performance.now() - r,
      o = 1 - Math.exp(-s / e);
    t(o);
  }, g);
  return (0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_0__.makeHandle)(() => {
    clearInterval(o), t(1);
  });
}
function h(s, t = c) {
  return (0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsFromSeconds)((0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Seconds)(s * f / t));
}
function m(s, t = p) {
  return (0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.millisecondsFromSeconds)((0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Seconds)(s * f / t));
}
const c = 10,
  p = 10,
  f = 8e-6,
  g = (0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Milliseconds)(50),
  l = (0,_core_time_js__WEBPACK_IMPORTED_MODULE_3__.Milliseconds)(1e3);


/***/ }),

/***/ 41699:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/BitmapTileLayerView2D.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BitmapTileLayerView2D": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ 28191);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ 83382);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/arrayUtils.js */ 19420);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/has.js */ 67087);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Error.js */ 32995);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 20891);
/* harmony import */ var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../engine/BitmapTileContainer.js */ 73491);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/








const r = r => {
  let s = class extends r {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_7__.BitmapTileContainer(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      this.container.removeChild(this._bitmapView), this._bitmapView?.removeAllChildren(), this._bitmapView = null;
    }
  };
  return s = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.BitmapTileLayerView2D")], s), s;
};


/***/ }),

/***/ 38672:
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Accessor.js */ 2299);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ 9497);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ 83382);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ 19420);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/has.js */ 67087);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ 20891);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/







let s = class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  initialize() {}
  destroy() {}
  get supportsTileUpdates() {
    return !1;
  }
  get spatialReference() {
    const e = this.tileStore.tileScheme.spatialReference;
    return e && e.toJSON() || null;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  readOnly: !0
})], s.prototype, "supportsTileUpdates", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  constructOnly: !0
})], s.prototype, "remoteClient", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  constructOnly: !0
})], s.prototype, "service", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], s.prototype, "spatialReference", null), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  constructOnly: !0
})], s.prototype, "tileInfo", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)({
  constructOnly: !0
})], s.prototype, "tileStore", void 0), s = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__.subclass)("esri.views.2d.layers.features.processors.BaseProcessor")], s);
const p = s;


/***/ }),

/***/ 20987:
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/imageUtils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlankImage": () => (/* binding */ o),
/* harmony export */   "resampleImage": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e) {
  return e instanceof HTMLImageElement ? e.naturalWidth : e.width;
}
function t(e) {
  return e instanceof HTMLImageElement ? e.naturalHeight : e.height;
}
function n(n, l, r, u) {
  if (r.level === u.level) return l;
  const i = n.tileInfo.size,
    a = n.getTileResolution(r.level),
    c = n.getTileResolution(u.level);
  let g = n.getLODInfoAt(u.level);
  const h = g.getXForColumn(u.col),
    d = g.getYForRow(u.row);
  g = n.getLODInfoAt(r.level);
  const f = g.getXForColumn(r.col),
    s = g.getYForRow(r.row),
    m = e(l) / i[0],
    v = t(l) / i[1],
    w = Math.round(m * ((h - f) / a)),
    I = Math.round(v * (-(d - s) / a)),
    M = Math.round(m * i[0] * (c / a)),
    F = Math.round(v * i[1] * (c / a)),
    L = o(i);
  return L.getContext("2d").drawImage(l, w, I, M, F, 0, 0, i[0], i[1]), L;
}
function o(e) {
  const t = document.createElement("canvas");
  return [t.width, t.height] = e, t;
}


/***/ }),

/***/ 54865:
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "packInterleavedBuffer": () => (/* binding */ u),
/* harmony export */   "unpackInterleavedBuffer": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterleavedLayout.js */ 61462);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/

function u(r, u) {
  return u.push(r.buffer), {
    buffer: r.buffer,
    layout: new _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__.PackedLayout(r.layout)
  };
}
function t(e) {
  return new _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_0__.InterleavedLayout(e.layout).createView(e.buffer);
}


/***/ }),

/***/ 10016:
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/engineContent/line.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGeometry": () => (/* binding */ b),
/* harmony export */   "lineStripsToParameters": () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ 80775);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ 92950);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ 77765);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ 91746);
/* harmony import */ var _geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../geometry/ellipsoidUtils.js */ 64004);
/* harmony import */ var _geometry_projection_projectors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../geometry/projection/projectors.js */ 81616);
/* harmony import */ var _geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../geometry/support/DoubleArray.js */ 10870);
/* harmony import */ var _geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../geometry/support/FloatArray.js */ 21214);
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../geometry/support/Indices.js */ 8064);
/* harmony import */ var _ViewingMode_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ViewingMode.js */ 56108);
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl-engine/lib/Attribute.js */ 49197);
/* harmony import */ var _webgl_engine_lib_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl-engine/lib/ContentObjectType.js */ 25207);
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ 4674);
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl-engine/lib/VertexAttribute.js */ 51663);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/














function b(t, e, r = null) {
  const o = [],
    n = e.mapPositions;
  g(e, o);
  const i = o[0][1].data,
    a = o[0][1].indices.length,
    u = (0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_8__.getZeroIndexArray)(a);
  return h(e, o, u), j(e, o, u), T(e, o, u), D(e, o, u), w(e, o, u), y(e, o, u), E(e, o, i), new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__.Geometry(t, o, n, _webgl_engine_lib_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_11__.ContentObjectType.Line, r);
}
function g(t, e) {
  const {
      attributeData: {
        position: r
      },
      removeDuplicateStartEnd: o
    } = t,
    n = A(r) && o,
    i = r.length / 3 - (n ? 1 : 0),
    a = new Array(2 * (i - 1)),
    u = n ? r.slice(0, -3) : r;
  let s = 0;
  for (let l = 0; l < i - 1; l++) a[s++] = l, a[s++] = l + 1;
  e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.POSITION, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute(u, a, 3, n)]);
}
function h(t, e, r) {
  if (null != t.attributeData.colorFeature) return;
  const n = t.attributeData.color;
  e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.COLOR, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute(n ?? _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_3__.O, r, 4)]);
}
function T(t, e, r) {
  t.attributeData.normal && e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.NORMAL, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute(t.attributeData.normal, r, 3)]);
}
function D(t, e, r) {
  null != t.attributeData.colorFeature && e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.COLORFEATUREATTRIBUTE, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute([t.attributeData.colorFeature], r, 1, !0)]);
}
function j(t, e, r) {
  null == t.attributeData.sizeFeature && e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.SIZE, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute([t.attributeData.size ?? 1], r, 1, !0)]);
}
function w(t, e, r) {
  null != t.attributeData.sizeFeature && e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.SIZEFEATUREATTRIBUTE, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute([t.attributeData.sizeFeature], r, 1, !0)]);
}
function y(t, e, r) {
  null != t.attributeData.opacityFeature && e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.OPACITYFEATUREATTRIBUTE, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute([t.attributeData.opacityFeature], r, 1, !0)]);
}
function E(r, o, s) {
  if (null == r.overlayInfo || r.overlayInfo.renderCoordsHelper.viewingMode !== _ViewingMode_js__WEBPACK_IMPORTED_MODULE_9__.ViewingMode.Global || !r.overlayInfo.spatialReference.isGeographic) return;
  const p = (0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_6__.newDoubleArray)(s.length),
    f = (0,_geometry_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_4__.getReferenceEllipsoid)(r.overlayInfo.spatialReference);
  for (let t = 0; t < p.length; t += 3) (0,_geometry_projection_projectors_js__WEBPACK_IMPORTED_MODULE_5__.lonLatToWebMercatorComparable)(s, t, p, t, f);
  const b = s.length / 3,
    g = (0,_geometry_support_FloatArray_js__WEBPACK_IMPORTED_MODULE_7__.newFloatArray)(b + 1);
  let h = I,
    T = F,
    D = 0,
    j = 0;
  (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(h, p[j++], p[j++], p[j++]), g[0] = 0;
  for (let n = 1; n < b + 1; ++n) n === b && (j = 0), (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(T, p[j++], p[j++], p[j++]), D += (0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__.p)(h, T), g[n] = D, [h, T] = [T, h];
  o.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_13__.VertexAttribute.DISTANCETOSTART, new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_10__.Attribute(g, o[0][1].indices, 1, !0)]);
}
function A(t) {
  const e = t.length;
  return t[0] === t[e - 3] && t[1] === t[e - 2] && t[2] === t[e - 1];
}
const I = (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),
  F = (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();
function R(t, e) {
  if (null == t || 0 === t.length) return [];
  const r = [];
  return t.forEach(t => {
    const o = t.length,
      n = (0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_6__.newDoubleArray)(3 * o);
    t.forEach((t, e) => {
      n[3 * e] = t[0], n[3 * e + 1] = t[1], n[3 * e + 2] = t[2];
    });
    const i = {
      attributeData: {
        position: n,
        normal: e
      },
      removeDuplicateStartEnd: !1
    };
    r.push(i);
  }), r;
}


/***/ }),

/***/ 18121:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/renderInfoUtils/line.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "geometryToRenderInfo": () => (/* binding */ p),
/* harmony export */   "geometryToRenderInfoDraped": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/projection/projectBuffer.js */ 99128);
/* harmony import */ var _geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../geometry/support/DoubleArray.js */ 10870);
/* harmony import */ var _geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/triangulationUtils.js */ 73819);
/* harmony import */ var _layers_graphics_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers/graphics/elevationAlignmentUtils.js */ 30653);
/* harmony import */ var _terrain_OverlayRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../terrain/OverlayRenderer.js */ 86831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





function p(o, t, s, p) {
  const l = "polygon" === o.type ? _geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__.CounterClockwiseMode.CCW_IS_HOLE : _geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__.CounterClockwiseMode.NONE,
    a = "polygon" === o.type ? o.rings : o.paths,
    {
      position: u,
      outlines: f
    } = (0,_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__.pathsToTriangulationInfo)(a, !!o.hasZ, l, o.spatialReference),
    g = (0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__.newDoubleArray)(u.length),
    m = (0,_layers_graphics_elevationAlignmentUtils_js__WEBPACK_IMPORTED_MODULE_3__.applyPerVertexElevationAlignment)(u, o.spatialReference, 0, g, 0, u, 0, u.length / 3, t, s, p),
    y = null != m;
  return {
    lines: y ? c(f, u, g) : [],
    projectionSuccess: y,
    sampledElevation: m
  };
}
function l(e, t) {
  const i = "polygon" === e.type ? _geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__.CounterClockwiseMode.CCW_IS_HOLE : _geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__.CounterClockwiseMode.NONE,
    p = "polygon" === e.type ? e.rings : e.paths,
    {
      position: l,
      outlines: a
    } = (0,_geometry_support_triangulationUtils_js__WEBPACK_IMPORTED_MODULE_2__.pathsToTriangulationInfo)(p, !1, i),
    u = (0,_geometry_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_0__.projectBuffer)(l, e.spatialReference, 0, l, t, 0, l.length / 3);
  for (let o = 2; o < l.length; o += 3) l[o] = _terrain_OverlayRenderer_js__WEBPACK_IMPORTED_MODULE_4__.drapedZ;
  return {
    lines: u ? c(a, l) : [],
    projectionSuccess: u
  };
}
function c(o, e, n = null) {
  const r = new Array();
  for (const {
    index: i,
    count: s
  } of o) {
    if (s <= 1) continue;
    const o = 3 * i,
      p = 3 * s;
    r.push({
      position: (0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__.doubleSubArray)(e, 3 * i, 3 * s),
      mapPositions: null != n ? (0,_geometry_support_DoubleArray_js__WEBPACK_IMPORTED_MODULE_1__.doubleSubArray)(n, o, p) : void 0
    });
  }
  return r;
}


/***/ }),

/***/ 206:
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/lineStippleUtils.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStipplePatternSimple": () => (/* binding */ h),
/* harmony export */   "getStipplePatternForLinePattern": () => (/* binding */ n),
/* harmony export */   "getStipplePatternForPatternStyle": () => (/* binding */ l)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t = {
    dash: [4, 3],
    dot: [1, 3],
    "long-dash": [8, 3],
    "short-dash": [4, 1],
    "short-dot": [1, 1]
  },
  o = {
    dash: t.dash,
    "dash-dot": [...t.dash, ...t.dot],
    dot: t.dot,
    "long-dash": t["long-dash"],
    "long-dash-dot": [...t["long-dash"], ...t.dot],
    "long-dash-dot-dot": [...t["long-dash"], ...t.dot, ...t.dot],
    none: null,
    "short-dash": t["short-dash"],
    "short-dash-dot": [...t["short-dash"], ...t["short-dot"]],
    "short-dash-dot-dot": [...t["short-dash"], ...t["short-dot"], ...t["short-dot"]],
    "short-dot": t["short-dot"],
    solid: null
  },
  d = 8;
function s(t, o) {
  return null == t ? t : {
    pattern: t.slice(),
    pixelRatio: o
  };
}
function h(t) {
  return {
    pattern: [t, t],
    pixelRatio: 2
  };
}
function n(t) {
  return null != t && "style" === t.type ? l(t.style) : null;
}
function l(t) {
  return null != t ? s(o[t], d) : null;
}


/***/ }),

/***/ 72321:
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/draw/support/helpMessageUtils3d.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDrawMeshHelpMessage": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/unitUtils.js */ 82769);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/vec3.js */ 92950);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/vec3f64.js */ 77765);
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/elevationInfoUtils.js */ 64316);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/




function i(r, i) {
  const f = r?.geometry;
  if (!r || "mesh" !== f?.type || !i) return;
  const {
      renderCoordsHelper: h,
      elevationProvider: p
    } = i,
    {
      camera: l
    } = i.state,
    {
      extent: d
    } = f,
    {
      center: v,
      spatialReference: x
    } = d,
    g = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerUnitForSR)(x),
    j = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerVerticalUnitForSR)(x),
    z = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__.getMetersPerUnitForSR)(h.spatialReference),
    y = d.width * g,
    C = d.height * j,
    R = (d.zmax ?? 0) * j,
    U = R - (d.zmin ?? 0) * j,
    k = Math.max(y, C, U) / z,
    {
      x: w,
      y: P
    } = v,
    S = v.z ?? 0;
  (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(u, w, P, S), h.toRenderCoords(u, x, u);
  const T = k / l.computeScreenPixelSizeAt(u);
  if (T > l.width * c) return "meshTooClose";
  if (T < m) return "meshTooFar";
  const b = (0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_3__.getGraphicEffectiveElevationInfo)(r),
    {
      absoluteZ: A
    } = (0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_3__.zValueInAbsoluteHeightMode)(w, P, R, x, i, b);
  return A < (p.getElevation(w, P, S, x, "ground") ?? 0) * j + U * a ? "meshUnderground" : "mesh";
}
const m = 20,
  c = 1,
  a = .1,
  u = (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ 26125:
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/draw/support/settings.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colors": () => (/* binding */ s),
/* harmony export */   "getEdgeColor": () => (/* binding */ w),
/* harmony export */   "settings": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Color.js */ 25764);
/* harmony import */ var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/colorUtils.js */ 44660);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/


const s = {
  main: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255, 127, 0]),
  selected: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255, 255, 255]),
  outline: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0, 0, 0, .5]),
  selectedOutline: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255, 255, 255]),
  hoverOutline: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255, 255, 255]),
  secondary: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([255, 255, 255]),
  secondaryOutline: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([100, 100, 100]),
  transparent: new _Color_js__WEBPACK_IMPORTED_MODULE_0__["default"]([0, 0, 0, 0])
};
function n(e, o) {
  Object.assign(e, o);
}
class i {
  constructor(e) {
    this.size = 8, this.hoverSize = 10, this.color = s.main, this.hoverColor = s.main, this.outlineColor = s.outline, this.hoverOutlineColor = s.hoverOutline, n(this, e);
  }
}
class l {
  constructor(e) {
    this.color = s.secondary, this.hoverColor = s.main, n(this, e);
  }
}
class c {
  constructor(e) {
    this.color = s.transparent, this.hoverColor = s.transparent, this.outlineColor = s.main, this.hoverOutlineColor = s.main, this.stagedColor = s.transparent, this.stagedOutlineColor = s.secondary, n(this, e);
  }
}
class h {
  constructor(e) {
    this.vertex = new i(), this.midpoint = new i({
      color: s.secondary,
      outlineColor: s.secondaryOutline,
      size: 6
    }), this.selected = new i({
      color: s.selected,
      hoverColor: s.selected,
      hoverOutlineColor: s.hoverOutline
    }), n(this, e);
  }
}
class a {
  constructor(e) {
    this.center = new i({
      color: s.secondaryOutline
    }), this.fill = new c(), this.line = new l(), this.vertex = new i({
      color: s.selected,
      outlineColor: s.main,
      hoverColor: s.selected,
      hoverOutlineColor: s.secondaryOutline
    }), n(this, e);
  }
}
class u {
  constructor(e) {
    this.reshapeGraphics = new h(), this.transformGraphics = new a(), n(this, e);
  }
}
const d = new u();
function w(e) {
  return (0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.unitRGBAFromColor)((0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.desaturate)((0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_1__.multiplyOpacity)(e, 2 / 3), .5));
}


/***/ }),

/***/ 37011:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/candidates/VertexSnappingCandidate.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VertexSnappingCandidate": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sketch/constraints.js */ 74772);
/* harmony import */ var _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureSnappingCandidate.js */ 10805);
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hints/PointSnappingHint.js */ 57755);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/



class r extends _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__.FeatureSnappingCandidate {
  constructor(n) {
    super({
      ...n,
      constraint: new _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__.PointConstraint(n.targetPoint)
    });
  }
  get hints() {
    return [new _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__.PointSnappingHint(this.targetPoint, this.isDraped, this.domain)];
  }
}


/***/ }),

/***/ 17028:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/queryEngineUtils.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertSnappingCandidate": () => (/* binding */ a),
/* harmony export */   "makeGetGroundElevation": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sketch/normalizedPoint.js */ 88268);
/* harmony import */ var _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../candidates/DrapedEdgeSnappingCandidate.js */ 75384);
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../candidates/EdgeSnappingCandidate.js */ 44105);
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../candidates/VertexSnappingCandidate.js */ 37011);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/




function r({
  x: t,
  y: n,
  z: d
}) {
  return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__.fromValues)(t, n, d ?? 0);
}
function a(e, a) {
  switch (e.type) {
    case "edge":
      return e.draped ? new _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__.DrapedEdgeSnappingCandidate({
        edgeStart: r(e.start),
        edgeEnd: r(e.end),
        targetPoint: r(e.target),
        objectId: e.objectId,
        getGroundElevation: a
      }) : new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__.EdgeSnappingCandidate({
        edgeStart: r(e.start),
        edgeEnd: r(e.end),
        targetPoint: r(e.target),
        objectId: e.objectId,
        isDraped: !1
      });
    case "vertex":
      return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__.VertexSnappingCandidate({
        targetPoint: r(e.target),
        objectId: e.objectId,
        isDraped: !1
      });
  }
}
function o(e, t) {
  return null != e && "3d" === e.type ? (n, d) => e.elevationProvider.getElevation(n, d, 0, t, "ground") : () => null;
}


/***/ }),

/***/ 50960:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationAlignment.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSnappingCandidateElevationAligner": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ 67087);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/LRUCache.js */ 61101);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/MapUtils.js */ 20359);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 30801);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/unitUtils.js */ 82769);
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../symbols/support/unitConversionUtils.js */ 55821);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/






function i(e = !1, t) {
  if (e) {
    const {
      elevationInfo: e,
      alignPointsInFeatures: s
    } = t;
    return new c(e, s);
  }
  return new a();
}
class a {
  alignCandidates(e, t, s) {
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return e;
    })();
  }
  notifyElevationSourceChange() {}
}
const r = 1024;
class c {
  constructor(t, s) {
    this._elevationInfo = t, this._alignPointsInFeatures = s, this._alignmentsCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__.LRUCache(r), this._cacheVersion = 0;
  }
  alignCandidates(e, t, s) {
    var _this = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const n = _this._elevationInfo;
      return null == n || "absolute-height" !== n.mode || n.featureExpressionInfo ? _this._alignComputedElevationCandidates(e, t, s) : (_this._alignAbsoluteElevationCandidates(e, t, n), e);
    })();
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignAbsoluteElevationCandidates(e, t, s) {
    const {
      offset: i,
      unit: a
    } = s;
    if (null == i) return;
    const r = (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_5__.getMetersPerVerticalUnitForSR)(t),
      c = i * ((0,_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_6__.getMetersPerUnit)(a ?? "meters") / r);
    for (const n of e) switch (n.type) {
      case "edge":
        n.start.z += c, n.end.z += c;
        continue;
      case "vertex":
        n.target.z += c;
        continue;
    }
  }
  _alignComputedElevationCandidates(e, n, o) {
    var _this2 = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const i = new Map();
      for (const s of e) (0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__.getOrCreateMapValue)(i, s.objectId, d).push(s);
      const [a, r, c] = _this2._prepareQuery(i, n),
        l = yield _this2._alignPointsInFeatures(a, o);
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(o);
      if (c !== _this2._cacheVersion) return _this2._alignComputedElevationCandidates(e, n, o);
      _this2._applyCacheAndResponse(a, l, r);
      const {
          drapedObjectIds: h,
          failedObjectIds: u
        } = l,
        p = [];
      for (const t of e) {
        const {
          objectId: e
        } = t;
        h.has(e) && "edge" === t.type && (t.draped = !0), u.has(e) || p.push(t);
      }
      return p;
    })();
  }
  _prepareQuery(e, t) {
    const s = [],
      n = [];
    for (const [o, i] of e) {
      const e = [];
      for (const t of i) this._addToQueriesOrCachedResult(o, t.target, e, n), "edge" === t.type && (this._addToQueriesOrCachedResult(o, t.start, e, n), this._addToQueriesOrCachedResult(o, t.end, e, n));
      0 !== e.length && s.push({
        objectId: o,
        points: e
      });
    }
    return [{
      spatialReference: t.toJSON(),
      pointsInFeatures: s
    }, n, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e, t, s, n) {
    const o = h(e, t),
      i = this._alignmentsCache.get(o);
    null == i ? s.push(t) : n.push(new l(t, i));
  }
  _applyCacheAndResponse(e, {
    elevations: t,
    drapedObjectIds: s,
    failedObjectIds: n
  }, o) {
    for (const r of o) r.apply();
    let i = 0;
    const a = this._alignmentsCache;
    for (const {
      objectId: r,
      points: c
    } of e.pointsInFeatures) {
      if (n.has(r)) {
        i += c.length;
        continue;
      }
      const e = !s.has(r);
      for (const s of c) {
        const n = h(r, s),
          o = t[i++];
        s.z = o, e && a.put(n, o, 1);
      }
    }
  }
}
class l {
  constructor(e, t) {
    this.point = e, this.z = t;
  }
  apply() {
    this.point.z = this.z;
  }
}
function h(e, {
  x: t,
  y: s,
  z: n,
  spatialReference: o
}) {
  return `${e}-${t}-${s}-${n ?? 0}}-wkid:${o?.wkid}`;
}
function d() {
  return [];
}


/***/ }),

/***/ 61117:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationFilter.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSnappingCandidateElevationFilter": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ 67087);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/

class t {
  filter(t, n) {
    return n;
  }
  notifyElevationSourceChange() {}
}
class n {
  filter(t, n) {
    const {
        point: r,
        distance: c
      } = t,
      {
        z: i
      } = r;
    if (!(null != i)) return n;
    if (0 === n.length) return n;
    const o = s(c),
      u = this._updateCandidatesTo3D(n, r, o).filter(e);
    return u.sort(a), u;
  }
  _updateCandidatesTo3D(t, n, e) {
    for (const r of t) switch (r.type) {
      case "edge":
        c(r, n, e);
        continue;
      case "vertex":
        o(r, n, e);
        continue;
    }
    return t;
  }
}
function e(t) {
  return t.distance <= 1;
}
function r(e = !1) {
  return e ? new n() : new t();
}
function c(t, n, {
  x: e,
  y: r,
  z: c
}) {
  const {
    start: o,
    end: s,
    target: a
  } = t;
  t.draped || i(a, n, o, s);
  const u = (n.x - a.x) / e,
    d = (n.y - a.y) / r,
    f = (n.z - a.z) / c;
  t.distance = Math.sqrt(u * u + d * d + f * f);
}
function i(t, n, e, r) {
  const c = r.x - e.x,
    i = r.y - e.y,
    o = r.z - e.z,
    s = c * c + i * i + o * o,
    a = (n.x - e.x) * c + (n.y - e.y) * i + o * (n.z - e.z),
    u = Math.min(1, Math.max(0, a / s)),
    d = e.x + c * u,
    f = e.y + i * u,
    x = e.z + o * u;
  t.x = d, t.y = f, t.z = x;
}
function o(t, n, {
  x: e,
  y: r,
  z: c
}) {
  const {
      target: i
    } = t,
    o = (n.x - i.x) / e,
    s = (n.y - i.y) / r,
    a = (n.z - i.z) / c,
    u = Math.sqrt(o * o + s * s + a * a);
  t.distance = u;
}
function s(t) {
  return "number" == typeof t ? {
    x: t,
    y: t,
    z: t
  } : t;
}
function a(t, n) {
  return t.distance - n.distance;
}


/***/ }),

/***/ 8941:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/snapping/featureSources/symbologySnappingCandidates.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSymbologySnappingCandidatesFetcher": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ 67087);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/lang.js */ 88684);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/LRUCache.js */ 61101);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ 30801);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/string.js */ 3758);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





function n(t = !1, e) {
  return t ? new i(e) : new c();
}
class c {
  fetch() {
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return [];
    })();
  }
  notifySymbologyChange() {}
}
const r = 1024;
class i {
  constructor(t) {
    this._getSymbologyCandidates = t, this._candidatesCache = new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_3__.LRUCache(r), this._cacheVersion = 0;
  }
  fetch(e, o) {
    var _this = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (0 === e.length) return [];
      const n = [],
        c = [],
        r = _this._candidatesCache;
      for (const s of e) {
        const e = a(s),
          o = r.get(e);
        if (o) for (const s of o) c.push((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(s));else n.push(s), r.put(e, [], 1);
      }
      if (0 === n.length) return c;
      const i = _this._cacheVersion,
        {
          candidates: h,
          sourceCandidateIndices: d
        } = yield _this._getSymbologyCandidates(n, o);
      (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__.throwIfAborted)(o);
      if (i !== _this._cacheVersion) return _this.fetch(e, o);
      const f = [],
        {
          length: g
        } = h;
      for (let s = 0; s < g; ++s) {
        const e = h[s],
          o = a(n[d[s]]),
          c = r.get(o);
        c.push(e), r.put(o, c, c.length), f.push((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__.clone)(e));
      }
      return c.concat(f);
    })();
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
}
function a(t) {
  switch (t.type) {
    case "vertex":
      {
        const {
            objectId: e,
            target: s
          } = t,
          n = `${e}-vertex-${s.x}-${s.y}-${s.z ?? 0}`;
        return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_5__.numericHash)(n).toString();
      }
    case "edge":
      {
        const {
            objectId: e,
            start: s,
            end: n
          } = t,
          c = `${e}-edge-${s.x}-${s.y}-${s.z ?? 0}-to-${n.x}-${n.y}-${n.z ?? 0}`;
        return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_5__.numericHash)(c).toString();
      }
    default:
      return "";
  }
}


/***/ }),

/***/ 72253:
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/tooltip/ExtentTooltipInfos.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtentRotateTooltipInfo": () => (/* binding */ i),
/* harmony export */   "ExtentScaleTooltipInfo": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/quantityUtils.js */ 76202);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 9497);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 20891);
/* harmony import */ var _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SketchTooltipInfo.js */ 15999);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





let i = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "extent-rotate", this.angle = 0;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], i.prototype, "angle", void 0), i = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.ExtentRotateTooltipInfo")], i);
let p = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "extent-scale", this.xScale = 0, this.yScale = 0, this.xSize = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters, this.ySize = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "xScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "yScale", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "xSize", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "ySize", void 0), p = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.ExtentScaleTooltipInfo")], p);


/***/ }),

/***/ 95031:
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/interactive/tooltip/TranslateTooltipInfos.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateGraphicTooltipInfo": () => (/* binding */ r),
/* harmony export */   "TranslateGraphicXYTooltipInfo": () => (/* binding */ l),
/* harmony export */   "TranslateGraphicZTooltipInfo": () => (/* binding */ a),
/* harmony export */   "TranslateVertexTooltipInfo": () => (/* binding */ p),
/* harmony export */   "TranslateVertexXYTooltipInfo": () => (/* binding */ c),
/* harmony export */   "TranslateVertexZTooltipInfo": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ 18100);
/* harmony import */ var _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/quantityUtils.js */ 76202);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ 9497);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ 20891);
/* harmony import */ var _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SketchTooltipInfo.js */ 15999);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





let r = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "translate-graphic", this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters;
  }
  clear() {
    this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], r.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], r.prototype, "distance", void 0), r = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.TranslateGraphicTooltipInfo")], r);
let a = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "translate-graphic-z", this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters;
  }
  clear() {
    this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], a.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], a.prototype, "distance", void 0), a = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.TranslateGraphicZTooltipInfo")], a);
let l = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "translate-graphic-xy", this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], l.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], l.prototype, "distance", void 0), l = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.TranslateGraphicXYTooltipInfo")], l);
let p = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "translate-vertex", this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters, this.elevation = null, this.area = null, this.totalLength = null;
  }
  clear() {
    this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters, this.elevation = null, this.area = null, this.totalLength = null;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "distance", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "elevation", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "area", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], p.prototype, "totalLength", void 0), p = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.TranslateVertexTooltipInfo")], p);
let n = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "translate-vertex-z", this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters, this.elevation = null;
  }
  clear() {
    this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters, this.elevation = null;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], n.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], n.prototype, "distance", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], n.prototype, "elevation", void 0), n = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.TranslateVertexZTooltipInfo")], n);
let c = class extends _SketchTooltipInfo_js__WEBPACK_IMPORTED_MODULE_4__.SketchTooltipInfo {
  constructor(t) {
    super(t), this.type = "translate-vertex-xy", this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters, this.elevation = null, this.area = null, this.totalLength = null;
  }
  clear() {
    this.distance = _core_quantityUtils_js__WEBPACK_IMPORTED_MODULE_1__.zeroMeters, this.elevation = null, this.area = null, this.totalLength = null;
  }
};
(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], c.prototype, "type", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], c.prototype, "distance", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], c.prototype, "elevation", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], c.prototype, "area", void 0), (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__.property)()], c.prototype, "totalLength", void 0), c = (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__.subclass)("esri.views.interactive.tooltip.TranslateVertexXYTooltipInfo")], c);


/***/ }),

/***/ 27725:
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/rasterUtils.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createColormapTexture": () => (/* binding */ l),
/* harmony export */   "createRasterTexture": () => (/* binding */ c),
/* harmony export */   "createTransformTexture": () => (/* binding */ m),
/* harmony export */   "getBasicGridUniforms": () => (/* binding */ g),
/* harmony export */   "getColormapUniforms": () => (/* binding */ p),
/* harmony export */   "getCommonUniforms": () => (/* binding */ _),
/* harmony export */   "getShadedReliefUniforms": () => (/* binding */ T),
/* harmony export */   "getStretchUniforms": () => (/* binding */ A),
/* harmony export */   "getUniformLocationInfos": () => (/* binding */ h),
/* harmony export */   "setTextures": () => (/* binding */ O),
/* harmony export */   "setUniforms": () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec2f64.js */ 83457);
/* harmony import */ var _contextUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contextUtils.js */ 40331);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums.js */ 69923);
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Texture.js */ 74697);
/* harmony import */ var _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextureDescriptor.js */ 13229);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/





function c(e, s, c = "nearest", m = !1) {
  const l = !(m && "u8" === s.pixelType),
    _ = l ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelType.FLOAT : _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelType.UNSIGNED_BYTE,
    p = null == s.pixels || 0 === s.pixels.length ? null : l ? s.getAsRGBAFloat() : s.getAsRGBA(),
    g = e.capabilities.textureFloat?.textureFloatLinear,
    A = new _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_4__.TextureDescriptor();
  return A.width = s.width, A.height = s.height, A.internalFormat = e.type === _contextUtils_js__WEBPACK_IMPORTED_MODULE_1__.ContextType.WEBGL2 && l ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA32F : _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGBA, A.samplingMode = !g || "bilinear" !== c && "cubic" !== c ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.NEAREST : _enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.LINEAR, A.dataType = _, A.wrapMode = _enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureWrapMode.CLAMP_TO_EDGE, new _Texture_js__WEBPACK_IMPORTED_MODULE_3__.Texture(e, A, p);
}
function m(e, s) {
  const {
      spacing: c,
      offsets: m,
      coefficients: l,
      size: [_, p]
    } = s,
    g = c[0] > 1,
    A = new _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_4__.TextureDescriptor();
  A.width = g ? 4 * _ : _, A.height = p, A.internalFormat = e.type === _contextUtils_js__WEBPACK_IMPORTED_MODULE_1__.ContextType.WEBGL2 ? _enums_js__WEBPACK_IMPORTED_MODULE_2__.SizedPixelFormat.RGBA32F : _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGBA, A.dataType = _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelType.FLOAT, A.samplingMode = _enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.NEAREST, A.wrapMode = _enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureWrapMode.CLAMP_TO_EDGE;
  const T = new Float32Array(g ? _ * p * 16 : 2 * m.length);
  if (g && null != l) for (let t = 0, n = 0; t < l.length; t++) T[n++] = l[t], t % 3 == 2 && (T[n++] = 1);else for (let t = 0; t < p; t++) for (let e = 0; e < _; e++) {
    const n = 4 * (t * _ + e),
      r = 2 * (e * p + t);
    T[n] = m[r], T[n + 1] = m[r + 1], T[n + 3] = -1 === m[r] ? 0 : 1;
  }
  return new _Texture_js__WEBPACK_IMPORTED_MODULE_3__.Texture(e, A, T);
}
function l(e, t) {
  const n = new _TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_4__.TextureDescriptor();
  return n.internalFormat = _enums_js__WEBPACK_IMPORTED_MODULE_2__.PixelFormat.RGBA, n.width = t.length / 4, n.height = 1, n.samplingMode = _enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureSamplingMode.NEAREST, n.wrapMode = _enums_js__WEBPACK_IMPORTED_MODULE_2__.TextureWrapMode.CLAMP_TO_EDGE, new _Texture_js__WEBPACK_IMPORTED_MODULE_3__.Texture(e, n, t);
}
function _(t, n, r, a = 1, i = !0) {
  return {
    u_flipY: i,
    u_applyTransform: !!t,
    u_opacity: a,
    u_transformSpacing: t ? t.spacing : _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__.Z,
    u_transformGridSize: t ? t.size : _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__.Z,
    u_targetImageSize: n,
    u_srcImageSize: r
  };
}
function p(e, t) {
  return {
    u_colormapOffset: t || 0,
    u_colormapMaxIndex: e ? e.length / 4 - 1 : 0
  };
}
function g(e, t) {
  return {
    u_scale: e,
    u_offset: t
  };
}
function A(e) {
  return {
    u_bandCount: e.bandCount,
    u_minOutput: e.outMin,
    u_maxOutput: e.outMax,
    u_minCutOff: e.minCutOff,
    u_maxCutOff: e.maxCutOff,
    u_factor: e.factor,
    u_useGamma: e.useGamma,
    u_gamma: e.gamma,
    u_gammaCorrection: e.gammaCorrection
  };
}
function T(e) {
  return {
    u_hillshadeType: e.hillshadeType,
    u_sinZcosAs: e.sinZcosAs,
    u_sinZsinAs: e.sinZsinAs,
    u_cosZs: e.cosZs,
    u_weights: e.weights,
    u_factor: e.factor,
    u_minValue: e.minValue,
    u_maxValue: e.maxValue
  };
}
function h(e, t) {
  const n = e.gl,
    r = t.glName,
    a = new Map();
  if (null == r) return a;
  const i = n.getProgramParameter(r, n.ACTIVE_UNIFORMS);
  let o;
  for (let s = 0; s < i; s++) o = n.getActiveUniform(r, s), o && a.set(o.name, {
    location: n.getUniformLocation(r, o.name),
    info: o
  });
  return a;
}
function E(e, t, n) {
  Object.keys(n).forEach(r => {
    const a = t.get(r) || t.get(r + "[0]");
    a && x(e, r, n[r], a);
  });
}
function O(e, t, n, r) {
  n.length === r.length && (r.some(e => null == e) || n.some(e => null == e) || n.forEach((n, a) => {
    t.setUniform1i(n, a), e.bindTexture(r[a], a);
  }));
}
function x(e, t, n, r) {
  if (null === r || null == n) return !1;
  const {
    info: a
  } = r;
  switch (a.type) {
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.FLOAT:
      a.size > 1 ? e.setUniform1fv(t, n) : e.setUniform1f(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.FLOAT_VEC2:
      e.setUniform2fv(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.FLOAT_VEC3:
      e.setUniform3fv(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.FLOAT_VEC4:
      e.setUniform4fv(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.FLOAT_MAT3:
      e.setUniformMatrix3fv(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.FLOAT_MAT4:
      e.setUniformMatrix4fv(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.INT:
      a.size > 1 ? e.setUniform1iv(t, n) : e.setUniform1i(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.BOOL:
      e.setUniform1i(t, n ? 1 : 0);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.INT_VEC2:
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.BOOL_VEC2:
      e.setUniform2iv(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.INT_VEC3:
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.BOOL_VEC3:
      e.setUniform3iv(t, n);
      break;
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.INT_VEC4:
    case _enums_js__WEBPACK_IMPORTED_MODULE_2__.UniformType.BOOL_VEC4:
      e.setUniform4iv(t, n);
      break;
    default:
      return !1;
  }
  return !0;
}


/***/ }),

/***/ 97584:
/*!********************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/combobox-item.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ ComboboxItem),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ 40994);
/* harmony import */ var _conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conditionalSlot.js */ 57669);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ 7499);
/* harmony import */ var _guid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guid.js */ 38722);
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive.js */ 59338);
/* harmony import */ var _utils2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils2.js */ 48560);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component.js */ 90662);
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ 2706);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */








const CSS = {
  icon: "icon",
  iconActive: "icon--active",
  iconIndent: "icon--indent",
  custom: "icon--custom",
  dot: "icon--dot",
  single: "label--single",
  label: "label",
  active: "label--active",
  selected: "label--selected",
  title: "title",
  textContainer: "text-container"
};
const comboboxItemCss = "@charset \"UTF-8\";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:\"•\"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}";
const ComboboxItem = /*@__PURE__*/(0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteComboboxItemChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.createEvent)(this, "calciteComboboxItemChange", 6);
    this.itemClickHandler = () => {
      this.toggleSelected();
    };
    this.disabled = false;
    this.selected = false;
    this.active = false;
    this.ancestors = undefined;
    this.guid = (0,_guid_js__WEBPACK_IMPORTED_MODULE_2__.g)();
    this.icon = undefined;
    this.iconFlipRtl = false;
    this.textLabel = undefined;
    this.value = undefined;
    this.filterDisabled = undefined;
    this.selectionMode = "multiple";
    this.scale = "m";
  }
  selectedWatchHandler() {
    this.calciteComboboxItemChange.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.ancestors = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.g)(this.el);
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.c)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  disconnectedCallback() {
    (0,_conditionalSlot_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  componentDidRender() {
    (0,_interactive_js__WEBPACK_IMPORTED_MODULE_3__.u)(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  toggleSelected() {
    const isSinglePersistSelect = this.selectionMode === "single-persist";
    if (this.disabled || isSinglePersistSelect && this.selected) {
      return;
    }
    this.selected = !this.selected;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderIcon(iconPath) {
    return this.icon ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", {
      class: {
        [CSS.custom]: !!this.icon,
        [CSS.iconActive]: this.icon && this.selected,
        [CSS.iconIndent]: true
      },
      flipRtl: this.iconFlipRtl,
      icon: this.icon || iconPath,
      key: "icon",
      scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale)
    }) : null;
  }
  renderSelectIndicator(showDot, iconPath) {
    return showDot ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", {
      class: {
        [CSS.icon]: true,
        [CSS.dot]: true,
        [CSS.iconIndent]: true
      }
    }) : (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("calcite-icon", {
      class: {
        [CSS.icon]: true,
        [CSS.iconActive]: this.selected,
        [CSS.iconIndent]: true
      },
      flipRtl: this.iconFlipRtl,
      icon: iconPath,
      key: "indicator",
      scale: (0,_component_js__WEBPACK_IMPORTED_MODULE_5__.g)(this.scale)
    });
  }
  renderChildren() {
    if ((0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.g)(this.el)) {
      return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("ul", {
        key: "default-slot-container"
      }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot", null));
    }
    return null;
  }
  render() {
    const isSingleSelect = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.i)(this.selectionMode);
    const showDot = isSingleSelect && !this.disabled;
    const defaultIcon = isSingleSelect ? "dot" : "check";
    const iconPath = this.disabled ? "" : defaultIcon;
    const classes = {
      [CSS.label]: true,
      [CSS.selected]: this.selected,
      [CSS.active]: this.active,
      [CSS.single]: isSingleSelect
    };
    const depth = (0,_utils2_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.el);
    return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)(_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.Host, {
      "aria-hidden": "true"
    }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("div", {
      class: `container scale--${this.scale}`,
      style: {
        "--calcite-combobox-item-spacing-indent-multiplier": `${depth}`
      }
    }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("li", {
      class: classes,
      id: this.guid,
      onClick: this.itemClickHandler
    }, this.renderSelectIndicator(showDot, iconPath), this.renderIcon(iconPath), (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_7__.h)("span", {
      class: "title"
    }, this.textLabel)), this.renderChildren()));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "selected": ["selectedWatchHandler"]
    };
  }
  static get style() {
    return comboboxItemCss;
  }
}, [1, "calcite-combobox-item", {
  "disabled": [516],
  "selected": [1540],
  "active": [516],
  "ancestors": [1040],
  "guid": [513],
  "icon": [513],
  "iconFlipRtl": [516, "icon-flip-rtl"],
  "textLabel": [513, "text-label"],
  "value": [8],
  "filterDisabled": [516, "filter-disabled"],
  "selectionMode": [513, "selection-mode"],
  "scale": [1]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-combobox-item", "calcite-icon"];
  components.forEach(tagName => {
    switch (tagName) {
      case "calcite-combobox-item":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, ComboboxItem);
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          (0,_icon_js__WEBPACK_IMPORTED_MODULE_6__.d)();
        }
        break;
    }
  });
}
defineCustomElement();


/***/ }),

/***/ 37050:
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/handle.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Handle),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ 40994);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ 7499);
/* harmony import */ var _loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadable.js */ 80483);
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale.js */ 9333);
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./t9n.js */ 75301);
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.js */ 2706);

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */






const CSS = {
  handle: "handle",
  handleActivated: "handle--activated"
};
const ICONS = {
  drag: "drag"
};
const handleCss = ":host{display:flex}.handle{display:flex;cursor:move;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-ui-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([hidden]){display:none}[hidden]{display:none}";
const Handle = /*@__PURE__*/(0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.calciteHandleNudge = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteHandleNudge", 6);
    this.calciteInternalHandleChange = (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.createEvent)(this, "calciteInternalHandleChange", 6);
    this.handleKeyDown = event => {
      switch (event.key) {
        case " ":
          this.activated = !this.activated;
          event.preventDefault();
          break;
        case "ArrowUp":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({
            direction: "up"
          });
          break;
        case "ArrowDown":
          if (!this.activated) {
            return;
          }
          event.preventDefault();
          this.calciteHandleNudge.emit({
            direction: "down"
          });
          break;
      }
    };
    this.handleBlur = () => {
      this.activated = false;
    };
    this.activated = false;
    this.dragHandle = undefined;
    this.messages = undefined;
    this.setPosition = undefined;
    this.setSize = undefined;
    this.label = undefined;
    this.messageOverrides = undefined;
    this.effectiveLocale = undefined;
    this.defaultMessages = undefined;
  }
  handleAriaTextChange() {
    const message = this.getAriaText("live");
    if (message) {
      this.calciteInternalHandleChange.emit({
        message
      });
    }
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.c)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.c)(this);
  }
  componentWillLoad() {
    var _this = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.a)(_this);
      yield (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.s)(_this);
    })();
  }
  componentDidLoad() {
    (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.s)(this);
  }
  disconnectedCallback() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.d)(this);
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_3__.d)(this);
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_4__.u)(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  setFocus() {
    var _this2 = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_loadable_js__WEBPACK_IMPORTED_MODULE_2__.c)(_this2);
      _this2.handleButton?.focus();
    })();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getAriaText(type) {
    const {
      setPosition,
      setSize,
      label,
      messages,
      activated
    } = this;
    if (!messages || !label || typeof setSize !== "number" || typeof setPosition !== "number") {
      return null;
    }
    const text = type === "label" ? activated ? messages.dragHandleChange : messages.dragHandleIdle : activated ? messages.dragHandleActive : messages.dragHandleCommit;
    const replacePosition = text.replace("{position}", setPosition.toString());
    const replaceLabel = replacePosition.replace("{itemLabel}", label);
    return replaceLabel.replace("{total}", setSize.toString());
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (
      // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
      (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("span", {
        "aria-label": this.getAriaText("label"),
        "aria-pressed": (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.t)(this.activated),
        class: {
          [CSS.handle]: true,
          [CSS.handleActivated]: this.activated
        },
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        role: "button",
        tabindex: "0",
        title: this.messages?.dragHandle,
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: el => {
          this.handleButton = el;
        }
      }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-icon", {
        icon: ICONS.drag,
        scale: "s"
      }))
    );
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "messages": ["handleAriaTextChange"],
      "label": ["handleAriaTextChange"],
      "activated": ["handleAriaTextChange"],
      "setPosition": ["handleAriaTextChange"],
      "setSize": ["handleAriaTextChange"],
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return handleCss;
  }
}, [1, "calcite-handle", {
  "activated": [1540],
  "dragHandle": [513, "drag-handle"],
  "messages": [16],
  "setPosition": [2, "set-position"],
  "setSize": [2, "set-size"],
  "label": [1],
  "messageOverrides": [16],
  "effectiveLocale": [32],
  "defaultMessages": [32],
  "setFocus": [64]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-handle", "calcite-icon"];
  components.forEach(tagName => {
    switch (tagName) {
      case "calcite-handle":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Handle);
        }
        break;
      case "calcite-icon":
        if (!customElements.get(tagName)) {
          (0,_icon_js__WEBPACK_IMPORTED_MODULE_5__.d)();
        }
        break;
    }
  });
}
defineCustomElement();


/***/ }),

/***/ 34747:
/*!************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/scrim.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Scrim),
/* harmony export */   "d": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ 40994);
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ 9333);
/* harmony import */ var _t9n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t9n.js */ 75301);
/* harmony import */ var _observers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observers.js */ 80709);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ 7499);
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader.js */ 31765);

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */






const CSS = {
  scrim: "scrim",
  content: "content"
};
const BREAKPOINTS = {
  s: 72,
  // medium is assumed default.
  l: 480 // Greater than or equal to 480px.
};

const scrimCss = ":host{position:absolute;inset:0px;z-index:var(--calcite-app-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-scrim-background-internal))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}";
const Scrim = /*@__PURE__*/(0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.proxyCustomElement)(class extends _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.resizeObserver = (0,_observers_js__WEBPACK_IMPORTED_MODULE_3__.c)("resize", () => this.handleResize());
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.handleDefaultSlotChange = event => {
      this.hasContent = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.w)(event);
    };
    this.storeLoaderEl = el => {
      this.loaderEl = el;
      this.handleResize();
    };
    this.loading = false;
    this.messages = undefined;
    this.messageOverrides = undefined;
    this.loaderScale = undefined;
    this.defaultMessages = undefined;
    this.effectiveLocale = "";
    this.hasContent = false;
  }
  onMessagesChange() {
    /* wired up by t9n util */
  }
  effectiveLocaleChange() {
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.u)(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.c)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.c)(this);
    this.resizeObserver?.observe(this.el);
  }
  componentWillLoad() {
    var _this = this;
    return (0,_home_ohnj_Documentos_realG4Life_1_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.s)(_this);
    })();
  }
  disconnectedCallback() {
    (0,_locale_js__WEBPACK_IMPORTED_MODULE_1__.d)(this);
    (0,_t9n_js__WEBPACK_IMPORTED_MODULE_2__.d)(this);
    this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const {
      hasContent,
      loading,
      messages
    } = this;
    return (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", {
      class: CSS.scrim
    }, loading ? (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("calcite-loader", {
      label: messages.loading,
      scale: this.loaderScale,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeLoaderEl
    }) : null, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("div", {
      class: CSS.content,
      hidden: !hasContent
    }, (0,_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_6__.h)("slot", {
      onSlotchange: this.handleDefaultSlotChange
    })));
  }
  getScale(size) {
    if (size < BREAKPOINTS.s) {
      return "s";
    } else if (size >= BREAKPOINTS.l) {
      return "l";
    } else {
      return "m";
    }
  }
  handleResize() {
    const {
      loaderEl,
      el
    } = this;
    if (!loaderEl) {
      return;
    }
    this.loaderScale = this.getScale(Math.min(el.clientHeight, el.clientWidth) ?? 0);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      "messageOverrides": ["onMessagesChange"],
      "effectiveLocale": ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return scrimCss;
  }
}, [1, "calcite-scrim", {
  "loading": [516],
  "messages": [1040],
  "messageOverrides": [1040],
  "loaderScale": [32],
  "defaultMessages": [32],
  "effectiveLocale": [32],
  "hasContent": [32]
}]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["calcite-scrim", "calcite-loader"];
  components.forEach(tagName => {
    switch (tagName) {
      case "calcite-scrim":
        if (!customElements.get(tagName)) {
          customElements.define(tagName, Scrim);
        }
        break;
      case "calcite-loader":
        if (!customElements.get(tagName)) {
          (0,_loader_js__WEBPACK_IMPORTED_MODULE_5__.d)();
        }
        break;
    }
  });
}
defineCustomElement();


/***/ }),

/***/ 34868:
/*!*************************************************************************!*\
  !*** ./node_modules/@esri/calcite-components/dist/components/utils3.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CSS),
/* harmony export */   "I": () => (/* binding */ ICONS),
/* harmony export */   "M": () => (/* binding */ MAX_COLUMNS),
/* harmony export */   "S": () => (/* binding */ SLOTS),
/* harmony export */   "a": () => (/* binding */ getDepth),
/* harmony export */   "g": () => (/* binding */ getListItemChildren),
/* harmony export */   "u": () => (/* binding */ updateListItemChildren)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client/index.js */ 40994);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.11.0
 */

const CSS = {
  container: "container",
  containerBorderSelected: "container--border-selected",
  containerBorderUnselected: "container--border-unselected",
  contentContainer: "content-container",
  contentContainerSelectable: "content-container--selectable",
  contentContainerHasCenterContent: "content-container--has-center-content",
  nestedContainer: "nested-container",
  nestedContainerHidden: "nested-container--hidden",
  content: "content",
  customContent: "custom-content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  contentBottom: "content-bottom",
  actionsEnd: "actions-end",
  selectionContainer: "selection-container",
  openContainer: "open-container",
  dragContainer: "drag-container"
};
const SLOTS = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentBottom: "content-bottom",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};
// Set to zero to extend until the end of the table section.
const MAX_COLUMNS = 0;
const ICONS = {
  selectedMultiple: "check-circle-f",
  selectedSingle: "circle-f",
  unselected: "blank",
  closedLTR: "caret-right",
  closedRTL: "caret-left",
  open: "caret-down",
  blank: "blank",
  close: "x"
};
const listSelector = "calcite-list";
const listItemGroupSelector = "calcite-list-item-group";
const listItemSelector = "calcite-list-item";
function getListItemChildren(slotEl) {
  const assignedElements = slotEl.assignedElements({
    flatten: true
  });
  const listItemGroupChildren = assignedElements.filter(el => el?.matches(listItemGroupSelector)).map(group => Array.from(group.querySelectorAll(listItemSelector))).reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  const listItemChildren = assignedElements.filter(el => el?.matches(listItemSelector));
  const listItemListChildren = assignedElements.filter(el => el?.matches(listSelector)).map(list => Array.from(list.querySelectorAll(listItemSelector))).reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
  return [...listItemListChildren, ...listItemGroupChildren, ...listItemChildren];
}
function updateListItemChildren(listItemChildren) {
  listItemChildren.forEach(listItem => {
    listItem.setPosition = listItemChildren.indexOf(listItem) + 1;
    listItem.setSize = listItemChildren.length;
  });
}
function getDepth(element, includeGroup = false) {
  if (!_stencil_core_internal_client_index_js__WEBPACK_IMPORTED_MODULE_0__.Build.isBrowser) {
    return 0;
  }
  const expression = includeGroup ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item";
  const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
  return result.snapshotLength;
}


/***/ })

}]);
//# sourceMappingURL=common.js.map