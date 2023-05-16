<script>
import {defineComponent} from 'vue'
import ChildCmp from "@/components/ChildCmp.vue";

export default defineComponent({
    name: "ParentCmp",
    components: {ChildCmp},
    data(){
        return {
            serverStatus: "online",
            clickByChild: 0
        }
    },
    methods:{
        changeStatus(){
            if(this.serverStatus==="online"){
                this.serverStatus="offline"
            }else{
                this.serverStatus="online";
            }
        },
        changeChildStatus(counter){
            this.changeStatus();
            this.clickByChild = counter;
        }
    }
})
</script>

<template>
    <div>
        <button @click.stop="changeStatus"> Change</button>
        <div>
          Status: {{ serverStatus }} {{ clickByChild}} by child
        </div>
    </div>
  <hr>
  <ChildCmp :child-server-status="serverStatus" @status-changed="changeChildStatus"></ChildCmp>
</template>

<style scoped>

</style>