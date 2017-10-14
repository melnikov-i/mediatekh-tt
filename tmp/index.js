"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store");
var containers_1 = require("./containers");
var Root = (React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(containers_1.App, null)));
react_dom_1.render(Root, document.getElementById('app'));
//# sourceMappingURL=index.js.map