'use strict';

const LanguageTranslatorV3 = require('../../language-translator/v3');
const authHelper = require('../resources/auth_helper.js');
const auth = authHelper.auth;
const describe = authHelper.describe; // this runs describe.skip if there is no auth.js file :)
const TWENTY_SECONDS = 20000;

// todo: figure out why these started all failing with Not Authorized
describe('language_translator_integration', function() {
  jest.setTimeout(TWENTY_SECONDS * 2);

  auth.language_translator.v3.version = '2018-05-01';
  const language_translator = new LanguageTranslatorV3(auth.language_translator.v3);

  it('listModels()', function(done) {
    language_translator.listModels(null, done);
  });

  it('translate()', function(done) {
    const params = {
      text: 'this is a test',
      source: 'en',
      target: 'es',
    };
    language_translator.translate(params, done);
  });

  it('listIdentifiableLanguages()', function(done) {
    language_translator.listIdentifiableLanguages(null, done);
  });

  it('identify()', function(done) {
    const params = {
      text: 'this is an important test that needs to work',
    };
    language_translator.identify(params, done);
  });
});
