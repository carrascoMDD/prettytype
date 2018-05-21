/*
 * stacktrace_type.js
 *
 * Created @author Antonio Carrasco Valero 201805210457
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 2017 2018 Antonio Carrasco Valero
 Multi-platform Javascript EC5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angular, require, node).

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


/* can not 'use strict';
   because of arguments.callee in method run below
 */

'donotuse strict';


(function () {
    
    var ComponentName  = "prettytype";
    var ModuleName     = "stacktrace_type";
    var ModulePackages = "exceptionstack";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Stacktrace";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce){
        
        var aMod_builder = function( theS_overrider_svce) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            /* ***************************************************************
               Init here key-value pairs.
               The key values defined as Variations may be overriden by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object
                 initialised in the corresponding variables of the overrider_svce singleton.
               Any key-values in arguments, custom or overrides whose key is not defined in Variations
                 shall not be be copied into Variations.
               
               These key values are added to the module Constants.
               Therefore these key values, once initialised and possibly overriderm have an expected read-only life-cycle.

               Any key-values defined into Constants with same key as one in Variations
                 shall replace the value with same key obtained from Variations.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            /* ***************************************************************
               Just copy each key-value in ModuleVariations onto the supplied object.
               Used to fill the Module Constants object.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
            var InitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
            
            
            
            
            /* ***************************************************************
               Holder of name-values in the Module which may be overriden by overrider_svce singleton,
                and later copied into Constants.
            */
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            
            /* ***************************************************************
               Override key-values in Variations by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object .
            */
            theS_overrider_svce.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
               
               If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleConstants.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different constants,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleConstants
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
                   
                   
                   The key-values in a prototype's module ModuleConstants shall be copied onto the prototype object
                   which then hold key-value pairs for all keys in ModuleConstants, with the initial values same as in the ModuleConstants,
                   but these values may be changed in the prototype object.
                   The prototype may access each constant defined in ModuleConstants
                   as this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"] .
                   
                   All sub-prototypes defined in other modules and their instances
                   may also access this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"]
                   the key-values defined in any prototype recursively upwards the prototype hierarchy
                   and therefore to the key-values copied into each prototype object from their respective module ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
    
                theToInit.STACKTRACEDEFAULTNAME = "Console_DefaultName";
            };
            
            
            
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
            
            
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Protoype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
            
            
            
            
            
            
            
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals. Instances may access this._v_Module.ModuleGlobals
               
                If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleGlobals.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different globals,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleGlobals
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
            */
            var InitModuleGlobalsOn = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
            
            
            
            
            
            /* ***************************************************************
              Returns an object which shall be used as prototype in constructor functions
              <TypeName>_Constructor and <TypeName>_SuperPrototypeConstructor
              
              When the new prototype shall have no super-prototype, the object is created as new Object() or literal {}.
              
              When the new prototype shall have a super-prototype, the object is created by invoking a constructor function
                with the super-prototype as the function prototype.
                
              Initialise metatype variables in the prototype object.
                When accessing the prototype or its instances, these values shall override same keys in the super-prototype, if any.
                
              Invoked by ProtoFactory as the first step to produce an object fully able to serve as Prototype.
            */
            var Stacktrace_ProtoInstancer = function() {
                
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
                
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Stacktrace    = aPrototype;
                /* Shall be filled below, at the end of the function enclosing this (aMod_builder), when aModule is defined */
                aPrototype._v_Module                  = null;
                
                return aPrototype;
            };
            
            
            
            /* ***************************************************************
              In modules defining a prototype: Initialise with null value the slots for all prototype scoped properties,
                  I.e. same read value shared among all the instances.
                  The supplied object is expected to be used as prototype (assigned as prototype to constructor functions
                  <TypeName>_Constructor and <TypeName>_SuperPrototypeConstructor)
              
              Read access:
                this.<VariableName> or this["<VariableName>"]
                These variables shall be accessible for read to the prototype, its instance, sub-prototypes and their instances,
                    and the same identical value or object reference shall be obtained from all the accesses
                    unless a value with same key has been set in intermediate prototypes or the accessed object.
              
              Write access:
                On the prototype object which was supplied to this function Stacktrace_CreatePrototypeSlotsOn
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    The same identical newly set value or object reference shall shall be obtained from all the accesses
                    unless a value with same key has been set in intermediate prototypes or the accessed object.
                
                On instances of the prototype:
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    Shall create a new, slot in the instance which is different from the one in the instance prototype,
                    and may hold whichever value or reference.
                    From the moment the slot is set in the instance, the value or reference obtained by read access
                        this.<VariableName> or this["<VariableName>"]
                        shall not be the value or reference held by the prototype in a slot of same property name,
                        but the value set in the instance.
                    All other instance of the prottype still read the value in the prototype slot,
                        or their own value for same property name slot, if any set.

                On sub-prototypes and their instances:
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    Shall create a new, slot in the instance which is different from the one in the instance prototype,
                    and may hold whichever value or reference, similarly to the case "On instances of the prototype" above.
                    
              Invoked by ProtoFactory as one of the steps to produce an object fully able to serve as Prototype.
            */
            var Stacktrace_CreatePrototypeSlotsOn = function( theFrame) {
                if( !theFrame) {
                }
            };
            
            
            
            
            /* ***************************************************************
              In modules defining a prototype: Initialise with null value the slots for all instance scoped properties
                in the the supplied object.
                  I.e. the value is owned exclusively by its instance.
                  The supplied object is expected to be used as an instance
                    as created by invocation of the Constructor or SuperPrototypeConstructor
                    
              Instances of the prototype shall be able to read and write each its own values on these slots.
              
              Instances of any sub-prototypes of this prototype (thus created with SuperPrototypeConstructor):
                Shall be able to read these instance slots with exactly the same value held by the prototype object.
              
              If a property of same value is set in an instance of any sub-prototypes of this prototype:
                Shall create a new slot in the instance with whichever value or reference,
                  and the value held by the super-prototype object shall no longer be accessible
                  unless navigating up the prototypical inheritance tree through the _v_SuperPrototype property.
                
              Invoked by Constructor and SuperPrototypeConstructor and as one of the steps to produce an object
                fully able to serve as instance of this prototype, or as super-prototype for derived prototypes.
            */
            var Stacktrace_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Title    = null;
                theFrame.sourceCache = { };
            };
            
            
            
            
            
            /* ***************************************************************
              In modules defining a prototype: Initialise in the supplied object the methods in the prototype,
                and possibly other private functions or variables.
                
              Must include a definition of _pInit_<TypeName> to be used from the Constructor to initialise instances.
              
              If the prototype has a super-prototype then the _pInit_<TypeName> method shall delegate
                in the initialiser of the super-prototype_pInit_<SuperPrototype TypeName>
                
              Instances of the prototype shall be able to invoke these methods.

              Instances of any sub-prototypes of this prototype (thus created with SuperPrototypeConstructor):
                Shall be able to invoke these methods.
              
              If a sub-prototype defines a method with same name as one in any of its super-prototypes
                recursively upwards the prototypical inheritance tree,
                instances of the sub-prototype and their recursive sub-prototypes shall be able to access the
                method as implemented by the prototype most immediately implementing the function,
                and any methods of same name defined upwards the prototypical inheritance tree shall not be accesible
                unless navigating up the prototypical inheritance tree through the _v_SuperPrototype property.
                
              Invoked by ProtoFactory as the last step to produce an object fully able to serve as Prototype.
            */
            var Stacktrace_ProtoDefinerOn = function( thePrototype) {
                
                if( !thePrototype) {
                    return;
                }
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Stacktrace( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_Stacktrace = function( theTitle) {
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.STACKTRACEDEFAULTNAME;
                    }
                    
                };
                if( _pInit_Stacktrace){}/* CQT */
                thePrototype._pInit_Stacktrace = _pInit_Stacktrace;
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                thePrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                thePrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
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
                thePrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                thePrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
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
                thePrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( ( typeof theAlready.fAlready === "function") && theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                thePrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
              
    
    
                var run = function(ex, mode) {
                    
                    ex = ex || this.createException();
                    mode = mode || this.mode(ex);
                    if (mode === 'other') {
                        return this.other(arguments.callee);
                    } else {
                        return this[mode](ex);
                    }
                };
                if( run){}/* CQT */
                thePrototype.run = run;
    
    
    
                var createException = function() {
                    try {
                        this.undef();
                    } catch (e) {
                        return e;
                    }
                };
                if( createException){}/* CQT */
                thePrototype.createException = createException;
    
                
                
                
                /**
                 * Mode could differ for different exception, e.g.
                 * exceptions in Chrome may or may not have arguments or stack.
                 *
                 * @return {String} mode of operation for the exception
                 */
                var mode = function(e) {
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
                };
                if( mode){}/* CQT */
                thePrototype.mode = mode;
    
    
    
                /**
                 * Given a context, function name, and callback function, overwrite it so that it calls
                 * printStackTrace() first with a callback and then runs the rest of the body.
                 *
                 * @param {Object} context of execution (e.g. window)
                 * @param {String} functionName to instrument
                 * @param {Function} callback function to call with a stack trace on invocation
                 */
                var instrumentFunction = function(context, functionName, callback) {
                    context = context || window;
                    var original = context[functionName];
                    context[functionName] = function instrumented() {
                        callback.call(this, printStackTrace().slice(4));
                        return context[functionName]._instrumented.apply(this, arguments);
                    };
                    context[functionName]._instrumented = original;
                };
                if( instrumentFunction){}/* CQT */
                thePrototype.instrumentFunction = instrumentFunction;
    
    
    
    
    
                /**
                 * Given a context and function name of a function that has been
                 * instrumented, revert the function to it's original (non-instrumented)
                 * state.
                 *
                 * @param {Object} context of execution (e.g. window)
                 * @param {String} functionName to de-instrument
                 */
                var  deinstrumentFunction = function(context, functionName) {
                    if (context[functionName].constructor === Function &&
                        context[functionName]._instrumented &&
                        context[functionName]._instrumented.constructor === Function) {
                        context[functionName] = context[functionName]._instrumented;
                    }
                };
                if( deinstrumentFunction){}/* CQT */
                thePrototype.deinstrumentFunction = deinstrumentFunction;
                
                
                
                
                /**
                 * Given an Error object, return a formatted Array based on Chrome's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var chrome = function(e) {
                    return (e.stack + '\n')
                        .replace(/^[\s\S]+?\s+at\s+/, ' at ') // remove message
                        .replace(/^\s+(at eval )?at\s+/gm, '') // remove 'at' and indentation
                        .replace(/^([^\(]+?)([\n$])/gm, '{anonymous}() ($1)$2')
                        .replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}() ($1)')
                        .replace(/^(.+) \((.+)\)$/gm, '$1@$2')
                        .split('\n')
                        .slice(0, -1);
                };
                if( chrome){}/* CQT */
                thePrototype.chrome = chrome;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on Safari's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var safari = function(e) {
                    return e.stack.replace(/\[native code\]\n/m, '')
                        .replace(/^(?=\w+Error\:).*$\n/m, '')
                        .replace(/^@/gm, '{anonymous}()@')
                        .split('\n');
                };
                if( safari){}/* CQT */
                thePrototype.safari = safari;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on IE's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var ie = function(e) {
                    return e.stack
                        .replace(/^\s*at\s+(.*)$/gm, '$1')
                        .replace(/^Anonymous function\s+/gm, '{anonymous}() ')
                        .replace(/^(.+)\s+\((.+)\)$/gm, '$1@$2')
                        .split('\n')
                        .slice(1);
                };
                if( ie){}/* CQT */
                thePrototype.ie = ie;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on Firefox's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var firefox = function(e) {
                    return e.stack.replace(/(?:\n@:0)?\s+$/m, '')
                        .replace(/^(?:\((\S*)\))?@/gm, '{anonymous}($1)@')
                        .split('\n');
                };
                if( firefox){}/* CQT */
                thePrototype.firefox = firefox;
    
    
    
    
    
                var opera11 = function(e) {
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
                };
                if( opera11){}/* CQT */
                thePrototype.opera11 = opera11;
    
    
    
    
    
                var opera10b = function(e) {
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
                };
                if( opera10b){}/* CQT */
                thePrototype.opera10b = opera10b;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on Opera 10's stacktrace string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var opera10a = function(e) {
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
                };
                if( opera10a){}/* CQT */
                thePrototype.opera10a = opera10a;
    
    
    
    
    
                // Opera 7.x-9.2x only!
                var opera9 = function(e) {
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
                };
                if( opera9){}/* CQT */
                thePrototype.opera9 = opera9;
    
    
    
    
    
                // Safari 5-, IE 9-, and others
                var other = function(curr) {
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
                };
                if( other){}/* CQT */
                thePrototype.other = other;
    
    
    
    
    
                /**
                 * Given arguments array as a String, substituting type names for non-string types.
                 *
                 * @param {Arguments,Array} args
                 * @return {String} stringified arguments
                 */
                var stringifyArguments = function(args) {
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
                };
                if( stringifyArguments){}/* CQT */
                thePrototype.stringifyArguments = stringifyArguments;
    
    
    
    
    
    
    
                /**
                 * @return {String} the text from a given URL
                 */
                var ajax = function(url) {
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
                };
                if( ajax){}/* CQT */
                thePrototype.ajax = ajax;
                
                
                
    
                /**
                 * Try XHR methods in order and store XHR factory.
                 *
                 * @return {XMLHttpRequest} XHR function or equivalent
                 */
                var createXMLHTTPObject = function() {
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
                };
                if( createXMLHTTPObject){}/* CQT */
                thePrototype.createXMLHTTPObject = createXMLHTTPObject;
                
                
    
                /**
                 * Given a URL, check if it is in the same domain (so we can get the source
                 * via Ajax).
                 *
                 * @param url {String} source url
                 * @return {Boolean} False if we need a cross-domain request
                 */
                var isSameDomain = function(url) {
                    return typeof location !== "undefined" && url.indexOf(location.hostname) !== -1; // location may not be defined, e.g. when running from nodejs.
                };
                if( isSameDomain){}/* CQT */
                thePrototype.isSameDomain = isSameDomain;
    
    
    
    
    
                /**
                 * Get source code from given URL if in the same domain.
                 *
                 * @param url {String} JS source URL
                 * @return {Array} Array of source code lines
                 */
                var getSource = function(url) {
                    // TODO reuse source from script tags?
                    if (!(url in this.sourceCache)) {
                        this.sourceCache[url] = this.ajax(url).split('\n');
                    }
                    return this.sourceCache[url];
                };
                if( getSource){}/* CQT */
                thePrototype.getSource = getSource;
    
    
    
    
    
                var guessAnonymousFunctions = function(stack) {
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
                };
                if( guessAnonymousFunctions){}/* CQT */
                thePrototype.guessAnonymousFunctions = guessAnonymousFunctions;
    
    
    
    
    
                var guessAnonymousFunction = function(url, lineNo, charNo) {
                    var ret;
                    try {
                        ret = this.findFunctionName(this.getSource(url), lineNo);
                    } catch (e) {
                        ret = 'getSource failed with url: ' + url + ', exception: ' + e.toString();
                    }
                    return ret;
                };
                if( guessAnonymousFunction){}/* CQT */
                thePrototype.guessAnonymousFunction = guessAnonymousFunction;
    
    
    
    
    
                var findFunctionName = function(source, lineNo) {
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
                };
                if( findFunctionName){}/* CQT */
                thePrototype.findFunctionName = findFunctionName;
    
    
            };
            
            
            
            
            
            
            
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Stacktrace_ProtoFactory = function() {
                
                /* Create object to serve as prototype */
                var aPrototype = Stacktrace_ProtoInstancer();
                
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
                
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Stacktrace_CreatePrototypeSlotsOn( aPrototype);
                
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Stacktrace_ProtoDefinerOn( aPrototype);
                
                return aPrototype;
            };
            
            
            
            
            
            /* ***************************************************************
              Object to serve as prototype
            */
            var aStacktrace_Prototype = Stacktrace_ProtoFactory();
            
            
            
            
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
                
              See examples of recursive initialisation in modules
                identifying / dumpingpolicy and recordingpolicy
            */
            var Stacktrace_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = aStacktrace_Prototype;
                
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Stacktrace_CreateInstanceSlotsOn( this);
                
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Stacktrace( theTitle);
            };
            Stacktrace_Constructor.prototype = aStacktrace_Prototype;
            
            
            
            
            
            
            
            /* ***************************************************************
              Create a new instance object of the prototype, expected to be used as a super-prototype,
                but not fully initialised, just the instance slots with null values.
                
              Values for the slots shall be initialised during the _pInit_Xxxx of instances of sub-prototypes
                  by delegation into the super-prototype _pInit_Xxx,
                  and recursively upwards in the prototype inheritance tree
                  through the _v_SuperPrototype chain.
              
              See examples of deep sub-prototypes and recursive initialisation in modules
                identifying / dumpingpolicy and recordingpolicy
            */
            var Stacktrace_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Stacktrace_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aStacktrace_Prototype;
                
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Stacktrace_CreateInstanceSlotsOn( this);
            };
            Stacktrace_SuperPrototypeConstructor.prototype = aStacktrace_Prototype;
            
            
            
            
            
            /* ***************************************************************
              Object exposed as Module, with key-values for all members published in the module.
              
              Some entries are published to facilitate hacking access to portions of logic in the module,
                  to be able to use for other purposes (mixins come into mind) i.e. constants initialiser,
                  and if the module defines any prototype: full and partial prototype creators
                  and initialisers of the slots structure of the prototype.
            */
            var aModule = {
                "_v_Kind":                                 "module",
                "ComponentName":                           ComponentName,
                "ModuleName":                              ModuleName,
                "ModulePackages":                          ModulePackages,
                "ModuleFullName":                          ModuleFullName,
                "ModuleConstants":                         ModuleConstants,
                "ModuleGlobals":                           ModuleGlobals,
                
                "InitFromModuleVariations":                InitFromModuleVariations,
                "InitFromModuleConstants":                 InitFromModuleConstants,
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn,
                
                "TypeName":                                TypeName,
                
                "Stacktrace_ProtoInstancer":               Stacktrace_ProtoInstancer,
                "Stacktrace_ProtoDefinerOn":               Stacktrace_ProtoDefinerOn,
                "Stacktrace_ProtoFactory":                 Stacktrace_ProtoFactory,
                "Stacktrace_Constructor":                  Stacktrace_Constructor,
                "Stacktrace_SuperPrototypeConstructor":    Stacktrace_SuperPrototypeConstructor,
                "Stacktrace_CreatePrototypeSlotsOn":       Stacktrace_CreatePrototypeSlotsOn,
                "Stacktrace_CreateInstanceSlotsOn":        Stacktrace_CreateInstanceSlotsOn,
                
                "ProtoInstancer":                          Stacktrace_ProtoInstancer,
                "ProtoDefinerOn":                          Stacktrace_ProtoDefinerOn,
                "ProtoFactory":                            Stacktrace_ProtoFactory,
                "Constructor":                             Stacktrace_Constructor,
                "SuperPrototypeConstructor":               Stacktrace_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Stacktrace_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Stacktrace_CreateInstanceSlotsOn,
                
                "Stacktrace_Prototype":                    aStacktrace_Prototype,
                "Prototype":                               aStacktrace_Prototype
            };
            
            /* ***************************************************************
              Add to the Module Key-Values from Constants (and Variations, if any) so they are exposed as published members.
              Beware: The value for any key in Constants (and Variations, if any)
                shall override any other slot value in the Module with same key, if such exists,
                including any infrastructural or conventional entries.
            */
            InitFromModuleConstants( aModule);
            
            
            /* ***************************************************************
              The prototype and its instances may access the module object and all its published members.
              The sub-prototypes and their instances may also reach this module through the _v_SuperPrototype chain.
            */
            aStacktrace_Prototype._v_Module = aModule;
            
            
            
            /* ***************************************************************
              Return defined module.
            */
            return aModule;
        };
        
        
        
        
        /* ***************************************************************
          Make sure that the module is built only once, and that the same instance is supplied anytime
          the module is required, as i.e. to resolve a dependency for another module.
          Attempt to retrieve a module with same name already registered in the typesregistry_svce singleton.
          If no such module exists then build the module and register it in the typesregistry_svce singleton.
        */
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
            
            var aModule = aMod_builder(
                theSS_overrider_svce
            );
            
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
            
            anExistingModule = aModule;
            
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
        
        
        /* ***************************************************************
         Return the module which was already built and registered in typesregistry_svce singleton, or just built.
        */
        return anExistingModule;
    };
    
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../typesregistry/typesregistry_svce');
            var aM_overrider     = require('../overrider/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_svce"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






