import BaseSymbols from './domain/base/BaseSymbols'
import HttpClient from './domain/base/HttpClient'
import Method from './domain/base/Method'
import useInjection from './hooks/useInjection'

function App() {
  const httpClient = useInjection<HttpClient>(BaseSymbols.HttpClient)

  httpClient.request(Method.GET, '/', { hello: 'hi' })

  return <div>hello world</div>
}

export default App
