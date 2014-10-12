Package.describe({
  summary: "Visual connectivity for webapps with jsPlump",
  version: "1.6.4_3",
  git: "https://github.com/udondan/meteor-jsPlump.git",
  environments: 'client'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
   api.use('jquery', 'client');
  api.add_files('vendor/jsPlump/dist/js/jquery.jsPlumb-1.6.4.js', 'client');
});
