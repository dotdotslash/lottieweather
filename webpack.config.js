const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
	entry: [
		'./src/index.js'
	],
  	output: {
    	path: path.resolve(__dirname, 'dist'),
    	filename: 'bundle.js'
  	},
  	module: {
    	loaders: [
			{
   				exclude: /node_modules/,
				test: /\.js$/,
      			loader: 'babel-loader',
      			query: {
        	    	presets: ['react', 'es2015', 'stage-1']
      			}
    		},
            {
                 test:/\.(s*)css$/,
                 use:['style-loader','css-loader', 'sass-loader']
            }
		]
		
  	},
	resolve: {
    	extensions: ['.js', '.jsx']
 	},
	devServer: {
    	historyApiFallback: true,
    	contentBase: './'
  	}
};
