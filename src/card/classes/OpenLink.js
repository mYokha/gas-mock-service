import BaseClass from '../../helpers/BaseClass'

class OpenLink extends BaseClass {
  setUrl (url) {
    this._data.url = url

    return this
  }

  setOpenAs (openAs) {
    this._data.openAs = openAs

    return this
  }
}

export default OpenLink
