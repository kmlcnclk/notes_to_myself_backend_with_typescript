"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    register: ()=>register,
    login: ()=>login,
    logout: ()=>logout,
    profile: ()=>profile,
    update: ()=>update
});
const _userModel = /*#__PURE__*/ _interopRequireDefault(require("../databases/models/User.model"));
const _customError = /*#__PURE__*/ _interopRequireDefault(require("../helpers/errors/CustomError"));
const _expressAsyncHandler = /*#__PURE__*/ _interopRequireDefault(require("express-async-handler"));
const _passwordHelper = require("../helpers/auth/password.helper");
const _tokenHelper = require("../helpers/auth/token.helper");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const register = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    const { firstName , lastName , email , password  } = req.body;
    try {
        const user = await _userModel.default.create({
            firstName,
            lastName,
            email,
            password
        });
        (0, _tokenHelper.sendJwtToClient)(user, res, "register");
    } catch (err) {
        return next(new _customError.default("This email has already taken", 400));
    }
});
const login = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    const { email , password  } = req.body;
    const user = await _userModel.default.findOne({
        email
    }).select("+password");
    if (!user) {
        return next(new _customError.default("This user is not available", 404));
    }
    if (!(0, _passwordHelper.comparePassword)(password, user.password)) {
        return next(new _customError.default("Your password is not correct", 400));
    }
    (0, _tokenHelper.sendJwtToClient)(user, res, "login");
});
const logout = (0, _expressAsyncHandler.default)((req, res)=>{
    const { NODE_ENV  } = process.env;
    res.status(200).clearCookie("access_token")// @ts-ignore
    .cookie({
        httpOnly: true,
        expires: new Date(Date.now()),
        secure: NODE_ENV === "development" ? false : true
    }).json({
        success: true,
        message: "Logout Successful"
    });
});
const profile = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    // @ts-ignore
    const { id  } = req.user;
    const user = await _userModel.default.findById(id);
    if (!user) {
        return next(new _customError.default("This user is not available", 400));
    }
    return res.status(200).json({
        success: true,
        user
    });
});
const update = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    const { firstName , lastName , email , password  } = req.body;
    // @ts-ignore
    const { id  } = req.user;
    const user = await _userModel.default.findById(id);
    if (!user) {
        return next(new _customError.default("This user is not available", 404));
    }
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (email) {
        user.email = email;
    }
    if (password) {
        user.password = password;
    }
    await user.save();
    return res.status(200).json({
        success: true,
        message: "User successfully updated"
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9kYXRhYmFzZXMvbW9kZWxzL1VzZXIubW9kZWwnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnLi4vaGVscGVycy9lcnJvcnMvQ3VzdG9tRXJyb3InO1xyXG5pbXBvcnQgZXhwcmVzc0FzeW5jSGFuZGxlciBmcm9tICdleHByZXNzLWFzeW5jLWhhbmRsZXInO1xyXG5pbXBvcnQgeyBjb21wYXJlUGFzc3dvcmQgfSBmcm9tICcuLi9oZWxwZXJzL2F1dGgvcGFzc3dvcmQuaGVscGVyJztcclxuaW1wb3J0IHsgc2VuZEp3dFRvQ2xpZW50IH0gZnJvbSAnLi4vaGVscGVycy9hdXRoL3Rva2VuLmhlbHBlcic7XHJcblxyXG4vLyBSZWdpc3RlclxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgZmlyc3ROYW1lLFxyXG4gICAgICAgIGxhc3ROYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNlbmRKd3RUb0NsaWVudCh1c2VyLCByZXMsICdyZWdpc3RlcicpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KG5ldyBDdXN0b21FcnJvcignVGhpcyBlbWFpbCBoYXMgYWxyZWFkeSB0YWtlbicsIDQwMCkpO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbi8vIExvZ2luXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGV4cHJlc3NBc3luY0hhbmRsZXIoXHJcbiAgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pLnNlbGVjdCgnK3Bhc3N3b3JkJyk7XHJcblxyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KG5ldyBDdXN0b21FcnJvcignVGhpcyB1c2VyIGlzIG5vdCBhdmFpbGFibGUnLCA0MDQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgdXNlci5wYXNzd29yZCkpIHtcclxuICAgICAgcmV0dXJuIG5leHQobmV3IEN1c3RvbUVycm9yKCdZb3VyIHBhc3N3b3JkIGlzIG5vdCBjb3JyZWN0JywgNDAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZEp3dFRvQ2xpZW50KHVzZXIsIHJlcywgJ2xvZ2luJyk7XHJcbiAgfVxyXG4pO1xyXG5cclxuLy8gTG9nb3V0XHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBleHByZXNzQXN5bmNIYW5kbGVyKChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICBjb25zdCB7IE5PREVfRU5WIH0gPSBwcm9jZXNzLmVudjtcclxuXHJcbiAgcmVzXHJcbiAgICAuc3RhdHVzKDIwMClcclxuICAgIC5jbGVhckNvb2tpZSgnYWNjZXNzX3Rva2VuJylcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIC5jb29raWUoe1xyXG4gICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgZXhwaXJlczogbmV3IERhdGUoRGF0ZS5ub3coKSksXHJcbiAgICAgIHNlY3VyZTogTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBmYWxzZSA6IHRydWUsXHJcbiAgICB9KVxyXG4gICAgLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnTG9nb3V0IFN1Y2Nlc3NmdWwnLFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gUHJvZmlsZVxyXG5leHBvcnQgY29uc3QgcHJvZmlsZSA9IGV4cHJlc3NBc3luY0hhbmRsZXIoXHJcbiAgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGlkKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIG5leHQobmV3IEN1c3RvbUVycm9yKCdUaGlzIHVzZXIgaXMgbm90IGF2YWlsYWJsZScsIDQwMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIHVzZXIsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBSZWdpc3RlclxyXG5leHBvcnQgY29uc3QgdXBkYXRlID0gZXhwcmVzc0FzeW5jSGFuZGxlcihcclxuICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnVzZXI7XHJcblxyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZEJ5SWQoaWQpO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gbmV4dChuZXcgQ3VzdG9tRXJyb3IoJ1RoaXMgdXNlciBpcyBub3QgYXZhaWxhYmxlJywgNDA0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpcnN0TmFtZSkge1xyXG4gICAgICB1c2VyLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgIH1cclxuICAgIGlmIChsYXN0TmFtZSkge1xyXG4gICAgICB1c2VyLmxhc3ROYW1lID0gbGFzdE5hbWU7XHJcbiAgICB9XHJcbiAgICBpZiAoZW1haWwpIHtcclxuICAgICAgdXNlci5lbWFpbCA9IGVtYWlsO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHVzZXIucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnVXNlciBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcbiJdLCJuYW1lcyI6WyJyZWdpc3RlciIsImxvZ2luIiwibG9nb3V0IiwicHJvZmlsZSIsInVwZGF0ZSIsImV4cHJlc3NBc3luY0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInVzZXIiLCJVc2VyIiwiY3JlYXRlIiwic2VuZEp3dFRvQ2xpZW50IiwiZXJyIiwiQ3VzdG9tRXJyb3IiLCJmaW5kT25lIiwic2VsZWN0IiwiY29tcGFyZVBhc3N3b3JkIiwiTk9ERV9FTlYiLCJwcm9jZXNzIiwiZW52Iiwic3RhdHVzIiwiY2xlYXJDb29raWUiLCJjb29raWUiLCJodHRwT25seSIsImV4cGlyZXMiLCJEYXRlIiwibm93Iiwic2VjdXJlIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiaWQiLCJmaW5kQnlJZCIsInNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUWFBLFFBQVEsTUFBUkE7SUFvQkFDLEtBQUssTUFBTEE7SUFtQkFDLE1BQU0sTUFBTkE7SUFtQkFDLE9BQU8sTUFBUEE7SUFtQkFDLE1BQU0sTUFBTkE7O2dFQXBGSTtrRUFDTzswRUFDUTtnQ0FDQTs2QkFDQTs7Ozs7O0FBR3pCLE1BQU1KLFdBQVdLLElBQUFBLDRCQUFtQixFQUN6QyxPQUFPQyxLQUFjQyxLQUFlQyxPQUF1QjtJQUN6RCxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHTixJQUFJTyxJQUFJO0lBRXpELElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1DLGtCQUFJLENBQUNDLE1BQU0sQ0FBQztZQUM3QlA7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjtRQUVBSyxJQUFBQSw0QkFBZSxFQUFDSCxNQUFNUCxLQUFLO0lBQzdCLEVBQUUsT0FBT1csS0FBSztRQUNaLE9BQU9WLEtBQUssSUFBSVcsb0JBQVcsQ0FBQyxnQ0FBZ0M7SUFDOUQ7QUFDRjtBQUlLLE1BQU1sQixRQUFRSSxJQUFBQSw0QkFBbUIsRUFDdEMsT0FBT0MsS0FBY0MsS0FBZUMsT0FBdUI7SUFDekQsTUFBTSxFQUFFRyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHTixJQUFJTyxJQUFJO0lBRXBDLE1BQU1DLE9BQU8sTUFBTUMsa0JBQUksQ0FBQ0ssT0FBTyxDQUFDO1FBQUVUO0lBQU0sR0FBR1UsTUFBTSxDQUFDO0lBRWxELElBQUksQ0FBQ1AsTUFBTTtRQUNULE9BQU9OLEtBQUssSUFBSVcsb0JBQVcsQ0FBQyw4QkFBOEI7SUFDNUQsQ0FBQztJQUVELElBQUksQ0FBQ0csSUFBQUEsK0JBQWUsRUFBQ1YsVUFBVUUsS0FBS0YsUUFBUSxHQUFHO1FBQzdDLE9BQU9KLEtBQUssSUFBSVcsb0JBQVcsQ0FBQyxnQ0FBZ0M7SUFDOUQsQ0FBQztJQUVERixJQUFBQSw0QkFBZSxFQUFDSCxNQUFNUCxLQUFLO0FBQzdCO0FBSUssTUFBTUwsU0FBU0csSUFBQUEsNEJBQW1CLEVBQUMsQ0FBQ0MsS0FBY0MsTUFBa0I7SUFDekUsTUFBTSxFQUFFZ0IsU0FBUSxFQUFFLEdBQUdDLFFBQVFDLEdBQUc7SUFFaENsQixJQUNHbUIsTUFBTSxDQUFDLEtBQ1BDLFdBQVcsQ0FBQyxlQUNiLGFBQWE7S0FDWkMsTUFBTSxDQUFDO1FBQ05DLFVBQVUsSUFBSTtRQUNkQyxTQUFTLElBQUlDLEtBQUtBLEtBQUtDLEdBQUc7UUFDMUJDLFFBQVFWLGFBQWEsZ0JBQWdCLEtBQUssR0FBRyxJQUFJO0lBQ25ELEdBQ0NXLElBQUksQ0FBQztRQUNKQyxTQUFTLElBQUk7UUFDYkMsU0FBUztJQUNYO0FBQ0o7QUFHTyxNQUFNakMsVUFBVUUsSUFBQUEsNEJBQW1CLEVBQ3hDLE9BQU9DLEtBQWNDLEtBQWVDLE9BQXFDO0lBQ3ZFLGFBQWE7SUFDYixNQUFNLEVBQUU2QixHQUFFLEVBQUUsR0FBRy9CLElBQUlRLElBQUk7SUFFdkIsTUFBTUEsT0FBTyxNQUFNQyxrQkFBSSxDQUFDdUIsUUFBUSxDQUFDRDtJQUVqQyxJQUFJLENBQUN2QixNQUFNO1FBQ1QsT0FBT04sS0FBSyxJQUFJVyxvQkFBVyxDQUFDLDhCQUE4QjtJQUM1RCxDQUFDO0lBRUQsT0FBT1osSUFBSW1CLE1BQU0sQ0FBQyxLQUFLUSxJQUFJLENBQUM7UUFDMUJDLFNBQVMsSUFBSTtRQUNickI7SUFDRjtBQUNGO0FBSUssTUFBTVYsU0FBU0MsSUFBQUEsNEJBQW1CLEVBQ3ZDLE9BQU9DLEtBQWNDLEtBQWVDLE9BQXFDO0lBQ3ZFLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdOLElBQUlPLElBQUk7SUFDekQsYUFBYTtJQUNiLE1BQU0sRUFBRXdCLEdBQUUsRUFBRSxHQUFHL0IsSUFBSVEsSUFBSTtJQUV2QixNQUFNQSxPQUFPLE1BQU1DLGtCQUFJLENBQUN1QixRQUFRLENBQUNEO0lBRWpDLElBQUksQ0FBQ3ZCLE1BQU07UUFDVCxPQUFPTixLQUFLLElBQUlXLG9CQUFXLENBQUMsOEJBQThCO0lBQzVELENBQUM7SUFFRCxJQUFJVixXQUFXO1FBQ2JLLEtBQUtMLFNBQVMsR0FBR0E7SUFDbkIsQ0FBQztJQUNELElBQUlDLFVBQVU7UUFDWkksS0FBS0osUUFBUSxHQUFHQTtJQUNsQixDQUFDO0lBQ0QsSUFBSUMsT0FBTztRQUNURyxLQUFLSCxLQUFLLEdBQUdBO0lBQ2YsQ0FBQztJQUNELElBQUlDLFVBQVU7UUFDWkUsS0FBS0YsUUFBUSxHQUFHQTtJQUNsQixDQUFDO0lBRUQsTUFBTUUsS0FBS3lCLElBQUk7SUFFZixPQUFPaEMsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLUSxJQUFJLENBQUM7UUFDMUJDLFNBQVMsSUFBSTtRQUNiQyxTQUFTO0lBQ1g7QUFDRiJ9