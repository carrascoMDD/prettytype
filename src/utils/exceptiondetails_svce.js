
/*
 * exceptiondetails_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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


(function() {
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider,
                                   theSS_stacktraceSvce){
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "exceptiondetails_svce";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_stacktraceSvce) {
    
            
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
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
            
            
    
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.LOGEXCEPTIONDETAILS = false;
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
    
    
            
            
    
            var aModule = { };
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
            
            
            
            
            
            var fgExceptionDetail = function( theException) {
                if( !theException) {
                    return null;
                }
                
                
                var anExceptionDetail = {
                    exception: theException.toString()
                };
                
                
                var anExceptionTrace = theS_stacktraceSvce( { e: theException});
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
            if( fgExceptionDetail){}/* CQT */
            aModule.fgExceptionDetail = fgExceptionDetail;
    
    
    
    
    
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
                theSS_stacktraceSvce
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
        
        
        angular.module("exceptiondetails", [
            "typesRegistry",
            "modbootTypes",
            "stacktrace"
        ]).factory("ExceptionDetailsSvce",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "StacktraceSvce",
            aMod_definer
        ]);
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry   = require('../modboot/typesregistry');
            var aM_overrider       = require('../modboot/overrider_svce');
            var aM_stacktrace_svce = require('./stacktrace_svce');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_stacktrace_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_exceptiondetails_svce",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_stacktrace_svce"
            ],
            aMod_definer
            );
    }
    
    
})();







