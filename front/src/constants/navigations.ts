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
  MAP_ADD_POST : "MapAddPost",
  MAP_DIRECTIONS_STACK : "MapDirectionsStack"

} as const;

const bikeStatusNavigations = {
  BIKE_STATUS_HOME : "BikeStatusHome",
  BIKE_STATUS : "BikeStatus"
} as const;

const myBikeRoadNavigations = {
  MY_BIKE_ROAD : "MyBikeRoad"
} as const;

const drectionsStackNavigations = {
  MAP_DIRECTIONS : "MapDirections",
  MAP_DIRECTIONS_STATUS : "MapDirectionsStatus"
} as const;

export {authNavigations, mapNavigations, mainNavigations, bikeStatusNavigations, myBikeRoadNavigations, drectionsStackNavigations}
