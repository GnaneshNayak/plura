'use client';
"use strict";
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
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var alert_dialog_1 = require("@/components/ui/alert-dialog");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var queries_1 = require("@/lib/queries");
var use_toast_1 = require("@/hooks/use-toast");
var MediaCard = function (_a) {
    var file = _a.file;
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement(alert_dialog_1.AlertDialog, null,
        react_1["default"].createElement(dropdown_menu_1.DropdownMenu, null,
            react_1["default"].createElement("article", { className: "border w-full rounded-lg bg-slate-900" },
                react_1["default"].createElement("div", { className: "relative w-full h-40" },
                    react_1["default"].createElement(image_1["default"], { src: file.link, alt: "preview image", fill: true, className: "object-cover rounded-lg" })),
                react_1["default"].createElement("p", { className: "opacity-0 h-0 w-0" }, file.name),
                react_1["default"].createElement("div", { className: "p-4 relative" },
                    react_1["default"].createElement("p", { className: "text-muted-foreground" }, file.createdAt.toDateString()),
                    react_1["default"].createElement("p", null, file.name),
                    react_1["default"].createElement("div", { className: "absolute top-4 right-4 p-[1px] cursor-pointer " },
                        react_1["default"].createElement(dropdown_menu_1.DropdownMenuTrigger, null,
                            react_1["default"].createElement(lucide_react_1.MoreHorizontal, null)))),
                react_1["default"].createElement(dropdown_menu_1.DropdownMenuContent, null,
                    react_1["default"].createElement(dropdown_menu_1.DropdownMenuLabel, null, "Menu"),
                    react_1["default"].createElement(dropdown_menu_1.DropdownMenuSeparator, null),
                    react_1["default"].createElement(dropdown_menu_1.DropdownMenuItem, { className: "flex gap-2", onClick: function () {
                            navigator.clipboard.writeText(file.link);
                            use_toast_1.toast({ title: 'Copied To Clipboard' });
                        } },
                        react_1["default"].createElement(lucide_react_1.Copy, { size: 15 }),
                        " Copy Image Link"),
                    react_1["default"].createElement(alert_dialog_1.AlertDialogTrigger, { asChild: true },
                        react_1["default"].createElement(dropdown_menu_1.DropdownMenuItem, { className: "flex gap-2" },
                            react_1["default"].createElement(lucide_react_1.Trash, { size: 15 }),
                            " Delete File"))))),
        react_1["default"].createElement(alert_dialog_1.AlertDialogContent, null,
            react_1["default"].createElement(alert_dialog_1.AlertDialogHeader, null,
                react_1["default"].createElement(alert_dialog_1.AlertDialogTitle, { className: "text-left" }, "Are you absolutely sure?"),
                react_1["default"].createElement(alert_dialog_1.AlertDialogDescription, { className: "text-left" }, "Are you sure you want to delete this file? All subaccount using this file will no longer have access to it!")),
            react_1["default"].createElement(alert_dialog_1.AlertDialogFooter, { className: "flex items-center" },
                react_1["default"].createElement(alert_dialog_1.AlertDialogCancel, { className: "mb-2" }, "Cancel"),
                react_1["default"].createElement(alert_dialog_1.AlertDialogAction, { disabled: loading, className: "bg-destructive hover:bg-destructive", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    setLoading(true);
                                    return [4 /*yield*/, queries_1.deleteMedia(file.id)];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                                            agencyId: undefined,
                                            description: "Deleted a media file | " + (response === null || response === void 0 ? void 0 : response.name),
                                            subaccountId: response.subAccountId
                                        })];
                                case 2:
                                    _a.sent();
                                    use_toast_1.toast({
                                        title: 'Deleted File',
                                        description: 'Successfully deleted the file'
                                    });
                                    setLoading(false);
                                    router.refresh();
                                    return [2 /*return*/];
                            }
                        });
                    }); } }, "Delete")))));
};
exports["default"] = MediaCard;
