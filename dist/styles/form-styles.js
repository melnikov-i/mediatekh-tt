"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var styles = no_important_1.StyleSheet.create({
    formButton: {
        display: 'block',
        width: '200px',
        height: '30px',
        lineHeight: '30px',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: 'green',
        textAlign: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        '::selection': {
            backgroundColor: 'transparent',
        },
    },
    formButtonWrapper: {
        width: '100%',
        height: '30px',
        lineHeight: '30px',
        marginBottom: 0,
    },
});
exports.default = styles;
//# sourceMappingURL=form-styles.js.map