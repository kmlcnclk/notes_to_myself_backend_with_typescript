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
    createSchema: ()=>createSchema,
    isCompletedSchema: ()=>isCompletedSchema,
    getNoteByIdSchema: ()=>getNoteByIdSchema,
    updateNoteByIdSchema: ()=>updateNoteByIdSchema,
    deleteNoteByIdSchema: ()=>deleteNoteByIdSchema
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
let createSchema = _yup.object({
    body: _yup.object({
        title: _yup.string().required("Title is required"),
        content: _yup.string().required("Content is required"),
        isCompleted: _yup.bool()
    })
});
let isCompletedSchema = _yup.object({
    params: _yup.object({
        id: _yup.string().required("Note id is required")
    })
});
let getNoteByIdSchema = _yup.object({
    params: _yup.object({
        id: _yup.string().required("Note id is required")
    })
});
let updateNoteByIdSchema = _yup.object({
    body: _yup.object({
        title: _yup.string(),
        content: _yup.string(),
        isCompleted: _yup.bool()
    }),
    params: _yup.object({
        id: _yup.string().required("Note id is required")
    })
});
let deleteNoteByIdSchema = _yup.object({
    body: _yup.object({
        title: _yup.string(),
        content: _yup.string()
    }),
    params: _yup.object({
        id: _yup.string().required("Note id is required")
    })
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy95dXAvbm90ZS55dXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XG5cbmV4cG9ydCBsZXQgY3JlYXRlU2NoZW1hID0geXVwLm9iamVjdCh7XG4gIGJvZHk6IHl1cC5vYmplY3Qoe1xuICAgIHRpdGxlOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ1RpdGxlIGlzIHJlcXVpcmVkJyksXG4gICAgY29udGVudDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdDb250ZW50IGlzIHJlcXVpcmVkJyksXG4gICAgaXNDb21wbGV0ZWQ6IHl1cC5ib29sKCksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBsZXQgaXNDb21wbGV0ZWRTY2hlbWEgPSB5dXAub2JqZWN0KHtcbiAgcGFyYW1zOiB5dXAub2JqZWN0KHtcbiAgICBpZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdOb3RlIGlkIGlzIHJlcXVpcmVkJyksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBsZXQgZ2V0Tm90ZUJ5SWRTY2hlbWEgPSB5dXAub2JqZWN0KHtcbiAgcGFyYW1zOiB5dXAub2JqZWN0KHtcbiAgICBpZDogeXVwLnN0cmluZygpLnJlcXVpcmVkKCdOb3RlIGlkIGlzIHJlcXVpcmVkJyksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBsZXQgdXBkYXRlTm90ZUJ5SWRTY2hlbWEgPSB5dXAub2JqZWN0KHtcbiAgYm9keTogeXVwLm9iamVjdCh7XG4gICAgdGl0bGU6IHl1cC5zdHJpbmcoKSxcbiAgICBjb250ZW50OiB5dXAuc3RyaW5nKCksXG4gICAgaXNDb21wbGV0ZWQ6IHl1cC5ib29sKCksXG4gIH0pLFxuICBwYXJhbXM6IHl1cC5vYmplY3Qoe1xuICAgIGlkOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoJ05vdGUgaWQgaXMgcmVxdWlyZWQnKSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGxldCBkZWxldGVOb3RlQnlJZFNjaGVtYSA9IHl1cC5vYmplY3Qoe1xuICBib2R5OiB5dXAub2JqZWN0KHtcbiAgICB0aXRsZTogeXVwLnN0cmluZygpLFxuICAgIGNvbnRlbnQ6IHl1cC5zdHJpbmcoKSxcbiAgfSksXG4gIHBhcmFtczogeXVwLm9iamVjdCh7XG4gICAgaWQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgnTm90ZSBpZCBpcyByZXF1aXJlZCcpLFxuICB9KSxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNjaGVtYSIsImlzQ29tcGxldGVkU2NoZW1hIiwiZ2V0Tm90ZUJ5SWRTY2hlbWEiLCJ1cGRhdGVOb3RlQnlJZFNjaGVtYSIsImRlbGV0ZU5vdGVCeUlkU2NoZW1hIiwieXVwIiwib2JqZWN0IiwiYm9keSIsInRpdGxlIiwic3RyaW5nIiwicmVxdWlyZWQiLCJjb250ZW50IiwiaXNDb21wbGV0ZWQiLCJib29sIiwicGFyYW1zIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRVdBLFlBQVksTUFBWkE7SUFRQUMsaUJBQWlCLE1BQWpCQTtJQU1BQyxpQkFBaUIsTUFBakJBO0lBTUFDLG9CQUFvQixNQUFwQkE7SUFXQUMsb0JBQW9CLE1BQXBCQTs7MkRBakNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBSUosZUFBZUssS0FBSUMsTUFBTSxDQUFDO0lBQ25DQyxNQUFNRixLQUFJQyxNQUFNLENBQUM7UUFDZkUsT0FBT0gsS0FBSUksTUFBTSxHQUFHQyxRQUFRLENBQUM7UUFDN0JDLFNBQVNOLEtBQUlJLE1BQU0sR0FBR0MsUUFBUSxDQUFDO1FBQy9CRSxhQUFhUCxLQUFJUSxJQUFJO0lBQ3ZCO0FBQ0Y7QUFFTyxJQUFJWixvQkFBb0JJLEtBQUlDLE1BQU0sQ0FBQztJQUN4Q1EsUUFBUVQsS0FBSUMsTUFBTSxDQUFDO1FBQ2pCUyxJQUFJVixLQUFJSSxNQUFNLEdBQUdDLFFBQVEsQ0FBQztJQUM1QjtBQUNGO0FBRU8sSUFBSVIsb0JBQW9CRyxLQUFJQyxNQUFNLENBQUM7SUFDeENRLFFBQVFULEtBQUlDLE1BQU0sQ0FBQztRQUNqQlMsSUFBSVYsS0FBSUksTUFBTSxHQUFHQyxRQUFRLENBQUM7SUFDNUI7QUFDRjtBQUVPLElBQUlQLHVCQUF1QkUsS0FBSUMsTUFBTSxDQUFDO0lBQzNDQyxNQUFNRixLQUFJQyxNQUFNLENBQUM7UUFDZkUsT0FBT0gsS0FBSUksTUFBTTtRQUNqQkUsU0FBU04sS0FBSUksTUFBTTtRQUNuQkcsYUFBYVAsS0FBSVEsSUFBSTtJQUN2QjtJQUNBQyxRQUFRVCxLQUFJQyxNQUFNLENBQUM7UUFDakJTLElBQUlWLEtBQUlJLE1BQU0sR0FBR0MsUUFBUSxDQUFDO0lBQzVCO0FBQ0Y7QUFFTyxJQUFJTix1QkFBdUJDLEtBQUlDLE1BQU0sQ0FBQztJQUMzQ0MsTUFBTUYsS0FBSUMsTUFBTSxDQUFDO1FBQ2ZFLE9BQU9ILEtBQUlJLE1BQU07UUFDakJFLFNBQVNOLEtBQUlJLE1BQU07SUFDckI7SUFDQUssUUFBUVQsS0FBSUMsTUFBTSxDQUFDO1FBQ2pCUyxJQUFJVixLQUFJSSxNQUFNLEdBQUdDLFFBQVEsQ0FBQztJQUM1QjtBQUNGIn0=