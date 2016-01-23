/*
 * decoratesystemprototypes_svce.js
 *
 * Creado @author Antonio Carrasco Valero 201412070820
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 uiwire asynchronous user interface written by Antonio Carrasco Valero in Javascript with AngularJS and licensed under EUPL  http://www.uiwire.org

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





function ModuleFactory_DecoratesystemprototypesSvce() {

    'use strict';

    return ( function(){



        var aMod_definer = function() {


            var ModuleName     = "decoratesystemprototypes_svce";
            var ModulePackages = "utils";
            var ModuleFullName = ModulePackages + "/" + ModuleName;


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                }
            };




            var ModuleConstants = {};
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






            var fStringExtend = function( theString, theLen) {

                if( !theLen) {
                    return "";
                }

                var aThisLen = theString.length;
                if( !aThisLen) {
                    return "";
                }

                var aSource = theString;
                var aNumRepeats = Math.floor( theLen / aThisLen);
                aNumRepeats += 1;
                if( aNumRepeats > 1) {

                    if( aNumRepeats > 10000) {
                        aNumRepeats = 10000;
                    }
                    aSource = Array.apply(null, new Array( aNumRepeats)).map(String.prototype.valueOf, theString).join( "");
                }

                var aExtended = aSource.slice( 0, theLen);
                if( aExtended){}/* CQT */

                return aExtended;
            };
            if( fStringExtend){}/* CQT */
            aModule.fStringExtend = fStringExtend;





            if( !String.prototype.Xtnd) {
                String.prototype.Xtnd = function( theLen) {

                    return aModule.fStringExtend( this, theLen);
                };
            }





            return aModule;
        };






        var aService = aMod_definer();
        if( aService){}/* CQT */

        return aService;

    });
}







