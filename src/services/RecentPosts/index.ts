import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const fetchOption = {
    next: {
      tags: ["posts"],
    },
  };

  const res = await fetch(
    `${envConfig.baseApi}/items?limit=9&sortBy=-createdAt`,
    fetchOption
  );
  return res.json();
};
