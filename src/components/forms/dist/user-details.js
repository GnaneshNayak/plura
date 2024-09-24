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
var modal_provider_1 = require("@/providers/modal-provider");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var queries_1 = require("@/lib/queries");
var zod_1 = require("zod");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("@hookform/resolvers/zod");
var card_1 = require("../ui/card");
var form_1 = require("@/components/ui/form");
var file_upload_1 = require("../global/file-upload");
var input_1 = require("../ui/input");
var select_1 = require("../ui/select");
var button_1 = require("../ui/button");
var separator_1 = require("../ui/separator");
var switch_1 = require("../ui/switch");
var uuid_1 = require("uuid");
var use_toast_1 = require("@/hooks/use-toast");
var Loading_1 = require("../global/Loading");
var UserDetails = function (_a) {
    var _b, _c, _d, _e;
    var id = _a.id, type = _a.type, subAccounts = _a.subAccounts, userData = _a.userData;
    var _f = react_1.useState(null), subAccountPermissions = _f[0], setSubAccountsPermissions = _f[1];
    var _g = modal_provider_1.useModal(), data = _g.data, setClose = _g.setClose;
    var _h = react_1.useState(''), roleState = _h[0], setRoleState = _h[1];
    var _j = react_1.useState(false), loadingPermissions = _j[0], setLoadingPermissions = _j[1];
    var _k = react_1.useState(null), authUserData = _k[0], setAuthUserData = _k[1];
    var toast = use_toast_1.useToast().toast;
    var router = navigation_1.useRouter();
    react_1.useEffect(function () {
        if (data.user) {
            var fetchDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, queries_1.getAuthUserDetails()];
                        case 1:
                            response = _a.sent();
                            if (response)
                                setAuthUserData(response);
                            return [2 /*return*/];
                    }
                });
            }); };
            fetchDetails();
        }
    }, [data]);
    var userDataSchema = zod_1.z.object({
        name: zod_1.z.string().min(1),
        email: zod_1.z.string().email(),
        avatarUrl: zod_1.z.string(),
        role: zod_1.z["enum"]([
            'AGENCY_OWNER',
            'AGENCY_ADMIN',
            'SUBACCOUNT_USER',
            'SUBACCOUNT_GUEST',
        ])
    });
    var form = react_hook_form_1.useForm({
        resolver: zod_2.zodResolver(userDataSchema),
        mode: 'onChange',
        defaultValues: {
            name: userData ? userData.name : (_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.name,
            email: userData ? userData.email : (_c = data === null || data === void 0 ? void 0 : data.user) === null || _c === void 0 ? void 0 : _c.email,
            avatarUrl: userData ? userData.avatarUrl : (_d = data === null || data === void 0 ? void 0 : data.user) === null || _d === void 0 ? void 0 : _d.avatarUrl,
            role: userData ? userData.role : (_e = data === null || data === void 0 ? void 0 : data.user) === null || _e === void 0 ? void 0 : _e.role
        }
    });
    react_1.useEffect(function () {
        if (!data.user)
            return;
        var getPermissions = function () { return __awaiter(void 0, void 0, void 0, function () {
            var permission;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!data.user)
                            return [2 /*return*/];
                        return [4 /*yield*/, queries_1.getUserPermissions(data.user.id)];
                    case 1:
                        permission = _a.sent();
                        setSubAccountsPermissions(permission);
                        return [2 /*return*/];
                }
            });
        }); };
        getPermissions();
    }, [data, form]);
    react_1.useEffect(function () {
        if (data.user) {
            form.reset(data.user);
        }
        if (userData) {
            form.reset(userData);
        }
    }, [userData, data]);
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedUser;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!id)
                        return [2 /*return*/];
                    if (!(userData || (data === null || data === void 0 ? void 0 : data.user))) return [3 /*break*/, 2];
                    return [4 /*yield*/, queries_1.updateUser(values)];
                case 1:
                    updatedUser = _b.sent();
                    (_a = authUserData === null || authUserData === void 0 ? void 0 : authUserData.Agency) === null || _a === void 0 ? void 0 : _a.SubAccount.filter(function (subacc) {
                        return authUserData.Permissions.find(function (p) { return p.subAccountId === subacc.id && p.access; });
                    }).forEach(function (subaccount) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                                        agencyId: undefined,
                                        description: "Updated " + (userData === null || userData === void 0 ? void 0 : userData.name) + " information",
                                        subaccountId: subaccount.id
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    if (updatedUser) {
                        toast({
                            title: 'Success',
                            description: 'Update User Information'
                        });
                        setClose();
                        router.refresh();
                    }
                    else {
                        toast({
                            variant: 'destructive',
                            title: 'Oppse!',
                            description: 'Could not update user information'
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    console.log('Error could not submit');
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onChangePermission = function (subAccountId, val, permissionsId) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!((_a = data.user) === null || _a === void 0 ? void 0 : _a.email))
                        return [2 /*return*/];
                    setLoadingPermissions(true);
                    return [4 /*yield*/, queries_1.changeUserPermissions(permissionsId ? permissionsId : uuid_1.v4(), data.user.email, subAccountId, val)];
                case 1:
                    response = _e.sent();
                    if (!(type === 'agency')) return [3 /*break*/, 3];
                    return [4 /*yield*/, queries_1.saveActivityLogsNotification({
                            agencyId: (_b = authUserData === null || authUserData === void 0 ? void 0 : authUserData.Agency) === null || _b === void 0 ? void 0 : _b.id,
                            description: "Gave " + (userData === null || userData === void 0 ? void 0 : userData.name) + " access to | " + ((_c = subAccountPermissions === null || subAccountPermissions === void 0 ? void 0 : subAccountPermissions.Permissions.find(function (p) { return p.subAccountId === subAccountId; })) === null || _c === void 0 ? void 0 : _c.SubAccount.name) + " ",
                            subaccountId: (_d = subAccountPermissions === null || subAccountPermissions === void 0 ? void 0 : subAccountPermissions.Permissions.find(function (p) { return p.subAccountId === subAccountId; })) === null || _d === void 0 ? void 0 : _d.SubAccount.id
                        })];
                case 2:
                    _e.sent();
                    _e.label = 3;
                case 3:
                    if (response) {
                        toast({
                            title: 'Success',
                            description: 'The request was successfull'
                        });
                        if (subAccountPermissions) {
                            subAccountPermissions.Permissions.find(function (perm) {
                                if (perm.subAccountId === subAccountId) {
                                    return __assign(__assign({}, perm), { access: !perm.access });
                                }
                                return perm;
                            });
                        }
                    }
                    else {
                        toast({
                            variant: 'destructive',
                            title: 'Failed',
                            description: 'Could not update permissions'
                        });
                    }
                    router.refresh();
                    setLoadingPermissions(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(card_1.Card, { className: "w-full" },
        react_1["default"].createElement(card_1.CardHeader, null,
            react_1["default"].createElement(card_1.CardTitle, null, "User Details"),
            react_1["default"].createElement(card_1.CardDescription, null, "Add or update your information")),
        react_1["default"].createElement(card_1.CardContent, null,
            react_1["default"].createElement(form_1.Form, __assign({}, form),
                react_1["default"].createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-4" },
                    react_1["default"].createElement(form_1.FormField, { disabled: form.formState.isSubmitting, control: form.control, name: "avatarUrl", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, null,
                                react_1["default"].createElement(form_1.FormLabel, null, "Profile picture"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(file_upload_1["default"], { apiEndpoint: "avatar", value: field.value, onChange: field.onChange })),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { disabled: form.formState.isSubmitting, control: form.control, name: "name", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, { className: "flex-1" },
                                react_1["default"].createElement(form_1.FormLabel, null, "User full name"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ required: true, placeholder: "Full Name" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { disabled: form.formState.isSubmitting, control: form.control, name: "email", render: function (_a) {
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, { className: "flex-1" },
                                react_1["default"].createElement(form_1.FormLabel, null, "Email"),
                                react_1["default"].createElement(form_1.FormControl, null,
                                    react_1["default"].createElement(input_1.Input, __assign({ readOnly: (userData === null || userData === void 0 ? void 0 : userData.role) === 'AGENCY_OWNER' ||
                                            form.formState.isSubmitting, placeholder: "Email" }, field))),
                                react_1["default"].createElement(form_1.FormMessage, null)));
                        } }),
                    react_1["default"].createElement(form_1.FormField, { disabled: form.formState.isSubmitting, control: form.control, name: "role", render: function (_a) {
                            var _b;
                            var field = _a.field;
                            return (react_1["default"].createElement(form_1.FormItem, { className: "flex-1" },
                                react_1["default"].createElement(form_1.FormLabel, null, " User Role"),
                                react_1["default"].createElement(select_1.Select, { disabled: field.value === 'AGENCY_OWNER', onValueChange: function (value) {
                                        if (value === 'SUBACCOUNT_USER' ||
                                            value === 'SUBACCOUNT_GUEST') {
                                            setRoleState('You need to have subaccounts to assign Subaccount access to team members.');
                                        }
                                        else {
                                            setRoleState('');
                                        }
                                        field.onChange(value);
                                    }, defaultValue: field.value },
                                    react_1["default"].createElement(form_1.FormControl, null,
                                        react_1["default"].createElement(select_1.SelectTrigger, null,
                                            react_1["default"].createElement(select_1.SelectValue, { placeholder: "Select user role..." }))),
                                    react_1["default"].createElement(select_1.SelectContent, null,
                                        react_1["default"].createElement(select_1.SelectItem, { value: "AGENCY_ADMING" }, "Agency Admin"),
                                        (((_b = data === null || data === void 0 ? void 0 : data.user) === null || _b === void 0 ? void 0 : _b.role) === 'AGENCY_OWNER' ||
                                            (userData === null || userData === void 0 ? void 0 : userData.role) === 'AGENCY_OWNER') && (react_1["default"].createElement(select_1.SelectItem, { value: "AGENCY_OWNER" }, "Agency Owner")),
                                        react_1["default"].createElement(select_1.SelectItem, { value: "SUBACCOUNT_USER" }, "Sub Account User"),
                                        react_1["default"].createElement(select_1.SelectItem, { value: "SUBACCOUNT_GUEST" }, "Sub Account Guest"))),
                                react_1["default"].createElement("p", { className: "text-muted-foreground" }, roleState)));
                        } }),
                    react_1["default"].createElement(button_1.Button, { disabled: form.formState.isSubmitting, type: "submit" }, form.formState.isSubmitting ? react_1["default"].createElement(Loading_1["default"], null) : 'Save User Details'),
                    (authUserData === null || authUserData === void 0 ? void 0 : authUserData.role) === 'AGENCY_OWNER' && (react_1["default"].createElement("div", null,
                        react_1["default"].createElement(separator_1.Separator, { className: "my-4" }),
                        react_1["default"].createElement(form_1.FormLabel, null, " User Permissions"),
                        react_1["default"].createElement(form_1.FormDescription, { className: "mb-4" }, "You can give Sub Account access to team member by turning on access control for each Sub Account. This is only visible to agency owners"),
                        react_1["default"].createElement("div", { className: "flex flex-col gap-4" }, subAccounts === null || subAccounts === void 0 ? void 0 : subAccounts.map(function (subAccount) {
                            var subAccountPermissionsDetails = subAccountPermissions === null || subAccountPermissions === void 0 ? void 0 : subAccountPermissions.Permissions.find(function (p) { return p.subAccountId === subAccount.id; });
                            return (react_1["default"].createElement("div", { key: subAccount.id, className: "flex items-center justify-between rounded-lg border p-4" },
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement("p", null, subAccount.name)),
                                react_1["default"].createElement(switch_1.Switch, { disabled: loadingPermissions, checked: subAccountPermissionsDetails === null || subAccountPermissionsDetails === void 0 ? void 0 : subAccountPermissionsDetails.access, onCheckedChange: function (permission) {
                                        onChangePermission(subAccount.id, permission, subAccountPermissionsDetails === null || subAccountPermissionsDetails === void 0 ? void 0 : subAccountPermissionsDetails.id);
                                    } })));
                        })))))))));
};
exports["default"] = UserDetails;
