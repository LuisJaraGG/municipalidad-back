"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Role = exports.Client = exports.Auth = void 0;
var auth_route_1 = require("./auth.route");
Object.defineProperty(exports, "Auth", { enumerable: true, get: function () { return __importDefault(auth_route_1).default; } });
var client_route_1 = require("./client.route");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return __importDefault(client_route_1).default; } });
var role_route_1 = require("./role.route");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return __importDefault(role_route_1).default; } });
var user_route_1 = require("./user.route");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return __importDefault(user_route_1).default; } });
