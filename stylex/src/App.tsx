import * as styleX from "@stylexjs/stylex";

function App() {
  return (
    <div {...styleX.props(styles.main)}>
      <p {...styleX.props(styles.text)}>hello world</p>
    </div>
  );
}

const styles = styleX.create({
  main: {
    background: "yellow",
    color: "blue",
    borderRadius: "0.7rem",
    height: "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
});

export default App;
