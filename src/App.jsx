import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<header className="App-header">
				<h1>Vite + React + Electron</h1>
				<p>
					<button type="button" onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				{window.electron && (
					<div>
						<p>This app is running in Electron!</p>
						<p>
							Chrome: <span>{window.electron.versions.chrome()}</span><br />
							Node: <span>{window.electron.versions.node()}</span><br />
							Electron: <span>{window.electron.versions.electron()}</span>
						</p>
					</div>
				)}
			</header>
		</div>
	)
}

export default App