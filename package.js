Package.describe({
  name: 'heaven7:wsl-email',
  version: '0.0.1',
  summary: 'Email package',
  git: 'https://github.com/heaven7/wsl-email.git',
  documentation: 'README.md'
})

both = ['client','server'],
    packages = [
        'email',
        'cmather:handlebars-server@2.0.0',
        'meteorhacks:ssr@2.2.0'
    ]

Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages, both)
    api.imply(packages)

    api.addFiles([
        'lib/server/startup.js',
        'lib/server/methods.js'
    ], 'server')
})
