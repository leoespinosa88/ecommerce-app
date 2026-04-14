const STOREAGE_KEY = "card";
export function initLocalStorage() {
    if (!localStorage.getItem(STOREAGE_KEY)) {
        localStorege.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

export function getFromLocalStorege() {
    const data = localStorage.getItem(STOREAGE_KEY);
    return data ? JSON.parse(data) : [];
}
