"use strict";
exports.__esModule = true;
var siteComponents_1 = require("@/components/siteComponents");
var nextjs_1 = require("@clerk/nextjs");
var themes_1 = require("@clerk/themes");
var react_1 = require("react");
var layout = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement(nextjs_1.ClerkProvider, { appearance: { baseTheme: themes_1.dark } },
        react_1["default"].createElement("main", { className: "h-full" },
            react_1["default"].createElement(siteComponents_1["default"], null),
            children)));
};
exports["default"] = layout;
