(self.webpackChunk=self.webpackChunk||[]).push([[6451],{6451:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "conf": () => (/* binding */ conf),\n/* harmony export */   "language": () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/sparql/sparql.ts\nvar conf = {\n  comments: {\n    lineComment: "#"\n  },\n  brackets: [\n    ["{", "}"],\n    ["[", "]"],\n    ["(", ")"]\n  ],\n  autoClosingPairs: [\n    { open: "\'", close: "\'", notIn: ["string"] },\n    { open: \'"\', close: \'"\', notIn: ["string"] },\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" }\n  ]\n};\nvar language = {\n  defaultToken: "",\n  tokenPostfix: ".rq",\n  brackets: [\n    { token: "delimiter.curly", open: "{", close: "}" },\n    { token: "delimiter.parenthesis", open: "(", close: ")" },\n    { token: "delimiter.square", open: "[", close: "]" },\n    { token: "delimiter.angle", open: "<", close: ">" }\n  ],\n  keywords: [\n    "add",\n    "as",\n    "asc",\n    "ask",\n    "base",\n    "by",\n    "clear",\n    "construct",\n    "copy",\n    "create",\n    "data",\n    "delete",\n    "desc",\n    "describe",\n    "distinct",\n    "drop",\n    "false",\n    "filter",\n    "from",\n    "graph",\n    "group",\n    "having",\n    "in",\n    "insert",\n    "limit",\n    "load",\n    "minus",\n    "move",\n    "named",\n    "not",\n    "offset",\n    "optional",\n    "order",\n    "prefix",\n    "reduced",\n    "select",\n    "service",\n    "silent",\n    "to",\n    "true",\n    "undef",\n    "union",\n    "using",\n    "values",\n    "where",\n    "with"\n  ],\n  builtinFunctions: [\n    "a",\n    "abs",\n    "avg",\n    "bind",\n    "bnode",\n    "bound",\n    "ceil",\n    "coalesce",\n    "concat",\n    "contains",\n    "count",\n    "datatype",\n    "day",\n    "encode_for_uri",\n    "exists",\n    "floor",\n    "group_concat",\n    "hours",\n    "if",\n    "iri",\n    "isblank",\n    "isiri",\n    "isliteral",\n    "isnumeric",\n    "isuri",\n    "lang",\n    "langmatches",\n    "lcase",\n    "max",\n    "md5",\n    "min",\n    "minutes",\n    "month",\n    "now",\n    "rand",\n    "regex",\n    "replace",\n    "round",\n    "sameterm",\n    "sample",\n    "seconds",\n    "sha1",\n    "sha256",\n    "sha384",\n    "sha512",\n    "str",\n    "strafter",\n    "strbefore",\n    "strdt",\n    "strends",\n    "strlang",\n    "strlen",\n    "strstarts",\n    "struuid",\n    "substr",\n    "sum",\n    "timezone",\n    "tz",\n    "ucase",\n    "uri",\n    "uuid",\n    "year"\n  ],\n  ignoreCase: true,\n  tokenizer: {\n    root: [\n      [/<[^\\s\\u00a0>]*>?/, "tag"],\n      { include: "@strings" },\n      [/#.*/, "comment"],\n      [/[{}()\\[\\]]/, "@brackets"],\n      [/[;,.]/, "delimiter"],\n      [/[_\\w\\d]+:(\\.(?=[\\w_\\-\\\\%])|[:\\w_-]|\\\\[-\\\\_~.!$&\'()*+,;=/?#@%]|%[a-f\\d][a-f\\d])*/, "tag"],\n      [/:(\\.(?=[\\w_\\-\\\\%])|[:\\w_-]|\\\\[-\\\\_~.!$&\'()*+,;=/?#@%]|%[a-f\\d][a-f\\d])+/, "tag"],\n      [\n        /[$?]?[_\\w\\d]+/,\n        {\n          cases: {\n            "@keywords": { token: "keyword" },\n            "@builtinFunctions": { token: "predefined.sql" },\n            "@default": "identifier"\n          }\n        }\n      ],\n      [/\\^\\^/, "operator.sql"],\n      [/\\^[*+\\-<>=&|^\\/!?]*/, "operator.sql"],\n      [/[*+\\-<>=&|\\/!?]/, "operator.sql"],\n      [/@[a-z\\d\\-]*/, "metatag.html"],\n      [/\\s+/, "white"]\n    ],\n    strings: [\n      [/\'([^\'\\\\]|\\\\.)*$/, "string.invalid"],\n      [/\'$/, "string.sql", "@pop"],\n      [/\'/, "string.sql", "@stringBody"],\n      [/"([^"\\\\]|\\\\.)*$/, "string.invalid"],\n      [/"$/, "string.sql", "@pop"],\n      [/"/, "string.sql", "@dblStringBody"]\n    ],\n    stringBody: [\n      [/[^\\\\\']+/, "string.sql"],\n      [/\\\\./, "string.escape"],\n      [/\'/, "string.sql", "@pop"]\n    ],\n    dblStringBody: [\n      [/[^\\\\"]+/, "string.sql"],\n      [/\\\\./, "string.escape"],\n      [/"/, "string.sql", "@pop"]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjQ1MS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sS0FBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwQ0FBMEM7QUFDaEQsTUFBTSwwQ0FBMEM7QUFDaEQsTUFBTSxRQUFRLFlBQVksR0FBRztBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxrQ0FBa0MsWUFBWSxHQUFHO0FBQ3ZELE1BQU0sdURBQXVEO0FBQzdELE1BQU0sa0RBQWtEO0FBQ3hELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QjtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1YsOERBQThEO0FBQzlELHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0MsbUNBQW1DLHlCQUF5QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9tb25hY28tZWRpdG9yQDAuMzIuMS9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3NwYXJxbC9zcGFycWwuanM/YTgyNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjMyLjEoMjlhMjczNTE2ODA1YTg1MmFhOGVkYzVlMDUwNTlmMTE5YjEzZWZmMClcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvc3BhcnFsL3NwYXJxbC50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiI1wiXG4gIH0sXG4gIGJyYWNrZXRzOiBbXG4gICAgW1wie1wiLCBcIn1cIl0sXG4gICAgW1wiW1wiLCBcIl1cIl0sXG4gICAgW1wiKFwiLCBcIilcIl1cbiAgXSxcbiAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiwgbm90SW46IFtcInN0cmluZ1wiXSB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicsIG5vdEluOiBbXCJzdHJpbmdcIl0gfSxcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfVxuICBdXG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIucnFcIixcbiAgYnJhY2tldHM6IFtcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5jdXJseVwiLCBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIucGFyZW50aGVzaXNcIiwgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLnNxdWFyZVwiLCBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIuYW5nbGVcIiwgb3BlbjogXCI8XCIsIGNsb3NlOiBcIj5cIiB9XG4gIF0sXG4gIGtleXdvcmRzOiBbXG4gICAgXCJhZGRcIixcbiAgICBcImFzXCIsXG4gICAgXCJhc2NcIixcbiAgICBcImFza1wiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYnlcIixcbiAgICBcImNsZWFyXCIsXG4gICAgXCJjb25zdHJ1Y3RcIixcbiAgICBcImNvcHlcIixcbiAgICBcImNyZWF0ZVwiLFxuICAgIFwiZGF0YVwiLFxuICAgIFwiZGVsZXRlXCIsXG4gICAgXCJkZXNjXCIsXG4gICAgXCJkZXNjcmliZVwiLFxuICAgIFwiZGlzdGluY3RcIixcbiAgICBcImRyb3BcIixcbiAgICBcImZhbHNlXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZyb21cIixcbiAgICBcImdyYXBoXCIsXG4gICAgXCJncm91cFwiLFxuICAgIFwiaGF2aW5nXCIsXG4gICAgXCJpblwiLFxuICAgIFwiaW5zZXJ0XCIsXG4gICAgXCJsaW1pdFwiLFxuICAgIFwibG9hZFwiLFxuICAgIFwibWludXNcIixcbiAgICBcIm1vdmVcIixcbiAgICBcIm5hbWVkXCIsXG4gICAgXCJub3RcIixcbiAgICBcIm9mZnNldFwiLFxuICAgIFwib3B0aW9uYWxcIixcbiAgICBcIm9yZGVyXCIsXG4gICAgXCJwcmVmaXhcIixcbiAgICBcInJlZHVjZWRcIixcbiAgICBcInNlbGVjdFwiLFxuICAgIFwic2VydmljZVwiLFxuICAgIFwic2lsZW50XCIsXG4gICAgXCJ0b1wiLFxuICAgIFwidHJ1ZVwiLFxuICAgIFwidW5kZWZcIixcbiAgICBcInVuaW9uXCIsXG4gICAgXCJ1c2luZ1wiLFxuICAgIFwidmFsdWVzXCIsXG4gICAgXCJ3aGVyZVwiLFxuICAgIFwid2l0aFwiXG4gIF0sXG4gIGJ1aWx0aW5GdW5jdGlvbnM6IFtcbiAgICBcImFcIixcbiAgICBcImFic1wiLFxuICAgIFwiYXZnXCIsXG4gICAgXCJiaW5kXCIsXG4gICAgXCJibm9kZVwiLFxuICAgIFwiYm91bmRcIixcbiAgICBcImNlaWxcIixcbiAgICBcImNvYWxlc2NlXCIsXG4gICAgXCJjb25jYXRcIixcbiAgICBcImNvbnRhaW5zXCIsXG4gICAgXCJjb3VudFwiLFxuICAgIFwiZGF0YXR5cGVcIixcbiAgICBcImRheVwiLFxuICAgIFwiZW5jb2RlX2Zvcl91cmlcIixcbiAgICBcImV4aXN0c1wiLFxuICAgIFwiZmxvb3JcIixcbiAgICBcImdyb3VwX2NvbmNhdFwiLFxuICAgIFwiaG91cnNcIixcbiAgICBcImlmXCIsXG4gICAgXCJpcmlcIixcbiAgICBcImlzYmxhbmtcIixcbiAgICBcImlzaXJpXCIsXG4gICAgXCJpc2xpdGVyYWxcIixcbiAgICBcImlzbnVtZXJpY1wiLFxuICAgIFwiaXN1cmlcIixcbiAgICBcImxhbmdcIixcbiAgICBcImxhbmdtYXRjaGVzXCIsXG4gICAgXCJsY2FzZVwiLFxuICAgIFwibWF4XCIsXG4gICAgXCJtZDVcIixcbiAgICBcIm1pblwiLFxuICAgIFwibWludXRlc1wiLFxuICAgIFwibW9udGhcIixcbiAgICBcIm5vd1wiLFxuICAgIFwicmFuZFwiLFxuICAgIFwicmVnZXhcIixcbiAgICBcInJlcGxhY2VcIixcbiAgICBcInJvdW5kXCIsXG4gICAgXCJzYW1ldGVybVwiLFxuICAgIFwic2FtcGxlXCIsXG4gICAgXCJzZWNvbmRzXCIsXG4gICAgXCJzaGExXCIsXG4gICAgXCJzaGEyNTZcIixcbiAgICBcInNoYTM4NFwiLFxuICAgIFwic2hhNTEyXCIsXG4gICAgXCJzdHJcIixcbiAgICBcInN0cmFmdGVyXCIsXG4gICAgXCJzdHJiZWZvcmVcIixcbiAgICBcInN0cmR0XCIsXG4gICAgXCJzdHJlbmRzXCIsXG4gICAgXCJzdHJsYW5nXCIsXG4gICAgXCJzdHJsZW5cIixcbiAgICBcInN0cnN0YXJ0c1wiLFxuICAgIFwic3RydXVpZFwiLFxuICAgIFwic3Vic3RyXCIsXG4gICAgXCJzdW1cIixcbiAgICBcInRpbWV6b25lXCIsXG4gICAgXCJ0elwiLFxuICAgIFwidWNhc2VcIixcbiAgICBcInVyaVwiLFxuICAgIFwidXVpZFwiLFxuICAgIFwieWVhclwiXG4gIF0sXG4gIGlnbm9yZUNhc2U6IHRydWUsXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIFsvPFteXFxzXFx1MDBhMD5dKj4/LywgXCJ0YWdcIl0sXG4gICAgICB7IGluY2x1ZGU6IFwiQHN0cmluZ3NcIiB9LFxuICAgICAgWy8jLiovLCBcImNvbW1lbnRcIl0sXG4gICAgICBbL1t7fSgpXFxbXFxdXS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgWy9bOywuXS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9bX1xcd1xcZF0rOihcXC4oPz1bXFx3X1xcLVxcXFwlXSl8WzpcXHdfLV18XFxcXFstXFxcXF9+LiEkJicoKSorLDs9Lz8jQCVdfCVbYS1mXFxkXVthLWZcXGRdKSovLCBcInRhZ1wiXSxcbiAgICAgIFsvOihcXC4oPz1bXFx3X1xcLVxcXFwlXSl8WzpcXHdfLV18XFxcXFstXFxcXF9+LiEkJicoKSorLDs9Lz8jQCVdfCVbYS1mXFxkXVthLWZcXGRdKSsvLCBcInRhZ1wiXSxcbiAgICAgIFtcbiAgICAgICAgL1skP10/W19cXHdcXGRdKy8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAa2V5d29yZHNcIjogeyB0b2tlbjogXCJrZXl3b3JkXCIgfSxcbiAgICAgICAgICAgIFwiQGJ1aWx0aW5GdW5jdGlvbnNcIjogeyB0b2tlbjogXCJwcmVkZWZpbmVkLnNxbFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiaWRlbnRpZmllclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9cXF5cXF4vLCBcIm9wZXJhdG9yLnNxbFwiXSxcbiAgICAgIFsvXFxeWyorXFwtPD49JnxeXFwvIT9dKi8sIFwib3BlcmF0b3Iuc3FsXCJdLFxuICAgICAgWy9bKitcXC08Pj0mfFxcLyE/XS8sIFwib3BlcmF0b3Iuc3FsXCJdLFxuICAgICAgWy9AW2EtelxcZFxcLV0qLywgXCJtZXRhdGFnLmh0bWxcIl0sXG4gICAgICBbL1xccysvLCBcIndoaXRlXCJdXG4gICAgXSxcbiAgICBzdHJpbmdzOiBbXG4gICAgICBbLycoW14nXFxcXF18XFxcXC4pKiQvLCBcInN0cmluZy5pbnZhbGlkXCJdLFxuICAgICAgWy8nJC8sIFwic3RyaW5nLnNxbFwiLCBcIkBwb3BcIl0sXG4gICAgICBbLycvLCBcInN0cmluZy5zcWxcIiwgXCJAc3RyaW5nQm9keVwiXSxcbiAgICAgIFsvXCIoW15cIlxcXFxdfFxcXFwuKSokLywgXCJzdHJpbmcuaW52YWxpZFwiXSxcbiAgICAgIFsvXCIkLywgXCJzdHJpbmcuc3FsXCIsIFwiQHBvcFwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZy5zcWxcIiwgXCJAZGJsU3RyaW5nQm9keVwiXVxuICAgIF0sXG4gICAgc3RyaW5nQm9keTogW1xuICAgICAgWy9bXlxcXFwnXSsvLCBcInN0cmluZy5zcWxcIl0sXG4gICAgICBbL1xcXFwuLywgXCJzdHJpbmcuZXNjYXBlXCJdLFxuICAgICAgWy8nLywgXCJzdHJpbmcuc3FsXCIsIFwiQHBvcFwiXVxuICAgIF0sXG4gICAgZGJsU3RyaW5nQm9keTogW1xuICAgICAgWy9bXlxcXFxcIl0rLywgXCJzdHJpbmcuc3FsXCJdLFxuICAgICAgWy9cXFxcLi8sIFwic3RyaW5nLmVzY2FwZVwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZy5zcWxcIiwgXCJAcG9wXCJdXG4gICAgXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6451\n')}}]);