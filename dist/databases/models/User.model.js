"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = /*#__PURE__*/ _interopRequireDefault(require("mongoose"));
const _bcryptjs = /*#__PURE__*/ _interopRequireDefault(require("bcryptjs"));
const _jsonwebtoken = /*#__PURE__*/ _interopRequireDefault(require("jsonwebtoken"));
const _noteModel = /*#__PURE__*/ _interopRequireDefault(require("./Note.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const Schema = _mongoose.default.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [
            true,
            "Please enter a first name"
        ]
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: [
            true,
            "Please enter a email address"
        ],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Please enter a password"
        ],
        minlength: [
            6,
            "Password must be a minimum of 6 characters"
        ],
        select: false
    }
}, {
    timestamps: true
});
// Generate Json Web Token From User
UserSchema.methods.generateJwtFromUser = function() {
    const { JSON_SECRET_KEY , JWT_EXPIRE  } = process.env;
    const payload = {
        id: this._id,
        email: this.email
    };
    const token = _jsonwebtoken.default.sign(payload, JSON_SECRET_KEY, {
        expiresIn: JWT_EXPIRE
    });
    return token;
};
// Password hashing
UserSchema.pre("save", function(next) {
    if (!this.isModified("password")) {
        next();
    }
    _bcryptjs.default.genSalt(10, (err, salt)=>{
        if (err) next(err);
        _bcryptjs.default.hash(this.password, salt, (err, hash)=>{
            if (err) next(err);
            this.password = hash;
            next();
        });
    });
});
// Delete notes when user deleted
UserSchema.pre("remove", async function(next) {
    await _noteModel.default.deleteMany({
        //@ts-ignore
        userId: this._id
    });
    next();
});
const User = _mongoose.default.model("user", UserSchema);
const _default = User;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbW9kZWxzL1VzZXIubW9kZWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IE5vdGUgZnJvbSAnLi9Ob3RlLm1vZGVsJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyRG9jdW1lbnQgZXh0ZW5kcyBtb25nb29zZS5Eb2N1bWVudCB7XHJcbiAgX2lkOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQ7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBEYXRlO1xyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxuICBnZW5lcmF0ZUp3dEZyb21Vc2VyKCk6IFByb21pc2U8c3RyaW5nPjtcclxufVxyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAge1xyXG4gICAgZmlyc3ROYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGVudGVyIGEgZmlyc3QgbmFtZSddLFxyXG4gICAgfSxcclxuICAgIGxhc3ROYW1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBlbWFpbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGVudGVyIGEgZW1haWwgYWRkcmVzcyddLFxyXG4gICAgICBtYXRjaDogW1xyXG4gICAgICAgIC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8sXHJcbiAgICAgICAgJ1BsZWFzZSBmaWxsIGEgdmFsaWQgZW1haWwgYWRkcmVzcycsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCddLFxyXG4gICAgICBtaW5sZW5ndGg6IFs2LCAnUGFzc3dvcmQgbXVzdCBiZSBhIG1pbmltdW0gb2YgNiBjaGFyYWN0ZXJzJ10sXHJcbiAgICAgIHNlbGVjdDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG4vLyBHZW5lcmF0ZSBKc29uIFdlYiBUb2tlbiBGcm9tIFVzZXJcclxuVXNlclNjaGVtYS5tZXRob2RzLmdlbmVyYXRlSnd0RnJvbVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgeyBKU09OX1NFQ1JFVF9LRVksIEpXVF9FWFBJUkUgfSA9IHByb2Nlc3MuZW52O1xyXG5cclxuICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgaWQ6IHRoaXMuX2lkLFxyXG4gICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihwYXlsb2FkLCBKU09OX1NFQ1JFVF9LRVkgYXMgc3RyaW5nLCB7XHJcbiAgICBleHBpcmVzSW46IEpXVF9FWFBJUkUsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRva2VuO1xyXG59O1xyXG5cclxuLy8gUGFzc3dvcmQgaGFzaGluZ1xyXG5Vc2VyU2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XHJcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHtcclxuICAgIG5leHQoKTtcclxuICB9XHJcblxyXG4gIGJjcnlwdC5nZW5TYWx0KDEwLCAoZXJyLCBzYWx0KSA9PiB7XHJcbiAgICBpZiAoZXJyKSBuZXh0KGVycik7XHJcbiAgICBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0LCAoZXJyLCBoYXNoKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIG5leHQoZXJyKTtcclxuICAgICAgdGhpcy5wYXNzd29yZCA9IGhhc2g7XHJcbiAgICAgIG5leHQoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIERlbGV0ZSBub3RlcyB3aGVuIHVzZXIgZGVsZXRlZFxyXG5Vc2VyU2NoZW1hLnByZSgncmVtb3ZlJywgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcclxuICBhd2FpdCBOb3RlLmRlbGV0ZU1hbnkoe1xyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICB1c2VySWQ6IHRoaXMuX2lkLFxyXG4gIH0pO1xyXG4gIG5leHQoKTtcclxufSk7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWw8VXNlckRvY3VtZW50PigndXNlcicsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIlNjaGVtYSIsIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJtYXRjaCIsInBhc3N3b3JkIiwibWlubGVuZ3RoIiwic2VsZWN0IiwidGltZXN0YW1wcyIsIm1ldGhvZHMiLCJnZW5lcmF0ZUp3dEZyb21Vc2VyIiwiSlNPTl9TRUNSRVRfS0VZIiwiSldUX0VYUElSRSIsInByb2Nlc3MiLCJlbnYiLCJwYXlsb2FkIiwiaWQiLCJfaWQiLCJ0b2tlbiIsImp3dCIsInNpZ24iLCJleHBpcmVzSW4iLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsImJjcnlwdCIsImdlblNhbHQiLCJlcnIiLCJzYWx0IiwiaGFzaCIsIk5vdGUiLCJkZWxldGVNYW55IiwidXNlcklkIiwiVXNlciIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7OytCQTJGQTs7YUFBQTs7K0RBM0ZxQjsrREFDRjttRUFDSDtnRUFDQzs7Ozs7O0FBR2pCLE1BQU1BLFNBQVNDLGlCQUFRLENBQUNELE1BQU07QUFhOUIsTUFBTUUsYUFBYSxJQUFJRixPQUNyQjtJQUNFRyxXQUFXO1FBQ1RDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBNEI7SUFDL0M7SUFDQUMsVUFBVTtRQUNSSCxNQUFNQztJQUNSO0lBQ0FHLE9BQU87UUFDTEosTUFBTUM7UUFDTkksUUFBUSxJQUFJO1FBQ1pILFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBK0I7UUFDaERJLE9BQU87WUFDTDtZQUNBO1NBQ0Q7SUFDSDtJQUNBQyxVQUFVO1FBQ1JQLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBMEI7UUFDM0NNLFdBQVc7WUFBQztZQUFHO1NBQTZDO1FBQzVEQyxRQUFRLEtBQUs7SUFDZjtBQUNGLEdBQ0E7SUFDRUMsWUFBWSxJQUFJO0FBQ2xCO0FBR0Ysb0NBQW9DO0FBQ3BDWixXQUFXYSxPQUFPLENBQUNDLG1CQUFtQixHQUFHLFdBQVk7SUFDbkQsTUFBTSxFQUFFQyxnQkFBZSxFQUFFQyxXQUFVLEVBQUUsR0FBR0MsUUFBUUMsR0FBRztJQUVuRCxNQUFNQyxVQUFVO1FBQ2RDLElBQUksSUFBSSxDQUFDQyxHQUFHO1FBQ1pmLE9BQU8sSUFBSSxDQUFDQSxLQUFLO0lBQ25CO0lBRUEsTUFBTWdCLFFBQVFDLHFCQUFHLENBQUNDLElBQUksQ0FBQ0wsU0FBU0osaUJBQTJCO1FBQ3pEVSxXQUFXVDtJQUNiO0lBQ0EsT0FBT007QUFDVDtBQUVBLG1CQUFtQjtBQUNuQnRCLFdBQVcwQixHQUFHLENBQUMsUUFBUSxTQUFVQyxJQUFJLEVBQUU7SUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLGFBQWE7UUFDaENEO0lBQ0YsQ0FBQztJQUVERSxpQkFBTSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDQyxLQUFLQyxPQUFTO1FBQ2hDLElBQUlELEtBQUtKLEtBQUtJO1FBQ2RGLGlCQUFNLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUN4QixRQUFRLEVBQUV1QixNQUFNLENBQUNELEtBQUtFLE9BQVM7WUFDOUMsSUFBSUYsS0FBS0osS0FBS0k7WUFDZCxJQUFJLENBQUN0QixRQUFRLEdBQUd3QjtZQUNoQk47UUFDRjtJQUNGO0FBQ0Y7QUFFQSxpQ0FBaUM7QUFDakMzQixXQUFXMEIsR0FBRyxDQUFDLFVBQVUsZUFBZ0JDLElBQUksRUFBRTtJQUM3QyxNQUFNTyxrQkFBSSxDQUFDQyxVQUFVLENBQUM7UUFDcEIsWUFBWTtRQUNaQyxRQUFRLElBQUksQ0FBQ2YsR0FBRztJQUNsQjtJQUNBTTtBQUNGO0FBRUEsTUFBTVUsT0FBT3RDLGlCQUFRLENBQUN1QyxLQUFLLENBQWUsUUFBUXRDO01BRWxELFdBQWVxQyJ9