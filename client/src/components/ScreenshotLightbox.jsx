import { useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Accessible modal lightbox for inspecting version screenshots with prev/next arrows.
 * Uses native `<dialog>` for focus management and `Escape` handling, with a safe
 * guard for test environments without `showModal`.
 *
 * @param {object} props - Component props.
 * @param {boolean} props.isOpen - Whether the lightbox modal is open.
 * @param {string} props.version - Active release version label (e.g. "v1.0.0").
 * @param {Array<object>} props.items - Screenshots belonging to the active release.
 * @param {number} props.activeIndex - Currently displayed screenshot index.
 * @param {() => void} props.onClose - Callback to close the modal.
 * @param {(nextIndex: number) => void} props.onSelectIndex - Callback to change active slide.
 * @returns {JSX.Element | null} Lightbox modal element or null when closed.
 */
export function ScreenshotLightbox({
  isOpen,
  version,
  items,
  activeIndex,
  onClose,
  onSelectIndex,
}) {
  const { t } = useLanguage()
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      if (typeof dialog.showModal === 'function') {
        if (!dialog.open) dialog.showModal()
      } else {
        dialog.setAttribute('open', '')
      }
    } else if (typeof dialog.close === 'function') {
      if (dialog.open) dialog.close()
    } else {
      dialog.removeAttribute('open')
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !items.length) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onSelectIndex((activeIndex - 1 + items.length) % items.length)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        onSelectIndex((activeIndex + 1) % items.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, items.length, activeIndex, onClose, onSelectIndex])

  if (!isOpen || !items.length) return null

  const current = items[activeIndex] ?? items[0]
  const deviceLabel =
    current.device === 'mobile'
      ? t({ en: 'Mobile', pt: 'Mobile' })
      : t({ en: 'Desktop', pt: 'Desktop' })

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + items.length) % items.length)
  }

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % items.length)
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={t({
        en: 'Screenshot gallery',
        pt: 'Galeria de capturas de ecrã',
      })}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
      className="m-auto w-full max-w-5xl rounded-2xl border border-border bg-surface p-0 text-text shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
          <span className="rounded-md bg-cobalt/15 px-2 py-0.5 font-mono font-semibold text-cobalt-light">
            {version}
          </span>
          <span className="rounded border border-border bg-obsidian px-2 py-0.5 font-mono text-[11px] text-muted">
            {deviceLabel}
          </span>
          <span className="font-medium text-text">{t(current.caption)}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={t({ en: 'Close gallery', pt: 'Fechar galeria' })}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-obsidian text-muted transition-colors hover:border-cobalt-light hover:text-text"
        >
          <FiX aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>

      <div className="relative flex min-h-[280px] items-center justify-center bg-obsidian p-3 sm:min-h-[420px] sm:p-5">
        {items.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t({
              en: 'Previous screenshot',
              pt: 'Captura anterior',
            })}
            className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-obsidian/85 text-text transition-colors hover:border-cobalt-light hover:bg-cobalt"
          >
            <FiChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
        )}

        <img
          src={current.src}
          alt={t(current.caption)}
          className="max-h-[70dvh] w-auto max-w-full rounded-lg object-contain"
        />

        {items.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label={t({
              en: 'Next screenshot',
              pt: 'Captura seguinte',
            })}
            className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-obsidian/85 text-text transition-colors hover:border-cobalt-light hover:bg-cobalt"
          >
            <FiChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-2.5 font-mono text-xs text-muted">
        <span>{current.route}</span>
        <span>
          {activeIndex + 1} / {items.length}
        </span>
      </div>
    </dialog>
  )
}
