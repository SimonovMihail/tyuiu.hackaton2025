<template>
    <el-scrollbar ref="scrollbarRef" height="100vh" always @scroll="scroll">
        <Header/>
        <div class="wrapper">
        <div class="wrapper__main-container">
            <h1>Регистрация</h1>
            <el-form
              :model="formModel"
              :rules="rules"
              ref="form"
              class="registration-form"
              label-width="100px"
              @submit.prevent="submitForm"
            >
            <el-form-item label="Логин" prop="login">
              <el-input v-model="formModel.login" clearable></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
              <el-input v-model="formModel.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="Пароль" prop="password">
              <el-input type="password" v-model="formModel.password" clearable></el-input>
            </el-form-item>
            <el-form-item label="Подтвердите пароль" prop="confirmPassword">
              <el-input
              class="confirm-password-input"
              type="password"
              v-model="formModel.confirmPassword"
              clearable
              ></el-input>
            </el-form-item>
            <!-- <el-form-item>
                <el-button type="primary" @click="submitForm">Зарегистрироваться</el-button>
            </el-form-item> -->
            <div class="link-container">
              <el-link type="primary">Скачать документ для заполнения</el-link>
            </div>
            <div class="button-container">
              <el-button class="button-register" type="primary" @click="submitForm"
                  >Зарегистрироваться</el-button
              >
              <el-button class="button-move-to-login" type="info" @click="Move_To_Login"
                  >Войти в существующий аккаунт</el-button
              >
            </div>
            </el-form>
        </div>
        </div>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElForm, ElInput, ElButton, ElScrollbar, FormInstance, FormRules } from 'element-plus';
import Header from "@/components/Header.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const formModel = ref({
  login: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const confirmPasswordValidator = (rule, value, callback) => {
  if (value !== formModel.value.password) {
    callback(new Error('Пароли не совпадают'));
  } else {
    callback();
  }
};

const rules: FormRules = {
  login: [
    { required: true, message: 'Пожалуйста, введите логин', trigger: 'blur' },
    { min: 3, max: 15, message: 'Логин должен быть от 3 до 15 символов', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Пожалуйста, введите email', trigger: 'blur' },
    { type: 'email', message: 'Некорректный email', trigger: ['blur', 'change'] }
  ],
  password: [
    { required: true, message: 'Пожалуйста, введите пароль', trigger: 'blur' },
    { min: 6, message: 'Пароль должен содержать не менее 6 символов', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: 'Пожалуйста, подтвердите пароль', trigger: 'blur' },
    { validator: confirmPasswordValidator, trigger: 'blur' }
  ]
};

const formRef = ref<FormInstance>();

const submitForm = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log('Form sent', formModel.value);
      console.log(formModel.value.login, formModel.value.email, formModel.value.password);
    } else {
      console.error('Form error');
      alert('Заполните недостающие поля!');
    }
  });
};

const scroll = ({ scrollTop }) => {
  value.value = scrollTop;
};

const value = ref(0);

function Move_To_Login() {
  router.push({
    path: '/login'
  });
}
</script>


<style>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .wrapper__main-container {
  background-color: #2e2e2e !important;
  color: #9e9e9e;
  margin: 10% auto;
  padding: 20px;
  box-shadow: 5px 5px 20px black;
  width: 450px;
  text-align: center;
  background-color: #fff;
  border-radius: 2%;
}

.wrapper__main-container .el-form-item__label {
  color: #9e9e9e;
}

.el-input__wrapper {
  background-color: #222222;
}

.link-container {
  padding: 0px 15px 15px 15px;
  vertical-align: middle;
}

.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
