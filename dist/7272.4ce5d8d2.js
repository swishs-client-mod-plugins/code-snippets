(self.webpackChunk=self.webpackChunk||[]).push([[7272],{7272:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "conf": () => (/* binding */ conf),\n/* harmony export */   "language": () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/pla/pla.ts\nvar conf = {\n  comments: {\n    lineComment: "#"\n  },\n  brackets: [\n    ["[", "]"],\n    ["<", ">"],\n    ["(", ")"]\n  ],\n  autoClosingPairs: [\n    { open: "[", close: "]" },\n    { open: "<", close: ">" },\n    { open: "(", close: ")" }\n  ],\n  surroundingPairs: [\n    { open: "[", close: "]" },\n    { open: "<", close: ">" },\n    { open: "(", close: ")" }\n  ]\n};\nvar language = {\n  defaultToken: "",\n  tokenPostfix: ".pla",\n  brackets: [\n    { open: "[", close: "]", token: "delimiter.square" },\n    { open: "<", close: ">", token: "delimiter.angle" },\n    { open: "(", close: ")", token: "delimiter.parenthesis" }\n  ],\n  keywords: [\n    ".i",\n    ".o",\n    ".mv",\n    ".ilb",\n    ".ob",\n    ".label",\n    ".type",\n    ".phase",\n    ".pair",\n    ".symbolic",\n    ".symbolic-output",\n    ".kiss",\n    ".p",\n    ".e",\n    ".end"\n  ],\n  comment: /#.*$/,\n  identifier: /[a-zA-Z]+[a-zA-Z0-9_\\-]*/,\n  plaContent: /[01\\-~\\|]+/,\n  tokenizer: {\n    root: [\n      { include: "@whitespace" },\n      [/@comment/, "comment"],\n      [\n        /\\.([a-zA-Z_\\-]+)/,\n        {\n          cases: {\n            "@eos": { token: "keyword.$1" },\n            "@keywords": {\n              cases: {\n                ".type": { token: "keyword.$1", next: "@type" },\n                "@default": { token: "keyword.$1", next: "@keywordArg" }\n              }\n            },\n            "@default": { token: "keyword.$1" }\n          }\n        }\n      ],\n      [/@identifier/, "identifier"],\n      [/@plaContent/, "string"]\n    ],\n    whitespace: [[/[ \\t\\r\\n]+/, ""]],\n    type: [{ include: "@whitespace" }, [/\\w+/, { token: "type", next: "@pop" }]],\n    keywordArg: [\n      [\n        /[ \\t\\r\\n]+/,\n        {\n          cases: {\n            "@eos": { token: "", next: "@pop" },\n            "@default": ""\n          }\n        }\n      ],\n      [/@comment/, "comment", "@pop"],\n      [\n        /[<>()\\[\\]]/,\n        {\n          cases: {\n            "@eos": { token: "@brackets", next: "@pop" },\n            "@default": "@brackets"\n          }\n        }\n      ],\n      [\n        /\\-?\\d+/,\n        {\n          cases: {\n            "@eos": { token: "number", next: "@pop" },\n            "@default": "number"\n          }\n        }\n      ],\n      [\n        /@identifier/,\n        {\n          cases: {\n            "@eos": { token: "identifier", next: "@pop" },\n            "@default": "identifier"\n          }\n        }\n      ],\n      [\n        /[;=]/,\n        {\n          cases: {\n            "@eos": { token: "delimiter", next: "@pop" },\n            "@default": "delimiter"\n          }\n        }\n      ]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzI3Mi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0sdUJBQXVCO0FBQzdCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFrRDtBQUN4RCxNQUFNLGlEQUFpRDtBQUN2RCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0JBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQSwyQkFBMkIsb0NBQW9DO0FBQy9ELDhCQUE4QjtBQUM5QjtBQUNBLGFBQWE7QUFDYiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHdCQUF3QixZQUFZLDZCQUE2QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlCQUF5QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9tb25hY28tZWRpdG9yQDAuMzIuMS9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3BsYS9wbGEuanM/MmY1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjMyLjEoMjlhMjczNTE2ODA1YTg1MmFhOGVkYzVlMDUwNTlmMTE5YjEzZWZmMClcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvcGxhL3BsYS50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiI1wiXG4gIH0sXG4gIGJyYWNrZXRzOiBbXG4gICAgW1wiW1wiLCBcIl1cIl0sXG4gICAgW1wiPFwiLCBcIj5cIl0sXG4gICAgW1wiKFwiLCBcIilcIl1cbiAgXSxcbiAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCI8XCIsIGNsb3NlOiBcIj5cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9XG4gIF0sXG4gIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiPFwiLCBjbG9zZTogXCI+XCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfVxuICBdXG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIucGxhXCIsXG4gIGJyYWNrZXRzOiBbXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiLCB0b2tlbjogXCJkZWxpbWl0ZXIuc3F1YXJlXCIgfSxcbiAgICB7IG9wZW46IFwiPFwiLCBjbG9zZTogXCI+XCIsIHRva2VuOiBcImRlbGltaXRlci5hbmdsZVwiIH0sXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiLCB0b2tlbjogXCJkZWxpbWl0ZXIucGFyZW50aGVzaXNcIiB9XG4gIF0sXG4gIGtleXdvcmRzOiBbXG4gICAgXCIuaVwiLFxuICAgIFwiLm9cIixcbiAgICBcIi5tdlwiLFxuICAgIFwiLmlsYlwiLFxuICAgIFwiLm9iXCIsXG4gICAgXCIubGFiZWxcIixcbiAgICBcIi50eXBlXCIsXG4gICAgXCIucGhhc2VcIixcbiAgICBcIi5wYWlyXCIsXG4gICAgXCIuc3ltYm9saWNcIixcbiAgICBcIi5zeW1ib2xpYy1vdXRwdXRcIixcbiAgICBcIi5raXNzXCIsXG4gICAgXCIucFwiLFxuICAgIFwiLmVcIixcbiAgICBcIi5lbmRcIlxuICBdLFxuICBjb21tZW50OiAvIy4qJC8sXG4gIGlkZW50aWZpZXI6IC9bYS16QS1aXStbYS16QS1aMC05X1xcLV0qLyxcbiAgcGxhQ29udGVudDogL1swMVxcLX5cXHxdKy8sXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL0Bjb21tZW50LywgXCJjb21tZW50XCJdLFxuICAgICAgW1xuICAgICAgICAvXFwuKFthLXpBLVpfXFwtXSspLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJrZXl3b3JkLiQxXCIgfSxcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IHtcbiAgICAgICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgICAgICBcIi50eXBlXCI6IHsgdG9rZW46IFwia2V5d29yZC4kMVwiLCBuZXh0OiBcIkB0eXBlXCIgfSxcbiAgICAgICAgICAgICAgICBcIkBkZWZhdWx0XCI6IHsgdG9rZW46IFwia2V5d29yZC4kMVwiLCBuZXh0OiBcIkBrZXl3b3JkQXJnXCIgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiB7IHRva2VuOiBcImtleXdvcmQuJDFcIiB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9AaWRlbnRpZmllci8sIFwiaWRlbnRpZmllclwiXSxcbiAgICAgIFsvQHBsYUNvbnRlbnQvLCBcInN0cmluZ1wiXVxuICAgIF0sXG4gICAgd2hpdGVzcGFjZTogW1svWyBcXHRcXHJcXG5dKy8sIFwiXCJdXSxcbiAgICB0eXBlOiBbeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSwgWy9cXHcrLywgeyB0b2tlbjogXCJ0eXBlXCIsIG5leHQ6IFwiQHBvcFwiIH1dXSxcbiAgICBrZXl3b3JkQXJnOiBbXG4gICAgICBbXG4gICAgICAgIC9bIFxcdFxcclxcbl0rLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJcIiwgbmV4dDogXCJAcG9wXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFsvQGNvbW1lbnQvLCBcImNvbW1lbnRcIiwgXCJAcG9wXCJdLFxuICAgICAgW1xuICAgICAgICAvWzw+KClcXFtcXF1dLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJAYnJhY2tldHNcIiwgbmV4dDogXCJAcG9wXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJAYnJhY2tldHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgL1xcLT9cXGQrLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJudW1iZXJcIiwgbmV4dDogXCJAcG9wXCIgfSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJudW1iZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgL0BpZGVudGlmaWVyLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkBlb3NcIjogeyB0b2tlbjogXCJpZGVudGlmaWVyXCIsIG5leHQ6IFwiQHBvcFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiaWRlbnRpZmllclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAvWzs9XS8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAZW9zXCI6IHsgdG9rZW46IFwiZGVsaW1pdGVyXCIsIG5leHQ6IFwiQHBvcFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiZGVsaW1pdGVyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdXG4gIH1cbn07XG5leHBvcnQge1xuICBjb25mLFxuICBsYW5ndWFnZVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7272\n')}}]);