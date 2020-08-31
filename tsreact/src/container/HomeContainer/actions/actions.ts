import {Message, GET_MESSAGE, GET_MESSAGE_SUCCESS, GET_MESSAGE_FAIL, HomeDispatchTypes} from './types';
import axios from 'axios';
import { Dispatch } from 'redux';
import {BASE_URL} from '../../../api/ulti';

export const getMessage = () => async(dispatch: Dispatch<HomeDispatchTypes>) => {
  try {
      dispatch({
        type: GET_MESSAGE
      })
      console.log('BASE_URL',`${BASE_URL}`)
      const res = await axios.get(`${BASE_URL}api/list`);
      console.log('res',res);
      dispatch({
        type: GET_MESSAGE_SUCCESS,
        payload: res.data,
      })
    } catch(e) {
      console.log('e',e)
      dispatch({
        type: GET_MESSAGE_FAIL
      })
    }
}