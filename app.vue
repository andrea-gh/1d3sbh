<template>
  <div>
    <h1>Blog Posts</h1>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="loading">Loading...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.Title }}</h2>
        <!-- Ensure Title is correctly mapped -->
        <p>{{ post.Content }}</p>
        <!-- Ensure Content is correctly mapped -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

const { $directus } = useNuxtApp();

onMounted(async () => {
  try {
    console.log('Fetching blog posts from Directus...');
    const response = await $directus.get('/items/Test_Blog_Posts');
    console.log('Response:', response);
    posts.value = response.data.data; // Ensure this line correctly sets the posts array
  } catch (err) {
    console.error('Error fetching blog posts:', err);
    console.error(
      'Error details:',
      err.response ? err.response.data : err.message
    );
    error.value = 'Failed to fetch blog posts';
  } finally {
    loading.value = false;
  }
});
</script>

<style>
h1 {
  font-family: Arial, sans-serif;
}
h2 {
  color: #333;
}
</style>
