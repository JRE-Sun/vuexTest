<template>
    <div class="a">
        <div v-if="testValue=='home'">
            首页
            <!--to="item" 跳转到item,这个item需要在路由里面配置-->
            <router-link to="item">{{ testValue }}</router-link>
        </div>
        <div v-else>
            <!--绑定动态自定义属性 前面需要:-->
            <div v-for="(item,index) in itemDetail" v-if="index==itemNum" :data-index="index">
                <h2>题目:{{ item.title }}</h2>
                <p class="answer" v-for="(myitem,n) in item.item" :class="{'active' : isIndex == n}"
                   v-on:click="clickAnswerItem(n)">
                    <span>{{ getFormatInfo(n) }}</span>
                    {{ myitem }}
                </p>
            </div>
            <p v-if="itemNum<itemDetail.length-1" class="next-btn" v-on:click="nextBtnClick">下一个</p>
            <p v-else class="next-btn" v-on:click="submitBtnClick">交卷</p>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'Vuex';

    export default {
        name    : 'itemcontainer',
        // 子组件接受父组件传过来的值,需要采用props,使用方法和data里面的数据一致
        props   : ['testValue'],
        data() {
            return {
                isIndex: -1,
            }
        },
        computed: mapState(['itemNum', 'itemDetail']),
        methods : {
            ...mapActions([
                'addNum', 'initializeData',
            ]),
            clickAnswerItem(n) {
                this.isIndex = n;
            },
            getFormatInfo(index) {
                var array = ['A', 'B', 'C', 'D'];
                return array[index] + '.';
            },
            nextBtnClick() {
                var index = this.isIndex;
                // 默认第一题,现在点击下一题,需要改变 store 里面的状态
                if (index > -1) {
                    // 这里只需要传值.其他的操作需要写在store里面
                    this.addNum(index);
                } else {
                    alert('还没有选择答案');
                }
                this.isIndex = -1;
            },
            submitBtnClick() {
                this.nextBtnClick();
                // 交卷,跳到得分页面,这个score字符串,需要在路由里面之前 就配置好
                this.$router.push('score');
            },
        },
        created() {
            this.initializeData();
        }
    }
</script>

<style>
    p {
        cursor: pointer;
    }

    .answer.active {
        color: red;
    }

    .next-btn {
        background: green;
        width: 75%;
        border-radius: 10px;
        color: #FFF;
        padding: 10px 0;
        margin: 0 auto;
    }
</style>