import path from 'path';
import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const newsPost = path.resolve('./src/templates/newsPost.tsx');

  const result = await graphql<Queries.AllNewsPostsInNodeQuery>(`
    query AllNewsPostsInNode {
      allContentfulPost {
        nodes {
          slug
          title
          createdAt
        }
      }
    }
  `);

  const { errors, data } = result;

  if (errors) {
    reporter.panicOnBuild(`There was an error loading your Contentful posts`, errors);

    return;
  }
  if (!data) {
    reporter.panicOnBuild('No data returned from Contentful');

    return;
  }

  const posts = data.allContentfulPost.nodes;

  posts.forEach((post, index) => {
    createPage({
      path: `/news/${post.slug}`,
      component: newsPost,
      context: {
        post,
        index,
        slug: post.slug,
      },
    });
  });
};
