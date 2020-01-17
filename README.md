# Seagulls Todo


## Designs
[Figma](https://www.figma.com/file/ReYqwBq3jdXXfTc5kkMI5O/React-Todo?node-id=0%3A1)

## Prerequisite JavaScript Concepts
- JS array & object
- JS array methods (map, filter, splice, etc)
- [JS Switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- [HTML localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [es6 destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Clone & Install
```bash
# clone it
git clone https://github.com/jbsmith731/gulls-todo.git gulls-todo && cd $_

# OPTIONAL: open vscode from terminal
code .

# install
yarn install

# run
yarn dev
```

## Let&apos;s do it
* Make a form that has a text input and submit button
  * [React controlled input](https://reactjs.org/docs/forms.html#controlled-components) (example is using class components). Please use function components & [useState](https://reactjs.org/docs/hooks-state.html)
  * Add an `onSubmit` function to the form (`console.log` the value for now)
  * Style it
* Data Structure
  * The todo list will be an array
  * Each item in in the todo list will include: ID, created date, completed, todo description
    * Each item needs a unique id. Since the list is constantly changing using the array index as a key isn’t plausible. [React keys](https://reactjs.org/docs/lists-and-keys.html#keys)
    * Use function inside of `app/lib/generateID` to generate IDs
* Add a todo item
  * [Why reducer?](https://reactjs.org/docs/hooks-reference.html#usereducer)
  * Reducer [demo](https://codesandbox.io/s/react-reducer-demo-2slbx) from react docs
  * Setup reducer function, `useReducer`, and initial reducer state. Initial state should probably be `null`.
  * Add a new case to the reducer function called “add”. This should return an array of objects (aka a list of todos).
  * Update form submit use the dispatch function for “add”
  * If adding multiple todos do the old events persist or do they get overwritten? If they get overwritten don’t forget about the previous state in your “add” function. *Hint: use array spread.*
* Output the list
  * Map through the list of items
    * *Hint: Can’t map through a list that doesn’t exist*
  * Add the complete toggle (checkbox) and remove button
  * Style it
* Add a new case to the reducer to “remove” or “delete” an item
  * *Hint: Need to remove and item from an array*
  * Use the dispatch function on click of the delete button
* Add another new case to the reducer to “complete” an item
  * Set up the checkbox onChange handler use the dispatch function
  * *Hint: replacing the item that has been marked as complete*
  * You might need this https://stackoverflow.com/questions/55771805/does-usestate-not-call-a-rerender-when-working-with-object-states
* Save & retrieve using localStorage
  * [useEffect](https://stackoverflow.com/questions/55771805/does-usestate-not-call-a-rerender-when-working-with-object-states) - runs on mount and every time one of its dependencies change
  * Save todos (from state) in localStorage if they exist
  * If they don’t exist try to retrieve them from local storage
    * Once retrieved use the dispatch function to initialize the retrieved values (or an empty array if no values were retrieved)
* Set up the Remove Completed button in the nav
* *Optional*: loading & empty states
