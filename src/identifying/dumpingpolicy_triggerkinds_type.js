/*
 * dumpingpolicy_triggerkinds_type.js
 *
 * Created @author Antonio Carrasco Valero 201610191704
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 2017 2018 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser with AngularJS or RequireJS modules, or in the server as node modules. Licensed under EUPL  http://www.uiwire.org

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
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider,
                                   theSS_DumpingPolicyFilterKindsType,
                                   theSS_EventKinds_Common) {
                
    
        var ComponentName    = "prettytype";
        var ModuleName     = "dumpingpolicy_triggerkinds_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_DumpingPolicyFilterKindsType,
                                     theS_EventKinds_Common) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP = false;
                
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
                    
                    if( typeof theToInit.EVENTSSETTRIGGERINGDUMP === "string") {
                        var anEventsSetTriggeringDump = theS_EventKinds_Common[ theToInit.EVENTSSETTRIGGERINGDUMP];
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
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_EventKinds_Common.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_TRIGGERINGDUMP) {
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_EventKinds_Common.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
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
    
    
    
    
    
    
            var aDumpingPolicyTriggerKinds_Prototype = (function() {
                
                
                // var aPrototype = new theS_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_SuperPrototypeConstructor();
                var aPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_SuperPrototypeSingleton();
    
                pgInitFromModuleConstants( aPrototype);
                
                aPrototype._v_SuperPrototype = theS_DumpingPolicyFilterKindsType.DumpingPolicyFilterKinds_Prototype;
                
                aPrototype._v_Type = "DumpingPolicyTriggerKinds";
    
                aPrototype._v_Module = null;

                aPrototype._v_Prototype_DumpingPolicyTriggerKinds = aPrototype;
                
                
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
                    aPrototype._v_SuperPrototype._pInit_DumpingPolicyFilterKinds.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = this._v_Prototype._v_Module;
                    
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
                    
                    var aNumEventKinds = theEventKinds.length;
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
                    
                    var aNumEventKinds = theEventKinds.length;
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
                    
                    var aNumEventKinds = theEventKinds.length;
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
                    
                    var aNumEventKinds = theEventKinds.length;
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
                    
                    if( typeof aRecordPointerLastDumpedValue === "number") {
                        
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
                    if( 0){}/* CQT */
    
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
    
    
    
    
            var DumpingPolicyTriggerKinds_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new DumpingPolicyTriggerKinds_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
            
            
    
            var aModule = {
                "DumpingPolicyTriggerKinds_Prototype":                 aDumpingPolicyTriggerKinds_Prototype,
                "DumpingPolicyTriggerKinds_Constructor":               DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicyTriggerKinds_SuperPrototypeConstructor": DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "DumpingPolicyTriggerKinds_SuperPrototypeSingleton":   DumpingPolicyTriggerKinds_SuperPrototypeSingleton,
                "DumpingPolicy_Constructor":                           DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor": DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "Prototype": aDumpingPolicyTriggerKinds_Prototype,
                "Constructor": DumpingPolicyTriggerKinds_Constructor,
                "SuperPrototypeConstructor": DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": DumpingPolicyTriggerKinds_SuperPrototypeSingleton
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
            
            aDumpingPolicyTriggerKinds_Prototype._v_Module = aModule;
            
            
            
            return aModule;
        };
        
        
        

    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_DumpingPolicyFilterKindsType,
                theSS_EventKinds_Common
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry === 'undefined')
                && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
                theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
        return anExistingModule;
        
    });
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("identifyingTypes").factory("DumpingPolicyTriggerKindsType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "DumpingPolicyFilterKindsType",
            "EventKinds_Common",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_dumpingpolicy = require('./dumpingpolicy_filterkinds_type');
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
        
        define( "m_dumpingpolicy_triggerkinds_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_dumpingpolicy_filterkinds_type",
                "m_eventkinds_common"
            ],
            aMod_definer
        );
    }
    
})();

