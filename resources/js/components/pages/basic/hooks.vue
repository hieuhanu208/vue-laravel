<template>
   <div>
        <h1 ref="myref">My hook tutorials</h1>
    <p>My name is {{name}}</p>
   </div>
</template>

<script>
export default {
    data() {
        return {
            name: "ssssssss"
        }
    },

    created() {
        console.log(this.name);
    },
    mounted() {
        console.log(this.$refs.myref)
    }
}
</script>