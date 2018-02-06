module.exports = {
	entry: [
		'./src/index.js'
	],
  	output: {
    	path: __dirname,
    	publicPath: '/',
    	filename: 'bundle.js'
  	},
  	module: {
    	loaders: [
			{
   				exclude: /node_modules/,
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
