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
        // 'https://youtube-music-frontend.vercel.app',
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MsIHsgQXBwbGljYXRpb24gfSBmcm9tICdleHByZXNzJztcclxuLy8gaW1wb3J0IGxvZyBmcm9tICcuL3Rvb2xzJztcclxuaW1wb3J0IGRhdGFiYXNlQ29ubmVjdCBmcm9tICcuL2RhdGFiYXNlcy9jb25uZWN0RGF0YWJhc2UnO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcnMnO1xyXG5pbXBvcnQgY3VzdG9tRXJyb3JIYW5kbGVyIGZyb20gJy4vaGVscGVycy9lcnJvcnMvY3VzdG9tRXJyb3JIYW5kbGVyJztcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0JztcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcclxuXHJcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcblxyXG5kb3RlbnYuY29uZmlnKHt9KTtcclxuXHJcbmRhdGFiYXNlQ29ubmVjdCgpO1xyXG5cclxuY29uc3QgUE9SVCA9IHRvTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQpIGFzIG51bWJlcjtcclxuXHJcbmNvbnN0IGNvcnNPcHRpb25zID0ge1xyXG4gIG9yaWdpbjogW1xyXG4gICAgLy8gJ2h0dHBzOi8veW91dHViZS1tdXNpYy1mcm9udGVuZC52ZXJjZWwuYXBwJyxcclxuICAgICdodHRwOi8vbG9jYWxob3N0OjMwMDAnLFxyXG4gIF0sXHJcbiAgb3B0aW9uc1N1Y2Nlc3NTdGF0dXM6IDIwMCxcclxuICBtZXRob2RzOiBbJ0dFVCcsICdQT1NUJywgJ0RFTEVURScsICdQVVQnLCAnUEFUQ0gnXSxcclxufTtcclxuXHJcbmFwcC51c2UoaGVsbWV0KCkpO1xyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5hcHAudXNlKGNvcnMoY29yc09wdGlvbnMpKTtcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZShyb3V0ZXIpO1xyXG5hcHAudXNlKGN1c3RvbUVycm9ySGFuZGxlcik7XHJcblxyXG5hcHAubGlzdGVuKFBPUlQsICgpID0+IGNvbnNvbGUuaW5mbyhgU2VydmVyIHJ1bm5pbmcgJHtwcm9jZXNzLmVudi5VUkx9YCkpO1xyXG4iXSwibmFtZXMiOlsiYXBwIiwiZXhwcmVzcyIsImRvdGVudiIsImNvbmZpZyIsImRhdGFiYXNlQ29ubmVjdCIsIlBPUlQiLCJ0b051bWJlciIsInByb2Nlc3MiLCJlbnYiLCJjb3JzT3B0aW9ucyIsIm9yaWdpbiIsIm9wdGlvbnNTdWNjZXNzU3RhdHVzIiwibWV0aG9kcyIsInVzZSIsImhlbG1ldCIsImNvbXByZXNzaW9uIiwiY29ycyIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJyb3V0ZXIiLCJjdXN0b21FcnJvckhhbmRsZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwiaW5mbyIsIlVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs4REFBcUM7c0VBRVQ7MkRBQ1g7OERBQ0U7eUVBQ1k7NkRBQ1o7d0JBQ007NkRBQ047a0VBQ0s7Ozs7OztBQUV4QixNQUFNQSxNQUFtQkMsSUFBQUEsZ0JBQU87QUFFaENDLGVBQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQUM7QUFFZkMsSUFBQUEsd0JBQWU7QUFFZixNQUFNQyxPQUFPQyxJQUFBQSxnQkFBUSxFQUFDQyxRQUFRQyxHQUFHLENBQUNILElBQUk7QUFFdEMsTUFBTUksY0FBYztJQUNsQkMsUUFBUTtRQUNOLCtDQUErQztRQUMvQztLQUNEO0lBQ0RDLHNCQUFzQjtJQUN0QkMsU0FBUztRQUFDO1FBQU87UUFBUTtRQUFVO1FBQU87S0FBUTtBQUNwRDtBQUVBWixJQUFJYSxHQUFHLENBQUNDLElBQUFBLGVBQU07QUFDZGQsSUFBSWEsR0FBRyxDQUFDRSxJQUFBQSxvQkFBVztBQUNuQmYsSUFBSWEsR0FBRyxDQUFDRyxJQUFBQSxhQUFJLEVBQUNQO0FBQ2JULElBQUlhLEdBQUcsQ0FBQ1osZ0JBQU8sQ0FBQ2dCLElBQUk7QUFDcEJqQixJQUFJYSxHQUFHLENBQUNaLGdCQUFPLENBQUNpQixVQUFVLENBQUM7SUFBRUMsVUFBVSxLQUFLO0FBQUM7QUFDN0NuQixJQUFJYSxHQUFHLENBQUNPLGdCQUFNO0FBQ2RwQixJQUFJYSxHQUFHLENBQUNRLDJCQUFrQjtBQUUxQnJCLElBQUlzQixNQUFNLENBQUNqQixNQUFNLElBQU1rQixRQUFRQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUVqQixRQUFRQyxHQUFHLENBQUNpQixHQUFHLENBQUMsQ0FBQyJ9