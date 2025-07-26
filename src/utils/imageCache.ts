import { Image } from "expo-image";
import { Asset } from "expo-asset";

// 이미지 캐싱 설정
export const cacheConfig = {
  // 캐시 정책 설정
  cachePolicy: "memory-disk" as const,
  // 캐시 만료 시간 (밀리초) - 7일
  maxAge: 7 * 24 * 60 * 60 * 1000,
  // 우선순위 설정
  priority: "high" as const,
};

// 이미지 프리로드 함수
export const preloadImages = async (imageRequires: any[]) => {
  try {
    // Asset을 사용하여 이미지 프리로드
    const assets = imageRequires.map((imageRequire) =>
      Asset.fromModule(imageRequire)
    );
    const preloadPromises = assets.map((asset) => asset.downloadAsync());

    await Promise.all(preloadPromises);
    console.log("Images preloaded successfully");
  } catch (error) {
    console.error("Error preloading images:", error);
  }
};

// 캐시 정리 함수 (Expo Image v1.10+)
export const clearImageCache = async () => {
  try {
    // Expo Image의 캐시 정리
    if (Image.clearDiskCache) {
      await Image.clearDiskCache();
    }
    if (Image.clearMemoryCache) {
      await Image.clearMemoryCache();
    }
    console.log("Image cache cleared");
  } catch (error) {
    console.error("Error clearing cache:", error);
  }
};

// 이미지 캐시 설정을 위한 기본 props
export const getImageCacheProps = () => ({
  cachePolicy: cacheConfig.cachePolicy,
  priority: cacheConfig.priority,
  transition: 200, // 페이드 인 애니메이션 (밀리초)
});
