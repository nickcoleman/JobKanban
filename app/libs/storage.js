/********************************************
  LocalStorage Management
********************************************/
// TODO: Implement LocalForge (https://github.com/localForage/localForage)

export default storage => ({
  get(k) {
    try {
      return JSON.parse(storage.getItem(k));
    }
    catch(e) {
      return null;
    }
  },
  set(k, v) {
    storage.setItem(k, JSON.stringify(v));
  }
})
