/*
 * dumpingpolicy_triggerkinds_type.js
 *
 * Created @author Antonio Carrasco Valero 201610191704
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
    var ModuleName     = "dumpingpolicy_triggerkinds_type";
    var ModulePackages = "recording";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "DumpingPolicyTriggerKinds";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce,
                                 theSS_dumpingpolicy_filterkinds_type,
                                 theSS_eventkinds_common) {
        
        var aMod_builder = function( theS_overrider_svce,
                                     theS_dumpingpolicy_filterkinds_type,
                                     theS_eventkinds_common) {
            
            
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
                
                theToInit.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP = false;
                
                theToInit.EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ALL";
                theToInit.EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ERRORS";
                
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
                    return;
                }
                
                
                
                theToInit.DUMPINGPOLICYTRIGGERKINDS_DEFAULTTITLE = "DumpingPolicyTriggerKindsDefaultName";
                
                
                
                if( theToInit.EVENTSSETTRIGGERINGDUMP) {
                    
                    if( typeof theToInit.EVENTSSETTRIGGERINGDUMP === "string") {
                        var anEventsSetTriggeringDump = theS_eventkinds_common[ theToInit.EVENTSSETTRIGGERINGDUMP];
                        if( anEventsSetTriggeringDump) {
                            theToInit.EVENTKINDS_TRIGGERINGDUMP = anEventsSetTriggeringDump.slice();
                        }
                        else {
                            theToInit.EVENTKINDS_TRIGGERINGDUMP = [];
                        }
                    }
                    else {
                        theToInit.EVENTKINDS_TRIGGERINGDUMP = theToInit.EVENTSSETTRIGGERINGDUMP;
                    }
                }
                else {
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_eventkinds_common.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_TRIGGERINGDUMP) {
                    theToInit.EVENTKINDS_TRIGGERINGDUMP = theS_eventkinds_common.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
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
            var DumpingPolicyTriggerKinds_ProtoInstancer = function() {
        
                /* Prototypical inheritance from DumpingPolicyTriggerKinds */
                var aPrototype = new theS_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_SuperPrototypeConstructor();
        
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = theS_dumpingpolicy_filterkinds_type.DumpingPolicyFilterKinds_Prototype;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_DumpingPolicyTriggerKinds    = aPrototype;
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
                On the prototype object which was supplied to this function DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn
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
            var DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_EventKindsTriggeringDump = null;
        
                /* ***************************************************************
                  Slot property named _v_EventKindsTriggeringDump only initialized in the prototype.
                  May be overriden by individual instantes setting their own value
                */
                if( ModuleConstants.EVENTKINDS_TRIGGERINGDUMP) {
                    theFrame._v_EventKindsTriggeringDump = ModuleConstants.EVENTKINDS_TRIGGERINGDUMP.slice();
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
            var DumpingPolicyTriggerKinds_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                }
    
                /* ***************************************************************
                  Slot property named _v_EventKindsTriggeringDump only initialized in the prototype.
                  May be overriden by individual instantes setting their own value
                */
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
            var DumpingPolicyTriggerKinds_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.DUMPINGPOLICYTRIGGERKINDS_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_DumpingPolicyTriggerKinds = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    thePrototype._v_SuperPrototype._pInit_DumpingPolicyTriggerKinds.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                };
                if( _pInit_DumpingPolicyTriggerKinds){}/* CQT */
                thePrototype._pInit_DumpingPolicyTriggerKinds = _pInit_DumpingPolicyTriggerKinds;
    
    
    
    
    
                var pRelease = function() {
        
                    this._v_Prototype_DumpingPolicyTriggerKinds.pRelease.apply( this);
        
                    if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {
                        this._v_EventKindsTriggeringDump = null;
                        delete( this._v_EventKindsTriggeringDump);
                    }
        
                };
                if( pRelease){}/* CQT */
                thePrototype.pRelease = pRelease;
    
    
    
    
    
    
                var fSetEventKindsTriggeringDump_inPrototype = function( theEventKinds) {
                    
                    thePrototype._v_EventKindsTriggeringDump = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( thePrototype._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return thePrototype._v_EventKindsTriggeringDump;
                };
                if( fSetEventKindsTriggeringDump_inPrototype){}/* CQT */
                thePrototype.fSetEventKindsTriggeringDump_inPrototype = fSetEventKindsTriggeringDump_inPrototype;
                
                
                
                
                
                var fFewerEventKindsTriggeringDump_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return thePrototype._v_EventKindsTriggeringDump;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return thePrototype._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = thePrototype._v_EventKindsTriggeringDump.slice();
                    
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
                    
                    
                    thePrototype._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( thePrototype._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return thePrototype._v_EventKindsTriggeringDump;
                };
                if( fFewerEventKindsTriggeringDump_inPrototype){}/* CQT */
                thePrototype.fFewerEventKindsTriggeringDump_inPrototype = fFewerEventKindsTriggeringDump_inPrototype;
                
                
                
                
                
                
                
                var fMoreEventKindsTriggeringDump_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return thePrototype._v_EventKindsTriggeringDump;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return thePrototype._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = thePrototype._v_EventKindsTriggeringDump.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    thePrototype._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( thePrototype._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return thePrototype._v_EventKindsTriggeringDump;
                };
                if( fMoreEventKindsTriggeringDump_inPrototype){}/* CQT */
                thePrototype.fMoreEventKindsTriggeringDump_inPrototype = fMoreEventKindsTriggeringDump_inPrototype;
                
                
                
                
                
                
                
                
                
                
                var fSetEventKindsTriggeringDump = function( theEventKinds) {
                    
                    this._v_EventKindsTriggeringDump = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return this._v_EventKindsTriggeringDump;
                };
                if( fSetEventKindsTriggeringDump){}/* CQT */
                thePrototype.fSetEventKindsTriggeringDump = fSetEventKindsTriggeringDump;
                
                
                
                
                
                
                
                
                
                
                var fFewerEventKindsTriggeringDump = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    if( !this._v_EventKindsTriggeringDump) {
                        this._v_EventKindsTriggeringDump = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsTriggeringDump.slice();
                    
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
                    
                    
                    this._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return this._v_EventKindsTriggeringDump
                };
                if( fFewerEventKindsTriggeringDump){}/* CQT */
                thePrototype.fFewerEventKindsTriggeringDump = fFewerEventKindsTriggeringDump;
                
                
                
                
                
                
                
                
                
                
                var fMoreEventKindsTriggeringDump = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    if( !this._v_EventKindsTriggeringDump) {
                        this._v_EventKindsTriggeringDump = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsTriggeringDump.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    this._v_EventKindsTriggeringDump = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
                        console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
                    }
                    
                    return this._v_EventKindsTriggeringDump
                };
                if( fMoreEventKindsTriggeringDump){}/* CQT */
                thePrototype.fMoreEventKindsTriggeringDump = fMoreEventKindsTriggeringDump;
                
                
                
                
                
                
                
                
                
                
                
                var pDumpRecord = function( theRecord, theRecordedRecordPointer) {
                    
                    if( !theRecord) {
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
                    
                    
                    if( !this.fRecordTriggersDump( theRecord)) {
                        return;
                    }
                    
                    
                    
                    
                    var aRecordPointerLastDumped = -1;
                    
                    var aRecordPointerLastDumpedValue = aRecorder.fGetRecordPointerNamed( this.RECORDPOINTERNAME_LASTDUMPED);
                    
                    if( typeof aRecordPointerLastDumpedValue === "number") {
                        
                        if( !isNaN( aRecordPointerLastDumpedValue)) {
                            
                            if( aRecordPointerLastDumpedValue >= 0) {
                                
                                aRecordPointerLastDumped = aRecordPointerLastDumpedValue;
                            }
                        }
                    }
                    
                    
                    
                    
                    var aFirstRecordIndexToDump = 0;
                    if( aRecordPointerLastDumped >= 0) {
                        aFirstRecordIndexToDump = aRecordPointerLastDumped + 1;
                    }
                    
                    var someRecordsToDump = aRecorder.fKeptRecordsSlice( aFirstRecordIndexToDump);
                    if( !someRecordsToDump) {
                        return;
                    }
                    
                    
                    var aNumRecordsToDump = someRecordsToDump.length;
                    if( !aNumRecordsToDump) {
                        return;
                    }
                    
                    for( var aRecordToDumpIdx=0; aRecordToDumpIdx < aNumRecordsToDump; aRecordToDumpIdx++) {
                        var aRecordToDump = someRecordsToDump[ aRecordToDumpIdx];
                        if( aRecordToDump) {
                            
                            if( !this.fMustDumpRecord( aRecordToDump)) {
                                continue;
                            }
                            
                            var aLogString = aRecordToDump.fLogString();
                            if( !aLogString) {
                                return;
                            }
                            
                            aConsoleService.log(  "," + aLogString);
                        }
                    }
                    
                    
                    aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, null /* /* If not a record pointer in range by array index then point to last record */);
                    
                };
                if( pDumpRecord){}/* CQT */
                thePrototype.pDumpRecord = pDumpRecord;
                
                
                
                
                
                
                
                
                
                
                var fRecordTriggersDump = function( theRecord) {
                    
                    if( !theRecord) {
                        return false;
                    }
                    
                    if( !this.fMayDumpRecords()) {
                        return false;
                    }
                    
                    
                    var anEventKind = theRecord._v_EventKind;
                    if( !anEventKind) {
                        return false;
                    }
                    
                    var someEventKindsTriggeringDump = this.fEventKindsTriggeringDump();
                    if( !someEventKindsTriggeringDump) {
                        return false;
                    }
                    
                    if( someEventKindsTriggeringDump.indexOf( anEventKind) < 0) {
                        return false;
                    }
                    if( 0){}/* CQT */
    
                    return true;
                    
                };
                if( fRecordTriggersDump){}/* CQT */
                thePrototype.fRecordTriggersDump = fRecordTriggersDump;
                
                
                
                
                
                
                
                var fEventKindsTriggeringDump = function() {
                    
                    /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */
                    
                    /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsTriggeringDump */
                    if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {
                        
                        if( !this._v_EventKindsTriggeringDump) {
                            return null;
                        }
                        
                        return this._v_EventKindsTriggeringDump;
                    }
                    
                    
                    
                    if( !this._v_EventKindsTriggeringDump) {
                        return null;
                    }
                    
                    return this._v_EventKindsTriggeringDump;
                    
                };
                if( fEventKindsTriggeringDump){}/* CQT */
                thePrototype.fEventKindsTriggeringDump = fEventKindsTriggeringDump;
                
                
                
 
                
                
                
                return thePrototype;
                
            };
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var DumpingPolicyTriggerKinds_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = DumpingPolicyTriggerKinds_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                DumpingPolicyTriggerKinds_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aDumpingPolicyTriggerKinds_Prototype = DumpingPolicyTriggerKinds_ProtoFactory();
    
    
    
    
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
            */
            var DumpingPolicyTriggerKinds_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Kind      = "instance";
                this._v_Prototype = aDumpingPolicyTriggerKinds_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                DumpingPolicyTriggerKinds_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyTriggerKinds_Constructor.prototype = aDumpingPolicyTriggerKinds_Prototype;
    
    
    
    
    
    
    
            /* ***************************************************************
              Create a new instance object of the prototype, expected to be used as a super-prototype,
                but not fully initialised, just the instance slots with null values.
                
              Values for the slots shall be initialised during the _pInit_Xxxx of instances of sub-prototypes
                  by delegation into the super-prototype _pInit_Xxx,
                  and recursively upwards in the prototype inheritance tree
                  through the _v_SuperPrototype chain.
              
              See examples of deep sub-prototypes and recursive initialisation in modules
                identifying / dumpingpolicy_filterkinds and recordingpolicy
            */
            var DumpingPolicyTriggerKinds_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module DumpingPolicyTriggerKinds_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aDumpingPolicyTriggerKinds_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                DumpingPolicyTriggerKinds_CreateInstanceSlotsOn( this);
            };
            DumpingPolicyTriggerKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyTriggerKinds_Prototype;
    
    
    
    
    
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
        
                "DumpingPolicyTriggerKinds_ProtoInstancer":                  DumpingPolicyTriggerKinds_ProtoInstancer,
                "DumpingPolicyTriggerKinds_ProtoDefinerOn":                  DumpingPolicyTriggerKinds_ProtoDefinerOn,
                "DumpingPolicyTriggerKinds_ProtoFactory":                    DumpingPolicyTriggerKinds_ProtoFactory,
                "DumpingPolicyTriggerKinds_Constructor":                     DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicyTriggerKinds_SuperPrototypeConstructor":       DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn":          DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn,
                "DumpingPolicyTriggerKinds_CreateInstanceSlotsOn":           DumpingPolicyTriggerKinds_CreateInstanceSlotsOn,
                "DumpingPolicyFilterKinds_ProtoInstancer":                  DumpingPolicyTriggerKinds_ProtoInstancer,
                "DumpingPolicyFilterKinds_ProtoDefinerOn":                  DumpingPolicyTriggerKinds_ProtoDefinerOn,
                "DumpingPolicyFilterKinds_ProtoFactory":                    DumpingPolicyTriggerKinds_ProtoFactory,
                "DumpingPolicyFilterKinds_Constructor":                     DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicyFilterKinds_SuperPrototypeConstructor":       DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "DumpingPolicyFilterKinds_CreatePrototypeSlotsOn":          DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn,
                "DumpingPolicyFilterKinds_CreateInstanceSlotsOn":           DumpingPolicyTriggerKinds_CreateInstanceSlotsOn,
                "DumpingPolicy_ProtoInstancer":                  DumpingPolicyTriggerKinds_ProtoInstancer,
                "DumpingPolicy_ProtoDefinerOn":                  DumpingPolicyTriggerKinds_ProtoDefinerOn,
                "DumpingPolicy_ProtoFactory":                    DumpingPolicyTriggerKinds_ProtoFactory,
                "DumpingPolicy_Constructor":                     DumpingPolicyTriggerKinds_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor":       DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "DumpingPolicy_CreatePrototypeSlotsOn":          DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn,
                "DumpingPolicy_CreateInstanceSlotsOn":           DumpingPolicyTriggerKinds_CreateInstanceSlotsOn,
    
                "ProtoInstancer":                          DumpingPolicyTriggerKinds_ProtoInstancer,
                "ProtoDefinerOn":                          DumpingPolicyTriggerKinds_ProtoDefinerOn,
                "ProtoFactory":                            DumpingPolicyTriggerKinds_ProtoFactory,
                "Constructor":                             DumpingPolicyTriggerKinds_Constructor,
                "SuperPrototypeConstructor":               DumpingPolicyTriggerKinds_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  DumpingPolicyTriggerKinds_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   DumpingPolicyTriggerKinds_CreateInstanceSlotsOn,
        
                "DumpingPolicyTriggerKinds_Prototype":                       aDumpingPolicyTriggerKinds_Prototype,
                "Prototype":                               aDumpingPolicyTriggerKinds_Prototype
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
            aDumpingPolicyTriggerKinds_Prototype._v_Module = aModule;
    
    
    
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
                theSS_overrider_svce,
                theSS_dumpingpolicy_filterkinds_type,
                theSS_eventkinds_common
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
            "dumpingpolicy_filterkinds_type",
            "eventkinds_common",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce     = require('../overrider/overrider_svce');
            var aM_dumpingpolicy_filterkinds_type = require('../recording/dumpingpolicy_filterkinds_type');
            var aM_eventkinds_common  = require('../eventkinds/eventkinds_common');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_dumpingpolicy_filterkinds_type,
                aM_eventkinds_common
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "dumpingpolicy_filterkinds_type",
                "eventkinds_common"
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
                nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_filterkinds_type"),
                nomod.fComputeFullName( "prettytype", "eventkinds", "eventkinds_common")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






