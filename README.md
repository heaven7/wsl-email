### Emails package

> This package is meant not to work 'standalone', but as a part of [wsl] (https://github.com/heaven7/wsl).

If you want to use it in your project try this:

## Installation
This package depends on some others, so to get it fully function add these packages:
```bash
meteor add heaven7:wsl-email
```

## Configuration
Set your mail_url on the server via
```
Meteor.startup(() =>
    process.env.MAIL_URL='smtp://your_username:your_password@smtp.your_server.com:port'
})
```
or settings.json. Aadd a file on your meteor root named 'settings.json' with
```
{
  "mail_url": "smtp://your_username:your_password@smtp.your_server.com:port"
}
```
and start meteor like this
```bash
meteor --settings settings.json
```
