import React from 'react'
import { connect } from 'react-redux'

import Routes from '../routes'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../assets/theme'
import { changeTheme } from '../actions'

import GlobalStyles from './styled'

const App = props => {
	const { theme, setTheme } = props
	const localTheme = localStorage.getItem('theme')

	if (theme !== '')
		localStorage.setItem('theme', theme)

	if (theme === '')
		setTheme(localTheme || 'light')

	const handleTheme = () => {
		
		return Object.keys(Theme).filter(key => key === theme)[0]
        ? Theme[Object.keys(Theme).filter(key => key === theme)[0]]
        : Theme.light
	}

	return <ThemeProvider theme={handleTheme()}>
		<GlobalStyles/>
		<Routes/>
	</ThemeProvider>
}

const mapStateToProps = store => ({
	theme: store.themeState.value
})

const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(changeTheme(theme))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)