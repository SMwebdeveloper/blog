<template lang="">
     <button class='btn' :class="$listeners" v-bind="$attrs">
        <slot/>
     </button>
</template>
<script>
export default {
    props:{
        btnClass:{
            type:String,
            default:'btnPrimary'
        }
    }
}
</script>
<style lang="">
    
</style>