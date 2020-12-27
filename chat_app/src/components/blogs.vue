<template>
  <div class="row">
    <!-- <div class="col-lg-6">
      <input type="hidden" v-model="url" class="form-control mt-2" placeholder="Title">
      <input type="text" v-model="title" class="form-control mt-2" placeholder="Title">
      <input type="text" v-model="body" class="form-control mt-2" placeholder="Body">
      <button @click="postBlog" class="btn btn-block btn-success mt-2">Save</button>
    </div> -->
    <!-- <div class="col-lg-12">
       <table class="table">
         <thead>
         <th>url</th> -->
         <!-- <th>Title</th>
         <th>Body</th> -->
         <!-- <th>Edit</th>
         <th>Delete</th>   -->
         <!-- </thead> 
         <tbody>
           <tr v-for="blog in blogs" :key="blog.url"> -->
             <!-- <td>{{blog.url}}</td> -->
             <!-- <td>{{blog.title}}</td>
             <td>{{blog.body}}</td>
              <td>  -->
               <!-- <button @click="getOne(blog)" class="btn bn-sm btn-success"><i class="fa fa-pencil"></i></button>
             </td> --> 
              <!-- <td>
               <button @click="deleteOne(blog.url)" class="btn bn-sm btn-success"><i class="fa fa-trash"></i></button>
             </td> -->
           <!-- </tr>
         </tbody> 
       </table>   -->
             <!-- <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4" v-for="blog in blogs" :key="blog.url">
          <h5 class="mb-0">{{blog.title}}</h5><span class="small text-uppercase text-muted">{{blog.body}}</span>
          <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div> -->
   <div class="bg-light py-5 main">
    <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-12">
        <h2 class="display-4 font-weight-light text-center">Blogs</h2>
        <p class="font-italic text-muted text-center">here are the blogs.....</p>
      </div>
    </div>

    <div class="row">
      <!-- Team item-->
      <div class="col-xl-12 col-sm-6 mb-5" v-for="blog in blogs" :key="blog.url" >
        <div class="bg-white rounded shadow-sm py-5 px-4">
          <p class="mb-0 display-3">{{blog.title}}</p>
          <p class="mb-0 display-4">{{blog.body}}</p>
        </div>
      </div>
    </div>
  </div>
   </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'blogs',
  props: {
    msg: String
  },
  data(){
    return{
      blogs:null,
      url:'',
      title:'',
      body:''
    }
  },
  mounted(){
    this.getAll();
  },
  methods:{
    getAll(){
      axios.get('http://127.0.0.1:8000/blogs/')
      .then((res)=>{
        this.blogs=res.data;
        this.title='';
        this.body='';
        this.url='';
    })
  },
  getOne(blog){
    this.url = blog.url;
    this.title = blog.title;
    this.body = blog.body;
  }, 
  deleteOne(url){
    axios.delete(url,{auth:{
      username: 'Abhishek',
      password : '1234'
    }})
      .then(()=>{
      this.getAll()
    })
  },

  postBlog(){
    if(this.url ==''){
          axios.post('http://localhost:8000/blogs/', 
          {title:this.title, body:this.body},
          {auth:{username:'Abhishek', password:'1234'}},
          )
            .then(()=>{
            this.getAll()
          })

    }
    else{
          axios.put(this.url, 
          {title:this.title, body:this.body},
          {auth:{username:'Abhishek', password:'1234'}},
          )
          .then(()=>{
          this.getAll()
         })
    }

  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .main{
     width: 100%;
 }
</style>
