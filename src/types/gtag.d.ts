// Typage minimal pour window.gtag (Google Consent Mode V2)
interface Window {
  gtag: (...args: unknown[]) => void
  dataLayer: unknown[]
}
