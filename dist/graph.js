'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils');

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Graph = function () {
  /**
   * @constructor
   * Represent graph data structure
   */

  function Graph() {
    _classCallCheck(this, Graph);

    if (!(this instanceof Graph)) {
      return new Graph();
    };
    this._graph = {};
  }

  /**
   * @public
   * Add new node to curr graph
   * @param {String} key - key for new node
   */


  _createClass(Graph, [{
    key: 'addNode',
    value: function addNode(key, params) {
      params = params || {};

      if ((0, _utils.hasProperty)(this._graph, key)) return;
      if (!(0, _utils.isObject)(params)) throw new TypeError('Should be an Object');

      this._graph[key] = new _node2.default(key, params);
    }

    /**
     * @public
     * get node instance by key
     * @param  {String} key [description]
     * @return {Node} node object
     */

  }, {
    key: 'getNode',
    value: function getNode(key) {
      if (!(0, _utils.hasProperty)(this._graph, key)) return;
      return this._graph[key];
    }

    /**
     * @public
     * add edge between two nodes,
     * if nodes not presented, create it
     * @param {String} start - key of start node
     * @param {String} end   - key of end node
     */

  }, {
    key: 'addEdge',
    value: function addEdge(start, end) {
      var proto = this.constructor.prototype;

      proto.addNode.call(this, start);
      proto.addNode.call(this, end);

      this._graph[start].addEdge(this._graph[end]);
    }

    /**
     * get node connection
     * @param  {String} key
     * @return {Array}
     */

  }, {
    key: 'getConnection',
    value: function getConnection(key) {
      return (0, _utils.hasProperty)(this._graph, key) ? this._graph[key].getConnections() : null;
    }
  }]);

  return Graph;
}();

exports.default = Graph;