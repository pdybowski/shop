export const getLocalStorage = (name: any) => {
    return localStorage.getItem(name);
};

export const setLocalStorage = (name: any, data: any) => {
    localStorage.setItem(name, data);
};
