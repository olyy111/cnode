import util from '../util/index'
export class RouterStore {
  constructor () {
    this.data = {}
  }
  _getQueryString (route) {
    let query = []
    for (let key in route.query) {
      let urlSeg = key + '=' + route.query[key]
      query.push(urlSeg)
    }
    let url = query.join('&')
    return url
  }
  setItem (route, routeData) {
    let url = this._getQueryString (route)
    let data = Object.assign({}, routeData)
    this.data[url] = data
    console.log(this.data)
  }
  getItem (route) {
    let url = this._getQueryString(route)
    if(this.data[url]) {
      return this.data[url]
    }
  }
}
