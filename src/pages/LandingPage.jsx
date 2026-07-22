import { Suspense } from 'react'
import Header from '@/components/Layout/Header'
import HeroSection from '@/components/Landing/HeroSection'
import NotesInput from '@/components/Landing/NotesInput'
import FloatingBlobs from '@/components/Common/FloatingBlobs'
import ErrorBoundary from '@/components/Common/ErrorBoundary'

export default function LandingPage() {
  return (
    <div className="relative min-h-screen">
      <FloatingBlobs />

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ErrorBoundary>
            <Suspense fallback={<div className="h-96" />}>
              <NotesInput />
            </Suspense>
          </ErrorBoundary>
        </main>


      </div>
    </div>
  )
}