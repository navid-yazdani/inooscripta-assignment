export const isObjectEmpty = (currentObj) => {
    return Object.values(currentObj).every((value) => {
        return !value;
    });
};

export const removeObjectEmptyValue = (currentObj) => {
    for (let key in currentObj) {
        currentObj[key] !== 0 && !currentObj[key] && delete currentObj[key];
    }
    return currentObj;
};

export const formatSearchParams = (currentObj) => {
    const newObj = { ...currentObj };
    Object.keys(newObj).map((key) => !!newObj[key] && (newObj[key] = { contains: newObj[key] }));
    return newObj;
};
