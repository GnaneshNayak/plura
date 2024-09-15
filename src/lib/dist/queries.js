'use server';
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
exports.upsertAgency = exports.initUser = exports.deleteAgency = exports.updateAgencyDetails = exports.verifyAndAcceptInvitation = exports.createTeamUser = exports.saveActivityLogsNotification = exports.getAuthUserDetails = void 0;
var server_1 = require("@clerk/nextjs/server");
var db_1 = require("./db");
var navigation_1 = require("next/navigation");
exports.getAuthUserDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server_1.currentUser()];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/];
                return [4 /*yield*/, db_1.db.user.findUnique({
                        where: {
                            email: user === null || user === void 0 ? void 0 : user.emailAddresses[0].emailAddress
                        },
                        include: {
                            Agency: {
                                include: {
                                    SidebarOption: true,
                                    SubAccount: {
                                        include: {
                                            SidebarOption: true
                                        }
                                    }
                                }
                            },
                            Permissions: true
                        }
                    })];
            case 2:
                userData = _a.sent();
                return [2 /*return*/, userData];
        }
    });
}); };
exports.saveActivityLogsNotification = function (_a) {
    var agencyId = _a.agencyId, description = _a.description, subaccountId = _a.subaccountId;
    return __awaiter(void 0, void 0, void 0, function () {
        var authUser, userData, response, foundAgencyId, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, server_1.currentUser()];
                case 1:
                    authUser = _b.sent();
                    if (!!authUser) return [3 /*break*/, 3];
                    return [4 /*yield*/, db_1.db.user.findFirst({
                            where: {
                                Agency: {
                                    SubAccount: {
                                        some: { id: subaccountId }
                                    }
                                }
                            }
                        })];
                case 2:
                    response = _b.sent();
                    if (response) {
                        userData = response;
                    }
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, db_1.db.user.findUnique({
                        where: { email: authUser === null || authUser === void 0 ? void 0 : authUser.emailAddresses[0].emailAddress }
                    })];
                case 4:
                    userData = _b.sent();
                    _b.label = 5;
                case 5:
                    if (!userData) {
                        console.log('Could not find a user');
                        return [2 /*return*/];
                    }
                    foundAgencyId = agencyId;
                    if (!!foundAgencyId) return [3 /*break*/, 7];
                    if (!subaccountId) {
                        throw new Error('You need to provide atleast an agency Id or subaccount Id');
                    }
                    return [4 /*yield*/, db_1.db.subAccount.findUnique({
                            where: { id: subaccountId }
                        })];
                case 6:
                    response = _b.sent();
                    if (response)
                        foundAgencyId = response.agencyId;
                    _b.label = 7;
                case 7:
                    if (!subaccountId) return [3 /*break*/, 9];
                    return [4 /*yield*/, db_1.db.notification.create({
                            data: {
                                notification: userData.name + " | " + description,
                                User: {
                                    connect: {
                                        id: userData.id
                                    }
                                },
                                Agency: {
                                    connect: {
                                        id: foundAgencyId
                                    }
                                },
                                SubAccount: {
                                    connect: { id: subaccountId }
                                }
                            }
                        })];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 9: return [4 /*yield*/, db_1.db.notification.create({
                        data: {
                            notification: userData.name + " | " + description,
                            User: {
                                connect: {
                                    id: userData.id
                                }
                            },
                            Agency: {
                                connect: {
                                    id: foundAgencyId
                                }
                            }
                        }
                    })];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
};
exports.createTeamUser = function (agencyId, user) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (user.role === 'AGENCY_OWNER')
                    return [2 /*return*/, null];
                return [4 /*yield*/, db_1.db.user.create({ data: __assign({}, user) })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
exports.verifyAndAcceptInvitation = function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, invitationExists, userDetails, agency;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server_1.currentUser()];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, navigation_1.redirect('/sign-in')];
                return [4 /*yield*/, db_1.db.invitation.findUnique({
                        where: {
                            email: user.emailAddresses[0].emailAddress,
                            status: 'PENDING'
                        }
                    })];
            case 2:
                invitationExists = _a.sent();
                if (!invitationExists) return [3 /*break*/, 9];
                return [4 /*yield*/, exports.createTeamUser(invitationExists.agencyId, {
                        email: invitationExists.email,
                        agencyId: invitationExists.agencyId,
                        avatarUrl: user.imageUrl,
                        id: user.id,
                        name: user.firstName + " " + user.lastName,
                        role: invitationExists.role,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    })];
            case 3:
                userDetails = _a.sent();
                return [4 /*yield*/, exports.saveActivityLogsNotification({
                        agencyId: invitationExists === null || invitationExists === void 0 ? void 0 : invitationExists.agencyId,
                        description: "Joined",
                        subaccountId: undefined
                    })];
            case 4:
                _a.sent();
                if (!userDetails) return [3 /*break*/, 7];
                return [4 /*yield*/, server_1.clerkClient.users.updateUserMetadata(user.id, {
                        privateMetadata: {
                            role: userDetails.role || 'SUBACCOUNT_USER'
                        }
                    })];
            case 5:
                _a.sent();
                return [4 /*yield*/, db_1.db.invitation["delete"]({
                        where: { email: userDetails.email }
                    })];
            case 6:
                _a.sent();
                return [2 /*return*/, userDetails.agencyId];
            case 7: return [2 /*return*/, null];
            case 8: return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, db_1.db.user.findUnique({
                    where: {
                        email: user.emailAddresses[0].emailAddress
                    }
                })];
            case 10:
                agency = _a.sent();
                return [2 /*return*/, agency ? agency.agencyId : null];
            case 11: return [2 /*return*/];
        }
    });
}); };
exports.updateAgencyDetails = function (agencyId, agencyDetails) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.db.agency.update({
                    where: {
                        id: agencyId
                    },
                    data: __assign({}, agencyDetails)
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
exports.deleteAgency = function (agencyId) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.db.agency["delete"]({
                    where: {
                        id: agencyId
                    }
                })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
exports.initUser = function (newUser) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, server_1.currentUser()];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/];
                return [4 /*yield*/, db_1.db.user.upsert({
                        where: {
                            id: user.emailAddresses[0].emailAddress
                        },
                        update: newUser,
                        create: {
                            id: user.id,
                            avatarUrl: user.imageUrl,
                            email: user.emailAddresses[0].emailAddress,
                            name: user.firstName + " " + user.lastName,
                            role: newUser.role || 'SUBACCOUNT_USER'
                        }
                    })];
            case 2:
                userData = _a.sent();
                return [4 /*yield*/, server_1.clerkClient.users.updateUserMetadata(user.id, {
                        privateMetadata: {
                            role: newUser.role || 'SUBACCOUNT_USER'
                        }
                    })];
            case 3:
                _a.sent();
                return [2 /*return*/, userData];
        }
    });
}); };
exports.upsertAgency = function (agency, price) { return __awaiter(void 0, void 0, void 0, function () {
    var agencyDetails, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!agency.companyEmail)
                    return [2 /*return*/, null];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, db_1.db.agency.upsert({
                        where: {
                            id: agency.id
                        },
                        update: agency,
                        create: __assign(__assign({ users: {
                                connect: { email: agency.companyEmail }
                            } }, agency), { SidebarOption: {
                                create: [
                                    {
                                        name: 'Dashboard',
                                        icon: 'category',
                                        link: "/agency/" + agency.id
                                    },
                                    {
                                        name: 'Launchpad',
                                        icon: 'clipboardIcon',
                                        link: "/agency/" + agency.id + "/launchpad"
                                    },
                                    {
                                        name: 'Billing',
                                        icon: 'payment',
                                        link: "/agency/" + agency.id + "/billing"
                                    },
                                    {
                                        name: 'Settings',
                                        icon: 'settings',
                                        link: "/agency/" + agency.id + "/settings"
                                    },
                                    {
                                        name: 'Sub Accounts',
                                        icon: 'person',
                                        link: "/agency/" + agency.id + "/all-subaccounts"
                                    },
                                    {
                                        name: 'Team',
                                        icon: 'shield',
                                        link: "/agency/" + agency.id + "/team"
                                    },
                                ]
                            } })
                    })];
            case 2:
                agencyDetails = _a.sent();
                return [2 /*return*/, agencyDetails];
            case 3:
                error_1 = _a.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
