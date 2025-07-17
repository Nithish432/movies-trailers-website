### Hooks

1. React listens to changes made by hooks
2. Hooks - function
3. It starts with `use`
4. `useState`
   1. `const [state, setState] = useState(InitialValue)`
   2. state -> state of mind | state of the art technology | current
   3. In App state -> _current data_
   4. `setState` updates the value of `state`
   5. `setState` react listens and updates `state` & view
   6. `import { useState } from "react";`
   7. Flow: User clicks -> `onClick` trigger -> `setLike` -> React updates view

### Virtual DOM

1. Copy of the Real DOM
2. Large `{key: value}`
3. Updating it does not cost performance
4. To access VDOM you could use hooks (setState)
5. Once the update is done on the virtual DOM, then the real DOM is updated
6. Comparison - Reconciliation -VDOM & Real Dom
7. Key helps is quickly compare the changes
8. `document.*` in React - Loses Performance

### imports & exports

1. Types
   1. named - imports & exports - preferred
      1. Multiple exports
   2. default - imports & exports
      1. Only export per file