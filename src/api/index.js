import * as chat from './chat';
import * as login from './login';
import * as songsheet from './songsheet';
export default {
    ...chat,
    ...login,
    ...songsheet
}