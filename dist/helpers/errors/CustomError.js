"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
class CustomError extends Error {
    constructor(message, status){
        super(message);
        this.status = status;
    }
}
const _default = CustomError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2Vycm9ycy9DdXN0b21FcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXN0b21FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdHVzOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBzdGF0dXM6IG51bWJlcikge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUVycm9yO1xuIl0sIm5hbWVzIjpbIkN1c3RvbUVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7O2FBQUE7O0FBVEEsTUFBTUEsb0JBQW9CQztJQUd4QkMsWUFBWUMsT0FBZSxFQUFFQyxNQUFjLENBQUU7UUFDM0MsS0FBSyxDQUFDRDtRQUNOLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtJQUNoQjtBQUNGO01BRUEsV0FBZUoifQ==