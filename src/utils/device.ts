export function isMobileStoreDevice(
  userAgent = navigator.userAgent.toLowerCase(),
) {
  return /android/.test(userAgent) || /iphone|ipad|ipod/.test(userAgent);
}

/** PC: 하단 CTA로 스크롤, 모바일: /download 경유 스토어 이동 */
export function getAppDownloadNavHref(
  userAgent = navigator.userAgent.toLowerCase(),
) {
  return isMobileStoreDevice(userAgent) ? "/download" : "#cta";
}

export function getStoreRedirectUrl(
  userAgent = navigator.userAgent.toLowerCase(),
) {
  if (/android/.test(userAgent)) return "play" as const;
  if (/iphone|ipad|ipod/.test(userAgent)) return "app" as const;
  return "home" as const;
}
