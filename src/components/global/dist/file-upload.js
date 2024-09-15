"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var react_1 = require("react");
var button_1 = require("../ui/button");
var uploadThing_1 = require("@/lib/uploadThing");
var FileUpload = function (_a) {
    var apiEndpoint = _a.apiEndpoint, onChange = _a.onChange, value = _a.value;
    var type = value === null || value === void 0 ? void 0 : value.split('.').pop();
    if (value) {
        return (react_1["default"].createElement("div", { className: "flex flex-col justify-center items-center" },
            type !== 'pdf' ? (react_1["default"].createElement("div", { className: "w-40 h-40 relative" },
                react_1["default"].createElement(image_1["default"], { src: value, alt: "uploaded image", className: "object-contain", fill: true }))) : (react_1["default"].createElement("div", { className: "flex relative items-center p-2 mt-2 rounded-md bg-background/10" },
                react_1["default"].createElement(lucide_react_1.FileIcon, null),
                react_1["default"].createElement("a", { href: value, target: "_blank", rel: "noopener_noreferrer", className: "ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline" }, "View PDF"))),
            react_1["default"].createElement(button_1.Button, { variant: "ghost", type: "button", onClick: function () { return onChange(''); } },
                react_1["default"].createElement(lucide_react_1.X, { className: "w-4 h-4" }),
                "Remove Logo")));
    }
    return (react_1["default"].createElement("div", { className: "w-full bg-muted/30" },
        react_1["default"].createElement(uploadThing_1.UploadDropzone, { endpoint: apiEndpoint, onClientUploadComplete: function (e) {
                onChange(e === null || e === void 0 ? void 0 : e[0].url);
            }, onUploadError: function (error) {
                console.log(error);
            } })));
};
exports["default"] = FileUpload;
