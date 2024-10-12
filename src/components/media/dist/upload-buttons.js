'use client';
"use strict";
exports.__esModule = true;
var modal_provider_1 = require("@/providers/modal-provider");
var react_1 = require("react");
var button_1 = require("../ui/button");
var custom_modal_1 = require("../global/custom-modal");
var upload_media_1 = require("../forms/upload-media");
var MediaUploadButton = function (_a) {
    var subaccountId = _a.subaccountId;
    var _b = modal_provider_1.useModal(), isOpen = _b.isOpen, setOpen = _b.setOpen, setClose = _b.setClose;
    return (react_1["default"].createElement(button_1.Button, { onClick: function () {
            setOpen(react_1["default"].createElement(custom_modal_1["default"], { title: "Upload Media", subheading: "Upload a file to your media bucket" },
                react_1["default"].createElement(upload_media_1["default"], { subaccountId: subaccountId })));
        } }, "Upload"));
};
exports["default"] = MediaUploadButton;
