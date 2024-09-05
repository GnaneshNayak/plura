"use strict";
exports.__esModule = true;
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var Spotlight_1 = require("@/components/ui/Spotlight");
var constants_1 = require("@/lib/constants");
var clsx_1 = require("clsx");
var lucide_react_1 = require("lucide-react");
var image_1 = require("next/image");
var link_1 = require("next/link");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "h-screen  w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] bg-white antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative overflow-hidden flex-col" },
            React.createElement("div", null,
                React.createElement(Spotlight_1.Spotlight, { className: "-top-40 left-0 hidden md:block md:left-60 md:-top-20", fill: "white" }),
                React.createElement("div", { className: "absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" }),
                React.createElement("section", { className: "h-full w-full md:pt-44 mt-[70px] relative flex items-center justify-center flex-col " },
                    React.createElement("div", { className: "absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" }),
                    React.createElement("h2", { className: "text-center mt-20" }, "Run your agency, in one place"),
                    React.createElement("div", { className: "bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative" },
                        React.createElement("h1", { className: "text-9xl font-bold text-center md:text-[300px]" },
                            React.createElement("div", { className: "a bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]" },
                                React.createElement("span", { className: "" }, "Plura")))),
                    React.createElement("div", { className: "flex justify-center items-center relative md:mt-[-70px]" },
                        React.createElement(image_1["default"], { src: '/assets/preview.png', alt: "banner image", height: 1200, width: 1200, className: "rounded-tl-2xl rounded-tr-2xl border-2 border-muted" }),
                        React.createElement("div", { className: "bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10" })))),
            React.createElement("section", { className: "flex justify-center items-center flex-col md:!mt-20 mt-[40px] " },
                React.createElement("h2", { className: "text-4xl text-center" }, "Choose what fits you right"),
                React.createElement("p", { className: "text-muted-foreground text-center" },
                    "Our straight forward pricing plans are tailored to meet your needs. If",
                    " your're",
                    " not ",
                    React.createElement("br", null),
                    "ready to commit you can get started for free."),
                React.createElement("div", { className: "flex  justify-center gap-4 flex-wrap mt-6 mb-20" }, constants_1.pricingCards.map(function (card) { return (
                //WIP: wire up the free product from the stripe
                React.createElement(card_1.Card, { key: card.title, className: clsx_1["default"]('w-[300px] flex flex-col justify-between', {
                        '!text-white  bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl  ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent ': card.title === 'Unlimited Saas'
                    }) },
                    React.createElement(card_1.CardHeader, null,
                        React.createElement(card_1.CardTitle, { className: clsx_1["default"]('', {
                                'text-muted-foreground ': card.title !== 'Unlimited Saas'
                            }) }, card.title),
                        React.createElement(card_1.CardDescription, null, card.description)),
                    React.createElement(card_1.CardContent, null,
                        React.createElement("span", { 
                            // className=""
                            className: clsx_1["default"]('text-gray-900 text-4xl font-bold tracking-tight dark:text-white', {
                                'text-white': card.title === 'Unlimited Saas'
                            }) },
                            card.price,
                            card.price !== 'Free' && '/mo')),
                    React.createElement(card_1.CardFooter, { className: "flex flex-col items-start gap-4" },
                        React.createElement("div", null, card.features.map(function (feature) { return (React.createElement("div", { key: feature, className: "flex items-center gap-2" },
                            React.createElement(lucide_react_1.CircleCheck, { className: "text-emerald-400 h-6 w-5 flex-none" }),
                            React.createElement("p", null, feature))); })),
                        React.createElement(link_1["default"], { href: "/agency?plan=" + card.priceId, className: "w-full" },
                            React.createElement(button_1.Button, { variant: "ghost", className: clsx_1["default"](' text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full', {
                                    'bg-emerald-500 text-white hover:bg-emerald-400': card.title === 'Unlimited Saas'
                                }) }, "Get Started"))))); }))))));
}
exports["default"] = Home;
