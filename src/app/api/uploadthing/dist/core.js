"use strict";
exports.__esModule = true;
exports.FileRouter = exports.satisfies = exports.ourFileRouter = void 0;
var server_1 = require("@clerk/nextjs/server");
var next_1 = require("uploadthing/next");
var f = next_1.createUploadthing();
var authenticateUser = function () {
    var user = server_1.auth();
    // If you throw, the user will not be able to upload
    if (!user)
        throw new Error('Unauthorized');
    // Whatever is returned here is accessible in onUploadComplete as `metadata`
    return user;
};
// FileRouter for your app, can contain multiple FileRoutes
exports.ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    subaccountLogo: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(function () { }),
    avatar: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(function () { }),
    agencyLogo: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(function () { }),
    media: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
        .middleware(authenticateUser)
        .onUploadComplete(function () { })
};
