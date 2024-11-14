// 상수 선언
const mainNavigations = {
  HOME : "Home",
  FEED : "Feed",
  CALENDAR : "Calendar",
} as const;

const authNavigations = {
    AUTH_HOME : "AuthHome",
    LOGIN : 'Login',
    SIGNUP : "Signup"
  } as const;

const mapNavigations = {
  MAP_HOME : "MapHome",
  MAP_ADD_POST : "MapAddPost"

} as const;

export {authNavigations, mapNavigations, mainNavigations}