"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var theme_provider_1 = require("@/providers/theme-provider");
var google_1 = require("next/font/google");
require("./globals.css");
var modal_provider_1 = require("@/providers/modal-provider");
var toaster_1 = require("@/components/ui/toaster");
var inter = google_1.DM_Sans({ subsets: ['latin'] });
exports.metadata = {
    title: 'Plura',
    description: 'All in one Agency Solution'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement("html", { lang: "en", suppressHydrationWarning: true },
            React.createElement("head", null),
            React.createElement("body", null,
                React.createElement(theme_provider_1.ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true },
                    React.createElement(modal_provider_1["default"], null,
                        children,
                        React.createElement(toaster_1.Toaster, null)))))));
}
exports["default"] = RootLayout;
