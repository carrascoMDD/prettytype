/*
 * common_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030426
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





function ModuleFactory_CommonType() {

    'use strict';

    return ( function( theSS_typesregistry,
                       theSS_Overrider,
                       theSS_IdentifierSvce,
                       theSS_RecorderSvce){


        var ModuleName     = "common_type";
        var ModulePackages = "common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;



        var aMod_definer = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_RecorderSvce) {


            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}






            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.LOGRECORDS = true;

                theToInit.LOGDEFERREDREJECT  = true;
                theToInit.LOGDEFERREDRESOLVE = true;



                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";

                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";


                theToInit.KEEPOWNRECORDS = false;


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

                theToInit.COMMON_DEFAULTTITLE = "CommonDefaultName";

                theToInit.UNKNOWNID = "?i?";

                theToInit.VALUEDIFFATTOP = "/";
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";


                theToInit.EVENTKIND_ACTIONREPORT_FAILED          = "EVT_ACTIONREPORT_FAILED";
                theToInit.EVENTKIND_ACTIONREPORT_SUCCESS         = "EVT_ACTIONREPORT_SUCCESS";

                theToInit.EVENTKIND_ACTIONREPORT_CREATED         = "EVT_ACTIONREPORT_CREATED";

                theToInit.EVENTKIND_GRIDREGISTEREDINPARENT       = "EVT_GRIDREGISTEREDINPARENT";
                theToInit.EVENTKIND_EDITORREGISTEREDINPARENT     = "EVT_EDITORREGISTEREDINPARENT";
                theToInit.EVENTKIND_CREATORREGISTEREDINPARENT    = "EVT_CREATORREGISTEREDINPARENT";
                theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR  = "EVT_CANDIDATEREGISTEREDINEDITOR";

                theToInit.EVENTKIND_WIRED                        = "EVT_WIRED";
                theToInit.EVENTKIND_UNWIRED                      = "EVT_UNWIRED";

                theToInit.EVENTKIND_ADDROWSCHANGELISTENER         = "EVT_ADDROWSCHANGELISTENER";
                theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER      = "EVT_REMOVEROWSCHANGELISTENER";
                theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER    = "EVT_ADDSELECTIONCHANGELISTENER";
                theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER = "EVT_REMOVESELECTIONCHANGELISTENER";
                theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER     = "EVT_ADDACTIONHAPPENEDLISTENER";
                theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER  = "EVT_REMOVEACTIONHAPPENEDLISTENER";

                theToInit.EVENTKIND_TRYTORETRIEVEROWS            = "EVT_TRYTORETRIEVEROWS";
                theToInit.EVENTKIND_RETRIEVEDROWS                = "EVT_RETRIEVEDROWS";
                theToInit.EVENTKIND_TRYTORETRIEVEFIELDS          = "EVT_TRYTORETRIEVEFIELDS";
                theToInit.EVENTKIND_RETRIEVEDFIELDS              = "EVT_RETRIEVEDFIELDS";

                theToInit.EVENTKIND_LISTENED                     = "EVT_LISTENED";
                theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED  = "EVT_GRIDSELECTIONCHANGELISTENED";
                theToInit.EVENTKIND_ARGUMENTSCHANGELISTENED      = "EVT_ARGUMENTSCHANGELISTENED";





                theToInit.EVENTKIND_SERVICEREPORT_SENDING         = "EVT_SERVICEREPORT_SENDING";
                theToInit.EVENTKIND_SERVICEREPORT_OK              = "EVT_SERVICEREPORT_OK";
                theToInit.EVENTKIND_SERVICEREPORT_FAIL            = "EVT_SERVICEREPORT_FAIL";

                theToInit.EVENTKIND_SERVICEREPORT_GET             = "EVT_SERVICEREPORT_GET";
                theToInit.EVENTKIND_SERVICEREPORT_GETOK           = "EVT_SERVICEREPORT_GETOK";
                theToInit.EVENTKIND_SERVICEREPORT_GETFAIL         = "EVT_SERVICEREPORT_GETFAIL";
                theToInit.EVENTKIND_SERVICEREPORT_POST            = "EVT_SERVICEREPORT_POST";
                theToInit.EVENTKIND_SERVICEREPORT_POSTOK          = "EVT_SERVICEREPORT_POSTOK";
                theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL        = "EVT_SERVICEREPORT_POSTFAIL";
                theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL      = "EVT_SERVICEREPORT_UPLOADFAIL";






                theToInit.EVENTKINDS_NOPROMISE = [
                    theToInit.EVENTKIND_ACTIONREPORT_FAILED        ,
                    theToInit.EVENTKIND_ACTIONREPORT_SUCCESS       ,
                    theToInit.EVENTKIND_ACTIONREPORT_CREATED       ,
                    theToInit.EVENTKIND_GRIDREGISTEREDINPARENT     ,
                    theToInit.EVENTKIND_EDITORREGISTEREDINPARENT   ,
                    theToInit.EVENTKIND_CREATORREGISTEREDINPARENT  ,
                    theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR,
                    theToInit.EVENTKIND_WIRED                      ,
                    theToInit.EVENTKIND_UNWIRED                    ,
                    theToInit.EVENTKIND_ADDROWSCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER,
                    theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER,
                    theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER  ,
                    theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER ,
                    theToInit.EVENTKIND_TRYTORETRIEVEROWS          ,
                    theToInit.EVENTKIND_RETRIEVEDROWS              ,
                    theToInit.EVENTKIND_TRYTORETRIEVEFIELDS        ,
                    theToInit.EVENTKIND_RETRIEVEDFIELDS            ,
                    theToInit.EVENTKIND_LISTENED                   ,
                    theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED,
                    theToInit.EVENTKIND_SERVICEREPORT_SENDING      ,
                    theToInit.EVENTKIND_SERVICEREPORT_OK           ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GET          ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETOK        ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POST         ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTOK       ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];



                theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT              = "NODEFERREDTOREJECT";
                theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE             = "NODEFERREDTORESOLVE";

                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED  = "ATTEMPTTOREJECT_ALREADYRESOLVED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED  = "ATTEMPTTOREJECT_ALREADYREJECTED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING       = "ATTEMPTTOREJECT_NOTPENDING";

                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED = "ATTEMPTTORESOLVE_ALREADYRESOLVED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED = "ATTEMPTTORESOLVE_ALREADYREJECTED";
                theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING      = "ATTEMPTTORESOLVE_NOTPENDING";

                theToInit.PROMINSTEVT_ALLSCHEDULED                         = "ALLSCHEDULED";

                theToInit.PROMINSTEVT_REJECTED                             = "REJECTED";
                theToInit.PROMINSTEVT_RESOLVED                             = "RESOLVED";




                theToInit.EVENTKINDS_PROMISE = [
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTOREJECT             ,
                    theToInit.PROMINSTEVT_WARN_NODEFERREDTORESOLVE            ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYRESOLVED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_ALREADYREJECTED ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTOREJECT_NOTPENDING      ,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYRESOLVED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_ALREADYREJECTED,
                    theToInit.PROMINSTEVT_ERR_ATTEMPTTORESOLVE_NOTPENDING     ,
                    theToInit.PROMINSTEVT_ALLSCHEDULED                        ,
                    theToInit.PROMINSTEVT_REJECTED                            ,
                    theToInit.PROMINSTEVT_RESOLVED

                ];


                theToInit.EVENTKINDS = theToInit.EVENTKINDS_NOPROMISE.slice();
                Array.prototype.push.apply( theToInit.EVENTKINDS, theToInit.EVENTKINDS_PROMISE);



                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE = [

                    theToInit.EVENTKIND_ACTIONREPORT_CREATED       ,
                    theToInit.EVENTKIND_GRIDREGISTEREDINPARENT     ,
                    theToInit.EVENTKIND_EDITORREGISTEREDINPARENT   ,
                    theToInit.EVENTKIND_CREATORREGISTEREDINPARENT  ,
                    theToInit.EVENTKIND_CANDIDATEREGISTEREDINEDITOR,
                    theToInit.EVENTKIND_WIRED                      ,
                    theToInit.EVENTKIND_UNWIRED                    ,
                    theToInit.EVENTKIND_ADDROWSCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVEROWSCHANGELISTENER,
                    theToInit.EVENTKIND_ADDSELECTIONCHANGELISTENER ,
                    theToInit.EVENTKIND_REMOVESELECTIONCHANGELISTENER,
                    theToInit.EVENTKIND_ADDACTIONHAPPENEDLISTENER  ,
                    theToInit.EVENTKIND_REMOVEACTIONHAPPENEDLISTENER ,
                    theToInit.EVENTKIND_TRYTORETRIEVEROWS          ,
                    theToInit.EVENTKIND_RETRIEVEDROWS              ,
                    theToInit.EVENTKIND_TRYTORETRIEVEFIELDS        ,
                    theToInit.EVENTKIND_RETRIEVEDFIELDS            ,
                    theToInit.EVENTKIND_LISTENED                   ,
                    theToInit.EVENTKIND_GRIDSELECTIONCHANGELISTENED,
                    theToInit.EVENTKIND_SERVICEREPORT_SENDING      ,
                    theToInit.EVENTKIND_SERVICEREPORT_OK           ,
                    theToInit.EVENTKIND_SERVICEREPORT_FAIL         ,
                    theToInit.EVENTKIND_SERVICEREPORT_GET          ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETOK        ,
                    theToInit.EVENTKIND_SERVICEREPORT_GETFAIL      ,
                    theToInit.EVENTKIND_SERVICEREPORT_POST         ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTOK       ,
                    theToInit.EVENTKIND_SERVICEREPORT_POSTFAIL     ,
                    theToInit.EVENTKIND_SERVICEREPORT_UPLOADFAIL
                ];


                
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE, theToInit.EVENTKINDS_PROMISE);

                theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE = theToInit.EVENTKINDS_PROMISE.slice();


                theToInit.EVENTKINDS_NOTFORCONSOLE_NONE = [];
                theToInit.EVENTKINDS_NOTFORCONSOLE_ALL = theToInit.EVENTKINDS.slice();

                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE.slice();

                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NONE;

                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;


                if( theToInit.EVENTSSETNOTFORCONSOLE) {

                    if( typeof theToInit.EVENTSSETNOTFORCONSOLE == "string") {
                        var anEventsSetNotForConsole = theToInit[ theToInit.EVENTSSETNOTFORCONSOLE];
                        if( anEventsSetNotForConsole) {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
                        }
                        else {
                            theToInit.EVENTKINDS_NOTFORCONSOLE = [];
                        }
                    }
                    else {
                        theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTSSETNOTFORCONSOLE;
                    }
                }
                else {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }












                theToInit.HITSVRFAILURE_NOTSENTMISSINGPARMS = "SERVERNOTSENT_MISSINGPARMS";
                theToInit.HITSVRFAILURE_AJAX                = "SERVERFAILURE_AJAX";
                theToInit.HITSVRFAILURE_TIMEOUT             = "SERVERFAILURE_TIMEOUT";
                theToInit.HITSVRFAILURE_REPORTEDEXCEPTION   = "SERVERFAILURE_REPORTEDEXCEPTION";
                theToInit.HITSVRFAILURE_REMOTEEXCEPTION     = "SERVERFAILURE_REMOTEEXCEPTION";
                theToInit.HITSVRFAILURE_NORESPONSE          = "SERVERFAILURE_NORESPONSE";
                theToInit.HITSVRFAILURE_SESSION             = "SERVERFAILURE_SESSION";
                theToInit.HITSVRFAILURE_UNAUTHORIZED        = "SERVERFAILURE_UNAUTHORIZED";
                theToInit.HITSVRFAILURE_NOSUCCESS           = "SERVERFAILURE_NOSUCCESS";
                theToInit.HITSVRFAILURE_WRONGTYPE           = "SERVERFAILURE_WRONGTYPE";
                theToInit.HITSVRFAILURE_NORESPONSEFIELD     = "SERVERFAILURE_NORESPONSEFIELD";

                theToInit.HITSVRFAILURES = [
                    theToInit.HITSVRFAILURE_NOTSENTMISSINGPARMS,
                    theToInit.HITSVRFAILURE_AJAX,
                    theToInit.HITSVRFAILURE_TIMEOUT,
                    theToInit.HITSVRFAILURE_REMOTEEXCEPTION,
                    theToInit.HITSVRFAILURE_NORESPONSE,
                    theToInit.HITSVRFAILURE_SESSION,
                    theToInit.HITSVRFAILURE_UNAUTHORIZED,
                    theToInit.HITSVRFAILURE_NOSUCCESS,
                    theToInit.HITSVRFAILURE_WRONGTYPE,
                    theToInit.HITSVRFAILURE_NORESPONSEFIELD
                ];





                theToInit.OPERATIONSTATUS_ERROR          = "ERROR";
                theToInit.OPERATIONSTATUS_FALTAPARAMETRO = "FALTAPARAMETRO";
                theToInit.OPERATIONSTATUS_YAEXISTE       = "YAEXISTE";
                theToInit.OPERATIONSTATUS_NOEXISTE       = "NOEXISTE";
                theToInit.OPERATIONSTATUS_NOCREADO       = "NOCREADO";




                theToInit.OPERATIONMESSAGESBYSTATUS = {};
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_ERROR         ] = theToInit.OPERATIONMESSAGE_ERROR;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_FALTAPARAMETRO] = theToInit.OPERATIONMESSAGE_FALTAPARAMETRO;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_YAEXISTE      ] = theToInit.OPERATIONMESSAGE_YAEXISTE;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_NOEXISTE      ] = theToInit.OPERATIONMESSAGE_NOEXISTE;
                theToInit.OPERATIONMESSAGESBYSTATUS[ theToInit.OPERATIONSTATUS_NOCREADO      ] = theToInit.OPERATIONMESSAGE_NOCREADO;




                theToInit.FIELDNAMEDOT = ".";

                theToInit.URLPATHSEPARATOR   = "/";
                theToInit.HTTPQUERYCHAR      = "?";
                theToInit.HTTPPARMASSIGN     = "=";
                theToInit.HTTPEXTRAPARMCHAR  = "&";


                theToInit.DATATYPE_FILE = "File";

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






            var aCommon_Prototype = (function() {


                var aPrototype = {};

                pgInitFromModuleConstants( aPrototype);



                aPrototype._v_Type = "Common";

                aPrototype._v_Prototype_Common = aPrototype;

                aPrototype._v_Module = null;

                aPrototype._v_Identifier = null;
                aPrototype._v_Recorder   = null;

                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;

                aPrototype._v_OwnRecords = null;



                aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE.slice();




                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_Common( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _fTitleDefault = function( ) {

                    return this.COMMON_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;








                var _pInit_Common = function( theTitle, theIdentifier, theRecorder) {

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Identifier = theIdentifier;
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }

                    this._v_Recorder   = theRecorder;
                    if( !this._v_Recorder) {
                        this._v_Recorder = theS_RecorderSvce;
                    }

                    if( this._v_Identifier) {
                        this._v_Id = this._v_Identifier.fReserveId();
                    }

                    if( !this._v_Id) {
                        this._v_Id = this.UNKNOWNID;
                    }

                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }

                    this._v_OwnRecords = [ ];
                };
                if( _pInit_Common){}/* CQT */
                aPrototype._pInit_Common = _pInit_Common;






                var fFullTypeNameString = function() {

                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */

                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;








                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_Id
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
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }

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
                        aIdentifyingString = "Error_whileJSON_stringify"
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












                var fAsLogObject = function() {

                    var aLog = this.fIdentifyingWithTitleJSON();
                    if( aLog){}/* CQT */

                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;






                var fLogString = function() {

                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }

                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {
                        aLogString = "Error_while_fLogString_JSON_stringify"
                    }

                    return aLogString;
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;




                /*
                var toString = function() {
                    return this.fLogString();
                };
                aPrototype.toString = toString;
                */












                var fRecord = function( theMethodName, theEventKind, theData, theReason, theDetail) {

                    if( this._v_Recorder == null) {
                        return null;
                    }

                    var aRecord = this._v_Recorder.fCreateAndRegisterRecord( this, theMethodName, theEventKind, theData, theReason, theDetail);

                    if( this.KEEPOWNRECORDS) {
                        this._v_OwnRecords.push( aRecord);
                    }

                    if( this.LOGRECORDS) {
                        this.pLogRecord( aRecord);
                    }

                    return aRecord;
                };
                if( fRecord){}/* CQT */
                aPrototype.fRecord = fRecord;










                var fSetEventKindsNotForConsole = function( theEventKinds) {

                    this._v_EventKindsNotForConsole = theEventKinds;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole = fSetEventKindsNotForConsole;





                var fSetEventKindsNotForConsole_ALL = function() {

                    this._v_EventKindsNotForConsole = this.EVENTKINDS_NOTFORCONSOLE_ALL;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_ALL){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_ALL = fSetEventKindsNotForConsole_ALL;





                var fSetEventKindsNotForConsole_NONE = function() {

                    this._v_EventKindsNotForConsole = this.EVENTKINDS_NOTFORCONSOLE_NONE;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_NONE){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_NONE = fSetEventKindsNotForConsole_NONE;



                


                var fSetEventKindsNotForConsole_DEFAULT = function() {

                    this._v_EventKindsNotForConsole = this.EVENTKINDS_NOTFORCONSOLE_DEFAULT;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_DEFAULT){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_DEFAULT = fSetEventKindsNotForConsole_DEFAULT;






                var fSetEventKindsNotForConsole_RESTRICTIVE = function() {

                    this._v_EventKindsNotForConsole = this.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_RESTRICTIVE){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_RESTRICTIVE = fSetEventKindsNotForConsole_RESTRICTIVE;







                var fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE = function() {

                    this._v_EventKindsNotForConsole = this.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE = fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE;






                var fSetEventKindsNotForConsole_NOPROMISE = function() {

                    this._v_EventKindsNotForConsole = this.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_NOPROMISE){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_NOPROMISE = fSetEventKindsNotForConsole_NOPROMISE;













                var fFewerEventKindsForConsole = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = this._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    this._v_EventKindsNotForConsole = someEventKinds;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole
                };
                if( fFewerEventKindsForConsole){}/* CQT */
                aPrototype.fFewerEventKindsForConsole = fFewerEventKindsForConsole;







                var fMoreEventKindsForConsole = function( theEventKinds) {

                    if( !theEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = this._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    this._v_EventKindsNotForConsole = someEventKinds;

                    console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole
                };
                if( fMoreEventKindsForConsole){}/* CQT */
                aPrototype.fMoreEventKindsForConsole = fMoreEventKindsForConsole;















                var fSetEventKindsNotForConsole_inPrototype = function( theEventKinds) {

                    aPrototype._v_EventKindsNotForConsole = theEventKinds;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return aPrototype._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_inPrototype = fSetEventKindsNotForConsole_inPrototype;






                var fSetEventKindsNotForConsole_ALL_inPrototype = function() {

                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE_ALL;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_ALL_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_ALL_inPrototype = fSetEventKindsNotForConsole_ALL_inPrototype;





                var fSetEventKindsNotForConsole_NONE_inPrototype = function() {

                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE_NONE;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_NONE_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_NONE_inPrototype = fSetEventKindsNotForConsole_NONE_inPrototype;






                var fSetEventKindsNotForConsole_DEFAULT_inPrototype = function() {

                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE_DEFAULT;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_DEFAULT_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_DEFAULT_inPrototype = fSetEventKindsNotForConsole_DEFAULT_inPrototype;






                var fSetEventKindsNotForConsole_RESTRICTIVE_inPrototype = function() {

                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_RESTRICTIVE_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_RESTRICTIVE_inPrototype = fSetEventKindsNotForConsole_RESTRICTIVE_inPrototype;







                var fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE_inPrototype = function() {

                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE_inPrototype = fSetEventKindsNotForConsole_RESTRICTIVE_NOPROMISE_inPrototype;






                var fSetEventKindsNotForConsole_NOPROMISE_inPrototype = function() {

                    aPrototype._v_EventKindsNotForConsole = aPrototype.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return this._v_EventKindsNotForConsole;
                };
                if( fSetEventKindsNotForConsole_NOPROMISE_inPrototype){}/* CQT */
                aPrototype.fSetEventKindsNotForConsole_NOPROMISE_inPrototype = fSetEventKindsNotForConsole_NOPROMISE_inPrototype;






                var fFewerEventKindsForConsole_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex >= 0) {

                                someEventKinds.splice( anEventKindIndex, 1);
                                if( !someEventKinds.length) {
                                    break;
                                }
                            }
                        }
                    }


                    aPrototype._v_EventKindsNotForConsole = someEventKinds;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return aPrototype._v_EventKindsNotForConsole
                };
                if( fFewerEventKindsForConsole_inPrototype){}/* CQT */
                aPrototype.fFewerEventKindsForConsole_inPrototype = fFewerEventKindsForConsole_inPrototype;







                var fMoreEventKindsForConsole_inPrototype = function( theEventKinds) {

                    if( !theEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }

                    var aNumEventKinds = theEventKinds;
                    if( !aNumEventKinds) {
                        return aPrototype._v_EventKindsNotForConsole;
                    }


                    var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {

                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {

                                someEventKinds.push( anEventKind);
                            }
                        }
                    }


                    aPrototype._v_EventKindsNotForConsole = someEventKinds;

                    console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));

                    return aPrototype._v_EventKindsNotForConsole
                };
                if( fMoreEventKindsForConsole_inPrototype){}/* CQT */
                aPrototype.fMoreEventKindsForConsole_inPrototype = fMoreEventKindsForConsole_inPrototype;











                var pLogRecord = function( theRecord) {
                    if( this.LOGRECORDS) {
                        if( theRecord) {
                            var anEventKind = theRecord._v_EventKind;
                            if( this._v_EventKindsNotForConsole.indexOf( anEventKind) < 0) {
                                var aLogString = theRecord.fLogString( );
                                if( aLogString) {
                                    console.log( "," + aLogString);
                                }
                            }
                        }
                    }
                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;













                var fFirstDiff = function( theActualValue, theCheckValue) {

                    if( !( typeof theCheckValue == "undefined") &&  ( theCheckValue === this.DONOTCOMPAREVALUESYMBOL)) {
                        return null;
                    }

                    if( ( typeof theActualValue == "undefined") && ( typeof theCheckValue == "undefined") ) {
                        return null;
                    }

                    if( ( typeof theActualValue == "undefined") || ( typeof theCheckValue == "undefined") ) {
                        return this.VALUEDIFFATTOP;
                    }

                    if( ( theActualValue == null) && ( theCheckValue == null)) {
                        return null;
                    }

                    if( ( theActualValue == null) || ( theCheckValue == null)) {
                        return this.VALUEDIFFATTOP;
                    }


                    if( !( ( typeof theActualValue) == ( typeof theCheckValue))) {
                        return this.VALUEDIFFATTOP;
                    }





                    if( typeof theActualValue == "string" ) {
                        if( theCheckValue === this.DONOTCOMPAREVALUESYMBOL) {
                            return null;
                        }
                        if( !( theActualValue == theCheckValue)) {
                            return this.VALUEDIFFATTOP;
                        }
                        return null;
                    }


                    if( typeof theActualValue == "number" ) {
                        if( !( theActualValue == theCheckValue)) {
                            return this.VALUEDIFFATTOP;
                        }
                        return null;
                    }


                    if( typeof theActualValue == "boolean" ) {
                        if( !( theActualValue == theCheckValue)) {
                            return this.VALUEDIFFATTOP;
                        }
                        return null;
                    }



                    if( !( typeof theActualValue == "object" )) {
                        return this.VALUEDIFFATTOP;
                    }





                    var aOneLen   = theActualValue.length;
                    var aOtherLen = theCheckValue.length;

                    if( ( typeof aOneLen == "number") || ( typeof aOneLen == "number")) {

                        if( ( typeof aOneLen == "undefined") || ( typeof aOneLen == "undefined")) {
                            return this.VALUEDIFFATTOP;
                        }

                        if( !( aOneLen == aOtherLen)) {
                            return this.VALUEDIFFATTOP;
                        }

                        if( aOneLen) {
                            for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                                var aOneListSub   = theActualValue[ aSubIdx];
                                var aOtherListSub = theCheckValue[ aSubIdx];

                                var aSubsListDiff = this.fFirstDiff( aOneListSub, aOtherListSub);
                                if( aSubsListDiff) {

                                    if( aSubsListDiff == this.VALUEDIFFATTOP) {
                                        return [ aSubIdx];
                                    }

                                    aSubsListDiff.unshift( aSubIdx);

                                    return aSubsListDiff;
                                }
                            }
                        }
                    }




                    var someOneKeys   = Object.keys( theActualValue);
                    var someOtherKeys = Object.keys( theCheckValue);

                    if( ( typeof someOneKeys == "undefined") || ( typeof someOtherKeys == "undefined")) {
                        return this.VALUEDIFFATTOP;
                    }

                    var allKeys = someOneKeys.slice();
                    var aNumOtherKeys = someOtherKeys.length;

                    for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                        var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                        if( allKeys.indexOf( aOtherKey) < 0) {
                            allKeys.push( aOtherKey);
                        }
                    }
                    allKeys.sort();


                    var aNumKeys = allKeys.length;

                    if( aNumKeys) {
                        for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                            var aKey = allKeys[ aKeyIdx];

                            if( !theActualValue.hasOwnProperty( aKey)) {
                                return [ aKey];
                            }

                            if( !theCheckValue.hasOwnProperty( aKey)) {
                                return [ aKey];
                            }


                            var aOneSub   = theActualValue[ aKey];
                            var aOtherSub = theCheckValue[ aKey];

                            var aSubsDiff = this.fFirstDiff( aOneSub, aOtherSub);
                            if( aSubsDiff) {

                                if( aSubsDiff == this.VALUEDIFFATTOP) {
                                    return [ aKey];
                                }

                                aSubsDiff.unshift( aKey);

                                return aSubsDiff;
                            }
                        }
                    }


                    return null;
                };
                if( fFirstDiff){}/* CQT */
                aPrototype.fFirstDiff = fFirstDiff;








                return aPrototype;

            })();




            var Common_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Title = null;

                this._pInit_Common( theTitle, theIdentifier, theRecorder);
            };
            Common_Constructor.prototype = aCommon_Prototype;





            var Common_SuperPrototypeConstructor = function() {
                this._v_Prototype = aCommon_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Title     = null;
            };
            Common_SuperPrototypeConstructor.prototype = aCommon_Prototype;



            var aModule = {
                "Common_Prototype": aCommon_Prototype,
                "Common_Constructor": Common_Constructor,
                "Common_SuperPrototypeConstructor": Common_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;

            aCommon_Prototype._v_Module = aModule;




            return aModule;
        };






        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_RecorderSvce
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    });
}


if( ModuleFactory_CommonType){}/* CQT */




