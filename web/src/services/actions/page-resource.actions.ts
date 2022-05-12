import { PageResource } from "../../models";

export const ADD_PAGE_RESOURCE = 'PAGE_RESOURCE/ADD_PAGE_RESOURCE';

export function addPageResourceAction(dispatch: any, getState: any, pageResource: PageResource) {
    return dispatch({ type: ADD_PAGE_RESOURCE, payload: pageResource });
}
