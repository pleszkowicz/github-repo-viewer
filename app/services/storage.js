import Service from '@ember/service';

export default class StorageService extends Service {
  localStorageAvailable = this.isLocalStorageAvailable();

  isLocalStorageAvailable() {
    try {
      let testKey = '__storage_test__';
      window.localStorage.setItem(testKey, 'test');
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.error('Local storage is not available:', e);
      return false;
    }
  }

  setItem(key, value) {
    if (this.localStorageAvailable) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error(`Error setting item '${key}' in local storage:`, e);
      }
    }
  }

  getItem(key) {
    if (this.localStorageAvailable) {
      try {
        let value = window.localStorage.getItem(key);
        return JSON.parse(value);
      } catch (e) {
        console.error(`Error getting item '${key}' from local storage:`, e);
        return null;
      }
    }
    return null;
  }

  removeItem(key) {
    if (this.localStorageAvailable) {
      try {
        window.localStorage.removeItem(key);
      } catch (e) {
        console.error(`Error removing item '${key}' from local storage:`, e);
      }
    }
  }

  clear() {
    if (this.localStorageAvailable) {
      try {
        window.localStorage.clear();
      } catch (e) {
        console.error('Error clearing local storage:', e);
      }
    }
  }
}
