const Item = require('../../models/item');

const { transformItem } = require('./merge');

module.exports = {
  item: async (args, req) => {
    try {
      const item = await Item.findById(args.itemId);
      const transformedItem = transformItem(item);
      return transformedItem;
    } catch (err) {
      throw err;
    }
  },
  items: async () => {
    try {
      const items = await Item.find();
      return items.map(item => {
        return transformItem(item);
      });
    } catch (err) {
      throw err;
    }
  },
  createItem: async (args, req) => {
    const item = new Item({
      title: args.itemInput.title,
      description: args.itemInput.description,
      price: +args.itemInput.price
    });
    let createdItem;
    try {
      const result = await item.save();
      createdItem = transformItem(result);
      return createdItem;
    } catch (err) {
      throw err;
    }
  },
  editItem: async (args, req) => {
    const fetchedItem = await Item.findOne({ _id: args.itemInput._id });
    fetchedItem.title = args.itemInput.title;
    fetchedItem.description = args.itemInput.description;
    fetchedItem.price = +args.itemInput.price;
    const result = await fetchedItem.save();
    return transformItem(result);
  },
  deleteItem: async (args, req) => {
    try {
      const item = await Item.findById(args.itemId);
      const transformedItem = transformItem(item);
      await Item.deleteOne({ _id: args.itemId });
      return transformedItem;
    } catch (err) {
      throw err;
    }
  }
};
