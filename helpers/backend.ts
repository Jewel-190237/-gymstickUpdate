import { del, get, patch, post, postForm, patchForm, put } from "./api";

export const sendOtp = (data) => post("/auth/code", data);
export const postRegister = (data) => post("/auth/register", data);
export const postLogin = (data) => post("/auth/login", data);
export const postVerifyOtp = (data) => post("/auth/verify-otp", data);
export const postResetPassword = (data) => post("/auth/reset-password", data);
export const postChangePassword = (data) => post("/auth/password", data);
export const findUser = (data) => get("/auth/exists", data);

export const fetchUser = (data) => get("/auth/profile", data);
export const updateUser = (data) => patch("/auth/profile", data);



export const postHostInfo = (data) => postForm("/host/info", data);

export const fetchSettings = (data) => get("/settings", data);
export const postSettings = (data) => postForm("/settings", data);



export const fetchProperties = (data) => get("/property/list", data);
export const fetchProperty = (data) => get("/property/:uid", data);
export const postProperty = (data) => postForm("/property", data);
export const patchProperty = (data) => patchForm("/property/:uid", data);
export const deleteProperty = (data) => del("/property", data);

export const postPropertyApproval = (data) => post("/property/approve/:uid", data);
export const postPropertyRejection = (data) => post("/property/reject/:uid", data);


export const fetchHosts = (data) => get("/host/list", data);
export const fetchHost = (data) => get("/host/:uid", data);

export const postHostApproval = (data) => post("/host/approve/:uid", data);
export const postHostRejection = (data) => post("/host/reject/:uid", data);