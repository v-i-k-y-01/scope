<template>
<div id="form-container">
    <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name" v-model="formvalues.name">
        </div>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="formvalues.email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="formvalues.password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>


<div id="reference">
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
        </tr>
        <tr>
            <td>{{formvalues.name}}</td>
            <td>{{formvalues.email}}</td>
            <td>{{formvalues.password}}</td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    data() {
        return {
            formvalues: {
            name: '',
            email: '',
            password: ''
        }
    }
    }
    
}
</script>

<style>
#form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease 0s;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

#reference {
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f8f9fa;
}

#reference table {
    width: 100%;
    border-collapse: collapse;
}

#reference th, #reference td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

#reference th {
    background-color: #f2f2f2;
}
</style>