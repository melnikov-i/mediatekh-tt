"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var no_important_1 = require("aphrodite/no-important");
var styles = no_important_1.StyleSheet.create({
    table: {
        margin: '40px 0',
        borderCollapse: 'collapse',
    },
    tableCell: {
        fontSize: '12px',
        padding: '5px',
        borderCollapse: 'inherit',
        border: '1px solid #ccc',
    },
    tableSortUp: {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: '5px',
        borderRight: '5px solid transparent',
        borderLeft: '5px solid transparent',
        borderBottom: '10px solid #ccc',
        ':hover': {
            borderBottom: '10px solid #999',
        },
    },
    tableSortDown: {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: '5px',
        borderTop: '10px solid #ccc',
        borderRight: '5px solid transparent',
        borderLeft: '5px solid transparent',
        ':hover': {
            borderBottom: '10px solid #999',
        },
    },
    tableSortDownActive: {},
});
exports.default = styles;
//# sourceMappingURL=table-styles.js.map