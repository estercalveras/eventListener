// You can work here or download the template
// Your components go here

const App = () => {

  function handleInput(event) {
    console.log(event.target.value)
  }

  function handleClick(message) {
    alert(`${message} you clicked?!`);
  }

  return <div >
    <input type="text" placeholder="Type something..." onChange={handleInput} />
    <input type="text" placeholder="Type something..." onChange={(event) => console.log(event.target.value)} />
    {/* Never pass handleClick() */}
    <button onClick={handleClick}>Click me with handler function!</button>
    <button onClick={() => handleClick("Hello")}>Click me with inline handler function!</button>
    <button onClick={() => handleClick("Goodbye")}>Click me with inline handler function!</button>
    <p onMouseLeave={() => console.log("You just left me!")}>Click me with inline handler function!</p>
  </div>;
};

export default App;
