export const category = (category, jackets) => {
    if (category === 'all') return jackets;
    return jackets.filter(jacket => jacket.category === 'category');
}