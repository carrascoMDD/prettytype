/*
 * dumpingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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






function ModuleFactory_DumpingPolicyType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_IdentifierSvce,
                       theSS_ConsoleSvce) {


        var ModuleName     = "dumpingpolicy_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_ConsoleSvce) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}








            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.MAYDUMPRECORDS = true;

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

                theToInit.DUMPINGPOLICY_DEFAULTTITLE = "DumpingPolicyDefaultName";



                theToInit.RECORDPOINTERNAME_LASTDUMPED = "RECORDPOINTERNAME_LASTDUMPED";

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






            var aDumpingPolicy_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);




                aPrototype._v_Type = "DumpingPolicy";

                aPrototype._v_Module = null;

                aPrototype._v_Prototype_DumpingPolicy = aPrototype;

                aPrototype._v_Identifier = null;

                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;

                aPrototype._v_Recorder    = null;


                aPrototype._v_MayDumpRecords   = null;



                var _pInit = function( theTitle, theIdentifier) {

                    this._pInit_DumpingPolicy( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;






                var _fTitleDefault = function( ) {

                   return this.DUMPINGPOLICY_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;






                var _pInit_DumpingPolicy = function( theTitle, theIdentifier, theRecorder) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Identifier = theIdentifier;

                    this._v_Id    = null;

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }

                    this._v_Id = this._v_Identifier.fReserveId();

                    this._v_Recorder    = theRecorder;

                    this._v_MayDumpRecords   = this.MAYDUMPRECORDS;

                };
                if( _pInit_DumpingPolicy){}/* CQT */
                aPrototype._pInit_DumpingPolicy = _pInit_DumpingPolicy;







                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;






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

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
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

                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
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










                var fConsoleService = function() {

                    return theS_ConsoleSvce;

                };
                if( fConsoleService){}/* CQT */
                aPrototype.fConsoleService = fConsoleService;








                var fRecorder = function() {

                    return this._v_Recorder;
                };
                if( fRecorder){}/* CQT */
                aPrototype.fRecorder = fRecorder;






                var pSetRecorder = function( theRecorder) {

                    this._v_Recorder = theRecorder;
                };
                if( pSetRecorder){}/* CQT */
                aPrototype.pSetRecorder = pSetRecorder;









                var pSetMayDumpRecords = function( theMayDumpRecords) {

                    this._v_MayDumpRecords = theMayDumpRecords ? true : false;

                };
                if( pSetMayDumpRecords){}/* CQT */
                aPrototype.pSetMayDumpRecords = pSetMayDumpRecords;




                var fMayDumpRecords = function() {

                    return this._v_MayDumpRecords;

                };
                if( fMayDumpRecords){}/* CQT */
                aPrototype.fMayDumpRecords = fMayDumpRecords;







                var fMustDumpRecord = function( theRecord) {

                    if( !theRecord) {
                        return false;
                    }

                    if( !this.fMayDumpRecords()) {
                        return false;
                    }

                    /* Subtype responsibility */

                    return true;

                };
                if( fMustDumpRecord){}/* CQT */
                aPrototype.fMustDumpRecord = fMustDumpRecord;






                var pDumpRecord = function( theRecord, theRecordedRecordPointer) {

                    if( !theRecord) {
                        return;
                    }

                    if( !this.fMustDumpRecord( theRecord)) {
                        return;
                    }

                    var aConsoleService = this.fConsoleService();
                    if( !aConsoleService) {
                        return;
                    }


                    var aRecorder = this.fRecorder();
                    if( !aRecorder) {
                        return;
                    }


                    var aLogString = theRecord.fLogString();
                    if( !aLogString) {
                        return;
                    }

                    aConsoleService.log(  "," + aLogString);


                    aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, theRecordedRecordPointer);

                };
                if( pDumpRecord){}/* CQT */
                aPrototype.pDumpRecord = pDumpRecord;








                var pRelease = function() {

                    this._v_Identifier       = null;

                    this._v_Id               = null;
                    this._v_Title            = null;

                    this._v_Recorder         = null;

                    this._v_MayDumpRecords   = null;

                };
                if( pRelease){}/* CQT */
                aPrototype.pRelease = pRelease;








                return aPrototype;

            })();




            var DumpingPolicy_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_Type = null;
                this._v_Module = null;

                this._v_Identifier       = null;

                this._v_Id               = null;
                this._v_Title            = null;

                this._v_Recorder         = null;

                this._v_MayDumpRecords   = null;

                this._pInit_DumpingPolicy( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicy_Constructor.prototype = aDumpingPolicy_Prototype;





            var DumpingPolicy_SuperPrototypeConstructor = function() {
                this._v_Prototype = aDumpingPolicy_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Identifier       = null;

                this._v_Id               = null;
                this._v_Title            = null;

                this._v_Recorder         = null;

                this._v_MayDumpRecords   = null;

            };
            DumpingPolicy_SuperPrototypeConstructor.prototype = aDumpingPolicy_Prototype;



            var aModule = {
                "DumpingPolicy_Prototype": aDumpingPolicy_Prototype,
                "DumpingPolicy_Constructor": DumpingPolicy_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor": DumpingPolicy_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;

            aDumpingPolicy_Prototype._v_Module = aModule;





            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_ConsoleSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }






        return anExistingModule;

    });
}






