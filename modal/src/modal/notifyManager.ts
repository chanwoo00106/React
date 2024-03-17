type Callback = () => void

const notifyManager = () => {
  let queue: Callback[] = []

  const add = (callback: Callback) => {
    queue.push(callback)
  }

  const run = () => {
    queue.forEach((callback) => {
      callback()
    })
  }

  const flush = () => {
    queue = []
  }

  return {
    add,
    run,
    flush,
  } as const
}

export default notifyManager()
