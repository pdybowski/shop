export function filterArrayByType<A>(array: A[], property: keyof A, filter: A[keyof A]): A[] {
    return array.filter(a => {
        const aVal = `${a[property]}`.toLowerCase();
        const fVal = `${filter}`.toLowerCase();
        return aVal === fVal;
    });
}
