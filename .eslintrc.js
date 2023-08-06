module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    commonjs: true,
  },

  extends: [
    // 'airbnb': 这是由 Airbnb 团队维护的一组 JavaScript 代码规范，
    // 它提供了一套严格的、可读性高的代码规则，用于保持代码质量和一致性
    'airbnb',
    // 这个规则集合由 eslint-plugin-import 提供，它包含一些用于检查和约束 ES6 模块导入和导出的规则
    'plugin:import/recommended',
    // 这个规则集合扩展了 'plugin:import/recommended'，添加了一些用于 TypeScript 中的导入和导出的规则
    'plugin:import/typescript',
    // 这个规则集合由 eslint-plugin-promise 提供，它提供了一些规则用于检查和约束 Promise 的使用
    'plugin:promise/recommended',
    // 这个规则集合由 eslint-plugin-react 提供，它包含一些用于检查和约束 React 代码的规则
    'plugin:react/recommended',
    // 这个规则集合由 eslint-plugin-react-hooks 提供，它包含一些用于检查和约束 React Hooks 的规则
    'plugin:react-hooks/recommended',
    // 这个规则集合由 eslint-plugin-jsx-a11y 提供，它包含一些用于检查和约束 JSX 元素上可访问性的规则
    'plugin:jsx-a11y/recommended',
    // 这个规则集合由 @typescript-eslint/eslint-plugin 提供，它包含一些用于检查和约束 TypeScript 代码的规则
    'plugin:@typescript-eslint/recommended',
    // 这个规则集合扩展了 'plugin:@typescript-eslint/recommended'，添加了一些需要类型检查的 TypeScript 规则
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  plugins: [
    'import',
    'promise',
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
  ],
  rules: {
    // jsx缩进2个空格
    'react/jsx-indent': ['error', 2],

    // jsx属性缩进2个空格
    'react/jsx-indent-props': ['error', 2],
    
    // 可以在tsx文件中使用拓展名为jsx的文件
    'react/jsx-filename-extension': 'off',

    'react/function-component-definition': 'off',
    
    // 忽略表达式必须单独一行
    'react/jsx-one-expression-per-line': 'off',
    
    // 忽略button必须有类型
    'react/button-has-type': 'off',

    'react/jsx-no-bind': 'off',

    'jsx-a11y/click-events-have-key-events': 'off',

    'jsx-a11y/no-static-element-interactions': 'off',
    
    // 忽略导入时的文件扩展名
    'import/no-unresolved': 'off',
    
    'import/no-extraneous-dependencies': 'off',

    'import/extensions': 'off',

    // 禁止使用 @ts-ignore
    '@typescript-eslint/ban-ts-ignore': 'off',

    '@typescript-eslint/no-unsafe-call': 'off',

    '@typescript-eslint/no-unsafe-member-access': 'off',

    '@typescript-eslint/no-explicit-any': 'off',

    '@typescript-eslint/no-unsafe-argument': 'off',

    '@typescript-eslint/no-unsafe-return': 'off',
    
    '@typescript-eslint/no-unsafe-assignment': 'off',
    
    // 禁止console
    'no-console': ['warn'],

    // 禁止不必要的括号
    'no-extra-parens': ['error'],

    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': ['error'],

    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': ['error'],

    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': ['error'],

    // 强制所有控制语句使用一致的括号风格
    curly: ['error', 'multi-line'],

    // 要求 switch 语句中有 default 分支（可以用 no default 表示没有）
    'default-case': ['error'],

    // 强制在点号之前和之后一致的换行（操作符应该和属性在同一行）
    'dot-location': ['error', 'property'],

    // 强制尽可能地使用点号
    'dot-notation': ['error', { allowPattern: '^[a-z]+(_[a-z]+)+$' }],

    // 要求使用 === 和 !==
    eqeqeq: ['error'],

    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': ['error'],

    // 禁用 alert、confirm 和 prompt
    'no-alert': ['error'],

    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': ['error'],

    // 禁用 arguments.caller 或 arguments.callee
    'no-div-regex': ['error'],

    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': ['error'],

    // 禁止出现空函数
    'no-empty-function': ['error'],

    // 禁用 eval()
    'no-eval': ['error'],

    // 禁止不必要的 .bind() 调用
    'no-extra-bind': ['error'],

    // 禁用不必要的标签
    'no-extra-label': ['error'],

    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': ['error'],

    // 禁用标签语句
    'no-labels': ['error'],

    // 禁止出现多个空格
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],

    // 禁止多行字符串
    'no-multi-str': ['error'],

    // 禁止多行字符串
    'no-new': ['error'],

    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': ['error'],

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': ['error'],

    // 禁止对 function 的参数进行重新赋值
    // 'no-param-reassign': ['error'],

    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': ['error', 'always'],

    // 禁止在 return 语句中使用赋值语句
    'no-return-await': ['error'],

    // 禁止自身比较
    'no-self-compare': ['error'],

    // 禁止逗号操作符
    'no-sequences': ['error'],

    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': ['error'],

    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': ['error'],

    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': ['error'],

    // 禁止多余的 return 语句
    'no-useless-return': ['error'],

    // 强制在 parseInt() 使用基数参数（10进制不用传）
    radix: ['error', 'as-needed'],

    // 禁止使用不带 await 表达式的 async 函数
    'require-await': ['error'],

    // 强制在声明时进行初始化
    'init-declarations': ['error', 'always'],

    // 不允许未使用的变量
    'no-unused-vars': ['warn'],

    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [
      'error',
      {
        multiline: true,
        minItems: 4,
      },
    ],

    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['error', 'never'],

    // 强制数组元素间出现换行
    // 'array-element-newline': [
    //   'error',
    //   {
    //     multiline: true,
    //     minItems: 4,
    //   },
    // ],

    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error'],

    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['error'],

    // 要求或禁止末尾逗号
    'comma-dangle': ['error', 'always-multiline'],

    // 强制在逗号前后使用一致的空格
    'comma-spacing': ['error'],

    // 强制在逗号前后使用一致的空格
    'comma-style': ['error'],

    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error'],

    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': ['error'],

    // 要求或禁止文件末尾存在空行
    'eol-last': ['error'],

    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error'],

    // 强制在函数括号内使用一致的换行
    'function-paren-newline': ['error', { minItems: 4 }],

    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['error'],

    // 执行一致的缩进
    indent: ['error', 2, { SwitchCase: 1 }],

    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': ['error'],

    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error'],

    // 强制在关键字前后使用一致的空格
    'keyword-spacing': ['error'],

    // 'line-comment-position': ['error', { position: 'beside' }], // 强制在关键字前后使用一致的空格

    // 强制操作符使用一致的换行样式
    'linebreak-style': ['error'],

    // 强制操作符使用一致的换行样式
    'lines-around-comment': ['error'],

    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': ['error'],

    // 强制对多行注释使用特定风格
    // 'multiline-comment-style': ['error'],

    // 要求或禁止在三元操作数中间换行
    // 'multiline-ternary': ['error'],

    // 要求构造函数首字母大写
    'new-cap': ['error'],

    // 强制或禁止调用无参构造函数时有圆括号
    'new-parens': ['error'],

    // 强制或禁止调用无参构造函数时有圆括号
    'newline-per-chained-call': ['error'],

    // 禁用 Array 构造函数
    'no-array-constructor': ['error'],

    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': ['error'],

    // 禁止连续赋值
    'no-multi-assign': ['error'],

    // 禁止出现多行空行（只能空一行）
    'no-multiple-empty-lines': ['error', { max: 1 }],

    // 禁用否定表达式
    'no-negated-condition': ['error'],

    // 禁用嵌套的三元表达式
    'no-nested-ternary': ['error'],

    // 禁用 Object 的构造函数
    'no-new-object': ['error'],

    // 禁用一元操作符 ++ 和 --（允许在 for 循环的最后一个表达式中使用 ++ 和 --）
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // 禁用行尾空格
    'no-trailing-spaces': ['error'],

    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': ['error'],

    // 禁止属性前有空白
    'no-whitespace-before-property': ['error'],

    // 在开始花括号之后和结束花括号之前强制一致的换行符
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        minProperties: 3,
      },
    ],

    // 强制花括号内的间距一致
    'object-curly-spacing': ['error', 'always'],

    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error'],

    // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-assignment': ['error'],

    // 强制操作符使用一致的换行符（操作符在前）
    'operator-linebreak': ['error', 'before'],

    // 要求或禁止块内填充
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],

    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'prefer-object-spread': ['error'],

    // 要求对象字面量属性名称用引号括起来
    'quote-props': ['error', 'as-needed'],

    // 强制使用一致的反勾号、双引号或单引号
    quotes: ['error', 'single'],

    // 要求或禁止使用分号代替 ASI
    semi: ['error', 'always'],

    // 强制分号之前和之后使用一致的空格
    'semi-spacing': ['error'],

    // 强制分号的位置
    'semi-style': ['error'],

    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],

    // 强制在圆括号内使用一致的空格
    'space-in-parens': ['error'],

    // 要求操作符周围有空格
    'space-infix-ops': ['error'],

    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],

    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': ['error', 'always'],

    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': ['error'],

    // 要求箭头函数体大括号使用方式
    'arrow-body-style': ['error', 'as-needed'],

    // 要求箭头函数参数圆括号使用方式
    'arrow-parens': ['error', 'as-needed'],

    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],

    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': ['error', 'both'],

    // 禁止重复导入
    'no-duplicate-imports': ['error', { includeExports: false }],

    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': ['error'],

    // 禁用不必要的构造函数
    'no-useless-constructor': ['error'],

    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': ['error'],

    // 要求使用 let 或 const 而不是 var
    'no-var': ['error'],

    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': ['error', 'always'],

    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': ['error'],

    // 建议使用常量
    'prefer-const': ['error'],

    // 优先使用数组和对象解构
    'prefer-destructuring': ['error'],

    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-numeric-literals': ['error'],

    // 要求使用剩余参数而不是 arguments
    'prefer-rest-params': ['error'],

    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': ['error'],

    // 要求使用模板字面量而非字符串连接
    'prefer-template': ['error'],

    // 强制将默认参数设置为最后一个
    'default-param-last': ['error'],

    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': ['error'],

    // 要求 symbol 描述
    'symbol-description': ['error'],

    // 强制模块内的 import 排序
    'sort-imports': ['error', { ignoreDeclarationSort: true }],

    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': ['error'],

    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': ['error', 'both'],
    
  },
  globals: {},
  overrides: [],
};

