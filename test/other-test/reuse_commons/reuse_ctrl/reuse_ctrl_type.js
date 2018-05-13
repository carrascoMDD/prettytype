'use strict';

/*
 * reuse_ctrl_type.js
 *
 * Created @author Antonio Carrasco Valero 201410112053
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






angular.module("reuseCtrlTypes").factory("ReuseCtrlType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonCtrlType",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CommonCtrlType) {




        var ModuleName     = "reuse_ctrl_type";
        var ModulePackages = "test/reuse_commons/reuse_ctrl";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_CommonCtrlType) {


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
                    return;
                }
                theToInit.DEFAULTTITLE = "ReuseCtrlDefaultName";

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






            var aReuseCtrl_Prototype = (function() {


                var aPrototype = new theS_CommonCtrlType.CommonCtrl_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;


                aPrototype._v_Type = "ReuseCtrl";

                aPrototype._v_Prototype_ReuseCtrl = aPrototype;

                aPrototype._v_Module = null;


                aPrototype._v_DomIdPrefix = null;






                var _pInit = function( theTitle,
                                       theIdentifier,
                                       theRecorder,
                                       theScope,
                                       theDomIdPrefix) {

                    this._pInit_ReuseCtrl(
                        theTitle,
                        theIdentifier,
                        theRecorder,
                        theScope,
                        theDomIdPrefix);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_ReuseCtrl = function( theTitle,
                                                 theIdentifier,
                                                 theRecorder,
                                                 theScope,
                                                 theDomIdPrefix) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_CommonCtrl.apply( this, [ theTitle, theIdentifier, theRecorder, theScope]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;


                    this._v_DomIdPrefix = theDomIdPrefix;

                    if( this._v_DomIdPrefix){}/* CQT */
                };
                if( _pInit_ReuseCtrl){}/* CQT */
                aPrototype._pInit_ReuseCtrl = _pInit_ReuseCtrl;








                var fprDo_InitialExtra = function() {

                    return aPrototype._v_SuperPrototype.fprDo_InitialExtra.apply( this);
                };
                if( fprDo_InitialExtra){}/* CQT */
                aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;








                var fprDo_Initial = function() {

                    return this.fprDo_InitialExtra();
                };
                if( fprDo_Initial){}/* CQT */
                aPrototype.fprDo_Initial = fprDo_Initial;


















                var pSetDomIdPrefix = function( theDomIdPrefix) {

                    this._v_DomIdPrefix  = theDomIdPrefix;
                };
                if( pSetDomIdPrefix){}/* CQT */
                aPrototype.pSetDomIdPrefix = pSetDomIdPrefix;






                var fDomIdPrefix = function( ) {

                    return this._v_DomIdPrefix;
                };
                if( fDomIdPrefix){}/* CQT */
                aPrototype.fDomIdPrefix = fDomIdPrefix;












                return aPrototype;

            })();




            var ReuseCtrl_Constructor = function( theTitle,
                                                  theIdentifier,
                                                  theRecorder,
                                                  theScope,
                                                  theDomIdPrefix) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_DomIdPrefix = null;

                this._pInit_ReuseCtrl(
                    theTitle,
                    theIdentifier,
                    theRecorder,
                    theScope,
                    theDomIdPrefix);
            };
            ReuseCtrl_Constructor.prototype = aReuseCtrl_Prototype;







            var ReuseCtrl_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonCtrlType.CommonCtrl_Prototype;

                this._v_Prototype = aReuseCtrl_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_DomIdPrefix = null;
            };
            ReuseCtrl_SuperPrototypeConstructor.prototype = aReuseCtrl_Prototype;



            var aModule = {
                "ReuseCtrl_Prototype": aReuseCtrl_Prototype,
                "ReuseCtrl_Constructor": ReuseCtrl_Constructor,
                "ReuseCtrl_SuperPrototypeConstructor": ReuseCtrl_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;

            aReuseCtrl_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonCtrlType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    }]);







