/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  //signup route
  'GET /signup': "UserController.Usersign", //signup page get route
  'POST /signup/create': "UserController.userCreate", //create user route


  //login route
  'GET /login': "LoginController.Login",  //login page get route
  'POST /login/create': "LoginController.loginCreate", // user login route
  'GET /logout': "LoginController.userLogout", //logout route

  //user member route
  'POST /memberadd/:id': "MemberController.addMember", //add member route
  'GET /members/delete/:id': "MemberController.memberDelete", //delete member route

  //account route
  'Get /account': "AccountController.Account",  //account page get route
  'POST /accountadd': "AccountController.accountAdd", //create account route
  'Get /account/edit/:id': "AccountController.accountEdit", //edit account route
  'POST /account/update/:id': "AccountController.accountUpdate", //update account route
  'GET /account/delete/:id': "AccountController.accountDelete",  //delete account route


  //transaction route
  'Get /transaction/:id': "TransactionController.Trans", //transaction page get route
  'Get /addtrans/:id': "TransactionController.transAdd",  //add transaction page route
  'POST /createtrans/:id': "TransactionController.newtrans",  //add transaction route
  'Get /transaction/edit/:id': "TransactionController.transEdit",   //edit transaction page route
  'POST /transaction/update/:id': "TransactionController.transUpdate", //update transaction route
  'GET /transaction/delete/:id': "TransactionController.transDelete",  //delete transaction route
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
