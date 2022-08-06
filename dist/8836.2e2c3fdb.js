(self.webpackChunk=self.webpackChunk||[]).push([[8836],{8836:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "conf": () => (/* binding */ conf),\n/* harmony export */   "language": () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/go/go.ts\nvar conf = {\n  comments: {\n    lineComment: "//",\n    blockComment: ["/*", "*/"]\n  },\n  brackets: [\n    ["{", "}"],\n    ["[", "]"],\n    ["(", ")"]\n  ],\n  autoClosingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: "`", close: "`", notIn: ["string"] },\n    { open: \'"\', close: \'"\', notIn: ["string"] },\n    { open: "\'", close: "\'", notIn: ["string", "comment"] }\n  ],\n  surroundingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: "`", close: "`" },\n    { open: \'"\', close: \'"\' },\n    { open: "\'", close: "\'" }\n  ]\n};\nvar language = {\n  defaultToken: "",\n  tokenPostfix: ".go",\n  keywords: [\n    "break",\n    "case",\n    "chan",\n    "const",\n    "continue",\n    "default",\n    "defer",\n    "else",\n    "fallthrough",\n    "for",\n    "func",\n    "go",\n    "goto",\n    "if",\n    "import",\n    "interface",\n    "map",\n    "package",\n    "range",\n    "return",\n    "select",\n    "struct",\n    "switch",\n    "type",\n    "var",\n    "bool",\n    "true",\n    "false",\n    "uint8",\n    "uint16",\n    "uint32",\n    "uint64",\n    "int8",\n    "int16",\n    "int32",\n    "int64",\n    "float32",\n    "float64",\n    "complex64",\n    "complex128",\n    "byte",\n    "rune",\n    "uint",\n    "int",\n    "uintptr",\n    "string",\n    "nil"\n  ],\n  operators: [\n    "+",\n    "-",\n    "*",\n    "/",\n    "%",\n    "&",\n    "|",\n    "^",\n    "<<",\n    ">>",\n    "&^",\n    "+=",\n    "-=",\n    "*=",\n    "/=",\n    "%=",\n    "&=",\n    "|=",\n    "^=",\n    "<<=",\n    ">>=",\n    "&^=",\n    "&&",\n    "||",\n    "<-",\n    "++",\n    "--",\n    "==",\n    "<",\n    ">",\n    "=",\n    "!",\n    "!=",\n    "<=",\n    ">=",\n    ":=",\n    "...",\n    "(",\n    ")",\n    "",\n    "]",\n    "{",\n    "}",\n    ",",\n    ";",\n    ".",\n    ":"\n  ],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\"\']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            "@keywords": { token: "keyword.$0" },\n            "@default": "identifier"\n          }\n        }\n      ],\n      { include: "@whitespace" },\n      [/\\[\\[.*\\]\\]/, "annotation"],\n      [/^\\s*#\\w+/, "keyword"],\n      [/[{}()\\[\\]]/, "@brackets"],\n      [/[<>](?!@symbols)/, "@brackets"],\n      [\n        /@symbols/,\n        {\n          cases: {\n            "@operators": "delimiter",\n            "@default": ""\n          }\n        }\n      ],\n      [/\\d*\\d+[eE]([\\-+]?\\d+)?/, "number.float"],\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, "number.float"],\n      [/0[xX][0-9a-fA-F\']*[0-9a-fA-F]/, "number.hex"],\n      [/0[0-7\']*[0-7]/, "number.octal"],\n      [/0[bB][0-1\']*[0-1]/, "number.binary"],\n      [/\\d[\\d\']*/, "number"],\n      [/\\d/, "number"],\n      [/[;,.]/, "delimiter"],\n      [/"([^"\\\\]|\\\\.)*$/, "string.invalid"],\n      [/"/, "string", "@string"],\n      [/`/, "string", "@rawstring"],\n      [/\'[^\\\\\']\'/, "string"],\n      [/(\')(@escapes)(\')/, ["string", "string.escape", "string"]],\n      [/\'/, "string.invalid"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, ""],\n      [/\\/\\*\\*(?!\\/)/, "comment.doc", "@doccomment"],\n      [/\\/\\*/, "comment", "@comment"],\n      [/\\/\\/.*$/, "comment"]\n    ],\n    comment: [\n      [/[^\\/*]+/, "comment"],\n      [/\\*\\//, "comment", "@pop"],\n      [/[\\/*]/, "comment"]\n    ],\n    doccomment: [\n      [/[^\\/*]+/, "comment.doc"],\n      [/\\/\\*/, "comment.doc.invalid"],\n      [/\\*\\//, "comment.doc", "@pop"],\n      [/[\\/*]/, "comment.doc"]\n    ],\n    string: [\n      [/[^\\\\"]+/, "string"],\n      [/@escapes/, "string.escape"],\n      [/\\\\./, "string.escape.invalid"],\n      [/"/, "string", "@pop"]\n    ],\n    rawstring: [\n      [/[^\\`]/, "string"],\n      [/`/, "string", "@pop"]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgzNi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxLQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLFFBQVEsWUFBWSxHQUFHO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0sMENBQTBDO0FBQ2hELE1BQU0sMENBQTBDO0FBQ2hELE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTSxRQUFRLFlBQVksR0FBRztBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxJQUFJLGNBQWMsRUFBRSxjQUFjLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0JBQXdCO0FBQ2hDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9tb25hY28tZWRpdG9yQDAuMzIuMS9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2dvL2dvLmpzPzVlMzciXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC4zMi4xKDI5YTI3MzUxNjgwNWE4NTJhYThlZGM1ZTA1MDU5ZjExOWIxM2VmZjApXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL2dvL2dvLnRzXG52YXIgY29uZiA9IHtcbiAgY29tbWVudHM6IHtcbiAgICBsaW5lQ29tbWVudDogXCIvL1wiLFxuICAgIGJsb2NrQ29tbWVudDogW1wiLypcIiwgXCIqL1wiXVxuICB9LFxuICBicmFja2V0czogW1xuICAgIFtcIntcIiwgXCJ9XCJdLFxuICAgIFtcIltcIiwgXCJdXCJdLFxuICAgIFtcIihcIiwgXCIpXCJdXG4gIF0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46IFwiYFwiLCBjbG9zZTogXCJgXCIsIG5vdEluOiBbXCJzdHJpbmdcIl0gfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogW1wic3RyaW5nXCJdIH0sXG4gICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9XG4gIF0sXG4gIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46IFwiYFwiLCBjbG9zZTogXCJgXCIgfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH1cbiAgXVxufTtcbnZhciBsYW5ndWFnZSA9IHtcbiAgZGVmYXVsdFRva2VuOiBcIlwiLFxuICB0b2tlblBvc3RmaXg6IFwiLmdvXCIsXG4gIGtleXdvcmRzOiBbXG4gICAgXCJicmVha1wiLFxuICAgIFwiY2FzZVwiLFxuICAgIFwiY2hhblwiLFxuICAgIFwiY29uc3RcIixcbiAgICBcImNvbnRpbnVlXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJkZWZlclwiLFxuICAgIFwiZWxzZVwiLFxuICAgIFwiZmFsbHRocm91Z2hcIixcbiAgICBcImZvclwiLFxuICAgIFwiZnVuY1wiLFxuICAgIFwiZ29cIixcbiAgICBcImdvdG9cIixcbiAgICBcImlmXCIsXG4gICAgXCJpbXBvcnRcIixcbiAgICBcImludGVyZmFjZVwiLFxuICAgIFwibWFwXCIsXG4gICAgXCJwYWNrYWdlXCIsXG4gICAgXCJyYW5nZVwiLFxuICAgIFwicmV0dXJuXCIsXG4gICAgXCJzZWxlY3RcIixcbiAgICBcInN0cnVjdFwiLFxuICAgIFwic3dpdGNoXCIsXG4gICAgXCJ0eXBlXCIsXG4gICAgXCJ2YXJcIixcbiAgICBcImJvb2xcIixcbiAgICBcInRydWVcIixcbiAgICBcImZhbHNlXCIsXG4gICAgXCJ1aW50OFwiLFxuICAgIFwidWludDE2XCIsXG4gICAgXCJ1aW50MzJcIixcbiAgICBcInVpbnQ2NFwiLFxuICAgIFwiaW50OFwiLFxuICAgIFwiaW50MTZcIixcbiAgICBcImludDMyXCIsXG4gICAgXCJpbnQ2NFwiLFxuICAgIFwiZmxvYXQzMlwiLFxuICAgIFwiZmxvYXQ2NFwiLFxuICAgIFwiY29tcGxleDY0XCIsXG4gICAgXCJjb21wbGV4MTI4XCIsXG4gICAgXCJieXRlXCIsXG4gICAgXCJydW5lXCIsXG4gICAgXCJ1aW50XCIsXG4gICAgXCJpbnRcIixcbiAgICBcInVpbnRwdHJcIixcbiAgICBcInN0cmluZ1wiLFxuICAgIFwibmlsXCJcbiAgXSxcbiAgb3BlcmF0b3JzOiBbXG4gICAgXCIrXCIsXG4gICAgXCItXCIsXG4gICAgXCIqXCIsXG4gICAgXCIvXCIsXG4gICAgXCIlXCIsXG4gICAgXCImXCIsXG4gICAgXCJ8XCIsXG4gICAgXCJeXCIsXG4gICAgXCI8PFwiLFxuICAgIFwiPj5cIixcbiAgICBcIiZeXCIsXG4gICAgXCIrPVwiLFxuICAgIFwiLT1cIixcbiAgICBcIio9XCIsXG4gICAgXCIvPVwiLFxuICAgIFwiJT1cIixcbiAgICBcIiY9XCIsXG4gICAgXCJ8PVwiLFxuICAgIFwiXj1cIixcbiAgICBcIjw8PVwiLFxuICAgIFwiPj49XCIsXG4gICAgXCImXj1cIixcbiAgICBcIiYmXCIsXG4gICAgXCJ8fFwiLFxuICAgIFwiPC1cIixcbiAgICBcIisrXCIsXG4gICAgXCItLVwiLFxuICAgIFwiPT1cIixcbiAgICBcIjxcIixcbiAgICBcIj5cIixcbiAgICBcIj1cIixcbiAgICBcIiFcIixcbiAgICBcIiE9XCIsXG4gICAgXCI8PVwiLFxuICAgIFwiPj1cIixcbiAgICBcIjo9XCIsXG4gICAgXCIuLi5cIixcbiAgICBcIihcIixcbiAgICBcIilcIixcbiAgICBcIlwiLFxuICAgIFwiXVwiLFxuICAgIFwie1wiLFxuICAgIFwifVwiLFxuICAgIFwiLFwiLFxuICAgIFwiO1wiLFxuICAgIFwiLlwiLFxuICAgIFwiOlwiXG4gIF0sXG4gIHN5bWJvbHM6IC9bPT48IX4/OiZ8K1xcLSpcXC9cXF4lXSsvLFxuICBlc2NhcGVzOiAvXFxcXCg/OlthYmZucnR2XFxcXFwiJ118eFswLTlBLUZhLWZdezEsNH18dVswLTlBLUZhLWZdezR9fFVbMC05QS1GYS1mXXs4fSkvLFxuICB0b2tlbml6ZXI6IHtcbiAgICByb290OiBbXG4gICAgICBbXG4gICAgICAgIC9bYS16QS1aX11cXHcqLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBrZXl3b3Jkc1wiOiB7IHRva2VuOiBcImtleXdvcmQuJDBcIiB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcImlkZW50aWZpZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL1xcW1xcWy4qXFxdXFxdLywgXCJhbm5vdGF0aW9uXCJdLFxuICAgICAgWy9eXFxzKiNcXHcrLywgXCJrZXl3b3JkXCJdLFxuICAgICAgWy9be30oKVxcW1xcXV0vLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgW1xuICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQG9wZXJhdG9yc1wiOiBcImRlbGltaXRlclwiLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9cXGQqXFxkK1tlRV0oW1xcLStdP1xcZCspPy8sIFwibnVtYmVyLmZsb2F0XCJdLFxuICAgICAgWy9cXGQqXFwuXFxkKyhbZUVdW1xcLStdP1xcZCspPy8sIFwibnVtYmVyLmZsb2F0XCJdLFxuICAgICAgWy8wW3hYXVswLTlhLWZBLUYnXSpbMC05YS1mQS1GXS8sIFwibnVtYmVyLmhleFwiXSxcbiAgICAgIFsvMFswLTcnXSpbMC03XS8sIFwibnVtYmVyLm9jdGFsXCJdLFxuICAgICAgWy8wW2JCXVswLTEnXSpbMC0xXS8sIFwibnVtYmVyLmJpbmFyeVwiXSxcbiAgICAgIFsvXFxkW1xcZCddKi8sIFwibnVtYmVyXCJdLFxuICAgICAgWy9cXGQvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvWzssLl0vLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgXCJzdHJpbmcuaW52YWxpZFwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZ1wiLCBcIkBzdHJpbmdcIl0sXG4gICAgICBbL2AvLCBcInN0cmluZ1wiLCBcIkByYXdzdHJpbmdcIl0sXG4gICAgICBbLydbXlxcXFwnXScvLCBcInN0cmluZ1wiXSxcbiAgICAgIFsvKCcpKEBlc2NhcGVzKSgnKS8sIFtcInN0cmluZ1wiLCBcInN0cmluZy5lc2NhcGVcIiwgXCJzdHJpbmdcIl1dLFxuICAgICAgWy8nLywgXCJzdHJpbmcuaW52YWxpZFwiXVxuICAgIF0sXG4gICAgd2hpdGVzcGFjZTogW1xuICAgICAgWy9bIFxcdFxcclxcbl0rLywgXCJcIl0sXG4gICAgICBbL1xcL1xcKlxcKig/IVxcLykvLCBcImNvbW1lbnQuZG9jXCIsIFwiQGRvY2NvbW1lbnRcIl0sXG4gICAgICBbL1xcL1xcKi8sIFwiY29tbWVudFwiLCBcIkBjb21tZW50XCJdLFxuICAgICAgWy9cXC9cXC8uKiQvLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIGNvbW1lbnQ6IFtcbiAgICAgIFsvW15cXC8qXSsvLCBcImNvbW1lbnRcIl0sXG4gICAgICBbL1xcKlxcLy8sIFwiY29tbWVudFwiLCBcIkBwb3BcIl0sXG4gICAgICBbL1tcXC8qXS8sIFwiY29tbWVudFwiXVxuICAgIF0sXG4gICAgZG9jY29tbWVudDogW1xuICAgICAgWy9bXlxcLypdKy8sIFwiY29tbWVudC5kb2NcIl0sXG4gICAgICBbL1xcL1xcKi8sIFwiY29tbWVudC5kb2MuaW52YWxpZFwiXSxcbiAgICAgIFsvXFwqXFwvLywgXCJjb21tZW50LmRvY1wiLCBcIkBwb3BcIl0sXG4gICAgICBbL1tcXC8qXS8sIFwiY29tbWVudC5kb2NcIl1cbiAgICBdLFxuICAgIHN0cmluZzogW1xuICAgICAgWy9bXlxcXFxcIl0rLywgXCJzdHJpbmdcIl0sXG4gICAgICBbL0Blc2NhcGVzLywgXCJzdHJpbmcuZXNjYXBlXCJdLFxuICAgICAgWy9cXFxcLi8sIFwic3RyaW5nLmVzY2FwZS5pbnZhbGlkXCJdLFxuICAgICAgWy9cIi8sIFwic3RyaW5nXCIsIFwiQHBvcFwiXVxuICAgIF0sXG4gICAgcmF3c3RyaW5nOiBbXG4gICAgICBbL1teXFxgXS8sIFwic3RyaW5nXCJdLFxuICAgICAgWy9gLywgXCJzdHJpbmdcIiwgXCJAcG9wXCJdXG4gICAgXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8836\n')}}]);