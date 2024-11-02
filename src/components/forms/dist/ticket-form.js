'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var queries_1 = require("@/lib/queries");
var types_1 = require("@/lib/types");
var modal_provider_1 = require("@/providers/modal-provider");
var zod_1 = require("@hookform/resolvers/zod");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var card_1 = require("../ui/card");
var form_1 = require("@/components/ui/form");
var input_1 = require("../ui/input");
var textarea_1 = require("../ui/textarea");
var select_1 = require("@/components/ui/select");
var avatar_1 = require("../ui/avatar");
var lucide_react_1 = require("lucide-react");
var popover_1 = require("../ui/popover");
var button_1 = require("../ui/button");
var command_1 = require("../ui/command");
var utils_1 = require("@/lib/utils");
var tag_creator_1 = require("../global/tag-creator");
var use_toast_1 = require("@/hooks/use-toast");
var Loading_1 = require("../global/Loading");
var TicketForm = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var getNewTicket = _a.getNewTicket, laneId = _a.laneId, subaccountId = _a.subaccountId;
    var _j = modal_provider_1.useModal(), defaultData = _j.data, setClose = _j.setClose;
    var router = navigation_1.useRouter();
    var _k = react_1.useState([]), tags = _k[0], setTags = _k[1];
    var _l = react_1.useState(''), contact = _l[0], setContact = _l[1];
    var _m = react_1.useState(''), search = _m[0], setSearch = _m[1];
    var _o = react_1.useState([]), contactList = _o[0], setContactList = _o[1];
    var saveTimerRef = react_1.useRef();
    var _p = react_1.useState([]), allTeamMembers = _p[0], setAllTeamMembers = _p[1];
    var _q = react_1.useState(((_c = (_b = defaultData.ticket) === null || _b === void 0 ? void 0 : _b.Assigned) === null || _c === void 0 ? void 0 : _c.id) || ''), assignedTo = _q[0], setAssignedTo = _q[1];
    var form = react_hook_form_1.useForm({
        mode: 'onChange',
        resolver: zod_1.zodResolver(types_1.TicketFormSchema),
        defaultValues: {
            name: ((_d = defaultData.ticket) === null || _d === void 0 ? void 0 : _d.name) || '',
            description: ((_e = defaultData.ticket) === null || _e === void 0 ? void 0 : _e.description) || '',
            value: String(((_f = defaultData.ticket) === null || _f === void 0 ? void 0 : _f.value) || 0)
        }
    });
    var isLoading = form.formState.isLoading;
    react_1.useEffect(function () {
        if (subaccountId) {
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, queries_1.getSubAccountTeamMembers(subaccountId)];
                        case 1:
                            response = _a.sent();
                            if (response)
                                setAllTeamMembers(response);
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
    }, [subaccountId]);
    react_1.useEffect(function () {
        var _a, _b;
        if (defaultData.ticket) {
            form.reset({
                name: defaultData.ticket.name || '',
                description: ((_a = defaultData.ticket) === null || _a === void 0 ? void 0 : _a.description) || '',
                value: String(((_b = defaultData.ticket) === null || _b === void 0 ? void 0 : _b.value) || 0)
            });
            if (defaultData.ticket.customerId)
                setContact(defaultData.ticket.customerId);
            var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, queries_1.searchContacts((_b = (_a = 
                            //@ts-ignore
                            defaultData.ticket) === null || _a === void 0 ? void 0 : _a.Customer) === null || _b === void 0 ? void 0 : _b.name)];
                        case 1:
                            response = _c.sent();
                            setContactList(response);
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchData();
        }
    }, [defaultData]);
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!laneId)
                        return [2 /*return*/];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, queries_1.upsertTicket(__assign(__assign(__assign({}, values), { laneId: laneId, id: (_a = defaultData.ticket) === null || _a === void 0 ? void 0 : _a.id, assignedUserId: assignedTo }), (contact ? { customerId: contact } : {})), tags)];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                            agencyId: undefined,
                            description: "Updated a ticket | " + (response === null || response === void 0 ? void 0 : response.name),
                            subaccountId: subaccountId
                        })];
                case 3:
                    _b.sent();
                    use_toast_1.toast({
                        title: 'Success',
                        description: 'Saved  details'
                    });
                    if (response)
                        getNewTicket(response);
                    router.refresh();
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    use_toast_1.toast({
                        variant: 'destructive',
                        title: 'Oppse!',
                        description: 'Could not save pipeline details'
                    });
                    return [3 /*break*/, 5];
                case 5:
                    setClose();
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(card_1.Card, { className: "w-full" },
        react_1["default"].createElement(card_1.CardHeader, null,
            react_1["default"].createElement(card_1.CardTitle, null, "Ticket Details")),
        react_1["default"].createElement(card_1.CardContent, null,
            react_1["default"].createElement(form_1.Form, __assign({}, form),
                react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col gap-4" },
                    react_1["default"].createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "name", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Ticket Name"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Name" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "description", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Description"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(textarea_1.Textarea, __assign({ placeholder: "Description" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "value", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Ticket Value"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Value" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement("h3", null, "Add tags"),
                    react_1["default"].createElement(tag_creator_1["default"], { subAccountId: subaccountId, getSelectedTags: setTags, defaultTags: ((_g = defaultData.ticket) === null || _g === void 0 ? void 0 : _g.Tags) || [] }),
                    react_1["default"].createElement(form_1.FormLabel, null, "Assigned To Team Member"),
                    react_1["default"].createElement(select_1.Select, { onValueChange: setAssignedTo, defaultValue: assignedTo },
                        react_1["default"].createElement(select_1.SelectTrigger, null,
                            react_1["default"].createElement(select_1.SelectValue, { placeholder: react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                                    react_1["default"].createElement(avatar_1.Avatar, { className: "w-8 h-8" },
                                        react_1["default"].createElement(avatar_1.AvatarImage, { alt: "contact" }),
                                        react_1["default"].createElement(avatar_1.AvatarFallback, { className: "bg-primary text-sm text-white" },
                                            react_1["default"].createElement(lucide_react_1.User2, { size: 14 }))),
                                    react_1["default"].createElement("span", { className: "text-sm text-muted-foreground" }, "Not Assigned")) })),
                        react_1["default"].createElement(select_1.SelectContent, null, allTeamMembers.map(function (teamMember) { return (react_1["default"].createElement(select_1.SelectItem, { key: teamMember.id, value: teamMember.id },
                            react_1["default"].createElement("div", { className: "flex items-center gap-2" },
                                react_1["default"].createElement(avatar_1.Avatar, { className: "w-8 h-8" },
                                    react_1["default"].createElement(avatar_1.AvatarImage, { alt: "contact", src: teamMember.avatarUrl }),
                                    react_1["default"].createElement(avatar_1.AvatarFallback, { className: "bg-primary text-sm text-white" },
                                        react_1["default"].createElement(lucide_react_1.User2, { size: 14 }))),
                                react_1["default"].createElement("span", { className: "text-sm text-muted-foreground" }, teamMember.name)))); }))),
                    react_1["default"].createElement(form_1.FormLabel, null, "Customer"),
                    react_1["default"].createElement(popover_1.Popover, null,
                        react_1["default"].createElement(popover_1.PopoverTrigger, { asChild: true, className: "w-full" },
                            react_1["default"].createElement(button_1.Button, { variant: "outline", role: "combobox", className: "justify-between" },
                                contact
                                    ? (_h = contactList.find(function (c) { return c.id === contact; })) === null || _h === void 0 ? void 0 : _h.name : 'Select Customer...',
                                react_1["default"].createElement(lucide_react_1.ChevronsUpDownIcon, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }))),
                        react_1["default"].createElement(popover_1.PopoverContent, { className: "w-[400px] p-0" },
                            react_1["default"].createElement(command_1.Command, null,
                                react_1["default"].createElement(command_1.CommandInput, { placeholder: "Search...", className: "h-9", value: search, onChangeCapture: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            //@ts-ignore
                                            setSearch(value.target.value);
                                            if (saveTimerRef.current)
                                                clearTimeout(saveTimerRef.current);
                                            saveTimerRef.current = setTimeout(function () { return __awaiter(void 0, void 0, void 0, function () {
                                                var response;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, queries_1.searchContacts(
                                                            //@ts-ignore
                                                            value.target.value)];
                                                        case 1:
                                                            response = _a.sent();
                                                            setContactList(response);
                                                            setSearch('');
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }, 1000);
                                            return [2 /*return*/];
                                        });
                                    }); } }),
                                react_1["default"].createElement(command_1.CommandEmpty, null, "No Customer found."),
                                react_1["default"].createElement(command_1.CommandGroup, null, contactList.map(function (c) { return (react_1["default"].createElement(command_1.CommandItem, { key: c.id, value: c.id, onSelect: function (currentValue) {
                                        setContact(currentValue === contact ? '' : currentValue);
                                    } },
                                    c.name,
                                    react_1["default"].createElement(lucide_react_1.CheckIcon, { className: utils_1.cn('ml-auto h-4 w-4', contact === c.id ? 'opacity-100' : 'opacity-0') }))); }))))),
                    react_1["default"].createElement(button_1.Button, { className: "w-20 mt-4", disabled: isLoading, type: "submit" }, form.formState.isSubmitting ? react_1["default"].createElement(Loading_1["default"], null) : 'Save'))))));
};
exports["default"] = TicketForm;
