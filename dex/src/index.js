import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WagmiConfig, configureChains, createClient, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import App from './App'
import './index.css'

//Connect to dex
const { provider, webSocketProvider } = configureChains(
	[mainnet],
	[publicProvider()]
)

const client = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<WagmiConfig client={client}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</WagmiConfig>
	</React.StrictMode>
)
