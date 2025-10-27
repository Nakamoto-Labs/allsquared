import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/how-it-works"} component={HowItWorks} />
          <Route path={"/features"} component={Features} />
          <Route path={"/pricing"} component={Pricing} />
          <Route path={"/about"} component={About} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/terms"} component={Terms} />
          <Route path={"/privacy"} component={Privacy} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
