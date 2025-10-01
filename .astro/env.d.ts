declare module 'astro:env/client' {
	export const GA_MEASUREMENT_ID: string;	
}declare module 'astro:env/server' {
	export const SANITY_PROJECT_ID: string;	
	export const SANITY_DATASET: string;	
	export const SANITY_API_VERSION: string;	
	export const SANITY_TOKEN: string;	
	export const CONTACT_EMAIL: string;	
	export const SITE_URL: string;	
}