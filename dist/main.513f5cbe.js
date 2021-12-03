// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#demo");
var string = "/*12\u67083\u65E5,\u7B2C\u4E00\u4EFD\u7B80\u5386\n\u5F00\u59CB\u5199\u6837\u5F0F\n\u672C\u6B21\u6837\u5F0F\u4E3A\u592A\u6781*/\n#div1{\n    border:  1px red solid;\n    width:  300px;\n    height: 300px\n}\n/*\n\u4F7F\u7528\u53D8\u5706\n*/\n#div1{\n    border-radius:50%;\n    border: none;\n    box-shadow:0 0 3px rgba(0,0,0,0.5)\n}\n/*\n\u5206\u4E3A\u4E8C\u8272\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,0.5019141445640756) 50%, rgba(255,255,255,0) 100%);\n}\n/*\n\u9ED1\u9C7C\n*/\n#div1::before{\n    width:150px;\nheight:150px;\nleft:0;\ntop:0;\nleft:25%;\nborder-radius:50%;\nbackground:#000;\nbackground: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n/*\n\u767D\u9C7C\n*/\n#div1::after{\n    width:150px;\nheight:150px;\nleft:0;\ntop:0;\nleft:25%;\ntop:50%;\nborder-radius:50%;\nbackground:#fff;\nbackground: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 92%);\n"; // string = string.replace(/\n/g,"<br>")

var string2 = "";
var n = 0;

var step = function step() {
  setTimeout(function () {
    // console.log(n,string[n])
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 999999);
    html.scrollTo(0, 999999);

    if (n < string.length - 1) {
      step();
      n += 1;
    }
  }, 0);
};

step(); // let style = document.querySelector("#style")
// setTimeout(() => {
//   style.innerHTML = `body{
//         color:red
//     }`
// }, 500)
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.513f5cbe.js.map