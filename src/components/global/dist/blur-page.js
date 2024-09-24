"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BlurPage = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "h-screen overflow-scroll backdrop-blur-[35px] dark:bg-muted/20 bg-muted/60 dark:shadow-2xl dark:shadow-black  mx-auto pt-24 p-4 absolute top-0 right-0 left-0 bottom-0 z-0", id: "blur-page" }, children));
};
exports["default"] = BlurPage;
