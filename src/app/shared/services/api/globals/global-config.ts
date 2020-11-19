
export const BaseURL = "http://192.168.1.7:5566";
export const EZIAPI_URL = BaseURL+'/api';


export class END_POINTS {
    // Employee API
    public static About = EZIAPI_URL + "/aboutUs/GetAboutUs";
    public static contact = EZIAPI_URL + "/contactUs/PostcontactUs";
}


