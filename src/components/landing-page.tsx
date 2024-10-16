'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart3, Lock, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <Link className="flex items-center justify-center" href="#">
          <BarChart3 className="h-6 w-6" />
          <span className="sr-only">DeFi Dashboard</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Master Your DeFi Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Track, analyze, and optimize your decentralized investments with our powerful DeFi dashboard.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={() => {
                  window.location.href = '/dashboard'
                }}>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Secure Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">Monitor your assets across multiple wallets and protocols securely.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
                <p className="text-gray-500 dark:text-gray-400">Get instant notifications on price changes and important events.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400">Visualize your portfolio's performance with advanced charts and metrics.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">DeFi at a Glance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">$50B+</span>
                <span className="text-gray-500 dark:text-gray-400">Total Value Locked</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">1M+</span>
                <span className="text-gray-500 dark:text-gray-400">Active Users</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">100+</span>
                <span className="text-gray-500 dark:text-gray-400">Supported Protocols</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-primary">24/7</span>
                <span className="text-gray-500 dark:text-gray-400">Real-time Monitoring</span>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Optimize Your DeFi Strategy?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of investors who are maximizing their returns with our DeFi dashboard.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DeFi Dashboard. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
