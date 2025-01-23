import LandingPage from "./components/LandingPage";
import { Header } from "./components/Header";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isAuthenticated={true} />
      <main>
        <LandingPage />
      </main>
    </div>
  );
}