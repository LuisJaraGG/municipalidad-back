"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.get('/', controllers_1.getProviders);
router.get('/:id', middlewares_1.getProviderValidator, controllers_1.getProvider);
router.post('/', middlewares_1.createProviderValidator, controllers_1.createProvider);
router.patch('/:id', middlewares_1.getProviderValidator, controllers_1.updateProvider);
router.delete('/:id', middlewares_1.getProviderValidator, controllers_1.deleteProvider);
exports.default = router;
