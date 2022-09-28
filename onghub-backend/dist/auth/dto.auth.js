"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpNgoDto = exports.SignUpRegisteredUserDto = exports.SignUpDto = exports.SignInDto = void 0;
const class_validator_1 = require("class-validator");
class SignInDto {
    constructor(usernameOrEmail, password) {
        this.usernameOrEmail = usernameOrEmail;
        this.password = password;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignInDto.prototype, "usernameOrEmail", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);
exports.SignInDto = SignInDto;
class SignUpDto {
    constructor(name, username, password, email, profilePicture) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.profilePicture = profilePicture;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "profilePicture", void 0);
exports.SignUpDto = SignUpDto;
class SignUpRegisteredUserDto extends SignUpDto {
    constructor(name, username, password, ODS, email, profilePicture) {
        super(name, username, password, email, profilePicture);
        this.ODS = ODS;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], SignUpRegisteredUserDto.prototype, "ODS", void 0);
exports.SignUpRegisteredUserDto = SignUpRegisteredUserDto;
class SignUpNgoDto extends SignUpDto {
    constructor(name, username, password, orientation, influenceArea, mission, webPage, email, profilePicture) {
        super(name, username, password, email, profilePicture);
        this.orientation = orientation;
        this.influenceArea = influenceArea;
        this.mission = mission;
        this.webPage = webPage;
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], SignUpNgoDto.prototype, "orientation", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignUpNgoDto.prototype, "influenceArea", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpNgoDto.prototype, "mission", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], SignUpNgoDto.prototype, "webPage", void 0);
exports.SignUpNgoDto = SignUpNgoDto;
//# sourceMappingURL=dto.auth.js.map