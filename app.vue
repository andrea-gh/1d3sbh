<template>
  <div :style="{ '--primary-color': primaryColor }" class="container">
    <h1 class="title">Blog Posts</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else-if="loading" class="loading">Loading...</div>
    <div v-else class="posts">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2 class="post-title">{{ post.Title }}</h2>
        <p class="post-content">{{ post.Content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const loading = ref(true);
const error = ref(null);
const primaryColor = ref(''); // Initially empty

const { $directus } = useNuxtApp();

onMounted(async () => {
  try {
    console.log('Fetching blog posts from Directus...');
    const response = await $directus.get('/items/Test_Blog_Posts');
    console.log('Response:', response);
    posts.value = response.data.data;

    console.log('Fetching primary color from Directus...');
    const globalResponse = await $directus.get('/items/Test_Global');
    console.log('Global Response:', globalResponse);
    primaryColor.value = globalResponse.data.data[0]['primary_color'];
  } catch (err) {
    console.error('Error fetching blog posts or primary color:', err);
    console.error('Error details:', err.response ? err.response.data : err.message);
    error.value = 'Failed to fetch data';
  } finally {
    loading.value = false;
  }
});
</script>