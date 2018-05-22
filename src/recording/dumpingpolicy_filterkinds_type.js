/*
 * dumpingpolicy_filterkinds_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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

'use strict';

(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "dumpingpolicy_filterkinds_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type,
                                   theSS_DumpingPolicyType,
                                   theSS_EventKinds_Common) {
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_DumpingPolicyType,
                                     theS_EventKinds_Common) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE = false;
                
                
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";
                
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";
                
            };
            
            
            
            
            
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
            
            
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_overrider_type.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
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
                theToInit.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyFilterKindsDefaultName";
                
                
                
                
                if( theToInit.EVENTSSETNOTFORCONSOLE) {
                    
                    if( typeof theToInit.EVENTSSETNOTFORCONSOLE === "string") {
                        var anEventsSetNotForConsole = theS_EventKinds_Common[ theToInit.EVENTSSETNOTFORCONSOLE];
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
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_EventKinds_Common.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_EventKinds_Common.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Prototype object with the key-value pairs in Constants.
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
    
    
    
    
    
    
            var aDumpingPolicyFilterKinds_Prototype = (function() {
                

                var aPrototype = new theS_DumpingPolicyType.DumpingPolicy_SuperPrototypeConstructor();
    
                InitFromModuleConstants( aPrototype);
    
                aPrototype._v_IsPrototype = true;
                aPrototype._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicy_Prototype;
                
                aPrototype._v_Type = "DumpingPolicyFilterKinds";
    
                aPrototype._v_Module = null;
    
                aPrototype._v_Prototype_DumpingPolicyFilterKinds = aPrototype;
                
                
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
                    
                    // this._v_Prototype = aPrototype;
                    // this._v_Type      = this._v_Prototype._v_Type;
                    // this._v_Module    = this._v_Prototype._v_Module;
                    
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
                
                
                
                
                
                var fFewerEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
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
                if( fFewerEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fFewerEventKindsNotForConsole_inPrototype = fFewerEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                
                
                var fMoreEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
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
                if( fMoreEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fMoreEventKindsNotForConsole_inPrototype = fMoreEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fSetEventKindsNotForConsole = function( theEventKinds) {
                    
                    this._v_EventKindsNotForConsole = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
                    }
                    
                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole = fSetEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                var fFewerEventKindsNotForConsole = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }
                    
                    
                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
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
                if( fFewerEventKindsNotForConsole){}/* CQT */
                aPrototype.fFewerEventKindsNotForConsole = fFewerEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                var fMoreEventKindsNotForConsole = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }
                    
                    
                    if( !this._v_EventKindsNotForConsole) {
                        this._v_EventKindsNotForConsole = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
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
                if( fMoreEventKindsNotForConsole){}/* CQT */
                aPrototype.fMoreEventKindsNotForConsole = fMoreEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
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
                    if( null){}/* CQT */
    
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
    
                this._v_IsPrototype = false;
                // this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicy_Prototype;
                this._v_Prototype = aDumpingPolicyFilterKinds_Prototype;
                // this._v_Prototype = null;
                // this._v_Type = null;
                // this._v_Module = null;
                
                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                
                this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyFilterKinds_Constructor.prototype = aDumpingPolicyFilterKinds_Prototype;
            
            
            
            
            
            var DumpingPolicyFilterKinds_SuperPrototypeConstructor = function() {
    
                this._v_IsPrototype = true;
                // this._v_SuperPrototype = theS_DumpingPolicyType.DumpingPolicy_Prototype;
                this._v_Prototype = aDumpingPolicyFilterKinds_Prototype;
                // this._v_Type      = null;
                // this._v_Module    = null;
                
                /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                
            };
            DumpingPolicyFilterKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyFilterKinds_Prototype;
    
        

    
            var DumpingPolicyFilterKinds_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new DumpingPolicyFilterKinds_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
    
    
            var aModule = {
                "DumpingPolicyFilterKinds_Prototype":                 aDumpingPolicyFilterKinds_Prototype,
                "DumpingPolicyFilterKinds_Constructor":               DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicyFilterKinds_SuperPrototypeConstructor": DumpingPolicyFilterKinds_SuperPrototypeConstructor,
                "DumpingPolicyFilterKinds_SuperPrototypeSingleton":   DumpingPolicyFilterKinds_SuperPrototypeSingleton,
                "DumpingPolicy_Constructor":                          DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor": DumpingPolicyFilterKinds_SuperPrototypeSingleton,
                "Prototype": aDumpingPolicyFilterKinds_Prototype,
                "Constructor": DumpingPolicyFilterKinds_Constructor,
                "SuperPrototypeConstructor": DumpingPolicyFilterKinds_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": DumpingPolicyFilterKinds_SuperPrototypeSingleton
            };
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
        
            aDumpingPolicyFilterKinds_Prototype._v_Module = aModule;
            
            
            
            return aModule;
        };
        
        
        
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type,
                theSS_DumpingPolicyType,
                theSS_EventKinds_Common
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
        return anExistingModule;
        
    });
    
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("identifyingTypes").factory("DumpingPolicyFilterKindsType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "DumpingPolicyType",
            "EventKinds_Common",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_dumpingpolicy = require('./dumpingpolicy_type');
            var aM_eventkinds_common = require('../eventkinds/eventkinds_common');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_dumpingpolicy,
                aM_eventkinds_common
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_dumpingpolicy_filterkinds_type",
            [
                "m_typesregistry_svce",
                "m_overrider_svce",
                "m_dumpingpolicy_type",
                "m_eventkinds_common"
            ],
            aMod_definer
            
        );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "modboot",     "typesregistry"),
                nomod.fComputeFullName( "prettytype", "modboot",     "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_type"),
                nomod.fComputeFullName( "prettytype", "eventkinds",  "eventkinds_common")
            ],
            aMod_definer
        );
    
    }
    
    
})();

