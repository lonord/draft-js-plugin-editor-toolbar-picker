# draft-js-plugin-editor-toolbar-picker
Picker component for `draft-js-static-toolbar-plugin` and `draft-js-inline-toolbar-plugin`

## Usage

Install via npm:

```bash
$ npm i draft-js-plugin-editor-toolbar-picker
```

And use in your project:

```js
import {
	BlockquoteButton,
	BoldButton,
	CodeBlockButton,
	CodeButton,
	HeadlineOneButton,
	HeadlineThreeButton,
	HeadlineTwoButton,
	ItalicButton,
	OrderedListButton,
	UnderlineButton,
	UnorderedListButton
} from 'draft-js-buttons'

import createPicker, { createTriggerButton } from 'draft-js-plugin-editor-toolbar-picker'
const Picker = createPicker({
	triggerItem: createTriggerButton({ child: 'H' }),
	items: [
		HeadlineOneButton,
		HeadlineTwoButton,
		HeadlineThreeButton
	]
})

const toolbarPlugin = createToolbarPlugin({
	structure: [
		BoldButton,
		ItalicButton,
		UnderlineButton,
		CodeButton,
		Separator,
		Picker,   // Use `Picker` as an item button
		UnorderedListButton,
		OrderedListButton,
		BlockquoteButton,
		CodeBlockButton
	]
})
```

## License
MIT