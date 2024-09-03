'use client';
"use strict";
exports.__esModule = true;
exports.ModeToggle = void 0;
var React = require("react");
var lucide_react_1 = require("lucide-react");
var next_themes_1 = require("next-themes");
var button_1 = require("@/components/ui/button");
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
function ModeToggle() {
    var setTheme = next_themes_1.useTheme().setTheme;
    return (React.createElement(dropdown_menu_1.DropdownMenu, null,
        React.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
            React.createElement(button_1.Button, { variant: "outline", size: "icon" },
                React.createElement(lucide_react_1.Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
                React.createElement(lucide_react_1.Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
                React.createElement("span", { className: "sr-only" }, "Toggle theme"))),
        React.createElement(dropdown_menu_1.DropdownMenuContent, { align: "end" },
            React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return setTheme('light'); } }, "Light"),
            React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return setTheme('dark'); } }, "Dark"),
            React.createElement(dropdown_menu_1.DropdownMenuItem, { onClick: function () { return setTheme('system'); } }, "System"))));
}
exports.ModeToggle = ModeToggle;
