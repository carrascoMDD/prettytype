/*
 * common_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030426
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
    var ModuleName     = "common_type";
    var ModulePackages = "common";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type,
                                   theSS_IdentifierSvce,
                                   theSS_RecorderSvce,
                                   theSS_EventTypes_Common,
                                   theSS_Travesals){
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_IdentifierSvce,
                                     theS_RecorderSvce,
                                     theS_EventTypes_Common,
                                     theS_Travesals) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                
                /* BeWare: keeping references to record instances shall prevent reclamation of their memory by the garbage collector
                   Note that when a recordingpolicy_keepall is plugged into the recorder, all records shall be kept in memory in the _v_Records slot property of the recorder instance
                   */
                theToInit.KEEPOWNRECORDS = false;
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
                
                if( theS_EventTypes_Common && theS_EventTypes_Common.InitFromModuleConstants) {
                    theS_EventTypes_Common.InitFromModuleConstants( theToInit);
                }
                
                theToInit.COMMON_DEFAULTTITLE = "CommonDefaultName";
                
                theToInit.UNKNOWNID = "?i?";
                
                theToInit.VALUEDIFFATTOP = "/";
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
                
                
                
                
                
                theToInit.FIELDNAMEDOT = ".";
                
                theToInit.URLPATHSEPARATOR   = "/";
                theToInit.HTTPQUERYCHAR      = "?";
                theToInit.HTTPPARMASSIGN     = "=";
                theToInit.HTTPEXTRAPARMCHAR  = "&";
                
                
                theToInit.DATATYPE_FILE = "File";
                
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
    
    
    
    
    
            var aCommon_Prototype = (function() {
                
                
                var aPrototype = {};
                
                InitFromModuleConstants( aPrototype);
    
                aPrototype._v_IsPrototype = true;
                aPrototype._v_SuperPrototype = null;
                
                aPrototype._v_Type = "Common";
                
                aPrototype._v_Module = null;
    
                aPrototype._v_Prototype_Common = aPrototype;
    
                
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
                    this._v_Module    = this._v_Prototype._v_Module;
                    
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
                        if( ( typeof theAlready.fAlready === "function") && theAlready.fAlready( this)){
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
                    
                    return theS_Travesals.fgFirstDiff( theActualValue, theCheckValue);
                };
                if( fFirstDiff){}/* CQT */
                aPrototype.fFirstDiff = fFirstDiff;
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var Common_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_IsPrototype = false;
                this._v_Prototype = aCommon_Prototype;
                
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
                
                this._pInit_Common( theTitle, theIdentifier, theRecorder);
            };
            Common_Constructor.prototype = aCommon_Prototype;
            
            
            
            
            
            var Common_SuperPrototypeConstructor = function() {
                this._v_IsPrototype = true;
                this._v_Prototype = aCommon_Prototype;
    
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
            };
            Common_SuperPrototypeConstructor.prototype = aCommon_Prototype;
    
    
    
            var Common_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new Common_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
            var aModule = {
                "Common_Prototype": aCommon_Prototype,
                "Common_Constructor": Common_Constructor,
                "Common_SuperPrototypeConstructor": Common_SuperPrototypeConstructor,
                "Common_SuperPrototypeSingleton": Common_SuperPrototypeSingleton,
                "Prototype": aCommon_Prototype,
                "Constructor": Common_Constructor,
                "SuperPrototypeConstructor": Common_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": Common_SuperPrototypeSingleton
            };
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
    
            aCommon_Prototype._v_Module = aModule;
            
            
            
            
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
                theSS_IdentifierSvce,
                theSS_RecorderSvce,
                theSS_EventTypes_Common,
                theSS_Travesals
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
        
        angular.module("commonTypes").factory("CommonType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            "RecorderSvce",
            "EventKinds_Common",
            "Traversals",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry     = require('../modboot/typesregistry');
            var aM_overrider         = require('../modboot/overrider_svce');
            var aM_identifierSvce    = require('../identifying/identifier_svce');
            var aM_recorderSvce      = require('../identifying/recorder_svce');
            var aM_eventkinds_common = require('../eventkinds/eventkinds_common');
            var aM_traversals        = require('../utils/traversals');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_identifierSvce,
                aM_recorderSvce,
                aM_eventkinds_common,
                aM_traversals
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_common_type",
            [
                "m_typesregistry_svce",
                "m_overrider_svce",
                "m_identifier_svce",
                "m_recorder_svce",
                "m_eventkinds_common",
                "m_traversals"
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
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "recorder_svce"),
                nomod.fComputeFullName( "prettytype", "eventkinds",  "eventkinds_common"),
                nomod.fComputeFullName( "prettytype", "utils",       "traversals")
            ],
            aMod_definer
        );
    
    }
   
    
})();





