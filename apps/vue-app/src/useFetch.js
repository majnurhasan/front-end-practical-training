import { isRef, ref, watch } from "vue";

const useFetch = (url) => {
  const loading = ref(false);
  const error = ref(null);
  const data = ref([]);

  const fetchData = async () => {
    try {
      loading.value = true;
      error.value = null;

      const res = await fetch(isRef(url) ? url.value : url);
      data.value = await res.json();
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  fetchData();

  if (isRef(url)) {
    watch(url, fetchData);
  }

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
