export function getTotalPages(state){
    const totalPagesIndex = Math.ceil(state.count / 6);
    let pages = [];

    for (let index = 1; index <= totalPagesIndex; index++) {
      pages.push(index);
    }
    return pages
}