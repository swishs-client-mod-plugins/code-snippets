(self.webpackChunk=self.webpackChunk||[]).push([[4465],{4465:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "conf": () => (/* binding */ conf),\n/* harmony export */   "language": () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/shell/shell.ts\nvar conf = {\n  comments: {\n    lineComment: "#"\n  },\n  brackets: [\n    ["{", "}"],\n    ["[", "]"],\n    ["(", ")"]\n  ],\n  autoClosingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: \'"\', close: \'"\' },\n    { open: "\'", close: "\'" },\n    { open: "`", close: "`" }\n  ],\n  surroundingPairs: [\n    { open: "{", close: "}" },\n    { open: "[", close: "]" },\n    { open: "(", close: ")" },\n    { open: \'"\', close: \'"\' },\n    { open: "\'", close: "\'" },\n    { open: "`", close: "`" }\n  ]\n};\nvar language = {\n  defaultToken: "",\n  ignoreCase: true,\n  tokenPostfix: ".shell",\n  brackets: [\n    { token: "delimiter.bracket", open: "{", close: "}" },\n    { token: "delimiter.parenthesis", open: "(", close: ")" },\n    { token: "delimiter.square", open: "[", close: "]" }\n  ],\n  keywords: [\n    "if",\n    "then",\n    "do",\n    "else",\n    "elif",\n    "while",\n    "until",\n    "for",\n    "in",\n    "esac",\n    "fi",\n    "fin",\n    "fil",\n    "done",\n    "exit",\n    "set",\n    "unset",\n    "export",\n    "function"\n  ],\n  builtins: [\n    "ab",\n    "awk",\n    "bash",\n    "beep",\n    "cat",\n    "cc",\n    "cd",\n    "chown",\n    "chmod",\n    "chroot",\n    "clear",\n    "cp",\n    "curl",\n    "cut",\n    "diff",\n    "echo",\n    "find",\n    "gawk",\n    "gcc",\n    "get",\n    "git",\n    "grep",\n    "hg",\n    "kill",\n    "killall",\n    "ln",\n    "ls",\n    "make",\n    "mkdir",\n    "openssl",\n    "mv",\n    "nc",\n    "node",\n    "npm",\n    "ping",\n    "ps",\n    "restart",\n    "rm",\n    "rmdir",\n    "sed",\n    "service",\n    "sh",\n    "shopt",\n    "shred",\n    "source",\n    "sort",\n    "sleep",\n    "ssh",\n    "start",\n    "stop",\n    "su",\n    "sudo",\n    "svn",\n    "tee",\n    "telnet",\n    "top",\n    "touch",\n    "vi",\n    "vim",\n    "wall",\n    "wc",\n    "wget",\n    "who",\n    "write",\n    "yes",\n    "zsh"\n  ],\n  startingWithDash: /\\-+\\w+/,\n  identifiersWithDashes: /[a-zA-Z]\\w+(?:@startingWithDash)+/,\n  symbols: /[=><!~?&|+\\-*\\/\\^;\\.,]+/,\n  tokenizer: {\n    root: [\n      [/@identifiersWithDashes/, ""],\n      [/(\\s)((?:@startingWithDash)+)/, ["white", "attribute.name"]],\n      [\n        /[a-zA-Z]\\w*/,\n        {\n          cases: {\n            "@keywords": "keyword",\n            "@builtins": "type.identifier",\n            "@default": ""\n          }\n        }\n      ],\n      { include: "@whitespace" },\n      { include: "@strings" },\n      { include: "@parameters" },\n      { include: "@heredoc" },\n      [/[{}\\[\\]()]/, "@brackets"],\n      [/@symbols/, "delimiter"],\n      { include: "@numbers" },\n      [/[,;]/, "delimiter"]\n    ],\n    whitespace: [\n      [/\\s+/, "white"],\n      [/(^#!.*$)/, "metatag"],\n      [/(^#.*$)/, "comment"]\n    ],\n    numbers: [\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, "number.float"],\n      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"],\n      [/\\d+/, "number"]\n    ],\n    strings: [\n      [/\'/, "string", "@stringBody"],\n      [/"/, "string", "@dblStringBody"]\n    ],\n    stringBody: [\n      [/\'/, "string", "@popall"],\n      [/./, "string"]\n    ],\n    dblStringBody: [\n      [/"/, "string", "@popall"],\n      [/./, "string"]\n    ],\n    heredoc: [\n      [\n        /(<<[-<]?)(\\s*)([\'"`]?)([\\w\\-]+)([\'"`]?)/,\n        [\n          "constants",\n          "white",\n          "string.heredoc.delimiter",\n          "string.heredoc",\n          "string.heredoc.delimiter"\n        ]\n      ]\n    ],\n    parameters: [\n      [/\\$\\d+/, "variable.predefined"],\n      [/\\$\\w+/, "variable"],\n      [/\\$[*@#?\\-$!0_]/, "variable"],\n      [/\\$\'/, "variable", "@parameterBodyQuote"],\n      [/\\$"/, "variable", "@parameterBodyDoubleQuote"],\n      [/\\$\\(/, "variable", "@parameterBodyParen"],\n      [/\\$\\{/, "variable", "@parameterBodyCurlyBrace"]\n    ],\n    parameterBodyQuote: [\n      [/[^#:%*@\\-!_\']+/, "variable"],\n      [/[#:%*@\\-!_]/, "delimiter"],\n      [/[\']/, "variable", "@pop"]\n    ],\n    parameterBodyDoubleQuote: [\n      [/[^#:%*@\\-!_"]+/, "variable"],\n      [/[#:%*@\\-!_]/, "delimiter"],\n      [/["]/, "variable", "@pop"]\n    ],\n    parameterBodyParen: [\n      [/[^#:%*@\\-!_)]+/, "variable"],\n      [/[#:%*@\\-!_]/, "delimiter"],\n      [/[)]/, "variable", "@pop"]\n    ],\n    parameterBodyCurlyBrace: [\n      [/[^#:%*@\\-!_}]+/, "variable"],\n      [/[#:%*@\\-!_]/, "delimiter"],\n      [/[}]/, "variable", "@pop"]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQ2NS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLE9BQU8sS0FBSztBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxRQUFRLFlBQVksR0FBRztBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNLHVCQUF1QjtBQUM3QixNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sUUFBUSxZQUFZLEdBQUc7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTSx1QkFBdUI7QUFDN0IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvQ0FBb0MsWUFBWSxHQUFHO0FBQ3pELE1BQU0sdURBQXVEO0FBQzdELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQyxRQUFRLHFCQUFxQjtBQUM3QixRQUFRLHdCQUF3QjtBQUNoQyxRQUFRLHFCQUFxQjtBQUM3QixXQUFXO0FBQ1g7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBSUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vbW9uYWNvLWVkaXRvckAwLjMyLjEvbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9zaGVsbC9zaGVsbC5qcz8wNjRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFZlcnNpb246IDAuMzIuMSgyOWEyNzM1MTY4MDVhODUyYWE4ZWRjNWUwNTA1OWYxMTliMTNlZmYwKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L21vbmFjby1lZGl0b3IvYmxvYi9tYWluL0xJQ0VOU0UudHh0XG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gc3JjL2Jhc2ljLWxhbmd1YWdlcy9zaGVsbC9zaGVsbC50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiI1wiXG4gIH0sXG4gIGJyYWNrZXRzOiBbXG4gICAgW1wie1wiLCBcIn1cIl0sXG4gICAgW1wiW1wiLCBcIl1cIl0sXG4gICAgW1wiKFwiLCBcIilcIl1cbiAgXSxcbiAgYXV0b0Nsb3NpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcbiAgICB7IG9wZW46IFwiYFwiLCBjbG9zZTogXCJgXCIgfVxuICBdLFxuICBzdXJyb3VuZGluZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiIH0sXG4gICAgeyBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyBvcGVuOiBcIihcIiwgY2xvc2U6IFwiKVwiIH0sXG4gICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxuICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgIHsgb3BlbjogXCJgXCIsIGNsb3NlOiBcImBcIiB9XG4gIF1cbn07XG52YXIgbGFuZ3VhZ2UgPSB7XG4gIGRlZmF1bHRUb2tlbjogXCJcIixcbiAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgdG9rZW5Qb3N0Zml4OiBcIi5zaGVsbFwiLFxuICBicmFja2V0czogW1xuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLmJyYWNrZXRcIiwgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLnBhcmVudGhlc2lzXCIsIG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5zcXVhcmVcIiwgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9XG4gIF0sXG4gIGtleXdvcmRzOiBbXG4gICAgXCJpZlwiLFxuICAgIFwidGhlblwiLFxuICAgIFwiZG9cIixcbiAgICBcImVsc2VcIixcbiAgICBcImVsaWZcIixcbiAgICBcIndoaWxlXCIsXG4gICAgXCJ1bnRpbFwiLFxuICAgIFwiZm9yXCIsXG4gICAgXCJpblwiLFxuICAgIFwiZXNhY1wiLFxuICAgIFwiZmlcIixcbiAgICBcImZpblwiLFxuICAgIFwiZmlsXCIsXG4gICAgXCJkb25lXCIsXG4gICAgXCJleGl0XCIsXG4gICAgXCJzZXRcIixcbiAgICBcInVuc2V0XCIsXG4gICAgXCJleHBvcnRcIixcbiAgICBcImZ1bmN0aW9uXCJcbiAgXSxcbiAgYnVpbHRpbnM6IFtcbiAgICBcImFiXCIsXG4gICAgXCJhd2tcIixcbiAgICBcImJhc2hcIixcbiAgICBcImJlZXBcIixcbiAgICBcImNhdFwiLFxuICAgIFwiY2NcIixcbiAgICBcImNkXCIsXG4gICAgXCJjaG93blwiLFxuICAgIFwiY2htb2RcIixcbiAgICBcImNocm9vdFwiLFxuICAgIFwiY2xlYXJcIixcbiAgICBcImNwXCIsXG4gICAgXCJjdXJsXCIsXG4gICAgXCJjdXRcIixcbiAgICBcImRpZmZcIixcbiAgICBcImVjaG9cIixcbiAgICBcImZpbmRcIixcbiAgICBcImdhd2tcIixcbiAgICBcImdjY1wiLFxuICAgIFwiZ2V0XCIsXG4gICAgXCJnaXRcIixcbiAgICBcImdyZXBcIixcbiAgICBcImhnXCIsXG4gICAgXCJraWxsXCIsXG4gICAgXCJraWxsYWxsXCIsXG4gICAgXCJsblwiLFxuICAgIFwibHNcIixcbiAgICBcIm1ha2VcIixcbiAgICBcIm1rZGlyXCIsXG4gICAgXCJvcGVuc3NsXCIsXG4gICAgXCJtdlwiLFxuICAgIFwibmNcIixcbiAgICBcIm5vZGVcIixcbiAgICBcIm5wbVwiLFxuICAgIFwicGluZ1wiLFxuICAgIFwicHNcIixcbiAgICBcInJlc3RhcnRcIixcbiAgICBcInJtXCIsXG4gICAgXCJybWRpclwiLFxuICAgIFwic2VkXCIsXG4gICAgXCJzZXJ2aWNlXCIsXG4gICAgXCJzaFwiLFxuICAgIFwic2hvcHRcIixcbiAgICBcInNocmVkXCIsXG4gICAgXCJzb3VyY2VcIixcbiAgICBcInNvcnRcIixcbiAgICBcInNsZWVwXCIsXG4gICAgXCJzc2hcIixcbiAgICBcInN0YXJ0XCIsXG4gICAgXCJzdG9wXCIsXG4gICAgXCJzdVwiLFxuICAgIFwic3Vkb1wiLFxuICAgIFwic3ZuXCIsXG4gICAgXCJ0ZWVcIixcbiAgICBcInRlbG5ldFwiLFxuICAgIFwidG9wXCIsXG4gICAgXCJ0b3VjaFwiLFxuICAgIFwidmlcIixcbiAgICBcInZpbVwiLFxuICAgIFwid2FsbFwiLFxuICAgIFwid2NcIixcbiAgICBcIndnZXRcIixcbiAgICBcIndob1wiLFxuICAgIFwid3JpdGVcIixcbiAgICBcInllc1wiLFxuICAgIFwienNoXCJcbiAgXSxcbiAgc3RhcnRpbmdXaXRoRGFzaDogL1xcLStcXHcrLyxcbiAgaWRlbnRpZmllcnNXaXRoRGFzaGVzOiAvW2EtekEtWl1cXHcrKD86QHN0YXJ0aW5nV2l0aERhc2gpKy8sXG4gIHN5bWJvbHM6IC9bPT48IX4/JnwrXFwtKlxcL1xcXjtcXC4sXSsvLFxuICB0b2tlbml6ZXI6IHtcbiAgICByb290OiBbXG4gICAgICBbL0BpZGVudGlmaWVyc1dpdGhEYXNoZXMvLCBcIlwiXSxcbiAgICAgIFsvKFxccykoKD86QHN0YXJ0aW5nV2l0aERhc2gpKykvLCBbXCJ3aGl0ZVwiLCBcImF0dHJpYnV0ZS5uYW1lXCJdXSxcbiAgICAgIFtcbiAgICAgICAgL1thLXpBLVpdXFx3Ki8sXG4gICAgICAgIHtcbiAgICAgICAgICBjYXNlczoge1xuICAgICAgICAgICAgXCJAa2V5d29yZHNcIjogXCJrZXl3b3JkXCIsXG4gICAgICAgICAgICBcIkBidWlsdGluc1wiOiBcInR5cGUuaWRlbnRpZmllclwiLFxuICAgICAgICAgICAgXCJAZGVmYXVsdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgeyBpbmNsdWRlOiBcIkB3aGl0ZXNwYWNlXCIgfSxcbiAgICAgIHsgaW5jbHVkZTogXCJAc3RyaW5nc1wiIH0sXG4gICAgICB7IGluY2x1ZGU6IFwiQHBhcmFtZXRlcnNcIiB9LFxuICAgICAgeyBpbmNsdWRlOiBcIkBoZXJlZG9jXCIgfSxcbiAgICAgIFsvW3t9XFxbXFxdKCldLywgXCJAYnJhY2tldHNcIl0sXG4gICAgICBbL0BzeW1ib2xzLywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICB7IGluY2x1ZGU6IFwiQG51bWJlcnNcIiB9LFxuICAgICAgWy9bLDtdLywgXCJkZWxpbWl0ZXJcIl1cbiAgICBdLFxuICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgIFsvXFxzKy8sIFwid2hpdGVcIl0sXG4gICAgICBbLyheIyEuKiQpLywgXCJtZXRhdGFnXCJdLFxuICAgICAgWy8oXiMuKiQpLywgXCJjb21tZW50XCJdXG4gICAgXSxcbiAgICBudW1iZXJzOiBbXG4gICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbLzBbeFhdWzAtOWEtZkEtRl9dKlswLTlhLWZBLUZdLywgXCJudW1iZXIuaGV4XCJdLFxuICAgICAgWy9cXGQrLywgXCJudW1iZXJcIl1cbiAgICBdLFxuICAgIHN0cmluZ3M6IFtcbiAgICAgIFsvJy8sIFwic3RyaW5nXCIsIFwiQHN0cmluZ0JvZHlcIl0sXG4gICAgICBbL1wiLywgXCJzdHJpbmdcIiwgXCJAZGJsU3RyaW5nQm9keVwiXVxuICAgIF0sXG4gICAgc3RyaW5nQm9keTogW1xuICAgICAgWy8nLywgXCJzdHJpbmdcIiwgXCJAcG9wYWxsXCJdLFxuICAgICAgWy8uLywgXCJzdHJpbmdcIl1cbiAgICBdLFxuICAgIGRibFN0cmluZ0JvZHk6IFtcbiAgICAgIFsvXCIvLCBcInN0cmluZ1wiLCBcIkBwb3BhbGxcIl0sXG4gICAgICBbLy4vLCBcInN0cmluZ1wiXVxuICAgIF0sXG4gICAgaGVyZWRvYzogW1xuICAgICAgW1xuICAgICAgICAvKDw8Wy08XT8pKFxccyopKFsnXCJgXT8pKFtcXHdcXC1dKykoWydcImBdPykvLFxuICAgICAgICBbXG4gICAgICAgICAgXCJjb25zdGFudHNcIixcbiAgICAgICAgICBcIndoaXRlXCIsXG4gICAgICAgICAgXCJzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXJcIixcbiAgICAgICAgICBcInN0cmluZy5oZXJlZG9jXCIsXG4gICAgICAgICAgXCJzdHJpbmcuaGVyZWRvYy5kZWxpbWl0ZXJcIlxuICAgICAgICBdXG4gICAgICBdXG4gICAgXSxcbiAgICBwYXJhbWV0ZXJzOiBbXG4gICAgICBbL1xcJFxcZCsvLCBcInZhcmlhYmxlLnByZWRlZmluZWRcIl0sXG4gICAgICBbL1xcJFxcdysvLCBcInZhcmlhYmxlXCJdLFxuICAgICAgWy9cXCRbKkAjP1xcLSQhMF9dLywgXCJ2YXJpYWJsZVwiXSxcbiAgICAgIFsvXFwkJy8sIFwidmFyaWFibGVcIiwgXCJAcGFyYW1ldGVyQm9keVF1b3RlXCJdLFxuICAgICAgWy9cXCRcIi8sIFwidmFyaWFibGVcIiwgXCJAcGFyYW1ldGVyQm9keURvdWJsZVF1b3RlXCJdLFxuICAgICAgWy9cXCRcXCgvLCBcInZhcmlhYmxlXCIsIFwiQHBhcmFtZXRlckJvZHlQYXJlblwiXSxcbiAgICAgIFsvXFwkXFx7LywgXCJ2YXJpYWJsZVwiLCBcIkBwYXJhbWV0ZXJCb2R5Q3VybHlCcmFjZVwiXVxuICAgIF0sXG4gICAgcGFyYW1ldGVyQm9keVF1b3RlOiBbXG4gICAgICBbL1teIzolKkBcXC0hXyddKy8sIFwidmFyaWFibGVcIl0sXG4gICAgICBbL1sjOiUqQFxcLSFfXS8sIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgWy9bJ10vLCBcInZhcmlhYmxlXCIsIFwiQHBvcFwiXVxuICAgIF0sXG4gICAgcGFyYW1ldGVyQm9keURvdWJsZVF1b3RlOiBbXG4gICAgICBbL1teIzolKkBcXC0hX1wiXSsvLCBcInZhcmlhYmxlXCJdLFxuICAgICAgWy9bIzolKkBcXC0hX10vLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvW1wiXS8sIFwidmFyaWFibGVcIiwgXCJAcG9wXCJdXG4gICAgXSxcbiAgICBwYXJhbWV0ZXJCb2R5UGFyZW46IFtcbiAgICAgIFsvW14jOiUqQFxcLSFfKV0rLywgXCJ2YXJpYWJsZVwiXSxcbiAgICAgIFsvWyM6JSpAXFwtIV9dLywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbL1spXS8sIFwidmFyaWFibGVcIiwgXCJAcG9wXCJdXG4gICAgXSxcbiAgICBwYXJhbWV0ZXJCb2R5Q3VybHlCcmFjZTogW1xuICAgICAgWy9bXiM6JSpAXFwtIV99XSsvLCBcInZhcmlhYmxlXCJdLFxuICAgICAgWy9bIzolKkBcXC0hX10vLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvW31dLywgXCJ2YXJpYWJsZVwiLCBcIkBwb3BcIl1cbiAgICBdXG4gIH1cbn07XG5leHBvcnQge1xuICBjb25mLFxuICBsYW5ndWFnZVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4465\n')}}]);