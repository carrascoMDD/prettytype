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
    var ModulePackages = "recording";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Record";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce) {
    
        var aMod_builder = function( theS_overrider_svce) {
            
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
                    return;
                }
                
                theToInit.MAXDATASTRINGLEN = 512;
                theToInit.MAXJSONSTRINGLEN = 2048;
                theToInit.MAXJSONELEMENTSTRINGLEN = 1024;
                
                theToInit.MAXDATASTRINGLEN = 1024;
                
                theToInit.MAXLOGSTRINGLEN = 4096;
                
                theToInit.LIMITLOGSTRINGLEN = true;
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
            theS_overrider_svce.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
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
            var Record_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
        
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Record       = aPrototype;
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
                On the prototype object which was supplied to this function Record_CreatePrototypeSlotsOn
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
            var Record_CreatePrototypeSlotsOn = function( theFrame) {
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
            var Record_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Timestamp    = null;
                theFrame._v_Recorder     = null;
                theFrame._v_RecordId     = null;
                theFrame._v_Instance     = null;
                theFrame._v_Step         = null;
                theFrame._v_EventKind    = null;
                theFrame._v_Data         = null;
                theFrame._v_Reason       = null;
                theFrame._v_Detail       = null;
    
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
            var Record_ProtoDefinerOn = function( thePrototype) {
    
                if( !thePrototype) {
                    return;
                }
    
    
    
                var _pInit = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                    
                    this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                var _pInit_Record = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                  
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
                thePrototype._pInit_Record = _pInit_Record;
    
    
    
    
    
    
                var pRelease = function() {
                    this._v_Timestamp    = null;
                    this._v_Recorder     = null;
                    this._v_RecordId     = null;
                    this._v_Instance     = null;
                    this._v_Step         = null;
                    this._v_EventKind    = null;
                    this._v_Data         = null;
                    this._v_Reason       = null;
                    this._v_Detail       = null;
                };
                if( pRelease){}/* CQT */
                thePrototype.pRelease = pRelease;
    
    
    
    
    
    
    
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
                            
                            if(aCopy._v_Data.name === "Error") {
                                aCopy._v_Data = null;
                            }
                            
                            if( aCopy._v_Data.name === "ForcedException") {
                                aCopy._v_Data = null;
                            }
                        }
                    }
                    
                    if( aCopy._v_Reason) {
                        if( aCopy._v_Reason.name) {
                            
                            if(aCopy._v_Reason.name === "Error") {
                                aCopy._v_Reason = null;
                            }
                            
                            if( aCopy._v_Reason.name === "ForcedException") {
                                aCopy._v_Reason = null;
                            }
                        }
                    }
                    
                    if( aCopy._v_Detail) {
                        if( aCopy._v_Detail.name) {
                            
                            if(aCopy._v_Detail.name === "Error") {
                                aCopy._v_Detail = null;
                            }
                            
                            if( aCopy._v_Detail.name === "ForcedException") {
                                aCopy._v_Detail = null;
                            }
                        }
                    }
                    
                    return aCopy;
                };
                if( fCopyWithoutException){}/* CQT */
                thePrototype.fCopyWithoutException = fCopyWithoutException;
                
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                thePrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                /*
                var fIdentifyingJSON = function() {

                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_RecordId
                    };
                    return aIdentifiyingJSON;
                };
                thePrototype.fIdentifyingJSON = fIdentifyingJSON;
                */
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "recref": this._v_RecordId
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
                    
                    aIdentifyingJSON[ "title"] = new Date( this._v_Timestamp).toISOString();
                    
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
                    if( !( theAlready === null)) {
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
                
                
                
                
                
                
                
                
                
                
                var toString = function() {
                    return this.fLogString();
                };
                if( toString){}/* CQT */
                thePrototype.toString = toString;
                
                
                
                
                
                
                
                
                var fLogString = function() {
                    
                    if( !this.LIMITLOGSTRINGLEN) {
                        return this.fLogString_unlimited();
                    }
                    
                    return this.fLogString_limited();
                };
                if( fLogString){}/* CQT */
                thePrototype.fLogString = fLogString;
                
                
                
                
                
                
                
                
                var fLogString_unlimited = function() {
                    
                    var aLog = this.fAsLogObject();
                    if( aLog === null) {
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
                thePrototype.fLogString_unlimited = fLogString_unlimited;
                
                
                
                
                
                
                
                
                var fLogString_limited = function() {
                    
                    var aLog = this.fAsLogObject_limited();
                    if( aLog === null) {
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
                thePrototype.fLogString_limited = fLogString_limited;
                
                
                
                
                
                
                
                
                
                var fString_NeedsToBeLimited = function( theValue) {
                    
                    if( theValue === null) {
                        return false;
                    }
                    
                    if( typeof theValue === "number") {
                        return false;
                    }
                    
                    if( !( typeof theValue === "string")) {
                        return false;
                    }
                    
                    var aNeedsToBeLimited = theValue.length > this.MAXJSONELEMENTSTRINGLEN;
                    if( aNeedsToBeLimited){}/* CQT */
                    
                    return aNeedsToBeLimited;
                };
                if( fString_NeedsToBeLimited){}/* CQT */
                thePrototype.fString_NeedsToBeLimited = fString_NeedsToBeLimited;
                
                
                
                
                
                
                
                
                
                var fString_limited = function( theValue) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( !( typeof theValue === "string")) {
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
                thePrototype.fString_limited = fString_limited;
                
                
                
                
                
                
                
                
                
                var fJSONValue_orLimited = function( theValue) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue === "string") {
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
                    
                    if( !( aJSONstr === null)) {
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
                thePrototype.fJSONValue_orLimited = fJSONValue_orLimited;
                
                
                
                
                
                
                
                
                
                
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
                    if( !( aEventKind === null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    var aStep = this.fConvertValueToJSON( this._v_Step);
                    if( !( aStep === null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }
                    
                    
                    var aInstance = this.fConvertValueToJSON( this._v_Instance);
                    if( !( aInstance === null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }
                    
                    
                    var aData = this.fConvertValueToJSON( this._v_Data);
                    if( !( aData === null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }
                    
                    var aReason = this.fConvertReasonToJSON( this._v_Reason);
                    if( !( aReason === null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }
                    
                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail === null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                thePrototype.fAsLogObject = fAsLogObject;
                
                
                
                
                
                
                
                
                
                
                
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
                    if( !( aEventKind === null)) {
                        aHasLog = true;
                        aLog.kind = aEventKind;
                    }
                    
                    var aStep = this.fConvertValueToJSON_limited( this._v_Step);
                    if( !( aStep === null)) {
                        aHasLog = true;
                        aLog.step = aStep;
                    }
                    
                    
                    var aInstance = this.fConvertValueToJSON_limited( this._v_Instance);
                    if( !( aInstance === null)) {
                        aHasLog = true;
                        aLog.inst = aInstance;
                    }
                    
                    
                    var aData = this.fConvertValueToJSON_limited( this._v_Data);
                    if( !( aData === null)) {
                        aHasLog = true;
                        aLog.data = aData;
                    }
                    
                    var aReason = this.fConvertReasonToJSON_limited( this._v_Reason);
                    if( !( aReason === null)) {
                        aHasLog = true;
                        aLog.reason = aReason;
                    }
                    
                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail === null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsLogObject_limited){}/* CQT */
                thePrototype.fAsLogObject_limited = fAsLogObject_limited;
                
                
                
                
                
                
                
                
                
                
                
                var fConvertReasonToJSON = function( theValue) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue === "string") {
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
                    if( !( aJSONable === null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString().substr( 0, this.MAXDATASTRINGLEN);
                    if( aStr){}/* CQT */
                    return aStr;
                };
                if( fConvertReasonToJSON){}/* CQT */
                thePrototype.fConvertReasonToJSON = fConvertReasonToJSON;
                
                
                
                
                
                
                
                
                
                
                var fConvertReasonToJSON_limited = function( theValue) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue === "string") {
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
                    if( !( aJSONable === null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString();
                    var aStr_limited = this.fString_limited( aStr);
                    if( aStr_limited){}/* CQT */
                    
                    return aStr_limited;
                };
                if( fConvertReasonToJSON_limited){}/* CQT */
                thePrototype.fConvertReasonToJSON_limited = fConvertReasonToJSON_limited;
                
                
                
                
                
                
                
                
                
                
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
                    if( !( aEventKind === null)) {
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
                        if( !( aReason === null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }
                    
                    
                    var aDetail = this.fConvertValueToJSON( this._v_Detail);
                    if( !( aDetail === null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsReasonChain){}/* CQT */
                thePrototype.fAsReasonChain = fAsReasonChain;
                
                
                
                
                
                
                
                
                
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
                    if( !( aEventKind === null)) {
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
                        if( !( aReason === null)) {
                            aHasLog = true;
                            aLog.reason = aReason;
                        }
                    }
                    
                    
                    var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
                    if( !( aDetail === null)) {
                        aHasLog = true;
                        aLog.detail = aDetail;
                    }
                    
                    if( !aHasLog) {
                        return null;
                    }
                    
                    return aLog;
                };
                if( fAsReasonChain_limited){}/* CQT */
                thePrototype.fAsReasonChain_limited = fAsReasonChain_limited;
                
                
                
                
                
                
                
                
                
                var fConvertValueToJSON = function( theValue, theIncludeMembers) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue === "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type === this._v_Type)) {
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
                    if( !( aJSONable === null)) {
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
                thePrototype.fConvertValueToJSON = fConvertValueToJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fConvertValueToJSON_limited = function( theValue) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue === "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type === this._v_Type)) {
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
                    if( !( aJSONable === null)) {
                        return aJSONable;
                    }
                    
                    var aStr = theValue.toString();
                    if( aStr){}/* CQT */
                    
                    var aStrLimited = this.fString_limited( aStr);
                    if( aStrLimited){}/* CQT */
                    
                    return aStrLimited;
                };
                if( fConvertValueToJSON_limited){}/* CQT */
                thePrototype.fConvertValueToJSON_limited = fConvertValueToJSON_limited;
                
                
                
                
                
                
                
                
                
                
                
                
                var fAsJSONable = function( theValue) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue === "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type === this._v_Type)) {
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
                    
                    if( !( aJSONstr === null)) {
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
                thePrototype.fAsJSONable = fAsJSONable;
                
                
                
                
                
                
                
                
                
                var fAsJSONable_limited = function( theValue) {
                    
                    if( theValue === null) {
                        return null;
                    }
                    
                    if( typeof theValue === "number") {
                        return theValue;
                    }
                    
                    if( typeof theValue === "string") {
                        return theValue;
                    }
                    
                    if( ( theValue === this)) {
                        return "this";
                    }
                    
                    if( theValue._v_Type && ( theValue._v_Type === this._v_Type)) {
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
                thePrototype.fAsJSONable_limited = fAsJSONable_limited;
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecordHasEvent_recursive = function( theExpectedEvent, theAlready) {
                    
                    if( !theExpectedEvent) {
                        return false;
                    }
                    
                    if( theAlready  && ( theAlready.indexOf( this) >= 0)) {
                        return false;
                    }
                    
                    if( this._v_EventKind && ( this._v_EventKind === theExpectedEvent)) {
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
                thePrototype.fRecordHasEvent_recursive = fRecordHasEvent_recursive;
                
                
            };
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Record_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = Record_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Record_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Record_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aRecord_Prototype = Record_ProtoFactory();
    
    
    
    
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
            var Record_Constructor = function( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
                this._v_Kind      = "instance";
                this._v_Prototype = aRecord_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Record_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
            };
            Record_Constructor.prototype = aRecord_Prototype;
    
    
    
    
    
    
    
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
            var Record_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Record_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aRecord_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Record_CreateInstanceSlotsOn( this);
            };
            Record_SuperPrototypeConstructor.prototype = aRecord_Prototype;
    
    
    
    
    
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
        
                "Record_ProtoInstancer":                  Record_ProtoInstancer,
                "Record_ProtoDefinerOn":                  Record_ProtoDefinerOn,
                "Record_ProtoFactory":                    Record_ProtoFactory,
                "Record_Constructor":                     Record_Constructor,
                "Record_SuperPrototypeConstructor":       Record_SuperPrototypeConstructor,
                "Record_CreatePrototypeSlotsOn":          Record_CreatePrototypeSlotsOn,
                "Record_CreateInstanceSlotsOn":           Record_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          Record_ProtoInstancer,
                "ProtoDefinerOn":                          Record_ProtoDefinerOn,
                "ProtoFactory":                            Record_ProtoFactory,
                "Constructor":                             Record_Constructor,
                "SuperPrototypeConstructor":               Record_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Record_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Record_CreateInstanceSlotsOn,
        
                "Record_Prototype":                       aRecord_Prototype,
                "Prototype":                               aRecord_Prototype
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
            aRecord_Prototype._v_Module = aModule;
    
    
    
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
                theSS_overrider_svce
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
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce = require('../typesregistry/typesregistry_svce');
            var aM_overrider     = require('../overrider/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_svce"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */





