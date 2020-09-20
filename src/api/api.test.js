import axiosMock from 'axios';

import * as apiUtils from './api-utils';
import { apiHeroesList, apiHeroesListOrderByName, apiHeroByID } from './api';

jest.mock('axios');

afterEach(axiosMock.get.mockClear);

describe('api', () => {
  describe('apiHeroesList', () => {
    test('success api call to apiHeroesList', async () => {
      const successResponse = {
        data: '',
        status: 200,
        statusText: 'OK',
      };
      axiosMock.get.mockResolvedValueOnce(Promise.resolve(successResponse));

      const response = await apiHeroesList();
      apiUtils.handleError = jest.fn();

      expect(response).toEqual(successResponse);
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(0);
    });

    test('error api call to apiHeroesList', async () => {
      const errorResponse = {
        data: '',
        status: 400,
        statusText: 'Bad Request',
      };
      axiosMock.get.mockRejectedValueOnce(errorResponse);
      apiUtils.handleError = jest.fn();

      await apiHeroesList();

      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(1);
      expect(apiUtils.handleError).toHaveBeenCalledWith(errorResponse);
    });
  });

  describe('apiHeroByID', () => {
    test('success api call to apiHeroByID', async () => {
      const successResponse = {
        data: '',
        status: 200,
        statusText: 'OK',
      };
      axiosMock.get.mockResolvedValueOnce(Promise.resolve(successResponse));

      const response = await apiHeroByID(123);
      apiUtils.handleError = jest.fn();

      expect(response).toEqual(successResponse);
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters/123?apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(0);
    });

    test('error api call to apiHeroByID', async () => {
      const errorResponse = {
        data: '',
        status: 400,
        statusText: 'Bad Request',
      };
      axiosMock.get.mockRejectedValueOnce(errorResponse);
      apiUtils.handleError = jest.fn();

      await apiHeroByID(123);

      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters/123?apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(1);
      expect(apiUtils.handleError).toHaveBeenCalledWith(errorResponse);
    });
  });

  describe('apiHeroesListOrderByName', () => {
    test('success api call to apiHeroesListOrderByName', async () => {
      const successResponse = {
        data: '',
        status: 200,
        statusText: 'OK',
      };
      axiosMock.get.mockResolvedValue(Promise.resolve(successResponse));
      apiUtils.handleError = jest.fn();

      const response = await apiHeroesListOrderByName();

      expect(response).toEqual(successResponse);
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=20&apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(0);

      const responseDesc = await apiHeroesListOrderByName(false);

      expect(responseDesc).toEqual(successResponse);
      expect(axiosMock.get).toHaveBeenCalledTimes(2);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=20&apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(0);
    });

    test('error api call to apiHeroesListOrderByName', async () => {
      const errorResponse = {
        data: '',
        status: 400,
        statusText: 'Bad Request',
      };
      axiosMock.get.mockRejectedValueOnce(errorResponse);
      apiUtils.handleError = jest.fn();

      await apiHeroesListOrderByName();

      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=20&apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(1);
      expect(apiUtils.handleError).toHaveBeenCalledWith(errorResponse);
    });
  });
});
