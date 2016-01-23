/*
 * typesregistry.js
 *
 * Creado @author Antonio Carrasco Valero 201409301309
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




function ModuleFactory_TypesRegistrySvce() {

    'use strict';

    return ( function(){



        var ModuleName     = "typesregistry";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        var aMod_definer = function() {



            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








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








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.TYPESREGISTRYDEFAULTNAME = "TypesRegistry_DefaultName";
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






            var aTypesRegistry_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "TypesRegistry";

                aPrototype._v_Module = null;


                aPrototype._v_Title = null;

                aPrototype._v_ModulesByFullName = null;







            var _pInit = function( theTitle) {

                this._pInit_TypesRegistry( theTitle);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_TypesRegistry = function( theTitle) {

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

                this._v_Title = theTitle;
                if( !this._v_Title) {
                    this._v_Title = this.TYPESREGISTRYDEFAULTNAME;
                }

                this._v_ModulesByFullName = { };
            };
            if( _pInit_TypesRegistry){}/* CQT */
            aPrototype._pInit_TypesRegistry = _pInit_TypesRegistry;









            var fIdentifyingJSON = function() {

                var aIdentifiyingJSON = {
                    "type": this._v_Type
                };
                if( aIdentifiyingJSON){}/* CQT */
                return aIdentifiyingJSON;
            };
            if( fIdentifyingJSON){}/* CQT */
            aPrototype.fIdentifyingJSON = fIdentifyingJSON;






            var fIdentifyingString = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingString){}/* CQT */
            aPrototype.fIdentifyingString = fIdentifyingString;







            var fIdentifyingWithTitleJSON = function() {

                var aIdentifyingJSON = this.fIdentifyingJSON();

                aIdentifyingJSON[ "title"] = this._v_Title;

                return aIdentifyingJSON;
            };
            if( fIdentifyingWithTitleJSON){}/* CQT */
            aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;






            var fIdentifyingWithTitleString = function() {

                var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

                var aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                if( aIdentifyingString){}/* CQT */

                return aIdentifyingString;
            };
            if( fIdentifyingWithTitleString){}/* CQT */
            aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;










            var fToResultJSON = function( theCommonObjects, theAlready) {
                if( !( theAlready == null)) {
                    if( theAlready.fAlready( this)){
                        return this.fIdentifyingJSON();
                    }
                }

                var aResultJSON = this.fIdentifyingWithTitleJSON();
                if( aResultJSON){}/* CQT */

                return aResultJSON;
            };
            if( fToResultJSON){}/* CQT */
            aPrototype.fToResultJSON = fToResultJSON;











            var fRegisterModule = function( theModule) {
                if( !theModule) {
                    return false;
                }

                var aModuleFullName = theModule.ModuleFullName;
                if( !aModuleFullName) {
                    return false;
                }

                var anAlreadyRegisteredModule =  this._v_ModulesByFullName[ aModuleFullName];
                if( !anAlreadyRegisteredModule) {
                    console.log( "\nAttempt to register another module " + aModuleFullName + "\n");
                    return false;
                }


                this._v_ModulesByFullName[ aModuleFullName] = theModule;

                return true;
            };
            if( fRegisterModule){}/* CQT */
            aPrototype.fRegisterModule = fRegisterModule;








            var fRegisteredModule = function( theModuleFullName) {
                if( !theModuleFullName) {
                    return null;
                }


                var aRegisteredModule =  this._v_ModulesByFullName[ theModuleFullName];
                if( !aRegisteredModule) {
                    return null;
                }

                return aRegisteredModule;
            };
            if( fRegisteredModule){}/* CQT */
            aPrototype.fRegisteredModule = fRegisteredModule;







            return aPrototype;

        })();




        var TypesRegistry_Constructor = function( theTitle) {
            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Title = null;

            this._v_ModulesByFullName = null;

            this._pInit_TypesRegistry( theTitle);
        };
        TypesRegistry_Constructor.prototype = aTypesRegistry_Prototype;





        var TypesRegistry_SuperPrototypeConstructor = function() {
            this._v_Prototype = aTypesRegistry_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Title     = null;

            this._v_ModulesByFullName = null;
        };
        TypesRegistry_SuperPrototypeConstructor.prototype = aTypesRegistry_Prototype;



        var aModule = {
            "TypesRegistry_Prototype": aTypesRegistry_Prototype,
            "TypesRegistry_Constructor": TypesRegistry_Constructor,
            "TypesRegistry_SuperPrototypeConstructor": TypesRegistry_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aTypesRegistry_Prototype._v_Module = aModule;




        return aModule;
    };




    var aModule = aMod_definer();

    var aService = new aModule.TypesRegistry_Constructor();
    if( aService){}/* CQT */

    return aService;

});
}







