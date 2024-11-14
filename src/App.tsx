import Button from "./Button";

function App() {
  const clickUno = () => {
    console.log("react");
  };

  const clickDos = () => {
    console.log("angular");
  };

  return (
    <>
      <Button handleClick={clickUno}>
        <span>Click</span>
      </Button>
      <Button handleClick={clickDos}>
        <span>Submit</span>
      </Button>
    </>
  );
}

export default App;
