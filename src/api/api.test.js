import axiosMock from 'axios';

import * as apiUtils from './api-utils';
import { apiHeroesList } from './api';

jest.mock('axios');

afterEach(axiosMock.get.mockClear);

describe('api/order', () => {
  describe('api/order/:orderId', () => {
    test('success api call to api/order/:orderId', async () => {
      const successResponse = {
        data: '',
        status: 200,
        statusText: 'OK',
      };
      axiosMock.get.mockResolvedValueOnce(Promise.resolve(successResponse));
      //handleError = jest.fn();

      const response = await apiHeroesList();
      apiUtils.handleError = jest.fn();

      expect(response).toEqual(successResponse);
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith(
        'https://gateway.marvel.com:443/v1/public/characters?apikey=123'
      );
      expect(apiUtils.handleError).toHaveBeenCalledTimes(0);
    });

    test('error api call to api/order/:orderId', async () => {
      const errorResponse = {
        data: '',
        status: 400,
        statusText: 'Bad Request',
      };
      //handleError = jest.fn();
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
});
