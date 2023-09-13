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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.createClient = exports.getClient = exports.getClients = void 0;
const models_1 = require("../models");
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield models_1.Client.find().select('-createdAt -updatedAt -__v').lean();
        return res.json({
            ok: true,
            clients,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getClients = getClients;
const getClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const client = yield models_1.Client.findById(id).select('-createdAt -updatedAt -__v').lean();
        return res.json({
            ok: true,
            client,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.getClient = getClient;
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield models_1.Client.create(req.body);
        return res.json({
            ok: true,
            client,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.createClient = createClient;
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const client = yield models_1.Client.findByIdAndUpdate(id, req.body, { new: true })
            .select('-createdAt -updatedAt -__v')
            .lean();
        return res.json({
            ok: true,
            client,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.updateClient = updateClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield models_1.Client.findByIdAndDelete(id);
        return res.json({
            ok: true,
        });
    }
    catch (error) {
        return res.json({ ok: false, message: 'Error interno del servidor' });
    }
});
exports.deleteClient = deleteClient;
