import { StrictMode } from 'react'
import { LandingPageComponent } from "@/components/landing-page"

const ENABLE_STRICT_MODE = process.env.NODE_ENV === 'development'

export default function Home() {
  const content = (

    <main>
      <LandingPageComponent />
    </main>

  )

  return ENABLE_STRICT_MODE ? <StrictMode>{content}</StrictMode> : content
}
