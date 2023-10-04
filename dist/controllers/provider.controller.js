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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProvider = exports.updateProvider = exports.createProvider = exports.getProvider = exports.getProviders = void 0;
const models_1 = require("../models");
const getProviders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const providers = yield models_1.Provider.find().select('-createdAt -updatedAt -__v').lean();
        return res.json({
            ok: true,
            providers,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getProviders = getProviders;
const getProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const provider = yield models_1.Provider.findById(id).select('-createdAt -updatedAt -__v').lean();
        return res.json({
            ok: true,
            provider,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getProvider = getProvider;
const createProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { state } = _a, resBody = __rest(_a, ["state"]);
    try {
        const provider = yield models_1.Provider.create(Object.assign(Object.assign({}, resBody), { state: state === 'ACTIVO' ? true : false }));
        return res.json({
            ok: true,
            provider,
        });
    }
    catch (error) {
        console.log(error);
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.createProvider = createProvider;
const updateProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { state } = _b, resBody = __rest(_b, ["state"]);
    try {
        const provider = yield models_1.Provider.findByIdAndUpdate(id, Object.assign(Object.assign({}, resBody), { state: state === 'ACTIVO' ? true : false }), { new: true })
            .select('-createdAt -updatedAt -__v')
            .lean();
        return res.json({
            ok: true,
            provider,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.updateProvider = updateProvider;
const deleteProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield models_1.Provider.findByIdAndDelete(id);
        return res.json({
            ok: true,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.deleteProvider = deleteProvider;
