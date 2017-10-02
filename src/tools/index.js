export const liginVerify = () => {
    const id = localStorage.getItem('id');
    return !!id || id === 0;
};