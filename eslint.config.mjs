import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

const reactPlugin = await import('eslint-plugin-react');
const tsPlugin = await import('@typescript-eslint/eslint-plugin');
const tsParser = await import('@typescript-eslint/parser');
const simpleImportSortPlugin = await import('eslint-plugin-simple-import-sort');
const pluginJs = await import('@eslint/js');
const reactHooks = await import('eslint-plugin-react-hooks');
const reactRefresh = await import('eslint-plugin-react-refresh');
const prettierPlugin = await import('eslint-plugin-prettier');
const jsxA11yPlugin = await import('eslint-plugin-jsx-a11y');
const eslintTailwindcss = await import('eslint-plugin-tailwindcss');

/**
 * @fileoverview Cấu hình ESLint sử dụng cấu trúc flat config. KHÔNG TỰ Ý THAY ĐỔI RULES CONFIGS
 *
 * @enum {number}
 * @readonly
 * @property {0} OFF - Tắt rule.
 * @property {1} WARN - Cảnh báo (warning).
 * @property {2} ERROR - Báo lỗi (error).
 */

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser.default,
      globals: {
        ...globals.browser,
        ...globals.node,
        NodeJS: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: 'module',
      },
    },
    plugins: {
      react: reactPlugin.default,
      '@typescript-eslint': tsPlugin.default,
      'simple-import-sort': simpleImportSortPlugin.default,
      'jsx-a11y': jsxA11yPlugin.default, // Ensure this is added
      pluginJs: pluginJs.default,
      'react-hooks': reactHooks.default,
      'react-refresh': reactRefresh.default,
      prettierPlugin: prettierPlugin.default,
      tailwindcss: eslintTailwindcss.default,
    },
    ignores: [
      'internals/scripts',
      'internals/generators',
      'internals/templates',
      'public/',
      '*.html',
      'node_modules',
      'coverage',
      'build/',
      'README.md',
      '*.mjs',
      '*.json',
    ],
    rules: {
      // Tắt kiểm tra Prettier trong ESLint (để dùng plugin Prettier riêng)
      'prettier/prettier': 0,

      // Bật kiểm tra đúng quy tắc React Hooks
      'react-hooks/rules-of-hooks': 2,

      // Không yêu cầu tất cả dependency trong useEffect phải có mặt
      'react-hooks/exhaustive-deps': 0,

      // Không bắt buộc phải import React trong file JSX (vì React 17+ không cần)
      'react/react-in-jsx-scope': 0,

      // Cảnh báo nếu component không có display name (tốt cho debug)
      'react/display-name': 1,

      // Không yêu cầu dùng PropTypes (vì TypeScript đã check type)
      'react/prop-types': 0,

      // Cấm xuống dòng giữa các thẻ JSX nếu không cần thiết
      'react/jsx-newline': [2, { prevent: true }],

      // Không cảnh báo khi dùng ký tự đặc biệt trong JSX (VD: `&`, `<`, `>`)
      'react/no-unescaped-entities': 0,

      // Yêu cầu component và thẻ HTML tự đóng nếu không có nội dung bên trong
      'react/self-closing-comp': [
        2,
        {
          component: true,
          html: true,
        },
      ],

      // Không yêu cầu kiểm tra href hợp lệ trên thẻ <a>
      'jsx-a11y/anchor-is-valid': 0,

      // Không bắt buộc thêm role khi dùng sự kiện trên thẻ không tương tác
      'jsx-a11y/no-static-element-interactions': 0,

      // Không bắt buộc thêm sự kiện bàn phím khi có sự kiện click
      'jsx-a11y/click-events-have-key-events': 0,

      // Không yêu cầu <label> phải có htmlFor hoặc nesting hợp lệ
      'jsx-a11y/label-has-for': [
        0,
        {
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],

      // Không cảnh báo nếu tabindex được đặt trên phần tử không tương tác
      'jsx-a11y/no-noninteractive-tabindex': 0,

      // Lỗi khi có biến khai báo nhưng không sử dụng
      'no-unused-vars': [0, { argsIgnorePattern: '^_' }],

      // Kiểm tra biến TypeScript không được khai báo mà không sử dụng
      '@typescript-eslint/no-unused-vars': [
        2,
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Không bắt buộc khai báo phạm vi truy cập của class (public/private/protected)
      '@typescript-eslint/explicit-member-accessibility': 0,

      // Không yêu cầu thụt lề trong TypeScript (để Prettier xử lý)
      '@typescript-eslint/indent': 0,

      // Cảnh báo nếu thiếu dấu chấm phẩy (semi-colon)
      semi: [1, 'always'],

      // Không yêu cầu dấu phẩy ở cuối danh sách
      'comma-dangle': [0, 'always-multiline'],

      // Cấm sử dụng require() trong TypeScript
      '@typescript-eslint/no-var-requires': 2,

      // Cho phép dùng biến trước khi khai báo (để tránh lỗi khi khai báo trong file khác)
      '@typescript-eslint/no-use-before-define': 0,

      // Không bắt buộc khai báo kiểu trả về cho function
      '@typescript-eslint/explicit-function-return-type': 0,

      // Cảnh báo nếu dùng any trong TypeScript
      '@typescript-eslint/no-explicit-any': 1,

      // Cho phép sử dụng toán tử `!` để loại bỏ null (vì TypeScript đã kiểm soát)
      '@typescript-eslint/no-non-null-assertion': 0,

      // Lỗi nếu sử dụng biến chưa được định nghĩa
      'no-undef': 2,

      // Cấm sử dụng console.log trong production, nhưng cho phép console.error và console.warn
      'no-console': [process.env.NODE_ENV === 'production' ? 2 : 1, { allow: ['error', 'warn'] }],

      // Lỗi khi import cùng một module nhiều lần
      'no-duplicate-imports': 2,

      // Bắt buộc sắp xếp export
      'simple-import-sort/exports': 2,

      // Bắt buộc sắp xếp import theo thứ tự hợp lý
      'simple-import-sort/imports': 2,

      // Không bắt buộc chỉ export component (cho phép export constant)
      'react-refresh/only-export-components': [0, { allowConstantExport: true }],

      // Sắp xếp class Tailwind theo thứ tự chuẩn
      'tailwindcss/classnames-order': 1,

      // cảnh báo nếu có class ngoài Tailwind
      'tailwindcss/no-custom-classname': [
        // Rule của plugin tailwindcss
        1,
        {
          whitelist: ['^icon-.*', '^embla.*', 'no-scrollbar', 'notranslate'], // Cho phép sử dụng class "icon-" và "embla-" ],
        },
      ],

      // Cách dòng cho từng function
      'padding-line-between-statements': [
        2,
        // Yêu cầu dòng trắng trước và sau function
        { blankLine: 'always', prev: '*', next: 'function' },
        { blankLine: 'always', prev: 'function', next: '*' },
        { blankLine: 'always', prev: '*', next: 'expression' },
        { blankLine: 'always', prev: 'expression', next: '*' },
        { blankLine: 'always', prev: ['const'], next: ['const'] },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
    },
  },
  prettierConfig,
];