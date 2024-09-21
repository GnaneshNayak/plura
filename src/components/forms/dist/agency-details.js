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
var use_toast_1 = require("@/hooks/use-toast");
var queries_1 = require("@/lib/queries");
var zod_1 = require("@hookform/resolvers/zod");
var react_1 = require("@tremor/react");
var navigation_1 = require("next/navigation");
var react_2 = require("react");
var react_hook_form_1 = require("react-hook-form");
var uuid_1 = require("uuid");
var z = require("zod");
var file_upload_1 = require("../global/file-upload");
var Loading_1 = require("../global/Loading");
var alert_dialog_1 = require("../ui/alert-dialog");
var button_1 = require("../ui/button");
var card_1 = require("../ui/card");
var form_1 = require("../ui/form");
var input_1 = require("../ui/input");
var switch_1 = require("../ui/switch");
var FormSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Agency name must be at least 2 characters' }),
    companyEmail: z.string().min(1),
    companyPhone: z.string().min(1),
    address: z.string().min(1),
    city: z.string().min(1),
    zipCode: z.string().min(1),
    state: z.string().min(1),
    country: z.string().min(1),
    agencyLogo: z.string().min(1),
    whiteLabel: z.boolean()
});
var AgencyDetails = function (_a) {
    var data = _a.data;
    var router = navigation_1.useRouter();
    var _b = react_2.useState(false), deletingAgency = _b[0], setDeletingAgency = _b[1];
    var form = react_hook_form_1.useForm({
        mode: 'onChange',
        resolver: zod_1.zodResolver(FormSchema),
        defaultValues: {
            name: data === null || data === void 0 ? void 0 : data.name,
            companyEmail: data === null || data === void 0 ? void 0 : data.companyEmail,
            companyPhone: data === null || data === void 0 ? void 0 : data.companyPhone,
            address: data === null || data === void 0 ? void 0 : data.address,
            city: data === null || data === void 0 ? void 0 : data.city,
            zipCode: data === null || data === void 0 ? void 0 : data.zipCode,
            state: data === null || data === void 0 ? void 0 : data.state,
            country: data === null || data === void 0 ? void 0 : data.country,
            agencyLogo: data === null || data === void 0 ? void 0 : data.agencyLogo,
            whiteLabel: data === null || data === void 0 ? void 0 : data.whiteLabel
        }
    });
    react_2.useEffect(function () {
        if (data) {
            form.reset(data);
        }
    }, [data]);
    var isLoading = form.formState.isSubmitting;
    var handleSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var newUserData, customerId, bodyData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    newUserData = void 0;
                    customerId = void 0;
                    if (!(data === null || data === void 0 ? void 0 : data.id)) {
                        bodyData = {
                            email: values.companyEmail,
                            name: values.name,
                            shipping: {
                                address: {
                                    city: values.city,
                                    country: values.country,
                                    line1: values.address,
                                    postal_code: values.zipCode,
                                    state: values.zipCode
                                },
                                name: values.name
                            },
                            address: {
                                city: values.city,
                                country: values.country,
                                line1: values.address,
                                postal_code: values.zipCode,
                                state: values.zipCode
                            }
                        };
                        //
                    }
                    return [4 /*yield*/, queries_1.initUser({ role: 'AGENCY_OWNER' })];
                case 1:
                    // wip cust Id
                    newUserData = _a.sent();
                    return [4 /*yield*/, queries_1.upsertAgency({
                            id: (data === null || data === void 0 ? void 0 : data.id) ? data.id : uuid_1.v4(),
                            customerId: (data === null || data === void 0 ? void 0 : data.customerId) || '',
                            address: values.address,
                            agencyLogo: values.agencyLogo,
                            city: values.city,
                            companyPhone: values.companyPhone,
                            country: values.country,
                            name: values.name,
                            state: values.state,
                            whiteLabel: values.whiteLabel,
                            zipCode: values.zipCode,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                            companyEmail: values.companyEmail,
                            connectAccountId: '',
                            goal: 5
                        })];
                case 2:
                    response = _a.sent();
                    use_toast_1.toast({
                        title: 'Created Agency'
                    });
                    if (data === null || data === void 0 ? void 0 : data.id)
                        return [2 /*return*/, router.refresh()];
                    if (response) {
                        return [2 /*return*/, router.refresh()];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    use_toast_1.toast({
                        variant: 'destructive',
                        title: 'Oppse!',
                        description: 'could not create your agency'
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteAgency = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(data === null || data === void 0 ? void 0 : data.id))
                        return [2 /*return*/];
                    setDeletingAgency(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, queries_1.deleteAgency(data === null || data === void 0 ? void 0 : data.id)];
                case 2:
                    response = _a.sent();
                    use_toast_1.toast({
                        title: 'Deleted Agency',
                        description: 'Deleted your Agency and all subaccounts'
                    });
                    router.refresh();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    use_toast_1.toast({
                        variant: 'destructive',
                        title: '!Oppse',
                        description: 'Could not delete your Agency and all subaccounts'
                    });
                    return [3 /*break*/, 4];
                case 4:
                    setDeletingAgency(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(alert_dialog_1.AlertDialog, null,
        React.createElement(card_1.Card, { className: "w-full" },
            React.createElement(card_1.CardHeader, null,
                React.createElement(card_1.CardTitle, null, "Agency information"),
                React.createElement(card_1.CardDescription, null, "Lets create an agency for you business. You can edit agency settings later from the agency settings tab.")),
            React.createElement(card_1.CardContent, null,
                React.createElement(form_1.Form, __assign({}, form),
                    React.createElement("form", { onSubmit: form.handleSubmit(handleSubmit) },
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "agencyLogo", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, null,
                                    React.createElement(form_1.FormLabel, null, "Agency Logo"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(file_upload_1["default"], { apiEndpoint: "agencyLogo", onChange: field.onChange, value: field.value })),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        React.createElement("div", { className: "flex md:flex-row gap-4" },
                            React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "name", render: function (_a) {
                                    var field = _a.field;
                                    return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                        React.createElement(form_1.FormLabel, null, "Agency Name"),
                                        React.createElement(form_1.FormControl, null,
                                            React.createElement(input_1.Input, __assign({ placeholder: "Your agency name" }, field))),
                                        React.createElement(form_1.FormMessage, null)));
                                } }),
                            React.createElement(form_1.FormField, { control: form.control, name: "companyEmail", render: function (_a) {
                                    var field = _a.field;
                                    return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                        React.createElement(form_1.FormLabel, null, "Agency Email"),
                                        React.createElement(form_1.FormControl, null,
                                            React.createElement(input_1.Input, __assign({ readOnly: true, placeholder: "Email" }, field))),
                                        React.createElement(form_1.FormMessage, null)));
                                } })),
                        React.createElement("div", { className: "flex md:flex-row gap-4" },
                            React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "companyPhone", render: function (_a) {
                                    var field = _a.field;
                                    return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                        React.createElement(form_1.FormLabel, null, "Agency Phone Number"),
                                        React.createElement(form_1.FormControl, null,
                                            React.createElement(input_1.Input, __assign({ placeholder: "Phone" }, field))),
                                        React.createElement(form_1.FormMessage, null)));
                                } })),
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "whiteLabel", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex flex-row items-center justify-between rounded-lg border gap-4 p-4" },
                                    React.createElement("div", null,
                                        React.createElement(form_1.FormLabel, null, "Whitelabel Agency"),
                                        React.createElement(form_1.FormDescription, null, "Turning on whilelabel mode will show your agency logo to all sub accounts by default. You can overwrite this functionality through sub account settings.")),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(switch_1.Switch, { checked: field.value, onCheckedChange: field.onChange }))));
                            } }),
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "address", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "Address"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ placeholder: "123 st..." }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        React.createElement("div", { className: "flex md:flex-row gap-4" },
                            React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "city", render: function (_a) {
                                    var field = _a.field;
                                    return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                        React.createElement(form_1.FormLabel, null, "City"),
                                        React.createElement(form_1.FormControl, null,
                                            React.createElement(input_1.Input, __assign({ placeholder: "City" }, field))),
                                        React.createElement(form_1.FormMessage, null)));
                                } }),
                            React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "state", render: function (_a) {
                                    var field = _a.field;
                                    return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                        React.createElement(form_1.FormLabel, null, "State"),
                                        React.createElement(form_1.FormControl, null,
                                            React.createElement(input_1.Input, __assign({ placeholder: "State" }, field))),
                                        React.createElement(form_1.FormMessage, null)));
                                } }),
                            React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "zipCode", render: function (_a) {
                                    var field = _a.field;
                                    return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                        React.createElement(form_1.FormLabel, null, "Zipcpde"),
                                        React.createElement(form_1.FormControl, null,
                                            React.createElement(input_1.Input, __assign({ placeholder: "Zipcode" }, field))),
                                        React.createElement(form_1.FormMessage, null)));
                                } })),
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "country", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "Country"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ placeholder: "Country" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        (data === null || data === void 0 ? void 0 : data.id) && (React.createElement("div", { className: "flex flex-col gap-2 mt-2" },
                            React.createElement(form_1.FormLabel, null, "Create A Goal"),
                            React.createElement(form_1.FormDescription, null, "\u2728 Create a goal for your agency. As your business grows your goals grow too so dont forget to set the bar higher!"),
                            React.createElement(react_1.NumberInput, { defaultValue: data === null || data === void 0 ? void 0 : data.goal, onValueChange: function (val) { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                if (!(data === null || data === void 0 ? void 0 : data.id))
                                                    return [2 /*return*/];
                                                return [4 /*yield*/, queries_1.updateAgencyDetails(data.id, { goal: val })];
                                            case 1:
                                                _a.sent();
                                                return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                                                        agencyId: data.id,
                                                        description: "Updated the agency goal to | " + val + " Sub Account",
                                                        subaccountId: undefined
                                                    })];
                                            case 2:
                                                _a.sent();
                                                router.refresh();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }, min: 1, className: "bg-background !border !border-input", placeholder: "Sub Account Goal" }))),
                        React.createElement(button_1.Button, { type: "submit", disabled: isLoading, className: "mt-2" }, isLoading ? React.createElement(Loading_1["default"], null) : 'Save Agency Information'))),
                (data === null || data === void 0 ? void 0 : data.id) && (React.createElement("div", { className: "flex flex-row items-center justify-between rounded-lg border border-destructive gap-4 p-4 mt-4" },
                    React.createElement("div", null,
                        React.createElement("div", null, "Danger Zone")),
                    React.createElement("div", { className: "text-muted-foreground" }, "Deleting your agency cann't be undone. This will also delete all sub accounts and all data related to your sub accounts. Sub accounts will no longer have access to funnels, contacts etc."),
                    React.createElement(alert_dialog_1.AlertDialogTrigger, { disabled: isLoading || deletingAgency, className: "text-red-600 p-2 text-center mt-2 rounded-md hove:bg-red-600 hover:text-white whitespace-nowrap" }, deletingAgency ? 'Deleting...' : 'Delete Agency'))),
                React.createElement(alert_dialog_1.AlertDialogContent, null,
                    React.createElement(alert_dialog_1.AlertDialogHeader, null,
                        React.createElement(alert_dialog_1.AlertDialogTitle, { className: "text-left" }, "Are you absolutely sure?"),
                        React.createElement(alert_dialog_1.AlertDialogDescription, { className: "text-left" }, "This action cannot be undone. This will permanently delete the Agency account and all related sub accounts.")),
                    React.createElement(alert_dialog_1.AlertDialogFooter, { className: "flex items-center" },
                        React.createElement(alert_dialog_1.AlertDialogCancel, { className: "mb-2" }, "Cancel"),
                        React.createElement(alert_dialog_1.AlertDialogAction, { disabled: deletingAgency, className: "bg-destructive hover:bg-destructive", onClick: handleDeleteAgency }, "Delete")))))));
};
exports["default"] = AgencyDetails;
