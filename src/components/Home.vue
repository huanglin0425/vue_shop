<template>
    <div>
        <el-button type="info" @click="logout">退出</el-button>
        <div>1234</div>
    </div>
</template>

<script>
export default {
    methods:{
        logout(){            
            // window.sessionStorage.removeItem("token");
            window.sessionStorage.clear("token");
            this.$router.push("/login")
        }
    }
}
</script>
<style lang="less" scoped>

</style>

