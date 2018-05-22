/*
 * recordingpolicy_keepall_type.js.js
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



/* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
 and shall prevent reclamation of their memory by the garbage collector
 Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
 which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
 */

(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "recordingpolicy_keepall_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type,
                                   theSS_RecordingPolicyType) {
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_RecordingPolicyType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MUSTKEEPRECORDS = true;
                
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
                theToInit.RECORDINGPOLICYKEEPALL_DEFAULTTITLE = "RecordingPolicyKeepAllDefaultName";
                
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
    
    
    
    
    
    
    
            var aRecordingPolicyKeepAll_Prototype = (function() {
    
    
                var aPrototype = new theS_RecordingPolicyType.RecordingPolicy_SuperPrototypeConstructor();
                
                InitFromModuleConstants( aPrototype);
                
                aPrototype._v_IsPrototype = true;
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
                    
                    // this._v_Prototype = aPrototype;
                    // this._v_Type      = this._v_Prototype._v_Type;
                    // this._v_Module    = this._v_Prototype._v_Module;
                    
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
    
                this._v_IsPrototype = false;
                // this._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;
                this._v_Prototype = aRecordingPolicyKeepAll_Prototype;
                // this._v_Prototype = null;
                // this._v_Type = null;
                // this._v_Module = null;
                
                this._v_MustKeepRecords = null;
                
                this._pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepAll_Constructor.prototype = aRecordingPolicyKeepAll_Prototype;
            
            
            
            
            
            var RecordingPolicyKeepAll_SuperPrototypeConstructor = function() {
    
                this._v_IsPrototype = true;
                // this._v_SuperPrototype = theS_RecordingPolicyType.RecordingPolicy_Prototype;
                this._v_Prototype = aRecordingPolicyKeepAll_Prototype;
                // this._v_Type      = null;
                // this._v_Module    = null;
                
                this._v_MustKeepRecords = null;
                
            };
            RecordingPolicyKeepAll_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepAll_Prototype;
    
    
    
            var RecordingPolicyKeepAll_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new RecordingPolicyKeepAll_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
    
            var aModule = {
                "RecordingPolicyKeepAll_Prototype":   aRecordingPolicyKeepAll_Prototype,
                "RecordingPolicyKeepAll_Constructor": RecordingPolicyKeepAll_Constructor,
                "RecordingPolicyKeepAll_SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor,
                "RecordingPolicyKeepAll_SuperPrototypeSingleton": RecordingPolicyKeepAll_SuperPrototypeSingleton,
                "RecordingPolicy_Constructor":        RecordingPolicyKeepAll_Constructor,
                "RecordingPolicy_SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor,
                "RecordingPolicy_SuperPrototypeSingleton": RecordingPolicyKeepAll_SuperPrototypeSingleton,
                "Prototype": aRecordingPolicyKeepAll_Prototype,
                "Constructor": RecordingPolicyKeepAll_Constructor,
                "SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": RecordingPolicyKeepAll_SuperPrototypeSingleton
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
    
    
            aRecordingPolicyKeepAll_Prototype._v_Module = aModule;
            
            
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
                theSS_RecordingPolicyType
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
        
        angular.module("identifyingTypes").factory("RecordingPolicyKeepAllType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "RecordingPolicyType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry   = require('../modboot/typesregistry');
            var aM_overrider       = require('../modboot/overrider_svce');
            var aM_recordingpolicy = require('./recordingpolicy_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_recordingpolicy
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_recordingpolicy_keepall_type",
            [
                "m_typesregistry_svce",
                "m_overrider_svce",
                "m_recordingpolicy_type"
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
                nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_type")
            ],
            aMod_definer
        );
    
    }
    
})();

