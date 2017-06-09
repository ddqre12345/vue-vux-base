<template>
    <!-- 主界面部分 -->
    <transition name="fade">
        <div class="index">
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
  export default {
    components: {
    },
    computed: {
    }
  };
</script>
