export const isObjectEmpty = (currentObj: object) => {
    return Object.values(currentObj).every((value) => {
        return !value;
    });
};

export const removeObjectEmptyValue = (currentObj: any) => {
    for (const key in currentObj) {
        currentObj[key] !== 0 && !currentObj[key] && delete currentObj[key];
    }
    return currentObj;
};

export const formatSearchParams = (currentObj: any) => {
    const newObj = { ...currentObj };
    Object.keys(newObj).map((key) => !!newObj[key] && (newObj[key] = { contains: newObj[key] }));
    return newObj;
};
