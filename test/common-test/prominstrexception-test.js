/*
 * prominstrexception.js
 *
 * Creado @author Antonio Carrasco Valero 201410141126
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




function ModuleFactory_ProminstrException() {

    'use strict';


    return ( function(){


        var ModuleName     = "prominstrexception";
        var ModulePackages = "prominstr";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function() {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGEXCEPTIONS = true;
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







            var ProminstrException_Constructor = function( theRecord) {

                pgInitFromModuleConstants( this);

                this._v_Type  = "ProminstrException";
                this._v_Id    = new Date().toISOString();
                this._v_Title = "ProminstrException";

                this._v_Trace = printStackTrace();

                this._v_Record = theRecord;



                var aThis = this;



                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "type": aThis._v_Type,
                        "id":   aThis._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                this.fIdentifyingJSON = fIdentifyingJSON;






                var fIdentifyingString = function() {

                    var aIdentifyingJSON = aThis.fIdentifyingJSON();

                    var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                this.fIdentifyingString = fIdentifyingString;







                var fIdentifyingWithTitleJSON = function() {

                    var aIdentifyingJSON = aThis.fIdentifyingJSON();

                    aIdentifyingJSON[ "title"] = aThis._v_Title;

                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                this.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






                var fIdentifyingWithTitleString = function() {

                    var aIdentifyingJSON = aThis.fIdentifyingWithTitleJSON();

                    var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    if( aIdentifyingString){}/* CQT */

                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                this.fIdentifyingWithTitleString = fIdentifyingWithTitleString;




                var fFullTypeNameString = function() {

                    var aFullTypeName = aThis._v_Module.ModuleFullName + "." + aThis._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                this.fFullTypeNameString = fFullTypeNameString;






                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( theAlready.fAlready( aThis)){
                            return aThis.fIdentifyingJSON();
                        }
                    }

                    var aResultJSON = aThis.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */

                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                this.fToResultJSON = fToResultJSON;










                var fConvertValueToJSON = function() {

                    var aJSON = aThis.fIdentifyingWithTitleJSON();

                    if( aThis._v_Record) {
                        if( aThis._v_Record.fAsLogObject) {
                            aJSON[ "record"] = aThis._v_Record.fAsLogObject()
                        }
                    }


                    if( aThis._v_Trace) {
                        aJSON[ "trace"] = aThis._v_Trace;
                    }

                    return aJSON;
                };
                if( fConvertValueToJSON){}/* CQT */
                this.fConvertValueToJSON = fConvertValueToJSON;







                var toString = function() {

                    var aLog = aThis.fConvertValueToJSON();

                    var aString = null;
                    try {
                        aString = JSON.stringify( aLog);
                    }
                    catch( anException) {
                    }

                    if( aString == null) {
                        aString = aThis.fIdentifyingWithTitleString();
                    }

                    return aString;
                };
                if( toString){}/* CQT */
                this.toString = toString;






                if( this.LOGEXCEPTIONS) {
                    console.log( this.toString());
                }



            };
            ProminstrException_Constructor.prototype = Error.prototype;








            var aModule = {
                "ProminstrException_Constructor": ProminstrException_Constructor
            };

            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;







            return aModule;
        };



        var aService = aMod_definer();
        if( aService){}/* CQT */

        return aService;

    });
}




















