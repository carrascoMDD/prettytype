'use strict';

/*
 * priic-doer-type.js
 *
 * Created @author Antonio Carrasco Valero 201602140158
 *
 *
 ***************************************************************************

 Copyright 2016 IGEO FACTORY SOFTWARE S.L.
 User Interface and disconnected operation components for the iGeoERP product.

 All Rights Reserved
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */




        var fConvertValueToJSON = function( theValue, theIncludeMembers) {

            var aValue = theValue;


            if( typeof aValue == "undefined") {
                return aValue;
            }

            if( aValue == null) {
                return null;
            }

            if( typeof aValue == "number") {
                return aValue;
            }

            if( typeof aValue == "function") {
                return aValue;
            }

            if( typeof aValue == "string") {
                var aValueLength = aValue.length;
                if( aValueLength > aModule.MAXJSONSTRINGLEN) {
                    aValue = aModule.EXCEEDEDMAXJSONSTRINGLENMSG + " len=" + aValueLength + " " + aValue.substring( 0 , aModule.MAXJSONSTRINGLEN);
                }
                return aValue;
            }

            if( ( typeof aValue == "object") && aValue.constructor && ( aValue.constructor.name == "Buffer")) {
                var aValueLength = aValue.length;
                aValue = { "Buffer": true, "len": aValueLength};
                return aValue;
            }


            if( aValue.fAsLogObject) {
                return aValue.fAsLogObject();
            }

            if( aValue.fIdentifyingWithTitleJSON) {
                return aValue.fIdentifyingWithTitleJSON();
            }

            if( aValue.fIdentifyingJSON) {
                return aValue.fIdentifyingJSON();
            }

            if( aValue.fIdentifyingString) {
                return aValue.fIdentifyingString();
            }

            if( aValue.fLogString) {
                return aValue.fLogString();
            }

            if( theIncludeMembers) {
                if( aValue.fToResultJSON) {
                    return aValue.fToResultJSON();
                }

                try {
                    var aJSONstr = JSON.stringify( aValue);
                    if( aJSONstr){}/* CQT */
                    return aJSONstr;
                }
                catch( anException) {}
            }

            var aStr = aValue.toString().substr( 0, this.MAXDATASTRINGLEN);
            if( aStr){}/* CQT */
            return aStr;
        };
        if( fConvertValueToJSON){}/* CQT */
        aModule.fConvertValueToJSON = fConvertValueToJSON;








        var fConvertValueToJSONstr = function( theValue, theIncludeMembers) {

            var aJSONobj = aModule.fConvertValueToJSON( theValue, theIncludeMembers);

            var aJSONstr = JSON.stringify( aJSONobj);

            return aJSONstr;
        };
        if( fConvertValueToJSONstr){}/* CQT */
        aModule.fConvertValueToJSONstr = fConvertValueToJSONstr;





angular.module("priicDoersCommonTypes").factory("PRIICDoerType", [
    "TypesRegistrySvce",
    "OverriderSvce",
    "CommonSvceType",
    "Te2estTraversals",
    "PRIIEventKinds",
    "$timeout",
    function( theSS_typesregistry,
              theSS_Overrider,
              theSS_CommonSvceType,
              theSS_Te2estTraversals,
              theSS_PRIIEventKinds,
              theSS_timeout){



        var ModuleName     = "priic-doer-type";
        var ModulePackages = "priic-doers-common";
        var ModuleFullName = ModulePackages + "/" + ModuleName;





        var aMod_definer = function( theS_Overrider,
                                     theS_CommonSvceType,
                                     theS_Te2estTraversals,
                                     theS_PRIIEventKinds,
                                     $timeout) {

            if( !( typeof FG_logModLoads == "undefined") && ( typeof FG_logModLoads == "function") && FG_logModLoads()) { FG_logModLoads(ModuleFullName);}





            var pgInitWithModuleVariations = function( theToInit) {

                if( !theToInit) {
                    return;
                }

                theToInit.DATESEPDEFAULT = "/";
                theToInit.DATESEPDASH    = "-";

                theToInit.TIMESEPDEFAULT = ":";





                theToInit.RESERVEDIDBASE = 1000 * 1000 * 1000 * 1000; /* 12 DIGITS */


                theToInit.KEYINT_LOWER = -9999999999999;  /* 13 DIGITS */
                theToInit.KEYINT_UPPER =  9999999999999;  /* 13 DIGITS */

                theToInit.ORDERINDEXNOW_MOD = 10000000000000; /* 13 DIGITS */
                theToInit.ORDERINDEXNOW_MUL = 1000;           /* 3 DIGITS */

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

                theToInit.LISTSEPARATOR_DEFAULT = ",";

                if( theS_PRIIEventKinds && theS_PRIIEventKinds.pgInitFromModuleConstants) {
                    theS_PRIIEventKinds.pgInitFromModuleConstants( theToInit);
                }

                theToInit.PRIICDOER_DEFAULTNAME = "PRIICDoer_defaultname"

                theToInit.HTTPMETHOD_GET  = "GET";
                theToInit.HTTPMETHOD_POST = "POST";


                theToInit.URLPARM_PARENTRESPONSE_SENTINEL                 = "~parentResponse.";
                theToInit.URLPARM_PARENTUNTRAVERSEDRESPONSE_SENTINEL      = "~parentUntraversedResponse.";
                theToInit.URLPARM_GRANDPARENTRESPONSE_SENTINEL            = "~grandparentResponse.";
                theToInit.URLPARM_GRANDPARENTUNTRAVERSEDRESPONSE_SENTINEL = "~grandparentUntraversedResponse.";

                theToInit.INJECTPROPERTY_PARENTRESPONSE_SENTINEL                 = "~parentResponse.";
                theToInit.INJECTPROPERTY_PARENTUNTRAVERSEDRESPONSE_SENTINEL      = "~parentUntraversedResponse.";
                theToInit.INJECTPROPERTY_OWNRESPONSE_SENTINEL                    = "~ownResponse.";
                theToInit.INJECTPROPERTY_GRANDPARENTRESPONSE_SENTINEL            = "~grandparentResponse.";
                theToInit.INJECTPROPERTY_GRANDPARENTUNTRAVERSEDRESPONSE_SENTINEL = "~grandparentUntraversedResponse.";

                theToInit.INJECTPROPERTY_ORDERINDEX_SENTINEL = "~orderIndex";
                theToInit.INJECTPROPERTY_USERNAME_SENTINEL   = "~username";
                theToInit.INJECTPROPERTY_TIMESTAMP_SENTINEL  = "~timestamp";


                theToInit.URLPARM_REPLACEBEGIN_SENTINEL = "{";
                theToInit.URLPARM_REPLACEEND_SENTINEL   = "}";

                theToInit.EXPANDURLPARMVALUE_SENTINEL = "?";



                theToInit.REGEXP_DATE_YYYYdashMMdashDD_STR = "^([0-9][0-9][0-9][0-9])\-([0-9][0-9]?)\-([0-9][0-9]?)";
                theToInit.REGEXP_DATE_YYYYdashMMdashDD = new RegExp( theToInit.REGEXP_DATE_YYYYdashMMdashDD_STR);

                theToInit.REGEXP_DATE_DDdashMMdashYYYY_STR = "^([0-9][0-9]?)\-([0-9][0-9]?)\-([0-9][0-9][0-9][0-9])";
                theToInit.REGEXP_DATE_DDdashMMdashYYYY = new RegExp( theToInit.REGEXP_DATE_DDdashMMdashYYYY_STR);


                theToInit.KEYCONVERSION_PARSEINT         = "parseInt";
                theToInit.KEYCONVERSION_LIST_PARSEINT    = "list-parseInt";

                theToInit.KEYCONVERSION_PARSEFLOAT       = "parseFloat";
                theToInit.KEYCONVERSION_LIST_PARSEFLOAT  = "list-parseFloat";

                
                theToInit.SINGLETONIDBKEYPATH = "singletonId";
                theToInit.SINGLETONIDBKEY = 1;



                theToInit.CHANGESATTEMPT_STATE_PENDING   = "ATTEMPTSTATE_PENDING";
                theToInit.CHANGESATTEMPT_STATE_ATTEMPTED = "ATTEMPTSTATE_ATTEMPTED";
                theToInit.CHANGESATTEMPT_STATE_CUTSHORT  = "ATTEMPTSTATE_CUTSHORT";
                theToInit.CHANGESATTEMPT_STATE_OK        = "ATTEMPTSTATE_OK";
                theToInit.CHANGESATTEMPT_STATE_FAIL      = "ATTEMPTSTATE_FAIL";

                theToInit.CHANGESATTEMPT_STATES = [
                    theToInit.CHANGESATTEMPT_STATE_PENDING  ,
                    theToInit.CHANGESATTEMPT_STATE_ATTEMPTED,
                    theToInit.CHANGESATTEMPT_STATE_CUTSHORT,
                    theToInit.CHANGESATTEMPT_STATE_OK       ,
                    theToInit.CHANGESATTEMPT_STATE_FAIL
                ];




                theToInit.CHANGESWRITE_STATE_PENDING      = "WRITESTATE_PENDING";
                theToInit.CHANGESWRITE_STATE_ATTEMPTED    = "WRITESTATE_ATTEMPTED";
                theToInit.CHANGESWRITE_STATE_DISCONNECTED = "WRITESTATE_DISCONNECTED";
                theToInit.CHANGESWRITE_STATE_OK           = "WRITESTATE_OK";
                theToInit.CHANGESWRITE_STATE_FAIL         = "WRITESTATE_FAIL";

                theToInit.CHANGESWRITE_STATES = [
                    theToInit.CHANGESWRITE_STATE_PENDING  ,
                    theToInit.CHANGESWRITE_STATE_ATTEMPTED,
                    theToInit.CHANGESWRITE_STATE_DISCONNECTED,
                    theToInit.CHANGESWRITE_STATE_OK       ,
                    theToInit.CHANGESWRITE_STATE_FAIL
                ];

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






            var aPRIICDoer_Prototype = (function() {


                var aPrototype = new theS_CommonSvceType.CommonSvce_SuperPrototypeConstructor();

                pgInitFromModuleConstants( aPrototype);


                aPrototype._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;


                aPrototype._v_Type = "PRIICDoer";

                aPrototype._v_Prototype_PRIICDoer = aPrototype;

                aPrototype._v_Module = null;

                aPrototype._v_Assembly = null;





                var _pInit = function( theTitle, theIdentifier, theRecorder) {

                    this._pInit_PRIICDoer( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;







                var _pInit_PRIICDoer = function( theTitle, theIdentifier, theRecorder) {

                    /* Delegate on super prototype initialization */
                    aPrototype._v_SuperPrototype._pInit_CommonSvce.apply( this, [
                        theTitle || this.PRIICDOER_DEFAULTNAME,
                        theIdentifier,
                        theRecorder
                    ]);

                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = aPrototype._v_Module;

                    this._v_Assembly = null;

                };
                if( _pInit_PRIICDoer){}/* CQT */
                aPrototype._pInit_PRIICDoer = _pInit_PRIICDoer;










                var pInitWith_Assembly = function( theAssembly) {

                    if( theAssembly) {
                        this._v_Assembly      = theAssembly;
                    }
                };
                if( pInitWith_Assembly){}/* CQT */
                aPrototype.pInitWith_Assembly = pInitWith_Assembly;









                var fAssembly = function() {

                    return this._v_Assembly;
                };
                if( fAssembly){}/* CQT */
                aPrototype.fAssembly = fAssembly;











                var fRejectionLabelFor = function( theReason) {

                    var aRejectionLabel = this._v_Module.ModuleFullName + "." + this._v_Type + "{" + this._v_Id + "}:" + theReason;
                    if( aRejectionLabel){}/* CQT */

                    return aRejectionLabel
                };
                if( fRejectionLabelFor){}/* CQT */
                aPrototype.fRejectionLabelFor = fRejectionLabelFor;









                /* ACV OJO 201603012047 TODO Duplicate method also in priic-front-type.js */
                var fMillis = function() {

                    return new Date().getTime();

                };
                if( fMillis){}/* CQT */
                aPrototype.fMillis = fMillis;




                var fDateToTimestampStr = function( theDate, theDateSep, theTimeSep) {

                    if( theDate == null) {
                        return null;
                    }

                    var aDateSep = theDateSep;
                    if( !aDateSep) {
                        aDateSep = this.DATESEPDEFAULT;
                    }

                    var aTimeSep = theTimeSep;
                    if( !aTimeSep) {
                        aTimeSep = this.TIMESEPDEFAULT;
                    }


                    var aDate = "" + theDate.getDate();
                    var aDateStr = "" + aDate;
                    if( aDateStr.length < 2) {
                        aDateStr = "0" + aDateStr;
                    }

                    var aMonth = "" + (theDate.getMonth()+ 1);
                    var aMonthStr = "" + aMonth;
                    if( aMonthStr.length < 2) {
                        aMonthStr = "0" + aMonthStr;
                    }

                    var aFullYear = theDate.getFullYear();
                    var aFullYearStr = "" + aFullYear;

                    var aHours = theDate.getHours();
                    var aHoursStr = "" + aHours;
                    if( aHoursStr.length < 2) {
                        aHoursStr = "0" + aHoursStr;
                    }

                    var aMinutes = theDate.getMinutes();
                    var aMinutesStr = "" + aMinutes;
                    if( aMinutesStr.length < 2) {
                        aMinutesStr = "0" + aMinutesStr;
                    }

                    var aSeconds = theDate.getSeconds();
                    var aSecondsStr = "" + aSeconds;
                    if( aSecondsStr.length < 2) {
                        aSecondsStr = "0" + aSecondsStr;
                    }

                    var aMilliseconds = theDate.getMilliseconds();
                    var aMillisecondsStr = "" + aMilliseconds;
                    if( aMillisecondsStr.length < 3) {
                        if( aMillisecondsStr.length < 2) {
                            aMillisecondsStr = "00" + aMillisecondsStr;
                        }
                        else {
                            aMillisecondsStr = "0" + aMillisecondsStr;
                        }
                    }

                    var aTimestampStr = aDateStr + aDateSep + aMonthStr + aDateSep + aFullYearStr
                        + " "
                        + aHoursStr + ":" + aMinutesStr + aTimeSep + aSecondsStr + aTimeSep + aMillisecondsStr;

                    return aTimestampStr;
                };
                if( fDateToTimestampStr){}/* CQT */
                aPrototype.fDateToTimestampStr = fDateToTimestampStr;







                var fDateToTimestampWOsepsStr = function( theDate) {

                    if( theDate == null) {
                        return null;
                    }

                    var aDate = "" + theDate.getDate();
                    var aDateStr = "" + aDate;
                    if( aDateStr.length < 2) {
                        aDateStr = "0" + aDateStr;
                    }

                    var aMonth = "" + (theDate.getMonth()+ 1);
                    var aMonthStr = "" + aMonth;
                    if( aMonthStr.length < 2) {
                        aMonthStr = "0" + aMonthStr;
                    }

                    var aFullYear = theDate.getFullYear();
                    var aFullYearStr = "" + aFullYear;

                    var aHours = theDate.getHours();
                    var aHoursStr = "" + aHours;
                    if( aHoursStr.length < 2) {
                        aHoursStr = "0" + aHoursStr;
                    }

                    var aMinutes = theDate.getMinutes();
                    var aMinutesStr = "" + aMinutes;
                    if( aMinutesStr.length < 2) {
                        aMinutesStr = "0" + aMinutesStr;
                    }

                    var aSeconds = theDate.getSeconds();
                    var aSecondsStr = "" + aSeconds;
                    if( aSecondsStr.length < 2) {
                        aSecondsStr = "0" + aSecondsStr;
                    }

                    var aMilliseconds = theDate.getMilliseconds();
                    var aMillisecondsStr = "" + aMilliseconds;
                    if( aMillisecondsStr.length < 3) {
                        if( aMillisecondsStr.length < 2) {
                            aMillisecondsStr = "00" + aMillisecondsStr;
                        }
                        else {
                            aMillisecondsStr = "0" + aMillisecondsStr;
                        }
                    }


                    var aTimestampStr = aFullYearStr +aMonthStr + aDateStr +
                        + "T"
                        + aHoursStr + aMinutesStr + aSecondsStr;

                    return aTimestampStr;
                };
                if( fDateToTimestampWOsepsStr){}/* CQT */
                aPrototype.fDateToTimestampWOsepsStr = fDateToTimestampWOsepsStr;







                var fDateToDate = function( theDate) {

                    if( theDate == null) {
                        return null;
                    }

                    var aDayOfMonth = theDate.getDate();
                    var aMonth      = theDate.getMonth();
                    var aFullYear   = theDate.getFullYear();

                    var aDate = new Date( aFullYear, aMonth, aDayOfMonth);
                    return aDate;
                };
                if( fDateToDate){}/* CQT */
                aPrototype.fDateToDate = fDateToDate;






                var fMillisToDate = function( theMillis) {

                    if( !theMillis) {
                        return null;
                    }

                    var aDate = null;
                    try {
                        aDate = new Date( theMillis);
                    }
                    catch( anException){}

                    if( !aDate) {
                        return null;
                    }

                    return this.fDateToDate( aDate);

                };
                if( fMillisToDate){}/* CQT */
                aPrototype.fMillisToDate = fMillisToDate;








                var fDateOnlyMillisToMillis = function( theMillis) {

                    if( !theMillis) {
                        return null;
                    }

                    var aDate = null;
                    try {
                        aDate = new Date( theMillis);
                    }
                    catch( anException){}

                    if( !aDate) {
                        return null;
                    }

                    var aDateOnMonth = aDate.getDate();
                    var aMonth       = aDate.getMonth();
                    var aFullYear    = aDate.getFullYear();

                    var aDateOnly = new Date( aFullYear, aMonth, aDateOnMonth);

                    var aDateOnlyMillis = aDateOnly.getTime();

                    return aDateOnlyMillis;
                };
                if( fDateOnlyMillisToMillis){}/* CQT */
                aPrototype.fDateOnlyMillisToMillis = fDateOnlyMillisToMillis;







                var fDateOnlyMillisToTomorrowMillis = function( theMillis) {

                    if( !theMillis) {
                        return null;
                    }

                    var aDateOnlyMillis = this.fDateOnlyMillisToMillis( theMillis);
                    if( !aDateOnlyMillis) {
                        return null;
                    }

                    var aTomorrowMillis = aDateOnlyMillis + ( 24 * 3600 * 1000);

                    return aTomorrowMillis;
                };
                if( fDateOnlyMillisToTomorrowMillis){}/* CQT */
                aPrototype.fDateOnlyMillisToTomorrowMillis = fDateOnlyMillisToTomorrowMillis;








                var fDateToDateStr = function( theDate, theSep) {

                    if( theDate == null) {
                        return null;
                    }

                    var aSep = theSep;
                    if( !aSep) {
                        aSep = this.DATESEPDEFAULT;
                    }

                    var aUTCDate = "" + theDate.getDate();
                    var aUTCDateStr = "" + aUTCDate;
                    if( aUTCDateStr.length < 2) {
                        aUTCDateStr = "0" + aUTCDateStr;
                    }

                    var aUTCMonth = "" + (theDate.getMonth()+ 1);
                    var aUTCMonthStr = "" + aUTCMonth;
                    if( aUTCMonthStr.length < 2) {
                        aUTCMonthStr = "0" + aUTCMonthStr;
                    }

                    var aUTCFullYear = theDate.getFullYear();
                    var aUTCFullYearStr = "" + aUTCFullYear;

                    var aDateStr =  aUTCDateStr + aSep + aUTCMonthStr + aSep + aUTCFullYearStr;
                    return aDateStr;
                };
                if( fDateToDateStr){}/* CQT */
                aPrototype.fDateToDateStr = fDateToDateStr;





                var fDateToDateStrYYYYMMDD = function( theDate, theSep) {

                    if( theDate == null) {
                        return null;
                    }

                    var aSep = theSep;
                    if( !aSep) {
                        aSep = this.DATESEPDEFAULT;
                    }

                    var aUTCDate = "" + theDate.getDate();
                    var aUTCDateStr = "" + aUTCDate;
                    if( aUTCDateStr.length < 2) {
                        aUTCDateStr = "0" + aUTCDateStr;
                    }

                    var aUTCMonth = "" + (theDate.getMonth()+ 1);
                    var aUTCMonthStr = "" + aUTCMonth;
                    if( aUTCMonthStr.length < 2) {
                        aUTCMonthStr = "0" + aUTCMonthStr;
                    }

                    var aUTCFullYear = theDate.getFullYear();
                    var aUTCFullYearStr = "" + aUTCFullYear;

                    var aDateStr =  aUTCFullYearStr + aSep + aUTCMonthStr + aSep + aUTCDateStr;
                    return aDateStr;
                };
                if( fDateToDateStrYYYYMMDD){}/* CQT */
                aPrototype.fDateToDateStrYYYYMMDD = fDateToDateStrYYYYMMDD;








                var fDateToDateWOsepsStr = function( theDate) {

                    if( theDate == null) {
                        return null;
                    }

                    var aUTCDate = "" + theDate.getDate();
                    var aUTCDateStr = "" + aUTCDate;
                    if( aUTCDateStr.length < 2) {
                        aUTCDateStr = "0" + aUTCDateStr;
                    }

                    var aUTCMonth = "" + (theDate.getMonth()+ 1);
                    var aUTCMonthStr = "" + aUTCMonth;
                    if( aUTCMonthStr.length < 2) {
                        aUTCMonthStr = "0" + aUTCMonthStr;
                    }

                    var aUTCFullYear = theDate.getFullYear();
                    var aUTCFullYearStr = "" + aUTCFullYear;

                    var aDateStr =  aUTCFullYearStr + aUTCMonthStr + aUTCDateStr;
                    return aDateStr;
                };
                if( fDateToDateWOsepsStr){}/* CQT */
                aPrototype.fDateToDateWOsepsStr = fDateToDateWOsepsStr;






                /* ACV OJO 201603012047 TODO Duplicate method also in priic-front-type.js */
                var fDateStrYYYYdashMMdashDDtoMillis = function( theDateStr) {

                    if( !theDateStr) {
                        return 0;
                    }

                    if( !( typeof theDateStr == "string")) {
                        return 0;
                    }

                    var aRegexpResult = this.REGEXP_DATE_YYYYdashMMdashDD.exec( theDateStr);
                    if( !aRegexpResult) {
                        return 0;
                    }

                    var aYearStr  = aRegexpResult[ 1];
                    var aMonthStr = aRegexpResult[ 2];
                    var aDayStr   = aRegexpResult[ 3];

                    if( !( aYearStr && aMonthStr && aDayStr)) {
                        return 0;
                    }


                    var aYear  = null;
                    var aMonth = null;
                    var aDay   = null;

                    try {
                        aYear = parseInt( aYearStr);
                    }
                    catch( anException){}

                    try {
                        aMonth = parseInt( aMonthStr);
                    }
                    catch( anException){}


                    try {
                        aDay = parseInt( aDayStr);
                    }
                    catch( anException){}

                    if( !( aYear && aMonth && aDay)) {
                        return 0;
                    }

                    var aDate = new Date( aYear, aMonth - 1, aDay);

                    var aMillis = aDate.getTime();

                    return aMillis;

                };
                if( fDateStrYYYYdashMMdashDDtoMillis){}/* CQT */
                aPrototype.fDateStrYYYYdashMMdashDDtoMillis = fDateStrYYYYdashMMdashDDtoMillis;








                var fDateStrDDdashMMdashYYYYtoMillis = function( theDateStr) {

                    if( !theDateStr) {
                        return 0;
                    }

                    if( !( typeof theDateStr == "string")) {
                        return 0;
                    }

                    var aRegexpResult = this.REGEXP_DATE_DDdashMMdashYYYY.exec( theDateStr);
                    if( !aRegexpResult) {
                        return 0;
                    }

                    var aYearStr  = aRegexpResult[ 3];
                    var aMonthStr = aRegexpResult[ 2];
                    var aDayStr   = aRegexpResult[ 1];

                    if( !( aYearStr && aMonthStr && aDayStr)) {
                        return 0;
                    }


                    var aYear  = null;
                    var aMonth = null;
                    var aDay   = null;

                    try {
                        aYear = parseInt( aYearStr);
                    }
                    catch( anException){}

                    try {
                        aMonth = parseInt( aMonthStr);
                    }
                    catch( anException){}


                    try {
                        aDay = parseInt( aDayStr);
                    }
                    catch( anException){}

                    if( !( aYear && aMonth && aDay)) {
                        return 0;
                    }

                    var aDate = new Date( aYear, aMonth - 1, aDay);

                    var aMillis = aDate.getTime();

                    return aMillis;

                };
                if( fDateStrDDdashMMdashYYYYtoMillis){}/* CQT */
                aPrototype.fDateStrDDdashMMdashYYYYtoMillis = fDateStrDDdashMMdashYYYYtoMillis;



















                /*
                 http://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
                 http://jsfiddle.net/zJ6UA/5/

                 homes.sort(sort_by('city', {name:'price', primer: parseInt, reverse: true}));

                 */

                var fSortMultiKeyFunction = function( theSortBy) {

                    // utility functions
                    var default_cmp = function(a, b) {
                        if (a == b) return 0;
                        return a < b ? -1 : 1;
                    };

                    var getCmpFunc = function(primer, reverse) {
                        var cmp = default_cmp;
                        if (primer) {
                            cmp = function(a, b) {
                                return default_cmp(primer(a), primer(b));
                            };
                        }
                        if (reverse) {
                            return function(a, b) {
                                return -1 * cmp(a, b);
                            };
                        }
                        return cmp;
                    };

                    // actual implementation
                    return ( function() {
                        var fields = [],
                            n_fields = arguments.length,
                            field, name, reverse, cmp;

                        // preprocess sorting options
                        for (var i = 0; i < n_fields; i++) {
                            field = arguments[i];
                            if (typeof field === 'string') {
                                name = field;
                                cmp = default_cmp;
                            }
                            else {
                                name = field.name;
                                cmp = getCmpFunc(field.primer, field.reverse);
                            }
                            fields.push({
                                name: name,
                                cmp: cmp
                            });
                        }

                        return function(A, B) {
                            var a, b, name, cmp, result;
                            for (var i = 0, l = n_fields; i < l; i++) {
                                result = 0;
                                field = fields[i];
                                name = field.name;
                                cmp = field.cmp;

                                result = cmp(A[name], B[name]);
                                if (result !== 0) break;
                            }
                            return result;
                        }
                    })( theSortBy);

                };
                if( fSortMultiKeyFunction){}/* CQT */
                aPrototype.fSortMultiKeyFunction = fSortMultiKeyFunction;
















                /*
                 about:flags

                 chrome://flags/#enable-experimental-web-platform-features

                 The FormData interface provides a way to easily construct a set of key/value pairs
                 representing form fields and their values,
                 which can then be easily sent using the XMLHttpRequest.send() method.
                 It uses the same format a form would use if the encoding type were set to "multipart/form-data".

                 [2] Chrome support for methods other than append is currently behind the "Enable Experimental Web Platform Features" flag.

                 Enable experimental Web Platform features. Mac, Windows, Linux, Chrome OS, Android
                 Enable experimental Web Platform features that are in development.
                 #enable-experimental-web-platform-features
                 */
                var fFormDataAsDict = function( theFormData) {
                    
                    if( !theFormData) {
                        return null;
                    }


                    if( !theFormData.entries || !( typeof theFormData.entries == "function")) {
                        /*
                        console.log( "\n\n\n\n\nCHROME VERSION DEPENDENCY 48 chrome://flags/#enable-experimental-web-platform-features OR 49 OR GREATER\n\n\n\n\n");
                         */
                        return theFormData;
                    }

                    var aDict = { };

                    var someFormDataEntriesIterator = theFormData.entries();

                    while( true) {

                        var aNextFormDataEntry = someFormDataEntriesIterator.next();
                        if( !aNextFormDataEntry) {
                            break;
                        }

                        var aKeyAndValue = aNextFormDataEntry[ "value"];
                        if( aKeyAndValue && aKeyAndValue.length && ( aKeyAndValue.length > 1)) {

                            var aKey   = aKeyAndValue[ 0];
                            var aValue = aKeyAndValue[ 1];
                            if( aKey) {

                                var aCurrentValue = aDict[ aKey];
                                if( ( typeof aCurrentValue == "undefined")) {
                                    aDict[ aKey] = aValue;
                                    continue;
                                }

                                if( ( typeof aCurrentValue == "object") && !( aCurrentValue == null) && ( typeof aCurrentValue.length == "number")) {
                                    aCurrentValue.push( aValue);
                                    continue;
                                }

                                aDict[ aKey] = [ aCurrentValue, aValue];
                            }
                        }

                        if( aNextFormDataEntry[ "done"]) {
                            break;
                        }
                    }

                    return aDict;
                };
                if( fFormDataAsDict){}/* CQT */
                aPrototype.fFormDataAsDict = fFormDataAsDict;









                var fDictFromListByKey = function( theList, theKeyPropertyName) {

                    if( !theList) {
                        return {};
                    }

                    if( !theKeyPropertyName) {
                        return {};
                    }

                    var aDict = { };

                    var aNumElems = theList.length;
                    if( !aNumElems) {
                        return {};
                    }

                    for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {

                        var anElem = theList[ anElemIdx];
                        if( ( typeof anElem == "object") && !( anElem == null)) {

                            var aKey = anElem[ theKeyPropertyName];
                            if( ( typeof aKey == "number") || ( typeof aKey == "string") || ( typeof aKey == "boolean")) {

                                aDict[ aKey] = anElem;
                            }
                        }
                    }

                    return aDict;

                };
                if( fDictFromListByKey){}/* CQT */
                aPrototype.fDictFromListByKey = fDictFromListByKey;










                function fDictFromListByKeyPath( theList, theKeyPath) {

                    if( !theList) {
                        return null;
                    }

                    var aNumElems = theList.length;
                    if( !aNumElems) {
                        return {};
                    }

                    if( !theKeyPath) {
                        return {};
                    }

                    if( theKeyPath.indexOf( ".") < 0) {
                        return FgTestHelper_DictFromListByKey_AsLists( theList, theKeyPath);
                    }

                    var aDict = { };

                    for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {

                        var anElem = theList[ anElemIdx];
                        if( anElem) {


                            var aTraversalResult = theSS_Te2estTraversals.fgTraverseToFromValue( theKeyPath, anElem);
                            if( aTraversalResult) {

                                var aKey = aTraversalResult[ "value"];
                                if( !( typeof aKey == "undefined") && !( aKey == null)) {

                                    aDict[ aKey] = anElem;
                                }
                            }
                        }
                    }

                    return aDict;
                };
                if( fDictFromListByKeyPath){}/* CQT */
                aPrototype.fDictFromListByKeyPath = fDictFromListByKeyPath;









                var fCollectProperty = function( theList, thePptyName) {

                    if( !theList) {
                        return null;
                    }

                    if( !thePptyName) {
                        return null;
                    }

                    var aNumElems = theList.length;
                    if( !aNumElems) {
                        return [ ];
                    }

                    if( !thePptyName) {
                        return [ ];
                    }


                    var aList = [ ];

                    for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {

                        var anElem = theList[ anElemIdx];
                        if( anElem) {

                            var aValue = anElem[ thePptyName];
                            if( !( typeof aValue == "undefined") && !( aValue == null)) {

                                if( aList.indexOf( aValue) < 0) {
                                    aList.push( aValue);
                                }
                            }
                        }
                    }

                    return aList;
                };
                if( fCollectProperty){}/* CQT */
                aPrototype.fCollectProperty = fCollectProperty;







                var fCollectPath = function( theList, thePath) {

                    if( !theList) {
                        return null;
                    }

                    if( !thePath) {
                        return null;
                    }

                    var aNumElems = theList.length;
                    if( !aNumElems) {
                        return [ ];
                    }

                    if( !thePath) {
                        return [ ];
                    }


                    var aList = [ ];

                    for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {

                        var anElem = theList[ anElemIdx];
                        if( anElem) {

                            var aTraversalResult = theS_Te2estTraversals.fgTraverseToFromValue( thePath, anElem);
                            if( aTraversalResult) {
                                var aValue = aTraversalResult[ "value"];

                                if( !( typeof aValue == "undefined") && !( aValue == null)) {

                                    if( aList.indexOf( aValue) < 0) {
                                        aList.push( aValue);
                                    }
                                }
                            }
                        }
                    }

                    return aList;
                };
                if( fCollectPath){}/* CQT */
                aPrototype.fCollectPath = fCollectPath;








                var fFicheroComoDataURL = function( theFichero) {

                    var aMethodName = "fFicheroComoDataURL";


                    if( !theFichero || !theFichero.size) {
                        return  this.fNewDeferredResolveWithNothingPromise( null);
                    }


                    var aDataUrlDeferred = this.fNewDeferred();

                    var aFileReader = new FileReader();

                    var aThis = this;

                    aFileReader.addEventListener( "load", function() {

                        var aBase64 = aFileReader.result;

                        if( !aBase64) {
                            var aRecord = aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, null, "!aBase64", null)
                            aThis.pDeferredReject( aDataUrlDeferred, aRecord);
                            return;
                        }

                        aThis.pDeferredResolveWithResponse( aDataUrlDeferred, aBase64);
                    });


                    aFileReader.addEventListener( "onerror", function( theError) {

                        var aRecord = aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, null, "onerror", theError)
                        aThis.pDeferredReject( aDataUrlDeferred, aRecord);
                    });


                    aFileReader.addEventListener( "onabort", function( theError) {

                        var aRecord = aThis.fRecord( aMethodName, aThis.EVENTKIND_SERVICEREPORT_FAIL, null, "onabort", theError)
                        aThis.pDeferredReject( aDataUrlDeferred, aRecord);
                    });



                    try {
                        aFileReader.readAsDataURL( theFichero);
                    }
                    catch( anException) {
                        throw anException;
                    }


                    return aDataUrlDeferred.promise;

                };
                if( fFicheroComoDataURL){}/* CQT */
                aPrototype.fFicheroComoDataURL = fFicheroComoDataURL;







                var fAsBoolean = function( theTrueOrFalseStrOrBool) {

                    if( typeof theTrueOrFalseStrOrBool == "undefined") {
                        return false;
                    }

                    if( typeof theTrueOrFalseStrOrBool == "boolean") {
                        return theTrueOrFalseStrOrBool;
                    }

                    if( !( typeof theTrueOrFalseStrOrBool == "string")) {
                        return false;
                    }


                    var aTrueOrFalse = theTrueOrFalseStrOrBool == true.toString();
                    if( aTrueOrFalse){}/* CQT */

                    return aTrueOrFalse;
                };
                if( fAsBoolean){}/* CQT */
                aPrototype.fAsBoolean = fAsBoolean;








                var fAsInteger = function( thePossiblyNumber) {

                    if( isNaN( thePossiblyNumber)) {
                        return undefined;
                    }

                    if( typeof thePossiblyNumber == "number") {
                        return thePossiblyNumber;
                    }

                    if( thePossiblyNumber == null) {
                        return null;
                    }

                    if( typeof thePossiblyNumber == "undefined") {
                        return undefined;
                    }

                    var aNumber = undefined;
                    try {
                        aNumber = parseInt( thePossiblyNumber);
                    }
                    catch( anException) {
                    }
                    if( !( typeof aNumber == "number")) {
                        return undefined;
                    }

                    if( isNaN( aNumber)) {
                        return undefined;
                    }

                    return aNumber;
                };
                if( fAsInteger){}/* CQT */
                aPrototype.fAsInteger = fAsInteger;






                var fAsFloat = function( thePossiblyNumber) {

                    if( isNaN( thePossiblyNumber)) {
                        return undefined;
                    }

                    if( typeof thePossiblyNumber == "number") {
                        return thePossiblyNumber;
                    }

                    if( thePossiblyNumber == null) {
                        return null;
                    }

                    if( typeof thePossiblyNumber == "undefined") {
                        return undefined;
                    }

                    var aNumber = undefined;
                    try {
                        aNumber = parseFloat( thePossiblyNumber);
                    }
                    catch( anException) {
                    }
                    if( !( typeof aNumber == "number")) {
                        return undefined;
                    }

                    if( isNaN( aNumber)) {
                        return undefined;
                    }

                    return aNumber;
                };
                if( fAsFloat){}/* CQT */
                aPrototype.fAsFloat = fAsFloat;









                var fAsIntegerList = function( thePossiblyListOfNumbers, theListSeparator) {
                    
                    if( !thePossiblyListOfNumbers) {
                        return [ ];
                    }

                    var aListSeparator = theListSeparator;
                    if( !aListSeparator) {
                        aListSeparator = this.LISTSEPARATOR_DEFAULT;
                    }

                    var aPossiblyListOfNumbers = thePossiblyListOfNumbers.split( aListSeparator);
                    if( !aPossiblyListOfNumbers) {
                        return [ ];
                    }

                    var aNumPossiblyNumbers = aPossiblyListOfNumbers.length;
                    if( !aNumPossiblyNumbers) {
                        return [ ];
                    }
                    
                    var someNumbers = [ ];
                    
                    for( var aPossiblyNumberIdx=0; aPossiblyNumberIdx < aNumPossiblyNumbers; aPossiblyNumberIdx++) {
                        
                        var aPossiblyNumber = aPossiblyListOfNumbers[ aPossiblyNumberIdx];
                        var aNumber = this.fAsInteger( aPossiblyNumber);
                        someNumbers.push( aNumber);
                    }

                    return someNumbers;
                };
                if( fAsIntegerList){}/* CQT */
                aPrototype.fAsIntegerList = fAsIntegerList;








                var fAsFloatList = function( thePossiblyListOfNumbers, theListSeparator) {

                    if( !thePossiblyListOfNumbers) {
                        return [ ];
                    }

                    var aListSeparator = theListSeparator;
                    if( !aListSeparator) {
                        aListSeparator = this.LISTSEPARATOR_DEFAULT;
                    }

                    var aPossiblyListOfNumbers = thePossiblyListOfNumbers.split( aListSeparator);
                    if( !aPossiblyListOfNumbers) {
                        return [ ];
                    }

                    var aNumPossiblyNumbers = aPossiblyListOfNumbers.length;
                    if( !aNumPossiblyNumbers) {
                        return [ ];
                    }

                    var someNumbers = [ ];

                    for( var aPossiblyNumberIdx=0; aPossiblyNumberIdx < aNumPossiblyNumbers; aPossiblyNumberIdx++) {

                        var aPossiblyNumber = aPossiblyListOfNumbers[ aPossiblyNumberIdx];
                        var aNumber = this.fAsFloat( aPossiblyNumber);
                        someNumbers.push( aNumber);
                    }

                    return someNumbers;
                };
                if( fAsFloatList){}/* CQT */
                aPrototype.fAsFloatList = fAsFloatList;









                var fOrderIndexNow = function( theExtraIndex) {

                    var anOrderIndex = new Date().getTime();

                    anOrderIndex = anOrderIndex % this.ORDERINDEXNOW_MOD;

                    anOrderIndex = anOrderIndex * this.ORDERINDEXNOW_MUL;

                    if( typeof theExtraIndex == "number") {
                        anOrderIndex += theExtraIndex;
                    }

                    return anOrderIndex;
                };
                if( fOrderIndexNow){}/* CQT */
                aPrototype.fOrderIndexNow = fOrderIndexNow;













                var fReserveInternalIdsFromCounterInDatabase = function( theCounterStoreName, theDatabaseWrapper, theDatabaseName, theDatabaseVersion, theNumIdsToReserve) {

                    var aMethodName = "fReserveInternalIdsFromCounterInDatabase";
                    var aRecord = null;

                    if( !theCounterStoreName) {
                        aRecord = this.fRecord( aMethodName, this.EVENTKIND_ACTIONREPORT_FAILED, theCounterStoreName, "!theCounterStoreName", null);
                        return this.fNewDeferredRejectPromise( aRecord);
                    }

                    if( !theDatabaseWrapper){
                        aRecord = this.fRecord( aMethodName, this.EVENTKIND_ACTIONREPORT_FAILED, theCounterStoreName, "!theDatabaseWrapper", null);
                        return this.fNewDeferredRejectPromise( aRecord);
                    }

                    if( !theDatabaseName) {
                        aRecord = this.fRecord( aMethodName, this.EVENTKIND_ACTIONREPORT_FAILED, theCounterStoreName, "!this.fDatabaseName()", null);
                        return this.fNewDeferredRejectPromise( aRecord);
                    }

                    if( !theDatabaseVersion) {
                        aRecord = this.fRecord( aMethodName, this.EVENTKIND_ACTIONREPORT_FAILED, theCounterStoreName, "!this.fDatabaseVersion()", null);
                        return this.fNewDeferredRejectPromise( aRecord);
                    }
                    
                    

                    if( !theNumIdsToReserve || theNumIdsToReserve < 1) {
                        return aThis.fNewDeferredResolveWithResponsePromise( []);
                    }



                    var aToReserveIdCounter  = null;


                    var someReservedIds = [ ];
                    
                    
                    var aReserveIdCounterDeferred = this.fNewDeferred();

                    var aThis = this;

                    theDatabaseWrapper.fRetrieveCollection_byKey(
                        theDatabaseName,
                        theDatabaseVersion,
                        theCounterStoreName,
                        this.SINGLETONIDBKEY
                    )
                    .then(
                        function( theToReserveIdCounterRetrievalResult) {

                            /*
                            console.log( "\nREAD COUNTER " + theCounterStoreName + "\n");
                             */

                            if( !( typeof theToReserveIdCounterRetrievalResult == "undefined") && !( theToReserveIdCounterRetrievalResult == null)) {

                                aToReserveIdCounter = theToReserveIdCounterRetrievalResult;
                            }

                            return aThis.fNewDeferredResolveWithResponsePromise( aToReserveIdCounter);
                        },
                        function( theError) {
                            throw theError;
                        }
                    )
                    .then(
                        function() {

                            var aLastReservedId = null;

                            if( aToReserveIdCounter) {

                                aLastReservedId = aToReserveIdCounter[ "lastReservedId"];
                                
                                var aFirstReservedId = aLastReservedId + 1;
                                
                                var anAfterLastReservedId = aFirstReservedId + theNumIdsToReserve - 1;
                                
                                for( var anIdCounter = aFirstReservedId; anIdCounter <= anAfterLastReservedId; anIdCounter++) {

                                    someReservedIds.push( anIdCounter);
                                }

                                aToReserveIdCounter[ "lastReservedId"] = anAfterLastReservedId;

                                return theDatabaseWrapper.fAddOrUpdateCollectionRecords(
                                    false /* theAddRecord */,
                                    theDatabaseName,
                                    theDatabaseVersion,
                                    theCounterStoreName,
                                    [ aToReserveIdCounter]
                                );
                            }
                            else {

                                var anCreatedToReserveIdCounter = aThis.fNewInitialToReserveIdCounter();
                                
                                aLastReservedId = anCreatedToReserveIdCounter[ "lastReservedId"];

                                var aFirstReservedIdCreated = aLastReservedId + 1;

                                var anAfterLastReservedIdCreated = aFirstReservedIdCreated + theNumIdsToReserve - 1;

                                for( var anIdCounterCreated = aFirstReservedIdCreated; anIdCounterCreated <= anAfterLastReservedIdCreated; anIdCounterCreated++) {

                                    someReservedIds.push( anIdCounterCreated);
                                }

                                anCreatedToReserveIdCounter[ "lastReservedId"] = anAfterLastReservedIdCreated;

                                return theDatabaseWrapper.fSaveElementsInCollection(
                                    null,
                                    theCounterStoreName,
                                    theDatabaseName,
                                    theDatabaseVersion,
                                    [ anCreatedToReserveIdCounter]
                                );
                            }

                        },
                        function( theError) {
                            throw theError;
                        }
                    )
                    .then(
                        function() {

                            if( !someReservedIds) {
                                aRecord = aThis.fRecord( aMethodName, aThis.EVENTKIND_ACTIONREPORT_FAILED, theCounterStoreName, "!someReservedIds", null);
                                aThis.pDeferredReject( aReserveIdCounterDeferred, aRecord);
                                return;
                            }

                            var aNumReservedIds = someReservedIds.length;
                            if( aNumReservedIds  < theNumIdsToReserve) {
                                aRecord = aThis.fRecord( aMethodName, aThis.EVENTKIND_ACTIONREPORT_FAILED, theCounterStoreName, "aNumReservedIds=" + aNumReservedIds + "  <  theNumIdsToReserve=" + theNumIdsToReserve, null);
                                aThis.pDeferredReject( aReserveIdCounterDeferred, aRecord);
                                return;
                            }


                            /*
                            console.log( "\nSAVED COUNTER " + theCounterStoreName + "\n");
                             */
                            /* Evitar error que devuelva varias veces la misma Id por no haber commitado y por tanto persistido,
                            dado que este metodo empieza haciendo un fRetrieveCollection_byKey que lee de IndexedDB y probablemente no devuelve en lectura
                            los registros con el mismo contenido que han sido "put" pero no commitados.
                             */
                            $timeout(
                                function() {
                                    aThis.pDeferredResolveWithResponse( aReserveIdCounterDeferred, someReservedIds);
                                },
                                0
                            );

                        },
                        function( theError) {
                            aThis.pDeferredReject( aReserveIdCounterDeferred, theError);
                        }
                    );

                    return aReserveIdCounterDeferred.promise;

                };
                if( fReserveInternalIdsFromCounterInDatabase){}/* CQT */
                aPrototype.fReserveInternalIdsFromCounterInDatabase = fReserveInternalIdsFromCounterInDatabase;











                var fNewInitialToReserveIdCounter = function() {

                    var anIdCounter = {
                        "_v_Type":        "fNewInitialToReserveIdCounter",
                        "lastReservedId":       0
                    };

                    anIdCounter[ this.SINGLETONIDBKEYPATH] = this.SINGLETONIDBKEY;

                    return anIdCounter;

                };
                if( fNewInitialToReserveIdCounter){}/* CQT */
                aPrototype.fNewInitialToReserveIdCounter = fNewInitialToReserveIdCounter;












                return aPrototype;

            })();








            var PRIICDoer_Constructor = function( theTitle, theIdentifier, theRecorder) {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

                this._v_Prototype = null;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Assembly = null;

                this._pInit_PRIICDoer( theTitle, theIdentifier, theRecorder);
            };
            PRIICDoer_Constructor.prototype = aPRIICDoer_Prototype;





            var PRIICDoer_SuperPrototypeConstructor = function() {

                /* Keep handy reference to super-prototype for super method invocation */
                this._v_SuperPrototype = theS_CommonSvceType.CommonSvce_Prototype;

                this._v_Prototype = aPRIICDoer_Prototype;
                this._v_Type      = null;
                this._v_Module    = null;

                this._v_Assembly = null;

            };
            PRIICDoer_SuperPrototypeConstructor.prototype = aPRIICDoer_Prototype;



            var aModule = {
                "PRIICDoer_Prototype": aPRIICDoer_Prototype,
                "PRIICDoer_Constructor": PRIICDoer_Constructor,
                "PRIICDoer_SuperPrototypeConstructor": PRIICDoer_SuperPrototypeConstructor
            };
            pgInitFromModuleConstants( aModule);
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleConstants = ModuleConstants;

            aPRIICDoer_Prototype._v_Module = aModule;




            return aModule;
        };







        var anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        if( !anExistingModule) {

            var aModule = aMod_definer(
                theSS_Overrider,
                theSS_CommonSvceType,
                theSS_Te2estTraversals,
                theSS_PRIIEventKinds,
                theSS_timeout
            );
            anExistingModule = aModule;

            theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
        }



        return anExistingModule;


    }
]);
