/*
 * locationngmock.js
 *
 * Created @author Antonio Carrasco Valero 201601250107
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 Jasmine tests in Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

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




function ModuleFactory_LocationngMock() {

    'use strict';

    return ( function( ) {


        var ModuleName     = "locationngmock";
        var ModulePackages = "test/common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function() {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleConstants = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.URL_MOCK = "http://www.URL_MOCK.com";
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






            var aLocationngMock_Prototype = (function() {



                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "LocationngMock";

                aPrototype._v_Prototype_LocationngMock = aPrototype;

                aPrototype._v_Module = null;




                var _pInit = function( ) {

                    this._pInit_LocationngMock( );
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;










                var _pInit_LocationngMock = function() {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                };
                if( _pInit_LocationngMock){}/* CQT */
                aPrototype._pInit_LocationngMock = _pInit_LocationngMock;












                var search = function() {

                    var aSearch = { "parm1": "parm1val"};
                    if( aSearch){}/* CQT */

                    return aSearch;
                };
                if( search){}/* CQT */
                aPrototype.search = search;









                var url = function() {

                    return this.URL_MOCK;

                };
                if( url){}/* CQT */
                aPrototype.url = url;








                return aPrototype;

            })();




            var LocationngMock_Constructor = function( ) {

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_LocationngMock( );
            };
            LocationngMock_Constructor.prototype = aLocationngMock_Prototype;





            var LocationngMock_SuperPrototypeConstructor = function() {


                this._v_Prototype = aLocationngMock_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

            };
            LocationngMock_SuperPrototypeConstructor.prototype = aLocationngMock_Prototype;



            var aModule = {
                "LocationngMock_Prototype": aLocationngMock_Prototype,
                "LocationngMock_Constructor": LocationngMock_Constructor,
                "LocationngMock_SuperPrototypeConstructor": LocationngMock_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aLocationngMock_Prototype._v_Module = aModule;





            return aModule;
        };







        var aDefinedModule = aMod_definer();
        if( aDefinedModule){}/*CQT*/

        return aDefinedModule;

    });
}







