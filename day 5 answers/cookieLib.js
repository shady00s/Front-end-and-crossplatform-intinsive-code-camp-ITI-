/*
    Make your own .js library to create, display and delete cookies, then use it in creating the required cookies to display a greeting message to your visitor with displaying an image as his profile pic referring to his gender, and inform him with his number of visits to the site. Display user name and number of visits with font color according to his choices. Replace the registration pagewith the profile page using location object
            the library should have the following functions:
            • getCookie(cookieName):
            o Retrieves a cookie value based on a cookie name.
            • setCookie(cookieName,cookieValue[,expiryDate]):
            o Sets a cookie based on a cookie name, cookie value,and expiration date.
            • deleteCookie(cookieName):
            o Deletes a cookie based on a cookie name.
            • allCookieList():
            o returns a list of all stored cookies
            • hasCookie(cookieName):
            o Check whether a cookie exists or not
            Note:
            Don’t use <form> tag

*/
const Cookies = {
    getCookie: function (cookieName) {
        return document.cookie = cookieName
    },

    saveCookie: function (cookieName, cookieValue, expiryDate) {
        try {

            document.cookie = `${cookieName}=${cookieValue};expires=${expiryDate}`
            return true;

        }
        catch (error) {
            console.error(error);
             alert("There is an error")
             return false;
        }
    }

    , deleteCookie: function (cookieName) {
        document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; `
    },
    allCookieList: function () {
        let cookieList = [];
        let splitCookie = document.cookie.split(";")
        for (let index = 0; index < splitCookie.length; index++) {

            // to create key and value from cookie string list
            cookieList[splitCookie[index].split("=")[0].trim()] = [splitCookie[index].split("=")[1].trim()];

        }

        return cookieList;
    },

    hasCookie(cookieName) {
        if (document.cookie == cookieName) {
            return true
        }
        return false
    }

}
