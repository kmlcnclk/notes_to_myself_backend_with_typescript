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
    if (isCompleted) {
        note.isCompleted = await isCompleted;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9ub3RlLmNvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgZXhwcmVzc0FzeW5jSGFuZGxlciBmcm9tICdleHByZXNzLWFzeW5jLWhhbmRsZXInO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuLi9kYXRhYmFzZXMvbW9kZWxzL05vdGUubW9kZWwnO1xyXG5pbXBvcnQgQ3VzdG9tRXJyb3IgZnJvbSAnLi4vaGVscGVycy9lcnJvcnMvQ3VzdG9tRXJyb3InO1xyXG5cclxuLy8gQ3JlYXRlIE5vdGVcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vdGUgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQsIGlzQ29tcGxldGVkIH0gPSByZXEuYm9keTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyO1xyXG5cclxuICAgIGF3YWl0IE5vdGUuY3JlYXRlKHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGNvbnRlbnQsXHJcbiAgICAgIGlzQ29tcGxldGVkLFxyXG4gICAgICB1c2VySWQ6IGlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnTm90ZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBpcyBDb21wbGV0ZWRcclxuZXhwb3J0IGNvbnN0IGlzQ29tcGxldGVkID0gZXhwcmVzc0FzeW5jSGFuZGxlcihcclxuICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS5wYXJhbXM7XHJcblxyXG4gICAgY29uc3Qgbm90ZSA9IGF3YWl0IE5vdGUuZmluZEJ5SWQoaWQpO1xyXG5cclxuICAgIGlmICghbm90ZSkge1xyXG4gICAgICByZXR1cm4gbmV4dChuZXcgQ3VzdG9tRXJyb3IoJ1RoZXJlIGFyZSBub3QgYW55IG5vdGUgd2l0aCB0aGlzIGlkJywgNDA0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm90ZS5pc0NvbXBsZXRlZCA9ICFub3RlLmlzQ29tcGxldGVkO1xyXG4gICAgYXdhaXQgbm90ZS5zYXZlKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnTm90ZSBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBHZXQgTm90ZSBCeSBJZFxyXG5leHBvcnQgY29uc3QgZ2V0Tm90ZUJ5SWQgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuXHJcbiAgICBjb25zdCBub3RlID0gYXdhaXQgTm90ZS5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgaWYgKCFub3RlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KG5ldyBDdXN0b21FcnJvcignVGhpcyBub3RlIGlzIG5vdCBhdmFpbGFibGUnLCA0MDQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG5vdGUsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBVcGRhdGUgTm90ZSBCeSBJZFxyXG5leHBvcnQgY29uc3QgdXBkYXRlTm90ZUJ5SWQgPSBleHByZXNzQXN5bmNIYW5kbGVyKFxyXG4gIGFzeW5jIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgaXNDb21wbGV0ZWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcclxuXHJcbiAgICBjb25zdCBub3RlID0gYXdhaXQgTm90ZS5maW5kQnlJZChpZCk7XHJcblxyXG4gICAgaWYgKCFub3RlKSB7XHJcbiAgICAgIHJldHVybiBuZXh0KG5ldyBDdXN0b21FcnJvcignVGhpcyBub3RlIGlzIG5vdCBhdmFpbGFibGUnLCA0MDQpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGl0bGUpIHtcclxuICAgICAgbm90ZS50aXRsZSA9IGF3YWl0IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgIG5vdGUuY29udGVudCA9IGF3YWl0IGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQ29tcGxldGVkKSB7XHJcbiAgICAgIG5vdGUuaXNDb21wbGV0ZWQgPSBhd2FpdCBpc0NvbXBsZXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBub3RlLnNhdmUoKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgIG1lc3NhZ2U6ICdOb3RlIHN1Y2Nlc3NmdWxseSB1cGRhdGVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxuKTtcclxuXHJcbi8vIERlbGV0ZSBOb3RlIEJ5IElkXHJcbmV4cG9ydCBjb25zdCBkZWxldGVOb3RlQnlJZCA9IGV4cHJlc3NBc3luY0hhbmRsZXIoXHJcbiAgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByZXEucGFyYW1zO1xyXG5cclxuICAgIGNvbnN0IG5vdGUgPSBhd2FpdCBOb3RlLmZpbmRCeUlkKGlkKTtcclxuXHJcbiAgICBpZiAoIW5vdGUpIHtcclxuICAgICAgcmV0dXJuIG5leHQobmV3IEN1c3RvbUVycm9yKCdUaGlzIG5vdGUgaXMgbm90IGF2YWlsYWJsZScsIDQwNCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IG5vdGUuZGVsZXRlKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBtZXNzYWdlOiAnTm90ZSBzdWNjZXNzZnVsbHkgZGVsZXRlZCcsXHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG4vLyBHZXQgYWxsIG5vdGVzIGJ5IHVzZXJcclxuZXhwb3J0IGNvbnN0IGdldEFsbE5vdGVzQnlVc2VyID0gZXhwcmVzc0FzeW5jSGFuZGxlcihcclxuICBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJlcS51c2VyO1xyXG5cclxuICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgTm90ZS5maW5kKHsgdXNlcklkOiBpZCB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICBub3RlcyxcclxuICAgIH0pO1xyXG4gIH1cclxuKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZU5vdGUiLCJpc0NvbXBsZXRlZCIsImdldE5vdGVCeUlkIiwidXBkYXRlTm90ZUJ5SWQiLCJkZWxldGVOb3RlQnlJZCIsImdldEFsbE5vdGVzQnlVc2VyIiwiZXhwcmVzc0FzeW5jSGFuZGxlciIsInJlcSIsInJlcyIsInRpdGxlIiwiY29udGVudCIsImJvZHkiLCJpZCIsInVzZXIiLCJOb3RlIiwiY3JlYXRlIiwidXNlcklkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwibmV4dCIsInBhcmFtcyIsIm5vdGUiLCJmaW5kQnlJZCIsIkN1c3RvbUVycm9yIiwic2F2ZSIsImRlbGV0ZSIsIm5vdGVzIiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNYUEsVUFBVSxNQUFWQTtJQXFCQUMsV0FBVyxNQUFYQTtJQXFCQUMsV0FBVyxNQUFYQTtJQWtCQUMsY0FBYyxNQUFkQTtJQWlDQUMsY0FBYyxNQUFkQTtJQW9CQUMsaUJBQWlCLE1BQWpCQTs7MEVBdEhtQjtnRUFDZjtrRUFDTzs7Ozs7O0FBR2pCLE1BQU1MLGFBQWFNLElBQUFBLDRCQUFtQixFQUMzQyxPQUFPQyxLQUFjQyxNQUFrQjtJQUNyQyxNQUFNLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFVCxZQUFXLEVBQUUsR0FBR00sSUFBSUksSUFBSTtJQUNoRCxhQUFhO0lBQ2IsTUFBTSxFQUFFQyxHQUFFLEVBQUUsR0FBR0wsSUFBSU0sSUFBSTtJQUV2QixNQUFNQyxrQkFBSSxDQUFDQyxNQUFNLENBQUM7UUFDaEJOO1FBQ0FDO1FBQ0FUO1FBQ0FlLFFBQVFKO0lBQ1Y7SUFFQUosSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNuQkMsU0FBUyxJQUFJO1FBQ2JDLFNBQVM7SUFDWDtBQUNGO0FBSUssTUFBTW5CLGNBQWNLLElBQUFBLDRCQUFtQixFQUM1QyxPQUFPQyxLQUFjQyxLQUFlYSxPQUF1QjtJQUN6RCxNQUFNLEVBQUVULEdBQUUsRUFBRSxHQUFHTCxJQUFJZSxNQUFNO0lBRXpCLE1BQU1DLE9BQU8sTUFBTVQsa0JBQUksQ0FBQ1UsUUFBUSxDQUFDWjtJQUVqQyxJQUFJLENBQUNXLE1BQU07UUFDVCxPQUFPRixLQUFLLElBQUlJLG9CQUFXLENBQUMsdUNBQXVDO0lBQ3JFLENBQUM7SUFFREYsS0FBS3RCLFdBQVcsR0FBRyxDQUFDc0IsS0FBS3RCLFdBQVc7SUFDcEMsTUFBTXNCLEtBQUtH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