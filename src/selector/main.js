import {getUserInfo, saveUserInfo} from "../tools/index";
export function mapChatList(chatWindow) {
    let result = Object.assign({}, chatWindow);
    let data = [];
    const {avatar} = getUserInfo();
    if (result.data && result.data.data && result.data.sendData) {
        for (let oldItem of result.data.data) {
            oldItem.avatar = result.data.avatar;
            oldItem.type = 'sender';
            data.push(oldItem);
        }
        for (let newItem of  result.data.sendData) {
            newItem.avatar = avatar;
            newItem.type = 'receiver';
            data.push(newItem);
        }
        data.sort((x, y) => {
            return x.date > y.date;
        });
        result.data.message = data;
    } else {
        result.data = {message: []};
    }
    return result;
}

export function mapLoginProps(userLogin) {
    userLogin.data && saveUserInfo(userLogin.data);
    return userLogin;
}