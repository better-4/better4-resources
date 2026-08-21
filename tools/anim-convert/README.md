# tools/anim-convert

## Description:

`.ska` animation converter.

## Usage:

- Create the `in` folder if it does not exist.
- Place the animations you'd like to convert in the `in` directory.
- Run:
```
node anim-convert.js <in-game> <out-game> -map <bone-map>
```
e.g.
```
node anim-convert.js thug1 thps4 -map thug_to_thps4.js
```
- All converted animations will be placed in the `out` folder.

## Credits

This repository includes code from adragonite's [math3d](https://www.npmjs.com/package/math3d) module.

## See Also:

- [010 .ska Template (GHSDK)](https://gitgud.io/fretworks/guitar-hero-sdk/-/blob/master/Resources/Templates/THAW/SkaAnim.bt) - 010 Editor reverse-engineering template for .ska files.
