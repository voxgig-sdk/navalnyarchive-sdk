"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavalnyarchiveError = void 0;
class NavalnyarchiveError extends Error {
    isNavalnyarchiveError = true;
    sdk = 'Navalnyarchive';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.NavalnyarchiveError = NavalnyarchiveError;
//# sourceMappingURL=NavalnyarchiveError.js.map