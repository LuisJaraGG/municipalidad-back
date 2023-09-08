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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
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
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { password, state } = req.body;
    try {
        let user;
        if ((password && password !== '') || state) {
            user = yield user_model_1.default.findById(id);
            if (password && password !== '') {
                user.password = password;
            }
            if (state) {
                user.state = true;
            }
            yield (user === null || user === void 0 ? void 0 : user.save());
        }
        else {
            user = yield user_model_1.default.findById(id);
            (user === null || user === void 0 ? void 0 : user.name) && (user.name = req.body.name);
            (user === null || user === void 0 ? void 0 : user.email) && (user.email = req.body.email);
            (user === null || user === void 0 ? void 0 : user.role) && (user.role = req.body.role);
            (user === null || user === void 0 ? void 0 : user.imageURL) && (user.imageURL = req.body.imageURL);
            yield (user === null || user === void 0 ? void 0 : user.save());
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
