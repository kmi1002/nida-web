import ReactGA from 'react-ga';

export const initGA = (trackingCode?: string) => {
  if (typeof window !== 'undefined' && trackingCode) {
    ReactGA.initialize(trackingCode);
  }
};

export const logPageView = (_: URL) => {
  if (typeof window !== 'undefined') {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

export const logEvent = (category = '', action = '', label = '', value?: number) => {
  if (category && action) {
    ReactGA.event({ category, action, label, value });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export default { initGA, logEvent, logPageView, logException };
