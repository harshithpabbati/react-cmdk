"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _outline = require("@heroicons/react/outline");

var _solid = require("@heroicons/react/solid");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Search(_ref, ref) {
  var _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      prefix = _ref.prefix,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-1.5 pl-3"
  }, /*#__PURE__*/_react["default"].createElement(_outline.SearchIcon, {
    className: "w-4 pointer-events-none text-gray-400 dark:text-gray-600"
  }), prefix !== null && prefix !== void 0 && prefix.length ? prefix.map(function (p) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: p
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "dark:text-white"
    }, p), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-gray-500"
    }, "/"));
  }) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: ref,
    spellCheck: false,
    className: "py-4 px-0 border-none w-full focus:outline-none focus:border-none focus:ring-0 bg-transparent placeholder-gray-500 dark:text-white",
    onChange: function onChange(e) {
      _onChange(e.currentTarget.value);
    },
    onFocus: function onFocus(e) {
      e.currentTarget.select();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Escape" && value) {
        e.preventDefault();
        e.stopPropagation();

        _onChange("");
      }
    },
    id: "command-palette-search-input",
    placeholder: placeholder,
    value: value,
    type: "text",
    autoFocus: true
  }), value && /*#__PURE__*/_react["default"].createElement("button", {
    tabIndex: -1,
    type: "button",
    onClick: function onClick() {
      _onChange("");

      var inputElement = document.getElementById("command-palette-search-input");

      if (inputElement) {
        inputElement.focus();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_solid.XCircleIcon, {
    className: "w-5 text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 transition absolute right-3 top-1/2 transform -translate-y-1/2"
  }))));
}

var _default = /*#__PURE__*/(0, _react.forwardRef)(Search);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWFyY2giLCJyZWYiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwicHJlZml4IiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJwIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJzZWxlY3QiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImlucHV0RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2N1cyIsImZvcndhcmRSZWYiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9TZWFyY2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBGcmFnbWVudCwgUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IHsgWENpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiO1xuXG5pbnRlcmZhY2UgU2VhcmNoUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBwcmVmaXg/OiBzdHJpbmdbXTtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gU2VhcmNoKFxuICB7IG9uQ2hhbmdlLCBwbGFjZWhvbGRlciwgcHJlZml4LCB2YWx1ZSB9OiBTZWFyY2hQcm9wcyxcbiAgcmVmOiBSZWY8SFRNTElucHV0RWxlbWVudD5cbikge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xLjUgcGwtM1wiPlxuICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwidy00IHBvaW50ZXItZXZlbnRzLW5vbmUgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS02MDBcIiAvPlxuXG4gICAgICB7cHJlZml4Py5sZW5ndGhcbiAgICAgICAgPyBwcmVmaXgubWFwKChwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtwfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGVcIj57cH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPi88L3NwYW4+XG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIDogbnVsbH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHktNCBweC0wIGJvcmRlci1ub25lIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLW5vbmUgZm9jdXM6cmluZy0wIGJnLXRyYW5zcGFyZW50IHBsYWNlaG9sZGVyLWdyYXktNTAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zZWxlY3QoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgaWQ9XCJjb21tYW5kLXBhbGV0dGUtc2VhcmNoLWlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgLz5cblxuICAgICAgICB7dmFsdWUgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZShcIlwiKTtcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJjb21tYW5kLXBhbGV0dGUtc2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxYQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJ3LTUgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbiBhYnNvbHV0ZSByaWdodC0zIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzJcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoU2VhcmNoKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQVNBLFNBQVNBLE1BQVQsT0FFRUMsR0FGRixFQUdFO0VBQUEsSUFGRUMsU0FFRixRQUZFQSxRQUVGO0VBQUEsSUFGWUMsV0FFWixRQUZZQSxXQUVaO0VBQUEsSUFGeUJDLE1BRXpCLFFBRnlCQSxNQUV6QjtFQUFBLElBRmlDQyxLQUVqQyxRQUZpQ0EsS0FFakM7RUFDQSxvQkFDRTtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLGdDQUFDLG1CQUFEO0lBQVksU0FBUyxFQUFDO0VBQXRCLEVBREYsRUFHR0QsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixJQUFBQSxNQUFNLENBQUVFLE1BQVIsR0FDR0YsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsQ0FBRCxFQUFPO0lBQ2hCLG9CQUNFLGdDQUFDLGVBQUQ7TUFBVSxHQUFHLEVBQUVBO0lBQWYsZ0JBQ0U7TUFBTSxTQUFTLEVBQUM7SUFBaEIsR0FBbUNBLENBQW5DLENBREYsZUFFRTtNQUFNLFNBQVMsRUFBQztJQUFoQixPQUZGLENBREY7RUFNRCxDQVBELENBREgsR0FTRyxJQVpOLGVBY0U7SUFBSyxTQUFTLEVBQUM7RUFBZixnQkFDRTtJQUNFLEdBQUcsRUFBRVAsR0FEUDtJQUVFLFVBQVUsRUFBRSxLQUZkO0lBR0UsU0FBUyxFQUFDLG9JQUhaO0lBSUUsUUFBUSxFQUFFLGtCQUFDUSxDQUFELEVBQU87TUFDZlAsU0FBUSxDQUFDTyxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JMLEtBQWpCLENBQVI7SUFDRCxDQU5IO0lBT0UsT0FBTyxFQUFFLGlCQUFDSSxDQUFELEVBQU87TUFDZEEsQ0FBQyxDQUFDQyxhQUFGLENBQWdCQyxNQUFoQjtJQUNELENBVEg7SUFVRSxTQUFTLEVBQUUsbUJBQUNGLENBQUQsRUFBTztNQUNoQixJQUFJQSxDQUFDLENBQUNHLEdBQUYsS0FBVSxRQUFWLElBQXNCUCxLQUExQixFQUFpQztRQUMvQkksQ0FBQyxDQUFDSSxjQUFGO1FBQ0FKLENBQUMsQ0FBQ0ssZUFBRjs7UUFDQVosU0FBUSxDQUFDLEVBQUQsQ0FBUjtNQUNEO0lBQ0YsQ0FoQkg7SUFpQkUsRUFBRSxFQUFDLDhCQWpCTDtJQWtCRSxXQUFXLEVBQUVDLFdBbEJmO0lBbUJFLEtBQUssRUFBRUUsS0FuQlQ7SUFvQkUsSUFBSSxFQUFDLE1BcEJQO0lBcUJFLFNBQVM7RUFyQlgsRUFERixFQXlCR0EsS0FBSyxpQkFDSjtJQUNFLFFBQVEsRUFBRSxDQUFDLENBRGI7SUFFRSxJQUFJLEVBQUMsUUFGUDtJQUdFLE9BQU8sRUFBRSxtQkFBTTtNQUNiSCxTQUFRLENBQUMsRUFBRCxDQUFSOztNQUNBLElBQU1hLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQ25CLDhCQURtQixDQUFyQjs7TUFHQSxJQUFJRixZQUFKLEVBQWtCO1FBQ2hCQSxZQUFZLENBQUNHLEtBQWI7TUFDRDtJQUNGO0VBWEgsZ0JBYUUsZ0NBQUMsa0JBQUQ7SUFBYSxTQUFTLEVBQUM7RUFBdkIsRUFiRixDQTFCSixDQWRGLENBREY7QUE0REQ7OzRCQUVjLElBQUFDLGlCQUFBLEVBQVduQixNQUFYLEMifQ==