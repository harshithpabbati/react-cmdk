"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FreeSearchAction;

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("../lib/context");

var _excluded = ["label"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FreeSearchAction(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "Search for" : _ref$label,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_context.SearchContext),
      search = _useContext.search;

  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({
    index: 0,
    icon: "SearchIcon",
    showType: false
  }, props), /*#__PURE__*/_react["default"].createElement("span", {
    className: "max-w-md truncate dark:text-white"
  }, label, " ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "\"", search, "\"")));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGcmVlU2VhcmNoQWN0aW9uIiwibGFiZWwiLCJwcm9wcyIsInVzZUNvbnRleHQiLCJTZWFyY2hDb250ZXh0Iiwic2VhcmNoIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvRnJlZVNlYXJjaEFjdGlvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3RJdGVtLCB7IEJ1dHRvblByb3BzLCBMaW5rUHJvcHMgfSBmcm9tIFwiLi9MaXN0SXRlbVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tIFwiLi4vbGliL2NvbnRleHRcIjtcblxuaW50ZXJmYWNlIEZyZWVTZWFyY2hBY3Rpb25Qcm9wcyBleHRlbmRzIE9taXQ8QnV0dG9uUHJvcHMgJiBMaW5rUHJvcHMsIFwiaW5kZXhcIj4ge1xuICBpbmRleD86IG51bWJlcjtcbiAgbGFiZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZyZWVTZWFyY2hBY3Rpb24oe1xuICBsYWJlbCA9IFwiU2VhcmNoIGZvclwiLFxuICAuLi5wcm9wc1xufTogRnJlZVNlYXJjaEFjdGlvblByb3BzKSB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPExpc3RJdGVtIGluZGV4PXswfSBpY29uPVwiU2VhcmNoSWNvblwiIHNob3dUeXBlPXtmYWxzZX0gey4uLnByb3BzfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1heC13LW1kIHRydW5jYXRlIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICB7bGFiZWx9IDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5cIntzZWFyY2h9XCI8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC9MaXN0SXRlbT5cbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZSxTQUFTQSxnQkFBVCxPQUdXO0VBQUEsc0JBRnhCQyxLQUV3QjtFQUFBLElBRnhCQSxLQUV3QiwyQkFGaEIsWUFFZ0I7RUFBQSxJQURyQkMsS0FDcUI7O0VBQ3hCLGtCQUFtQixJQUFBQyxpQkFBQSxFQUFXQyxzQkFBWCxDQUFuQjtFQUFBLElBQVFDLE1BQVIsZUFBUUEsTUFBUjs7RUFFQSxvQkFDRSxnQ0FBQyxvQkFBRDtJQUFVLEtBQUssRUFBRSxDQUFqQjtJQUFvQixJQUFJLEVBQUMsWUFBekI7SUFBc0MsUUFBUSxFQUFFO0VBQWhELEdBQTJESCxLQUEzRCxnQkFDRTtJQUFNLFNBQVMsRUFBQztFQUFoQixHQUNHRCxLQURILG9CQUNVO0lBQU0sU0FBUyxFQUFDO0VBQWhCLFNBQWtDSSxNQUFsQyxPQURWLENBREYsQ0FERjtBQU9EIn0=