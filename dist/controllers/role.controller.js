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
exports.deleteRole = exports.updateRole = exports.getRole = exports.getRoles = exports.createRole = void 0;
const role_model_1 = __importDefault(require("../models/role.model"));
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const role = yield role_model_1.default.create({ name });
        res.status(201).json({
            ok: true,
            role,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.createRole = createRole;
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield role_model_1.default.find().select('-createdAt -updatedAt -__v').lean();
        return res.json({
            ok: true,
            roles,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getRoles = getRoles;
const getRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const role = yield role_model_1.default.findById(id).select('-createdAt -updatedAt -__v').lean();
        return res.json({
            ok: true,
            role,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getRole = getRole;
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const roleUpdated = yield role_model_1.default.findByIdAndUpdate(id, req.body, { new: true })
            .select('-createdAt -updatedAt -__v')
            .lean();
        return res.json({
            ok: true,
            role: roleUpdated,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.updateRole = updateRole;
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield role_model_1.default.findByIdAndUpdate(id, { state: false });
        return res.json({
            ok: true,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.deleteRole = deleteRole;
