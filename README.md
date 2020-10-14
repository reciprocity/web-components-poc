# zen-webcomponents-test
Oct 2020, Wrap zenlib compos to web components and use them in new Angular and Vue app

## Simple web component test
To build web component run `/simple-vue-component/npm run build:mwc` and copy `dist/my-web-component.js` into desired app manually.

## Angular app
Serve with `/angular-app/ng serve`. Build with `/angular-app/ng build`.

## Vue app
Serve with `npm run serve`. Build with `npm run build`.

# Size reports:

  File                            Size                                             Gzipped
*my-web-component - Bare*
  dist/my-web-component.min.js    8.73 KiB                                         3.72 KiB
  dist/my-web-component.js        30.05 KiB                                        8.18 KiB

*my-web-component Vue inlined*
  dist/my-web-component.min.js    73.19 KiB                                        26.51 KiB
  dist/my-web-component.js        231.82 KiB                                       63.93 KiB
