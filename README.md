# Code Snippets
A [Kernel](https://github.com/kernel-mod/electron) package (specifically for Discord) that adds a tab in settings where you can add and manage code snippets.

**Requires:** https://github.com/strencher-kernel/settings

### Note:
This is an *ALPHA* package, expect bugs; but also please mention me when you find them :)

## Installation:
```bash
# I would advise against doing "pnpm i" as that will install way more stuff than you need.
pnpm init
```

## Swish's epic super happy fun todo list:

General Functionality:
- [x] Custom CSS and SCSS snippets
- [x] Custom JS, TS, and JSX snippets
- [ ] SASS syntax support
- [ ] Help Modal (with backup snippets button)

Bug Fixes:
- [ ] Whitelist domains (if needed) as I've only tested this with CSP forcebly removed.


QOL Features:
- [ ] Popout support (this is a fucking nightmare because monaco)
- [x] Add a linking mechanism where you can link snippets to Github gist

Maybe?:
- TSX support (because of the way the typescript compiler settings work in monaco it's really finicky to get this working)
- Use Strencher's webpack package directly, ATM I'm using a slightly modified version and shipping it with this package. This shouldn't be too hard to do.
- Use WASM sass and sucrase/swc to make this whole package dependentless :)