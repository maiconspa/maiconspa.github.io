import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import App from './app/App.js'
import * as serviceWorker from './serviceWorker'
import Loader from './components/loader'
import { Provider } from 'react-redux'
import { Store } from './store'

import I18n from 'redux-i18n'
import {translate} from "./assets/locales"

ReactDOM.render(<Suspense fallback={<Loader/>}>
  	<Provider store={Store}>
		<I18n translations={translate} initialLang='pt'>
			<App />
		</I18n>
	</Provider>
</Suspense>, document.getElementById('root'))

serviceWorker.unregister()