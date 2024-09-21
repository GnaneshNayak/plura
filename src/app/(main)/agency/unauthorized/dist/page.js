"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var Unauthorized = function (props) {
    return (react_1["default"].createElement("div", { className: "p-4 text-center h-screen w-screen flex justify-center items-center flex-col" },
        react_1["default"].createElement("h1", { className: "text-3xl md:text-6xl" }, "Unauthorized acccess!"),
        react_1["default"].createElement("p", null, "Please contact support or your agency owner to get access"),
        react_1["default"].createElement(link_1["default"], { href: "/", className: "mt-4 bg-primary p-2" }, "Back to home")));
};
exports["default"] = Unauthorized;
