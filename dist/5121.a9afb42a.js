(self.webpackChunk=self.webpackChunk||[]).push([[5121],{5121:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "conf": () => (/* binding */ conf),\n/* harmony export */   "language": () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/lexon/lexon.ts\nvar conf = {\n  comments: {\n    lineComment: "COMMENT"\n  },\n  brackets: [["(", ")"]],\n  autoClosingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: \'"\', close: \'"\' },\n    { open: ":", close: "." }\n  ],\n  surroundingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: "`", close: "`" },\n    { open: \'"\', close: \'"\' },\n    { open: "\'", close: "\'" },\n    { open: ":", close: "." }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp("^\\\\s*(::\\\\s*|COMMENT\\\\s+)#region"),\n      end: new RegExp("^\\\\s*(::\\\\s*|COMMENT\\\\s+)#endregion")\n    }\n  }\n};\nvar language = {\n  tokenPostfix: ".lexon",\n  ignoreCase: true,\n  keywords: [\n    "lexon",\n    "lex",\n    "clause",\n    "terms",\n    "contracts",\n    "may",\n    "pay",\n    "pays",\n    "appoints",\n    "into",\n    "to"\n  ],\n  typeKeywords: ["amount", "person", "key", "time", "date", "asset", "text"],\n  operators: [\n    "less",\n    "greater",\n    "equal",\n    "le",\n    "gt",\n    "or",\n    "and",\n    "add",\n    "added",\n    "subtract",\n    "subtracted",\n    "multiply",\n    "multiplied",\n    "times",\n    "divide",\n    "divided",\n    "is",\n    "be",\n    "certified"\n  ],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  tokenizer: {\n    root: [\n      [/^(\\s*)(comment:?(?:\\s.*|))$/, ["", "comment"]],\n      [\n        /"/,\n        {\n          token: "identifier.quote",\n          bracket: "@open",\n          next: "@quoted_identifier"\n        }\n      ],\n      [\n        "LEX$",\n        {\n          token: "keyword",\n          bracket: "@open",\n          next: "@identifier_until_period"\n        }\n      ],\n      ["LEXON", { token: "keyword", bracket: "@open", next: "@semver" }],\n      [\n        ":",\n        {\n          token: "delimiter",\n          bracket: "@open",\n          next: "@identifier_until_period"\n        }\n      ],\n      [\n        /[a-z_$][\\w$]*/,\n        {\n          cases: {\n            "@operators": "operator",\n            "@typeKeywords": "keyword.type",\n            "@keywords": "keyword",\n            "@default": "identifier"\n          }\n        }\n      ],\n      { include: "@whitespace" },\n      [/[{}()\\[\\]]/, "@brackets"],\n      [/[<>](?!@symbols)/, "@brackets"],\n      [/@symbols/, "delimiter"],\n      [/\\d*\\.\\d*\\.\\d*/, "number.semver"],\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, "number.float"],\n      [/0[xX][0-9a-fA-F]+/, "number.hex"],\n      [/\\d+/, "number"],\n      [/[;,.]/, "delimiter"]\n    ],\n    quoted_identifier: [\n      [/[^\\\\"]+/, "identifier"],\n      [/"/, { token: "identifier.quote", bracket: "@close", next: "@pop" }]\n    ],\n    space_identifier_until_period: [\n      [":", "delimiter"],\n      [" ", { token: "white", next: "@identifier_rest" }]\n    ],\n    identifier_until_period: [\n      { include: "@whitespace" },\n      [":", { token: "delimiter", next: "@identifier_rest" }],\n      [/[^\\\\.]+/, "identifier"],\n      [/\\./, { token: "delimiter", bracket: "@close", next: "@pop" }]\n    ],\n    identifier_rest: [\n      [/[^\\\\.]+/, "identifier"],\n      [/\\./, { token: "delimiter", bracket: "@close", next: "@pop" }]\n    ],\n    semver: [\n      { include: "@whitespace" },\n      [":", "delimiter"],\n      [/\\d*\\.\\d*\\.\\d*/, { token: "number.semver", bracket: "@close", next: "@pop" }]\n    ],\n    whitespace: [[/[ \\t\\r\\n]+/, "white"]]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTEyMS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBTSxRQUFRLFlBQVksR0FBRztBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sUUFBUSxZQUFZLEdBQUc7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBcUQ7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQyxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNERBQTREO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMENBQTBDO0FBQ3hEO0FBQ0E7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQyxjQUFjLDhDQUE4QztBQUM1RDtBQUNBLGVBQWUscURBQXFEO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLGVBQWUscURBQXFEO0FBQ3BFO0FBQ0E7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQztBQUNBLDBCQUEwQix5REFBeUQ7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9tb25hY28tZWRpdG9yQDAuMzIuMS9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL2xleG9uL2xleG9uLmpzPzQwYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC4zMi4xKDI5YTI3MzUxNjgwNWE4NTJhYThlZGM1ZTA1MDU5ZjExOWIxM2VmZjApXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL2xleG9uL2xleG9uLnRzXG52YXIgY29uZiA9IHtcbiAgY29tbWVudHM6IHtcbiAgICBsaW5lQ29tbWVudDogXCJDT01NRU5UXCJcbiAgfSxcbiAgYnJhY2tldHM6IFtbXCIoXCIsIFwiKVwiXV0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXG4gICAgeyBvcGVuOiBcIjpcIiwgY2xvc2U6IFwiLlwiIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogXCJgXCIsIGNsb3NlOiBcImBcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICB7IG9wZW46IFwiOlwiLCBjbG9zZTogXCIuXCIgfVxuICBdLFxuICBmb2xkaW5nOiB7XG4gICAgbWFya2Vyczoge1xuICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqKDo6XFxcXHMqfENPTU1FTlRcXFxccyspI3JlZ2lvblwiKSxcbiAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyooOjpcXFxccyp8Q09NTUVOVFxcXFxzKykjZW5kcmVnaW9uXCIpXG4gICAgfVxuICB9XG59O1xudmFyIGxhbmd1YWdlID0ge1xuICB0b2tlblBvc3RmaXg6IFwiLmxleG9uXCIsXG4gIGlnbm9yZUNhc2U6IHRydWUsXG4gIGtleXdvcmRzOiBbXG4gICAgXCJsZXhvblwiLFxuICAgIFwibGV4XCIsXG4gICAgXCJjbGF1c2VcIixcbiAgICBcInRlcm1zXCIsXG4gICAgXCJjb250cmFjdHNcIixcbiAgICBcIm1heVwiLFxuICAgIFwicGF5XCIsXG4gICAgXCJwYXlzXCIsXG4gICAgXCJhcHBvaW50c1wiLFxuICAgIFwiaW50b1wiLFxuICAgIFwidG9cIlxuICBdLFxuICB0eXBlS2V5d29yZHM6IFtcImFtb3VudFwiLCBcInBlcnNvblwiLCBcImtleVwiLCBcInRpbWVcIiwgXCJkYXRlXCIsIFwiYXNzZXRcIiwgXCJ0ZXh0XCJdLFxuICBvcGVyYXRvcnM6IFtcbiAgICBcImxlc3NcIixcbiAgICBcImdyZWF0ZXJcIixcbiAgICBcImVxdWFsXCIsXG4gICAgXCJsZVwiLFxuICAgIFwiZ3RcIixcbiAgICBcIm9yXCIsXG4gICAgXCJhbmRcIixcbiAgICBcImFkZFwiLFxuICAgIFwiYWRkZWRcIixcbiAgICBcInN1YnRyYWN0XCIsXG4gICAgXCJzdWJ0cmFjdGVkXCIsXG4gICAgXCJtdWx0aXBseVwiLFxuICAgIFwibXVsdGlwbGllZFwiLFxuICAgIFwidGltZXNcIixcbiAgICBcImRpdmlkZVwiLFxuICAgIFwiZGl2aWRlZFwiLFxuICAgIFwiaXNcIixcbiAgICBcImJlXCIsXG4gICAgXCJjZXJ0aWZpZWRcIlxuICBdLFxuICBzeW1ib2xzOiAvWz0+PCF+PzomfCtcXC0qXFwvXFxeJV0rLyxcbiAgdG9rZW5pemVyOiB7XG4gICAgcm9vdDogW1xuICAgICAgWy9eKFxccyopKGNvbW1lbnQ6Pyg/Olxccy4qfCkpJC8sIFtcIlwiLCBcImNvbW1lbnRcIl1dLFxuICAgICAgW1xuICAgICAgICAvXCIvLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW46IFwiaWRlbnRpZmllci5xdW90ZVwiLFxuICAgICAgICAgIGJyYWNrZXQ6IFwiQG9wZW5cIixcbiAgICAgICAgICBuZXh0OiBcIkBxdW90ZWRfaWRlbnRpZmllclwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFwiTEVYJFwiLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW46IFwia2V5d29yZFwiLFxuICAgICAgICAgIGJyYWNrZXQ6IFwiQG9wZW5cIixcbiAgICAgICAgICBuZXh0OiBcIkBpZGVudGlmaWVyX3VudGlsX3BlcmlvZFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbXCJMRVhPTlwiLCB7IHRva2VuOiBcImtleXdvcmRcIiwgYnJhY2tldDogXCJAb3BlblwiLCBuZXh0OiBcIkBzZW12ZXJcIiB9XSxcbiAgICAgIFtcbiAgICAgICAgXCI6XCIsXG4gICAgICAgIHtcbiAgICAgICAgICB0b2tlbjogXCJkZWxpbWl0ZXJcIixcbiAgICAgICAgICBicmFja2V0OiBcIkBvcGVuXCIsXG4gICAgICAgICAgbmV4dDogXCJAaWRlbnRpZmllcl91bnRpbF9wZXJpb2RcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAvW2Etel8kXVtcXHckXSovLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQG9wZXJhdG9yc1wiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIkB0eXBlS2V5d29yZHNcIjogXCJrZXl3b3JkLnR5cGVcIixcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IFwia2V5d29yZFwiLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcImlkZW50aWZpZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL1t7fSgpXFxbXFxdXS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgWy9bPD5dKD8hQHN5bWJvbHMpLywgXCJAYnJhY2tldHNcIl0sXG4gICAgICBbL0BzeW1ib2xzLywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbL1xcZCpcXC5cXGQqXFwuXFxkKi8sIFwibnVtYmVyLnNlbXZlclwiXSxcbiAgICAgIFsvXFxkKlxcLlxcZCsoW2VFXVtcXC0rXT9cXGQrKT8vLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSsvLCBcIm51bWJlci5oZXhcIl0sXG4gICAgICBbL1xcZCsvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvWzssLl0vLCBcImRlbGltaXRlclwiXVxuICAgIF0sXG4gICAgcXVvdGVkX2lkZW50aWZpZXI6IFtcbiAgICAgIFsvW15cXFxcXCJdKy8sIFwiaWRlbnRpZmllclwiXSxcbiAgICAgIFsvXCIvLCB7IHRva2VuOiBcImlkZW50aWZpZXIucXVvdGVcIiwgYnJhY2tldDogXCJAY2xvc2VcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIHNwYWNlX2lkZW50aWZpZXJfdW50aWxfcGVyaW9kOiBbXG4gICAgICBbXCI6XCIsIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgW1wiIFwiLCB7IHRva2VuOiBcIndoaXRlXCIsIG5leHQ6IFwiQGlkZW50aWZpZXJfcmVzdFwiIH1dXG4gICAgXSxcbiAgICBpZGVudGlmaWVyX3VudGlsX3BlcmlvZDogW1xuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIFtcIjpcIiwgeyB0b2tlbjogXCJkZWxpbWl0ZXJcIiwgbmV4dDogXCJAaWRlbnRpZmllcl9yZXN0XCIgfV0sXG4gICAgICBbL1teXFxcXC5dKy8sIFwiaWRlbnRpZmllclwiXSxcbiAgICAgIFsvXFwuLywgeyB0b2tlbjogXCJkZWxpbWl0ZXJcIiwgYnJhY2tldDogXCJAY2xvc2VcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIGlkZW50aWZpZXJfcmVzdDogW1xuICAgICAgWy9bXlxcXFwuXSsvLCBcImlkZW50aWZpZXJcIl0sXG4gICAgICBbL1xcLi8sIHsgdG9rZW46IFwiZGVsaW1pdGVyXCIsIGJyYWNrZXQ6IFwiQGNsb3NlXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXSxcbiAgICBzZW12ZXI6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbXCI6XCIsIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9cXGQqXFwuXFxkKlxcLlxcZCovLCB7IHRva2VuOiBcIm51bWJlci5zZW12ZXJcIiwgYnJhY2tldDogXCJAY2xvc2VcIiwgbmV4dDogXCJAcG9wXCIgfV1cbiAgICBdLFxuICAgIHdoaXRlc3BhY2U6IFtbL1sgXFx0XFxyXFxuXSsvLCBcIndoaXRlXCJdXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5121\n')}}]);