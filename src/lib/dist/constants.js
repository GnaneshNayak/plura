"use strict";
exports.__esModule = true;
exports.defaultStyles = exports.icons = exports.addOnProducts = exports.pricingCards = void 0;
var bar_chart_1 = require("@/components/icons/bar_chart");
var calendar_1 = require("@/components/icons/calendar");
var check_circled_1 = require("@/components/icons/check_circled");
var chip_1 = require("@/components/icons/chip");
var clipboardIcon_1 = require("@/components/icons/clipboardIcon");
var compass_1 = require("@/components/icons/compass");
var database_1 = require("@/components/icons/database");
var flag_1 = require("@/components/icons/flag");
var headphone_1 = require("@/components/icons/headphone");
var home_1 = require("@/components/icons/home");
var info_1 = require("@/components/icons/info");
var link_1 = require("@/components/icons/link");
var lock_1 = require("@/components/icons/lock");
var messages_1 = require("@/components/icons/messages");
var notification_1 = require("@/components/icons/notification");
var payment_1 = require("@/components/icons/payment");
var person_1 = require("@/components/icons/person");
var pipelines_1 = require("@/components/icons/pipelines");
var plura_category_1 = require("@/components/icons/plura-category");
var power_1 = require("@/components/icons/power");
var receipt_1 = require("@/components/icons/receipt");
var send_1 = require("@/components/icons/send");
var settings_1 = require("@/components/icons/settings");
var shield_1 = require("@/components/icons/shield");
var star_1 = require("@/components/icons/star");
var tune_1 = require("@/components/icons/tune");
var video_recorder_1 = require("@/components/icons/video_recorder");
var wallet_1 = require("@/components/icons/wallet");
var warning_1 = require("@/components/icons/warning");
exports.pricingCards = [
    {
        title: 'Starter',
        description: 'Perfect for trying out plura',
        price: 'Free',
        duration: '',
        highlight: 'Key features',
        features: ['3 Sub accounts', '2 Team members', 'Unlimited pipelines'],
        priceId: ''
    },
    {
        title: 'Unlimited Saas',
        description: 'The ultimate agency kit',
        price: '$199',
        duration: 'month',
        highlight: 'Key features',
        features: ['Rebilling', '24/7 Support team'],
        priceId: 'price_1OYxkqFj9oKEERu1KfJGWxgN'
    },
    {
        title: 'Basic',
        description: 'For serious agency owners',
        price: '$49',
        duration: 'month',
        highlight: 'Everything in Starter, plus',
        features: ['Unlimited Sub accounts', 'Unlimited Team members'],
        priceId: 'price_1OYxkqFj9oKEERu1NbKUxXxN'
    },
];
exports.addOnProducts = [
    { title: 'Priority Support', id: 'prod_PNjJAE2EpP16pn' },
];
exports.icons = [
    {
        value: 'chart',
        label: 'Bar Chart',
        path: bar_chart_1["default"]
    },
    {
        value: 'headphone',
        label: 'Headphones',
        path: headphone_1["default"]
    },
    {
        value: 'send',
        label: 'Send',
        path: send_1["default"]
    },
    {
        value: 'pipelines',
        label: 'Pipelines',
        path: pipelines_1["default"]
    },
    {
        value: 'calendar',
        label: 'Calendar',
        path: calendar_1["default"]
    },
    {
        value: 'settings',
        label: 'Settings',
        path: settings_1["default"]
    },
    {
        value: 'check',
        label: 'Check Circled',
        path: check_circled_1["default"]
    },
    {
        value: 'chip',
        label: 'Chip',
        path: chip_1["default"]
    },
    {
        value: 'compass',
        label: 'Compass',
        path: compass_1["default"]
    },
    {
        value: 'database',
        label: 'Database',
        path: database_1["default"]
    },
    {
        value: 'flag',
        label: 'Flag',
        path: flag_1["default"]
    },
    {
        value: 'home',
        label: 'Home',
        path: home_1["default"]
    },
    {
        value: 'info',
        label: 'Info',
        path: info_1["default"]
    },
    {
        value: 'link',
        label: 'Link',
        path: link_1["default"]
    },
    {
        value: 'lock',
        label: 'Lock',
        path: lock_1["default"]
    },
    {
        value: 'messages',
        label: 'Messages',
        path: messages_1["default"]
    },
    {
        value: 'notification',
        label: 'Notification',
        path: notification_1["default"]
    },
    {
        value: 'payment',
        label: 'Payment',
        path: payment_1["default"]
    },
    {
        value: 'power',
        label: 'Power',
        path: power_1["default"]
    },
    {
        value: 'receipt',
        label: 'Receipt',
        path: receipt_1["default"]
    },
    {
        value: 'shield',
        label: 'Shield',
        path: shield_1["default"]
    },
    {
        value: 'star',
        label: 'Star',
        path: star_1["default"]
    },
    {
        value: 'tune',
        label: 'Tune',
        path: tune_1["default"]
    },
    {
        value: 'videorecorder',
        label: 'Video Recorder',
        path: video_recorder_1["default"]
    },
    {
        value: 'wallet',
        label: 'Wallet',
        path: wallet_1["default"]
    },
    {
        value: 'warning',
        label: 'Warning',
        path: warning_1["default"]
    },
    {
        value: 'person',
        label: 'Person',
        path: person_1["default"]
    },
    {
        value: 'category',
        label: 'Category',
        path: plura_category_1["default"]
    },
    {
        value: 'clipboardIcon',
        label: 'Clipboard Icon',
        path: clipboardIcon_1["default"]
    },
];
exports.defaultStyles = {
    backgroundPosition: 'center',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    textAlign: 'left',
    opacity: '100%'
};
