import React from 'react';
import GlobalStyles from './styles/global'
import { ThemeProvider } from 'styled-components'
import {baseTheme} from './styles/theme'
import { Player } from './pages/players';

interface AppProps {
}

export const App: React.FC<AppProps> = () => {

	return (
		<ThemeProvider theme={baseTheme}>
			<GlobalStyles />
			<Player />
		</ThemeProvider>
	)
};