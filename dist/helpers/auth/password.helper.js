"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "comparePassword", {
    enumerable: true,
    get: ()=>comparePassword
});
const _bcryptjs = /*#__PURE__*/ _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const comparePassword = (password, hashPassword)=>{
    return _bcryptjs.default.compareSync(password, hashPassword);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2F1dGgvcGFzc3dvcmQuaGVscGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuXG5leHBvcnQgY29uc3QgY29tcGFyZVBhc3N3b3JkID0gKHBhc3N3b3JkOiBzdHJpbmcsIGhhc2hQYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIGhhc2hQYXNzd29yZCk7XG59O1xuIl0sIm5hbWVzIjpbImNvbXBhcmVQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaFBhc3N3b3JkIiwiYmNyeXB0IiwiY29tcGFyZVN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzthQUFBQTs7K0RBRk07Ozs7OztBQUVaLE1BQU1BLGtCQUFrQixDQUFDQyxVQUFrQkMsZUFBeUI7SUFDekUsT0FBT0MsaUJBQU0sQ0FBQ0MsV0FBVyxDQUFDSCxVQUFVQztBQUN0QyJ9