"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = List;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function List(_ref) {
  var children = _ref.children,
      heading = _ref.heading;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-1",
    tabIndex: -1
  }, heading && /*#__PURE__*/_react["default"].createElement("h4", {
    className: "px-3.5 text-gray-500 text-sm font-medium"
  }, heading), /*#__PURE__*/_react["default"].createElement("ul", {
    tabIndex: -1
  }, children));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMaXN0IiwiY2hpbGRyZW4iLCJoZWFkaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgTGlzdFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgaGVhZGluZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGNoaWxkcmVuLCBoZWFkaW5nIH06IExpc3RQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCIgdGFiSW5kZXg9ey0xfT5cbiAgICAgIHtoZWFkaW5nICYmIChcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInB4LTMuNSB0ZXh0LWdyYXktNTAwIHRleHQtc20gZm9udC1tZWRpdW1cIj57aGVhZGluZ308L2g0PlxuICAgICAgKX1cblxuICAgICAgPHVsIHRhYkluZGV4PXstMX0+e2NoaWxkcmVufTwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQU9lLFNBQVNBLElBQVQsT0FBZ0Q7RUFBQSxJQUFoQ0MsUUFBZ0MsUUFBaENBLFFBQWdDO0VBQUEsSUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtFQUM3RCxvQkFDRTtJQUFLLFNBQVMsRUFBQyxXQUFmO0lBQTJCLFFBQVEsRUFBRSxDQUFDO0VBQXRDLEdBQ0dBLE9BQU8saUJBQ047SUFBSSxTQUFTLEVBQUM7RUFBZCxHQUEwREEsT0FBMUQsQ0FGSixlQUtFO0lBQUksUUFBUSxFQUFFLENBQUM7RUFBZixHQUFtQkQsUUFBbkIsQ0FMRixDQURGO0FBU0QifQ==