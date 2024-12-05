// useResponsiveFontSize.ts
import { onMounted, onBeforeUnmount } from "vue";

export function useResponsiveFontSize(): void {
  const REM_NUM = 75; // 基础 16px 设计图 1080P
  const REM_NUM_APP = 25; 
  const isMobileOrTablet = (): boolean => {
    const userAgent = window.navigator.userAgent;
    return /Mobi|Tablet/i.test(userAgent);
  };

  const adjustFontSize = (): void => {
    const width = window.innerWidth;
    let newFontSize = width / REM_NUM;
    if (isMobileOrTablet()) newFontSize = width / REM_NUM_APP;
    document.documentElement.style.fontSize = `${newFontSize}px`;
  };

  onMounted(() => {
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", adjustFontSize);
  });
}
