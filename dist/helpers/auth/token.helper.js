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
    sendJwtToClient: ()=>sendJwtToClient,
    isTokenIncluded: ()=>isTokenIncluded,
    getAccessTokenFromHeader: ()=>getAccessTokenFromHeader
});
const sendJwtToClient = (user, res, isRegister)=>{
    const token = user.generateJwtFromUser();
    const { NODE_ENV , JWT_COOKIE  } = process.env;
    return res.status(isRegister === "register" ? 201 : 200).cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000 * 60),
        secure: NODE_ENV === "development" ? false : true
    }).json({
        success: true,
        access_token: token,
        user: {
            firstName: user.firstName
        }
    });
};
const isTokenIncluded = (req)=>{
    return req.headers.authorization && req.headers.authorization.startsWith("Bearer");
};
const getAccessTokenFromHeader = (req)=>{
    const authorization = req.headers.authorization;
    const access_token = authorization.split(" ")[1];
    return access_token;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2F1dGgvdG9rZW4uaGVscGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyRG9jdW1lbnQgfSBmcm9tICcuLi8uLi9kYXRhYmFzZXMvbW9kZWxzL1VzZXIubW9kZWwnO1xuXG4vLyBHZW5lcmF0ZSBjb29raWUgdG8gdXNlclxuZXhwb3J0IGNvbnN0IHNlbmRKd3RUb0NsaWVudCA9IChcbiAgdXNlcjogVXNlckRvY3VtZW50LFxuICByZXM6IFJlc3BvbnNlLFxuICBpc1JlZ2lzdGVyOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCB0b2tlbiA9IHVzZXIuZ2VuZXJhdGVKd3RGcm9tVXNlcigpO1xuICBjb25zdCB7IE5PREVfRU5WLCBKV1RfQ09PS0lFIH0gPSBwcm9jZXNzLmVudjtcblxuICByZXR1cm4gcmVzXG4gICAgLnN0YXR1cyhpc1JlZ2lzdGVyID09PSAncmVnaXN0ZXInID8gMjAxIDogMjAwKVxuICAgIC5jb29raWUoJ2FjY2Vzc190b2tlbicsIHRva2VuLCB7XG4gICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBwYXJzZUludChKV1RfQ09PS0lFIGFzIGFueSkgKiAxMDAwICogNjApLFxuICAgICAgc2VjdXJlOiBOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGZhbHNlIDogdHJ1ZSxcbiAgICB9KVxuICAgIC5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBhY2Nlc3NfdG9rZW46IHRva2VuLFxuICAgICAgdXNlcjoge1xuICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxuICAgICAgfSxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1Rva2VuSW5jbHVkZWQgPSAocmVxOiBSZXF1ZXN0KSA9PiB7XG4gIHJldHVybiAoXG4gICAgcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbiAmJiByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnN0YXJ0c1dpdGgoJ0JlYXJlcicpXG4gICk7XG59O1xuXG4vLyBHZXQgYWNjZXNzIHRva2VuIGZyb20gaGVhZGVyXG5leHBvcnQgY29uc3QgZ2V0QWNjZXNzVG9rZW5Gcm9tSGVhZGVyID0gKHJlcTogUmVxdWVzdCkgPT4ge1xuICBjb25zdCBhdXRob3JpemF0aW9uOiBhbnkgPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICBjb25zdCBhY2Nlc3NfdG9rZW4gPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XG4gIHJldHVybiBhY2Nlc3NfdG9rZW47XG59O1xuIl0sIm5hbWVzIjpbInNlbmRKd3RUb0NsaWVudCIsImlzVG9rZW5JbmNsdWRlZCIsImdldEFjY2Vzc1Rva2VuRnJvbUhlYWRlciIsInVzZXIiLCJyZXMiLCJpc1JlZ2lzdGVyIiwidG9rZW4iLCJnZW5lcmF0ZUp3dEZyb21Vc2VyIiwiTk9ERV9FTlYiLCJKV1RfQ09PS0lFIiwicHJvY2VzcyIsImVudiIsInN0YXR1cyIsImNvb2tpZSIsImh0dHBPbmx5IiwiZXhwaXJlcyIsIkRhdGUiLCJub3ciLCJwYXJzZUludCIsInNlY3VyZSIsImpzb24iLCJzdWNjZXNzIiwiYWNjZXNzX3Rva2VuIiwiZmlyc3ROYW1lIiwicmVxIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGFydHNXaXRoIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBSWFBLGVBQWUsTUFBZkE7SUF3QkFDLGVBQWUsTUFBZkE7SUFPQUMsd0JBQXdCLE1BQXhCQTs7QUEvQk4sTUFBTUYsa0JBQWtCLENBQzdCRyxNQUNBQyxLQUNBQyxhQUNHO0lBQ0gsTUFBTUMsUUFBUUgsS0FBS0ksbUJBQW1CO0lBQ3RDLE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxXQUFVLEVBQUUsR0FBR0MsUUFBUUMsR0FBRztJQUU1QyxPQUFPUCxJQUNKUSxNQUFNLENBQUNQLGVBQWUsYUFBYSxNQUFNLEdBQUcsRUFDNUNRLE1BQU0sQ0FBQyxnQkFBZ0JQLE9BQU87UUFDN0JRLFVBQVUsSUFBSTtRQUNkQyxTQUFTLElBQUlDLEtBQUtBLEtBQUtDLEdBQUcsS0FBS0MsU0FBU1QsY0FBcUIsT0FBTztRQUNwRVUsUUFBUVgsYUFBYSxnQkFBZ0IsS0FBSyxHQUFHLElBQUk7SUFDbkQsR0FDQ1ksSUFBSSxDQUFDO1FBQ0pDLFNBQVMsSUFBSTtRQUNiQyxjQUFjaEI7UUFDZEgsTUFBTTtZQUNKb0IsV0FBV3BCLEtBQUtvQixTQUFTO1FBQzNCO0lBQ0Y7QUFDSjtBQUVPLE1BQU10QixrQkFBa0IsQ0FBQ3VCLE1BQWlCO0lBQy9DLE9BQ0VBLElBQUlDLE9BQU8sQ0FBQ0MsYUFBYSxJQUFJRixJQUFJQyxPQUFPLENBQUNDLGFBQWEsQ0FBQ0MsVUFBVSxDQUFDO0FBRXRFO0FBR08sTUFBTXpCLDJCQUEyQixDQUFDc0IsTUFBaUI7SUFDeEQsTUFBTUUsZ0JBQXFCRixJQUFJQyxPQUFPLENBQUNDLGFBQWE7SUFDcEQsTUFBTUosZUFBZUksY0FBY0UsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ2hELE9BQU9OO0FBQ1QifQ==