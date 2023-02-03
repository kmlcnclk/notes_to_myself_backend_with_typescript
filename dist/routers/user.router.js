"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _userController = require("../controllers/user.controller");
const _userYup = require("../middlewares/yup/user.yup");
const _validate = /*#__PURE__*/ _interopRequireDefault(require("../middlewares/yup/validate"));
const _auth = require("../middlewares/auth");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const userRouter = _express.default.Router();
userRouter.post("/register", (0, _validate.default)(_userYup.registerSchema), _userController.register);
userRouter.post("/login", (0, _validate.default)(_userYup.loginSchema), _userController.login);
userRouter.get("/logout", [
    _auth.getAccessToRoute
], _userController.logout);
userRouter.get("/profile", [
    _auth.getAccessToRoute
], _userController.profile);
userRouter.put("/update", [
    _auth.getAccessToRoute,
    (0, _validate.default)(_userYup.updateSchema)
], _userController.update);
const _default = userRouter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXJzL3VzZXIucm91dGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzLCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQge1xyXG4gIGxvZ2luLFxyXG4gIHJlZ2lzdGVyLFxyXG4gIGxvZ291dCxcclxuICBwcm9maWxlLFxyXG4gIHVwZGF0ZSxcclxufSBmcm9tICcuLi9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQge1xyXG4gIHJlZ2lzdGVyU2NoZW1hLFxyXG4gIGxvZ2luU2NoZW1hLFxyXG4gIHVwZGF0ZVNjaGVtYSxcclxufSBmcm9tICcuLi9taWRkbGV3YXJlcy95dXAvdXNlci55dXAnO1xyXG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi4vbWlkZGxld2FyZXMveXVwL3ZhbGlkYXRlJztcclxuaW1wb3J0IHsgZ2V0QWNjZXNzVG9Sb3V0ZSB9IGZyb20gJy4uL21pZGRsZXdhcmVzL2F1dGgnO1xyXG5cclxuY29uc3QgdXNlclJvdXRlcjogUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnVzZXJSb3V0ZXIucG9zdCgnL3JlZ2lzdGVyJywgdmFsaWRhdGUocmVnaXN0ZXJTY2hlbWEpLCByZWdpc3Rlcik7XHJcbnVzZXJSb3V0ZXIucG9zdCgnL2xvZ2luJywgdmFsaWRhdGUobG9naW5TY2hlbWEpLCBsb2dpbik7XHJcbnVzZXJSb3V0ZXIuZ2V0KCcvbG9nb3V0JywgW2dldEFjY2Vzc1RvUm91dGVdLCBsb2dvdXQpO1xyXG51c2VyUm91dGVyLmdldCgnL3Byb2ZpbGUnLCBbZ2V0QWNjZXNzVG9Sb3V0ZV0sIHByb2ZpbGUpO1xyXG51c2VyUm91dGVyLnB1dCgnL3VwZGF0ZScsIFtnZXRBY2Nlc3NUb1JvdXRlLCB2YWxpZGF0ZSh1cGRhdGVTY2hlbWEpXSwgdXBkYXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSb3V0ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VyUm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInBvc3QiLCJ2YWxpZGF0ZSIsInJlZ2lzdGVyU2NoZW1hIiwicmVnaXN0ZXIiLCJsb2dpblNjaGVtYSIsImxvZ2luIiwiZ2V0IiwiZ2V0QWNjZXNzVG9Sb3V0ZSIsImxvZ291dCIsInByb2ZpbGUiLCJwdXQiLCJ1cGRhdGVTY2hlbWEiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBd0JBOzthQUFBOzs4REF4QmdDO2dDQU96Qjt5QkFLQTsrREFDYztzQkFDWTs7Ozs7O0FBRWpDLE1BQU1BLGFBQXFCQyxnQkFBTyxDQUFDQyxNQUFNO0FBRXpDRixXQUFXRyxJQUFJLENBQUMsYUFBYUMsSUFBQUEsaUJBQVEsRUFBQ0MsdUJBQWMsR0FBR0Msd0JBQVE7QUFDL0ROLFdBQVdHLElBQUksQ0FBQyxVQUFVQyxJQUFBQSxpQkFBUSxFQUFDRyxvQkFBVyxHQUFHQyxxQkFBSztBQUN0RFIsV0FBV1MsR0FBRyxDQUFDLFdBQVc7SUFBQ0Msc0JBQWdCO0NBQUMsRUFBRUMsc0JBQU07QUFDcERYLFdBQVdTLEdBQUcsQ0FBQyxZQUFZO0lBQUNDLHNCQUFnQjtDQUFDLEVBQUVFLHVCQUFPO0FBQ3REWixXQUFXYSxHQUFHLENBQUMsV0FBVztJQUFDSCxzQkFBZ0I7SUFBRU4sSUFBQUEsaUJBQVEsRUFBQ1UscUJBQVk7Q0FBRSxFQUFFQyxzQkFBTTtNQUU1RSxXQUFlZiJ9