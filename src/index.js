import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import App from './app/App.js'
import * as serviceWorker from './serviceWorker'
import Loader from './components/loader'
import './assets/locales'

ReactDOM.render(<Suspense fallback={<Loader/>}>
  	<App />
</Suspense>, document.getElementById('root'))

serviceWorker.unregister()