<template>
    <div>
        <p> 这里是score页面</p>
        <p>得分{{ getFormatInfo() }}</p>
    </div>
</template>

<script>
    import {mapState} from 'Vuex';

    export default {
        data() {
            return {}
        },
        computed: mapState(['answerid']),
        methods : {
            getFormatInfo() {
                var score = ['0', '0', '0', '1'], resault = 0;
                this.answerid.forEach(function (item, index) {
                    resault = (item == score[index]) ? ++resault : resault;
                });
                console.log(this.answerid);
                score = 25 * resault;
                return score;
            }
        }
    }
</script>

<style>

</style>