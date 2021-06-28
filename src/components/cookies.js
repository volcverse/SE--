import cookies from 'react-cookies'

export function setToken(value){
    cookies.save("adminToken",value);
}

export function setUsername(value){
    cookies.save("username",value);
}