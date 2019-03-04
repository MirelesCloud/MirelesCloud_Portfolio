const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'MirelesCloud', // Navigation and Site Title
  siteTitleAlt: 'MirelesCloud', // Alternative Site title for SEO
  siteTitleShort: 'MirelesCloud', // short_name for manifest
  siteHeadline: 'Building blazing fast websites', // Headline for schema.org JSONLD
  siteUrl: 'https://mirelescloud.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteIconSmall: '/favicon-192x192.png', // Used for Manifest
  siteIconLarge: '/favicon-512x512.png',  //Used for Manifest
  siteDescription: 'MirelesCloud one page website with Parallax effect',
  author: 'MirelesCloud', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@AlexMireles310', // Twitter Username
  ogSiteName: 'MirelesCloud', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.indigo,
  backgroundColor: tailwind.colors.indigo,
}
