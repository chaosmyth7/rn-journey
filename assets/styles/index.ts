import { Appearance } from "react-native";
import { darkColors, lightColors } from "./colors";
export * from "./layout";
export * from "./spacing";
export * from "./typography";

export const colors =
  Appearance.getColorScheme() === "dark" ? darkColors : lightColors;

/**
 * Utility to manually switch theme (optional)
 */
export const getTheme = (mode: "light" | "dark" = "light") => {
  return mode === "dark" ? darkColors : lightColors;
};
