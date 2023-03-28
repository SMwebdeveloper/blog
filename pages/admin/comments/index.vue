<template lang="">
  <no-ssr>
    <commentTable
      :thead="['Name', 'Text', 'Status', 'Change Status', 'Delete']"
    >
      <template #tbody>
        <tr v-for="comment in comments" :key="comment.id">
          <td>
            <span>{{ comment.name }}</span>
          </td>
          <td>
            <span>{{ comment.text }}</span>
          </td>
          <td>
            <span v-if="comment.publish" class="status true">Publish</span>
            <span v-else class="status false">Hide</span>
          </td>
          <td>
            <span @click="changeComment(comment)" class="link"
              >Change Status</span
            >
          </td>
          <td>
            <span @click="deleteComment(comment.id)" class="link"
              >Delete Status</span
            >
          </td>
        </tr>
      </template>
    </commentTable>
  </no-ssr>
</template>
<script>
import commentTable from "@/components/Admin/CommentTable.vue";
import axios from "axios";

export default {
  components: {
    commentTable,
  },
  layout: "admin",
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.loadComments();
  },
  layout: "admin",
  methods: {
    loadComments() {
      axios
        .get(
          `https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json`
        )
        .then((res) => {
          let commentsArray = [];
          Object.keys(res.data).forEach((key) => {
            const comment = res.data[key];
            commentsArray.push({ ...comment, id: key });
          });
          this.comments = commentsArray;
          // console.log(commentsArray);
        });
    },
    changeComment(comment) {
      comment.publish = !comment.publish;
      axios.put(
        `https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${comment.id}.json`,
        comment
      );
    },
    deleteComment(id) {
      axios.delete(
        `https://blog-nuxt-eff9a-default-rtdb.asia-southeast1.firebasedatabase.app/comments/${id}.json`
      )
      .then(()=>this.loadComments())
    }
  },
};
</script>
<style lang=""></style>
