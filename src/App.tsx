import React from 'react';
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import {baseTheme} from './styles/theme'

interface AppProps {
}

export const App: React.FC<AppProps> = () => {

	return (
		<ThemeProvider theme={baseTheme}>
			<GlobalStyles />
		</ThemeProvider>
	)
};