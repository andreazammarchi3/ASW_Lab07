<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ChildCmp",
    props:['childServerStatus'],
    emits:['status-changed'],
    data(){
        return {
            serverStatus: this.childServerStatus,
            counter: 0
        }
    },
    methods:{
        changeStatus(){
            /*if(this.serverStatus==="online"){
                this.serverStatus="offline";
            }else{
                this.serverStatus="online";
            }*/
            this.counter++;
            this.$emit('status-changed',this.counter);
        }
    }
})
</script>

<template>
    <button @click="changeStatus"> Change</button>
    <div>
        Status: {{ childServerStatus }}
    </div>
</template>
