"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var HeroIconsOutline = _interopRequireWildcard(require("@heroicons/react/outline"));

var HeroIconsSolid = _interopRequireWildcard(require("@heroicons/react/solid"));

var _react = _interopRequireDefault(require("react"));

var _excluded = ["name", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Icon(_ref) {
  var name = _ref.name,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "solid" : _ref$type,
      rest = _objectWithoutProperties(_ref, _excluded);

  var Element = (type === "solid" ? HeroIconsSolid : HeroIconsOutline)[name];
  return /*#__PURE__*/_react["default"].createElement(Element, _extends({}, rest, {
    className: "w-5 h-5 text-gray-500"
  }));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJY29uIiwibmFtZSIsInR5cGUiLCJyZXN0IiwiRWxlbWVudCIsIkhlcm9JY29uc1NvbGlkIiwiSGVyb0ljb25zT3V0bGluZSJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0ljb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEhlcm9JY29uc091dGxpbmUgZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0ICogYXMgSGVyb0ljb25zU29saWQgZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCBSZWFjdCwgeyBTVkdQcm9wcyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbk5hbWUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgSWNvblR5cGUgPSBcIm91dGxpbmVcIiB8IFwic29saWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJY29uUHJvcHMgZXh0ZW5kcyBTVkdQcm9wczxTVkdTVkdFbGVtZW50PiB7XG4gIHR5cGU/OiBJY29uVHlwZTtcbiAgbmFtZTogSWNvbk5hbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24oeyBuYW1lLCB0eXBlID0gXCJzb2xpZFwiLCAuLi5yZXN0IH06IEljb25Qcm9wcykge1xuICBjb25zdCBFbGVtZW50ID0gKHR5cGUgPT09IFwic29saWRcIiA/IEhlcm9JY29uc1NvbGlkIDogSGVyb0ljb25zT3V0bGluZSlbbmFtZV07XG5cbiAgcmV0dXJuIDxFbGVtZW50IHsuLi5yZXN0fSBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIiAvPjtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVZSxTQUFTQSxJQUFULE9BQTREO0VBQUEsSUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztFQUFBLHFCQUF0Q0MsSUFBc0M7RUFBQSxJQUF0Q0EsSUFBc0MsMEJBQS9CLE9BQStCO0VBQUEsSUFBbkJDLElBQW1COztFQUN6RSxJQUFNQyxPQUFPLEdBQUcsQ0FBQ0YsSUFBSSxLQUFLLE9BQVQsR0FBbUJHLGNBQW5CLEdBQW9DQyxnQkFBckMsRUFBdURMLElBQXZELENBQWhCO0VBRUEsb0JBQU8sZ0NBQUMsT0FBRCxlQUFhRSxJQUFiO0lBQW1CLFNBQVMsRUFBQztFQUE3QixHQUFQO0FBQ0QifQ==