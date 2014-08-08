Package.describe({
  summary: "Visual connectivity for webapps with jsPlump",
  environments: 'client'
});

Package.on_use(function (api) {
  api.add_files('vendor/jsPlump/dist/js/jquery.jsPlumb-1.6.2.js', 'client');
});
