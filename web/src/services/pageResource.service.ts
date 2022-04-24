import { PageResource } from '../models';

export const getEnabledPageResource = (input: PageResource): PageResource => {
    const pageResource = { ...input };

    pageResource.brands = pageResource.brands.filter((b) => b.isEnabled);
    pageResource.sports = pageResource.sports.filter((s) => s.isEnabled);

    return pageResource;
};
