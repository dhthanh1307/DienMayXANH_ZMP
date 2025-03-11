"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _objectjs = require('./object.js'); var _objectjs2 = _interopRequireDefault(_objectjs);
var _addPrefixjs = require('../../functions/addPrefix.js');

exports. default = ({ addComponents, prefix = '' }) => {
  const prefixedlist = _addPrefixjs.addPrefix.call(void 0, _objectjs2.default, prefix);
  addComponents({ ...prefixedlist });
};
 /* v7-d9eb8a1a9b56234f */