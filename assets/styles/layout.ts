// layout.ts
import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from "./index";
import { spacing as spacingRaw } from "./spacing";

// responsive
export const wp = (percent: number) =>
  (Dimensions.get("window").width * percent) / 100;
export const hp = (percent: number) =>
  (Dimensions.get("window").height * percent) / 100;

// shadows
const isAndroid = Platform.OS === "android";
const shadowSm = isAndroid
  ? { elevation: 1 }
  : {
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 1 },
    };
const shadow = isAndroid
  ? { elevation: 3 }
  : {
      shadowColor: "#000",
      shadowOpacity: 0.12,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    };
const shadowLg = isAndroid
  ? { elevation: 6 }
  : {
      shadowColor: "#000",
      shadowOpacity: 0.22,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 6 },
    };

// helper: convert "2.5" -> "2_5"
const makeKey = (k: string) => (k.includes(".") ? k.replace(".", "_") : k);

function genSpacing(spacing: Record<string, number>) {
  const out: Record<string, any> = {};
  for (const [rawKey, val] of Object.entries(spacing)) {
    const k = makeKey(rawKey);
    out[`p${k}`] = { padding: val };
    out[`px${k}`] = { paddingHorizontal: val };
    out[`py${k}`] = { paddingVertical: val };
    out[`pt${k}`] = { paddingTop: val };
    out[`pb${k}`] = { paddingBottom: val };
    out[`pl${k}`] = { paddingLeft: val };
    out[`pr${k}`] = { paddingRight: val };

    out[`m${k}`] = { margin: val };
    out[`mx${k}`] = { marginHorizontal: val };
    out[`my${k}`] = { marginVertical: val };
    out[`mt${k}`] = { marginTop: val };
    out[`mb${k}`] = { marginBottom: val };
    out[`ml${k}`] = { marginLeft: val };
    out[`mr${k}`] = { marginRight: val };

    // helpful: top/right/bottom/left spacing (for absolute/relative offsets) — optional but handy
    out[`top${k}`] = { top: val };
    out[`bottom${k}`] = { bottom: val };
    out[`left${k}`] = { left: val };
    out[`right${k}`] = { right: val };
  }
  return out;
}

const core: Record<string, any> = {
  /* Flex */
  flex: { flex: 1 },
  flexNone: { flex: 0 },
  flexRow: { flexDirection: "row" },
  flexCol: { flexDirection: "column" },
  itemsCenter: { alignItems: "center" },
  itemsStart: { alignItems: "flex-start" },
  itemsEnd: { alignItems: "flex-end" },
  justifyCenter: { justifyContent: "center" },
  justifyBetween: { justifyContent: "space-between" },

  /* shortcut */
  center: { justifyContent: "center", alignItems: "center" }, // very common

  /* Size */
  wFull: { width: "100%" },
  hFull: { height: "100%" },

  /* Position */
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  top0: { top: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  right0: { right: 0 },

  /* Text */
  textCenter: { textAlign: "center" },
  textLeft: { textAlign: "left" },

  /* Typography sizes */
  textXs: { fontSize: 12 },
  textSm: { fontSize: 14 },
  textBase: { fontSize: 16 },
  textLg: { fontSize: 18 },
  textXl: { fontSize: 20 },
  text2xl: { fontSize: 24 },
  text3xl: { fontSize: 30 },

  /* Font weight helpers */
  fontThin: { fontWeight: "100" },
  fontLight: { fontWeight: "300" },
  fontNormal: { fontWeight: "400" },
  fontMedium: { fontWeight: "500" },
  fontSemiBold: { fontWeight: "600" },
  fontBold: { fontWeight: "700" },

  /* Text transform */
  textUpper: { textTransform: "uppercase" },
  textLower: { textTransform: "lowercase" },
  textCapitalize: { textTransform: "capitalize" },

  /* Text color - commonly used */
  textPrimary: { color: colors.text },
  textMuted: { color: colors.muted },
  textWhite: { color: "#FFFFFF" },
  textDanger: { color: colors.danger },
  textSuccess: { color: colors.success },

  /* Backgrounds */
  bgPrimary: { backgroundColor: colors.primary },
  bgSurface: { backgroundColor: colors.surface },
  bgWhite: { backgroundColor: colors.background },

  /* Border / Radius */
  border: { borderWidth: 1, borderColor: colors.gray300 },
  border0: { borderWidth: 0 },
  borderPrimary: { borderColor: colors.primary },
  borderMuted: { borderColor: colors.gray300 },
  rounded: { borderRadius: 8 },
  roundedSm: { borderRadius: 4 },
  roundedFull: { borderRadius: 999 },

  /* Shadows */
  shadowSm,
  shadow,
  shadowLg,

  /* Display */
  hidden: { display: "none" },
  flexDisplay: { display: "flex" },

  /* Z */
  z0: { zIndex: 0 },
  z10: { zIndex: 10 },
  z20: { zIndex: 20 },
  z30: { zIndex: 30 },

  /* Opacity */
  opacity0: { opacity: 0 },
  opacity25: { opacity: 0.25 },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
  opacity100: { opacity: 1 },

  /* min / max helpers often useful */
  minWFull: { minWidth: "100%" },
  maxWFull: { maxWidth: "100%" },
  minHFull: { minHeight: "100%" },
  maxHFull: { maxHeight: "100%" },
};

const spacingUtils = genSpacing(spacingRaw);
const raw = { ...core, ...spacingUtils };

export const layout = StyleSheet.create(raw);

export const getLayout = (key: string) => {
  const k = key.includes(".") ? key.replace(".", "_") : key;
  return (layout as any)[k];
};

export default layout;
