"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
var react_1 = require("react");
var themes_1 = require("@clerk/themes");
var Layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(nextjs_1.ClerkProvider, { appearance: { baseTheme: themes_1.dark } }, children));
};
exports["default"] = Layout;
