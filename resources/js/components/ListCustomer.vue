<template>
    <div>
        <h2 class="text-center">Customers List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Detail</th>
                 <th>Actions</th> 
            </tr>
            </thead>
            <tbody>
            <tr v-for="customer in this.customers" :key="customer.id">
                <td>{{ customer.id }}</td>
                <td>{{ customer.name }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.detail }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editcustomer', params: { id: customer.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
   const axios = require('axios').default;
    export default {
        data() {
            return {
                customers: []
            }
        },
        created() {
            axios
                .get('http://localhost:8000/api/customers/')
                .then(response => {
                    this.customers = response.data;
                    console.log(this.customers);
                });
        },
        methods: {
            deleteCustomer(id) { 
                axios
                    .delete(`http://localhost:8000/api/customers/${id}`)
                    .then(response => {
                        let i = this.customers.map(data => data.id).indexOf(id);
                        this.customers.splice(i, 1)
                    });
            }
        }
    }
</script>