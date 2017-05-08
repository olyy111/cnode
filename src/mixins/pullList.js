import util from '../util/index.js'
import routerStore from '../routerData/index.js'

const getPageKey = () => { // 获取当前页面key值，由vue-router生成
  return {}.toString.call(history.state) === '[object Object]'?
    history.state.key : location.href
}
export default {
  data () {
    return {
      list: [],
      isLoading: false,
      isDropList: false,
      page: 1
    }
  },
  routeData () {
    return {
      isLoading: false,
      list: [],
      page: 1
    }
  },
  created () {
    this.list = this.pullList()
  },
  watch: {
    $route: function (to) {
      let data = routerStore.getItem(to)
      if (data) { //如果路由对应的数据存在， 再去检查路由key是否一致
        if(getPageKey() === data.list.key){
          Object.assign(this.$data, data)
        }else {
          this.pullList()
        }
        return
      }else {
          this.pullList()
      }
    }
  },
  methods: {
    pullList () {
      this.isLoading = true
      let {url, data} = this.setReq()
      util.get(url, data, ({data}) => {
        this.$nextTick(() => {
          this.isLoading = false
          console.log(444)
        })
        if (this.isDropList) {
          this.isDropList = false
          let v1 = this.list
          Object.keys(v1)
          data.forEach( (value) => {
            this.list.push(value)
          })
          let v2 = this.list
          // this.list = this.list.concat(data)
        }else {
          this.list = data
        }
        this.list.key = getPageKey()
        this.page ++
        routerStore.setItem(this.$route, this.$data)
        return data
      } )
    },
    inViewport () {
      if (this.isLoading) {
        return
      }
      if(this.page === 1) return
      this.isDropList = true
      this.pullList()
    }
  }
}