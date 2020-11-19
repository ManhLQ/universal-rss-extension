class LocalStorageDataStore {
  constructor(dbName) {
    this.dbName = dbName;
    this.instance = localStorage;
  }

  save = (collection, key, value) => {
    this.instance.setItem(this._formKey(collection, key), value);
  }

  remove = (collection, key) => {
    this.instance.removeItem(this._formKey(collection, key));
  }

  get = (collection, key) => {
    return this.instance.getItem(this._formKey(collection, key));
  }

  _formKey = (collection, key) => {
    return `${this.dbName}.${collection}.${key}`;
  }
}

export default LocalStorageDataStore;