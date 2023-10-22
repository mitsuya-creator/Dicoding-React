function counterByStatus(initialData, status) {
    return initialData.filter(data => data.archived === status);
}
function counterByQuery(initialData, status, query) {
    return counterByStatus(initialData, status).filter(data => data.title.toLowerCase().includes(query.toLowerCase()));
}


export { counterByQuery, counterByStatus };