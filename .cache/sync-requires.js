
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\wsutt\\OneDrive\\Documents\\GitHub\\PortfolioSite\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\wsutt\\OneDrive\\Documents\\GitHub\\PortfolioSite\\src\\pages\\index.js")),
  "component---src-pages-markdown-remark-frontmatter-slug-jsx": preferDefault(require("C:\\Users\\wsutt\\OneDrive\\Documents\\GitHub\\PortfolioSite\\src\\pages\\{markdownRemark.frontmatter__slug}.jsx")),
  "component---src-pages-projects-js": preferDefault(require("C:\\Users\\wsutt\\OneDrive\\Documents\\GitHub\\PortfolioSite\\src\\pages\\projects.js"))
}

