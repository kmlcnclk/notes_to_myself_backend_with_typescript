"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interopRequireDefault(require("express"));
const _tools = /*#__PURE__*/ _interopRequireDefault(require("./tools"));
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
app.listen(PORT, ()=>_tools.default.info(`Server running ${process.env.URL}`));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGxvZyBmcm9tICcuL3Rvb2xzJztcclxuaW1wb3J0IGRhdGFiYXNlQ29ubmVjdCBmcm9tICcuL2RhdGFiYXNlcy9jb25uZWN0RGF0YWJhc2UnO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcnMnO1xyXG5pbXBvcnQgY3VzdG9tRXJyb3JIYW5kbGVyIGZyb20gJy4vaGVscGVycy9lcnJvcnMvY3VzdG9tRXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0JztcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcclxuXHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcblxyXG5kb3RlbnYuY29uZmlnKHt9KTtcclxuXHJcbmRhdGFiYXNlQ29ubmVjdCgpO1xyXG5cclxuY29uc3QgUE9SVCA9IHRvTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQpIGFzIG51bWJlcjtcclxuXHJcbmNvbnN0IGNvcnNPcHRpb25zID0ge1xyXG4gIG9yaWdpbjogW1xyXG4gICAgJ2h0dHBzOi8vbm90ZXMtdG8tbXlzZWxmLWZyb250ZW5kLnZlcmNlbC5hcHAnLFxyXG4gICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgXSxcclxuICBvcHRpb25zU3VjY2Vzc1N0YXR1czogMjAwLFxyXG4gIG1ldGhvZHM6IFsnR0VUJywgJ1BPU1QnLCAnREVMRVRFJywgJ1BVVCcsICdQQVRDSCddLFxyXG59O1xyXG5cclxuYXBwLnVzZShoZWxtZXQoKSk7XHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcbmFwcC51c2UoY29ycyhjb3JzT3B0aW9ucykpO1xyXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcclxuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG5hcHAudXNlKHJvdXRlcik7XHJcbmFwcC51c2UoY3VzdG9tRXJyb3JIYW5kbGVyKTtcclxuXHJcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4gbG9nLmluZm8oYFNlcnZlciBydW5uaW5nICR7cHJvY2Vzcy5lbnYuVVJMfWApKTtcclxuIl0sIm5hbWVzIjpbImFwcCIsImV4cHJlc3MiLCJkb3RlbnYiLCJjb25maWciLCJkYXRhYmFzZUNvbm5lY3QiLCJQT1JUIiwidG9OdW1iZXIiLCJwcm9jZXNzIiwiZW52IiwiY29yc09wdGlvbnMiLCJvcmlnaW4iLCJvcHRpb25zU3VjY2Vzc1N0YXR1cyIsIm1ldGhvZHMiLCJ1c2UiLCJoZWxtZXQiLCJjb21wcmVzc2lvbiIsImNvcnMiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwicm91dGVyIiwiY3VzdG9tRXJyb3JIYW5kbGVyIiwibGlzdGVuIiwibG9nIiwiaW5mbyIsIlVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs4REFBcUM7NERBQ3JCO3NFQUNZOzJEQUNYOzhEQUNFO3lFQUNZOzZEQUNaO3dCQUNNOzZEQUNOO2tFQUNLOzs7Ozs7QUFFeEIsTUFBTUEsTUFBbUJDLElBQUFBLGdCQUFPO0FBRWhDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0FBRWZDLElBQUFBLHdCQUFlO0FBRWYsTUFBTUMsT0FBT0MsSUFBQUEsZ0JBQVEsRUFBQ0MsUUFBUUMsR0FBRyxDQUFDSCxJQUFJO0FBRXRDLE1BQU1JLGNBQWM7SUFDbEJDLFFBQVE7UUFDTjtRQUNBO0tBQ0Q7SUFDREMsc0JBQXNCO0lBQ3RCQyxTQUFTO1FBQUM7UUFBTztRQUFRO1FBQVU7UUFBTztLQUFRO0FBQ3BEO0FBRUFaLElBQUlhLEdBQUcsQ0FBQ0MsSUFBQUEsZUFBTTtBQUNkZCxJQUFJYSxHQUFHLENBQUNFLElBQUFBLG9CQUFXO0FBQ25CZixJQUFJYSxHQUFHLENBQUNHLElBQUFBLGFBQUksRUFBQ1A7QUFDYlQsSUFBSWEsR0FBRyxDQUFDWixnQkFBTyxDQUFDZ0IsSUFBSTtBQUNwQmpCLElBQUlhLEdBQUcsQ0FBQ1osZ0JBQU8sQ0FBQ2lCLFVBQVUsQ0FBQztJQUFFQyxVQUFVLEtBQUs7QUFBQztBQUM3Q25CLElBQUlhLEdBQUcsQ0FBQ08sZ0JBQU07QUFDZHBCLElBQUlhLEdBQUcsQ0FBQ1EsMkJBQWtCO0FBRTFCckIsSUFBSXNCLE1BQU0sQ0FBQ2pCLE1BQU0sSUFBTWtCLGNBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFakIsUUFBUUMsR0FBRyxDQUFDaUIsR0FBRyxDQUFDLENBQUMifQ==