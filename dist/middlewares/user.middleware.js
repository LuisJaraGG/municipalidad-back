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
exports.deleteUserValidator = exports.updateUserValidator = exports.getUserValidator = exports.createUserValidator = exports.isExistUserByEmail = void 0;
const express_validator_1 = require("express-validator");
const user_model_1 = __importDefault(require("../models/user.model"));
const field_middleware_1 = require("./field.middleware");
const role_middleware_1 = require("./role.middleware");
const isExistUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email }).select('+_id').lean();
    if (user) {
        throw new Error(`El correo ${email} ya está registrado`);
    }
});
exports.isExistUserByEmail = isExistUserByEmail;
const IsNotExistUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findById(id).select('+_id').lean();
    if (!user) {
        throw new Error(`No existe un usuario con el id ${id}`);
    }
});
exports.createUserValidator = [
    (0, express_validator_1.check)('name', 'El nombre es requerido').trim().not().isEmpty().isLength({ min: 3 }),
    (0, express_validator_1.check)('email', 'El correo es requerido').trim().isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es requerida').trim().not().isEmpty().isLength({ min: 6 }),
    (0, express_validator_1.check)('role', 'El rol es requerido').trim().not().isEmpty().isMongoId(),
    (0, express_validator_1.check)('role').custom(role_middleware_1.isNotExistRoleById),
    (0, express_validator_1.check)('email').custom(exports.isExistUserByEmail),
    field_middleware_1.validateFields,
];
exports.getUserValidator = [
    (0, express_validator_1.check)('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
    (0, express_validator_1.check)('id').custom(IsNotExistUserById),
    field_middleware_1.validateFields,
];
exports.updateUserValidator = [
    (0, express_validator_1.check)('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
    (0, express_validator_1.check)('id').custom(IsNotExistUserById),
    field_middleware_1.validateFields,
];
exports.deleteUserValidator = [
    (0, express_validator_1.check)('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
    (0, express_validator_1.check)('id').custom(IsNotExistUserById),
    field_middleware_1.validateFields,
];
