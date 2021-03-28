const config = {}

config.net = {}

config.net.host = process.env.HOST || '0.0.0.0'
config.net.port = process.env.PORT || 80
config.net.secure = process.env.SECURE || false
config.net.domain = process.env.DOMAIN || 'sub.domain.com'
config.net.maxsocket = process.env.MAXSOCKET || 100
config.net.redirect = process.env.REDIRECT || 'https://domain.com/'

module.exports = config
