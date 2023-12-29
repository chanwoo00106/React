import * as stylex from '@stylexjs/stylex'

const App = () => {
  return <div {...stylex.props(styles.root)}>hello world</div>
}

const styles = stylex.create({
  root: {
    fontSize: 40,
  },
})

export default App
