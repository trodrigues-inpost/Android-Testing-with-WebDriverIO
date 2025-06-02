## XPath Element Selection

The `Selectors` class is in the `selectors.objects.ts` file.

It's a class mainly composed by `getters` for XPath selector values.

### When selecting elements WITH indexing

```ts
// Element Selection by XPath
const titleSelector = `(//android.widget.TextView[@content-desc="test-Item title"])[${randomNumber}]`;
```

In this element we use `(` at the start and `)` at the end because the element is indexed "`[number]`".

#

### When selecting elements WITHOUT indexing

When selecting elements **without** the need of indexing, we don't need to use `(XPath)`.

I do it this way because the selection of elements only works this way for me.
