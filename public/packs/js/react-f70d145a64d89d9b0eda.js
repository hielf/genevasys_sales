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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/react.jsx":
/*!****************************************!*\
  !*** ./app/javascript/packs/react.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/hielf/workspace/projects/panda_quant2/app/javascript/packs/react.jsx: Expected corresponding JSX closing tag for <Route>. (15:4)\n\n  13 |     <Router>\n  14 |       <Route path=\"/\" component={App}>\n> 15 |     </Router>,\n     |     ^\n  16 |     <App/>,\n  17 |     document.body.appendChild(document.createElement('div')),\n  18 |   )\n    at Object._raise (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:810:17)\n    at Object.raiseWithData (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:803:17)\n    at Object.raise (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:764:17)\n    at Object.jsxParseElementAt (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:5199:16)\n    at Object.jsxParseElementAt (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:5167:32)\n    at Object.jsxParseElement (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:5225:17)\n    at Object.parseExprAtom (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:5232:19)\n    at Object.parseExprSubscripts (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10938:23)\n    at Object.parseUpdate (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10918:21)\n    at Object.parseMaybeUnary (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10896:23)\n    at Object.parseExprOps (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10753:23)\n    at Object.parseMaybeConditional (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10727:23)\n    at Object.parseMaybeAssign (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10690:21)\n    at /Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10657:39\n    at Object.allowInAnd (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:12351:12)\n    at Object.parseMaybeAssignAllowIn (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10657:17)\n    at Object.parseExprListItem (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:12111:18)\n    at Object.parseCallExpressionArguments (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:11137:22)\n    at Object.parseCoverCallAndAsyncArrowHead (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:11047:29)\n    at Object.parseSubscript (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10982:19)\n    at Object.parseSubscripts (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10955:19)\n    at Object.parseExprSubscripts (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10944:17)\n    at Object.parseUpdate (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10918:21)\n    at Object.parseMaybeUnary (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10896:23)\n    at Object.parseExprOps (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10753:23)\n    at Object.parseMaybeConditional (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10727:23)\n    at Object.parseMaybeAssign (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10690:21)\n    at Object.parseExpressionBase (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10635:23)\n    at /Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:10629:39\n    at Object.allowInAnd (/Users/hielf/workspace/projects/panda_quant2/node_modules/@babel/parser/lib/index.js:12351:12)");

/***/ })

/******/ });
//# sourceMappingURL=react-f70d145a64d89d9b0eda.js.map