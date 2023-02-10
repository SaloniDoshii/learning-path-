/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */



module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

 AccountController:{
// allow authentication on all routes
   '*': 'check-auth',
 },
 LoginController:{
  // allow authentication on logout route only
    userLogout: 'check-auth'
 },
 MemberController:{
  // allow authentication on all routes
  '*': 'check-auth',
 },
 TransactionController:{
  // allow authentication on all routes
  '*': 'check-auth',
 },
};
