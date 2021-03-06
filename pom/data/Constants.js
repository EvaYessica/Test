import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: 'https://todoist.com/users/showlogin/'
}


export const CREDENTIALS = {
    STANDARD_USER: {
        //USERNAME: 'test@yahoo.com.mx',
        //PASSWORD: 'test4you'
        USERNAME: process.env.STANDARD_USER_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    }
}