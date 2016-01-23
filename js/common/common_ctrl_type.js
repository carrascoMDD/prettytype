/*
 * common_ctrl_type.js
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



function ModuleFactory_CommonCtrlType() {

    'use strict';

    return ( function(
              theSS_typesregistry,
              theSS_Overrider,
              theSS_WithProminstrType,
              theSS_AppBaseURLSvce,
              theSS_APIBaseURLSvce,
              theSS_location) {


        var ModuleName     = "common_ctrl_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_WithProminstrType,
                                     theS_AppBaseURLSvce,
                                     theS_APIBaseURLSvce,
                                     $location) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGEVENTS                        = true;

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
                theToInit.COMMONCTRL_DEFAULTTITLE = "CtrlDefaultName";


                theToInit.FILTERKIND_MENU      = "MENU";
                theToInit.FILTERKIND_CHECKBOX  = "CHECKBOX";
                theToInit.FILTERKIND_RADIO     = "RADIO";
                theToInit.FILTERKIND_NUMBER    = "NUMBER";
                theToInit.FILTERKIND_STRING    = "STRING";
                theToInit.FILTERKIND_DATE      = "STRING";

                theToInit.FILTERKINDS = [
                    theToInit.FILTERKIND_MENU,
                    theToInit.FILTERKIND_CHECKBOX,
                    theToInit.FILTERKIND_RADIO,
                    theToInit.FILTERKIND_NUMBER,
                    theToInit.FILTERKIND_STRING,
                    theToInit.FILTERKIND_DATE
                ];

                theToInit.UPDATEFILTERON_ROWSCHANGE      = "ROWSCHANGE";
                theToInit.UPDATEFILTERON_SELECTIONCHANGE = "SELECTIONCHANGE";

                theToInit.UPDATEFILTERONS = [
                    theToInit.UPDATEFILTERON_ROWSCHANGE,
                    theToInit.UPDATEFILTERON_SELECTIONCHANGE
                ];


                theToInit.LOCATIONPARMNAME_NAMES_SEPARATOR = ",";


                theToInit.CANDIDATESFIELDINJECTEDPARAMETER = "candidatesField";



                theToInit.LOCATIONPARMNAME_INITIALLOADGRIDNAMES  = "theInitialLoadGrids";
                theToInit.LOCATIONPARMNAME_AUTOEDITNAMES         = "theAutoEditors";
                theToInit.LOCATIONPARMNAME_AUTOSELECT            = "theAutoSelect";

                theToInit.LOCATIONPARMALLNAMES = "ALL";


                theToInit.MASTERPARMISOPTIONALSYMBOL = "optional";


                theToInit.PARENTSENTINEL = "fParentCtrl()";

                theToInit.RETRIEVALWITHPARENTSENTINEL = theToInit.PARENTSENTINEL + ".";

                theToInit.RETRIEVALTARGETSUPPLIERPARENTSENTINEL = theToInit.RETRIEVALWITHPARENTSENTINEL;

                theToInit.DOTARGETSENTINEL_WIREOWNER = "fWireOwner()";
                theToInit.DOTARGETSENTINEL_FROMCTRL  = "fFromCtrl()";
                theToInit.DOTARGETSENTINEL_TOCTRL    = "fToCtrl()";

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






            var aCommonCtrl_Prototype = (function() {



                var aPrototype = new theS_WithProminstrType.WithProminstr_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;



                aPrototype._v_Type = "CommonCtrl";

                aPrototype._v_Module = null;

                aPrototype._v_Scope = null;

                aPrototype._v_UIhandlersEnabled = null;

                aPrototype._v_AppBaseURL    = null;
                aPrototype._v_APIBaseURL    = null;
                aPrototype._v_LocationQuery = null;
                aPrototype._v_LocationURL  = null;

                aPrototype._v_LastActionReport = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder, theScope) {

                    this._pInit_CommonCtrl( theTitle, theIdentifier, theRecorder, theScope);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.COMMONCTRL_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_CommonCtrl = function( theTitle, theIdentifier, theRecorder, theScope) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_WithProminstr.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Scope = theScope;

                    this._v_UIhandlersEnabled = true;

                    this._v_AppBaseURL    = null;
                    this._v_APIBaseURL    = null;
                    this._v_LocationQuery = null;
                    this._v_LocationURL  = null;

                    this._v_LastActionReport = null;

                    this._pListenToDestroy();
                };
                if( _pInit_CommonCtrl){}/* CQT */
                aPrototype._pInit_CommonCtrl = _pInit_CommonCtrl;








                var _pListenToDestroy = function( ) {

                    if( !this._v_Scope) {
                        return;
                    }

                    var aThis = this;
                    this._v_Scope.$on( "$destroy", function() {
                        aThis.pDestroy();
                    });
                };
                if( _pListenToDestroy){}/* CQT */
                aPrototype._pListenToDestroy = _pListenToDestroy;







                var fWasDestroyed = function( ) {

                    var aWasDestroyed = ( this._v_Scope == null) ? true : false;
                    if( aWasDestroyed){}/* CQT */

                    return aWasDestroyed;
                };
                if( fWasDestroyed){}/* CQT */
                aPrototype.fWasDestroyed = fWasDestroyed;








                var pDestroy = function( ) {

                    this._v_Scope = null;

                    this._v_UIhandlersEnabled = null;

                    this._v_AppBaseURL    = null;
                    this._v_APIBaseURL    = null;
                    this._v_LocationQuery = null;
                    this._v_LocationURL  = null;

                    this._v_LastActionReport = null;
                };
                if( pDestroy){}/* CQT */
                aPrototype.pDestroy = pDestroy;






                var fUIhandlersEnabled = function() {

                    return this._v_UIhandlersEnabled;
                };
                if( fUIhandlersEnabled){}/* CQT */
                aPrototype.fUIhandlersEnabled = fUIhandlersEnabled;






                var fprDo_EnableUIhandlers = function() {

                    this._v_UIhandlersEnabled = true;

                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_EnableUIhandlers){}/* CQT */
                aPrototype.fprDo_EnableUIhandlers = fprDo_EnableUIhandlers;






                var fprDo_DisableUIhandlers = function() {

                    this._v_UIhandlersEnabled = false;

                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_DisableUIhandlers){}/* CQT */
                aPrototype.fprDo_DisableUIhandlers = fprDo_DisableUIhandlers;








                var pLogEvent = function( theEvent, theData, theDetails) {

                    if( !this.LOGEVENTS) {
                        return;
                    }


                    if( !theEvent) {
                        return;
                    }

                    this.fRecord( null, theEvent, theData, null, theDetails);
                };
                if( pLogEvent){}/* CQT */
                aPrototype.pLogEvent = pLogEvent;









                var pInitFromLocationURLquery = function( ) {

                    this._v_LocationQuery = $location.search();
                };
                if( pInitFromLocationURLquery){}/* CQT */
                aPrototype.pInitFromLocationURLquery = pInitFromLocationURLquery;




                var pInitFromLocationURL = function( ) {

                    this._v_LocationURL = $location.url();
                };
                if( pInitFromLocationURL){}/* CQT */
                aPrototype.pInitFromLocationURL = pInitFromLocationURL;





                var pInitFromAppBaseURL = function( ) {

                    this._v_AppBaseURL    = theS_AppBaseURLSvce.fAppBaseURL();
                };
                if( pInitFromAppBaseURL){}/* CQT */
                aPrototype.pInitFromAppBaseURL = pInitFromAppBaseURL;





                var pInitFromAPIBaseURL = function( ) {

                    this._v_APIBaseURL    = theS_APIBaseURLSvce.fAPIBaseURL();
                };
                if( pInitFromAPIBaseURL){}/* CQT */
                aPrototype.pInitFromAPIBaseURL = pInitFromAPIBaseURL;





                var fAppBaseURL = function() {

                    if( this._v_AppBaseURL) {
                        return this._v_AppBaseURL;
                    }

                    this.pInitFromAppBaseURL();

                    return this._v_AppBaseURL;
                };
                if( fAppBaseURL){}/* CQT */
                aPrototype.fAppBaseURL = fAppBaseURL;






                var pInitFromAPIBaseURL = function( ) {

                    this._v_APIBaseURL    = theS_APIBaseURLSvce.fAPIBaseURL();
                };
                if( pInitFromAPIBaseURL){}/* CQT */
                aPrototype.pInitFromAPIBaseURL = pInitFromAPIBaseURL;





                var fAPIBaseURL = function() {

                    if( this._v_APIBaseURL) {
                        return this._v_APIBaseURL;
                    }

                    this.pInitFromAPIBaseURL();

                    return this._v_APIBaseURL;
                };
                if( fAPIBaseURL){}/* CQT */
                aPrototype.fAPIBaseURL = fAPIBaseURL;








                var fprDo_InitialExtra = function() {

                    this.pInitFromAppBaseURL();

                    this.pInitFromAPIBaseURL();

                    return this.fNewDeferredResolveWithNothingPromise();
                };
                if( fprDo_InitialExtra){}/* CQT */
                aPrototype.fprDo_InitialExtra = fprDo_InitialExtra;







                var fprDo_Initial = function() {

                    return this.fprDo_InitialExtra();
                };
                if( fprDo_Initial){}/* CQT */
                aPrototype.fprDo_Initial = fprDo_Initial;











                var fInspectFromTemplate = function( theLabel, theArg1, theArg2, theArg3, theArg4, theArg5, theArg6) {
                    if( theLabel || theArg1 || theArg2 || theArg3 || theArg4 || theArg5 || theArg6){}/* CQT */

                    return true;
                };
                if( fInspectFromTemplate){}/* CQT */
                aPrototype.fInspectFromTemplate = fInspectFromTemplate;






                var fNewDescribe = function( theFieldName, theFieldLabel, theParmName) {

                    return {
                        fieldName:  theFieldName,
                        fieldLabel: theFieldLabel,
                        parmName:   theParmName
                    };
                };
                if( fNewDescribe){}/* CQT */
                aPrototype.fNewDescribe = fNewDescribe;






                return aPrototype;

            })();




            var CommonCtrl_Constructor = function( theTitle, theIdentifier, theRecorder, theScope) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Scope = null;

                this._v_UIhandlersEnabled = true;

                this._v_AppBaseURL    = null;
                this._v_APIBaseURL    = null;
                this._v_LocationQuery = null;
                this._v_LocationURL  = null;

                this._v_LastActionReport = null;
                this._v_LastActionIsError = null;

                this._pInit_CommonCtrl( theTitle, theIdentifier, theRecorder, theScope);
            };
            CommonCtrl_Constructor.prototype = aCommonCtrl_Prototype;





            var CommonCtrl_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_WithProminstrType.WithProminstr_Prototype;

                this._v_Prototype = aCommonCtrl_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Scope = null;

                this._v_UIhandlersEnabled = true;

                this._v_AppBaseURL    = null;
                this._v_APIBaseURL    = null;
                this._v_LocationQuery = null;
                this._v_LocationURL  = null;

                this._v_LastActionReport = null;
                this._v_LastActionIsError = null;
            };
            CommonCtrl_SuperPrototypeConstructor.prototype = aCommonCtrl_Prototype;



            var aModule = {
                "CommonCtrl_Prototype": aCommonCtrl_Prototype,
                "CommonCtrl_Constructor": CommonCtrl_Constructor,
                "CommonCtrl_SuperPrototypeConstructor": CommonCtrl_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aCommonCtrl_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_WithProminstrType,
                theSS_AppBaseURLSvce,
                theSS_APIBaseURLSvce,
                theSS_location
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}







