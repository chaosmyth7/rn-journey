import { colors } from "./index"; // optional if you want color-based styles
import { spacing } from "./spacing";

export const layout = {
  /** 🧱 Flexbox */
  flex: { flex: 1 },
  flexNone: { flex: 0 },
  flexRow: { flexDirection: "row" as const },
  flexCol: { flexDirection: "column" as const },
  flexWrap: { flexWrap: "wrap" as const },
  flexNoWrap: { flexWrap: "nowrap" as const },
  itemsStart: { alignItems: "flex-start" },
  itemsCenter: { alignItems: "center" },
  itemsEnd: { alignItems: "flex-end" },
  justifyStart: { justifyContent: "flex-start" },
  justifyCenter: { justifyContent: "center" },
  justifyEnd: { justifyContent: "flex-end" },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEvenly: { justifyContent: "space-evenly" },
  selfStart: { alignSelf: "flex-start" },
  selfCenter: { alignSelf: "center" },
  selfEnd: { alignSelf: "flex-end" },
  center: { justifyContent: "center", alignItems: "center" },

  /** 📏 Spacing (Padding / Margin) */
  ...Object.fromEntries(
    Object.entries(spacing).flatMap(([key, value]) => [
      [`p${key}`, { padding: value }],
      [`m${key}`, { margin: value }],
      [`pt${key}`, { paddingTop: value }],
      [`pb${key}`, { paddingBottom: value }],
      [`pl${key}`, { paddingLeft: value }],
      [`pr${key}`, { paddingRight: value }],
      [`px${key}`, { paddingHorizontal: value }],
      [`py${key}`, { paddingVertical: value }],
      [`mt${key}`, { marginTop: value }],
      [`mb${key}`, { marginBottom: value }],
      [`ml${key}`, { marginLeft: value }],
      [`mr${key}`, { marginRight: value }],
      [`mx${key}`, { marginHorizontal: value }],
      [`my${key}`, { marginVertical: value }],
    ])
  ),

  /** 📐 Size */
  wFull: { width: "100%" },
  hFull: { height: "100%" },
  wAuto: { width: "auto" },
  hAuto: { height: "auto" },
  aspectSquare: { aspectRatio: 1 },
  aspectVideo: { aspectRatio: 16 / 9 },

  /** 🧭 Positioning */
  absolute: { position: "absolute" as const },
  relative: { position: "relative" as const },
  top0: { top: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  right0: { right: 0 },
  inset0: { top: 0, bottom: 0, left: 0, right: 0 },
  z0: { zIndex: 0 },
  z10: { zIndex: 10 },
  z20: { zIndex: 20 },
  z30: { zIndex: 30 },
  z50: { zIndex: 50 },
  z100: { zIndex: 100 },

  /** 🧍 Text & Alignment */
  textLeft: { textAlign: "left" as const },
  textCenter: { textAlign: "center" as const },
  textRight: { textAlign: "right" as const },
  textJustify: { textAlign: "justify" as const },
  textUpper: { textTransform: "uppercase" as const },
  textLower: { textTransform: "lowercase" as const },
  textCapitalize: { textTransform: "capitalize" as const },

  /** ✍️ Typography */
  textXs: { fontSize: 12 },
  textSm: { fontSize: 14 },
  textBase: { fontSize: 16 },
  textLg: { fontSize: 18 },
  textXl: { fontSize: 20 },
  text2xl: { fontSize: 24 },
  text3xl: { fontSize: 30 },
  text4xl: { fontSize: 36 },
  fontThin: { fontWeight: "100" as const },
  fontLight: { fontWeight: "300" as const },
  fontNormal: { fontWeight: "400" as const },
  fontMedium: { fontWeight: "500" as const },
  fontSemiBold: { fontWeight: "600" as const },
  fontBold: { fontWeight: "700" as const },
  fontExtraBold: { fontWeight: "800" as const },
  fontBlack: { fontWeight: "900" as const },
  italic: { fontStyle: "italic" as const },

  /** 🎨 Backgrounds */
  bgTransparent: { backgroundColor: "transparent" },
  bgWhite: { backgroundColor: "#FFFFFF" },
  bgBlack: { backgroundColor: "#000000" },
  bgPrimary: { backgroundColor: colors.primary },
  bgSecondary: { backgroundColor: colors.secondary },
  bgSurface: { backgroundColor: colors.surface },
  bgDanger: { backgroundColor: colors.danger },
  bgSuccess: { backgroundColor: colors.success },
  bgWarning: { backgroundColor: colors.warning },

  /** 🧱 Borders & Radius */
  border: { borderWidth: 1, borderColor: colors.gray300 },
  border2: { borderWidth: 2 },
  border0: { borderWidth: 0 },
  borderT: { borderTopWidth: 1 },
  borderB: { borderBottomWidth: 1 },
  borderL: { borderLeftWidth: 1 },
  borderR: { borderRightWidth: 1 },
  roundedNone: { borderRadius: 0 },
  roundedSm: { borderRadius: 4 },
  rounded: { borderRadius: 8 },
  roundedLg: { borderRadius: 12 },
  roundedXl: { borderRadius: 16 },
  roundedFull: { borderRadius: 9999 },

  /** 🕶️ Shadows (iOS & Android compatible) */
  shadowSm: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  shadowLg: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  /** 🔳 Opacity */
  opacity0: { opacity: 0 },
  opacity25: { opacity: 0.25 },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
  opacity100: { opacity: 1 },

  /** 🌈 Overflow & Display */
  hidden: { display: "none" },
  flexDisplay: { display: "flex" },
  overflowHidden: { overflow: "hidden" as const },
  overflowVisible: { overflow: "visible" as const },
  overflowScroll: { overflow: "scroll" as const },
};
