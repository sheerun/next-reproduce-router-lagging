module.exports = {
  webpack: (config, { dev }) => {
    config.externals['foo'] = '{}'

    // Disable resolving mjs modules for now
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    })

    return config
  }
}
