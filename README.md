### Q1: What is JSX, and why is it used?

**Answer:**  
JSX means JavaScript XML which is generally used for writing HTML-like code in JS.  
It is most famous for its easiness. That’s why nowadays it is used a lot! Basically we use JSX for its easy-to-use coding environment. Because without JSX, the HTML file and JS file live separately, which looks messy! But in JSX, we can use JS and HTML code together just through a bracket!!  
Actually its simplicity made it famous!

### Q2: What is the difference between State and Props?

**Answer:**  
Props (Properties) come from the parent component. They always carry an object. When they go to a child component, the child component can’t change them because they are Read-Only data. The purpose of props is always to pass the data from parent to child.

On the other hand, State is like the memory of where it is used. Its purpose is to hold the data which is mutable. Basically it is used in the main component. To put it simply, when a parent gives data to a child, this is called props. And when a component remembers its mutable data, this is called State.

### Q3: What is the useState hook, and how does it work?

**Answer:**  
The useState hook is memory for a functional component. It helps the component to remember any data and change the data over time. Actually this "memory" is what we call State. Its most important feature is, it is connected with the UI directly. Whenever a State is changed, React automatically re-renders the UI of that component.

The useState procedure is completed in a few steps:

- First of all – declaring the initial state: `useState(0);`.  
  The `useState` function returns an array with two items.
- The first item is **the current state value**.
- And the second item is a special function – **the setter function**, which is used for updating the state.

We use Array Destructuring to make it easy to use these two items:  
`const [count, setCount] = useState(0);`

- **count** – it is a variable which holds the current value of state.
- **setCount** – it is the special function which is used to change the count value or state value.

We cannot update the data directly. We have to use the setter function to update the state, like:

```js
const handleIncrement = () => {
  setCount(count + 1);
};
```

### Q4: How can you share state between components in React?

**Answer:**  
Basically, when multiple components need a similar state, we have to declare a state in a common parent component. While props go from up to down (parent to child), the `useState` will be used in the parent component. Then we can pass the function through props to those who need it.  
This pattern is called **lifting state up**.

### Q5: How is event handling done in React?

**Answer:**  
React event handling is very simple! The events of React are always written in camelCase like – `onClick`, `onChange`.

We can use an event inline but we choose the best practice. So first of all, we have to create a function in the component which will run when the event happens:

```js
function LightSwitch() {
  const handleClick = () => {
    console.log('Switch flipped!');
    // We can write here the logic of state change
  };
}
```

The second step is to add an event listener in JSX and pass the function as the value of the event listener:

```js
function LightSwitch() {
  const handleClick = () => {
    console.log('Switch flipped!');
  };

  return <button onClick={handleClick}>Flip Switch</button>;
}
```

There is an important thing: we use `onClick={handleClick}`, not `onClick={handleClick()}`. Because when we write `onClick={handleClick()}`, it will be called as soon as it is rendered. But we want it to run only when the button is clicked.
