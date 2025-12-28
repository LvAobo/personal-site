export const profile = {
	fullName: 'Aobo Lyu',
	title: 'Mr.',
	institute: 'Washington University in St. Louis',
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: 'Information Theory', description: 'Brief description of the research interest', field: 'information' },
		{ title: 'Control', description: 'Brief description of the research interest', field: 'control' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'aobo.lyu@wustl.edu',
	linkedin: '',
	x: '',
	bluesky: '',
	github: 'https://github.com/LvAobo',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=jOg4fJEAAAAJ&hl=zh-CN&newwindow=1',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0002-5565-5747',
}

export const template = {
	website_url: 'https://aobo.page', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'emerald', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'business', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
