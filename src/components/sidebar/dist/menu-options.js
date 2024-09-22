'use client';
"use strict";
exports.__esModule = true;
var clsx_1 = require("clsx");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var react_1 = require("react");
var aspect_ratio_1 = require("../ui/aspect-ratio");
var button_1 = require("../ui/button");
var command_1 = require("../ui/command");
var popover_1 = require("../ui/popover");
var sheet_1 = require("../ui/sheet");
var link_1 = require("next/link");
var modal_provider_1 = require("@/providers/modal-provider");
var custom_modal_1 = require("../global/custom-modal");
var subaccounts_details_1 = require("../forms/subaccounts-details");
var separator_1 = require("../ui/separator");
var constants_1 = require("@/lib/constants");
var MenuOptions = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var defaultOpen = _a.defaultOpen, subAccounts = _a.subAccounts, sidebarOpt = _a.sidebarOpt, sidebarLogo = _a.sidebarLogo, details = _a.details, user = _a.user, id = _a.id;
    var setOpen = modal_provider_1.useModal().setOpen;
    var _h = react_1.useState(false), isMounted = _h[0], setIsMounted = _h[1];
    var openState = react_1.useMemo(function () { return (defaultOpen ? { open: true } : {}); }, [defaultOpen]);
    react_1.useEffect(function () {
        setIsMounted(true);
    }, []);
    if (!isMounted)
        return;
    console.log(user);
    return (React.createElement(sheet_1.Sheet, { modal: false, open: true },
        React.createElement(sheet_1.SheetTrigger, { className: "absolute top-4 left-4 z-[100] md:!hidden flex" },
            React.createElement(button_1.Button, { variant: 'outline', size: 'icon' },
                React.createElement(lucide_react_1.Menu, null))),
        React.createElement(sheet_1.SheetContent, { showX: !defaultOpen, side: 'left', className: clsx_1["default"]('bg-background/80 backdrop-blur-xl border-r-[1px] fixed top-0 p-6', {
                'hidden md:inline-block z-0 w-[300px]': defaultOpen,
                'md:hidden inline-block z-10 w-full': !defaultOpen
            }) },
            React.createElement("div", null,
                React.createElement(aspect_ratio_1.AspectRatio, { ratio: 16 / 5 },
                    React.createElement(image_1["default"], { src: sidebarLogo, alt: "logo", fill: true, className: "object-contain rounded-md" })),
                React.createElement(popover_1.Popover, null,
                    React.createElement(popover_1.PopoverTrigger, { asChild: true },
                        React.createElement(button_1.Button, { className: "w-full flex justify-between items-center my-4 py-8", variant: 'ghost' },
                            React.createElement("div", { className: "flex items-center text-left gap-2" },
                                React.createElement(lucide_react_1.Compass, null),
                                React.createElement("div", { className: " flex flex-col" },
                                    details.name,
                                    React.createElement("span", { className: "text-muted-foreground" }, details.address))),
                            React.createElement("div", null,
                                React.createElement(lucide_react_1.ChevronsUpDown, { size: 16, className: "text-muted-foreground" })))),
                    React.createElement(popover_1.PopoverContent, { className: "w-80 h-80 z-[200] mt-4" },
                        React.createElement(command_1.Command, { className: "rounded-lg" },
                            React.createElement(command_1.CommandInput, { placeholder: "Search Accounts..." }),
                            React.createElement(command_1.CommandList, { className: "pb-16" },
                                React.createElement(command_1.CommandEmpty, null, "No results found"),
                                ((user === null || user === void 0 ? void 0 : user.role) === 'AGENCY_OWNER' ||
                                    (user === null || user === void 0 ? void 0 : user.role) === 'AGENCY_ADMIN') && (user === null || user === void 0 ? void 0 : user.Agency) && (React.createElement(command_1.CommandGroup, { heading: "Agency" },
                                    React.createElement(command_1.CommandItem, { className: "!bg-transparent my-2 text-primary broder-[1px] border-border p-2 rounded-md hover:!bg-muted cursor-pointer transition-all" }, true ? (React.createElement(link_1["default"], { href: "/agency/" + (user === null || user === void 0 ? void 0 : user.Agency.id), className: "flex gap-4 w-full h-full" },
                                        React.createElement("div", { className: "relative w-16" },
                                            React.createElement(image_1["default"], { src: (_b = user === null || user === void 0 ? void 0 : user.Agency) === null || _b === void 0 ? void 0 : _b.agencyLogo, alt: "agency logo", fill: true, className: "rounded-md object-contain" })),
                                        React.createElement("div", { className: "flex flex-col flex-1" }, (_c = user === null || user === void 0 ? void 0 : user.Agency) === null || _c === void 0 ? void 0 :
                                            _c.name,
                                            React.createElement("span", { className: "text-muted-foreground" }, (_d = user === null || user === void 0 ? void 0 : user.Agency) === null || _d === void 0 ? void 0 : _d.address)))) : (React.createElement(sheet_1.SheetClose, { asChild: true },
                                        React.createElement(link_1["default"], { href: "/agency/" + (user === null || user === void 0 ? void 0 : user.agency.id), className: "flex gap-4 w-full h-full" },
                                            React.createElement("div", { className: "relative w-16" },
                                                React.createElement(image_1["default"], { src: (_e = user === null || user === void 0 ? void 0 : user.Agency) === null || _e === void 0 ? void 0 : _e.agencyLogo, alt: "agency logo", fill: true, className: "rounded-md object-contain" })),
                                            React.createElement("div", { className: "flex flex-col flex-1" }, (_f = user === null || user === void 0 ? void 0 : user.Agency) === null || _f === void 0 ? void 0 :
                                                _f.name,
                                                React.createElement("span", { className: "text-muted-foreground" }, (_g = user === null || user === void 0 ? void 0 : user.Agency) === null || _g === void 0 ? void 0 : _g.address)))))))),
                                React.createElement(command_1.CommandGroup, { heading: "Accounts" }, !!subAccounts
                                    ? subAccounts.map(function (subaccount) { return (React.createElement(command_1.CommandItem, { key: subaccount.id }, defaultOpen ? (React.createElement(link_1["default"], { href: "/subaccount/" + subaccount.id, className: "flex gap-4 w-full h-full" },
                                        React.createElement("div", { className: "relative w-16" },
                                            React.createElement(image_1["default"], { src: subaccount.subAccountLogo, alt: "subaccount Logo", fill: true, className: "rounded-md object-contain" })),
                                        React.createElement("div", { className: "flex flex-col flex-1" },
                                            subaccount.name,
                                            React.createElement("span", { className: "text-muted-foreground" }, subaccount.address)))) : (React.createElement(sheet_1.SheetClose, { asChild: true },
                                        React.createElement(link_1["default"], { href: "/subaccount/" + subaccount.id, className: "flex gap-4 w-full h-full" },
                                            React.createElement("div", { className: "relative w-16" },
                                                React.createElement(image_1["default"], { src: subaccount.subAccountLogo, alt: "subaccount Logo", fill: true, className: "rounded-md object-contain" })),
                                            React.createElement("div", { className: "flex flex-col flex-1" },
                                                subaccount.name,
                                                React.createElement("span", { className: "text-muted-foreground" }, subaccount.address))))))); })
                                    : 'No Accounts')),
                            ((user === null || user === void 0 ? void 0 : user.role) === 'AGENCY_OWNER' ||
                                (user === null || user === void 0 ? void 0 : user.role) === 'AGENCY_ADMIN') && (React.createElement(sheet_1.SheetClose, null,
                                React.createElement(button_1.Button, { className: "w-full flex gap-2", onClick: function () {
                                        setOpen(React.createElement(custom_modal_1["default"], { title: "Create A Subaccount", subheading: "You can switch between your agency account and the subaccount from the sidebar" },
                                            React.createElement(subaccounts_details_1["default"], { agencyDetails: user === null || user === void 0 ? void 0 : user.Agency, userId: user === null || user === void 0 ? void 0 : user.id, userName: user === null || user === void 0 ? void 0 : user.name })));
                                    } },
                                    React.createElement(lucide_react_1.PlusCircleIcon, { size: 15 }),
                                    "Create Sub Account")))))),
                React.createElement("p", { className: "text-muted-foreground mb-2 text-xs" }, "MENU LINKS "),
                React.createElement(separator_1.Separator, { className: "mb-4" }),
                React.createElement("nav", { className: "relative" },
                    React.createElement(command_1.Command, null,
                        React.createElement(command_1.CommandInput, { placeholder: "search...." }),
                        React.createElement(command_1.CommandList, { className: "pb-4 overflow-visible" },
                            React.createElement(command_1.CommandEmpty, null, "No results found"),
                            React.createElement(command_1.CommandGroup, null, sidebarOpt.map(function (sidebarOptions) {
                                var val;
                                var results = constants_1.icons === null || constants_1.icons === void 0 ? void 0 : constants_1.icons.find(function (icon) { return icon.value === sidebarOptions.icon; });
                                if (results) {
                                    val = React.createElement(results.path, null);
                                }
                                return (React.createElement(command_1.CommandItem, { key: sidebarOptions.id, className: "md:w-[320px] w-full" },
                                    React.createElement(link_1["default"], { href: sidebarOptions.link, className: "flex items-center gap-2 hover:bg-transparent rounded-md\n                          transition-all md:w-full w-[320px]\n                          " },
                                        val,
                                        sidebarOptions.name)));
                            })))))))));
};
exports["default"] = MenuOptions;
