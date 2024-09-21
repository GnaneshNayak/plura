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
var queries_1 = require("@/lib/queries");
var react_1 = require("react");
var menu_options_1 = require("./menu-options");
var Sidebar = function (_a) {
    var id = _a.id, type = _a.type;
    return __awaiter(void 0, void 0, void 0, function () {
        var user, details, isWhiteLabeledAgency, sidebarLogo, sidebarOpt, subAccounts;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, queries_1.getAuthUserDetails()];
                case 1:
                    user = _d.sent();
                    if (!user)
                        return [2 /*return*/, null];
                    if (!user.Agency)
                        return [2 /*return*/];
                    details = type === 'agency'
                        ? user.Agency
                        : user.Agency.SubAccount.find(function (sub) { return sub.id === id; });
                    isWhiteLabeledAgency = user.Agency.whiteLabel;
                    if (!details)
                        return [2 /*return*/];
                    sidebarLogo = user.Agency.agencyLogo || '/assets/plura-logo';
                    if (!isWhiteLabeledAgency) {
                        if (type === 'subaccount') {
                            sidebarLogo =
                                ((_b = user.Agency.SubAccount.find(function (sub) { return sub.id === id; })) === null || _b === void 0 ? void 0 : _b.subAccountLogo) ||
                                    user.Agency.agencyLogo;
                        }
                    }
                    sidebarOpt = type === 'agency'
                        ? user.Agency.SidebarOption || []
                        : ((_c = user.Agency.SubAccount.find(function (sub) { return sub.id === id; })) === null || _c === void 0 ? void 0 : _c.SidebarOption) ||
                            [];
                    subAccounts = user.Agency.SubAccount.filter(function (sub) {
                        return user.Permissions.find(function (prem) { return prem.id === sub.id && prem.access; });
                    });
                    return [2 /*return*/, (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(menu_options_1["default"], { defaultOpen: true, details: details, sidebarLogo: sidebarLogo, sidebarOpt: sidebarOpt, subAccounts: subAccounts, id: id, user: user }),
                            react_1["default"].createElement(menu_options_1["default"], { details: details, sidebarLogo: sidebarLogo, sidebarOpt: sidebarOpt, subAccounts: subAccounts, id: id, user: user })))];
            }
        });
    });
};
exports["default"] = Sidebar;
