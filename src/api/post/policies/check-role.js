"use strict";

/**
 * `check-role` policy
 */

module.exports = (policyContext, config, { strapi }) => {
  const { userRole } = config;
  const isElibleUser =
    policyContext.state.user && policyContext.state.user.role.code === userRole;

  if (isElibleUser) {
    return true;
  }

  return false;
};
