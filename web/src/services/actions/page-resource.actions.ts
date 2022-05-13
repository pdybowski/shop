import { PageResource } from "../../models";

export const ADD_PAGE_RESOURCE = 'PAGE_RESOURCE/ADD_PAGE_RESOURCE';

export function addPageResourceAction(pageResource: PageResource) {
    return { type: ADD_PAGE_RESOURCE, payload: pageResource };
}
