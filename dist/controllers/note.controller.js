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
    createNote: ()=>createNote,
    isCompleted: ()=>isCompleted,
    getNoteById: ()=>getNoteById,
    updateNoteById: ()=>updateNoteById,
    deleteNoteById: ()=>deleteNoteById,
    getAllNotesByUser: ()=>getAllNotesByUser
});
const _expressAsyncHandler = /*#__PURE__*/ _interopRequireDefault(require("express-async-handler"));
const _noteModel = /*#__PURE__*/ _interopRequireDefault(require("../databases/models/Note.model"));
const _customError = /*#__PURE__*/ _interopRequireDefault(require("../helpers/errors/CustomError"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const createNote = (0, _expressAsyncHandler.default)(async (req, res)=>{
    const { title , content , isCompleted  } = req.body;
    // @ts-ignore
    const { id  } = req.user;
    await _noteModel.default.create({
        title,
        content,
        isCompleted,
        userId: id
    });
    res.status(201).json({
        success: true,
        message: "Note successfully created"
    });
});
const isCompleted = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    const { id  } = req.params;
    const note = await _noteModel.default.findById(id);
    if (!note) {
        return next(new _customError.default("There are not any note with this id", 404));
    }
    note.isCompleted = !note.isCompleted;
    await note.save();
    res.status(200).json({
        success: true,
        message: "Note successfully updated"
    });
});
const getNoteById = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    const { id  } = req.params;
    const note = await _noteModel.default.findById(id);
    if (!note) {
        return next(new _customError.default("This note is not available", 404));
    }
    res.status(200).json({
        success: true,
        note
    });
});
const updateNoteById = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    const { title , content , isCompleted  } = req.body;
    const { id  } = req.params;
    const note = await _noteModel.default.findById(id);
    if (!note) {
        return next(new _customError.default("This note is not available", 404));
    }
    if (title) {
        note.title = await title;
    }
    if (content) {
        note.content = await content;
    }
    note.isCompleted = await isCompleted;
    await note.save();
    res.status(200).json({
        success: true,
        message: "Note successfully updated"
    });
});
const deleteNoteById = (0, _expressAsyncHandler.default)(async (req, res, next)=>{
    const { id  } = req.params;
    const note = await _noteModel.default.findById(id);
    if (!note) {
        return next(new _customError.default("This note is not available", 404));
    }
    await note.delete();
    res.status(200).json({
        success: true,
        message: "Note successfully deleted"
    });
});
const getAllNotesByUser = (0, _expressAsyncHandler.default)(async (req, res)=>{
    // @ts-ignore
    const { id  } = req.user;
    const notes = await _noteModel.default.find({
        userId: id
    });
    return res.status(200).json({
        success: true,
        notes
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9ub3RlLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgZXhwcmVzc0FzeW5jSGFuZGxlciBmcm9tICdleHByZXNzLWFzeW5jLWhhbmRsZXInO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi9kYXRhYmFzZXMvbW9kZWxzL05vdGUubW9kZWwnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnLi4vaGVscGVycy9lcnJvcnMvQ3VzdG9tRXJyb3InO1xyXG5cclxuLy8gQ3JlYXRlIE5vdGVcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGUgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQsIGlzQ29tcGxldGVkIH0gPSByZXEuYm9keTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyO1xyXG5cclxuICAgIGF3YWl0IE5vdGUuY3JlYXRlKHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICAgIGlzQ29tcGxldGVkLFxyXG4gICAgICB1c2VySWQ6IGlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnTm90ZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBpcyBDb21wbGV0ZWRcclxuZXhwb3J0IGNvbnN0IGlzQ29tcGxldGVkID0gZXhwcmVzc0FzeW5jSGFuZGxlcihcclxuICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcblxyXG4gICAgY29uc3Qgbm90ZSA9IGF3YWl0IE5vdGUuZmluZEJ5SWQoaWQpO1xyXG5cclxuICAgIGlmICghbm90ZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChuZXcgQ3VzdG9tRXJyb3IoJ1RoZXJlIGFyZSBub3QgYW55IG5vdGUgd2l0aCB0aGlzIGlkJywgNDA0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm90ZS5pc0NvbXBsZXRlZCA9ICFub3RlLmlzQ29tcGxldGVkO1xyXG4gICAgYXdhaXQgbm90ZS5zYXZlKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnTm90ZSBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBHZXQgTm90ZSBCeSBJZFxyXG5leHBvcnQgY29uc3QgZ2V0Tm90ZUJ5SWQgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuXHJcbiAgICBjb25zdCBub3RlID0gYXdhaXQgTm90ZS5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgaWYgKCFub3RlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KG5ldyBDdXN0b21FcnJvcignVGhpcyBub3RlIGlzIG5vdCBhdmFpbGFibGUnLCA0MDQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG5vdGUsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBVcGRhdGUgTm90ZSBCeSBJZFxyXG5leHBvcnQgY29uc3QgdXBkYXRlTm90ZUJ5SWQgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgaXNDb21wbGV0ZWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuXHJcbiAgICBjb25zdCBub3RlID0gYXdhaXQgTm90ZS5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgaWYgKCFub3RlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KG5ldyBDdXN0b21FcnJvcignVGhpcyBub3RlIGlzIG5vdCBhdmFpbGFibGUnLCA0MDQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGl0bGUpIHtcclxuICAgICAgbm90ZS50aXRsZSA9IGF3YWl0IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIG5vdGUuY29udGVudCA9IGF3YWl0IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbm90ZS5pc0NvbXBsZXRlZCA9IGF3YWl0IGlzQ29tcGxldGVkO1xyXG5cclxuICAgIGF3YWl0IG5vdGUuc2F2ZSgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAgbWVzc2FnZTogJ05vdGUgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4pO1xyXG5cclxuLy8gRGVsZXRlIE5vdGUgQnkgSWRcclxuZXhwb3J0IGNvbnN0IGRlbGV0ZU5vdGVCeUlkID0gZXhwcmVzc0FzeW5jSGFuZGxlcihcclxuICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcblxyXG4gICAgY29uc3Qgbm90ZSA9IGF3YWl0IE5vdGUuZmluZEJ5SWQoaWQpO1xyXG5cclxuICAgIGlmICghbm90ZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChuZXcgQ3VzdG9tRXJyb3IoJ1RoaXMgbm90ZSBpcyBub3QgYXZhaWxhYmxlJywgNDA0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgbm90ZS5kZWxldGUoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6ICdOb3RlIHN1Y2Nlc3NmdWxseSBkZWxldGVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxuKTtcclxuXHJcbi8vIEdldCBhbGwgbm90ZXMgYnkgdXNlclxyXG5leHBvcnQgY29uc3QgZ2V0QWxsTm90ZXNCeVVzZXIgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnVzZXI7XHJcblxyXG4gICAgY29uc3Qgbm90ZXMgPSBhd2FpdCBOb3RlLmZpbmQoeyB1c2VySWQ6IGlkIH0pO1xyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG5vdGVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4pO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlTm90ZSIsImlzQ29tcGxldGVkIiwiZ2V0Tm90ZUJ5SWQiLCJ1cGRhdGVOb3RlQnlJZCIsImRlbGV0ZU5vdGVCeUlkIiwiZ2V0QWxsTm90ZXNCeVVzZXIiLCJleHByZXNzQXN5bmNIYW5kbGVyIiwicmVxIiwicmVzIiwidGl0bGUiLCJjb250ZW50IiwiYm9keSIsImlkIiwidXNlciIsIk5vdGUiLCJjcmVhdGUiLCJ1c2VySWQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJuZXh0IiwicGFyYW1zIiwibm90ZSIsImZpbmRCeUlkIiwiQ3VzdG9tRXJyb3IiLCJzYXZlIiwiZGVsZXRlIiwibm90ZXMiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1hQSxVQUFVLE1BQVZBO0lBcUJBQyxXQUFXLE1BQVhBO0lBcUJBQyxXQUFXLE1BQVhBO0lBa0JBQyxjQUFjLE1BQWRBO0lBK0JBQyxjQUFjLE1BQWRBO0lBb0JBQyxpQkFBaUIsTUFBakJBOzswRUFwSG1CO2dFQUNmO2tFQUNPOzs7Ozs7QUFHakIsTUFBTUwsYUFBYU0sSUFBQUEsNEJBQW1CLEVBQzNDLE9BQU9DLEtBQWNDLE1BQWtCO0lBQ3JDLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUVULFlBQVcsRUFBRSxHQUFHTSxJQUFJSSxJQUFJO0lBQ2hELGFBQWE7SUFDYixNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHTCxJQUFJTSxJQUFJO0lBRXZCLE1BQU1DLGtCQUFJLENBQUNDLE1BQU0sQ0FBQztRQUNoQk47UUFDQUM7UUFDQVQ7UUFDQWUsUUFBUUo7SUFDVjtJQUVBSixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ25CQyxTQUFTLElBQUk7UUFDYkMsU0FBUztJQUNYO0FBQ0Y7QUFJSyxNQUFNbkIsY0FBY0ssSUFBQUEsNEJBQW1CLEVBQzVDLE9BQU9DLEtBQWNDLEtBQWVhLE9BQXVCO0lBQ3pELE1BQU0sRUFBRVQsR0FBRSxFQUFFLEdBQUdMLElBQUllLE1BQU07SUFFekIsTUFBTUMsT0FBTyxNQUFNVCxrQkFBSSxDQUFDVSxRQUFRLENBQUNaO0lBRWpDLElBQUksQ0FBQ1csTUFBTTtRQUNULE9BQU9GLEtBQUssSUFBSUksb0JBQVcsQ0FBQyx1Q0FBdUM7SUFDckUsQ0FBQztJQUVERixLQUFLdEIsV0FBVyxHQUFHLENBQUNzQixLQUFLdEIsV0FBVztJQUNwQyxNQUFNc0IsS0FBS0csSUFBSTtJQUVmbEIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNuQkMsU0FBUyxJQUFJO1FBQ2JDLFNBQVM7SUFDWDtBQUNGO0FBSUssTUFBTWxCLGNBQWNJLElBQUFBLDRCQUFtQixFQUM1QyxPQUFPQyxLQUFjQyxLQUFlYSxPQUF1QjtJQUN6RCxNQUFNLEVBQUVULEdBQUUsRUFBRSxHQUFHTCxJQUFJZSxNQUFNO0lBRXpCLE1BQU1DLE9BQU8sTUFBTVQsa0JBQUksQ0FBQ1UsUUFBUSxDQUFDWjtJQUVqQyxJQUFJLENBQUNXLE1BQU07UUFDVCxPQUFPRixLQUFLLElBQUlJLG9CQUFXLENBQUMsOEJBQThCO0lBQzVELENBQUM7SUFFRGpCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDbkJDLFNBQVMsSUFBSTtRQUNiSTtJQUNGO0FBQ0Y7QUFJSyxNQUFNcEIsaUJBQWlCRyxJQUFBQSw0QkFBbUIsRUFDL0MsT0FBT0MsS0FBY0MsS0FBZWEsT0FBdUI7SUFDekQsTUFBTSxFQUFFWixNQUFLLEVBQUVDLFFBQU8sRUFBRVQsWUFBVyxFQUFFLEdBQUdNLElBQUlJLElBQUk7SUFDaEQsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0wsSUFBSWUsTUFBTTtJQUV6QixNQUFNQyxPQUFPLE1BQU1ULGtCQUFJLENBQUNVLFFBQVEsQ0FBQ1o7SUFFakMsSUFBSSxDQUFDVyxNQUFNO1FBQ1QsT0FBT0YsS0FBSyxJQUFJSSxvQkFBVyxDQUFDLDhCQUE4QjtJQUM1RCxDQUFDO0lBRUQsSUFBSWhCLE9BQU87UUFDVGMsS0FBS2QsS0FBSyxHQUFHLE1BQU1BO0lBQ3JCLENBQUM7SUFFRCxJQUFJQyxTQUFTO1FBQ1hhLEtBQUtiLE9BQU8sR0FBRyxNQUFNQTtJQUN2QixDQUFDO0lBRURhLEtBQUt0QixXQUFXLEdBQUcsTUFBTUE7SUFFekIsTUFBTXNCLEtBQUtHLElBQUk7SUFFZmxCLElBQUlTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFDbkJDLFNBQVMsSUFBSTtRQUNiQyxTQUFTO0lBQ1g7QUFDRjtBQUlLLE1BQU1oQixpQkFBaUJFLElBQUFBLDRCQUFtQixFQUMvQyxPQUFPQyxLQUFjQyxLQUFlYSxPQUF1QjtJQUN6RCxNQUFNLEVBQUVULEdBQUUsRUFBRSxHQUFHTCxJQUFJZSxNQUFNO0lBRXpCLE1BQU1DLE9BQU8sTUFBTVQsa0JBQUksQ0FBQ1UsUUFBUSxDQUFDWjtJQUVqQyxJQUFJLENBQUNXLE1BQU07UUFDVCxPQUFPRixLQUFLLElBQUlJLG9CQUFXLENBQUMsOEJBQThCO0lBQzVELENBQUM7SUFFRCxNQUFNRixLQUFLSSxNQUFNO0lBRWpCbkIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNuQkMsU0FBUyxJQUFJO1FBQ2JDLFNBQVM7SUFDWDtBQUNGO0FBSUssTUFBTWYsb0JBQW9CQyxJQUFBQSw0QkFBbUIsRUFDbEQsT0FBT0MsS0FBY0MsTUFBZ0M7SUFDbkQsYUFBYTtJQUNiLE1BQU0sRUFBRUksR0FBRSxFQUFFLEdBQUdMLElBQUlNLElBQUk7SUFFdkIsTUFBTWUsUUFBUSxNQUFNZCxrQkFBSSxDQUFDZSxJQUFJLENBQUM7UUFBRWIsUUFBUUo7SUFBRztJQUUzQyxPQUFPSixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQzFCQyxTQUFTLElBQUk7UUFDYlM7SUFDRjtBQUNGIn0=