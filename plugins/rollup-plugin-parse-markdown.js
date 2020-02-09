export default function parseMarkdown() {
	return {
		name: 'rollup-plugin-parse-markdown',
		renderStart(outputOptions, inputOptions) {
			console.log('renderStart::outputOptions', outputOptions)
			console.log('renderStart::inputOptions', inputOptions)
		},
		outputOptions(options) {
			console.log('outputOptions::options', options)
		}
	}
}
