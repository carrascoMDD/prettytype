/*
 * recordingpolicy_keepsome_type.js
 *
 * Created @author Antonio Carrasco Valero 201510181424
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







function ModuleFactory_RecordingPolicyKeepSomeType() {

    'use strict';


    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_RecordingPolicyKeepAllType) {


        var ModuleName     = "recordingpolicy_keepsome_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_RecordingPolicyKeepAllType) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MUSTKEEPRECORDSMAXNUMBER = 1000;

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
                theToInit.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE = "RecordingPolicyKeepSomeDefaultName";

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






            var aRecordingPolicyKeepSome_Prototype = (function() {



                var aPrototype = new theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;


                aPrototype._v_Type = "RecordingPolicyKeepSome";

                aPrototype._v_Prototype_RecordingPolicyKeepSome = aPrototype;


                aPrototype._v_Module = null;


                aPrototype._v_MustKeepRecordsMaxNumber = null;




                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_RecordingPolicyKeepSome( theTitle, theIdentifier, theRecorder);

                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_RecordingPolicyKeepSome = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_MustKeepRecordsMaxNumber = this.MUSTKEEPRECORDSMAXNUMBER;

                };
                if( _pInit_RecordingPolicyKeepSome){}/* CQT */
                aPrototype._pInit_RecordingPolicyKeepSome = _pInit_RecordingPolicyKeepSome;












                var pSetMustKeepRecordsMaxNumber = function( theMustKeepRecordsMaxNumber) {

                    this._v_MustKeepRecordsMaxNumber = theMustKeepRecordsMaxNumber;

                };
                if( pSetMustKeepRecordsMaxNumber){}/* CQT */
                aPrototype.pSetMustKeepRecordsMaxNumber = pSetMustKeepRecordsMaxNumber;






                var fMustKeepRecordsMaxNumber = function() {

                    return this._v_MustKeepRecordsMaxNumber;

                };
                if( fMustKeepRecordsMaxNumber){}/* CQT */
                aPrototype.fMustKeepRecordsMaxNumber = fMustKeepRecordsMaxNumber;










                var pPruneRecords = function() {

                    this._v_Prototype_RecordingPolicyKeepAll.pPruneRecords.apply( this);


                    if( !this._v_Recorder) {
                        return;
                    }

                    this._v_Recorder.pDiscardRecordsToMaxNumber( this.fMustKeepRecordsMaxNumber());

                };
                if( pPruneRecords){}/* CQT */
                aPrototype.pPruneRecords = pPruneRecords;








                return aPrototype;

            })();




            var RecordingPolicyKeepSome_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;

                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_MustKeepRecordsMaxNumber = null;

                this._pInit_RecordingPolicyKeepSome( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepSome_Constructor.prototype = aRecordingPolicyKeepSome_Prototype;





            var RecordingPolicyKeepSome_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_RecordingPolicyKeepAllType.RecordingPolicyKeepAll_Prototype;

                this._v_Prototype = aRecordingPolicyKeepSome_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_MustKeepRecordsMaxNumber = null;

            };
            RecordingPolicyKeepSome_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepSome_Prototype;



            var aModule = {
                "RecordingPolicyKeepSome_Prototype":   aRecordingPolicyKeepSome_Prototype,
                "RecordingPolicyKeepSome_Constructor": RecordingPolicyKeepSome_Constructor,
                "RecordingPolicy_Constructor":         RecordingPolicyKeepSome_Constructor,
                "RecordingPolicyKeepSome_SuperPrototypeConstructor": RecordingPolicyKeepSome_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aRecordingPolicyKeepSome_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_RecordingPolicyKeepAllType
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}


if( ModuleFactory_RecordingPolicyKeepSomeType){}/* CQT */



