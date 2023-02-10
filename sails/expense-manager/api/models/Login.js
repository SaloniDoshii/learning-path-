/**
 * Login.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    email: {
      type: "String",
      required: true,
      allowNull: false,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
      allowNull: false,
    },
  },
};
