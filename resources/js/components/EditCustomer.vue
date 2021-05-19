<template>
    <div>
        <h3 class="text-center">Edit Customer Details</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateCustomer">
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
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    const axios = require('axios').default;
    import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';
    export default {
        data() {
            return {
                customer: {},
                editor: DocumentEditor,
            }
        },
        created() {
            axios
                .get(`http://localhost:8000/api/customers/${this.$route.params.id}`)
                .then((res) => {
                    this.customer = res.data;
                });
        },
        methods: {
            updateCustomer() {
                axios
                    .patch(`http://localhost:8000/api/customers/${this.$route.params.id}`, this.customer)
                    .then((res) => {
                        this.$router.push({ name: 'listcustomer' });
                    });
            }
        }
    }
</script>