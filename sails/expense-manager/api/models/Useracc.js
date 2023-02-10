/**
 * Useracc.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    user: {
      model: "User",
    },
    account: {
      model: "Account",
    },
    role: {
      type: "string",
      required: true,
      isIn: ["Owner", "Member"],
    },
  },
};
