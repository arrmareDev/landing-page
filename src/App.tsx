import Navbar from './components/Navbar'
import HeroSlider from './components/HeroSlider'
import Partners from './components/Partners'
import About from './components/About'
import Essence from './components/Essence'
import Units from './components/Units'
import Commitment from './components/Commitment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'
import BackToTop from './components/BackToTop'
import PrivacyPage from './components/PrivacyPage'
import NotFound from './components/NotFound'
import I18nProvider from './i18n/Provider'
import { useI18n } from './i18n/context'
import { resolveRoute } from './i18n/routes'
import { useScrollReveal } from './hooks/useReveal'
import { useDocumentMeta } from './hooks/useDocumentMeta'

function Shell() {
  const { page } = useI18n()
  useScrollReveal()
  useDocumentMeta()

  return (
    <>
      <Navbar />
      <main>
        {page === 'home' && (
          <>
            <HeroSlider />
            <Partners />
            <About />
            <Essence />
            <Units />
            <Commitment />
            <Contact />
          </>
        )}
        {page === 'privacy' && <PrivacyPage />}
        {page === 'notfound' && <NotFound />}
      </main>
      <Footer />
      <WhatsAppFab />
      <BackToTop />
    </>
  )
}

export default function App() {
  // Rutas: / (ES), /en (EN), /privacidad, /en/privacy; cualquier otra => 404
  const { lang, page } = resolveRoute(window.location.pathname)
  return (
    <I18nProvider lang={lang} page={page}>
      <Shell />
    </I18nProvider>
  )
}
