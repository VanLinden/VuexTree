<template>
  <div :list="nodes">
    <div 
      v-for="node in nodes"
      :key="node.name"
      :style="{'margin-left': `${depth * 20}px`}"
      class="node"
      >
      <span @click="nodeClicked(node)">{{isExpanded(node) ? '&#9660;' : '&#9658;'}}</span>
      <span>{{node.name}}</span>
      <img @click="nodeDelete(node)" src="../assets/Delete.png" style="width:30px; float:right;" />
      <TreeBrowser 
        v-if="isExpanded(node) && node.children"
        :nodes="node.children"
        :depth="depth + 1"
        @onClick="(node) => $emit('onClick', node)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TreeBrowser",
  props: {
    nodes: Array,
    depth: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getNumbers() {
      return this.$store.getters.getNumbers;
    }
  },
  data() {
    return {
      expanded: [],
    };
  },
  methods: {
    isExpanded(node) {
      console.log('node', node)
      return this.expanded.indexOf(node) !== -1;
    },
    nodeClicked(node) {
      console.log('node', node)
      if (!this.isExpanded(node)) {
        this.expanded.push(node);
      } else {
        this.expanded.splice(this.expanded.indexOf(node));
      }
    },
    nodeDelete(node) {
      this.$store.commit('DELETE_NODE', node)
    },
  }
};
</script>

<style scoped>
.node {
  text-align: left;
  font-size: 18px;
}

.type {
  margin-right: 10px;
}
</style>

