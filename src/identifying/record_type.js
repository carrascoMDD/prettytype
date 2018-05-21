/*
 * record.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 2017 2018 Antonio Carrasco Valero
 Multi-platform Javascript EC5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angular, require, node).

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

'use strict';

(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "record_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type) {
    
        var aMod_builder = function( theS_overrider_type) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                theToInit.MAXDATASTRINGLEN = 512;
                theToInit.MAXJSONSTRINGLEN = 2048;
                theToInit.MAXJSONELEMENTSTRINGLEN = 1024;
                
                theToInit.MAXDATASTRINGLEN = 1024;
                
                theToInit.MAXLOGSTRINGLEN = 4096;
                
                theToInit.LIMITLOGSTRINGLEN = true;
            };
            
            
            
            
            
            var InitFromModuleVariations = function( theToInit) {
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
            theS_overrider_type.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
               
               If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleConstants.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different constants,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleConstants
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
                   
                   
                   The key-values in a prototype's module ModuleConstants shall be copied onto the prototype object
                   which then hold key-value pairs for all keys in ModuleConstants, with the initial values same as in the ModuleConstants,
                   but these values may be changed in the prototype object.
                   The prototype may access each constant defined in ModuleConstants
                   as this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"] .
                   
                   All sub-prototypes defined in other modules and their instances
                   may also access this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"]
                   the key-values defined in any prototype recursively upwards the prototype hierarchy
                   and therefore to the key-values copied into each prototype object from their respective module ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                }
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Protoype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals. Instances may access this._v_Module.ModuleGlobals
               
                If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleGlobals.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different globals,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleGlobals
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
            */
            var InitModuleGlobalsOn = function( theToInit) {
                
                if( !theToInit) {
                }
            };
    
    
    
    
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
            
            
            
            
            
            
            
            
            
            
            var aRecord_Prototype = (function() {
                
                
                var aPrototype = {};
                
                InitFromModuleConstants( aPrototype);
    
                aPrototype._v_IsPrototype = true;
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "Record";
                
                aPrototype._v_Prototype_Record = aPrototype;
                
                aPrototype._v_Module = null;
                
                
                aPrototype._v_Timestamp    = null;
                aPrototype._v_Recorder     = null;
                aPrototype._v_RecordId     = null;
                aPrototype._v_Instance     = null;
                aPrototype._v_Step         = null;
                aPrototype._v_EventKind    = null;
                aPrototype._v_Data         = null;
                aPrototype._v_Reason       = null;
                aPrototype._v_Detail       = null;
                
                
                
                
                
                
                var _pInit = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                    
                    this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                var _pInit_Record = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                    
                    // this._v_Prototype = aPrototype;
                    // this._v_Type = aPrototype._v_Type;
                    // this._v_Module    = this._v_Prototype._v_Module;
                    
                    this._v_Timestamp    = Date.now();
                    this._v_Recorder     = theRecorder;
                    this._v_RecordId     = theRecordId;
                    this._v_Instance     = theInstance;
                    this._v_Step         = theStep;
                    this._v_EventKind    = theEventKind;
                    this._v_Data         = theData;
                    this._v_Reason       = theReason;
                    this._v_Detail       = theDetail;
                };
                if( _pInit_Record){}/* CQT */
                aPrototype._pInit_Record = _pInit_Record;
                
                
                
                
                
                
                
                
                
                
                var fCopyWithoutException = function() {
                    
                    var aCopy = new Record_Constructor(
                        this._v_Recorder,
                        this._v_RecordId,
                        this._v_Instance,
                        this._v_Step,
                        this._v_EventKind,
                        this._v_Data,
                        this._v_Reason,
                        this._v_Detail
                    );
                    
                    aCopy._v_Timestamp = this._v_Timestamp;
                    
                    if( aCopy._v_Data) {
                        if( aCopy._v_Data.name) {
                            
                            if(aCopy._v_Data.name == "Error") {
                                aCopy._v_Data = null;
                            }
                            
                            if( aCopy._v_Data.name == "ForcedException") {
                                aCopy._v_Data = null;
                            }
                        }
                    }
                    
                    if( aCopy._v_Reason) {
                        if( aCopy._v_Reason.name) {
                            
                            if(aCopy._v_Reason.name == "Error") {
                                aCopy._v_Reason = null;
                            }
                            
                            if( aCopy._v_Reason.name == "ForcedException") {
                                aCopy._v_Reason = null;
                            }
                        }
                    }
                    
                    if( aCopy._v_Detail) {
                        if( aCopy._v_Detail.name) {
                            
                            if(aCopy._v_Detail.name == "Error") {
                                aCopy._v_Detail = null;
                            }
                            
                            if( aCopy._v_Detail.name == "ForcedException") {
                                aCopy._v_Detail = null;
                            }
                        }
                    }
                    
                    return aCopy;
                };
                if( fCopyWithoutException){}/* CQT */
                aPrototype.fCopyWithoutException = fCopyWithoutException;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                /*
                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_RecordId
                    };
                    return aIdentifiyingJSON;
                };
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                */
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "recref": this._v_RecordId
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
                    
                    aIdentifyingJSON[ "title"] = new Date( this._v_Timestamp).toISOString();
                    
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
                        if( ( typeof theAlready.fAlready === "function") && theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                var toString = function() {
                    return this.fLogString();
                };
                if( toString){}/* CQT */
                aPrototype.toString = toString;
                
                
                
                
                
                
                
                
                var fLogString = function() {
                    
                    if( !this.LIMITLOGSTRINGLEN) {
                        return this.fLogString_unlimited();
                    }
                    
                    return this.fLogString_limited();
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;
                
                
                
                
                
                
                
                
                var fLogString_unlimited = function() {
                    
                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }
                    
                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}
                    
                    return aLogString;
                };
                if( fLogString_unlimited){}/* CQT */
                aPrototype.fLogString_unlimited = fLogString_unlimited;
                
                
                
                
                
                
                
                
                var fLogString_limited = function() {
                    
                    var aLog = this.fAsLogObject_limited();
                    if( aLog == null) {
                        return "";
                    }
                    
                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {}
                    
                    
                    if( aLogString.length < this.MAXLOGSTRINGLEN) {
                        
                        return aLogString;
                    }
                    
                    var aLogStringLimited = aLogString.slice( 0, this.MAXLOGSTRINGLEN);
                    if( aLogStringLimited){}/* CQT */
                    
                    return aLogStringLimited;
                };
                if( fLogString_limited){}/* CQT */
                aPrototype.fLogString_limited = fLogString_limited;
                
                
                
                
                
                
                
                
                
                var fString_NeedsToBeLimited = function( theValue) {
                    
                    if( theValue == null) {
                        return false;
                    }
                    
                    if( typeof theValue == "number") {
                        return false;
                    }
                    
                    if( !( typeof theValue == "string")) {
                        return false;
                    }
                    
                    var aNeedsToBeLimited = theValue.length > this.MAXJSONELEMENTSTRINGLEN;
                    if( aNeedsToBeLimited){}/* CQT */
                    
                    return aNeedsToBeLimited;
                };
                if( fString_NeedsToBeLimited){}/* CQT */
                aPrototype.fString_NeedsToBeLimited = fString_NeedsToBeLimited;
                
                
                
                
                
                
                
                
                
                var fString_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( !( typeof theValue == "string")) {
                        return null;
                    }
                    
                    if( theValue.length < this.MAXJSONELEMENTSTRINGLEN) {
                        
                        return theValue;
                    }
                    
                    var aStrLimited = theValue.slice( 0, this.MAXJSONELEMENTSTRINGLEN);
                    if( aStrLimited){}/* CQT */
                    
                    return aStrLimited;
                };
                if( fString_limited){}/* CQT */
                aPrototype.fString_limited = fString_limited;
                
                
                
                
                
                
                
                
                
                var fJSONValue_orLimited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return this.fString_limited( theValue);
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}
                    
                    if( !( aJSONstr == null)) {
                        if( this.fString_NeedsToBeLimited( aJSONstr)) {
                            var aJSONstrLimited = this.fString_limited( aJSONstr);
                            if( aJSONstrLimited){}/* CQT */
                            
                            return aJSONstrLimited;
                        }
                        
                        return theValue;
                    }
                    
                    
                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */
                    
                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */
                    
                    return aStrLimited;
                };
                if( fJSONValue_orLimited){}/* CQT */
                aPrototype.fJSONValue_orLimited = fJSONValue_orLimited;
                
                
                
                
                
                
                
                
                
                
                var fAsLogObject = function() {
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }
                    
                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    var aStep = this.fConvertValueToJSON( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }
                    
                    
                    var aInstance = this.fConvertValueToJSON( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }
                    
                    
                    var aData = this.fConvertValueToJSON( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }
                    
                    var aReason = this.fConvertReasonToJSON( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }
                    
                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;
                
                
                
                
                
                
                
                
                
                
                
                var fAsLogObject_limited = function() {
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Timestamp) {
                        aHasLog = true;
                        aLog.time = new Date( this._v_Timestamp).toISOString();
                    }
                    
                    if( this._v_RecordId) {
                        aHasLog = true;
                        aLog.rec = this._v_RecordId;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    var aStep = this.fConvertValueToJSON_limited( this._v_Step);
                    if( !( aStep == null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }
                    
                    
                    var aInstance = this.fConvertValueToJSON_limited( this._v_Instance);
                    if( !( aInstance == null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }
                    
                    
                    var aData = this.fConvertValueToJSON_limited( this._v_Data);
                    if( !( aData == null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }
                    
                    var aReason = this.fConvertReasonToJSON_limited( this._v_Reason);
                    if( !( aReason == null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }
                    
                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsLogObject_limited){}/* CQT */
                aPrototype.fAsLogObject_limited = fAsLogObject_limited;
                
                
                
                
                
                
                
                
                
                
                
                var fConvertReasonToJSON = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue.fAsReasonChain) {
                        return theValue.fAsReasonChain();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }
                    
                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }
                    
                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertReasonToJSON){}/* CQT */
                aPrototype.fConvertReasonToJSON = fConvertReasonToJSON;
                
                
                
                
                
                
                
                
                
                
                var fConvertReasonToJSON_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue.fAsReasonChain_limited) {
                        return theValue.fAsReasonChain_limited();
                    }
                    
                    if( theValue.fAsLogObject_limited) {
                        return theValue.fAsLogObject_limited();
                    }
                    
                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }
                    
                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }
                    
                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString();
                    var aStr_limited = this.fString_limited( aStr);
                    if( aStr_limited){}/* CQT */
                    
                    return aStr_limited;
                };
                if( fConvertReasonToJSON_limited){}/* CQT */
                aPrototype.fConvertReasonToJSON_limited = fConvertReasonToJSON_limited;
                
                
                
                
                
                
                
                
                
                
                var fAsReasonChain = function( theAlready) {
                    
                    
                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }
                    
                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }
                    
                    anAlready.push( this);
                    
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this._v_Reason.fAsReasonChain( anAlready);
                        }
                        else {
                            aReason = this.fConvertValueToJSON( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }
                    
                    
                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsReasonChain){}/* CQT */
                aPrototype.fAsReasonChain = fAsReasonChain;
                
                
                
                
                
                
                
                
                
                var fAsReasonChain_limited = function( theAlready) {
                    
                    
                    if( theAlready && ( theAlready.indexOf( this) >= 0)) {
                        return null;
                    }
                    
                    var anAlready = theAlready;
                    if( !anAlready) {
                        anAlready = [ ];
                    }
                    
                    anAlready.push( this);
                    
                    
                    var aLog = {};
                    var aHasLog = false;
                    
                    
                    if( this._v_Id) {
                        aHasLog = true;
                        aLog.tre = this._v_Id;
                    }
                    
                    var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
                    if( !( aEventKind == null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    if( this._v_Reason) {
                        var aReason = null;
                        if( this._v_Reason.fAsReasonChain) {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason.fAsReasonChain_limited( anAlready));
                        }
                        else {
                            aReason = this.fConvertValueToJSON_limited( this._v_Reason);
                        }
                        if( !( aReason == null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }
                    
                    
                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail == null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsReasonChain_limited){}/* CQT */
                aPrototype.fAsReasonChain_limited = fAsReasonChain_limited;
                
                
                
                
                
                
                
                
                
                var fConvertValueToJSON = function( theValue, theIncludeMembers) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fAsJSONable) {
                        return theValue.fAsJSONable();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }
                    
                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }
                    
                    var aJSONable = this.fAsJSONable( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    if( theIncludeMembers) {
                        if( theValue.fToResultJSON) {
                            return theValue.fToResultJSON();
                        }
                        
                        try {
                            var aJSONstr = JSON.stringify( theValue);
                            if( aJSONstr){}/* CQT */
                            return aJSONstr;
                        }
                        catch( anException) {}
                    }
                    
                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertValueToJSON){}/* CQT */
                aPrototype.fConvertValueToJSON = fConvertValueToJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fConvertValueToJSON_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fAsLogObject) {
                        return this.fJSONValue_orLimited( theValue.fAsLogObject());
                    }
                    
                    if( theValue.fAsJSONable_limited) {
                        return theValue.fAsJSONable_limited();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString);
                    }
                    
                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }
                    
                    var aJSONable = this.fAsJSONable_limited( theValue);
                    if( !( aJSONable == null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */
                    
                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */
                    
                    return aStrLimited;
                };
                if( fConvertValueToJSON_limited){}/* CQT */
                aPrototype.fConvertValueToJSON_limited = fConvertValueToJSON_limited;
                
                
                
                
                
                
                
                
                
                
                
                
                var fAsJSONable = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return theValue.fIdentifyingWithTitleJSON();
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return theValue.fIdentifyingJSON();
                    }
                    
                    if( theValue.fIdentifyingWithTitleString) {
                        return theValue.fIdentifyingWithTitleString();
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return theValue.fIdentifyingString();
                    }
                    
                    if( theValue.fLogString) {
                        return theValue.fLogString();
                    }
                    
                    if( theValue.fToResultJSON) {
                        return theValue.fToResultJSON();
                    }
                    
                    var aJSONstr = null;
                    try {
                        aJSONstr = JSON.stringify( theValue);
                    }
                    catch( anException) {}
                    
                    if( !( aJSONstr == null)) {
                        var aJSONstrlen = aJSONstr.length;
                        if ( aJSONstrlen > this.MAXJSONSTRINGLEN) {
                            return aJSONstr.substr( 0, this.MAXJSONSTRINGLEN);
                        }
                        return theValue;
                    }
                    
                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fAsJSONable){}/* CQT */
                aPrototype.fAsJSONable = fAsJSONable;
                
                
                
                
                
                
                
                
                
                var fAsJSONable_limited = function( theValue) {
                    
                    if( theValue == null) {
                        return null;
                    }
                    
                    if( typeof theValue == "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue == "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fAsLogObject_limited) {
                        return theValue.fAsLogObject_limited();
                    }
                    
                    if( theValue.fIdentifyingWithTitleJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
                    }
                    
                    if( theValue.fIdentifyingJSON) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
                    }
                    
                    if( theValue.fIdentifyingWithTitleString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleString());
                    }
                    
                    if( theValue.fIdentifyingString) {
                        return this.fJSONValue_orLimited( theValue.fIdentifyingString());
                    }
                    
                    if( theValue.fLogString_limited) {
                        return theValue.fLogString_limited();
                    }
                    
                    if( theValue.fAsLogObject) {
                        return theValue.fAsLogObject();
                    }
                    
                    if( theValue.fToResultJSON) {
                        return this.fJSONValue_orLimited( theValue.fToResultJSON());
                    }
                    
                    var aJSONorStr = this.fJSONValue_orLimited( theValue);
                    if( aJSONorStr){}/* CQT */
                    
                    return aJSONorStr;
                };
                if( fAsJSONable_limited){}/* CQT */
                aPrototype.fAsJSONable_limited = fAsJSONable_limited;
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecordHasEvent_recursive = function( theExpectedEvent, theAlready) {
                    
                    if( !theExpectedEvent) {
                        return false;
                    }
                    
                    if( theAlready  && ( theAlready.indexOf( this) >= 0)) {
                        return false;
                    }
                    
                    if( this._v_EventKind && ( this._v_EventKind == theExpectedEvent)) {
                        return true;
                    }
                    
                    if( theAlready) {
                        theAlready.push( this);
                    }
                    
                    
                    if( this._v_Reason) {
                        if( this._v_Reason.fRecordHasEvent_recursive) {
                            return this._v_Reason.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }
                        
                        if( this._v_Reason._v_Record) {
                            return this._v_Reason._v_Record.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
                        }
                    }
                    
                    return false;
                };
                if( fRecordHasEvent_recursive){}/* CQT */
                aPrototype.fRecordHasEvent_recursive = fRecordHasEvent_recursive;
                
                
                
                
                
                
                return aPrototype;
            })();
            
            
            
            
            var Record_Constructor = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                this._v_IsPrototype = false;
                this._v_Prototype = aRecord_Prototype;
                // this._v_Prototype = null;
                // this._v_SuperPrototype = null;
                // this._v_Type = null;
                // this._v_Module    = null;
                
                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;
                
                this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
            };
            Record_Constructor.prototype = aRecord_Prototype;
            
            
            
            
            
            var Record_SuperPrototypeConstructor = function() {
                this._v_IsPrototype = true;
                this._v_Prototype = aRecord_Prototype;
                // this._v_SuperPrototype = null;
                // this._v_Type = null;
                // this._v_Module    = null;
                
                this._v_Recorder   = null;
                this._v_RecordId   = null;
                this._v_Instance   = null;
                this._v_Step       = null;
                this._v_EventKind  = null;
                this._v_Data       = null;
                this._v_Reason     = null;
                this._v_Detail     = null;
            };
            Record_SuperPrototypeConstructor.prototype = aRecord_Prototype;
    
    
    
    
            var Record_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new Record_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
    
            var aModule = {
                "Record_Prototype": aRecord_Prototype,
                "Record_Constructor": Record_Constructor,
                "Record_SuperPrototypeConstructor": Record_SuperPrototypeConstructor,
                "Record_SuperPrototypeSingleton": Record_SuperPrototypeSingleton,
                "Prototype": aRecord_Prototype,
                "Constructor": Record_Constructor,
                "SuperPrototypeConstructor": Record_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": Record_SuperPrototypeSingleton
            };
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
            
            aRecord_Prototype._v_Module = aModule;
            
            
            
            
            
            return aModule;
        };
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
        return anExistingModule;
        
    });
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("identifyingTypes").factory("RecordType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry = require('../modboot/typesregistry');
            var aM_overrider     = require('../modboot/overrider_svce');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_record_type",
            [
                "m_typesregistry_svce",
                "m_overrider_svce"
            ],
            aMod_definer);
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "modboot", "overrider_svce")
            ],
            aMod_definer
        );
    
    }
    
})();




