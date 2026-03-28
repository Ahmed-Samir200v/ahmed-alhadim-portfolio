import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import CustomCursor from "./components/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogArticle} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - Dark cinematic theme inspired by FusionAI
// - Electric blue primary (#0EA5E9 range) + warm orange accent
// - Pure black/deep navy backgrounds with neon glow effects

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          {/* Global UI elements - appear on all pages */}
          <CustomCursor />
          <ScrollProgressBar />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
