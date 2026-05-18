import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Secondary routes — only fetched when the user navigates to them
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div style={{ minHeight: "100vh", background: "oklch(0.07 0.015 280)" }} />
);

function Router() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogArticle} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
