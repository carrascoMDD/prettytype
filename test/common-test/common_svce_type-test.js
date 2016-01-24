/*
 * common_svce_type.js
 *
 * Creado @author Antonio Carrasco Valero 201409301309
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




function ModuleFactory_CommonSvceType() {

    'use strict';

    return ( function(
              theSS_typesregistry,
              theSS_Overrider,
              theSS_WithProminstrType,
              theSS_AppBaseURLSvce,
              theSS_APIBaseURLSvce) {


        var ModuleName     = "commonsvce_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WithProminstrType,
                                     theS_AppBaseURLSvce,
                                     theS_APIBaseURLSvce) {


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
                theToInit.COMMONSVCE_DEFAULTTITLE = "SvceDefaultName";
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






            var aCommonSvce_Prototype = (function() {



                var aPrototype = new theS_WithProminstrType.WithProminstr_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;



                aPrototype._v_Type = "CommonSvce";

                aPrototype._v_Prototype_CommonSvce = aPrototype;

                aPrototype._v_Module = null;








                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_CommonSvce( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.COMMONSVCE_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_CommonSvce = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WithProminstr.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;
                };
                if( _pInit_CommonSvce){}/* CQT */
                aPrototype._pInit_CommonSvce = _pInit_CommonSvce;







                var fAppBaseURL = function() {

                    var anAppBaseURL = theS_AppBaseURLSvce.fAppBaseURL();
                    if( anAppBaseURL){}/* CQT */

                    return anAppBaseURL;
                };
                if( fAppBaseURL){}/* CQT */
                aPrototype.fAppBaseURL = fAppBaseURL;





                var fAPIBaseURL = function() {

                    var anAppBaseURL = theS_APIBaseURLSvce.fAPIBaseURL();
                    if( anAppBaseURL){}/* CQT */

                    return anAppBaseURL;
                };
                if( fAPIBaseURL){}/* CQT */
                aPrototype.fAPIBaseURL = fAPIBaseURL;









                return aPrototype;

            })();




            var CommonSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_CommonSvce( theTitle, theIdentifier, theRecorder);
            };
            CommonSvce_Constructor.prototype = aCommonSvce_Prototype;





            var CommonSvce_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = aCommonSvce_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;
            };
            CommonSvce_SuperPrototypeConstructor.prototype = aCommonSvce_Prototype;



            var aModule = {
                "CommonSvce_Prototype": aCommonSvce_Prototype,
                "CommonSvce_Constructor": CommonSvce_Constructor,
                "CommonSvce_SuperPrototypeConstructor": CommonSvce_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aCommonSvce_Prototype._v_Module = aModule;





            return aModule;
        };






        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WithProminstrType,
                theSS_AppBaseURLSvce,
                theSS_APIBaseURLSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }





        return anExistingModule;

    });
}








