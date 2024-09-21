'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useModal = exports.ModalContext = void 0;
var react_1 = require("react");
exports.ModalContext = react_1.createContext({
    data: {},
    isOpen: false,
    setOpen: function (modal, fetchData) { },
    setClose: function () { }
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState({}), data = _c[0], setData = _c[1];
    var _d = react_1.useState(null), showingModal = _d[0], setShowingModal = _d[1];
    var _e = react_1.useState(false), isMounted = _e[0], setIsMounted = _e[1];
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    var setOpen = function (modal, fetchData) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!modal) return [3 /*break*/, 3];
                    if (!fetchData) return [3 /*break*/, 2];
                    _a = setData;
                    _b = [__assign({}, data)];
                    return [4 /*yield*/, fetchData()];
                case 1:
                    _a.apply(void 0, [__assign.apply(void 0, _b.concat([(_c.sent())]))]);
                    _c.label = 2;
                case 2:
                    setShowingModal(modal);
                    setIsOpen(true);
                    _c.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var setClose = function () {
        setIsOpen(false);
        setData({});
    };
    if (!isMounted)
        return null;
    return (React.createElement(exports.ModalContext.Provider, { value: { data: data, setOpen: setOpen, setClose: setClose, isOpen: isOpen } },
        children,
        showingModal));
};
exports.useModal = function () {
    var context = react_1.useContext(exports.ModalContext);
    if (!context) {
        throw new Error('useModal must be used within the modal provider');
    }
    return context;
};
exports["default"] = ModalProvider;
