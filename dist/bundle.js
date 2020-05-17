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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-04-10T15:07Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = Object.create( null );

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:audio/mpeg;base64,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mikDKel2LEiVpW0lousdE5MWltUpNi1wkoj6FCJzxWK4AxbBqePmKE+SW3V0Lh8lRLmozlz+XNnqUxWmLh8ywfNXdOn1sF3VtHmaPHLh802ewRxLoT1mkZzE8c0u//uwZOECBf1m0TOPNWJSTAo/YGUiWu2hQS09jcF5sWe5MA+ISn3bQqVzZ6csIzFYfMoSolHZZOmz06fiOVjzMB8cqfOn3V0Lq6FzgAAAXeJkCBAAJgB9sCygyKIAqSMUXazrfTT1INoIeZHSdTIqXTXoF44XlsleZE63///8MKCuJgUTLAIj/9mjHfsPKM3qGWVer1mbXYyXOxhRqxr8agJw+H/6lsYV3IoEIlRFAwPlGIcBPAqhDhSiVNO2KOwuJfhSm4eo4jMgGJlmkKxEjUbQ10UohYTImlWau8lcatxFB0FBYKa/fZiYM5NnRIZDUKgFUZZYzfWYCcTDZ2pBjQwGQGJ/qqx/eq0dVJo1yhqR8/+CgqQ81LKF/7c2NVL1pf+fxr/hgUCWVAATRQdXqwKG2FBBkbkAUUcqXS64yoeQoixGJSJpYm6JLSxpkifkorakiuVrJaz1UNJkpUFqDyRgsdP/lWpRRY5tpNKS5VBaaZdatuJZhZ1Yk1otYa/+fa4OWYdf1Kh6WrWGX4mv4bla1pa/7pu/+Gnlav/9YuVafmm2YOg5NFWBSIhLFThcoTjoIgGAUFgPBwFwQBsCgRAYFQOB8FAuGB0NCEaD4wIxQTmgyIhkPDYgFYkEoqEI0HxgRignNCkiKnC5RGSGUSqyaS6BtpCsqkmojMCUVCEaD4wIxQJxMKSIZDw2UI2MBkVFRX/gyKiojMBUVFSJoVFWGAqKioZBkKiojDDxVn/gyKiojMBUVFU/6QKKioqSQCQorLLHQcCAQwUEDCAYgSBBQwMEHCCx1aggYRxAlgoIGCdBYpQwMEDCOhMsssf/////+7JE5AAD6mfF2ekb0oCNGKhhKGwS7MhyRKUrgh80TUwwp5n+ZGRkdiCRkZDSEEjIwNr////GV1dXmtKrKpJqTcyiVWOpLoGxMCIiGQ8NiAViQSioQjQfGBGKB8TAiIhkPDYgFYkEoJBUFgPBwRigTiYUlaYYgrTTTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/ts/class.event.ts
class Event {
    constructor(type, speed, valueType, list) {
        this.type = type;
        this.speed = speed != undefined ? speed : 5;
        this.valueType = valueType != undefined ? valueType : "px";
        this.list = list;
    }
}

// CONCATENATED MODULE: ./src/ts/class.scroll.ts
const $ = __webpack_require__(0);

class class_scroll_Scroll {
    constructor(scrollData) {
        const scroll = scrollData;
        this.lastScrollTop = 0;
        this.nScroll = 0;
        this.changeText = scroll.changeText;
        this.node = $(document.createElement("div"));
        this.node.addClass("main");
        this.events = [];
        this.box = $(document.createElement("div"));
        this.box.addClass("box");
        if (scrollData.styleInitInside != undefined)
            scrollData.styleInitInside.forEach(attr => this.box[0].style.cssText += attr);
        this.height = scroll.height != undefined ? scroll.height : 2000;
        this.box.css("height", this.height + "px");
        this.events = [];
        if (scroll.text != undefined) {
            const topTextSpan = $(document.createElement("span"));
            topTextSpan.html(scroll.text[0]);
            this.box.append(topTextSpan);
            if (scroll.text.length > 1) {
                const event = new Event("ascii", 2, null, scroll.text);
                this.events.push(event);
            }
        }
        if (scroll.events != undefined) {
            scroll.events.forEach(event => this.events.push(new Event(event.type, event.speed, event.valueType)));
        }
        this.loadEvents();
        this.node.append(this.box);
        const content = $("#" + scroll.elemId).html();
        if (content != "") {
            $("#" + scroll.elemId).html("");
            this.box.append(content);
            $("html").css("overflow", "hidden");
        }
        $("#" + scroll.elemId).append(this.node);
        this.audio = scroll.audio;
        this.pos(scroll.l, scroll.t);
        this.size(scroll.w, scroll.h);
        if (scroll.gifUrl != undefined) {
            this.node.addClass("scrollImage");
            this.createStyle('.scrollImage_' + scroll.elemId + '::-webkit-scrollbar-thumb{background-image: url("' + scroll.gifUrl + '")}');
            this.node.addClass('scrollImage_' + scroll.elemId);
        }
        if (scroll.styleInit != undefined) {
            scroll.styleInit.forEach(prop => {
                this.createStyle('.node' + scroll.elemId + "{" + prop + "}");
            });
            this.node.addClass('node' + scroll.elemId);
        }
        this.audioTime = scroll.audioTime;
    }
    loadEvents() {
        this.node.unbind("scroll");
        this.node.scroll(() => {
            //Init scroll event
            const st = this.node.scrollTop();
            const down = st > this.lastScrollTop ? 1 : -1;
            this.lastScrollTop = st;
            this.nScroll++;
            if (this.audio != undefined) {
                if (this.audioTime == undefined) {
                    this.audio.play();
                }
                else {
                    const audioTime = this.audioTime.find(audioTime => audioTime.start < st);
                    if (audioTime != null) {
                        audioTime.start = Math.min();
                        this.audio.play();
                        if (audioTime.duration != undefined)
                            setTimeout(() => this.audio.pause(), audioTime.duration);
                    }
                }
            }
            this.events.forEach(event => {
                //Si es evento ascii
                if (event.type == "ascii") {
                    for (let i = 0; i < event.list.length; i++) {
                        const scroll = this.changeText[i];
                        if ((st / this.height) * 100 > scroll) {
                            this.addAscii(event.list[i], st);
                        }
                    }
                    ;
                }
                else if (event.type == "transform") {
                    const deg = this.getCurrentRotation(this.node[0]);
                    this.node.css("transform", "rotate(" + (deg + event.speed * down) + "deg)");
                }
                else if (event.type == "background") {
                    const speed = event.speed;
                    let color = this.node.css("background-color");
                    console.log(color);
                    color = color.split("rgb(")[1];
                    color = color.split(")")[0];
                    color = color.split(",");
                    const r = +color[0] + Math.floor(Math.random() * speed) * Math.floor(Math.random() * 2) == 0 ? -1 : 1;
                    const g = +color[1] + Math.floor(Math.random() * speed) * Math.floor(Math.random() * 2) == 0 ? -1 : 1;
                    const b = +color[2] + Math.floor(Math.random() * speed) * Math.floor(Math.random() * 2) == 0 ? -1 : 1;
                    const newColor = "rgba(" + r + "," + g + "," + b + ")";
                    //this.node.css("background-color", newColor);
                }
                else {
                    this.connectAttr(down, event.type, event.speed, event.valueType, st);
                }
            });
        });
    }
    connectAttr(down, attr, speed, valueType, st) {
        const value = this.node.css(attr).split(valueType)[0];
        if (!isNaN(+value + down * speed))
            this.node.css(attr, (+value + down * speed) + valueType);
        else
            this.node.css(attr, 0 + valueType);
    }
    addAscii(ascii, st) {
        this.box.html("");
        this.node.html("");
        const top = 50 + st;
        const left = 0;
        const text = '<div style="margin-top:' + top + 'px; margin-left:' + left + 'px; font-family: monospace; white-space: pre;">' + ascii + "</div>";
        this.node.append(text);
        this.node.append(this.box);
    }
    pos(l, t) {
        this.node.css("left", l);
        this.node.css("top", t);
    }
    size(w, h) {
        this.node.css("height", h);
        this.node.css("width", w);
    }
    createStyle(style) {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'data:text/css,' + escape(style); // IE needs this escaped
        head.appendChild(link);
    }
    getCurrentRotation(el) {
        var st = window.getComputedStyle(el, null);
        var tm = st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "none";
        if (tm != "none") {
            var values = tm.split('(')[1].split(')')[0].split(',');
            /*
            a = values[0];
            b = values[1];
            angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
            */
            //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
            //@ts-ignore
            var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
        }
        return 0;
    }
}

// CONCATENATED MODULE: ./src/ts/index.ts
const ts_$ = __webpack_require__(0);

ts_$(document).ready(() => {
    new class_scroll_Scroll({
        elemId: "scroll0",
        text: [""],
        styleInit: ["background-color: rgba(255,255,255,1)"],
        events: [
            { type: "background", speed: -1 },
        ],
    });
    const audioSkyrim = new Audio('../audios/skyrim.mp3');
    audioSkyrim.volume = 0.4;
    new class_scroll_Scroll({
        elemId: "scrollIntro",
        text: [""],
        //audio: audioSkyrim,
        styleInit: [
            "border: 0",
            "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
        ],
        styleInitInside: [
            "background-image: url('https://i.gyazo.com/77c27a85a9138471e0891000f317b7b7.png')",
            "margin-block-start: -1em;",
            "font-family: FreeMono, monospace",
            "padding-left: 20px",
        ]
    });
    new class_scroll_Scroll({
        elemId: "scroll1",
        gifUrl: "https://i.gifer.com/8vGN.gif"
    });
    new class_scroll_Scroll({
        elemId: "scroll10",
        events: [{ type: "transform", speed: 2 }]
    });
    new class_scroll_Scroll({
        elemId: "scroll2",
        events: [
            { type: "margin-top", speed: 10 },
            { type: "margin-left", speed: 10 }
        ],
    });
    new class_scroll_Scroll({
        elemId: "scroll3",
        height: 80000,
        events: [
            { type: "width", speed: -2 },
            { type: "height", speed: -5 },
            { type: "margin-left", speed: 5 }
        ]
    });
    new class_scroll_Scroll({
        elemId: "scroll4",
        text: ["", ""],
        changeText: [0, 1],
    });
    new class_scroll_Scroll({
        elemId: "scroll5",
        text: ["Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>Cursed line height scoll<br>"],
        events: [{ type: "line-height", speed: 5 }],
        styleInit: ["line-height: 0px", "padding-top:20px"]
    });
    const door = String.raw `           ______        <br>` +
        String.raw `        ,-' ;  ! '-.      <br>` +
        String.raw `       / :  !  :  . \     <br>` +
        String.raw `      |_ ;   __:  ;  |    <br>` +
        String.raw `      )| .  :)(.  !  |    <br>` +
        String.raw `      |"    (##)  _  |    <br>` +
        String.raw `      |  :  ;''  (_) (    <br>` +
        String.raw `      |  :  :  .     |    <br>` +
        String.raw `      )_ !  ,  ;  ;  |    <br>` +
        String.raw `      || .  .  :  :  |    <br>` +
        String.raw `      |" .  |  :  .  |    <br>` +
        String.raw `      |____.-----.___|`;
    const shrek = String.raw `                    ,-'     '._ <br>` +
        String.raw `                 ,'           '.        ,-. <br>` +
        String.raw `               ,'               \       ),.\ <br>` +
        String.raw `    ,.       /                  \     /(  \; <br>` +
        String.raw `   /'\\     ,o.        ,ooooo.   \  ,'  '-') <br>` +
        String.raw `   )) )'. d8P"Y8.    ,8P"""""Y8.  ''  .--"' <br>` +
        String.raw `   ('-'   'Y'  'Y8    dP       ''     / <br>` +
        String.raw `    '----.(   __ '    ,' ,---.       ( <br>` +
        String.raw `           ),--.'.   (  ;,---.        ) <br>` +
        String.raw `          / \O_,' )   \  \O_,'        | <br>` +
        String.raw `      ;  '-- ,'       '---'        | <br>` +
        String.raw `|    -'         '.           | <br>` +
        String.raw `_;    ,            )          : <br>` +
        String.raw `_.'|     '.:._   ,.::" '..       | <br>` +
        String.raw `--'   |   .'     """         '      |'. <br>` +
        String.raw `|  :;      :   :     _.       |''.''.-'--. <br>` +
        String.raw `|  ' .     :   :__.,'|/       |  \ <br>` +
        String.raw `'     \--.__.-'|_|_|-/        /   ) <br>` +
        String.raw `\     \_   '--^"__,'        ,    | <br>` +
        String.raw `-   - ;  '    '--^---'          ,'     | <br>` +
        String.raw `\  '                    /      / <br>` +
        String.raw `\   '    _ _          / <br>` +
        String.raw `\           '       / <br>` +
        String.raw `\           '    ,' <br>` +
        String.raw `'.       ,   _,' <br>` +
        String.raw `       '-.___.---' <br>`;
    let audioUrl = __webpack_require__(2);
    //@ts-ignore
    const audioShrek = new Audio(audioUrl.default);
    audioShrek.volume = 0.5;
    new class_scroll_Scroll({
        elemId: "extra1",
        text: ["Scroll Down<br><br>(if you haven't interacted with the page, click here to start audio)", door, shrek],
        changeText: [0, 1, 60],
        height: 3000,
        gifUrl: "https://i.imgur.com/BO1P1bi.gif",
        audio: audioShrek,
        audioTime: [{ start: 1, duration: 800 }, { start: 2000 }]
    });
});


/***/ })
/******/ ]);