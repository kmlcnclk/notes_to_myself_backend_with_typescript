"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _mongoose = /*#__PURE__*/ _interopRequireDefault(require("mongoose"));
const _index = /*#__PURE__*/ _interopRequireDefault(require("../tools/index"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const connectDatabase = ()=>{
    const dbUri = process.env.MONGO_URI;
    _mongoose.default.set("strictQuery", true);
    return _mongoose.default.connect(dbUri, {
        //@ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        _index.default.info("MongoDB Connection Successful");
    }).catch((err)=>{
        _index.default.error(err);
    });
};
const _default = connectDatabase;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZXMvY29ubmVjdERhdGFiYXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdG9vbHMvaW5kZXgnO1xyXG5cclxuY29uc3QgY29ubmVjdERhdGFiYXNlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRiVXJpID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJIGFzIHN0cmluZztcclxuXHJcbiAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIHRydWUpO1xyXG4gIHJldHVybiBtb25nb29zZVxyXG4gICAgLmNvbm5lY3QoZGJVcmksIHtcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgbG9nLmluZm8oJ01vbmdvREIgQ29ubmVjdGlvbiBTdWNjZXNzZnVsJyk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbG9nLmVycm9yKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYXRhYmFzZTtcclxuIl0sIm5hbWVzIjpbImNvbm5lY3REYXRhYmFzZSIsImRiVXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsIm1vbmdvb3NlIiwic2V0IiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInRoZW4iLCJsb2ciLCJpbmZvIiwiY2F0Y2giLCJlcnIiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7O2FBQUE7OytEQXJCcUI7NERBQ0w7Ozs7OztBQUVoQixNQUFNQSxrQkFBa0IsSUFBTTtJQUM1QixNQUFNQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7SUFFbkNDLGlCQUFRLENBQUNDLEdBQUcsQ0FBQyxlQUFlLElBQUk7SUFDaEMsT0FBT0QsaUJBQVEsQ0FDWkUsT0FBTyxDQUFDTixPQUFPO1FBQ2QsWUFBWTtRQUNaTyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDMUIsR0FDQ0MsSUFBSSxDQUFDLElBQU07UUFDVkMsY0FBRyxDQUFDQyxJQUFJLENBQUM7SUFDWCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsTUFBUTtRQUNkSCxjQUFHLENBQUNJLEtBQUssQ0FBQ0Q7SUFDWjtBQUNKO01BRUEsV0FBZWQifQ==