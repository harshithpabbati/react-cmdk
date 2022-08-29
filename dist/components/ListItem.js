"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.Link = Link;
exports["default"] = ListItem;

var _Icon = _interopRequireDefault(require("./Icon"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("../lib/context");

var _utils = require("../lib/utils");

var _excluded = ["renderLink", "closeOnSelect", "disabled", "showType", "className", "iconType", "children", "onClick", "index", "icon"],
    _excluded2 = ["closeOnSelect", "showType", "className", "children", "iconType", "onClick", "index", "icon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function getListItemWrapperStyles(selected, disabled) {
  return (0, _utils.classNames)("command-palette-list-item block w-full text-left px-3.5 py-2.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-1 focus:ring-gray-300 focus:outline-none flex items-center space-x-2.5 justify-between", selected && !disabled ? "bg-gray-200/50 dark:bg-gray-800" : "bg-transparent", disabled ? "cursor-default pointer-events-none opacity-50" : "cursor-pointer");
}

function Link(_ref) {
  var localRenderLink = _ref.renderLink,
      _ref$closeOnSelect = _ref.closeOnSelect,
      closeOnSelect = _ref$closeOnSelect === void 0 ? true : _ref$closeOnSelect,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$showType = _ref.showType,
      showType = _ref$showType === void 0 ? true : _ref$showType,
      className = _ref.className,
      iconType = _ref.iconType,
      children = _ref.children,
      onClick = _ref.onClick,
      index = _ref.index,
      icon = _ref.icon,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_context.RenderLinkContext),
      globalRenderLink = _useContext.renderLink;

  var _useContext2 = (0, _react.useContext)(_context.OpenContext),
      onChangeOpen = _useContext2.onChangeOpen;

  var _useContext3 = (0, _react.useContext)(_context.SelectContext),
      selected = _useContext3.selected;

  var renderLink = localRenderLink || globalRenderLink;

  function renderLinkContent() {
    return /*#__PURE__*/_react["default"].createElement(ListItemContent, {
      type: showType ? "Link" : undefined,
      iconType: iconType,
      icon: icon
    }, children);
  }

  var styles = (0, _utils.classNames)(getListItemWrapperStyles(selected === index, disabled), className);

  function clickAndClose(e) {
    if (rest.href && !disabled) {
      if (onClick) {
        onClick(e);
      }

      if (closeOnSelect) {
        onChangeOpen(false);
      }
    }
  }

  return renderLink ? /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, renderLink(_objectSpread(_objectSpread({}, rest), {}, {
    "data-close-on-select": closeOnSelect,
    children: renderLinkContent(),
    "aria-disabled": disabled,
    onClick: clickAndClose,
    className: styles
  }))) : /*#__PURE__*/_react["default"].createElement("a", _extends({}, rest, {
    "data-close-on-select": closeOnSelect,
    "aria-disabled": disabled,
    onClick: clickAndClose,
    className: styles
  }), renderLinkContent());
}

function Button(_ref2) {
  var _rest$disabled;

  var _ref2$closeOnSelect = _ref2.closeOnSelect,
      closeOnSelect = _ref2$closeOnSelect === void 0 ? true : _ref2$closeOnSelect,
      _ref2$showType = _ref2.showType,
      showType = _ref2$showType === void 0 ? true : _ref2$showType,
      className = _ref2.className,
      children = _ref2.children,
      iconType = _ref2.iconType,
      onClick = _ref2.onClick,
      index = _ref2.index,
      icon = _ref2.icon,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  var _useContext4 = (0, _react.useContext)(_context.SelectContext),
      selected = _useContext4.selected;

  var _useContext5 = (0, _react.useContext)(_context.OpenContext),
      onChangeOpen = _useContext5.onChangeOpen;

  function clickAndClose(e) {
    if (onClick) {
      onClick(e);

      if (closeOnSelect) {
        onChangeOpen(false);
      }
    }
  }

  return /*#__PURE__*/_react["default"].createElement("button", _extends({}, rest, {
    "aria-disabled": (_rest$disabled = rest.disabled) !== null && _rest$disabled !== void 0 ? _rest$disabled : false,
    "data-close-on-select": closeOnSelect,
    onClick: clickAndClose,
    className: (0, _utils.classNames)(getListItemWrapperStyles(selected === index, rest.disabled), className)
  }), /*#__PURE__*/_react["default"].createElement(ListItemContent, {
    type: showType ? "Action" : undefined,
    iconType: iconType,
    icon: icon
  }, children));
}

function ListItemContent(_ref3) {
  var ListItemIcon = _ref3.icon,
      iconType = _ref3.iconType,
      children = _ref3.children,
      type = _ref3.type;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex w-full items-center space-x-2.5"
  }, ListItemIcon && (typeof ListItemIcon === "string" ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: ListItemIcon,
    type: iconType
  }) : /*#__PURE__*/_react["default"].createElement(ListItemIcon, {
    className: "w-5 h-5 text-gray-500"
  })), typeof children === "string" ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "truncate max-w-md dark:text-white"
  }, children) : children), type && /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-gray-500 text-sm"
  }, type));
}

function ListItem(props) {
  var Wrapper = props.href ? Link : Button;
  return /*#__PURE__*/_react["default"].createElement(Wrapper, props);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRMaXN0SXRlbVdyYXBwZXJTdHlsZXMiLCJzZWxlY3RlZCIsImRpc2FibGVkIiwiY2xhc3NOYW1lcyIsIkxpbmsiLCJsb2NhbFJlbmRlckxpbmsiLCJyZW5kZXJMaW5rIiwiY2xvc2VPblNlbGVjdCIsInNob3dUeXBlIiwiY2xhc3NOYW1lIiwiaWNvblR5cGUiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJpbmRleCIsImljb24iLCJyZXN0IiwidXNlQ29udGV4dCIsIlJlbmRlckxpbmtDb250ZXh0IiwiZ2xvYmFsUmVuZGVyTGluayIsIk9wZW5Db250ZXh0Iiwib25DaGFuZ2VPcGVuIiwiU2VsZWN0Q29udGV4dCIsInJlbmRlckxpbmtDb250ZW50IiwidW5kZWZpbmVkIiwic3R5bGVzIiwiY2xpY2tBbmRDbG9zZSIsImUiLCJocmVmIiwiQnV0dG9uIiwiTGlzdEl0ZW1Db250ZW50IiwiTGlzdEl0ZW1JY29uIiwidHlwZSIsIkxpc3RJdGVtIiwicHJvcHMiLCJXcmFwcGVyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJY29uLCB7IEljb25UeXBlIH0gZnJvbSBcIi4vSWNvblwiO1xuaW1wb3J0IFJlYWN0LCB7XG4gIEFuY2hvckhUTUxBdHRyaWJ1dGVzLFxuICBCdXR0b25IVE1MQXR0cmlidXRlcyxcbiAgRGV0YWlsZWRIVE1MUHJvcHMsXG4gIEZDLFxuICBGcmFnbWVudCxcbiAgUmVhY3ROb2RlLFxuICB1c2VDb250ZXh0LFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEljb25OYW1lLCBSZW5kZXJMaW5rIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBPcGVuQ29udGV4dCwgUmVuZGVyTGlua0NvbnRleHQsIFNlbGVjdENvbnRleHQgfSBmcm9tIFwiLi4vbGliL2NvbnRleHRcIjtcbmltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vbGliL3V0aWxzXCI7XG5cbmV4cG9ydCB0eXBlIExpc3RJdGVtVHlwZSA9IFwiTGlua1wiIHwgXCJBY3Rpb25cIjtcblxuZnVuY3Rpb24gZ2V0TGlzdEl0ZW1XcmFwcGVyU3R5bGVzKHNlbGVjdGVkOiBib29sZWFuLCBkaXNhYmxlZD86IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGNsYXNzTmFtZXMoXG4gICAgXCJjb21tYW5kLXBhbGV0dGUtbGlzdC1pdGVtIGJsb2NrIHctZnVsbCB0ZXh0LWxlZnQgcHgtMy41IHB5LTIuNSByb3VuZGVkLW1kIGhvdmVyOmJnLWdyYXktMTAwIGRhcms6aG92ZXI6YmctZ3JheS04MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMi41IGp1c3RpZnktYmV0d2VlblwiLFxuICAgIHNlbGVjdGVkICYmICFkaXNhYmxlZFxuICAgICAgPyBcImJnLWdyYXktMjAwLzUwIGRhcms6YmctZ3JheS04MDBcIlxuICAgICAgOiBcImJnLXRyYW5zcGFyZW50XCIsXG4gICAgZGlzYWJsZWRcbiAgICAgID8gXCJjdXJzb3ItZGVmYXVsdCBwb2ludGVyLWV2ZW50cy1ub25lIG9wYWNpdHktNTBcIlxuICAgICAgOiBcImN1cnNvci1wb2ludGVyXCJcbiAgKTtcbn1cblxuaW50ZXJmYWNlIExpc3RJdGVtQmFzZVByb3BzIHtcbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW47XG4gIGljb24/OiBGQyB8IEljb25OYW1lO1xuICBpY29uVHlwZT86IEljb25UeXBlO1xuICBzaG93VHlwZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAga2V5d29yZHM/OiBzdHJpbmdbXTtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaW5rUHJvcHNcbiAgZXh0ZW5kcyBMaXN0SXRlbUJhc2VQcm9wcyxcbiAgICBEZXRhaWxlZEhUTUxQcm9wczxcbiAgICAgIEFuY2hvckhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50PixcbiAgICAgIEhUTUxBbmNob3JFbGVtZW50XG4gICAgPiB7XG4gIHJlbmRlckxpbms/OiBSZW5kZXJMaW5rO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGluayh7XG4gIHJlbmRlckxpbms6IGxvY2FsUmVuZGVyTGluayxcbiAgY2xvc2VPblNlbGVjdCA9IHRydWUsXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIHNob3dUeXBlID0gdHJ1ZSxcbiAgY2xhc3NOYW1lLFxuICBpY29uVHlwZSxcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIGluZGV4LFxuICBpY29uLFxuICAuLi5yZXN0XG59OiBMaW5rUHJvcHMpIHtcbiAgY29uc3QgeyByZW5kZXJMaW5rOiBnbG9iYWxSZW5kZXJMaW5rIH0gPSB1c2VDb250ZXh0KFJlbmRlckxpbmtDb250ZXh0KTtcbiAgY29uc3QgeyBvbkNoYW5nZU9wZW4gfSA9IHVzZUNvbnRleHQoT3BlbkNvbnRleHQpO1xuICBjb25zdCB7IHNlbGVjdGVkIH0gPSB1c2VDb250ZXh0KFNlbGVjdENvbnRleHQpO1xuXG4gIGNvbnN0IHJlbmRlckxpbmsgPSBsb2NhbFJlbmRlckxpbmsgfHwgZ2xvYmFsUmVuZGVyTGluaztcblxuICBmdW5jdGlvbiByZW5kZXJMaW5rQ29udGVudCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtQ29udGVudFxuICAgICAgICB0eXBlPXtzaG93VHlwZSA/IFwiTGlua1wiIDogdW5kZWZpbmVkfVxuICAgICAgICBpY29uVHlwZT17aWNvblR5cGV9XG4gICAgICAgIGljb249e2ljb259XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGlzdEl0ZW1Db250ZW50PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBzdHlsZXMgPSBjbGFzc05hbWVzKFxuICAgIGdldExpc3RJdGVtV3JhcHBlclN0eWxlcyhzZWxlY3RlZCA9PT0gaW5kZXgsIGRpc2FibGVkKSxcbiAgICBjbGFzc05hbWVcbiAgKTtcblxuICBmdW5jdGlvbiBjbGlja0FuZENsb3NlKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEFuY2hvckVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XG4gICAgaWYgKHJlc3QuaHJlZiAmJiAhZGlzYWJsZWQpIHtcbiAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgIG9uQ2xpY2soZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgIG9uQ2hhbmdlT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlbmRlckxpbmsgPyAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3JlbmRlckxpbmsoe1xuICAgICAgICAuLi5yZXN0LFxuICAgICAgICBcImRhdGEtY2xvc2Utb24tc2VsZWN0XCI6IGNsb3NlT25TZWxlY3QsXG4gICAgICAgIGNoaWxkcmVuOiByZW5kZXJMaW5rQ29udGVudCgpLFxuICAgICAgICBcImFyaWEtZGlzYWJsZWRcIjogZGlzYWJsZWQsXG4gICAgICAgIG9uQ2xpY2s6IGNsaWNrQW5kQ2xvc2UsXG4gICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLFxuICAgICAgfSl9XG4gICAgPC9GcmFnbWVudD5cbiAgKSA6IChcbiAgICA8YVxuICAgICAgey4uLnJlc3R9XG4gICAgICBkYXRhLWNsb3NlLW9uLXNlbGVjdD17Y2xvc2VPblNlbGVjdH1cbiAgICAgIGFyaWEtZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17Y2xpY2tBbmRDbG9zZX1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzfVxuICAgID5cbiAgICAgIHtyZW5kZXJMaW5rQ29udGVudCgpfVxuICAgIDwvYT5cbiAgKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wc1xuICBleHRlbmRzIExpc3RJdGVtQmFzZVByb3BzLFxuICAgIERldGFpbGVkSFRNTFByb3BzPFxuICAgICAgQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxuICAgICAgSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICA+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oe1xuICBjbG9zZU9uU2VsZWN0ID0gdHJ1ZSxcbiAgc2hvd1R5cGUgPSB0cnVlLFxuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBpY29uVHlwZSxcbiAgb25DbGljayxcbiAgaW5kZXgsXG4gIGljb24sXG4gIC4uLnJlc3Rcbn06IEJ1dHRvblByb3BzKSB7XG4gIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHVzZUNvbnRleHQoU2VsZWN0Q29udGV4dCk7XG4gIGNvbnN0IHsgb25DaGFuZ2VPcGVuIH0gPSB1c2VDb250ZXh0KE9wZW5Db250ZXh0KTtcblxuICBmdW5jdGlvbiBjbGlja0FuZENsb3NlKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSB7XG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZSk7XG5cbiAgICAgIGlmIChjbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgIG9uQ2hhbmdlT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB7Li4ucmVzdH1cbiAgICAgIGFyaWEtZGlzYWJsZWQ9e3Jlc3QuZGlzYWJsZWQgPz8gZmFsc2V9XG4gICAgICBkYXRhLWNsb3NlLW9uLXNlbGVjdD17Y2xvc2VPblNlbGVjdH1cbiAgICAgIG9uQ2xpY2s9e2NsaWNrQW5kQ2xvc2V9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgIGdldExpc3RJdGVtV3JhcHBlclN0eWxlcyhzZWxlY3RlZCA9PT0gaW5kZXgsIHJlc3QuZGlzYWJsZWQpLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgPlxuICAgICAgPExpc3RJdGVtQ29udGVudFxuICAgICAgICB0eXBlPXtzaG93VHlwZSA/IFwiQWN0aW9uXCIgOiB1bmRlZmluZWR9XG4gICAgICAgIGljb25UeXBlPXtpY29uVHlwZX1cbiAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaXN0SXRlbUNvbnRlbnQ+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmludGVyZmFjZSBMaXN0SXRlbUNvbnRlbnRQcm9wcyB7XG4gIGljb24/OiBGQzxhbnk+IHwgSWNvbk5hbWU7XG4gIGljb25UeXBlPzogSWNvblR5cGU7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIHR5cGU/OiBMaXN0SXRlbVR5cGU7XG59XG5cbmZ1bmN0aW9uIExpc3RJdGVtQ29udGVudCh7XG4gIGljb246IExpc3RJdGVtSWNvbixcbiAgaWNvblR5cGUsXG4gIGNoaWxkcmVuLFxuICB0eXBlLFxufTogTGlzdEl0ZW1Db250ZW50UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yLjVcIj5cbiAgICAgICAge0xpc3RJdGVtSWNvbiAmJlxuICAgICAgICAgICh0eXBlb2YgTGlzdEl0ZW1JY29uID09PSBcInN0cmluZ1wiID8gKFxuICAgICAgICAgICAgPEljb24gbmFtZT17TGlzdEl0ZW1JY29uIGFzIEljb25OYW1lfSB0eXBlPXtpY29uVHlwZX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01IHRleHQtZ3JheS01MDBcIiAvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIHt0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgPyAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJ1bmNhdGUgbWF4LXctbWQgZGFyazp0ZXh0LXdoaXRlXCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHt0eXBlICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1zbVwiPnt0eXBlfTwvc3Bhbj59XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RJdGVtKHByb3BzOiBCdXR0b25Qcm9wcyAmIExpbmtQcm9wcykge1xuICBjb25zdCBXcmFwcGVyID0gcHJvcHMuaHJlZiA/IExpbmsgOiBCdXR0b247XG5cbiAgcmV0dXJuIDxXcmFwcGVyIHsuLi5wcm9wc30gLz47XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBVUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBU0Esd0JBQVQsQ0FBa0NDLFFBQWxDLEVBQXFEQyxRQUFyRCxFQUF5RTtFQUN2RSxPQUFPLElBQUFDLGlCQUFBLEVBQ0wsc05BREssRUFFTEYsUUFBUSxJQUFJLENBQUNDLFFBQWIsR0FDSSxpQ0FESixHQUVJLGdCQUpDLEVBS0xBLFFBQVEsR0FDSiwrQ0FESSxHQUVKLGdCQVBDLENBQVA7QUFTRDs7QUFxQk0sU0FBU0UsSUFBVCxPQVlPO0VBQUEsSUFYQUMsZUFXQSxRQVhaQyxVQVdZO0VBQUEsOEJBVlpDLGFBVVk7RUFBQSxJQVZaQSxhQVVZLG1DQVZJLElBVUo7RUFBQSx5QkFUWkwsUUFTWTtFQUFBLElBVFpBLFFBU1ksOEJBVEQsS0FTQztFQUFBLHlCQVJaTSxRQVFZO0VBQUEsSUFSWkEsUUFRWSw4QkFSRCxJQVFDO0VBQUEsSUFQWkMsU0FPWSxRQVBaQSxTQU9ZO0VBQUEsSUFOWkMsUUFNWSxRQU5aQSxRQU1ZO0VBQUEsSUFMWkMsUUFLWSxRQUxaQSxRQUtZO0VBQUEsSUFKWkMsT0FJWSxRQUpaQSxPQUlZO0VBQUEsSUFIWkMsS0FHWSxRQUhaQSxLQUdZO0VBQUEsSUFGWkMsSUFFWSxRQUZaQSxJQUVZO0VBQUEsSUFEVEMsSUFDUzs7RUFDWixrQkFBeUMsSUFBQUMsaUJBQUEsRUFBV0MsMEJBQVgsQ0FBekM7RUFBQSxJQUFvQkMsZ0JBQXBCLGVBQVFaLFVBQVI7O0VBQ0EsbUJBQXlCLElBQUFVLGlCQUFBLEVBQVdHLG9CQUFYLENBQXpCO0VBQUEsSUFBUUMsWUFBUixnQkFBUUEsWUFBUjs7RUFDQSxtQkFBcUIsSUFBQUosaUJBQUEsRUFBV0ssc0JBQVgsQ0FBckI7RUFBQSxJQUFRcEIsUUFBUixnQkFBUUEsUUFBUjs7RUFFQSxJQUFNSyxVQUFVLEdBQUdELGVBQWUsSUFBSWEsZ0JBQXRDOztFQUVBLFNBQVNJLGlCQUFULEdBQTZCO0lBQzNCLG9CQUNFLGdDQUFDLGVBQUQ7TUFDRSxJQUFJLEVBQUVkLFFBQVEsR0FBRyxNQUFILEdBQVllLFNBRDVCO01BRUUsUUFBUSxFQUFFYixRQUZaO01BR0UsSUFBSSxFQUFFSTtJQUhSLEdBS0dILFFBTEgsQ0FERjtFQVNEOztFQUVELElBQU1hLE1BQU0sR0FBRyxJQUFBckIsaUJBQUEsRUFDYkgsd0JBQXdCLENBQUNDLFFBQVEsS0FBS1ksS0FBZCxFQUFxQlgsUUFBckIsQ0FEWCxFQUViTyxTQUZhLENBQWY7O0VBS0EsU0FBU2dCLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTJFO0lBQ3pFLElBQUlYLElBQUksQ0FBQ1ksSUFBTCxJQUFhLENBQUN6QixRQUFsQixFQUE0QjtNQUMxQixJQUFJVSxPQUFKLEVBQWE7UUFDWEEsT0FBTyxDQUFDYyxDQUFELENBQVA7TUFDRDs7TUFFRCxJQUFJbkIsYUFBSixFQUFtQjtRQUNqQmEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtNQUNEO0lBQ0Y7RUFDRjs7RUFFRCxPQUFPZCxVQUFVLGdCQUNmLGdDQUFDLGVBQUQsUUFDR0EsVUFBVSxpQ0FDTlMsSUFETTtJQUVULHdCQUF3QlIsYUFGZjtJQUdUSSxRQUFRLEVBQUVXLGlCQUFpQixFQUhsQjtJQUlULGlCQUFpQnBCLFFBSlI7SUFLVFUsT0FBTyxFQUFFYSxhQUxBO0lBTVRoQixTQUFTLEVBQUVlO0VBTkYsR0FEYixDQURlLGdCQVlmLGtEQUNNVCxJQUROO0lBRUUsd0JBQXNCUixhQUZ4QjtJQUdFLGlCQUFlTCxRQUhqQjtJQUlFLE9BQU8sRUFBRXVCLGFBSlg7SUFLRSxTQUFTLEVBQUVEO0VBTGIsSUFPR0YsaUJBQWlCLEVBUHBCLENBWkY7QUFzQkQ7O0FBU00sU0FBU00sTUFBVCxRQVVTO0VBQUE7O0VBQUEsZ0NBVGRyQixhQVNjO0VBQUEsSUFUZEEsYUFTYyxvQ0FURSxJQVNGO0VBQUEsMkJBUmRDLFFBUWM7RUFBQSxJQVJkQSxRQVFjLCtCQVJILElBUUc7RUFBQSxJQVBkQyxTQU9jLFNBUGRBLFNBT2M7RUFBQSxJQU5kRSxRQU1jLFNBTmRBLFFBTWM7RUFBQSxJQUxkRCxRQUtjLFNBTGRBLFFBS2M7RUFBQSxJQUpkRSxPQUljLFNBSmRBLE9BSWM7RUFBQSxJQUhkQyxLQUdjLFNBSGRBLEtBR2M7RUFBQSxJQUZkQyxJQUVjLFNBRmRBLElBRWM7RUFBQSxJQURYQyxJQUNXOztFQUNkLG1CQUFxQixJQUFBQyxpQkFBQSxFQUFXSyxzQkFBWCxDQUFyQjtFQUFBLElBQVFwQixRQUFSLGdCQUFRQSxRQUFSOztFQUNBLG1CQUF5QixJQUFBZSxpQkFBQSxFQUFXRyxvQkFBWCxDQUF6QjtFQUFBLElBQVFDLFlBQVIsZ0JBQVFBLFlBQVI7O0VBRUEsU0FBU0ssYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMkU7SUFDekUsSUFBSWQsT0FBSixFQUFhO01BQ1hBLE9BQU8sQ0FBQ2MsQ0FBRCxDQUFQOztNQUVBLElBQUluQixhQUFKLEVBQW1CO1FBQ2pCYSxZQUFZLENBQUMsS0FBRCxDQUFaO01BQ0Q7SUFDRjtFQUNGOztFQUVELG9CQUNFLHVEQUNNTCxJQUROO0lBRUUsbUNBQWVBLElBQUksQ0FBQ2IsUUFBcEIsMkRBQWdDLEtBRmxDO0lBR0Usd0JBQXNCSyxhQUh4QjtJQUlFLE9BQU8sRUFBRWtCLGFBSlg7SUFLRSxTQUFTLEVBQUUsSUFBQXRCLGlCQUFBLEVBQ1RILHdCQUF3QixDQUFDQyxRQUFRLEtBQUtZLEtBQWQsRUFBcUJFLElBQUksQ0FBQ2IsUUFBMUIsQ0FEZixFQUVUTyxTQUZTO0VBTGIsaUJBVUUsZ0NBQUMsZUFBRDtJQUNFLElBQUksRUFBRUQsUUFBUSxHQUFHLFFBQUgsR0FBY2UsU0FEOUI7SUFFRSxRQUFRLEVBQUViLFFBRlo7SUFHRSxJQUFJLEVBQUVJO0VBSFIsR0FLR0gsUUFMSCxDQVZGLENBREY7QUFvQkQ7O0FBU0QsU0FBU2tCLGVBQVQsUUFLeUI7RUFBQSxJQUpqQkMsWUFJaUIsU0FKdkJoQixJQUl1QjtFQUFBLElBSHZCSixRQUd1QixTQUh2QkEsUUFHdUI7RUFBQSxJQUZ2QkMsUUFFdUIsU0FGdkJBLFFBRXVCO0VBQUEsSUFEdkJvQixJQUN1QixTQUR2QkEsSUFDdUI7RUFDdkIsb0JBQ0UsK0VBQ0U7SUFBSyxTQUFTLEVBQUM7RUFBZixHQUNHRCxZQUFZLEtBQ1YsT0FBT0EsWUFBUCxLQUF3QixRQUF4QixnQkFDQyxnQ0FBQyxnQkFBRDtJQUFNLElBQUksRUFBRUEsWUFBWjtJQUFzQyxJQUFJLEVBQUVwQjtFQUE1QyxFQURELGdCQUdDLGdDQUFDLFlBQUQ7SUFBYyxTQUFTLEVBQUM7RUFBeEIsRUFKUyxDQURmLEVBUUcsT0FBT0MsUUFBUCxLQUFvQixRQUFwQixnQkFDQztJQUFNLFNBQVMsRUFBQztFQUFoQixHQUFxREEsUUFBckQsQ0FERCxHQUdDQSxRQVhKLENBREYsRUFnQkdvQixJQUFJLGlCQUFJO0lBQU0sU0FBUyxFQUFDO0VBQWhCLEdBQXlDQSxJQUF6QyxDQWhCWCxDQURGO0FBb0JEOztBQUVjLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQWtEO0VBQy9ELElBQU1DLE9BQU8sR0FBR0QsS0FBSyxDQUFDTixJQUFOLEdBQWF2QixJQUFiLEdBQW9Cd0IsTUFBcEM7RUFFQSxvQkFBTyxnQ0FBQyxPQUFELEVBQWFLLEtBQWIsQ0FBUDtBQUNEIn0=