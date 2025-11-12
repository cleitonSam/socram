/**
 * Tracks an event using Google Analytics (gtag).
 * This function checks if gtag is available on the window object before sending the event.
 *
 * @param {string} action - The action of the event (e.g., 'click', 'submit_form').
 * @param {string} category - The category of the event (e.g., 'whatsapp', 'contact_form').
 * @param {string} label - A descriptive label for the event (e.g., 'Floating Button Click').
 */
export const trackEvent = (action: string, category: string, label: string) => {
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  } else {
    console.log(`GTag not available. Event not tracked: ${action} - ${category} - ${label}`);
  }
};