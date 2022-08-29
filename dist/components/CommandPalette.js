"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FreeSearchAction = _interopRequireDefault(require("./FreeSearchAction"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _List = _interopRequireDefault(require("./List"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var _Page = _interopRequireDefault(require("./Page"));

var _react = _interopRequireWildcard(require("react"));

var _Search = _interopRequireDefault(require("./Search"));

var _context = require("../lib/context");

var _react2 = require("@headlessui/react");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CommandPalette(_ref) {
  var selectedParent = _ref.selected,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? "Search" : _ref$placeholder,
      onChangeSelected = _ref.onChangeSelected,
      onChangeSearch = _ref.onChangeSearch,
      onChangeOpen = _ref.onChangeOpen,
      renderLink = _ref.renderLink,
      children = _ref.children,
      isOpen = _ref.isOpen,
      footer = _ref.footer,
      search = _ref.search,
      page = _ref.page;
  var inputRef = (0, _react.useRef)(null);

  var _ref2 = typeof selectedParent === "number" && onChangeSelected ? [selectedParent, onChangeSelected] : (0, _react.useState)(0),
      _ref3 = _slicedToArray(_ref2, 2),
      selected = _ref3[0],
      setSelected = _ref3[1];

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      searchPrefix = _useState2[0],
      setSearchPrefix = _useState2[1];

  function handleChangeSelected(direction) {
    var items = document.querySelectorAll(".command-palette-list-item");
    var index = 0;
    var newIndex = 0;
    var newItem;

    if (direction === "down") {
      items.forEach(function (_, i) {
        if (i === selected) {
          index = i;
        }
      });
      newIndex = index === items.length - 1 ? 0 : index + 1;
    } else if (direction === "up") {
      items.forEach(function (_, i) {
        if (i === selected) {
          index = i;
        }
      });
      newIndex = !index ? items.length - 1 : index - 1;
    } else {
      setSelected(0);
    }

    newItem = items[newIndex];

    if (newItem && typeof newIndex === "number") {
      setSelected(newIndex);
      newItem.scrollIntoView({
        behavior: "smooth",
        block: newIndex ? "center" : "end"
      });
    }
  }

  function handleSelect() {
    var items = document.querySelectorAll(".command-palette-list-item");
    var index = 0;
    var item;
    items.forEach(function (_, i) {
      if (i === selected) {
        index = i;
      }
    });
    item = items[index];

    if (item) {
      var _item$attributes$getN;

      item.click();

      if (((_item$attributes$getN = item.attributes.getNamedItem("data-close-on-select")) === null || _item$attributes$getN === void 0 ? void 0 : _item$attributes$getN.value) === "true") {
        onChangeOpen(false);
      }
    }
  }

  (0, _react.useEffect)(function () {
    handleChangeSelected();
  }, [search]);
  (0, _react.useEffect)(function () {
    setSelected(0);
  }, [page]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    onKeyDown: function onKeyDown(e) {
      if (e.key === "ArrowDown" || e.ctrlKey && e.key === "n" || e.ctrlKey && e.key === "j") {
        e.preventDefault();
        e.stopPropagation();
        handleChangeSelected("down");
      } else if (e.key === "ArrowUp" || e.ctrlKey && e.key === "p" || e.ctrlKey && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();
        handleChangeSelected("up");
      } else if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        handleSelect();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_react2.Transition, {
    appear: true,
    show: isOpen,
    as: _react.Fragment
  }, /*#__PURE__*/_react["default"].createElement(_react2.Dialog, {
    initialFocus: inputRef,
    as: "div",
    className: "command-palette",
    onClose: function onClose() {
      onChangeOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "command-palette-content antialiased"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-gray-900 bg-opacity-80"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 overflow-y-auto flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex w-full h-[450px] items-start justify-center p-4"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Transition.Child, {
    as: _react.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /*#__PURE__*/_react["default"].createElement(_react2.Dialog.Panel, {
    className: "w-full max-h-full bg-white dark:bg-gray-900 shadow-lg rounded-lg max-w-xl flex flex-col overflow-hidden divide-y dark:divide-gray-800"
  }, /*#__PURE__*/_react["default"].createElement(_context.PageContext.Provider, {
    value: {
      setSearchPrefix: setSearchPrefix,
      searchPrefix: searchPrefix,
      page: page
    }
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], {
    onChange: onChangeSearch,
    placeholder: placeholder,
    prefix: searchPrefix,
    value: search,
    ref: inputRef
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 overflow-y-auto focus:outline-none p-2 space-y-4",
    tabIndex: -1
  }, /*#__PURE__*/_react["default"].createElement(_context.OpenContext.Provider, {
    value: {
      isOpen: isOpen,
      onChangeOpen: onChangeOpen
    }
  }, /*#__PURE__*/_react["default"].createElement(_context.PageContext.Provider, {
    value: {
      page: page,
      searchPrefix: searchPrefix,
      setSearchPrefix: setSearchPrefix
    }
  }, /*#__PURE__*/_react["default"].createElement(_context.SearchContext.Provider, {
    value: {
      search: search
    }
  }, /*#__PURE__*/_react["default"].createElement(_context.SelectContext.Provider, {
    value: {
      selected: selected
    }
  }, /*#__PURE__*/_react["default"].createElement(_context.RenderLinkContext.Provider, {
    value: {
      renderLink: renderLink
    }
  }, children)))))), footer))))))));
}

CommandPalette.Page = _Page["default"];
CommandPalette.List = _List["default"];
CommandPalette.ListItem = _ListItem["default"];
CommandPalette.Icon = _Icon["default"];
CommandPalette.FreeSearchAction = _FreeSearchAction["default"];
var _default = CommandPalette;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb21tYW5kUGFsZXR0ZSIsInNlbGVjdGVkUGFyZW50Iiwic2VsZWN0ZWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlU2VsZWN0ZWQiLCJvbkNoYW5nZVNlYXJjaCIsIm9uQ2hhbmdlT3BlbiIsInJlbmRlckxpbmsiLCJjaGlsZHJlbiIsImlzT3BlbiIsImZvb3RlciIsInNlYXJjaCIsInBhZ2UiLCJpbnB1dFJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwic2V0U2VsZWN0ZWQiLCJzZWFyY2hQcmVmaXgiLCJzZXRTZWFyY2hQcmVmaXgiLCJoYW5kbGVDaGFuZ2VTZWxlY3RlZCIsImRpcmVjdGlvbiIsIml0ZW1zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5kZXgiLCJuZXdJbmRleCIsIm5ld0l0ZW0iLCJmb3JFYWNoIiwiXyIsImkiLCJsZW5ndGgiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJoYW5kbGVTZWxlY3QiLCJpdGVtIiwiY2xpY2siLCJhdHRyaWJ1dGVzIiwiZ2V0TmFtZWRJdGVtIiwidmFsdWUiLCJ1c2VFZmZlY3QiLCJlIiwia2V5IiwiY3RybEtleSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiRnJhZ21lbnQiLCJQYWdlIiwiTGlzdCIsIkxpc3RJdGVtIiwiSWNvbiIsIkZyZWVTZWFyY2hBY3Rpb24iXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9Db21tYW5kUGFsZXR0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZyZWVTZWFyY2hBY3Rpb24gZnJvbSBcIi4vRnJlZVNlYXJjaEFjdGlvblwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vSWNvblwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL0xpc3RJdGVtXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiO1xuaW1wb3J0IHtcbiAgT3BlbkNvbnRleHQsXG4gIFBhZ2VDb250ZXh0LFxuICBSZW5kZXJMaW5rQ29udGV4dCxcbiAgU2VhcmNoQ29udGV4dCxcbiAgU2VsZWN0Q29udGV4dCxcbn0gZnJvbSBcIi4uL2xpYi9jb250ZXh0XCI7XG5pbXBvcnQgeyBSZW5kZXJMaW5rIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUcmFuc2l0aW9uLCBEaWFsb2cgfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcblxuaW50ZXJmYWNlIENvbW1hbmRQYWxldHRlUHJvcHMge1xuICBvbkNoYW5nZVNlbGVjdGVkPzogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlU2VhcmNoOiAoc2VhcmNoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlT3BlbjogKGlzT3BlbjogYm9vbGVhbikgPT4gdm9pZDtcbiAgcmVuZGVyTGluaz86IFJlbmRlckxpbms7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBmb290ZXI/OiBSZWFjdE5vZGU7XG4gIHNlbGVjdGVkPzogbnVtYmVyO1xuICBpc09wZW46IGJvb2xlYW47XG4gIHNlYXJjaDogc3RyaW5nO1xuICBwYWdlPzogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBDb21tYW5kUGFsZXR0ZSh7XG4gIHNlbGVjdGVkOiBzZWxlY3RlZFBhcmVudCxcbiAgcGxhY2Vob2xkZXIgPSBcIlNlYXJjaFwiLFxuICBvbkNoYW5nZVNlbGVjdGVkLFxuICBvbkNoYW5nZVNlYXJjaCxcbiAgb25DaGFuZ2VPcGVuLFxuICByZW5kZXJMaW5rLFxuICBjaGlsZHJlbixcbiAgaXNPcGVuLFxuICBmb290ZXIsXG4gIHNlYXJjaCxcbiAgcGFnZSxcbn06IENvbW1hbmRQYWxldHRlUHJvcHMpIHtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPVxuICAgIHR5cGVvZiBzZWxlY3RlZFBhcmVudCA9PT0gXCJudW1iZXJcIiAmJiBvbkNoYW5nZVNlbGVjdGVkXG4gICAgICA/IFtzZWxlY3RlZFBhcmVudCwgb25DaGFuZ2VTZWxlY3RlZF1cbiAgICAgIDogdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICBjb25zdCBbc2VhcmNoUHJlZml4LCBzZXRTZWFyY2hQcmVmaXhdID0gdXNlU3RhdGU8c3RyaW5nW10gfCB1bmRlZmluZWQ+KCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlU2VsZWN0ZWQoZGlyZWN0aW9uPzogXCJ1cFwiIHwgXCJkb3duXCIpIHtcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tbWFuZC1wYWxldHRlLWxpc3QtaXRlbVwiKTtcblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IG5ld0luZGV4ID0gMDtcbiAgICBsZXQgbmV3SXRlbTogRWxlbWVudDtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBzZWxlY3RlZCkge1xuICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG5ld0luZGV4ID0gaW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKF8sIGkpID0+IHtcbiAgICAgICAgaWYgKGkgPT09IHNlbGVjdGVkKSB7XG4gICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmV3SW5kZXggPSAhaW5kZXggPyBpdGVtcy5sZW5ndGggLSAxIDogaW5kZXggLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZCgwKTtcbiAgICB9XG5cbiAgICBuZXdJdGVtID0gaXRlbXNbbmV3SW5kZXhdO1xuXG4gICAgaWYgKG5ld0l0ZW0gJiYgdHlwZW9mIG5ld0luZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICBzZXRTZWxlY3RlZChuZXdJbmRleCk7XG4gICAgICBuZXdJdGVtLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgIGJsb2NrOiBuZXdJbmRleCA/IFwiY2VudGVyXCIgOiBcImVuZFwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0KCkge1xuICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmNvbW1hbmQtcGFsZXR0ZS1saXN0LWl0ZW1cIlxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudCB8IEhUTUxBbmNob3JFbGVtZW50PjtcblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgbGV0IGl0ZW06IEhUTUxBbmNob3JFbGVtZW50IHwgSFRNTEJ1dHRvbkVsZW1lbnQ7XG5cbiAgICBpdGVtcy5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgaW5kZXggPSBpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBpdGVtLmNsaWNrKCk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgaXRlbS5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbShcImRhdGEtY2xvc2Utb24tc2VsZWN0XCIpPy52YWx1ZSA9PT0gXCJ0cnVlXCJcbiAgICAgICkge1xuICAgICAgICBvbkNoYW5nZU9wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlQ2hhbmdlU2VsZWN0ZWQoKTtcbiAgfSwgW3NlYXJjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWQoMCk7XG4gIH0sIFtwYWdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiB8fFxuICAgICAgICAgIChlLmN0cmxLZXkgJiYgZS5rZXkgPT09IFwiblwiKSB8fFxuICAgICAgICAgIChlLmN0cmxLZXkgJiYgZS5rZXkgPT09IFwialwiKVxuICAgICAgICApIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBoYW5kbGVDaGFuZ2VTZWxlY3RlZChcImRvd25cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgZS5rZXkgPT09IFwiQXJyb3dVcFwiIHx8XG4gICAgICAgICAgKGUuY3RybEtleSAmJiBlLmtleSA9PT0gXCJwXCIpIHx8XG4gICAgICAgICAgKGUuY3RybEtleSAmJiBlLmtleSA9PT0gXCJrXCIpXG4gICAgICAgICkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGhhbmRsZUNoYW5nZVNlbGVjdGVkKFwidXBcIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGhhbmRsZVNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUcmFuc2l0aW9uIGFwcGVhciBzaG93PXtpc09wZW59IGFzPXtGcmFnbWVudH0+XG4gICAgICAgIDxEaWFsb2dcbiAgICAgICAgICBpbml0aWFsRm9jdXM9e2lucHV0UmVmfVxuICAgICAgICAgIGFzPVwiZGl2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb21tYW5kLXBhbGV0dGVcIlxuICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlT3BlbihmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWFuZC1wYWxldHRlLWNvbnRlbnQgYW50aWFsaWFzZWRcIj5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cbiAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxuICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWdyYXktOTAwIGJnLW9wYWNpdHktODBcIiAvPlxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC1bNDUwcHhdIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXG4gICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RGlhbG9nLlBhbmVsIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtaC1mdWxsIGJnLXdoaXRlIGRhcms6YmctZ3JheS05MDAgc2hhZG93LWxnIHJvdW5kZWQtbGcgbWF4LXcteGwgZmxleCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW4gZGl2aWRlLXkgZGFyazpkaXZpZGUtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD17c2VhcmNoUHJlZml4fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYWdlQ29udGV4dC5Qcm92aWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LXktYXV0byBmb2N1czpvdXRsaW5lLW5vbmUgcC0yIHNwYWNlLXktNFwiXG4gICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPE9wZW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGlzT3Blbiwgb25DaGFuZ2VPcGVuIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt7IHBhZ2UsIHNlYXJjaFByZWZpeCwgc2V0U2VhcmNoUHJlZml4IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNlYXJjaCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZWxlY3RlZCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJMaW5rQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17eyByZW5kZXJMaW5rIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVuZGVyTGlua0NvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhZ2VDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvT3BlbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHtmb290ZXJ9XG4gICAgICAgICAgICAgICAgICA8L0RpYWxvZy5QYW5lbD5cbiAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Db21tYW5kUGFsZXR0ZS5QYWdlID0gUGFnZTtcbkNvbW1hbmRQYWxldHRlLkxpc3QgPSBMaXN0O1xuQ29tbWFuZFBhbGV0dGUuTGlzdEl0ZW0gPSBMaXN0SXRlbTtcbkNvbW1hbmRQYWxldHRlLkljb24gPSBJY29uO1xuQ29tbWFuZFBhbGV0dGUuRnJlZVNlYXJjaEFjdGlvbiA9IEZyZWVTZWFyY2hBY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1hbmRQYWxldHRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7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