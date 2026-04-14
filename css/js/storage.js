const STOREAGE_KEY = "card";
export function initLocalStorage() {
    if (!localStorage.getItem(STOREAGE_KEY)) {
        localStorege.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}