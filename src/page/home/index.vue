<template>
    <div class="home-contenter">
        <!--这里这个test-value是给itemContainer组件传值-->
        <item-container test-value="home"></item-container>
    </div>
</template>

<script>
    // 引入组件
    import itemContainer from '../../components/itemcontainer'

    export default {
        name      : 'home',
        components: {
            // 使用组件
            itemContainer
        },
    }
</script>

<style>
    .home-contenter {

    }
</style>