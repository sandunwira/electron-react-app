import React from 'react';
import logo from '../assets/react.svg';

function HomePage() {
	return (
		<div className="w-full min-h-screen bg-white dark:bg-gray-900">
			<div className="max-w-2xl mx-auto px-4 py-14">
				{/* Logo Section */}
				<div className="flex justify-center mb-8">
					<img src={logo} className="h-16 w-16" alt="React logo" />
				</div>

				{/* Title Section */}
				<h1 className="text-3xl font-light text-gray-800 dark:text-gray-100 text-center mb-8">
					Electron + React + Vite + Tailwind
				</h1>

				{/* System Info Card */}
				{window.electron && (
					<div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
						<div className="space-y-2 text-xs text-gray-600 dark:text-gray-300 font-mono">
							<div className="flex justify-between">
								<span>Chrome</span>
								<span>{window.electron.versions.chrome()}</span>
							</div>
							<div className="flex justify-between">
								<span>Node</span>
								<span>{window.electron.versions.node()}</span>
							</div>
							<div className="flex justify-between">
								<span>Electron</span>
								<span>{window.electron.versions.electron()}</span>
							</div>
						</div>
					</div>
				)}

				{/* Links Section */}
				<div className="grid grid-cols-3 space-x-3">
					<a
						href="https://react.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="text-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors"
					>
						React Docs →
					</a> 
					<a
						href="https://www.electronjs.org/docs/latest"
						target="_blank"
						rel="noopener noreferrer"
						className="text-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors"
					>
						Electron Docs →
					</a>
					<a
						href="https://vite.dev/guide"
						target="_blank"
						rel="noopener noreferrer"
						className="text-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors"
					>
						Vite Docs →
					</a>
				</div>

				{/* Footer */}
				<footer className="mt-12 text-center">
					<p className="text-xs text-gray-500 dark:text-gray-400">
						Edit <code className="font-mono">src/pages/Home.jsx</code> to customize this screen
					</p>
				</footer>
			</div>
		</div>
	);
}

export default HomePage;