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
exports.seedData = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const models_1 = require("../models");
function seedData(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (process.env.NODE_ENV === 'production') {
                return new Response('No tiene permisos', { status: 401 });
            }
            yield Promise.all([models_1.Role.deleteMany(), models_1.User.deleteMany()]);
            //Roles
            const roles = yield models_1.Role.insertMany([
                { name: 'Administrador' },
                { name: 'Super Usuario' },
                { name: 'Usuario' },
            ]);
            //Usuarios
            yield models_1.User.insertMany([
                {
                    name: 'Administrador',
                    email: 'admin@test.com',
                    password: bcrypt_1.default.hashSync('password', 10),
                    role: roles[0]._id,
                    address: 'Calle 123',
                },
                {
                    name: 'Super Usuario',
                    email: 'superusuario@test.com',
                    password: bcrypt_1.default.hashSync('password', 10),
                    role: roles[1]._id,
                    address: 'Calle 123',
                },
                {
                    name: 'Usuario',
                    email: 'usuario@test.com',
                    password: bcrypt_1.default.hashSync('password', 10),
                    role: roles[2]._id,
                    address: 'Calle 123',
                },
            ]);
            return res.status(200).json({ message: 'Seed ejecutado correctamente' });
        }
        catch (error) {
            return res.status(500).json({ message: 'Error al ejecutar el seed' });
        }
    });
}
exports.seedData = seedData;
