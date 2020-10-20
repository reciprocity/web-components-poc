# zen-webcomponents-test
Oct 2020, Wrap zenlib compos to web components and use them in new Angular and Vue app

## Simple web component test
To build web component run `/simple-vue-component/npm run build:mwc`.
This command will also run copy.sh that will copy build `dist/my-web-component.js` into each app.

## Angular app
Serve with `/angular-app/ng serve`. Build with `/angular-app/ng build`.

## Vue app
Serve with `npm run serve`. Build with `npm run build`.

# Size reports:

  File                            Size                                             Gzipped
*my-web-component*
  dist/my-web-component.min.js    8.73 KiB                                         3.72 KiB
  dist/my-web-component.js        30.05 KiB                                        8.18 KiB

*my-web-component - Vue inlined*
  dist/my-web-component.min.js    73.19 KiB                                        26.51 KiB
  dist/my-web-component.js        231.82 KiB                                       63.93 KiB

*multiselect*
  dist/my-web-component.min.js    100.41 KiB                                       28.59 KiB
  dist/my-web-component.js        166.34 KiB                                       42.07 KiB

*multiselect - Vue inlined*
  dist/my-web-component.min.js    229.08 KiB                                       73.82 KiB
  dist/my-web-component.js        566.37 KiB                                       152.64 KiB

*zenlib*
  dist/my-web-component.min.js    501.95 KiB                                       132.81 KiB
  dist/my-web-component.js        2802.01 KiB                                      776.84 KiB

*zenlib - Vue inlined*
  dist/zenlib-wcs.min.js    694.96 KiB                                          203.42 KiB
  dist/zenlib-wcs.js        3402.26 KiB                                         945.19 KiB


# To test Multiselect wc built within Zenlib...
To test Multiselect wc built with Zenlib command make symbolic links of `zenlib/dist` to  to `/vue-app/public/zenlib-wc` and `angular-app/src/assets/zenlib-wc`

simple component - build with wrapper: `simple/npm run build:mwc` - also copies js file
build dropdown with wrapper: `zenlib2/npm run build:multiselect-wc`

# Vue custom element lib
use .umd.js when building with **vue custom elements**
- Note: Doesn't pick up styles

To build my-web-component with vue custom element and copy it to vue and angular app:
`/simple-vue-custom-el/yarn build:custom-el`
