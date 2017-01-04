# a js seed project
this should be the template for js projects

- [x] the project should use npm as package manager
- [x] use babel as transpiler 
- [x] use es6
- [ ] has example
- [x] use angular 1.6
- [x] has unit test (mocha)
- [ ] has integration test (karma)
- [ ] has e2e test (protractor)
- [x] use eslint
- [x] use webpack as bundler
- [x] spearate dev and production settings
- [ ] mock json data and serve with jsonapi
- [x] bundle css file while dev and separate css file in production
- [ ] ~~use typescript~~

## Test setup

- [x] understand mocha
- [ ] understand karma
- [x] run mocha under es6
- [ ] run karma under es6
- [ ] integrate with webpack
- [ ] consider about e2e test

## Decisions

- [ ] ~~use typescript~~
- [?] use sass

# NOTES
run webpack through express using `webpack-dev-middleware`, and use `webpack-hot-middleware` to enable hot reload.
es6 is fine for migration to angular2
for now, only use mocha to do unit testing?