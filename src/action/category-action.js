import uuid from 'uuid/v4';
//action creaters
export const catCreate = category=> {
  category.id = uuid();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};
export const catUpdate = category=> ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const catDestroy = category=> ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});
