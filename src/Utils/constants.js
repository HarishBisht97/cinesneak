export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const SIGN_UP_URL =
  "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const TMDB_KEY = process.env.REACT_APP_TMDB_KEY;
export const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_KEY;
export const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_KEY}`,
  },
};

export const TMDB_IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
