# Wingman 🐝

This module contains tools that help you program efficiently and keep your code tidy.

## Library

| Library |       Function Name       |                              Description                              |
| :-----: | :-----------------------: | :-------------------------------------------------------------------: |
| Arrays  |      [RandomIndex]()      |         This gives you a random index/element from the array.         |
| Arrays  |      [FilterExact]()      | This returns the total amount (int) of appearances of a given string. |
| Arrays  |     [LoopFunction]()      |        This runs the given function `maxLoops` amount of time.        |
| Arrays  |     [ArrayToObject]()     |                 This converts an array into an object                 |
| Objects | [ReverseObjectKeyValue]() |          This returns an object where the value is the key.           |
| Objects |   [GetValueFromPath]()    |          This fetches value from object using Dot Notation.           |

### Arrays

- `<Library/arrays>.RandomIndex(array Any[])`
  This gives you a random index/element from the array.

  ```ts
  import * as Wingman from "wingman/arrays";

  Wingman.RandomIndex(["test", "project", "42"]);
  // Returns any (could be "project" for example)
  ```

- `<Library/arrays>.FilterExact(array Any[], filter Any)`
  This returns the total amount (int) of appearances of a given string.

  ```ts
  import * as Wingman from "wingman/arrays";

  Wingman.FilterExact([1, 5, 55, 12, 9, 2, 2, 2, 4], 2);
  // Returns 3
  ```

- `<Library/arrays>.LoopFunction(maxLoops Number, givenFunc Function)`
  This runs the given function `maxLoops` amount of time.

  ```ts
  import * as Wingman from "wingman/arrays";

  let Str = "";
  Wingman.LoopFunction(4, () => (Str += "a"));

  Str;
  // aaaa
  ```

- `<Library/arrays>.ArrayToObject(object Object)`
  This converts an array into an object.

  ```ts
  import * as Wingman from "wingman/arrays";

  Wingman.ArrayToObject(["cool", 5, false]);
  // { 0: "cool", 1: "5", 2: false }
  ```

### Objects

- `<Library/objects>.ReverseObjectKeyValue(obj Object{string | number: string | number})`
  This returns an object where the value is the key.

  ```ts
  import * as Wingman from "wingman/objects";

  Wingman.ReverseObjectKeyValue({ cool: "bye", 12: 12, lol: 62, 1: "lol" });
  // { '12': '12', '62': 'lol', lol: '1', bye: 'cool' }
  ```

- `<Library/objects>.GetValueFromPath(obj Object, path String)`
  This fetches value from object using Dot Notation.

  ```ts
  import * as Wingman from "wingman/objects";

  Wingman.GetValueFromPath(
    { cool: "bye", 12: { "isCool?": true } },
    "12.isCool"
  );
  // true
  ```
