import { FormContext } from './FormContext';
import { Navigation } from './Navigation/Navigation';
import { WebApi } from './WebApi';

export const PowerPagesClientAPI = {
    FormContext,
    WebApi: new WebApi(),
    Navigation: new Navigation()
};
