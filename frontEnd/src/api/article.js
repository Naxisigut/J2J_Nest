import request from "@/utils/request";

/**
 * 获得文章路径
 * @param {*} articleId 文章ID
 * @returns
 */
export const getArtPathAPI = (articleId) =>
  request({
    url: "/article",
    params: { articleId },
  });

export const getArtMdAPI = (path) =>
  request({
    url: path,
  });

/**
 * 获得文章列表
 * @returns Promise
 */
export const getArtListAPI = () =>
  request({
    url: "/article/list",
  });
