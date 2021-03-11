import global from "@/blog.config.json"

export default async ($content, params, error) => {
  const currentPage = parseInt(params.page);

  const perPage = global.blog.articleCountPerPage;

  const allArticles = await $content("articles").only(['title', 'slug', 'description', 'createdAt', 'urlImage']).fetch();

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }

    return (currentPage - 1) * perPage;
  };
  
  const paginatedArticles = await $content("articles")
    .only(['title', 'slug', 'description', 'createdAt', 'urlImage'])
    .sortBy("createdAt", "desc")
    .limit(perPage)
    .skip(skipNumber())
    .fetch();
  if (currentPage === 0 || !paginatedArticles.length) {
    return error({
      statusCode: 404,
      message: "No articles found!"
    });
  }

  return {
    allArticles,
    paginatedArticles,
  };
};
