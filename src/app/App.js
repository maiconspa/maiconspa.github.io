import React, {useState, useEffect} from 'react'

import Routes from '../routes'
import {ThemeProvider} from 'styled-components'
import {Theme} from '../assets/theme'

import GlobalStyles from './styled'

const App = () => {
	const [theme, setTheme] = useState(localStorage.getItem('theme'))

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	const handleTheme = () => {
		if (theme === null || theme === undefined || theme === '')
			setTheme('light')
		
		return Object.keys(Theme).filter(key => key === theme)[0]
        ? Theme[Object.keys(Theme).filter(key => key === theme)[0]]
        : Theme.light
	}

	return <ThemeProvider theme={handleTheme()}>
		<GlobalStyles/>
		<Routes/>
	</ThemeProvider>
}

export default App