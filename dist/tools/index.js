"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _pino = /*#__PURE__*/ _interopRequireDefault(require("pino"));
const _dayjs = /*#__PURE__*/ _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const log = (0, _pino.default)({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true
        }
    },
    base: {
        pid: false
    },
    timestamp: ()=>`,"time":"${(0, _dayjs.default)().format()}"`
});
const _default = log;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nZ2VyIGZyb20gJ3Bpbm8nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5cclxuY29uc3QgbG9nID0gbG9nZ2VyKHtcclxuICB0cmFuc3BvcnQ6IHtcclxuICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgY29sb3JpemU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFzZToge1xyXG4gICAgcGlkOiBmYWxzZSxcclxuICB9LFxyXG4gIHRpbWVzdGFtcDogKCkgPT4gYCxcInRpbWVcIjpcIiR7ZGF5anMoKS5mb3JtYXQoKX1cImAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nO1xyXG4iXSwibmFtZXMiOlsibG9nIiwibG9nZ2VyIiwidHJhbnNwb3J0IiwidGFyZ2V0Iiwib3B0aW9ucyIsImNvbG9yaXplIiwiYmFzZSIsInBpZCIsInRpbWVzdGFtcCIsImRheWpzIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7OytCQWdCQTs7YUFBQTs7MkRBaEJtQjs0REFDRDs7Ozs7O0FBRWxCLE1BQU1BLE1BQU1DLElBQUFBLGFBQU0sRUFBQztJQUNqQkMsV0FBVztRQUNUQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsVUFBVSxJQUFJO1FBQ2hCO0lBQ0Y7SUFDQUMsTUFBTTtRQUNKQyxLQUFLLEtBQUs7SUFDWjtJQUNBQyxXQUFXLElBQU0sQ0FBQyxTQUFTLEVBQUVDLElBQUFBLGNBQUssSUFBR0MsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNsRDtNQUVBLFdBQWVWIn0=