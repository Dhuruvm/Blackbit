import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION, SANITY_TOKEN } from 'astro:env/server';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: !SANITY_TOKEN,
  ...(SANITY_TOKEN && { token: SANITY_TOKEN }),
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getProjects() {
  return await sanityClient.fetch(`*[_type == "project"] | order(publishedAt desc)`);
}

export async function getProject(slug: string) {
  return await sanityClient.fetch(`*[_type == "project" && slug.current == $slug][0]`, { slug });
}

export async function getBlogPosts() {
  return await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc)`);
}

export async function getBlogPost(slug: string) {
  return await sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug });
}

export async function getServices() {
  return await sanityClient.fetch(`*[_type == "service"] | order(order asc)`);
}

export async function getTeamMembers() {
  return await sanityClient.fetch(`*[_type == "teamMember"] | order(order asc)`);
}

export async function getTestimonials() {
  return await sanityClient.fetch(`*[_type == "testimonial"] | order(_createdAt desc)`);
}

export async function getSiteSettings() {
  return await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
}
