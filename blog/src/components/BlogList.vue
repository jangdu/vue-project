<template>
  <div>
    <div>
      <h4>{{blogData[0].title}}</h4>
      <p>{{blogData[0].date}}</p>
    </div>
    <div>
      <h5>{{blogData[1].title}}</h5>
      <p>{{blogData[1].date}}</p>
    </div>
    <div>
      <h5>{{blogData[2].title}}</h5>
      <p>{{blogData[2].date}}</p>
    </div>
  </div>
</template>

<script>
export default{
  name : 'BlogList',
  props : {
    blogData : Array,
  }
}
</script>