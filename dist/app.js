"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _connectDatabase = /*#__PURE__*/ _interopRequireDefault(require("./databases/connectDatabase"));
const _cors = /*#__PURE__*/ _interopRequireDefault(require("cors"));
const _routers = /*#__PURE__*/ _interopRequireDefault(require("./routers"));
const _customErrorHandler = /*#__PURE__*/ _interopRequireDefault(require("./helpers/errors/customErrorHandler"));
const _dotenv = /*#__PURE__*/ _interopRequireDefault(require("dotenv"));
const _lodash = require("lodash");
const _helmet = /*#__PURE__*/ _interopRequireDefault(require("helmet"));
const _compression = /*#__PURE__*/ _interopRequireDefault(require("compression"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
_dotenv.default.config({});
(0, _connectDatabase.default)();
const PORT = (0, _lodash.toNumber)(process.env.PORT);
const corsOptions = {
    origin: [
        "https://notes-to-myself-frontend.vercel.app",
        "http://localhost:3000"
    ],
    optionsSuccessStatus: 200,
    methods: [
        "GET",
        "POST",
        "DELETE",
        "PUT",
        "PATCH"
    ]
};
app.use((0, _helmet.default)());
app.use((0, _compression.default)());
app.use((0, _cors.default)(corsOptions));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
    extended: false
}));
app.use(_routers.default);
app.use(_customErrorHandler.default);
app.listen(PORT, ()=>console.info(`Server running ${process.env.URL}`));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuLy8gaW1wb3J0IGxvZyBmcm9tICcuL3Rvb2xzJztcclxuaW1wb3J0IGRhdGFiYXNlQ29ubmVjdCBmcm9tICcuL2RhdGFiYXNlcy9jb25uZWN0RGF0YWJhc2UnO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcnMnO1xyXG5pbXBvcnQgY3VzdG9tRXJyb3JIYW5kbGVyIGZyb20gJy4vaGVscGVycy9lcnJvcnMvY3VzdG9tRXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0JztcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcclxuXHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcblxyXG5kb3RlbnYuY29uZmlnKHt9KTtcclxuXHJcbmRhdGFiYXNlQ29ubmVjdCgpO1xyXG5cclxuY29uc3QgUE9SVCA9IHRvTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQpIGFzIG51bWJlcjtcclxuXHJcbmNvbnN0IGNvcnNPcHRpb25zID0ge1xyXG4gIG9yaWdpbjogW1xyXG4gICAgJ2h0dHBzOi8vbm90ZXMtdG8tbXlzZWxmLWZyb250ZW5kLnZlcmNlbC5hcHAnLFxyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgXSxcclxuICBvcHRpb25zU3VjY2Vzc1N0YXR1czogMjAwLFxyXG4gIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnREVMRVRFJywgJ1BVVCcsICdQQVRDSCddLFxyXG59O1xyXG5cclxuYXBwLnVzZShoZWxtZXQoKSk7XHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcbmFwcC51c2UoY29ycyhjb3JzT3B0aW9ucykpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5hcHAudXNlKHJvdXRlcik7XHJcbmFwcC51c2UoY3VzdG9tRXJyb3JIYW5kbGVyKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4gY29uc29sZS5pbmZvKGBTZXJ2ZXIgcnVubmluZyAke3Byb2Nlc3MuZW52LlVSTH1gKSk7XHJcbiJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwiZG90ZW52IiwiY29uZmlnIiwiZGF0YWJhc2VDb25uZWN0IiwiUE9SVCIsInRvTnVtYmVyIiwicHJvY2VzcyIsImVudiIsImNvcnNPcHRpb25zIiwib3JpZ2luIiwib3B0aW9uc1N1Y2Nlc3NTdGF0dXMiLCJtZXRob2RzIiwidXNlIiwiaGVsbWV0IiwiY29tcHJlc3Npb24iLCJjb3JzIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInJvdXRlciIsImN1c3RvbUVycm9ySGFuZGxlciIsImxpc3RlbiIsImNvbnNvbGUiLCJpbmZvIiwiVVJMIl0sIm1hcHBpbmdzIjoiOzs7OzhEQUFxQztzRUFFVDsyREFDWDs4REFDRTt5RUFDWTs2REFDWjt3QkFDTTs2REFDTjtrRUFDSzs7Ozs7O0FBRXhCLE1BQU1BLE1BQW1CQyxJQUFBQSxnQkFBTztBQUVoQ0MsZUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQztBQUVmQyxJQUFBQSx3QkFBZTtBQUVmLE1BQU1DLE9BQU9DLElBQUFBLGdCQUFRLEVBQUNDLFFBQVFDLEdBQUcsQ0FBQ0gsSUFBSTtBQUV0QyxNQUFNSSxjQUFjO0lBQ2xCQyxRQUFRO1FBQ047UUFDQTtLQUNEO0lBQ0RDLHNCQUFzQjtJQUN0QkMsU0FBUztRQUFDO1FBQU87UUFBUTtRQUFVO1FBQU87S0FBUTtBQUNwRDtBQUVBWixJQUFJYSxHQUFHLENBQUNDLElBQUFBLGVBQU07QUFDZGQsSUFBSWEsR0FBRyxDQUFDRSxJQUFBQSxvQkFBVztBQUNuQmYsSUFBSWEsR0FBRyxDQUFDRyxJQUFBQSxhQUFJLEVBQUNQO0FBQ2JULElBQUlhLEdBQUcsQ0FBQ1osZ0JBQU8sQ0FBQ2dCLElBQUk7QUFDcEJqQixJQUFJYSxHQUFHLENBQUNaLGdCQUFPLENBQUNpQixVQUFVLENBQUM7SUFBRUMsVUFBVSxLQUFLO0FBQUM7QUFDN0NuQixJQUFJYSxHQUFHLENBQUNPLGdCQUFNO0FBQ2RwQixJQUFJYSxHQUFHLENBQUNRLDJCQUFrQjtBQUUxQnJCLElBQUlzQixNQUFNLENBQUNqQixNQUFNLElBQU1rQixRQUFRQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUVqQixRQUFRQyxHQUFHLENBQUNpQixHQUFHLENBQUMsQ0FBQyJ9