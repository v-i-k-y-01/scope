<template>
<h1>Article Component</h1>
</template>

<script>
export default{
    name: 'Article',
    props: {
        title:{
            type: String,
            required: true
        },
        Author:{
            type: String,
            
        }
}
}
</script>

