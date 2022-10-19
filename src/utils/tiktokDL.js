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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tiktokDL = void 0;
const axios_1 = __importDefault(require("axios"));
function tiktokDL(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const domain = 'https://www.tikwm.com';
        // 👇️ const data: tiktokDLResponse
        const { data } = yield axios_1.default.post(domain + '/api/', { url, count: 12, cursor: 0, web: 1, hd: 1 }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                Accept: 'application/json, text/javascript, */*; q=0.01',
            },
        });
        return {
            nowm: domain + data.data.play,
            wm: domain + data.data.wmplay,
            music: domain + data.data.music
        };
    });
}
exports.tiktokDL = tiktokDL;
