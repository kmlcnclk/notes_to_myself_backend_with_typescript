"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = /*#__PURE__*/ _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Schema = _mongoose.default.Schema;
const NoteSchema = new Schema({
    title: {
        type: String,
        required: [
            true,
            "Please enter a title"
        ]
    },
    content: {
        type: String,
        required: [
            true,
            "Please enter a content"
        ]
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    userId: {
        type: _mongoose.default.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});
const Note = _mongoose.default.model("Note", NoteSchema);
const _default = Note;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbW9kZWxzL05vdGUubW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RlRG9jdW1lbnQgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XHJcbiAgX2lkOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQ7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgaXNDb21wbGV0ZWQ6IGJvb2xlYW47XHJcbiAgdXNlcklkOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQ7XHJcbiAgY3JlYXRlZEF0OiBEYXRlO1xyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgTm90ZVNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgZW50ZXIgYSB0aXRsZSddLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgZW50ZXIgYSBjb250ZW50J10sXHJcbiAgICB9LFxyXG4gICAgaXNDb21wbGV0ZWQ6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgdXNlcklkOiB7XHJcbiAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCxcclxuICAgICAgcmVmOiAnVXNlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBOb3RlID0gbW9uZ29vc2UubW9kZWw8Tm90ZURvY3VtZW50PignTm90ZScsIE5vdGVTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiTm90ZVNjaGVtYSIsInRpdGxlIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY29udGVudCIsImlzQ29tcGxldGVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ1c2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwidGltZXN0YW1wcyIsIk5vdGUiLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF1Q0E7O2FBQUE7OytEQXZDcUI7Ozs7OztBQUNyQixNQUFNQSxTQUFTQyxpQkFBUSxDQUFDRCxNQUFNO0FBWTlCLE1BQU1FLGFBQWEsSUFBSUYsT0FDckI7SUFDRUcsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQXVCO0lBQzFDO0lBQ0FDLFNBQVM7UUFDUEgsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUF5QjtJQUM1QztJQUNBRSxhQUFhO1FBQ1hKLE1BQU1LO1FBQ05DLFNBQVMsS0FBSztJQUNoQjtJQUNBQyxRQUFRO1FBQ05QLE1BQU1ILGlCQUFRLENBQUNELE1BQU0sQ0FBQ1ksS0FBSyxDQUFDQyxRQUFRO1FBQ3BDQyxLQUFLO0lBQ1A7QUFDRixHQUNBO0lBQ0VDLFlBQVksSUFBSTtBQUNsQjtBQUdGLE1BQU1DLE9BQU9mLGlCQUFRLENBQUNnQixLQUFLLENBQWUsUUFBUWY7TUFFbEQsV0FBZWMifQ==