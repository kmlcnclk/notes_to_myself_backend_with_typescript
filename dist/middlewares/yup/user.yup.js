"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    registerSchema: ()=>registerSchema,
    loginSchema: ()=>loginSchema,
    updateSchema: ()=>updateSchema
});
const _yup = /*#__PURE__*/ _interopRequireWildcard(require("yup"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const registerSchema = _yup.object({
    body: _yup.object({
        firstName: _yup.string().required("FirstName is required"),
        lastName: _yup.string(),
        email: _yup.string().email("Email form is not correct").required("Email is required"),
        password: _yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    })
});
const loginSchema = _yup.object({
    body: _yup.object({
        email: _yup.string().email("Email form is not correct").required("Email is required"),
        password: _yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    })
});
const updateSchema = _yup.object({
    body: _yup.object({
        firstName: _yup.string(),
        lastName: _yup.string(),
        email: _yup.string().email("Email form is not correct"),
        password: _yup.string().min(6, "Password must be at least 6 characters")
    })
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy95dXAvdXNlci55dXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlclNjaGVtYSA9IHl1cC5vYmplY3Qoe1xuICBib2R5OiB5dXAub2JqZWN0KHtcbiAgICBmaXJzdE5hbWU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnRmlyc3ROYW1lIGlzIHJlcXVpcmVkJyksXG4gICAgbGFzdE5hbWU6IHl1cC5zdHJpbmcoKSxcbiAgICBlbWFpbDogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5lbWFpbCgnRW1haWwgZm9ybSBpcyBub3QgY29ycmVjdCcpXG4gICAgICAucmVxdWlyZWQoJ0VtYWlsIGlzIHJlcXVpcmVkJyksXG4gICAgcGFzc3dvcmQ6IHl1cFxuICAgICAgLnN0cmluZygpXG4gICAgICAubWluKDYsICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycpXG4gICAgICAucmVxdWlyZWQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBsb2dpblNjaGVtYSA9IHl1cC5vYmplY3Qoe1xuICBib2R5OiB5dXAub2JqZWN0KHtcbiAgICBlbWFpbDogeXVwXG4gICAgICAuc3RyaW5nKClcbiAgICAgIC5lbWFpbCgnRW1haWwgZm9ybSBpcyBub3QgY29ycmVjdCcpXG4gICAgICAucmVxdWlyZWQoJ0VtYWlsIGlzIHJlcXVpcmVkJyksXG4gICAgcGFzc3dvcmQ6IHl1cFxuICAgICAgLnN0cmluZygpXG4gICAgICAubWluKDYsICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycycpXG4gICAgICAucmVxdWlyZWQoJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJyksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTY2hlbWEgPSB5dXAub2JqZWN0KHtcbiAgYm9keTogeXVwLm9iamVjdCh7XG4gICAgZmlyc3ROYW1lOiB5dXAuc3RyaW5nKCksXG4gICAgbGFzdE5hbWU6IHl1cC5zdHJpbmcoKSxcbiAgICBlbWFpbDogeXVwLnN0cmluZygpLmVtYWlsKCdFbWFpbCBmb3JtIGlzIG5vdCBjb3JyZWN0JyksXG4gICAgcGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5taW4oNiwgJ1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzJyksXG4gIH0pLFxufSk7XG4iXSwibmFtZXMiOlsicmVnaXN0ZXJTY2hlbWEiLCJsb2dpblNjaGVtYSIsInVwZGF0ZVNjaGVtYSIsInl1cCIsIm9iamVjdCIsImJvZHkiLCJmaXJzdE5hbWUiLCJzdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFFYUEsY0FBYyxNQUFkQTtJQWVBQyxXQUFXLE1BQVhBO0lBYUFDLFlBQVksTUFBWkE7OzJEQTlCUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLE1BQU1GLGlCQUFpQkcsS0FBSUMsTUFBTSxDQUFDO0lBQ3ZDQyxNQUFNRixLQUFJQyxNQUFNLENBQUM7UUFDZkUsV0FBV0gsS0FBSUksTUFBTSxHQUFHQyxRQUFRLENBQUM7UUFDakNDLFVBQVVOLEtBQUlJLE1BQU07UUFDcEJHLE9BQU9QLEtBQ0pJLE1BQU0sR0FDTkcsS0FBSyxDQUFDLDZCQUNORixRQUFRLENBQUM7UUFDWkcsVUFBVVIsS0FDUEksTUFBTSxHQUNOSyxHQUFHLENBQUMsR0FBRywwQ0FDUEosUUFBUSxDQUFDO0lBQ2Q7QUFDRjtBQUVPLE1BQU1QLGNBQWNFLEtBQUlDLE1BQU0sQ0FBQztJQUNwQ0MsTUFBTUYsS0FBSUMsTUFBTSxDQUFDO1FBQ2ZNLE9BQU9QLEtBQ0pJLE1BQU0sR0FDTkcsS0FBSyxDQUFDLDZCQUNORixRQUFRLENBQUM7UUFDWkcsVUFBVVIsS0FDUEksTUFBTSxHQUNOSyxHQUFHLENBQUMsR0FBRywwQ0FDUEosUUFBUSxDQUFDO0lBQ2Q7QUFDRjtBQUVPLE1BQU1OLGVBQWVDLEtBQUlDLE1BQU0sQ0FBQztJQUNyQ0MsTUFBTUYsS0FBSUMsTUFBTSxDQUFDO1FBQ2ZFLFdBQVdILEtBQUlJLE1BQU07UUFDckJFLFVBQVVOLEtBQUlJLE1BQU07UUFDcEJHLE9BQU9QLEtBQUlJLE1BQU0sR0FBR0csS0FBSyxDQUFDO1FBQzFCQyxVQUFVUixLQUFJSSxNQUFNLEdBQUdLLEdBQUcsQ0FBQyxHQUFHO0lBQ2hDO0FBQ0YifQ==