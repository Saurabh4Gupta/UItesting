import { ApplicationInsights } from '@microsoft/applicationinsights-web';

export const invokeSre = async (instrumentationKey) => {
  if (instrumentationKey) {
    const appInsights = new ApplicationInsights({
      config: { instrumentationKey /* ...Other Configuration Options... */ },
    });
    appInsights.loadAppInsights();
    // Manually call trackPageView to establish the current user/session/pageview
    appInsights.trackPageView({ name: 'DAN | Productivity Manager' });
  }
};
