<template>
    <div>
        <div class="row">
            <div class="progress-bar" v-bind:style="{ 'width': computeProgress +'vw'}">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'ProgressBar',
    props: {
        progress: Object,
    },
    mounted(){
    },
    computed : {
        computeProgress(){
           return (this.progress.step / this.progress.totalSteps) * 100;
        }
    }
}
</script>

<style>
 .progress-bar {
    height: 5px;
    background-color: #B7684E;
 }

</style>


    
