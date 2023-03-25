<template>
    <section class="intro">
        <h1>{{title}}</h1>
    </section>
</template>
<script>
export default {
    props: {
        title: {
            type:String,
            required:true
        }
    }
}
</script>
<style lang="scss">
.intro{
    width: 100%;
    margin: 30px 0;
    text-align: center;
    color: #ffff;
    background: #4b40e3;

    h1{
        font-size: 26px;
    }
}
</style>