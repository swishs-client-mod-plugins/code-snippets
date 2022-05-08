(self.webpackChunk=self.webpackChunk||[]).push([[1928],{1928:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "conf": () => (/* binding */ conf),\n/* harmony export */   "language": () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/vb/vb.ts\nvar conf = {\n  comments: {\n    lineComment: "\'",\n    blockComment: ["/*", "*/"]\n  },\n  brackets: [\n    ["{", "}"],\n    ["[", "]"],\n    ["(", ")"],\n    ["<", ">"],\n    ["addhandler", "end addhandler"],\n    ["class", "end class"],\n    ["enum", "end enum"],\n    ["event", "end event"],\n    ["function", "end function"],\n    ["get", "end get"],\n    ["if", "end if"],\n    ["interface", "end interface"],\n    ["module", "end module"],\n    ["namespace", "end namespace"],\n    ["operator", "end operator"],\n    ["property", "end property"],\n    ["raiseevent", "end raiseevent"],\n    ["removehandler", "end removehandler"],\n    ["select", "end select"],\n    ["set", "end set"],\n    ["structure", "end structure"],\n    ["sub", "end sub"],\n    ["synclock", "end synclock"],\n    ["try", "end try"],\n    ["while", "end while"],\n    ["with", "end with"],\n    ["using", "end using"],\n    ["do", "loop"],\n    ["for", "next"]\n  ],\n  autoClosingPairs: [\n    { open: "{", close: "}", notIn: ["string", "comment"] },\n    { open: "[", close: "]", notIn: ["string", "comment"] },\n    { open: "(", close: ")", notIn: ["string", "comment"] },\n    { open: \'"\', close: \'"\', notIn: ["string", "comment"] },\n    { open: "<", close: ">", notIn: ["string", "comment"] }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp("^\\\\s*#Region\\\\b"),\n      end: new RegExp("^\\\\s*#End Region\\\\b")\n    }\n  }\n};\nvar language = {\n  defaultToken: "",\n  tokenPostfix: ".vb",\n  ignoreCase: true,\n  brackets: [\n    { token: "delimiter.bracket", open: "{", close: "}" },\n    { token: "delimiter.array", open: "[", close: "]" },\n    { token: "delimiter.parenthesis", open: "(", close: ")" },\n    { token: "delimiter.angle", open: "<", close: ">" },\n    {\n      token: "keyword.tag-addhandler",\n      open: "addhandler",\n      close: "end addhandler"\n    },\n    { token: "keyword.tag-class", open: "class", close: "end class" },\n    { token: "keyword.tag-enum", open: "enum", close: "end enum" },\n    { token: "keyword.tag-event", open: "event", close: "end event" },\n    {\n      token: "keyword.tag-function",\n      open: "function",\n      close: "end function"\n    },\n    { token: "keyword.tag-get", open: "get", close: "end get" },\n    { token: "keyword.tag-if", open: "if", close: "end if" },\n    {\n      token: "keyword.tag-interface",\n      open: "interface",\n      close: "end interface"\n    },\n    { token: "keyword.tag-module", open: "module", close: "end module" },\n    {\n      token: "keyword.tag-namespace",\n      open: "namespace",\n      close: "end namespace"\n    },\n    {\n      token: "keyword.tag-operator",\n      open: "operator",\n      close: "end operator"\n    },\n    {\n      token: "keyword.tag-property",\n      open: "property",\n      close: "end property"\n    },\n    {\n      token: "keyword.tag-raiseevent",\n      open: "raiseevent",\n      close: "end raiseevent"\n    },\n    {\n      token: "keyword.tag-removehandler",\n      open: "removehandler",\n      close: "end removehandler"\n    },\n    { token: "keyword.tag-select", open: "select", close: "end select" },\n    { token: "keyword.tag-set", open: "set", close: "end set" },\n    {\n      token: "keyword.tag-structure",\n      open: "structure",\n      close: "end structure"\n    },\n    { token: "keyword.tag-sub", open: "sub", close: "end sub" },\n    {\n      token: "keyword.tag-synclock",\n      open: "synclock",\n      close: "end synclock"\n    },\n    { token: "keyword.tag-try", open: "try", close: "end try" },\n    { token: "keyword.tag-while", open: "while", close: "end while" },\n    { token: "keyword.tag-with", open: "with", close: "end with" },\n    { token: "keyword.tag-using", open: "using", close: "end using" },\n    { token: "keyword.tag-do", open: "do", close: "loop" },\n    { token: "keyword.tag-for", open: "for", close: "next" }\n  ],\n  keywords: [\n    "AddHandler",\n    "AddressOf",\n    "Alias",\n    "And",\n    "AndAlso",\n    "As",\n    "Async",\n    "Boolean",\n    "ByRef",\n    "Byte",\n    "ByVal",\n    "Call",\n    "Case",\n    "Catch",\n    "CBool",\n    "CByte",\n    "CChar",\n    "CDate",\n    "CDbl",\n    "CDec",\n    "Char",\n    "CInt",\n    "Class",\n    "CLng",\n    "CObj",\n    "Const",\n    "Continue",\n    "CSByte",\n    "CShort",\n    "CSng",\n    "CStr",\n    "CType",\n    "CUInt",\n    "CULng",\n    "CUShort",\n    "Date",\n    "Decimal",\n    "Declare",\n    "Default",\n    "Delegate",\n    "Dim",\n    "DirectCast",\n    "Do",\n    "Double",\n    "Each",\n    "Else",\n    "ElseIf",\n    "End",\n    "EndIf",\n    "Enum",\n    "Erase",\n    "Error",\n    "Event",\n    "Exit",\n    "False",\n    "Finally",\n    "For",\n    "Friend",\n    "Function",\n    "Get",\n    "GetType",\n    "GetXMLNamespace",\n    "Global",\n    "GoSub",\n    "GoTo",\n    "Handles",\n    "If",\n    "Implements",\n    "Imports",\n    "In",\n    "Inherits",\n    "Integer",\n    "Interface",\n    "Is",\n    "IsNot",\n    "Let",\n    "Lib",\n    "Like",\n    "Long",\n    "Loop",\n    "Me",\n    "Mod",\n    "Module",\n    "MustInherit",\n    "MustOverride",\n    "MyBase",\n    "MyClass",\n    "NameOf",\n    "Namespace",\n    "Narrowing",\n    "New",\n    "Next",\n    "Not",\n    "Nothing",\n    "NotInheritable",\n    "NotOverridable",\n    "Object",\n    "Of",\n    "On",\n    "Operator",\n    "Option",\n    "Optional",\n    "Or",\n    "OrElse",\n    "Out",\n    "Overloads",\n    "Overridable",\n    "Overrides",\n    "ParamArray",\n    "Partial",\n    "Private",\n    "Property",\n    "Protected",\n    "Public",\n    "RaiseEvent",\n    "ReadOnly",\n    "ReDim",\n    "RemoveHandler",\n    "Resume",\n    "Return",\n    "SByte",\n    "Select",\n    "Set",\n    "Shadows",\n    "Shared",\n    "Short",\n    "Single",\n    "Static",\n    "Step",\n    "Stop",\n    "String",\n    "Structure",\n    "Sub",\n    "SyncLock",\n    "Then",\n    "Throw",\n    "To",\n    "True",\n    "Try",\n    "TryCast",\n    "TypeOf",\n    "UInteger",\n    "ULong",\n    "UShort",\n    "Using",\n    "Variant",\n    "Wend",\n    "When",\n    "While",\n    "Widening",\n    "With",\n    "WithEvents",\n    "WriteOnly",\n    "Xor"\n  ],\n  tagwords: [\n    "If",\n    "Sub",\n    "Select",\n    "Try",\n    "Class",\n    "Enum",\n    "Function",\n    "Get",\n    "Interface",\n    "Module",\n    "Namespace",\n    "Operator",\n    "Set",\n    "Structure",\n    "Using",\n    "While",\n    "With",\n    "Do",\n    "Loop",\n    "For",\n    "Next",\n    "Property",\n    "Continue",\n    "AddHandler",\n    "RemoveHandler",\n    "Event",\n    "RaiseEvent",\n    "SyncLock"\n  ],\n  symbols: /[=><!~?;\\.,:&|+\\-*\\/\\^%]+/,\n  integersuffix: /U?[DI%L&S@]?/,\n  floatsuffix: /[R#F!]?/,\n  tokenizer: {\n    root: [\n      { include: "@whitespace" },\n      [/next(?!\\w)/, { token: "keyword.tag-for" }],\n      [/loop(?!\\w)/, { token: "keyword.tag-do" }],\n      [\n        /end\\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/,\n        { token: "keyword.tag-$1" }\n      ],\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            "@tagwords": { token: "keyword.tag-$0" },\n            "@keywords": { token: "keyword.$0" },\n            "@default": "identifier"\n          }\n        }\n      ],\n      [/^\\s*#\\w+/, "keyword"],\n      [/\\d*\\d+e([\\-+]?\\d+)?(@floatsuffix)/, "number.float"],\n      [/\\d*\\.\\d+(e[\\-+]?\\d+)?(@floatsuffix)/, "number.float"],\n      [/&H[0-9a-f]+(@integersuffix)/, "number.hex"],\n      [/&0[0-7]+(@integersuffix)/, "number.octal"],\n      [/\\d+(@integersuffix)/, "number"],\n      [/#.*#/, "number"],\n      [/[{}()\\[\\]]/, "@brackets"],\n      [/@symbols/, "delimiter"],\n      [/["\\u201c\\u201d]/, { token: "string.quote", next: "@string" }]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, ""],\n      [/(\\\'|REM(?!\\w)).*$/, "comment"]\n    ],\n    string: [\n      [/[^"\\u201c\\u201d]+/, "string"],\n      [/["\\u201c\\u201d]{2}/, "string.escape"],\n      [/["\\u201c\\u201d]C?/, { token: "string.quote", next: "@pop" }]\n    ]\n  }\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkyOC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsT0FBTyxLQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxRQUFRLFlBQVksaUNBQWlDO0FBQzNELE1BQU0scURBQXFEO0FBQzNELE1BQU0scURBQXFEO0FBQzNELE1BQU0scURBQXFEO0FBQzNELE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0NBQW9DLFlBQVksR0FBRztBQUN6RCxNQUFNLGlEQUFpRDtBQUN2RCxNQUFNLHVEQUF1RDtBQUM3RCxNQUFNLGlEQUFpRDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLCtEQUErRDtBQUNyRSxNQUFNLDREQUE0RDtBQUNsRSxNQUFNLCtEQUErRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLHlEQUF5RDtBQUMvRCxNQUFNLHNEQUFzRDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLGtFQUFrRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLGtFQUFrRTtBQUN4RSxNQUFNLHlEQUF5RDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLHlEQUF5RDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxNQUFNLHlEQUF5RDtBQUMvRCxNQUFNLCtEQUErRDtBQUNyRSxNQUFNLDREQUE0RDtBQUNsRSxNQUFNLCtEQUErRDtBQUNyRSxNQUFNLG9EQUFvRDtBQUMxRCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdCQUF3QjtBQUNoQyx1QkFBdUIsMEJBQTBCO0FBQ2pELHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRCwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSw0QkFBNEIsd0NBQXdDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUU7QUFDMUIsOEJBQThCLHFDQUFxQztBQUNuRTtBQUNBO0FBQ0E7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9tb25hY28tZWRpdG9yQDAuMzIuMS9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3ZiL3ZiLmpzPzM1ODYiXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC4zMi4xKDI5YTI3MzUxNjgwNWE4NTJhYThlZGM1ZTA1MDU5ZjExOWIxM2VmZjApXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL3ZiL3ZiLnRzXG52YXIgY29uZiA9IHtcbiAgY29tbWVudHM6IHtcbiAgICBsaW5lQ29tbWVudDogXCInXCIsXG4gICAgYmxvY2tDb21tZW50OiBbXCIvKlwiLCBcIiovXCJdXG4gIH0sXG4gIGJyYWNrZXRzOiBbXG4gICAgW1wie1wiLCBcIn1cIl0sXG4gICAgW1wiW1wiLCBcIl1cIl0sXG4gICAgW1wiKFwiLCBcIilcIl0sXG4gICAgW1wiPFwiLCBcIj5cIl0sXG4gICAgW1wiYWRkaGFuZGxlclwiLCBcImVuZCBhZGRoYW5kbGVyXCJdLFxuICAgIFtcImNsYXNzXCIsIFwiZW5kIGNsYXNzXCJdLFxuICAgIFtcImVudW1cIiwgXCJlbmQgZW51bVwiXSxcbiAgICBbXCJldmVudFwiLCBcImVuZCBldmVudFwiXSxcbiAgICBbXCJmdW5jdGlvblwiLCBcImVuZCBmdW5jdGlvblwiXSxcbiAgICBbXCJnZXRcIiwgXCJlbmQgZ2V0XCJdLFxuICAgIFtcImlmXCIsIFwiZW5kIGlmXCJdLFxuICAgIFtcImludGVyZmFjZVwiLCBcImVuZCBpbnRlcmZhY2VcIl0sXG4gICAgW1wibW9kdWxlXCIsIFwiZW5kIG1vZHVsZVwiXSxcbiAgICBbXCJuYW1lc3BhY2VcIiwgXCJlbmQgbmFtZXNwYWNlXCJdLFxuICAgIFtcIm9wZXJhdG9yXCIsIFwiZW5kIG9wZXJhdG9yXCJdLFxuICAgIFtcInByb3BlcnR5XCIsIFwiZW5kIHByb3BlcnR5XCJdLFxuICAgIFtcInJhaXNlZXZlbnRcIiwgXCJlbmQgcmFpc2VldmVudFwiXSxcbiAgICBbXCJyZW1vdmVoYW5kbGVyXCIsIFwiZW5kIHJlbW92ZWhhbmRsZXJcIl0sXG4gICAgW1wic2VsZWN0XCIsIFwiZW5kIHNlbGVjdFwiXSxcbiAgICBbXCJzZXRcIiwgXCJlbmQgc2V0XCJdLFxuICAgIFtcInN0cnVjdHVyZVwiLCBcImVuZCBzdHJ1Y3R1cmVcIl0sXG4gICAgW1wic3ViXCIsIFwiZW5kIHN1YlwiXSxcbiAgICBbXCJzeW5jbG9ja1wiLCBcImVuZCBzeW5jbG9ja1wiXSxcbiAgICBbXCJ0cnlcIiwgXCJlbmQgdHJ5XCJdLFxuICAgIFtcIndoaWxlXCIsIFwiZW5kIHdoaWxlXCJdLFxuICAgIFtcIndpdGhcIiwgXCJlbmQgd2l0aFwiXSxcbiAgICBbXCJ1c2luZ1wiLCBcImVuZCB1c2luZ1wiXSxcbiAgICBbXCJkb1wiLCBcImxvb3BcIl0sXG4gICAgW1wiZm9yXCIsIFwibmV4dFwiXVxuICBdLFxuICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiwgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH0sXG4gICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwiPFwiLCBjbG9zZTogXCI+XCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH1cbiAgXSxcbiAgZm9sZGluZzoge1xuICAgIG1hcmtlcnM6IHtcbiAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNSZWdpb25cXFxcYlwiKSxcbiAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojRW5kIFJlZ2lvblxcXFxiXCIpXG4gICAgfVxuICB9XG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIudmJcIixcbiAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgYnJhY2tldHM6IFtcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5icmFja2V0XCIsIG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5hcnJheVwiLCBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIucGFyZW50aGVzaXNcIiwgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLmFuZ2xlXCIsIG9wZW46IFwiPFwiLCBjbG9zZTogXCI+XCIgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1hZGRoYW5kbGVyXCIsXG4gICAgICBvcGVuOiBcImFkZGhhbmRsZXJcIixcbiAgICAgIGNsb3NlOiBcImVuZCBhZGRoYW5kbGVyXCJcbiAgICB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctY2xhc3NcIiwgb3BlbjogXCJjbGFzc1wiLCBjbG9zZTogXCJlbmQgY2xhc3NcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctZW51bVwiLCBvcGVuOiBcImVudW1cIiwgY2xvc2U6IFwiZW5kIGVudW1cIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctZXZlbnRcIiwgb3BlbjogXCJldmVudFwiLCBjbG9zZTogXCJlbmQgZXZlbnRcIiB9LFxuICAgIHtcbiAgICAgIHRva2VuOiBcImtleXdvcmQudGFnLWZ1bmN0aW9uXCIsXG4gICAgICBvcGVuOiBcImZ1bmN0aW9uXCIsXG4gICAgICBjbG9zZTogXCJlbmQgZnVuY3Rpb25cIlxuICAgIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1nZXRcIiwgb3BlbjogXCJnZXRcIiwgY2xvc2U6IFwiZW5kIGdldFwiIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1pZlwiLCBvcGVuOiBcImlmXCIsIGNsb3NlOiBcImVuZCBpZlwiIH0sXG4gICAge1xuICAgICAgdG9rZW46IFwia2V5d29yZC50YWctaW50ZXJmYWNlXCIsXG4gICAgICBvcGVuOiBcImludGVyZmFjZVwiLFxuICAgICAgY2xvc2U6IFwiZW5kIGludGVyZmFjZVwiXG4gICAgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLW1vZHVsZVwiLCBvcGVuOiBcIm1vZHVsZVwiLCBjbG9zZTogXCJlbmQgbW9kdWxlXCIgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1uYW1lc3BhY2VcIixcbiAgICAgIG9wZW46IFwibmFtZXNwYWNlXCIsXG4gICAgICBjbG9zZTogXCJlbmQgbmFtZXNwYWNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRva2VuOiBcImtleXdvcmQudGFnLW9wZXJhdG9yXCIsXG4gICAgICBvcGVuOiBcIm9wZXJhdG9yXCIsXG4gICAgICBjbG9zZTogXCJlbmQgb3BlcmF0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgdG9rZW46IFwia2V5d29yZC50YWctcHJvcGVydHlcIixcbiAgICAgIG9wZW46IFwicHJvcGVydHlcIixcbiAgICAgIGNsb3NlOiBcImVuZCBwcm9wZXJ0eVwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1yYWlzZWV2ZW50XCIsXG4gICAgICBvcGVuOiBcInJhaXNlZXZlbnRcIixcbiAgICAgIGNsb3NlOiBcImVuZCByYWlzZWV2ZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRva2VuOiBcImtleXdvcmQudGFnLXJlbW92ZWhhbmRsZXJcIixcbiAgICAgIG9wZW46IFwicmVtb3ZlaGFuZGxlclwiLFxuICAgICAgY2xvc2U6IFwiZW5kIHJlbW92ZWhhbmRsZXJcIlxuICAgIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1zZWxlY3RcIiwgb3BlbjogXCJzZWxlY3RcIiwgY2xvc2U6IFwiZW5kIHNlbGVjdFwiIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1zZXRcIiwgb3BlbjogXCJzZXRcIiwgY2xvc2U6IFwiZW5kIHNldFwiIH0sXG4gICAge1xuICAgICAgdG9rZW46IFwia2V5d29yZC50YWctc3RydWN0dXJlXCIsXG4gICAgICBvcGVuOiBcInN0cnVjdHVyZVwiLFxuICAgICAgY2xvc2U6IFwiZW5kIHN0cnVjdHVyZVwiXG4gICAgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLXN1YlwiLCBvcGVuOiBcInN1YlwiLCBjbG9zZTogXCJlbmQgc3ViXCIgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1zeW5jbG9ja1wiLFxuICAgICAgb3BlbjogXCJzeW5jbG9ja1wiLFxuICAgICAgY2xvc2U6IFwiZW5kIHN5bmNsb2NrXCJcbiAgICB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctdHJ5XCIsIG9wZW46IFwidHJ5XCIsIGNsb3NlOiBcImVuZCB0cnlcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctd2hpbGVcIiwgb3BlbjogXCJ3aGlsZVwiLCBjbG9zZTogXCJlbmQgd2hpbGVcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctd2l0aFwiLCBvcGVuOiBcIndpdGhcIiwgY2xvc2U6IFwiZW5kIHdpdGhcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctdXNpbmdcIiwgb3BlbjogXCJ1c2luZ1wiLCBjbG9zZTogXCJlbmQgdXNpbmdcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctZG9cIiwgb3BlbjogXCJkb1wiLCBjbG9zZTogXCJsb29wXCIgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLWZvclwiLCBvcGVuOiBcImZvclwiLCBjbG9zZTogXCJuZXh0XCIgfVxuICBdLFxuICBrZXl3b3JkczogW1xuICAgIFwiQWRkSGFuZGxlclwiLFxuICAgIFwiQWRkcmVzc09mXCIsXG4gICAgXCJBbGlhc1wiLFxuICAgIFwiQW5kXCIsXG4gICAgXCJBbmRBbHNvXCIsXG4gICAgXCJBc1wiLFxuICAgIFwiQXN5bmNcIixcbiAgICBcIkJvb2xlYW5cIixcbiAgICBcIkJ5UmVmXCIsXG4gICAgXCJCeXRlXCIsXG4gICAgXCJCeVZhbFwiLFxuICAgIFwiQ2FsbFwiLFxuICAgIFwiQ2FzZVwiLFxuICAgIFwiQ2F0Y2hcIixcbiAgICBcIkNCb29sXCIsXG4gICAgXCJDQnl0ZVwiLFxuICAgIFwiQ0NoYXJcIixcbiAgICBcIkNEYXRlXCIsXG4gICAgXCJDRGJsXCIsXG4gICAgXCJDRGVjXCIsXG4gICAgXCJDaGFyXCIsXG4gICAgXCJDSW50XCIsXG4gICAgXCJDbGFzc1wiLFxuICAgIFwiQ0xuZ1wiLFxuICAgIFwiQ09ialwiLFxuICAgIFwiQ29uc3RcIixcbiAgICBcIkNvbnRpbnVlXCIsXG4gICAgXCJDU0J5dGVcIixcbiAgICBcIkNTaG9ydFwiLFxuICAgIFwiQ1NuZ1wiLFxuICAgIFwiQ1N0clwiLFxuICAgIFwiQ1R5cGVcIixcbiAgICBcIkNVSW50XCIsXG4gICAgXCJDVUxuZ1wiLFxuICAgIFwiQ1VTaG9ydFwiLFxuICAgIFwiRGF0ZVwiLFxuICAgIFwiRGVjaW1hbFwiLFxuICAgIFwiRGVjbGFyZVwiLFxuICAgIFwiRGVmYXVsdFwiLFxuICAgIFwiRGVsZWdhdGVcIixcbiAgICBcIkRpbVwiLFxuICAgIFwiRGlyZWN0Q2FzdFwiLFxuICAgIFwiRG9cIixcbiAgICBcIkRvdWJsZVwiLFxuICAgIFwiRWFjaFwiLFxuICAgIFwiRWxzZVwiLFxuICAgIFwiRWxzZUlmXCIsXG4gICAgXCJFbmRcIixcbiAgICBcIkVuZElmXCIsXG4gICAgXCJFbnVtXCIsXG4gICAgXCJFcmFzZVwiLFxuICAgIFwiRXJyb3JcIixcbiAgICBcIkV2ZW50XCIsXG4gICAgXCJFeGl0XCIsXG4gICAgXCJGYWxzZVwiLFxuICAgIFwiRmluYWxseVwiLFxuICAgIFwiRm9yXCIsXG4gICAgXCJGcmllbmRcIixcbiAgICBcIkZ1bmN0aW9uXCIsXG4gICAgXCJHZXRcIixcbiAgICBcIkdldFR5cGVcIixcbiAgICBcIkdldFhNTE5hbWVzcGFjZVwiLFxuICAgIFwiR2xvYmFsXCIsXG4gICAgXCJHb1N1YlwiLFxuICAgIFwiR29Ub1wiLFxuICAgIFwiSGFuZGxlc1wiLFxuICAgIFwiSWZcIixcbiAgICBcIkltcGxlbWVudHNcIixcbiAgICBcIkltcG9ydHNcIixcbiAgICBcIkluXCIsXG4gICAgXCJJbmhlcml0c1wiLFxuICAgIFwiSW50ZWdlclwiLFxuICAgIFwiSW50ZXJmYWNlXCIsXG4gICAgXCJJc1wiLFxuICAgIFwiSXNOb3RcIixcbiAgICBcIkxldFwiLFxuICAgIFwiTGliXCIsXG4gICAgXCJMaWtlXCIsXG4gICAgXCJMb25nXCIsXG4gICAgXCJMb29wXCIsXG4gICAgXCJNZVwiLFxuICAgIFwiTW9kXCIsXG4gICAgXCJNb2R1bGVcIixcbiAgICBcIk11c3RJbmhlcml0XCIsXG4gICAgXCJNdXN0T3ZlcnJpZGVcIixcbiAgICBcIk15QmFzZVwiLFxuICAgIFwiTXlDbGFzc1wiLFxuICAgIFwiTmFtZU9mXCIsXG4gICAgXCJOYW1lc3BhY2VcIixcbiAgICBcIk5hcnJvd2luZ1wiLFxuICAgIFwiTmV3XCIsXG4gICAgXCJOZXh0XCIsXG4gICAgXCJOb3RcIixcbiAgICBcIk5vdGhpbmdcIixcbiAgICBcIk5vdEluaGVyaXRhYmxlXCIsXG4gICAgXCJOb3RPdmVycmlkYWJsZVwiLFxuICAgIFwiT2JqZWN0XCIsXG4gICAgXCJPZlwiLFxuICAgIFwiT25cIixcbiAgICBcIk9wZXJhdG9yXCIsXG4gICAgXCJPcHRpb25cIixcbiAgICBcIk9wdGlvbmFsXCIsXG4gICAgXCJPclwiLFxuICAgIFwiT3JFbHNlXCIsXG4gICAgXCJPdXRcIixcbiAgICBcIk92ZXJsb2Fkc1wiLFxuICAgIFwiT3ZlcnJpZGFibGVcIixcbiAgICBcIk92ZXJyaWRlc1wiLFxuICAgIFwiUGFyYW1BcnJheVwiLFxuICAgIFwiUGFydGlhbFwiLFxuICAgIFwiUHJpdmF0ZVwiLFxuICAgIFwiUHJvcGVydHlcIixcbiAgICBcIlByb3RlY3RlZFwiLFxuICAgIFwiUHVibGljXCIsXG4gICAgXCJSYWlzZUV2ZW50XCIsXG4gICAgXCJSZWFkT25seVwiLFxuICAgIFwiUmVEaW1cIixcbiAgICBcIlJlbW92ZUhhbmRsZXJcIixcbiAgICBcIlJlc3VtZVwiLFxuICAgIFwiUmV0dXJuXCIsXG4gICAgXCJTQnl0ZVwiLFxuICAgIFwiU2VsZWN0XCIsXG4gICAgXCJTZXRcIixcbiAgICBcIlNoYWRvd3NcIixcbiAgICBcIlNoYXJlZFwiLFxuICAgIFwiU2hvcnRcIixcbiAgICBcIlNpbmdsZVwiLFxuICAgIFwiU3RhdGljXCIsXG4gICAgXCJTdGVwXCIsXG4gICAgXCJTdG9wXCIsXG4gICAgXCJTdHJpbmdcIixcbiAgICBcIlN0cnVjdHVyZVwiLFxuICAgIFwiU3ViXCIsXG4gICAgXCJTeW5jTG9ja1wiLFxuICAgIFwiVGhlblwiLFxuICAgIFwiVGhyb3dcIixcbiAgICBcIlRvXCIsXG4gICAgXCJUcnVlXCIsXG4gICAgXCJUcnlcIixcbiAgICBcIlRyeUNhc3RcIixcbiAgICBcIlR5cGVPZlwiLFxuICAgIFwiVUludGVnZXJcIixcbiAgICBcIlVMb25nXCIsXG4gICAgXCJVU2hvcnRcIixcbiAgICBcIlVzaW5nXCIsXG4gICAgXCJWYXJpYW50XCIsXG4gICAgXCJXZW5kXCIsXG4gICAgXCJXaGVuXCIsXG4gICAgXCJXaGlsZVwiLFxuICAgIFwiV2lkZW5pbmdcIixcbiAgICBcIldpdGhcIixcbiAgICBcIldpdGhFdmVudHNcIixcbiAgICBcIldyaXRlT25seVwiLFxuICAgIFwiWG9yXCJcbiAgXSxcbiAgdGFnd29yZHM6IFtcbiAgICBcIklmXCIsXG4gICAgXCJTdWJcIixcbiAgICBcIlNlbGVjdFwiLFxuICAgIFwiVHJ5XCIsXG4gICAgXCJDbGFzc1wiLFxuICAgIFwiRW51bVwiLFxuICAgIFwiRnVuY3Rpb25cIixcbiAgICBcIkdldFwiLFxuICAgIFwiSW50ZXJmYWNlXCIsXG4gICAgXCJNb2R1bGVcIixcbiAgICBcIk5hbWVzcGFjZVwiLFxuICAgIFwiT3BlcmF0b3JcIixcbiAgICBcIlNldFwiLFxuICAgIFwiU3RydWN0dXJlXCIsXG4gICAgXCJVc2luZ1wiLFxuICAgIFwiV2hpbGVcIixcbiAgICBcIldpdGhcIixcbiAgICBcIkRvXCIsXG4gICAgXCJMb29wXCIsXG4gICAgXCJGb3JcIixcbiAgICBcIk5leHRcIixcbiAgICBcIlByb3BlcnR5XCIsXG4gICAgXCJDb250aW51ZVwiLFxuICAgIFwiQWRkSGFuZGxlclwiLFxuICAgIFwiUmVtb3ZlSGFuZGxlclwiLFxuICAgIFwiRXZlbnRcIixcbiAgICBcIlJhaXNlRXZlbnRcIixcbiAgICBcIlN5bmNMb2NrXCJcbiAgXSxcbiAgc3ltYm9sczogL1s9Pjwhfj87XFwuLDomfCtcXC0qXFwvXFxeJV0rLyxcbiAgaW50ZWdlcnN1ZmZpeDogL1U/W0RJJUwmU0BdPy8sXG4gIGZsb2F0c3VmZml4OiAvW1IjRiFdPy8sXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL25leHQoPyFcXHcpLywgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1mb3JcIiB9XSxcbiAgICAgIFsvbG9vcCg/IVxcdykvLCB7IHRva2VuOiBcImtleXdvcmQudGFnLWRvXCIgfV0sXG4gICAgICBbXG4gICAgICAgIC9lbmRcXHMrKD8hZm9yfGRvKShhZGRoYW5kbGVyfGNsYXNzfGVudW18ZXZlbnR8ZnVuY3Rpb258Z2V0fGlmfGludGVyZmFjZXxtb2R1bGV8bmFtZXNwYWNlfG9wZXJhdG9yfHByb3BlcnR5fHJhaXNlZXZlbnR8cmVtb3ZlaGFuZGxlcnxzZWxlY3R8c2V0fHN0cnVjdHVyZXxzdWJ8c3luY2xvY2t8dHJ5fHdoaWxlfHdpdGh8dXNpbmcpLyxcbiAgICAgICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy0kMVwiIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIC9bYS16QS1aX11cXHcqLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkB0YWd3b3Jkc1wiOiB7IHRva2VuOiBcImtleXdvcmQudGFnLSQwXCIgfSxcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IHsgdG9rZW46IFwia2V5d29yZC4kMFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiaWRlbnRpZmllclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9eXFxzKiNcXHcrLywgXCJrZXl3b3JkXCJdLFxuICAgICAgWy9cXGQqXFxkK2UoW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbL1xcZCpcXC5cXGQrKGVbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvJkhbMC05YS1mXSsoQGludGVnZXJzdWZmaXgpLywgXCJudW1iZXIuaGV4XCJdLFxuICAgICAgWy8mMFswLTddKyhAaW50ZWdlcnN1ZmZpeCkvLCBcIm51bWJlci5vY3RhbFwiXSxcbiAgICAgIFsvXFxkKyhAaW50ZWdlcnN1ZmZpeCkvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvIy4qIy8sIFwibnVtYmVyXCJdLFxuICAgICAgWy9be30oKVxcW1xcXV0vLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFsvQHN5bWJvbHMvLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvW1wiXFx1MjAxY1xcdTIwMWRdLywgeyB0b2tlbjogXCJzdHJpbmcucXVvdGVcIiwgbmV4dDogXCJAc3RyaW5nXCIgfV1cbiAgICBdLFxuICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgIFsvWyBcXHRcXHJcXG5dKy8sIFwiXCJdLFxuICAgICAgWy8oXFwnfFJFTSg/IVxcdykpLiokLywgXCJjb21tZW50XCJdXG4gICAgXSxcbiAgICBzdHJpbmc6IFtcbiAgICAgIFsvW15cIlxcdTIwMWNcXHUyMDFkXSsvLCBcInN0cmluZ1wiXSxcbiAgICAgIFsvW1wiXFx1MjAxY1xcdTIwMWRdezJ9LywgXCJzdHJpbmcuZXNjYXBlXCJdLFxuICAgICAgWy9bXCJcXHUyMDFjXFx1MjAxZF1DPy8sIHsgdG9rZW46IFwic3RyaW5nLnF1b3RlXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1928\n')}}]);