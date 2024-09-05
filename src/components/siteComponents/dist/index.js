"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("react");
var mode_toggle_1 = require("../global/mode-toggle");
var Navigation = function (_a) {
    var user = _a.user;
    return (react_1["default"].createElement("div", { className: "fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10\n      border-border/ bg-background/ backdrop-blur supports-[backdrop-filter]:bg-background/60\n    \n    " },
        react_1["default"].createElement("aside", { className: "flex items-center gap-2" },
            react_1["default"].createElement(image_1["default"], { src: './assets/plura-logo.svg', width: 40, height: 40, alt: "plur logo" }),
            react_1["default"].createElement("span", { className: "text-xl font-bold" }, " Plura.")),
        react_1["default"].createElement("nav", { className: "hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]" },
            react_1["default"].createElement("ul", { className: "flex items-center justify-center gap-8" },
                react_1["default"].createElement(link_1["default"], { href: '#' }, "Pricing"),
                react_1["default"].createElement(link_1["default"], { href: '#' }, "About"),
                react_1["default"].createElement(link_1["default"], { href: '#' }, "Documentation"),
                react_1["default"].createElement(link_1["default"], { href: '#' }, "Features"))),
        react_1["default"].createElement("aside", { className: "flex gap-2 items-center" },
            react_1["default"].createElement(link_1["default"], { href: '/agency', className: "bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80" }, "Login"),
            react_1["default"].createElement(nextjs_1.UserButton, null),
            react_1["default"].createElement(mode_toggle_1.ModeToggle, null))));
};
exports["default"] = Navigation;
