'donotuse strict';

/*
 logmoduleloads.js
 Creado 201409101529
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 */

var LOGMODULELOADS = false;

FG_logModLoads = function( theMessage) {
    if( !theMessage) {
        return LOGMODULELOADS;
    }
    if( LOGMODULELOADS) {
        console.log( ',{"MODULE", "' + theMessage + '"}');
    }

    return LOGMODULELOADS;
};

;/*
 * typesregistry.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */




function ModuleFactory_TypesRegistrySvce() {

    'use strict';

    return ( function(){



        var ModuleName     = "typesregistry";
        var ModulePackages = "base";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        var aMod_definer = function() {



            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                }
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.TYPESREGISTRYDEFAULTNAME = "TypesRegistry_DefaultName";
            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aTypesRegistry_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "TypesRegistry";

                aPrototype._v_Prototype_TypesRegistry = aPrototype;

                aPrototype._v_Module = null;


                aPrototype._v_Title = null;

                aPrototype._v_ModulesByFullName = null;







                var _pInit = function( theTitle) {

                    this._pInit_TypesRegistry( theTitle);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_TypesRegistry = function( theTitle) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.TYPESREGISTRYDEFAULTNAME;
                    }

                    this._v_ModulesByFullName = { };
                };
                if( _pInit_TypesRegistry){}/* CQT */
                aPrototype._pInit_TypesRegistry = _pInit_TypesRegistry;






                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;






                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = this._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;











                var fRegisterModule = function( theModule) {
                    if( !theModule) {
                        return false;
                    }

                    var aModuleFullName = theModule.ModuleFullName;
                    if( !aModuleFullName) {
                        return false;
                    }

                    var anAlreadyRegisteredModule =  this._v_ModulesByFullName[ aModuleFullName];
                    if( !anAlreadyRegisteredModule) {
                        console.log( "\nAttempt to register another module " + aModuleFullName + "\n");
                        return false;
                    }


                    this._v_ModulesByFullName[ aModuleFullName] = theModule;

                    return true;
                };
                if( fRegisterModule){}/* CQT */
                aPrototype.fRegisterModule = fRegisterModule;








                var fRegisteredModule = function( theModuleFullName) {
                    if( !theModuleFullName) {
                        return null;
                    }


                    var aRegisteredModule =  this._v_ModulesByFullName[ theModuleFullName];
                    if( !aRegisteredModule) {
                        return null;
                    }

                    return aRegisteredModule;
                };
                if( fRegisteredModule){}/* CQT */
                aPrototype.fRegisteredModule = fRegisteredModule;







            return aPrototype;

        })();




        var TypesRegistry_Constructor = function( theTitle) {
            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Title = null;

            this._v_ModulesByFullName = null;

            this._pInit_TypesRegistry( theTitle);
        };
        TypesRegistry_Constructor.prototype = aTypesRegistry_Prototype;





        var TypesRegistry_SuperPrototypeConstructor = function() {
            this._v_Prototype = aTypesRegistry_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Title     = null;

            this._v_ModulesByFullName = null;
        };
        TypesRegistry_SuperPrototypeConstructor.prototype = aTypesRegistry_Prototype;



        var aModule = {
            "TypesRegistry_Prototype": aTypesRegistry_Prototype,
            "TypesRegistry_Constructor": TypesRegistry_Constructor,
            "TypesRegistry_SuperPrototypeConstructor": TypesRegistry_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aTypesRegistry_Prototype._v_Module = aModule;




        return aModule;
    };




    var aModule = aMod_definer();

    var aService = new aModule.TypesRegistry_Constructor();
    if( aService){}/* CQT */

    return aService;

});
}







;/*
 * decoratesystemprototypes_svce.js
 *
 * Created @author Antonio Carrasco Valero 201412070820
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_DecoratesystemprototypesSvce() {

    'use strict';

    return ( function(){



        var aMod_definer = function() {


            var ModuleName     = "decoratesystemprototypes_svce";
            var ModulePackages = "utils";
            var ModuleFullName = ModulePackages + "/" + ModuleName;


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                }
            };




            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };




            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;






            var fStringExtend = function( theString, theLen) {

                if( !theLen) {
                    return "";
                }

                var aThisLen = theString.length;
                if( !aThisLen) {
                    return "";
                }

                var aSource = theString;
                var aNumRepeats = Math.floor( theLen / aThisLen);
                aNumRepeats += 1;
                if( aNumRepeats > 1) {

                    if( aNumRepeats > 10000) {
                        aNumRepeats = 10000;
                    }
                    aSource = Array.apply(null, new Array( aNumRepeats)).map(String.prototype.valueOf, theString).join( "");
                }

                var aExtended = aSource.slice( 0, theLen);
                if( aExtended){}/* CQT */

                return aExtended;
            };
            if( fStringExtend){}/* CQT */
            aModule.fStringExtend = fStringExtend;





            if( !String.prototype.Xtnd) {
                String.prototype.Xtnd = function( theLen) {

                    return aModule.fStringExtend( this, theLen);
                };
            }





            return aModule;
        };






        var aService = aMod_definer();
        if( aService){}/* CQT */

        return aService;

    });
}


if( ModuleFactory_DecoratesystemprototypesSvce){}/* CQT */




;// Domain Public by Eric Wendelin http://www.eriwen.com/ (2008)
//                  Luke Smith http://lucassmith.name/ (2008)
//                  Loic Dachary <loic@dachary.org> (2008)
//                  Johan Euphrosine <proppy@aminche.com> (2008)
//                  Oyvind Sean Kinsey http://kinsey.no/blog (2010)
//                  Victor Homyakov <victor-homyakov@users.sourceforge.net> (2010)
/*global module, exports, define, ActiveXObject*/
(function(global, factory) {
    if (typeof exports === 'object') {
        // Node
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals
        global.printStackTrace = factory();
    }
}(this, function() {
    /**
     * Main function giving a function stack trace with a forced or passed in Error
     *
     * @cfg {Error} e The error to create a stacktrace from (optional)
     * @cfg {Boolean} guess If we should try to resolve the names of anonymous functions
     * @return {Array} of Strings with functions, lines, files, and arguments where possible
     */
    function printStackTrace(options) {
        options = options || {guess: true};
        var ex = options.e || null, guess = !!options.guess, mode = options.mode || null;
        var p = new printStackTrace.implementation(), result = p.run(ex, mode);
        return (guess) ? p.guessAnonymousFunctions(result) : result;
    }

    printStackTrace.implementation = function() {
    };

    printStackTrace.implementation.prototype = {
        /**
         * @param {Error} [ex] The error to create a stacktrace from (optional)
         * @param {String} [mode] Forced mode (optional, mostly for unit tests)
         */
        run: function(ex, mode) {
            ex = ex || this.createException();
            mode = mode || this.mode(ex);
            if (mode === 'other') {
                return this.other(arguments.callee);
            } else {
                return this[mode](ex);
            }
        },

        createException: function() {
            try {
                this.undef();
            } catch (e) {
                return e;
            }
        },

        /**
         * Mode could differ for different exception, e.g.
         * exceptions in Chrome may or may not have arguments or stack.
         *
         * @return {String} mode of operation for the exception
         */
        mode: function(e) {
            if (e['arguments'] && e.stack) {
                return 'chrome';
            }

            if (e.stack && e.sourceURL) {
                return 'safari';
            }

            if (e.stack && e.number) {
                return 'ie';
            }

            if (e.stack && e.fileName) {
                return 'firefox';
            }

            if (e.message && e['opera#sourceloc']) {
                // e.message.indexOf("Backtrace:") > -1 -> opera9
                // 'opera#sourceloc' in e -> opera9, opera10a
                // !e.stacktrace -> opera9
                if (!e.stacktrace) {
                    return 'opera9'; // use e.message
                }
                if (e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
                    // e.message may have more stack entries than e.stacktrace
                    return 'opera9'; // use e.message
                }
                return 'opera10a'; // use e.stacktrace
            }

            if (e.message && e.stack && e.stacktrace) {
                // e.stacktrace && e.stack -> opera10b
                if (e.stacktrace.indexOf("called from line") < 0) {
                    return 'opera10b'; // use e.stacktrace, format differs from 'opera10a'
                }
                // e.stacktrace && e.stack -> opera11
                return 'opera11'; // use e.stacktrace, format differs from 'opera10a', 'opera10b'
            }

            if (e.stack && !e.fileName) {
                // Chrome 27 does not have e.arguments as earlier versions,
                // but still does not have e.fileName as Firefox
                return 'chrome';
            }

            return 'other';
        },

        /**
         * Given a context, function name, and callback function, overwrite it so that it calls
         * printStackTrace() first with a callback and then runs the rest of the body.
         *
         * @param {Object} context of execution (e.g. window)
         * @param {String} functionName to instrument
         * @param {Function} callback function to call with a stack trace on invocation
         */
        instrumentFunction: function(context, functionName, callback) {
            context = context || window;
            var original = context[functionName];
            context[functionName] = function instrumented() {
                callback.call(this, printStackTrace().slice(4));
                return context[functionName]._instrumented.apply(this, arguments);
            };
            context[functionName]._instrumented = original;
        },

        /**
         * Given a context and function name of a function that has been
         * instrumented, revert the function to it's original (non-instrumented)
         * state.
         *
         * @param {Object} context of execution (e.g. window)
         * @param {String} functionName to de-instrument
         */
        deinstrumentFunction: function(context, functionName) {
            if (context[functionName].constructor === Function &&
                context[functionName]._instrumented &&
                context[functionName]._instrumented.constructor === Function) {
                context[functionName] = context[functionName]._instrumented;
            }
        },

        /**
         * Given an Error object, return a formatted Array based on Chrome's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        chrome: function(e) {
            return (e.stack + '\n')
                .replace(/^[\s\S]+?\s+at\s+/, ' at ') // remove message
                .replace(/^\s+(at eval )?at\s+/gm, '') // remove 'at' and indentation
                .replace(/^([^\(]+?)([\n$])/gm, '{anonymous}() ($1)$2')
                .replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}() ($1)')
                .replace(/^(.+) \((.+)\)$/gm, '$1@$2')
                .split('\n')
                .slice(0, -1);
        },

        /**
         * Given an Error object, return a formatted Array based on Safari's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        safari: function(e) {
            return e.stack.replace(/\[native code\]\n/m, '')
                .replace(/^(?=\w+Error\:).*$\n/m, '')
                .replace(/^@/gm, '{anonymous}()@')
                .split('\n');
        },

        /**
         * Given an Error object, return a formatted Array based on IE's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        ie: function(e) {
            return e.stack
                .replace(/^\s*at\s+(.*)$/gm, '$1')
                .replace(/^Anonymous function\s+/gm, '{anonymous}() ')
                .replace(/^(.+)\s+\((.+)\)$/gm, '$1@$2')
                .split('\n')
                .slice(1);
        },

        /**
         * Given an Error object, return a formatted Array based on Firefox's stack string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        firefox: function(e) {
            return e.stack.replace(/(?:\n@:0)?\s+$/m, '')
                .replace(/^(?:\((\S*)\))?@/gm, '{anonymous}($1)@')
                .split('\n');
        },

        opera11: function(e) {
            var ANON = '{anonymous}', lineRE = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
            var lines = e.stacktrace.split('\n'), result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var location = match[4] + ':' + match[1] + ':' + match[2];
                    var fnName = match[3] || "global code";
                    fnName = fnName.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, ANON);
                    result.push(fnName + '@' + location + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                }
            }

            return result;
        },

        opera10b: function(e) {
            // "<anonymous function: run>([arguments not available])@file://localhost/G:/js/stacktrace.js:27\n" +
            // "printStackTrace([arguments not available])@file://localhost/G:/js/stacktrace.js:18\n" +
            // "@file://localhost/G:/js/test/functional/testcase1.html:15"
            var lineRE = /^(.*)@(.+):(\d+)$/;
            var lines = e.stacktrace.split('\n'), result = [];

            for (var i = 0, len = lines.length; i < len; i++) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var fnName = match[1] ? (match[1] + '()') : "global code";
                    result.push(fnName + '@' + match[2] + ':' + match[3]);
                }
            }

            return result;
        },

        /**
         * Given an Error object, return a formatted Array based on Opera 10's stacktrace string.
         *
         * @param e - Error object to inspect
         * @return Array<String> of function calls, files and line numbers
         */
        opera10a: function(e) {
            // "  Line 27 of linked script file://localhost/G:/js/stacktrace.js\n"
            // "  Line 11 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html: In function foo\n"
            var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n'), result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    var fnName = match[3] || ANON;
                    result.push(fnName + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                }
            }

            return result;
        },

        // Opera 7.x-9.2x only!
        opera9: function(e) {
            // "  Line 43 of linked script file://localhost/G:/js/stacktrace.js\n"
            // "  Line 7 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html\n"
            var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n'), result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(ANON + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                }
            }

            return result;
        },

        // Safari 5-, IE 9-, and others
        other: function(curr) {
            var ANON = '{anonymous}', fnRE = /function(?:\s+([\w$]+))?\s*\(/, stack = [], fn, args, maxStackSize = 10;
            var slice = Array.prototype.slice;
            while (curr && stack.length < maxStackSize) {
                fn = fnRE.test(curr.toString()) ? RegExp.$1 || ANON : ANON;
                try {
                    args = slice.call(curr['arguments'] || []);
                } catch (e) {
                    args = ['Cannot access arguments: ' + e];
                }
                stack[stack.length] = fn + '(' + this.stringifyArguments(args) + ')';
                try {
                    curr = curr.caller;
                } catch (e) {
                    stack[stack.length] = 'Cannot access caller: ' + e;
                    break;
                }
            }
            return stack;
        },

        /**
         * Given arguments array as a String, substituting type names for non-string types.
         *
         * @param {Arguments,Array} args
         * @return {String} stringified arguments
         */
        stringifyArguments: function(args) {
            var result = [];
            var slice = Array.prototype.slice;
            for (var i = 0; i < args.length; ++i) {
                var arg = args[i];
                if (arg === undefined) {
                    result[i] = 'undefined';
                } else if (arg === null) {
                    result[i] = 'null';
                } else if (arg.constructor) {
                    // TODO constructor comparison does not work for iframes
                    if (arg.constructor === Array) {
                        if (arg.length < 3) {
                            result[i] = '[' + this.stringifyArguments(arg) + ']';
                        } else {
                            result[i] = '[' + this.stringifyArguments(slice.call(arg, 0, 1)) + '...' + this.stringifyArguments(slice.call(arg, -1)) + ']';
                        }
                    } else if (arg.constructor === Object) {
                        result[i] = '#object';
                    } else if (arg.constructor === Function) {
                        result[i] = '#function';
                    } else if (arg.constructor === String) {
                        result[i] = '"' + arg + '"';
                    } else if (arg.constructor === Number) {
                        result[i] = arg;
                    } else {
                        result[i] = '?';
                    }
                }
            }
            return result.join(',');
        },

        sourceCache: {},

        /**
         * @return {String} the text from a given URL
         */
        ajax: function(url) {
            var req = this.createXMLHTTPObject();
            if (req) {
                try {
                    req.open('GET', url, false);
                    //req.overrideMimeType('text/plain');
                    //req.overrideMimeType('text/javascript');
                    req.send(null);
                    //return req.status == 200 ? req.responseText : '';
                    return req.responseText;
                } catch (e) {
                }
            }
            return '';
        },

        /**
         * Try XHR methods in order and store XHR factory.
         *
         * @return {XMLHttpRequest} XHR function or equivalent
         */
        createXMLHTTPObject: function() {
            var xmlhttp, XMLHttpFactories = [
                function() {
                    return new XMLHttpRequest();
                }, function() {
                    return new ActiveXObject('Msxml2.XMLHTTP');
                }, function() {
                    return new ActiveXObject('Msxml3.XMLHTTP');
                }, function() {
                    return new ActiveXObject('Microsoft.XMLHTTP');
                }
            ];
            for (var i = 0; i < XMLHttpFactories.length; i++) {
                try {
                    xmlhttp = XMLHttpFactories[i]();
                    // Use memoization to cache the factory
                    this.createXMLHTTPObject = XMLHttpFactories[i];
                    return xmlhttp;
                } catch (e) {
                }
            }
        },

        /**
         * Given a URL, check if it is in the same domain (so we can get the source
         * via Ajax).
         *
         * @param url {String} source url
         * @return {Boolean} False if we need a cross-domain request
         */
        isSameDomain: function(url) {
            return typeof location !== "undefined" && url.indexOf(location.hostname) !== -1; // location may not be defined, e.g. when running from nodejs.
        },

        /**
         * Get source code from given URL if in the same domain.
         *
         * @param url {String} JS source URL
         * @return {Array} Array of source code lines
         */
        getSource: function(url) {
            // TODO reuse source from script tags?
            if (!(url in this.sourceCache)) {
                this.sourceCache[url] = this.ajax(url).split('\n');
            }
            return this.sourceCache[url];
        },

        guessAnonymousFunctions: function(stack) {
            for (var i = 0; i < stack.length; ++i) {
                var reStack = /\{anonymous\}\(.*\)@(.*)/,
                    reRef = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
                    frame = stack[i], ref = reStack.exec(frame);

                if (ref) {
                    var m = reRef.exec(ref[1]);
                    if (m) { // If falsey, we did not get any file/line information
                        var file = m[1], lineno = m[2], charno = m[3] || 0;
                        if (file && this.isSameDomain(file) && lineno) {
                            var functionName = this.guessAnonymousFunction(file, lineno, charno);
                            stack[i] = frame.replace('{anonymous}', functionName);
                        }
                    }
                }
            }
            return stack;
        },

        guessAnonymousFunction: function(url, lineNo, charNo) {
            var ret;
            try {
                ret = this.findFunctionName(this.getSource(url), lineNo);
            } catch (e) {
                ret = 'getSource failed with url: ' + url + ', exception: ' + e.toString();
            }
            return ret;
        },

        findFunctionName: function(source, lineNo) {
            // FIXME findFunctionName fails for compressed source
            // (more than one function on the same line)
            // function {name}({args}) m[1]=name m[2]=args
            var reFunctionDeclaration = /function\s+([^(]*?)\s*\(([^)]*)\)/;
            // {name} = function ({args}) TODO args capture
            // /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*function(?:[^(]*)/
            var reFunctionExpression = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;
            // {name} = eval()
            var reFunctionEvaluation = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
            // Walk backwards in the source lines until we find
            // the line which matches one of the patterns above
            var code = "", line, maxLines = Math.min(lineNo, 20), m, commentPos;
            for (var i = 0; i < maxLines; ++i) {
                // lineNo is 1-based, source[] is 0-based
                line = source[lineNo - i - 1];
                commentPos = line.indexOf('//');
                if (commentPos >= 0) {
                    line = line.substr(0, commentPos);
                }
                // TODO check other types of comments? Commented code may lead to false positive
                if (line) {
                    code = line + code;
                    m = reFunctionExpression.exec(code);
                    if (m && m[1]) {
                        return m[1];
                    }
                    m = reFunctionDeclaration.exec(code);
                    if (m && m[1]) {
                        //return m[1] + "(" + (m[2] || "") + ")";
                        return m[1];
                    }
                    m = reFunctionEvaluation.exec(code);
                    if (m && m[1]) {
                        return m[1];
                    }
                }
            }
            return '(?)';
        }
    };

    return printStackTrace;
}));
;
/*
 * exceptiondetails_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_ExceptionDetailsSvce() {

    'use strict';


    return ( function(){





        var aMod_definer = function( theM_stacktrace) {


            var ModuleName     = "exceptiondetails_svce";
            var ModulePackages = "utils";
            var ModuleFullName = ModulePackages + "/" + ModuleName;


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}











            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGEXCEPTIONDETAILS = false;
            };





            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };







            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;






            var fExceptionDetail = function( theException) {
                if( !theException) {
                    return null;
                }


                var anExceptionDetail = {
                    exception: theException.toString()
                };


                var anExceptionTrace = theM_stacktrace( { e: theException});
                if( anExceptionTrace) {
                    anExceptionDetail.trace = anExceptionTrace;
                }

                var aRecord = theException._v_Record;
                if( aRecord) {
                    if( aRecord.fIdentifyingJSON) {
                        aRecord = aRecord.fIdentifyingJSON();
                    }
                    else {
                        if( aRecord.fAsLogObject) {
                            aRecord = aRecord.fAsLogObject();
                        }
                    }
                    if( aRecord) {
                        anExceptionDetail.recex = aRecord;
                    }
                }

                if( this.LOGEXCEPTIONDETAILS) {
                    console.log( "exception:" + anExceptionDetail.exception);
                    console.log( anExceptionDetail.recex);
                    console.log( anExceptionDetail.trace);
                }

                anExceptionDetail.fIdentifyingJSON = function() {
                    return anExceptionDetail;
                };

                return anExceptionDetail;
            };
            if( fExceptionDetail){}/* CQT */
            aModule.fExceptionDetail = fExceptionDetail;






            return aModule;
        };






        var aService = aMod_definer();
        if( aService){}/* CQT */

        return aService;

    });
}

if( ModuleFactory_ExceptionDetailsSvce){}/* CQT */




;/*
 * console_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

 Licensed under the EUPL, Version 1.1 only (the "Licence");
 You may not use this work except in compliance with the
 Licence.
 You may obtain a copy of the Licence at:
 https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
 Unless required by applicable law or agreed to in
 writing, software distributed under the Licence is
 distributed on an "AS IS" basis,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied.
 See the Licence for the specific language governing
 permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */






function ModuleFactory_ConsoleSvce() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider) {


        var ModuleName     = "console_svce";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.WRITETOCONSOLE          = true;
                theToInit.COLLECTLOGS             = false;
                theToInit.MAXCOLLECTEDLOGSLENGTH  = 16 * 1024 * 1024;

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                }
            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };







            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;



            aModule._v_WriteToConsole          = aModule.WRITETOCONSOLE;
            aModule._v_CollectLogs             = aModule.COLLECTLOGS;
            aModule._v_MaxCollectedLogsLength  = aModule.MAXCOLLECTEDLOGSLENGTH;


            aModule._v_CollectedLogs           = [ ];
            aModule._v_CollectedLogsSize       = 0;







            var pSetWriteToConsole = function( theWriteToConsole) {

                aModule._v_WriteToConsole = ( theWriteToConsole? true : false);

            };
            if( pSetWriteToConsole){}/* CQT */
            aModule.pSetWriteToConsole = pSetWriteToConsole;







            var pSetCollectLogs = function( theCollectLogs) {

                if( theCollectLogs) {

                    aModule._v_CollectLogs = true;

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs      = [ ];
                        aModule._v_CollectedLogsSize  = 0;
                    }
                }
                else {
                    aModule._v_CollectLogs        = false;
                    aModule._v_CollectedLogs      = [ ];
                    aModule._v_CollectedLogsSize  = 0;
                }
            };
            if( pSetCollectLogs){}/* CQT */
            aModule.pSetCollectLogs = pSetCollectLogs;





            var pSetMaxCollectedLogsLength = function( theMaxCollectedLogsLength) {

                aModule._v_MaxCollectedLogsLength = theMaxCollectedLogsLength;

                aModule.pEnforceMaxCollectedLogsLength("");

            };
            if( pSetMaxCollectedLogsLength){}/* CQT */
            aModule.pSetMaxCollectedLogsLength = pSetMaxCollectedLogsLength;








            var fCollectedLogs = function() {

               return aModule._v_CollectedLogs;

            };
            if( fCollectedLogs){}/* CQT */
            aModule.fCollectedLogs = fCollectedLogs;






            var fCollectedLogsCopy = function() {

                if( !aModule._v_CollectedLogs) {
                    return null;
                }

                return aModule._v_CollectedLogs.slice();

            };
            if( fCollectedLogsCopy){}/* CQT */
            aModule.fCollectedLogsCopy = fCollectedLogsCopy;







            var log = function( theMessage) {

                if( aModule._v_CollectLogs) {

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs = [ ];
                    }

                    aModule._v_CollectedLogs.push( [ "log", theMessage]);

                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }


                if( aModule._v_WriteToConsole) {

                    console.log( theMessage);
                }

            };
            if( log){}/* CQT */
            aModule.log = log;







            var error = function( theMessage) {

                if( aModule._v_CollectLogs) {

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs = [ ];
                    }

                    aModule._v_CollectedLogs.push( [ "error", theMessage]);

                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }


                if( aModule._v_WriteToConsole) {

                    console.error( theMessage);
                }

            };
            if( error){}/* CQT */
            aModule.error = error;




            
            


            var info = function( theMessage) {

                if( aModule._v_CollectLogs) {

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs = [ ];
                    }

                    aModule._v_CollectedLogs.push( [ "info", theMessage]);

                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }


                if( aModule._v_WriteToConsole) {

                    console.log( theMessage);
                }

            };
            if( info){}/* CQT */
            aModule.info = info;






            var clear = function() {

                aModule._v_CollectedLogs     = [ ];
                aModule._v_CollectedLogsSize = 0;

                if( aModule._v_WriteToConsole) {

                    console.clear();
                }

            };
            if( clear){}/* CQT */
            aModule.clear = clear;








            var pEnforceMaxCollectedLogsLength = function( theMessage) {

                if( !aModule._v_CollectLogs) {
                    return;
                }

                var aMessageLen = ( ( typeof theMessage == "string") ? theMessage.length : 0);

                aModule._v_CollectedLogsSize += aMessageLen;

                if( aModule._v_MaxCollectedLogsLength <= 0) {
                    return;
                }


                while( true) {

                    if( aModule._v_CollectedLogsSize <= aModule._v_MaxCollectedLogsLength) {
                        return;
                    }

                    if( aModule._v_CollectLogs.length <= 1) {
                        return;
                    }

                    var aRemovedKindAndMessage = aModule._v_CollectedLogs.shift();

                    var aRemovedMessage = aRemovedKindAndMessage[ 1];
                    var aRemovedMessageLen = ( ( typeof aRemovedMessage == "string") ? aRemovedMessage.length : 0);

                    aModule._v_CollectedLogsSize -= aRemovedMessageLen;
                }


            };
            if( pEnforceMaxCollectedLogsLength){}/* CQT */
            aModule.pEnforceMaxCollectedLogsLength = pEnforceMaxCollectedLogsLength;






            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}






;/*
 * overrider_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */




function ModuleFactory_OverriderType() {

    'use strict';


    return ( function( theSS_typesregistry) {


        var ModuleName     = "overrider_type";
        var ModulePackages = "roots";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function() {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.OVERRIDER_DEFAULTTITLE = "OverriderDefaultName";
            };



            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aOverrider_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "Overrider";

                aPrototype._v_Prototype_Overrider = aPrototype;

                aPrototype._v_Module = null;





                var _pInit = function( theTitle) {

                    this._pInit_Overrider( theTitle);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_Overrider = function( theTitle) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.OVERRIDER_DEFAULTTITLE;
                    }
                };
                if( _pInit_Overrider){}/* CQT */
                aPrototype._pInit_Overrider = _pInit_Overrider;







                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;





                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = this._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;







                var pOverrideModuleVariations = function( theModuleFullName, theModuleVariations) {
                };
                if( pOverrideModuleVariations){}/* CQT */
                aPrototype.pOverrideModuleVariations = pOverrideModuleVariations;







                return aPrototype;

            })();




            var Overrider_Constructor = function( theTitle) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Title = null;

                this._pInit_Overrider( theTitle);
            };
            Overrider_Constructor.prototype = aOverrider_Prototype;





            var Overrider_SuperPrototypeConstructor = function() {
                this._v_Prototype = aOverrider_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Title     = null;
            };
            Overrider_SuperPrototypeConstructor.prototype = aOverrider_Prototype;



            var aModule = {
                "Overrider_Prototype": aOverrider_Prototype,
                "Overrider_Constructor": Overrider_Constructor,
                "Overrider_SuperPrototypeConstructor": Overrider_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aOverrider_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer();
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}

if( ModuleFactory_OverriderType){}/* CQT */





;/*
 * commoneventkinds.js
 *
 * Created @author Antonio Carrasco Valero 201610051556
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

 Licensed under the EUPL, Version 1.1 only (the "Licence");
 You may not use this work except in compliance with the
 Licence.
 You may obtain a copy of the Licence at:
 https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
 Unless required by applicable law or agreed to in
 writing, software distributed under the Licence is
 distributed on an "AS IS" basis,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied.
 See the Licence for the specific language governing
 permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_CommonEventKinds() {

    'use strict';

    return ( function( theSS_typesregistry){


        var ModuleName     = "commoneventkinds";
        var ModulePackages = "base";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function() {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }


                theToInit.EVENTKIND_ACTIONREPORT_FAILED          = "EVT_ACTIONREPORT_FAILED";
                theToInit.EVENTKIND_ACTIONREPORT_SUCCESS         = "EVT_ACTIONREPORT_SUCCESS";

                theToInit.EVENTKIND_ACTIONREPORT_CREATED         = "EVT_ACTIONREPORT_CREATED";

                theToInit.EVENTKIND_GRIDREGISTEREDINPARENT       = "EVT_GRIDREGISTEREDINPARENT";
                theToInit.EVENTKIND_EDITORREGISTEREDINPARENT     = "EVT_EDITORREGISTEREDINPARENT";
                theToInit.EVENTKIND_CREATORREGISTEREDINPARENT    = "EVT_CREATORREGISTEREDINPARENT";
                theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR  = "EVT_CANDIDATEREGISTEREDINEDITOR";

                theToInit.EVENTKIND_WIRED                        = "EVT_WIRED";
                theToInit.EVENTKIND_UNWIRED                      = "EVT_UNWIRED";

                theToInit.EVENTKIND_ADDROWSCHANGELISTENER         = "EVT_ADDROWSCHANGELISTENER";
                theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER      = "EVT_REMOVEROWSCHANGELISTENER";
                theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER    = "EVT_ADDSELECTIONCHANGELISTENER";
                theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER = "EVT_REMOVESELECTIONCHANGELISTENER";
                theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER     = "EVT_ADDACTIONHAPPENEDLISTENER";
                theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER  = "EVT_REMOVEACTIONHAPPENEDLISTENER";

                theToInit.EVENTKIND_TRYTORETRIEVEROWS            = "EVT_TRYTORETRIEVEROWS";
                theToInit.EVENTKIND_RETRIEVEDROWS                = "EVT_RETRIEVEDROWS";
                theToInit.EVENTKIND_TRYTORETRIEVEFIELDS          = "EVT_TRYTORETRIEVEFIELDS";
                theToInit.EVENTKIND_RETRIEVEDFIELDS              = "EVT_RETRIEVEDFIELDS";

                theToInit.EVENTKIND_LISTENED                     = "EVT_LISTENED";
                theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED  = "EVT_GRIDSELECTIONCHANGELISTENED";
                theToInit.EVENTKIND_ARGUMENTSCHANGELISTENED      = "EVT_ARGUMENTSCHANGELISTENED";





                theToInit.EVENTKIND_SERVICEREPORT_SENDING         = "EVT_SERVICEREPORT_SENDING";
                theToInit.EVENTKIND_SERVICEREPORT_OK              = "EVT_SERVICEREPORT_OK";
                theToInit.EVENTKIND_SERVICEREPORT_FAIL            = "EVT_SERVICEREPORT_FAIL";

                theToInit.EVENTKIND_SERVICEREPORT_GET             = "EVT_SERVICEREPORT_GET";
                theToInit.EVENTKIND_SERVICEREPORT_GETOK           = "EVT_SERVICEREPORT_GETOK";
                theToInit.EVENTKIND_SERVICEREPORT_GETFAIL         = "EVT_SERVICEREPORT_GETFAIL";
                theToInit.EVENTKIND_SERVICEREPORT_POST            = "EVT_SERVICEREPORT_POST";
                theToInit.EVENTKIND_SERVICEREPORT_POSTOK          = "EVT_SERVICEREPORT_POSTOK";
                theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL        = "EVT_SERVICEREPORT_POSTFAIL";
                theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL      = "EVT_SERVICEREPORT_UPLOADFAIL";





                theToInit.EVENTKINDS_NOPROMISE_FAILURES = [
                    theToInit.EVENTKIND_ACTIONREPORT_FAILED        ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL     ,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];



                theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES = [
                    theToInit.EVENTKIND_ACTIONREPORT_SUCCESS       ,
                    theToInit.EVENTKIND_ACTIONREPORT_CREATED       ,
                    theToInit.EVENTKIND_GRIDREGISTEREDINPARENT     ,
                    theToInit.EVENTKIND_EDITORREGISTEREDINPARENT   ,
                    theToInit.EVENTKIND_CREATORREGISTEREDINPARENT  ,
                    theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR,
                    theToInit.EVENTKIND_WIRED                      ,
                    theToInit.EVENTKIND_UNWIRED                    ,
                    theToInit.EVENTKIND_ADDROWSCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER,
                    theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER,
                    theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER  ,
                    theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER ,
                    theToInit.EVENTKIND_TRYTORETRIEVEROWS          ,
                    theToInit.EVENTKIND_RETRIEVEDROWS              ,
                    theToInit.EVENTKIND_TRYTORETRIEVEFIELDS        ,
                    theToInit.EVENTKIND_RETRIEVEDFIELDS            ,
                    theToInit.EVENTKIND_LISTENED                   ,
                    theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED,
                    theToInit.EVENTKIND_SERVICEREPORT_SENDING      ,
                    theToInit.EVENTKIND_SERVICEREPORT_OK           ,
                    theToInit.EVENTKIND_SERVICEREPORT_GET          ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETOK        ,
                    theToInit.EVENTKIND_SERVICEREPORT_POST         ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTOK
                ];



                theToInit.EVENTKINDS_NOPROMISE = [];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_FAILURES);




                theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT              = "NODEFERREDTOREJECT";
                theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE             = "NODEFERREDTORESOLVE";

                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED  = "ATTEMPTTOREJECT_ALREADYRESOLVED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED  = "ATTEMPTTOREJECT_ALREADYREJECTED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING       = "ATTEMPTTOREJECT_NOTPENDING";

                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED = "ATTEMPTTORESOLVE_ALREADYRESOLVED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED = "ATTEMPTTORESOLVE_ALREADYREJECTED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING      = "ATTEMPTTORESOLVE_NOTPENDING";

                theToInit.PROMINSTEVT_ALLSCHEDULED                         = "ALLSCHEDULED";

                theToInit.PROMINSTEVT_REJECTED                             = "REJECTED";
                theToInit.PROMINSTEVT_RESOLVED                             = "RESOLVED";




                theToInit.EVENTKINDS_PROMISE_FAILURES = [
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT             ,
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE            ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING      ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING

                ];

                theToInit.EVENTKINDS_PROMISE_NOTFAILURES = [
                    theToInit.PROMINSTEVT_ALLSCHEDULED                        ,
                    theToInit.PROMINSTEVT_REJECTED                            ,
                    theToInit.PROMINSTEVT_RESOLVED

                ];




                theToInit.EVENTKINDS_FAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_FAILURES, theToInit.EVENTKINDS_PROMISE_FAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_FAILURES, theToInit.EVENTKINDS_NOPROMISE_FAILURES);




                theToInit.EVENTKINDS_NOTFAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFAILURES, theToInit.EVENTKINDS_PROMISE_NOTFAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFAILURES, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);







                theToInit.EVENTKINDS = theToInit.EVENTKINDS_NOPROMISE.slice();
                Array.prototype.push.apply( theToInit.EVENTKINDS, theToInit.EVENTKINDS_PROMISE_FAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS, theToInit.EVENTKINDS_PROMISE_NOTFAILURES);





                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE = [

                    theToInit.EVENTKIND_ACTIONREPORT_CREATED       ,
                    theToInit.EVENTKIND_GRIDREGISTEREDINPARENT     ,
                    theToInit.EVENTKIND_EDITORREGISTEREDINPARENT   ,
                    theToInit.EVENTKIND_CREATORREGISTEREDINPARENT  ,
                    theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR,
                    theToInit.EVENTKIND_WIRED                      ,
                    theToInit.EVENTKIND_UNWIRED                    ,
                    theToInit.EVENTKIND_ADDROWSCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER,
                    theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER,
                    theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER  ,
                    theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER ,
                    theToInit.EVENTKIND_TRYTORETRIEVEROWS          ,
                    theToInit.EVENTKIND_RETRIEVEDROWS              ,
                    theToInit.EVENTKIND_TRYTORETRIEVEFIELDS        ,
                    theToInit.EVENTKIND_RETRIEVEDFIELDS            ,
                    theToInit.EVENTKIND_LISTENED                   ,
                    theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED,
                    theToInit.EVENTKIND_SERVICEREPORT_SENDING      ,
                    theToInit.EVENTKIND_SERVICEREPORT_OK           ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GET          ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETOK        ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POST         ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTOK       ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL     ,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];



                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE, theToInit.EVENTKINDS_PROMISE_NOTFAILURES);

                theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE = theToInit.EVENTKINDS_PROMISE_NOTFAILURES.slice();


                theToInit.EVENTKINDS_NOTFORCONSOLE_NONE = [];
                theToInit.EVENTKINDS_NOTFORCONSOLE_ALL = theToInit.EVENTKINDS.slice();

                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE.slice();

                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NONE;

                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;






                theToInit.EVENTKINDS_ERRORS = [
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT             ,
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE            ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING      ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING     ,
                    theToInit.EVENTKIND_ACTIONREPORT_FAILED        ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];


                theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS  = theToInit.EVENTKINDS_ERRORS.slice();

                theToInit.EVENTKINDS_TRIGGERDUMP_ALL     = theToInit.EVENTKINDS.slice();

                theToInit.EVENTKINDS_TRIGGERDUMP_DEFAULT = theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS;



            };



            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };



            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;
            aModule.pgInitFromModuleConstants = pgInitFromModuleConstants;



            return aModule;
        };






        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer();
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    });
}


if( ModuleFactory_CommonEventKinds){}/* CQT */




;/*
 * common_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030426
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_CommonType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_IdentifierSvce,
                       theSS_RecorderSvce,
                       theSS_CommonEventTypes){


        var ModuleName     = "common_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_RecorderSvce,
                                     theS_CommonEventTypes) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }


                /* BeWare: keeping references to record instances shall prevent reclamation of their memory by the garbage collector
                   Note that when a recordingpolicy_keepall is plugged into the recorder, all records shall be kept in memory in the _v_Records slot property of the recorder instance
                   */
                theToInit.KEEPOWNRECORDS = false;


            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                if( theS_CommonEventTypes && theS_CommonEventTypes.pgInitFromModuleConstants) {
                    theS_CommonEventTypes.pgInitFromModuleConstants( theToInit);
                }

                theToInit.COMMON_DEFAULTTITLE = "CommonDefaultName";

                theToInit.UNKNOWNID = "?i?";

                theToInit.VALUEDIFFATTOP = "/";
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";








                theToInit.HITSVRFAILURE_NOTSENTMISSINGPARMS = "SERVERNOTSENT_MISSINGPARMS";
                theToInit.HITSVRFAILURE_AJAX                = "SERVERFAILURE_AJAX";
                theToInit.HITSVRFAILURE_TIMEOUT             = "SERVERFAILURE_TIMEOUT";
                theToInit.HITSVRFAILURE_REPORTEDEXCEPTION   = "SERVERFAILURE_REPORTEDEXCEPTION";
                theToInit.HITSVRFAILURE_REMOTEEXCEPTION     = "SERVERFAILURE_REMOTEEXCEPTION";
                theToInit.HITSVRFAILURE_NORESPONSE          = "SERVERFAILURE_NORESPONSE";
                theToInit.HITSVRFAILURE_SESSION             = "SERVERFAILURE_SESSION";
                theToInit.HITSVRFAILURE_UNAUTHORIZED        = "SERVERFAILURE_UNAUTHORIZED";
                theToInit.HITSVRFAILURE_NOSUCCESS           = "SERVERFAILURE_NOSUCCESS";
                theToInit.HITSVRFAILURE_WRONGTYPE           = "SERVERFAILURE_WRONGTYPE";
                theToInit.HITSVRFAILURE_NORESPONSEFIELD     = "SERVERFAILURE_NORESPONSEFIELD";

                theToInit.HITSVRFAILURES = [
                    theToInit.HITSVRFAILURE_NOTSENTMISSINGPARMS,
                    theToInit.HITSVRFAILURE_AJAX,
                    theToInit.HITSVRFAILURE_TIMEOUT,
                    theToInit.HITSVRFAILURE_REMOTEEXCEPTION,
                    theToInit.HITSVRFAILURE_NORESPONSE,
                    theToInit.HITSVRFAILURE_SESSION,
                    theToInit.HITSVRFAILURE_UNAUTHORIZED,
                    theToInit.HITSVRFAILURE_NOSUCCESS,
                    theToInit.HITSVRFAILURE_WRONGTYPE,
                    theToInit.HITSVRFAILURE_NORESPONSEFIELD
                ];





                theToInit.OPERATIONSTATUS_ERROR          = "ERROR";
                theToInit.OPERATIONSTATUS_FALTAPARAMETRO = "FALTAPARAMETRO";
                theToInit.OPERATIONSTATUS_YAEXISTE       = "YAEXISTE";
                theToInit.OPERATIONSTATUS_NOEXISTE       = "NOEXISTE";
                theToInit.OPERATIONSTATUS_NOCREADO       = "NOCREADO";




                theToInit.OPERATIONMESSAGE_ERROR          = "ERROR";
                theToInit.OPERATIONMESSAGE_FALTAPARAMETRO = "FALTAPARAMETRO";
                theToInit.OPERATIONMESSAGE_YAEXISTE       = "YAEXISTE";
                theToInit.OPERATIONMESSAGE_NOEXISTE       = "NOEXISTE";
                theToInit.OPERATIONMESSAGE_NOCREADO       = "NOCREADO";


                theToInit.OPERATIONMESSAGESBYSTATUS = {};
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_ERROR         ] = theToInit.OPERATIONMESSAGE_ERROR;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_FALTAPARAMETRO] = theToInit.OPERATIONMESSAGE_FALTAPARAMETRO;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_YAEXISTE      ] = theToInit.OPERATIONMESSAGE_YAEXISTE;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_NOEXISTE      ] = theToInit.OPERATIONMESSAGE_NOEXISTE;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_NOCREADO      ] = theToInit.OPERATIONMESSAGE_NOCREADO;




                theToInit.FIELDNAMEDOT = ".";

                theToInit.URLPATHSEPARATOR   = "/";
                theToInit.HTTPQUERYCHAR      = "?";
                theToInit.HTTPPARMASSIGN     = "=";
                theToInit.HTTPEXTRAPARMCHAR  = "&";


                theToInit.DATATYPE_FILE = "File";

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aCommon_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);



                aPrototype._v_Type = "Common";

                aPrototype._v_Prototype_Common = aPrototype;

                aPrototype._v_Module = null;

                aPrototype._v_Identifier = null;
                aPrototype._v_Recorder   = null;

                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;

                aPrototype._v_OwnRecords = null;






                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_Common( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.COMMON_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;








                var _pInit_Common = function( theTitle, theIdentifier, theRecorder) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Identifier = theIdentifier;
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }

                    this._v_Recorder   = theRecorder;
                    if( !this._v_Recorder) {
                        this._v_Recorder = theS_RecorderSvce;
                    }

                    if( this._v_Identifier) {
                        this._v_Id = this._v_Identifier.fReserveId();
                    }

                    if( !this._v_Id) {
                        this._v_Id = this.UNKNOWNID;
                    }

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    this._v_OwnRecords = [ ];
                };
                if( _pInit_Common){}/* CQT */
                aPrototype._pInit_Common = _pInit_Common;






                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;








                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = this._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;







                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;












                var fAsLogObject = function() {

                    var aLog = this.fIdentifyingWithTitleJSON();
                    if( aLog){}/* CQT */

                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;






                var fLogString = function() {

                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }

                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {
                        aLogString = "Error_while_fLogString_JSON_stringify"
                    }

                    return aLogString;
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;




                /*
                var toString = function() {
                    return this.fLogString();
                };
                aPrototype.toString = toString;
                */












                var fRecord = function( theMethodName, theEventKind, theData, theReason, theDetail) {

                    if( this._v_Recorder == null) {
                        return null;
                    }

                    var aRecord = this._v_Recorder.fCreateAndRegisterRecord( this, theMethodName, theEventKind, theData, theReason, theDetail);

                    if( this.KEEPOWNRECORDS) {
                        this._v_OwnRecords.push( aRecord);
                    }

                    return aRecord;
                };
                if( fRecord){}/* CQT */
                aPrototype.fRecord = fRecord;










                /* Deprecated. Kept in support of common type pLogRecord . Use fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to console */
                var pLogRecord = function( theRecord) {

                    if( !theRecord) {
                        return;
                    }

                    if( !this._v_Recorder) {
                        return;
                    }


                    this._v_Recorder.pLogRecord( theRecord);

                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;









                var fFirstDiff = function( theActualValue, theCheckValue) {

                    if( !( typeof theCheckValue == "undefined") &&  ( theCheckValue === this.DONOTCOMPAREVALUESYMBOL)) {
                        return null;
                    }

                    if( ( typeof theActualValue == "undefined") && ( typeof theCheckValue == "undefined") ) {
                        return null;
                    }

                    if( ( typeof theActualValue == "undefined") || ( typeof theCheckValue == "undefined") ) {
                        return this.VALUEDIFFATTOP;
                    }

                    if( ( theActualValue == null) && ( theCheckValue == null)) {
                        return null;
                    }

                    if( ( theActualValue == null) || ( theCheckValue == null)) {
                        return this.VALUEDIFFATTOP;
                    }


                    if( !( ( typeof theActualValue) == ( typeof theCheckValue))) {
                        return this.VALUEDIFFATTOP;
                    }





                    if( typeof theActualValue == "string" ) {
                        if( theCheckValue === this.DONOTCOMPAREVALUESYMBOL) {
                            return null;
                        }
                        if( !( theActualValue == theCheckValue)) {
                            return this.VALUEDIFFATTOP;
                        }
                        return null;
                    }


                    if( typeof theActualValue == "number" ) {
                        if( !( theActualValue == theCheckValue)) {
                            return this.VALUEDIFFATTOP;
                        }
                        return null;
                    }


                    if( typeof theActualValue == "boolean" ) {
                        if( !( theActualValue == theCheckValue)) {
                            return this.VALUEDIFFATTOP;
                        }
                        return null;
                    }



                    if( !( typeof theActualValue == "object" )) {
                        return this.VALUEDIFFATTOP;
                    }





                    var aOneLen   = theActualValue.length;
                    var aOtherLen = theCheckValue.length;

                    if( ( typeof aOneLen == "number") || ( typeof aOneLen == "number")) {

                        if( ( typeof aOneLen == "undefined") || ( typeof aOneLen == "undefined")) {
                            return this.VALUEDIFFATTOP;
                        }

                        if( !( aOneLen == aOtherLen)) {
                            return this.VALUEDIFFATTOP;
                        }

                        if( aOneLen) {
                            for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                                var aOneListSub   = theActualValue[ aSubIdx];
                                var aOtherListSub = theCheckValue[ aSubIdx];

                                var aSubsListDiff = this.fFirstDiff( aOneListSub, aOtherListSub);
                                if( aSubsListDiff) {

                                    if( aSubsListDiff == this.VALUEDIFFATTOP) {
                                        return [ aSubIdx];
                                    }

                                    aSubsListDiff.unshift( aSubIdx);

                                    return aSubsListDiff;
                                }
                            }
                        }
                    }




                    var someOneKeys   = Object.keys( theActualValue);
                    var someOtherKeys = Object.keys( theCheckValue);

                    if( ( typeof someOneKeys == "undefined") || ( typeof someOtherKeys == "undefined")) {
                        return this.VALUEDIFFATTOP;
                    }

                    var allKeys = someOneKeys.slice();
                    var aNumOtherKeys = someOtherKeys.length;

                    for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                        var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                        if( allKeys.indexOf( aOtherKey) < 0) {
                            allKeys.push( aOtherKey);
                        }
                    }
                    allKeys.sort();


                    var aNumKeys = allKeys.length;

                    if( aNumKeys) {
                        for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                            var aKey = allKeys[ aKeyIdx];

                            if( !theActualValue.hasOwnProperty( aKey)) {
                                return [ aKey];
                            }

                            if( !theCheckValue.hasOwnProperty( aKey)) {
                                return [ aKey];
                            }


                            var aOneSub   = theActualValue[ aKey];
                            var aOtherSub = theCheckValue[ aKey];

                            var aSubsDiff = this.fFirstDiff( aOneSub, aOtherSub);
                            if( aSubsDiff) {

                                if( aSubsDiff == this.VALUEDIFFATTOP) {
                                    return [ aKey];
                                }

                                aSubsDiff.unshift( aKey);

                                return aSubsDiff;
                            }
                        }
                    }


                    return null;
                };
                if( fFirstDiff){}/* CQT */
                aPrototype.fFirstDiff = fFirstDiff;








                return aPrototype;

            })();




            var Common_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Title = null;

                this._pInit_Common( theTitle, theIdentifier, theRecorder);
            };
            Common_Constructor.prototype = aCommon_Prototype;





            var Common_SuperPrototypeConstructor = function() {
                this._v_Prototype = aCommon_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Title     = null;
            };
            Common_SuperPrototypeConstructor.prototype = aCommon_Prototype;



            var aModule = {
                "Common_Prototype": aCommon_Prototype,
                "Common_Constructor": Common_Constructor,
                "Common_SuperPrototypeConstructor": Common_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;

            aCommon_Prototype._v_Module = aModule;




            return aModule;
        };






        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_RecorderSvce,
                theSS_CommonEventTypes
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    });
}


if( ModuleFactory_CommonType){}/* CQT */




;/*
 * prominstrexception.js
 *
 * Created @author Antonio Carrasco Valero 201410141126
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */




function ModuleFactory_ProminstrException() {

    'use strict';


    return ( function(){


        var ModuleName     = "prominstrexception";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function() {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGEXCEPTIONS = true;
            };





            var ModuleConstants = {};
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };







            var ProminstrException_Constructor = function( theRecord) {

                pgInitFromModuleConstants( this);

                this._v_Type  = "ProminstrException";
                this._v_Id    = new Date().toISOString();
                this._v_Title = "ProminstrException";

                this._v_Trace = printStackTrace();

                this._v_Record = theRecord;



                var aThis = this;



                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "type": aThis._v_Type,
                        "id":   aThis._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                this.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = aThis.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                this.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = aThis.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = aThis._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                this.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = aThis.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                this.fIdentifyingWithTitleString = fIdentifyingWithTitleString;




                var fFullTypeNameString = function() {

                    var aFullTypeName = aThis._v_Module.ModuleFullName + "." + aThis._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                this.fFullTypeNameString = fFullTypeNameString;






                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( aThis)){
                            return aThis.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = aThis.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                this.fToResultJSON = fToResultJSON;










                var fConvertValueToJSON = function() {

                    var aJSON = aThis.fIdentifyingWithTitleJSON();

                    if( aThis._v_Record) {
                        if( aThis._v_Record.fAsLogObject) {
                            aJSON[ "record"] = aThis._v_Record.fAsLogObject()
                        }
                    }


                    if( aThis._v_Trace) {
                        aJSON[ "trace"] = aThis._v_Trace;
                    }

                    return aJSON;
                };
                if( fConvertValueToJSON){}/* CQT */
                this.fConvertValueToJSON = fConvertValueToJSON;







                var toString = function() {

                    var aLog = aThis.fConvertValueToJSON();

                    var aString = null;
                    try {
                        aString = JSON.stringify( aLog);
                    }
                    catch( anException) {
                    }

                    if( aString == null) {
                        aString = aThis.fIdentifyingWithTitleString();
                    }

                    return aString;
                };
                if( toString){}/* CQT */
                this.toString = toString;






                if( this.LOGEXCEPTIONS) {
                    console.log( this.toString());
                }



            };
            ProminstrException_Constructor.prototype = Error.prototype;








            var aModule = {
                "ProminstrException_Constructor": ProminstrException_Constructor
            };

            pgInitFromModuleConstants( aModule);
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;







            return aModule;
        };



        var aService = aMod_definer();
        if( aService){}/* CQT */

        return aService;

    });
}



if( ModuleFactory_ProminstrException){}/* CQT */

















;/*
 * prominstr_type.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */




function ModuleFactory_ProminstrType() {

    'use strict';

    return ( function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CommonType,
              theSS_IdentifierType,
              theSS_q) {


        var ModuleName     = "prominstr_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CommonType,
                                     theS_IdentifierType,
                                     $q) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGDEFERREDREJECT  = true;
                theToInit.LOGDEFERREDRESOLVE = true;
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.PROMINSTRUMENT_DEFAULTTITLE = "ProminstrDefaultName";


                theToInit.DEFERREDTYPE = "Deferred";





                theToInit.RESOLUTIONKIND_AJAX                = "AJAX";
                theToInit.RESOLUTIONKIND_WITHNOTHING         = "WITHNOTHING";
                theToInit.RESOLUTIONKIND_WITHNULL            = "WITHNULL";
                theToInit.RESOLUTIONKIND_WITHSOMETHING       = "WITHSOMETHING";
                theToInit.RESOLUTIONKIND_WITHRESPONSE        = "WITHRESPONSE";
                theToInit.RESOLUTIONKIND_WITHROWS            = "WITHROWS";
                theToInit.RESOLUTIONKIND_WITHFIELDS          = "WITHFIELDS";
                theToInit.RESOLUTIONKIND_WITHSELECTIONINDEX  = "WITHSELECTIONINDEX";
                theToInit.RESOLUTIONKIND_WHENINDOUBT         = "WHENINDOUBT";

                theToInit.RESOLUTIONKINDS = [
                    theToInit.RESOLUTIONKIND_AJAX,
                    theToInit.RESOLUTIONKIND_WITHNOTHING,
                    theToInit.RESOLUTIONKIND_WITHNULL,
                    theToInit.RESOLUTIONKIND_WITHSOMETHING,
                    theToInit.RESOLUTIONKIND_WITHRESPONSE,
                    theToInit.RESOLUTIONKIND_WITHROWS,
                    theToInit.RESOLUTIONKIND_WITHFIELDS,
                    theToInit.RESOLUTIONKIND_WITHSELECTIONINDEX,
                    theToInit.RESOLUTIONKIND_WHENINDOUBT
                ];


                theToInit.REJECTIONKIND_AJAXERROR         = "AJAXERROR";
                theToInit.REJECTIONKIND_ACTIONERROR       = "ACTIONERROR";

                theToInit.REJECTIONKINDS = [
                    theToInit.REJECTIONKIND_AJAXERROR,
                    theToInit.REJECTIONKIND_ACTIONERROR
                ];

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aProminstr_Prototype = (function() {



                var aPrototype = new theS_CommonType.Common_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonType.Common_Prototype;



                aPrototype._v_Type = "Prominstr";

                aPrototype._v_Prototype_Prominstr = aPrototype;

                aPrototype._v_Module = null;


                aPrototype._v_DeferredsIdentifier = null;

                aPrototype._v_AllDeferreds      = null;
                aPrototype._v_PendingDeferreds  = null;
                aPrototype._v_ResolvedDeferreds = null;
                aPrototype._v_RejectedDeferreds = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_Prominstr( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.PROMINSTRUMENT_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_Prominstr = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_Common.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_DeferredsIdentifier = new theS_IdentifierType.Identifier_Constructor( "(For-" + this._v_Title + ")");

                    this._v_AllDeferreds      = [ ];
                    this._v_PendingDeferreds  = [ ];
                    this._v_ResolvedDeferreds = [ ];
                    this._v_RejectedDeferreds = [ ];
                };
                if( _pInit_Prominstr){}/* CQT */
                aPrototype._pInit_Prominstr = _pInit_Prominstr;














                var fNewDeferred = function( theActor) {

                    var aDeferred = $q.defer();

                    this._v_AllDeferreds.push( aDeferred);

                    this._v_PendingDeferreds.push( aDeferred);

                    this.pDecorateNewDeferred( aDeferred, theActor);

                    return aDeferred;
                };
                if( fNewDeferred){}/* CQT */
                aPrototype.fNewDeferred = fNewDeferred;









                var pDecorateNewDeferred = function( theDeferred, theActor) {

                    if( !theDeferred) {
                        return;
                    }

                    this.pDecorateNewDeferred_withFields(  theDeferred, theActor);
                    this.pDecorateNewDeferred_withMethods( theDeferred);
                };
                if( pDecorateNewDeferred){}/* CQT */
                aPrototype.pDecorateNewDeferred = pDecorateNewDeferred;







                var pDecorateNewDeferred_withFields = function( theDeferred, theActor) {

                    if( !theDeferred) {
                        return;
                    }

                    theDeferred._v_Module = this._v_Module;
                    theDeferred._v_Type   = this.DEFERREDTYPE;
                    theDeferred._v_Id     = this.fReserveDeferredId();
                   
                    theDeferred._v_Resolution       = null;
                    theDeferred._v_ResolutionMode   = null;
                    theDeferred._v_Rejection        = null;
                    theDeferred._v_RejectionMode    = null;

                    theDeferred._v_PromiserActor  = theActor;
                    theDeferred._v_ContinuerActor = theActor;

                };
                if( pDecorateNewDeferred_withFields){}/* CQT */
                aPrototype.pDecorateNewDeferred_withFields = pDecorateNewDeferred_withFields;













                var pDecorateNewDeferred_withMethods = function( theDeferred) {

                    if( !theDeferred) {
                        return;
                    }



                    var fIdentifyingJSON = function() {

                        var aModuleFullName = null;
                        if( theDeferred._v_Module) {
                            aModuleFullName = theDeferred._v_Module.ModuleFullName;
                        }

                        var aIdentifiyingJSON = {
                            "module": aModuleFullName,
                            "type": theDeferred._v_Type,
                            "id":   theDeferred._v_Id
                        };


                        if( theDeferred._v_PromiserActor && ( typeof theDeferred._v_PromiserActor.fIdentifyingJSON == "function")) {
                            aIdentifiyingJSON[ "promiserActor"] = theDeferred._v_PromiserActor.fIdentifyingJSON();
                        }

                        if( theDeferred._v_ContinuerActor && ( typeof theDeferred._v_ContinuerActor.fIdentifyingJSON == "function")) {
                            aIdentifiyingJSON[ "continuerActor"] = theDeferred._v_ContinuerActor.fIdentifyingJSON();
                        }

                        return aIdentifiyingJSON;
                    };
                    if( fIdentifyingJSON){}/* CQT */
                    theDeferred.fIdentifyingJSON = fIdentifyingJSON.bind( theDeferred);






                    var fIdentifyingString = function() {

                        var aIdentifyingJSON = theDeferred.fIdentifyingJSON();

                        var aIdentifyingString = "?";
                        try {
                            aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                        }
                        catch( anException){
                            aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                        }
                        if( aIdentifyingString){}/* CQT */

                        return aIdentifyingString;
                    };
                    if( fIdentifyingString){}/* CQT */
                    theDeferred.fIdentifyingString = fIdentifyingString.bind( theDeferred);







                    var fIdentifyingWithTitleJSON = function() {

                        var aIdentifyingJSON = theDeferred.fIdentifyingJSON();
                        if( aIdentifyingJSON){}/* CQT */

                        return aIdentifyingJSON;
                    };
                    if( fIdentifyingWithTitleJSON){}/* CQT */
                    theDeferred.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON.bind( theDeferred);






                    var fIdentifyingWithTitleString = function() {

                        var aIdentifyingJSON = theDeferred.fIdentifyingWithTitleJSON();

                        var aIdentifyingString = "?";
                        try {
                            aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                        }
                        catch( anException){
                            aIdentifyingString = "fIdentifyingWithTitleString"
                        }
                        if( aIdentifyingString){}/* CQT */
                        if( aIdentifyingString){}/* CQT */

                        return aIdentifyingString;
                    };
                    if( fIdentifyingWithTitleString){}/* CQT */
                    theDeferred.fIdentifyingWithTitleString = fIdentifyingWithTitleString.bind( theDeferred);







                    var fFullTypeNameString = function() {

                        var aFullTypeName = theDeferred._v_Module.ModuleFullName + "." + theDeferred._v_Type;


                        if( theDeferred._v_PromiserActor && ( typeof theDeferred._v_PromiserActor.fFullTypeNameString == "function")) {
                            aFullTypeName += ( " promiserActor" + theDeferred._v_PromiserActor.fFullTypeNameString());
                        }

                        if( theDeferred._v_ContinuerActor && ( typeof theDeferred._v_ContinuerActor.fIdentifyingJSON == "function")) {
                            aFullTypeName += ( " continuerActor" + theDeferred._v_ContinuerActor.fFullTypeNameString());
                        }

                        return aFullTypeName;
                    };
                    if( fFullTypeNameString){}/* CQT */
                    theDeferred.fFullTypeNameString = fFullTypeNameString.bind( theDeferred);







                    var fToResultJSON = function( theCommonObjects, theAlready) {
                        if( !( theAlready == null)) {
                            if( theAlready.fAlready( theDeferred)){
                                return theDeferred.fIdentifyingJSON();
                            }
                        }

                        var aResultJSON = theDeferred.fIdentifyingWithTitleJSON();
                        if( aResultJSON){}/* CQT */

                        return aResultJSON;
                    };
                    if( fToResultJSON){}/* CQT */
                    theDeferred.fToResultJSON = fToResultJSON.bind( theDeferred);









                    var fAsLogObject = function() {

                        var aLog = theDeferred.fIdentifyingWithTitleJSON();
                        if( aLog){}/* CQT */

                        return aLog;
                    };
                    if( fAsLogObject){}/* CQT */
                    theDeferred.fAsLogObject = fAsLogObject.bind( theDeferred);








                    var toString = function() {
                        return this.fIdentifyingWithTitleString();
                    };
                    if( toString){}/* CQT */
                    theDeferred.toString = toString.bind( theDeferred);






                };
                if( pDecorateNewDeferred_withMethods){}/* CQT */
                aPrototype.pDecorateNewDeferred_withMethods = pDecorateNewDeferred_withMethods;















                var fReserveDeferredId = function() {

                    if( !this._v_DeferredsIdentifier) {
                        return "IDwoIdentifier";
                    }

                    var aDeferredId = this._v_DeferredsIdentifier.fReserveId();
                    if( aDeferredId){}/* CQT */

                    return aDeferredId;
                };
                if( fReserveDeferredId){}/* CQT */
                aPrototype.fReserveDeferredId = fReserveDeferredId;








                var fRecordingObj = function( theActor) {
                    if( !theActor) {
                        return this;
                    }

                    if( !( typeof theActor.fRecord == "function")) {
                        return this;
                    }

                    return theActor;
                };
                if( fRecordingObj){}/* CQT */
                aPrototype.fRecordingObj = fRecordingObj;









                var fNewDeferredResolvePromise = function( theResolution, theResolutionKind, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolve( aDeferred, theResolution, theResolutionKind, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolvePromise){}/* CQT */
                aPrototype.fNewDeferredResolvePromise = fNewDeferredResolvePromise;






                
                
                



                var pDeferredResolve = function( theDeferred, theResolution, theResolutionKind, theActor) {

                    var aMethodName = "pDeferredResolve";


                    if( !theDeferred) {
                        if( this.LOGDEFERREDREJECT) {
                            this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_WARN_NODEFERREDTORESOLVE, theDeferred, theResolutionKind, theResolution)
                        }
                        return;
                    }


                    if( this._v_ResolvedDeferreds.indexOf( theDeferred) >= 0) {
                        var aRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED, theDeferred, theResolutionKind, theResolution);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( aRecord);
                        */
                        console.log( aRecord);

                    }


                    if( this._v_RejectedDeferreds.indexOf( theDeferred) >= 0) {
                        var otherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED, theDeferred, theResolutionKind, theResolution);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( otherRecord);
                        */
                        console.log( otherRecord);
                    }



                    var aPendingDeferredIndex = this._v_PendingDeferreds.indexOf( theDeferred);
                    if( aPendingDeferredIndex < 0) {
                        var anotherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING, theDeferred, theResolutionKind, theResolution);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( anotherRecord);
                        */
                        console.log( anotherRecord);
                    }




                    theDeferred._v_ContinuerActor = theActor;



                    this._v_PendingDeferreds.splice( aPendingDeferredIndex, 1);

                    this._v_ResolvedDeferreds.push( theDeferred);


                    if( !( typeof theResolution == "undefined")) {
                        theDeferred._v_Resolution = theResolution;
                    }

                    if( !( typeof theResolutionKind == "undefined")) {
                        theDeferred._v_ResolutionKind = theResolutionKind;
                    }


                    if( this.LOGDEFERREDRESOLVE) {
                        this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_RESOLVED, theDeferred, theResolutionKind, theResolution);
                    }


                    if( typeof theResolution == "undefined") {
                        if( !theDeferred.resolve) {
                            this.fRecordingObj( theActor).fRecord( aMethodName, "!!!!ERROR !theDeferred.resolve", theDeferred, theResolutionKind, theResolution);
                            return;
                        }

                        theDeferred.resolve();
                        return;
                    }

                    theDeferred.resolve( theResolution);

                };
                if( pDeferredResolve){}/* CQT */
                aPrototype.pDeferredResolve = pDeferredResolve;













                var fNewDeferredResolveWithNothingPromise = function( theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithNothing( aDeferred, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithNothingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNothingPromise = fNewDeferredResolveWithNothingPromise;





                var pDeferredResolveWithNothing = function( theDeferred, theActor) {

                    this.pDeferredResolve( theDeferred, undefined, this.RESOLUTIONKIND_WITHNOTHING, theActor);

                };
                if( pDeferredResolveWithNothing){}/* CQT */
                aPrototype.pDeferredResolveWithNothing = pDeferredResolveWithNothing;









                var fNewDeferredResolveWithSomethingPromise = function( theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithSomething( aDeferred, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithSomethingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSomethingPromise = fNewDeferredResolveWithSomethingPromise;





                var pDeferredResolveWithSomething = function( theDeferred, theActor) {

                    this.pDeferredResolve( theDeferred, undefined, this.RESOLUTIONKIND_WITHSOMETHING, theActor);

                };
                if( pDeferredResolveWithSomething){}/* CQT */
                aPrototype.pDeferredResolveWithSomething = pDeferredResolveWithSomething;







                var fNewDeferredResolveWithNullPromise = function( theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithNull( aDeferred, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithNullPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNullPromise = fNewDeferredResolveWithNullPromise;








                var pDeferredResolveWithNull = function( theDeferred, theActor) {

                    this.pDeferredResolve( theDeferred, null, this.RESOLUTIONKIND_WITHNULL, theActor);

                };
                if( pDeferredResolveWithNull){}/* CQT */
                aPrototype.pDeferredResolveWithNull = pDeferredResolveWithNull;









                var fNewDeferredResolveWithResponsePromise = function( theResponse, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithResponse( aDeferred, theResponse, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithResponsePromise = fNewDeferredResolveWithResponsePromise;







                var pDeferredResolveWithResponse = function( theDeferred, theResponse, theActor) {

                    this.pDeferredResolve( theDeferred, theResponse, this.RESOLUTIONKIND_WITHRESPONSE, theActor);

                };
                if( pDeferredResolveWithResponse){}/* CQT */
                aPrototype.pDeferredResolveWithResponse = pDeferredResolveWithResponse;












                var fNewDeferredResolveWithRowsPromise = function( theRows, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithRows( aDeferred, theRows, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithRowsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithRowsPromise = fNewDeferredResolveWithRowsPromise;







                var pDeferredResolveWithRows = function( theDeferred, theRows, theActor) {

                    this.pDeferredResolve( theDeferred, theRows, this.RESOLUTIONKIND_WITHROWS, theActor);

                };
                if( pDeferredResolveWithRows){}/* CQT */
                aPrototype.pDeferredResolveWithRows = pDeferredResolveWithRows;














                var fNewDeferredResolveWithFieldsPromise = function( theFields, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithFields( aDeferred, theFields, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithFieldsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithFieldsPromise = fNewDeferredResolveWithFieldsPromise;









                var pDeferredResolveWithFields = function( theDeferred, theFields, theActor) {

                    this.pDeferredResolve( theDeferred, theFields, this.RESOLUTIONKIND_WITHFIELDS, theActor);

                };
                if( pDeferredResolveWithFields){}/* CQT */
                aPrototype.pDeferredResolveWithFields = pDeferredResolveWithFields;












                var fNewDeferredResolveWithSelectionIndexPromise = function( theSelectionIndex, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWithSelectionIndex( aDeferred, theSelectionIndex, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWithSelectionIndexPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSelectionIndexPromise = fNewDeferredResolveWithSelectionIndexPromise;







                var pDeferredResolveWithSelectionIndex = function( theDeferred, theSelectionIndex, theActor) {

                    this.pDeferredResolve( theDeferred, theSelectionIndex, this.RESOLUTIONKIND_WITHSELECTIONINDEX, theActor);

                };
                if( pDeferredResolveWithSelectionIndex){}/* CQT */
                aPrototype.pDeferredResolveWithSelectionIndex = pDeferredResolveWithSelectionIndex;












                var fNewDeferredResolveWhenInDoubtPromise = function( theSomething, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveWhenInDoubt( aDeferred, theSomething, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveWhenInDoubtPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWhenInDoubtPromise = fNewDeferredResolveWhenInDoubtPromise;







                var pDeferredResolveWhenInDoubt = function( theDeferred, theSomething, theActor) {

                    this.pDeferredResolve( theDeferred, theSomething, this.RESOLUTIONKIND_WHENINDOUBT, theActor);

                };
                if( pDeferredResolveWhenInDoubt){}/* CQT */
                aPrototype.pDeferredResolveWhenInDoubt = pDeferredResolveWhenInDoubt;



















                var fNewPromiseAll = function( thePromises, theActor) {

                    var aPromiseAll = $q.all( thePromises);
                    if( aPromiseAll){}/* CQT */

                    return aPromiseAll;
                };
                if( fNewPromiseAll){}/* CQT */
                aPrototype.fNewPromiseAll = fNewPromiseAll;












                var fNewDeferredRejectPromise = function( theRejection, theRejectionKind, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredReject( aDeferred, theRejection, theRejectionKind, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredRejectPromise){}/* CQT */
                aPrototype.fNewDeferredRejectPromise = fNewDeferredRejectPromise;







                var pDeferredReject = function( theDeferred, theRejection, theRejectionKind, theActor) {

                    var aMethodName = "pDeferredReject";


                    if( !theDeferred) {
                        if( this.LOGDEFERREDREJECT) {
                            this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_WARN_NODEFERREDTOREJECT, theDeferred, theRejectionKind, theRejection)
                        }
                        return;
                    }


                    if( this._v_ResolvedDeferreds.indexOf( theDeferred) >= 0) {
                        var aRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED, theDeferred, theRejectionKind, theRejection);
                        /*
                         throw new theS_ProminstrException.ProminstrException_Constructor( aRecord);*/
                        console.log( aRecord);
                    }


                    if( this._v_RejectedDeferreds.indexOf( theDeferred) >= 0) {
                        var otherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED, theDeferred, theRejectionKind, theRejection);
                        /*
                         throw new theS_ProminstrException.ProminstrException_Constructor( otherRecord);*/
                        console.log( otherRecord);
                    }



                    var aPendingDeferredIndex = this._v_PendingDeferreds.indexOf( theDeferred);
                    if( aPendingDeferredIndex < 0) {
                        var anotherRecord = this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING, theDeferred, theRejectionKind, theRejection);
                        /*
                        throw new theS_ProminstrException.ProminstrException_Constructor( anotherRecord);*/
                        console.log( anotherRecord);
                    }



                    theDeferred._v_ContinuerActor = theActor;
                    

                    this._v_PendingDeferreds.splice( aPendingDeferredIndex, 1);

                    this._v_RejectedDeferreds.push( theDeferred);

                    if( !( typeof theRejection == "undefined")) {
                        theDeferred._v_Rejection = theRejection;
                    }

                    if( !( typeof theRejectionKind == "undefined")) {
                        theDeferred._v_RejectionKind = theRejectionKind;
                    }


                    if( this.LOGDEFERREDREJECT) {
                        this.fRecordingObj( theActor).fRecord( aMethodName, this.PROMINSTEVT_REJECTED, theDeferred, theRejectionKind, theRejection);
                    }


                    if( typeof theRejection == "undefined") {
                        theDeferred.reject();
                        return;
                    }

                    theDeferred.reject( theRejection);

                };
                if( pDeferredReject){}/* CQT */
                aPrototype.pDeferredReject = pDeferredReject;











                var fNewDeferredResolveAjaxResponsePromise = function( theResolution, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredResolveAjaxResponse( aDeferred, theResolution, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredResolveAjaxResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveAjaxResponsePromise = fNewDeferredResolveAjaxResponsePromise;






                var pDeferredResolveAjaxResponse = function( theDeferred, theResolution, theActor) {

                    this.pDeferredResolve( theDeferred, theResolution, this.RESOLUTIONKIND_AJAX, theActor);

                };
                if( pDeferredResolveAjaxResponse){}/* CQT */
                aPrototype.pDeferredResolveAjaxResponse = pDeferredResolveAjaxResponse;







                var fNewDeferredRejectAjaxErrorPromise = function( theRejection, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredRejectAjaxError( aDeferred, theRejection, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredRejectAjaxErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectAjaxErrorPromise = fNewDeferredRejectAjaxErrorPromise;






                var pDeferredRejectAjaxError = function( theDeferred, theRejection, theActor) {

                    this.pDeferredReject( theDeferred, theRejection, this.REJECTIONKIND_AJAXERROR, theActor);

                };
                if( pDeferredRejectAjaxError){}/* CQT */
                aPrototype.pDeferredRejectAjaxError = pDeferredRejectAjaxError;








                var fNewDeferredRejectActionErrorPromise = function( theRejection, theActor) {

                    var aDeferred = this.fNewDeferred();

                    this.pDeferredRejectActionError( aDeferred, theRejection, theActor);

                    return aDeferred.promise;
                };
                if( fNewDeferredRejectActionErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectActionErrorPromise = fNewDeferredRejectActionErrorPromise;






                var pDeferredRejectActionError = function( theDeferred, theRejection, theActor) {

                    this.pDeferredReject( theDeferred, theRejection, this.REJECTIONKIND_ACTIONERROR, theActor);

                };
                if( pDeferredRejectActionError){}/* CQT */
                aPrototype.pDeferredRejectActionError = pDeferredRejectActionError;







                return aPrototype;

            })();




            var Prominstr_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_DeferredsIdentifier = null;

                this._v_AllDeferreds      = null;
                this._v_PendingDeferreds  = null;
                this._v_ResolvedDeferreds = null;
                this._v_RejectedDeferreds = null;

                this._pInit_Prominstr( theTitle, theIdentifier, theRecorder);
            };
            Prominstr_Constructor.prototype = aProminstr_Prototype;





            var Prominstr_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;

                this._v_Prototype = aProminstr_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_DeferredsIdentifier = null;

                this._v_AllDeferreds      = null;
                this._v_PendingDeferreds  = null;
                this._v_ResolvedDeferreds = null;
                this._v_RejectedDeferreds = null;
            };
            Prominstr_SuperPrototypeConstructor.prototype = aProminstr_Prototype;



            var aModule = {
                "Prominstr_Prototype": aProminstr_Prototype,
                "Prominstr_Constructor": Prominstr_Constructor,
                "Prominstr_SuperPrototypeConstructor": Prominstr_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aProminstr_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonType,
                theSS_IdentifierType,
                /*
                theSS_ProminstrException,
                 */
                theSS_q
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_ProminstrType){}/* CQT */





;/*
 * withprominstr_type.js
 *
 * Created @author Antonio Carrasco Valero 201410141300
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_WithProminstrType() {

    'use strict';


    return ( function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonType,
          theSS_ProminstrSvce) {


        var ModuleName     = "withprominstr_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CommonType,
                                     theS_ProminstrSvce) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                }
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.WITHPROMINSTR_DEFAULTTITLE = "WithProminstrDefaultName";

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aWithProminstr_Prototype = (function() {



                var aPrototype = new theS_CommonType.Common_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonType.Common_Prototype;


                aPrototype._v_Type = "WithProminstr";

                aPrototype._v_Prototype_WithProminstr = aPrototype;


                aPrototype._v_Module = null;

                aPrototype._v_ProminstrSvce = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_WithProminstr( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.WITHPROMINSTR_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_WithProminstr = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_Common.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_ProminstrSvce = theS_ProminstrSvce;
                };
                if( _pInit_WithProminstr){}/* CQT */
                aPrototype._pInit_WithProminstr = _pInit_WithProminstr;










                var fNewDeferred = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferred( this);
                };
                if( fNewDeferred){}/* CQT */
                aPrototype.fNewDeferred = fNewDeferred;








                var fNewDeferredResolvePromise = function( theResolution, theResolutionKind) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolvePromise( theResolution, theResolutionKind, this);
                };
                if( fNewDeferredResolvePromise){}/* CQT */
                aPrototype.fNewDeferredResolvePromise = fNewDeferredResolvePromise;




                var pDeferredResolve = function( theDeferred, theResolution, theResolutionKind) {

                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolve( theDeferred, theResolution, theResolutionKind, this);
                };
                if( pDeferredResolve){}/* CQT */
                aPrototype.pDeferredResolve = pDeferredResolve;











                var fNewDeferredResolveWithNothingPromise = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWithNothingPromise( this);
                };
                if( fNewDeferredResolveWithNothingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNothingPromise = fNewDeferredResolveWithNothingPromise;




                var pDeferredResolveWithNothing = function( theDeferred) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWithNothing( theDeferred, this);
                };
                if( pDeferredResolveWithNothing){}/* CQT */
                aPrototype.pDeferredResolveWithNothing = pDeferredResolveWithNothing;












                var fNewDeferredResolveWithNullPromise = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWithNullPromise( this);

                };
                if( fNewDeferredResolveWithNullPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithNullPromise = fNewDeferredResolveWithNullPromise;




                var pDeferredResolveWithNull = function( theDeferred) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWithNull( theDeferred, this);
                };
                if( pDeferredResolveWithNull){}/* CQT */
                aPrototype.pDeferredResolveWithNull = pDeferredResolveWithNull;









                var fNewDeferredResolveWithSomethingPromise = function() {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWithSomethingPromise( this);
                };
                if( fNewDeferredResolveWithSomethingPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSomethingPromise = fNewDeferredResolveWithSomethingPromise;




                var pDeferredResolveWithSomething = function( theDeferred) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWithSomething( theDeferred, this);
                };
                if( pDeferredResolveWithSomething){}/* CQT */
                aPrototype.pDeferredResolveWithSomething = pDeferredResolveWithSomething;





                var fNewDeferredResolveWithResponsePromise = function( theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWithResponsePromise( theResponse, this);
                };
                if( fNewDeferredResolveWithResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithResponsePromise = fNewDeferredResolveWithResponsePromise;





                var pDeferredResolveWithResponse = function( theDeferred, theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWithResponse( theDeferred, theResponse, this);
                };
                if( pDeferredResolveWithResponse){}/* CQT */
                aPrototype.pDeferredResolveWithResponse = pDeferredResolveWithResponse;










                var fNewDeferredResolveWithRowsPromise = function( theRows) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWithRowsPromise( theRows, this);
                };
                if( fNewDeferredResolveWithRowsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithRowsPromise = fNewDeferredResolveWithRowsPromise;




                var pDeferredResolveWithRows = function( theDeferred, theRows) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWithRows( theDeferred, theRows, this);
                };
                if( pDeferredResolveWithRows){}/* CQT */
                aPrototype.pDeferredResolveWithRows = pDeferredResolveWithRows;








                var fNewDeferredResolveWithFieldsPromise = function( theFields) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWithFieldsPromise( theFields, this);
                };
                if( fNewDeferredResolveWithFieldsPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithFieldsPromise = fNewDeferredResolveWithFieldsPromise;




                var pDeferredResolveWithFields = function( theDeferred, theFields) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWithFields( theDeferred, theFields, this);
                };
                if( pDeferredResolveWithFields){}/* CQT */
                aPrototype.pDeferredResolveWithFields = pDeferredResolveWithFields;








                var fNewDeferredResolveWithSelectionIndexPromise = function( theSelectionIndex) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWithSelectionIndexPromise( theSelectionIndex, this);
                };
                if( fNewDeferredResolveWithSelectionIndexPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWithSelectionIndexPromise = fNewDeferredResolveWithSelectionIndexPromise;




                var pDeferredResolveWithSelectionIndex = function( theDeferred, theSelectionIndex) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWithSelectionIndex( theDeferred, theSelectionIndex, this);
                };
                if( pDeferredResolveWithSelectionIndex){}/* CQT */
                aPrototype.pDeferredResolveWithSelectionIndex = pDeferredResolveWithSelectionIndex;












                var fNewDeferredResolveWhenInDoubtPromise = function( theSomething) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveWhenInDoubtPromise( theSomething, this);
                };
                if( fNewDeferredResolveWhenInDoubtPromise){}/* CQT */
                aPrototype.fNewDeferredResolveWhenInDoubtPromise = fNewDeferredResolveWhenInDoubtPromise;







                var pDeferredResolveWhenInDoubt = function( theDeferred, theSomething) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveWhenInDoubt( theDeferred, theSomething, this);
                };
                if( pDeferredResolveWhenInDoubt){}/* CQT */
                aPrototype.pDeferredResolveWhenInDoubt = pDeferredResolveWhenInDoubt;












                var fNewDeferredRejectPromise = function( theRejection, theRejectionKind) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredRejectPromise( theRejection, theRejectionKind, this);
                };
                if( fNewDeferredRejectPromise){}/* CQT */
                aPrototype.fNewDeferredRejectPromise = fNewDeferredRejectPromise;





                var pDeferredReject = function( theDeferred, theRejection, theRejectionKind) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredReject( theDeferred, theRejection, theRejectionKind, this);

                };
                if( pDeferredReject){}/* CQT */
                aPrototype.pDeferredReject = pDeferredReject;






                var fNewDeferredResolveAjaxResponsePromise = function( theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredResolveAjaxResponsePromise( theResponse, this);
                };
                if( fNewDeferredResolveAjaxResponsePromise){}/* CQT */
                aPrototype.fNewDeferredResolveAjaxResponsePromise = fNewDeferredResolveAjaxResponsePromise;





                var pDeferredResolveAjaxResponse = function( theDeferred, theResponse) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredResolveAjaxResponse( theDeferred, theResponse, this);

                };
                if( pDeferredResolveAjaxResponse){}/* CQT */
                aPrototype.pDeferredResolveAjaxResponse = pDeferredResolveAjaxResponse;








                var fNewDeferredRejectAjaxErrorPromise = function( theRejection) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredRejectAjaxErrorPromise( theRejection, this);
                };
                if( fNewDeferredRejectAjaxErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectAjaxErrorPromise = fNewDeferredRejectAjaxErrorPromise;





                var pDeferredRejectAjaxError = function( theDeferred, theRejection) {
                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredRejectAjaxError( theDeferred, theRejection, this);

                };
                if( pDeferredRejectAjaxError){}/* CQT */
                aPrototype.pDeferredRejectAjaxError = pDeferredRejectAjaxError;






                var fNewDeferredRejectActionErrorPromise = function( theRejection) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewDeferredRejectActionErrorPromise( theRejection, this);
                };
                if( fNewDeferredRejectActionErrorPromise){}/* CQT */
                aPrototype.fNewDeferredRejectActionErrorPromise = fNewDeferredRejectActionErrorPromise;




                var pDeferredRejectActionError = function( theDeferred, theRejection) {

                    if( !this._v_ProminstrSvce) {
                        return;
                    }

                    this._v_ProminstrSvce.pDeferredRejectActionError( theDeferred, theRejection, this);
                };
                if( pDeferredRejectActionError){}/* CQT */
                aPrototype.pDeferredRejectActionError = pDeferredRejectActionError;







                var fNewPromiseAll = function( thePromises) {
                    if( !this._v_ProminstrSvce) {
                        return null;
                    }

                    return this._v_ProminstrSvce.fNewPromiseAll( thePromises, this);
                };
                if( fNewPromiseAll){}/* CQT */
                aPrototype.fNewPromiseAll = fNewPromiseAll;






                return aPrototype;

            })();




            var WithProminstr_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_WithProminstr( theTitle, theIdentifier, theRecorder);
            };
            WithProminstr_Constructor.prototype = aWithProminstr_Prototype;





            var WithProminstr_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonType.Common_Prototype;

                this._v_Prototype = aWithProminstr_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            WithProminstr_SuperPrototypeConstructor.prototype = aWithProminstr_Prototype;



            var aModule = {
                "WithProminstr_Prototype": aWithProminstr_Prototype,
                "WithProminstr_Constructor": WithProminstr_Constructor,
                "WithProminstr_SuperPrototypeConstructor": WithProminstr_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aWithProminstr_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonType,
                theSS_ProminstrSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_WithProminstrType){}/* CQT */



;/*
 * common_ctrl_type.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */



function ModuleFactory_CommonCtrlType() {

    'use strict';

    return ( function(
              theSS_typesregistry,
              theSS_Overrider,
              theSS_WithProminstrType,
              theSS_AppBaseURLSvce,
              theSS_APIBaseURLSvce,
              theSS_location) {


        var ModuleName     = "common_ctrl_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WithProminstrType,
                                     theS_AppBaseURLSvce,
                                     theS_APIBaseURLSvce,
                                     $location) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGEVENTS                        = true;

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.COMMONCTRL_DEFAULTTITLE = "CtrlDefaultName";


                theToInit.FILTERKIND_MENU      = "MENU";
                theToInit.FILTERKIND_CHECKBOX  = "CHECKBOX";
                theToInit.FILTERKIND_RADIO     = "RADIO";
                theToInit.FILTERKIND_NUMBER    = "NUMBER";
                theToInit.FILTERKIND_STRING    = "STRING";
                theToInit.FILTERKIND_DATE      = "STRING";

                theToInit.FILTERKINDS = [
                    theToInit.FILTERKIND_MENU,
                    theToInit.FILTERKIND_CHECKBOX,
                    theToInit.FILTERKIND_RADIO,
                    theToInit.FILTERKIND_NUMBER,
                    theToInit.FILTERKIND_STRING,
                    theToInit.FILTERKIND_DATE
                ];

                theToInit.UPDATEFILTERON_ROWSCHANGE      = "ROWSCHANGE";
                theToInit.UPDATEFILTERON_SELECTIONCHANGE = "SELECTIONCHANGE";

                theToInit.UPDATEFILTERONS = [
                    theToInit.UPDATEFILTERON_ROWSCHANGE,
                    theToInit.UPDATEFILTERON_SELECTIONCHANGE
                ];


                theToInit.LOCATIONPARMNAME_NAMES_SEPARATOR = ",";


                theToInit.CANDIDATESFIELDINJECTEDPARAMETER = "candidatesField";



                theToInit.LOCATIONPARMNAME_INITIALLOADGRIDNAMES  = "theInitialLoadGrids";
                theToInit.LOCATIONPARMNAME_AUTOEDITNAMES         = "theAutoEditors";
                theToInit.LOCATIONPARMNAME_AUTOSELECT            = "theAutoSelect";

                theToInit.LOCATIONPARMALLNAMES = "ALL";


                theToInit.MASTERPARMISOPTIONALSYMBOL = "optional";


                theToInit.PARENTSENTINEL = "fParentCtrl()";

                theToInit.RETRIEVALWITHPARENTSENTINEL = theToInit.PARENTSENTINEL + ".";

                theToInit.RETRIEVALTARGETSUPPLIERPARENTSENTINEL = theToInit.RETRIEVALWITHPARENTSENTINEL;

                theToInit.DOTARGETSENTINEL_WIREOWNER = "fWireOwner()";
                theToInit.DOTARGETSENTINEL_FROMCTRL  = "fFromCtrl()";
                theToInit.DOTARGETSENTINEL_TOCTRL    = "fToCtrl()";

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aCommonCtrl_Prototype = (function() {



                var aPrototype = new theS_WithProminstrType.WithProminstr_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;



                aPrototype._v_Type = "CommonCtrl";

                aPrototype._v_Prototype_CommonCtrl = aPrototype;

                aPrototype._v_Module = null;

                aPrototype._v_Scope = null;

                aPrototype._v_UIhandlersEnabled = null;

                aPrototype._v_AppBaseURL    = null;
                aPrototype._v_APIBaseURL    = null;
                aPrototype._v_LocationQuery = null;
                aPrototype._v_LocationURL  = null;

                aPrototype._v_LastActionReport = null;
                aPrototype._v_LastActionIsError = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope) {

                    this._pInit_CommonCtrl( theTitle, theIdentifier, theRecorder, theScope);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.COMMONCTRL_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_CommonCtrl = function( theTitle, theIdentifier, theRecorder, theScope) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WithProminstr.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Scope = theScope;

                    this._v_UIhandlersEnabled = true;

                    this._v_AppBaseURL    = null;
                    this._v_APIBaseURL    = null;
                    this._v_LocationQuery = null;
                    this._v_LocationURL  = null;

                    this._v_LastActionReport = null;
                    this._v_LastActionIsError = null;

                    this._pListenToDestroy();

                    if( this._v_LocationQuery){}/* CQT */
                    if( this._v_LocationURL){}/* CQT */
                    if( this._v_LastActionReport){}/* CQT */
                    if( this._v_LastActionIsError){}/* CQT */
                };
                if( _pInit_CommonCtrl){}/* CQT */
                aPrototype._pInit_CommonCtrl = _pInit_CommonCtrl;








                var _pListenToDestroy = function( ) {

                    if( !this._v_Scope) {
                        return;
                    }

                    var aThis = this;
                    this._v_Scope.$on( "$destroy", function() {
                        aThis.pDestroy();
                    });
                };
                if( _pListenToDestroy){}/* CQT */
                aPrototype._pListenToDestroy = _pListenToDestroy;







                var fWasDestroyed = function( ) {

                    var aWasDestroyed = ( this._v_Scope == null);
                    if( aWasDestroyed){}/* CQT */

                    return aWasDestroyed;
                };
                if( fWasDestroyed){}/* CQT */
                aPrototype.fWasDestroyed = fWasDestroyed;








                var pDestroy = function( ) {

                    this._v_Scope = null;

                    this._v_UIhandlersEnabled = null;

                    this._v_AppBaseURL    = null;
                    this._v_APIBaseURL    = null;
                    this._v_LocationQuery = null;
                    this._v_LocationURL  = null;

                    this._v_LastActionReport = null;
                };
                if( pDestroy){}/* CQT */
                aPrototype.pDestroy = pDestroy;






                var fUIhandlersEnabled = function() {

                    return this._v_UIhandlersEnabled;
                };
                if( fUIhandlersEnabled){}/* CQT */
                aPrototype.fUIhandlersEnabled = fUIhandlersEnabled;






                var fprDo_EnableUIhandlers = function() {

                    this._v_UIhandlersEnabled = true;

                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_EnableUIhandlers){}/* CQT */
                aPrototype.fprDo_EnableUIhandlers = fprDo_EnableUIhandlers;






                var fprDo_DisableUIhandlers = function() {

                    this._v_UIhandlersEnabled = false;

                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_DisableUIhandlers){}/* CQT */
                aPrototype.fprDo_DisableUIhandlers = fprDo_DisableUIhandlers;








                var pLogEvent = function( theEvent, theData, theDetails) {

                    if( !this.LOGEVENTS) {
                        return;
                    }


                    if( !theEvent) {
                        return;
                    }

                    this.fRecord( null, theEvent, theData, null, theDetails);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;









                var pInitFromLocationURLquery = function( ) {

                    this._v_LocationQuery = $location.search();
                };
                if( pInitFromLocationURLquery){}/* CQT */
                aPrototype.pInitFromLocationURLquery = pInitFromLocationURLquery;




                var pInitFromLocationURL = function( ) {

                    this._v_LocationURL = $location.url();
                };
                if( pInitFromLocationURL){}/* CQT */
                aPrototype.pInitFromLocationURL = pInitFromLocationURL;





                var pInitFromAppBaseURL = function( ) {

                    this._v_AppBaseURL    = theS_AppBaseURLSvce.fAppBaseURL();
                };
                if( pInitFromAppBaseURL){}/* CQT */
                aPrototype.pInitFromAppBaseURL = pInitFromAppBaseURL;






                var fAppBaseURL = function() {

                    if( this._v_AppBaseURL) {
                        return this._v_AppBaseURL;
                    }

                    this.pInitFromAppBaseURL();

                    return this._v_AppBaseURL;
                };
                if( fAppBaseURL){}/* CQT */
                aPrototype.fAppBaseURL = fAppBaseURL;






                var pInitFromAPIBaseURL = function( ) {

                    this._v_APIBaseURL    = theS_APIBaseURLSvce.fAPIBaseURL();
                };
                if( pInitFromAPIBaseURL){}/* CQT */
                aPrototype.pInitFromAPIBaseURL = pInitFromAPIBaseURL;





                var fAPIBaseURL = function() {

                    if( this._v_APIBaseURL) {
                        return this._v_APIBaseURL;
                    }

                    this.pInitFromAPIBaseURL();

                    return this._v_APIBaseURL;
                };
                if( fAPIBaseURL){}/* CQT */
                aPrototype.fAPIBaseURL = fAPIBaseURL;








                var fprDo_InitialExtra = function() {

                    this.pInitFromAppBaseURL();

                    this.pInitFromAPIBaseURL();

                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_InitialExtra){}/* CQT */
                aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;







                var fprDo_Initial = function() {

                    return this.fprDo_InitialExtra();
                };
                if( fprDo_Initial){}/* CQT */
                aPrototype.fprDo_Initial = fprDo_Initial;











                var fInspectFromTemplate = function( theLabel, theArg1, theArg2, theArg3, theArg4, theArg5, theArg6) {
                    if( theLabel || theArg1 || theArg2 || theArg3 || theArg4 || theArg5 || theArg6){}/* CQT */

                    return true;
                };
                if( fInspectFromTemplate){}/* CQT */
                aPrototype.fInspectFromTemplate = fInspectFromTemplate;






                var fNewDescribe = function( theFieldName, theFieldLabel, theParmName) {

                    return {
                        fieldName:  theFieldName,
                        fieldLabel: theFieldLabel,
                        parmName:   theParmName
                    };
                };
                if( fNewDescribe){}/* CQT */
                aPrototype.fNewDescribe = fNewDescribe;






                return aPrototype;

            })();




            var CommonCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Scope = null;

                this._v_UIhandlersEnabled = true;

                this._v_AppBaseURL    = null;
                this._v_APIBaseURL    = null;
                this._v_LocationQuery = null;
                this._v_LocationURL  = null;

                this._v_LastActionReport = null;
                this._v_LastActionIsError = null;

                this._pInit_CommonCtrl( theTitle, theIdentifier, theRecorder, theScope);
            };
            CommonCtrl_Constructor.prototype = aCommonCtrl_Prototype;





            var CommonCtrl_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = aCommonCtrl_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Scope = null;

                this._v_UIhandlersEnabled = true;

                this._v_AppBaseURL    = null;
                this._v_APIBaseURL    = null;
                this._v_LocationQuery = null;
                this._v_LocationURL  = null;

                this._v_LastActionReport = null;
                this._v_LastActionIsError = null;
            };
            CommonCtrl_SuperPrototypeConstructor.prototype = aCommonCtrl_Prototype;



            var aModule = {
                "CommonCtrl_Prototype": aCommonCtrl_Prototype,
                "CommonCtrl_Constructor": CommonCtrl_Constructor,
                "CommonCtrl_SuperPrototypeConstructor": CommonCtrl_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aCommonCtrl_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WithProminstrType,
                theSS_AppBaseURLSvce,
                theSS_APIBaseURLSvce,
                theSS_location
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}







;/*
 * common_svce_type.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */




function ModuleFactory_CommonSvceType() {

    'use strict';

    return ( function(
              theSS_typesregistry,
              theSS_Overrider,
              theSS_WithProminstrType,
              theSS_AppBaseURLSvce,
              theSS_APIBaseURLSvce) {


        var ModuleName     = "common_svce_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WithProminstrType,
                                     theS_AppBaseURLSvce,
                                     theS_APIBaseURLSvce) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                }
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.COMMONSVCE_DEFAULTTITLE = "SvceDefaultName";
            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aCommonSvce_Prototype = (function() {



                var aPrototype = new theS_WithProminstrType.WithProminstr_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;



                aPrototype._v_Type = "CommonSvce";

                aPrototype._v_Prototype_CommonSvce = aPrototype;

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_CommonSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.COMMONSVCE_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_CommonSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WithProminstr.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                };
                if( _pInit_CommonSvce){}/* CQT */
                aPrototype._pInit_CommonSvce = _pInit_CommonSvce;







                var fAppBaseURL = function() {

                    var anAppBaseURL = theS_AppBaseURLSvce.fAppBaseURL();
                    if( anAppBaseURL){}/* CQT */

                    return anAppBaseURL;
                };
                if( fAppBaseURL){}/* CQT */
                aPrototype.fAppBaseURL = fAppBaseURL;





                var fAPIBaseURL = function() {

                    var anAppBaseURL = theS_APIBaseURLSvce.fAPIBaseURL();
                    if( anAppBaseURL){}/* CQT */

                    return anAppBaseURL;
                };
                if( fAPIBaseURL){}/* CQT */
                aPrototype.fAPIBaseURL = fAPIBaseURL;









                return aPrototype;

            })();




            var CommonSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_CommonSvce( theTitle, theIdentifier, theRecorder);
            };
            CommonSvce_Constructor.prototype = aCommonSvce_Prototype;





            var CommonSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = aCommonSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            CommonSvce_SuperPrototypeConstructor.prototype = aCommonSvce_Prototype;



            var aModule = {
                "CommonSvce_Prototype": aCommonSvce_Prototype,
                "CommonSvce_Constructor": CommonSvce_Constructor,
                "CommonSvce_SuperPrototypeConstructor": CommonSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aCommonSvce_Prototype._v_Module = aModule;





            return aModule;
        };






        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WithProminstrType,
                theSS_AppBaseURLSvce,
                theSS_APIBaseURLSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }





        return anExistingModule;

    });
}








;/*
 * identifier_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_IdentifierType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider) {


        var ModuleName     = "identifier_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                }
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.IDENTIFIER_DEFAULTTITLE = "IdentifierDefaultName";
            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };











            var pgInitModuleGlobalsOn = function( theToInit) {

                if( !theToInit) {
                }
            };



            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);








            var aIdentifier_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "Identifier";

                aPrototype._v_Prototype_Identifier = aPrototype;

                aPrototype._v_Module = null;

                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;

                aPrototype._v_IdsCounter = null;







                var _pInit = function( theTitle) {

                    this._pInit_Identifier( theTitle);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _fTitleDefault = function( ) {

                   return this.IDENTIFIER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_Identifier = function( theTitle) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Id    = null;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    this._v_IdsCounter = 0;

                    this._v_Id = this.fReserveId();

                };
                if( _pInit_Identifier){}/* CQT */
                aPrototype._pInit_Identifier = _pInit_Identifier;






                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;






                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = this._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;










                var fReserveId = function() {

                    this._v_IdsCounter += 1;

                    var anId = this._v_IdsCounter;

                    return anId.toString();
                };
                if( fReserveId){}/* CQT */
                aPrototype.fReserveId = fReserveId;






                return aPrototype;

            })();




            var Identifier_Constructor = function( theTitle) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;


                this._v_Id    = null;
                this._v_Title = null;

                this._v_IdsCounter = null;

                this._pInit_Identifier( theTitle);
            };
            Identifier_Constructor.prototype = aIdentifier_Prototype;





            var Identifier_SuperPrototypeConstructor = function() {
                this._v_Prototype = aIdentifier_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Id    = null;
                this._v_Title = null;

                this._v_IdsCounter = null;
            };
            Identifier_SuperPrototypeConstructor.prototype = aIdentifier_Prototype;



            var aModule = {
                "Identifier_Prototype": aIdentifier_Prototype,
                "Identifier_Constructor": Identifier_Constructor,
                "Identifier_SuperPrototypeConstructor": Identifier_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aIdentifier_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}

if( ModuleFactory_IdentifierType){}/* CQT */







;/*
 * record.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */






function ModuleFactory_RecordType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider) {


        var ModuleName     = "record_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MAXDATASTRINGLEN = 512;
                theToInit.MAXJSONSTRINGLEN = 2048;
                theToInit.MAXJSONELEMENTSTRINGLEN = 1024;

                theToInit.MAXDATASTRINGLEN = 1024;

                theToInit.MAXLOGSTRINGLEN = 4096;

                theToInit.LIMITLOGSTRINGLEN = true;
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                }
            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };











            var pgInitModuleGlobalsOn = function( theToInit) {

                if( !theToInit) {
                }
            };



            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);










            var aRecord_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_Type = "Record";

                aPrototype._v_Prototype_Record = aPrototype;

                aPrototype._v_Module = null;


                aPrototype._v_Timestamp    = null;
                aPrototype._v_Recorder     = null;
                aPrototype._v_RecordId     = null;
                aPrototype._v_Instance     = null;
                aPrototype._v_Step         = null;
                aPrototype._v_EventKind    = null;
                aPrototype._v_Data         = null;
                aPrototype._v_Reason       = null;
                aPrototype._v_Detail       = null;






                var _pInit = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {

                    this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;




                var _pInit_Record = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {

                    this._v_Prototype = aPrototype;
                    this._v_Type = aPrototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Timestamp    = Date.now();
                    this._v_Recorder     = theRecorder;
                    this._v_RecordId     = theRecordId;
                    this._v_Instance     = theInstance;
                    this._v_Step         = theStep;
                    this._v_EventKind    = theEventKind;
                    this._v_Data         = theData;
                    this._v_Reason       = theReason;
                    this._v_Detail       = theDetail;
                };
                if( _pInit_Record){}/* CQT */
                aPrototype._pInit_Record = _pInit_Record;










                var fCopyWithoutException = function() {

                    var aCopy = new Record_Constructor(
                        this._v_Recorder,
                        this._v_RecordId,
                        this._v_Instance,
                        this._v_Step,
                        this._v_EventKind,
                        this._v_Data,
                        this._v_Reason,
                        this._v_Detail
                    );

                    aCopy._v_Timestamp = this._v_Timestamp;

                    if( aCopy._v_Data) {
                        if( aCopy._v_Data.name) {

                            if(aCopy._v_Data.name == "Error") {
                                aCopy._v_Data = null;
                            }

                            if( aCopy._v_Data.name == "ForcedException") {
                                aCopy._v_Data = null;
                            }
                        }
                    }

                    if( aCopy._v_Reason) {
                        if( aCopy._v_Reason.name) {

                            if(aCopy._v_Reason.name == "Error") {
                                aCopy._v_Reason = null;
                            }

                            if( aCopy._v_Reason.name == "ForcedException") {
                                aCopy._v_Reason = null;
                            }
                        }
                    }

                    if( aCopy._v_Detail) {
                        if( aCopy._v_Detail.name) {

                            if(aCopy._v_Detail.name == "Error") {
                                aCopy._v_Detail = null;
                            }

                            if( aCopy._v_Detail.name == "ForcedException") {
                                aCopy._v_Detail = null;
                            }
                        }
                    }

                    return aCopy;
                };
                if( fCopyWithoutException){}/* CQT */
                aPrototype.fCopyWithoutException = fCopyWithoutException;







                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;





                /*
                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_RecordId
                    };
                    return aIdentifiyingJSON;
                };
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                */




                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "recref": this._v_RecordId
                    };
                    if( aIdentifiyingJSON){}/* CQT */

                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = new Date( this._v_Timestamp).toISOString();

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;







                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;










                var toString = function() {
                    return this.fLogString();
                };
                if( toString){}/* CQT */
                aPrototype.toString = toString;








                var fLogString = function() {

                    if( !this.LIMITLOGSTRINGLEN) {
                        return this.fLogString_unlimited();
                    }

                    return this.fLogString_limited();
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;








                var fLogString_unlimited = function() {

                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }

                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}

                    return aLogString;
                };
                if( fLogString_unlimited){}/* CQT */
                aPrototype.fLogString_unlimited = fLogString_unlimited;








                var fLogString_limited = function() {

                    var aLog = this.fAsLogObject_limited();
                    if( aLog == null) {
                        return "";
                    }

                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}


                    if( aLogString.length < this.MAXLOGSTRINGLEN) {

                        return aLogString;
                    }

                    var aLogStringLimited = aLogString.slice( 0, this.MAXLOGSTRINGLEN);
                    if( aLogStringLimited){}/* CQT */

                    return aLogStringLimited;
                };
                if( fLogString_limited){}/* CQT */
                aPrototype.fLogString_limited = fLogString_limited;









                var fString_NeedsToBeLimited = function( theValue) {

                    if( theValue == null) {
                        return false;
                    }

                    if( typeof theValue == "number") {
                        return false;
                    }

                    if( !( typeof theValue == "string")) {
                        return false;
                    }

                    var aNeedsToBeLimited = theValue.length > this.MAXJSONELEMENTSTRINGLEN;
                    if( aNeedsToBeLimited){}/* CQT */

                    return aNeedsToBeLimited;
                };
                if( fString_NeedsToBeLimited){}/* CQT */
                aPrototype.fString_NeedsToBeLimited = fString_NeedsToBeLimited;









                var fString_limited = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( !( typeof theValue == "string")) {
                        return null;
                    }

                    if( theValue.length < this.MAXJSONELEMENTSTRINGLEN) {

                        return theValue;
                    }

                    var aStrLimited = theValue.slice( 0, this.MAXJSONELEMENTSTRINGLEN);
                    if( aStrLimited){}/* CQT */

                    return aStrLimited;
                };
                if( fString_limited){}/* CQT */
                aPrototype.fString_limited = fString_limited;









                var fJSONValue_orLimited = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return this.fString_limited( theValue);
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}

                    if( !( aJSONstr == null)) {
                        if( this.fString_NeedsToBeLimited( aJSONstr)) {
                            var aJSONstrLimited = this.fString_limited( aJSONstr);
                            if( aJSONstrLimited){}/* CQT */

                            return aJSONstrLimited;
                        }

                        return theValue;
                    }


                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */

                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */

                    return aStrLimited;
                };
                if( fJSONValue_orLimited){}/* CQT */
                aPrototype.fJSONValue_orLimited = fJSONValue_orLimited;










                var fAsLogObject = function() {

                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }

                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }

                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    var aStep = this.fConvertValueToJSON( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }


                    var aInstance = this.fConvertValueToJSON( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }


                    var aData = this.fConvertValueToJSON( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }

                    var aReason = this.fConvertReasonToJSON( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }

                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;











                var fAsLogObject_limited = function() {

                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }

                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }

                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    var aStep = this.fConvertValueToJSON_limited( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }


                    var aInstance = this.fConvertValueToJSON_limited( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }


                    var aData = this.fConvertValueToJSON_limited( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }

                    var aReason = this.fConvertReasonToJSON_limited( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }

                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsLogObject_limited){}/* CQT */
                aPrototype.fAsLogObject_limited = fAsLogObject_limited;











                var fConvertReasonToJSON = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return theValue;
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    if( theValue.fAsReasonChain) {
                        return theValue.fAsReasonChain();
                    }

                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }

                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }

                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }

                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }

                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertReasonToJSON){}/* CQT */
                aPrototype.fConvertReasonToJSON = fConvertReasonToJSON;










                var fConvertReasonToJSON_limited = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return theValue;
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    if( theValue.fAsReasonChain_limited) {
                        return theValue.fAsReasonChain_limited();
                    }

                    if( theValue.fAsLogObject_limited) {
                        return theValue.fAsLogObject_limited();
                    }

                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }

                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }

                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }

                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    var aStr = theValue.toString();
                    var aStr_limited = this.fString_limited( aStr);
                    if( aStr_limited){}/* CQT */

                    return aStr_limited;
                };
                if( fConvertReasonToJSON_limited){}/* CQT */
                aPrototype.fConvertReasonToJSON_limited = fConvertReasonToJSON_limited;










                var fAsReasonChain = function( theAlready) {


                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }

                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }

                    anAlready.push( this);


                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }

                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this._v_Reason.fAsReasonChain( anAlready);
                        }
                        else {
                            aReason = this.fConvertValueToJSON( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }


                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsReasonChain){}/* CQT */
                aPrototype.fAsReasonChain = fAsReasonChain;









                var fAsReasonChain_limited = function( theAlready) {


                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }

                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }

                    anAlready.push( this);


                    var aLog = {};
                    var aHasLog = false;


                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }

                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }

                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason.fAsReasonChain_limited( anAlready));
                        }
                        else {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }


                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }

                    if( !aHasLog) {
                        return null;
                    }

                    return aLog;
                };
                if( fAsReasonChain_limited){}/* CQT */
                aPrototype.fAsReasonChain_limited = fAsReasonChain_limited;









                var fConvertValueToJSON = function( theValue, theIncludeMembers) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return theValue;
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }

                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }

                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }

                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }

                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    if( theIncludeMembers) {
                        if( theValue.fToResultJSON) {
                            return theValue.fToResultJSON();
                        }

                        try {
                            var aJSONstr = JSON.stringify( theValue);
                            if( aJSONstr){}/* CQT */
                            return aJSONstr;
                        }
                        catch( anException) {}
                    }

                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertValueToJSON){}/* CQT */
                aPrototype.fConvertValueToJSON = fConvertValueToJSON;













                var fConvertValueToJSON_limited = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return theValue;
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fAsLogObject) {
                        return this.fJSONValue_orLimited( theValue.fAsLogObject());
                    }

                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }

                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString);
                    }

                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }

                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }

                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */

                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */

                    return aStrLimited;
                };
                if( fConvertValueToJSON_limited){}/* CQT */
                aPrototype.fConvertValueToJSON_limited = fConvertValueToJSON_limited;












                var fAsJSONable = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return theValue;
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }

                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }

                    if( theValue.fIdentifyingWithTitleString) {
                        return theValue.fIdentifyingWithTitleString();
                    }

                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }

                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }

                    if( theValue.fToResultJSON) {
                        return theValue.fToResultJSON();
                    }

                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}

                    if( !( aJSONstr == null)) {
                        var aJSONstrlen = aJSONstr.length;
                        if ( aJSONstrlen > this.MAXJSONSTRINGLEN) {
                            return aJSONstr.substr( 0, this.MAXJSONSTRINGLEN);
                        }
                        return theValue;
                    }

                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fAsJSONable){}/* CQT */
                aPrototype.fAsJSONable = fAsJSONable;









                var fAsJSONable_limited = function( theValue) {

                    if( theValue == null) {
                        return null;
                    }

                    if( typeof theValue == "number") {
                        return theValue;
                    }

                    if( typeof theValue == "string") {
                        return theValue;
                    }

                    if( ( theValue === this)) {
                        return "this";
                    }

                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fAsLogObject_limited) {
                        return theValue.fAsLogObject_limited();
                    }

                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }

                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }

                    if( theValue.fIdentifyingWithTitleString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleString());
                    }

                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }

                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }

                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }

                    if( theValue.fToResultJSON) {
                        return this.fJSONValue_orLimited( theValue.fToResultJSON());
                    }

                    var aJSONorStr = this.fJSONValue_orLimited( theValue);
                    if( aJSONorStr){}/* CQT */

                    return aJSONorStr;
                };
                if( fAsJSONable_limited){}/* CQT */
                aPrototype.fAsJSONable_limited = fAsJSONable_limited;












                var fRecordHasEvent_recursive = function( theExpectedEvent, theAlready) {

                    if( !theExpectedEvent) {
                        return false;
                    }

                    if( theAlready  && ( theAlready.indexOf( this) >= 0)) {
                        return false;
                    }

                    if( this._v_EventKind && ( this._v_EventKind == theExpectedEvent)) {
                        return true;
                    }

                    if( theAlready) {
                        theAlready.push( this);
                    }


                    if( this._v_Reason) {
                        if( this._v_Reason.fRecordHasEvent_recursive) {
                            return this._v_Reason.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }

                        if( this._v_Reason._v_Record) {
                            return this._v_Reason._v_Record.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }
                    }

                    return false;
                };
                if( fRecordHasEvent_recursive){}/* CQT */
                aPrototype.fRecordHasEvent_recursive = fRecordHasEvent_recursive;






                return aPrototype;
            })();




            var Record_Constructor = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module    = null;

                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;

                this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
            };
            Record_Constructor.prototype = aRecord_Prototype;





            var Record_SuperPrototypeConstructor = function() {
                this._v_Prototype = aRecord_Prototype;
                this._v_Type = null;
                this._v_Module    = null;

                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;
            };
            Record_SuperPrototypeConstructor.prototype = aRecord_Prototype;







            var aModule = {
                "Record_Prototype": aRecord_Prototype,
                "Record_Constructor": Record_Constructor,
                "Record_SuperPrototypeConstructor": Record_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecord_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_RecordType){}/* CQT */



;/*
 * recordingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051422
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */






function ModuleFactory_RecordingPolicyType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_IdentifierSvce) {


        var ModuleName     = "recordingpolicy_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_IdentifierSvce) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                }
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICY_DEFAULTTITLE = "RecordingPolicyDefaultName";
            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aRecordingPolicy_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "RecordingPolicy";

                aPrototype._v_Module = null;

                aPrototype._v_Prototype_RecordingPolicy = aPrototype;

                aPrototype._v_Identifier = null;

                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;

                aPrototype._v_Recorder    = null;





                var _pInit = function( theTitle, theIdentifier) {

                    this._pInit_RecordingPolicy( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _fTitleDefault = function( ) {

                   return this.RECORDINGPOLICY_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_RecordingPolicy = function( theTitle, theIdentifier, theRecorder) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Identifier = theIdentifier;

                    this._v_Id    = null;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }

                    this._v_Id = this._v_Identifier.fReserveId();

                    this._v_Recorder    = theRecorder;
                };
                if( _pInit_RecordingPolicy){}/* CQT */
                aPrototype._pInit_RecordingPolicy = _pInit_RecordingPolicy;







                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;






                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = this._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;












                var fRecorder = function() {

                    return this._v_Recorder;
                };
                if( fRecorder){}/* CQT */
                aPrototype.fRecorder = fRecorder;






                var pSetRecorder = function( theRecorder) {

                    this._v_Recorder = theRecorder;
                };
                if( pSetRecorder){}/* CQT */
                aPrototype.pSetRecorder = pSetRecorder;








                var fRecordRecord = function( theRecord) {

                    if( !theRecord) {
                        return null;
                    }

                    /* Subtype responsibility */
                    return null;

                };
                if( fRecordRecord){}/* CQT */
                aPrototype.fRecordRecord = fRecordRecord;















                var pRelease = function() {

                    this._v_Identifier       = null;

                    this._v_Id               = null;
                    this._v_Title            = null;

                    this._v_Recorder         = null;

                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;










                return aPrototype;

            })();




            var RecordingPolicy_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Identifier = null;

                this._v_Id         = null;
                this._v_Title      = null;

                this._v_Recorder    = null;

                this._pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicy_Constructor.prototype = aRecordingPolicy_Prototype;





            var RecordingPolicy_SuperPrototypeConstructor = function() {
                this._v_Prototype = aRecordingPolicy_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Identifier = null;

                this._v_Id         = null;
                this._v_Title      = null;

                this._v_Recorder    = null;

            };
            RecordingPolicy_SuperPrototypeConstructor.prototype = aRecordingPolicy_Prototype;



            var aModule = {
                "RecordingPolicy_Prototype": aRecordingPolicy_Prototype,
                "RecordingPolicy_Constructor": RecordingPolicy_Constructor,
                "RecordingPolicy_SuperPrototypeConstructor": RecordingPolicy_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecordingPolicy_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_IdentifierSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}






;/*
 * recordingpolicy_keepall_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





/* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
 and shall prevent reclamation of their memory by the garbage collector
 Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
 which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
 */



function ModuleFactory_RecordingPolicyKeepAllType() {

    'use strict';


    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_RecordingPolicyType) {


        var ModuleName     = "recordingpolicy_keepall_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_RecordingPolicyType) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MUSTKEEPRECORDS = true;

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICYKEEPALL_DEFAULTTITLE = "RecordingPolicyKeepAllDefaultName";

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aRecordingPolicyKeepAll_Prototype = (function() {



                var aPrototype = new theS_RecordingPolicyType.RecordingPolicy_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;


                aPrototype._v_Type = "RecordingPolicyKeepAll";

                aPrototype._v_Prototype_RecordingPolicyKeepAll = aPrototype;


                aPrototype._v_Module = null;


                aPrototype._v_MustKeepRecords = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder);

                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.RECORDINGPOLICYKEEPALL_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_RecordingPolicyKeepAll = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_MustKeepRecords = this.MUSTKEEPRECORDS;

                };
                if( _pInit_RecordingPolicyKeepAll){}/* CQT */
                aPrototype._pInit_RecordingPolicyKeepAll = _pInit_RecordingPolicyKeepAll;










                var pSetMustKeepRecords = function( theMustKeepRecords) {

                    this._v_MustKeepRecords = theMustKeepRecords ? true : false;

                };
                if( pSetMustKeepRecords){}/* CQT */
                aPrototype.pSetMustKeepRecords = pSetMustKeepRecords;




                var fMustKeepRecords = function() {

                    return this._v_MustKeepRecords;

                };
                if( fMustKeepRecords){}/* CQT */
                aPrototype.fMustKeepRecords = fMustKeepRecords;







                var fRecordRecord = function( theRecord) {

                    if( !theRecord) {
                        return null;
                    }

                    if( !this.fMustKeepRecords()) {
                        return null;
                    }


                    if( this._v_Recorder) {
                        this._v_Recorder.pKeepRecord( theRecord);
                    }

                    this.pPruneRecords();

                    var aRecordedRecordPointer = this._v_Recorder.fLastKeptRecordPointer();

                    return aRecordedRecordPointer;

                };
                if( fRecordRecord){}/* CQT */
                aPrototype.fRecordRecord = fRecordRecord;








                /* Subtype responsibility */
                var pPruneRecords = function() {

                };
                if( pPruneRecords){}/* CQT */
                aPrototype.pPruneRecords = pPruneRecords;






                return aPrototype;

            })();




            var RecordingPolicyKeepAll_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_MustKeepRecords = null;

                this._pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepAll_Constructor.prototype = aRecordingPolicyKeepAll_Prototype;





            var RecordingPolicyKeepAll_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;

                this._v_Prototype = aRecordingPolicyKeepAll_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_MustKeepRecords = null;

            };
            RecordingPolicyKeepAll_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepAll_Prototype;



            var aModule = {
                "RecordingPolicyKeepAll_Prototype":   aRecordingPolicyKeepAll_Prototype,
                "RecordingPolicyKeepAll_Constructor": RecordingPolicyKeepAll_Constructor,
                "RecordingPolicy_Constructor":        RecordingPolicyKeepAll_Constructor,
                "RecordingPolicyKeepAll_SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecordingPolicyKeepAll_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_RecordingPolicyType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_RecordingPolicyKeepAllType){}/* CQT */



;/*
 * recordingpolicy_keepsome_type.js
 *
 * Created @author Antonio Carrasco Valero 201510181424
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */







function ModuleFactory_RecordingPolicyKeepSomeType() {

    'use strict';


    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_RecordingPolicyKeepAllType) {


        var ModuleName     = "recordingpolicy_keepsome_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_RecordingPolicyKeepAllType) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MUSTKEEPRECORDSMAXNUMBER = 1000;

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE = "RecordingPolicyKeepSomeDefaultName";

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aRecordingPolicyKeepSome_Prototype = (function() {



                var aPrototype = new theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;


                aPrototype._v_Type = "RecordingPolicyKeepSome";

                aPrototype._v_Prototype_RecordingPolicyKeepSome = aPrototype;


                aPrototype._v_Module = null;


                aPrototype._v_MustKeepRecordsMaxNumber = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_RecordingPolicyKeepSome( theTitle, theIdentifier, theRecorder);

                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_RecordingPolicyKeepSome = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_MustKeepRecordsMaxNumber = this.MUSTKEEPRECORDSMAXNUMBER;

                };
                if( _pInit_RecordingPolicyKeepSome){}/* CQT */
                aPrototype._pInit_RecordingPolicyKeepSome = _pInit_RecordingPolicyKeepSome;












                var pSetMustKeepRecordsMaxNumber = function( theMustKeepRecordsMaxNumber) {

                    this._v_MustKeepRecordsMaxNumber = theMustKeepRecordsMaxNumber;

                };
                if( pSetMustKeepRecordsMaxNumber){}/* CQT */
                aPrototype.pSetMustKeepRecordsMaxNumber = pSetMustKeepRecordsMaxNumber;






                var fMustKeepRecordsMaxNumber = function() {

                    return this._v_MustKeepRecordsMaxNumber;

                };
                if( fMustKeepRecordsMaxNumber){}/* CQT */
                aPrototype.fMustKeepRecordsMaxNumber = fMustKeepRecordsMaxNumber;










                var pPruneRecords = function() {

                    this._v_Prototype_RecordingPolicyKeepAll.pPruneRecords.apply( this);


                    if( !this._v_Recorder) {
                        return;
                    }

                    this._v_Recorder.pDiscardRecordsToMaxNumber( this.fMustKeepRecordsMaxNumber());

                };
                if( pPruneRecords){}/* CQT */
                aPrototype.pPruneRecords = pPruneRecords;








                return aPrototype;

            })();




            var RecordingPolicyKeepSome_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_MustKeepRecordsMaxNumber = null;

                this._pInit_RecordingPolicyKeepSome( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepSome_Constructor.prototype = aRecordingPolicyKeepSome_Prototype;





            var RecordingPolicyKeepSome_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;

                this._v_Prototype = aRecordingPolicyKeepSome_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_MustKeepRecordsMaxNumber = null;

            };
            RecordingPolicyKeepSome_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepSome_Prototype;



            var aModule = {
                "RecordingPolicyKeepSome_Prototype":   aRecordingPolicyKeepSome_Prototype,
                "RecordingPolicyKeepSome_Constructor": RecordingPolicyKeepSome_Constructor,
                "RecordingPolicy_Constructor":         RecordingPolicyKeepSome_Constructor,
                "RecordingPolicyKeepSome_SuperPrototypeConstructor": RecordingPolicyKeepSome_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecordingPolicyKeepSome_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_RecordingPolicyKeepAllType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_RecordingPolicyKeepSomeType){}/* CQT */



;/*
 * recordingpolicy_keeprecent_type.js
 *
 * Created @author Antonio Carrasco Valero 201510171137
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */







function ModuleFactory_RecordingPolicyKeepRecentType() {

    'use strict';


    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_RecordingPolicyKeepSomeType) {


        var ModuleName     = "recordingpolicy_keeprecent_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_RecordingPolicyKeepSomeType) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MUSTKEEPRECORDSRECENTMILLIS = 5 * 60 * 1000;

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.RECORDINGPOLICYKEEPRECENT_DEFAULTTITLE = "RecordingPolicyKeepRecentDefaultName";

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aRecordingPolicyKeepRecent_Prototype = (function() {



                var aPrototype = new theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;


                aPrototype._v_Type = "RecordingPolicyKeepRecent";

                aPrototype._v_Prototype_RecordingPolicyKeepRecent = aPrototype;


                aPrototype._v_Module = null;


                aPrototype._v_MustKeepRecordsRecentMillis = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder);

                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.RECORDINGPOLICYKEEPRECENT_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_RecordingPolicyKeepRecent = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_MustKeepRecordsRecentMillis = this.MUSTKEEPRECORDSRECENTMILLIS;

                };
                if( _pInit_RecordingPolicyKeepRecent){}/* CQT */
                aPrototype._pInit_RecordingPolicyKeepRecent = _pInit_RecordingPolicyKeepRecent;










                var pSetMustKeepRecordsRecentMillis = function( theMustKeepRecordsRecentMillis) {

                    this._v_MustKeepRecordsRecentMillis = theMustKeepRecordsRecentMillis;

                };
                if( pSetMustKeepRecordsRecentMillis){}/* CQT */
                aPrototype.pSetMustKeepRecordsRecentMillis = pSetMustKeepRecordsRecentMillis;







                var fMustKeepRecordsRecentMillis = function() {

                    return this._v_MustKeepRecordsRecentMillis;

                };
                if( fMustKeepRecordsRecentMillis){}/* CQT */
                aPrototype.fMustKeepRecordsRecentMillis = fMustKeepRecordsRecentMillis;










                var pPruneRecords = function() {

                    this._v_Prototype_RecordingPolicyKeepSome.pPruneRecords.apply( this);


                    if( !this._v_Recorder) {
                        return;
                    }

                    this._v_Recorder.pDiscardRecordsOlderThan( this.fMustKeepRecordsRecentMillis());

                };
                if( pPruneRecords){}/* CQT */
                aPrototype.pPruneRecords = pPruneRecords;








                return aPrototype;

            })();




            var RecordingPolicyKeepRecent_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_MustKeepRecordsRecentMillis = null;

                this._pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepRecent_Constructor.prototype = aRecordingPolicyKeepRecent_Prototype;





            var RecordingPolicyKeepRecent_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;

                this._v_Prototype = aRecordingPolicyKeepRecent_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_MustKeepRecordsRecentMillis = null;

            };
            RecordingPolicyKeepRecent_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepRecent_Prototype;



            var aModule = {
                "RecordingPolicyKeepRecent_Prototype":   aRecordingPolicyKeepRecent_Prototype,
                "RecordingPolicyKeepRecent_Constructor": RecordingPolicyKeepRecent_Constructor,
                "RecordingPolicy_Constructor":           RecordingPolicyKeepRecent_Constructor,
                "RecordingPolicyKeepRecent_SuperPrototypeConstructor": RecordingPolicyKeepRecent_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecordingPolicyKeepRecent_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_RecordingPolicyKeepSomeType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_RecordingPolicyKeepRecentType){}/* CQT */



;/*
 * dumpingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */






function ModuleFactory_DumpingPolicyType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_IdentifierSvce,
                       theSS_ConsoleSvce) {


        var ModuleName     = "dumpingpolicy_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_ConsoleSvce) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MAYDUMPRECORDS = true;

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.DUMPINGPOLICY_DEFAULTTITLE = "DumpingPolicyDefaultName";



                theToInit.RECORDPOINTERNAME_LASTDUMPED = "RECORDPOINTERNAME_LASTDUMPED";

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aDumpingPolicy_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "DumpingPolicy";

                aPrototype._v_Module = null;

                aPrototype._v_Prototype_DumpingPolicy = aPrototype;

                aPrototype._v_Identifier = null;

                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;

                aPrototype._v_Recorder    = null;


                aPrototype._v_MayDumpRecords   = null;



                var _pInit = function( theTitle, theIdentifier) {

                    this._pInit_DumpingPolicy( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _fTitleDefault = function( ) {

                   return this.DUMPINGPOLICY_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_DumpingPolicy = function( theTitle, theIdentifier, theRecorder) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Identifier = theIdentifier;

                    this._v_Id    = null;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }

                    this._v_Id = this._v_Identifier.fReserveId();

                    this._v_Recorder    = theRecorder;

                    this._v_MayDumpRecords   = this.MAYDUMPRECORDS;

                };
                if( _pInit_DumpingPolicy){}/* CQT */
                aPrototype._pInit_DumpingPolicy = _pInit_DumpingPolicy;







                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;






                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = this._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;










                var fConsoleService = function() {

                    return theS_ConsoleSvce;

                };
                if( fConsoleService){}/* CQT */
                aPrototype.fConsoleService = fConsoleService;








                var fRecorder = function() {

                    return this._v_Recorder;
                };
                if( fRecorder){}/* CQT */
                aPrototype.fRecorder = fRecorder;






                var pSetRecorder = function( theRecorder) {

                    this._v_Recorder = theRecorder;
                };
                if( pSetRecorder){}/* CQT */
                aPrototype.pSetRecorder = pSetRecorder;









                var pSetMayDumpRecords = function( theMayDumpRecords) {

                    this._v_MayDumpRecords = theMayDumpRecords ? true : false;

                };
                if( pSetMayDumpRecords){}/* CQT */
                aPrototype.pSetMayDumpRecords = pSetMayDumpRecords;




                var fMayDumpRecords = function() {

                    return this._v_MayDumpRecords;

                };
                if( fMayDumpRecords){}/* CQT */
                aPrototype.fMayDumpRecords = fMayDumpRecords;







                var fMustDumpRecord = function( theRecord) {

                    if( !theRecord) {
                        return false;
                    }

                    if( !this.fMayDumpRecords()) {
                        return false;
                    }

                    /* Subtype responsibility */

                    return true;

                };
                if( fMustDumpRecord){}/* CQT */
                aPrototype.fMustDumpRecord = fMustDumpRecord;






                var pDumpRecord = function( theRecord, theRecordedRecordPointer) {

                    if( !theRecord) {
                        return;
                    }

                    if( !this.fMustDumpRecord( theRecord)) {
                        return;
                    }

                    var aConsoleService = this.fConsoleService();
                    if( !aConsoleService) {
                        return;
                    }


                    var aRecorder = this.fRecorder();
                    if( !aRecorder) {
                        return;
                    }


                    var aLogString = theRecord.fLogString();
                    if( !aLogString) {
                        return;
                    }

                    aConsoleService.log(  "," + aLogString);


                    aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, theRecordedRecordPointer);

                };
                if( pDumpRecord){}/* CQT */
                aPrototype.pDumpRecord = pDumpRecord;








                var pRelease = function() {

                    this._v_Identifier       = null;

                    this._v_Id               = null;
                    this._v_Title            = null;

                    this._v_Recorder         = null;

                    this._v_MayDumpRecords   = null;

                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;








                return aPrototype;

            })();




            var DumpingPolicy_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Identifier       = null;

                this._v_Id               = null;
                this._v_Title            = null;

                this._v_Recorder         = null;

                this._v_MayDumpRecords   = null;

                this._pInit_DumpingPolicy( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicy_Constructor.prototype = aDumpingPolicy_Prototype;





            var DumpingPolicy_SuperPrototypeConstructor = function() {
                this._v_Prototype = aDumpingPolicy_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Identifier       = null;

                this._v_Id               = null;
                this._v_Title            = null;

                this._v_Recorder         = null;

                this._v_MayDumpRecords   = null;

            };
            DumpingPolicy_SuperPrototypeConstructor.prototype = aDumpingPolicy_Prototype;



            var aModule = {
                "DumpingPolicy_Prototype": aDumpingPolicy_Prototype,
                "DumpingPolicy_Constructor": DumpingPolicy_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor": DumpingPolicy_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aDumpingPolicy_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_ConsoleSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}






;/*
 * dumpingpolicy_filterkinds_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_DumpingPolicyFilterKindsType() {

    'use strict';


    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_DumpingPolicyType,
                       theSS_CommonEventKinds) {


        var ModuleName     = "dumpingpolicy_filterkinds_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_DumpingPolicyType,
                                     theS_CommonEventKinds) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE = true;



                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";

                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {



                if( !theToInit) {
                    return;
                }
                theToInit.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyFilterKindsDefaultName";




                if( theToInit.EVENTSSETNOTFORCONSOLE) {

                    if( typeof theToInit.EVENTSSETNOTFORCONSOLE == "string") {
                        var anEventsSetNotForConsole = theS_CommonEventKinds[ theToInit.EVENTSSETNOTFORCONSOLE];
                        if( anEventsSetNotForConsole) {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                        }
                        else {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = [];
                        }
                    }
                    else {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTSSETNOTFORCONSOLE;
                    }
                }
                else {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_CommonEventKinds.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_CommonEventKinds.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aDumpingPolicyFilterKinds_Prototype = (function() {



                var aPrototype = new theS_DumpingPolicyType.DumpingPolicy_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicy_Prototype;


                aPrototype._v_Type = "DumpingPolicyFilterKinds";

                aPrototype._v_Prototype_DumpingPolicyFilterKinds = aPrototype;


                aPrototype._v_Module = null;


                aPrototype._v_EventKindsNotForConsole = null;


                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                if( aPrototype.EVENTKINDS_NOTFORCONSOLE) {
                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE.slice();
                }






                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_DumpingPolicyFilterKinds = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_DumpingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                };
                if( _pInit_DumpingPolicyFilterKinds){}/* CQT */
                aPrototype._pInit_DumpingPolicyFilterKinds = _pInit_DumpingPolicyFilterKinds;

















                var fSetEventKindsNotForConsole_inPrototype = function( theEventKinds) {

                    aPrototype._v_EventKindsNotForConsole = theEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }

                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_inPrototype = fSetEventKindsNotForConsole_inPrototype;





                var fFewerEventKindsForConsole_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    aPrototype._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }

                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fFewerEventKindsForConsole_inPrototype){}/* CQT */
                aPrototype.fFewerEventKindsForConsole_inPrototype = fFewerEventKindsForConsole_inPrototype;







                var fMoreEventKindsForConsole_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    aPrototype._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
                    }

                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fMoreEventKindsForConsole_inPrototype){}/* CQT */
                aPrototype.fMoreEventKindsForConsole_inPrototype = fMoreEventKindsForConsole_inPrototype;



















                var fSetEventKindsNotForConsole = function( theEventKinds) {

                    this._v_EventKindsNotForConsole = theEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole = fSetEventKindsNotForConsole;










                var fFewerEventKindsForConsole = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = this._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    this._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }

                    return this._v_EventKindsNotForConsole
                };
                if( fFewerEventKindsForConsole){}/* CQT */
                aPrototype.fFewerEventKindsForConsole = fFewerEventKindsForConsole;










                var fMoreEventKindsForConsole = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = this._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    this._v_EventKindsNotForConsole = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }

                    return this._v_EventKindsNotForConsole
                };
                if( fMoreEventKindsForConsole){}/* CQT */
                aPrototype.fMoreEventKindsForConsole = fMoreEventKindsForConsole;


















                var fMustDumpRecord = function( theRecord) {

                    if( !theRecord) {
                        return false;
                    }

                    if( !this.fMayDumpRecords()) {
                        return false;
                    }


                    var anEventKind = theRecord._v_EventKind;
                    if( !anEventKind) {
                        return false;
                    }

                    var someEventKindsNotForConsole = this.fEventKindsNotForConsole();
                    if( !someEventKindsNotForConsole) {
                        return true;
                    }

                    if( someEventKindsNotForConsole.indexOf( anEventKind) < 0) {
                        return true;
                    }

                    return false;

                };
                if( fMustDumpRecord){}/* CQT */
                aPrototype.fMustDumpRecord = fMustDumpRecord;







                var fEventKindsNotForConsole = function() {

                    /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

                    /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsNotForConsole */
                    if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {

                        if( !this._v_EventKindsNotForConsole) {
                            return null;
                        }

                        return this._v_EventKindsNotForConsole;
                    }



                    if( !this._v_EventKindsNotForConsole) {
                        return null;
                    }

                    return this._v_EventKindsNotForConsole;

                };
                if( fEventKindsNotForConsole){}/* CQT */
                aPrototype.fEventKindsNotForConsole = fEventKindsNotForConsole;





                var pRelease = function() {

                    this._v_Prototype_DumpingPolicy.pRelease.apply( this);

                    if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {
                        delete( this._v_EventKindsNotForConsole);
                    }

                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;





                return aPrototype;

            })();




            var DumpingPolicyFilterKinds_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicyFilterKinds_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

                this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyFilterKinds_Constructor.prototype = aDumpingPolicyFilterKinds_Prototype;





            var DumpingPolicyFilterKinds_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicyFilterKinds_Prototype;

                this._v_Prototype = aDumpingPolicyFilterKinds_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

            };
            DumpingPolicyFilterKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyFilterKinds_Prototype;



            var aModule = {
                "DumpingPolicyFilterKinds_Prototype":                 aDumpingPolicyFilterKinds_Prototype,
                "DumpingPolicyFilterKinds_Constructor":               DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicy_Constructor":                          DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicyFilterKinds_SuperPrototypeConstructor": DumpingPolicyFilterKinds_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aDumpingPolicyFilterKinds_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_DumpingPolicyType,
                theSS_CommonEventKinds
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_DumpingPolicyFilterKindsType){}/* CQT */



;/*
 * dumpingpolicy_triggerkinds_type.js
 *
 * Created @author Antonio Carrasco Valero 201610191704
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

 Licensed under the EUPL, Version 1.1 only (the "Licence");
 You may not use this work except in compliance with the
 Licence.
 You may obtain a copy of the Licence at:
 https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
 Unless required by applicable law or agreed to in
 writing, software distributed under the Licence is
 distributed on an "AS IS" basis,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied.
 See the Licence for the specific language governing
 permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */





function ModuleFactory_DumpingPolicyTriggerKindsType() {

    'use strict';


    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_DumpingPolicyFilterKindsType,
                       theSS_CommonEventKinds) {


        var ModuleName     = "dumpingpolicy_triggerkinds_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_DumpingPolicyFilterKindsType,
                                     theS_CommonEventKinds) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP = true;




                theToInit.EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ALL";

                theToInit.EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ERRORS";

            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {



                if( !theToInit) {
                    return;
                }



                theToInit.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyTriggerKindsDefaultName";





                if( theToInit.EVENTSSETTRIGGERINGDUMP) {

                    if( typeof theToInit.EVENTSSETTRIGGERINGDUMP == "string") {
                        var anEventsSetTriggeringDump = theS_CommonEventKinds[ theToInit.EVENTSSETTRIGGERINGDUMP];
                        if( anEventsSetTriggeringDump) {
                            theToInit.EVENTKINDS_TRIGGERINGDUMP = anEventsSetTriggeringDump.slice();
                        }
                        else {
                            theToInit.EVENTKINDS_TRIGGERINGDUMP = [];
                        }
                    }
                    else {
                        theToInit.EVENTKINDS_TRIGGERINGDUMP = theToInit.EVENTSSETTRIGGERINGDUMP;
                    }
                }
                else {
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_CommonEventKinds.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_TRIGGERINGDUMP) {
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_CommonEventKinds.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
                }

            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aDumpingPolicyTriggerKinds_Prototype = (function() {



                var aPrototype = new theS_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_Prototype;


                aPrototype._v_Type = "DumpingPolicyTriggerKinds";

                aPrototype._v_Prototype_DumpingPolicyTriggerKinds = aPrototype;


                aPrototype._v_Module = null;


                aPrototype._v_EventKindsTriggeringDump = null;


                /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */
                if( aPrototype.EVENTKINDS_TRIGGERINGDUMP) {
                    aPrototype._v_EventKindsTriggeringDump = aPrototype.EVENTKINDS_TRIGGERINGDUMP.slice();
                }






                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_DumpingPolicyTriggerKinds = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_DumpingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                };
                if( _pInit_DumpingPolicyTriggerKinds){}/* CQT */
                aPrototype._pInit_DumpingPolicyTriggerKinds = _pInit_DumpingPolicyTriggerKinds;

















                var fSetEventKindsTriggeringDump_inPrototype = function( theEventKinds) {

                    aPrototype._v_EventKindsTriggeringDump = theEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
                    }

                    return aPrototype._v_EventKindsTriggeringDump;
                };
                if( fSetEventKindsTriggeringDump_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsTriggeringDump_inPrototype = fSetEventKindsTriggeringDump_inPrototype;





                var fFewerEventKindsTriggeringDump_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }


                    var someEventKinds = aPrototype._v_EventKindsTriggeringDump.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    aPrototype._v_EventKindsTriggeringDump = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
                    }

                    return aPrototype._v_EventKindsTriggeringDump;
                };
                if( fFewerEventKindsTriggeringDump_inPrototype){}/* CQT */
                aPrototype.fFewerEventKindsTriggeringDump_inPrototype = fFewerEventKindsTriggeringDump_inPrototype;







                var fMoreEventKindsTriggeringDump_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsTriggeringDump;
                    }


                    var someEventKinds = aPrototype._v_EventKindsTriggeringDump.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    aPrototype._v_EventKindsTriggeringDump = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
                    }

                    return aPrototype._v_EventKindsTriggeringDump;
                };
                if( fMoreEventKindsTriggeringDump_inPrototype){}/* CQT */
                aPrototype.fMoreEventKindsTriggeringDump_inPrototype = fMoreEventKindsTriggeringDump_inPrototype;



















                var fSetEventKindsTriggeringDump = function( theEventKinds) {

                    this._v_EventKindsTriggeringDump = theEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }

                    return this._v_EventKindsTriggeringDump;
                };
                if( fSetEventKindsTriggeringDump){}/* CQT */
                aPrototype.fSetEventKindsTriggeringDump = fSetEventKindsTriggeringDump;










                var fFewerEventKindsTriggeringDump = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }


                    if( !this._v_EventKindsTriggeringDump) {
                        this._v_EventKindsTriggeringDump = [ ];
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }


                    var someEventKinds = this._v_EventKindsTriggeringDump.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    this._v_EventKindsTriggeringDump = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }

                    return this._v_EventKindsTriggeringDump
                };
                if( fFewerEventKindsTriggeringDump){}/* CQT */
                aPrototype.fFewerEventKindsTriggeringDump = fFewerEventKindsTriggeringDump;










                var fMoreEventKindsTriggeringDump = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }


                    if( !this._v_EventKindsTriggeringDump) {
                        this._v_EventKindsTriggeringDump = [ ];
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }


                    var someEventKinds = this._v_EventKindsTriggeringDump.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    this._v_EventKindsTriggeringDump = someEventKinds;

                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }

                    return this._v_EventKindsTriggeringDump
                };
                if( fMoreEventKindsTriggeringDump){}/* CQT */
                aPrototype.fMoreEventKindsTriggeringDump = fMoreEventKindsTriggeringDump;














                var pDumpRecord = function( theRecord, theRecordedRecordPointer) {

                    if( !theRecord) {
                        return;
                    }

                    var aConsoleService = this.fConsoleService();
                    if( !aConsoleService) {
                        return;
                    }

                    var aRecorder = this.fRecorder();
                    if( !aRecorder) {
                        return;
                    }


                    if( !this.fRecordTriggersDump( theRecord)) {
                        return;
                    }




                    var aRecordPointerLastDumped = -1;

                    var aRecordPointerLastDumpedValue = aRecorder.fGetRecordPointerNamed( this.RECORDPOINTERNAME_LASTDUMPED);

                    if( typeof aRecordPointerLastDumpedValue == "number") {

                        if( !isNaN( aRecordPointerLastDumpedValue)) {

                            if( aRecordPointerLastDumpedValue >= 0) {

                                aRecordPointerLastDumped = aRecordPointerLastDumpedValue;
                            }
                        }
                    }




                    var aFirstRecordIndexToDump = 0;
                    if( aRecordPointerLastDumped >= 0) {
                        aFirstRecordIndexToDump = aRecordPointerLastDumped + 1;
                    }

                    var someRecordsToDump = aRecorder.fKeptRecordsSlice( aFirstRecordIndexToDump);
                    if( !someRecordsToDump) {
                        return;
                    }


                    var aNumRecordsToDump = someRecordsToDump.length;
                    if( !aNumRecordsToDump) {
                        return;
                    }

                    for( var aRecordToDumpIdx=0; aRecordToDumpIdx < aNumRecordsToDump; aRecordToDumpIdx++) {
                        var aRecordToDump = someRecordsToDump[ aRecordToDumpIdx];
                        if( aRecordToDump) {

                            if( !this.fMustDumpRecord( aRecordToDump)) {
                                continue;
                            }

                            var aLogString = aRecordToDump.fLogString();
                            if( !aLogString) {
                                return;
                            }

                            aConsoleService.log(  "," + aLogString);
                        }
                    }


                    aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, null /* /* If not a record pointer in range by array index then point to last record */);

                };
                if( pDumpRecord){}/* CQT */
                aPrototype.pDumpRecord = pDumpRecord;










                var fRecordTriggersDump = function( theRecord) {

                    if( !theRecord) {
                        return false;
                    }

                    if( !this.fMayDumpRecords()) {
                        return false;
                    }


                    var anEventKind = theRecord._v_EventKind;
                    if( !anEventKind) {
                        return false;
                    }

                    var someEventKindsTriggeringDump = this.fEventKindsTriggeringDump();
                    if( !someEventKindsTriggeringDump) {
                        return false;
                    }

                    if( someEventKindsTriggeringDump.indexOf( anEventKind) < 0) {
                        return false;
                    }

                    return true;

                };
                if( fRecordTriggersDump){}/* CQT */
                aPrototype.fRecordTriggersDump = fRecordTriggersDump;







                var fEventKindsTriggeringDump = function() {

                    /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */

                    /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsTriggeringDump */
                    if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {

                        if( !this._v_EventKindsTriggeringDump) {
                            return null;
                        }

                        return this._v_EventKindsTriggeringDump;
                    }



                    if( !this._v_EventKindsTriggeringDump) {
                        return null;
                    }

                    return this._v_EventKindsTriggeringDump;

                };
                if( fEventKindsTriggeringDump){}/* CQT */
                aPrototype.fEventKindsTriggeringDump = fEventKindsTriggeringDump;





                var pRelease = function() {

                    this._v_Prototype_DumpingPolicyFilterKinds.pRelease.apply( this);

                    if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {
                        delete( this._v_EventKindsTriggeringDump);
                    }

                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;





                return aPrototype;

            })();




            var DumpingPolicyTriggerKinds_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyTriggerKinds_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */

                this._pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyTriggerKinds_Constructor.prototype = aDumpingPolicyTriggerKinds_Prototype;





            var DumpingPolicyTriggerKinds_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyTriggerKinds_Prototype;

                this._v_Prototype = aDumpingPolicyTriggerKinds_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */

            };
            DumpingPolicyTriggerKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyTriggerKinds_Prototype;



            var aModule = {
                "DumpingPolicyTriggerKinds_Prototype":                 aDumpingPolicyTriggerKinds_Prototype,
                "DumpingPolicyTriggerKinds_Constructor":               DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicy_Constructor":                           DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicyTriggerKinds_SuperPrototypeConstructor": DumpingPolicyTriggerKinds_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aDumpingPolicyTriggerKinds_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_DumpingPolicyFilterKindsType,
                theSS_CommonEventKinds
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_DumpingPolicyTriggerKindsType){}/* CQT */



;/*
 * recorder_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */






function ModuleFactory_RecorderType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_IdentifierSvce,
                       theSS_IdentifierType,
                       theSS_RecordType,
                       theSS_RecordingPolicyType,
                       theSS_DumpingPolicyType) {


        var ModuleName     = "recorder_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_IdentifierType,
                                     theS_RecordType,
                                     theS_RecordingPolicyType,
                                     theS_DumpingPolicyType) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                }
            };





            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };


            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.RECORDER_DEFAULTTITLE = "RecorderDefaultName";
            };



            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);




            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }

                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };






            var aRecorder_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "Recorder";

                aPrototype._v_Module = null;

                aPrototype._v_Prototype_Recorder = aPrototype;

                aPrototype._v_Identifier = null;

                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;

                aPrototype._v_Records    = null;
                aPrototype._v_RecordPointersByName = null;


                aPrototype._v_RecordsIdentifier    = null;

                aPrototype._v_RecordingPolicy = null;
                aPrototype._v_DumpingPolicy   = null;



                var _pInit = function( theTitle, theIdentifier) {

                    this._pInit_Recorder( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _fTitleDefault = function( ) {

                   return this.RECORDER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_Recorder = function( theTitle, theIdentifier) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Identifier = theIdentifier;

                    this._v_Id    = null;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }

                    this._v_Id = this._v_Identifier.fReserveId();

                    this._v_RecordsIdentifier = new theS_IdentifierType.Identifier_Constructor( "(For-" + this._v_Title + ")");



                    this._v_Records    = [ ];
                    this._v_RecordPointersByName = { };

                    this.pClearKeptRecords();

                    /* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
                     and shall prevent reclamation of their memory by the garbage collector
                     Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
                     which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
                     */
                    this._v_RecordingPolicy = new theS_RecordingPolicyType.RecordingPolicy_Constructor(     "(For-" + this._v_Title + ")", this._v_Identifier, this);


                    this._v_DumpingPolicy   = new theS_DumpingPolicyType.DumpingPolicy_Constructor( "(For-" + this._v_Title + ")", this._v_Identifier, this);

                };
                if( _pInit_Recorder){}/* CQT */
                aPrototype._pInit_Recorder = _pInit_Recorder;







                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;






                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = this.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = this._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;







                var fEventsToResultJSON = function( ) {

                    var someCommonObjects = null;
                    var aJSON = this.fToResultJSON( someCommonObjects);

                    var someRecordLogObjects = [];
                    aJSON.records = someRecordLogObjects;

                    if( this._v_Records) {
                        var aNumRecords = this._v_Records.length;
                        for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                            var aRecord = this._v_Records[ aRecordIdx];
                            var aRecordLogObject = aRecord.fAsLogObject();
                            if( aRecordLogObject) {
                                someRecordLogObjects.push( aRecordLogObject);
                            }
                        }
                    }

                    return aJSON;
                };
                if( fEventsToResultJSON){}/* CQT */
                aPrototype.fEventsToResultJSON = fEventsToResultJSON;













                var fRecordingPolicy = function() {

                    return this._v_RecordingPolicy;

                };
                if( fRecordingPolicy){}/* CQT */
                aPrototype.fRecordingPolicy = fRecordingPolicy;







                var pSetRecordingPolicy = function( theRecordingPolicy) {

                    if( this._v_RecordingPolicy) {
                        if( this._v_RecordingPolicy.pRelease && ( typeof this._v_RecordingPolicy.pRelease == "function")) {
                            this._v_RecordingPolicy.pRelease();
                        }
                    }

                    this._v_RecordingPolicy = theRecordingPolicy;

                    var aRecordingPolicy_recorder = null;
                    if( theRecordingPolicy.fRecorder && ( typeof theRecordingPolicy.fRecorder == "function")) {
                        aRecordingPolicy_recorder = theRecordingPolicy.fRecorder();
                    }

                    if( !aRecordingPolicy_recorder) {
                        return;
                    }

                    if( !( aRecordingPolicy_recorder === this)) {
                        theRecordingPolicy.pSetRecorder( this);
                    }

                };
                if( pSetRecordingPolicy){}/* CQT */
                aPrototype.pSetRecordingPolicy = pSetRecordingPolicy;









                var fDumpingPolicy = function() {

                    return this._v_DumpingPolicy;

                };
                if( fDumpingPolicy){}/* CQT */
                aPrototype.fDumpingPolicy = fDumpingPolicy;







                var pSetDumpingPolicy = function( theDumpingPolicy) {

                    if( this._v_DumpingPolicy) {
                        if( this._v_DumpingPolicy.pRelease && ( typeof this._v_DumpingPolicy.pRelease == "function")) {
                            this._v_DumpingPolicy.pRelease();
                        }
                    }

                    this._v_DumpingPolicy = theDumpingPolicy;

                    var aDumpingPolicy_recorder = null;
                    if( theDumpingPolicy.fRecorder && ( typeof theDumpingPolicy.fRecorder == "function")) {
                        aDumpingPolicy_recorder = theDumpingPolicy.fRecorder();
                    }

                    if( !aDumpingPolicy_recorder) {
                        return;
                    }

                    if( !( aDumpingPolicy_recorder === this)) {
                        theDumpingPolicy.pSetRecorder( this);
                    }

                };
                if( pSetDumpingPolicy){}/* CQT */
                aPrototype.pSetDumpingPolicy = pSetDumpingPolicy;











                var fCreateAndRegisterRecord = function( theInstance, theStep, theEventKind, theData, theReason, theDetails) {

                    var aRecordId = this._v_RecordsIdentifier.fReserveId();

                    var aRecord = new theS_RecordType.Record_Constructor( this, aRecordId,  theInstance, theStep, theEventKind, theData, theReason, theDetails);

                    try {
                        if( aRecord) {

                            var aRecordedRecordPointer = null;

                            if( this._v_RecordingPolicy) {
                                aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( aRecord);
                            }

                            if( this._v_DumpingPolicy) {
                                this._v_DumpingPolicy.pDumpRecord( aRecord, aRecordedRecordPointer);
                            }
                        }
                    }
                    catch( anException) {

                    }

                    return aRecord;
                };
                if( fCreateAndRegisterRecord){}/* CQT */
                aPrototype.fCreateAndRegisterRecord = fCreateAndRegisterRecord;







                /* Deprecated. Kept in support of common type pLogRecord . Use common type fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to console */
                var pLogRecord = function( theRecord) {

                    if( !theRecord) {
                        return;
                    }

                    var aRecordedRecordPointer = null;

                    if( this._v_RecordingPolicy) {
                        aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( theRecord);
                    }

                    if( this._v_DumpingPolicy) {
                        this._v_DumpingPolicy.pDumpRecord( theRecord, aRecordedRecordPointer);
                    }

                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;








                /* Invoked from RecordingPolicy fRecordRecord() */
                var pKeepRecord = function( theRecord) {

                    if( !theRecord) {
                        return;
                    }

                    if( !this._v_Records) {
                        this._v_Records = [ ];
                    }

                    this._v_Records.push( theRecord);

                };
                if( pKeepRecord){}/* CQT */
                aPrototype.pKeepRecord = pKeepRecord;








                var fKeptRecords = function() {

                    if( !this._v_Records) {
                        return null;
                    }

                    if( !( typeof this._v_Records.slice == "function")) {
                        return null;
                    }

                    return this._v_Records.slice();

                };
                if( fKeptRecords){}/* CQT */
                aPrototype.fKeptRecords = fKeptRecords;





                var fKeptRecordsSlice = function( theFirstIndex) {

                    if( theFirstIndex < 0) {
                        return this._v_Records.slice();
                    }


                    if( !this._v_Records) {
                        return [];
                    }

                    if( !( typeof this._v_Records.slice == "function")) {
                        return [];
                    }

                    return this._v_Records.slice( theFirstIndex);

                };
                if( fKeptRecordsSlice){}/* CQT */
                aPrototype.fKeptRecordsSlice = fKeptRecordsSlice;





                var pClearKeptRecords = function() {

                    if( !this._v_Records) {
                        return;
                    }

                    this._v_Records = [ ];
                    this._v_RecordPointersByName = { };

                };
                if( pClearKeptRecords){}/* CQT */
                aPrototype.pClearKeptRecords = pClearKeptRecords;







                var fLastKeptRecordPointer = function() {

                    if( !this._v_Records) {
                        return null;
                    }

                    return this._v_Records.length;

                };
                if( fLastKeptRecordPointer){}/* CQT */
                aPrototype.fLastKeptRecordPointer = fLastKeptRecordPointer;









                var pSetRecordPointer = function( theRecordPointerName, theRecordPointer /* If not a record pointer in range by array index then point to last record */ ) {

                    if( !theRecordPointerName) {
                        return;
                    }

                    if( !this._v_RecordPointersByName) {
                        this._v_RecordPointersByName = { };
                    }


                    var aRecordPointer = -1;

                    if( typeof theRecordPointer == "number") {

                        if( !isNaN( theRecordPointer)) {

                            if( theRecordPointer >= 0) {

                                if( this._v_Records) {

                                    var aNumRecords = this._v_Records.length;
                                    if( aNumRecords) {

                                        if( theRecordPointer < aNumRecords) {

                                            aRecordPointer = theRecordPointer;
                                        }
                                    }
                                }
                            }
                        }
                    }


                    if( aRecordPointer < 0) {
                        if( this._v_Records) {

                            var aNumRecords = this._v_Records.length;
                            if( aNumRecords) {

                                aRecordPointer = aNumRecords - 1;
                            }
                        }
                    }

                    this._v_RecordPointersByName[ theRecordPointerName] = aRecordPointer;

                };
                if( pSetRecordPointer){}/* CQT */
                aPrototype.pSetRecordPointer = pSetRecordPointer;






                var pClearRecordPointer = function( theRecordPointerName) {

                    if( !theRecordPointerName) {
                        return;
                    }

                    if( !this._v_RecordPointersByName) {
                        return;
                    }

                    if( !this._v_RecordPointersByName.hasOwnProperty( theRecordPointerName)) {
                        return;
                    }

                    delete this._v_RecordPointersByName[ theRecordPointerName];

                };
                if( pClearRecordPointer){}/* CQT */
                aPrototype.pClearRecordPointer = pClearRecordPointer;





                var fGetRecordPointerNamed = function( theRecordPointerName) {

                    if( !theRecordPointerName) {
                        return null;
                    }

                    return this._v_RecordPointersByName[ theRecordPointerName];

                };
                if( fGetRecordPointerNamed){}/* CQT */
                aPrototype.fGetRecordPointerNamed = fGetRecordPointerNamed;







                var pSubstractFromAllRecordPointers = function( theAmountToSubstract) {

                    if( !theAmountToSubstract || ( theAmountToSubstract < 0)) {
                        return;
                    }

                    if( !this._v_RecordPointersByName) {
                        return;
                    }

                    var someRecordPointersByNameKeys = Object.keys( this._v_RecordPointersByName);
                    if( !someRecordPointersByNameKeys) {
                        return;
                    }

                    var aNumRecordPointersByNameKeysLen = someRecordPointersByNameKeys.length;
                    if( !aNumRecordPointersByNameKeysLen) {
                        return;
                    }

                    for( var aRecordPointerByNameKeyIdx=0; aRecordPointerByNameKeyIdx < aNumRecordPointersByNameKeysLen; aRecordPointerByNameKeyIdx++) {
                        var aRecordPointerByNameKey = someRecordPointersByNameKeys[ aRecordPointerByNameKeyIdx];
                        if( aRecordPointerByNameKey) {
                            if( this._v_RecordPointersByName.hasOwnProperty( aRecordPointerByNameKey)) {

                                var aRecordPointerValue = this._v_RecordPointersByName[ aRecordPointerByNameKey];
                                if( typeof aRecordPointerValue == "number") {
                                    if( !isNaN( aRecordPointerValue)) {

                                        var anUpdatedRecordPointerValue = aRecordPointerValue - theAmountToSubstract;
                                        this._v_RecordPointersByName[ aRecordPointerByNameKey] = anUpdatedRecordPointerValue;
                                    }
                                }
                            }
                        }
                    }

                };
                if( pSubstractFromAllRecordPointers){}/* CQT */
                aPrototype.pSubstractFromAllRecordPointers = pSubstractFromAllRecordPointers;








                var pDiscardRecordsToMaxNumber = function( theMaxNumberOfRecords) {

                    if( !theMaxNumberOfRecords || ( theMaxNumberOfRecords < 0)) {
                        return;
                    }


                    if( !this._v_Records) {
                        return;
                    }

                    var aNumRecords = this._v_Records.length;
                    if( !aNumRecords) {
                        return;
                    }

                    if( aNumRecords <= theMaxNumberOfRecords) {
                        return;
                    }

                    var aFirstRecordIndexToKeep = aNumRecords - theMaxNumberOfRecords;
                    if( aFirstRecordIndexToKeep <= 0) {
                        return;
                    }

                    this._v_Records.splice( 0, aFirstRecordIndexToKeep);

                    this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);

                };
                if( pDiscardRecordsToMaxNumber){}/* CQT */
                aPrototype.pDiscardRecordsToMaxNumber = pDiscardRecordsToMaxNumber;











                var pDiscardRecordsOlderThan = function( theOlderThanMillis) {

                    if( !theOlderThanMillis || ( theOlderThanMillis < 0)) {
                        return;
                    }


                    if( !this._v_Records) {
                        return;
                    }

                    var aNumRecords = this._v_Records.length;
                    if( !aNumRecords) {
                        return;
                    }


                    var aNowMillis = new Date().getTime();
                    var anEarlierMillis = aNowMillis - theOlderThanMillis;
                    if( anEarlierMillis <= 0) {
                        return;
                    }


                    var aFirstRecordIndexToKeep = 0;

                    for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {

                        aFirstRecordIndexToKeep = aRecordIdx;

                        var aRecord = this._v_Records[ aRecordIdx];
                        if( aRecord) {

                            var aRecord_timestamp_millis = aRecord._v_Timestamp;
                            if( aRecord_timestamp_millis) {

                                if( aRecord_timestamp_millis >= anEarlierMillis) {
                                    break;
                                }
                            }
                        }
                    }


                    if( !aFirstRecordIndexToKeep) {
                        return;
                    }

                    this._v_Records.splice( 0, aFirstRecordIndexToKeep);

                    this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);

                };
                if( pDiscardRecordsOlderThan){}/* CQT */
                aPrototype.pDiscardRecordsOlderThan = pDiscardRecordsOlderThan;












                return aPrototype;

            })();




            var Recorder_Constructor = function( theTitle, theIdentifier) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Identifier = null;

                this._v_Id         = null;
                this._v_Title      = null;

                this._v_Records    = null;
                this._v_RecordPointersByName = null;

                this._v_RecordsIdentifier = null;

                this._v_RecordingPolicy = null;
                this._v_DumpingPolicy   = null;

                this._pInit_Recorder( theTitle, theIdentifier);
            };
            Recorder_Constructor.prototype = aRecorder_Prototype;





            var Recorder_SuperPrototypeConstructor = function() {
                this._v_Prototype = aRecorder_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Identifier = null;

                this._v_Id         = null;
                this._v_Title      = null;

                this._v_Records    = null;
                this._v_RecordPointersByName = null;

                this._v_RecordsIdentifier = null;

                this._v_RecordingPolicy = null;
                this._v_DumpingPolicy   = null;
            };
            Recorder_SuperPrototypeConstructor.prototype = aRecorder_Prototype;



            var aModule = {
                "Recorder_Prototype": aRecorder_Prototype,
                "Recorder_Constructor": Recorder_Constructor,
                "Recorder_SuperPrototypeConstructor": Recorder_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecorder_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_IdentifierType,
                theSS_RecordType,
                theSS_RecordingPolicyType,
                theSS_DumpingPolicyType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}







//# sourceMappingURL=prettytype.js.map