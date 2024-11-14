const queryKeys ={
    AUTH: "auth",
    GET_ACCESS_TOKEN: "getAccessToken",
    GET_PROFILE: "getProfile",
    GET_MARKERS: "getMarkers",
    MARKERS: "markers",
} as const

const storageKeys = {
    REFRESH_TOKEN: "refreshToken",
} as const;

export {queryKeys, storageKeys};