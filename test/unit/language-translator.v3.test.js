/**
 * Copyright 2019 IBM All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const helper = require('ibm-cloud-sdk-core');
const LanguageTranslatorV3 = require('../../language-translator/v3');
const utils = require('../resources/unitTestUtils');

const {
  getOptions,
  checkUrlAndMethod,
  checkCallback,
  checkMediaHeaders,
  missingParamsSuccess,
  expectToBePromise,
  missingParamsError,
  checkForEmptyObject,
  checkRequiredParamsHandling,
  checkDefaultSuccessArgs,
} = utils;

const noop = () => {};

const service = {
  username: 'batman',
  password: 'bruce-wayne',
  url: 'https://gateway.watsonplatform.net/language-translator/api/language-translator/api',
  version: '2018-10-18',
};

const languageTranslator = new LanguageTranslatorV3(service);
const createRequestMock = jest.spyOn(languageTranslator, 'createRequest');
const missingParamsMock = jest.spyOn(helper, 'getMissingParams');

// dont actually create a request
createRequestMock.mockImplementation(noop);

afterEach(() => {
  createRequestMock.mockReset();
  missingParamsMock.mockClear();
});

describe('translate', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const text = 'fake_text';
      const model_id = 'fake_model_id';
      const source = 'fake_source';
      const target = 'fake_target';
      const params = {
        text,
        model_id,
        source,
        target,
      };

      // invoke method
      languageTranslator.translate(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/translate', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'application/json';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.body['text']).toEqual(text);
      expect(options.body['model_id']).toEqual(model_id);
      expect(options.body['source']).toEqual(source);
      expect(options.body['target']).toEqual(target);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const text = 'fake_text';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        text,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.translate(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const text = 'fake_text';
      const params = {
        text,
      };

      // invoke method
      const translatePromise = languageTranslator.translate(params);
      expectToBePromise(translatePromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.translate(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['text'];

      languageTranslator.translate({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['text'];

      const translatePromise = languageTranslator.translate();
      expectToBePromise(translatePromise);

      translatePromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('listIdentifiableLanguages', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const params = {};

      // invoke method
      languageTranslator.listIdentifiableLanguages(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/identifiable_languages', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.listIdentifiableLanguages(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const params = {};

      // invoke method
      const listIdentifiableLanguagesPromise = languageTranslator.listIdentifiableLanguages(params);
      expectToBePromise(listIdentifiableLanguagesPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
    test('should not have any problems when no parameters are passed in', () => {
      // invoke the method
      languageTranslator.listIdentifiableLanguages({}, noop);
      checkDefaultSuccessArgs(createRequestMock);
    });

    test('should use argument as callback function if only one is passed in', () => {
      // invoke the method
      languageTranslator.listIdentifiableLanguages(noop);
      checkDefaultSuccessArgs(createRequestMock);
    });
  });
});

describe('identify', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const text = 'fake_text';
      const params = {
        text,
      };

      // invoke method
      languageTranslator.identify(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/identify', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'text/plain';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.body).toEqual(text);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const text = 'fake_text';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        text,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.identify(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const text = 'fake_text';
      const params = {
        text,
      };

      // invoke method
      const identifyPromise = languageTranslator.identify(params);
      expectToBePromise(identifyPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.identify(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['text'];

      languageTranslator.identify({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['text'];

      const identifyPromise = languageTranslator.identify();
      expectToBePromise(identifyPromise);

      identifyPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('listModels', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const source = 'fake_source';
      const target = 'fake_target';
      const default_models = 'fake_default_models';
      const params = {
        source,
        target,
        default_models,
      };

      // invoke method
      languageTranslator.listModels(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/models', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.qs['source']).toEqual(source);
      expect(options.qs['target']).toEqual(target);
      expect(options.qs['default']).toEqual(default_models);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.listModels(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const params = {};

      // invoke method
      const listModelsPromise = languageTranslator.listModels(params);
      expectToBePromise(listModelsPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
    test('should not have any problems when no parameters are passed in', () => {
      // invoke the method
      languageTranslator.listModels({}, noop);
      checkDefaultSuccessArgs(createRequestMock);
    });

    test('should use argument as callback function if only one is passed in', () => {
      // invoke the method
      languageTranslator.listModels(noop);
      checkDefaultSuccessArgs(createRequestMock);
    });
  });
});

describe('createModel', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const base_model_id = 'fake_base_model_id';
      const forced_glossary = 'fake_forced_glossary';
      const parallel_corpus = 'fake_parallel_corpus';
      const name = 'fake_name';
      const params = {
        base_model_id,
        forced_glossary,
        parallel_corpus,
        name,
      };

      // invoke method
      languageTranslator.createModel(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/models', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'multipart/form-data';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.formData['forced_glossary'].data).toEqual(forced_glossary);
      expect(options.formData['forced_glossary'].contentType).toEqual('application/octet-stream');
      expect(options.formData['parallel_corpus'].data).toEqual(parallel_corpus);
      expect(options.formData['parallel_corpus'].contentType).toEqual('application/octet-stream');
      expect(options.qs['base_model_id']).toEqual(base_model_id);
      expect(options.qs['name']).toEqual(name);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const base_model_id = 'fake_base_model_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        base_model_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.createModel(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const base_model_id = 'fake_base_model_id';
      const params = {
        base_model_id,
      };

      // invoke method
      const createModelPromise = languageTranslator.createModel(params);
      expectToBePromise(createModelPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.createModel(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['base_model_id'];

      languageTranslator.createModel({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['base_model_id'];

      const createModelPromise = languageTranslator.createModel();
      expectToBePromise(createModelPromise);

      createModelPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('deleteModel', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const model_id = 'fake_model_id';
      const params = {
        model_id,
      };

      // invoke method
      languageTranslator.deleteModel(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/models/{model_id}', 'DELETE');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['model_id']).toEqual(model_id);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const model_id = 'fake_model_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        model_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.deleteModel(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const model_id = 'fake_model_id';
      const params = {
        model_id,
      };

      // invoke method
      const deleteModelPromise = languageTranslator.deleteModel(params);
      expectToBePromise(deleteModelPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.deleteModel(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['model_id'];

      languageTranslator.deleteModel({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['model_id'];

      const deleteModelPromise = languageTranslator.deleteModel();
      expectToBePromise(deleteModelPromise);

      deleteModelPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getModel', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const model_id = 'fake_model_id';
      const params = {
        model_id,
      };

      // invoke method
      languageTranslator.getModel(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/models/{model_id}', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['model_id']).toEqual(model_id);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const model_id = 'fake_model_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        model_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getModel(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const model_id = 'fake_model_id';
      const params = {
        model_id,
      };

      // invoke method
      const getModelPromise = languageTranslator.getModel(params);
      expectToBePromise(getModelPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getModel(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['model_id'];

      languageTranslator.getModel({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['model_id'];

      const getModelPromise = languageTranslator.getModel();
      expectToBePromise(getModelPromise);

      getModelPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('listDocuments', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const params = {};

      // invoke method
      languageTranslator.listDocuments(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.listDocuments(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const params = {};

      // invoke method
      const listDocumentsPromise = languageTranslator.listDocuments(params);
      expectToBePromise(listDocumentsPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
    test('should not have any problems when no parameters are passed in', () => {
      // invoke the method
      languageTranslator.listDocuments({}, noop);
      checkDefaultSuccessArgs(createRequestMock);
    });

    test('should use argument as callback function if only one is passed in', () => {
      // invoke the method
      languageTranslator.listDocuments(noop);
      checkDefaultSuccessArgs(createRequestMock);
    });
  });
});

describe('translateDocument', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const file = 'fake_file';
      const file_content_type = 'fake_file_content_type';
      const model_id = 'fake_model_id';
      const source = 'fake_source';
      const target = 'fake_target';
      const document_id = 'fake_document_id';
      const params = {
        file,
        file_content_type,
        model_id,
        source,
        target,
        document_id,
      };

      // invoke method
      languageTranslator.translateDocument(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents', 'POST');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = 'multipart/form-data';
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.formData['file'].data).toEqual(file);
      expect(options.formData['file'].contentType).toEqual(file_content_type);
      expect(options.formData['model_id']).toEqual(model_id);
      expect(options.formData['source']).toEqual(source);
      expect(options.formData['target']).toEqual(target);
      expect(options.formData['document_id']).toEqual(document_id);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const file = 'fake_file';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        file,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.translateDocument(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const file = 'fake_file';
      const params = {
        file,
      };

      // invoke method
      const translateDocumentPromise = languageTranslator.translateDocument(params);
      expectToBePromise(translateDocumentPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.translateDocument(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      languageTranslator.translateDocument({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['file'];

      const translateDocumentPromise = languageTranslator.translateDocument();
      expectToBePromise(translateDocumentPromise);

      translateDocumentPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getDocumentStatus', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getDocumentStatus(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = '*/*';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getDocumentStatus(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getDocumentStatusPromise = languageTranslator.getDocumentStatus(params);
      expectToBePromise(getDocumentStatusPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getDocumentStatus(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getDocumentStatus({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getDocumentStatusPromise = languageTranslator.getDocumentStatus();
      expectToBePromise(getDocumentStatusPromise);

      getDocumentStatusPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getDocumentStatusAsJson', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getDocumentStatusAsJson(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getDocumentStatusAsJson(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getDocumentStatusAsJsonPromise = languageTranslator.getDocumentStatusAsJson(params);
      expectToBePromise(getDocumentStatusAsJsonPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getDocumentStatusAsJson(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getDocumentStatusAsJson({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getDocumentStatusAsJsonPromise = languageTranslator.getDocumentStatusAsJson();
      expectToBePromise(getDocumentStatusAsJsonPromise);

      getDocumentStatusAsJsonPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('deleteDocument', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.deleteDocument(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}', 'DELETE');
      checkCallback(createRequestMock);
      const expectedAccept = undefined;
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.deleteDocument(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const deleteDocumentPromise = languageTranslator.deleteDocument(params);
      expectToBePromise(deleteDocumentPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.deleteDocument(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.deleteDocument({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const deleteDocumentPromise = languageTranslator.deleteDocument();
      expectToBePromise(deleteDocumentPromise);

      deleteDocumentPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocument', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocument(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/powerpoint';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocument(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentPromise = languageTranslator.getTranslatedDocument(params);
      expectToBePromise(getTranslatedDocumentPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocument(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocument({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentPromise = languageTranslator.getTranslatedDocument();
      expectToBePromise(getTranslatedDocumentPromise);

      getTranslatedDocumentPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsMspowerpoint', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsMspowerpoint(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/mspowerpoint';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsMspowerpoint(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsMspowerpointPromise = languageTranslator.getTranslatedDocumentAsMspowerpoint(
        params
      );
      expectToBePromise(getTranslatedDocumentAsMspowerpointPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsMspowerpoint(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsMspowerpoint({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsMspowerpointPromise = languageTranslator.getTranslatedDocumentAsMspowerpoint();
      expectToBePromise(getTranslatedDocumentAsMspowerpointPromise);

      getTranslatedDocumentAsMspowerpointPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsXRtf', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsXRtf(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/x-rtf';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsXRtf(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsXRtfPromise = languageTranslator.getTranslatedDocumentAsXRtf(
        params
      );
      expectToBePromise(getTranslatedDocumentAsXRtfPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsXRtf(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsXRtf({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsXRtfPromise = languageTranslator.getTranslatedDocumentAsXRtf();
      expectToBePromise(getTranslatedDocumentAsXRtfPromise);

      getTranslatedDocumentAsXRtfPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsJson', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsJson(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsJson(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsJsonPromise = languageTranslator.getTranslatedDocumentAsJson(
        params
      );
      expectToBePromise(getTranslatedDocumentAsJsonPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsJson(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsJson({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsJsonPromise = languageTranslator.getTranslatedDocumentAsJson();
      expectToBePromise(getTranslatedDocumentAsJsonPromise);

      getTranslatedDocumentAsJsonPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsXml', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsXml(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/xml';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsXml(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsXmlPromise = languageTranslator.getTranslatedDocumentAsXml(
        params
      );
      expectToBePromise(getTranslatedDocumentAsXmlPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsXml(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsXml({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsXmlPromise = languageTranslator.getTranslatedDocumentAsXml();
      expectToBePromise(getTranslatedDocumentAsXmlPromise);

      getTranslatedDocumentAsXmlPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsVndMsExcel', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndMsExcel(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/vnd.ms-excel';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndMsExcel(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndMsExcelPromise = languageTranslator.getTranslatedDocumentAsVndMsExcel(
        params
      );
      expectToBePromise(getTranslatedDocumentAsVndMsExcelPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndMsExcel(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndMsExcel({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndMsExcelPromise = languageTranslator.getTranslatedDocumentAsVndMsExcel();
      expectToBePromise(getTranslatedDocumentAsVndMsExcelPromise);

      getTranslatedDocumentAsVndMsExcelPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(
        params,
        noop
      );

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(
        params,
        noop
      );
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetPromise = languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(
        params
      );
      expectToBePromise(
        getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetPromise
      );

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(
        null,
        () => {
          checkForEmptyObject(missingParamsMock);
          done();
        }
      );
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet(
        {},
        err => {
          checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
          done();
        }
      );
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetPromise = languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet();
      expectToBePromise(
        getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetPromise
      );

      getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentSpreadsheetmlSheetPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsVndMsPowerpoint', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndMsPowerpoint(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/vnd.ms-powerpoint';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndMsPowerpoint(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndMsPowerpointPromise = languageTranslator.getTranslatedDocumentAsVndMsPowerpoint(
        params
      );
      expectToBePromise(getTranslatedDocumentAsVndMsPowerpointPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndMsPowerpoint(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndMsPowerpoint({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndMsPowerpointPromise = languageTranslator.getTranslatedDocumentAsVndMsPowerpoint();
      expectToBePromise(getTranslatedDocumentAsVndMsPowerpointPromise);

      getTranslatedDocumentAsVndMsPowerpointPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentation', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentation(
        params,
        noop
      );

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept =
        'application/vnd.openxmlformats-officedocument.presentationml.presentation';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentation(
        params,
        noop
      );
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentationPromise = languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentation(
        params
      );
      expectToBePromise(
        getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentationPromise
      );

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentation(
        null,
        () => {
          checkForEmptyObject(missingParamsMock);
          done();
        }
      );
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentation(
        {},
        err => {
          checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
          done();
        }
      );
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentationPromise = languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentation();
      expectToBePromise(
        getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentationPromise
      );

      getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentPresentationmlPresentationPromise.catch(
        err => {
          checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
          done();
        }
      );
    });
  });
});

describe('getTranslatedDocumentAsMsword', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsMsword(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/msword';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsMsword(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsMswordPromise = languageTranslator.getTranslatedDocumentAsMsword(
        params
      );
      expectToBePromise(getTranslatedDocumentAsMswordPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsMsword(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsMsword({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsMswordPromise = languageTranslator.getTranslatedDocumentAsMsword();
      expectToBePromise(getTranslatedDocumentAsMswordPromise);

      getTranslatedDocumentAsMswordPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocument', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocument(
        params,
        noop
      );

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept =
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocument(
        params,
        noop
      );
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocumentPromise = languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocument(
        params
      );
      expectToBePromise(
        getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocumentPromise
      );

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocument(
        null,
        () => {
          checkForEmptyObject(missingParamsMock);
          done();
        }
      );
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocument(
        {},
        err => {
          checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
          done();
        }
      );
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocumentPromise = languageTranslator.getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocument();
      expectToBePromise(
        getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocumentPromise
      );

      getTranslatedDocumentAsVndOpenxmlformatsOfficedocumentWordprocessingmlDocumentPromise.catch(
        err => {
          checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
          done();
        }
      );
    });
  });
});

describe('getTranslatedDocumentAsVndOasisOpendocumentSpreadsheet', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentSpreadsheet(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/vnd.oasis.opendocument.spreadsheet';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentSpreadsheet(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndOasisOpendocumentSpreadsheetPromise = languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentSpreadsheet(
        params
      );
      expectToBePromise(getTranslatedDocumentAsVndOasisOpendocumentSpreadsheetPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentSpreadsheet(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentSpreadsheet({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndOasisOpendocumentSpreadsheetPromise = languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentSpreadsheet();
      expectToBePromise(getTranslatedDocumentAsVndOasisOpendocumentSpreadsheetPromise);

      getTranslatedDocumentAsVndOasisOpendocumentSpreadsheetPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsVndOasisOpendocumentPresentation', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentPresentation(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/vnd.oasis.opendocument.presentation';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentPresentation(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndOasisOpendocumentPresentationPromise = languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentPresentation(
        params
      );
      expectToBePromise(getTranslatedDocumentAsVndOasisOpendocumentPresentationPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentPresentation(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentPresentation({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndOasisOpendocumentPresentationPromise = languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentPresentation();
      expectToBePromise(getTranslatedDocumentAsVndOasisOpendocumentPresentationPromise);

      getTranslatedDocumentAsVndOasisOpendocumentPresentationPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsVndOasisOpendocumentText', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentText(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/vnd.oasis.opendocument.text';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentText(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsVndOasisOpendocumentTextPromise = languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentText(
        params
      );
      expectToBePromise(getTranslatedDocumentAsVndOasisOpendocumentTextPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentText(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentText({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsVndOasisOpendocumentTextPromise = languageTranslator.getTranslatedDocumentAsVndOasisOpendocumentText();
      expectToBePromise(getTranslatedDocumentAsVndOasisOpendocumentTextPromise);

      getTranslatedDocumentAsVndOasisOpendocumentTextPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsPdf', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsPdf(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/pdf';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsPdf(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsPdfPromise = languageTranslator.getTranslatedDocumentAsPdf(
        params
      );
      expectToBePromise(getTranslatedDocumentAsPdfPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsPdf(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsPdf({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsPdfPromise = languageTranslator.getTranslatedDocumentAsPdf();
      expectToBePromise(getTranslatedDocumentAsPdfPromise);

      getTranslatedDocumentAsPdfPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsRtf', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsRtf(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'application/rtf';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsRtf(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsRtfPromise = languageTranslator.getTranslatedDocumentAsRtf(
        params
      );
      expectToBePromise(getTranslatedDocumentAsRtfPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsRtf(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsRtf({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsRtfPromise = languageTranslator.getTranslatedDocumentAsRtf();
      expectToBePromise(getTranslatedDocumentAsRtfPromise);

      getTranslatedDocumentAsRtfPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsHtml', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsHtml(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'text/html';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsHtml(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsHtmlPromise = languageTranslator.getTranslatedDocumentAsHtml(
        params
      );
      expectToBePromise(getTranslatedDocumentAsHtmlPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsHtml(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsHtml({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsHtmlPromise = languageTranslator.getTranslatedDocumentAsHtml();
      expectToBePromise(getTranslatedDocumentAsHtmlPromise);

      getTranslatedDocumentAsHtmlPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsJson_1', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsJson_1(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'text/json';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsJson_1(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsJson_1Promise = languageTranslator.getTranslatedDocumentAsJson_1(
        params
      );
      expectToBePromise(getTranslatedDocumentAsJson_1Promise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsJson_1(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsJson_1({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsJson_1Promise = languageTranslator.getTranslatedDocumentAsJson_1();
      expectToBePromise(getTranslatedDocumentAsJson_1Promise);

      getTranslatedDocumentAsJson_1Promise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsPlain', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsPlain(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'text/plain';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsPlain(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsPlainPromise = languageTranslator.getTranslatedDocumentAsPlain(
        params
      );
      expectToBePromise(getTranslatedDocumentAsPlainPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsPlain(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsPlain({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsPlainPromise = languageTranslator.getTranslatedDocumentAsPlain();
      expectToBePromise(getTranslatedDocumentAsPlainPromise);

      getTranslatedDocumentAsPlainPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsRichtext', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsRichtext(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'text/richtext';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsRichtext(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsRichtextPromise = languageTranslator.getTranslatedDocumentAsRichtext(
        params
      );
      expectToBePromise(getTranslatedDocumentAsRichtextPromise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsRichtext(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsRichtext({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsRichtextPromise = languageTranslator.getTranslatedDocumentAsRichtext();
      expectToBePromise(getTranslatedDocumentAsRichtextPromise);

      getTranslatedDocumentAsRichtextPromise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsRtf_1', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsRtf_1(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'text/rtf';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsRtf_1(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsRtf_1Promise = languageTranslator.getTranslatedDocumentAsRtf_1(
        params
      );
      expectToBePromise(getTranslatedDocumentAsRtf_1Promise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsRtf_1(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsRtf_1({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsRtf_1Promise = languageTranslator.getTranslatedDocumentAsRtf_1();
      expectToBePromise(getTranslatedDocumentAsRtf_1Promise);

      getTranslatedDocumentAsRtf_1Promise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});

describe('getTranslatedDocumentAsXml_1', () => {
  describe('positive tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsSuccess);
    });
    test('should pass the right params to createRequest', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      languageTranslator.getTranslatedDocumentAsXml_1(params, noop);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);

      const options = getOptions(createRequestMock);

      checkUrlAndMethod(options, '/v3/documents/{document_id}/translated_document', 'GET');
      checkCallback(createRequestMock);
      const expectedAccept = 'text/xml';
      const expectedContentType = undefined;
      checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      expect(options.path['document_id']).toEqual(document_id);
      expect(options.responseType).toBe('stream');
    });

    test('should prioritize user-given headers', () => {
      // parameters
      const document_id = 'fake_document_id';
      const accept = 'fake/header';
      const contentType = 'fake/header';
      const params = {
        document_id,
        headers: {
          Accept: accept,
          'Content-Type': contentType,
        },
      };

      languageTranslator.getTranslatedDocumentAsXml_1(params, noop);
      checkMediaHeaders(createRequestMock, accept, contentType);
    });

    test('should return a promise when no callback is given', () => {
      // parameters
      const document_id = 'fake_document_id';
      const params = {
        document_id,
      };

      // invoke method
      const getTranslatedDocumentAsXml_1Promise = languageTranslator.getTranslatedDocumentAsXml_1(
        params
      );
      expectToBePromise(getTranslatedDocumentAsXml_1Promise);

      // assert that create request was called
      expect(createRequestMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('negative tests', () => {
    beforeAll(() => {
      missingParamsMock.mockReturnValue(missingParamsError);
    });

    test('should convert a `null` value for `params` to an empty object', done => {
      languageTranslator.getTranslatedDocumentAsXml_1(null, () => {
        checkForEmptyObject(missingParamsMock);
        done();
      });
    });

    test('should enforce required parameters', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      languageTranslator.getTranslatedDocumentAsXml_1({}, err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });

    test('should reject promise when required params are not given', done => {
      // required parameters for this method
      const requiredParams = ['document_id'];

      const getTranslatedDocumentAsXml_1Promise = languageTranslator.getTranslatedDocumentAsXml_1();
      expectToBePromise(getTranslatedDocumentAsXml_1Promise);

      getTranslatedDocumentAsXml_1Promise.catch(err => {
        checkRequiredParamsHandling(requiredParams, err, missingParamsMock, createRequestMock);
        done();
      });
    });
  });
});
