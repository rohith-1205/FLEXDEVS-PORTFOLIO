import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      {/* main content now closer to navbar */}
      <main className="main-content" style={{ marginTop: '0' }}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
