// import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom'
import BugCode from './src/bugCode'

document.body.innerHTML = `<div id="app"></div>`

ReactDom.render(<div>
  <h1>Hello world</h1>
  <BugCode />
</div>, document.getElementById('app'))


