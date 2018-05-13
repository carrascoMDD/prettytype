/*
 * console_svce.js
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




(function () {
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "console_svce";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.WRITETOCONSOLE          = true;
                theToInit.COLLECTLOGS             = false;
                theToInit.MAXCOLLECTEDLOGSLENGTH  = 16 * 1024 * 1024;
                
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
                    return;
                }
    
                theToInit._g_WriteToConsole          = ModuleConstants.WRITETOCONSOLE;
                theToInit._g_CollectLogs             = ModuleConstants.COLLECTLOGS;
                theToInit._g_MaxCollectedLogsLength  = ModuleConstants.MAXCOLLECTEDLOGSLENGTH;
    
                theToInit._g_CollectedLogs           = [ ];
                theToInit._g_CollectedLogsSize       = 0;
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

            
        
            
            
            
            
            
            
            
            var pSetWriteToConsole = function( theWriteToConsole) {
                
                aModule.ModuleGlobals._g_WriteToConsole = ( theWriteToConsole? true : false);
                
            };
            if( pSetWriteToConsole){}/* CQT */
            aModule.pSetWriteToConsole = pSetWriteToConsole;
            
            
            
            
            
            
            
            var pSetCollectLogs = function( theCollectLogs) {
                
                if( theCollectLogs) {
                    
                    aModule.ModuleGlobals._g_CollectLogs = true;
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs      = [ ];
                        aModule.ModuleGlobals._g_CollectedLogsSize  = 0;
                    }
                }
                else {
                    aModule.ModuleGlobals._g_CollectLogs        = false;
                    aModule.ModuleGlobals._g_CollectedLogs      = [ ];
                    aModule.ModuleGlobals._g_CollectedLogsSize  = 0;
                }
            };
            if( pSetCollectLogs){}/* CQT */
            aModule.pSetCollectLogs = pSetCollectLogs;
            
            
            
            
            
            var pSetMaxCollectedLogsLength = function( theMaxCollectedLogsLength) {
                
                aModule.ModuleGlobals._g_MaxCollectedLogsLength = theMaxCollectedLogsLength;
                
                aModule.pEnforceMaxCollectedLogsLength("");
                
            };
            if( pSetMaxCollectedLogsLength){}/* CQT */
            aModule.pSetMaxCollectedLogsLength = pSetMaxCollectedLogsLength;
            
            
            
            
            
            
            
            
            var fCollectedLogs = function() {
                
                return aModule.ModuleGlobals._g_CollectedLogs;
                
            };
            if( fCollectedLogs){}/* CQT */
            aModule.fCollectedLogs = fCollectedLogs;
            
            
            
            
            
            
            var fCollectedLogsCopy = function() {
                
                if( !aModule.ModuleGlobals._g_CollectedLogs) {
                    return null;
                }
                
                return aModule.ModuleGlobals._g_CollectedLogs.slice();
                
            };
            if( fCollectedLogsCopy){}/* CQT */
            aModule.fCollectedLogsCopy = fCollectedLogsCopy;
            
            
            
            
            
            
            
            var log = function( theMessage) {
                
                if( aModule.ModuleGlobals._g_CollectLogs) {
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs = [ ];
                    }
                    
                    aModule.ModuleGlobals._g_CollectedLogs.push( [ "log", theMessage]);
                    
                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }
                
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.log( theMessage);
                }
                
            };
            if( log){}/* CQT */
            aModule.log = log;
            
            
            
            
            
            
            
            var error = function( theMessage) {
                
                if( aModule.ModuleGlobals._g_CollectLogs) {
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs = [ ];
                    }
                    
                    aModule.ModuleGlobals._g_CollectedLogs.push( [ "error", theMessage]);
                    
                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }
                
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.error( theMessage);
                }
                
            };
            if( error){}/* CQT */
            aModule.error = error;
            
            
            
            
            
            
            
            
            var info = function( theMessage) {
                
                if( aModule.ModuleGlobals._g_CollectLogs) {
                    
                    if( !aModule.ModuleGlobals._g_CollectedLogs) {
                        aModule.ModuleGlobals._g_CollectedLogs = [ ];
                    }
                    
                    aModule.ModuleGlobals._g_CollectedLogs.push( [ "info", theMessage]);
                    
                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }
                
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.log( theMessage);
                }
                
            };
            if( info){}/* CQT */
            aModule.info = info;
            
            
            
            
            
            
            var clear = function() {
                
                aModule.ModuleGlobals._g_CollectedLogs     = [ ];
                aModule.ModuleGlobals._g_CollectedLogsSize = 0;
                
                if( aModule.ModuleGlobals._g_WriteToConsole) {
                    
                    console.clear();
                }
                
            };
            if( clear){}/* CQT */
            aModule.clear = clear;
            
            
            
            
            
            
            
            
            var pEnforceMaxCollectedLogsLength = function( theMessage) {
                
                if( !aModule.ModuleGlobals._g_CollectLogs) {
                    return;
                }
                
                var aMessageLen = ( ( typeof theMessage === "string") ? theMessage.length : 0);
                if( aMessageLen){}/* CQT */
    
                aModule.ModuleGlobals._g_CollectedLogsSize += aMessageLen;
                
                if( aModule.ModuleGlobals._g_MaxCollectedLogsLength <= 0) {
                    return;
                }
                
                
                while( true) {
                    
                    if( aModule.ModuleGlobals._g_CollectedLogsSize <= aModule.ModuleGlobals._g_MaxCollectedLogsLength) {
                        return;
                    }
                    
                    if( aModule.ModuleGlobals._g_CollectLogs.length <= 1) {
                        return;
                    }
                    
                    var aRemovedKindAndMessage = aModule.ModuleGlobals._g_CollectedLogs.shift();
                    
                    var aRemovedMessage = aRemovedKindAndMessage[ 1];
                    var aRemovedMessageLen = ( ( typeof aRemovedMessage === "string") ? aRemovedMessage.length : 0);
                    if( aRemovedMessageLen){}/* CQT */
    
                    aModule.ModuleGlobals._g_CollectedLogsSize -= aRemovedMessageLen;
                }
                
                
            };
            if( pEnforceMaxCollectedLogsLength){}/* CQT */
            aModule.pEnforceMaxCollectedLogsLength = pEnforceMaxCollectedLogsLength;
            
            
            
            
            
            
            return aModule;
        };
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
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
        
        angular.module("consoleSvce", [
            "typesRegistry",
            "modbootTypes"
        ]).factory("ConsoleSvce",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider_svce = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_console_svce",
            [
                "m_typesregistry",
                "m_overrider_svce"
            ],
            aMod_definer);
        
    }
    
})();
    
    




