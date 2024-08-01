import { ofType } from 'redux-observable';
import { from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import axios from 'axios';
import { fetchImagesRequest, fetchImagesSuccess, fetchImagesFailure , imageSliceTypes} from './imageSlice';
import { Observable } from 'rxjs';

const API_KEY = '45186733-b75c2904d085fd97bf23a43ab';
const API_URL = `https://pixabay.com/api/?q=formula1&key=${API_KEY}&per_page=30`;

const apiReuest = axios.get(API_URL);

export const fetchImagesEpic = (action$: Observable<imageSliceTypes>) =>
  action$.pipe(
    ofType(fetchImagesRequest.type),
    mergeMap(() =>
      from(apiReuest).pipe(
        map((response) => fetchImagesSuccess(response.data.hits)),
        catchError((error) => [fetchImagesFailure(error.message)])
      )
    )
  );