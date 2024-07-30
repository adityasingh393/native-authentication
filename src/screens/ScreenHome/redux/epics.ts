import { ofType } from 'redux-observable';
import { from, OperatorFunction } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure } from './imageSlice';

const API_KEY = '45186733-b75c2904d085fd97bf23a43ab';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}&per_page=20`;

export const fetchImagesEpic = (action$: { pipe: (arg0: OperatorFunction<unknown, never>, arg1: OperatorFunction<unknown, { payload: any[]; type: "images/fetchImagesSuccess"; } | { payload: string; type: "images/fetchImagesFailure"; }>) => any; }) =>
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      from(axios.get(API_URL)).pipe(
        map((response) => fetchImagesSuccess(response.data.hits)),
        catchError((error) => [fetchImagesFailure(error.message)])
      )
    )
  );