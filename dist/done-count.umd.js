(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.dc = {}));
}(this, (function (exports) { 'use strict';

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var objectWithoutProperties = _objectWithoutProperties;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  /**
   * DoneCount
   * 完成计数
   * 用于统计一组操作的完成情况
   */
  var DoneCount = /*#__PURE__*/function () {
    createClass(DoneCount, [{
      key: "total",

      /**
       * forcedDone : boolean     强制完成标识
       */
      //总数量
      get: function get() {
        if (this.oriTotal == undefined) {
          this.oriTotal = 1;
        }

        return this.oriTotal;
      },
      set: function set(newValue) {
        this.oriTotal = newValue;
      } //已完成数量

    }, {
      key: "doneNum",
      get: function get() {
        if (!this._doneNum) {
          this._doneNum = 0;
        }

        return this._doneNum;
      },
      set: function set(newValue) {
        this._doneNum = newValue || 0;
      }
      /**
       *
       * @param totalOrOptions : DoneCountOptions
       * DoneCountOptions = total:number | DoneCountProps
       * DoneCountProps = {total:number,doneNum:number}
       */

    }]);

    function DoneCount(totalOrOptions) {
      classCallCheck(this, DoneCount);

      defineProperty(this, "forcedDone", false);

      if (_typeof_1(totalOrOptions) == "object") {
        var total = totalOrOptions.total,
            otherProps = objectWithoutProperties(totalOrOptions, ["total"]);
      } else {
        total = totalOrOptions;
      }

      this.total = total;

      if (otherProps) {
        Object.assign(this, otherProps);
      }
    }

    createClass(DoneCount, [{
      key: "reset",

      /**
       * 重置
       */
      value: function reset() {
        this.total = 1;
        this.resetDoneNum();
      }
      /**
       * 重置
       */

    }, {
      key: "resetDoneNum",
      value: function resetDoneNum() {
        this.doneNum = 0;
      }
      /**
       * 登录新的完成次数
       * @param num : number
       * @returns boolean 是否完成
       */

    }, {
      key: "doneAgain",
      value: function doneAgain() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        this.doneNum += num;
        return this.done;
      }
    }, {
      key: "undoneNum",
      get: function get() {
        var total = this.total;
        var doneNum = this.doneNum;
        return total < doneNum ? 0 : total - doneNum;
      }
      /**
       * done : boolean   只读；表示是否完成
       */

    }, {
      key: "done",
      get: function get() {
        return this.forcedDone || this.realDone;
      }
      /**
       * realDone : boolean   只读；表示实际上是否真正的完成
       */

    }, {
      key: "realDone",
      get: function get() {
        return this.total <= this.doneNum;
      }
    }]);

    return DoneCount;
  }();
  var NamedDoneCount = /*#__PURE__*/function (_DoneCount) {
    inherits(NamedDoneCount, _DoneCount);

    var _super = _createSuper(NamedDoneCount);

    /**
     *
     * @param totalOrOptions : NamedDoneCountOptions
     * NamedDoneCountOptions = total:number | NamedDoneCountProps
     * NamedDoneCountProps = {...DoneCountProps,namesOrNum : Names | DoneNum,names: Names,autoIncrTotalIfRepeat:boolean,maxRepetNum:number}
     *
     * Names : string | [string]
     * DoneNum : number
     */
    function NamedDoneCount(totalOrOptions) {
      var _this;

      classCallCheck(this, NamedDoneCount);

      if (_typeof_1(totalOrOptions) == "object") {
        var total = totalOrOptions.total,
            namesOrNum = totalOrOptions.namesOrNum,
            names = totalOrOptions.names,
            doneNum = totalOrOptions.doneNum,
            otherProps = objectWithoutProperties(totalOrOptions, ["total", "namesOrNum", "names", "doneNum"]);
      } else {
        total = totalOrOptions;
      }

      _this = _super.call(this, total);

      defineProperty(assertThisInitialized(_this), "autoIncrTotalIfRepeat", void 0);

      _this.total = total;

      if (names) {
        _this.doneAgainNames(names);
      } else if (doneNum != undefined) {
        _this._doneNum = doneNum;
      } else {
        _this.doneNum = namesOrNum;
      }

      if (otherProps) {
        Object.assign(assertThisInitialized(_this), otherProps);
      }

      return _this;
    }
    /**
     * 当 name 重复时，是否自动增长 total
     * @type {boolean}
     */


    createClass(NamedDoneCount, [{
      key: "resetDoneNum",

      /**
       * 重置
       */
      value: function resetDoneNum() {
        this.nameRecord.clear();
        this._doneNum = 0;
      }
      /**
       *
       * @param namesOrNum : DoneNamesOrNum
       * DoneNamesOrNum = number | DoneNames
       * DoneNames = string | [string]
       * @returns {*}
       */

    }, {
      key: "doneAgain",
      value: function doneAgain() {
        var namesOrNum = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        if (typeof namesOrNum == "number") {
          this._doneNum += namesOrNum;
        } else {
          this.doneAgainNames(namesOrNum);
        }

        return this.done;
      }
      /**
       * @param names : DoneNames
       * @returns {*}
       */

    }, {
      key: "doneAgainNames",
      value: function doneAgainNames(names) {
        if (!Array.isArray(names)) {
          names = [names];
        }

        var nameRecord = this.nameRecord;
        names.forEach(function (nm) {
          var nameCount = nameRecord.get(nm) || 0;
          nameRecord.set(nm, ++nameCount);
        });
        return this.done;
      }
    }, {
      key: "has",
      value: function has(name) {
        return this.nameRecord.has(name);
      }
      /**
       * 获取指定 name 的计数
       * @param name
       * @returns {*|number}
       */

    }, {
      key: "getNameNum",
      value: function getNameNum(name) {
        var nameNum = this.nameRecord.get(name) || 0;
        return Math.min(nameNum, this.maxRepetNum);
      }
      /**
       * 获取最大的 name 计数
       * @returns {number}
       */

    }, {
      key: "total",
      get: function get() {
        return this.autoIncrTotalIfRepeat ? this.oriTotal * (this.maxNameNum || 1) : this.oriTotal;
      },
      set: function set(newValue) {
        this.oriTotal = newValue;
      }
    }, {
      key: "oriTotal",
      get: function get() {
        if (this._oriTotal == undefined) {
          this._oriTotal = 1;
        }

        return this._oriTotal;
      },
      set: function set(newValue) {
        this._oriTotal = newValue;
      }
    }, {
      key: "nameRecord",
      get: function get() {
        if (!this._nameRecord) {
          this._nameRecord = new Map();
        }

        return this._nameRecord;
      }
      /**
       * 最大重复数目
       * @type {number}
       */

    }, {
      key: "maxRepetNum",
      get: function get() {
        var _maxRepetNum = this._maxRepetNum;
        return _maxRepetNum && _maxRepetNum > 0 ? _maxRepetNum : Infinity;
      },
      set: function set(newValue) {
        this._maxRepetNum = newValue;
      }
      /**
       * 获取所有 name 的总计数
       * @returns {number}
       */

    }, {
      key: "nameNum",
      get: function get() {
        var _nameNum = 0;
        var maxRepetNum = this.maxRepetNum;
        this.nameRecord.forEach(function (count, key) {
          _nameNum += Math.min(count, maxRepetNum);
        });
        return _nameNum;
      }
    }, {
      key: "_doneNum",
      get: function get() {
        if (this._doneNum_ == undefined) {
          this._doneNum_ = 0;
        }

        return this._doneNum_;
      },
      set: function set(newValue) {
        this._doneNum_ = newValue;
      }
    }, {
      key: "doneNum",
      get: function get() {
        return this.nameNum + this._doneNum;
      },
      set: function set(newValue) {
        if (typeof newValue == "number") {
          var oldNum = this.doneNum;

          if (oldNum < newValue) {
            this._doneNum = newValue - this.nameNum;
          } else {
            this.resetDoneNum();
            this._doneNum = newValue;
          }
        } else if (newValue == undefined) {
          this.resetDoneNum();
        } else {
          this.doneAgainNames(newValue);
        }
      }
    }, {
      key: "maxNameNum",
      get: function get() {
        var countArr = Array.from(this.nameRecord.values());
        var maxCount = countArr.length > 0 ? Math.max.apply(Math, countArr) : 0;
        return Math.min(maxCount, this.maxRepetNum);
      }
    }]);

    return NamedDoneCount;
  }(DoneCount);
  /**
   * 冲突策略 ConflictPolicy 类型常量
   * ConflictPolicy = "Add" | "Reset" | "Recreate" | "Update"
   */

  var conflictPolicy_Add = "Add";
  var conflictPolicy_Reset = "Reset";
  var conflictPolicy_Recreate = "Recreate";
  var conflictPolicy_Update = "Update";
  /**
   * 自动删除目标 AutoDeleteTarget 类型常量
   * AutoDeleteTarget = "ForcedDone" | "RealDone" | "Done"
   */

  var autoDeleteTarget_ForcedDone = "ForcedDone";
  var autoDeleteTarget_RealDone = "RealDone";
  var autoDeleteTarget_Done = "Done";
  /**
   * 自动删除目标 AutoDeleteMode 类型常量
   * AutoDeleteMode = "Delay" | "Immediately" | "No"
   */

  var autoDeleteMode_Delay = "Delay";
  var autoDeleteMode_Immediately = "Immediately";
  var autoDeleteMode_No = "No";
  var DoneCountManager = /*#__PURE__*/function () {
    /**
     * props : DCManagerProps
     * DCManagerProps = {clearDelay:number,conflictPolicy : ConflictPolicy ,autoDeleteTarget:AutoDeleteTarget ,autoDeleteMode:AutoDeleteMode}
     * @param props
     */
    function DoneCountManager() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      classCallCheck(this, DoneCountManager);

      Object.assign(this, props);
    }

    createClass(DoneCountManager, [{
      key: "_createDoneCount",

      /**
       * 创建 DoneCount 实例
       * @param totalOrOptions : DoneCountOptions
       * @returns {DoneCount}
       */
      value: function _createDoneCount(totalOrOptions) {
        return new DoneCount(totalOrOptions);
      }
      /**
       * 在不改变完成数的情况下，根据 confOpts 配置 doneCount
       * @param doneCount : DoneCount
       * @param dcProps : DoneCountProps
       * @returns {*}
       * @private
       */

    }, {
      key: "_confDoneCount",
      value: function _confDoneCount(doneCount, dcProps) {
        var doneNum = dcProps.doneNum,
            otherProps = objectWithoutProperties(dcProps, ["doneNum"]);

        Object.assign(doneCount, otherProps);
        return doneCount;
      }
      /**
       * 设置 延迟清除已完成的 DoneCount 的延时时间
       * @returns {number|*}
       */

    }, {
      key: "delayClearKey",

      /**
       * 延迟删除指定 key 的 DoneCount
       * @param key : DoneCountKey  需要被延迟删除的 DoneCount 的 key
       * @param delay ?: number   可选；默认值：this.clearDelay； 延时时间；
       *
       * 注意：
       * - 只有 当 doneCount 已经完成时 才会被删除，否则，不会被删除；
       */
      value: function delayClearKey(key) {
        var _this2 = this;

        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.clearDelay;
        var doneCount = this.doneMap.get(key);

        if (doneCount.done) {
          setTimeout(function () {
            _this2.clearKey(key);
          }, delay);
        }
      }
      /**
       * 删除指定 key 的 DoneCount
       * @param key : DoneCountKey  需要被删除的 DoneCount 的 key
       * @return boolean  表示是否完成删除；
       *
       * 注意：
       * - 只有 当 doneCount 已经完成时 才会被删除，否则，不会被删除；
       * - 当指定 key 的 doneCount 不存时，也会 返回 true ；
       */

    }, {
      key: "clearKey",
      value: function clearKey(key) {
        var doneMap = this.doneMap;
        var doneCount = doneMap.get(key);
        var done = doneCount ? doneCount.done : true;

        if (doneCount && done) {
          doneMap["delete"](key);
        }

        return done;
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this3 = this;

        var keyArr = Array.from(this.doneMap.keys());
        return keyArr.every(function (key) {
          return _this3.clearKey(key);
        });
      }
    }, {
      key: "forcedDoneKey",
      value: function forcedDoneKey(key) {
        var doneCount = this.doneMap.get(key);

        if (doneCount) {
          doneCount.forcedDone = true;
        }
      }
    }, {
      key: "forcedDone",
      value: function forcedDone() {
        this.doneMap.forEach(function (dc) {
          dc.forcedDone = true;
        });
      }
      /**
       * 注册 DoneCount 时，当 注册的 DoneCount 的 total 和 已存在的 DoneCount 的 total 不一致时 的处理方式
       * @returns {string|*}
       */

    }, {
      key: "register",

      /**
       * 注册DoneCount
       * @param keyOrOpts : DoneAgainOptions
       *
       * DoneAgainOptions = key | {key,conflictPolicy,...DoneCountProps}
       * @returns {DoneCount}
       */
      value: function register(keyOrOpts) {
        if (_typeof_1(keyOrOpts) == "object") {
          var key = keyOrOpts.key,
              _keyOrOpts$total = keyOrOpts.total,
              total = _keyOrOpts$total === void 0 ? 1 : _keyOrOpts$total,
              conflictPolicy = keyOrOpts.conflictPolicy,
              otherOpts = objectWithoutProperties(keyOrOpts, ["key", "total", "conflictPolicy"]);
        } else {
          key = keyOrOpts;
          total = 1;
        }

        conflictPolicy = conflictPolicy || this.conflictPolicy;
        var doneMap = this.doneMap;
        var doneCount = doneMap.get(key);

        if (!doneCount || doneCount.realDone) {
          doneCount = this._createDoneCount(total);
        } else if (doneCount.oriTotal != total) {
          switch (conflictPolicy) {
            case conflictPolicy_Recreate:
              {
                doneCount = this._createDoneCount(total);
                break;
              }

            case conflictPolicy_Add:
              {
                doneCount.total += total;
                break;
              }

            case conflictPolicy_Reset:
              {
                doneCount.reset();
                doneCount.total = total;
                break;
              }

            case conflictPolicy_Update:
              {
                doneCount.total = total;
                break;
              }
          }
        }

        if (otherOpts) {
          doneCount = this._confDoneCount(doneCount, otherOpts);
        }

        doneMap.set(key, doneCount);
        return doneCount;
      }
      /**
       *
       * @param keyOrOpts : DoneAgainOptions
       * @param doneNum
       * @returns DoneCount | Error
       */

    }, {
      key: "unsafeDoneAgain",
      value: function unsafeDoneAgain(keyOrOpts) {
        var _arguments = arguments,
            _this4 = this;

        var doneNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return function (doneNum) {
          if (_typeof_1(keyOrOpts) == "object") {
            var key = keyOrOpts.key,
                _keyOrOpts$doneNum = keyOrOpts.doneNum,
                doneNum = _keyOrOpts$doneNum === void 0 ? 1 : _keyOrOpts$doneNum,
                otherProps = objectWithoutProperties(keyOrOpts, ["key", "doneNum"]);
          } else {
            key = keyOrOpts;
          }

          var doneCount = _this4.doneMap.get(key);

          if (!doneCount) {
            // console.error("不存在 key 为 %s 的 DoneCount 实例；该 key 对应的 DoneCount 可能已经完成，请检查 相关配置选项是否正确； 传入的参数为: %o",key,arguments);
            var message = "\u4E0D\u5B58\u5728 key \u4E3A ".concat(key, " \u7684 DoneCount \u5B9E\u4F8B\uFF1B\u8BE5 key \u5BF9\u5E94\u7684 DoneCount \u53EF\u80FD\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5 \u76F8\u5173\u914D\u7F6E\u9009\u9879\u662F\u5426\u6B63\u786E\uFF1B \u4F20\u5165\u7684\u53C2\u6570\u4E3A: ").concat(JSON.stringify(_arguments));
            var err = new Error(message);
            err.name = "DoneCountManager";
            return err;
          }

          doneCount.doneAgain(doneNum);

          _this4.autoDelete(key, otherProps);

          return doneCount;
        }(doneNum);
      }
      /**
       * autoDeleteTarget : AutoDeleteTarget    自动删除目标
       */

    }, {
      key: "autoDelete",

      /**
       * 根据配置 options ，自动删除指定 key 的 DoneCount
       * @param key : DoneCountKey    被自动删除的 DoneCount 的 key
       * @param options ?: AutoDeleteOptions   可选；配置选项
       *
       * AutoDeleteOptions = {autoDeleteMode : AutoDeleteMode,autoDeleteTarget : AutoDeleteTarget,clearDelay : number}
       */
      value: function autoDelete(key) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$autoDeleteMo = options.autoDeleteMode,
            autoDeleteMode = _options$autoDeleteMo === void 0 ? this.autoDeleteMode : _options$autoDeleteMo,
            _options$autoDeleteTa = options.autoDeleteTarget,
            autoDeleteTarget = _options$autoDeleteTa === void 0 ? this.autoDeleteTarget : _options$autoDeleteTa,
            clearDelay = options.clearDelay;
        var doneCount = this.doneMap.get(key);

        switch (autoDeleteTarget) {
          case autoDeleteTarget_RealDone:
            {
              if (!doneCount.realDone) {
                return;
              }

              break;
            }

          case autoDeleteTarget_ForcedDone:
            {
              if (!doneCount.forcedDone) {
                return;
              }

              break;
            }
        }

        switch (autoDeleteMode) {
          case autoDeleteMode_Delay:
            {
              this.delayClearKey(key, clearDelay);
              break;
            }

          case autoDeleteMode_Immediately:
            {
              this.clearKey(key);
              break;
            }
        }
      }
      /**
       *
       * @param keyOrOpts : DoneAgainOptions
       * @param doneNum : DoneNamesOrNum
       * @returns {*}
       */

    }, {
      key: "doneAgain",
      value: function doneAgain(keyOrOpts) {
        var doneNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        this.register(keyOrOpts);
        return this.unsafeDoneAgain(keyOrOpts, doneNum);
      }
    }, {
      key: "getDoneCount",
      value: function getDoneCount(key) {
        return this.doneMap.get(key);
      }
    }, {
      key: "getUndoneNum",
      value: function getUndoneNum(key) {
        var dc = this.getDoneCount(key);
        return dc ? dc.undoneNum : 0;
      }
    }, {
      key: "getDone",
      value: function getDone(key) {
        return this.getUndoneNum(key) == 0;
      }
    }, {
      key: "doneMap",
      get: function get() {
        if (!this._doneMap) {
          this._doneMap = new Map();
        }

        return this._doneMap;
      },
      set: function set(newValue) {
        this._doneMap = newValue;
      }
    }, {
      key: "clearDelay",
      get: function get() {
        if (this._clearDelay == undefined) {
          this._clearDelay = 100;
        }

        return this._clearDelay;
      },
      set: function set(newValue) {
        this._clearDelay = newValue;
      }
    }, {
      key: "conflictPolicy",
      get: function get() {
        if (!this._conflictPolicy) {
          this._conflictPolicy = conflictPolicy_Recreate;
        }

        return this._conflictPolicy;
      },
      set: function set(newValue) {
        this._conflictPolicy = newValue;
      }
    }, {
      key: "autoDeleteTarget",
      get: function get() {
        if (!this._autoDeleteTarget) {
          this._autoDeleteTarget = autoDeleteTarget_RealDone;
        }

        return this._autoDeleteTarget;
      },
      set: function set(newValue) {
        this._autoDeleteTarget = newValue;
      }
      /**
       * autoDeleteMode : AutoDeleteMode   自动删除模式
       */

    }, {
      key: "autoDeleteMode",
      get: function get() {
        if (!this._autoDeleteMode) {
          this._autoDeleteMode = autoDeleteMode_Delay;
        }

        return this._autoDeleteMode;
      },
      set: function set(newValue) {
        this._autoDeleteMode = newValue;
      }
    }, {
      key: "info",
      get: function get() {
        var info = {
          total: 0,
          doneNum: 0,
          undoneNum: 0
        };
        var keys = [];
        var allDone = true;
        this.doneMap.forEach(function (dc, key) {
          info.total += dc.total;
          info.doneNum += dc.doneNum;
          info.undoneNum += dc.undoneNum;
          keys.push(key);

          if (!dc.done) {
            allDone = false;
          }
        });
        info.keys = keys;
        info.allDone = allDone;
        return info;
      }
    }, {
      key: "total",
      get: function get() {
        var total = 0;
        this.doneMap.forEach(function (dc) {
          total += dc.total;
        });
        return total;
      }
    }, {
      key: "doneNum",
      get: function get() {
        var total = 0;
        this.doneMap.forEach(function (dc) {
          total += dc.doneNum;
        });
        return total;
      }
    }, {
      key: "undoneNum",
      get: function get() {
        var total = 0;
        this.doneMap.forEach(function (dc) {
          total += dc.undoneNum;
        });
        return total;
      }
    }, {
      key: "done",
      get: function get() {
        var allDone = true;
        this.doneMap.forEach(function (dc, key) {
          if (!dc.done) {
            allDone = false;
          }
        });
        return allDone;
      }
    }]);

    return DoneCountManager;
  }();
  var NamedDoneCountManager = /*#__PURE__*/function (_DoneCountManager) {
    inherits(NamedDoneCountManager, _DoneCountManager);

    var _super2 = _createSuper(NamedDoneCountManager);

    function NamedDoneCountManager() {
      var _this5;

      classCallCheck(this, NamedDoneCountManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this5 = _super2.call.apply(_super2, [this].concat(args));

      defineProperty(assertThisInitialized(_this5), "autoIncrTotalIfRepeat", void 0);

      return _this5;
    }

    createClass(NamedDoneCountManager, [{
      key: "_createDoneCount",

      /**
       * 创建 DoneCount 实例
       * @param totalOrOptions
       * @returns {DoneCount}
       */
      value: function _createDoneCount(totalOrOptions) {
        return new NamedDoneCount(totalOrOptions);
      }
      /**
       * DoneCount 的 autoIncrTotalIfRepeat 的默认值
       * @type {boolean}
       */

    }, {
      key: "_confDoneCount",

      /**
       * 在不改变完成数的情况下，根据 confOpts 配置 doneCount
       * @param doneCount
       * @param confOpts
       * @returns {*}
       * @private
       */
      value: function _confDoneCount(doneCount, confOpts) {
        var namesOrNum = confOpts.namesOrNum,
            names = confOpts.names,
            doneNum = confOpts.doneNum,
            _confOpts$autoIncrTot = confOpts.autoIncrTotalIfRepeat,
            autoIncrTotalIfRepeat = _confOpts$autoIncrTot === void 0 ? this.autoIncrTotalIfRepeat : _confOpts$autoIncrTot,
            otherOpts = objectWithoutProperties(confOpts, ["namesOrNum", "names", "doneNum", "autoIncrTotalIfRepeat"]);

        otherOpts.autoIncrTotalIfRepeat = autoIncrTotalIfRepeat;
        Object.assign(doneCount, otherOpts);
        return doneCount;
      }
      /**
       *
       * @param keyOrOpts : DoneAgainOptions
       * @param namesOrNum : DoneNamesOrNum
       * @returns DoneCount | Error
       *
       * DoneAgainOptions = {key,namesOrNum,names,doneNum,...}
       */

    }, {
      key: "unsafeDoneAgain",
      value: function unsafeDoneAgain(keyOrOpts) {
        var _arguments2 = arguments,
            _this6 = this;

        var namesOrNum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return function (namesOrNum) {
          if (_typeof_1(keyOrOpts) == "object") {
            var key = keyOrOpts.key,
                namesOrNum = keyOrOpts.namesOrNum,
                names = keyOrOpts.names,
                doneNum = keyOrOpts.doneNum,
                otherProps = objectWithoutProperties(keyOrOpts, ["key", "namesOrNum", "names", "doneNum"]);

            namesOrNum = doneNum || namesOrNum || 1;
          } else {
            key = keyOrOpts;
          }

          var doneCount = _this6.doneMap.get(key);

          if (!doneCount) {
            // console.error("不存在 key 为 %s 的 DoneCount 实例；该 key 对应的 DoneCount 可能已经完成，请检查 相关配置选项是否正确； 传入的参数为: %o",key,arguments);
            var message = "\u4E0D\u5B58\u5728 key \u4E3A ".concat(key, " \u7684 DoneCount \u5B9E\u4F8B\uFF1B\u8BE5 key \u5BF9\u5E94\u7684 DoneCount \u53EF\u80FD\u5DF2\u7ECF\u5B8C\u6210\uFF0C\u8BF7\u68C0\u67E5 \u76F8\u5173\u914D\u7F6E\u9009\u9879\u662F\u5426\u6B63\u786E\uFF1B \u4F20\u5165\u7684\u53C2\u6570\u4E3A: ").concat(JSON.stringify(_arguments2));
            var err = new Error(message);
            err.name = "DoneCountManager";
            return err;
          }

          if (names) {
            doneCount.doneAgainNames(names);
          } else {
            doneCount.doneAgain(namesOrNum);
          }

          _this6.autoDelete(key, otherProps);

          return doneCount;
        }(namesOrNum);
      }
    }]);

    return NamedDoneCountManager;
  }(DoneCountManager);

  exports.DoneCount = DoneCount;
  exports.DoneCountManager = DoneCountManager;
  exports.NamedDoneCount = NamedDoneCount;
  exports.NamedDoneCountManager = NamedDoneCountManager;
  exports.autoDeleteMode_Delay = autoDeleteMode_Delay;
  exports.autoDeleteMode_Immediately = autoDeleteMode_Immediately;
  exports.autoDeleteMode_No = autoDeleteMode_No;
  exports.autoDeleteTarget_Done = autoDeleteTarget_Done;
  exports.autoDeleteTarget_ForcedDone = autoDeleteTarget_ForcedDone;
  exports.autoDeleteTarget_RealDone = autoDeleteTarget_RealDone;
  exports.conflictPolicy_Add = conflictPolicy_Add;
  exports.conflictPolicy_Recreate = conflictPolicy_Recreate;
  exports.conflictPolicy_Reset = conflictPolicy_Reset;
  exports.conflictPolicy_Update = conflictPolicy_Update;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
