"use strict";

const assert = require("assert");

/**
 * Pass all common tests for Logux store to callback.
 *
 * @param {creator} test Callback to create tests in your test framework.
 *
 * @returns {undefined}
 *
 * @example
 * const eachTest = require('logux-store-tests')
 *
 * eachTest((desc, creator) => {
 *   it(desc, creator(() => new CustomStore()))
 * })
 */
module.exports = function eachTest(test) {
  test("store class provide standart methods", store => () => {
    var storeStandartMethods = [
      "add",
      "has",
      "get",
      "remove",
      "changeMeta",
      "removeReason",
      "getLastAdded",
      "getLastSynced",
      "setLastSynced"
    ];

    storeStandartMethods.map(standartMethod => {
      assert.deepEqual(typeof store[standartMethod], "function");
    });
  });
};

/**
 * @callback creator
 * @param {string} name The test name.
 * @param {creator} generator The test creator.
 */

/**
 * @callback generator
 * @param {Store} store The store instance.
 * @return {function} The test function to be used in test framework.
 */
