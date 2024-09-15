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
var agency_details_1 = require("@/components/forms/agency-details");
var queries_1 = require("@/lib/queries");
var server_1 = require("@clerk/nextjs/server");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var Page = function (_a) {
    var searchParams = _a.searchParams;
    return __awaiter(void 0, void 0, void 0, function () {
        var agencyId, user, statePath, stateAgencyId, authUser;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, queries_1.verifyAndAcceptInvitation()];
                case 1:
                    agencyId = _b.sent();
                    console.log(agencyId);
                    return [4 /*yield*/, queries_1.getAuthUserDetails()];
                case 2:
                    user = _b.sent();
                    if (agencyId) {
                        if ((user === null || user === void 0 ? void 0 : user.role) === 'SUBACCOUNT_GUEST' || (user === null || user === void 0 ? void 0 : user.role) === 'SUBACCOUNT_USER') {
                            return [2 /*return*/, navigation_1.redirect('/subaccount')];
                        }
                        else if ((user === null || user === void 0 ? void 0 : user.role) === 'AGENCY_OWNER' || (user === null || user === void 0 ? void 0 : user.role) === 'AGENCY_ADMIN') {
                            if (searchParams.plan) {
                                return [2 /*return*/, navigation_1.redirect("/agency/" + agencyId + "/billing?plan=" + searchParams.plan)];
                            }
                            if (searchParams.state) {
                                statePath = searchParams.state.split('___')[0];
                                stateAgencyId = searchParams.state.split('___')[1];
                                if (!stateAgencyId)
                                    return [2 /*return*/, react_1["default"].createElement("div", null, "Not authorized")];
                                return [2 /*return*/, navigation_1.redirect("/agency/" + stateAgencyId + "/" + statePath + "?code=" + searchParams.code)];
                            }
                            else
                                return [2 /*return*/, navigation_1.redirect("/agency/" + agencyId)];
                        }
                        else {
                            return [2 /*return*/, react_1["default"].createElement("div", null, "Not authorized")];
                        }
                    }
                    return [4 /*yield*/, server_1.currentUser()];
                case 3:
                    authUser = _b.sent();
                    return [2 /*return*/, (react_1["default"].createElement("div", { className: "flex justify-center items-center mt-4" },
                            react_1["default"].createElement("div", { className: "max-w-[850px] border-[1px] p-4 rounded-xl" },
                                react_1["default"].createElement("h1", { className: "text-4xl" }, " Create An Agency"),
                                react_1["default"].createElement(agency_details_1["default"], { data: { companyEmail: authUser === null || authUser === void 0 ? void 0 : authUser.emailAddresses[0].emailAddress } }))))];
            }
        });
    });
};
exports["default"] = Page;
