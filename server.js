/* eslint-disable */
import webpack from 'webpack'
import webpackConfig from './webpack.config'
import webpackDevServer from 'webpack-dev-server'

const PORT = process.env.PORT || 8080
const API_PORT = process.env.API_PORT || 3015

const webpackServer = new webpackDevServer(webpack(webpackConfig), {
  ...webpackConfig.devServer,
  proxy: {
    '/api/*': {
      target: `http://localhost:${API_PORT}`,
    },
  },
})

webpackServer.listen(PORT, 'localhost', () => {
  console.log('App listening at http://localhost:%s', PORT)
})
