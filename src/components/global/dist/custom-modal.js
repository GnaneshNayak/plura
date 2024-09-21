'use client';
"use strict";
exports.__esModule = true;
var modal_provider_1 = require("@/providers/modal-provider");
var react_1 = require("react");
var dialog_1 = require("../ui/dialog");
var react_dialog_1 = require("@radix-ui/react-dialog");
var CustomModal = function (_a) {
    var children = _a.children, defaultOpen = _a.defaultOpen, subheading = _a.subheading, title = _a.title;
    var _b = modal_provider_1.useModal(), isOpen = _b.isOpen, setClose = _b.setClose;
    return (react_1["default"].createElement(dialog_1.Dialog, { open: isOpen || defaultOpen, onOpenChange: setClose },
        react_1["default"].createElement(dialog_1.DialogContent, { className: "overflow-scroll md:max-h-[700px] md:h-fit h-screen bg-card" },
            react_1["default"].createElement(dialog_1.DialogHeader, { className: "pt-8 text-left" },
                react_1["default"].createElement(react_dialog_1.DialogTitle, { className: "text-2xl font-bold" }, title),
                react_1["default"].createElement(dialog_1.DialogDescription, null, subheading),
                children))));
};
exports["default"] = CustomModal;
