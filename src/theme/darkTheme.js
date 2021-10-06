/**
 * Colors containing for dark theme
 */
export default {
  // grey scale
  black: '#000000',
  white: '#ffffff',
  /**
   * A helper for making something see-thru. Use sparingly as many layers of transparency
   * can cause older Android devices to slow down due to the excessive compositing required
   * by their under-powered GPUs.
   */
  transparent: 'transparent',
  /**
   * The background color appears behind scrollable content
   *
   * Default color for every screen
   */
  backgroundColor: '#000',
  /**
   * Surface colors affect surfaces(background) of components, such as cards, sheets, and menus
   */
  surfaceColor: '#222',
  /**
   * Use it for card border, InputText border etc.
   */
  borderColor: '#d9d9d9',
  /**
   * ========================= Primary color : (Brand color) =========================
   * primaryLightColor: Lighter shade of primary color, (can be used for hover effects)
   * primaryColor: To be used as background color for components which denotes primary action
   * primaryDarkColor: Darker shade of primary color, (can be used for border color or text color of components)
   */
  primaryLightColor: '#66ffff',
  primaryColor: '#00d3d6',
  primaryDarkColor: '#00a1a5',
  /**
   * Color which will replace primary color,
   * when component is in disabled state
   *
   * disabledDarkColor: to be used for border color & text color of disabled component
   */
  disabledColor: '#E3E6E8',
  disabledDarkColor: '#99A1A8',
  /**
   * To be used for heading text
   */
  headingTextColor: '#fff',
  /**
   * To be used for sub-heading text
   */
  subHeadingTextColor: '#f5f5f6',
  /**
   * The default color of text in many components.
   * To be used for normal text like paragraph
   */
  bodyTextColor: '#e1e2e1',
  /**
   * Green shade for success messages and icons
   */
  successColor: '#52c41a',
  /**
   * Red shade for error messages and icons
   */
  errorColor: '#ff190c',
  //===========================================================
  //================ Component Specific Style =================
  //===========================================================
  /**
   * ========================= Appbar =========================
   * appbar.statusBarColor: color for the status bar
   * appbar.barStyle: Sets the color of the status bar text.
   * appbar.backgroundColor: background color for appbar(toolbar)
   * appbar.tintColor: to be used for appbar title text, appbar icons color and for back button
   *
   * Note: If appbarColor color is dark, make appbarTintColor light
   * Note: If statusBarColor is light, set barStyle to `dark-content` else `light-content`
   */
  appbar: {
    statusBarColor: '#00a1a5',
    barStyle: 'light-content',
    backgroundColor: '#00d3d6',
    tintColor: '#fff',
  },
};
