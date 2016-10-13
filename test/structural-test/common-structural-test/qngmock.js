/*
 * qngmock.js
 *
 * Created @author Antonio Carrasco Valero 201601242125
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




function ModuleFactory_QngMock() {

    'use strict';

    return ( function( ) {


        var ModuleName     = "qngmock";
        var ModulePackages = "test/common-test";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function() {


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






            var aQngMock_Prototype = (function() {



                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "QngMock";

                aPrototype._v_Prototype_QngMock = aPrototype;

                aPrototype._v_Module = null;




                var _pInit = function( ) {

                    this._pInit_QngMock( );
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;










                var _pInit_QngMock = function() {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                };
                if( _pInit_QngMock){}/* CQT */
                aPrototype._pInit_QngMock = _pInit_QngMock;












                var defer = function() {

                    var aDeferred = { "deferred": true};
                    if( aDeferred){}/* CQT */


                    return aDeferred;
                };
                if( defer){}/* CQT */
                aPrototype.defer = defer;









                var all = function( thePromises) {

                    var aPromiseAll = { "all": thePromises};
                    if( aPromiseAll){}/* CQT */

                    return aPromiseAll;
                };
                if( all){}/* CQT */
                aPrototype.all = all;








                return aPrototype;

            })();




            var QngMock_Constructor = function( ) {

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._pInit_QngMock( );
            };
            QngMock_Constructor.prototype = aQngMock_Prototype;





            var QngMock_SuperPrototypeConstructor = function() {


                this._v_Prototype = aQngMock_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

            };
            QngMock_SuperPrototypeConstructor.prototype = aQngMock_Prototype;



            var aModule = {
                "QngMock_Prototype": aQngMock_Prototype,
                "QngMock_Constructor": QngMock_Constructor,
                "QngMock_SuperPrototypeConstructor": QngMock_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aQngMock_Prototype._v_Module = aModule;





            return aModule;
        };







        var aDefinedModule = aMod_definer();
        if( aDefinedModule){}/*CQT*/

        return aDefinedModule;

    });
}







