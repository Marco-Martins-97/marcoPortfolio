/**
 * Root application shell providing semantic landmarks and layout container.
 * @returns {JSX.Element} The application layout wrapper.
 */
function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-obsidian text-text">
      <header className="border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="text-base font-semibold tracking-tight">
            Marco Martins
          </span>
          <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted">
            Stage 1 · MERN Studio
          </span>
        </div>
      </header>

      <main
        id="main-content"
        className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-16 sm:px-6"
      >
        <p className="text-xs font-semibold tracking-wider text-cobalt-light uppercase">
          Full-Stack Developer &amp; Web Studio
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
          Marco Martins
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Clean, fast websites for small businesses and production-grade MERN
          applications.
        </p>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          &copy; {new Date().getFullYear()} Marco Martins. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
