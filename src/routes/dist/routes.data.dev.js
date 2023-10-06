"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _Product = _interopRequireDefault(require("../components/products/Product"));

var _Home = _interopRequireDefault(require("../screens/Home/Home"));

var _ProductPage = _interopRequireDefault(require("../screens/ProductPage/ProductPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  component: _Home["default"]
}, {
  path: '/products/:name?',
  component: _ProductPage["default"]
}, {
  path: '/products/:name/:id',
  component: _Product["default"]
}];
exports.routes = routes;