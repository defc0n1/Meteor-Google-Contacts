Package.describe({
  summary: "Google-Contacts package"
});

Package.on_use(function (api) {
  api.add_files(['google-contacts.js'], 'server');
  if(api.export)
    api.export('GoogleContacts');
});

Npm.depends({
  "underscore": "1.5.2"
});
