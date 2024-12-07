import pluginWebc from "@11ty/eleventy-plugin-webc";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import { IdAttributePlugin } from "@11ty/eleventy";
export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("_src");
	eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(IdAttributePlugin, {
        selector: "h2,h3,h4,h5,h6"
    });
    let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPassthroughCopy("CNAME");
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};