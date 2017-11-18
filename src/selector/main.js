import {getUserInfo, saveUserInfo} from '../tools/index';
export function mapChatList(chat) {
    let result = Object.assign({}, chat);
    if (result.chatState === 'success' ) {
        const {avatar: selfAvatar, name: selfName} = getUserInfo();
        result.data.data = result.data.data.map(item => {
            if (item.messageType === 'send') {
                item.name = selfName;
                item.avatar = selfAvatar;
            }
            return item;
        });
    }
    return result;
}

export function mapLoginProps(userLogin) {
    userLogin.data && saveUserInfo(userLogin.data);
    return userLogin;
}