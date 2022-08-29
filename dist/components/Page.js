"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Page;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../lib/context");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Page(_ref) {
  var searchPrefix = _ref.searchPrefix,
      children = _ref.children,
      onEscape = _ref.onEscape,
      id = _ref.id;

  var _useContext = (0, _react.useContext)(_context.PageContext),
      page = _useContext.page,
      setSearchPrefix = _useContext.setSearchPrefix;

  var _useContext2 = (0, _react.useContext)(_context.SearchContext),
      search = _useContext2.search;

  var isActive = page === id;
  (0, _react.useEffect)(function () {
    if (onEscape && isActive) {
      var handleKeyDown = function handleKeyDown(e) {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          onEscape();
        } else if (e.key === "Backspace" && !search) {
          e.preventDefault();
          e.stopPropagation();
          onEscape();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return function () {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isActive, search]);
  (0, _react.useEffect)(function () {
    if (isActive && setSearchPrefix) {
      setSearchPrefix(searchPrefix);
    }
  }, [searchPrefix, isActive, setSearchPrefix]);
  return isActive ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children) : null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYWdlIiwic2VhcmNoUHJlZml4IiwiY2hpbGRyZW4iLCJvbkVzY2FwZSIsImlkIiwidXNlQ29udGV4dCIsIlBhZ2VDb250ZXh0IiwicGFnZSIsInNldFNlYXJjaFByZWZpeCIsIlNlYXJjaENvbnRleHQiLCJzZWFyY2giLCJpc0FjdGl2ZSIsInVzZUVmZmVjdCIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCwgU2VhcmNoQ29udGV4dCB9IGZyb20gXCIuLi9saWIvY29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUGFnZVByb3BzIHtcbiAgc2VhcmNoUHJlZml4Pzogc3RyaW5nW107XG4gIG9uRXNjYXBlPzogKCkgPT4gdm9pZDtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7XG4gIHNlYXJjaFByZWZpeCxcbiAgY2hpbGRyZW4sXG4gIG9uRXNjYXBlLFxuICBpZCxcbn06IFBhZ2VQcm9wcykge1xuICBjb25zdCB7IHBhZ2UsIHNldFNlYXJjaFByZWZpeCB9ID0gdXNlQ29udGV4dChQYWdlQ29udGV4dCk7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuXG4gIGNvbnN0IGlzQWN0aXZlID0gcGFnZSA9PT0gaWQ7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob25Fc2NhcGUgJiYgaXNBY3RpdmUpIHtcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBvbkVzY2FwZSEoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIiAmJiAhc2VhcmNoKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgb25Fc2NhcGUhKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtpc0FjdGl2ZSwgc2VhcmNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNBY3RpdmUgJiYgc2V0U2VhcmNoUHJlZml4KSB7XG4gICAgICBzZXRTZWFyY2hQcmVmaXgoc2VhcmNoUHJlZml4KTtcbiAgICB9XG4gIH0sIFtzZWFyY2hQcmVmaXgsIGlzQWN0aXZlLCBzZXRTZWFyY2hQcmVmaXhdKTtcblxuICByZXR1cm4gaXNBY3RpdmUgPyA8PntjaGlsZHJlbn08Lz4gOiBudWxsO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBU2UsU0FBU0EsSUFBVCxPQUtEO0VBQUEsSUFKWkMsWUFJWSxRQUpaQSxZQUlZO0VBQUEsSUFIWkMsUUFHWSxRQUhaQSxRQUdZO0VBQUEsSUFGWkMsUUFFWSxRQUZaQSxRQUVZO0VBQUEsSUFEWkMsRUFDWSxRQURaQSxFQUNZOztFQUNaLGtCQUFrQyxJQUFBQyxpQkFBQSxFQUFXQyxvQkFBWCxDQUFsQztFQUFBLElBQVFDLElBQVIsZUFBUUEsSUFBUjtFQUFBLElBQWNDLGVBQWQsZUFBY0EsZUFBZDs7RUFDQSxtQkFBbUIsSUFBQUgsaUJBQUEsRUFBV0ksc0JBQVgsQ0FBbkI7RUFBQSxJQUFRQyxNQUFSLGdCQUFRQSxNQUFSOztFQUVBLElBQU1DLFFBQVEsR0FBR0osSUFBSSxLQUFLSCxFQUExQjtFQUVBLElBQUFRLGdCQUFBLEVBQVUsWUFBTTtJQUNkLElBQUlULFFBQVEsSUFBSVEsUUFBaEIsRUFBMEI7TUFBQSxJQUNmRSxhQURlLEdBQ3hCLFNBQVNBLGFBQVQsQ0FBdUJDLENBQXZCLEVBQXlDO1FBQ3ZDLElBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFFBQWQsRUFBd0I7VUFDdEJELENBQUMsQ0FBQ0UsY0FBRjtVQUNBRixDQUFDLENBQUNHLGVBQUY7VUFDQWQsUUFBUTtRQUNULENBSkQsTUFJTyxJQUFJVyxDQUFDLENBQUNDLEdBQUYsS0FBVSxXQUFWLElBQXlCLENBQUNMLE1BQTlCLEVBQXNDO1VBQzNDSSxDQUFDLENBQUNFLGNBQUY7VUFDQUYsQ0FBQyxDQUFDRyxlQUFGO1VBQ0FkLFFBQVE7UUFDVDtNQUNGLENBWHVCOztNQWF4QmUsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQ04sYUFBckM7TUFFQSxPQUFPLFlBQU07UUFDWEssUUFBUSxDQUFDRSxtQkFBVCxDQUE2QixTQUE3QixFQUF3Q1AsYUFBeEM7TUFDRCxDQUZEO0lBR0Q7RUFDRixDQXBCRCxFQW9CRyxDQUFDRixRQUFELEVBQVdELE1BQVgsQ0FwQkg7RUFzQkEsSUFBQUUsZ0JBQUEsRUFBVSxZQUFNO0lBQ2QsSUFBSUQsUUFBUSxJQUFJSCxlQUFoQixFQUFpQztNQUMvQkEsZUFBZSxDQUFDUCxZQUFELENBQWY7SUFDRDtFQUNGLENBSkQsRUFJRyxDQUFDQSxZQUFELEVBQWVVLFFBQWYsRUFBeUJILGVBQXpCLENBSkg7RUFNQSxPQUFPRyxRQUFRLGdCQUFHLGtFQUFHVCxRQUFILENBQUgsR0FBcUIsSUFBcEM7QUFDRCJ9