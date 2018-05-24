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
    
    var ComponentName    = "prettytype";
    var ModuleName     = "recorder_type";
    var ModulePackages = "recording";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Recorder";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_type,
                                 theSS_IdentifierSvce,
                                 theSS_IdentifierType,
                                 theSS_RecordType,
                                 theSS_RecordingPolicyType,
                                 theSS_DumpingPolicyType) {
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_IdentifierSvce,
                                     theS_IdentifierType,
                                     theS_RecordType,
                                     theS_RecordingPolicyType,
                                     theS_DumpingPolicyType) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs.
               The key values defined as Variations may be overriden by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object
                 initialised in the corresponding variables of the overrider_svce singleton.
               Any key-values in arguments, custom or overrides whose key is not defined in Variations
                 shall not be be copied into Variations.
               
               These key values are added to the module Constants.
               Therefore these key values, once initialised and possibly overriderm have an expected read-only life-cycle.

               Any key-values defined into Constants with same key as one in Variations
                 shall replace the value with same key obtained from Variations.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
            };
    
    
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleVariations onto the supplied object.
               Used to fill the Module Constants object.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
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
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module which may be overriden by overrider_svce singleton,
                and later copied into Constants.
            */
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
    
            /* ***************************************************************
               Override key-values in Variations by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object .
            */
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
                    return;
                }
                theToInit.RECORDER_DEFAULTTITLE = "RecorderDefaultName";
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Prototype object with the key-value pairs in Constants.
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
    
    
    
    
    
    
    
            /* ***************************************************************
              Returns an object which shall be used as prototype in constructor functions
              <TypeName>_Constructor and <TypeName>_SuperPrototypeConstructor
              
              When the new prototype shall have no super-prototype, the object is created as new Object() or literal {}.
              
              When the new prototype shall have a super-prototype, the object is created by invoking a constructor function
                with the super-prototype as the function prototype.
                
              Initialise metatype variables in the prototype object.
                When accessing the prototype or its instances, these values shall override same keys in the super-prototype, if any.
                
              Invoked by ProtoFactory as the first step to produce an object fully able to serve as Prototype.
            */
            var Recorder_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
        
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Recorder       = aPrototype;
                /* Shall be filled below, at the end of the function enclosing this (aMod_builder), when aModule is defined */
                aPrototype._v_Module                  = null;
        
                return aPrototype;
            };
    
    
    
            /* ***************************************************************
              In modules defining a prototype: Initialise with the desired value the slots for all prototype scoped properties,
                  I.e. same read value shared among all the instances.
                  The supplied object is expected to be used as prototype (assigned as prototype to constructor functions
                  <TypeName>_Constructor and <TypeName>_SuperPrototypeConstructor)
              
              Read access:
                this.<VariableName> or this["<VariableName>"]
                These variables shall be accessible for read to the prototype, its instance, sub-prototypes and their instances,
                    and the same identical value or object reference shall be obtained from all the accesses
                    unless a value with same key has been set in intermediate prototypes or the accessed object.
              
              Write access:
                On the prototype object which was supplied to this function Recorder_CreatePrototypeSlotsOn
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    The same identical newly set value or object reference shall shall be obtained from all the accesses
                    unless a value with same key has been set in intermediate prototypes or the accessed object.
                
                On instances of the prototype:
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    Shall create a new, slot in the instance which is different from the one in the instance prototype,
                    and may hold whichever value or reference.
                    From the moment the slot is set in the instance, the value or reference obtained by read access
                        this.<VariableName> or this["<VariableName>"]
                        shall not be the value or reference held by the prototype in a slot of same property name,
                        but the value set in the instance.
                    All other instance of the prottype still read the value in the prototype slot,
                        or their own value for same property name slot, if any set.

                On sub-prototypes and their instances:
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    Shall create a new, slot in the instance which is different from the one in the instance prototype,
                    and may hold whichever value or reference, similarly to the case "On instances of the prototype" above.
                    
              Invoked by ProtoFactory as one of the steps to produce an object fully able to serve as Prototype.
            */
            var Recorder_CreatePrototypeSlotsOn = function( theFrame) {
                if( !theFrame) {
                }
            };
    
    
    
    
            /* ***************************************************************
              In modules defining a prototype: Initialise with null value the slots for all instance scoped properties
                in the the supplied object.
                  I.e. the value is owned exclusively by its instance.
                  The supplied object is expected to be used as an instance
                    as created by invocation of the Constructor or SuperPrototypeConstructor
                    
              Instances of the prototype shall be able to read and write each its own values on these slots.
              
              Instances of any sub-prototypes of this prototype (thus created with SuperPrototypeConstructor):
                Shall be able to read these instance slots with exactly the same value held by the prototype object.
              
              If a property of same value is set in an instance of any sub-prototypes of this prototype:
                Shall create a new slot in the instance with whichever value or reference,
                  and the value held by the super-prototype object shall no longer be accessible
                  unless navigating up the prototypical inheritance tree through the _v_SuperPrototype property.
                
              Invoked by Constructor and SuperPrototypeConstructor and as one of the steps to produce an object
                fully able to serve as instance of this prototype, or as super-prototype for derived prototypes.
            */
            var Recorder_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Identifier           = null;
                theFrame._v_Id                   = null;
                theFrame._v_Title                = null;
                theFrame._v_Records              = null;
                theFrame._v_RecordPointersByName = null;
                theFrame._v_RecordsIdentifier    = null;
                theFrame._v_RecordingPolicy      = null;
                theFrame._v_DumpingPolicy        = null;
            };
    
    
    
    
    
            /* ***************************************************************
              In modules defining a prototype: Initialise in the supplied object the methods in the prototype,
                and possibly other private functions or variables.
                
              Must include a definition of _pInit_<TypeName> to be used from the Constructor to initialise instances.
              
              If the prototype has a super-prototype then the _pInit_<TypeName> method shall delegate
                in the initialiser of the super-prototype_pInit_<SuperPrototype TypeName>
                
              Instances of the prototype shall be able to invoke these methods.

              Instances of any sub-prototypes of this prototype (thus created with SuperPrototypeConstructor):
                Shall be able to invoke these methods.
              
              If a sub-prototype defines a method with same name as one in any of its super-prototypes
                recursively upwards the prototypical inheritance tree,
                instances of the sub-prototype and their recursive sub-prototypes shall be able to access the
                method as implemented by the prototype most immediately implementing the function,
                and any methods of same name defined upwards the prototypical inheritance tree shall not be accesible
                unless navigating up the prototypical inheritance tree through the _v_SuperPrototype property.
                
              Invoked by ProtoFactory as the last step to produce an object fully able to serve as Prototype.
            */
            var Recorder_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
        
                
                
                var _pInit = function( theTitle, theIdentifier) {
                    
                    this._pInit_Recorder( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_Recorder = function( theTitle, theIdentifier) {
                    
                    this._v_Prototype = thePrototype;
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
                thePrototype._pInit_Recorder = _pInit_Recorder;
    
    
    
    
    
    
    
                var pRelease = function() {
                    this._v_Identifier           = null;
                    this._v_Id                   = null;
                    this._v_Title                = null;
                    this._v_Records              = null;
                    this._v_RecordPointersByName = null;
                    this._v_RecordsIdentifier    = null;
                    this._v_RecordingPolicy      = null;
                    this._v_DumpingPolicy        = null;
                };
                if( pRelease){}/* CQT */
                thePrototype.pRelease = pRelease;
    
    
    
                
    
    
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                thePrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                thePrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
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
                thePrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                thePrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
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
                thePrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
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
                thePrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
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
                thePrototype.fEventsToResultJSON = fEventsToResultJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecordingPolicy = function() {
                    
                    return this._v_RecordingPolicy;
                    
                };
                if( fRecordingPolicy){}/* CQT */
                thePrototype.fRecordingPolicy = fRecordingPolicy;
                
                
                
                
                
                
                
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
                thePrototype.pSetRecordingPolicy = pSetRecordingPolicy;
                
                
                
                
                
                
                
                
                
                var fDumpingPolicy = function() {
                    
                    return this._v_DumpingPolicy;
                    
                };
                if( fDumpingPolicy){}/* CQT */
                thePrototype.fDumpingPolicy = fDumpingPolicy;
                
                
                
                
                
                
                
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
                thePrototype.pSetDumpingPolicy = pSetDumpingPolicy;
                
                
                
                
                
                
                
                
                
                
                
                var fCreateAndRegisterRecord = function( theInstance, theStep, theEventKind, theData, theReason, theDetails) {
                    
                    var aRecordId = this._v_RecordsIdentifier.fReserveId();
                    
                    var aRecord = new theS_RecordType.Record_Constructor( this, aRecordId,  theInstance, theStep, theEventKind, theData, theReason, theDetails);
                    
                    try {
                        if( aRecord) {
                            
                            var aRecordedRecordPointer = null;
                            
                            if( this._v_RecordingPolicy) {
                                aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( aRecord);
                                if( aRecordedRecordPointer){}/* CQT */
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
                thePrototype.fCreateAndRegisterRecord = fCreateAndRegisterRecord;
                
                
                
                
                
                
                
                /* Deprecated. Kept in support of common type pLogRecord . Use common type fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to recorder */
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
                thePrototype.pLogRecord = pLogRecord;
                
                
                
                
                
                
                
                
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
                thePrototype.pKeepRecord = pKeepRecord;
                
                
                
                
                
                
                
                
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
                thePrototype.fKeptRecords = fKeptRecords;
                
                
                
                
                
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
                thePrototype.fKeptRecordsSlice = fKeptRecordsSlice;
                
                
                
                
                
                var pClearKeptRecords = function() {
                    
                    if( !this._v_Records) {
                        return;
                    }
                    
                    this._v_Records = [ ];
                    this._v_RecordPointersByName = { };
                    
                };
                if( pClearKeptRecords){}/* CQT */
                thePrototype.pClearKeptRecords = pClearKeptRecords;
                
                
                
                
                
                
                
                var fLastKeptRecordPointer = function() {
                    
                    if( !this._v_Records) {
                        return null;
                    }
                    
                    return this._v_Records.length -1;
                    
                };
                if( fLastKeptRecordPointer){}/* CQT */
                thePrototype.fLastKeptRecordPointer = fLastKeptRecordPointer;
                
                
                
                
                
                
                
                
                
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
                thePrototype.pSetRecordPointer = pSetRecordPointer;
                
                
                
                
                
                
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
                thePrototype.pClearRecordPointer = pClearRecordPointer;
                
                
                
                
                
                var fGetRecordPointerNamed = function( theRecordPointerName) {
                    
                    if( !theRecordPointerName) {
                        return null;
                    }
                    
                    return this._v_RecordPointersByName[ theRecordPointerName];
                    
                };
                if( fGetRecordPointerNamed){}/* CQT */
                thePrototype.fGetRecordPointerNamed = fGetRecordPointerNamed;
                
                
                
                
                
                
                
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
                thePrototype.pSubstractFromAllRecordPointers = pSubstractFromAllRecordPointers;
                
                
                
                
                
                
                
                
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
                thePrototype.pDiscardRecordsToMaxNumber = pDiscardRecordsToMaxNumber;
                
                
                
                
                
                
                
                
                
                
                
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
                thePrototype.pDiscardRecordsOlderThan = pDiscardRecordsOlderThan;
             
                
            };
    
    
            

    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Recorder_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = Recorder_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Recorder_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Recorder_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aRecorder_Prototype = Recorder_ProtoFactory();
    
    
    
    
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
                
              See examples of recursive initialisation in modules
                identifying / dumpingpolicy and recordingpolicy
            */
            var Recorder_Constructor = function( theTitle, theIdentifier) {
                this._v_Kind      = "instance";
                this._v_Prototype = aRecorder_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Recorder_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Recorder( theTitle, theIdentifier);
            };
            Recorder_Constructor.prototype = aRecorder_Prototype;
    
    
    
    
    
    
    
            /* ***************************************************************
              Create a new instance object of the prototype, expected to be used as a super-prototype,
                but not fully initialised, just the instance slots with null values.
                
              Values for the slots shall be initialised during the _pInit_Xxxx of instances of sub-prototypes
                  by delegation into the super-prototype _pInit_Xxx,
                  and recursively upwards in the prototype inheritance tree
                  through the _v_SuperPrototype chain.
              
              See examples of deep sub-prototypes and recursive initialisation in modules
                identifying / dumpingpolicy and recordingpolicy
            */
            var Recorder_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Recorder_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aRecorder_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Recorder_CreateInstanceSlotsOn( this);
            };
            Recorder_SuperPrototypeConstructor.prototype = aRecorder_Prototype;
    
    
    
    
    
            /* ***************************************************************
              Object exposed as Module, with key-values for all members published in the module.
              
              Some entries are published to facilitate hacking access to portions of logic in the module,
                  to be able to use for other purposes (mixins come into mind) i.e. constants initialiser,
                  and if the module defines any prototype: full and partial prototype creators
                  and initialisers of the slots structure of the prototype.
            */
            var aModule = {
                "_v_Kind":                                 "module",
                "ComponentName":                           ComponentName,
                "ModuleName":                              ModuleName,
                "ModulePackages":                          ModulePackages,
                "ModuleFullName":                          ModuleFullName,
                "ModuleConstants":                         ModuleConstants,
                "ModuleGlobals":                           ModuleGlobals,
        
                "InitFromModuleVariations":                InitFromModuleVariations,
                "InitFromModuleConstants":                 InitFromModuleConstants,
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn,
        
                "TypeName":                                TypeName,
        
                "Recorder_ProtoInstancer":                  Recorder_ProtoInstancer,
                "Recorder_ProtoDefinerOn":                  Recorder_ProtoDefinerOn,
                "Recorder_ProtoFactory":                    Recorder_ProtoFactory,
                "Recorder_Constructor":                     Recorder_Constructor,
                "Recorder_SuperPrototypeConstructor":       Recorder_SuperPrototypeConstructor,
                "Recorder_CreatePrototypeSlotsOn":          Recorder_CreatePrototypeSlotsOn,
                "Recorder_CreateInstanceSlotsOn":           Recorder_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          Recorder_ProtoInstancer,
                "ProtoDefinerOn":                          Recorder_ProtoDefinerOn,
                "ProtoFactory":                            Recorder_ProtoFactory,
                "Constructor":                             Recorder_Constructor,
                "SuperPrototypeConstructor":               Recorder_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Recorder_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Recorder_CreateInstanceSlotsOn,
        
                "Recorder_Prototype":                       aRecorder_Prototype,
                "Prototype":                               aRecorder_Prototype
            };
    
            /* ***************************************************************
              Add to the Module Key-Values from Constants (and Variations, if any) so they are exposed as published members.
              Beware: The value for any key in Constants (and Variations, if any)
                shall override any other slot value in the Module with same key, if such exists,
                including any infrastructural or conventional entries.
            */
            InitFromModuleConstants( aModule);
    
    
            /* ***************************************************************
              The prototype and its instances may access the module object and all its published members.
              The sub-prototypes and their instances may also reach this module through the _v_SuperPrototype chain.
            */
            aRecorder_Prototype._v_Module = aModule;
    
    
    
            /* ***************************************************************
              Return defined module.
            */
            return aModule;
        };
    
    
    
    
        /* ***************************************************************
          Make sure that the module is built only once, and that the same instance is supplied anytime
          the module is required, as i.e. to resolve a dependency for another module.
          Attempt to retrieve a module with same name already registered in the typesregistry_svce singleton.
          If no such module exists then build the module and register it in the typesregistry_svce singleton.
        */
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type,
                theSS_IdentifierSvce,
                theSS_IdentifierType,
                theSS_RecordType,
                theSS_RecordingPolicyType,
                theSS_DumpingPolicyType
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
        /* ***************************************************************
         Return the module which was already built and registered in typesregistry_svce singleton, or just built.
        */
        return anExistingModule;
    };
    
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            "identifier_svce",
            "identifier_type",
            "record_type",
            "recordingpolicy_keepall_type",
            "dumpingpolicy_filterkinds_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_identifier_svce = require('../identifying/identifier_svce');
            var aM_identifier_type = require('../identifying/identifier_type');
            var aM_record_type     = require('./record_type');
            var aM_recordingpolicy = require('./recordingpolicy_keepall_type');
            var aM_dumpingpolicy   = require('./dumpingpolicy_filterkinds_type');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_identifier_svce,
                aM_identifier_type,
                aM_record_type,
                aM_recordingpolicy,
                aM_dumpingpolicy
            );

        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "identifier_svce",
                "identifier_type",
                "record_type",
                "recordingpolicy_keepall_type",
                "dumpingpolicy_filterkinds_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_svce"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_type"),
                nomod.fComputeFullName( "prettytype", "recording", "record_type"),
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_keepall_type"),
                nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_filterkinds_type")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */








