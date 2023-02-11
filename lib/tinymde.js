(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TinyMDE = {}));
})(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function _wrapRegExp() {
    _wrapRegExp = function (re, groups) {
      return new BabelRegExp(re, void 0, groups);
    };
    var _super = RegExp.prototype,
      _groups = new WeakMap();
    function BabelRegExp(re, flags, groups) {
      var _this = new RegExp(re, flags);
      return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
    }
    function buildGroups(result, re) {
      var g = _groups.get(re);
      return Object.keys(g).reduce(function (groups, name) {
        var i = g[name];
        if ("number" == typeof i) groups[name] = result[i];else {
          for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length;) k++;
          groups[name] = result[i[k]];
        }
        return groups;
      }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) {
      var result = _super.exec.call(this, str);
      if (result) {
        result.groups = buildGroups(result, this);
        var indices = result.indices;
        indices && (indices.groups = buildGroups(indices, this));
      }
      return result;
    }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
      if ("string" == typeof substitution) {
        var groups = _groups.get(this);
        return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
          var group = groups[name];
          return "$" + (Array.isArray(group) ? group.join("$") : group);
        }));
      }
      if ("function" == typeof substitution) {
        var _this = this;
        return _super[Symbol.replace].call(this, str, function () {
          var args = arguments;
          return "object" != typeof args[args.length - 1] && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
        });
      }
      return _super[Symbol.replace].call(this, str, substitution);
    }, _wrapRegExp.apply(this, arguments);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
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
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
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
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$g =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$p = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$o = fails$p;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$o(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });

  var fails$n = fails$p;
  var functionBindNative = !fails$n(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {/* empty */}.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$2 = functionBindNative;
  var call$c = Function.prototype.call;
  var functionCall = NATIVE_BIND$2 ? call$c.bind(call$c) : function () {
    return call$c.apply(call$c, arguments);
  };

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({
    1: 2
  }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var createPropertyDescriptor$3 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var NATIVE_BIND$1 = functionBindNative;
  var FunctionPrototype$2 = Function.prototype;
  var call$b = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$2.bind.bind(call$b, call$b);
  var functionUncurryThisRaw = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$b.apply(fn, arguments);
    };
  };

  var uncurryThisRaw$1 = functionUncurryThisRaw;
  var toString$b = uncurryThisRaw$1({}.toString);
  var stringSlice$6 = uncurryThisRaw$1(''.slice);
  var classofRaw$2 = function (it) {
    return stringSlice$6(toString$b(it), 8, -1);
  };

  var classofRaw$1 = classofRaw$2;
  var uncurryThisRaw = functionUncurryThisRaw;
  var functionUncurryThis = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw$1(fn) === 'Function') return uncurryThisRaw(fn);
  };

  var uncurryThis$j = functionUncurryThis;
  var fails$m = fails$p;
  var classof$6 = classofRaw$2;
  var $Object$3 = Object;
  var split = uncurryThis$j(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$m(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$3('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$6(it) == 'String' ? split(it, '') : $Object$3(it);
  } : $Object$3;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$6 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$5 = isNullOrUndefined$6;
  var $TypeError$c = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$8 = function (it) {
    if (isNullOrUndefined$5(it)) throw $TypeError$c("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$7 = requireObjectCoercible$8;
  var toIndexedObject$4 = function (it) {
    return IndexedObject$1(requireObjectCoercible$7(it));
  };

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;
  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$g = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$f = isCallable$g;
  var $documentAll = documentAll_1;
  var documentAll = $documentAll.all;
  var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$f(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$f(it);
  };

  var global$f = global$g;
  var isCallable$e = isCallable$g;
  var aFunction = function (argument) {
    return isCallable$e(argument) ? argument : undefined;
  };
  var getBuiltIn$6 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$f[namespace]) : global$f[namespace] && global$f[namespace][method];
  };

  var uncurryThis$i = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$i({}.isPrototypeOf);

  var getBuiltIn$5 = getBuiltIn$6;
  var engineUserAgent = getBuiltIn$5('navigator', 'userAgent') || '';

  var global$e = global$g;
  var userAgent = engineUserAgent;
  var process = global$e.process;
  var Deno = global$e.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$2 = engineV8Version;
  var fails$l = fails$p;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$l(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$2 && V8_VERSION$2 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;
  var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$4 = getBuiltIn$6;
  var isCallable$d = isCallable$g;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var $Object$2 = Object;
  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$4('Symbol');
    return isCallable$d($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
  };

  var $String$3 = String;
  var tryToString$3 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$c = isCallable$g;
  var tryToString$2 = tryToString$3;
  var $TypeError$b = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$1 = function (argument) {
    if (isCallable$c(argument)) return argument;
    throw $TypeError$b(tryToString$2(argument) + ' is not a function');
  };

  var aCallable = aCallable$1;
  var isNullOrUndefined$4 = isNullOrUndefined$6;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$4 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$4(func) ? undefined : aCallable(func);
  };

  var call$a = functionCall;
  var isCallable$b = isCallable$g;
  var isObject$8 = isObject$9;
  var $TypeError$a = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$b(fn = input.toString) && !isObject$8(val = call$a(fn, input))) return val;
    if (isCallable$b(fn = input.valueOf) && !isObject$8(val = call$a(fn, input))) return val;
    if (pref !== 'string' && isCallable$b(fn = input.toString) && !isObject$8(val = call$a(fn, input))) return val;
    throw $TypeError$a("Can't convert object to primitive value");
  };

  var shared$4 = {exports: {}};

  var global$d = global$g;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$5 = Object.defineProperty;
  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$5(global$d, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$d[key] = value;
    }
    return value;
  };

  var global$c = global$g;
  var defineGlobalProperty$2 = defineGlobalProperty$3;
  var SHARED = '__core-js_shared__';
  var store$3 = global$c[SHARED] || defineGlobalProperty$2(SHARED, {});
  var sharedStore = store$3;

  var store$2 = sharedStore;
  (shared$4.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.26.0',
    mode: 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var requireObjectCoercible$6 = requireObjectCoercible$8;
  var $Object$1 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$6 = function (argument) {
    return $Object$1(requireObjectCoercible$6(argument));
  };

  var uncurryThis$h = functionUncurryThis;
  var toObject$5 = toObject$6;
  var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$5(it), key);
  };

  var uncurryThis$g = functionUncurryThis;
  var id = 0;
  var postfix = Math.random();
  var toString$a = uncurryThis$g(1.0.toString);
  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$a(++id + postfix, 36);
  };

  var global$b = global$g;
  var shared$3 = shared$4.exports;
  var hasOwn$8 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore = shared$3('wks');
  var Symbol$2 = global$b.Symbol;
  var symbolFor = Symbol$2 && Symbol$2['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;
  var wellKnownSymbol$e = function (name) {
    if (!hasOwn$8(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      var description = 'Symbol.' + name;
      if (NATIVE_SYMBOL && hasOwn$8(Symbol$2, name)) {
        WellKnownSymbolsStore[name] = Symbol$2[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    }
    return WellKnownSymbolsStore[name];
  };

  var call$9 = functionCall;
  var isObject$7 = isObject$9;
  var isSymbol$1 = isSymbol$2;
  var getMethod$3 = getMethod$4;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$d = wellKnownSymbol$e;
  var $TypeError$9 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$d('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$7(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$3(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$9(exoticToPrim, input, pref);
      if (!isObject$7(result) || isSymbol$1(result)) return result;
      throw $TypeError$9("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$3 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var global$a = global$g;
  var isObject$6 = isObject$9;
  var document$1 = global$a.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);
  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$c = descriptors;
  var fails$k = fails$p;
  var createElement = documentCreateElement$1;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$c && !fails$k(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var DESCRIPTORS$b = descriptors;
  var call$8 = functionCall;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$3;
  var toIndexedObject$3 = toIndexedObject$4;
  var toPropertyKey$2 = toPropertyKey$3;
  var hasOwn$7 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$3(O);
    P = toPropertyKey$2(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) {/* empty */}
    if (hasOwn$7(O, P)) return createPropertyDescriptor$2(!call$8(propertyIsEnumerableModule$1.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$a = descriptors;
  var fails$j = fails$p;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$a && fails$j(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {/* empty */}, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$5 = isObject$9;
  var $String$2 = String;
  var $TypeError$8 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$c = function (argument) {
    if (isObject$5(argument)) return argument;
    throw $TypeError$8($String$2(argument) + ' is not an object');
  };

  var DESCRIPTORS$9 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$b = anObject$c;
  var toPropertyKey$1 = toPropertyKey$3;
  var $TypeError$7 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$b(O);
    P = toPropertyKey$1(P);
    anObject$b(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$b(O);
    P = toPropertyKey$1(P);
    anObject$b(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$7('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$8 = descriptors;
  var definePropertyModule$5 = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$3;
  var createNonEnumerableProperty$4 = DESCRIPTORS$8 ? function (object, key, value) {
    return definePropertyModule$5.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$7 = descriptors;
  var hasOwn$6 = hasOwnProperty_1;
  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn$6(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$7 || DESCRIPTORS$7 && getDescriptor(FunctionPrototype$1, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$f = functionUncurryThis;
  var isCallable$a = isCallable$g;
  var store$1 = sharedStore;
  var functionToString = uncurryThis$f(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$a(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }
  var inspectSource$2 = store$1.inspectSource;

  var global$9 = global$g;
  var isCallable$9 = isCallable$g;
  var WeakMap$2 = global$9.WeakMap;
  var weakMapBasicDetection = isCallable$9(WeakMap$2) && /native code/.test(String(WeakMap$2));

  var shared$2 = shared$4.exports;
  var uid = uid$2;
  var keys$1 = shared$2('keys');
  var sharedKey$2 = function (key) {
    return keys$1[key] || (keys$1[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$8 = global$g;
  var isObject$4 = isObject$9;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
  var hasOwn$5 = hasOwnProperty_1;
  var shared$1 = sharedStore;
  var sharedKey$1 = sharedKey$2;
  var hiddenKeys$3 = hiddenKeys$4;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$8.TypeError;
  var WeakMap$1 = global$8.WeakMap;
  var set, get, has;
  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };
  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared$1.state) {
    var store = shared$1.state || (shared$1.state = new WeakMap$1());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$1('state');
    hiddenKeys$3[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$5(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$3(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$5(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$5(it, STATE);
    };
  }
  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var fails$i = fails$p;
  var isCallable$8 = isCallable$g;
  var hasOwn$4 = hasOwnProperty_1;
  var DESCRIPTORS$6 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule = internalState;
  var enforceInternalState$1 = InternalStateModule.enforce;
  var getInternalState$1 = InternalStateModule.get;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$4 = Object.defineProperty;
  var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$i(function () {
    return defineProperty$4(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$4(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS$6) defineProperty$4(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$4(options, 'arity') && value.length !== options.arity) {
      defineProperty$4(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn$4(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$6) defineProperty$4(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState$1(value);
    if (!hasOwn$4(state, 'source')) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$8(this) && getInternalState$1(this).source || inspectSource$1(this);
  }, 'toString');

  var isCallable$7 = isCallable$g;
  var definePropertyModule$4 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltIn$3.exports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;
  var defineBuiltIn$4 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$7(value)) makeBuiltIn$1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
      } catch (error) {/* empty */}
      if (simple) O[key] = value;else definePropertyModule$4.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O;
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$1 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$5 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$4 = toIntegerOrInfinity$5;
  var max$3 = Math.max;
  var min$4 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$3 = function (index, length) {
    var integer = toIntegerOrInfinity$4(index);
    return integer < 0 ? max$3(integer + length, 0) : min$4(integer, length);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$5;
  var min$3 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$4 = function (argument) {
    return argument > 0 ? min$3(toIntegerOrInfinity$3(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$3 = toLength$4;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$4 = function (obj) {
    return toLength$3(obj.length);
  };

  var toIndexedObject$2 = toIndexedObject$4;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3;
  var lengthOfArrayLike$3 = lengthOfArrayLike$4;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$2 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$2($this);
      var length = lengthOfArrayLike$3(O);
      var index = toAbsoluteIndex$2(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$2(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$2(false)
  };

  var uncurryThis$e = functionUncurryThis;
  var hasOwn$3 = hasOwnProperty_1;
  var toIndexedObject$1 = toIndexedObject$4;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;
  var push$2 = uncurryThis$e([].push);
  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$1(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$2(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;
  var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$3 = getBuiltIn$6;
  var uncurryThis$d = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var anObject$a = anObject$c;
  var concat$2 = uncurryThis$d([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$3('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$a(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
    return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$2 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$3 = objectDefineProperty;
  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$3.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$h = fails$p;
  var isCallable$6 = isCallable$g;
  var replacement = /#|\.prototype\./;
  var isForced$2 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable$6(detection) ? fails$h(detection) : !!detection;
  };
  var normalize = isForced$2.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced$2.data = {};
  var NATIVE = isForced$2.NATIVE = 'N';
  var POLYFILL = isForced$2.POLYFILL = 'P';
  var isForced_1 = isForced$2;

  var global$7 = global$g;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
  var defineBuiltIn$3 = defineBuiltIn$4;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced$1 = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$7;
    } else if (STATIC) {
      target = global$7[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$7[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$2(sourceProperty, 'sham', true);
      }
      defineBuiltIn$3(target, key, sourceProperty, options);
    }
  };

  var wellKnownSymbol$c = wellKnownSymbol$e;
  var TO_STRING_TAG$1 = wellKnownSymbol$c('toStringTag');
  var test = {};
  test[TO_STRING_TAG$1] = 'z';
  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var isCallable$5 = isCallable$g;
  var classofRaw = classofRaw$2;
  var wellKnownSymbol$b = wellKnownSymbol$e;
  var TO_STRING_TAG = wellKnownSymbol$b('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {/* empty */}
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$5(O.callee) ? 'Arguments' : result;
  };

  var classof$4 = classof$5;
  var $String$1 = String;
  var toString$9 = function (argument) {
    if (classof$4(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var anObject$9 = anObject$c;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$9(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$g = fails$p;
  var global$6 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$6.RegExp;
  var UNSUPPORTED_Y$3 = fails$g(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY$1 = UNSUPPORTED_Y$3 || fails$g(function () {
    return !$RegExp$2('a', 'y').sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y$3 || fails$g(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$1,
    UNSUPPORTED_Y: UNSUPPORTED_Y$3
  };

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$2 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS$5 = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$2 = objectDefineProperty;
  var anObject$8 = anObject$c;
  var toIndexedObject = toIndexedObject$4;
  var objectKeys$1 = objectKeys$2;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$8(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$2 = getBuiltIn$6;
  var html$1 = getBuiltIn$2('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var anObject$7 = anObject$c;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement = documentCreateElement$1;
  var sharedKey = sharedKey$2;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');
  var EmptyConstructor = function () {/* empty */};
  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {/* ignore */}
    NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };
  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$7(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var fails$f = fails$p;
  var global$5 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$5.RegExp;
  var regexpUnsupportedDotAll = fails$f(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$e = fails$p;
  var global$4 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$4.RegExp;
  var regexpUnsupportedNcg = fails$e(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$7 = functionCall;
  var uncurryThis$c = functionUncurryThis;
  var toString$8 = toString$9;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$2 = regexpStickyHelpers;
  var shared = shared$4.exports;
  var create$1 = objectCreate;
  var getInternalState = internalState.get;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = uncurryThis$c(''.charAt);
  var indexOf = uncurryThis$c(''.indexOf);
  var replace$3 = uncurryThis$c(''.replace);
  var stringSlice$5 = uncurryThis$c(''.slice);
  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$7(nativeExec, re1, 'a');
    call$7(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var UNSUPPORTED_Y$2 = stickyHelpers$2.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;
  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState(re);
      var str = toString$8(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;
      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$7(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }
      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$2 && re.sticky;
      var flags = call$7(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = replace$3(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }
        strCopy = stringSlice$5(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }
      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = call$7(nativeExec, sticky ? reCopy : re, strCopy);
      if (sticky) {
        if (match) {
          match.input = stringSlice$5(match.input, charsAdded);
          match[0] = stringSlice$5(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$7(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }
      if (match && groups) {
        match.groups = object = create$1(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }
      return match;
    };
  }
  var regexpExec$3 = patchedExec;

  var $$8 = _export;
  var exec$4 = regexpExec$3;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$8({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$4
  }, {
    exec: exec$4
  });

  var DESCRIPTORS$4 = descriptors;
  var uncurryThis$b = functionUncurryThis;
  var call$6 = functionCall;
  var fails$d = fails$p;
  var objectKeys = objectKeys$2;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$4 = toObject$6;
  var IndexedObject = indexedObject;

  // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign;
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$3 = Object.defineProperty;
  var concat$1 = uncurryThis$b([].concat);

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$d(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$4 && $assign({
      b: 1
    }, $assign(defineProperty$3({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$3(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$4(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$4 || call$6(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    }
    return T;
  } : $assign;

  var $$7 = _export;
  var assign = objectAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$7({
    target: 'Object',
    stat: true,
    arity: 2,
    forced: Object.assign !== assign
  }, {
    assign: assign
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$a = functionUncurryThis;
  var defineBuiltIn$2 = defineBuiltIn$4;
  var regexpExec$2 = regexpExec$3;
  var fails$c = fails$p;
  var wellKnownSymbol$a = wellKnownSymbol$e;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
  var SPECIES$4 = wellKnownSymbol$a('species');
  var RegExpPrototype$4 = RegExp.prototype;
  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$a(KEY);
    var DELEGATES_TO_SYMBOL = !fails$c(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$c(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$4] = function () {
          return re;
        };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }
      re.exec = function () {
        execCalled = true;
        return null;
      };
      re[SYMBOL]('');
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var uncurriedNativeRegExpMethod = uncurryThis$a(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$a(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$2 || $exec === RegExpPrototype$4.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: uncurriedNativeRegExpMethod(regexp, str, arg2)
            };
          }
          return {
            done: true,
            value: uncurriedNativeMethod(str, regexp, arg2)
          };
        }
        return {
          done: false
        };
      });
      defineBuiltIn$2(String.prototype, KEY, methods[0]);
      defineBuiltIn$2(RegExpPrototype$4, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$4[SYMBOL], 'sham', true);
  };

  var uncurryThis$9 = functionUncurryThis;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$5;
  var toString$7 = toString$9;
  var requireObjectCoercible$5 = requireObjectCoercible$8;
  var charAt$3 = uncurryThis$9(''.charAt);
  var charCodeAt = uncurryThis$9(''.charCodeAt);
  var stringSlice$4 = uncurryThis$9(''.slice);
  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$7(requireObjectCoercible$5($this));
      var position = toIntegerOrInfinity$2(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$3(S, position) : first : CONVERT_TO_STRING ? stringSlice$4(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };
  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };

  var charAt$2 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$3 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  var call$5 = functionCall;
  var anObject$6 = anObject$c;
  var isCallable$4 = isCallable$g;
  var classof$3 = classofRaw$2;
  var regexpExec$1 = regexpExec$3;
  var $TypeError$6 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$4(exec)) {
      var result = call$5(exec, R, S);
      if (result !== null) anObject$6(result);
      return result;
    }
    if (classof$3(R) === 'RegExp') return call$5(regexpExec$1, R, S);
    throw $TypeError$6('RegExp#exec called on incompatible receiver');
  };

  var call$4 = functionCall;
  var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
  var anObject$5 = anObject$c;
  var isNullOrUndefined$3 = isNullOrUndefined$6;
  var toLength$2 = toLength$4;
  var toString$6 = toString$9;
  var requireObjectCoercible$4 = requireObjectCoercible$8;
  var getMethod$2 = getMethod$4;
  var advanceStringIndex$2 = advanceStringIndex$3;
  var regExpExec$1 = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic$2('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$4(this);
      var matcher = isNullOrUndefined$3(regexp) ? undefined : getMethod$2(regexp, MATCH);
      return matcher ? call$4(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$6(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$5(this);
      var S = toString$6(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec$1(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$6(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$2(S, toLength$2(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  });

  var classof$2 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$3 = Array.isArray || function isArray(argument) {
    return classof$2(argument) == 'Array';
  };

  var $TypeError$5 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$2 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$5('Maximum allowed index exceeded');
    return it;
  };

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$3;
  var createProperty$3 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var uncurryThis$8 = functionUncurryThis;
  var fails$b = fails$p;
  var isCallable$3 = isCallable$g;
  var classof$1 = classof$5;
  var getBuiltIn$1 = getBuiltIn$6;
  var inspectSource = inspectSource$2;
  var noop = function () {/* empty */};
  var empty = [];
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$3 = uncurryThis$8(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$3(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$3(argument)) return false;
    switch (classof$1(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$3(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };
  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$2 = !construct || fails$b(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray$2 = isArray$3;
  var isConstructor$1 = isConstructor$2;
  var isObject$3 = isObject$9;
  var wellKnownSymbol$9 = wellKnownSymbol$e;
  var SPECIES$3 = wellKnownSymbol$9('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$2(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$1(C) && (C === $Array$1 || isArray$2(C.prototype))) C = undefined;else if (isObject$3(C)) {
        C = C[SPECIES$3];
        if (C === null) C = undefined;
      }
    }
    return C === undefined ? $Array$1 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$2 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var fails$a = fails$p;
  var wellKnownSymbol$8 = wellKnownSymbol$e;
  var V8_VERSION$1 = engineV8Version;
  var SPECIES$2 = wellKnownSymbol$8('species');
  var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$1 >= 51 || !fails$a(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$2] = function () {
        return {
          foo: 1
        };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$6 = _export;
  var fails$9 = fails$p;
  var isArray$1 = isArray$3;
  var isObject$2 = isObject$9;
  var toObject$3 = toObject$6;
  var lengthOfArrayLike$2 = lengthOfArrayLike$4;
  var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$2;
  var createProperty$2 = createProperty$3;
  var arraySpeciesCreate$1 = arraySpeciesCreate$2;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
  var wellKnownSymbol$7 = wellKnownSymbol$e;
  var V8_VERSION = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails$9(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');
  var isConcatSpreadable = function (O) {
    if (!isObject$2(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
  };
  var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$6({
    target: 'Array',
    proto: true,
    arity: 1,
    forced: FORCED$2
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$3(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$2(E);
          doesNotExceedSafeInteger$1(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger$1(n + 1);
          createProperty$2(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var svg = {
    blockquote: "<svg height=\"18\" width=\"18\"><rect width=\"5\" height=\"5\" x=\"3\" y=\"4\" ry=\"1\"/><rect ry=\"1\" y=\"4\" x=\"10\" height=\"5\" width=\"5\"/><path d=\"M8 6.999v3c0 1-1 3-1 3s-.331 1-1.331 1h-1c-1 0-.669-1-.669-1s1-2 1-3v-3zm7 0v3c0 1-1 3-1 3s-.331 1-1.331 1h-1c-1 0-.669-1-.669-1s1-2 1-3v-3z\"/></svg>",
    bold: "<svg height=\"18\" width=\"18\"><path d=\"M4 2a1 1 0 00-1 1v12a1 1 0 001 1h6c4 0 5-2 5-4 0-1.322-.434-2.636-1.885-3.381C13.772 7.885 14 6.945 14 6c0-2-1-4-5-4zm1 2h4c1.668 0 2.32.393 2.6.672.28.279.4.662.4 1.328s-.12 1.057-.4 1.338c-.275.274-1.014.646-2.6.662H5zm5 6c1.666.005 2.318.388 2.596.666.277.278.404.667.404 1.334s-.127 1.06-.404 1.338c-.278.278-.93.66-2.596.662l-4.992.004L5 10z\"/></svg>",
    clear_formatting: "<svg height=\"18\" width=\"18\"><path d=\"M11.03 1a1 1 0 00-.74.3l-9 9a1 1 0 000 1.4l4 4A1 1 0 006 16h2a1 1 0 00.7-.3l8-8a1 1 0 000-1.4l-5-5a1 1 0 00-.67-.3zM8.7 5.7l3.58 3.6L7.6 14H6.4l-3-3 5.3-5.3z\"/><rect ry=\".8\" rx=\".8\" y=\"14\" x=\"16\" height=\"2\" width=\"2\"/><rect width=\"2\" height=\"2\" x=\"13\" y=\"14\" rx=\".8\" ry=\".8\"/><rect ry=\".8\" rx=\".8\" y=\"14\" x=\"10\" height=\"2\" width=\"2\"/></svg>",
    code: "<svg height=\"18\" width=\"18\"><path d=\"M13.5 2.994a.5.5 0 00-.5.5.5.5 0 000 .034V4.53a5.993 5.993 0 00-7.451-.445A6 6 0 1012.45 13.9a5.99 5.99 0 001.346-1.334.5.5 0 00.096-.101.5.5 0 00-.12-.698.5.5 0 00-.697.12l-.004-.005a5 5 0 01-1.197 1.2 5 5 0 111.215-6.965.5.5 0 00.697.12.5.5 0 00.211-.44V4.745H14V3.493a.5.5 0 00-.5-.5z\"/></svg>",
    h1: "<svg height=\"18\" width=\"18\"><path d=\"M3 2s0-1 1-1h1c1 0 1 1 1 1v6h6V2s0-1 1-1h1c1 0 1 1 1 1v14s0 1-1 1h-1c-1 0-1-1-1-1v-6H6v6s0 1-1 1H4c-1 0-1-1-1-1z\"/></svg>",
    h2: "<svg height=\"18\" width=\"18\"><path d=\"M4 2s0-1 1-1 1 1 1 1v6c1-1 2-1 4-1 3 0 4 2 4 4v5s0 1-1 1-1-1-1-1v-5c0-1.094-1-2-2-2-2 0-3 0-4 2v5s0 1-1 1-1-1-1-1z\"/></svg>",
    hr: "<svg height=\"18\" width=\"18\"><rect ry=\"1\" y=\"8\" height=\"2\" width=\"18\" style=\"font-variation-settings:normal;marker:none\"/></svg>",
    image: "<svg height=\"18\" width=\"18\"><path d=\"M1 2v14h16V2H1zm2 2h12v7l-3-3-4 4-2-2-3 3V4z\"/><circle r=\"1.5\" cy=\"6.5\" cx=\"5.5\"/></svg>",
    italic: "<svg height=\"18\" width=\"18\"><path d=\"M9 2a1 1 0 000 2L7 14a1 1 0 100 2h2a1 1 0 000-2l2-10a1 1 0 100-2z\"/></svg>",
    link: "<svg height=\"18\" width=\"18\"><path d=\"M9.07 5.18a3.9 3.9 0 00-1.52.43C6.31 6.22 5.3 7.29 4.3 8.29c-1 1-2.07 2.02-2.68 3.26-.31.62-.5 1.33-.41 2.07.09.75.48 1.47 1.1 2.09.61.61 1.33 1 2.08 1.1.74.09 1.45-.1 2.07-.42 1.24-.61 2.26-1.68 3.26-2.68.46-.47.94-.94 1.39-1.44l-.43.26c-.68.34-1.49.56-2.36.46-.2-.03-.4-.08-.6-.14-.79.76-1.55 1.45-2.16 1.76-.38.19-.67.24-.92.21-.26-.03-.54-.14-.92-.53-.39-.38-.5-.66-.53-.91-.03-.26.02-.55.21-.93.39-.76 1.32-1.74 2.32-2.74 1-1 1.98-1.93 2.74-2.32.38-.19.67-.24.93-.21.25.03.53.14.91.53.39.38.5.66.53.92v.06l1.12-1.06.44-.47c-.18-.3-.4-.6-.67-.87-.62-.61-1.34-1-2.09-1.1a3.08 3.08 0 00-.55-.01z\"/><path d=\"M13.07.86a3.9 3.9 0 00-1.52.43c-1.24.62-2.26 1.69-3.26 2.69-.46.47-.94.94-1.39 1.43.15-.08.28-.18.43-.25a4.4 4.4 0 012.36-.46c.2.02.4.07.6.14.79-.77 1.55-1.46 2.16-1.76.38-.19.67-.25.93-.21.25.03.53.14.91.52.39.38.5.66.53.92.03.26-.02.55-.21.93-.39.76-1.32 1.74-2.32 2.74-1 1-1.98 1.93-2.74 2.31-.38.2-.67.25-.93.22-.25-.04-.53-.15-.91-.53-.39-.38-.5-.66-.53-.92V9c-.36.33-.73.67-1.12 1.06l-.43.46c.17.3.4.6.66.87.62.62 1.34 1 2.08 1.1.75.1 1.46-.1 2.08-.41 1.24-.62 2.26-1.69 3.26-2.69s2.07-2.02 2.68-3.26c.31-.62.5-1.32.41-2.07a3.63 3.63 0 00-1.1-2.08c-.61-.62-1.33-1-2.07-1.1a3.08 3.08 0 00-.56-.02z\"/></svg>",
    ol: "<svg height=\"18\" width=\"18\"><path d=\"M1.5 7a.5.5 0 100 1h1a.5.5 0 01.5.5c0 .164-.08.31-.14.355l-1.655 1.25A.492.492 0 001 10.5a.5.5 0 00.5.5h2a.5.5 0 000-1H3l.398-.299A1.5 1.5 0 002.5 7z\"/><path d=\"M1.5 12c-.667 0-.667 1 0 1h1.25c.333 0 .333.5 0 .5H2.5c-.667 0-.667 1 0 1h.25c.333 0 .333.5 0 .5H1.5c-.667 0-.667 1 0 1h1c.398 0 .78-.131 1.06-.365.282-.235.44-.554.44-.885a1.121 1.121 0 00-.303-.75c.191-.204.3-.47.303-.75 0-.332-.158-.651-.44-.885-.3-.241-.675-.37-1.06-.365z\"/><rect y=\"13\" x=\"6\" height=\"2\" width=\"12\" ry=\"1\"/><rect ry=\"1\" width=\"12\" height=\"2\" x=\"6\" y=\"8\"/><rect y=\"3\" x=\"6\" height=\"2\" width=\"12\" ry=\"1\"/><path d=\"M1.5 2a.5.5 0 100 1H2v2h-.5a.5.5 0 100 1h2a.5.5 0 100-1H3V2.5c0-.277-.223-.5-.5-.5z\"/></svg>",
    strikethrough: "<svg width=\"18\" height=\"18\"><path d=\"M10 2C6 2 4 4 4 6c0 .338.08.672.193 1h2.34C6.113 6.629 6 6.295 6 6c0-.334.117-.725.691-1.154C7.265 4.416 8.331 4 10 4h3a1 1 0 000-2zm1.477 9c.413.368.523.706.523 1 0 .334-.127.712-.701 1.143-.575.43-1.632.85-3.299.857l-1.006.007V14H5a1 1 0 000 2h3c4 0 6-2 6-4 0-.338-.081-.672-.195-1z\"/><rect ry=\"1\" y=\"8\" x=\"1\" height=\"2\" width=\"16\"/></svg>",
    ul: "<svg height=\"18\" width=\"18\"><circle cx=\"2\" cy=\"9\" r=\"2\"/><circle cy=\"4\" cx=\"2\" r=\"2\"/><rect y=\"3\" x=\"6\" height=\"2\" width=\"12\" ry=\"1\"/><circle cx=\"2\" cy=\"14\" r=\"2\"/><rect ry=\"1\" width=\"12\" height=\"2\" x=\"6\" y=\"8\"/><rect y=\"13\" x=\"6\" height=\"2\" width=\"12\" ry=\"1\"/></svg>"
  };

  var isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
  var DefaultCommands = {
    'bold': {
      name: 'bold',
      action: 'bold',
      innerHTML: svg.bold,
      title: 'Bold',
      hotkey: 'Mod-B'
    },
    'italic': {
      name: 'italic',
      action: 'italic',
      innerHTML: svg.italic,
      title: 'Italic',
      hotkey: 'Mod-I'
    },
    'strikethrough': {
      name: 'strikethrough',
      action: 'strikethrough',
      innerHTML: svg.strikethrough,
      title: 'Strikethrough',
      hotkey: 'Mod2-Shift-5'
    },
    'code': {
      name: 'code',
      action: 'code',
      innerHTML: svg.code,
      title: 'Format as code'
    },
    'h1': {
      name: 'h1',
      action: 'h1',
      innerHTML: svg.h1,
      title: 'Level 1 heading',
      hotkey: 'Mod-Shift-1'
    },
    'h2': {
      name: 'h2',
      action: 'h2',
      innerHTML: svg.h2,
      title: 'Level 2 heading',
      hotkey: 'Mod-Shift-2'
    },
    'ul': {
      name: 'ul',
      action: 'ul',
      innerHTML: svg.ul,
      title: 'Bulleted list'
    },
    'ol': {
      name: 'ol',
      action: 'ol',
      innerHTML: svg.ol,
      title: 'Numbered list'
    },
    'blockquote': {
      name: 'blockquote',
      action: 'blockquote',
      innerHTML: svg.blockquote,
      title: 'Quote',
      hotkey: 'Mod2-Shift-Q'
    },
    'insertLink': {
      name: 'insertLink',
      action: function action(editor) {
        if (editor.isInlineFormattingAllowed()) editor.wrapSelection('[', ']()');
      },
      enabled: function enabled(editor, focus, anchor) {
        return editor.isInlineFormattingAllowed(focus, anchor) ? false : null;
      },
      innerHTML: svg.link,
      title: 'Insert link',
      hotkey: 'Mod-K'
    },
    'insertImage': {
      name: 'insertImage',
      action: function action(editor) {
        if (editor.isInlineFormattingAllowed()) editor.wrapSelection('![', ']()');
      },
      enabled: function enabled(editor, focus, anchor) {
        return editor.isInlineFormattingAllowed(focus, anchor) ? false : null;
      },
      innerHTML: svg.image,
      title: 'Insert image',
      hotkey: 'Mod2-Shift-I'
    },
    'hr': {
      name: 'hr',
      action: function action(editor) {
        return editor.paste('\n***\n');
      },
      enabled: function enabled() {
        return false;
      },
      innerHTML: svg.hr,
      title: 'Insert horizontal line',
      hotkey: 'Mod2-Shift-L'
    }
  };
  var CommandBar = /*#__PURE__*/function () {
    function CommandBar(props) {
      var _this = this;
      _classCallCheck(this, CommandBar);
      this.e = null;
      this.editor = null;
      this.commands = [];
      this.buttons = {};
      this.state = {};
      this.hotkeys = [];
      var element = props.element;
      if (element && !element.tagName) {
        element = document.getElementById(props.element);
      }
      if (!element) {
        element = document.body;
      }
      this.createCommandBarElement(element, props.commands || ['bold', 'italic', 'strikethrough', '|', 'code', '|', 'h1', 'h2', '|', 'ul', 'ol', '|', 'blockquote', 'hr', '|', 'insertLink', 'insertImage']);
      document.addEventListener('keydown', function (e) {
        return _this.handleKeydown(e);
      });
      if (props.editor) this.setEditor(props.editor);
    }
    _createClass(CommandBar, [{
      key: "createCommandBarElement",
      value: function createCommandBarElement(parentElement, commands) {
        var _this2 = this;
        this.e = document.createElement('div');
        this.e.className = 'TMCommandBar';
        var _iterator = _createForOfIteratorHelper(commands),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var command = _step.value;
            if (command == '|') {
              var el = document.createElement('div');
              el.className = 'TMCommandDivider';
              this.e.appendChild(el);
            } else {
              var _ret = function () {
                var commandName = void 0;
                if (typeof command == "string") {
                  // Reference to default command

                  if (DefaultCommands[command]) {
                    commandName = command;
                    _this2.commands[commandName] = DefaultCommands[commandName];
                  } else {
                    return "continue";
                  }
                } else if (_typeof(command) == "object" && command.name) {
                  commandName = command.name;
                  _this2.commands[commandName] = {};
                  if (DefaultCommands[commandName]) Object.assign(_this2.commands[commandName], DefaultCommands[commandName]);
                  Object.assign(_this2.commands[commandName], command);
                } else {
                  return "continue";
                }
                var title = _this2.commands[commandName].title || commandName;
                if (_this2.commands[commandName].hotkey) {
                  var keys = _this2.commands[commandName].hotkey.split('-');
                  // construct modifiers
                  var modifiers = [];
                  var modifierexplanation = [];
                  for (var i = 0; i < keys.length - 1; i++) {
                    switch (keys[i]) {
                      case 'Ctrl':
                        modifiers.push('ctrlKey');
                        modifierexplanation.push('Ctrl');
                        break;
                      case 'Cmd':
                        modifiers.push('metaKey');
                        modifierexplanation.push('⌘');
                        break;
                      case 'Alt':
                        modifiers.push('altKey');
                        modifierexplanation.push('Alt');
                        break;
                      case 'Option':
                        modifiers.push('altKey');
                        modifierexplanation.push('⌥');
                        break;
                      case 'Win':
                        modifiers.push('metaKey');
                        modifierexplanation.push('⊞ Win');
                        break;
                      case 'Shift':
                        modifiers.push('shiftKey');
                        modifierexplanation.push('⇧');
                        break;
                      case 'Mod':
                        // Mod is a convenience mechanism: Ctrl on Windows, Cmd on Mac
                        if (isMacLike) {
                          modifiers.push('metaKey');
                          modifierexplanation.push('⌘');
                        } else {
                          modifiers.push('ctrlKey');
                          modifierexplanation.push('Ctrl');
                        }
                        break;
                      case 'Mod2':
                        modifiers.push('altKey');
                        if (isMacLike) modifierexplanation.push('⌥');else modifierexplanation.push('Alt');
                        break;
                      // Mod2 is a convenience mechanism: Alt on Windows, Option on Mac
                    }
                  }

                  modifierexplanation.push(keys[keys.length - 1]);
                  var hotkey = {
                    modifiers: modifiers,
                    command: commandName
                  };
                  // TODO Right now this is working only for letters and numbers
                  if (keys[keys.length - 1].match(/^[0-9]$/)) {
                    hotkey.code = "Digit".concat(keys[keys.length - 1]);
                  } else {
                    hotkey.key = keys[keys.length - 1].toLowerCase();
                  }
                  _this2.hotkeys.push(hotkey);
                  title = title.concat(" (".concat(modifierexplanation.join('+'), ")"));
                }
                _this2.buttons[commandName] = document.createElement('div');
                _this2.buttons[commandName].className = 'TMCommandButton TMCommandButton_Disabled';
                _this2.buttons[commandName].title = title;
                _this2.buttons[commandName].innerHTML = _this2.commands[commandName].innerHTML;
                _this2.buttons[commandName].addEventListener('mousedown', function (e) {
                  return _this2.handleClick(commandName, e);
                });
                _this2.e.appendChild(_this2.buttons[commandName]);
              }();
              if (_ret === "continue") continue;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        parentElement.appendChild(this.e);
      }
    }, {
      key: "handleClick",
      value: function handleClick(commandName, event) {
        if (!this.editor) return;
        event.preventDefault();
        if (typeof this.commands[commandName].action == "string") {
          if (this.state[commandName] === false) this.editor.setCommandState(commandName, true);else this.editor.setCommandState(commandName, false);
        } else if (typeof this.commands[commandName].action == "function") {
          this.commands[commandName].action(this.editor);
        }
      }
    }, {
      key: "setEditor",
      value: function setEditor(editor) {
        var _this3 = this;
        this.editor = editor;
        editor.addEventListener('selection', function (e) {
          return _this3.handleSelection(e);
        });
      }
    }, {
      key: "handleSelection",
      value: function handleSelection(event) {
        if (event.commandState) {
          for (var command in this.commands) {
            if (event.commandState[command] === undefined) {
              if (this.commands[command].enabled) this.state[command] = this.commands[command].enabled(this.editor, event.focus, event.anchor);else this.state[command] = event.focus ? false : null;
            } else {
              this.state[command] = event.commandState[command];
            }
            if (this.state[command] === true) {
              this.buttons[command].className = 'TMCommandButton TMCommandButton_Active';
            } else if (this.state[command] === false) {
              this.buttons[command].className = 'TMCommandButton TMCommandButton_Inactive';
            } else {
              this.buttons[command].className = 'TMCommandButton TMCommandButton_Disabled';
            }
          }
        }
      }
    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        var _iterator2 = _createForOfIteratorHelper(this.hotkeys),
          _step2;
        try {
          outer: for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var hotkey = _step2.value;
            if (hotkey.key && event.key.toLowerCase() == hotkey.key || hotkey.code && event.code == hotkey.code) {
              // Key matches hotkey. Look for any required modifier that wasn't pressed
              var _iterator3 = _createForOfIteratorHelper(hotkey.modifiers),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var modifier = _step3.value;
                  if (!event[modifier]) continue outer;
                }
                // Everything matches.
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              this.handleClick(hotkey.command, event);
              return;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }]);
    return CommandBar;
  }();

  var NATIVE_BIND = functionBindNative;
  var FunctionPrototype = Function.prototype;
  var apply$2 = FunctionPrototype.apply;
  var call$3 = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$3.bind(apply$2) : function () {
    return call$3.apply(apply$2, arguments);
  });

  var isObject$1 = isObject$9;
  var classof = classofRaw$2;
  var wellKnownSymbol$6 = wellKnownSymbol$e;
  var MATCH$2 = wellKnownSymbol$6('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
  };

  var isConstructor = isConstructor$2;
  var tryToString$1 = tryToString$3;
  var $TypeError$4 = TypeError;

  // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw $TypeError$4(tryToString$1(argument) + ' is not a constructor');
  };

  var anObject$4 = anObject$c;
  var aConstructor = aConstructor$1;
  var isNullOrUndefined$2 = isNullOrUndefined$6;
  var wellKnownSymbol$5 = wellKnownSymbol$e;
  var SPECIES$1 = wellKnownSymbol$5('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$4(O).constructor;
    var S;
    return C === undefined || isNullOrUndefined$2(S = anObject$4(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
  };

  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var lengthOfArrayLike$1 = lengthOfArrayLike$4;
  var createProperty$1 = createProperty$3;
  var $Array = Array;
  var max$2 = Math.max;
  var arraySliceSimple = function (O, start, end) {
    var length = lengthOfArrayLike$1(O);
    var k = toAbsoluteIndex$1(start, length);
    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
    var result = $Array(max$2(fin - k, 0));
    for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
    result.length = n;
    return result;
  };

  var apply$1 = functionApply;
  var call$2 = functionCall;
  var uncurryThis$7 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$3 = anObject$c;
  var isNullOrUndefined$1 = isNullOrUndefined$6;
  var isRegExp$2 = isRegexp;
  var requireObjectCoercible$3 = requireObjectCoercible$8;
  var speciesConstructor = speciesConstructor$1;
  var advanceStringIndex$1 = advanceStringIndex$3;
  var toLength$1 = toLength$4;
  var toString$5 = toString$9;
  var getMethod$1 = getMethod$4;
  var arraySlice = arraySliceSimple;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var stickyHelpers$1 = regexpStickyHelpers;
  var fails$8 = fails$p;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$2 = Math.min;
  var $push = [].push;
  var exec$2 = uncurryThis$7(/./.exec);
  var push$1 = uncurryThis$7($push);
  var stringSlice$3 = uncurryThis$7(''.slice);

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$8(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  // @@split logic
  fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ('abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = toString$5(requireObjectCoercible$3(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegExp$2(separator)) {
          return call$2(nativeSplit, string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = call$2(regexpExec, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            push$1(output, stringSlice$3(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) apply$1($push, output, arraySlice(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !exec$2(separatorCopy, '')) push$1(output, '');
        } else push$1(output, stringSlice$3(string, lastLastIndex));
        return output.length > lim ? arraySlice(output, 0, lim) : output;
      };
      // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$2(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;
    return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$3(this);
      var splitter = isNullOrUndefined$1(separator) ? undefined : getMethod$1(separator, SPLIT);
      return splitter ? call$2(splitter, separator, O, limit) : call$2(internalSplit, toString$5(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$3(this);
      var S = toString$5(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y$1 ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y$1 ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y$1 ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y$1 ? stringSlice$3(S, q) : S);
        var e;
        if (z === null || (e = min$2(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y$1 ? q : 0)), S.length)) === p) {
          q = advanceStringIndex$1(S, q, unicodeMatching);
        } else {
          push$1(A, stringSlice$3(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$1(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$1(A, stringSlice$3(S, p));
      return A;
    }];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y$1);

  var uncurryThis$6 = functionUncurryThis;
  var toObject$2 = toObject$6;
  var floor = Math.floor;
  var charAt$1 = uncurryThis$6(''.charAt);
  var replace$2 = uncurryThis$6(''.replace);
  var stringSlice$2 = uncurryThis$6(''.slice);
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject$2(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace$2(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt$1(ch, 0)) {
        case '$':
          return '$';
        case '&':
          return matched;
        case '`':
          return stringSlice$2(str, 0, position);
        case "'":
          return stringSlice$2(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$2(ch, 1, -1)];
          break;
        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var apply = functionApply;
  var call$1 = functionCall;
  var uncurryThis$5 = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$7 = fails$p;
  var anObject$2 = anObject$c;
  var isCallable$2 = isCallable$g;
  var isNullOrUndefined = isNullOrUndefined$6;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$5;
  var toLength = toLength$4;
  var toString$4 = toString$9;
  var requireObjectCoercible$2 = requireObjectCoercible$8;
  var advanceStringIndex = advanceStringIndex$3;
  var getMethod = getMethod$4;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol$4 = wellKnownSymbol$e;
  var REPLACE = wellKnownSymbol$4('replace');
  var max$1 = Math.max;
  var min$1 = Math.min;
  var concat = uncurryThis$5([].concat);
  var push = uncurryThis$5([].push);
  var stringIndexOf$2 = uncurryThis$5(''.indexOf);
  var stringSlice$1 = uncurryThis$5(''.slice);
  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  }();
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$7(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$2(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer ? call$1(replacer, searchValue, O, replaceValue) : call$1(nativeReplace, toString$4(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject$2(this);
      var S = toString$4(string);
      if (typeof replaceValue == 'string' && stringIndexOf$2(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$2(replaceValue, '$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }
      var functionalReplace = isCallable$2(replaceValue);
      if (!functionalReplace) replaceValue = toString$4(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        push(results, result);
        if (!global) break;
        var matchStr = toString$4(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$4(result[0]);
        var position = max$1(min$1(toIntegerOrInfinity$1(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString$4(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$1(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  // a string of all valid unicode whitespaces
  var whitespaces$3 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var uncurryThis$4 = functionUncurryThis;
  var requireObjectCoercible$1 = requireObjectCoercible$8;
  var toString$3 = toString$9;
  var whitespaces$2 = whitespaces$3;
  var replace$1 = uncurryThis$4(''.replace);
  var whitespace = '[' + whitespaces$2 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = toString$3(requireObjectCoercible$1($this));
      if (TYPE & 1) string = replace$1(string, ltrim, '');
      if (TYPE & 2) string = replace$1(string, rtrim, '');
      return string;
    };
  };
  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var fails$6 = fails$p;
  var whitespaces$1 = whitespaces$3;
  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$6(function () {
      return !!whitespaces$1[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME$1 && whitespaces$1[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $$5 = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced;

  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$5({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var global$3 = global$g;
  var fails$5 = fails$p;
  var uncurryThis$3 = functionUncurryThis;
  var toString$2 = toString$9;
  var trim = stringTrim.trim;
  var whitespaces = whitespaces$3;
  var $parseInt$1 = global$3.parseInt;
  var Symbol$1 = global$3.Symbol;
  var ITERATOR = Symbol$1 && Symbol$1.iterator;
  var hex = /^[+-]?0x/i;
  var exec$1 = uncurryThis$3(hex.exec);
  var FORCED$1 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || ITERATOR && !fails$5(function () {
    $parseInt$1(Object(ITERATOR));
  });

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
    var S = trim(toString$2(string));
    return $parseInt$1(S, radix >>> 0 || (exec$1(hex, S) ? 16 : 10));
  } : $parseInt$1;

  var $$4 = _export;
  var $parseInt = numberParseInt;

  // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$4({
    global: true,
    forced: parseInt != $parseInt
  }, {
    parseInt: $parseInt
  });

  var DESCRIPTORS$3 = descriptors;
  var isArray = isArray$3;
  var $TypeError$3 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$3 && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', {
        writable: false
      }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();
  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
      throw $TypeError$3('Cannot set read only .length');
    }
    return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };

  var tryToString = tryToString$3;
  var $TypeError$2 = TypeError;
  var deletePropertyOrThrow$1 = function (O, P) {
    if (!delete O[P]) throw $TypeError$2('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var $$3 = _export;
  var toObject$1 = toObject$6;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var toIntegerOrInfinity = toIntegerOrInfinity$5;
  var lengthOfArrayLike = lengthOfArrayLike$4;
  var setArrayLength = arraySetLength;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$2;
  var arraySpeciesCreate = arraySpeciesCreate$2;
  var createProperty = createProperty$3;
  var deletePropertyOrThrow = deletePropertyOrThrow$1;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var max = Math.max;
  var min = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$3({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject$1(this);
      var len = lengthOfArrayLike(O);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
      }
      doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else deletePropertyOrThrow(O, to);
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      setArrayLength(O, len - actualDeleteCount + insertCount);
      return A;
    }
  });

  var wellKnownSymbol$3 = wellKnownSymbol$e;
  var create = objectCreate;
  var defineProperty$2 = objectDefineProperty.f;
  var UNSCOPABLES = wellKnownSymbol$3('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    defineProperty$2(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$1 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $$2 = _export;
  var $includes = arrayIncludes.includes;
  var fails$4 = fails$p;
  var addToUnscopables = addToUnscopables$1;

  // FF99+ bug
  var BROKEN_ON_SPARSE = fails$4(function () {
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $$2({
    target: 'Array',
    proto: true,
    forced: BROKEN_ON_SPARSE
  }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var isRegExp$1 = isRegexp;
  var $TypeError$1 = TypeError;
  var notARegexp = function (it) {
    if (isRegExp$1(it)) {
      throw $TypeError$1("The method doesn't accept regular expressions");
    }
    return it;
  };

  var wellKnownSymbol$2 = wellKnownSymbol$e;
  var MATCH$1 = wellKnownSymbol$2('match');
  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH$1] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {/* empty */}
    }
    return false;
  };

  var $$1 = _export;
  var uncurryThis$2 = functionUncurryThis;
  var notARegExp = notARegexp;
  var requireObjectCoercible = requireObjectCoercible$8;
  var toString$1 = toString$9;
  var correctIsRegExpLogic = correctIsRegexpLogic;
  var stringIndexOf$1 = uncurryThis$2(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  $$1({
    target: 'String',
    proto: true,
    forced: !correctIsRegExpLogic('includes')
  }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf$1(toString$1(requireObjectCoercible(this)), toString$1(notARegExp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var isCallable$1 = isCallable$g;
  var $String = String;
  var $TypeError = TypeError;
  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$1(argument)) return argument;
    throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThis$1 = functionUncurryThis;
  var anObject$1 = anObject$c;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$1(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {/* empty */}
    return function setPrototypeOf(O, proto) {
      anObject$1(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var isCallable = isCallable$g;
  var isObject = isObject$9;
  var setPrototypeOf = objectSetPrototypeOf;

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var call = functionCall;
  var hasOwn$1 = hasOwnProperty_1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var regExpFlags$1 = regexpFlags$1;
  var RegExpPrototype$3 = RegExp.prototype;
  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$3) && !hasOwn$1(R, 'flags') && isPrototypeOf$1(RegExpPrototype$3, R) ? call(regExpFlags$1, R) : flags;
  };

  var defineProperty$1 = objectDefineProperty.f;
  var proxyAccessor$1 = function (Target, Source, key) {
    key in Target || defineProperty$1(Target, key, {
      configurable: true,
      get: function () {
        return Source[key];
      },
      set: function (it) {
        Source[key] = it;
      }
    });
  };

  var getBuiltIn = getBuiltIn$6;
  var definePropertyModule = objectDefineProperty;
  var wellKnownSymbol$1 = wellKnownSymbol$e;
  var DESCRIPTORS$2 = descriptors;
  var SPECIES = wellKnownSymbol$1('species');
  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule.f;
    if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES]) {
      defineProperty(Constructor, SPECIES, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };

  var DESCRIPTORS$1 = descriptors;
  var global$2 = global$g;
  var uncurryThis = functionUncurryThis;
  var isForced = isForced_1;
  var inheritIfRequired = inheritIfRequired$1;
  var createNonEnumerableProperty = createNonEnumerableProperty$4;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var isPrototypeOf = objectIsPrototypeOf;
  var isRegExp = isRegexp;
  var toString = toString$9;
  var getRegExpFlags$1 = regexpGetFlags;
  var stickyHelpers = regexpStickyHelpers;
  var proxyAccessor = proxyAccessor$1;
  var defineBuiltIn$1 = defineBuiltIn$4;
  var fails$3 = fails$p;
  var hasOwn = hasOwnProperty_1;
  var enforceInternalState = internalState.enforce;
  var setSpecies = setSpecies$1;
  var wellKnownSymbol = wellKnownSymbol$e;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
  var MATCH = wellKnownSymbol('match');
  var NativeRegExp = global$2.RegExp;
  var RegExpPrototype$2 = NativeRegExp.prototype;
  var SyntaxError = global$2.SyntaxError;
  var exec = uncurryThis(RegExpPrototype$2.exec);
  var charAt = uncurryThis(''.charAt);
  var replace = uncurryThis(''.replace);
  var stringIndexOf = uncurryThis(''.indexOf);
  var stringSlice = uncurryThis(''.slice);
  // TODO: Use only proper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$1 && (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$3(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));
  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        result += chr + charAt(string, ++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }
        result += chr;
      }
    }
    return result;
  };
  var handleNCG = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt(string, index);
      if (chr === '\\') {
        chr = chr + charAt(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          if (exec(IS_NCG, stringSlice(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwn(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;else result += chr;
    }
    return [result, named];
  };

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf(RegExpPrototype$2, this);
      var patternIsRegExp = isRegExp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;
      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }
      if (patternIsRegExp || isPrototypeOf(RegExpPrototype$2, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = getRegExpFlags$1(rawPattern);
      }
      pattern = pattern === undefined ? '' : toString(pattern);
      flags = flags === undefined ? '' : toString(flags);
      rawPattern = pattern;
      if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf(flags, 's') > -1;
        if (dotAll) flags = replace(flags, /s/g, '');
      }
      rawFlags = flags;
      if (MISSED_STICKY && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
      }
      if (UNSUPPORTED_NCG) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }
      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);
      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }
      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {/* empty */}
      return result;
    };
    for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
      proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
    }
    RegExpPrototype$2.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$2;
    defineBuiltIn$1(global$2, 'RegExp', RegExpWrapper, {
      constructor: true
    });
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var defineBuiltIn = defineBuiltIn$4;
  var anObject = anObject$c;
  var $toString = toString$9;
  var fails$2 = fails$p;
  var getRegExpFlags = regexpGetFlags;
  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var nativeToString = RegExpPrototype$1[TO_STRING];
  var NOT_GENERIC = fails$2(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, {
      unsafe: true
    });
  }

  var $ = _export;
  var toObject = toObject$6;
  var nativeKeys = objectKeys$2;
  var fails$1 = fails$p;
  var FAILS_ON_PRIMITIVES = fails$1(function () {
    nativeKeys(1);
  });

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
  }, {
    keys: function keys(it) {
      return nativeKeys(toObject(it));
    }
  });

  var makeBuiltIn = makeBuiltIn$3.exports;
  var defineProperty = objectDefineProperty;
  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
      setter: true
    });
    return defineProperty.f(target, name, descriptor);
  };

  var global$1 = global$g;
  var DESCRIPTORS = descriptors;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;
  var regExpFlags = regexpFlags$1;
  var fails = fails$p;

  // babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
  var RegExp$1 = global$1.RegExp;
  var RegExpPrototype = RegExp$1.prototype;
  var FORCED = DESCRIPTORS && fails(function () {
    var INDICES_SUPPORT = true;
    try {
      RegExp$1('.', 'd');
    } catch (error) {
      INDICES_SUPPORT = false;
    }
    var O = {};
    // modern V8 bug
    var calls = '';
    var expected = INDICES_SUPPORT ? 'dgimsy' : 'gimsy';
    var addGetter = function (key, chr) {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty(O, key, {
        get: function () {
          calls += chr;
          return true;
        }
      });
    };
    var pairs = {
      dotAll: 's',
      global: 'g',
      ignoreCase: 'i',
      multiline: 'm',
      sticky: 'y'
    };
    if (INDICES_SUPPORT) pairs.hasIndices = 'd';
    for (var key in pairs) addGetter(key, pairs[key]);

    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    var result = Object.getOwnPropertyDescriptor(RegExpPrototype, 'flags').get.call(O);
    return result !== expected || calls !== expected;
  });

  // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  if (FORCED) defineBuiltInAccessor(RegExpPrototype, 'flags', {
    configurable: true,
    get: regExpFlags
  });

  // const replacements = {
  //   ASCIIPunctuation: '!"#$%&\'()*+,\\-./:;<=>?@\\[\\]^_`{|}~',
  //   TriggerChars: '`_\*\[\]\(\)',
  //   Scheme: `[A-Za-z][A-Za-z0-9\+\.\-]{1,31}`,
  //   Email: `[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*`, // From CommonMark spec

  // }
  var replacements = {
    ASCIIPunctuation: /[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]/,
    NotTriggerChar: /[^`_*[\]()<>!~]/,
    Scheme: /[A-Za-z][A-Za-z0-9+.-]{1,31}/,
    Email: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/,
    // From CommonMark spec
    HTMLOpenTag: /<HTMLTagName(?:HTMLAttribute)*\s*\/?>/,
    HTMLCloseTag: /<\/HTMLTagName\s*>/,
    HTMLTagName: /[A-Za-z][A-Za-z0-9-]*/,
    HTMLComment: /<!--(?:[^>-]|(?:[^>-](?:[^-]|-[^-])*[^-]))-->/,
    HTMLPI: /<\?(?:|.|(?:[^?]|\?[^>])*)\?>/,
    HTMLDeclaration: /<![A-Z]+\s[^>]*>/,
    HTMLCDATA: /<!\[CDATA\[.*?\]\]>/,
    HTMLAttribute: /\s+[A-Za-z_:][A-Za-z0-9_.:-]*(?:HTMLAttValue)?/,
    HTMLAttValue: /\s*=\s*(?:(?:'[^']*')|(?:"[^"]*")|(?:[^\s"'=<>`]+))/,
    KnownTag: /address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul/
  };

  // From CommonMark.js. 
  var punctuationLeading = new RegExp(/^(?:[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B])/);
  var punctuationTrailing = new RegExp(/(?:[!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B])$/);

  // export const inlineTriggerChars = new RegExp(`[${replacements.TriggerChars}]`);

  /**
   * This is CommonMark's block grammar, but we're ignoring nested blocks here.  
   */
  var lineGrammar = {
    TMH1: {
      regexp: /^( {0,3}#\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH1">$1</span>$$2<span class="TMMark TMMark_TMH1">$3</span>'
    },
    TMH2: {
      regexp: /^( {0,3}##\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH2">$1</span>$$2<span class="TMMark TMMark_TMH2">$3</span>'
    },
    TMH3: {
      regexp: /^( {0,3}###\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH3">$1</span>$$2<span class="TMMark TMMark_TMH3">$3</span>'
    },
    TMH4: {
      regexp: /^( {0,3}####\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH4">$1</span>$$2<span class="TMMark TMMark_TMH4">$3</span>'
    },
    TMH5: {
      regexp: /^( {0,3}#####\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH5">$1</span>$$2<span class="TMMark TMMark_TMH5">$3</span>'
    },
    TMH6: {
      regexp: /^( {0,3}######\s)(.*?)((?:\s+#+\s*)?)$/,
      replacement: '<span class="TMMark TMMark_TMH6">$1</span>$$2<span class="TMMark TMMark_TMH6">$3</span>'
    },
    TMBlockquote: {
      regexp: /^( {0,3}>[ ]?)(.*)$/,
      replacement: '<span class="TMMark TMMark_TMBlockquote">$1</span>$$2'
    },
    TMCodeFenceBacktickOpen: {
      regexp: /*#__PURE__*/_wrapRegExp(/^( {0,3}(````*)\s*)([^`]*?)(\s*)$/, {
        seq: 2
      }),
      replacement: '<span class="TMMark TMMark_TMCodeFenceBacktick">$1</span><span class="TMInfoString">$3</span>$4'
    },
    TMCodeFenceTildeOpen: {
      regexp: /*#__PURE__*/_wrapRegExp(/^( {0,3}(~~~~*)\s*)(.*?)(\s*)$/, {
        seq: 2
      }),
      replacement: '<span class="TMMark TMMark_TMCodeFenceTilde">$1</span><span class="TMInfoString">$3</span>$4'
    },
    TMCodeFenceBacktickClose: {
      regexp: /*#__PURE__*/_wrapRegExp(/^( {0,3}(````*))(\s*)$/, {
        seq: 2
      }),
      replacement: '<span class="TMMark TMMark_TMCodeFenceBacktick">$1</span>$3'
    },
    TMCodeFenceTildeClose: {
      regexp: /*#__PURE__*/_wrapRegExp(/^( {0,3}(~~~~*))(\s*)$/, {
        seq: 2
      }),
      replacement: '<span class="TMMark TMMark_TMCodeFenceTilde">$1</span>$3'
    },
    TMBlankLine: {
      regexp: /^([ \t]*)$/,
      replacement: '$0'
    },
    TMSetextH1Marker: {
      regexp: /^ {0,3}=+\s*$/,
      replacement: '<span class="TMMark TMMark_TMSetextH1Marker">$0</span>'
    },
    TMSetextH2Marker: {
      regexp: /^ {0,3}-+\s*$/,
      replacement: '<span class="TMMark TMMark_TMSetextH1Marker">$0</span>'
    },
    TMHR: {
      regexp: /^( {0,3}(\*[ \t]*\*[ \t]*\*[ \t*]*)|(-[ \t]*-[ \t]*-[ \t-]*)|(_[ \t]*_[ \t]*_[ \t_]*))$/,
      replacement: '<span class="TMMark TMMark_TMHR">$0</span>'
    },
    TMUL: {
      regexp: /^( {0,3}[+*-] {1,4})(.*)$/,
      replacement: '<span class="TMMark TMMark_TMUL">$1</span>$$2'
    },
    TMOL: {
      regexp: /^( {0,3}\d{1,9}[.)] {1,4})(.*)$/,
      replacement: '<span class="TMMark TMMark_TMOL">$1</span>$$2'
    },
    // TODO: This is currently preventing sublists (and any content within list items, really) from working
    TMIndentedCode: {
      regexp: /^( {4}|\t)(.*)$/,
      replacement: '<span class="TMMark TMMark_TMIndentedCode">$1</span>$2'
    },
    TMLinkReferenceDefinition: {
      // TODO: Link destination can't include unbalanced parantheses, but we just ignore that here 
      regexp: /^( {0,3}\[\s*)([^\s\]](?:[^\]]|\\\])*?)(\s*\]:\s*)((?:[^\s<>]+)|(?:<(?:[^<>\\]|\\.)*>))?(\s*)((?:\((?:[^()\\]|\\.)*\))|(?:"(?:[^"\\]|\\.)*")|(?:'(?:[^'\\]|\\.)*'))?(\s*)$/,
      replacement: '<span class="TMMark TMMark_TMLinkReferenceDefinition">$1</span><span class="TMLinkLabel TMLinkLabel_Definition">$2</span><span class="TMMark TMMark_TMLinkReferenceDefinition">$3</span><span class="TMLinkDestination">$4</span>$5<span class="TMLinkTitle">$6</span>$7',
      labelPlaceholder: 2 // this defines which placeholder in the above regex is the link "label"
    }
  };

  /**
   * HTML blocks have multiple different classes of opener and closer. This array defines all the cases
   */
  var htmlBlockGrammar = [{
    start: /^ {0,3}<(?:script|pre|style)(?:\s|>|$)/i,
    end: /(?:<\/script>|<\/pre>|<\/style>)/i,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<!--/,
    end: /-->/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<\?/,
    end: /\?>/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<![A-Z]/,
    end: />/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}<!\[CDATA\[/,
    end: /\]\]>/,
    paraInterrupt: true
  }, {
    start: /^ {0,3}(?:<|<\/)(?:KnownTag)(?:\s|>|\/>|$)/i,
    end: false,
    paraInterrupt: true
  }, {
    start: /^ {0,3}(?:HTMLOpenTag|HTMLCloseTag)\s*$/,
    end: false,
    paraInterrupt: false
  }];

  /**
   * Structure of the object:
   * Top level entries are rules, each consisting of a regular expressions (in string format) as well as a replacement.
   * In the regular expressions, replacements from the object 'replacements' will be processed before compiling into the property regexp.
   */
  var inlineGrammar = {
    escape: {
      regexp: /^\\(ASCIIPunctuation)/,
      replacement: '<span class="TMMark TMMark_TMEscape">\\</span>$1'
    },
    code: {
      regexp: /^(`+)((?:[^`])|(?:[^`].*?[^`]))(\1)/,
      replacement: '<span class="TMMark TMMark_TMCode">$1</span><code class="TMCode">$2</code><span class="TMMark TMMark_TMCode">$3</span>'
    },
    autolink: {
      regexp: /^<((?:Scheme:[^\s<>]*)|(?:Email))>/,
      replacement: '<span class="TMMark TMMark_TMAutolink">&lt;</span><span class="TMAutolink">$1</span><span class="TMMark TMMark_TMAutolink">&gt;</span>'
    },
    html: {
      regexp: /^((?:HTMLOpenTag)|(?:HTMLCloseTag)|(?:HTMLComment)|(?:HTMLPI)|(?:HTMLDeclaration)|(?:HTMLCDATA))/,
      replacement: '<span class="TMHTML">$1</span>'
    },
    linkOpen: {
      regexp: /^\[/,
      replacement: ''
    },
    imageOpen: {
      regexp: /^!\[/,
      replacement: ''
    },
    linkLabel: {
      regexp: /^(\[\s*)([^\]]*?)(\s*\])/,
      replacement: '',
      labelPlaceholder: 2
    },
    default: {
      regexp: /^(.|(?:NotTriggerChar+))/,
      replacement: '$1'
    }
  };

  // Process replacements in regexps
  var replacementRegexp = new RegExp(Object.keys(replacements).join('|'));

  // Inline
  var inlineRules = _toConsumableArray(Object.keys(inlineGrammar));
  var _iterator = _createForOfIteratorHelper(inlineRules),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _rule = _step.value;
      var _re = inlineGrammar[_rule].regexp.source;
      // Replace while there is something to replace. This means it also works over multiple levels (replacements containing replacements)
      while (_re.match(replacementRegexp)) {
        _re = _re.replace(replacementRegexp, function (string) {
          return replacements[string].source;
        });
      }
      inlineGrammar[_rule].regexp = new RegExp(_re, inlineGrammar[_rule].regexp.flags);
    }

    // HTML Block (only opening rule is processed currently)
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  for (var _i = 0, _htmlBlockGrammar = htmlBlockGrammar; _i < _htmlBlockGrammar.length; _i++) {
    var rule = _htmlBlockGrammar[_i];
    var re = rule.start.source;
    // Replace while there is something to replace. This means it also works over multiple levels (replacements containing replacements)
    while (re.match(replacementRegexp)) {
      re = re.replace(replacementRegexp, function (string) {
        return replacements[string].source;
      });
    }
    rule.start = new RegExp(re, rule.start.flags);
  }

  /**
   * Escapes HTML special characters (<, >, and &) in the string.
   * @param {string} string The raw string to be escaped
   * @returns {string} The string, ready to be used in HTML
   */
  function htmlescape(string) {
    return (string ? string : '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  /**
   * Contains the commands that can be sent to the editor. Contains objects with a name representing the name of the command.
   * Each of the objects contains the following keys:
   * 
   *   - type: Can be either inline (for inline formatting) or line (for block / line formatting).
   *   - className: Used to determine whether the command is active at a given position. 
   *     For line formatting, this looks at the class of the line element. For inline elements, tries to find an enclosing element with that class.
   *   - set / unset: Contain instructions how to set and unset the command. For line type commands, both consist of a pattern and replacement that 
   *     will be applied to each line (using String.replace). For inline type commands, the set object contains a pre and post string which will
   *     be inserted before and after the selection. The unset object contains a prePattern and a postPattern. Both should be regular expressions and 
   *     they will be applied to the portion of the line before and after the selection (using String.replace, with an empty replacement string).
   */
  var commands = {
    // Replacements for unset for inline commands are '' by default
    bold: {
      type: 'inline',
      className: 'TMStrong',
      set: {
        pre: '**',
        post: '**'
      },
      unset: {
        prePattern: /(?:\*\*|__)$/,
        postPattern: /^(?:\*\*|__)/
      }
    },
    italic: {
      type: 'inline',
      className: 'TMEm',
      set: {
        pre: '*',
        post: '*'
      },
      unset: {
        prePattern: /(?:\*|_)$/,
        postPattern: /^(?:\*|_)/
      }
    },
    code: {
      type: 'inline',
      className: 'TMCode',
      set: {
        pre: '`',
        post: '`'
      },
      unset: {
        prePattern: /`+$/,
        postPattern: /^`+/
      } // FIXME this doesn't ensure balanced backticks right now
    },

    strikethrough: {
      type: 'inline',
      className: 'TMStrikethrough',
      set: {
        pre: '~~',
        post: '~~'
      },
      unset: {
        prePattern: /~~$/,
        postPattern: /^~~/
      }
    },
    h1: {
      type: 'line',
      className: 'TMH1',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '# $2'
      },
      unset: {
        pattern: /^( {0,3}#\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h2: {
      type: 'line',
      className: 'TMH2',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '## $2'
      },
      unset: {
        pattern: /^( {0,3}##\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h3: {
      type: 'line',
      className: 'TMH3',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '### $2'
      },
      unset: {
        pattern: /^( {0,3}###\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h4: {
      type: 'line',
      className: 'TMH4',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '#### $2'
      },
      unset: {
        pattern: /^( {0,3}####\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h5: {
      type: 'line',
      className: 'TMH5',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '##### $2'
      },
      unset: {
        pattern: /^( {0,3}#####\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    h6: {
      type: 'line',
      className: 'TMH6',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '###### $2'
      },
      unset: {
        pattern: /^( {0,3}######\s+)(.*?)((?:\s+#+\s*)?)$/,
        replacement: '$2'
      }
    },
    ul: {
      type: 'line',
      className: 'TMUL',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '- $2'
      },
      unset: {
        pattern: /^( {0,3}[+*-] {1,4})(.*)$/,
        replacement: '$2'
      }
    },
    ol: {
      type: 'line',
      className: 'TMOL',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '$#. $2'
      },
      unset: {
        pattern: /^( {0,3}\d{1,9}[.)] {1,4})(.*)$/,
        replacement: '$2'
      }
    },
    blockquote: {
      type: 'line',
      className: 'TMBlockquote',
      set: {
        pattern: /^( {0,3}(?:(?:#+|[0-9]{1,9}[).]|[>\-*+])\s+)?)(.*)$/,
        replacement: '> $2'
      },
      unset: {
        pattern: /^( {0,3}>[ ]?)(.*)$/,
        replacement: '$2'
      }
    }
  };

  var Editor = /*#__PURE__*/function () {
    function Editor() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Editor);
      this.e = null;
      this.textarea = null;
      this.lines = [];
      this.lineElements = [];
      this.lineTypes = [];
      this.lineCaptures = [];
      this.lineReplacements = [];
      this.linkLabels = [];
      this.lineDirty = [];
      this.lastCommandState = null;
      this.listeners = {
        change: [],
        selection: []
      };
      var element = props.element;
      this.textarea = props.textarea;
      if (this.textarea && !this.textarea.tagName) {
        this.textarea = document.getElementById(this.textarea);
        if (!element) element = this.textarea;
      }
      if (element && !element.tagName) {
        element = document.getElementById(props.element);
      }
      if (!element) {
        element = document.getElementsByTagName('body')[0];
      }
      if (element.tagName == 'TEXTAREA') {
        this.textarea = element;
        element = this.textarea.parentNode;
      }
      if (this.textarea) {
        this.textarea.style.display = 'none';
      }
      this.createEditorElement(element);
      // TODO Placeholder for empty content
      this.setContent(props.content || (this.textarea ? this.textarea.value : false) || '# Hello TinyMDE!\nEdit **here**');
    }

    /**
     * Creates the editor element inside the target element of the DOM tree
     * @param element The target element of the DOM tree
     */
    _createClass(Editor, [{
      key: "createEditorElement",
      value: function createEditorElement(element) {
        var _this = this;
        this.e = document.createElement('div');
        this.e.className = 'TinyMDE';
        this.e.contentEditable = true;
        // The following is important for formatting purposes, but also since otherwise the browser replaces subsequent spaces with  &nbsp; &nbsp;
        // That breaks a lot of stuff, so we do this here and not in CSS—therefore, you don't have to remember to but this in the CSS file
        this.e.style.whiteSpace = 'pre-wrap';
        // Avoid formatting (B / I / U) popping up on iOS
        this.e.style.webkitUserModify = 'read-write-plaintext-only';
        if (this.textarea && this.textarea.parentNode == element && this.textarea.nextSibling) {
          element.insertBefore(this.e, this.textarea.nextSibling);
        } else {
          element.appendChild(this.e);
        }
        this.e.addEventListener("input", function (e) {
          return _this.handleInputEvent(e);
        });
        // this.e.addEventListener("keydown", (e) => this.handleKeydownEvent(e));
        document.addEventListener("selectionchange", function (e) {
          return _this.handleSelectionChangeEvent(e);
        });
        this.e.addEventListener("paste", function (e) {
          return _this.handlePaste(e);
        });
        // this.e.addEventListener('keydown', (e) => this.handleKeyDown(e));
        this.lineElements = this.e.childNodes; // this will automatically update
      }

      /**
       * Sets the editor content.
       * @param {string} content The new Markdown content
       */
    }, {
      key: "setContent",
      value: function setContent(content) {
        // Delete any existing content
        while (this.e.firstChild) {
          this.e.removeChild(this.e.firstChild);
        }
        this.lines = content.split(/(?:\r\n|\r|\n)/);
        this.lineDirty = [];
        for (var lineNum = 0; lineNum < this.lines.length; lineNum++) {
          var le = document.createElement('div');
          this.e.appendChild(le);
          this.lineDirty.push(true);
        }
        this.lineTypes = new Array(this.lines.length);
        this.updateFormatting();
        this.fireChange();
      }

      /**
       * Gets the editor content as a Markdown string.
       * @returns {string} The editor content as a markdown string
       */
    }, {
      key: "getContent",
      value: function getContent() {
        return this.lines.join('\n');
      }

      /**
       * This is the main method to update the formatting (from this.lines to HTML output)
       */
    }, {
      key: "updateFormatting",
      value: function updateFormatting() {
        // First, parse line types. This will update this.lineTypes, this.lineReplacements, and this.lineCaptures
        // We don't apply the formatting yet
        this.updateLineTypes();
        // Collect any valid link labels from link reference definitions—we need that for formatting to determine what's a valid link
        this.updateLinkLabels();
        // Now, apply the formatting
        this.applyLineTypes();
      }

      /**
       * Updates this.linkLabels: For every link reference definition (line type TMLinkReferenceDefinition), we collect the label
       */
    }, {
      key: "updateLinkLabels",
      value: function updateLinkLabels() {
        this.linkLabels = [];
        for (var l = 0; l < this.lines.length; l++) {
          if (this.lineTypes[l] == 'TMLinkReferenceDefinition') {
            this.linkLabels.push(this.lineCaptures[l][lineGrammar.TMLinkReferenceDefinition.labelPlaceholder]);
          }
        }
      }

      /**
       * Helper function to replace placeholders from a RegExp capture. The replacement string can contain regular dollar placeholders (e.g., $1),
       * which are interpreted like in String.replace(), but also double dollar placeholders ($$1). In the case of double dollar placeholders, 
       * Markdown inline grammar is applied on the content of the captured subgroup, i.e., $$1 processes inline Markdown grammar in the content of the
       * first captured subgroup, and replaces `$$1` with the result.
       * 
       * @param {string} replacement The replacement string, including placeholders.
       * @param  capture The result of a RegExp.exec() call
       * @returns The replacement string, with placeholders replaced from the capture result.
       */
    }, {
      key: "replace",
      value: function replace(replacement, capture) {
        var _this2 = this;
        return replacement.replace(/\$\$([0-9])/g, function (str, p1) {
          return "<span class=\"TMInlineFormatted\">".concat(_this2.processInlineStyles(capture[p1]), "</span>");
        }).replace(/\$([0-9])/g, function (str, p1) {
          return htmlescape(capture[p1]);
        });
      }

      /**
       * Applies the line types (from this.lineTypes as well as the capture result in this.lineReplacements and this.lineCaptures) 
       * and processes inline formatting for all lines.
       */
    }, {
      key: "applyLineTypes",
      value: function applyLineTypes() {
        for (var lineNum = 0; lineNum < this.lines.length; lineNum++) {
          if (this.lineDirty[lineNum]) {
            var contentHTML = this.replace(this.lineReplacements[lineNum], this.lineCaptures[lineNum]);
            // this.lineHTML[lineNum] = (contentHTML == '' ? '<br />' : contentHTML); // Prevent empty elements which can't be selected etc.
            this.lineElements[lineNum].className = this.lineTypes[lineNum];
            this.lineElements[lineNum].removeAttribute('style');
            this.lineElements[lineNum].innerHTML = contentHTML == '' ? '<br />' : contentHTML; // Prevent empty elements which can't be selected etc.
          }

          this.lineElements[lineNum].dataset.lineNum = lineNum;
        }
      }

      /**
       * Determines line types for all lines based on the line / block grammar. Captures the results of the respective line
       * grammar regular expressions.
       * Updates this.lineTypes, this.lineCaptures, and this.lineReplacements.
       */
    }, {
      key: "updateLineTypes",
      value: function updateLineTypes() {
        var codeBlockType = false;
        var codeBlockSeqLength = 0;
        var htmlBlock = false;
        for (var lineNum = 0; lineNum < this.lines.length; lineNum++) {
          var lineType = 'TMPara';
          var lineCapture = [this.lines[lineNum]];
          var lineReplacement = '$$0'; // Default replacement for paragraph: Inline format the entire line

          // Check ongoing code blocks
          // if (lineNum > 0 && (this.lineTypes[lineNum - 1] == 'TMCodeFenceBacktickOpen' || this.lineTypes[lineNum - 1] == 'TMFencedCodeBacktick')) {
          if (codeBlockType == 'TMCodeFenceBacktickOpen') {
            // We're in a backtick-fenced code block, check if the current line closes it
            var capture = lineGrammar.TMCodeFenceBacktickClose.regexp.exec(this.lines[lineNum]);
            if (capture && capture.groups['seq'].length >= codeBlockSeqLength) {
              lineType = 'TMCodeFenceBacktickClose';
              lineReplacement = lineGrammar.TMCodeFenceBacktickClose.replacement;
              lineCapture = capture;
              codeBlockType = false;
            } else {
              lineType = 'TMFencedCodeBacktick';
              lineReplacement = '$0';
              lineCapture = [this.lines[lineNum]];
            }
          }
          // if (lineNum > 0 && (this.lineTypes[lineNum - 1] == 'TMCodeFenceTildeOpen' || this.lineTypes[lineNum - 1] == 'TMFencedCodeTilde')) {
          else if (codeBlockType == 'TMCodeFenceTildeOpen') {
            // We're in a tilde-fenced code block
            var _capture = lineGrammar.TMCodeFenceTildeClose.regexp.exec(this.lines[lineNum]);
            if (_capture && _capture.groups['seq'].length >= codeBlockSeqLength) {
              lineType = 'TMCodeFenceTildeClose';
              lineReplacement = lineGrammar.TMCodeFenceTildeClose.replacement;
              lineCapture = _capture;
              codeBlockType = false;
            } else {
              lineType = 'TMFencedCodeTilde';
              lineReplacement = '$0';
              lineCapture = [this.lines[lineNum]];
            }
          }

          // Check HTML block types
          if (lineType == 'TMPara' && htmlBlock === false) {
            var _iterator = _createForOfIteratorHelper(htmlBlockGrammar),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var htmlBlockType = _step.value;
                if (this.lines[lineNum].match(htmlBlockType.start)) {
                  // Matching start condition. Check if this tag can start here (not all start conditions allow breaking a paragraph).
                  if (htmlBlockType.paraInterrupt || lineNum == 0 || !(this.lineTypes[lineNum - 1] == 'TMPara' || this.lineTypes[lineNum - 1] == 'TMUL' || this.lineTypes[lineNum - 1] == 'TMOL' || this.lineTypes[lineNum - 1] == 'TMBlockquote')) {
                    htmlBlock = htmlBlockType;
                    break;
                  }
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          if (htmlBlock !== false) {
            lineType = 'TMHTMLBlock';
            lineReplacement = '$0'; // No formatting in TMHTMLBlock
            lineCapture = [this.lines[lineNum]]; // This should already be set but better safe than sorry

            // Check if HTML block should be closed
            if (htmlBlock.end) {
              // Specific end condition
              if (this.lines[lineNum].match(htmlBlock.end)) {
                htmlBlock = false;
              }
            } else {
              // No specific end condition, ends with blank line
              if (lineNum == this.lines.length - 1 || this.lines[lineNum + 1].match(lineGrammar.TMBlankLine.regexp)) {
                htmlBlock = false;
              }
            }
          }

          // Check all regexps if we haven't applied one of the code block types
          if (lineType == 'TMPara') {
            for (var type in lineGrammar) {
              if (lineGrammar[type].regexp) {
                var _capture2 = lineGrammar[type].regexp.exec(this.lines[lineNum]);
                if (_capture2) {
                  lineType = type;
                  lineReplacement = lineGrammar[type].replacement;
                  lineCapture = _capture2;
                  break;
                }
              }
            }
          }

          // If we've opened a code block, remember that
          if (lineType == 'TMCodeFenceBacktickOpen' || lineType == 'TMCodeFenceTildeOpen') {
            codeBlockType = lineType;
            codeBlockSeqLength = lineCapture.groups['seq'].length;
          }

          // Link reference definition and indented code can't interrupt a paragraph
          if ((lineType == 'TMIndentedCode' || lineType == 'TMLinkReferenceDefinition') && lineNum > 0 && (this.lineTypes[lineNum - 1] == 'TMPara' || this.lineTypes[lineNum - 1] == 'TMUL' || this.lineTypes[lineNum - 1] == 'TMOL' || this.lineTypes[lineNum - 1] == 'TMBlockquote')) {
            // Fall back to TMPara
            lineType = 'TMPara';
            lineCapture = [this.lines[lineNum]];
            lineReplacement = '$$0';
          }

          // Setext H2 markers that can also be interpreted as an empty list item should be regarded as such (as per CommonMark spec)
          if (lineType == 'TMSetextH2Marker') {
            var _capture3 = lineGrammar.TMUL.regexp.exec(this.lines[lineNum]);
            if (_capture3) {
              lineType = 'TMUL';
              lineReplacement = lineGrammar.TMUL.replacement;
              lineCapture = _capture3;
            }
          }

          // Setext headings are only valid if preceded by a paragraph (and if so, they change the type of the previous paragraph)
          if (lineType == 'TMSetextH1Marker' || lineType == 'TMSetextH2Marker') {
            if (lineNum == 0 || this.lineTypes[lineNum - 1] != 'TMPara') {
              // Setext marker is invalid. However, a H2 marker might still be a valid HR, so let's check that
              var _capture4 = lineGrammar.TMHR.regexp.exec(this.lines[lineNum]);
              if (_capture4) {
                // Valid HR
                lineType = 'TMHR';
                lineCapture = _capture4;
                lineReplacement = lineGrammar.TMHR.replacement;
              } else {
                // Not valid HR, format as TMPara
                lineType = 'TMPara';
                lineCapture = [this.lines[lineNum]];
                lineReplacement = '$$0';
              }
            } else {
              // Valid setext marker. Change types of preceding para lines
              var headingLine = lineNum - 1;
              var headingLineType = lineType == 'TMSetextH1Marker' ? 'TMSetextH1' : 'TMSetextH2';
              do {
                if (this.lineTypes[headingLineType] != headingLineType) {
                  this.lineTypes[headingLine] = headingLineType;
                  this.lineDirty[headingLineType] = true;
                }
                this.lineReplacements[headingLine] = '$$0';
                this.lineCaptures[headingLine] = [this.lines[headingLine]];
                headingLine--;
              } while (headingLine >= 0 && this.lineTypes[headingLine] == 'TMPara');
            }
          }
          // Lastly, save the line style to be applied later
          if (this.lineTypes[lineNum] != lineType) {
            this.lineTypes[lineNum] = lineType;
            this.lineDirty[lineNum] = true;
          }
          this.lineReplacements[lineNum] = lineReplacement;
          this.lineCaptures[lineNum] = lineCapture;
        }
      }

      /**
       * Updates all line contents from the HTML, then re-applies formatting.
       */
    }, {
      key: "updateLineContentsAndFormatting",
      value: function updateLineContentsAndFormatting() {
        this.clearDirtyFlag();
        this.updateLineContents();
        this.updateFormatting();
      }

      /**
       * Attempts to parse a link or image at the current position. This assumes that the opening [ or ![ has already been matched. 
       * Returns false if this is not a valid link, image. See below for more information
       * @param {string} originalString The original string, starting at the opening marker ([ or ![)
       * @param {boolean} isImage Whether or not this is an image (opener == ![)
       * @returns false if not a valid link / image. 
       * Otherwise returns an object with two properties: output is the string to be included in the processed output, 
       * charCount is the number of input characters (from originalString) consumed.
       */
    }, {
      key: "parseLinkOrImage",
      value: function parseLinkOrImage(originalString, isImage) {
        // Skip the opening bracket
        var textOffset = isImage ? 2 : 1;
        var opener = originalString.substr(0, textOffset);
        var type = isImage ? 'TMImage' : 'TMLink';
        var currentOffset = textOffset;
        var bracketLevel = 1;
        var linkText = false;
        var linkRef = false;
        var linkLabel = [];
        var linkDetails = []; // If matched, this will be an array: [whitespace + link destination delimiter, link destination, link destination delimiter, whitespace, link title delimiter, link title, link title delimiter + whitespace]. All can be empty strings.

        textOuter: while (currentOffset < originalString.length && linkText === false /* empty string is okay */) {
          var string = originalString.substr(currentOffset);

          // Capture any escapes and code blocks at current position, they bind more strongly than links
          // We don't have to actually process them here, that'll be done later in case the link / image is valid, but we need to skip over them.
          for (var _i = 0, _arr = ['escape', 'code', 'autolink', 'html']; _i < _arr.length; _i++) {
            var rule = _arr[_i];
            var cap = inlineGrammar[rule].regexp.exec(string);
            if (cap) {
              currentOffset += cap[0].length;
              continue textOuter;
            }
          }

          // Check for image. It's okay for an image to be included in a link or image
          if (string.match(inlineGrammar.imageOpen.regexp)) {
            // Opening image. It's okay if this is a matching pair of brackets
            bracketLevel++;
            currentOffset += 2;
            continue textOuter;
          }

          // Check for link (not an image because that would have been captured and skipped over above)
          if (string.match(inlineGrammar.linkOpen.regexp)) {
            // Opening bracket. Two things to do:
            // 1) it's okay if this part of a pair of brackets.
            // 2) If we are currently trying to parse a link, this nested bracket musn't start a valid link (no nested links allowed)
            bracketLevel++;
            // if (bracketLevel >= 2) return false; // Nested unescaped brackets, this doesn't qualify as a link / image
            if (!isImage) {
              if (this.parseLinkOrImage(string, false)) {
                // Valid link inside this possible link, which makes this link invalid (inner links beat outer ones)
                return false;
              }
            }
            currentOffset += 1;
            continue textOuter;
          }

          // Check for closing bracket
          if (string.match(/^\]/)) {
            bracketLevel--;
            if (bracketLevel == 0) {
              // Found matching bracket and haven't found anything disqualifying this as link / image.
              linkText = originalString.substr(textOffset, currentOffset - textOffset);
              currentOffset++;
              continue textOuter;
            }
          }

          // Nothing matches, proceed to next char
          currentOffset++;
        }

        // Did we find a link text (i.e., find a matching closing bracket?)
        if (linkText === false) return false; // Nope

        // So far, so good. We've got a valid link text. Let's see what type of link this is
        var nextChar = currentOffset < originalString.length ? originalString.substr(currentOffset, 1) : '';

        // REFERENCE LINKS
        if (nextChar == '[') {
          var _string = originalString.substr(currentOffset);
          var _cap = inlineGrammar.linkLabel.regexp.exec(_string);
          if (_cap) {
            // Valid link label
            currentOffset += _cap[0].length;
            linkLabel.push(_cap[1], _cap[2], _cap[3]);
            if (_cap[inlineGrammar.linkLabel.labelPlaceholder]) {
              // Full reference link
              linkRef = _cap[inlineGrammar.linkLabel.labelPlaceholder];
            } else {
              // Collapsed reference link
              linkRef = linkText.trim();
            }
          } else {
            // Not a valid link label
            return false;
          }
        } else if (nextChar != '(') {
          // Shortcut ref link
          linkRef = linkText.trim();

          // INLINE LINKS
        } else {
          // nextChar == '('

          // Potential inline link
          currentOffset++;
          var parenthesisLevel = 1;
          inlineOuter: while (currentOffset < originalString.length && parenthesisLevel > 0) {
            var _string2 = originalString.substr(currentOffset);

            // Process whitespace
            var _cap2 = /^\s+/.exec(_string2);
            if (_cap2) {
              switch (linkDetails.length) {
                case 0:
                  linkDetails.push(_cap2[0]);
                  break;
                // Opening whitespace
                case 1:
                  linkDetails.push(_cap2[0]);
                  break;
                // Open destination, but not a destination yet; desination opened with <
                case 2:
                  // Open destination with content in it. Whitespace only allowed if opened by angle bracket, otherwise this closes the destination
                  if (linkDetails[0].match(/</)) {
                    linkDetails[1] = linkDetails[1].concat(_cap2[0]);
                  } else {
                    if (parenthesisLevel != 1) return false; // Unbalanced parenthesis
                    linkDetails.push(''); // Empty end delimiter for destination
                    linkDetails.push(_cap2[0]); // Whitespace in between destination and title
                  }

                  break;
                case 3:
                  linkDetails.push(_cap2[0]);
                  break;
                // Whitespace between destination and title
                case 4:
                  return false;
                // This should never happen (no opener for title yet, but more whitespace to capture)
                case 5:
                  linkDetails.push('');
                // Whitespace at beginning of title, push empty title and continue
                case 6:
                  linkDetails[5] = linkDetails[5].concat(_cap2[0]);
                  break;
                // Whitespace in title
                case 7:
                  linkDetails[6] = linkDetails[6].concat(_cap2[0]);
                  break;
                // Whitespace after closing delimiter
                default:
                  return false;
                // We should never get here
              }

              currentOffset += _cap2[0].length;
              continue inlineOuter;
            }

            // Process backslash escapes
            _cap2 = inlineGrammar.escape.regexp.exec(_string2);
            if (_cap2) {
              switch (linkDetails.length) {
                case 0:
                  linkDetails.push('');
                // this opens the link destination, add empty opening delimiter and proceed to next case
                case 1:
                  linkDetails.push(_cap2[0]);
                  break;
                // This opens the link destination, append it
                case 2:
                  linkDetails[1] = linkDetails[1].concat(_cap2[0]);
                  break;
                // Part of the link destination
                case 3:
                  return false;
                // Lacking opening delimiter for link title
                case 4:
                  return false;
                // Lcaking opening delimiter for link title
                case 5:
                  linkDetails.push('');
                // This opens the link title
                case 6:
                  linkDetails[5] = linkDetails[5].concat(_cap2[0]);
                  break;
                // Part of the link title
                default:
                  return false;
                // After link title was closed, without closing parenthesis
              }

              currentOffset += _cap2[0].length;
              continue inlineOuter;
            }

            // Process opening angle bracket as deilimiter of destination
            if (linkDetails.length < 2 && _string2.match(/^</)) {
              if (linkDetails.length == 0) linkDetails.push('');
              linkDetails[0] = linkDetails[0].concat('<');
              currentOffset++;
              continue inlineOuter;
            }

            // Process closing angle bracket as delimiter of destination
            if ((linkDetails.length == 1 || linkDetails.length == 2) && _string2.match(/^>/)) {
              if (linkDetails.length == 1) linkDetails.push(''); // Empty link destination
              linkDetails.push('>');
              currentOffset++;
              continue inlineOuter;
            }

            // Process  non-parenthesis delimiter for title. 
            _cap2 = /^["']/.exec(_string2);
            // For this to be a valid opener, we have to either have no destination, only whitespace so far,
            // or a destination with trailing whitespace.
            if (_cap2 && (linkDetails.length == 0 || linkDetails.length == 1 || linkDetails.length == 4)) {
              while (linkDetails.length < 4) {
                linkDetails.push('');
              }
              linkDetails.push(_cap2[0]);
              currentOffset++;
              continue inlineOuter;
            }

            // For this to be a valid closer, we have to have an opener and some or no title, and this has to match the opener
            if (_cap2 && (linkDetails.length == 5 || linkDetails.length == 6) && linkDetails[4] == _cap2[0]) {
              if (linkDetails.length == 5) linkDetails.push(''); // Empty link title
              linkDetails.push(_cap2[0]);
              currentOffset++;
              continue inlineOuter;
            }
            // Other cases (linkDetails.length == 2, 3, 7) will be handled with the "default" case below.

            // Process opening parenthesis
            if (_string2.match(/^\(/)) {
              switch (linkDetails.length) {
                case 0:
                  linkDetails.push('');
                // this opens the link destination, add empty opening delimiter and proceed to next case
                case 1:
                  linkDetails.push('');
                // This opens the link destination
                case 2:
                  // Part of the link destination
                  linkDetails[1] = linkDetails[1].concat('(');
                  if (!linkDetails[0].match(/<$/)) parenthesisLevel++;
                  break;
                case 3:
                  linkDetails.push('');
                //  opening delimiter for link title
                case 4:
                  linkDetails.push('(');
                  break;
                // opening delimiter for link title
                case 5:
                  linkDetails.push('');
                // opens the link title, add empty title content and proceed to next case 
                case 6:
                  // Part of the link title. Un-escaped parenthesis only allowed in " or ' delimited title
                  if (linkDetails[4] == '(') return false;
                  linkDetails[5] = linkDetails[5].concat('(');
                  break;
                default:
                  return false;
                // After link title was closed, without closing parenthesis
              }

              currentOffset++;
              continue inlineOuter;
            }

            // Process closing parenthesis
            if (_string2.match(/^\)/)) {
              if (linkDetails.length <= 2) {
                // We are inside the link destination. Parentheses have to be matched if not in angle brackets
                while (linkDetails.length < 2) {
                  linkDetails.push('');
                }
                if (!linkDetails[0].match(/<$/)) parenthesisLevel--;
                if (parenthesisLevel > 0) {
                  linkDetails[1] = linkDetails[1].concat(')');
                }
              } else if (linkDetails.length == 5 || linkDetails.length == 6) {
                // We are inside the link title. 
                if (linkDetails[4] == '(') {
                  // This closes the link title
                  if (linkDetails.length == 5) linkDetails.push('');
                  linkDetails.push(')');
                } else {
                  // Just regular ol' content
                  if (linkDetails.length == 5) linkDetails.push(')');else linkDetails[5] = linkDetails[5].concat(')');
                }
              } else {
                parenthesisLevel--; // This should decrease it from 1 to 0...
              }

              if (parenthesisLevel == 0) {
                // No invalid condition, let's make sure the linkDetails array is complete
                while (linkDetails.length < 7) {
                  linkDetails.push('');
                }
              }
              currentOffset++;
              continue inlineOuter;
            }

            // Any old character
            _cap2 = /^./.exec(_string2);
            if (_cap2) {
              switch (linkDetails.length) {
                case 0:
                  linkDetails.push('');
                // this opens the link destination, add empty opening delimiter and proceed to next case
                case 1:
                  linkDetails.push(_cap2[0]);
                  break;
                // This opens the link destination, append it
                case 2:
                  linkDetails[1] = linkDetails[1].concat(_cap2[0]);
                  break;
                // Part of the link destination
                case 3:
                  return false;
                // Lacking opening delimiter for link title
                case 4:
                  return false;
                // Lcaking opening delimiter for link title
                case 5:
                  linkDetails.push('');
                // This opens the link title
                case 6:
                  linkDetails[5] = linkDetails[5].concat(_cap2[0]);
                  break;
                // Part of the link title
                default:
                  return false;
                // After link title was closed, without closing parenthesis
              }

              currentOffset += _cap2[0].length;
              continue inlineOuter;
            }
            throw "Infinite loop"; // we should never get here since the last test matches any character
          }

          if (parenthesisLevel > 0) return false; // Parenthes(es) not closed
        }

        if (linkRef !== false) {
          // Ref link; check that linkRef is valid
          var valid = false;
          var _iterator2 = _createForOfIteratorHelper(this.linkLabels),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _label = _step2.value;
              if (_label == linkRef) {
                valid = true;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var label = valid ? "TMLinkLabel TMLinkLabel_Valid" : "TMLinkLabel TMLinkLabel_Invalid";
          var output = "<span class=\"TMMark TMMark_".concat(type, "\">").concat(opener, "</span><span class=\"").concat(type, " ").concat(linkLabel.length < 3 || !linkLabel[1] ? label : "", "\">").concat(this.processInlineStyles(linkText), "</span><span class=\"TMMark TMMark_").concat(type, "\">]</span>");
          if (linkLabel.length >= 3) {
            output = output.concat("<span class=\"TMMark TMMark_".concat(type, "\">").concat(linkLabel[0], "</span>"), "<span class=\"".concat(label, "\">").concat(linkLabel[1], "</span>"), "<span class=\"TMMark TMMark_".concat(type, "\">").concat(linkLabel[2], "</span>"));
          }
          return {
            output: output,
            charCount: currentOffset
          };
        } else if (linkDetails) {
          // Inline link

          // This should never happen, but better safe than sorry.
          while (linkDetails.length < 7) {
            linkDetails.push('');
          }
          return {
            output: "<span class=\"TMMark TMMark_".concat(type, "\">").concat(opener, "</span><span class=\"").concat(type, "\">").concat(this.processInlineStyles(linkText), "</span><span class=\"TMMark TMMark_").concat(type, "\">](").concat(linkDetails[0], "</span><span class=\"").concat(type, "Destination\">").concat(linkDetails[1], "</span><span class=\"TMMark TMMark_").concat(type, "\">").concat(linkDetails[2]).concat(linkDetails[3]).concat(linkDetails[4], "</span><span class=\"").concat(type, "Title\">").concat(linkDetails[5], "</span><span class=\"TMMark TMMark_").concat(type, "\">").concat(linkDetails[6], ")</span>"),
            charCount: currentOffset
          };
        }
        return false;
      }

      /**
       * Formats a markdown string as HTML, using Markdown inline formatting.
       * @param {string} originalString The input (markdown inline formatted) string
       * @returns {string} The HTML formatted output
       */
    }, {
      key: "processInlineStyles",
      value: function processInlineStyles(originalString) {
        var _this3 = this;
        var processed = '';
        var stack = []; // Stack is an array of objects of the format: {delimiter, delimString, count, output}
        var offset = 0;
        var string = originalString;
        var _loop = function _loop() {
          var _loop2 = function _loop2() {
            var rule = _arr2[_i2];
            var cap = inlineGrammar[rule].regexp.exec(string);
            if (cap) {
              string = string.substr(cap[0].length);
              offset += cap[0].length;
              processed += inlineGrammar[rule].replacement
              // .replace(/\$\$([1-9])/g, (str, p1) => processInlineStyles(cap[p1])) // todo recursive calling
              .replace(/\$([1-9])/g, function (str, p1) {
                return htmlescape(cap[p1]);
              });
              return {
                v: "continue|outer"
              };
            }
          };
          // Process simple rules (non-delimiter)
          for (var _i2 = 0, _arr2 = ['escape', 'code', 'autolink', 'html']; _i2 < _arr2.length; _i2++) {
            var _ret2 = _loop2();
            if (_typeof(_ret2) === "object") return _ret2.v;
          }

          // Check for links / images
          var potentialLink = string.match(inlineGrammar.linkOpen.regexp);
          var potentialImage = string.match(inlineGrammar.imageOpen.regexp);
          if (potentialImage || potentialLink) {
            var result = _this3.parseLinkOrImage(string, potentialImage);
            if (result) {
              processed = "".concat(processed).concat(result.output);
              string = string.substr(result.charCount);
              offset += result.charCount;
              return "continue|outer";
            }
          }

          // Check for em / strong delimiters
          var cap = /(^\*+)|(^_+)/.exec(string);
          if (cap) {
            var delimCount = cap[0].length;
            var delimString = cap[0];
            var currentDelimiter = cap[0][0]; // This should be * or _

            string = string.substr(cap[0].length);

            // We have a delimiter run. Let's check if it can open or close an emphasis.

            var preceding = offset > 0 ? originalString.substr(0, offset) : ' '; // beginning and end of line count as whitespace
            var following = offset + cap[0].length < originalString.length ? string : ' ';
            var punctuationFollows = following.match(punctuationLeading);
            var punctuationPrecedes = preceding.match(punctuationTrailing);
            var whitespaceFollows = following.match(/^\s/);
            var whitespacePrecedes = preceding.match(/\s$/);

            // These are the rules for right-flanking and left-flanking delimiter runs as per CommonMark spec
            var canOpen = !whitespaceFollows && (!punctuationFollows || !!whitespacePrecedes || !!punctuationPrecedes);
            var canClose = !whitespacePrecedes && (!punctuationPrecedes || !!whitespaceFollows || !!punctuationFollows);

            // Underscores have more detailed rules than just being part of left- or right-flanking run:
            if (currentDelimiter == '_' && canOpen && canClose) {
              canOpen = punctuationPrecedes;
              canClose = punctuationFollows;
            }

            // If the delimiter can close, check the stack if there's something it can close
            if (canClose) {
              var stackPointer = stack.length - 1;
              // See if we can find a matching opening delimiter, move down through the stack
              while (delimCount && stackPointer >= 0) {
                if (stack[stackPointer].delimiter == currentDelimiter) {
                  // We found a matching delimiter, let's construct the formatted string

                  // Firstly, if we skipped any stack levels, pop them immediately (non-matching delimiters)
                  while (stackPointer < stack.length - 1) {
                    var _entry = stack.pop();
                    processed = "".concat(_entry.output).concat(_entry.delimString.substr(0, _entry.count)).concat(processed);
                  }

                  // Then, format the string
                  if (delimCount >= 2 && stack[stackPointer].count >= 2) {
                    // Strong
                    processed = "<span class=\"TMMark\">".concat(currentDelimiter).concat(currentDelimiter, "</span><strong class=\"TMStrong\">").concat(processed, "</strong><span class=\"TMMark\">").concat(currentDelimiter).concat(currentDelimiter, "</span>");
                    delimCount -= 2;
                    stack[stackPointer].count -= 2;
                  } else {
                    // Em
                    processed = "<span class=\"TMMark\">".concat(currentDelimiter, "</span><em class=\"TMEm\">").concat(processed, "</em><span class=\"TMMark\">").concat(currentDelimiter, "</span>");
                    delimCount -= 1;
                    stack[stackPointer].count -= 1;
                  }

                  // If that stack level is empty now, pop it
                  if (stack[stackPointer].count == 0) {
                    var _entry2 = stack.pop();
                    processed = "".concat(_entry2.output).concat(processed);
                    stackPointer--;
                  }
                } else {
                  // This stack level's delimiter type doesn't match the current delimiter type
                  // Go down one level in the stack
                  stackPointer--;
                }
              }
            }
            // If there are still delimiters left, and the delimiter run can open, push it on the stack
            if (delimCount && canOpen) {
              stack.push({
                delimiter: currentDelimiter,
                delimString: delimString,
                count: delimCount,
                output: processed
              });
              processed = ''; // Current formatted output has been pushed on the stack and will be prepended when the stack gets popped
              delimCount = 0;
            }

            // Any delimiters that are left (closing unmatched) are appended to the output.
            if (delimCount) {
              processed = "".concat(processed).concat(delimString.substr(0, delimCount));
            }
            offset += cap[0].length;
            return "continue|outer";
          }

          // Check for strikethrough delimiter
          cap = /^~~/.exec(string);
          if (cap) {
            var consumed = false;
            var _stackPointer = stack.length - 1;
            // See if we can find a matching opening delimiter, move down through the stack
            while (!consumed && _stackPointer >= 0) {
              if (stack[_stackPointer].delimiter == '~') {
                // We found a matching delimiter, let's construct the formatted string

                // Firstly, if we skipped any stack levels, pop them immediately (non-matching delimiters)
                while (_stackPointer < stack.length - 1) {
                  var _entry4 = stack.pop();
                  processed = "".concat(_entry4.output).concat(_entry4.delimString.substr(0, _entry4.count)).concat(processed);
                }

                // Then, format the string
                processed = "<span class=\"TMMark\">~~</span><del class=\"TMStrikethrough\">".concat(processed, "</del><span class=\"TMMark\">~~</span>");
                var _entry3 = stack.pop();
                processed = "".concat(_entry3.output).concat(processed);
                consumed = true;
              } else {
                // This stack level's delimiter type doesn't match the current delimiter type
                // Go down one level in the stack
                _stackPointer--;
              }
            }

            // If there are still delimiters left, and the delimiter run can open, push it on the stack
            if (!consumed) {
              stack.push({
                delimiter: '~',
                delimString: '~~',
                count: 2,
                output: processed
              });
              processed = ''; // Current formatted output has been pushed on the stack and will be prepended when the stack gets popped
            }

            offset += cap[0].length;
            string = string.substr(cap[0].length);
            return "continue|outer";
          }

          // Process 'default' rule
          cap = inlineGrammar.default.regexp.exec(string);
          if (cap) {
            string = string.substr(cap[0].length);
            offset += cap[0].length;
            processed += inlineGrammar.default.replacement.replace(/\$([1-9])/g, function (str, p1) {
              return htmlescape(cap[p1]);
            });
            return "continue|outer";
          }
          throw 'Infinite loop!';
        };
        outer: while (string) {
          var _ret = _loop();
          if (_ret === "continue|outer") continue outer;
        }

        // Empty the stack, any opening delimiters are unused
        while (stack.length) {
          var entry = stack.pop();
          processed = "".concat(entry.output).concat(entry.delimString.substr(0, entry.count)).concat(processed);
        }
        return processed;
      }

      /** 
       * Clears the line dirty flag (resets it to an array of false)
       */
    }, {
      key: "clearDirtyFlag",
      value: function clearDirtyFlag() {
        this.lineDirty = new Array(this.lines.length);
        for (var i = 0; i < this.lineDirty.length; i++) {
          this.lineDirty[i] = false;
        }
      }

      /**
       * Updates the class properties (lines, lineElements) from the DOM.
       * @returns true if contents changed
       */
    }, {
      key: "updateLineContents",
      value: function updateLineContents() {
        // this.lineDirty = []; 
        // Check if we have changed anything about the number of lines (inserted or deleted a paragraph)
        // < 0 means line(s) removed; > 0 means line(s) added
        var lineDelta = this.e.childElementCount - this.lines.length;
        if (lineDelta) {
          // yup. Let's try how much we can salvage (find out which lines from beginning and end were unchanged)
          // Find lines from the beginning that haven't changed...
          var firstChangedLine = 0;
          while (firstChangedLine <= this.lines.length && firstChangedLine <= this.lineElements.length && this.lineElements[firstChangedLine] // Check that the line element hasn't been deleted
          && this.lines[firstChangedLine] == this.lineElements[firstChangedLine].textContent) {
            firstChangedLine++;
          }

          // End also from the end
          var lastChangedLine = -1;
          while (-lastChangedLine < this.lines.length && -lastChangedLine < this.lineElements.length && this.lines[this.lines.length + lastChangedLine] == this.lineElements[this.lineElements.length + lastChangedLine].textContent) {
            lastChangedLine--;
          }
          var linesToDelete = this.lines.length + lastChangedLine + 1 - firstChangedLine;
          if (linesToDelete < -lineDelta) linesToDelete = -lineDelta;
          if (linesToDelete < 0) linesToDelete = 0;
          var linesToAdd = [];
          for (var l = 0; l < linesToDelete + lineDelta; l++) {
            linesToAdd.push(this.lineElements[firstChangedLine + l].textContent);
          }
          this.spliceLines(firstChangedLine, linesToDelete, linesToAdd, false);
        } else {
          // No lines added or removed
          for (var line = 0; line < this.lineElements.length; line++) {
            var e = this.lineElements[line];
            var ct = e.textContent;
            if (this.lines[line] !== ct) {
              // Line changed, update it
              this.lines[line] = ct;
              this.lineDirty[line] = true;
            }
          }
        }
      }

      /**
       * Processes a new paragraph.
       * @param sel The current selection
       */
    }, {
      key: "processNewParagraph",
      value: function processNewParagraph(sel) {
        if (!sel) return;

        // Update lines from content
        this.updateLineContents();
        var continuableType = false;
        // Let's see if we need to continue a list

        var checkLine = sel.col > 0 ? sel.row : sel.row - 1;
        switch (this.lineTypes[checkLine]) {
          case 'TMUL':
            continuableType = 'TMUL';
            break;
          case 'TMOL':
            continuableType = 'TMOL';
            break;
          case 'TMIndentedCode':
            continuableType = 'TMIndentedCode';
            break;
        }
        var lines = this.lines[sel.row].replace(/\n\n$/, '\n').split(/(?:\r\n|\n|\r)/);
        if (lines.length == 1) {
          // No new line
          this.updateFormatting();
          return;
        }
        this.spliceLines(sel.row, 1, lines, true);
        sel.row++;
        sel.col = 0;
        if (continuableType) {
          // Check if the previous line was non-empty
          var capture = lineGrammar[continuableType].regexp.exec(this.lines[sel.row - 1]);
          if (capture) {
            // Convention: capture[1] is the line type marker, capture[2] is the content
            if (capture[2]) {
              // Previous line has content, continue the continuable type

              // Hack for OL: increment number
              if (continuableType == 'TMOL') {
                capture[1] = capture[1].replace(/\d{1,9}/, function (result) {
                  return parseInt(result[0]) + 1;
                });
              }
              this.lines[sel.row] = "".concat(capture[1]).concat(this.lines[sel.row]);
              this.lineDirty[sel.row] = true;
              sel.col = capture[1].length;
            } else {
              // Previous line has no content, remove the continuable type from the previous row
              this.lines[sel.row - 1] = '';
              this.lineDirty[sel.row - 1] = true;
            }
          }
        }
        this.updateFormatting();
      }

      // /**
      //  * Processes a "delete" input action.
      //  * @param {object} focus The selection
      //  * @param {boolean} forward If true, performs a forward delete, otherwise performs a backward delete
      //  */
      // processDelete(focus, forward) {
      //   if (!focus) return;
      //   let anchor = this.getSelection(true);
      //   // Do we have a non-empty selection? 
      //   if (focus.col != anchor.col || focus.row != anchor.row) {
      //     // non-empty. direction doesn't matter.
      //     this.paste('', anchor, focus);
      //   } else {
      //     if (forward) {
      //       if (focus.col < this.lines[focus.row].length) this.paste('', {row: focus.row, col: focus.col + 1}, focus);
      //       else if (focus.col < this.lines.length) this.paste('', {row: focus.row + 1, col: 0}, focus);
      //       // Otherwise, we're at the very end and can't delete forward
      //     } else {
      //       if (focus.col > 0) this.paste('', {row: focus.row, col: focus.col - 1}, focus);
      //       else if (focus.row > 0) this.paste('', {row: focus.row - 1, col: this.lines[focus.row - 1].length - 1}, focus);
      //       // Otherwise, we're at the very beginning and can't delete backwards
      //     }
      //   }

      // }

      /**
       * Gets the current position of the selection counted by row and column of the editor Markdown content (as opposed to the position in the DOM).
       * 
       * @param {boolean} getAnchor if set to true, gets the selection anchor (start point of the selection), otherwise gets the focus (end point).
       * @return {object} An object representing the selection, with properties col and row.
       */
    }, {
      key: "getSelection",
      value: function getSelection() {
        var getAnchor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var selection = window.getSelection();
        var startNode = getAnchor ? selection.anchorNode : selection.focusNode;
        if (!startNode) return null;
        var offset = startNode.nodeType === Node.TEXT_NODE ? getAnchor ? selection.anchorOffset : selection.focusOffset : 0;
        if (startNode == this.e) {
          return {
            row: 0,
            col: offset
          };
        }
        var col = this.computeColumn(startNode, offset);
        if (col === null) return null; // We are outside of the editor

        // Find the row node
        var node = startNode;
        while (node.parentElement != this.e) {
          node = node.parentElement;
        }
        var row = 0;
        // Check if we can read a line number from the data-line-num attribute.
        // The last condition is a security measure since inserting a new paragraph copies the previous rows' line number
        if (node.dataset && node.dataset.lineNum && (!node.previousSibling || node.previousSibling.dataset.lineNum != node.dataset.lineNum)) {
          row = parseInt(node.dataset.lineNum);
        } else {
          while (node.previousSibling) {
            row++;
            node = node.previousSibling;
          }
        }
        return {
          row: row,
          col: col,
          node: startNode
        };
      }

      /**
       * Computes a column within an editor line from a node and offset within that node.
       * @param {Node} startNode The node
       * @param {int} offset THe selection
       * @returns {int} the column, or null if the node is not inside the editor
       */
    }, {
      key: "computeColumn",
      value: function computeColumn(startNode, offset) {
        var node = startNode;
        var col = offset;
        // First, make sure we're actually in the editor.
        while (node && node.parentNode != this.e) {
          node = node.parentNode;
        }
        if (node == null) return null;
        node = startNode;
        while (node.parentNode != this.e) {
          if (node.previousSibling) {
            node = node.previousSibling;
            col += node.textContent.length;
          } else {
            node = node.parentNode;
          }
        }
        return col;
      }

      /**
       * Computes DOM node and offset within that node from a position expressed as row and column.
       * @param {int} row Row (line number)
       * @param {int} col Column
       * @returns An object with two properties: node and offset. offset may be null;
       */
    }, {
      key: "computeNodeAndOffset",
      value: function computeNodeAndOffset(row, col) {
        var bindRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (row >= this.lineElements.length) {
          // Selection past the end of text, set selection to end of text
          row = this.lineElements.length - 1;
          col = this.lines[row].length;
        }
        if (col > this.lines[row].length) {
          col = this.lines[row].length;
        }
        var parentNode = this.lineElements[row];
        var node = parentNode.firstChild;
        var childrenComplete = false;
        // default return value
        var rv = {
          node: parentNode.firstChild ? parentNode.firstChild : parentNode,
          offset: 0
        };
        while (node != parentNode) {
          if (!childrenComplete && node.nodeType === Node.TEXT_NODE) {
            if (node.nodeValue.length >= col) {
              if (bindRight && node.nodeValue.length == col) {
                // Selection is at the end of this text node, but we are binding right (prefer an offset of 0 in the next text node)
                // Remember return value in case we don't find another text node
                rv = {
                  node: node,
                  offset: col
                };
                col = 0;
              } else {
                return {
                  node: node,
                  offset: col
                };
              }
            } else {
              col -= node.nodeValue.length;
            }
          }
          if (!childrenComplete && node.firstChild) {
            node = node.firstChild;
          } else if (node.nextSibling) {
            childrenComplete = false;
            node = node.nextSibling;
          } else {
            childrenComplete = true;
            node = node.parentNode;
          }
        }

        // Either, the position was invalid and we just return the default return value
        // Or we are binding right and the selection is at the end of the line
        return rv;
      }

      /**
       * Sets the selection based on rows and columns within the editor Markdown content.
       * @param {object} focus Object representing the selection, needs to have properties row and col.
       */
    }, {
      key: "setSelection",
      value: function setSelection(focus) {
        var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (!focus) return;
        var range = document.createRange();
        var _this$computeNodeAndO = this.computeNodeAndOffset(focus.row, focus.col, anchor && anchor.row == focus.row && anchor.col > focus.col),
          focusNode = _this$computeNodeAndO.node,
          focusOffset = _this$computeNodeAndO.offset; // Bind selection right if anchor is in the same row and behind the focus
        var anchorNode = null,
          anchorOffset = null;
        if (anchor && (anchor.row != focus.row || anchor.col != focus.col)) {
          var _this$computeNodeAndO2 = this.computeNodeAndOffset(anchor.row, anchor.col, focus.row == anchor.row && focus.col > anchor.col),
            node = _this$computeNodeAndO2.node,
            offset = _this$computeNodeAndO2.offset;
          anchorNode = node;
          anchorOffset = offset;
        }
        if (anchorNode) range.setStart(anchorNode, anchorOffset);else range.setStart(focusNode, focusOffset);
        range.setEnd(focusNode, focusOffset);
        var windowSelection = window.getSelection();
        windowSelection.removeAllRanges();
        windowSelection.addRange(range);
      }

      /** 
       * Event handler for input events 
       */
    }, {
      key: "handleInputEvent",
      value: function handleInputEvent(event) {
        var focus = this.getSelection();
        if ((event.inputType == 'insertParagraph' || event.inputType == 'insertLineBreak') && focus) {
          this.clearDirtyFlag();
          this.processNewParagraph(focus);
        } else {
          if (!this.e.firstChild) {
            this.e.innerHTML = '<div class="TMBlankLine"><br></div>';
          } else {
            for (var childNode = this.e.firstChild; childNode; childNode = childNode.nextSibling) {
              if (childNode.nodeType != 3 || childNode.tagName != 'DIV') {
                // Found a child node that's either not an element or not a div. Wrap it in a div.
                var divWrapper = document.createElement('div');
                this.e.insertBefore(divWrapper, childNode);
                this.e.removeChild(childNode);
                divWrapper.appendChild(childNode);
              }
            }
          }
          this.updateLineContentsAndFormatting();
        }
        if (focus) this.setSelection(focus);
        this.fireChange();
      }

      /**
       * Event handler for "selectionchange" events.
       */
    }, {
      key: "handleSelectionChangeEvent",
      value: function handleSelectionChangeEvent() {
        this.fireSelection();
      }

      /**
       * Convenience function to "splice" new lines into the arrays this.lines, this.lineDirty, this.lineTypes, and the DOM elements 
       * underneath the editor element.
       * This method is essentially Array.splice, only that the third parameter takes an un-spread array (and the forth parameter)
       * determines whether the DOM should also be adjusted.
       * 
       * @param {int} startLine Position at which to start changing the array of lines
       * @param {int} linesToDelete Number of lines to delete
       * @param {array} linesToInsert Array of strings representing the lines to be inserted
       * @param {boolean} adjustLineElements If true, then <div> elements are also inserted in the DOM at the respective position
       */
    }, {
      key: "spliceLines",
      value: function spliceLines(startLine) {
        var _this$lines, _this$lineTypes, _this$lineDirty;
        var linesToDelete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var linesToInsert = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var adjustLineElements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        if (adjustLineElements) {
          for (var i = 0; i < linesToDelete; i++) {
            this.e.removeChild(this.e.childNodes[startLine]);
          }
        }
        var insertedBlank = [];
        var insertedDirty = [];
        for (var _i3 = 0; _i3 < linesToInsert.length; _i3++) {
          insertedBlank.push('');
          insertedDirty.push(true);
          if (adjustLineElements) {
            if (this.e.childNodes[startLine]) this.e.insertBefore(document.createElement('div'), this.e.childNodes[startLine]);else this.e.appendChild(document.createElement('div'));
          }
        }
        (_this$lines = this.lines).splice.apply(_this$lines, [startLine, linesToDelete].concat(_toConsumableArray(linesToInsert)));
        (_this$lineTypes = this.lineTypes).splice.apply(_this$lineTypes, [startLine, linesToDelete].concat(insertedBlank));
        (_this$lineDirty = this.lineDirty).splice.apply(_this$lineDirty, [startLine, linesToDelete].concat(insertedDirty));
      }

      /**
       * Event handler for the "paste" event
       */
    }, {
      key: "handlePaste",
      value: function handlePaste(event) {
        event.preventDefault();

        // get text representation of clipboard
        var text = (event.originalEvent || event).clipboardData.getData('text/plain');

        // insert text manually
        this.paste(text);
      }

      /**
       * Pastes the text at the current selection (or at the end, if no current selection)
       * @param {string} text 
       */
    }, {
      key: "paste",
      value: function paste(text) {
        var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var focus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (!anchor) anchor = this.getSelection(true);
        if (!focus) focus = this.getSelection(false);
        var beginning, end;
        if (!focus) {
          focus = {
            row: this.lines.length - 1,
            col: this.lines[this.lines.length - 1].length
          }; // Insert at end
        }

        if (!anchor) {
          anchor = focus;
        }
        if (anchor.row < focus.row || anchor.row == focus.row && anchor.col <= focus.col) {
          beginning = anchor;
          end = focus;
        } else {
          beginning = focus;
          end = anchor;
        }
        var insertedLines = text.split(/(?:\r\n|\r|\n)/);
        var lineBefore = this.lines[beginning.row].substr(0, beginning.col);
        var lineEnd = this.lines[end.row].substr(end.col);
        insertedLines[0] = lineBefore.concat(insertedLines[0]);
        var endColPos = insertedLines[insertedLines.length - 1].length;
        insertedLines[insertedLines.length - 1] = insertedLines[insertedLines.length - 1].concat(lineEnd);
        this.spliceLines(beginning.row, 1 + end.row - beginning.row, insertedLines);
        focus.row = beginning.row + insertedLines.length - 1;
        focus.col = endColPos;
        this.updateFormatting();
        this.setSelection(focus);
        this.fireChange();
      }

      /**
       * Computes the (lowest in the DOM tree) common ancestor of two DOM nodes.
       * @param {Node} node1 the first node
       * @param {Node} node2 the second node
       * @returns {Node} The commen ancestor node, or null if there is no common ancestor
       */
    }, {
      key: "computeCommonAncestor",
      value: function computeCommonAncestor(node1, node2) {
        if (!node1 || !node2) return null;
        if (node1 == node2) return node1;
        var ancestry = function ancestry(node) {
          var ancestry = [];
          while (node) {
            ancestry.unshift(node);
            node = node.parentNode;
          }
          return ancestry;
        };
        var ancestry1 = ancestry(node1);
        var ancestry2 = ancestry(node2);
        if (ancestry1[0] != ancestry2[0]) return null;
        var i;
        for (i = 0; ancestry1[i] == ancestry2[i]; i++) {
        }
        return ancestry1[i - 1];
      }

      /**
       * Finds the (lowest in the DOM tree) enclosing DOM node with a given class.
       * @param {object} focus The focus selection object
       * @param {object} anchor The anchor selection object
       * @param {string} className The class name to find
       * @returns {Node} The enclosing DOM node with the respective class (inside the editor), if there is one; null otherwise.
       */
    }, {
      key: "computeEnclosingMarkupNode",
      value: function computeEnclosingMarkupNode(focus, anchor, className) {
        var node = null;
        if (!focus) return null;
        if (!anchor) {
          node = focus.node;
        } else {
          if (focus.row != anchor.row) return null;
          node = this.computeCommonAncestor(focus.node, anchor.node);
        }
        if (!node) return null;
        while (node != this.e) {
          if (node.className && node.className.includes(className)) return node;
          node = node.parentNode;
        }
        // Ascended all the way to the editor element
        return null;
      }

      /**
       * Returns the state (true / false) of all commands.
       * @param focus Focus of the selection. If not given, assumes the current focus.
       */
    }, {
      key: "getCommandState",
      value: function getCommandState() {
        var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var anchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var commandState = {};
        if (!focus) focus = this.getSelection(false);
        if (!anchor) anchor = this.getSelection(true);
        if (!focus) {
          for (var cmd in commands) {
            commandState[cmd] = null;
          }
          return commandState;
        }
        if (!anchor) anchor = focus;
        var start, end;
        if (anchor.row < focus.row || anchor.row == focus.row && anchor.col < focus.col) {
          start = anchor;
          end = focus;
        } else {
          start = focus;
          end = anchor;
        }
        if (end.row > start.row && end.col == 0) {
          end.row--;
          end.col = this.lines[end.row].length; // Selection to beginning of next line is said to end at the beginning of the last line
        }

        for (var _cmd in commands) {
          if (commands[_cmd].type == 'inline') {
            if (!focus || focus.row != anchor.row || !this.isInlineFormattingAllowed(focus, anchor)) {
              commandState[_cmd] = null;
            } else {
              // The command state is true if there is a respective enclosing markup node (e.g., the selection is enclosed in a <b>..</b>) ... 
              commandState[_cmd] = !!this.computeEnclosingMarkupNode(focus, anchor, commands[_cmd].className) ||
              // ... or if it's an empty string preceded by and followed by formatting markers, e.g. **|** where | is the cursor

              focus.col == anchor.col && !!this.lines[focus.row].substr(0, focus.col).match(commands[_cmd].unset.prePattern) && !!this.lines[focus.row].substr(focus.col).match(commands[_cmd].unset.postPattern);
            }
          }
          if (commands[_cmd].type == 'line') {
            if (!focus) {
              commandState[_cmd] = null;
            } else {
              var state = this.lineTypes[start.row] == commands[_cmd].className;
              for (var line = start.row; line <= end.row; line++) {
                if (this.lineTypes[line] == commands[_cmd].className != state) {
                  state = null;
                  break;
                }
              }
              commandState[_cmd] = state;
            }
          }
        }
        return commandState;
      }

      /**
       * Sets a command state
       * @param {string} command 
       * @param {boolean} state 
       */
    }, {
      key: "setCommandState",
      value: function setCommandState(command, state) {
        if (commands[command].type == 'inline') {
          var anchor = this.getSelection(true);
          var focus = this.getSelection(false);
          if (!anchor) anchor = focus;
          if (!anchor) return;
          if (anchor.row != focus.row) return;
          if (!this.isInlineFormattingAllowed(focus, anchor)) return;
          var markupNode = this.computeEnclosingMarkupNode(focus, anchor, commands[command].className);
          this.clearDirtyFlag();

          // First case: There's an enclosing markup node, remove the markers around that markup node
          if (markupNode) {
            this.lineDirty[focus.row] = true;
            var startCol = this.computeColumn(markupNode, 0);
            var len = markupNode.textContent.length;
            var left = this.lines[focus.row].substr(0, startCol).replace(commands[command].unset.prePattern, '');
            var mid = this.lines[focus.row].substr(startCol, len);
            var right = this.lines[focus.row].substr(startCol + len).replace(commands[command].unset.postPattern, '');
            this.lines[focus.row] = left.concat(mid, right);
            anchor.col = left.length;
            focus.col = anchor.col + len;
            this.updateFormatting();
            this.setSelection(focus, anchor);

            // Second case: Empty selection with surrounding formatting markers, remove those
          } else if (focus.col == anchor.col && !!this.lines[focus.row].substr(0, focus.col).match(commands[command].unset.prePattern) && !!this.lines[focus.row].substr(focus.col).match(commands[command].unset.postPattern)) {
            this.lineDirty[focus.row] = true;
            var _left = this.lines[focus.row].substr(0, focus.col).replace(commands[command].unset.prePattern, '');
            var _right = this.lines[focus.row].substr(focus.col).replace(commands[command].unset.postPattern, '');
            this.lines[focus.row] = _left.concat(_right);
            focus.col = anchor.col = _left.length;
            this.updateFormatting();
            this.setSelection(focus, anchor);

            // Not currently formatted, insert formatting markers
          } else {
            // Trim any spaces from the selection
            var _ref = focus.col < anchor.col ? {
                startCol: focus.col,
                endCol: anchor.col
              } : {
                startCol: anchor.col,
                endCol: focus.col
              },
              _startCol = _ref.startCol,
              endCol = _ref.endCol;
            var match = this.lines[focus.row].substr(_startCol, endCol - _startCol).match( /*#__PURE__*/_wrapRegExp(/^(\s*).*\S(\s*)$/, {
              leading: 1,
              trailing: 2
            }));
            if (match) {
              _startCol += match.groups.leading.length;
              endCol -= match.groups.trailing.length;
            }
            focus.col = _startCol;
            anchor.col = endCol;

            // Just insert markup before and after and hope for the best. 
            this.wrapSelection(commands[command].set.pre, commands[command].set.post, focus, anchor);
            // TODO clean this up so that markup remains properly nested
          }
        } else if (commands[command].type == 'line') {
          var _anchor = this.getSelection(true);
          var _focus = this.getSelection(false);
          if (!_anchor) _anchor = _focus;
          if (!_focus) return;
          this.clearDirtyFlag();
          var start = _anchor.row > _focus.row ? _focus : _anchor;
          var end = _anchor.row > _focus.row ? _anchor : _focus;
          if (end.row > start.row && end.col == 0) {
            end.row--;
          }
          for (var line = start.row; line <= end.row; line++) {
            if (state && this.lineTypes[line] != commands[command].className) {
              this.lines[line] = this.lines[line].replace(commands[command].set.pattern, commands[command].set.replacement.replace('$#', line - start.row + 1));
              this.lineDirty[line] = true;
            }
            if (!state && this.lineTypes[line] == commands[command].className) {
              this.lines[line] = this.lines[line].replace(commands[command].unset.pattern, commands[command].unset.replacement);
              this.lineDirty[line] = true;
            }
          }
          this.updateFormatting();
          this.setSelection({
            row: end.row,
            col: this.lines[end.row].length
          }, {
            row: start.row,
            col: 0
          });
        }
      }

      /**
       * Returns whether or not inline formatting is allowed at the current focus 
       * @param {object} focus The current focus
       */
    }, {
      key: "isInlineFormattingAllowed",
      value: function isInlineFormattingAllowed() {
        // TODO Remove parameters from all calls
        var sel = window.getSelection();
        if (!sel) return false;

        // Check if we can find a common ancestor with the class `TMInlineFormatted` 

        // Special case: Empty selection right before `TMInlineFormatted`
        if (sel.isCollapsed && sel.focusNode.nodeType == 3 && sel.focusOffset == sel.focusNode.nodeValue.length) {
          var node;
          for (node = sel.focusNode; node && node.nextSibling == null; node = node.parentNode) {
          }
          if (node && node.nextSibling.className && node.nextSibling.className.includes('TMInlineFormatted')) return true;
        }

        // Look for a common ancestor
        var ancestor = this.computeCommonAncestor(sel.focusNode, sel.anchorNode);
        if (!ancestor) return false;

        // Check if there's an ancestor of class 'TMInlineFormatted' or 'TMBlankLine'
        while (ancestor && ancestor != this.e) {
          if (ancestor.className && (ancestor.className.includes('TMInlineFormatted') || ancestor.className.includes('TMBlankLine'))) return true;
          ancestor = ancestor.parentNode;
        }
        return false;
      }

      /**
       * Wraps the current selection in the strings pre and post. If the selection is not on one line, returns.
       * @param {string} pre The string to insert before the selection.
       * @param {string} post The string to insert after the selection.
       * @param {object} focus The current selection focus. If null, selection will be computed.
       * @param {object} anchor The current selection focus. If null, selection will be computed.
       */
    }, {
      key: "wrapSelection",
      value: function wrapSelection(pre, post) {
        var focus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        if (!focus) focus = this.getSelection(false);
        if (!anchor) anchor = this.getSelection(true);
        if (!focus || !anchor || focus.row != anchor.row) return;
        this.lineDirty[focus.row] = true;
        var startCol = focus.col < anchor.col ? focus.col : anchor.col;
        var endCol = focus.col < anchor.col ? anchor.col : focus.col;
        var left = this.lines[focus.row].substr(0, startCol).concat(pre);
        var mid = endCol == startCol ? '' : this.lines[focus.row].substr(startCol, endCol - startCol);
        var right = post.concat(this.lines[focus.row].substr(endCol));
        this.lines[focus.row] = left.concat(mid, right);
        anchor.col = left.length;
        focus.col = anchor.col + mid.length;
        this.updateFormatting();
        this.setSelection(focus, anchor);
      }

      /**
       * Toggles the command state for a command (true <-> false)
       * @param {string} command The editor command
       */
    }, {
      key: "toggleCommandState",
      value: function toggleCommandState(command) {
        if (!this.lastCommandState) this.lastCommandState = this.getCommandState();
        this.setCommandState(command, !this.lastCommandState[command]);
      }

      /**
       * Fires a change event. Updates the linked textarea and notifies any event listeners.
       */
    }, {
      key: "fireChange",
      value: function fireChange() {
        if (!this.textarea && !this.listeners.change.length) return;
        var content = this.getContent();
        if (this.textarea) this.textarea.value = content;
        var _iterator3 = _createForOfIteratorHelper(this.listeners.change),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var listener = _step3.value;
            listener({
              content: content,
              linesDirty: this.linesDirty
            });
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }

      /**
       * Fires a "selection changed" event.
       */
    }, {
      key: "fireSelection",
      value: function fireSelection() {
        if (this.listeners.selection && this.listeners.selection.length) {
          var focus = this.getSelection(false);
          var anchor = this.getSelection(true);
          var commandState = this.getCommandState(focus, anchor);
          if (this.lastCommandState) {
            Object.assign(this.lastCommandState, commandState);
          } else {
            this.lastCommandState = Object.assign({}, commandState);
          }
          var _iterator4 = _createForOfIteratorHelper(this.listeners.selection),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var listener = _step4.value;
              listener({
                focus: focus,
                anchor: anchor,
                commandState: this.lastCommandState
              });
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }

      /**
       * Adds an event listener.
       * @param {string} type The type of event to listen to. Can be 'change' or 'selection'
       * @param {*} listener Function of the type (event) => {} to be called when the event occurs.
       */
    }, {
      key: "addEventListener",
      value: function addEventListener(type, listener) {
        if (type.match(/^(?:change|input)$/i)) {
          this.listeners.change.push(listener);
        }
        if (type.match(/^(?:selection|selectionchange)$/i)) {
          this.listeners.selection.push(listener);
        }
      }
    }]);
    return Editor;
  }();

  exports.CommandBar = CommandBar;
  exports.Editor = Editor;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

