module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\silla\\Documents\\react\\site-sillas\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function HomePage() {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }
  }, "Home - Sillas Vin\xEDcius"), __jsx("meta", {
    name: "description",
    content: "Portif\xF3lio Profissional do Sillas Vin\xEDcius Barbosa Braga",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 16
    }
  }), __jsx("meta", {
    name: "author",
    content: "Sillas Vin\xEDcius",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }
  })), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 12
    }
  }, `
                overflow-x: hidden;
           `), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    color: "dark",
    dark: true,
    expand: "md",
    className: "fixed-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 16
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCode"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 43
    }
  }), " Sillas Vin\xEDcius"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/#inicio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  }, "In\xEDcio")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/#servicos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }, "Servi\xE7os")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/#portifolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, "Portif\xF3lio")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    href: "/#rodape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Contato")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    fluid: true,
    className: "descr-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 12
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 16
    }
  }, `
                       .descr-top {
                            background: linear-gradient(0deg, rgba(52,58,64,1) 0%, rgba(19,19,19,1) 83%);
                            color: #fff;
                            padding-top: 150px;
                            padding-bottom: 100px;
                            margin-bottom: 0rem !important;
                            position: relative;
                        }

                        .inicio-link {
                            position: absolute;
                            top: 0px;
                        }

                        .dev {
                            font-size:45px
                        }
                   `), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("a", {
    name: "inicio",
    className: "inicio-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "lead mb-4 dev",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTerminal"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 50
    }
  }), " Desenvolvedor"), __jsx("p", {
    className: "lead mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, "Quero trabalhar com os melhores profissionais, aprender e aprofundar na \xE1rea de TI, atrav\xE9s do trabalho em equipe e do conv\xEDvio com pessoas qualificadas, buscando sempre evoluir."), __jsx("p", {
    className: "lead",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "btn btn-outline-info btn-lg",
    href: "/#rodape",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, "ENTRE EM CONTATO")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    fluid: true,
    className: "servicos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, `
                        .servicos {
                            background: #fff;
                            padding-top: 80px;
                            padding-bottom: 80px;
                            margin-bottom: 0rem !important;
                            position: relative;
                        }

                        .circulo {
                            width: 140px;
                            height: 140px;
                            background-color: #17a2b8;
                            font-size: 52px;
                            padding-top: 24px;
                            color: #fff;
                        }

                        .circulo:hover {
                            background-color: #148c9f;
                            transition: 0.5s;
                        }

                        .centralizar {
                            margin: 0px auto !important;
                            float: none !important;
                        }

                        .servicos-link {
                            position: absolute;
                            top: 0px;
                        }
                    `), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }, __jsx("a", {
    name: "servicos",
    className: "servicos-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "display-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }, "Servi\xE7os"), __jsx("p", {
    className: "lead pb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, "No que posso te ajudar ?")), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "rounded-circle circulo centralizar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLaptop"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }), __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaMobile"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  })), __jsx("h2", {
    className: "mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, "Front-End"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, "Tenho conhecimento para desenvolver interfaces para web e para dispositivos m\xF3veis. Utilizando de tecnologias como Angular, Ionic, React e React-Native tendo um bom conhecimento de HTML, CSS e JavaScript.")), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "rounded-circle circulo centralizar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaServer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  })), __jsx("h2", {
    className: "mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 29
    }
  }, "Back-End"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 29
    }
  }, "Cria\xE7\xE3o de API's que alimentam as interfaces com dados vindos diretamente do banco de dados. utilizando do Node.js e JavaScript para a cria\xE7\xE3o desses sitemas.")), __jsx("div", {
    className: "col-md-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "rounded-circle circulo centralizar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaDatabase"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  })), __jsx("h2", {
    className: "mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, "Banco de Dados"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 29
    }
  }, "Bom conhecimento e manipula\xE7\xE3o de banco de dados, realizando consultas, inser\xE7\xF5es, dele\xE7\xF5es, atualiza\xE7\xF5es, jun\xE7\xF5es, procedimentos, fun\xE7\xF5es e gatilhos sem muitas dificuldades. Utilizando Gereciadores de Banco de Dados como MySQL, Oracle e SQLserver"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    fluid: true,
    className: "portifolio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, `
                        .portifolio {
                            background: #f8f9fa;
                            padding-top: 80px;
                            padding-bottom: 80px;
                            margin-bottom: 0rem !important;
                            position: relative;
                        }

                        .link {
                            text-decoration: none;
                        }

                        .link:hover {
                            text-decoration: none;
                        }

                        .portifolio-link {
                            position: absolute;
                            top: 0px;
                        }

                    `), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }, __jsx("a", {
    name: "portifolio",
    className: "portifolio-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "display-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, "Portif\xF3lio"), __jsx("p", {
    className: "lead pb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, "Meus Projetos")), __jsx("div", {
    className: "card-deck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://unaroadmap.herokuapp.com/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/portifolio1.jpg",
    className: "card-img-top",
    alt: "img_portifolio_1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 89
    }
  })), __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 33
    }
  }, "UnaRoadmap"), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 33
    }
  }, "Projeto feito em grupo durante o terceiro semestre da faculdade de Sistemas de Informa\xE7\xE3o na faculdade UNA em Uberl\xE2ndia, Minas Gerais."), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://github.com/unaroadmap",
    className: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 58
    }
  }, "Acessar reposit\xF3rio no GitHub.")))), __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/portifolio2.jpg",
    className: "card-img-top",
    alt: "img_portifolio_1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 33
    }
  }, "CRUD com React"), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 33
    }
  }, "Projeto de crud(cria\xE7\xE3o, leitura, atualiza\xE7\xE3o e exclus\xE3o de dados) feito com react utilizando um backend fixo com Node.js e JsonServer."), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://github.com/SillasVinicius/React-CRUD",
    className: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 58
    }
  }, "Acessar reposit\xF3rio no GitHub.")))), __jsx("div", {
    className: "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: "/portifolio3.jpg",
    className: "card-img-top",
    alt: "img_portifolio_1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "card-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 29
    }
  }, __jsx("h5", {
    className: "card-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 33
    }
  }, "Calculadora com React"), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 33
    }
  }, "Projeto de uma calculadora simples, que realiza as opera\xE7\xF5es matem\xE1ticas b\xE1sicas, desenvolvida quando iniciei os estudos do React."), __jsx("p", {
    className: "card-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://github.com/SillasVinicius/React-Calculadora",
    className: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 58
    }
  }, "Acessar reposit\xF3rio no GitHub."))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    fluid: true,
    className: "rodape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, `
                        .rodape {
                            background: #343a40;
                            color: #fff;
                            padding-top: 0px;
                            padding-bottom: 0px;
                            margin-bottom: 0rem !important;
                        }

                        .rodape p a {
                            font-size: 13px;
                        }

                        .rodape p {
                            font-size: 13px;
                        }
                    `), __jsx("a", {
    name: "rodape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 17
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, __jsx("footer", {
    className: "footer mt-auto py-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 33
    }
  }, __jsx("h5", {
    className: "mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 37
    }
  }, "Contato"), __jsx("p", {
    className: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaAt"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 41
    }
  }), " sillasvinicius0403@gmail.com"), __jsx("p", {
    className: "text-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 37
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhone"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 41
    }
  }), " +55 31 98418-0449"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 37
    }
  }, __jsx("a", {
    target: "_blank",
    className: "btn btn-outline-link text-light",
    href: "https://www.linkedin.com/in/sillas-vin\xEDcius-840967169/",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 41
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 180
    }
  }), " Linked-In")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 37
    }
  }, __jsx("a", {
    target: "_blank",
    className: "btn btn-outline-link text-light",
    href: "https://github.com/SillasVinicius",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 41
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 159
    }
  }), " GitHub")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 37
    }
  }, __jsx("a", {
    target: "_blank",
    className: "btn btn-outline-link text-light",
    href: "https://www.facebook.com/people/Sillas-Vinicius/100008152723069",
    role: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 41
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFacebook"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 189
    }
  }), " Facebook"))), __jsx("div", {
    className: "col-lg-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 33
    }
  }, __jsx("h5", {
    className: "mt-4 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 37
    }
  }, "Tecnologias Utilizadas"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 37
    }
  }, "ReactJs"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 37
    }
  }, "NodeJs"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  }, "Bootstrap"))), __jsx("span", {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 29
    }
  }, "Desenvolvido por Sillas Vin\xEDcius."))))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\silla\Documents\react\site-sillas\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQTtBQWFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxH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RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUkYsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgSnVtYm90cm9uLFxyXG4gIEJ1dHRvbixcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgeyBGYURhdGFiYXNlLCBGYVNlcnZlciwgRmFMYXB0b3AsIEZhTW9iaWxlLCBGYUNvZGUsIEZhVGVybWluYWwsIEZhRmFjZWJvb2ssIEZhTGlua2VkaW4sIEZhQXQsIEZhR2l0aHViLCBGYVBob25lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgPHRpdGxlPkhvbWUgLSBTaWxsYXMgVmluw61jaXVzPC90aXRsZT5cclxuICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBvcnRpZsOzbGlvIFByb2Zpc3Npb25hbCBkbyBTaWxsYXMgVmluw61jaXVzIEJhcmJvc2EgQnJhZ2FcIiAvPlxyXG4gICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNpbGxhcyBWaW7DrWNpdXNcIiAvPlxyXG4gICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgPE5hdmJhciBjb2xvcj1cImRhcmtcIiBkYXJrIGV4cGFuZD1cIm1kXCIgY2xhc3NOYW1lPVwiZml4ZWQtdG9wXCI+XHJcbiAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+PEZhQ29kZSAvPiBTaWxsYXMgVmluw61jaXVzPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0b2dnbGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvI2luaWNpb1wiPkluw61jaW88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiLyNzZXJ2aWNvc1wiPlNlcnZpw6dvczwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvI3BvcnRpZm9saW9cIj5Qb3J0aWbDs2xpbzwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvI3JvZGFwZVwiPkNvbnRhdG88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICA8SnVtYm90cm9uIGZsdWlkIGNsYXNzTmFtZT1cImRlc2NyLXRvcFwiPlxyXG4gICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgIC5kZXNjci10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoNTIsNTgsNjQsMSkgMCUsIHJnYmEoMTksMTksMTksMSkgODMlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5pY2lvLWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjQ1cHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBuYW1lPVwiaW5pY2lvXCIgY2xhc3NOYW1lPVwiaW5pY2lvLWxpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgbWItNCBkZXZcIj48RmFUZXJtaW5hbCAvPiBEZXNlbnZvbHZlZG9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgbWItNFwiPlF1ZXJvIHRyYWJhbGhhciBjb20gb3MgbWVsaG9yZXMgcHJvZmlzc2lvbmFpcywgYXByZW5kZXIgZSBhcHJvZnVuZGFyIG5hIMOhcmVhIGRlIFRJLCBhdHJhdsOpcyBkbyB0cmFiYWxobyBlbSBlcXVpcGUgZSBkbyBjb252w612aW8gY29tIHBlc3NvYXMgcXVhbGlmaWNhZGFzLCBidXNjYW5kbyBzZW1wcmUgZXZvbHVpci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtaW5mbyBidG4tbGdcIiBocmVmPVwiLyNyb2RhcGVcIiByb2xlPVwiYnV0dG9uXCI+RU5UUkUgRU0gQ09OVEFUTzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj4gICAgICBcclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwic2Vydmljb3NcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2Vydmljb3Mge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaXJjdWxvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNpcmN1bG86aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0OGM5ZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jZW50cmFsaXphciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2Vydmljb3MtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG5hbWU9XCJzZXJ2aWNvc1wiIGNsYXNzTmFtZT1cInNlcnZpY29zLWxpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5TZXJ2acOnb3M8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIHBiLTRcIj5ObyBxdWUgcG9zc28gdGUgYWp1ZGFyID88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBjaXJjdWxvIGNlbnRyYWxpemFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhTGFwdG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhTW9iaWxlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5Gcm9udC1FbmQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVuaG8gY29uaGVjaW1lbnRvIHBhcmEgZGVzZW52b2x2ZXIgaW50ZXJmYWNlcyBwYXJhIHdlYiBlIHBhcmEgZGlzcG9zaXRpdm9zIG3Ds3ZlaXMuIFV0aWxpemFuZG8gZGUgdGVjbm9sb2dpYXMgY29tbyBBbmd1bGFyLCBJb25pYywgUmVhY3QgZSBSZWFjdC1OYXRpdmUgdGVuZG8gdW0gYm9tIGNvbmhlY2ltZW50byBkZSBIVE1MLCBDU1MgZSBKYXZhU2NyaXB0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1jaXJjbGUgY2lyY3VsbyBjZW50cmFsaXphclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVNlcnZlci8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC00IG1iLTRcIiA+QmFjay1FbmQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3JpYcOnw6NvIGRlIEFQSSdzIHF1ZSBhbGltZW50YW0gYXMgaW50ZXJmYWNlcyBjb20gZGFkb3MgdmluZG9zIGRpcmV0YW1lbnRlIGRvIGJhbmNvIGRlIGRhZG9zLiB1dGlsaXphbmRvIGRvIE5vZGUuanMgZSBKYXZhU2NyaXB0IHBhcmEgYSBjcmlhw6fDo28gZGVzc2VzIHNpdGVtYXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZSBjaXJjdWxvIGNlbnRyYWxpemFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhRGF0YWJhc2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTQgbWItNFwiID5CYW5jbyBkZSBEYWRvczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb20gY29uaGVjaW1lbnRvIGUgbWFuaXB1bGHDp8OjbyBkZSBiYW5jbyBkZSBkYWRvcywgcmVhbGl6YW5kbyBjb25zdWx0YXMsIGluc2Vyw6fDtWVzLCBkZWxlw6fDtWVzLCBhdHVhbGl6YcOnw7VlcywganVuw6fDtWVzLCBwcm9jZWRpbWVudG9zLCBmdW7Dp8O1ZXMgZSBnYXRpbGhvcyBzZW0gbXVpdGFzIGRpZmljdWxkYWRlcy4gVXRpbGl6YW5kbyBHZXJlY2lhZG9yZXMgZGUgQmFuY28gZGUgRGFkb3MgY29tbyBNeVNRTCwgT3JhY2xlIGUgU1FMc2VydmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwicG9ydGlmb2xpb1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3J0aWZvbGlvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saW5rOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnBvcnRpZm9saW8tbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBuYW1lPVwicG9ydGlmb2xpb1wiIGNsYXNzTmFtZT1cInBvcnRpZm9saW8tbGlua1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPlBvcnRpZsOzbGlvPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBwYi00XCI+TWV1cyBQcm9qZXRvczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3VuYXJvYWRtYXAuaGVyb2t1YXBwLmNvbS9cIj48aW1nIHNyYz1cIi9wb3J0aWZvbGlvMS5qcGdcIiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCJpbWdfcG9ydGlmb2xpb18xXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5VbmFSb2FkbWFwPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5Qcm9qZXRvIGZlaXRvIGVtIGdydXBvIGR1cmFudGUgbyB0ZXJjZWlybyBzZW1lc3RyZSBkYSBmYWN1bGRhZGUgZGUgU2lzdGVtYXMgZGUgSW5mb3JtYcOnw6NvIG5hIGZhY3VsZGFkZSBVTkEgZW0gVWJlcmzDom5kaWEsIE1pbmFzIEdlcmFpcy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS91bmFyb2FkbWFwXCIgY2xhc3NOYW1lPVwibGlua1wiPkFjZXNzYXIgcmVwb3NpdMOzcmlvIG5vIEdpdEh1Yi48L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3BvcnRpZm9saW8yLmpwZ1wiIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cImltZ19wb3J0aWZvbGlvXzFcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q1JVRCBjb20gUmVhY3Q8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlByb2pldG8gZGUgY3J1ZChjcmlhw6fDo28sIGxlaXR1cmEsIGF0dWFsaXphw6fDo28gZSBleGNsdXPDo28gZGUgZGFkb3MpIGZlaXRvIGNvbSByZWFjdCB1dGlsaXphbmRvIHVtIGJhY2tlbmQgZml4byBjb20gTm9kZS5qcyBlIEpzb25TZXJ2ZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU2lsbGFzVmluaWNpdXMvUmVhY3QtQ1JVRFwiIGNsYXNzTmFtZT1cImxpbmtcIj5BY2Vzc2FyIHJlcG9zaXTDs3JpbyBubyBHaXRIdWIuPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9wb3J0aWZvbGlvMy5qcGdcIiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCJpbWdfcG9ydGlmb2xpb18xXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhbGN1bGFkb3JhIGNvbSBSZWFjdDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+UHJvamV0byBkZSB1bWEgY2FsY3VsYWRvcmEgc2ltcGxlcywgcXVlIHJlYWxpemEgYXMgb3BlcmHDp8O1ZXMgbWF0ZW3DoXRpY2FzIGLDoXNpY2FzLCBkZXNlbnZvbHZpZGEgcXVhbmRvIGluaWNpZWkgb3MgZXN0dWRvcyBkbyBSZWFjdC48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9TaWxsYXNWaW5pY2l1cy9SZWFjdC1DYWxjdWxhZG9yYVwiIGNsYXNzTmFtZT1cImxpbmtcIj5BY2Vzc2FyIHJlcG9zaXTDs3JpbyBubyBHaXRIdWIuPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwicm9kYXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJvZGFwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJvZGFwZSBwIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucm9kYXBlIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8YSBuYW1lPVwicm9kYXBlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciBtdC1hdXRvIHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtNCBtYi00XCI+Q29udGF0bzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUF0Lz4gc2lsbGFzdmluaWNpdXMwNDAzQGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVBob25lLz4gKzU1IDMxIDk4NDE4LTA0NDlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saW5rIHRleHQtbGlnaHRcIiBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NpbGxhcy12aW7DrWNpdXMtODQwOTY3MTY5L1wiIHJvbGU9XCJidXR0b25cIj48RmFMaW5rZWRpbi8+IExpbmtlZC1JbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saW5rIHRleHQtbGlnaHRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NpbGxhc1ZpbmljaXVzXCIgcm9sZT1cImJ1dHRvblwiPjxGYUdpdGh1Yi8+IEdpdEh1YjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saW5rIHRleHQtbGlnaHRcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Blb3BsZS9TaWxsYXMtVmluaWNpdXMvMTAwMDA4MTUyNzIzMDY5XCIgcm9sZT1cImJ1dHRvblwiPjxGYUZhY2Vib29rLz4gRmFjZWJvb2s8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC00IG1iLTRcIj5UZWNub2xvZ2lhcyBVdGlsaXphZGFzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UmVhY3RKczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Tm9kZUpzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Cb290c3RyYXA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RGVzZW52b2x2aWRvIHBvciBTaWxsYXMgVmluw61jaXVzLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9KdW1ib3Ryb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9