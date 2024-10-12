"use strict";
exports.__esModule = true;
var react_1 = require("react");
var command_1 = require("../ui/command");
var lucide_react_1 = require("lucide-react");
var media_card_1 = require("./media-card");
var upload_buttons_1 = require("./upload-buttons");
var MediaComponent = function (_a) {
    var data = _a.data, subaccountId = _a.subaccountId;
    return (react_1["default"].createElement("div", { className: "flex flex-col gap-4 h-full w-full" },
        react_1["default"].createElement("div", { className: "flex justify-between items-center" },
            react_1["default"].createElement("h1", { className: "text-4xl" }, "Media Bucket"),
            react_1["default"].createElement(upload_buttons_1["default"], { subaccountId: subaccountId })),
        react_1["default"].createElement(command_1.Command, { className: "bg-transparent" },
            react_1["default"].createElement(command_1.CommandInput, { placeholder: "Search for file name..." }),
            react_1["default"].createElement(command_1.CommandList, { className: "pb-40 max-h-full " },
                react_1["default"].createElement(command_1.CommandEmpty, null, "No Media Files"),
                react_1["default"].createElement(command_1.CommandGroup, { heading: "Media Files" },
                    react_1["default"].createElement("div", { className: "flex flex-wrap gap-4 pt-4" }, data === null || data === void 0 ? void 0 :
                        data.Media.map(function (file) { return (react_1["default"].createElement(command_1.CommandItem, { key: file.id, className: "p-0 max-w-[300px] w-full rounded-lg !bg-transparent !font-medium !text-white" },
                            react_1["default"].createElement(media_card_1["default"], { file: file }))); }),
                        !(data === null || data === void 0 ? void 0 : data.Media.length) && (react_1["default"].createElement("div", { className: "flex items-center justify-center w-full flex-col" },
                            react_1["default"].createElement(lucide_react_1.FolderSearch, { size: 200, className: "dark:text-muted text-slate-300" }),
                            react_1["default"].createElement("p", { className: "text-muted-foreground " }, "Empty! no files to show.")))))))));
};
exports["default"] = MediaComponent;
