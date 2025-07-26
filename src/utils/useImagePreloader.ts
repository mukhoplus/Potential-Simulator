import { useEffect } from "react";
import { preloadImages } from "./imageCache";

// 앱에서 사용하는 모든 이미지들
const APP_IMAGES = [
  require("../../assets/images/poten_cube.webp"),
  require("../../assets/images/addi_cube.webp"),
  require("../../assets/images/meso.png"),
  require("../../assets/images/gene_wep.webp"),
  require("../../assets/images/hat.png"),
  require("../../assets/images/glove.png"),
  require("../../assets/images/accessory.png"),
  require("../../assets/images/topwear.png"),
];

/**
 * 앱 시작 시 이미지들을 프리로드하는 훅
 */
export const useImagePreloader = () => {
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(APP_IMAGES);
        console.log("✅ All images preloaded successfully");
      } catch (error) {
        console.error("❌ Failed to preload images:", error);
      }
    };

    loadImages();
  }, []);
};

/**
 * 특정 이미지들만 프리로드하는 훅
 */
export const useCustomImagePreloader = (images: any[]) => {
  useEffect(() => {
    if (images.length === 0) return;

    const loadImages = async () => {
      try {
        await preloadImages(images);
        console.log(`✅ ${images.length} custom images preloaded successfully`);
      } catch (error) {
        console.error("❌ Failed to preload custom images:", error);
      }
    };

    loadImages();
  }, [images]);
};
