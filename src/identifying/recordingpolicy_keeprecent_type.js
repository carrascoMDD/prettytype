/*
 * recordingpolicy_keeprecent_type.js
 *
 * Created @author Antonio Carrasco Valero 201510171137
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
    var ModuleName     = "recordingpolicy_keeprecent_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider,
                                   theSS_RecordingPolicyKeepSomeType) {
    
        var aMod_builder = function( theS_Overrider,
                                     theS_RecordingPolicyKeepSomeType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
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
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
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
                    
                    // this._v_Prototype = aPrototype;
                    // this._v_Type      = this._v_Prototype._v_Type;
                    // this._v_Module    = this._v_Prototype._v_Module;
                    
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
    
                this._v_IsPrototype = false;
                // this._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;
                this._v_Prototype = aRecordingPolicyKeepRecent_Prototype;
                // this._v_Type = null;
                // this._v_Module = null;
                
                this._v_MustKeepRecordsRecentMillis = null;
                
                this._pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepRecent_Constructor.prototype = aRecordingPolicyKeepRecent_Prototype;
            
            
            
            
            
            var RecordingPolicyKeepRecent_SuperPrototypeConstructor = function() {
    
                this._v_IsPrototype = true;
                // this._v_SuperPrototype = theS_RecordingPolicyKeepSomeType.RecordingPolicyKeepSome_Prototype;
                this._v_Prototype = aRecordingPolicyKeepRecent_Prototype;
                // this._v_Type      = null;
                // this._v_Module    = null;
                
                this._v_MustKeepRecordsRecentMillis = null;
                
            };
            RecordingPolicyKeepRecent_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepRecent_Prototype;
    
    
            var RecordingPolicyKeepRecent_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new RecordingPolicyKeepRecent_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
    
            var aModule = {
                "RecordingPolicyKeepRecent_Prototype":   aRecordingPolicyKeepRecent_Prototype,
                "RecordingPolicyKeepRecent_Constructor": RecordingPolicyKeepRecent_Constructor,
                "RecordingPolicyKeepRecent_SuperPrototypeConstructor": RecordingPolicyKeepRecent_SuperPrototypeConstructor,
                "RecordingPolicyKeepRecent_SuperPrototypeSingleton": RecordingPolicyKeepRecent_SuperPrototypeSingleton,
                "RecordingPolicy_Constructor":           RecordingPolicyKeepRecent_Constructor,
                "RecordingPolicy_SuperPrototypeConstructor": RecordingPolicyKeepRecent_SuperPrototypeConstructor,
                "RecordingPolicy_SuperPrototypeSingleton": RecordingPolicyKeepRecent_SuperPrototypeSingleton,
                "Prototype": aRecordingPolicyKeepRecent_Prototype,
                "Constructor": RecordingPolicyKeepRecent_Constructor,
                "SuperPrototypeConstructor": RecordingPolicyKeepRecent_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": RecordingPolicyKeepRecent_SuperPrototypeSingleton
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
    
            aRecordingPolicyKeepRecent_Prototype._v_Module = aModule;
            
            
            
            
            
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
                theSS_RecordingPolicyKeepSomeType
        
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
        
        angular.module("identifyingTypes").factory("RecordingPolicyKeepRecentType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "RecordingPolicyKeepSomeType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
            var aM_recordingpolicy = require('./recordingpolicy_keepsome_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_recordingpolicy
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_recordingpolicy_keeprecent_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_recordingpolicy_keepsome_type"
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
                nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_keepsome_type")
            ],
            aMod_definer
        );
    
    }
    
})();


