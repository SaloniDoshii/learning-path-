/**
 * Transaction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    date: {
      type: "ref",
      columnType: "datetime",
      defaultsTo: new Date(),
    },

    select: {
      type: "string",
      isIn: ["income", "expense"],
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    amount: {
      type: "number",
      required: true,
    },
    balance: {
      type: "number",
      defaultsTo: 0,
    },
    created: {
      type: "string",
      required: true,
    },
    account: {
      model: "Account",
    },
  },
};
