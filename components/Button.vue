<template>
  <button :type="type" class=" py-2.5 w-52 bg-primaryColor text-whiteColor transition-all cursor-pointer border-none rounded-md hover:bg-whiteColor hover:text-primaryColor"><slot/></button>
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