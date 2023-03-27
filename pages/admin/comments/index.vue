<template lang="">
  <div>
    <commentTable :thead="['Name', 'Text','Status','Change Status', 'Delete']">
      <template #tbody>
        <tr v-for="comment in comments" :key="comment.id">
          <td>
            <span>{{comment.name}}</span>
          </td>
          <td>
            <span>{{comment.text}}</span>
          </td>
          <td>
            <span v-if="comment.status" class="status true">Publish</span>
            <span v-else class="status false">Hide</span>
          </td>
          <td>
            <span @click="changeComment(comment.id)" class="link">Change Status</span>
          </td>
          <td>
            <span @click="deleteComment(comment.id)" class="link">Delete Status</span>
          </td>
        </tr>
      </template>
    </commentTable>
  </div>
</template>
<script>
import commentTable from "@/components/Admin/CommentTable.vue";
export default {
  components: {
    commentTable,
  },
  layout:'admin',
  data() {
    return {
      comments:[
        {id:1,name:'Alex', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status:true},
        {id:2,name:'Evgenii', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', status:false}
      ]
    };
  },
  layout: "admin",
  methods: {
    changeComment(id) {
      return this.comments.forEach(item => {
        if(id === item.id){
         return item.status = !item.status
        }
      });
    },
    deleteComment (id){
      console.log(`delete comment ${id}`);
    }
  },
};
</script>
<style lang=""></style>
