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
var navigation_1 = require("next/navigation");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("@hookform/resolvers/zod");
var card_1 = require("../ui/card");
var form_1 = require("../ui/form");
var queries_1 = require("@/lib/queries");
var input_1 = require("../ui/input");
var file_upload_1 = require("../global/file-upload");
var button_1 = require("../ui/button");
var use_toast_1 = require("@/hooks/use-toast");
var formSchema = zod_1.z.object({
    link: zod_1.z.string().min(1, { message: 'Media File is required' }),
    name: zod_1.z.string().min(1, { message: 'Name is required' })
});
var UploadMediaForm = function (_a) {
    var subaccountId = _a.subaccountId;
    var toast = use_toast_1.useToast().toast;
    var router = navigation_1.useRouter();
    var form = react_hook_form_1.useForm({
        resolver: zod_2.zodResolver(formSchema),
        mode: 'onSubmit',
        defaultValues: {
            link: '',
            name: ''
        }
    });
    function onSubmit(values) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, queries_1.createMedia(subaccountId, values)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                                agencyId: undefined,
                                description: "Uploaded a media file | " + response.name,
                                subaccountId: subaccountId
                            })];
                    case 2:
                        _a.sent();
                        toast({ title: 'Succes', description: 'Uploaded media' });
                        router.refresh();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        toast({
                            variant: 'destructive',
                            title: 'Failed',
                            description: 'Could not uploaded media'
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(card_1.Card, { className: "w-full" },
        react_1["default"].createElement(card_1.CardHeader, null,
            react_1["default"].createElement(card_1.CardTitle, null, "Media Information"),
            react_1["default"].createElement(card_1.CardDescription, null, "Please enter the details for your file")),
        react_1["default"].createElement(card_1.CardContent, null,
            react_1["default"].createElement(form_1.Form, __assign({}, form),
                react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit) },
                    react_1["default"].createElement(form_1.FormField, { control: form.control, name: "name", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, { className: "flex-1" },
                                react_1["default"].createElement(form_1.FormLabel, null, "File Name"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ placeholder: "Your agency name" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { control: form.control, name: "link", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Media File"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(file_upload_1["default"], { apiEndpoint: "subaccountLogo", value: field.value, onChange: field.onChange })),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(button_1.Button, { type: "submit", className: "mt-4" }, "Upload Media"))))));
};
exports["default"] = UploadMediaForm;
