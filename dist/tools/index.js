"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default" // import pino from 'pino';
 // import pretty from 'pino-pretty';
 // const log = pino(
 //   pretty({
 //     colorize: true,
 //   })
 // );
 // export default log;
, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nZ2VyIGZyb20gJ3Bpbm8nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5cclxuY29uc3QgbG9nID0gbG9nZ2VyKHtcclxuICB0cmFuc3BvcnQ6IHtcclxuICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgY29sb3JpemU6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFzZToge1xyXG4gICAgcGlkOiBmYWxzZSxcclxuICB9LFxyXG4gIHRpbWVzdGFtcDogKCkgPT4gYCxcInRpbWVcIjpcIiR7ZGF5anMoKS5mb3JtYXQoKX1cImAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nO1xyXG5cclxuLy8gaW1wb3J0IHBpbm8gZnJvbSAncGlubyc7XHJcbi8vIGltcG9ydCBwcmV0dHkgZnJvbSAncGluby1wcmV0dHknO1xyXG5cclxuLy8gY29uc3QgbG9nID0gcGlubyhcclxuLy8gICBwcmV0dHkoe1xyXG4vLyAgICAgY29sb3JpemU6IHRydWUsXHJcbi8vICAgfSlcclxuLy8gKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGxvZztcclxuIl0sIm5hbWVzIjpbImxvZyIsImxvZ2dlciIsInRyYW5zcG9ydCIsInRhcmdldCIsIm9wdGlvbnMiLCJjb2xvcml6ZSIsImJhc2UiLCJwaWQiLCJ0aW1lc3RhbXAiLCJkYXlqcyIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFnQkEsVUFFQSwyQkFBMkI7Q0FDM0Isb0NBQW9DO0NBRXBDLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLE9BQU87Q0FDUCxLQUFLO0NBRUwsc0JBQXNCOzs7YUFYdEI7OzJEQWhCbUI7NERBQ0Q7Ozs7OztBQUVsQixNQUFNQSxNQUFNQyxJQUFBQSxhQUFNLEVBQUM7SUFDakJDLFdBQVc7UUFDVEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLFVBQVUsSUFBSTtRQUNoQjtJQUNGO0lBQ0FDLE1BQU07UUFDSkMsS0FBSyxLQUFLO0lBQ1o7SUFDQUMsV0FBVyxJQUFNLENBQUMsU0FBUyxFQUFFQyxJQUFBQSxjQUFLLElBQUdDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbEQ7TUFFQSxXQUFlViJ9