//引入token
import Cookies from 'js-cookie'

const TokenKey='Admin-token'

export function getToken(){
    return Cookies.get(TokenKey);
}

