<template>
    <div class="active-area">
      <section class="tableContainer">
        <div class="heading">
          <h2>Product Table</h2>
          <button class="add">Add Product</button>
        </div>
        <table role="table" class="table">
          <thead role="rowgroup">
            <tr role="row">
              <th role="columnheader">Title</th>
              <th role="columnheader">Body</th>
              <th role="columnheader">Edit</th>
              <th role="columnheader">Delete</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr role="row" v-for="blog in blogs" :key="blog.url">
              <td role="cell" data-title="Product name">{{blog.title}}</td>
              <td role="cell" data-title="Product Id">{{blog.body}}</td>
              <td role="cell" data-title="Edit">
                <button
                  style="
                    width: 25px;
                    height: 25px;
                    font-size: 20px;
                    border: none;
                    color: white;
                    background-color: yellowgreen;
                  "
                >
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
              </td>
              <td role="cell" data-title="Delete">
                <button
                  style="
                    width: 25px;
                    height: 25px;
                    font-size: 20px;
                    border: none;
                    color: white;
                    background-color: red;
                    border-radius: 5px;
                  "
                >
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- table ended -->
      <!-- pop up form started-->
      <div class="form-popup" id="AddForm">
        <form action="" class="form-container">
          <div class="head_cancel">
            <h1>Add Product</h1>
            <button type="submit" class="cancel" >
              &#x2716;
            </button>
          </div>
          <br />
          <br />
          <label for="product ID"><b>Product ID</b></label>
          <input
            type="text"
            placeholder="Product ID"
            name="product ID"
            required
          />
          <label for="pdname"><b>Product Name</b></label>
          <input
            type="text"
            placeholder="Product Name"
            name="pdname"
            required
          />
          <label for="price"><b>Price</b></label>
          <input type="number" placeholder="Price" name="price" required />
          <label for="image"><b>Image</b></label>
          <input type="file" placeholder="image" name="image" required />
          <!-- button -->
          <button type="submit" class="btn">Add</button>
        </form>
      </div>
      <div class="form-popup" id="EditForm">
        <form action="" class="form-container">
          <div class="head_cancel">
            <h1>Edit Product</h1>
            <button type="submit" class="cancel" >
              &#x2716;
            </button>
          </div>
          <br />
          <br />
          <label for="product ID"><b>Product ID</b></label>
          <input
            type="text"
            placeholder="Product ID"
            name="product ID"
            required
          />
          <label for="pdname"><b>Product Name</b></label>
          <input
            type="text"
            placeholder="Product Name"
            name="pdname"
            required
          />
          <label for="price"><b>Price</b></label>
          <input type="number" placeholder="Price" name="price" required />
          <label for="image"><b>Image</b></label>
          <input type="file" placeholder="image" name="image" required />
          <!-- button -->
          <button type="submit" class="btn">Update</button>
        </form>
      </div>
    </div>

</template>

<script>
import axios from 'axios'

     
export default {
    name: 'Create_Blog',
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
,


      // openAddForm() {
      //   document.getElementById("AddForm").style.display = "block";
        
      // },

      // closeAddForm() {
      //   document.getElementById("AddForm").style.display = "none";
      // },

      // openEditForm() {
      //   document.getElementById("EditForm").style.display = "block";
      // },

      // closeEditForm() {
      //   document.getElementById("EditForm").style.display = "none";
      // }
}
</script>

<style scoped>
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /* The popup form - hidden by default */
      .form-popup {
        display: none;
        position: fixed;
        bottom: 0;
        top: 10%;
        right: 25%;
        left: 25%;
        border: 1% solid #f1f1f1;
        z-index: 9;
        height: 100%;
        width: 50%;
        align-self: center;
      }
      .form-container {
        max-width: 100%;
        padding: 1%;
        background-color: white;
        justify-content: center;
      }
      /* close button */
      .head_cancel {
        display: flex;
        justify-content: space-between;
      }
      .head_cancel button {
        font-size: 25px;
      }
      .head_cancel .cancel {
        border: none;
        background: none;
        cursor: pointer;
      }

      /* input fields */
      .form-container input[type="text"],
      .form-container input[type="number"],
      .form-container input[type="file"] {
        width: 90%;
        padding: 15px;
        margin: 5px 0 22px 0;
        border: none;
        background: #f1f1f1;
        display: block;
      }

      /* When the inputs get focus, do something */
      .form-container input[type="text"]:focus,
      .form-container input[type="number"]:focus,
      .form-container input[type="file"]:focus {
        background-color: #ddd;
        outline: none;
      }

      /*style for the submit/login button */
      .form-container .btn {
        background-color: #4caf50;
        color: white;
        padding: 16px 20px;
        border: none;
        cursor: pointer;
        width: 90%;
        margin-bottom: 10px;
        opacity: 0.8;
      }
      /*hover effects to buttons */
      .form-container .btn:hover,
      .open-button:hover {
        opacity: 1;
      }
      /* table */

      .tableContainer {
        margin: 4%;
        /* border: 1px solid red; */
      }
      .heading {
        display: flex;
        justify-content: space-between;
      }
      .heading h2 {
        font-size: 1.5rem;
        color: red;
        margin-top: 4vh;
      }
      /* Button used to open the contact form  */
      .add {
        background-color: red;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0.6;
        float: right;
        width: 6rem;
        margin: 1rem;
        border-radius: 5%;
        font-size: 1.2rem;
      }

      /*--------------------------------------------------------------
# Table
--------------------------------------------------------------*/
      table {
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1),
          0px 0px 60px rgba(0, 0, 0, 0.05), 0px 20px 30px rgba(0, 0, 0, 0.05),
          0px 0px 30px rgba(0, 0, 0, 0.05);
        font-size: 1.2rem;
        width: 100%;
      }

      th {
        color: #ffffff;
        background: #39a2fb;
        font-weight: 700;
      }

      tr {
        background: #fff;
      }

      tr:hover {
        background: #f4f4f4;
      }

      tr:nth-child(even) {
        background: #f4f4f4;
      }

      td {
        word-wrap: break-word;
        border-bottom: 1px solid #ccc;
        /* align-items: center; */
        /* justify-content: center; */
        /* text-align: center; */
      }

      td img {
        height: 55px;
        width: 55px;
      }

      /* responsiveness */
      @media screen and (max-width: 426px) {
        .add {
          font-size: 1.2rem;
        }
        .form-popup {
          position: fixed;
          bottom: 0;
          top: 10%;
          right: 0;
          left: 0;
          border: 1% solid #f1f1f1;
          z-index: 9;
          height: 100%;
          width: 100%;
          align-self: center;
        }
        /* Force table to not be like tables anymore */
        table,
        thead,
        tbody,
        th,
        td,
        tr {
          display: block;
        }

        /* Hide table headers (but not display: none;, for accessibility) */
        thead tr {
          position: absolute;
          top: -9999px;
          left: -9999px;
          justify-content: center;
        }

        tr {
          margin: 0 0 1rem 0;
        }

        tr:nth-child(odd) {
          background: #ccc;
        }

        td {
          /* Behave  like a "row" */
          border: none;
          border-bottom: 1px solid #eee;
          position: relative;
          /* float: left; */
          padding-left: 60%;
          margin-left: 0;
          /* text-align: start; */
          padding-top: 3px;
          padding-bottom: 3px;
        }

        td:before {
          /* Now like a table header */
          position: absolute;
          /* Top/left values mimic padding */
          top: 0;
          left: 20px;
          width: 50%;
          float: left;
          /* padding-right: 10px; */
          white-space: nowrap;
          padding-top: 3px;
          padding-bottom: 3px;
        }

        /*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
        td:nth-of-type(1):before {
          content: "Title";
        }
        td:nth-of-type(2):before {
          content: "Body";
        }
        td:nth-of-type(3):before {
          content: "Edit";
        }
        td:nth-of-type(4):before {
          content: "Delete";
        }
      }
      @media screen and (max-width: 768px) {
        .add {
          font-size: 1.2rem;
        }
        .form-popup {
          position: fixed;
          bottom: 0;
          top: 10%;
          right: 0;
          left: 0;
          border: 1% solid #f1f1f1;
          z-index: 9;
          height: 100%;
          width: 100%;
          align-self: center;
        }
      }

</style>