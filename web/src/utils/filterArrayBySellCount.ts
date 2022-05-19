export function filterArrayBySellCount<A>(array: A[], property: keyof A, filter: A[keyof A]): A[] {
    return array.filter((a) => {
        return a[property] > filter;
    });
}
