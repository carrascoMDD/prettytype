/*
 * console_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

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






function ModuleFactory_ConsoleSvce() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider) {


        var ModuleName     = "console_svce";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








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







            var aModule = { };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;



            aModule._v_WriteToConsole          = aModule.WRITETOCONSOLE;
            aModule._v_CollectLogs             = aModule.COLLECTLOGS;
            aModule._v_MaxCollectedLogsLength  = aModule.MAXCOLLECTEDLOGSLENGTH;


            aModule._v_CollectedLogs           = [ ];
            aModule._v_CollectedLogsSize       = 0;







            var pSetWriteToConsole = function( theWriteToConsole) {

                aModule._v_WriteToConsole = ( theWriteToConsole? true : false);

            };
            if( pSetWriteToConsole){}/* CQT */
            aModule.pSetWriteToConsole = pSetWriteToConsole;







            var pSetCollectLogs = function( theCollectLogs) {

                if( theCollectLogs) {

                    aModule._v_CollectLogs = true;

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs      = [ ];
                        aModule._v_CollectedLogsSize  = 0;
                    }
                }
                else {
                    aModule._v_CollectLogs        = false;
                    aModule._v_CollectedLogs      = [ ];
                    aModule._v_CollectedLogsSize  = 0;
                }
            };
            if( pSetCollectLogs){}/* CQT */
            aModule.pSetCollectLogs = pSetCollectLogs;





            var pSetMaxCollectedLogsLength = function( theMaxCollectedLogsLength) {

                aModule._v_MaxCollectedLogsLength = theMaxCollectedLogsLength;

                aModule.pEnforceMaxCollectedLogsLength("");

            };
            if( pSetMaxCollectedLogsLength){}/* CQT */
            aModule.pSetMaxCollectedLogsLength = pSetMaxCollectedLogsLength;








            var fCollectedLogs = function() {

               return aModule._v_CollectedLogs;

            };
            if( fCollectedLogs){}/* CQT */
            aModule.fCollectedLogs = fCollectedLogs;






            var fCollectedLogsCopy = function() {

                if( !aModule._v_CollectedLogs) {
                    return null;
                }

                return aModule._v_CollectedLogs.slice();

            };
            if( fCollectedLogsCopy){}/* CQT */
            aModule.fCollectedLogsCopy = fCollectedLogsCopy;







            var log = function( theMessage) {

                if( aModule._v_CollectLogs) {

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs = [ ];
                    }

                    aModule._v_CollectedLogs.push( [ "log", theMessage]);

                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }


                if( aModule._v_WriteToConsole) {

                    console.log( theMessage);
                }

            };
            if( log){}/* CQT */
            aModule.log = log;







            var error = function( theMessage) {

                if( aModule._v_CollectLogs) {

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs = [ ];
                    }

                    aModule._v_CollectedLogs.push( [ "error", theMessage]);

                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }


                if( aModule._v_WriteToConsole) {

                    console.error( theMessage);
                }

            };
            if( error){}/* CQT */
            aModule.error = error;




            
            


            var info = function( theMessage) {

                if( aModule._v_CollectLogs) {

                    if( !aModule._v_CollectedLogs) {
                        aModule._v_CollectedLogs = [ ];
                    }

                    aModule._v_CollectedLogs.push( [ "info", theMessage]);

                    aModule.pEnforceMaxCollectedLogsLength( theMessage);
                }


                if( aModule._v_WriteToConsole) {

                    console.log( theMessage);
                }

            };
            if( info){}/* CQT */
            aModule.info = info;






            var clear = function() {

                aModule._v_CollectedLogs     = [ ];
                aModule._v_CollectedLogsSize = 0;

                if( aModule._v_WriteToConsole) {

                    console.clear();
                }

            };
            if( clear){}/* CQT */
            aModule.clear = clear;








            var pEnforceMaxCollectedLogsLength = function( theMessage) {

                if( !aModule._v_CollectLogs) {
                    return;
                }

                var aMessageLen = ( ( typeof theMessage == "string") ? theMessage.length : 0);

                aModule._v_CollectedLogsSize += aMessageLen;

                if( aModule._v_MaxCollectedLogsLength <= 0) {
                    return;
                }


                while( true) {

                    if( aModule._v_CollectedLogsSize <= aModule._v_MaxCollectedLogsLength) {
                        return;
                    }

                    if( aModule._v_CollectLogs.length <= 1) {
                        return;
                    }

                    var aRemovedKindAndMessage = aModule._v_CollectedLogs.shift();

                    var aRemovedMessage = aRemovedKindAndMessage[ 1];
                    var aRemovedMessageLen = ( ( typeof aRemovedMessage == "string") ? aRemovedMessage.length : 0);

                    aModule._v_CollectedLogsSize -= aRemovedMessageLen;
                }


            };
            if( pEnforceMaxCollectedLogsLength){}/* CQT */
            aModule.pEnforceMaxCollectedLogsLength = pEnforceMaxCollectedLogsLength;






            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}






