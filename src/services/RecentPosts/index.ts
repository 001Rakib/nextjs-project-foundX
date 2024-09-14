import envConfig from "@/src/config/envConfig";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?limit=9&sortBy=-createdAt`
  );
  return res.json();
};
