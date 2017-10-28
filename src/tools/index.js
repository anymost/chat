export const loginVerify = () => {
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
};

export const timeTransformer = time => {
    const date = new Date(time);
    const now = new Date();
    let reg = null;
    if (date.valueOf() + 1000 * 60 * 60 * 24 > now.valueOf()) {
        reg =  /.+T(\d{2}:\d{2})/;
    } else {
        reg = /(\d{4}-\d{2}-\d{2})/;
    }
    return (reg.exec(time)||[])[1];
};