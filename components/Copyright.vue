<template>
<div class=" w-full">
 <p class=" text-center text-xs mt-12 tracking-widest normal-case	">© Copyright <a :href="`email:${this.$global.authorEmail}`" target="_blank" class=" text-primaryColor transition-all hover:text-lightColor">{{ this.$global.copyright }}</a> {{ new Date().getFullYear() }}</p>
</div>
</template>

