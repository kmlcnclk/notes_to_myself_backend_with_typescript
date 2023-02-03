"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _customError = /*#__PURE__*/ _interopRequireDefault(require("./CustomError"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Custom error handler
const customErrorHandler = (err, req, res, next)=>{
    let customError = err;
    if (err.name === "SyntaxError") {
        customError = new _customError.default("Unexpected Syntax", 400);
    }
    if (err.name === "ValidationError") {
        customError = new _customError.default(err.message, 400);
    }
    if (err.name === "CastError") {
        customError = new _customError.default("Please provide a valid id", 400);
    }
    if (err.code === 11000) {
        customError = new _customError.default("Duplicate Key Found : Check Your Input", 400);
    }
    if (err.name === "TypeError") {
        customError = new _customError.default("Type Error : Please Check Your Input", 400);
    }
    console.error(`Name: ${customError.name}, Status Code: ${customError.status || 500}, Message: ${customError.message}`);
    return res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
};
const _default = customErrorHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2Vycm9ycy9jdXN0b21FcnJvckhhbmRsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJy4vQ3VzdG9tRXJyb3InO1xuLy8gaW1wb3J0IGxvZyBmcm9tICcuLi8uLi90b29scyc7XG5cbmludGVyZmFjZSBDdXN0b21FcnJvclR5cGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvZGU/OiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIGVycm5vPzogbnVtYmVyO1xufVxuXG4vLyBDdXN0b20gZXJyb3IgaGFuZGxlclxuY29uc3QgY3VzdG9tRXJyb3JIYW5kbGVyID0gKFxuICBlcnI6IEN1c3RvbUVycm9yVHlwZSxcbiAgcmVxOiBSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb25cbikgPT4ge1xuICBsZXQgY3VzdG9tRXJyb3IgPSBlcnI7XG5cbiAgaWYgKGVyci5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoJ1VuZXhwZWN0ZWQgU3ludGF4JywgNDAwKTtcbiAgfVxuICBpZiAoZXJyLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoZXJyLm1lc3NhZ2UsIDQwMCk7XG4gIH1cbiAgaWYgKGVyci5uYW1lID09PSAnQ2FzdEVycm9yJykge1xuICAgIGN1c3RvbUVycm9yID0gbmV3IEN1c3RvbUVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGlkJywgNDAwKTtcbiAgfVxuICBpZiAoZXJyLmNvZGUgPT09IDExMDAwKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoXG4gICAgICAnRHVwbGljYXRlIEtleSBGb3VuZCA6IENoZWNrIFlvdXIgSW5wdXQnLFxuICAgICAgNDAwXG4gICAgKTtcbiAgfVxuICBpZiAoZXJyLm5hbWUgPT09ICdUeXBlRXJyb3InKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoJ1R5cGUgRXJyb3IgOiBQbGVhc2UgQ2hlY2sgWW91ciBJbnB1dCcsIDQwMCk7XG4gIH1cblxuICBjb25zb2xlLmVycm9yKFxuICAgIGBOYW1lOiAke2N1c3RvbUVycm9yLm5hbWV9LCBTdGF0dXMgQ29kZTogJHtcbiAgICAgIGN1c3RvbUVycm9yLnN0YXR1cyB8fCA1MDBcbiAgICB9LCBNZXNzYWdlOiAke2N1c3RvbUVycm9yLm1lc3NhZ2V9YFxuICApO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKGN1c3RvbUVycm9yLnN0YXR1cyB8fCA1MDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IGN1c3RvbUVycm9yLm1lc3NhZ2UsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tRXJyb3JIYW5kbGVyO1xuIl0sIm5hbWVzIjpbImN1c3RvbUVycm9ySGFuZGxlciIsImVyciIsInJlcSIsInJlcyIsIm5leHQiLCJjdXN0b21FcnJvciIsIm5hbWUiLCJDdXN0b21FcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7K0JBb0RBOzthQUFBOztrRUFuRHdCOzs7Ozs7QUFXeEIsdUJBQXVCO0FBQ3ZCLE1BQU1BLHFCQUFxQixDQUN6QkMsS0FDQUMsS0FDQUMsS0FDQUMsT0FDRztJQUNILElBQUlDLGNBQWNKO0lBRWxCLElBQUlBLElBQUlLLElBQUksS0FBSyxlQUFlO1FBQzlCRCxjQUFjLElBQUlFLG9CQUFXLENBQUMscUJBQXFCO0lBQ3JELENBQUM7SUFDRCxJQUFJTixJQUFJSyxJQUFJLEtBQUssbUJBQW1CO1FBQ2xDRCxjQUFjLElBQUlFLG9CQUFXLENBQUNOLElBQUlPLE9BQU8sRUFBRTtJQUM3QyxDQUFDO0lBQ0QsSUFBSVAsSUFBSUssSUFBSSxLQUFLLGFBQWE7UUFDNUJELGNBQWMsSUFBSUUsb0JBQVcsQ0FBQyw2QkFBNkI7SUFDN0QsQ0FBQztJQUNELElBQUlOLElBQUlRLElBQUksS0FBSyxPQUFPO1FBQ3RCSixjQUFjLElBQUlFLG9CQUFXLENBQzNCLDBDQUNBO0lBRUosQ0FBQztJQUNELElBQUlOLElBQUlLLElBQUksS0FBSyxhQUFhO1FBQzVCRCxjQUFjLElBQUlFLG9CQUFXLENBQUMsd0NBQXdDO0lBQ3hFLENBQUM7SUFFREcsUUFBUUMsS0FBSyxDQUNYLENBQUMsTUFBTSxFQUFFTixZQUFZQyxJQUFJLENBQUMsZUFBZSxFQUN2Q0QsWUFBWU8sTUFBTSxJQUFJLElBQ3ZCLFdBQVcsRUFBRVAsWUFBWUcsT0FBTyxDQUFDLENBQUM7SUFHckMsT0FBT0wsSUFBSVMsTUFBTSxDQUFDUCxZQUFZTyxNQUFNLElBQUksS0FBS0MsSUFBSSxDQUFDO1FBQ2hEQyxTQUFTLEtBQUs7UUFDZE4sU0FBU0gsWUFBWUcsT0FBTztJQUM5QjtBQUNGO01BRUEsV0FBZVIifQ==