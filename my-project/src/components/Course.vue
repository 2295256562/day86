<template>
  <div>
    <div>
      <span @click="categoryHandler(index, item.id)" v-for="(item, index) in categoryList" :key="item.id" :class="{activer:index==currentIndex}">{{ item.name }}</span>
    </div>
    <div>
      <ul>
        <li v-for="course in courseList" :key="course.id">{{course.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      // 分类列表
      categoryList: [],
      currentIndex: 0,
      // 课程列表
      courseList: [],
      // 默认全部课程的id
      categoryId: 0
    }
  },
  methods: {
    // 获取 分类列表数据
    getCategoryList () {
      this.$http.get('course_sub/category/list/')
        .then((res) => {
          console.log(res)
          var data = res.data

          if (data.error_no === 0) {
            this.categoryList = data.data
            let obj = {
              id: 0,
              name: '全部',
              hide: 'false',
              category: 0
            }
            this.categoryList.unshift(obj)
            // 数组 删除任意一个指定元素
            // 指定数组中的索引 删除指定元素 数组.splice(起始位置， 删除的个数)
          }
        })
        .catch((err) => {
          console.log('获取列表失败', err)
        })
    },
    categoryHandler (index, categoryId) {
      this.currentIndex = index
      this.categoryId = categoryId
      this.getCourseList()
    },
    getCourseList () {
      var _this = this
      this.$http.get(`courses/?sub_category=${this.categoryId}`)
        .then(function (res) {
          var data = res.data
          _this.courseList = data.data
          console.log(data)
        })
    }
  },
  created () {
    this.getCategoryList()
    this.getCourseList()
  }
}
</script>

<style scoped>
span {
  padding: 0px 20px;
}
span.activer {
  color: #42b983;
}
</style>
