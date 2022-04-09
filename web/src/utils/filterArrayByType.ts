export function filterArrayByType<A>(array: A[], property: keyof A, filter: A[keyof A]): A[] {
    return array.filter(a => a[property] === filter);
}
