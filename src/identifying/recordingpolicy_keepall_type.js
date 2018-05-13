/*
 * recordingpolicy_keepall_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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



/* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
 and shall prevent reclamation of their memory by the garbage collector
 Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
 which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
 */

(function () {
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider,
                                   theSS_RecordingPolicyType) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recordingpolicy_keepall_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_RecordingPolicyType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
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
    
    
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
    
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
                "RecordingPolicyKeepAll_SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor,
                "Prototype": aRecordingPolicyKeepAll_Prototype,
                "Constructor": RecordingPolicyKeepAll_Constructor,
                "SuperPrototypeConstructor": RecordingPolicyKeepAll_SuperPrototypeConstructor
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
    
    
            aRecordingPolicyKeepAll_Prototype._v_Module = aModule;
            
            
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
                theSS_RecordingPolicyType
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
                "m_typesregistry",
                "m_overrider_svce",
                "m_recordingpolicy_type"
            ],
            aMod_definer
        );
    }
    
    
})();


