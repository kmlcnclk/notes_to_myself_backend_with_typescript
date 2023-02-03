"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _customError = /*#__PURE__*/ _interopRequireDefault(require("./CustomError"));
const _tools = /*#__PURE__*/ _interopRequireDefault(require("../../tools"));
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
    _tools.default.error(`Name: ${customError.name}, Status Code: ${customError.status || 500}, Message: ${customError.message}`);
    return res.status(customError.status || 500).json({
        success: false,
        message: customError.message
    });
};
const _default = customErrorHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2Vycm9ycy9jdXN0b21FcnJvckhhbmRsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IEN1c3RvbUVycm9yIGZyb20gJy4vQ3VzdG9tRXJyb3InO1xuaW1wb3J0IGxvZyBmcm9tICcuLi8uLi90b29scyc7XG5cbmludGVyZmFjZSBDdXN0b21FcnJvclR5cGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvZGU/OiBudW1iZXI7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIGVycm5vPzogbnVtYmVyO1xufVxuXG4vLyBDdXN0b20gZXJyb3IgaGFuZGxlclxuY29uc3QgY3VzdG9tRXJyb3JIYW5kbGVyID0gKFxuICBlcnI6IEN1c3RvbUVycm9yVHlwZSxcbiAgcmVxOiBSZXF1ZXN0LFxuICByZXM6IFJlc3BvbnNlLFxuICBuZXh0OiBOZXh0RnVuY3Rpb25cbikgPT4ge1xuICBsZXQgY3VzdG9tRXJyb3IgPSBlcnI7XG5cbiAgaWYgKGVyci5uYW1lID09PSAnU3ludGF4RXJyb3InKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoJ1VuZXhwZWN0ZWQgU3ludGF4JywgNDAwKTtcbiAgfVxuICBpZiAoZXJyLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoZXJyLm1lc3NhZ2UsIDQwMCk7XG4gIH1cbiAgaWYgKGVyci5uYW1lID09PSAnQ2FzdEVycm9yJykge1xuICAgIGN1c3RvbUVycm9yID0gbmV3IEN1c3RvbUVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIGlkJywgNDAwKTtcbiAgfVxuICBpZiAoZXJyLmNvZGUgPT09IDExMDAwKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoXG4gICAgICAnRHVwbGljYXRlIEtleSBGb3VuZCA6IENoZWNrIFlvdXIgSW5wdXQnLFxuICAgICAgNDAwXG4gICAgKTtcbiAgfVxuICBpZiAoZXJyLm5hbWUgPT09ICdUeXBlRXJyb3InKSB7XG4gICAgY3VzdG9tRXJyb3IgPSBuZXcgQ3VzdG9tRXJyb3IoJ1R5cGUgRXJyb3IgOiBQbGVhc2UgQ2hlY2sgWW91ciBJbnB1dCcsIDQwMCk7XG4gIH1cblxuICBsb2cuZXJyb3IoXG4gICAgYE5hbWU6ICR7Y3VzdG9tRXJyb3IubmFtZX0sIFN0YXR1cyBDb2RlOiAke1xuICAgICAgY3VzdG9tRXJyb3Iuc3RhdHVzIHx8IDUwMFxuICAgIH0sIE1lc3NhZ2U6ICR7Y3VzdG9tRXJyb3IubWVzc2FnZX1gXG4gICk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoY3VzdG9tRXJyb3Iuc3RhdHVzIHx8IDUwMCkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogY3VzdG9tRXJyb3IubWVzc2FnZSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21FcnJvckhhbmRsZXI7XG4iXSwibmFtZXMiOlsiY3VzdG9tRXJyb3JIYW5kbGVyIiwiZXJyIiwicmVxIiwicmVzIiwibmV4dCIsImN1c3RvbUVycm9yIiwibmFtZSIsIkN1c3RvbUVycm9yIiwibWVzc2FnZSIsImNvZGUiLCJsb2ciLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9EQTs7YUFBQTs7a0VBbkR3Qjs0REFDUjs7Ozs7O0FBVWhCLHVCQUF1QjtBQUN2QixNQUFNQSxxQkFBcUIsQ0FDekJDLEtBQ0FDLEtBQ0FDLEtBQ0FDLE9BQ0c7SUFDSCxJQUFJQyxjQUFjSjtJQUVsQixJQUFJQSxJQUFJSyxJQUFJLEtBQUssZUFBZTtRQUM5QkQsY0FBYyxJQUFJRSxvQkFBVyxDQUFDLHFCQUFxQjtJQUNyRCxDQUFDO0lBQ0QsSUFBSU4sSUFBSUssSUFBSSxLQUFLLG1CQUFtQjtRQUNsQ0QsY0FBYyxJQUFJRSxvQkFBVyxDQUFDTixJQUFJTyxPQUFPLEVBQUU7SUFDN0MsQ0FBQztJQUNELElBQUlQLElBQUlLLElBQUksS0FBSyxhQUFhO1FBQzVCRCxjQUFjLElBQUlFLG9CQUFXLENBQUMsNkJBQTZCO0lBQzdELENBQUM7SUFDRCxJQUFJTixJQUFJUSxJQUFJLEtBQUssT0FBTztRQUN0QkosY0FBYyxJQUFJRSxvQkFBVyxDQUMzQiwwQ0FDQTtJQUVKLENBQUM7SUFDRCxJQUFJTixJQUFJSyxJQUFJLEtBQUssYUFBYTtRQUM1QkQsY0FBYyxJQUFJRSxvQkFBVyxDQUFDLHdDQUF3QztJQUN4RSxDQUFDO0lBRURHLGNBQUcsQ0FBQ0MsS0FBSyxDQUNQLENBQUMsTUFBTSxFQUFFTixZQUFZQyxJQUFJLENBQUMsZUFBZSxFQUN2Q0QsWUFBWU8sTUFBTSxJQUFJLElBQ3ZCLFdBQVcsRUFBRVAsWUFBWUcsT0FBTyxDQUFDLENBQUM7SUFHckMsT0FBT0wsSUFBSVMsTUFBTSxDQUFDUCxZQUFZTyxNQUFNLElBQUksS0FBS0MsSUFBSSxDQUFDO1FBQ2hEQyxTQUFTLEtBQUs7UUFDZE4sU0FBU0gsWUFBWUcsT0FBTztJQUM5QjtBQUNGO01BRUEsV0FBZVIifQ==