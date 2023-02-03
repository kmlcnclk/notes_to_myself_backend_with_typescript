"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _userRouter = /*#__PURE__*/ _interopRequireDefault(require("./user.router"));
const _noteRouter = /*#__PURE__*/ _interopRequireDefault(require("./note.router"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const mainRouter = _express.default.Router();
mainRouter.use("/user", _userRouter.default);
mainRouter.use("/note", _noteRouter.default);
const _default = mainRouter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXJzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgdXNlclJvdXRlciBmcm9tICcuL3VzZXIucm91dGVyJztcclxuaW1wb3J0IG5vdGVSb3V0ZXIgZnJvbSAnLi9ub3RlLnJvdXRlcic7XHJcblxyXG5jb25zdCBtYWluUm91dGVyOiBSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxubWFpblJvdXRlci51c2UoJy91c2VyJywgdXNlclJvdXRlcik7XHJcbm1haW5Sb3V0ZXIudXNlKCcvbm90ZScsIG5vdGVSb3V0ZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpblJvdXRlcjtcclxuIl0sIm5hbWVzIjpbIm1haW5Sb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwidXNlIiwidXNlclJvdXRlciIsIm5vdGVSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7O2FBQUE7OzhEQVRnQztpRUFDVDtpRUFDQTs7Ozs7O0FBRXZCLE1BQU1BLGFBQXFCQyxnQkFBTyxDQUFDQyxNQUFNO0FBRXpDRixXQUFXRyxHQUFHLENBQUMsU0FBU0MsbUJBQVU7QUFDbENKLFdBQVdHLEdBQUcsQ0FBQyxTQUFTRSxtQkFBVTtNQUVsQyxXQUFlTCJ9