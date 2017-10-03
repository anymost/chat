export const liginVerify = () => {
    const id = localStorage.getItem('id');
    return !!id || id === 0;
};

export const saveUserInfo = (data) => {
    const {id, name, avatar} = data.data;
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('avatar', avatar);
};

export const getUserInfo = () => {
    const {id, name ,avatar} = localStorage;
    return {
        id,
        name,
        avatar
    };
};

export const toString = value => {
    let toString = Object.prototype.toString;
    return toString.call(value);
}