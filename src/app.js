"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const api_1 = require("./api");
// create express server
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
(0, api_1.loadApiEndPoints)(app);
app.use((req, res, next) => {
    res.status(404).sendFile(path_1.default.join(__dirname, '../public/404.html'));
});
exports.default = app;
