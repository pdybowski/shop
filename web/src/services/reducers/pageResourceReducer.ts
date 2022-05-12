import { PageResource, PageResourceEditType } from '../../models';
import { ADD_PAGE_RESOURCE } from '../actions/pageResourceActions';

const initPageResourceState: PageResource = new PageResource();

const addPageResource = (pageResource: PageResourceEditType, state: PageResource) => {
    const updatedPageResource = { ...state, ...pageResource };
    return { ...state, pageResource: updatedPageResource};
};

export function pageResourceReducer(state = initPageResourceState, action: any) {
    switch (action.type) {
        case ADD_PAGE_RESOURCE:
            return addPageResource(action.payload, state);
        default:
            return state;
    }
}
