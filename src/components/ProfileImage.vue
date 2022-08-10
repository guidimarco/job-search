<template>
  <img :src="imageLink" class="p-0 w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYIzeFzk4SsFilV4J_yWZrn94naCqMsJ45ke7bF5-RIMV3F6piBi2ws0TxeuDBZ3ZJIA&usqp=CAU",
    };
  },
};
</script>
