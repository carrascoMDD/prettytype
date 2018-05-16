/*
 * index.js
 *
 * Created @author Antonio Carrasco Valero 201805140022
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
    var ModuleName     = "index";
    var ModulePackages = "";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function(  theSS_typesregistry,
                                    theSS_overrider_type,
                                    theSS_overrider_svce,
                                    theSS_decoratesystemprototypes_svce,
                                    theSS_stacktrace,
                                    theSS_exceptiondetails_svce,
                                    theSS_console_svce,
                                    theSS_traversals,
                                    theSS_checks,
                                    theSS_identifier_type,
                                    theSS_identifier_svce,
                                    theSS_record_type,
                                    theSS_recordingpolicy_type,
                                    theSS_recordingpolicy_keepall_type,
                                    theSS_recordingpolicy_keepsome_type,
                                    theSS_recordingpolicy_keeprecent_type,
                                    theSS_dumpingpolicy_type,
                                    theSS_dumpingpolicy_filterkinds_type,
                                    theSS_dumpingpolicy_triggerkinds_type,
                                    theSS_recorder_type,
                                    theSS_recorder_svce,
                                    theSS_eventkinds_common,
                                    theSS_common_type){
        
        var aMod_builder = function( theS_typesregistry,
                                     theS_overrider_type,
                                     theS_overrider_svce,
                                     theS_decoratesystemprototypes_svce,
                                     theS_stacktrace,
                                     theS_exceptiondetails_svce,
                                     theS_console_svce,
                                     theS_traversals,
                                     theS_checks,
                                     theS_identifier_type,
                                     theS_identifier_svce,
                                     theS_record_type,
                                     theS_recordingpolicy_type,
                                     theS_recordingpolicy_keepall_type,
                                     theS_recordingpolicy_keepsome_type,
                                     theS_recordingpolicy_keeprecent_type,
                                     theS_dumpingpolicy_type,
                                     theS_dumpingpolicy_filterkinds_type,
                                     theS_dumpingpolicy_triggerkinds_type,
                                     theS_recorder_type,
                                     theS_recorder_svce,
                                     theS_eventkinds_common,
                                     theS_common_type) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
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
            theS_overrider_svce.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            
            
            
            
            
            
            
            
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
            
            
            
        
            
            var aModule = {};
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
    
            aModule[ "modboot"] = {
                "m_typesregistry":                     theS_typesregistry,
                "m_overrider_type":                    theS_overrider_type,
                "m_overrider_svce":                    theS_overrider_svce
            };
            
            aModule[ "decoratesystemprototypes_svce"] =     theS_decoratesystemprototypes_svce;
            aModule[ "stacktrace"] =                        theS_stacktrace;
            aModule[ "exceptiondetails_svce"] =             theS_exceptiondetails_svce;
            aModule[ "console_svce"] =                      theS_console_svce;
            aModule[ "traversals"] =                        theS_traversals;
            aModule[ "checks"] =                            theS_checks;
            
            aModule[ "identifying"] = {
                "m_identifier_type":                   theS_identifier_type,
                "m_identifier_svce":                   theS_identifier_svce,
                "m_record_type":                       theS_record_type,
                "m_recordingpolicy_type":              theS_recordingpolicy_type,
                "m_recordingpolicy_keepall_type":      theS_recordingpolicy_keepall_type,
                "m_recordingpolicy_keepsome_type":     theS_recordingpolicy_keepsome_type,
                "m_recordingpolicy_keeprecent_type":   theS_recordingpolicy_keeprecent_type,
                "m_dumpingpolicy_type":                theS_dumpingpolicy_type,
                "m_dumpingpolicy_filterkinds_type":    theS_dumpingpolicy_filterkinds_type,
                "m_dumpingpolicy_triggerkinds_type":   theS_dumpingpolicy_triggerkinds_type,
                "m_recorder_type":                     theS_recorder_type,
                "m_recorder_svce":                     theS_recorder_svce
            };
    
            aModule[ "eventkinds"] = {
                "eventkinds_common": theS_eventkinds_common
            };
    
            aModule[ "common"] = {
                "common_type": theS_common_type
            };
    
            
    
            aModule[ "m_typesregistry"] =                     theS_typesregistry;
            aModule[ "m_overrider_type"] =                    theS_overrider_type;
            aModule[ "m_overrider_svce"] =                    theS_overrider_svce;
            aModule[ "m_decoratesystemprototypes_svce"] =     theS_decoratesystemprototypes_svce;
            aModule[ "m_stacktrace"] =                        theS_stacktrace;
            aModule[ "m_exceptiondetails_svce"] =             theS_exceptiondetails_svce;
            aModule[ "m_console_svce"] =                      theS_console_svce;
            aModule[ "m_traversals"] =                        theS_traversals;
            aModule[ "m_checks"] =                            theS_checks;
            aModule[ "m_identifier_type"] =                   theS_identifier_type;
            aModule[ "m_identifier_svce"] =                   theS_identifier_svce;
            aModule[ "m_record_type"] =                       theS_record_type;
            aModule[ "m_recordingpolicy_type"] =              theS_recordingpolicy_type;
            aModule[ "m_recordingpolicy_keepall_type"] =      theS_recordingpolicy_keepall_type;
            aModule[ "m_recordingpolicy_keepsome_type"] =     theS_recordingpolicy_keepsome_type;
            aModule[ "m_recordingpolicy_keeprecent_type"] =   theS_recordingpolicy_keeprecent_type;
            aModule[ "m_dumpingpolicy_type"] =                theS_dumpingpolicy_type;
            aModule[ "m_dumpingpolicy_filterkinds_type"] =    theS_dumpingpolicy_filterkinds_type;
            aModule[ "m_dumpingpolicy_triggerkinds_type"] =   theS_dumpingpolicy_triggerkinds_type;
            aModule[ "m_recorder_type"] =                     theS_recorder_type;
            aModule[ "m_recorder_svce"] =                     theS_recorder_svce;
            aModule[ "m_eventkinds_common"] =                 theS_eventkinds_common;
            aModule[ "m_common_type"] =                       theS_common_type;
    
    
            aModule[ "TypesRegistrySvce"] =                theS_typesregistry;
            aModule[ "OverriderType"] =                    theS_overrider_type;
            aModule[ "OverriderSvce"] =                    theS_overrider_svce;
            aModule[ "DecorateSystemPrototypesSvce"] =     theS_decoratesystemprototypes_svce;
            aModule[ "StacktraceSvce"] =                   theS_stacktrace;
            aModule[ "ExceptionDetailsSvce"] =             theS_exceptiondetails_svce;
            aModule[ "ConsoleSvce"] =                      theS_console_svce;
            aModule[ "Traversals"] =                       theS_traversals;
            aModule[ "Checks"] =                           theS_checks;
            aModule[ "IdentifierType"] =                   theS_identifier_type;
            aModule[ "IdentifierSvce"] =                   theS_identifier_svce;
            aModule[ "RecordType"] =                       theS_record_type;
            aModule[ "RecordingPolicyType"] =              theS_recordingpolicy_type;
            aModule[ "RecordingPolicyKeepAllType"] =       theS_recordingpolicy_keepall_type;
            aModule[ "RecordingPolicyKeepSomeType"] =      theS_recordingpolicy_keepsome_type;
            aModule[ "RecordingPolicyKeepRecentType"] =    theS_recordingpolicy_keeprecent_type;
            aModule[ "DumpingPolicyType"] =                theS_dumpingpolicy_type;
            aModule[ "DumpingPolicyFilterKindsType"] =     theS_dumpingpolicy_filterkinds_type;
            aModule[ "DumpingPolicyTriggerKindsType"] =    theS_dumpingpolicy_triggerkinds_type;
            aModule[ "RecorderType"] =                     theS_recorder_type;
            aModule[ "RecorderSvce"] =                     theS_recorder_svce;
            aModule[ "EventKinds_Common"] =                theS_eventkinds_common;
            aModule[ "CommonType"] =                       theS_common_type;
    
    
            theS_typesregistry.ModuleIndex = aModule;
            theS_overrider_type.ModuleIndex = aModule;
            theS_overrider_svce.ModuleIndex = aModule;
            theS_decoratesystemprototypes_svce.ModuleIndex = aModule;
            theS_exceptiondetails_svce.ModuleIndex = aModule;
            theS_console_svce.ModuleIndex = aModule;
            theS_traversals.ModuleIndex = aModule;
            theS_checks.ModuleIndex = aModule;
            theS_identifier_type.ModuleIndex = aModule;
            theS_identifier_svce.ModuleIndex = aModule;
            theS_record_type.ModuleIndex = aModule;
            theS_recordingpolicy_type.ModuleIndex = aModule;
            theS_recordingpolicy_keepall_type.ModuleIndex = aModule;
            theS_recordingpolicy_keepsome_type.ModuleIndex = aModule;
            theS_recordingpolicy_keeprecent_type.ModuleIndex = aModule;
            theS_dumpingpolicy_type.ModuleIndex = aModule;
            theS_dumpingpolicy_filterkinds_type.ModuleIndex = aModule;
            theS_dumpingpolicy_triggerkinds_type.ModuleIndex = aModule;
            theS_recorder_type.ModuleIndex = aModule;
            theS_recorder_svce.ModuleIndex = aModule;
            theS_eventkinds_common.ModuleIndex = aModule;
            theS_common_type.ModuleIndex = aModule;
            
    
            return aModule;
        };
        
        
        
        
        
        
        
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
            
            var aModule = aMod_builder(
                theSS_typesregistry,
                theSS_overrider_type,
                theSS_overrider_svce,
                theSS_decoratesystemprototypes_svce,
                theSS_stacktrace,
                theSS_exceptiondetails_svce,
                theSS_console_svce,
                theSS_traversals,
                theSS_checks,
                theSS_identifier_type,
                theSS_identifier_svce,
                theSS_record_type,
                theSS_recordingpolicy_type,
                theSS_recordingpolicy_keepall_type,
                theSS_recordingpolicy_keepsome_type,
                theSS_recordingpolicy_keeprecent_type,
                theSS_dumpingpolicy_type,
                theSS_dumpingpolicy_filterkinds_type,
                theSS_dumpingpolicy_triggerkinds_type,
                theSS_recorder_type,
                theSS_recorder_svce,
                theSS_eventkinds_common,
                theSS_common_type
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
        
        angular.module("index",
            [
                "typesRegistry",
                "modbootTypes",
                "decoratesystemprototypes",
                "stacktrace",
                "exceptiondetails",
                "consoleSvce",
                "traversals",
                "checks",
                "identifyingTypes",
                "eventKinds_Common",
                "commonTypes"
            ]).factory(
                "Index",
            [
                "TypesRegistrySvce",
                "OverriderType",
                "OverriderSvce",
                "DecorateSystemPrototypesSvce",
                "StacktraceSvce",
                "ExceptionDetailsSvce",
                "ConsoleSvce",
                "Traversals",
                "Checks",
                "IdentifierType",
                "IdentifierSvce",
                "RecordType",
                "RecordingPolicyType",
                "RecordingPolicyKeepAllType",
                "RecordingPolicyKeepSomeType",
                "RecordingPolicyKeepRecentType",
                "DumpingPolicyType",
                "DumpingPolicyFilterKindsType",
                "DumpingPolicyTriggerKindsType",
                "RecorderType",
                "RecorderSvce",
                "EventKinds_Common",
                "CommonType",
                aMod_definer
            ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry                    = require( './modboot/typesregistry.js');
            var aM_overrider_type                   = require( './modboot/overrider_type.js');
            var aM_overrider_svce                   = require( './modboot/overrider_svce.js');
            var aM_decoratesystemprototypes_svce    = require( './utils/decoratesystemprototypes_svce.js');
            var aM_stacktrace                       = require( './utils/stacktrace_svce.js');
            var aM_exceptiondetails_svce            = require( './utils/exceptiondetails_svce.js');
            var aM_console_svce                     = require( './utils/console_svce.js');
            var aM_traversals                       = require( './utils/traversals.js');
            var aM_checks                           = require( './utils/checks.js');
            var aM_identifier_type                  = require( './identifying/identifier_type.js');
            var aM_identifier_svce                  = require( './identifying/identifier_svce.js');
            var aM_record_type                      = require( './identifying/record_type.js');
            var aM_recordingpolicy_type             = require( './identifying/recordingpolicy_type.js');
            var aM_recordingpolicy_keepall_type     = require( './identifying/recordingpolicy_keepall_type.js');
            var aM_recordingpolicy_keepsome_type    = require( './identifying/recordingpolicy_keepsome_type.js');
            var aM_recordingpolicy_keeprecent_type  = require( './identifying/recordingpolicy_keeprecent_type.js');
            var aM_dumpingpolicy_type               = require( './identifying/dumpingpolicy_type.js');
            var aM_dumpingpolicy_filterkinds_type   = require( './identifying/dumpingpolicy_filterkinds_type.js');
            var aM_dumpingpolicy_triggerkinds_type  = require( './identifying/dumpingpolicy_triggerkinds_type.js');
            var aM_recorder_type                    = require( './identifying/recorder_type.js');
            var aM_recorder_svce                    = require( './identifying/recorder_svce.js');
            var aM_eventkinds_common                = require( './eventkinds/eventkinds_common.js');
            var aM_common_type                      = require( './common/common_type.js');
    
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider_type,
                aM_overrider_svce,
                aM_decoratesystemprototypes_svce,
                aM_stacktrace,
                aM_exceptiondetails_svce,
                aM_console_svce,
                aM_traversals,
                aM_checks,
                aM_identifier_type,
                aM_identifier_svce,
                aM_record_type,
                aM_recordingpolicy_type,
                aM_recordingpolicy_keepall_type,
                aM_recordingpolicy_keepsome_type,
                aM_recordingpolicy_keeprecent_type,
                aM_dumpingpolicy_type,
                aM_dumpingpolicy_filterkinds_type,
                aM_dumpingpolicy_triggerkinds_type,
                aM_recorder_type,
                aM_recorder_svce,
                aM_eventkinds_common,
                aM_common_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_index",
            [
                "m_typesregistry",
                "m_overrider_type",
                "m_overrider_svce",
                "m_decoratesystemprototypes_svce",
                "m_stacktrace_svce",
                "m_exceptiondetails_svce",
                "m_console_svce",
                "m_traversals",
                "m_checks",
                "m_identifier_type",
                "m_identifier_svce",
                "m_record_type",
                "m_recordingpolicy_type",
                "m_recordingpolicy_keepall_type",
                "m_recordingpolicy_keepsome_type",
                "m_recordingpolicy_keeprecent_type",
                "m_dumpingpolicy_type",
                "m_dumpingpolicy_filterkinds_type",
                "m_dumpingpolicy_triggerkinds_type",
                "m_recorder_type",
                "m_recorder_svce",
                "m_eventkinds_common",
                "m_common_type"
            ],
            aMod_definer
        );
    }
    nomod.register( ComponentName, ModulePackages, ModuleName,
        [ /* theDependencies */
            nomod.fComputeFullName( "prettytype", "modboot",     "typesregistry"),
            nomod.fComputeFullName( "prettytype", "modboot",     "overrider_type"),
            nomod.fComputeFullName( "prettytype", "modboot", "overrider_svce"),
            nomod.fComputeFullName( "prettytype", "utils", "decoratesystemprototypes_svce"),
            nomod.fComputeFullName( "prettytype", "utils", "stacktrace_svce"),
            nomod.fComputeFullName( "prettytype", "utils", "exceptiondetails_svce"),
            nomod.fComputeFullName( "prettytype", "utils", "console_svce"),
            nomod.fComputeFullName( "prettytype", "utils",     "traversals"),
            nomod.fComputeFullName( "prettytype", "utils",     "checks"),
            nomod.fComputeFullName( "prettytype", "identifying", "identifier_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"),
            nomod.fComputeFullName( "prettytype", "identifying", "record_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_keepall_type"),
            nomod.fComputeFullName( "prettytype", "identifying",     "recordingpolicy_keepsome_type"),
            nomod.fComputeFullName( "prettytype", "identifying",     "recordingpolicy_keeprecent_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_filterkinds_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_triggerkinds_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "recorder_type"),
            nomod.fComputeFullName( "prettytype", "identifying", "recorder_svce"),
            nomod.fComputeFullName( "prettytype", "eventkinds",     "eventkinds_common"),
            nomod.fComputeFullName( "prettytype", "common",     "common_type")
        ],
        aMod_definer
    );
    
})();





