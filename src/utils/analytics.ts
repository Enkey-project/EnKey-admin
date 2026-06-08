export type StoreName = "app_store" | "play_store";
export type StorePlacement = "hero" | "final_cta";

const STORE_CLICK_EVENTS: Record<StoreName, string> = {
  app_store: "app_store_click",
  play_store: "play_store_click",
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackStoreClick(store: StoreName, placement: StorePlacement) {
  window.gtag?.("event", STORE_CLICK_EVENTS[store], {
    placement,
  });
}
