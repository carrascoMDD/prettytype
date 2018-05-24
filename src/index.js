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
    var ModuleFullName = ModuleName; /* ModulePackages + "/" + ModuleName; */
    
    var aMod_definer = ( function(  theSS_typesregistry_type,
                                    theSS_typesregistry_svce,
                                    theSS_overrider_type,
                                    theSS_overrider_svce,
                                    theSS_decoratesystemprototypes,
                                    theSS_stacktrace_type,
                                    theSS_stacktrace_svce,
                                    theSS_exceptiondetails_type,
                                    theSS_exceptiondetails_svce,
                                    theSS_console_type,
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
        
        var aMod_builder = function( theS_typesregistry_type,
                                     theS_typesregistry_svce,
                                     theS_overrider_type,
                                     theS_overrider_svce,
                                     theS_decoratesystemprototypes,
                                     theS_stacktrace_type,
                                     theS_stacktrace_svce,
                                     theS_exceptiondetails_type,
                                     theS_exceptiondetails_svce,
                                     theS_console_type,
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
            */
            var pgInitWithModuleConstants = function( theToInit) {
                if( !theToInit) {
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
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn
            };
    
            /* ***************************************************************
              Add to the Module Key-Values from Constants (and Variations, if any) so they are exposed as published members.
              Beware: The value for any key in Constants (and Variations, if any)
                shall override any other slot value in the Module with same key, if such exists,
                including any infrastructural or conventional entries.
            */
            InitFromModuleConstants( aModule);
    
    
    
            aModule[ "Modules"] = {
                "typesregistry_type": theS_typesregistry_type,
                "typesregistry_svce": theS_typesregistry_svce,
                "overrider_type": theS_overrider_type,
                "overrider_svce": theS_overrider_svce,
                "decoratesystemprototypes": theS_decoratesystemprototypes,
                "stacktrace_type": theS_stacktrace_type,
                "stacktrace_svce": theS_stacktrace_svce,
                "exceptiondetails_type": theS_exceptiondetails_type,
                "exceptiondetails_svce": theS_exceptiondetails_svce,
                "console_type": theS_console_type,
                "console_svce": theS_console_svce,
                "traversals": theS_traversals,
                "checks": theS_checks,
                "identifier_type": theS_identifier_type,
                "identifier_svce": theS_identifier_svce,
                "record_type": theS_record_type,
                "recordingpolicy_type": theS_recordingpolicy_type,
                "recordingpolicy_keepall_type": theS_recordingpolicy_keepall_type,
                "recordingpolicy_keepsome_type": theS_recordingpolicy_keepsome_type,
                "recordingpolicy_keeprecent_type": theS_recordingpolicy_keeprecent_type,
                "dumpingpolicy_type": theS_dumpingpolicy_type,
                "dumpingpolicy_filterkinds_type": theS_dumpingpolicy_filterkinds_type,
                "dumpingpolicy_triggerkinds_type": theS_dumpingpolicy_triggerkinds_type,
                "recorder_type": theS_recorder_type,
                "recorder_svce": theS_recorder_svce,
                "eventkinds_common": theS_eventkinds_common,
                "common_type": theS_common_type
            };
    
            aModule[ "ModulesTree"] = {
                "typesregistry": {
                    "typesregistry_type": theS_typesregistry_type,
                    "typesregistry_svce": theS_typesregistry_svce
                },
                "overrider": {
                    "overrider_type": theS_overrider_type,
                    "overrider_svce": theS_overrider_svce,
                },
                "lowinstr": {
                    "decoratesystemprototypes": theS_decoratesystemprototypes
                },
                "exceptionstack": {
                    "stacktrace_type": theS_stacktrace_type,
                    "stacktrace_svce": theS_stacktrace_svce,
                    "exceptiondetails_type": theS_exceptiondetails_type,
                    "exceptiondetails_svce": theS_exceptiondetails_svce
                },
                "console": {
                    "console_type": theS_console_type,
                    "console_svce": theS_console_svce
                },
                "utils": {
                    "traversals": theS_traversals,
                    "checks": theS_checks
                },
                "identifier": {
                    "identifier_type": theS_identifier_type,
                    "identifier_svce": theS_identifier_svce
                },
                "recording": {
                    "record_type": theS_record_type,
                    "recordingpolicy_type": theS_recordingpolicy_type,
                    "recordingpolicy_keepall_type": theS_recordingpolicy_keepall_type,
                    "recordingpolicy_keepsome_type": theS_recordingpolicy_keepsome_type,
                    "recordingpolicy_keeprecent_type": theS_recordingpolicy_keeprecent_type,
                    "dumpingpolicy_type": theS_dumpingpolicy_type,
                    "dumpingpolicy_filterkinds_type": theS_dumpingpolicy_filterkinds_type,
                    "dumpingpolicy_triggerkinds_type": theS_dumpingpolicy_triggerkinds_type,
                    "recorder_type": theS_recorder_type,
                    "recorder_svce": theS_recorder_svce
                },
                "eventkinds": {
                    "eventkinds_common": theS_eventkinds_common,
                },
                "common": {
                    "common_type": theS_common_type
                }
            };
    
            theS_typesregistry_type.ModuleIndex = aModule;
            theS_typesregistry_svce.ModuleIndex = aModule;
            theS_overrider_type.ModuleIndex = aModule;
            theS_overrider_svce.ModuleIndex = aModule;
            theS_decoratesystemprototypes.ModuleIndex = aModule;
            theS_stacktrace_type.ModuleIndex = aModule;
            theS_stacktrace_svce.ModuleIndex = aModule;
            theS_exceptiondetails_type.ModuleIndex = aModule;
            theS_exceptiondetails_svce.ModuleIndex = aModule;
            theS_console_type.ModuleIndex = aModule;
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
    
            /* ***************************************************************
              Return defined module.
            */
            return aModule;
        };
        
        
        
        
        
        
        
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
            
            var aModule = aMod_builder(
                theSS_typesregistry_type,
                theSS_typesregistry_svce,
                theSS_overrider_type,
                theSS_overrider_svce,
                theSS_decoratesystemprototypes,
                theSS_stacktrace_type,
                theSS_stacktrace_svce,
                theSS_exceptiondetails_type,
                theSS_exceptiondetails_svce,
                theSS_console_type,
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
        
        angular.module("index",
            [
                "typesregistry",
                "overrider",
                "lowinstrument",
                "exceptionstack",
                "console",
                "utils",
                "identifying",
                "recording",
                "eventkinds",
                "common"
            ]).factory( "index", [
                "typesregistry_type",
                "typesregistry_svce",
                "overrider_type",
                "overrider_svce",
                "decoratesystemprototypes",
                "stacktrace_type",
                "stacktrace_svce",
                "exceptiondetails_type",
                "exceptiondetails_svce",
                "console_type",
                "console_svce",
                "traversals",
                "checks",
                "identifier_type",
                "identifier_svce",
                "record_type",
                "recordingpolicy_type",
                "recordingpolicy_keepall_type",
                "recordingpolicy_keepsome_type",
                "recordingpolicy_keeprecent_type",
                "dumpingpolicy_type",
                "dumpingpolicy_filterkinds_type",
                "dumpingpolicy_triggerkinds_type",
                "recorder_type",
                "recorder_svce",
                "eventkinds_common",
                "common_type",
                
                aMod_definer
            ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry_type               = require( './typesregistry/typesregistry_type.js');
            var aM_typesregistry_svce               = require( './typesregistry/typesregistry_svce.js');
            var aM_overrider_type                   = require( './overrider/overrider_type.js');
            var aM_overrider_svce                   = require( './overrider/overrider_svce.js');
            var aM_decoratesystemprototypes         = require( './lowinstrument/decoratesystemprototypes.js');
            var aM_stacktrace_type                  = require( './exceptionstack/stacktrace_type.js');
            var aM_stacktrace_svce                  = require( './exceptionstack/stacktrace_svce.js');
            var aM_exceptiondetails_type            = require( './exceptionstack/exceptiondetails_type.js');
            var aM_exceptiondetails_svce            = require( './exceptionstack/exceptiondetails_svce.js');
            var aM_console_type                     = require( './console/console_type.js');
            var aM_console_svce                     = require( './console/console_svce.js');
            var aM_traversals                       = require( './utils/traversals.js');
            var aM_checks                           = require( './utils/checks.js');
            var aM_identifier_type                  = require( './identifying/identifier_type.js');
            var aM_identifier_svce                  = require( './identifying/identifier_svce.js');
            var aM_record_type                      = require( './recording/record_type.js');
            var aM_recordingpolicy_type             = require( './recording/recordingpolicy_type.js');
            var aM_recordingpolicy_keepall_type     = require( './recording/recordingpolicy_keepall_type.js');
            var aM_recordingpolicy_keepsome_type    = require( './recording/recordingpolicy_keepsome_type.js');
            var aM_recordingpolicy_keeprecent_type  = require( './recording/recordingpolicy_keeprecent_type.js');
            var aM_dumpingpolicy_type               = require( './recording/dumpingpolicy_type.js');
            var aM_dumpingpolicy_filterkinds_type   = require( './recording/dumpingpolicy_filterkinds_type.js');
            var aM_dumpingpolicy_triggerkinds_type  = require( './recording/dumpingpolicy_triggerkinds_type.js');
            var aM_recorder_type                    = require( './recording/recorder_type.js');
            var aM_recorder_svce                    = require( './recording/recorder_svce.js');
            var aM_eventkinds_common                = require( './eventkinds/eventkinds_common.js');
            var aM_common_type                      = require( './common/common_type.js');
    
    
            return aMod_definer(
                aM_typesregistry_type,
                aM_typesregistry_svce,
                aM_overrider_type,
                aM_overrider_svce,
                aM_decoratesystemprototypes,
                aM_stacktrace_type,
                aM_stacktrace_svce,
                aM_exceptiondetails_type,
                aM_exceptiondetails_svce,
                aM_console_type,
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
        
        define( "index",
            [
                "typesregistry_type",
                "typesregistry_svce",
                "overrider_type",
                "overrider_svce",
                "decoratesystemprototypes",
                "stacktrace_type",
                "stacktrace_svce",
                "exceptiondetails_type",
                "exceptiondetails_svce",
                "console_type",
                "console_svce",
                "traversals",
                "checks",
                "identifier_type",
                "identifier_svce",
                "record_type",
                "recordingpolicy_type",
                "recordingpolicy_keepall_type",
                "recordingpolicy_keepsome_type",
                "recordingpolicy_keeprecent_type",
                "dumpingpolicy_type",
                "dumpingpolicy_filterkinds_type",
                "dumpingpolicy_triggerkinds_type",
                "recorder_type",
                "recorder_svce",
                "eventkinds_common",
                "common_type"
            ],
            aMod_definer
        );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_svce"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "lowinstrument", "decoratesystemprototypes"),
                nomod.fComputeFullName( "prettytype", "exceptionstack", "stacktrace_type"),
                nomod.fComputeFullName( "prettytype", "exceptionstack", "stacktrace_svce"),
                nomod.fComputeFullName( "prettytype", "exceptionstack", "exceptiondetails_type"),
                nomod.fComputeFullName( "prettytype", "exceptionstack", "exceptiondetails_svce"),
                nomod.fComputeFullName( "prettytype", "console", "console_type"),
                nomod.fComputeFullName( "prettytype", "console", "console_svce"),
                nomod.fComputeFullName( "prettytype", "utils", "traversals"),
                nomod.fComputeFullName( "prettytype", "utils", "checks"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"),
                nomod.fComputeFullName( "prettytype", "recording", "record_type"),
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_type"),
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_keepall_type"),
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_keepsome_type"),
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_keeprecent_type"),
                nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_type"),
                nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_filterkinds_type"),
                nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_triggerkinds_type"),
                nomod.fComputeFullName( "prettytype", "recording", "recorder_type"),
                nomod.fComputeFullName( "prettytype", "recording", "recorder_svce"),
                nomod.fComputeFullName( "prettytype", "eventkinds", "eventkinds_common"),
                nomod.fComputeFullName( "prettytype", "common", "common_type")
            ],
            aMod_definer
        );
        
    }
    
    
})();





