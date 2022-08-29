"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNames = classNames;
exports.filterItems = filterItems;
exports.getItemIndex = getItemIndex;
exports.renderJsonStructure = renderJsonStructure;
exports.useHandleOpenCommandPalette = useHandleOpenCommandPalette;

var _CommandPalette = _interopRequireDefault(require("../components/CommandPalette"));

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getItemIndex(items, id) {
  var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return items.map(function (list) {
    return list.items;
  }).reduce(function (a, b) {
    return a.concat(b);
  }).findIndex(function (i) {
    return i.id === id;
  }) + startIndex;
}

function filterItems(items, search) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    filterOnListHeading: true
  },
      filterOnListHeading = _ref.filterOnListHeading;

  return items.filter(function (list) {
    var _list$heading;

    var listHasMatchingItem = list.items.some(function (item) {
      var _item$keywords;

      return doesChildMatchSearch(search, item.children) || doesKeywordsMatchSearch(search, (_item$keywords = item.keywords) !== null && _item$keywords !== void 0 ? _item$keywords : []);
    });
    return filterOnListHeading ? ((_list$heading = list.heading) === null || _list$heading === void 0 ? void 0 : _list$heading.toLowerCase().includes(search.toLowerCase())) || listHasMatchingItem : listHasMatchingItem;
  }).map(function (list) {
    var matchingItems = list.items.filter(function (item) {
      var _item$keywords2;

      return doesChildMatchSearch(search, item.children) || doesKeywordsMatchSearch(search, (_item$keywords2 = item.keywords) !== null && _item$keywords2 !== void 0 ? _item$keywords2 : []);
    });
    return _objectSpread(_objectSpread({}, list), {}, {
      items: filterOnListHeading ? matchingItems.length ? matchingItems : list.items : matchingItems
    });
  });
}

function doesChildMatchSearch(search, children) {
  return children ? getLabelFromChildren(children).toLowerCase().includes(search.toLowerCase()) : false;
}

function doesKeywordsMatchSearch(search, keywords) {
  return keywords.includes("*") ? true : keywords.some(function (keyword) {
    return keyword.toLowerCase().includes(search.toLowerCase());
  });
}

function getLabelFromChildren(children) {
  var label = "";

  _react.Children.map(children, function (child) {
    if (typeof child === "string") {
      label += child;
    }
  });

  return label;
}

function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(" ");
}

function renderJsonStructure(jsonStructure) {
  return jsonStructure.map(function (list) {
    return /*#__PURE__*/_react["default"].createElement(_CommandPalette["default"].List, {
      heading: list.heading,
      key: list.id
    }, list.items.map(function (_ref2) {
      var id = _ref2.id,
          rest = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/_react["default"].createElement(_CommandPalette["default"].ListItem, _extends({
        index: getItemIndex(jsonStructure, id),
        key: id
      }, rest));
    }));
  });
}

function useHandleOpenCommandPalette(setIsOpen) {
  (0, _react.useEffect)(function () {
    function handleKeyDown(e) {
      var _navigator, _navigator$platform;

      if (((_navigator = navigator) !== null && _navigator !== void 0 && (_navigator$platform = _navigator.platform) !== null && _navigator$platform !== void 0 && _navigator$platform.toLowerCase().includes("mac") ? e.metaKey : e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(function (currentValue) {
          return !currentValue;
        });
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return function () {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRJdGVtSW5kZXgiLCJpdGVtcyIsImlkIiwic3RhcnRJbmRleCIsIm1hcCIsImxpc3QiLCJyZWR1Y2UiLCJhIiwiYiIsImNvbmNhdCIsImZpbmRJbmRleCIsImkiLCJmaWx0ZXJJdGVtcyIsInNlYXJjaCIsImZpbHRlck9uTGlzdEhlYWRpbmciLCJmaWx0ZXIiLCJsaXN0SGFzTWF0Y2hpbmdJdGVtIiwic29tZSIsIml0ZW0iLCJkb2VzQ2hpbGRNYXRjaFNlYXJjaCIsImNoaWxkcmVuIiwiZG9lc0tleXdvcmRzTWF0Y2hTZWFyY2giLCJrZXl3b3JkcyIsImhlYWRpbmciLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWF0Y2hpbmdJdGVtcyIsImxlbmd0aCIsImdldExhYmVsRnJvbUNoaWxkcmVuIiwia2V5d29yZCIsImxhYmVsIiwiQ2hpbGRyZW4iLCJjaGlsZCIsImNsYXNzTmFtZXMiLCJjbGFzc2VzIiwiQm9vbGVhbiIsImpvaW4iLCJyZW5kZXJKc29uU3RydWN0dXJlIiwianNvblN0cnVjdHVyZSIsInJlc3QiLCJ1c2VIYW5kbGVPcGVuQ29tbWFuZFBhbGV0dGUiLCJzZXRJc09wZW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVLZXlEb3duIiwiZSIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwibWV0YUtleSIsImN0cmxLZXkiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRWYWx1ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL3V0aWxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWFuZFBhbGV0dGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbWFuZFBhbGV0dGVcIjtcbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hpbGRyZW4sIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSnNvblN0cnVjdHVyZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUluZGV4KFxuICBpdGVtczogSnNvblN0cnVjdHVyZSxcbiAgaWQ6IHN0cmluZyxcbiAgc3RhcnRJbmRleDogbnVtYmVyID0gMFxuKSB7XG4gIHJldHVybiAoXG4gICAgaXRlbXNcbiAgICAgIC5tYXAoKGxpc3QpID0+IGxpc3QuaXRlbXMpXG4gICAgICAucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChiKSlcbiAgICAgIC5maW5kSW5kZXgoKGkpID0+IGkuaWQgPT09IGlkKSArIHN0YXJ0SW5kZXhcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckl0ZW1zKFxuICBpdGVtczogSnNvblN0cnVjdHVyZSxcbiAgc2VhcmNoOiBzdHJpbmcsXG4gIHtcbiAgICBmaWx0ZXJPbkxpc3RIZWFkaW5nLFxuICB9OiB7XG4gICAgZmlsdGVyT25MaXN0SGVhZGluZzogYm9vbGVhbjtcbiAgfSA9IHtcbiAgICBmaWx0ZXJPbkxpc3RIZWFkaW5nOiB0cnVlLFxuICB9XG4pIHtcbiAgcmV0dXJuIGl0ZW1zXG4gICAgLmZpbHRlcigobGlzdCkgPT4ge1xuICAgICAgY29uc3QgbGlzdEhhc01hdGNoaW5nSXRlbSA9IGxpc3QuaXRlbXMuc29tZShcbiAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgZG9lc0NoaWxkTWF0Y2hTZWFyY2goc2VhcmNoLCBpdGVtLmNoaWxkcmVuKSB8fFxuICAgICAgICAgIGRvZXNLZXl3b3Jkc01hdGNoU2VhcmNoKHNlYXJjaCwgaXRlbS5rZXl3b3JkcyA/PyBbXSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBmaWx0ZXJPbkxpc3RIZWFkaW5nXG4gICAgICAgID8gbGlzdC5oZWFkaW5nPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgbGlzdEhhc01hdGNoaW5nSXRlbVxuICAgICAgICA6IGxpc3RIYXNNYXRjaGluZ0l0ZW07XG4gICAgfSlcbiAgICAubWFwKChsaXN0KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ0l0ZW1zID0gbGlzdC5pdGVtcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgIGRvZXNDaGlsZE1hdGNoU2VhcmNoKHNlYXJjaCwgaXRlbS5jaGlsZHJlbikgfHxcbiAgICAgICAgICBkb2VzS2V5d29yZHNNYXRjaFNlYXJjaChzZWFyY2gsIGl0ZW0ua2V5d29yZHMgPz8gW10pXG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5saXN0LFxuICAgICAgICBpdGVtczogZmlsdGVyT25MaXN0SGVhZGluZ1xuICAgICAgICAgID8gbWF0Y2hpbmdJdGVtcy5sZW5ndGhcbiAgICAgICAgICAgID8gbWF0Y2hpbmdJdGVtc1xuICAgICAgICAgICAgOiBsaXN0Lml0ZW1zXG4gICAgICAgICAgOiBtYXRjaGluZ0l0ZW1zLFxuICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZG9lc0NoaWxkTWF0Y2hTZWFyY2goc2VhcmNoOiBzdHJpbmcsIGNoaWxkcmVuPzogUmVhY3ROb2RlKSB7XG4gIHJldHVybiBjaGlsZHJlblxuICAgID8gZ2V0TGFiZWxGcm9tQ2hpbGRyZW4oY2hpbGRyZW4pXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkb2VzS2V5d29yZHNNYXRjaFNlYXJjaChzZWFyY2g6IHN0cmluZywga2V5d29yZHM6IHN0cmluZ1tdKSB7XG4gIHJldHVybiBrZXl3b3Jkcy5pbmNsdWRlcyhcIipcIilcbiAgICA/IHRydWVcbiAgICA6IGtleXdvcmRzLnNvbWUoKGtleXdvcmQpID0+XG4gICAgICAgIGtleXdvcmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldExhYmVsRnJvbUNoaWxkcmVuKGNoaWxkcmVuOiBSZWFjdE5vZGUpIHtcbiAgbGV0IGxhYmVsID0gXCJcIjtcblxuICBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGxhYmVsICs9IGNoaWxkO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lcyhcbiAgLi4uY2xhc3NlczogQXJyYXk8c3RyaW5nIHwgbnVsbCB8IGJvb2xlYW4gfCB1bmRlZmluZWQ+XG4pIHtcbiAgcmV0dXJuIGNsYXNzZXMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySnNvblN0cnVjdHVyZShqc29uU3RydWN0dXJlOiBKc29uU3RydWN0dXJlKSB7XG4gIHJldHVybiBqc29uU3RydWN0dXJlLm1hcCgobGlzdCkgPT4gKFxuICAgIDxDb21tYW5kUGFsZXR0ZS5MaXN0IGhlYWRpbmc9e2xpc3QuaGVhZGluZ30ga2V5PXtsaXN0LmlkfT5cbiAgICAgIHtsaXN0Lml0ZW1zLm1hcCgoeyBpZCwgLi4ucmVzdCB9KSA9PiAoXG4gICAgICAgIDxDb21tYW5kUGFsZXR0ZS5MaXN0SXRlbVxuICAgICAgICAgIGluZGV4PXtnZXRJdGVtSW5kZXgoanNvblN0cnVjdHVyZSwgaWQpfVxuICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0NvbW1hbmRQYWxldHRlLkxpc3Q+XG4gICkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSGFuZGxlT3BlbkNvbW1hbmRQYWxldHRlKFxuICBzZXRJc09wZW46IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGJvb2xlYW4+PlxuKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIChuYXZpZ2F0b3I/LnBsYXRmb3JtPy50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFjXCIpXG4gICAgICAgICAgPyBlLm1ldGFLZXlcbiAgICAgICAgICA6IGUuY3RybEtleSkgJiZcbiAgICAgICAgZS5rZXkgPT09IFwia1wiXG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHNldElzT3BlbigoY3VycmVudFZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuICFjdXJyZW50VmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIH07XG4gIH0sIFtdKTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU8sU0FBU0EsWUFBVCxDQUNMQyxLQURLLEVBRUxDLEVBRkssRUFJTDtFQUFBLElBREFDLFVBQ0EsdUVBRHFCLENBQ3JCO0VBQ0EsT0FDRUYsS0FBSyxDQUNGRyxHQURILENBQ08sVUFBQ0MsSUFBRDtJQUFBLE9BQVVBLElBQUksQ0FBQ0osS0FBZjtFQUFBLENBRFAsRUFFR0ssTUFGSCxDQUVVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtJQUFBLE9BQVVELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxDQUFULENBQVY7RUFBQSxDQUZWLEVBR0dFLFNBSEgs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