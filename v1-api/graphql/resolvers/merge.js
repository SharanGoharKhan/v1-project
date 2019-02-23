//allows us to send _id as a String because ObjectId is not a scalar value
const transformItem = item => {
  return {
    ...item._doc,
    _id: item.id
  };
};

exports.transformItem = transformItem;

