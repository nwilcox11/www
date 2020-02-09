import { terser } from 'rollup-plugin-terser';
import parseMarkdown from './plugins/rollup-plugin-parse-markdown';

const prod = process.env.BUILD === 'production';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: prod ? 'prod' : 'dev',
    plugins: [prod && terser(), parseMarkdown()]
  }
};
