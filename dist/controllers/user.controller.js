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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.updateProfileUser = exports.updateStateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find()
            .select('-password -createdAt -updatedAt -__v')
            .populate('role', 'name')
            .lean();
        return res.json({
            ok: true,
            users,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_model_1.default.findById(id)
            .select('-password -createdAt -updatedAt -__v')
            .populate('role', 'name')
            .lean();
        return res.json({
            ok: true,
            user,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.create(req.body);
        return res.json({
            ok: true,
            user,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.createUser = createUser;
const updateStateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { state } = req.body;
    const { id } = req.params;
    try {
        const user = yield user_model_1.default.findByIdAndUpdate(id, { state: state }, { new: true })
            .select('-password -createdAt -updatedAt -__v')
            .lean();
        return res.json({
            ok: true,
            user,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.updateStateUser = updateStateUser;
const updateProfileUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { password } = _a, updateBody = __rest(_a, ["password"]);
    let user;
    try {
        user = yield user_model_1.default.findById(id)
            .select('-password -createdAt -updatedAt -__v')
            .populate('role', 'name');
        if (password && password !== '') {
            if (password && password !== '') {
                user.password = password;
            }
            yield (user === null || user === void 0 ? void 0 : user.save());
        }
        else {
            user = yield user_model_1.default.findByIdAndUpdate(id, updateBody, { new: true })
                .select('-password -createdAt -updatedAt -__v')
                .populate('role', 'name')
                .lean();
        }
        return res.json({
            ok: true,
            user,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.updateProfileUser = updateProfileUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { password } = _b, updateBody = __rest(_b, ["password"]);
    let user;
    try {
        user = yield user_model_1.default.findById(id).select('-password -createdAt -updatedAt -__v');
        if (password && password !== '') {
            if (password && password !== '') {
                user.password = password;
            }
            yield (user === null || user === void 0 ? void 0 : user.save());
        }
        else {
            user = yield user_model_1.default.findByIdAndUpdate(id, updateBody, { new: true })
                .select('-password -createdAt -updatedAt -__v')
                .lean();
        }
        return res.json({
            ok: true,
            user,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield user_model_1.default.findByIdAndUpdate(id, { state: false });
        return res.json({
            ok: true,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.deleteUser = deleteUser;
