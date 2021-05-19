<template>
    <div>
        <h3 class="text-center">Create Customer</h3>
        <div class="row">
            <div class="col-md-6">
                <form class="review-form" @submit.prevent="addCustomer">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="customer.name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="customer.email">
                    </div>
                  
                    <br>
                    <div class="form-group">
                        <div style='border:2px solid black'>
                            <ckeditor :editor="editor" v-model="customer.detail" :config="editorConfig"></ckeditor>
                        </div>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require('axios').default;
import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';
export default {
    
  name: 'home',
 data() {
        return {
            customer: {
                name: '',
                email: '',
                detail: ''
            },
            editor: DocumentEditor,
        }
    },

    methods: {
        addCustomer(){
            axios.post('http://localhost:8000/api/customers', this.customer)
                    .then(response => (
                        this.$router.push({ name: 'listcustomer' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
        }
    }
}
</script>