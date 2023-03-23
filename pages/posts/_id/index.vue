<template lang="">
    <div>
        <h1>user id is: {{ $route.params.id }}</h1>
    </div>
</template>
<script>
export default {
    validate ({params}) {
        return /^\d+$/.test(params.id)
    }
}
</script>
<style lang="">

</style>