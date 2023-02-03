"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _customError = /*#__PURE__*/ _interopRequireDefault(require("../../helpers/errors/CustomError"));
const _expressAsyncHandler = /*#__PURE__*/ _interopRequireDefault(require("express-async-handler"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const validate = (schema)=>(0, _expressAsyncHandler.default)(async (req, res, next)=>{
        try {
            await schema.validate({
                body: req.body,
                query: req.query,
                params: req.params
            });
            return next();
        } catch (err) {
            return next(new _customError.default(err.message, 400));
        }
    });
const _default = validate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy95dXAvdmFsaWRhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UsIFJlcXVlc3QsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJy4uLy4uL2hlbHBlcnMvZXJyb3JzL0N1c3RvbUVycm9yJztcbmltcG9ydCB7IEFueVNjaGVtYSB9IGZyb20gJ3l1cCc7XG5pbXBvcnQgZXhwcmVzc0FzeW5jSGFuZGxlciBmcm9tICdleHByZXNzLWFzeW5jLWhhbmRsZXInO1xuXG5jb25zdCB2YWxpZGF0ZSA9IChzY2hlbWE6IEFueVNjaGVtYSkgPT5cbiAgZXhwcmVzc0FzeW5jSGFuZGxlcihcbiAgICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPGFueT4gPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgc2NoZW1hLnZhbGlkYXRlKHtcbiAgICAgICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgICAgICBxdWVyeTogcmVxLnF1ZXJ5LFxuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgQ3VzdG9tRXJyb3IoZXJyLm1lc3NhZ2UsIDQwMCkpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7XG4iXSwibmFtZXMiOlsidmFsaWRhdGUiLCJzY2hlbWEiLCJleHByZXNzQXN5bmNIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImJvZHkiLCJxdWVyeSIsInBhcmFtcyIsImVyciIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7O2FBQUE7O2tFQXBCd0I7MEVBRVE7Ozs7OztBQUVoQyxNQUFNQSxXQUFXLENBQUNDLFNBQ2hCQyxJQUFBQSw0QkFBbUIsRUFDakIsT0FBT0MsS0FBY0MsS0FBZUMsT0FBcUM7UUFDdkUsSUFBSTtZQUNGLE1BQU1KLE9BQU9ELFFBQVEsQ0FBQztnQkFDcEJNLE1BQU1ILElBQUlHLElBQUk7Z0JBQ2RDLE9BQU9KLElBQUlJLEtBQUs7Z0JBQ2hCQyxRQUFRTCxJQUFJSyxNQUFNO1lBQ3BCO1lBQ0EsT0FBT0g7UUFDVCxFQUFFLE9BQU9JLEtBQVU7WUFDakIsT0FBT0osS0FBSyxJQUFJSyxvQkFBVyxDQUFDRCxJQUFJRSxPQUFPLEVBQUU7UUFDM0M7SUFDRjtNQUdKLFdBQWVYIn0=