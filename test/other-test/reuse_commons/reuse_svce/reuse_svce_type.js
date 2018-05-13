'use strict';

/*
 * reuse_svce_type.js
 *
 * Created @author Antonio Carrasco Valero 201601270218
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 Angular Wrappers as Controllers and Services on prettytype Javascript skeletons for modules including a base prototype and prototypes hierarchy, intended to be reused. licensed under EUPL  http://www.uiwire.org

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




angular.module("reuseSvceTypes").factory("ReuseSvceType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
    "IdentifierType",
    "$http",
function( theSS_typesregistry,
          theSS_Overrider,
          theSS_CommonSvceType,
          theSS_IdentifierType,
          theSS_Http){



    var ModuleName     = "reuse_svce_type";
    var ModulePackages = "test/reuse_commons/reuse_svce";
    var ModuleFullName = ModulePackages + "/" + ModuleName;





    var aMod_definer = function( theS_Overrider,
                                 theS_CommonSvceType,
                                 theS_IdentifierType,
                                 $http) {


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






        var aReuseSvce_Prototype = (function() {


            var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


            aPrototype._v_Type = "ReuseSvce";

            aPrototype._v_Prototype_ReuseSvce = aPrototype;

            aPrototype._v_Module = null;


            aPrototype._v_Traffic  = null;




            var _pInit = function( theTitle, theIdentifier, theRecorder) {

                this._pInit_ReuseSvce( theTitle, theIdentifier, theRecorder);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;







            var _pInit_ReuseSvce = function( theTitle, theIdentifier, theRecorder) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                    theTitle || this.HITSERVERSVCE_DEFAULTNAME,
                    theIdentifier,
                    theRecorder
                ]);

                this._v_Prototype = aPrototype;
                this._v_Type      = this._v_Prototype._v_Type;
                this._v_Module    = aPrototype._v_Module;


                this._v_Traffic    = [ ];

            };
            if( _pInit_ReuseSvce){}/* CQT */
            aPrototype._pInit_ReuseSvce = _pInit_ReuseSvce;







            return aPrototype;

        })();








        var ReuseSvce_Constructor = function( theTitle, theIdentifier, theRecorder) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Traffic           = null;

            this._pInit_ReuseSvce( theTitle, theIdentifier, theRecorder);
        };
        ReuseSvce_Constructor.prototype = aReuseSvce_Prototype;





        var ReuseSvce_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

            this._v_Prototype = aReuseSvce_Prototype;
            this._v_Type      = null;
            this._v_Module    = null;

            this._v_Traffic           = null;
        };
        ReuseSvce_SuperPrototypeConstructor.prototype = aReuseSvce_Prototype;



        var aModule = {
            "ReuseSvce_Prototype": aReuseSvce_Prototype,
            "ReuseSvce_Constructor": ReuseSvce_Constructor,
            "ReuseSvce_SuperPrototypeConstructor": ReuseSvce_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName      = ModuleName;
        aModule.ModulePackages  = ModulePackages;
        aModule.ModuleFullName  = ModuleFullName;
        aModule.ModuleConstants = ModuleConstants;

        aReuseSvce_Prototype._v_Module = aModule;




        return aModule;
    };







    var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
    if( !anExistingModule) {

        var aModule = aMod_definer(
            theSS_Overrider,
            theSS_CommonSvceType,
            theSS_IdentifierType,
            theSS_Http
        );
        anExistingModule = aModule;

        theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
    }



    return anExistingModule;


}]);







