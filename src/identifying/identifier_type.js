/*
 * identifier_type.js
 *
 * Creado @author Antonio Carrasco Valero 201410030300
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





function ModuleFactory_IdentifierType() {

    'use strict';

    return ( function(
          theSS_typesregistry,
          theSS_Overrider) {


        var ModuleName     = "identifier_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider) {


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
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }
                theToInit.IDENTIFIER_DEFAULTTITLE = "IdentifierDefaultName";
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








            var aIdentifier_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "Identifier";

                aPrototype._v_Prototype_Identifier = aPrototype;

                aPrototype._v_Module = null;

                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;

                aPrototype._v_IdsCounter = null;







                var _pInit = function( theTitle) {

                    this._pInit_Identifier( theTitle);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _fTitleDefault = function( ) {

                   return this.IDENTIFIER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_Identifier = function( theTitle) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Id    = null;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    this._v_IdsCounter = 0;

                    this._v_Id = this.fReserveId();

                };
                if( _pInit_Identifier){}/* CQT */
                aPrototype._pInit_Identifier = _pInit_Identifier;







                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
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










                var fReserveId = function() {

                    this._v_IdsCounter += 1;

                    var anId = this._v_IdsCounter;

                    return anId.toString();
                };
                if( fReserveId){}/* CQT */
                aPrototype.fReserveId = fReserveId;






                return aPrototype;

            })();




            var Identifier_Constructor = function( theTitle) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Title = null;

                this._pInit_Identifier( theTitle);
            };
            Identifier_Constructor.prototype = aIdentifier_Prototype;





            var Identifier_SuperPrototypeConstructor = function() {
                this._v_Prototype = aIdentifier_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Title     = null;
            };
            Identifier_SuperPrototypeConstructor.prototype = aIdentifier_Prototype;



            var aModule = {
                "Identifier_Prototype": aIdentifier_Prototype,
                "Identifier_Constructor": Identifier_Constructor,
                "Identifier_SuperPrototypeConstructor": Identifier_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aIdentifier_Prototype._v_Module = aModule;





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








