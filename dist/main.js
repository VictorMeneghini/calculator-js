/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/controller/CalcController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/controller/CalcController.js":
/*!**********************************************!*\
  !*** ./scripts/controller/CalcController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CalcController =\n/*#__PURE__*/\nfunction () {\n  function CalcController() {\n    _classCallCheck(this, CalcController);\n\n    this._lastOperator = '';\n    this.lastNumber = '';\n    this._operation = [];\n    this._locale = 'pt-BR';\n    this._displayCalcEl = document.querySelector('#display');\n    this._dateEl = document.querySelector('#data');\n    this._timeEl = document.querySelector('#hora');\n    this._currentDate;\n    this.initialize();\n    this.initButtonsEvents();\n  }\n\n  _createClass(CalcController, [{\n    key: \"initialize\",\n    value: function initialize() {\n      this.setDisplayDateTime();\n      this.setLastNumberToDisplay();\n    }\n  }, {\n    key: \"clearAll\",\n    value: function clearAll() {\n      this._operation = [0];\n      this.setLastNumberToDisplay(this._operation);\n    }\n  }, {\n    key: \"clearEntry\",\n    value: function clearEntry() {\n      this._operation.pop();\n    }\n  }, {\n    key: \"getLastOperation\",\n    value: function getLastOperation() {\n      return this._operation[this._operation.length - 1];\n    }\n  }, {\n    key: \"isOperator\",\n    value: function isOperator(value) {\n      return ['+', '-', '*', '%', '/', '='].indexOf(value) > -1;\n    }\n  }, {\n    key: \"setLastOperation\",\n    value: function setLastOperation(value) {\n      this._operation[this._operation.length - 1] = value;\n    }\n  }, {\n    key: \"pushOperation\",\n    value: function pushOperation(value) {\n      this._operation.push(value);\n\n      if (this._operation.length > 3) {\n        this.calc();\n      }\n    }\n  }, {\n    key: \"getResult\",\n    value: function getResult() {\n      return eval(this._operation.join(\"\"));\n    }\n  }, {\n    key: \"calc\",\n    value: function calc() {\n      var last = '';\n\n      if (this._operation.length > 3) {\n        last = this._operation.pop();\n        this._lastNumber = this.getResult();\n      }\n\n      this.getResult();\n\n      if (last == '%') {\n        result /= 100;\n        this._operation = [result];\n      } else {\n        this._operation = [result];\n        if (last) this._operation.push(last);\n      }\n\n      this.setLastNumberToDisplay();\n    }\n  }, {\n    key: \"getLastItem\",\n    value: function getLastItem() {\n      var isOperator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      var lastItem;\n\n      for (var i = this._operation.length - 1; i >= 0; i--) {\n        if (isOperator) {\n          if (this.isOperator(this._operation[i])) {\n            lastItem = this._operation[i];\n            break;\n          }\n        } else {\n          if (!this.isOperator(this._operation[i])) {\n            lastItem = this._operation[i];\n            break;\n          }\n        }\n      }\n\n      return;\n      if (!lastNumber) lastNumber = 0;\n      this.displayCalc = lastNumber;\n    }\n  }, {\n    key: \"setLastNumberToDisplay\",\n    value: function setLastNumberToDisplay() {\n      var lastNumber;\n\n      for (var i = this._operation.length - 1; i >= 0; i--) {\n        if (!this.isOperator(this._operation[i])) {\n          lastNumber = this._operation[i];\n          break;\n        }\n      }\n\n      if (!lastNumber) lastNumber = 0;\n      this.displayCalc = lastNumber;\n    }\n  }, {\n    key: \"addOperation\",\n    value: function addOperation(value) {\n      if (isNaN(this.getLastOperation())) {\n        if (this.isOperator(value)) {\n          this.setLastOperation(value);\n        } else if (isNaN(value)) {\n          console.log(value);\n        } else {\n          this.pushOperation(value);\n          this.setLastNumberToDisplay();\n        }\n      } else {\n        if (this.isOperator(value)) {\n          this.pushOperation(value);\n        } else {\n          var newValue = this.getLastOperation().toString() + value.toString();\n          this.setLastOperation(newValue);\n          this.setLastNumberToDisplay();\n        }\n      }\n\n      console.log(this._operation, 'here');\n    }\n  }, {\n    key: \"setError\",\n    value: function setError() {\n      this.displayCalc = \"Error\";\n    }\n  }, {\n    key: \"execBtn\",\n    value: function execBtn(value) {\n      switch (value) {\n        case 'ac':\n          this.clearAll();\n          break;\n\n        case 'ce':\n          this.clearEntry();\n          break;\n\n        case 'soma':\n          this.addOperation('+');\n          break;\n\n        case 'subtracao':\n          this.addOperation('-');\n          break;\n\n        case 'divisao':\n          this.addOperation('/');\n          break;\n\n        case 'multiplicacao':\n          this.addOperation('*');\n          break;\n\n        case 'porcento':\n          this.addOperation('%');\n          break;\n\n        case 'igual':\n          this.addOperation('=');\n          this.calc();\n          break;\n\n        case 'ponto':\n          this.addOperation('.');\n          break;\n\n        case '0':\n        case '1':\n        case '2':\n        case '3':\n        case '4':\n        case '5':\n        case '6':\n        case '7':\n        case '8':\n        case '9':\n          this.addOperation(parseInt(value));\n          break;\n\n        default:\n          this.setError();\n          break;\n      }\n    }\n  }, {\n    key: \"setDisplayDateTime\",\n    value: function setDisplayDateTime() {\n      var _this = this;\n\n      setInterval(function () {\n        _this.displayDate = _this.currentDate.toLocaleDateString(_this._locale);\n        _this.displayTime = _this.currentDate.toLocaleTimeString(_this._locale);\n      }, 1000);\n    }\n  }, {\n    key: \"addEventListenerAll\",\n    value: function addEventListenerAll(element, events, fn) {\n      events.split(' ').forEach(function (event) {\n        element.addEventListener(event, fn);\n      });\n    }\n  }, {\n    key: \"initButtonsEvents\",\n    value: function initButtonsEvents() {\n      var _this2 = this;\n\n      var buttons = document.querySelectorAll(\"#buttons > g, #parts > g\");\n      buttons.forEach(function (btn) {\n        _this2.addEventListenerAll(btn, 'click drag', function (e) {\n          var btnValue = btn.className.baseVal.replace(\"btn-\", \"\");\n\n          _this2.execBtn(btnValue);\n        });\n\n        _this2.addEventListenerAll(btn, \"mouseover mouseup mousedown\", function (e) {\n          btn.style.cursor = \"pointer\";\n        });\n      });\n    }\n  }, {\n    key: \"displayTime\",\n    get: function get() {\n      return this._timeEl.innerHTML;\n    },\n    set: function set(value) {\n      return this._timeEl.innerHTML = value;\n    }\n  }, {\n    key: \"displayDate\",\n    get: function get() {\n      return this._dateEl.innerHTML;\n    },\n    set: function set(value) {\n      return this._dateEl.innerHTML = value;\n    }\n  }, {\n    key: \"displayCalc\",\n    get: function get() {\n      return this._displayCalcEl.innerHTML;\n    },\n    set: function set(value) {\n      this._displayCalcEl.innerHTML = value;\n    }\n  }, {\n    key: \"currentDate\",\n    get: function get() {\n      return new Date();\n    },\n    set: function set(value) {\n      this._currentDate = value;\n    }\n  }]);\n\n  return CalcController;\n}();\n\nwindow.calculator = new CalcController();\n\n//# sourceURL=webpack:///./scripts/controller/CalcController.js?");

/***/ })

/******/ });