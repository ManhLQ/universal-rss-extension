class LocalStorageDataStore {
  constructor(dbName) {
    this.dbName = dbName;
  }

  save = (collection, key, value) => {
    chrome.storage.sync.set({[this._formKey(collection, key)] : value});
  }

  remove = (collection, key) => {
    chrome.storage.sync.remove([this._formKey(collection, key)]);
  }

  get = (collection, key, callback) => {
    chrome.storage.sync.get([this._formKey(collection, key)], result => callback(result));
  }

  _formKey = (collection, key) => {
    return `${this.dbName}.${collection}.${key}`;
  }
}

class ChromeStorage {

}

export default LocalStorageDataStore;