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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var alert_dialog_1 = require("../ui/alert-dialog");
var lucide_react_1 = require("lucide-react");
var uuid_1 = require("uuid");
var queries_1 = require("@/lib/queries");
var command_1 = require("@/components/ui/command");
var use_toast_1 = require("@/hooks/use-toast");
var tag_1 = require("./tag");
var TagColors = ['BLUE', 'ORANGE', 'ROSE', 'PURPLE', 'GREEN'];
var TagCreator = function (_a) {
    var getSelectedTags = _a.getSelectedTags, subAccountId = _a.subAccountId, defaultTags = _a.defaultTags;
    var _b = react_1.useState(defaultTags || []), selectedTags = _b[0], setSelectedTags = _b[1];
    var _c = react_1.useState([]), tags = _c[0], setTags = _c[1];
    var router = navigation_1.useRouter();
    var _d = react_1.useState(''), value = _d[0], setValue = _d[1];
    var _e = react_1.useState(''), selectedColor = _e[0], setSelectedColor = _e[1];
    react_1.useEffect(function () {
        getSelectedTags(selectedTags);
    }, [selectedTags]);
    react_1.useEffect(function () {
        if (subAccountId) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, queries_1.getTagsForSubaccount(subAccountId)];
                        case 1:
                            response = _a.sent();
                            if (response)
                                setTags(response.Tags);
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
    }, [subAccountId]);
    var handleDeleteSelection = function (tagId) {
        setSelectedTags(selectedTags.filter(function (tag) { return tag.id !== tagId; }));
    };
    var handleAddTag = function () { return __awaiter(void 0, void 0, void 0, function () {
        var tagData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!value) {
                        use_toast_1.toast({
                            variant: 'destructive',
                            title: 'Tags need to have a name'
                        });
                        return [2 /*return*/];
                    }
                    if (!selectedColor) {
                        use_toast_1.toast({
                            variant: 'destructive',
                            title: 'Please Select a color'
                        });
                        return [2 /*return*/];
                    }
                    tagData = {
                        color: selectedColor,
                        createdAt: new Date(),
                        id: uuid_1.v4(),
                        name: value,
                        subAccountId: subAccountId,
                        updatedAt: new Date()
                    };
                    setTags(__spreadArrays(tags, [tagData]));
                    setValue('');
                    setSelectedColor('');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, queries_1.upsertTag(subAccountId, tagData)];
                case 2:
                    response = _a.sent();
                    use_toast_1.toast({
                        title: 'Created the tag'
                    });
                    return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                            agencyId: undefined,
                            description: "Updated a tag | " + (response === null || response === void 0 ? void 0 : response.name),
                            subaccountId: subAccountId
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    use_toast_1.toast({
                        variant: 'destructive',
                        title: 'Could not create tag'
                    });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleAddSelections = function (tag) {
        if (selectedTags.every(function (t) { return t.id !== tag.id; })) {
            setSelectedTags(__spreadArrays(selectedTags, [tag]));
        }
    };
    var handleDeleteTag = function (tagId) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setTags(tags.filter(function (tag) { return tag.id !== tagId; }));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, queries_1.deleteTag(tagId)];
                case 2:
                    response = _a.sent();
                    use_toast_1.toast({
                        title: 'Deleted tag',
                        description: 'The tag is deleted from your subaccount.'
                    });
                    return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                            agencyId: undefined,
                            description: "Deleted a tag | " + (response === null || response === void 0 ? void 0 : response.name),
                            subaccountId: subAccountId
                        })];
                case 3:
                    _a.sent();
                    router.refresh();
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    use_toast_1.toast({
                        variant: 'destructive',
                        title: 'Could not delete tag'
                    });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(alert_dialog_1.AlertDialog, null,
        react_1["default"].createElement(command_1.Command, { className: "bg-transparent" },
            !!selectedTags.length && (react_1["default"].createElement("div", { className: "flex flex-wrap gap-2 p-2 bg-background border-2 border-border rounded-md" }, selectedTags.map(function (tag) { return (react_1["default"].createElement("div", { key: tag.id, className: "flex items-center" },
                react_1["default"].createElement(tag_1["default"], { title: tag.name, colorName: tag.color }),
                react_1["default"].createElement(lucide_react_1.X, { size: 14, className: "text-muted-foreground cursor-pointer", onClick: function () { return handleDeleteSelection(tag.id); } }))); }))),
            react_1["default"].createElement("div", { className: "flex items-center gap-2 my-2" }, TagColors.map(function (colorName) { return (react_1["default"].createElement(tag_1["default"], { key: colorName, selectedColor: setSelectedColor, title: "", colorName: colorName })); })),
            react_1["default"].createElement("div", { className: "relative" },
                react_1["default"].createElement(command_1.CommandInput, { placeholder: "Search for tag...", value: value, onValueChange: setValue }),
                react_1["default"].createElement(lucide_react_1.PlusCircleIcon, { onClick: handleAddTag, size: 20, className: "absolute top-1/2 transform -translate-y-1/2 right-2 hover:text-primary transition-all cursor-pointer text-muted-foreground" })),
            react_1["default"].createElement(command_1.CommandList, null,
                react_1["default"].createElement(command_1.CommandSeparator, null),
                react_1["default"].createElement(command_1.CommandGroup, { heading: "Tags" }, tags.map(function (tag) { return (react_1["default"].createElement(command_1.CommandItem, { key: tag.id, className: "hover:!bg-secondary !bg-transparent flex items-center justify-between !font-light cursor-pointer" },
                    react_1["default"].createElement("div", { onClick: function () { return handleAddSelections(tag); } },
                        react_1["default"].createElement(tag_1["default"], { title: tag.name, colorName: tag.color })),
                    react_1["default"].createElement(alert_dialog_1.AlertDialogTrigger, null,
                        react_1["default"].createElement(lucide_react_1.TrashIcon, { size: 16, className: "cursor-pointer text-muted-foreground hover:text-rose-400  transition-all" })),
                    react_1["default"].createElement(alert_dialog_1.AlertDialogContent, null,
                        react_1["default"].createElement(alert_dialog_1.AlertDialogHeader, null,
                            react_1["default"].createElement(alert_dialog_1.AlertDialogTitle, { className: "text-left" }, "Are you absolutely sure?"),
                            react_1["default"].createElement(alert_dialog_1.AlertDialogDescription, { className: "text-left" }, "This action cannot be undone. This will permanently delete your the tag and remove it from our servers.")),
                        react_1["default"].createElement(alert_dialog_1.AlertDialogFooter, { className: "items-center" },
                            react_1["default"].createElement(alert_dialog_1.AlertDialogCancel, null, "Cancel"),
                            react_1["default"].createElement(alert_dialog_1.AlertDialogAction, { className: "bg-destructive", onClick: function () { return handleDeleteTag(tag.id); } }, "Delete Tag"))))); })),
                react_1["default"].createElement(command_1.CommandEmpty, null, "No results found.")))));
};
exports["default"] = TagCreator;
