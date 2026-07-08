import { Switch, Route, Router as WouterRouter } from "wouter";

import { AppProviders } from "@/providers";
import { Loader } from "@/components/loader";
import { Noise } from "@/components/effects/noise";
import { WebVitals } from "@/components/analytics";

import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import CareersPage from "@/app/careers/page";
import CaseStudiesPage from "@/app/case-studies/page";
import ContactPage from "@/app/contact/page";
import IndustriesPage from "@/app/industries/page";
import GamingPage from "@/app/industries/gaming/page";
import InsightsPage from "@/app/insights/page";
import MethodPage from "@/app/method/page";
import PrivacyPage from "@/app/privacy/page";
import ServicesPage from "@/app/services/page";
import TermsPage from "@/app/terms/page";
import NotFoundPage from "@/app/not-found";

import CaseStudySlugPage from "@/pages/case-study-slug";
import IndustrySlugPage from "@/pages/industry-slug";
import InsightSlugPage from "@/pages/insight-slug";
import ServiceSlugPage from "@/pages/service-slug";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/case-studies" component={CaseStudiesPage} />
      <Route path="/case-studies/:slug" component={CaseStudySlugPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/industries/gaming" component={GamingPage} />
      <Route path="/industries/:slug" component={IndustrySlugPage} />
      <Route path="/insights" component={InsightsPage} />
      <Route path="/insights/:slug" component={InsightSlugPage} />
      <Route path="/method" component={MethodPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/:slug" component={ServiceSlugPage} />
      <Route path="/terms" component={TermsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <AppProviders>
        <WebVitals />
        <Loader />
        <Noise opacity={0.025} />
        <Router />
      </AppProviders>
    </WouterRouter>
  );
}

export default App;
