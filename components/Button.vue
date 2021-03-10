<template>
  <button :type="type"><slot/></button>
</template>

<script>
export default {
props: {
    type: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    }
},
}
</script>

<style lang="scss" scoped>
button {
    padding: 10px 0;
    width: 200px;
    background-color: $green;
    color: $white;
    transition: 0.3s;
    cursor: pointer;
    border: none;
    border-radius: 5px;

    &:hover {
    transition: 0.2s;
    background-color: $white;
    color: $green;
    }
}
</style>