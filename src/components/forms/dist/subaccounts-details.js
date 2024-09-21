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
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var z = require("zod");
var uuid_1 = require("uuid");
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var navigation_1 = require("next/navigation");
var input_1 = require("@/components/ui/input");
var card_1 = require("@/components/ui/card");
var file_upload_1 = require("../global/file-upload");
var queries_1 = require("@/lib/queries");
var react_1 = require("react");
var modal_provider_1 = require("@/providers/modal-provider");
var use_toast_1 = require("@/hooks/use-toast");
var Loading_1 = require("../global/Loading");
var formSchema = z.object({
    name: z.string(),
    companyEmail: z.string(),
    companyPhone: z.string().min(1),
    address: z.string(),
    city: z.string(),
    subAccountLogo: z.string(),
    zipCode: z.string(),
    state: z.string(),
    country: z.string()
});
var SubAccountDetails = function (_a) {
    var details = _a.details, agencyDetails = _a.agencyDetails, userId = _a.userId, userName = _a.userName;
    var toast = use_toast_1.useToast().toast;
    var setClose = modal_provider_1.useModal().setClose;
    var router = navigation_1.useRouter();
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(formSchema),
        defaultValues: {
            name: details === null || details === void 0 ? void 0 : details.name,
            companyEmail: details === null || details === void 0 ? void 0 : details.companyEmail,
            companyPhone: details === null || details === void 0 ? void 0 : details.companyPhone,
            address: details === null || details === void 0 ? void 0 : details.address,
            city: details === null || details === void 0 ? void 0 : details.city,
            zipCode: details === null || details === void 0 ? void 0 : details.zipCode,
            state: details === null || details === void 0 ? void 0 : details.state,
            country: details === null || details === void 0 ? void 0 : details.country,
            subAccountLogo: details === null || details === void 0 ? void 0 : details.subAccountLogo
        }
    });
    function onSubmit(values) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, queries_1.upsertSubAccount({
                                id: (details === null || details === void 0 ? void 0 : details.id) ? details.id : uuid_1.v4(),
                                address: values.address,
                                subAccountLogo: values.subAccountLogo,
                                city: values.city,
                                companyPhone: values.companyPhone,
                                country: values.country,
                                name: values.name,
                                state: values.state,
                                zipCode: values.zipCode,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                                companyEmail: values.companyEmail,
                                agencyId: agencyDetails.id,
                                connectAccountId: '',
                                goal: 5000
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response)
                            throw new Error('No response from server');
                        return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                                agencyId: response.agencyId,
                                description: userName + " | updated sub account | " + response.name,
                                subaccountId: response.id
                            })];
                    case 2:
                        _a.sent();
                        toast({
                            title: 'Subaccount details saved',
                            description: 'Successfully saved your subaccount details.'
                        });
                        setClose();
                        router.refresh();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        toast({
                            variant: 'destructive',
                            title: 'Oppse!',
                            description: 'Could not save sub account details.'
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        if (details) {
            form.reset(details);
        }
    }, [details]);
    var isLoading = form.formState.isSubmitting;
    //CHALLENGE Create this form.
    return (React.createElement(card_1.Card, { className: "w-full" },
        React.createElement(card_1.CardHeader, null,
            React.createElement(card_1.CardTitle, null, "Sub Account Information"),
            React.createElement(card_1.CardDescription, null, "Please enter business details")),
        React.createElement(card_1.CardContent, null,
            React.createElement(form_1.Form, __assign({}, form),
                React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4" },
                    React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "subAccountLogo", render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, null,
                                React.createElement(form_1.FormLabel, null, "Account Logo"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(file_upload_1["default"], { apiEndpoint: "subaccountLogo", value: field.value, onChange: field.onChange })),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement("div", { className: "flex md:flex-row gap-4" },
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "name", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "Account Name"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ required: true, placeholder: "Your agency name" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "companyEmail", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "Acount Email"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ placeholder: "Email" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } })),
                    React.createElement("div", { className: "flex md:flex-row gap-4" },
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "companyPhone", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "Acount Phone Number"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ placeholder: "Phone", required: true }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } })),
                    React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "address", render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                React.createElement(form_1.FormLabel, null, "Address"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ required: true, placeholder: "123 st..." }, field))),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement("div", { className: "flex md:flex-row gap-4" },
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "city", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "City"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ required: true, placeholder: "City" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "state", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "State"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ required: true, placeholder: "State" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } }),
                        React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "zipCode", render: function (_a) {
                                var field = _a.field;
                                return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                    React.createElement(form_1.FormLabel, null, "Zipcpde"),
                                    React.createElement(form_1.FormControl, null,
                                        React.createElement(input_1.Input, __assign({ required: true, placeholder: "Zipcode" }, field))),
                                    React.createElement(form_1.FormMessage, null)));
                            } })),
                    React.createElement(form_1.FormField, { disabled: isLoading, control: form.control, name: "country", render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, { className: "flex-1" },
                                React.createElement(form_1.FormLabel, null, "Country"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ required: true, placeholder: "Country" }, field))),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement(button_1.Button, { type: "submit", disabled: isLoading }, isLoading ? React.createElement(Loading_1["default"], null) : 'Save Account Information'))))));
};
exports["default"] = SubAccountDetails;
