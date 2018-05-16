/*
 * recorder_type.js
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
    
    var aMod_definer = ( function( theSS_typesregistry,
                                   theSS_Overrider,
                                   theSS_IdentifierSvce,
                                   theSS_IdentifierType,
                                   theSS_RecordType,
                                   theSS_RecordingPolicyType,
                                   theSS_DumpingPolicyType) {
    
    
        var ComponentName    = "prettytype";
        var ModuleName     = "recorder_type";
        var ModulePackages = "identifying";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
        
        
        
        var aMod_builder = function( theS_Overrider,
                                     theS_IdentifierSvce,
                                     theS_IdentifierType,
                                     theS_RecordType,
                                     theS_RecordingPolicyType,
                                     theS_DumpingPolicyType) {
            
            
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
                theToInit.RECORDER_DEFAULTTITLE = "RecorderDefaultName";
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
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            var aRecorder_Prototype = (function() {
                
                
                var aPrototype = {};
                
                pgInitFromModuleConstants( aPrototype);
    
                aPrototype._v_SuperPrototype = null;
    
                aPrototype._v_Type = "Recorder";
                
                aPrototype._v_Module = null;
                
                aPrototype._v_Prototype_Recorder = aPrototype;
                
                
                aPrototype._v_Identifier = null;
                
                aPrototype._v_Id         = null;
                aPrototype._v_Title      = null;
                
                aPrototype._v_Records    = null;
                aPrototype._v_RecordPointersByName = null;
                
                
                aPrototype._v_RecordsIdentifier    = null;
                
                aPrototype._v_RecordingPolicy = null;
                aPrototype._v_DumpingPolicy   = null;
                
                
                
                var _pInit = function( theTitle, theIdentifier) {
                    
                    this._pInit_Recorder( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_Recorder = function( theTitle, theIdentifier) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = this._v_Prototype._v_Module;
                    
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
                    
                    this._v_RecordsIdentifier = new theS_IdentifierType.Identifier_Constructor( "(For-" + this._v_Title + ")");
                    
                    
                    this._v_Records    = [ ];
                    this._v_RecordPointersByName = { };
                    
                    this.pClearKeptRecords();
                    
                    /* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
                     and shall prevent reclamation of their memory by the garbage collector
                     Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
                     which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
                     */
                    this._v_RecordingPolicy = new theS_RecordingPolicyType.RecordingPolicy_Constructor(     "(For-" + this._v_Title + ")", this._v_Identifier, this);
                    
                    this._v_DumpingPolicy   = new theS_DumpingPolicyType.DumpingPolicy_Constructor( "(For-" + this._v_Title + ")", this._v_Identifier, this);
                    
                };
                if( _pInit_Recorder){}/* CQT */
                aPrototype._pInit_Recorder = _pInit_Recorder;
                
                
                
                
                
                
                
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
                
                
                
                
                
                
                
                var fEventsToResultJSON = function( ) {
                    
                    var someCommonObjects = null;
                    var aJSON = this.fToResultJSON( someCommonObjects);
                    
                    var someRecordLogObjects = [];
                    aJSON.records = someRecordLogObjects;
                    
                    if( this._v_Records) {
                        var aNumRecords = this._v_Records.length;
                        for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                            var aRecord = this._v_Records[ aRecordIdx];
                            var aRecordLogObject = aRecord.fAsLogObject();
                            if( aRecordLogObject) {
                                someRecordLogObjects.push( aRecordLogObject);
                            }
                        }
                    }
                    
                    return aJSON;
                };
                if( fEventsToResultJSON){}/* CQT */
                aPrototype.fEventsToResultJSON = fEventsToResultJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecordingPolicy = function() {
                    
                    return this._v_RecordingPolicy;
                    
                };
                if( fRecordingPolicy){}/* CQT */
                aPrototype.fRecordingPolicy = fRecordingPolicy;
                
                
                
                
                
                
                
                var pSetRecordingPolicy = function( theRecordingPolicy) {
                    
                    if( this._v_RecordingPolicy) {
                        if( this._v_RecordingPolicy === theRecordingPolicy) {
                            return;
                        }
                        
                        if( this._v_RecordingPolicy.pRelease && ( typeof this._v_RecordingPolicy.pRelease === "function")) {
                            this._v_RecordingPolicy.pRelease();
                        }
                    }
                    
                    this._v_RecordingPolicy = theRecordingPolicy;
                    
                    var aRecordingPolicy_recorder = null;
                    if( theRecordingPolicy.fRecorder && ( typeof theRecordingPolicy.fRecorder === "function")) {
                        aRecordingPolicy_recorder = theRecordingPolicy.fRecorder();
                    }
                    
                    if( !aRecordingPolicy_recorder) {
                        return;
                    }
                    
                    if( !( aRecordingPolicy_recorder === this)) {
                        theRecordingPolicy.pSetRecorder( this);
                    }
                    
                };
                if( pSetRecordingPolicy){}/* CQT */
                aPrototype.pSetRecordingPolicy = pSetRecordingPolicy;
                
                
                
                
                
                
                
                
                
                var fDumpingPolicy = function() {
                    
                    return this._v_DumpingPolicy;
                    
                };
                if( fDumpingPolicy){}/* CQT */
                aPrototype.fDumpingPolicy = fDumpingPolicy;
                
                
                
                
                
                
                
                var pSetDumpingPolicy = function( theDumpingPolicy) {
                    
                    if( this._v_DumpingPolicy) {
                        if( this._v_DumpingPolicy.pRelease && ( typeof this._v_DumpingPolicy.pRelease === "function")) {
                            this._v_DumpingPolicy.pRelease();
                        }
                    }
                    
                    this._v_DumpingPolicy = theDumpingPolicy;
                    
                    var aDumpingPolicy_recorder = null;
                    if( theDumpingPolicy.fRecorder && ( typeof theDumpingPolicy.fRecorder === "function")) {
                        aDumpingPolicy_recorder = theDumpingPolicy.fRecorder();
                    }
                    
                    if( !aDumpingPolicy_recorder) {
                        return;
                    }
                    
                    if( !( aDumpingPolicy_recorder === this)) {
                        theDumpingPolicy.pSetRecorder( this);
                    }
                    
                };
                if( pSetDumpingPolicy){}/* CQT */
                aPrototype.pSetDumpingPolicy = pSetDumpingPolicy;
                
                
                
                
                
                
                
                
                
                
                
                var fCreateAndRegisterRecord = function( theInstance, theStep, theEventKind, theData, theReason, theDetails) {
                    
                    var aRecordId = this._v_RecordsIdentifier.fReserveId();
                    
                    var aRecord = new theS_RecordType.Record_Constructor( this, aRecordId,  theInstance, theStep, theEventKind, theData, theReason, theDetails);
                    
                    try {
                        if( aRecord) {
                            
                            var aRecordedRecordPointer = null;
                            
                            if( this._v_RecordingPolicy) {
                                aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( aRecord);
                            }
                            
                            if( this._v_DumpingPolicy) {
                                this._v_DumpingPolicy.pDumpRecord( aRecord, aRecordedRecordPointer);
                            }
                        }
                    }
                    catch( anException) {
                    
                    }
                    
                    return aRecord;
                };
                if( fCreateAndRegisterRecord){}/* CQT */
                aPrototype.fCreateAndRegisterRecord = fCreateAndRegisterRecord;
                
                
                
                
                
                
                
                /* Deprecated. Kept in support of common type pLogRecord . Use common type fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to console */
                var pLogRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    var aRecordedRecordPointer = null;
                    
                    if( this._v_RecordingPolicy) {
                        aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( theRecord);
                    }
                    
                    if( this._v_DumpingPolicy) {
                        this._v_DumpingPolicy.pDumpRecord( theRecord, aRecordedRecordPointer);
                    }
                    
                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;
                
                
                
                
                
                
                
                
                /* Invoked from RecordingPolicy fRecordRecord() */
                var pKeepRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    if( !this._v_Records) {
                        this._v_Records = [ ];
                    }
                    
                    this._v_Records.push( theRecord);
                    
                };
                if( pKeepRecord){}/* CQT */
                aPrototype.pKeepRecord = pKeepRecord;
                
                
                
                
                
                
                
                
                var fKeptRecords = function() {
                    
                    if( !this._v_Records) {
                        return null;
                    }
                    
                    if( !( typeof this._v_Records.slice === "function")) {
                        return null;
                    }
                    
                    return this._v_Records.slice();
                    
                };
                if( fKeptRecords){}/* CQT */
                aPrototype.fKeptRecords = fKeptRecords;
                
                
                
                
                
                var fKeptRecordsSlice = function( theFirstIndex) {
                    
                    if( theFirstIndex < 0) {
                        return this._v_Records.slice();
                    }
                    
                    
                    if( !this._v_Records) {
                        return [];
                    }
                    
                    if( !( typeof this._v_Records.slice === "function")) {
                        return [];
                    }
                    
                    return this._v_Records.slice( theFirstIndex);
                    
                };
                if( fKeptRecordsSlice){}/* CQT */
                aPrototype.fKeptRecordsSlice = fKeptRecordsSlice;
                
                
                
                
                
                var pClearKeptRecords = function() {
                    
                    if( !this._v_Records) {
                        return;
                    }
                    
                    this._v_Records = [ ];
                    this._v_RecordPointersByName = { };
                    
                };
                if( pClearKeptRecords){}/* CQT */
                aPrototype.pClearKeptRecords = pClearKeptRecords;
                
                
                
                
                
                
                
                var fLastKeptRecordPointer = function() {
                    
                    if( !this._v_Records) {
                        return null;
                    }
                    
                    return this._v_Records.length -1;
                    
                };
                if( fLastKeptRecordPointer){}/* CQT */
                aPrototype.fLastKeptRecordPointer = fLastKeptRecordPointer;
                
                
                
                
                
                
                
                
                
                var pSetRecordPointer = function( theRecordPointerName, theRecordPointer /* If not a record pointer in range by array index then point to last record */ ) {
                    
                    if( !theRecordPointerName) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName) {
                        this._v_RecordPointersByName = { };
                    }
                    
                    
                    var aRecordPointer = -1;
                    
                    if( typeof theRecordPointer === "number") {
                        
                        if( !isNaN( theRecordPointer)) {
                            
                            if( theRecordPointer >= 0) {
                                
                                if( this._v_Records) {
                                    
                                    var aNumRecords = this._v_Records.length;
                                    if( aNumRecords) {
                                        
                                        if( theRecordPointer < aNumRecords) {
                                            
                                            aRecordPointer = theRecordPointer;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                    
                    if( aRecordPointer < 0) {
                        if( this._v_Records) {
                            
                            var otherNumRecords = this._v_Records.length;
                            if( otherNumRecords) {
                                
                                aRecordPointer = otherNumRecords - 1;
                            }
                        }
                    }
                    
                    this._v_RecordPointersByName[ theRecordPointerName] = aRecordPointer;
                    
                };
                if( pSetRecordPointer){}/* CQT */
                aPrototype.pSetRecordPointer = pSetRecordPointer;
                
                
                
                
                
                
                var pClearRecordPointer = function( theRecordPointerName) {
                    
                    if( !theRecordPointerName) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName.hasOwnProperty( theRecordPointerName)) {
                        return;
                    }
                    
                    delete this._v_RecordPointersByName[ theRecordPointerName];
                    
                };
                if( pClearRecordPointer){}/* CQT */
                aPrototype.pClearRecordPointer = pClearRecordPointer;
                
                
                
                
                
                var fGetRecordPointerNamed = function( theRecordPointerName) {
                    
                    if( !theRecordPointerName) {
                        return null;
                    }
                    
                    return this._v_RecordPointersByName[ theRecordPointerName];
                    
                };
                if( fGetRecordPointerNamed){}/* CQT */
                aPrototype.fGetRecordPointerNamed = fGetRecordPointerNamed;
                
                
                
                
                
                
                
                var pSubstractFromAllRecordPointers = function( theAmountToSubstract) {
                    
                    if( !theAmountToSubstract || ( theAmountToSubstract < 0)) {
                        return;
                    }
                    
                    if( !this._v_RecordPointersByName) {
                        return;
                    }
                    
                    var someRecordPointersByNameKeys = Object.keys( this._v_RecordPointersByName);
                    if( !someRecordPointersByNameKeys) {
                        return;
                    }
                    
                    var aNumRecordPointersByNameKeysLen = someRecordPointersByNameKeys.length;
                    if( !aNumRecordPointersByNameKeysLen) {
                        return;
                    }
                    
                    for( var aRecordPointerByNameKeyIdx=0; aRecordPointerByNameKeyIdx < aNumRecordPointersByNameKeysLen; aRecordPointerByNameKeyIdx++) {
                        var aRecordPointerByNameKey = someRecordPointersByNameKeys[ aRecordPointerByNameKeyIdx];
                        if( aRecordPointerByNameKey) {
                            if( this._v_RecordPointersByName.hasOwnProperty( aRecordPointerByNameKey)) {
                                
                                var aRecordPointerValue = this._v_RecordPointersByName[ aRecordPointerByNameKey];
                                if( typeof aRecordPointerValue === "number") {
                                    if( !isNaN( aRecordPointerValue)) {
                                        
                                        var anUpdatedRecordPointerValue = aRecordPointerValue - theAmountToSubstract;
                                        if( anUpdatedRecordPointerValue){}/* CQT */
                                        this._v_RecordPointersByName[ aRecordPointerByNameKey] = anUpdatedRecordPointerValue;
                                    }
                                }
                            }
                        }
                    }
                    
                };
                if( pSubstractFromAllRecordPointers){}/* CQT */
                aPrototype.pSubstractFromAllRecordPointers = pSubstractFromAllRecordPointers;
                
                
                
                
                
                
                
                
                var pDiscardRecordsToMaxNumber = function( theMaxNumberOfRecords) {
                    
                    if( !theMaxNumberOfRecords || ( theMaxNumberOfRecords < 0)) {
                        return;
                    }
                    
                    
                    if( !this._v_Records) {
                        return;
                    }
                    
                    var aNumRecords = this._v_Records.length;
                    if( !aNumRecords) {
                        return;
                    }
                    
                    if( aNumRecords <= theMaxNumberOfRecords) {
                        return;
                    }
                    
                    var aFirstRecordIndexToKeep = aNumRecords - theMaxNumberOfRecords;
                    if( aFirstRecordIndexToKeep <= 0) {
                        return;
                    }
                    
                    this._v_Records.splice( 0, aFirstRecordIndexToKeep);
                    
                    this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);
                    
                };
                if( pDiscardRecordsToMaxNumber){}/* CQT */
                aPrototype.pDiscardRecordsToMaxNumber = pDiscardRecordsToMaxNumber;
                
                
                
                
                
                
                
                
                
                
                
                var pDiscardRecordsOlderThan = function( theOlderThanMillis) {
                    
                    if( !theOlderThanMillis || ( theOlderThanMillis < 0)) {
                        return;
                    }
                    
                    
                    if( !this._v_Records) {
                        return;
                    }
                    
                    var aNumRecords = this._v_Records.length;
                    if( !aNumRecords) {
                        return;
                    }
                    
                    
                    var aNowMillis = new Date().getTime();
                    var anEarlierMillis = aNowMillis - theOlderThanMillis;
                    if( anEarlierMillis <= 0) {
                        return;
                    }
                    
                    
                    var aFirstRecordIndexToKeep = 0;
                    
                    for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                        
                        aFirstRecordIndexToKeep = aRecordIdx;
                        
                        var aRecord = this._v_Records[ aRecordIdx];
                        if( aRecord) {
                            
                            var aRecord_timestamp_millis = aRecord._v_Timestamp;
                            if( aRecord_timestamp_millis) {
                                
                                if( aRecord_timestamp_millis >= anEarlierMillis) {
                                    break;
                                }
                            }
                        }
                    }
                    
                    
                    if( !aFirstRecordIndexToKeep) {
                        return;
                    }
                    
                    this._v_Records.splice( 0, aFirstRecordIndexToKeep);
                    
                    this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);
                    
                };
                if( pDiscardRecordsOlderThan){}/* CQT */
                aPrototype.pDiscardRecordsOlderThan = pDiscardRecordsOlderThan;
                
                
                
                
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var Recorder_Constructor = function( theTitle, theIdentifier) {
                this._v_Prototype = null;
                this._v_SuperPrototype = null;
                this._v_Type = null;
                this._v_Module = null;
                
                this._v_Identifier = null;
                
                this._v_Id         = null;
                this._v_Title      = null;
                
                this._v_Records    = null;
                this._v_RecordPointersByName = null;
                
                this._v_RecordsIdentifier = null;
                
                this._v_RecordingPolicy = null;
                this._v_DumpingPolicy   = null;
                
                this._pInit_Recorder( theTitle, theIdentifier);
            };
            Recorder_Constructor.prototype = aRecorder_Prototype;
            
            
            
            
            
            var Recorder_SuperPrototypeConstructor = function() {
                this._v_Prototype = aRecorder_Prototype;
                this._v_SuperPrototype = null;
                this._v_Type      = null;
                this._v_Module    = null;
                
                this._v_Identifier = null;
                
                this._v_Id         = null;
                this._v_Title      = null;
                
                this._v_Records    = null;
                this._v_RecordPointersByName = null;
                
                this._v_RecordsIdentifier = null;
                
                this._v_RecordingPolicy = null;
                this._v_DumpingPolicy   = null;
            };
            Recorder_SuperPrototypeConstructor.prototype = aRecorder_Prototype;
    
    
            var Recorder_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new Recorder_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
            var aModule = {
                "Recorder_Prototype": aRecorder_Prototype,
                "Recorder_Constructor": Recorder_Constructor,
                "Recorder_SuperPrototypeConstructor": Recorder_SuperPrototypeConstructor,
                "Recorder_SuperPrototypeSingleton": Recorder_SuperPrototypeSingleton,
                "Prototype": aRecorder_Prototype,
                "Constructor": Recorder_Constructor,
                "SuperPrototypeConstructor": Recorder_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": Recorder_SuperPrototypeSingleton
            };
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName     = ModuleName;
            aModule.ModulePackages = ModulePackages;
            aModule.ModuleFullName = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
    
            aRecorder_Prototype._v_Module = aModule;
            
            
            return aModule;
        };
        
        
        
        
        
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider,
                theSS_IdentifierSvce,
                theSS_IdentifierType,
                theSS_RecordType,
                theSS_RecordingPolicyType,
                theSS_DumpingPolicyType
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry === 'undefined')
                && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
                theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
    
        return anExistingModule;
        
    });
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("identifyingTypes").factory("RecorderType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            "IdentifierType",
            "RecordType",
            "RecordingPolicyKeepAllType",
            "DumpingPolicyFilterKindsType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            var aM_identifierSvce = require('./identifier_svce');
            var aM_identifier     = require('./identifier_type');
            var aM_record         = require('./record_type');
            var aM_recordingpolicy= require('./recordingpolicy_keepall_type');
            var aM_dumpingpolicy  = require('./dumpingpolicy_filterkinds_type');
    
            return aMod_definer(
                aM_typesregistry,
                aM_overrider,
                aM_identifierSvce,
                aM_identifier,
                aM_record,
                aM_recordingpolicy,
                aM_dumpingpolicy
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_recorder_type",
            [
                "m_typesregistry",
                "m_overrider_svce",
                "m_identifier_svce",
                "m_identifier_type",
                "m_record_type",
                "m_recordingpolicy_keepall_type",
                "m_dumpingpolicy_filterkinds_type"
            ],
            aMod_definer);
    }
    
    
})();







