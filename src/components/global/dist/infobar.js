'use client';
"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
var react_1 = require("react");
var tailwind_merge_1 = require("tailwind-merge");
var sheet_1 = require("../ui/sheet");
var lucide_react_1 = require("lucide-react");
var card_1 = require("../ui/card");
var switch_1 = require("../ui/switch");
var avatar_1 = require("../ui/avatar");
var mode_toggle_1 = require("./mode-toggle");
var InfoBar = function (_a) {
    var notifications = _a.notifications, subAccountId = _a.subAccountId, className = _a.className, role = _a.role;
    var _b = react_1.useState(notifications), allNotifications = _b[0], setAllNotifications = _b[1];
    var _c = react_1.useState(true), showAll = _c[0], setShowAll = _c[1];
    var handleClick = function () {
        var _a;
        if (!showAll) {
            setAllNotifications(notifications);
        }
        else {
            if ((notifications === null || notifications === void 0 ? void 0 : notifications.length) !== 0) {
                setAllNotifications((_a = notifications === null || notifications === void 0 ? void 0 : notifications.filter(function (item) { return item.subAccountId === subAccountId; })) !== null && _a !== void 0 ? _a : []);
            }
        }
        setShowAll(function (prev) { return !prev; });
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: tailwind_merge_1.twMerge('fixed z-[20] md:left-[300px] left-0 right-0 top-0 p-4 bg-background/80 backdrop-blur-md flex  gap-4 items-center border-b-[1px] ', className) },
            react_1["default"].createElement("div", { className: "flex items-center gap-2 ml-auto" },
                react_1["default"].createElement(nextjs_1.UserButton, { afterSwitchSessionUrl: "/" }),
                react_1["default"].createElement(sheet_1.Sheet, null,
                    react_1["default"].createElement(sheet_1.SheetTrigger, null,
                        react_1["default"].createElement("div", { className: "rounded-full w-9 h-9 bg-primary flex items-center justify-center text-white" },
                            react_1["default"].createElement(lucide_react_1.Bell, { size: 17 }))),
                    react_1["default"].createElement(sheet_1.SheetContent, { className: "mt-4 mr-4 pr-4 overflow-scroll" },
                        react_1["default"].createElement(sheet_1.SheetHeader, { className: "text-left" },
                            react_1["default"].createElement(sheet_1.SheetTitle, null, "Notifications"),
                            react_1["default"].createElement(sheet_1.SheetDescription, null, (role === 'AGENCY_ADMIN' || role === 'AGENCY_OWNER') && (react_1["default"].createElement(card_1.Card, { className: "flex items-center justify-between p-4" },
                                "Current Subaccount",
                                react_1["default"].createElement(switch_1.Switch, { onCheckedChange: handleClick }))))), allNotifications === null || allNotifications === void 0 ? void 0 :
                        allNotifications.map(function (notification) { return (react_1["default"].createElement("div", { key: notification.id, className: "flex flex-col gap-y-2 mb-2 overflow-x-scroll text-ellipsis" },
                            react_1["default"].createElement("div", { className: "flex gap-2" },
                                react_1["default"].createElement(avatar_1.Avatar, null,
                                    react_1["default"].createElement(avatar_1.AvatarImage, { src: notification.User.avatarUrl, alt: "Profile Picture" }),
                                    react_1["default"].createElement(avatar_1.AvatarFallback, { className: "bg-primary" }, notification.User.name.slice(0, 2).toUpperCase())),
                                react_1["default"].createElement("div", { className: "flex flex-col" },
                                    react_1["default"].createElement("p", null,
                                        react_1["default"].createElement("span", { className: "font-bold" }, notification.notification.split('|')[0]),
                                        react_1["default"].createElement("span", { className: "text-muted-foreground" }, notification.notification.split('|')[1]),
                                        react_1["default"].createElement("span", { className: "font-bold" }, notification.notification.split('|')[2])),
                                    react_1["default"].createElement("small", { className: "text-xs text-muted-foreground" }, new Date(notification.createdAt).toLocaleDateString()))))); }),
                        (allNotifications === null || allNotifications === void 0 ? void 0 : allNotifications.length) === 0 && (react_1["default"].createElement("div", { className: "flex items-center justify-center text-muted-foreground", "mb-4": true }, "You have no notifications")))),
                react_1["default"].createElement(mode_toggle_1.ModeToggle, null)))));
};
exports["default"] = InfoBar;
