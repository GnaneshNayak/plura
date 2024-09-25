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
var react_1 = require("react");
var zod_1 = require("zod");
var card_1 = require("../ui/card");
var form_1 = require("../ui/form");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("@hookform/resolvers/zod");
var input_1 = require("../ui/input");
var select_1 = require("../ui/select");
var button_1 = require("../ui/button");
var Loading_1 = require("../global/Loading");
var queries_1 = require("@/lib/queries");
var use_toast_1 = require("@/hooks/use-toast");
var SendInvitation = function (_a) {
    var agencyId = _a.agencyId;
    var toast = use_toast_1.useToast().toast;
    var userDataSchema = zod_1.z.object({
        email: zod_1.z.string().email(),
        role: zod_1.z["enum"](['AGENCY_ADMIN', 'SUBACCOUNT_USER', 'SUBACCOUNT_GUEST'])
    });
    var form = react_hook_form_1.useForm({
        resolver: zod_2.zodResolver(userDataSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            role: 'SUBACCOUNT_USER'
        }
    });
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var res, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, queries_1.sendInvitation(values.role, values.email, agencyId)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                            agencyId: agencyId,
                            description: "Invited " + res.email,
                            subaccountId: undefined
                        })];
                case 2:
                    _a.sent();
                    toast({
                        title: 'Success',
                        description: 'Created and sent invitation'
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    toast({
                        variant: 'destructive',
                        title: 'Oppse!',
                        description: 'Could not send invitation'
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(card_1.Card, null,
        react_1["default"].createElement(card_1.CardHeader, null,
            react_1["default"].createElement(card_1.CardTitle, null, "Invitation"),
            react_1["default"].createElement(card_1.CardDescription, null, "An invitation will be sent to the user. Users who already have an invitation sent out to their email, will not receive another invitation.")),
        react_1["default"].createElement(card_1.CardContent, null,
            react_1["default"].createElement(form_1.Form, __assign({}, form),
                react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col gap-6" },
                    react_1["default"].createElement(form_1.FormField, { disabled: form.formState.isSubmitting, control: form.control, name: "email", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, { className: "flex-1" },
                                react_1["default"].createElement(form_1.FormLabel, null, "Email"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Email" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { disabled: form.formState.isSubmitting, control: form.control, name: "role", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, { className: "flex-1" },
                                react_1["default"].createElement(form_1.FormLabel, null, "User role"),
                                react_1["default"].createElement(select_1.Select, { onValueChange: function (value) { return field.onChange(value); }, defaultValue: field.value },
                                    react_1["default"].createElement(form_1.FormControl, null,
                                        react_1["default"].createElement(select_1.SelectTrigger, null,
                                            react_1["default"].createElement(select_1.SelectValue, { placeholder: "Select user role..." }))),
                                    react_1["default"].createElement(select_1.SelectContent, null,
                                        react_1["default"].createElement(select_1.SelectItem, { value: "AGENCY_ADMIN" }, "Agency Admin"),
                                        react_1["default"].createElement(select_1.SelectItem, { value: "SUBACCOUNT_USER" }, "Sub Account User"),
                                        react_1["default"].createElement(select_1.SelectItem, { value: "SUBACCOUNT_GUEST" }, "Sub Account Guest"))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(button_1.Button, { disabled: form.formState.isSubmitting, type: "submit" }, form.formState.isSubmitting ? react_1["default"].createElement(Loading_1["default"], null) : 'Send Invitation'))))));
};
exports["default"] = SendInvitation;
