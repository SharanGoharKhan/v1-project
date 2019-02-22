const transformItem = item => {
  return {
    ...item._doc,
    _id: item.id
  };
};

exports.transformItem = transformItem;

