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
// import log from '../tools/index';
const connectDatabase = ()=>{
    const dbUri = process.env.MONGO_URI;
    _mongoose.default.set("strictQuery", true);
    return _mongoose.default.connect(dbUri, {
        //@ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.info("MongoDB Connection Successful");
    }).catch((err)=>{
        console.error(err);
    });
};
const _default = connectDatabase;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZXMvY29ubmVjdERhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbi8vIGltcG9ydCBsb2cgZnJvbSAnLi4vdG9vbHMvaW5kZXgnO1xyXG5cclxuY29uc3QgY29ubmVjdERhdGFiYXNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRiVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJIGFzIHN0cmluZztcclxuXHJcbiAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIHRydWUpO1xyXG4gIHJldHVybiBtb25nb29zZVxyXG4gICAgLmNvbm5lY3QoZGJVcmksIHtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5pbmZvKCdNb25nb0RCIENvbm5lY3Rpb24gU3VjY2Vzc2Z1bCcpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERhdGFiYXNlO1xyXG4iXSwibmFtZXMiOlsiY29ubmVjdERhdGFiYXNlIiwiZGJVcmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwibW9uZ29vc2UiLCJzZXQiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImNvbnNvbGUiLCJpbmZvIiwiY2F0Y2giLCJlcnIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7O2FBQUE7OytEQXJCcUI7Ozs7OztBQUNyQixvQ0FBb0M7QUFFcEMsTUFBTUEsa0JBQWtCLElBQU07SUFDNUIsTUFBTUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBRW5DQyxpQkFBUSxDQUFDQyxHQUFHLENBQUMsZUFBZSxJQUFJO0lBQ2hDLE9BQU9ELGlCQUFRLENBQ1pFLE9BQU8sQ0FBQ04sT0FBTztRQUNkLFlBQVk7UUFDWk8saUJBQWlCLElBQUk7UUFDckJDLG9CQUFvQixJQUFJO0lBQzFCLEdBQ0NDLElBQUksQ0FBQyxJQUFNO1FBQ1ZDLFFBQVFDLElBQUksQ0FBQztJQUNmLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxNQUFRO1FBQ2RILFFBQVFJLEtBQUssQ0FBQ0Q7SUFDaEI7QUFDSjtNQUVBLFdBQWVkIn0=