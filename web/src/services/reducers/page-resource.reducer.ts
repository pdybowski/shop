import { PageResource } from '../../models';
import { ADD_PAGE_RESOURCE } from '../actions/page-resource.actions';

const initPageResourceState: PageResource = new PageResource();

export function pageResourceReducer(state = initPageResourceState, action: any): PageResource {
    switch (action.type) {
        case ADD_PAGE_RESOURCE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
