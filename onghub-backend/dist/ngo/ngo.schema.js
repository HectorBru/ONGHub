"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgoSchema = exports.Ngo = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const enums_1 = require("../enums");
const user_model_1 = require("../users/user.model");
let Ngo = class Ngo extends user_model_1.User {};
__decorate(
  [
    (0, mongoose_1.Prop)({
      type: [String],
      enum: enums_1.Orientation,
      required: true,
    }),
    __metadata("design:type", Array),
  ],
  Ngo.prototype,
  "orientation",
  void 0
);
__decorate(
  [
    (0, mongoose_1.Prop)({
      type: [String],
      enum: enums_1.InfluenceArea,
      required: true,
    }),
    __metadata("design:type", Number),
  ],
  Ngo.prototype,
  "influenceArea",
  void 0
);
__decorate(
  [(0, mongoose_1.Prop)({ required: true }), __metadata("design:type", String)],
  Ngo.prototype,
  "mision",
  void 0
);
__decorate(
  [(0, mongoose_1.Prop)({ required: true }), __metadata("design:type", Array)],
  Ngo.prototype,
  "paginaWeb",
  void 0
);
__decorate(
  [
    (0, mongoose_1.Prop)({
      type: [
        {
          type: mongoose_2.default.Schema.Types.ObjectId,
          ref: "RegisteredUser",
        },
      ],
    }),
    __metadata("design:type", Array),
  ],
  Ngo.prototype,
  "suscribed_users",
  void 0
);
Ngo = __decorate([(0, mongoose_1.Schema)()], Ngo);
exports.Ngo = Ngo;
exports.NgoSchema = mongoose_1.SchemaFactory.createForClass(Ngo);
//# sourceMappingURL=ngo.schema.js.map
