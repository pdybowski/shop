import { PageResourceEditType } from '../../models';

export const ADD_PAGE_RESOURCE = 'ADD_PAGE_RESOURCE';

export function addPageResource(value: PageResourceEditType ) {
    return {
        type: ADD_PAGE_RESOURCE,
        payload: value,
    };
}
