<template>
<div class="dialog-shadow" v-if="visible">
  <div class="dialogBox" >
      <div class="dialog-title">
        修改密码
      </div>
      <table class="dialog-content">
        <tr >
          <td><span>账号:</span></td>
          <td><span>{{userName}}</span></td>
        <tr/>
        <tr >
          <td><span>原密码:</span></td>
          <td><input type="`text`" v-model="dataForm.password" placeholder="原密码"></td>
        <tr/>
        <tr>
          <td><span>新密码:</span>
          <td><input type="password" v-model="dataForm.newPassword" placeholder="原密码"><td/>
        </tr>
        <tr>
          <td><span>确认密码:</span></td>
          <td><input type="password" v-model="dataForm.confirmPassword" placeholder="原密码"></td>
        </tr>
      </table>
      <div class="dialog-footer">
        <button @click="visible=false"> 取消</button>
        <button @click="dataFormSubmit()">确认</button>
      </div>

  </div>

</div >

</template>

<script>
export default {
  name: "UpdatePassword",
  data(){
    return{
      visible:false,
      userName:"小影",
      dataForm:{
        newPassword:"",
        password:'',
        confirmPassword:'',
      }
    }
  },
  methods:{
    dataFormSubmit(){
      alert("表单提交逻辑");
      this.visible=false;
      this.$nextTick(()=>{
        this.$router.push({name:"Login"})
      });
    },
    init(){
       this.visible=true;
    }
  }
}
</script>

<style scoped lang="scss">
.dialog-shadow{
  position: fixed;
  left: 0px;
  top: 0px;
  background:#000;
  width: 100%;
  height: 100%;
  opacity:0.5;
}
.dialogBox{
  position: relative;
  background: #fff;
  width:50%;
  height:40%;
  border-radius: 5px;
  margin:5px auto;
  top: 100px;
  input{
    font-size: 14px;
    height: 2.7em;
    border-radius: 4px;
    border:1px solid #c8cccf;
    color:#6a6f77;
    outline: none;
    text-align: left;
    padding:0 1em;
    text-decoration:none;
    width: 100%;
  }

}
.dialog-title{
  text-align: left;
  margin-left: 30px;
  font-weight: bold;
  font-size: 20px;
}
.dialog-content {
  margin-left: auto;
  margin-right: auto;
     tr{
       text-align: left;
       td{
         margin-left: 0px;
       }
     }

}
.dialog-footer{
  button{
    background-color: #4c78c4;
    margin-right: 10px;
    width: 90px;
    height: 35px;
    border: 1px solid #4c78c4;
    margin-top: 25px;
    color:#fff;

  }
}

</style>