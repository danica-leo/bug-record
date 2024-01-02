import { createRoot } from 'react-dom/client'
import BugCode from './src/bugCode'

document.body.innerHTML = `<div id="app"></div>`

const root = createRoot(document.getElementById("app"))
root.render(<div>
  <h1>Hello world</h1>
  <BugCode />
</div>)

