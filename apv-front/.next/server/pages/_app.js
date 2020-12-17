module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





const Footer = () => {
  const {
    0: datosPrevisionales,
    1: setDatosPrevisionales
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const obtenerDatosPrevisionales = async () => {
      const filejson = await fetch("./datosPrevisionales.json");
      const resultado = await filejson.json();
      setDatosPrevisionales({
        mes: resultado["mes"],
        anio: resultado["anio"],
        capital: resultado["capital"],
        cuprum: resultado["cuprum"],
        habitat: resultado["habitat"],
        modelo: resultado["modelo"],
        planvital: resultado["planvital"],
        provida: resultado["provida"],
        uno: resultado["uno"]
      });
    };

    obtenerDatosPrevisionales();
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("footer", {
    className: "footer",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "disclaimer text-white text-justify",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        children: ["AFP Modelo no se hace cargo de la veracidad de los datos que ingrese el usuario a esta calculadora. La variaci\uFFFDn de sueldo l\uFFFDquido aproximada despu\uFFFDs de impuestos, sin asignaciones de colaci\uFFFDn y/o movilizaci\uFFFDn. Tabla de impuestos de segunda categor\uFFFDa actualizada a ", datosPrevisionales.mes, " de ", datosPrevisionales.anio, ". \uFFFDLa rentabilidad es variable, por lo que nada garantiza que las rentabilidades pasadas se repitan en el futuro. Inf\uFFFDrmese sobre la rentabilidad de su Fondo de Pensiones, las comisiones y la calidad de servicio de las AFP en el sitio web de la Superintendencia de Pensiones: www.spensiones.cl.\uFFFD Estructura de comisiones por dep\uFFFDsitos de cotizaciones vigentes a ", datosPrevisionales.mes, " de ", datosPrevisionales.anio, " - Capital: ", datosPrevisionales.capital, "%, Cuprum: ", datosPrevisionales.cuprum, "%, Habitat: ", datosPrevisionales.habitat, "%, Modelo: ", datosPrevisionales.modelo, "%, Planvital: ", datosPrevisionales.planvital, "%, Provida: ", datosPrevisionales.provida, "%, Uno ", datosPrevisionales.uno, "%\uFFFD. Para afiliados dependientes, independientes y voluntarios. Fuente: Superintendencia de Pensiones."]
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/img/logo.png */ "./public/assets/img/logo.png");
/* harmony import */ var _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__);





const Header = () => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
  className: "nav-fill w-100 navbar-dark bg-dark",
  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3___default.a.Brand, {
    className: "mx-auto",
    href: "/",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      src: _public_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "logo-afp-modelo"
    })
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _PreguntasFrecuentes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreguntasFrecuentes */ "./components/PreguntasFrecuentes.js");







class Layout extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), children, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_PreguntasFrecuentes__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/PreguntasFrecuentes.js":
/*!*******************************************!*\
  !*** ./components/PreguntasFrecuentes.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);





const Preguntas = () => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("section", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "col-12 col-lg-10 block mx-auto justify-content-center",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
        children: "Preguntas frecuentes"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "0",
            children: "\uFFFDQue es un APV?"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "0",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Ahorro Previsional Voluntario o APV es un instrumento adicional complementario al ahorro que realizas en tu cuenta obligatoria de la AFP. Su objetivo es aumentar el monto de la pensi\uFFFDn, compensar per\uFFFDodos no cotizados."
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Tienen incentivos al ahorro en los cuales puedes recibir una bonificaci\uFFFDn por parte del Estado, como tambi\uFFFDn rebajar de impuestos dependiendo del r\uFFFDgimen tributario que escojas."
              })]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "1",
            children: "\uFFFDCu\uFFFDles son los reg\uFFFDmenes tributarios?"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "1",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Puedes hacer tus aportes en APV en al menos uno de los reg\uFFFDmenes tributarios. En el r\uFFFDgimen \uFFFDA\uFFFD el Estado bonifica un 15% de lo que ahorras anualmente con un tope de 6 UTM (aproximadamente $306.000) y en el caso del r\uFFFDgimen \uFFFDB\uFFFD, lo que aportas descuenta de tu renta tributaria, lo que hace disminuir tu carga de impuestos."
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "Tienen incentivos al ahorro en los cuales puedes recibir una bonificaci\uFFFDn por parte del Estado, como tambi\uFFFDn rebajar de impuestos dependiendo del r\uFFFDgimen tributario que escojas."
              })]
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "2",
            children: "\uFFFDPuedo retirar o hacer giros del APV?"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "2",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("p", {
                children: "S\uFFFD, pero ten en cuenta que estos ahorros est\uFFFDn pensados en el largo plazo y con el objetivo de aumentar tu pensi\uFFFDn al momento de jubilar. Al hacer retiros de estos ahorros perder\uFFFDs el aporte estatal del 15% del r\uFFFDgimen A o pagar\uFFFDs impuestos de segunda categor\uFFFDa en la operaci\uFFFDn renta del a\uFFFDo siguiente."
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Toggle, {
            as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Header,
            eventKey: "3",
            children: "\uFFFDQue es un APV 2?"
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Accordion"].Collapse, {
            eventKey: "3",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
              children: "Hello! I'm another body"
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Preguntas);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Resultados_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Resultados.css */ "./styles/Resultados.css");
/* harmony import */ var _styles_Resultados_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Resultados_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_regimenes_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/regimenes.css */ "./styles/regimenes.css");
/* harmony import */ var _styles_regimenes_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_regimenes_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_solicitud_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/solicitud.css */ "./styles/solicitud.css");
/* harmony import */ var _styles_solicitud_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_solicitud_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/store */ "./store/store.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
    store: _store_store__WEBPACK_IMPORTED_MODULE_11__["default"],
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
    })
  });
}

const makestore = () => _store_store__WEBPACK_IMPORTED_MODULE_11__["default"];

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_10__["createWrapper"])(makestore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "./public/assets/img/logo.png":
/*!************************************!*\
  !*** ./public/assets/img/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAAmCAYAAACvU/X+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgxQjdGNkQ2NDQyMTFFODkzMTFGM0Y0RjQwNTc3MjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgxQjdGNkU2NDQyMTFFODkzMTFGM0Y0RjQwNTc3MjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODFCN0Y2QjY0NDIxMUU4OTMxMUYzRjRGNDA1NzcyOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODFCN0Y2QzY0NDIxMUU4OTMxMUYzRjRGNDA1NzcyOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PijElhYAAA/vSURBVHja7F0HeFRV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"

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _postReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postReducer */ "./store/reducers/postReducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  post: _postReducer__WEBPACK_IMPORTED_MODULE_1__["postReducer"]
}));

/***/ }),

/***/ "./store/reducers/postReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/postReducer.js ***!
  \***************************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload,
        loading: false,
        error: null
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: GET_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
const GET_POSTS = 'GET_POSTS';

/***/ }),

/***/ "./styles/Resultados.css":
/*!*******************************!*\
  !*** ./styles/Resultados.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/regimenes.css":
/*!******************************!*\
  !*** ./styles/regimenes.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/solicitud.css":
/*!******************************!*\
  !*** ./styles/solicitud.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmVndW50YXNGcmVjdWVudGVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Fzc2V0cy9pbWcvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcmVkdWNlcnMvcG9zdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJkYXRvc1ByZXZpc2lvbmFsZXMiLCJzZXREYXRvc1ByZXZpc2lvbmFsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm9idGVuZXJEYXRvc1ByZXZpc2lvbmFsZXMiLCJmaWxlanNvbiIsImZldGNoIiwicmVzdWx0YWRvIiwianNvbiIsIm1lcyIsImFuaW8iLCJjYXBpdGFsIiwiY3VwcnVtIiwiaGFiaXRhdCIsIm1vZGVsbyIsInBsYW52aXRhbCIsInByb3ZpZGEiLCJ1bm8iLCJIZWFkZXIiLCJsb2dvIiwiTGF5b3V0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJwcm9wcyIsIlByZWd1bnRhcyIsIkNhcmQiLCJNeUFwcCIsInBhZ2VQcm9wcyIsInN0b3JlIiwibWFrZXN0b3JlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJ3aXRoUmVkdXgiLCJjb21iaW5lUmVkdWNlcnMiLCJwb3N0IiwicG9zdFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJwb3N0cyIsImxvYWRpbmciLCJlcnJvciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsIm1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiR0VUX1BPU1RTIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRvc1ByZXZpc2lvbmFsZXMsIHNldERhdG9zUHJldmlzaW9uYWxlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBvYnRlbmVyRGF0b3NQcmV2aXNpb25hbGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlanNvbiA9IGF3YWl0IGZldGNoKFwiLi9kYXRvc1ByZXZpc2lvbmFsZXMuanNvblwiKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0YWRvID0gYXdhaXQgZmlsZWpzb24uanNvbigpO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0b3NQcmV2aXNpb25hbGVzKHtcclxuICAgICAgICAgICAgICAgIG1lczogcmVzdWx0YWRvW1wibWVzXCJdLFxyXG4gICAgICAgICAgICAgICAgYW5pbzogcmVzdWx0YWRvW1wiYW5pb1wiXSxcclxuICAgICAgICAgICAgICAgIGNhcGl0YWw6IHJlc3VsdGFkb1tcImNhcGl0YWxcIl0sXHJcbiAgICAgICAgICAgICAgICBjdXBydW06IHJlc3VsdGFkb1tcImN1cHJ1bVwiXSxcclxuICAgICAgICAgICAgICAgIGhhYml0YXQ6IHJlc3VsdGFkb1tcImhhYml0YXRcIl0sXHJcbiAgICAgICAgICAgICAgICBtb2RlbG86IHJlc3VsdGFkb1tcIm1vZGVsb1wiXSxcclxuICAgICAgICAgICAgICAgIHBsYW52aXRhbDogcmVzdWx0YWRvW1wicGxhbnZpdGFsXCJdLFxyXG4gICAgICAgICAgICAgICAgcHJvdmlkYTogcmVzdWx0YWRvW1wicHJvdmlkYVwiXSxcclxuICAgICAgICAgICAgICAgIHVubzogcmVzdWx0YWRvW1widW5vXCJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgb2J0ZW5lckRhdG9zUHJldmlzaW9uYWxlcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyIHRleHQtd2hpdGUgdGV4dC1qdXN0aWZ5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCA+XHJcbiAgICAgICAgICAgICAgICAgICAgQUZQIE1vZGVsbyBubyBzZSBoYWNlIGNhcmdvIGRlIGxhIHZlcmFjaWRhZCBkZSBsb3MgZGF0b3MgcXVlIGluZ3Jlc2UgZWwgdXN1YXJpbyBhXHJcbiAgICAgICAgICAgICAgICAgICAgZXN0YSBjYWxjdWxhZG9yYS4gTGEgdmFyaWFjae+/vW4gZGUgc3VlbGRvIGzvv71xdWlkbyBhcHJveGltYWRhIGRlc3B177+9cyBkZSBpbXB1ZXN0b3MsXHJcbiAgICAgICAgICAgICAgICAgICAgc2luIGFzaWduYWNpb25lcyBkZSBjb2xhY2nvv71uIHkvbyBtb3ZpbGl6YWNp77+9bi4gVGFibGEgZGUgaW1wdWVzdG9zIGRlIHNlZ3VuZGFcclxuICAgICAgICAgICAgICAgIGNhdGVnb3Lvv71hIGFjdHVhbGl6YWRhIGEge2RhdG9zUHJldmlzaW9uYWxlcy5tZXN9IGRlIHtkYXRvc1ByZXZpc2lvbmFsZXMuYW5pb30uIO+/vUxhIHJlbnRhYmlsaWRhZCBlcyB2YXJpYWJsZSwgcG9yIGxvIHF1ZVxyXG4gICAgICAgICAgICAgICAgbmFkYSBnYXJhbnRpemEgcXVlIGxhcyByZW50YWJpbGlkYWRlcyBwYXNhZGFzIHNlIHJlcGl0YW4gZW4gZWwgZnV0dXJvLiBJbmbvv71ybWVzZVxyXG4gICAgICAgICAgICAgICAgc29icmUgbGEgcmVudGFiaWxpZGFkIGRlIHN1IEZvbmRvIGRlIFBlbnNpb25lcywgbGFzIGNvbWlzaW9uZXMgeSBsYSBjYWxpZGFkIGRlXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNpbyBkZSBsYXMgQUZQIGVuIGVsIHNpdGlvIHdlYiBkZSBsYSBTdXBlcmludGVuZGVuY2lhIGRlIFBlbnNpb25lczpcclxuICAgICAgICAgICAgICAgIHd3dy5zcGVuc2lvbmVzLmNsLu+/vSBFc3RydWN0dXJhIGRlIGNvbWlzaW9uZXMgcG9yIGRlcO+/vXNpdG9zIGRlIGNvdGl6YWNpb25lcyB2aWdlbnRlc1xyXG4gICAgICAgICAgICAgICAgYSB7ZGF0b3NQcmV2aXNpb25hbGVzLm1lc30gZGUge2RhdG9zUHJldmlzaW9uYWxlcy5hbmlvfSAtIENhcGl0YWw6IHtkYXRvc1ByZXZpc2lvbmFsZXMuY2FwaXRhbH0lLFxyXG4gICAgICAgICAgICAgICAgQ3VwcnVtOiB7ZGF0b3NQcmV2aXNpb25hbGVzLmN1cHJ1bX0lLCBIYWJpdGF0OiB7ZGF0b3NQcmV2aXNpb25hbGVzLmhhYml0YXR9JSxcclxuICAgICAgICAgICAgICAgIE1vZGVsbzoge2RhdG9zUHJldmlzaW9uYWxlcy5tb2RlbG99JSwgUGxhbnZpdGFsOiB7ZGF0b3NQcmV2aXNpb25hbGVzLnBsYW52aXRhbH0lLFxyXG4gICAgICAgICAgICAgICAgUHJvdmlkYToge2RhdG9zUHJldmlzaW9uYWxlcy5wcm92aWRhfSUsIFVubyB7ZGF0b3NQcmV2aXNpb25hbGVzLnVub30l77+9LiBQYXJhXHJcbiAgICAgICAgICAgICAgICBhZmlsaWFkb3MgZGVwZW5kaWVudGVzLCBpbmRlcGVuZGllbnRlcyB5IHZvbHVudGFyaW9zLiBGdWVudGU6IFN1cGVyaW50ZW5kZW5jaWEgZGVcclxuICAgICAgICAgICAgICAgIFBlbnNpb25lcy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9pbWcvbG9nby5wbmdcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwibmF2LWZpbGwgdy0xMDAgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxyXG4gICAgICAgIDxOYXZiYXIuQnJhbmQgY2xhc3NOYW1lPVwibXgtYXV0b1wiIGhyZWY9XCIvXCIgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvLWFmcC1tb2RlbG9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTmF2YmFyLkJyYW5kPlxyXG4gICAgPC9OYXZiYXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IFByZWd1bnRhcyBmcm9tIFwiLi9QcmVndW50YXNGcmVjdWVudGVzXCI7XHJcblxyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDxQcmVndW50YXMgLz5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBDYXJkIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuY29uc3QgUHJlZ3VudGFzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTEwIGJsb2NrIG14LWF1dG8ganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlByZWd1bnRhcyBmcmVjdWVudGVzPC9oND5cclxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDvv71RdWUgZXMgdW4gQVBWP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBaG9ycm8gUHJldmlzaW9uYWwgVm9sdW50YXJpbyBvIEFQViBlcyB1biBpbnN0cnVtZW50byBhZGljaW9uYWwgY29tcGxlbWVudGFyaW8gYWwgYWhvcnJvIHF1ZSByZWFsaXphcyBlbiB0dSBjdWVudGEgb2JsaWdhdG9yaWEgZGUgbGEgQUZQLiBTdSBvYmpldGl2byBlcyBhdW1lbnRhciBlbCBtb250byBkZSBsYSBwZW5zae+/vW4sIGNvbXBlbnNhciBwZXLvv71vZG9zIG5vIGNvdGl6YWRvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpZW5lbiBpbmNlbnRpdm9zIGFsIGFob3JybyBlbiBsb3MgY3VhbGVzIHB1ZWRlcyByZWNpYmlyIHVuYSBib25pZmljYWNp77+9biBwb3IgcGFydGUgZGVsIEVzdGFkbywgY29tbyB0YW1iae+/vW4gcmViYWphciBkZSBpbXB1ZXN0b3MgZGVwZW5kaWVuZG8gZGVsIHLvv71naW1lbiB0cmlidXRhcmlvIHF1ZSBlc2NvamFzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDvv71Dde+/vWxlcyBzb24gbG9zIHJlZ++/vW1lbmVzIHRyaWJ1dGFyaW9zP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQdWVkZXMgaGFjZXIgdHVzIGFwb3J0ZXMgZW4gQVBWIGVuIGFsIG1lbm9zIHVubyBkZSBsb3MgcmVn77+9bWVuZXMgdHJpYnV0YXJpb3MuIEVuIGVsIHLvv71naW1lbiDvv71B77+9IGVsIEVzdGFkbyBib25pZmljYSB1biAxNSUgZGUgbG8gcXVlIGFob3JyYXMgYW51YWxtZW50ZSBjb24gdW4gdG9wZSBkZSA2IFVUTSAoYXByb3hpbWFkYW1lbnRlICQzMDYuMDAwKSB5IGVuIGVsIGNhc28gZGVsIHLvv71naW1lbiDvv71C77+9LCBsbyBxdWUgYXBvcnRhcyBkZXNjdWVudGEgZGUgdHUgcmVudGEgdHJpYnV0YXJpYSwgbG8gcXVlIGhhY2UgZGlzbWludWlyIHR1IGNhcmdhIGRlIGltcHVlc3Rvcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpZW5lbiBpbmNlbnRpdm9zIGFsIGFob3JybyBlbiBsb3MgY3VhbGVzIHB1ZWRlcyByZWNpYmlyIHVuYSBib25pZmljYWNp77+9biBwb3IgcGFydGUgZGVsIEVzdGFkbywgY29tbyB0YW1iae+/vW4gcmViYWphciBkZSBpbXB1ZXN0b3MgZGVwZW5kaWVuZG8gZGVsIHLvv71naW1lbiB0cmlidXRhcmlvIHF1ZSBlc2NvamFzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDvv71QdWVkbyByZXRpcmFyIG8gaGFjZXIgZ2lyb3MgZGVsIEFQVj9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU++/vSwgcGVybyB0ZW4gZW4gY3VlbnRhIHF1ZSBlc3RvcyBhaG9ycm9zIGVzdO+/vW4gcGVuc2Fkb3MgZW4gZWwgbGFyZ28gcGxhem8geSBjb24gZWwgb2JqZXRpdm8gZGUgYXVtZW50YXIgdHUgcGVuc2nvv71uIGFsIG1vbWVudG8gZGUganViaWxhci4gQWwgaGFjZXIgcmV0aXJvcyBkZSBlc3RvcyBhaG9ycm9zIHBlcmRlcu+/vXMgZWwgYXBvcnRlIGVzdGF0YWwgZGVsIDE1JSBkZWwgcu+/vWdpbWVuIEEgbyBwYWdhcu+/vXMgaW1wdWVzdG9zIGRlIHNlZ3VuZGEgY2F0ZWdvcu+/vWEgZW4gbGEgb3BlcmFjae+/vW4gcmVudGEgZGVsIGHvv71vIHNpZ3VpZW50ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg77+9UXVlIGVzIHVuIEFQViAyP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PkhlbGxvISBJJ20gYW5vdGhlciBib2R5PC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlZ3VudGFzOyIsImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2luZGV4LmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvUmVzdWx0YWRvcy5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL3JlZ2ltZW5lcy5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zb2xpY2l0dWQuY3NzJztcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbWFrZXN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VzdG9yZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU53QUFBQW1DQVlBQUFDdlUvWCtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSamd4UWpkR05rUTJORFF5TVRGRk9Ea3pNVEZHTTBZMFJqUXdOVGMzTWpraUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJqZ3hRamRHTmtVMk5EUXlNVEZGT0Rrek1URkdNMFkwUmpRd05UYzNNamtpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRwR09ERkNOMFkyUWpZME5ESXhNVVU0T1RNeE1VWXpSalJHTkRBMU56Y3lPU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBHT0RGQ04wWTJRelkwTkRJeE1VVTRPVE14TVVZelJqUkdOREExTnpjeU9TSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QaWpFbGhZQUFBL3ZTVVJCVkhqYTdGMEhlRlJWRmo1SmhoSU5FQWd0Q2xJRkVXbDJSQUVGa1NxaWZoUkZ2eFVGRlhCWFpGMUVVVUJBY1VWRmRCY1JXYkdnb0NpS2lnRkRFU2xLTXdpQ3RLVXRJUUlKZ1lTRVZQWS9tVE53NTg1N2I5NmJOUGp5enZlZDd6RnZic3U1OTcrbjNUdUVuVGx6aGx4eXlhV1NvVEJYQlA0MFBwNmk4T2dNN2dodURiNGNYQjFjWG9vY0J4OEVid2V2QXY4d3RqUHRjQ1hua2dzNFowQnJnOGRUNEQ3Z2l4MVczd2llQ1o0TjhHVzUwblRKQlp3NTBCcmg4UWE0VnhFMGx3UWVCZjRJd0hOdGRaZEtCM0R3RXoyaU9mcUNXNEF2QVZjQy94Z1dGdGF4bElER2YvdHc4S3ZnQ2tYYy9ETHdBd0Jkb3J2RWltd052WURISU9WVmQ2eWRiY1hRRDdzSmRlVGpOdlRSdlNqYkR5OEJRWFhEWXlmNE0vQzk0S1lDdHRMVWFneXd1ZUJweFFBMnB0dkFDZWluclF1VklxTnE0SG9LbHkrbWZ1b29mVnhTMUkySEZ6UFlSdU94Q056Z1BESWhMOExqZTlHMnhVazF3RXZSWHljWEt5NFZPK0FBdGlmd2VNbmdxNzBDd3EvSkcrVXJTYkJGNERFZmZHc0pkUmtKL2diOVh1Y3VOWmVLRFhBQVczTThYdE5lcndmZkJKdTRJYmdIK0M3d21CTCtleWVDdTVWd253eTZCUUJkRFhlNXVWUmNHbTRjdUp6eStRZndMUURZMmxJMEpUdmc4VXdwZFg4cGVkTUdMcm1BSzNMdHhnR1Izc3FyaytEN0FiYXNVZ1FiUjBtbmwzUy8wUlV1cGF0amgxS0xXZzlSWkRucWpYSDBjSmRjMlNhUENXZ3E0dEdUdFpMc3pod2hPZ0pPQUM4TUVvNXRvMm0zT1NoL05BVGdjdGorSmpCcnBycmdLdUJVOEcvZ2I5SG0veHcwTnhEY3JOQzdFMFpVcDFJSHFsWHBHb3FxRUVzWk9jbDBKRDJCRHFUR1VaNlNkZk5nRyt2VTZGOTBmZDFIS1N3c291QmRkdDQwV3JSOXhMVHg4ZTh0Y3Bxamd5ekNaUzV1SjI4VUxScWNEdjVkWkxIRm9pNmJ0RjNCN2NHWGdYbEF5ZUJOYk9xaWJtSUljMU5YMnVRY0pwdkttV0ErYmJNRTdlMElvVDBlWXhkd0svSkdCaXNhRkx2ZW9iemFDVGVROWNqclpRMzRKNHp4VkJFcGwyaVJ3MVhnbXZ3Sy9GL3dqK0JmMEUvQVBJZHBEVEFBbnhUVEs4YWlyeVhncDlEZzd3YUQ2SS9IcDhxcklTZzMwK0VmMGwvTTBxWm1SY0JmZ0o5RjI3dHNhRGcraG5WRllZVGJPdlp4dXFYQktLb2FXUy9ndTVOWmh5bCs1MmphZXVRRHFnZ0ozdGRxSGRXSkRveVQ1Si9KcFdXN3h6NTJlNU9YWmppUVJUODhKcEQzaUprWnJRQ1BoQ3cyR2N3bEorS3JtOVRMQTg4RGowYmRBemJHd2d2clpYQVBNcy9ocnBSNVdXMmp2U2haYThOa0UzRkNiZEJIZ3NFbS9UQ1lZd1AxVE9wbGlIay9BZldURGNhMFQ2bTdHV1ZhRzVTcHpjc0svQmN5VDAvd21uc1I5ZWNhQWc2TjhFNjFRSFlGTzhRbTRpQTArSWsyR0I3RSs4cXJQaWp6bFlPZGp1djJzemtHM2xrSG8vMDVGbUM3RVkrUWZjZnkyQ3Y3WFBVdE5hMFIzQnBjdFAxSmFoazdFR0M3MXJUTWdkUTFCK3RWYlhlWkRWbVVGMW5jWjNPb3VlQy9ReFp2eWx3dUJOOW9zKzRKY0gvVWpiTVl6MUE4cG1yV2l4Vk5Bajl2dE1zcmdUVWVZOE1RcDhZUGNHaXZpbXdlZDlpc2Y1aGRIN1N4M2duZzhEMWJHWFBGNnJORHJCZ2VSRHNaWjAxSzhidVdrdmNVaUJHdzBnMDBIaWVNUDBMZEhEVDJ1VVdITlZHbXZzbDNwMUUzU2NZUUlZQy93NEhRR2FBZjg4NEcrdGlrekYyRk1TSDd0bHBPRGF0MXRGVytlN09wSm9zMUg2YWwxMTJ1VStYNnVydVRsOVpvSE5QcGFCQnplcDdGMkhrK29nemNnNm1pTlRqSDJOSkVvMldMM0ZUaXhib1FkWHRCam9zTnhqTUNqOWNkaXU4NWFmY0pnL2F1RksxY3ZZaE1PelpCT2JmcTVLQkJMRGdlZFR2aWIvN1Zaajk4cVAwN0I1c08wejBNVHRUdGluNnlmVUdUZnh1QWpiWEdEVHc1S0ZoZEFEZGNkZ1kxNkRMYkFsQk1iRDd0TldGVjNmN0RBR3cva2ZkSVdMVDRIdXd6UEEzK1V5djNIc1pnNXFPRm5IanUzR2lhSWRoeTh6THA4TW5ObEpsejNMUnVUdjdwQW8wM2VYa1l2YkdxTWgwNnNWRkE3T0g2andUcGVxZ0IyRmFKS1ZjUjg4RWJaRlh3UStBOVdybUpCbUNiSTlxdVBPcGVKTDdjcytTOStlQWpYa1NmUUk0MXRVWEc2bnFLMWg3N1F5TmtQaUxGeHg0TS9rTXJOMXpjQXgwY1gycGd5NUYxd2o3N3hXRUdoUGR2V3NqclZRT3dzVlhWV1RhbUNIRXBKb2hWNUtQSzRQa1kwOFUyd0ZaTjFtczVMU0E0U1h4UGxrTXRBZGhLcmZxdFVvN0MwRkFiY2FEUHVocWlBdWVZZE16MjYySnRVbWVqL0VNbUpxVVZGWnlsbERaM2svOHBmVTZhanpFeVNhUTg3MmlxdXY4S1pmdG81bVM0Mk95T2oyL0ZWcnFSSHJsdTlWbk54SFFxK3hqRjd4cERXLytjVVJBazRlREl6ZlVtVS91R293THFmLy9IU0ZwLzZKeFNxQjExTFEyNXdXdTk3RWxadGhnYXJxdUpmS3VJNDYyYUxKelRmTnBFRmxGaUdYUTJhSTduOGdIZDdGZnExaGZMUmpYcnBxTDhDS1hNS3MzTjRMbnZpekluRGRwak9YK2d1UVI4bGFreDcrNVNob1UxV2ZrK2hiem5JbjhKc3VEWmZQaWJibExpZldNQmVvVGkzN09yTTl2Q0QxMGlHczVINDFCK3ZKVkppZmNNK0w4cWRUZzR4RnBybjBrL1l3VGdxblhSbEZmVDQxclpWNng4SWpFQjcyUnpVSGw5SHpxb1dnaXJZSkFHdGkvUXozTm05citNb1lmNEhqN3FMZEV6bGVwU2lHY2xiMnM4eVE5c1dibHBOSHZqemJRNWFjYlppR1F1bHZPS3ZjL1E1a1IvY1dYbXBOQ3ZoLzB0c0tUMERaU2U1VlhNNWNJcjFyUG91cjhHdGpnenNJa3MyTHk4VzdST2dCOWxCamFweTR1bGx5d0dIejBzV29nWHpYVWEyRmliM21NRU5tbVAzWThId1J1ME9WQTNRbjI5RFFnR3RpRDBtQUsyQW0xbkFiWXFFblhYK3hzcUxvMFoySGx0cWxZSnIvMmVabUFUV2JDbE1VdDV4ZTAvR2k1aGR4OWxTeFRLa3REWWZqdytWR01MRXJZMm9ua1MwVEZpbjJCdU03RC9nNDJCdzluVHRRQlFGNjFZU0p0QVZlQ2hVVFgvMDErcjlyMUd5Um5HRWU4MSt5ZjVmZDZYc3JJQWpFYlJUSzhkWGk3U0N1dmE1eGZNd0tiSUlvMENUL1prYUpyRXJPNDJtU01mVlZLQ0xaME1BSHdxU0h1OGhzWnFyN3ZLd20yc1JRK1hvL3lTUXJwdzNiVWcyc3RxSUJEY2g3VWplSk5vMHpnRGM1M042R3N0K21CejlTTGw4eXlNZTdlTnNiMGdWb2FQdW5sa0IvTFJKcGs4TzhTbXhSRGxzMW5ZZXE2TktLVTZob01PY2puZmtmL3BFVDMwSHgzS0REYU91U2NnNnIwbHlUeHZmalJqZTRIMmlxcFFTN1RaVnNOeUViSVJuODVORGJNcGkxT2F0Z2cySHlyOTRvdU0yYXlyUmtPYlNsQkQxOFIyd2ZHRCtHVStmNmU1UE9zYmxDdHNzRVQxM2ZsV1NsZTg1NXhqZTZWZlcwYU5nZVlqazNIYmtnTXJCUUc2RDh4WGVMU0lWYXFEQWFab253dHo1YWFtUmJ0V3BPZFI5T2hSYWtpRGlXb2VFQUE1bVhYRXNzN3h6SDFuQVhmc2xQRzVnSEllN3lhWmxwMlVZbE1XeDRKcE55M01UWnBEVHlIV2pWU2lsK1IwYmpEbUhDeTBFMHBncEx3U3BMQ2FQeXZTNTViTk9qMUJ6c0dMVDIyMng5cHdyUVRtZUhOWloxRzJjaWh5OE8zSGFpVFpJeTk4QjJzYlVlbFFxQmRoOVoxSDE4N0hRMmswc3J4L3REbzdOejFvblp6OFRBVjhnZFlHcHhncVYvQmVyMG84c1g2dlJWT2VVcEIvam8zRlF1TC9CRFdsSkpCVHpRRDgrcTVWeDhFWUd4aUFOVU9DSkhiV3owa0IyQXFKSW03d0JYSWNnc1luaDFEVzZLbHdMWlI3T1lUVm1pNGMwaFBrQ2RwbmpwQVYrZ3huUlU5dzVaMmJmeTZHbEpZVm1OYUppV3hPbm9oSXlzaE9wczFKYjYyNFFPUzdVL3RzTjZkNU4vbWYwL1hOaXc3VzNwSnpEQVpnM2dGVnB6cVJqd3NLWU15T0dmSm15MWZBUm9JNStGTU41VG1xT0JtOFJnVWJSNzJ0Z2lhZ1hhSElRWkw3cXNtN21ZV3lRQ3YzTmdxV085OVhndVNIQmlxdjBuWGJlbXpuQW9kMWk5TzJNN09QK2Z0ZTRSV2duV3BhMXNuSzlXN2llZms1ZENvbk4rRDdoakU5dlU3eW9mYzVvTEx4QWdIY0l1M3phTWc5TnNpOFJFdEFUS1VGWW1vbWFUNHBwNVlldGpHT2x6VHo4VXZsM3d1MXN2dkltMU9Pa1N0Z3I0TlptK1VwWTR3RkR3VFBCTFBDV2FsK2IwQ2N6MUZ6di8xUXIxMFFPWVFiQkxLKzVKY3pOWlhKRFhFeU1PWThCaHRIMGI0bC8zRHdleVlCbjZWTzIwL0pDTFNhWXFQYTI2cWJrVzE4Z0tSbDdRRUZnWlhWKzUvT2tBazg3d255Wk5OWFRTdXdtUmdIK1Rjd21aZGFNaStxR2ZXcm1IRSttbVN3d1E4d1c3UmdMajlZZWMzQVVKUGc3NUEzdXE2YWNJUEovR0IrRjdIcVBpSnZxSjhEUkZPQ3lJSDcvS2ZtQW4xbEJqckpSLzZIL0E5eXNFODd5OE41SExtZHJaNzY0RHpiSHJ6blFmMHMwVElxaW9DRUhSZkt4S3lORkdIZUthWmttR1k2ampOcGp5T2tvNXdNWVArSmxZRU9SRXduMnBFOFAyamR0T3pBNEVyOTZNNVV1MUlMK2lUaExzcktvKytnZWJQcHdpSCttWXllU3VDQXRkSTJ6QkVmYnVEREI2eTFlSFB1SkF1OWlnYU9ZV3JnaHlQV3FMdFlXWXk4T1BtRXl4QUJ3WFlCeTlYU25oNXBuS0tHNVBuUU5lcHl6dXRGcFF3bnFMdmcvVHNTRE1rUllER3c5VU94SEptY1pVTU9iNHMydmxJK3M1bjdFL3JnczVKOHRKRlRaUndWWTJYQXVVSDl2T3d6R0d1cVJ3WTlEeFd2MEJZdEMyNjRzQkVWMTg4VU5KRmQwUzZ4TGNlbXd3bWpMN0c0Zng0Zlg3Q2oyYjR0a0hoeU5hV2RUcVJLRmMvOWhreVQ2ajBvYnFjTkRaZWptYVBZRnJvMm1VcmYvL0VVN1VuNWhtVG51MkJJRnZRQTJiaDhyZ2FiZDQ5VFlCSmJwMkVtbDQ3WkZWaE8zbXN0UHVvb2JFVXN3REVtSmllZm1GSVQ3RHpmVTRPMGQ0aThpZnc4RzNMSWhoellOMTFGNTZLdnZPbmZLMnhGMDFIL0hWSWRXem5hOGlqNW56VTczNG1kMlhicXRSUVRlc1Zwdzc4bCtkMnFvT2pJdXRTd3F2a3Zwb1dKZFp1V2xlVDMvcVo2RTJCR1RxRU5pVy82Z2dlTDZRSWp5SmQ5dVc0R1VVWlRSVS9lRXlRelRObzdKdUJ5a3ZSbUxYUXY2dWFhbUh4OXlmcThwVTRiWk8wY2NpQ0hIZUp5MlkwTDVJcy9POHozSWx4cjhGMkpxa3duWjNtY2tpWStaY0lKNzVZWTgxWWI1VCttd0lPMWxyVHU0TVNDKzJzcXRhMC8wclI4QlUrVStIREhOT0MrUzF2K25PMzcrUHlGK2dPeGtQTlNNY3RZbTVqbHp6Sms3VFRWNzRFWnRNZHRkQlh0WUdiUnNLell2dStDOG85WWhmRVppT0FuQlJDTHlmK0VoMG83UlRPM2xSTlRUdVhBOWE4UnkyK3ZCZEFXeVBvYzUyZFNXd1FtUEtMeU9TcFZnd0ovamlGT0JPYWpCT1V3NmMzSysyWEJMamVpVHFwaSt6T1lYalVvbGkzQkhkNWx0cUxOZkNlQ2t0ODBXZUdrVHA4cjUxS0xXUC9Ndzh4MU45RGh0TUFjNllCV2NYUjU5VHNvZnRmenRPYkFSS1BtdmdiWWdvYVRJUXRlZ0w2ck4rbjRPK2ZiR2F2Y24xTlBpeHhBM1dVMjY5Ylc1bktkMWExK2ljQnhxTjEzNDVzVHdYeVcwOG5wRnIzTnV0Sm1MZkg5T0JtL1ZyUmhLTzFWa1hYWVFOWXUrL25iZ3AxaVFyMUJpcjk2MU9wY3NaUnZKbEhSbW1JZHNzWmNiM1M1MVJKd0pSeDFWQUZuZU11MktBaWdtK3drZ0ZJOXNnazkxdmIzZ2lzMVB0cVR2SlRtSkFRZXpMKy9kWHpCVlo0dnRnNmliVWMrTlBJVnJnYmdqcEJMWlpyS0d1QWl4UEcyL1ZONVhScS9SYzFxK2QzNm9jKzM5Q3NJcktqRTEyK1NNemRRVHFEN3pidGVCNEJ0dmJ2Y1hDcFRnQlBRY2VpV2MwVWw4V093RExaZUFOdFNkNm01UkZRQy83ZkErVVpZL0JtaTRUNHI1cTdZMyt6a2dzMmxNZzA0QVIyZnIrU0xubnlEdURoK0w1TnpUSzNSejFwM2libFVwazFLQXhQVC9mL2hYQ3B6Z09QUXErOG5GdmFxdjZsUmdzQnovd2RVbDhvRzRNNG5jditQYjVlS2svNHZ3QURhRktKMEU1VnAzd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQge3Bvc3RSZWR1Y2VyfSBmcm9tIFwiLi9wb3N0UmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHBvc3Q6IHBvc3RSZWR1Y2VyXHJcbn0pOyIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHBvc3RzOiBbXSxcclxuICAgIHBvc3Q6e30sXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGVycm9yOiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSB0eXBlcy5HRVRfUE9TVFM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHBvc3RzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJleHBvcnQgY29uc3QgR0VUX1BPU1RTID0gJ0dFVF9QT1NUUyc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9