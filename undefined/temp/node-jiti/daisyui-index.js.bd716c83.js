"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _packagejson = require('./package.json');
var _pluginOptionsHandlerjs = require('./functions/pluginOptionsHandler.js');
var _pluginjs = require('./functions/plugin.js');
var _variablesjs = require('./functions/variables.js'); var _variablesjs2 = _interopRequireDefault(_variablesjs);
var _objectjs = require('./theme/object.js'); var _objectjs2 = _interopRequireDefault(_objectjs);
var _importsjs = require('./imports.js');

exports. default = _pluginjs.plugin.withOptions(
  (options) => {
    return ({ addBase, addComponents, addUtilities }) => {
      const {
        include,
        exclude,
        prefix = "",
      } = _pluginOptionsHandlerjs.pluginOptionsHandler.call(void 0, options, addBase, _objectjs2.default, _packagejson.version)

      const shouldIncludeItem = (name) => {
        if (include && exclude) {
          return include.includes(name) && !exclude.includes(name)
        }
        if (include) {
          return include.includes(name)
        }
        if (exclude) {
          return !exclude.includes(name)
        }
        return true
      }

      Object.entries(_importsjs.base).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({ addBase, prefix })
      })

      Object.entries(_importsjs.components).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({ addComponents, prefix })
      })

      Object.entries(_importsjs.utilities).forEach(([name, item]) => {
        if (!shouldIncludeItem(name)) return
        item({ addUtilities, prefix })
      })
    }
  },
  () => ({
    theme: {
      extend: _variablesjs2.default,
    },
  }),
)
 /* v7-fbc8b5d22f1f08fe */