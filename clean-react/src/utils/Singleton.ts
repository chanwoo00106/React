function Singleton<T extends new (...args: any[]) => any>(ctr: T) {
  let instance: T

  return class {
    constructor(...args: any[]) {
      if (instance) {
        console.error('You cannot instantiate a singleton twice!')
        return instance
      }

      instance = new ctr(...args)
      return instance
    }

    public static getInstance(...args: any[]) {
      if (!instance) {
        instance = new ctr(...args)
      }

      return instance
    }
  }
}

export default Singleton
