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
    getAccessToRoute: ()=>getAccessToRoute,
    isUserAvailable: ()=>isUserAvailable
});
const _expressAsyncHandler = /*#__PURE__*/ _interopRequireDefault(require("express-async-handler"));
const _tokenHelper = require("../../helpers/auth/token.helper");
const _customError = /*#__PURE__*/ _interopRequireDefault(require("../../helpers/errors/CustomError"));
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _userModel = /*#__PURE__*/ _interopRequireDefault(require("../../databases/models/User.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const getAccessToRoute = (req, res, next)=>{
    const { JSON_SECRET_KEY  } = process.env;
    if (!(0, _tokenHelper.isTokenIncluded)(req)) {
        return next(new _customError.default("You are not authorized to access this route", 401));
    }
    const accessToken = (0, _tokenHelper.getAccessTokenFromHeader)(req);
    _jsonwebtoken.default.verify(accessToken, JSON_SECRET_KEY, (err, decoded)=>{
        if (err) {
            return next(new _customError.default("You are not authorized to access this route", 401));
        }
        //@ts-ignore
        req.user = {
            id: decoded.id,
            email: decoded.email
        };
        next();
    });
};
const isUserAvailable = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    // @ts-ignore
    const { id  } = req.user;
    const user = await _userModel.default.findById(id);
    if (!user) {
        return next(new _customError.default("This user is not available", 404));
    }
    next();
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9hdXRoL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBleHByZXNzQXN5bmNIYW5kbGVyIGZyb20gJ2V4cHJlc3MtYXN5bmMtaGFuZGxlcic7XG5pbXBvcnQge1xuICBpc1Rva2VuSW5jbHVkZWQsXG4gIGdldEFjY2Vzc1Rva2VuRnJvbUhlYWRlcixcbn0gZnJvbSAnLi4vLi4vaGVscGVycy9hdXRoL3Rva2VuLmhlbHBlcic7XG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnLi4vLi4vaGVscGVycy9lcnJvcnMvQ3VzdG9tRXJyb3InO1xuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vZGF0YWJhc2VzL21vZGVscy9Vc2VyLm1vZGVsJztcblxuLy8gR2V0IGFjY2VzcyB0byByb3V0ZVxuZXhwb3J0IGNvbnN0IGdldEFjY2Vzc1RvUm91dGUgPSAoXG4gIHJlcTogUmVxdWVzdCxcbiAgcmVzOiBSZXNwb25zZSxcbiAgbmV4dDogTmV4dEZ1bmN0aW9uXG4pID0+IHtcbiAgY29uc3QgeyBKU09OX1NFQ1JFVF9LRVkgfSA9IHByb2Nlc3MuZW52O1xuXG4gIGlmICghaXNUb2tlbkluY2x1ZGVkKHJlcSkpIHtcbiAgICByZXR1cm4gbmV4dChcbiAgICAgIG5ldyBDdXN0b21FcnJvcignWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyByb3V0ZScsIDQwMSlcbiAgICApO1xuICB9XG5cbiAgY29uc3QgYWNjZXNzVG9rZW4gPSBnZXRBY2Nlc3NUb2tlbkZyb21IZWFkZXIocmVxKTtcbiAgand0LnZlcmlmeShcbiAgICBhY2Nlc3NUb2tlbixcbiAgICBKU09OX1NFQ1JFVF9LRVkgYXMgc3RyaW5nLFxuICAgIChlcnI6IGFueSwgZGVjb2RlZDogYW55KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBuZXh0KFxuICAgICAgICAgIG5ldyBDdXN0b21FcnJvcignWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyByb3V0ZScsIDQwMSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy9AdHMtaWdub3JlXG4gICAgICByZXEudXNlciA9IHtcbiAgICAgICAgaWQ6IGRlY29kZWQuaWQsXG4gICAgICAgIGVtYWlsOiBkZWNvZGVkLmVtYWlsLFxuICAgICAgfTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1VzZXJBdmFpbGFibGUgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxuICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnVzZXI7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZChpZCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiBuZXh0KG5ldyBDdXN0b21FcnJvcignVGhpcyB1c2VyIGlzIG5vdCBhdmFpbGFibGUnLCA0MDQpKTtcbiAgICB9XG5cbiAgICBuZXh0KCk7XG4gIH1cbik7XG4iXSwibmFtZXMiOlsiZ2V0QWNjZXNzVG9Sb3V0ZSIsImlzVXNlckF2YWlsYWJsZSIsInJlcSIsInJlcyIsIm5leHQiLCJKU09OX1NFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiaXNUb2tlbkluY2x1ZGVkIiwiQ3VzdG9tRXJyb3IiLCJhY2Nlc3NUb2tlbiIsImdldEFjY2Vzc1Rva2VuRnJvbUhlYWRlciIsImp3dCIsInZlcmlmeSIsImVyciIsImRlY29kZWQiLCJ1c2VyIiwiaWQiLCJlbWFpbCIsImV4cHJlc3NBc3luY0hhbmRsZXIiLCJVc2VyIiwiZmluZEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBV2FBLGdCQUFnQixNQUFoQkE7SUFtQ0FDLGVBQWUsTUFBZkE7OzBFQTdDbUI7NkJBSXpCO2tFQUNpQjttRUFDUjtnRUFDQzs7Ozs7O0FBR1YsTUFBTUQsbUJBQW1CLENBQzlCRSxLQUNBQyxLQUNBQyxPQUNHO0lBQ0gsTUFBTSxFQUFFQyxnQkFBZSxFQUFFLEdBQUdDLFFBQVFDLEdBQUc7SUFFdkMsSUFBSSxDQUFDQyxJQUFBQSw0QkFBZSxFQUFDTixNQUFNO1FBQ3pCLE9BQU9FLEtBQ0wsSUFBSUssb0JBQVcsQ0FBQywrQ0FBK0M7SUFFbkUsQ0FBQztJQUVELE1BQU1DLGNBQWNDLElBQUFBLHFDQUF3QixFQUFDVDtJQUM3Q1UscUJBQUcsQ0FBQ0MsTUFBTSxDQUNSSCxhQUNBTCxpQkFDQSxDQUFDUyxLQUFVQyxVQUFpQjtRQUMxQixJQUFJRCxLQUFLO1lBQ1AsT0FBT1YsS0FDTCxJQUFJSyxvQkFBVyxDQUFDLCtDQUErQztRQUVuRSxDQUFDO1FBRUQsWUFBWTtRQUNaUCxJQUFJYyxJQUFJLEdBQUc7WUFDVEMsSUFBSUYsUUFBUUUsRUFBRTtZQUNkQyxPQUFPSCxRQUFRRyxLQUFLO1FBQ3RCO1FBRUFkO0lBQ0Y7QUFFSjtBQUVPLE1BQU1ILGtCQUFrQmtCLElBQUFBLDRCQUFtQixFQUNoRCxPQUFPakIsS0FBY0MsS0FBZUMsT0FBdUI7SUFDekQsYUFBYTtJQUNiLE1BQU0sRUFBRWEsR0FBRSxFQUFFLEdBQUdmLElBQUljLElBQUk7SUFFdkIsTUFBTUEsT0FBTyxNQUFNSSxrQkFBSSxDQUFDQyxRQUFRLENBQUNKO0lBRWpDLElBQUksQ0FBQ0QsTUFBTTtRQUNULE9BQU9aLEtBQUssSUFBSUssb0JBQVcsQ0FBQyw4QkFBOEI7SUFDNUQsQ0FBQztJQUVETDtBQUNGIn0=