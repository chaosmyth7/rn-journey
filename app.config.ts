import { ConfigContext, ExpoConfig } from "expo/config";

const app = ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Chaos RN",
  slug: "Chaos RN",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "Chaos RN",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  icon: "./assets/icon.png",
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.megidolaon.chaosrn",
  },
  android: {
    package: "com.megidolaon.chaosrn",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    name: "Chaos RN Web",
    favicon: "./assets/favicon.png",
  },

  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/WorkSans-Regular.ttf",
          "./assets/fonts/WorkSans-Medium.ttf",
          "./assets/fonts/WorkSans-SemiBold.ttf",
          "./assets/fonts/WorkSans-Bold.ttf",
        ],
      },
    ],
  ],

  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },
});
export default app;
