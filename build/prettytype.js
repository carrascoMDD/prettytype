'donotuse strict';

/*
 logmoduleloads.js
 Creado 201409101529
 */

/*
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
 */

var LOGMODULELOADS = false;

FG_logModLoads = function( theBoolOrMessage) {
    
    'use strict';
    
    if(    ( typeof theBoolOrMessage === 'undefined')
        || ( ( typeof theBoolOrMessage === 'object') && ( theBoolOrMessage === null))) {
        
        return LOGMODULELOADS === true;
    }
    
    if( ( typeof theBoolOrMessage === 'boolean')) {
        
        LOGMODULELOADS = theBoolOrMessage;
        if( theBoolOrMessage) {
            console.log( ',{"SHALL_LOG_MODULE_LOADS"}');
        }
        else {
            console.log( ',{"SHALL_NOT_LOG_MODULE_LOADS"}');
        }
        
        return LOGMODULELOADS === true;
    }
    
    if( LOGMODULELOADS) {
        if( theBoolOrMessage) {
        
        }
        console.log( ',{"MODULE", "' + theBoolOrMessage + '"}');
    }

    return LOGMODULELOADS;
};


FG_logModLoads._v_Type = "toplevelfunction";
FG_logModLoads.ComponentName  = "prettytype";
FG_logModLoads.ModuleName     = "FG_logModLoads";
FG_logModLoads.ModulePackages = "lowinstrument";
FG_logModLoads.ModuleFullName = FG_logModLoads.ModulePackages + "/" + FG_logModLoads.ModuleName;
;/*
 * decoratesystemprototypes_svce.js
 *
 * Created @author Antonio Carrasco Valero 201412070820
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


(function() {
    
    
    var ComponentName    = "prettytype";
    var ModuleName     = "decoratesystemprototypes_svce";
    var ModulePackages = "utils";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function(theSS_typesregistry_svce,
                                  theSS_overrider_type){
        
        var aMod_builder = function( theS_overrider_type) {
    
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
    
    
            var pgInitWithModuleVariations = function( theToInit) {
        
                if( !theToInit) {
                }
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
            */
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                }
            };
            
            
            
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
    
    
    
    
            
            
            
            var aModule = { };
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
            
            
            
            
            var fStringExtend = function( theString, theLen) {
                
                if( !theLen) {
                    return "";
                }
                
                var aThisLen = theString.length;
                if( !aThisLen) {
                    return "";
                }
                
                var aSource = theString;
                var aNumRepeats = Math.floor( theLen / aThisLen);
                aNumRepeats += 1;
                if( aNumRepeats > 1) {
                    
                    if( aNumRepeats > 10000) {
                        aNumRepeats = 10000;
                    }
                    aSource = Array.apply(null, new Array( aNumRepeats)).map(String.prototype.valueOf, theString).join( "");
                }
                
                var aExtended = aSource.slice( 0, theLen);
                if( aExtended){}/* CQT */
                
                return aExtended;
            };
            if( fStringExtend){}/* CQT */
            aModule.fStringExtend = fStringExtend;
            
            
            
            
            
            if( !String.prototype.Xtnd) {
                String.prototype.Xtnd = function( theLen) {
                    
                    return aModule.fStringExtend( this, theLen);
                };
            }
    
            
            
            
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
    
        var aService = anExistingModule;
        if( aService){}/* CQT */
    
        return aService;
        
    });
    
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        
        angular.module("decoratesystemprototypes", [
            "typesRegistry",
            "modbootTypes"
        ]).factory("DecorateSystemPrototypesSvce",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../modboot/typesregistry');
            var aM_overrider       = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_decoratesystemprototypes_svce",
            [
                "m_typesregistry_svce",
                "m_overrider_svce"
            ],
            aMod_definer
        );
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





;'use strict';

/*
 * typesregistry_types.js
 *
 * Created @author Antonio Carrasco Valero 201805210034
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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


if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("typesregistry", [ ]); /* Does not depend in any other angular module */
}




;/*
 * typesregistry.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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
    
    /* Only module-like (or actual module under Angular, or RequireJS, or nodejs, or ...) with no dependencies.
    All other modules use at least the typesregistry_type (i.e. by the typesregistry_svce singleton)
    or usually the typesregistry_svce singleton
    where the modules may want to make sure they are instantiated only once may get this typesregistry injected
    and check with it whether the module(-like) has already been instantiated.
    
    Sample code snippet to insert at the end of the module instantiation function.
    See examples in other javascript src in this prettytype package.
    
    var anExistingModule = null;
    if(    !( typeof theSS_typesregistry_svce === 'undefined')
        && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
        anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
    }
    if( !anExistingModule) {
        var aModule = aMod_builder(
            theSS_typesregistry_svce,
            theSS_overrider_type
        );
        
        anExistingModule = aModule;
        
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
            theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
        }
    }
    */
    
    
    var ComponentName  = "prettytype";
    var ModuleName     = "typesregistry_type";
    var ModulePackages = "typesregistry";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "TypesRegistry";
    
    var aMod_definer = function(){
    
        var aMod_builder = function() {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
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
                
                
                theToInit.REGISTERMODULES = true;
                theToInit.RESOLVEMODULES  = true;
                
                
                theToInit.TYPESREGISTRYDEFAULTNAME = "TypesRegistry_DefaultName";
                
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
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
            var TypesRegistry_ProtoInstancer = function() {
                
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
                
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_TypesRegistry = aPrototype;
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
                On the prototype object which was supplied to this function TypesRegistry_CreatePrototypeSlotsOn
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
            var TypesRegistry_CreatePrototypeSlotsOn = function( theFrame) {
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
            var TypesRegistry_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Title             = null;
                theFrame._v_ModulesByFullName = null;
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
            var TypesRegistry_ProtoDefinerOn = function( thePrototype) {
                
                if( !thePrototype) {
                    return;
                }
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_TypesRegistry( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_TypesRegistry = function( theTitle) {
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.TYPESREGISTRYDEFAULTNAME;
                    }
                    
                    this._v_ModulesByFullName = { };
                };
                if( _pInit_TypesRegistry){}/* CQT */
                thePrototype._pInit_TypesRegistry = _pInit_TypesRegistry;
    
    
    
    
                var pRelease = function() {
                    this._v_Title             = null;
                    this._v_ModulesByFullName = null;
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
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type
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
                        aIdentifyingString = "Error_whileJSON_stringify"
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
                
                
                
                
                
                
                
                
                
                
                
                var fRegisterModule = function( theModuleFullName, theModule) {
                    
                    if( !this.REGISTERMODULES) {
                        return false;
                    }
                    
                    if( !theModule) {
                        return false;
                    }
                    
                    var aModuleFullName = theModuleFullName;
                    if( !aModuleFullName) {
                        aModuleFullName = theModule.ModuleFullName;
                    }
                    if( !aModuleFullName) {
                        return false;
                    }
                    
                    var anAlreadyRegisteredModule =  this._v_ModulesByFullName[ aModuleFullName];
                    if( anAlreadyRegisteredModule) {
                        console.log( "\nAttempt to register another module " + aModuleFullName + "\n");
                        return false;
                    }
                    
                    this._v_ModulesByFullName[ aModuleFullName] = theModule;
                    
                    if( ( typeof theModule === 'object') || ( typeof theModule === 'function')) {
                        theModule[ "TYPESREGISTRY"] = this;
                    }
                    
                    return true;
                };
                if( fRegisterModule){}/* CQT */
                thePrototype.fRegisterModule = fRegisterModule;
                
                
                
                
                
                
                
                
                var fRegisteredModule = function( theModuleFullName) {
                    
                    if( !this.RESOLVEMODULES) {
                        return null;
                    }
                    
                    if( !theModuleFullName) {
                        return null;
                    }
                    
                    
                    var aRegisteredModule =  this._v_ModulesByFullName[ theModuleFullName];
                    if( !aRegisteredModule) {
                        return null;
                    }
                    
                    return aRegisteredModule;
                };
                if( fRegisteredModule){}/* CQT */
                thePrototype.fRegisteredModule = fRegisteredModule;
                
                
                
                
                var fUnregisterModule = function( theModuleFullName, theModule) {
                    
                    if( !this.REGISTERMODULES) {
                        return false;
                    }
                    
                    var aModuleFullName = theModuleFullName;
                    if( !aModuleFullName) {
                        if( theModule) {
                            aModuleFullName = theModule.ModuleFullName;
                        }
                    }
                    if( !aModuleFullName) {
                        return false;
                    }
                    
                    var anAlreadyRegisteredModule =  this._v_ModulesByFullName[ aModuleFullName];
                    if( !anAlreadyRegisteredModule) {
                        return false;
                    }
                    
                    if( theModule) {
                        if( !( anAlreadyRegisteredModule === theModule)) {
                            return false;
                        }
                        
                        delete anAlreadyRegisteredModule[ "TYPESREGISTRY"];
                    }
                    
                    delete this._v_ModulesByFullName[ aModuleFullName];
                    
                    return true;
                };
                if( fUnregisterModule){}/* CQT */
                thePrototype.fUnregisterModule = fUnregisterModule;
    
    
                
    
                
                
            };
    
    
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var TypesRegistry_ProtoFactory = function() {
    
                /* Create object to serve as prototype */
                var aPrototype = TypesRegistry_ProtoInstancer();
    
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
    
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                TypesRegistry_CreatePrototypeSlotsOn( aPrototype);
    
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                TypesRegistry_ProtoDefinerOn( aPrototype);
                
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aTypesRegistry_Prototype = TypesRegistry_ProtoFactory();
    
    
            
    
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
            var TypesRegistry_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = aTypesRegistry_Prototype;
    
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                TypesRegistry_CreateInstanceSlotsOn( this);
                
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_TypesRegistry( theTitle);
            };
            TypesRegistry_Constructor.prototype = aTypesRegistry_Prototype;
    
    
    
    
    
    
    
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
            var TypesRegistry_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module TypesRegistry_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aTypesRegistry_Prototype;
    
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                TypesRegistry_CreateInstanceSlotsOn( this);
            };
            TypesRegistry_SuperPrototypeConstructor.prototype = aTypesRegistry_Prototype;
    
    
    
    
    
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
                
                "InitFromModuleConstants":                 InitFromModuleConstants,
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn,
    
                "TypeName":                                TypeName,
    
                "TypesRegistry_ProtoInstancer":            TypesRegistry_ProtoInstancer,
                "TypesRegistry_ProtoDefinerOn":            TypesRegistry_ProtoDefinerOn,
                "TypesRegistry_ProtoFactory":              TypesRegistry_ProtoFactory,
                "TypesRegistry_Constructor":               TypesRegistry_Constructor,
                "TypesRegistry_SuperPrototypeConstructor": TypesRegistry_SuperPrototypeConstructor,
                "TypesRegistry_CreatePrototypeSlotsOn":    TypesRegistry_CreatePrototypeSlotsOn,
                "TypesRegistry_CreateInstanceSlotsOn":     TypesRegistry_CreateInstanceSlotsOn,
                
                "ProtoInstancer":                          TypesRegistry_ProtoInstancer,
                "ProtoDefinerOn":                          TypesRegistry_ProtoDefinerOn,
                "ProtoFactory":                            TypesRegistry_ProtoFactory,
                "Constructor":                             TypesRegistry_Constructor,
                "SuperPrototypeConstructor":               TypesRegistry_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  TypesRegistry_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   TypesRegistry_CreateInstanceSlotsOn,
    
                "TypesRegistry_Prototype":                 aTypesRegistry_Prototype,
                "Prototype":                               aTypesRegistry_Prototype
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
            aTypesRegistry_Prototype._v_Module = aModule;
    
    
    
            /* ***************************************************************
              Return defined module.
            */
            return aModule;
        };
        
        
        
        
        /* ***************************************************************
          Build the module object with the whole module definition, including prototypes and constructors, if any.
         */
        var aModule = aMod_builder();
        if(aModule){}/* CQT */
    
    
        /* ***************************************************************
          Return the module as just built.
         */
        return aModule;
    };
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.

      This module has no dependencies.
      It is the only module without dependencies in this prettytype npm package, other than the function FG_logModLoads
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
    
        angular.module( ModulePackages).factory( ModuleName,
            aMod_definer
        );
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            return aMod_definer();
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            null /* theDependencies */,
            aMod_definer
        );
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






;/*
 * typesregistry_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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
    
    /* Only module-like (or actual module under Angular, or RequireJS, or nodejs, or ...) with only the typesregistry_type dependency.
    All other modules use at least the typesregistry_svce (a singleton)
    where the modules may want to make sure they are instantiated only once may get this typesregistry injected
    and check with it whether the module(-like) has already been instantiated.
    See typesregistry_type.js for details.
    */
    
    
    var ComponentName  = "prettytype";
    var ModuleName     = "typesregistry_svce";
    var ModulePackages = "typesregistry";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var SingletonName  = "TypesRegistrySvce";
    
    var aMod_definer = function( theSS_TypesregistryType){
    
        if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
        /* ***************************************************************
          This Module is actually delivered as a singleton instance of the prototype defined in the module.
          The module definition object itself is not actually returned as the module, but the singleton instance is,
            which has a slot _v_Module through which it is possible to access the module definition object.
         */
        var aService = new theSS_TypesregistryType.TypesRegistry_Constructor( SingletonName);
    
        /* ***************************************************************
          Because this singleton becomes a registered module, fill in metainformation usually found in modules
        */
        aService._v_Kind        = "singleton";
        aService.ComponentName  = ComponentName;
        aService.ModuleName     = ModuleName;
        aService.ModulePackages = ModulePackages;
        aService.ModuleFullName = ModuleFullName;
        aService.SingletonName  = SingletonName;
    
        /* Register, just for completion of the types registry, the types registry module, which did not register because no singleton could be available */
        aService.fRegisterModule( ModuleFullName, theSS_TypesregistryType);
        
        /* ***************************************************************
          Register, just for completion of the types registry, this very same service instance by its name
          as supplied above in the TypesRegistry_Constructor()
          ( if not upplied, the name would be defaulted by the typesregistry module to its constant TYPESREGISTRYDEFAULTNAME
        */
        aService.fRegisterModule( ModuleFullName + "." + aService._v_Title, aService);
        
        
        /* ***************************************************************
          Register, just for completion of the types registry implementation, the utility function to log module loads, if such exists
        */
        if( typeof FG_logModLoads === 'function') {
            aService.fRegisterModule( FG_logModLoads.ModuleFullName ? FG_logModLoads.ModuleFullName : "FG_logModLoads", FG_logModLoads);
        }
    
        /* ***************************************************************
          Return the instantiated service singleton as the module object.
        */
        return aService;
        
    };
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
    
        /* ***************************************************************
          typesRegistry dependencies declared here (as none)
            because there is no separate file defining the angular.module("typesregistry"
            other modules with multiple factories declare the module and its dependiencies in a separate file,
            i.e. identifyingTypes, identifying_types.js
        */
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry_type = require('./typesregistry_type');
            
            return aMod_definer( aM_typesregistry_type);
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_type" // "m_typesregistry_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type")
            ],
            aMod_definer
        );
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






;'use strict';

/*
 * overrider_types.js
 *
 * Created @author Antonio Carrasco Valero 201805210258
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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


if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("overrider", [
        "typesregistry"
    ]);
}




;/*
 * overrider_type.js
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
    var ModuleName     = "overrider_type";
    var ModulePackages = "overrider";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Overrider";
    
    var aMod_definer =  ( function( theSS_typesregistry_svce) {

        var aMod_builder = function() {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
    
    
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
                theToInit.OVERRIDER_DEFAULTTITLE = "OverriderDefaultName";
    
                theToInit.MODULENAMESTEPSEPARATOR = "/";
    
                theToInit.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP = "\_\-\_";
                
                theToInit.LOGOVERRIDESFROMCOMMANDLINE = false;
            };
            
            
            
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
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
          
              Invoked by ProtoFactory as the first step to produce a object fully able to serve as Prototype.
           */
            var Overrider_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
    
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Overrider     = aPrototype;
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
                On the prototype object which was supplied to this function TypesRegistry_CreatePrototypeSlotsOn
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
                    
              Invoked by ProtoFactory as one of the steps to produce a object fully able to serve as Prototype.
            */
            var Overrider_CreatePrototypeSlotsOn = function( theFrame) {
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
            var Overrider_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Title  = null;
                theFrame._v_Overriderarguments = null;
                theFrame._v_Custom = null;
                theFrame._v_Overrides = null;
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
            var Overrider_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
    

                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Overrider( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_Overrider = function( theTitle) {
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.OVERRIDER_DEFAULTTITLE;
                    }
    
                    this._v_Overriderarguments = null;
                    this._v_Custom = null;
                    this._v_Overrides = null;
                };
                if( _pInit_Overrider){}/* CQT */
                thePrototype._pInit_Overrider = _pInit_Overrider;
    
    
    
    
                var pRelease = function() {
                    this._v_Title             = null;
                    this._v_Overriderarguments = null;
                    this._v_Custom = null;
                    this._v_Overrides = null;
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
    
    
     
    
           
                var pSetOverriderarguments = function( theOverriderarguments) {
                    this._v_Overriderarguments = theOverriderarguments;
                };
                if( pSetOverriderarguments){}/* CQT */
                thePrototype.pSetOverriderarguments = pSetOverriderarguments;
    
    
                var pSetCustom = function( theCustom) {
                    this._v_Custom = theCustom;
                };
                if( pSetCustom){}/* CQT */
                thePrototype.pSetCustom = pSetCustom;
    
    
                var pSetOverrides = function( theOverrides) {
                    this._v_Overrides = theOverrides;
                };
                if( pSetOverrides){}/* CQT */
                thePrototype.pSetOverrides = pSetOverrides;
    
    

    
    
    
    
                var pOverrideModuleVariations = function( theModuleFullName, theModuleVariations) {
                    if( !theModuleFullName) {
                        return;
                    }
        
                    if( !theModuleVariations) {
                        return;
                    }
        
        
                    if( this._v_Custom && ( typeof this._v_Custom === 'object')) {
                        this.pOverrideWithValuesFrom( theModuleFullName, theModuleVariations, this._v_Custom)
                    }
    
    
                    if( this._v_Overrides && ( typeof this._v_Overrides === 'object')) {
                        this.pOverrideWithValuesFrom( theModuleFullName, theModuleVariations, this._v_Overrides)
                    }
    
    
                    this.pOverrideWithArguments( theModuleFullName, theModuleVariations)
                };
                if( pOverrideModuleVariations){}/* CQT */
                thePrototype.pOverrideModuleVariations = pOverrideModuleVariations;
    
    
    
    
    
    
    
    
                var pOverrideWithValuesFrom = function( theModuleFullName, theToOverrride, theOverrideSource) {
                    if( !theModuleFullName) {
                        return;
                    }
        
                    if( !theToOverrride) {
                        return;
                    }
        
                    if( !theOverrideSource) {
                        return;
                    }
        
        
                    var aIgnoreOverrideValue = theOverrideSource.cIgnoreValue;
                    if( !aIgnoreOverrideValue) {
                        aIgnoreOverrideValue = null;
                    }
        
        
                    var aCurrentOverrides = theOverrideSource;
                    if( !aCurrentOverrides) {
                        return;
                    }
        
        
        
                    var someModuleNameSteps = theModuleFullName.split( this.MODULENAMESTEPSEPARATOR);
                    if( !someModuleNameSteps) {
                        return;
                    }
        
                    var aNumModuleNameSteps = someModuleNameSteps.length;
                    if( !aNumModuleNameSteps) {
                        return;
                    }
        
                    for( var aModuleNameStepIdx=0; aModuleNameStepIdx < aNumModuleNameSteps; aModuleNameStepIdx++) {
            
                        var aModuleNameStep = someModuleNameSteps[ aModuleNameStepIdx];
                        if( !aModuleNameStep) {
                            return;
                        }
            
                        if( !aCurrentOverrides.hasOwnProperty( aModuleNameStep)) {
                            return;
                        }
            
                        aCurrentOverrides = aCurrentOverrides[ aModuleNameStep];
                        if( aCurrentOverrides == null) {
                            return;
                        }
            
                        if( !( typeof aCurrentOverrides === "object")) {
                            return;
                        }
                    }
        
        
        
                    if( !( typeof aCurrentOverrides === "object")) {
                        return;
                    }
        
        
        
                    for( var aGlobalName in theToOverrride) {
                        if( theToOverrride.hasOwnProperty( aGlobalName)) {
                
                            if( aCurrentOverrides.hasOwnProperty( aGlobalName)) {
                    
                                var anOverrideValue = aCurrentOverrides[ aGlobalName];
                    
                                if( !aIgnoreOverrideValue || !( anOverrideValue === aIgnoreOverrideValue)) {
                        
                                    theToOverrride[ aGlobalName] = anOverrideValue;
                                }
                            }
                        }
                    }
                };
                if( pOverrideWithValuesFrom){}/* CQT */
                thePrototype.pOverrideWithValuesFrom = pOverrideWithValuesFrom;
    
    
    
    
    
    
    
    
    
    
    
                var pOverrideWithArguments = function( theModuleFullName, theToOverrride) {
                    if( !theModuleFullName) {
                        return;
                    }
        
                    if( !theToOverrride) {
                        return;
                    }
        
                    if( !this._v_Overriderarguments) {
                        return;
                    }
        
                    if( !this._v_Overriderarguments) {
                        return;
                    }
        
        
                    var aNumOverrides = this._v_Overriderarguments.length;
                    if( !aNumOverrides) {
                        return;
                    }
        
                    var aModuleFullNameWithFinalSeparator = theModuleFullName + this.MODULENAMESTEPSEPARATOR;
        
                    for( var anOverrideIdx= 0; anOverrideIdx < aNumOverrides; anOverrideIdx++) {
            
                        var anOverride = this._v_Overriderarguments[ anOverrideIdx];
                        if( anOverride) {
                
                            var anOverridenVariationFullNameWithSeparators = anOverride[ "name"];
                            if( !anOverridenVariationFullNameWithSeparators) {
                                continue;
                            }
                
                            if( !( typeof anOverridenVariationFullNameWithSeparators === "string")) {
                                continue;
                            }
                
                            var anOverridenValue = anOverride[ "value"];
                            if( !anOverridenValue) {
                                continue;
                            }
                
                            var aRegexp = new RegExp( this.PARMKEYS_OVERRIDERARGUMENTSVARIATIONPATHSEPARATOR_REGEXP, 'g');
                
                            var anOverridenVariationFullName = anOverridenVariationFullNameWithSeparators.replace( aRegexp, this.MODULENAMESTEPSEPARATOR);
                
                            if( !( anOverridenVariationFullName.indexOf( aModuleFullNameWithFinalSeparator) === 0)) {
                                continue;
                            }
                
                            if( !( anOverridenVariationFullName.length > aModuleFullNameWithFinalSeparator.length)) {
                                continue;
                            }
                
                            var anOverridenVariationName = anOverridenVariationFullName.substring( aModuleFullNameWithFinalSeparator.length);
                            if( !anOverridenVariationName) {
                                continue;
                            }
                
                            theToOverrride[ anOverridenVariationName] = anOverridenValue;
                
                            if( this.LOGOVERRIDESFROMCOMMANDLINE) {
                                console.log( "OVERRIDEFROMCOMMANDLINE " + aModuleFullNameWithFinalSeparator + anOverridenVariationName + "=" + anOverridenValue);
                            }
                        }
                    }
                };
                if( pOverrideWithArguments){}/* CQT */
                thePrototype.pOverrideWithArguments = pOverrideWithArguments;
    
                
            };
    
    
    
   
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Overrider_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = Overrider_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Overrider_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Overrider_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var anOverrider_Prototype = Overrider_ProtoFactory();
    
    
    
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
            var Overrider_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = anOverrider_Prototype;
    
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Overrider_CreateInstanceSlotsOn( this);
    
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Overrider( theTitle);
            };
            Overrider_Constructor.prototype = anOverrider_Prototype;
    
    
    
    
    
    
    
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
            var Overrider_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                _v_Kind shall be assigned the value "prototype" as in this module TypesRegistry_ProtoInstancer
                if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = anOverrider_Prototype;
    
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Overrider_CreateInstanceSlotsOn( this);
            };
            Overrider_SuperPrototypeConstructor.prototype = anOverrider_Prototype;
    
    
    
    
    
    
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
        
                "InitFromModuleConstants":                 InitFromModuleConstants,
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn,
                
                "TypeName":                                TypeName,
        
                "Overrider_ProtoInstancer":                Overrider_ProtoInstancer,
                "Overrider_ProtoDefinerOn":                Overrider_ProtoDefinerOn,
                "Overrider_ProtoFactory":                  Overrider_ProtoFactory,
                "Overrider_Constructor":                   Overrider_Constructor,
                "Overrider_SuperPrototypeConstructor":     Overrider_SuperPrototypeConstructor,
                "Overrider_CreatePrototypeSlotsOn":        Overrider_CreatePrototypeSlotsOn,
                "Overrider_CreateInstanceSlotsOn":         Overrider_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          Overrider_ProtoInstancer,
                "ProtoDefinerOn":                          Overrider_ProtoDefinerOn,
                "ProtoFactory":                            Overrider_ProtoFactory,
                "Constructor":                             Overrider_Constructor,
                "SuperPrototypeConstructor":               Overrider_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Overrider_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Overrider_CreateInstanceSlotsOn,
        
                "Overrider_Prototype":                     anOverrider_Prototype,
                "Prototype":                               anOverrider_Prototype
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
            anOverrider_Prototype._v_Module = aModule;
    
    
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
            
            var aModule = aMod_builder();
    
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
    });
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
    
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce = require('../typesregistry/typesregistry_svce');
            
            return aMod_definer(
                aM_typesregistry_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce"
            ],
            aMod_definer);
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_svce")
            ],
            aMod_definer
        );
    
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */




;/*
 * overider_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051556
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
    var ModuleName     = "overrider_svce";
    var ModulePackages = "overrider";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var SingletonName  = "Overrider_Service";
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type){

        
        var aMod_builder = function( theS_OverriderType) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
            /* ***************************************************************
             This Module is actually delivered as a singleton instance of the prototype defined in the module.
             The module definition object itself is not actually returned as the module, but the singleton instance is,
               which has a slot _v_Module through which it is possible to access the module definition object.
            */
            var aService = new theS_OverriderType.Overrider_Constructor( SingletonName);
    
            /* ***************************************************************
               Because this singleton becomes a registered module, fill in metainformation usually found in modules
            */
            aService._v_Kind        = "singleton";
            aService.ComponentName  = ComponentName;
            aService.ModuleName     = ModuleName;
            aService.ModulePackages = ModulePackages;
            aService.ModuleFullName = ModuleFullName;
            aService.SingletonName  = SingletonName;
    
            /* ***************************************************************
              Return the instantiated service singleton as the module object.
            */
            return aService;
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
                theSS_overrider_type
            );

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
    });
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
    
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry_svce  = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce = require('./overrider_type');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define("overrider_svce",
            [
                "typesregistry_svce",
                "overrider_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_type")
            ],
            aMod_definer
        );
    
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






;'use strict';

/*
 * eventkinds_types.js
 *
 * Created @author Antonio Carrasco Valero 201805210258
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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


if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("eventkinds", [
        "typesregistry",
        "overrider"
    ]);
}




;/*
 * eventkinds_common.js
 *
 * Created @author Antonio Carrasco Valero 201610051556
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
    
    var ComponentName  = "prettytype";
    var ModuleName     = "eventkinds_common";
    var ModulePackages = "eventkinds";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce){
    
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
            
                theToInit.EVENTKIND_NEWOBJECTCREATED        = "EVT_NEWOBJECTCREATED";
                theToInit.EVENTKIND_NEWOBJECTFAILED         = "EVT_NEWOBJECTFAILED";
            
            
                theToInit.EVENTKINDS_NOPROMISE_FAILURES = [
                    theToInit.EVENTKIND_NEWOBJECTFAILED
                ];
            
            
            
                theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES = [
                    theToInit.EVENTKIND_NEWOBJECTCREATED
                ];
            
            
            
                theToInit.EVENTKINDS_NOPROMISE = [];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
            
            
            
            
                theToInit.EVENTKINDS_FAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_FAILURES, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
            
            
            
            
                theToInit.EVENTKINDS_NOTFAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFAILURES, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
            
            
            
            
            
            
            
                theToInit.EVENTKINDS = theToInit.EVENTKINDS_NOPROMISE.slice();
            
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE = [
                    theToInit.EVENTKIND_NEWOBJECTCREATED
                ];
            
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE = theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES.slice();
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_NONE = [];
                theToInit.EVENTKINDS_NOTFORCONSOLE_ALL = theToInit.EVENTKINDS.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NONE;
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;
            
            
            
            
            
            
                theToInit.EVENTKINDS_ERRORS = [
                    theToInit.EVENTKIND_NEWOBJECTFAILED
                ];
            
            
                theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS  = theToInit.EVENTKINDS_ERRORS.slice();
            
                theToInit.EVENTKINDS_TRIGGERDUMP_ALL     = theToInit.EVENTKINDS.slice();
            
                theToInit.EVENTKINDS_TRIGGERDUMP_DEFAULT = theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS;
            
            
            
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
               Globals can only be accessed through the Module .ModuleGlobals.
               Instances of a prototype of this module, if any, may access this._v_Module.ModuleGlobals.
               Instances of sub-prototypes of this module, if any, may traverse upwards the prototypical inheritance tree
                 through the _v_SuperPrototype property, reach the desired prototype and from it access
                 its _v_Module.ModuleGlobals
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
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn
            };
    
    
            /* ***************************************************************
              Add to the Module Key-Values from Constants (and Variations, if any) so they are exposed as published members.
              Beware: The value for any key in Constants (and Variations, if any)
                shall override any other slot value in the Module with same key, if such exists,
                including any infrastructural or conventional entries.
            */
            InitFromModuleConstants( aModule);
    
    
    
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
    });
    
    
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
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce")
            ],
            aMod_definer
        )
    
    }
    
})();






;'use strict';

/*
 * roots_types.js
 *
 * Created @author Antonio Carrasco Valero 201410030329
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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


if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("exceptionstack", [
        "typesregistry",
        "overrider"
    ]);
}




;/*
 * stacktrace_type.js
 *
 * Created @author Antonio Carrasco Valero 201805210457
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


/* can not 'use strict';
   because of arguments.callee in method run below
 */

'donotuse strict';


(function () {
    
    var ComponentName  = "prettytype";
    var ModuleName     = "stacktrace_type";
    var ModulePackages = "exceptionstack";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Stacktrace";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce){
        
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
    
                theToInit.STACKTRACEDEFAULTNAME = "Console_DefaultName";
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
            var Stacktrace_ProtoInstancer = function() {
                
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
                
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Stacktrace    = aPrototype;
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
                On the prototype object which was supplied to this function Stacktrace_CreatePrototypeSlotsOn
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
            var Stacktrace_CreatePrototypeSlotsOn = function( theFrame) {
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
            var Stacktrace_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Title    = null;
                theFrame.sourceCache = { };
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
            var Stacktrace_ProtoDefinerOn = function( thePrototype) {
                
                if( !thePrototype) {
                    return;
                }
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Stacktrace( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_Stacktrace = function( theTitle) {
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.STACKTRACEDEFAULTNAME;
                    }
                    
                };
                if( _pInit_Stacktrace){}/* CQT */
                thePrototype._pInit_Stacktrace = _pInit_Stacktrace;
    
    
    
    
    
                var pRelease = function() {
                    this._v_Title             = null;
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
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type
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
                
                
                
                
                
                
                
                
                
                
              
    
    
                var run = function(ex, mode) {
                    
                    ex = ex || this.createException();
                    mode = mode || this.mode(ex);
                    if (mode === 'other') {
                        return this.other(arguments.callee);
                    } else {
                        return this[mode](ex);
                    }
                };
                if( run){}/* CQT */
                thePrototype.run = run;
    
    
    
                var createException = function() {
                    try {
                        this.undef();
                    } catch (e) {
                        return e;
                    }
                };
                if( createException){}/* CQT */
                thePrototype.createException = createException;
    
                
                
                
                /**
                 * Mode could differ for different exception, e.g.
                 * exceptions in Chrome may or may not have arguments or stack.
                 *
                 * @return {String} mode of operation for the exception
                 */
                var mode = function(e) {
                    if (e['arguments'] && e.stack) {
                        return 'chrome';
                    }
        
                    if (e.stack && e.sourceURL) {
                        return 'safari';
                    }
        
                    if (e.stack && e.number) {
                        return 'ie';
                    }
        
                    if (e.stack && e.fileName) {
                        return 'firefox';
                    }
        
                    if (e.message && e['opera#sourceloc']) {
                        // e.message.indexOf("Backtrace:") > -1 -> opera9
                        // 'opera#sourceloc' in e -> opera9, opera10a
                        // !e.stacktrace -> opera9
                        if (!e.stacktrace) {
                            return 'opera9'; // use e.message
                        }
                        if (e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
                            // e.message may have more stack entries than e.stacktrace
                            return 'opera9'; // use e.message
                        }
                        return 'opera10a'; // use e.stacktrace
                    }
        
                    if (e.message && e.stack && e.stacktrace) {
                        // e.stacktrace && e.stack -> opera10b
                        if (e.stacktrace.indexOf("called from line") < 0) {
                            return 'opera10b'; // use e.stacktrace, format differs from 'opera10a'
                        }
                        // e.stacktrace && e.stack -> opera11
                        return 'opera11'; // use e.stacktrace, format differs from 'opera10a', 'opera10b'
                    }
        
                    if (e.stack && !e.fileName) {
                        // Chrome 27 does not have e.arguments as earlier versions,
                        // but still does not have e.fileName as Firefox
                        return 'chrome';
                    }
        
                    return 'other';
                };
                if( mode){}/* CQT */
                thePrototype.mode = mode;
    
    
    
                /**
                 * Given a context, function name, and callback function, overwrite it so that it calls
                 * printStackTrace() first with a callback and then runs the rest of the body.
                 *
                 * @param {Object} context of execution (e.g. window)
                 * @param {String} functionName to instrument
                 * @param {Function} callback function to call with a stack trace on invocation
                 */
                var instrumentFunction = function(context, functionName, callback) {
                    context = context || window;
                    var original = context[functionName];
                    context[functionName] = function instrumented() {
                        callback.call(this, printStackTrace().slice(4));
                        return context[functionName]._instrumented.apply(this, arguments);
                    };
                    context[functionName]._instrumented = original;
                };
                if( instrumentFunction){}/* CQT */
                thePrototype.instrumentFunction = instrumentFunction;
    
    
    
    
    
                /**
                 * Given a context and function name of a function that has been
                 * instrumented, revert the function to it's original (non-instrumented)
                 * state.
                 *
                 * @param {Object} context of execution (e.g. window)
                 * @param {String} functionName to de-instrument
                 */
                var  deinstrumentFunction = function(context, functionName) {
                    if (context[functionName].constructor === Function &&
                        context[functionName]._instrumented &&
                        context[functionName]._instrumented.constructor === Function) {
                        context[functionName] = context[functionName]._instrumented;
                    }
                };
                if( deinstrumentFunction){}/* CQT */
                thePrototype.deinstrumentFunction = deinstrumentFunction;
                
                
                
                
                /**
                 * Given an Error object, return a formatted Array based on Chrome's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var chrome = function(e) {
                    return (e.stack + '\n')
                        .replace(/^[\s\S]+?\s+at\s+/, ' at ') // remove message
                        .replace(/^\s+(at eval )?at\s+/gm, '') // remove 'at' and indentation
                        .replace(/^([^\(]+?)([\n$])/gm, '{anonymous}() ($1)$2')
                        .replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, '{anonymous}() ($1)')
                        .replace(/^(.+) \((.+)\)$/gm, '$1@$2')
                        .split('\n')
                        .slice(0, -1);
                };
                if( chrome){}/* CQT */
                thePrototype.chrome = chrome;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on Safari's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var safari = function(e) {
                    return e.stack.replace(/\[native code\]\n/m, '')
                        .replace(/^(?=\w+Error\:).*$\n/m, '')
                        .replace(/^@/gm, '{anonymous}()@')
                        .split('\n');
                };
                if( safari){}/* CQT */
                thePrototype.safari = safari;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on IE's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var ie = function(e) {
                    return e.stack
                        .replace(/^\s*at\s+(.*)$/gm, '$1')
                        .replace(/^Anonymous function\s+/gm, '{anonymous}() ')
                        .replace(/^(.+)\s+\((.+)\)$/gm, '$1@$2')
                        .split('\n')
                        .slice(1);
                };
                if( ie){}/* CQT */
                thePrototype.ie = ie;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on Firefox's stack string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var firefox = function(e) {
                    return e.stack.replace(/(?:\n@:0)?\s+$/m, '')
                        .replace(/^(?:\((\S*)\))?@/gm, '{anonymous}($1)@')
                        .split('\n');
                };
                if( firefox){}/* CQT */
                thePrototype.firefox = firefox;
    
    
    
    
    
                var opera11 = function(e) {
                    var ANON = '{anonymous}', lineRE = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
                    var lines = e.stacktrace.split('\n'), result = [];
        
                    for (var i = 0, len = lines.length; i < len; i += 2) {
                        var match = lineRE.exec(lines[i]);
                        if (match) {
                            var location = match[4] + ':' + match[1] + ':' + match[2];
                            var fnName = match[3] || "global code";
                            fnName = fnName.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, ANON);
                            result.push(fnName + '@' + location + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                        }
                    }
        
                    return result;
                };
                if( opera11){}/* CQT */
                thePrototype.opera11 = opera11;
    
    
    
    
    
                var opera10b = function(e) {
                    // "<anonymous function: run>([arguments not available])@file://localhost/G:/js/stacktrace.js:27\n" +
                    // "printStackTrace([arguments not available])@file://localhost/G:/js/stacktrace.js:18\n" +
                    // "@file://localhost/G:/js/test/functional/testcase1.html:15"
                    var lineRE = /^(.*)@(.+):(\d+)$/;
                    var lines = e.stacktrace.split('\n'), result = [];
        
                    for (var i = 0, len = lines.length; i < len; i++) {
                        var match = lineRE.exec(lines[i]);
                        if (match) {
                            var fnName = match[1] ? (match[1] + '()') : "global code";
                            result.push(fnName + '@' + match[2] + ':' + match[3]);
                        }
                    }
        
                    return result;
                };
                if( opera10b){}/* CQT */
                thePrototype.opera10b = opera10b;
    
    
    
    
    
                /**
                 * Given an Error object, return a formatted Array based on Opera 10's stacktrace string.
                 *
                 * @param e - Error object to inspect
                 * @return Array<String> of function calls, files and line numbers
                 */
                var opera10a = function(e) {
                    // "  Line 27 of linked script file://localhost/G:/js/stacktrace.js\n"
                    // "  Line 11 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html: In function foo\n"
                    var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
                    var lines = e.stacktrace.split('\n'), result = [];
        
                    for (var i = 0, len = lines.length; i < len; i += 2) {
                        var match = lineRE.exec(lines[i]);
                        if (match) {
                            var fnName = match[3] || ANON;
                            result.push(fnName + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                        }
                    }
        
                    return result;
                };
                if( opera10a){}/* CQT */
                thePrototype.opera10a = opera10a;
    
    
    
    
    
                // Opera 7.x-9.2x only!
                var opera9 = function(e) {
                    // "  Line 43 of linked script file://localhost/G:/js/stacktrace.js\n"
                    // "  Line 7 of inline#1 script in file://localhost/G:/js/test/functional/testcase1.html\n"
                    var ANON = '{anonymous}', lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
                    var lines = e.message.split('\n'), result = [];
        
                    for (var i = 2, len = lines.length; i < len; i += 2) {
                        var match = lineRE.exec(lines[i]);
                        if (match) {
                            result.push(ANON + '()@' + match[2] + ':' + match[1] + ' -- ' + lines[i + 1].replace(/^\s+/, ''));
                        }
                    }
        
                    return result;
                };
                if( opera9){}/* CQT */
                thePrototype.opera9 = opera9;
    
    
    
    
    
                // Safari 5-, IE 9-, and others
                var other = function(curr) {
                    var ANON = '{anonymous}', fnRE = /function(?:\s+([\w$]+))?\s*\(/, stack = [], fn, args, maxStackSize = 10;
                    var slice = Array.prototype.slice;
                    while (curr && stack.length < maxStackSize) {
                        fn = fnRE.test(curr.toString()) ? RegExp.$1 || ANON : ANON;
                        try {
                            args = slice.call(curr['arguments'] || []);
                        } catch (e) {
                            args = ['Cannot access arguments: ' + e];
                        }
                        stack[stack.length] = fn + '(' + this.stringifyArguments(args) + ')';
                        try {
                            curr = curr.caller;
                        } catch (e) {
                            stack[stack.length] = 'Cannot access caller: ' + e;
                            break;
                        }
                    }
                    return stack;
                };
                if( other){}/* CQT */
                thePrototype.other = other;
    
    
    
    
    
                /**
                 * Given arguments array as a String, substituting type names for non-string types.
                 *
                 * @param {Arguments,Array} args
                 * @return {String} stringified arguments
                 */
                var stringifyArguments = function(args) {
                    var result = [];
                    var slice = Array.prototype.slice;
                    for (var i = 0; i < args.length; ++i) {
                        var arg = args[i];
                        if (arg === undefined) {
                            result[i] = 'undefined';
                        } else if (arg === null) {
                            result[i] = 'null';
                        } else if (arg.constructor) {
                            // TODO constructor comparison does not work for iframes
                            if (arg.constructor === Array) {
                                if (arg.length < 3) {
                                    result[i] = '[' + this.stringifyArguments(arg) + ']';
                                } else {
                                    result[i] = '[' + this.stringifyArguments(slice.call(arg, 0, 1)) + '...' + this.stringifyArguments(slice.call(arg, -1)) + ']';
                                }
                            } else if (arg.constructor === Object) {
                                result[i] = '#object';
                            } else if (arg.constructor === Function) {
                                result[i] = '#function';
                            } else if (arg.constructor === String) {
                                result[i] = '"' + arg + '"';
                            } else if (arg.constructor === Number) {
                                result[i] = arg;
                            } else {
                                result[i] = '?';
                            }
                        }
                    }
                    return result.join(',');
                };
                if( stringifyArguments){}/* CQT */
                thePrototype.stringifyArguments = stringifyArguments;
    
    
    
    
    
    
    
                /**
                 * @return {String} the text from a given URL
                 */
                var ajax = function(url) {
                    var req = this.createXMLHTTPObject();
                    if (req) {
                        try {
                            req.open('GET', url, false);
                            //req.overrideMimeType('text/plain');
                            //req.overrideMimeType('text/javascript');
                            req.send(null);
                            //return req.status == 200 ? req.responseText : '';
                            return req.responseText;
                        } catch (e) {
                        }
                    }
                    return '';
                };
                if( ajax){}/* CQT */
                thePrototype.ajax = ajax;
                
                
                
    
                /**
                 * Try XHR methods in order and store XHR factory.
                 *
                 * @return {XMLHttpRequest} XHR function or equivalent
                 */
                var createXMLHTTPObject = function() {
                    var xmlhttp, XMLHttpFactories = [
                        function() {
                            return new XMLHttpRequest();
                        }, function() {
                            return new ActiveXObject('Msxml2.XMLHTTP');
                        }, function() {
                            return new ActiveXObject('Msxml3.XMLHTTP');
                        }, function() {
                            return new ActiveXObject('Microsoft.XMLHTTP');
                        }
                    ];
                    for (var i = 0; i < XMLHttpFactories.length; i++) {
                        try {
                            xmlhttp = XMLHttpFactories[i]();
                            // Use memoization to cache the factory
                            this.createXMLHTTPObject = XMLHttpFactories[i];
                            return xmlhttp;
                        } catch (e) {
                        }
                    }
                };
                if( createXMLHTTPObject){}/* CQT */
                thePrototype.createXMLHTTPObject = createXMLHTTPObject;
                
                
    
                /**
                 * Given a URL, check if it is in the same domain (so we can get the source
                 * via Ajax).
                 *
                 * @param url {String} source url
                 * @return {Boolean} False if we need a cross-domain request
                 */
                var isSameDomain = function(url) {
                    return typeof location !== "undefined" && url.indexOf(location.hostname) !== -1; // location may not be defined, e.g. when running from nodejs.
                };
                if( isSameDomain){}/* CQT */
                thePrototype.isSameDomain = isSameDomain;
    
    
    
    
    
                /**
                 * Get source code from given URL if in the same domain.
                 *
                 * @param url {String} JS source URL
                 * @return {Array} Array of source code lines
                 */
                var getSource = function(url) {
                    // TODO reuse source from script tags?
                    if (!(url in this.sourceCache)) {
                        this.sourceCache[url] = this.ajax(url).split('\n');
                    }
                    return this.sourceCache[url];
                };
                if( getSource){}/* CQT */
                thePrototype.getSource = getSource;
    
    
    
    
    
                var guessAnonymousFunctions = function(stack) {
                    for (var i = 0; i < stack.length; ++i) {
                        var reStack = /\{anonymous\}\(.*\)@(.*)/,
                            reRef = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
                            frame = stack[i], ref = reStack.exec(frame);
            
                        if (ref) {
                            var m = reRef.exec(ref[1]);
                            if (m) { // If falsey, we did not get any file/line information
                                var file = m[1], lineno = m[2], charno = m[3] || 0;
                                if (file && this.isSameDomain(file) && lineno) {
                                    var functionName = this.guessAnonymousFunction(file, lineno, charno);
                                    stack[i] = frame.replace('{anonymous}', functionName);
                                }
                            }
                        }
                    }
                    return stack;
                };
                if( guessAnonymousFunctions){}/* CQT */
                thePrototype.guessAnonymousFunctions = guessAnonymousFunctions;
    
    
    
    
    
                var guessAnonymousFunction = function(url, lineNo, charNo) {
                    var ret;
                    try {
                        ret = this.findFunctionName(this.getSource(url), lineNo);
                    } catch (e) {
                        ret = 'getSource failed with url: ' + url + ', exception: ' + e.toString();
                    }
                    return ret;
                };
                if( guessAnonymousFunction){}/* CQT */
                thePrototype.guessAnonymousFunction = guessAnonymousFunction;
    
    
    
    
    
                var findFunctionName = function(source, lineNo) {
                    // FIXME findFunctionName fails for compressed source
                    // (more than one function on the same line)
                    // function {name}({args}) m[1]=name m[2]=args
                    var reFunctionDeclaration = /function\s+([^(]*?)\s*\(([^)]*)\)/;
                    // {name} = function ({args}) TODO args capture
                    // /['"]?([0-9A-Za-z_]+)['"]?\s*[:=]\s*function(?:[^(]*)/
                    var reFunctionExpression = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;
                    // {name} = eval()
                    var reFunctionEvaluation = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
                    // Walk backwards in the source lines until we find
                    // the line which matches one of the patterns above
                    var code = "", line, maxLines = Math.min(lineNo, 20), m, commentPos;
                    for (var i = 0; i < maxLines; ++i) {
                        // lineNo is 1-based, source[] is 0-based
                        line = source[lineNo - i - 1];
                        commentPos = line.indexOf('//');
                        if (commentPos >= 0) {
                            line = line.substr(0, commentPos);
                        }
                        // TODO check other types of comments? Commented code may lead to false positive
                        if (line) {
                            code = line + code;
                            m = reFunctionExpression.exec(code);
                            if (m && m[1]) {
                                return m[1];
                            }
                            m = reFunctionDeclaration.exec(code);
                            if (m && m[1]) {
                                //return m[1] + "(" + (m[2] || "") + ")";
                                return m[1];
                            }
                            m = reFunctionEvaluation.exec(code);
                            if (m && m[1]) {
                                return m[1];
                            }
                        }
                    }
                    return '(?)';
                };
                if( findFunctionName){}/* CQT */
                thePrototype.findFunctionName = findFunctionName;
    
    
            };
            
            
            
            
            
            
            
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Stacktrace_ProtoFactory = function() {
                
                /* Create object to serve as prototype */
                var aPrototype = Stacktrace_ProtoInstancer();
                
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
                
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Stacktrace_CreatePrototypeSlotsOn( aPrototype);
                
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Stacktrace_ProtoDefinerOn( aPrototype);
                
                return aPrototype;
            };
            
            
            
            
            
            /* ***************************************************************
              Object to serve as prototype
            */
            var aStacktrace_Prototype = Stacktrace_ProtoFactory();
            
            
            
            
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
            var Stacktrace_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = aStacktrace_Prototype;
                
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Stacktrace_CreateInstanceSlotsOn( this);
                
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Stacktrace( theTitle);
            };
            Stacktrace_Constructor.prototype = aStacktrace_Prototype;
            
            
            
            
            
            
            
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
            var Stacktrace_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Stacktrace_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aStacktrace_Prototype;
                
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Stacktrace_CreateInstanceSlotsOn( this);
            };
            Stacktrace_SuperPrototypeConstructor.prototype = aStacktrace_Prototype;
            
            
            
            
            
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
                
                "Stacktrace_ProtoInstancer":               Stacktrace_ProtoInstancer,
                "Stacktrace_ProtoDefinerOn":               Stacktrace_ProtoDefinerOn,
                "Stacktrace_ProtoFactory":                 Stacktrace_ProtoFactory,
                "Stacktrace_Constructor":                  Stacktrace_Constructor,
                "Stacktrace_SuperPrototypeConstructor":    Stacktrace_SuperPrototypeConstructor,
                "Stacktrace_CreatePrototypeSlotsOn":       Stacktrace_CreatePrototypeSlotsOn,
                "Stacktrace_CreateInstanceSlotsOn":        Stacktrace_CreateInstanceSlotsOn,
                
                "ProtoInstancer":                          Stacktrace_ProtoInstancer,
                "ProtoDefinerOn":                          Stacktrace_ProtoDefinerOn,
                "ProtoFactory":                            Stacktrace_ProtoFactory,
                "Constructor":                             Stacktrace_Constructor,
                "SuperPrototypeConstructor":               Stacktrace_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Stacktrace_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Stacktrace_CreateInstanceSlotsOn,
                
                "Stacktrace_Prototype":                    aStacktrace_Prototype,
                "Prototype":                               aStacktrace_Prototype
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
            aStacktrace_Prototype._v_Module = aModule;
            
            
            
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






;/*
 * stacktrace_svce.js
 *
 * Created @author Antonio Carrasco Valero 201805212307
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
 {{Licensed2}}stacktrace_svce.js

 ***************************************************************************
 *
 */


'use strict';


(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "stacktrace_svce";
    var ModulePackages = "exceptionstack";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce,
                                   theSS_stacktrace_type){
        
        
        var aMod_builder = function( theS_OverriderType,
                                     theSS_stacktrace_type) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            /* ***************************************************************
             This Module is actually delivered as a singleton instance of the prototype defined in the module.
             The module definition object itself is not actually returned as the module, but the singleton instance is,
               which has a slot _v_Module through which it is possible to access the module definition object.
            */
            var aStackTraceInstance = new theSS_stacktrace_type.Stacktrace_Constructor( "StackTraceInstanceAt" + new Date().getTime().toString());
    
            var printStackTrace = function (options) {
                options = options || {guess: true};
                var ex = options.e || null, guess = !!options.guess, mode = options.mode || null;
                var p = aStackTraceInstance, result = p.run(ex, mode);
                return (guess) ? p.guessAnonymousFunctions(result) : result;
            };
            
            
            /* ***************************************************************
               Because this singleton becomes a registered module, fill in metainformation usually found in modules
            */
            printStackTrace._v_Kind        = "function";
            printStackTrace.stacktrace_type= theSS_stacktrace_type;
            printStackTrace.ComponentName  = ComponentName;
            printStackTrace.ModuleName     = ModuleName;
            printStackTrace.ModulePackages = ModulePackages;
            printStackTrace.ModuleFullName = ModuleFullName;
    
            /* ***************************************************************
              Return the instantiated service singleton as the module object.
            */
            return printStackTrace;
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
                theSS_stacktrace_type
            );
            
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
    });
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            "stacktrace_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce = require('../overrider/overrider_svce');
            var aM_stacktrace_type   = require('./stacktrace_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_stacktrace_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("stacktrace_svce",
            [
                "typesregistry_svce",
                "overrider_svce",
                "stacktrace_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "exceptionstack", "stacktrace_type")
            ],
            aMod_definer
        );
        
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */




;
/*
 * exceptiondetails_type.js
 *
 * Created @author Antonio Carrasco Valero 201805220052
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
    
    var ComponentName  = "prettytype";
    var ModuleName     = "exceptiondetails_type";
    var ModulePackages = "exceptionstack";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Exceptiondetails";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce,
                                 theSS_stacktrace_svce){
        
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
                
                theToInit.EXCEPTIONDETAILSDEFAULTNAME = "Exceptiondetails_DefaultName";
                theToInit.LOGEXCEPTIONDETAILS   = false;
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
            var Exceptiondetails_ProtoInstancer = function() {
                
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
                
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Exceptiondetails    = aPrototype;
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
                On the prototype object which was supplied to this function Exceptiondetails_CreatePrototypeSlotsOn
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
            var Exceptiondetails_CreatePrototypeSlotsOn = function( theFrame) {
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
            var Exceptiondetails_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Title               = null;
                theFrame._v_LogExceptionDetails = null;
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
            var Exceptiondetails_ProtoDefinerOn = function( thePrototype) {
                
                if( !thePrototype) {
                    return;
                }
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Exceptiondetails( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_Exceptiondetails = function( theTitle) {
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.EXCEPTIONDETAILSDEFAULTNAME;
                    }
                    
                    this._v_LogExceptionDetails = this.LOGEXCEPTIONDETAILS && true;
                    
                };
                if( _pInit_Exceptiondetails){}/* CQT */
                thePrototype._pInit_Exceptiondetails = _pInit_Exceptiondetails;
    
    
    
    
                var pRelease = function() {
                    this._v_Title               = null;
                    this._v_LogExceptionDetails = null;
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
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type
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
    
    
    
    
    
                var fLogExceptionDetails = function() {
                    return this._v_LogExceptionDetails;
                };
                if( fLogExceptionDetails){}/* CQT */
                thePrototype.fLogExceptionDetails = fLogExceptionDetails;
    
    
    
    
    
                var pSetLogExceptionDetails = function( theLogExceptionDetails) {
                   this._v_LogExceptionDetails = theLogExceptionDetails && true;
                };
                if( pSetLogExceptionDetails){}/* CQT */
                thePrototype.pSetLogExceptionDetails = pSetLogExceptionDetails;
    
    
    
    
    
    
                var fExceptionDetail = function( theException) {
                    if( !theException) {
                        return null;
                    }
        
        
                    var anExceptionDetail = {
                        exception: theException.toString()
                    };
        
        
                    var anExceptionTrace = theS_stacktraceSvce( { e: theException});
                    if( anExceptionTrace) {
                        anExceptionDetail.trace = anExceptionTrace;
                    }
        
                    var aRecord = theException._v_Record;
                    if( aRecord) {
                        if( aRecord.fIdentifyingJSON) {
                            aRecord = aRecord.fIdentifyingJSON();
                        }
                        else {
                            if( aRecord.fAsLogObject) {
                                aRecord = aRecord.fAsLogObject();
                            }
                        }
                        if( aRecord) {
                            anExceptionDetail.recex = aRecord;
                        }
                    }
        
                    if( this._v_LogExceptionDetails) {
                        console.log( "exception:" + anExceptionDetail.exception);
                        console.log( anExceptionDetail.recex);
                        console.log( anExceptionDetail.trace);
                    }
        
                    anExceptionDetail.fIdentifyingJSON = function() {
                        return anExceptionDetail;
                    };
        
                    return anExceptionDetail;
                };
                if( fExceptionDetail){}/* CQT */
                thePrototype.fExceptionDetail = fExceptionDetail;
    
            };
            
            
            
            
            
            
            
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Exceptiondetails_ProtoFactory = function() {
                
                /* Create object to serve as prototype */
                var aPrototype = Exceptiondetails_ProtoInstancer();
                
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
                
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Exceptiondetails_CreatePrototypeSlotsOn( aPrototype);
                
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Exceptiondetails_ProtoDefinerOn( aPrototype);
                
                return aPrototype;
            };
            
            
            
            
            
            /* ***************************************************************
              Object to serve as prototype
            */
            var aExceptiondetails_Prototype = Exceptiondetails_ProtoFactory();
            
            
            
            
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
            var Exceptiondetails_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = aExceptiondetails_Prototype;
                
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Exceptiondetails_CreateInstanceSlotsOn( this);
                
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Exceptiondetails( theTitle);
            };
            Exceptiondetails_Constructor.prototype = aExceptiondetails_Prototype;
            
            
            
            
            
            
            
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
            var Exceptiondetails_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Exceptiondetails_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aExceptiondetails_Prototype;
                
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Exceptiondetails_CreateInstanceSlotsOn( this);
            };
            Exceptiondetails_SuperPrototypeConstructor.prototype = aExceptiondetails_Prototype;
            
            
            
            
            
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
                
                "Exceptiondetails_ProtoInstancer":               Exceptiondetails_ProtoInstancer,
                "Exceptiondetails_ProtoDefinerOn":               Exceptiondetails_ProtoDefinerOn,
                "Exceptiondetails_ProtoFactory":                 Exceptiondetails_ProtoFactory,
                "Exceptiondetails_Constructor":                  Exceptiondetails_Constructor,
                "Exceptiondetails_SuperPrototypeConstructor":    Exceptiondetails_SuperPrototypeConstructor,
                "Exceptiondetails_CreatePrototypeSlotsOn":       Exceptiondetails_CreatePrototypeSlotsOn,
                "Exceptiondetails_CreateInstanceSlotsOn":        Exceptiondetails_CreateInstanceSlotsOn,
                
                "ProtoInstancer":                          Exceptiondetails_ProtoInstancer,
                "ProtoDefinerOn":                          Exceptiondetails_ProtoDefinerOn,
                "ProtoFactory":                            Exceptiondetails_ProtoFactory,
                "Constructor":                             Exceptiondetails_Constructor,
                "SuperPrototypeConstructor":               Exceptiondetails_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Exceptiondetails_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Exceptiondetails_CreateInstanceSlotsOn,
                
                "Exceptiondetails_Prototype":              aExceptiondetails_Prototype,
                "Prototype":                               aExceptiondetails_Prototype
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
            aExceptiondetails_Prototype._v_Module = aModule;
            
            
            
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
                theSS_stacktrace_svce
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
            "stacktrace_svce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_stacktrace_svce = require('../exceptionstack/stacktrace_svce');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_stacktrace_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "stacktrace_svce"
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
                nomod.fComputeFullName( "prettytype", "exceptionstack", "stacktrace_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */







;
/*
 * exceptiondetails_svce.js
 *
 * Created @author Antonio Carrasco Valero 201409301309
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
    var ModuleName     = "exceptiondetails_svce";
    var ModulePackages = "exceptionstack";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var SingletonName  = "Exceptiondetails_Service";
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce,
                                   theSS_exceptiondetails_type){
        
        
        var aMod_builder = function( theS_OverriderType,
                                     theSS_exceptiondetails_type) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
            /* ***************************************************************
             This Module is actually delivered as a singleton instance of the prototype defined in the module.
             The module definition object itself is not actually returned as the module, but the singleton instance is,
               which has a slot _v_Module through which it is possible to access the module definition object.
            */
            var aService = new theSS_exceptiondetails_type.Exceptiondetails_Constructor( SingletonName);
    
            /* ***************************************************************
               Because this singleton becomes a registered module, fill in metainformation usually found in modules
            */
            aService._v_Kind        = "singleton";
            aService.ComponentName  = ComponentName;
            aService.ModuleName     = ModuleName;
            aService.ModulePackages = ModulePackages;
            aService.ModuleFullName = ModuleFullName;
            aService.SingletonName  = SingletonName;
    
            /* ***************************************************************
              Return the instantiated service singleton as the module object.
            */
            return aService;
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
                theSS_exceptiondetails_type
            );
            
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
    });
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            "exceptiondetails_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce = require('../overrider/overrider_svce');
            var aM_exceptiondetails_type   = require('./exceptiondetails_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_exceptiondetails_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("exceptiondetails_svce",
            [
                "typesregistry_svce",
                "overrider_svce",
                "exceptiondetails_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "exceptionstack", "exceptiondetails_type")
            ],
            aMod_definer
        );
        
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */



;'use strict';

/*
 * console_types.js
 *
 * Created @author Antonio Carrasco Valero 201805210456
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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


if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("console", [
        "typesregistry",
        "overrider"
    ]);
}




;/*
 * console_type.js
 *
 * Created @author Antonio Carrasco Valero 201805210457
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
    
    var ComponentName  = "prettytype";
    var ModuleName     = "console_type";
    var ModulePackages = "console";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Console";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce){
        
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
    
                theToInit.WRITETOCONSOLE          = true;
                theToInit.COLLECTLOGS             = false;
                theToInit.MAXCOLLECTEDLOGSLENGTH  = 16 * 1024 * 1024;
                
                theToInit.CONSOLEDEFAULTNAME = "Console_DefaultName";
                
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
            var Console_ProtoInstancer = function() {
                
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
                
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Console       = aPrototype;
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
                On the prototype object which was supplied to this function Console_CreatePrototypeSlotsOn
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
            var Console_CreatePrototypeSlotsOn = function( theFrame) {
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
            var Console_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Title                   = null;
                theFrame._v_WriteToConsole          = null;
                theFrame._v_CollectLogs             = null;
                theFrame._v_MaxCollectedLogsLength  = null;
                
                theFrame._v_CollectedLogs           = null;
                theFrame._v_CollectedLogsSize       = null;
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
            var Console_ProtoDefinerOn = function( thePrototype) {
                
                if( !thePrototype) {
                    return;
                }
                
                
                
                var _pInit = function( theTitle) {
                    
                    this._pInit_Console( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _pInit_Console = function( theTitle) {
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this.CONSOLEDEFAULTNAME;
                    }
    
                    this._v_WriteToConsole          = this.WRITETOCONSOLE;
                    this._v_CollectLogs             = this.COLLECTLOGS;
                    this._v_MaxCollectedLogsLength  = this.MAXCOLLECTEDLOGSLENGTH;
    
                    this._v_CollectedLogs           = [ ];
                    this._v_CollectedLogsSize       = 0;
                };
                if( _pInit_Console){}/* CQT */
                thePrototype._pInit_Console = _pInit_Console;
    
    
    
    
    
                var pRelease = function() {
                    this._v_Title             = null;
                    this._v_WriteToConsole = null;
                    this._v_CollectLogs = null;
                    this._v_MaxCollectedLogsLength = null;
                    this._v_CollectedLogs = null;
                    this._v_CollectedLogsSize = null;
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
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type
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
    
    
    
    
    
    
    
    
    
    
                var pSetWriteToConsole = function( theWriteToConsole) {
        
                    this._v_WriteToConsole = ( theWriteToConsole? true : false);
        
                };
                if( pSetWriteToConsole){}/* CQT */
                thePrototype.pSetWriteToConsole = pSetWriteToConsole;
    
    
    
    
    
    
    
                var pSetCollectLogs = function( theCollectLogs) {
        
                    if( theCollectLogs) {
            
                        this._v_CollectLogs = true;
            
                        if( !this._v_CollectedLogs) {
                            this._v_CollectedLogs      = [ ];
                            this._v_CollectedLogsSize  = 0;
                        }
                    }
                    else {
                        this._v_CollectLogs        = false;
                        this._v_CollectedLogs      = [ ];
                        this._v_CollectedLogsSize  = 0;
                    }
                };
                if( pSetCollectLogs){}/* CQT */
                thePrototype.pSetCollectLogs = pSetCollectLogs;
    
    
    
    
    
                var pSetMaxCollectedLogsLength = function( theMaxCollectedLogsLength) {
        
                    this._v_MaxCollectedLogsLength = theMaxCollectedLogsLength;
        
                    this.pEnforceMaxCollectedLogsLength("");
        
                };
                if( pSetMaxCollectedLogsLength){}/* CQT */
                thePrototype.pSetMaxCollectedLogsLength = pSetMaxCollectedLogsLength;
    
    
    
    
    
    
    
    
                var fCollectedLogs = function() {
        
                    return this._v_CollectedLogs;
        
                };
                if( fCollectedLogs){}/* CQT */
                thePrototype.fCollectedLogs = fCollectedLogs;
    
    
    
    
    
    
                var fCollectedLogsCopy = function() {
        
                    if( !this._v_CollectedLogs) {
                        return null;
                    }
        
                    return this._v_CollectedLogs.slice();
        
                };
                if( fCollectedLogsCopy){}/* CQT */
                thePrototype.fCollectedLogsCopy = fCollectedLogsCopy;
    
    
    
    
    
    
    
                var log = function( theMessage) {
        
                    if( this._v_CollectLogs) {
            
                        if( !this._v_CollectedLogs) {
                            this._v_CollectedLogs = [ ];
                        }
            
                        this._v_CollectedLogs.push( [ "log", theMessage]);
    
                        this.pEnforceMaxCollectedLogsLength( theMessage);
                    }
        
        
                    if( this._v_WriteToConsole) {
            
                        // console.log( theMessage);
                    }
        
                };
                if( log){}/* CQT */
                thePrototype.log = log;
    
    
    
    
    
    
    
                var error = function( theMessage) {
        
                    if( this._v_CollectLogs) {
            
                        if( !this._v_CollectedLogs) {
                            this._v_CollectedLogs = [ ];
                        }
            
                        this._v_CollectedLogs.push( [ "error", theMessage]);
    
                        this.pEnforceMaxCollectedLogsLength( theMessage);
                    }
        
        
                    if( this._v_WriteToConsole) {
            
                        // console.error( theMessage);
                    }
        
                };
                if( error){}/* CQT */
                thePrototype.error = error;
    
    
    
    
    
    
    
    
                var info = function( theMessage) {
        
                    if( this._v_CollectLogs) {
            
                        if( !this._v_CollectedLogs) {
                            this._v_CollectedLogs = [ ];
                        }
            
                        this._v_CollectedLogs.push( [ "info", theMessage]);
    
                        this.pEnforceMaxCollectedLogsLength( theMessage);
                    }
        
        
                    if( this._v_WriteToConsole) {
            
                        // console.log( theMessage);
                    }
        
                };
                if( info){}/* CQT */
                thePrototype.info = info;
    
    
    
    
    
    
                var clear = function() {
        
                    this._v_CollectedLogs     = [ ];
                    this._v_CollectedLogsSize = 0;
        
                    if( this._v_WriteToConsole) {
                        console.clear();
                    }
        
                };
                if( clear){}/* CQT */
                thePrototype.clear = clear;
    
    
    
    
    
    
    
    
                var pEnforceMaxCollectedLogsLength = function( theMessage) {
        
                    if( !this._v_CollectLogs) {
                        return;
                    }
        
                    var aMessageLen = ( ( typeof theMessage === "string") ? theMessage.length : 0);
                    if( aMessageLen){}/* CQT */
        
                    this._v_CollectedLogsSize += aMessageLen;
        
                    if( this._v_MaxCollectedLogsLength <= 0) {
                        return;
                    }
        
        
                    while( true) {
            
                        if( this._v_CollectedLogsSize <= this._v_MaxCollectedLogsLength) {
                            return;
                        }
            
                        if( this._v_CollectLogs.length <= 1) {
                            return;
                        }
            
                        var aRemovedKindAndMessage = this._v_CollectedLogs.shift();
            
                        var aRemovedMessage = aRemovedKindAndMessage[ 1];
                        var aRemovedMessageLen = ( ( typeof aRemovedMessage === "string") ? aRemovedMessage.length : 0);
                        if( aRemovedMessageLen){}/* CQT */
            
                        this._v_CollectedLogsSize -= aRemovedMessageLen;
                    }
        
        
                };
                if( pEnforceMaxCollectedLogsLength){}/* CQT */
                thePrototype.pEnforceMaxCollectedLogsLength = pEnforceMaxCollectedLogsLength;
    
    
            };
            
            
            
            
            
            
            
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Console_ProtoFactory = function() {
                
                /* Create object to serve as prototype */
                var aPrototype = Console_ProtoInstancer();
                
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
                
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Console_CreatePrototypeSlotsOn( aPrototype);
                
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Console_ProtoDefinerOn( aPrototype);
                
                return aPrototype;
            };
            
            
            
            
            
            /* ***************************************************************
              Object to serve as prototype
            */
            var aConsole_Prototype = Console_ProtoFactory();
            
            
            
            
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
            var Console_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = aConsole_Prototype;
                
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Console_CreateInstanceSlotsOn( this);
                
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Console( theTitle);
            };
            Console_Constructor.prototype = aConsole_Prototype;
            
            
            
            
            
            
            
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
            var Console_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Console_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aConsole_Prototype;
                
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Console_CreateInstanceSlotsOn( this);
            };
            Console_SuperPrototypeConstructor.prototype = aConsole_Prototype;
            
            
            
            
            
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
                
                "Console_ProtoInstancer":                  Console_ProtoInstancer,
                "Console_ProtoDefinerOn":                  Console_ProtoDefinerOn,
                "Console_ProtoFactory":                    Console_ProtoFactory,
                "Console_Constructor":                     Console_Constructor,
                "Console_SuperPrototypeConstructor":       Console_SuperPrototypeConstructor,
                "Console_CreatePrototypeSlotsOn":          Console_CreatePrototypeSlotsOn,
                "Console_CreateInstanceSlotsOn":           Console_CreateInstanceSlotsOn,
                
                "ProtoInstancer":                          Console_ProtoInstancer,
                "ProtoDefinerOn":                          Console_ProtoDefinerOn,
                "ProtoFactory":                            Console_ProtoFactory,
                "Constructor":                             Console_Constructor,
                "SuperPrototypeConstructor":               Console_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Console_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Console_CreateInstanceSlotsOn,
                
                "Console_Prototype":                       aConsole_Prototype,
                "Prototype":                               aConsole_Prototype
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
            aConsole_Prototype._v_Module = aModule;
            
            
            
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
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






;/*
 * console_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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
 {{Licensed2}}console_svce.js

 ***************************************************************************
 *
 */


'use strict';


(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "console_svce";
    var ModulePackages = "console";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var SingletonName  = "Console_Service";
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce,
                                   theSS_console_type){
        
        
        var aMod_builder = function( theS_OverriderType,
                                     theSS_console_type) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            /* ***************************************************************
             This Module is actually delivered as a singleton instance of the prototype defined in the module.
             The module definition object itself is not actually returned as the module, but the singleton instance is,
               which has a slot _v_Module through which it is possible to access the module definition object.
            */
            var aService = new theSS_console_type.Console_Constructor( SingletonName);
            
            /* ***************************************************************
               Because this singleton becomes a registered module, fill in metainformation usually found in modules
            */
            aService._v_Kind        = "singleton";
            aService.ComponentName  = ComponentName;
            aService.ModuleName     = ModuleName;
            aService.ModulePackages = ModulePackages;
            aService.ModuleFullName = ModuleFullName;
            aService.SingletonName  = SingletonName;
    
            /* ***************************************************************
              Return the instantiated service singleton as the module object.
            */
            return aService;
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
                theSS_console_type
            );
            
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
    });
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            "console_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce = require('../overrider/overrider_svce');
            var aM_console_type   = require('./console_type');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_console_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("console_svce",
            [
                "typesregistry_svce",
                "overrider_svce",
                "console_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "console", "console_type")
            ],
            aMod_definer
        );
        
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */




;'use strict';

/*
 * identifying_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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

if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("identifying", [
        "typesregistry",
        "overrider"
    ]);
    
}





;/*
 * identifier_type.js
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
    
    var ComponentName  = "prettytype";
    var ModuleName     = "identifier_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Identifier";
    
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
                theToInit.IDENTIFIER_DEFAULTTITLE = "Identifier_DefaultName";
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
            var Identifier_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
        
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Identifier       = aPrototype;
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
                On the prototype object which was supplied to this function Identifier_CreatePrototypeSlotsOn
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
            var Identifier_CreatePrototypeSlotsOn = function( theFrame) {
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
            var Identifier_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Id    = null;
                theFrame._v_Title = null;
    
                theFrame._v_IdsCounter = null;
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
            var Identifier_ProtoDefinerOn = function( thePrototype) {
    
                if( !thePrototype) {
                    return;
                }
    
                var _pInit = function( theTitle) {
                    
                    this._pInit_Identifier( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.IDENTIFIER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_Identifier = function( theTitle) {
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    this._v_IdsCounter = 0;
                    
                    this._v_Id = this.fReserveId();
                    
                };
                if( _pInit_Identifier){}/* CQT */
                thePrototype._pInit_Identifier = _pInit_Identifier;
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                thePrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
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
                
                
                
                
                
                
                
                
                
                
                var fReserveId = function() {
                    
                    this._v_IdsCounter += 1;
                    
                    var anId = this._v_IdsCounter;
                    
                    return anId.toString();
                };
                if( fReserveId){}/* CQT */
                thePrototype.fReserveId = fReserveId;
                
                
            };
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Identifier_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = Identifier_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Identifier_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Identifier_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aIdentifier_Prototype = Identifier_ProtoFactory();
    
    
    
    
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
            var Identifier_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = aIdentifier_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Identifier_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Identifier( theTitle);
            };
            Identifier_Constructor.prototype = aIdentifier_Prototype;
    
    
    
    
    
    
    
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
            var Identifier_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Identifier_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aIdentifier_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Identifier_CreateInstanceSlotsOn( this);
            };
            Identifier_SuperPrototypeConstructor.prototype = aIdentifier_Prototype;
    
    
    
    
    
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
        
                "Identifier_ProtoInstancer":               Identifier_ProtoInstancer,
                "Identifier_ProtoDefinerOn":               Identifier_ProtoDefinerOn,
                "Identifier_ProtoFactory":                 Identifier_ProtoFactory,
                "Identifier_Constructor":                  Identifier_Constructor,
                "Identifier_SuperPrototypeConstructor":    Identifier_SuperPrototypeConstructor,
                "Identifier_CreatePrototypeSlotsOn":       Identifier_CreatePrototypeSlotsOn,
                "Identifier_CreateInstanceSlotsOn":        Identifier_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          Identifier_ProtoInstancer,
                "ProtoDefinerOn":                          Identifier_ProtoDefinerOn,
                "ProtoFactory":                            Identifier_ProtoFactory,
                "Constructor":                             Identifier_Constructor,
                "SuperPrototypeConstructor":               Identifier_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Identifier_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Identifier_CreateInstanceSlotsOn,
        
                "Identifier_Prototype":                    aIdentifier_Prototype,
                "Prototype":                               aIdentifier_Prototype
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
            aIdentifier_Prototype._v_Module = aModule;
    
    
    
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
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */


;/*
 * identifier_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051557
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
 {{Licensed2}}identifier_svce.js

 ***************************************************************************
 *
 */


'use strict';


(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "identifier_svce";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var SingletonName  = "Identifier_Service";
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce,
                                   theSS_identifier_type){
        
        
        var aMod_builder = function( theS_OverriderType,
                                     theSS_identifier_type) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            /* ***************************************************************
             This Module is actually delivered as a singleton instance of the prototype defined in the module.
             The module definition object itself is not actually returned as the module, but the singleton instance is,
               which has a slot _v_Module through which it is possible to access the module definition object.
            */
            var aService = new theSS_identifier_type.Identifier_Constructor( SingletonName);
            
            /* ***************************************************************
               Because this singleton becomes a registered module, fill in metainformation usually found in modules
            */
            aService._v_Kind        = "singleton";
            aService.ComponentName  = ComponentName;
            aService.ModuleName     = ModuleName;
            aService.ModulePackages = ModulePackages;
            aService.ModuleFullName = ModuleFullName;
            aService.SingletonName  = SingletonName;
            
            /* ***************************************************************
              Return the instantiated service singleton as the module object.
            */
            return aService;
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
                theSS_identifier_type
            );
            
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
    });
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            "identifier_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_identifier_type = require('./identifier_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_identifier_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("identifier_svce",
            [
                "typesregistry_svce",
                "overrider_svce",
                "identifier_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_type")
            ],
            aMod_definer
        );
        
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */




;'use strict';

/*
 * recording_types.js
 *
 * Created @author Antonio Carrasco Valero 201805220409
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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

if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("recording", [
        "typesregistry",
        "overrider",
        "eventkinds"
    ]);
    
}





;/*
 * dumpingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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
    
    var ComponentName  = "prettytype";
    var ModuleName     = "dumpingpolicy_type";
    var ModulePackages = "recording";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "DumpingPolicy";
    
    var aMod_definer =  function( theSS_typesregistry_svce,
                                  theSS_overrider_svce,
                                  theSS_identifier_svce,
                                  theSS_console_svce) {
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_identifier_svce,
                                     theS_console_svce) {
            
            
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
                
                theToInit.MAYDUMPRECORDS = true;
                
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
                
                theToInit.DUMPINGPOLICY_DEFAULTTITLE = "DumpingPolicyDefaultName";
                
                theToInit.RECORDPOINTERNAME_LASTDUMPED = "RECORDPOINTERNAME_LASTDUMPED";
                
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
            var DumpingPolicy_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
        
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_DumpingPolicy       = aPrototype;
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
                On the prototype object which was supplied to this function DumpingPolicy_CreatePrototypeSlotsOn
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
            var DumpingPolicy_CreatePrototypeSlotsOn = function( theFrame) {
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
            var DumpingPolicy_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Identifier      = null;
                theFrame._v_Id              = null;
                theFrame._v_Title           = null;
                theFrame._v_Recorder        = null;
                theFrame._v_MayDumpRecords  = null;
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
            var DumpingPolicy_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
        
                
                
                var _pInit = function( theTitle, theIdentifier) {
                    
                    this._pInit_DumpingPolicy( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.DUMPINGPOLICY_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_DumpingPolicy = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._v_Identifier = theIdentifier;
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_identifier_svce;
                    }
                    
                    this._v_Id = this._v_Identifier.fReserveId();
                    
                    this._v_Recorder    = theRecorder;
                    
                    this._v_MayDumpRecords   = this.MAYDUMPRECORDS;
                    
                };
                if( _pInit_DumpingPolicy){}/* CQT */
                thePrototype._pInit_DumpingPolicy = _pInit_DumpingPolicy;
    
    
    
    
                
    
                var pRelease = function() {
        
                    this._v_Identifier       = null;
        
                    this._v_Id               = null;
                    this._v_Title            = null;
        
                    this._v_Recorder         = null;
        
                    this._v_MayDumpRecords   = null;
        
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
                
                
                
                
                
                
                
                
                
                
                var fConsoleService = function() {
                    
                    return theS_console_svce;
                    
                };
                if( fConsoleService){}/* CQT */
                thePrototype.fConsoleService = fConsoleService;
                
                
                
                
                
                
                
                
                var fRecorder = function() {
                    
                    return this._v_Recorder;
                };
                if( fRecorder){}/* CQT */
                thePrototype.fRecorder = fRecorder;
                
                
                
                
                
                
                var pSetRecorder = function( theRecorder) {
                    
                    this._v_Recorder = theRecorder;
                };
                if( pSetRecorder){}/* CQT */
                thePrototype.pSetRecorder = pSetRecorder;
                
                
                
                
                
                
                
                
                
                var pSetMayDumpRecords = function( theMayDumpRecords) {
                    
                    this._v_MayDumpRecords = !!theMayDumpRecords;
                    
                };
                if( pSetMayDumpRecords){}/* CQT */
                thePrototype.pSetMayDumpRecords = pSetMayDumpRecords;
                
                
                
                
                var fMayDumpRecords = function() {
                    
                    return this._v_MayDumpRecords;
                    
                };
                if( fMayDumpRecords){}/* CQT */
                thePrototype.fMayDumpRecords = fMayDumpRecords;
                
                
                
                
                
                
                
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
                thePrototype.fMustDumpRecord = fMustDumpRecord;
                
                
                
                
                
                
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

                    var aLogString = theRecord.fLogString();
                    if( !aLogString) {
                        return;
                    }
    
                    aConsoleService.log(  "," + aLogString);
    
                    var aRecorder = this.fRecorder();
                    if( !aRecorder) {
                        return;
                    }
    
                    aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, theRecordedRecordPointer);
                    
                };
                if( pDumpRecord){}/* CQT */
                thePrototype.pDumpRecord = pDumpRecord;
                
                
             
                
                
            };
    
    
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var DumpingPolicy_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = DumpingPolicy_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                DumpingPolicy_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                DumpingPolicy_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aDumpingPolicy_Prototype = DumpingPolicy_ProtoFactory();
    
    
    
    
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
            var DumpingPolicy_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Kind      = "instance";
                this._v_Prototype = aDumpingPolicy_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                DumpingPolicy_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_DumpingPolicy( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicy_Constructor.prototype = aDumpingPolicy_Prototype;
    
    
    
    
    
    
    
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
            var DumpingPolicy_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module DumpingPolicy_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aDumpingPolicy_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                DumpingPolicy_CreateInstanceSlotsOn( this);
            };
            DumpingPolicy_SuperPrototypeConstructor.prototype = aDumpingPolicy_Prototype;
    
    
    
    
    
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
        
                "DumpingPolicy_ProtoInstancer":                  DumpingPolicy_ProtoInstancer,
                "DumpingPolicy_ProtoDefinerOn":                  DumpingPolicy_ProtoDefinerOn,
                "DumpingPolicy_ProtoFactory":                    DumpingPolicy_ProtoFactory,
                "DumpingPolicy_Constructor":                     DumpingPolicy_Constructor,
                "DumpingPolicy_SuperPrototypeConstructor":       DumpingPolicy_SuperPrototypeConstructor,
                "DumpingPolicy_CreatePrototypeSlotsOn":          DumpingPolicy_CreatePrototypeSlotsOn,
                "DumpingPolicy_CreateInstanceSlotsOn":           DumpingPolicy_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          DumpingPolicy_ProtoInstancer,
                "ProtoDefinerOn":                          DumpingPolicy_ProtoDefinerOn,
                "ProtoFactory":                            DumpingPolicy_ProtoFactory,
                "Constructor":                             DumpingPolicy_Constructor,
                "SuperPrototypeConstructor":               DumpingPolicy_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  DumpingPolicy_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   DumpingPolicy_CreateInstanceSlotsOn,
        
                "DumpingPolicy_Prototype":                       aDumpingPolicy_Prototype,
                "Prototype":                               aDumpingPolicy_Prototype
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
            aDumpingPolicy_Prototype._v_Module = aModule;
    
    
    
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
                theSS_identifier_svce,
                theSS_console_svce
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
            var aM_overrider_svce     = require('../overrider/overrider_svce');
            var aM_console_svce       = require('../console/console_svce');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_console_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "console_svce"
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
                nomod.fComputeFullName( "prettytype", "console", "console_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */










;/*
 * dumpingpolicy_filterkinds_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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
    var ModuleName     = "dumpingpolicy_filterkinds_type";
    var ModulePackages = "recording";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "DumpingPolicyFilterKinds";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce,
                                 theSS_dumpingpolicy_type,
                                 theSS_eventkinds_common) {
        
        var aMod_builder = function( theS_overrider_svce,
                                     theS_dumpingpolicy_type,
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
                
                theToInit.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE = false;
                
                
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE";
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";
                
                theToInit.EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";
                
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
                theToInit.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyFilterKindsDefaultName";
                
                
                
                
                if( theToInit.EVENTSSETNOTFORCONSOLE) {
                    
                    if( typeof theToInit.EVENTSSETNOTFORCONSOLE === "string") {
                        var anEventsSetNotForConsole = theS_eventkinds_common[ theToInit.EVENTSSETNOTFORCONSOLE];
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
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_eventkinds_common.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
                }
                if( !theToInit.EVENTKINDS_NOTFORCONSOLE) {
                    theToInit.EVENTKINDS_NOTFORCONSOLE = theS_eventkinds_common.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
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
            var DumpingPolicyFilterKinds_ProtoInstancer = function() {
        
                /* Prototypical inheritance from DumpingPolicy */
                var aPrototype = new theS_dumpingpolicy_type.DumpingPolicy_SuperPrototypeConstructor();
    
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_DumpingPolicyFilterKinds       = aPrototype;
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
                On the prototype object which was supplied to this function DumpingPolicyFilterKinds_CreatePrototypeSlotsOn
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
            var DumpingPolicyFilterKinds_CreatePrototypeSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_EventKindsNotConsole = null;
    
                /* ***************************************************************
                  Slot property named _v_EventKindsNotConsole only initialized in the prototype.
                  May be overriden by individual instantes setting their own value
                */
                if( ModuleConstants.EVENTKINDS_NOTFORCONSOLE) {
                    theFrame._v_EventKindsNotConsole = ModuleConstants.EVENTKINDS_NOTFORCONSOLE.slice();
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
            var DumpingPolicyFilterKinds_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                }
    
                /* ***************************************************************
                  Slot property named _v_EventKindsNotConsole only initialized in the prototype.
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
            var DumpingPolicyFilterKinds_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
        
        
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_DumpingPolicyFilterKinds = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    thePrototype._v_SuperPrototype._pInit_DumpingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                };
                if( _pInit_DumpingPolicyFilterKinds){}/* CQT */
                thePrototype._pInit_DumpingPolicyFilterKinds = _pInit_DumpingPolicyFilterKinds;
    
    
    
    
    
    
                var pRelease = function() {
        
                    this._v_Prototype_DumpingPolicyFilterKinds.pRelease.apply( this);
        
                    if( this.hasOwnProperty( "_v_EventKindsNotConsole")) {
                        this._v_EventKindsNotConsole = null;
                        delete( this._v_EventKindsNotConsole);
                    }
        
                };
                if( pRelease){}/* CQT */
                thePrototype.pRelease = pRelease;
    
    
    
    
    
    
    
    
    
                var fSetEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    thePrototype._v_EventKindsNotConsole = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( thePrototype._v_EventKindsNotConsole, null, 4));
                    }
                    
                    return thePrototype._v_EventKindsNotConsole;
                };
                if( fSetEventKindsNotForConsole_inPrototype){}/* CQT */
                thePrototype.fSetEventKindsNotForConsole_inPrototype = fSetEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                var fFewerEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return thePrototype._v_EventKindsNotConsole;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return thePrototype._v_EventKindsNotConsole;
                    }
                    
                    
                    var someEventKinds = thePrototype._v_EventKindsNotConsole.slice();
                    
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
                    
                    
                    thePrototype._v_EventKindsNotConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( thePrototype._v_EventKindsNotConsole, null, 4));
                    }
                    
                    return thePrototype._v_EventKindsNotConsole;
                };
                if( fFewerEventKindsNotForConsole_inPrototype){}/* CQT */
                thePrototype.fFewerEventKindsNotForConsole_inPrototype = fFewerEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                
                
                var fMoreEventKindsNotForConsole_inPrototype = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return thePrototype._v_EventKindsNotConsole;
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return thePrototype._v_EventKindsNotConsole;
                    }
                    
                    
                    var someEventKinds = thePrototype._v_EventKindsNotConsole.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    thePrototype._v_EventKindsNotConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( thePrototype._v_EventKindsNotConsole, null, 4));
                    }
                    
                    return thePrototype._v_EventKindsNotConsole;
                };
                if( fMoreEventKindsNotForConsole_inPrototype){}/* CQT */
                thePrototype.fMoreEventKindsNotForConsole_inPrototype = fMoreEventKindsNotForConsole_inPrototype;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fSetEventKindsNotForConsole = function( theEventKinds) {
                    
                    this._v_EventKindsNotConsole = theEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotConsole, null, 4));
                    }
                    
                    return this._v_EventKindsNotConsole;
                };
                if( fSetEventKindsNotForConsole){}/* CQT */
                thePrototype.fSetEventKindsNotForConsole = fSetEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                var fFewerEventKindsNotForConsole = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsNotConsole;
                    }
                    
                    
                    if( !this._v_EventKindsNotConsole) {
                        this._v_EventKindsNotConsole = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotConsole;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsNotConsole.slice();
                    
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
                    
                    
                    this._v_EventKindsNotConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotConsole, null, 4));
                    }
                    
                    return this._v_EventKindsNotConsole
                };
                if( fFewerEventKindsNotForConsole){}/* CQT */
                thePrototype.fFewerEventKindsNotForConsole = fFewerEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                var fMoreEventKindsNotForConsole = function( theEventKinds) {
                    
                    if( !theEventKinds) {
                        return this._v_EventKindsNotConsole;
                    }
                    
                    
                    if( !this._v_EventKindsNotConsole) {
                        this._v_EventKindsNotConsole = [ ];
                    }
                    
                    var aNumEventKinds = theEventKinds.length;
                    if( !aNumEventKinds) {
                        return this._v_EventKindsNotConsole;
                    }
                    
                    
                    var someEventKinds = this._v_EventKindsNotConsole.slice();
                    
                    for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {
                        
                        var anEventKind = theEventKinds[ anEventKindIdx];
                        if( anEventKind) {
                            
                            var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                            if( anEventKindIndex < 0) {
                                
                                someEventKinds.push( anEventKind);
                            }
                        }
                    }
                    
                    
                    this._v_EventKindsNotConsole = someEventKinds;
                    
                    if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
                        console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotConsole, null, 4));
                    }
                    
                    return this._v_EventKindsNotConsole
                };
                if( fMoreEventKindsNotForConsole){}/* CQT */
                thePrototype.fMoreEventKindsNotForConsole = fMoreEventKindsNotForConsole;
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                var fMustDumpRecord = function( theRecord) {
                    
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
                    
                    var someEventKindsNotForConsole = this.fEventKindsNotForConsole();
                    if( !someEventKindsNotForConsole) {
                        return true;
                    }
                    
                    if( someEventKindsNotForConsole.indexOf( anEventKind) < 0) {
                        return true;
                    }
                    if( null){}/* CQT */
    
                    return false;
                    
                };
                if( fMustDumpRecord){}/* CQT */
                thePrototype.fMustDumpRecord = fMustDumpRecord;
                
                
                
                
                
                
                
                var fEventKindsNotForConsole = function() {
                    
                    /* Slot property named _v_EventKindsNotConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */
                    
                    /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsNotConsole */
                    if( this.hasOwnProperty( "_v_EventKindsNotConsole")) {
                        
                        if( !this._v_EventKindsNotConsole) {
                            return null;
                        }
                        
                        return this._v_EventKindsNotConsole;
                    }
                    
                    
                    
                    if( !this._v_EventKindsNotConsole) {
                        return null;
                    }
                    
                    return this._v_EventKindsNotConsole;
                    
                };
                if( fEventKindsNotForConsole){}/* CQT */
                thePrototype.fEventKindsNotForConsole = fEventKindsNotForConsole;
                
                
            };
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var DumpingPolicyFilterKinds_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = DumpingPolicyFilterKinds_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                DumpingPolicyFilterKinds_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                DumpingPolicyFilterKinds_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aDumpingPolicyFilterKinds_Prototype = DumpingPolicyFilterKinds_ProtoFactory();
    
    
    
    
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
            */
            var DumpingPolicyFilterKinds_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Kind      = "instance";
                this._v_Prototype = aDumpingPolicyFilterKinds_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                DumpingPolicyFilterKinds_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
            };
            DumpingPolicyFilterKinds_Constructor.prototype = aDumpingPolicyFilterKinds_Prototype;
    
    
    
    
    
    
    
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
            var DumpingPolicyFilterKinds_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module DumpingPolicyFilterKinds_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aDumpingPolicyFilterKinds_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                DumpingPolicyFilterKinds_CreateInstanceSlotsOn( this);
            };
            DumpingPolicyFilterKinds_SuperPrototypeConstructor.prototype = aDumpingPolicyFilterKinds_Prototype;
    
    
    
    
    
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
        
                "DumpingPolicyFilterKinds_ProtoInstancer":                  DumpingPolicyFilterKinds_ProtoInstancer,
                "DumpingPolicyFilterKinds_ProtoDefinerOn":                  DumpingPolicyFilterKinds_ProtoDefinerOn,
                "DumpingPolicyFilterKinds_ProtoFactory":                    DumpingPolicyFilterKinds_ProtoFactory,
                "DumpingPolicyFilterKinds_Constructor":                     DumpingPolicyFilterKinds_Constructor,
                "DumpingPolicyFilterKinds_SuperPrototypeConstructor":       DumpingPolicyFilterKinds_SuperPrototypeConstructor,
                "DumpingPolicyFilterKinds_CreatePrototypeSlotsOn":          DumpingPolicyFilterKinds_CreatePrototypeSlotsOn,
                "DumpingPolicyFilterKinds_CreateInstanceSlotsOn":           DumpingPolicyFilterKinds_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          DumpingPolicyFilterKinds_ProtoInstancer,
                "ProtoDefinerOn":                          DumpingPolicyFilterKinds_ProtoDefinerOn,
                "ProtoFactory":                            DumpingPolicyFilterKinds_ProtoFactory,
                "Constructor":                             DumpingPolicyFilterKinds_Constructor,
                "SuperPrototypeConstructor":               DumpingPolicyFilterKinds_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  DumpingPolicyFilterKinds_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   DumpingPolicyFilterKinds_CreateInstanceSlotsOn,
        
                "DumpingPolicyFilterKinds_Prototype":      aDumpingPolicyFilterKinds_Prototype,
                "Prototype":                               aDumpingPolicyFilterKinds_Prototype
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
            aDumpingPolicyFilterKinds_Prototype._v_Module = aModule;
    
    
    
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
                theSS_dumpingpolicy_type,
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
            "dumpingpolicy_type",
            "eventkinds_common",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce     = require('../overrider/overrider_svce');
            var aM_dumpingpolicy_type = require('../recording/dumpingpolicy_type');
            var aM_eventkinds_common  = require('../eventkinds/eventkinds_common');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_dumpingpolicy_type,
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
                "dumpingpolicy_type",
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
                nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_type"),
                nomod.fComputeFullName( "prettytype", "eventkinds", "eventkinds_common")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */






;/*
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
                aPrototype._v_SuperPrototype          = null;
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






;/*
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





;/*
 * recordingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201610051422
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
    var ModuleName     = "recordingpolicy_type";
    var ModulePackages = "recording";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "RecordingPolicy";
    
    var aMod_definer =  function( theSS_typesregistry_svce,
                                    theSS_overrider_svce,
                                    theSS_identifier_svce) {
        
        var aMod_builder = function( theS_overrider_svce,
                                     theS_identifier_svce) {
            
            
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
                theToInit.RECORDINGPOLICY_DEFAULTTITLE = "RecordingPolicyDefaultName";
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
            var RecordingPolicy_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
        
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_RecordingPolicy       = aPrototype;
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
                On the prototype object which was supplied to this function RecordingPolicy_CreatePrototypeSlotsOn
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
            var RecordingPolicy_CreatePrototypeSlotsOn = function( theFrame) {
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
            var RecordingPolicy_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Identifier = null;
                theFrame._v_Id         = null;
                theFrame._v_Title      = null;
                theFrame._v_Recorder   = null;
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
            var RecordingPolicy_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
        
        
                
                
                
                var _pInit = function( theTitle, theIdentifier) {
                    
                    this._pInit_RecordingPolicy( theTitle, theIdentifier);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICY_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicy = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._v_Identifier = theIdentifier;
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_identifier_svce;
                    }
                    
                    this._v_Id = this._v_Identifier.fReserveId();
                    
                    this._v_Recorder    = theRecorder;
                };
                if( _pInit_RecordingPolicy){}/* CQT */
                thePrototype._pInit_RecordingPolicy = _pInit_RecordingPolicy;
    
    
    
    
    
                var pRelease = function() {
                    this._v_Identifier = null;
                    this._v_Id         = null;
                    this._v_Title      = null;
                    this._v_Recorder   = null;
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
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecorder = function() {
                    
                    return this._v_Recorder;
                };
                if( fRecorder){}/* CQT */
                thePrototype.fRecorder = fRecorder;
                
                
                
                
                
                
                var pSetRecorder = function( theRecorder) {
                    
                    this._v_Recorder = theRecorder;
                };
                if( pSetRecorder){}/* CQT */
                thePrototype.pSetRecorder = pSetRecorder;
                
                
                
                
                
                
                
                
                var fRecordRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return null;
                    }
                    
                    /* Subtype responsibility */
                    return null;
                    
                };
                if( fRecordRecord){}/* CQT */
                thePrototype.fRecordRecord = fRecordRecord;
                
                
                
            };
    
    
    
    
    
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var RecordingPolicy_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = RecordingPolicy_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                RecordingPolicy_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                RecordingPolicy_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aRecordingPolicy_Prototype = RecordingPolicy_ProtoFactory();
    
    
    
    
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
            var RecordingPolicy_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Kind      = "instance";
                this._v_Prototype = aRecordingPolicy_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicy_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicy_Constructor.prototype = aRecordingPolicy_Prototype;
    
    
    
    
    
    
    
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
            var RecordingPolicy_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module RecordingPolicy_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aRecordingPolicy_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicy_CreateInstanceSlotsOn( this);
            };
            RecordingPolicy_SuperPrototypeConstructor.prototype = aRecordingPolicy_Prototype;
    
    
    
    
    
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
        
                "RecordingPolicy_ProtoInstancer":                  RecordingPolicy_ProtoInstancer,
                "RecordingPolicy_ProtoDefinerOn":                  RecordingPolicy_ProtoDefinerOn,
                "RecordingPolicy_ProtoFactory":                    RecordingPolicy_ProtoFactory,
                "RecordingPolicy_Constructor":                     RecordingPolicy_Constructor,
                "RecordingPolicy_SuperPrototypeConstructor":       RecordingPolicy_SuperPrototypeConstructor,
                "RecordingPolicy_CreatePrototypeSlotsOn":          RecordingPolicy_CreatePrototypeSlotsOn,
                "RecordingPolicy_CreateInstanceSlotsOn":           RecordingPolicy_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          RecordingPolicy_ProtoInstancer,
                "ProtoDefinerOn":                          RecordingPolicy_ProtoDefinerOn,
                "ProtoFactory":                            RecordingPolicy_ProtoFactory,
                "Constructor":                             RecordingPolicy_Constructor,
                "SuperPrototypeConstructor":               RecordingPolicy_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  RecordingPolicy_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   RecordingPolicy_CreateInstanceSlotsOn,
        
                "RecordingPolicy_Prototype":                       aRecordingPolicy_Prototype,
                "Prototype":                               aRecordingPolicy_Prototype
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
            aRecordingPolicy_Prototype._v_Module = aModule;
    
    
    
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
                theSS_identifier_svce
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
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_identifier_svce = require('../identifying/identifier_svce');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_identifier_svce
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "identifier_svce"
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
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */







;/*
 * recordingpolicy_keepall_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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



/* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
 and shall prevent reclamation of their memory by the garbage collector
 Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
 which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
 */

(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "recordingpolicy_keepall_type";
    var ModulePackages = "recording";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "RecordingPolicyKeepAll";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce,
                                 theSS_recordingpolicy_type) {
        
        var aMod_builder = function( theS_overrider_svce,
                                     theS_recordingpolicy_type) {
            
            
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
                
                theToInit.MUSTKEEPRECORDS = true;
                
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
                theToInit.RECORDINGPOLICYKEEPALL_DEFAULTTITLE = "RecordingPolicyKeepAllDefaultName";
                
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
            var RecordingPolicyKeepAll_ProtoInstancer = function() {
    
                /* Prototypical inheritance from RecordingPolicy */
                var aPrototype = new theS_recordingpolicy_type.RecordingPolicyKeepAll_SuperPrototypeConstructor();
    
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_RecordingPolicyKeepAll  = aPrototype;
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
                On the prototype object which was supplied to this function RecordingPolicyKeepAll_CreatePrototypeSlotsOn
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
            var RecordingPolicyKeepAll_CreatePrototypeSlotsOn = function( theFrame) {
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
            var RecordingPolicyKeepAll_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_MustKeepRecords = null;
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
            var RecordingPolicyKeepAll_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
        
           
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder);
                    
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICYKEEPALL_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicyKeepAll = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    thePrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                  
                    this._v_MustKeepRecords = this.MUSTKEEPRECORDS;
                    
                };
                if( _pInit_RecordingPolicyKeepAll){}/* CQT */
                thePrototype._pInit_RecordingPolicyKeepAll = _pInit_RecordingPolicyKeepAll;
    
    
    
    
    
                var pRelease = function() {
        
                    this._v_Prototype_RecordingPolicy.pRelease.apply( this);
        
                    this._v_MustKeepRecords = null;
        
                };
                if( pRelease){}/* CQT */
                thePrototype.pRelease = pRelease;
    
    
    
    
    
    
    
    
                var pSetMustKeepRecords = function( theMustKeepRecords) {
                    
                    this._v_MustKeepRecords = !!theMustKeepRecords;
                    
                };
                if( pSetMustKeepRecords){}/* CQT */
                thePrototype.pSetMustKeepRecords = pSetMustKeepRecords;
                
                
                
                
                var fMustKeepRecords = function() {
                    
                    return this._v_MustKeepRecords;
                    
                };
                if( fMustKeepRecords){}/* CQT */
                thePrototype.fMustKeepRecords = fMustKeepRecords;
                
                
                
                
                
                
                
                var fRecordRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return null;
                    }
                    
                    if( !this.fMustKeepRecords()) {
                        return null;
                    }
                    
                    
                    if( this._v_Recorder) {
                        this._v_Recorder.pKeepRecord( theRecord);
                    }
                    
                    this.pPruneRecords();
                    
                    var aRecordedRecordPointer = this._v_Recorder.fLastKeptRecordPointer();
                    if( aRecordedRecordPointer){}/* CQT */
    
                    return aRecordedRecordPointer;
                    
                };
                if( fRecordRecord){}/* CQT */
                thePrototype.fRecordRecord = fRecordRecord;
                
                
                
                
                
                
                /* Subtype responsibility */
                var pPruneRecords = function() {
                
                };
                if( pPruneRecords){}/* CQT */
                thePrototype.pPruneRecords = pPruneRecords;
                
                
                
            };
    
    
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var RecordingPolicyKeepAll_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = RecordingPolicyKeepAll_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                RecordingPolicyKeepAll_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                RecordingPolicyKeepAll_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aRecordingPolicyKeepAll_Prototype = RecordingPolicyKeepAll_ProtoFactory();
    
    
    
    
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
            */
            var RecordingPolicyKeepAll_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Kind      = "instance";
                this._v_Prototype = aRecordingPolicyKeepAll_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicyKeepAll_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepAll_Constructor.prototype = aRecordingPolicyKeepAll_Prototype;
    
    
    
    
    
    
    
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
            var RecordingPolicyKeepAll_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module RecordingPolicyKeepAll_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aRecordingPolicyKeepAll_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicyKeepAll_CreateInstanceSlotsOn( this);
            };
            RecordingPolicyKeepAll_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepAll_Prototype;
    
    
    
    
    
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
        
                "RecordingPolicyKeepAll_ProtoInstancer":                  RecordingPolicyKeepAll_ProtoInstancer,
                "RecordingPolicyKeepAll_ProtoDefinerOn":                  RecordingPolicyKeepAll_ProtoDefinerOn,
                "RecordingPolicyKeepAll_ProtoFactory":                    RecordingPolicyKeepAll_ProtoFactory,
                "RecordingPolicyKeepAll_Constructor":                     RecordingPolicyKeepAll_Constructor,
                "RecordingPolicyKeepAll_SuperPrototypeConstructor":       RecordingPolicyKeepAll_SuperPrototypeConstructor,
                "RecordingPolicyKeepAll_CreatePrototypeSlotsOn":          RecordingPolicyKeepAll_CreatePrototypeSlotsOn,
                "RecordingPolicyKeepAll_CreateInstanceSlotsOn":           RecordingPolicyKeepAll_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          RecordingPolicyKeepAll_ProtoInstancer,
                "ProtoDefinerOn":                          RecordingPolicyKeepAll_ProtoDefinerOn,
                "ProtoFactory":                            RecordingPolicyKeepAll_ProtoFactory,
                "Constructor":                             RecordingPolicyKeepAll_Constructor,
                "SuperPrototypeConstructor":               RecordingPolicyKeepAll_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  RecordingPolicyKeepAll_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   RecordingPolicyKeepAll_CreateInstanceSlotsOn,
        
                "RecordingPolicyKeepAll_Prototype":                       aRecordingPolicyKeepAll_Prototype,
                "Prototype":                               aRecordingPolicyKeepAll_Prototype
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
            aRecordingPolicyKeepAll_Prototype._v_Module = aModule;
    
    
    
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
                theSS_recordingpolicy_type
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
            "recordingpolicy_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_recordingpolicy_type = require('../recording/recordingpolicy_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_recordingpolicy_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "recordingpolicy_type"
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
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_type")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */








;/*
 * recordingpolicy_keepsome_type.js
 *
 * Created @author Antonio Carrasco Valero 201510181424
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
    var ModuleName     = "recordingpolicy_keepsome_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "RecordingPolicyKeepSome";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                   theSS_overrider_svce,
                                   theSS_recordingpolicy_keepall_type) {
        
        var aMod_builder = function( theS_overrider_svce,
                                     theS_recordingpolicy_keepall_type) {
            
            
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
                
                theToInit.MUSTKEEPRECORDSMAXNUMBER = 1000;
                
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
                theToInit.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE = "RecordingPolicyKeepSomeDefaultName";
                
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
            var RecordingPolicyKeepSome_ProtoInstancer = function() {
        
                /* Prototypical inheritance from RecordingPolicy */
                var aPrototype = new theS_recordingpolicy_keepall_type.RecordingPolicyKeepAll_SuperPrototypeConstructor();
    
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_RecordingPolicyKeepSome = aPrototype;
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
                On the prototype object which was supplied to this function RecordingPolicyKeepSome_CreatePrototypeSlotsOn
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
            var RecordingPolicyKeepSome_CreatePrototypeSlotsOn = function( theFrame) {
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
            var RecordingPolicyKeepSome_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_MustKeepRecordsMaxNumber = null;
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
            var RecordingPolicyKeepSome_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
        
        
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_RecordingPolicyKeepSome( theTitle, theIdentifier, theRecorder);
                    
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICYKEEPSOME_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicyKeepSome = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    thePrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    this._v_MustKeepRecordsMaxNumber = this.MUSTKEEPRECORDSMAXNUMBER;
                    
                };
                if( _pInit_RecordingPolicyKeepSome){}/* CQT */
                thePrototype._pInit_RecordingPolicyKeepSome = _pInit_RecordingPolicyKeepSome;
    
    
    
    
    
    
                var pRelease = function() {
        
                    this._v_Prototype_RecordingPolicyKeepAll.pRelease.apply( this);
        
                    this._v_MustKeepRecords = null;
        
                };
                if( pRelease){}/* CQT */
                thePrototype.pRelease = pRelease;
                
                
                
                
                
                
                var pSetMustKeepRecordsMaxNumber = function( theMustKeepRecordsMaxNumber) {
                    
                    this._v_MustKeepRecordsMaxNumber = theMustKeepRecordsMaxNumber;
                    
                };
                if( pSetMustKeepRecordsMaxNumber){}/* CQT */
                thePrototype.pSetMustKeepRecordsMaxNumber = pSetMustKeepRecordsMaxNumber;
                
                
                
                
                
                
                var fMustKeepRecordsMaxNumber = function() {
                    
                    return this._v_MustKeepRecordsMaxNumber;
                    
                };
                if( fMustKeepRecordsMaxNumber){}/* CQT */
                thePrototype.fMustKeepRecordsMaxNumber = fMustKeepRecordsMaxNumber;
                
                
                
                
                
                var pPruneRecords = function() {
                    
                    this._v_Prototype_RecordingPolicyKeepAll.pPruneRecords.apply( this);
                    
                    
                    if( !this._v_Recorder) {
                        return;
                    }
                    
                    this._v_Recorder.pDiscardRecordsToMaxNumber( this.fMustKeepRecordsMaxNumber());
                    
                };
                if( pPruneRecords){}/* CQT */
                thePrototype.pPruneRecords = pPruneRecords;
                
                
                
            };
    
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var RecordingPolicyKeepSome_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = RecordingPolicyKeepSome_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                RecordingPolicyKeepSome_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                RecordingPolicyKeepSome_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aRecordingPolicyKeepSome_Prototype = RecordingPolicyKeepSome_ProtoFactory();
    
    
    
    
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
            */
            var RecordingPolicyKeepSome_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Kind      = "instance";
                this._v_Prototype = aRecordingPolicyKeepSome_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicyKeepSome_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepSome_Constructor.prototype = aRecordingPolicyKeepSome_Prototype;
    
    
    
    
    
    
    
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
            var RecordingPolicyKeepSome_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module RecordingPolicyKeepSome_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aRecordingPolicyKeepSome_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicyKeepSome_CreateInstanceSlotsOn( this);
            };
            RecordingPolicyKeepSome_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepSome_Prototype;
    
    
    
    
    
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
        
                "RecordingPolicyKeepSome_ProtoInstancer":                  RecordingPolicyKeepSome_ProtoInstancer,
                "RecordingPolicyKeepSome_ProtoDefinerOn":                  RecordingPolicyKeepSome_ProtoDefinerOn,
                "RecordingPolicyKeepSome_ProtoFactory":                    RecordingPolicyKeepSome_ProtoFactory,
                "RecordingPolicyKeepSome_Constructor":                     RecordingPolicyKeepSome_Constructor,
                "RecordingPolicyKeepSome_SuperPrototypeConstructor":       RecordingPolicyKeepSome_SuperPrototypeConstructor,
                "RecordingPolicyKeepSome_CreatePrototypeSlotsOn":          RecordingPolicyKeepSome_CreatePrototypeSlotsOn,
                "RecordingPolicyKeepSome_CreateInstanceSlotsOn":           RecordingPolicyKeepSome_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          RecordingPolicyKeepSome_ProtoInstancer,
                "ProtoDefinerOn":                          RecordingPolicyKeepSome_ProtoDefinerOn,
                "ProtoFactory":                            RecordingPolicyKeepSome_ProtoFactory,
                "Constructor":                             RecordingPolicyKeepSome_Constructor,
                "SuperPrototypeConstructor":               RecordingPolicyKeepSome_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  RecordingPolicyKeepSome_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   RecordingPolicyKeepSome_CreateInstanceSlotsOn,
        
                "RecordingPolicyKeepSome_Prototype":                       aRecordingPolicyKeepSome_Prototype,
                "Prototype":                               aRecordingPolicyKeepSome_Prototype
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
            aRecordingPolicyKeepSome_Prototype._v_Module = aModule;
    
    
    
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
                theSS_recordingpolicy_keepall_type
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
            "recordingpolicy_keepall_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_recordingpolicy_keepall_type = require('../recording/recordingpolicy_keepall_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_recordingpolicy_keepall_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "recordingpolicy_keepall_type"
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
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_keepall_type")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */









;/*
 * recordingpolicy_keeprecent_type.js
 *
 * Created @author Antonio Carrasco Valero 201510171137
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
    var ModuleName     = "recordingpolicy_keeprecent_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "RecordingPolicyKeepRecent";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce,
                                 theSS_recordingpolicy_keepsome_type) {
    
        var aMod_builder = function( theS_overrider_svce,
                                     theS_recordingpolicy_keepsome_type) {
            
            
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
                
                theToInit.MUSTKEEPRECORDSRECENTMILLIS = 5 * 60 * 1000;
                
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
                theToInit.RECORDINGPOLICYKEEPRECENT_DEFAULTTITLE = "RecordingPolicyKeepRecentDefaultName";
                
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
            var RecordingPolicyKeepRecent_ProtoInstancer = function() {
        
                /* Prototypical inheritance from RecordingPolicy */
                var aPrototype = new theS_recordingpolicy_keepsome_type.RecordingPolicyKeepSome_SuperPrototypeConstructor();
    
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_RecordingPolicyKeepRecent  = aPrototype;
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
                On the prototype object which was supplied to this function RecordingPolicyKeepRecent_CreatePrototypeSlotsOn
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
            var RecordingPolicyKeepRecent_CreatePrototypeSlotsOn = function( theFrame) {
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
            var RecordingPolicyKeepRecent_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_MustKeepRecordsRecentMillis = null;
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
            var RecordingPolicyKeepRecent_ProtoDefinerOn = function( thePrototype) {
        
                if( !thePrototype) {
                    return;
                }
        
        
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder);
                    
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.RECORDINGPOLICYKEEPRECENT_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_RecordingPolicyKeepRecent = function( theTitle, theIdentifier, theRecorder) {
                    
                    /* Delegate on super prototype initialization */
                    thePrototype._v_SuperPrototype._pInit_RecordingPolicy.apply( this, [ theTitle, theIdentifier, theRecorder]);
                    
                    // this._v_Prototype = thePrototype;
                    // this._v_Type      = this._v_Prototype._v_Type;
                    // this._v_Module    = this._v_Prototype._v_Module;
                    
                    this._v_MustKeepRecordsRecentMillis = this.MUSTKEEPRECORDSRECENTMILLIS;
                    
                };
                if( _pInit_RecordingPolicyKeepRecent){}/* CQT */
                thePrototype._pInit_RecordingPolicyKeepRecent = _pInit_RecordingPolicyKeepRecent;
    
    
    
    
    
    
                var pRelease = function() {
        
                    this._v_Prototype_RecordingPolicyKeepSome.pRelease.apply( this);
        
                    this._v_MustKeepRecordsRecentMillis = null;
        
                };
                if( pRelease){}/* CQT */
                thePrototype.pRelease = pRelease;
    
    
    
    
    
    
    
                var pSetMustKeepRecordsRecentMillis = function( theMustKeepRecordsRecentMillis) {
                    
                    this._v_MustKeepRecordsRecentMillis = theMustKeepRecordsRecentMillis;
                    
                };
                if( pSetMustKeepRecordsRecentMillis){}/* CQT */
                thePrototype.pSetMustKeepRecordsRecentMillis = pSetMustKeepRecordsRecentMillis;
                
                
                
                
                
                
                
                var fMustKeepRecordsRecentMillis = function() {
                    
                    return this._v_MustKeepRecordsRecentMillis;
                    
                };
                if( fMustKeepRecordsRecentMillis){}/* CQT */
                thePrototype.fMustKeepRecordsRecentMillis = fMustKeepRecordsRecentMillis;
                
                
                
                
                
                
                
                
                
                
                var pPruneRecords = function() {
                    
                    this._v_Prototype_RecordingPolicyKeepSome.pPruneRecords.apply( this);
                    
                    
                    if( !this._v_Recorder) {
                        return;
                    }
                    
                    this._v_Recorder.pDiscardRecordsOlderThan( this.fMustKeepRecordsRecentMillis());
                    
                };
                if( pPruneRecords){}/* CQT */
                thePrototype.pPruneRecords = pPruneRecords;
                
                
                
                
                
                
                return thePrototype;
                
            };
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var RecordingPolicyKeepRecent_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = RecordingPolicyKeepRecent_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                RecordingPolicyKeepRecent_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                RecordingPolicyKeepRecent_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aRecordingPolicyKeepRecent_Prototype = RecordingPolicyKeepRecent_ProtoFactory();
    
    
    
    
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
            */
            var RecordingPolicyKeepRecent_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_Kind      = "instance";
                this._v_Prototype = aRecordingPolicyKeepRecent_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicyKeepRecent_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder);
            };
            RecordingPolicyKeepRecent_Constructor.prototype = aRecordingPolicyKeepRecent_Prototype;
    
    
    
    
    
    
    
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
            var RecordingPolicyKeepRecent_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module RecordingPolicyKeepRecent_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aRecordingPolicyKeepRecent_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                RecordingPolicyKeepRecent_CreateInstanceSlotsOn( this);
            };
            RecordingPolicyKeepRecent_SuperPrototypeConstructor.prototype = aRecordingPolicyKeepRecent_Prototype;
    
    
    
    
    
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
        
                "RecordingPolicyKeepRecent_ProtoInstancer":                  RecordingPolicyKeepRecent_ProtoInstancer,
                "RecordingPolicyKeepRecent_ProtoDefinerOn":                  RecordingPolicyKeepRecent_ProtoDefinerOn,
                "RecordingPolicyKeepRecent_ProtoFactory":                    RecordingPolicyKeepRecent_ProtoFactory,
                "RecordingPolicyKeepRecent_Constructor":                     RecordingPolicyKeepRecent_Constructor,
                "RecordingPolicyKeepRecent_SuperPrototypeConstructor":       RecordingPolicyKeepRecent_SuperPrototypeConstructor,
                "RecordingPolicyKeepRecent_CreatePrototypeSlotsOn":          RecordingPolicyKeepRecent_CreatePrototypeSlotsOn,
                "RecordingPolicyKeepRecent_CreateInstanceSlotsOn":           RecordingPolicyKeepRecent_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          RecordingPolicyKeepRecent_ProtoInstancer,
                "ProtoDefinerOn":                          RecordingPolicyKeepRecent_ProtoDefinerOn,
                "ProtoFactory":                            RecordingPolicyKeepRecent_ProtoFactory,
                "Constructor":                             RecordingPolicyKeepRecent_Constructor,
                "SuperPrototypeConstructor":               RecordingPolicyKeepRecent_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  RecordingPolicyKeepRecent_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   RecordingPolicyKeepRecent_CreateInstanceSlotsOn,
        
                "RecordingPolicyKeepRecent_Prototype":       aRecordingPolicyKeepRecent_Prototype,
                "Prototype":                               aRecordingPolicyKeepRecent_Prototype
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
            aRecordingPolicyKeepRecent_Prototype._v_Module = aModule;
    
    
    
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
                theSS_recordingpolicy_keepsome_type
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
            "recordingpolicy_keepsome_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_recordingpolicy_keepsome_type = require('../recording/recordingpolicy_keepsome_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_recordingpolicy_keepsome_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce",
                "recordingpolicy_keepsome_type"
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
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_keepsome_type")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */


;/*
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
            "recordingpolicy_type", // "recordingpolicy_keepall_type",
            "dumpingpolicy_type", // "dumpingpolicy_filterkinds_type",
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
            var aM_recordingpolicy = require('./recordingpolicy_type' /* './recordingpolicy_keepall_type'*/);
            var aM_dumpingpolicy   = require('./dumpingpolicy_type' /* './dumpingpolicy_filterkinds_type' */);
    
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
                "recordingpolicy_type", // "recordingpolicy_keepall_type",
                "dumpingpolicy_type" // "dumpingpolicy_filterkinds_type"
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
                nomod.fComputeFullName( "prettytype", "recording", "recordingpolicy_type"),
                nomod.fComputeFullName( "prettytype", "recording", "dumpingpolicy_type")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */








;/*
 * recorder_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051556
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
    var ModuleName     = "recorder_svce";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_IdentifierSvce,
                                   theSS_RecorderType){
        
        var aMod_builder = function( theS_IdentifierSvce,
                                     theS_RecorderType) {
        
            return new theS_RecorderType.Recorder_Constructor( "Service_Recorder", theS_IdentifierSvce);
        };
    
        

        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_IdentifierSvce,
                theSS_RecorderType
            );

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
    
        angular.module("identifyingTypes").factory("RecorderSvce",[
            "TypesRegistrySvce",
            "IdentifierSvce",
            "RecorderType",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry_svce = require('../modboot/typesregistry');
            var aM_identifier_svce = require('./identifier_svce');
            var aM_recorder        = require('./recorder_type');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_identifier_svce,
                aM_recorder
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define( "m_recorder_svce",
            [
                "m_typesregistry_svce",
                "m_identifier_svce",
                "m_recorder_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "modboot",     "typesregistry"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "recorder_type")
            ],
            aMod_definer
        );
    
    }
    
    
})();






;/*
 * common_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030426
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
    var ModuleName     = "common_type";
    var ModulePackages = "common";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type,
                                   theSS_IdentifierSvce,
                                   theSS_RecorderSvce,
                                   theSS_EventTypes_Common,
                                   theSS_Travesals){
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_IdentifierSvce,
                                     theS_RecorderSvce,
                                     theS_EventTypes_Common,
                                     theS_Travesals) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                
                /* BeWare: keeping references to record instances shall prevent reclamation of their memory by the garbage collector
                   Note that when a recordingpolicy_keepall is plugged into the recorder, all records shall be kept in memory in the _v_Records slot property of the recorder instance
                   */
                theToInit.KEEPOWNRECORDS = false;
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
                    return;
                }
                
                if( theS_EventTypes_Common && theS_EventTypes_Common.InitFromModuleConstants) {
                    theS_EventTypes_Common.InitFromModuleConstants( theToInit);
                }
                
                theToInit.COMMON_DEFAULTTITLE = "CommonDefaultName";
                
                theToInit.UNKNOWNID = "?i?";
                
                theToInit.VALUEDIFFATTOP = "/";
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
                
                
                
                
                
                theToInit.FIELDNAMEDOT = ".";
                
                theToInit.URLPATHSEPARATOR   = "/";
                theToInit.HTTPQUERYCHAR      = "?";
                theToInit.HTTPPARMASSIGN     = "=";
                theToInit.HTTPEXTRAPARMCHAR  = "&";
                
                
                theToInit.DATATYPE_FILE = "File";
                
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
    
    
    
    
    
            var aCommon_Prototype = (function() {
                
                
                var aPrototype = {};
                
                InitFromModuleConstants( aPrototype);
    
                aPrototype._v_IsPrototype = true;
                aPrototype._v_SuperPrototype = null;
                
                aPrototype._v_Type = "Common";
                
                aPrototype._v_Module = null;
    
                aPrototype._v_Prototype_Common = aPrototype;
    
                
                aPrototype._v_Identifier = null;
                aPrototype._v_Recorder   = null;
                
                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;
                
                aPrototype._v_OwnRecords = null;
                
                
                
                
                
                
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
                    this._v_Module    = this._v_Prototype._v_Module;
                    
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
                    
                    return aRecord;
                };
                if( fRecord){}/* CQT */
                aPrototype.fRecord = fRecord;
                
                
                
                
                
                
                
                
                
                
                /* Deprecated. Kept in support of common type pLogRecord . Use fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to console */
                var pLogRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    if( !this._v_Recorder) {
                        return;
                    }
                    
                    
                    this._v_Recorder.pLogRecord( theRecord);
                    
                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;
                
                
                
                
                
                
                
                
                
                var fFirstDiff = function( theActualValue, theCheckValue) {
                    
                    return theS_Travesals.fgFirstDiff( theActualValue, theCheckValue);
                };
                if( fFirstDiff){}/* CQT */
                aPrototype.fFirstDiff = fFirstDiff;
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var Common_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_IsPrototype = false;
                this._v_Prototype = aCommon_Prototype;
                
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
                
                this._pInit_Common( theTitle, theIdentifier, theRecorder);
            };
            Common_Constructor.prototype = aCommon_Prototype;
            
            
            
            
            
            var Common_SuperPrototypeConstructor = function() {
                this._v_IsPrototype = true;
                this._v_Prototype = aCommon_Prototype;
    
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
            };
            Common_SuperPrototypeConstructor.prototype = aCommon_Prototype;
    
    
    
            var Common_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new Common_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
            var aModule = {
                "Common_Prototype": aCommon_Prototype,
                "Common_Constructor": Common_Constructor,
                "Common_SuperPrototypeConstructor": Common_SuperPrototypeConstructor,
                "Common_SuperPrototypeSingleton": Common_SuperPrototypeSingleton,
                "Prototype": aCommon_Prototype,
                "Constructor": Common_Constructor,
                "SuperPrototypeConstructor": Common_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": Common_SuperPrototypeSingleton
            };
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
    
            aCommon_Prototype._v_Module = aModule;
            
            
            
            
            return aModule;
        };
        
        
        
        
        
      
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type,
                theSS_IdentifierSvce,
                theSS_RecorderSvce,
                theSS_EventTypes_Common,
                theSS_Travesals
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
        
        angular.module("commonTypes").factory("CommonType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            "RecorderSvce",
            "EventKinds_Common",
            "Traversals",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce     = require('../modboot/typesregistry');
            var aM_overrider         = require('../modboot/overrider_svce');
            var aM_identifierSvce    = require('../identifying/identifier_svce');
            var aM_recorderSvce      = require('../identifying/recorder_svce');
            var aM_eventkinds_common = require('../eventkinds/eventkinds_common');
            var aM_traversals        = require('../utils/traversals');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider,
                aM_identifierSvce,
                aM_recorderSvce,
                aM_eventkinds_common,
                aM_traversals
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_common_type",
            [
                "m_typesregistry_svce",
                "m_overrider_svce",
                "m_identifier_svce",
                "m_recorder_svce",
                "m_eventkinds_common",
                "m_traversals"
            ],
            aMod_definer
           );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "modboot",     "typesregistry"),
                nomod.fComputeFullName( "prettytype", "modboot",     "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "recorder_svce"),
                nomod.fComputeFullName( "prettytype", "eventkinds",  "eventkinds_common"),
                nomod.fComputeFullName( "prettytype", "utils",       "traversals")
            ],
            aMod_definer
        );
    
    }
   
    
})();





;'use strict';

/*
 * common_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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



if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("commonTypes", [
        "typesRegistry",
        "modbootTypes",
        "eventKinds_Common",
        "identifyingTypes",
        "traversals"
    ]);
    
    
}



;'use strict';

/*
 checks.js
 Creado 201504010326
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

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
 */


(function () {
    
    
    var ComponentName    = "prettytype";
    var ModuleName     = "checks";
    var ModulePackages = "utils";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_type){
    
        var aMod_builder = function( theS_overrider_type) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
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
            */
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
                theToInit.JSONNAME_CHECKWHEN   = "checkWhen";
                theToInit.JSONNAME_CHECKNEGATE = "checkNegate";
                theToInit.JSONNAME_CHECKKIND   = "checkKind";
                theToInit.JSONNAME_CHECKORIGIN = "checkOrigin";
                theToInit.JSONNAME_CHECKSOURCE = "checkSource";
                theToInit.JSONNAME_CHECKVALUE  = "checkValue";
            
            
                theToInit.JSONNAMES_CHECKPARM = [
                    theToInit.JSONNAME_CHECKWHEN,
                    theToInit.JSONNAME_CHECKNEGATE,
                    theToInit.JSONNAME_CHECKKIND,
                    theToInit.JSONNAME_CHECKORIGIN,
                    theToInit.JSONNAME_CHECKSOURCE,
                    theToInit.JSONNAME_CHECKVALUE
                ];
            
            
            
                theToInit.REQUIREDJSONNAMES = [
                    theToInit.JSONNAME_CHECKWHEN,
                    theToInit.JSONNAME_CHECKKIND,
                    theToInit.JSONNAME_CHECKORIGIN,
                    theToInit.JSONNAME_CHECKSOURCE,
                    theToInit.JSONNAME_CHECKVALUE
                ];
            
            
            
                theToInit.CHECKKIND_TYPE_BOOL      = "TYPE_BOOL";
                theToInit.CHECKKIND_TYPE_STRING    = "TYPE_STRING";
                theToInit.CHECKKIND_TYPE_NUMBER    = "TYPE_NUMBER";
                theToInit.CHECKKIND_TYPE_OBJECT    = "TYPE_OBJECT";
                theToInit.CHECKKIND_TYPE_LIST      = "TYPE_LIST";
                theToInit.CHECKKIND_TYPE_FUNCTION  = "TYPE_FUNCTION";
                theToInit.CHECKKIND_NULL           = "NULL";
                theToInit.CHECKKIND_NOTNULL        = "NOTNULL";
                theToInit.CHECKKIND_EMPTYSTRING    = "EMPTYSTRING";
                theToInit.CHECKKIND_NOTEMPTYSTRING = "NOTEMPTYSTRING";
                theToInit.CHECKKIND_STRINGLEN      = "STRINGLEN";
                theToInit.CHECKKIND_EMPTYLIST      = "EMPTYLIST";
                theToInit.CHECKKIND_NOTEMPTYLIST   = "NOTEMPTYLIST";
                theToInit.CHECKKIND_LISTSIZE       = "LISTSIZE";
                theToInit.CHECKKIND_EMPTYDICT      = "EMPTYDICT";
                theToInit.CHECKKIND_NOTEMPTYDICT   = "NOTEMPTYDICT";
                theToInit.CHECKKIND_DICTSIZE       = "DICTSIZE";
                theToInit.CHECKKIND_EQ             = "EQ";
                theToInit.CHECKKIND_NEQ            = "NEQ";
                theToInit.CHECKKIND_GT             = "GT";
                theToInit.CHECKKIND_GTE            = "GTE";
                theToInit.CHECKKIND_LT             = "LT";
                theToInit.CHECKKIND_LTE            = "LTE";
                theToInit.CHECKKIND_INLIST         = "INLIST";
                theToInit.CHECKKIND_NOTINLIST      = "NOTINLIST";
                theToInit.CHECKKIND_LISTCONTAINS   = "LISTCONTAINS";
                theToInit.CHECKKIND_LISTNOTCONTAINS= "LISTNOTCONTAINS";
                theToInit.CHECKKIND_INKEYS         = "INKEYS";
                theToInit.CHECKKIND_NOTINKEYS      = "NOTINKEYS";
                theToInit.CHECKKIND_INVALUES       = "INVALUES";
                theToInit.CHECKKIND_NOTINVALUES    = "NOTINVALUES";
                theToInit.CHECKKIND_DICTCONTAINSKEY= "DICTCONTAINSKEY";
                theToInit.CHECKKIND_DICTNOTCONTAINSKEY= "DICTNOTCONTAINSKEY";
                theToInit.CHECKKIND_DICTCONTAINSVALUE= "DICTCONTAINSVALUE";
                theToInit.CHECKKIND_DICTNOTCONTAINSVALUE= "DICTNOTCONTAINSVALUE";
            
            
                theToInit.CHECKKINDS = [
                    theToInit.CHECKKIND_TYPE_BOOL,
                    theToInit.CHECKKIND_TYPE_STRING,
                    theToInit.CHECKKIND_TYPE_NUMBER,
                    theToInit.CHECKKIND_TYPE_OBJECT,
                    theToInit.CHECKKIND_TYPE_LIST,
                    theToInit.CHECKKIND_TYPE_FUNCTION,
                    theToInit.CHECKKIND_NULL,
                    theToInit.CHECKKIND_NOTNULL,
                    theToInit.CHECKKIND_EMPTYSTRING,
                    theToInit.CHECKKIND_NOTEMPTYSTRING,
                    theToInit.CHECKKIND_STRINGLEN,
                    theToInit.CHECKKIND_EMPTYLIST,
                    theToInit.CHECKKIND_NOTEMPTYLIST,
                    theToInit.CHECKKIND_LISTSIZE,
                    theToInit.CHECKKIND_EMPTYDICT,
                    theToInit.CHECKKIND_NOTEMPTYDICT,
                    theToInit.CHECKKIND_DICTSIZE,
                    theToInit.CHECKKIND_EQ,
                    theToInit.CHECKKIND_NEQ,
                    theToInit.CHECKKIND_GT,
                    theToInit.CHECKKIND_GTE,
                    theToInit.CHECKKIND_LT,
                    theToInit.CHECKKIND_LTE,
                    theToInit.CHECKKIND_INLIST,
                    theToInit.CHECKKIND_NOTINLIST,
                    theToInit.CHECKKIND_LISTCONTAINS,
                    theToInit.CHECKKIND_LISTNOTCONTAINS,
                    theToInit.CHECKKIND_INKEYS,
                    theToInit.CHECKKIND_NOTINKEYS,
                    theToInit.CHECKKIND_INVALUES,
                    theToInit.CHECKKIND_NOTINVALUES,
                    theToInit.CHECKKIND_DICTCONTAINSKEY,
                    theToInit.CHECKKIND_DICTNOTCONTAINSKEY,
                    theToInit.CHECKKIND_DICTCONTAINSVALUE,
                    theToInit.CHECKKIND_DICTNOTCONTAINSVALUE
                ];
            
            
            
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
    
    
    
    
            var aModule = {};
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
        
            var fgNewVoidCheckSpec = function() {
            
                var aCheckSpec = {
                    "checkNegate":     null,
                    "checkKind":       null,
                    "checkSource":     null,
                    "valueConversion": null,
                    "checkValue":      null
                
                };
                if( fgNewVoidCheckSpec){}/* CQT */
            
                return aCheckSpec;
            };
            if( fgNewVoidCheckSpec){}/* CQT */
            aModule.fgNewVoidCheckSpec = fgNewVoidCheckSpec;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgCheckCheck = function( theCheckKind, theCheckNegate, theActualValue, theCheckValue) {
            
                var aCheckResult = aModule.fgCheckCheck_inner( theCheckKind, theActualValue, theCheckValue);
                if( typeof aCheckResult === "undefined") {
                    return undefined;
                }
            
                var aFinalCheckResult = aCheckResult;
                if( aFinalCheckResult){}/* CQT */
                if( theCheckNegate) {
                    if( aFinalCheckResult) {
                        if( aFinalCheckResult){}/* CQT */
                        aFinalCheckResult = false;
                    }
                    else {
                        aFinalCheckResult = true;
                    }
                }
            
                return aFinalCheckResult;
            };
            if( fgCheckCheck){}/* CQT */
            aModule.fgCheckCheck = fgCheckCheck;
        
        
        
        
        
        
        
        
        
            var fgCheckCheck_inner = function( theCheckKind, theActualValue, theCheckValue) {
            
                if( !theCheckKind) {
                    return undefined;
                }
            
            
                var aCheckedCheckResult = undefined;
                var someKeys            = undefined;
                var aNumKeys            = undefined;
                var aValue              = undefined;
            
                try {
                
                    switch( theCheckKind) {
                    
                    
                        case aModule.CHECKKIND_TYPE_BOOL:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof true;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_STRING:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof "";
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_NUMBER:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof (1);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_OBJECT:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof {};
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_LIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0));
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_FUNCTION:
                        
                            aCheckedCheckResult = typeof theActualValue === "function";
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NULL:
                        
                            aCheckedCheckResult = theActualValue === null;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTNULL:
                        
                            aCheckedCheckResult = !( theActualValue === null);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYSTRING:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof "") && ( theActualValue === "");
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYSTRING:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof "") && !( theActualValue === "");
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_STRINGLEN:
                        
                            if( !( typeof theActualValue === typeof "")) {
                                return undefined;
                            }
                        
                            if( !( typeof theCheckValue === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYLIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0)) && ( theActualValue.length === 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYLIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0)) && ( theActualValue.length > 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LISTSIZE:
                        
                            if( !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !( typeof theCheckValue === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYDICT:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys === typeof []) && ( typeof someKeys.length === typeof (0)) && ( someKeys.length === 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYDICT:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys === typeof []) && ( typeof someKeys.length === typeof (0)) && ( someKeys.length > 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTSIZE:
                        
                            if( !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            if( !( typeof someKeys === typeof []) || !( typeof someKeys.length === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = someKeys.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EQ:
                            aCheckedCheckResult = aModule.fgIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NEQ:
                        
                            aCheckedCheckResult = !aModule.fgIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_GT:
                        
                            aCheckedCheckResult = theActualValue > theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_GTE:
                        
                            aCheckedCheckResult = theActualValue >= theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LT:
                        
                            aCheckedCheckResult = theActualValue < theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LTE:
                        
                            aCheckedCheckResult = theActualValue <= theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_INLIST:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof []) || !( typeof theCheckValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theCheckValue.indexOf || !( typeof theCheckValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) >= 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTINLIST:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof []) || !( typeof theCheckValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theCheckValue.indexOf || !( typeof theCheckValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) < 0;
                            return aCheckedCheckResult;
                    
                    
                    
                    
                        case aModule.CHECKKIND_LISTCONTAINS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theActualValue.indexOf || !( typeof theActualValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) >= 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LISTNOTCONTAINS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theActualValue.indexOf || !( typeof theActualValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) < 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTCONTAINSKEY:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTNOTCONTAINSKEY:
                        
                            if( typeof theActualValue === typeof undefined) {
                                return true;
                            }
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = !theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_INKEYS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTINKEYS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = !theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTCONTAINSVALUE:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;
                        
                            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                                var aKey = someKeys[ aKeyIdx];
                                if( theActualValue.hasOwnProperty( aKey)) {
                                    aValue = theActualValue[ aKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return true;
                                    }
                                }
                            }
                        
                            return false;
                    
                    
                    
                        case aModule.CHECKKIND_DICTNOTCONTAINSVALUE:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;
                        
                            for( var otherKeyIdx=0; otherKeyIdx < aNumKeys; otherKeyIdx++) {
                                var otherKey = someKeys[ otherKeyIdx];
                                if( theActualValue.hasOwnProperty( otherKey)) {
                                    aValue = theActualValue[ otherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return false;
                                    }
                                }
                            }
                        
                            return true;
                    
                    
                    
                    
                        case aModule.CHECKKIND_INVALUES:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;
                        
                            for( var anotherKeyIdx=0; anotherKeyIdx < aNumKeys; anotherKeyIdx++) {
                                var anotherKey = someKeys[ anotherKeyIdx];
                                if( theCheckValue.hasOwnProperty( anotherKey)) {
                                    aValue = theCheckValue[ anotherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return true;
                                    }
                                }
                            }
                        
                            return false;
                    
                    
                    
                    
                        case aModule.CHECKKIND_NOTINVALUES:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;
                        
                            for( var yetanotherKeyIdx=0; yetanotherKeyIdx < aNumKeys; yetanotherKeyIdx++) {
                                var yetanotherKey = someKeys[ yetanotherKeyIdx];
                                if( theCheckValue.hasOwnProperty( yetanotherKey)) {
                                    aValue = theCheckValue[ yetanotherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return false;
                                    }
                                }
                            }
                        
                            return true;
                    
                    
                    
                    
                        default:
                    }
                }
                catch( anException) {}
            
            
                return undefined;
            };
            if( fgCheckCheck_inner){}/* CQT */
            aModule.fgCheckCheck_inner = fgCheckCheck_inner;
        
        
        
        
        
        
        
            var fgIsSameAsValueFromTest = function( theCheckValue, theActualValue) {
            
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return false;
                }
            
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return false;
                }
            
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return true;
                }
            
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return false;
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return false;
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
                if( typeof theActualValue === "number" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
            
                if( !( typeof theActualValue === "object" )) {
                    return false;
                }
            
            
            
            
            
                var someCheckValueKeys   = Object.keys( theCheckValue);
                var aNumCheckValueKeys = someCheckValueKeys.length;
            
                var someActualValueKeys = Object.keys( theActualValue);
                var aNumActualValueKeys = someActualValueKeys.length;
            
                if( !( aNumActualValueKeys === aNumCheckValueKeys)) {
                    return false;
                }
            
                for( var aKeyIdx=0; aKeyIdx < aNumCheckValueKeys; aKeyIdx++) {
                    var aKey = someCheckValueKeys[ aKeyIdx];
                
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return false;
                    }
                
                    var aCheckValueSub = theCheckValue[ aKey];
                    var anActualSub   = theActualValue[ aKey];
                
                
                    if( !aModule.fgIsSameAsValueFromTest( aCheckValueSub, anActualSub)) {
                        return false;
                    }
                }
            
            
            
            
            
                var anActualLen    = theActualValue.length;
                var aCheckValueLen = theCheckValue.length;
            
                if( ( typeof anActualLen === "undefined") && ( typeof aCheckValueLen === "undefined")) {
                    return true;
                }
            
                if( ( typeof anActualLen === "undefined") || ( typeof aCheckValueLen === "undefined")) {
                    return false;
                }
            
                if( !( anActualLen === aCheckValueLen)) {
                    return false;
                }
            
                for( var aSubIdx=0; aSubIdx < anActualLen; aSubIdx++) {
                    var anActualListSub    = theActualValue[ aSubIdx];
                    var aCheckValueListSub = theCheckValue[ aSubIdx];
                
                    if( !aModule.fgIsSameAsValueFromTest( aCheckValueListSub, anActualListSub)) {
                        return false;
                    }
                
                }
            
                return true;
            };
            if( fgIsSameAsValueFromTest){}/* CQT */
            aModule.fgIsSameAsValueFromTest = fgIsSameAsValueFromTest;
        
        
        
        
        
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
    
    };
    

 
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("checks",
            [
                'typesRegistry',
                'modbootTypes'
            ]).factory(
                "Checks",
            [
                "TypesRegistrySvce",
                "OverriderSvce",
                aMod_definer
            ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_checks", [
                "m_typesregistry_svce",
                "m_overrider_svce"
            ],
            aMod_definer
           );
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

;
/*
 te2est-traversals-type.js refactoring of tes2est-traversals.js  to be Angular-agnostic , originally copy of traversals.js in te2est asyncshell project
 Creado 201505182205
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

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
 */

(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "traversals";
    var ModulePackages = "utils";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type){
        
    
        var aMod_builder = function( theS_overrider_type) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
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
            if( theS_overrider_type) {
                theS_overrider_type.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            }
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
            
            
                theToInit.ROOTPATHSTEPSYMBOL = "#root";
            
            
                theToInit.SPECPATHROOTPATHSTEPSYMBOL = "#testsroot";
            
            
                theToInit.PATHSREPLACEABLESYMBOL = "#";
            
            
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
            
            
                theToInit.TRAVERSAL_WHOLE = "*";
            
                theToInit.TRAVERSALSTEPSSEPARATOR = ".";
            
                theToInit.TRAVERSALSTEP_LENGTH = "length";
                theToInit.TRAVERSALSTEP_LAST   = "last";
                theToInit.TRAVERSALSTEP_FIRST  = "first";
                theToInit.TRAVERSALSTEP_ALL    = "all";
            
            
                theToInit.TRAVERSALSTEP_KEYEDSEPARATOR  = "=";
            
                theToInit.REPLACEPARMVALUEWITHPARMPREFIX = "~";
            
                theToInit.REPLACEPARMVALUEDOT = ".";
            
            
            
                theToInit.ANYEXCEPTION = "*";
            
            
                theToInit.VALUEDIFFATTOP = "/";
            
            
                theToInit.SYMBOLICSTEPREGEXPSTR = "^\\?(\\w+)\\=(\\-?[0-9]+)$";
                theToInit.SYMBOLICSTEPREGEXP    = new RegExp( theToInit.SYMBOLICSTEPREGEXPSTR);
            
                theToInit.KEYEDSTEPREGEXPSTR = "^\\#(\\-?[0-9]+)$";
                theToInit.KEYEDSTEPREGEXP    = new RegExp( theToInit.KEYEDSTEPREGEXPSTR);
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
    
    
    
    
            var aModule = {};
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
                var aParmValueLen = theParmValue.length;
                if( !aParmValueLen) {
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                if( aParmValueLen < 2) {
                    return theParmValue;
                }
            
                if( theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT) > 0) {
                    return fgParmValueReplacement_DotNotation( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( !theConfiguration) {
                    return theParmValue;
                }
            
                var aReplacementValue = theParmValue;
            
                var otherReplacementParmName = theParmValue.substring( 1);
            
                var otherParmsToResolve = [ otherReplacementParmName];
            
                var otherParmResolutionsDict = theConfiguration.fParmResolutionsByName( otherParmsToResolve, theMapForStepsWithParmPrefix);
                if( otherParmResolutionsDict) {
                
                    var otherReplacementResolution = otherParmResolutionsDict[ otherReplacementParmName];
                    if( otherReplacementResolution && otherReplacementResolution._v_Success) {
                        aReplacementValue = otherReplacementResolution._v_ParmValue;
                    }
                }
            
                return aReplacementValue;
            };
            if( fgParmValueReplacement){}/* CQT */
            aModule.fgParmValueReplacement = fgParmValueReplacement;
        
        
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement_DotNotation= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
            
                var aParmValueLen = theParmValue.length;
                if( aParmValueLen < 4) { /* expresion minima es ~x.y  */
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                var aDotIndex = theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT);
                if( aDotIndex < 0) {
                    return fgParmValueReplacement( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( aDotIndex < 2) {
                    return theParmValue;
                }
            
            
            
                var aReplacementParmNameWOdot = theParmValue.substring( 0, aDotIndex);
                var aParmValueAfterDot        = theParmValue.substring( aDotIndex + 1);
            
                /* Unused 201805122138
                var aReplacementParmNameWOdotWoPrefix = aReplacementParmNameWOdot.substring( 1);
                 */
            
                var aParmValueReplacementWoDot = fgParmValueReplacement( theConfiguration, aReplacementParmNameWOdot, theMapForStepsWithParmPrefix);
            
                if( ( typeof aParmValueReplacementWoDot === "undefined")
                    || ( aParmValueReplacementWoDot == null)
                    || !( typeof aParmValueReplacementWoDot === "object") ) {
                
                    return aParmValueReplacementWoDot;
                }
            
                if( aDotIndex >= ( aParmValueLen - 1)) {
                    return aParmValueReplacementWoDot;
                }
            
                if( !aParmValueAfterDot) {
                    return aParmValueReplacementWoDot;
                }
            
            
                var aTraversalResult = fgTraverseToFromValue( aParmValueAfterDot, aParmValueReplacementWoDot, theMapForStepsWithParmPrefix);
                if( !( typeof aTraversalResult === "object") || ( aTraversalResult == null)) {
                    return aTraversalResult;
                }
            
                var aReplacementResult = aTraversalResult[ "value"];
                if( aReplacementResult){}/* CQT */
                return aReplacementResult;
            };
            if( fgParmValueReplacement_DotNotation){}/* CQT */
            aModule.fgParmValueReplacement_DotNotation = fgParmValueReplacement_DotNotation;
        
        
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValue = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return { "name": theSourceSteps, "value": theValue};
                }
            
                if( !theValue) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
            
            
            
            
            
                var aStepName = someCheckSourceSteps[ 0].trim();
            
            
            
                if( aNumCheckSourceSteps === 1) {
                
                    if( aStepName === aModule.TRAVERSALSTEP_LENGTH) {
                        return { "value": theValue.length};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_FIRST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ 0]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_LAST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ theValue.length - 1]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_ALL) {
                        if( !theValue.length) {
                            return { "value": []};
                        }
                        return { "value": theValue};
                    }
                
                
                
                
                    var aKeyedSeparatorIndex = aStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                    if ( ( aKeyedSeparatorIndex > 0) && ( aKeyedSeparatorIndex < ( aStepName.length - 1))) {
                        var aValueLen = theValue.length;
                        if( !aValueLen) {
                            return null;
                        }
                        var aKeyName  = aStepName.slice( 0, aKeyedSeparatorIndex);
                        var aKeyValue = aStepName.slice( aKeyedSeparatorIndex);
                        if( !aKeyName || !aKeyValue) {
                            return null;
                        }
                        var aMatchingParmValueElem = null;
                        for( var aValueElemIdx=0; aValueElemIdx < aValueLen; aValueElemIdx++) {
                            var aValueElem = theValue[ aValueElemIdx];
                            if( !aValueElem) {
                                continue;
                            }
                            if( !( typeof aValueElem === "object")) {
                                continue;
                            }
                            if( !aValueElem.hasOwnProperty( aKeyName)) {
                                continue;
                            }
                            var aValueElemKeyedValue    = aValueElem[ aKeyName];
                            if( !aValueElemKeyedValue) {
                                continue;
                            }
                            var aValueElemKeyedValueStr = aValueElemKeyedValue;
                            if( !( typeof aValueElemKeyedValueStr === "string")) {
                                aValueElemKeyedValueStr = new String( aValueElemKeyedValue);
                            }
                            if( !( aValueElemKeyedValueStr === aKeyValue)) {
                                continue;
                            }
                            aMatchingParmValueElem = aValueElem;
                            break;
                        }
                    
                        if( typeof aMatchingParmValueElem === "undefined") {
                            return  null;
                        }
                        if( aMatchingParmValueElem == null) {
                            return null;
                        }
                    
                        return { "value": aMatchingParmValueElem};
                    }
                
                
                
                
                
                    var aReplacedSingleStepName = aStepName;
                    if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                    
                        var aSingleStepNameWoPrefix = aStepName.slice( 1);
                        if( aSingleStepNameWoPrefix) {
                        
                            var aSingleParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSingleStepNameWoPrefix];
                        
                            if( typeof aSingleParmResolutionForStepWithParmPrefix === "undefined") {
                                return null;
                            }
                        
                            aReplacedSingleStepName = aSingleParmResolutionForStepWithParmPrefix;
                        }
                    }
                
                
                
                    var aOneStepTestValue = theValue[ aReplacedSingleStepName];
                
                    if( typeof aOneStepTestValue === "undefined") {
                        return  null;
                    }
                
                    return { "value": aOneStepTestValue};
                }
            
            
            
            
            
            
            
            
                var aReplacedStepName = aStepName;
                if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aStepNameWoPrefix = aStepName.slice( 1);
                    if( aStepNameWoPrefix) {
                    
                        var aParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aStepNameWoPrefix];
                    
                        if( typeof aParmResolutionForStepWithParmPrefix === "undefined") {
                            return null;
                        }
                    
                        aReplacedStepName = aParmResolutionForStepWithParmPrefix;
                    }
                }
            
            
                var aTestValue = theValue[ aReplacedStepName];
                if( typeof aTestValue === "undefined") {
                    return  null;
                }
            
                if( aTestValue == null) {
                    return  null;
                }
            
            
            
            
                var aNumStepsToTraverse = aNumCheckSourceSteps - 1;
            
                var aSubStepValue = aTestValue;
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                    var aSubStepName = someCheckSourceSteps[ aSubStepIdx];
                    if( aSubStepName) {
                        aSubStepName = aSubStepName.trim();
                    
                        if( aSubStepName === aModule.TRAVERSALSTEP_LENGTH) {
                            return { "value": aSubStepValue.length};
                        }
                        else {
                            if( aSubStepName === aModule.TRAVERSALSTEP_FIRST) {
                                if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                    return null;
                                }
                                aSubStepValue = aSubStepValue[ 0];
                            }
                            else {
                                if( aSubStepName === aModule.TRAVERSALSTEP_LAST) {
                                    if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                        return null;
                                    }
                                    aSubStepValue = aSubStepValue[ aSubStepValue.length - 1];
                                }
                                else {
                                
                                    if( aSubStepName === aModule.TRAVERSALSTEP_ALL) {
                                        if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                            return { "value": []};
                                        }
                                    
                                        var someStepsToCollect = someCheckSourceSteps.slice( aSubStepIdx + 1);
                                    
                                        var someCollected = [ ];
                                    
                                        var someToCollect = aSubStepValue.slice();
                                        var aNumToCollect = someToCollect.length;
                                        for( var aToCollectIdx=0; aToCollectIdx < aNumToCollect; aToCollectIdx++) {
                                        
                                            var aToCollect = someToCollect[ aToCollectIdx];
                                        
                                            var aCollectedTraversalResult = fgTraverseToFromValue( someStepsToCollect, aToCollect);
                                        
                                            if( aCollectedTraversalResult) {
                                                var aCollectedTraversalValue = aCollectedTraversalResult[ "value"];
                                                someCollected.push( aCollectedTraversalValue);
                                            }
                                        }
                                    
                                        return { "value": someCollected};
                                    }
                                    else {
                                    
                                        var aSubStepKeyedSeparatorIndex = aSubStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                                        if ( ( aSubStepKeyedSeparatorIndex > 0) && ( aSubStepKeyedSeparatorIndex < ( aSubStepName.length - 1))) {
                                            var aSubStepParmValueLen = aSubStepValue.length;
                                            if( !aSubStepParmValueLen) {
                                                return null;
                                            }
                                            var aSubStepKeyName  = aSubStepName.slice( 0, aSubStepKeyedSeparatorIndex);
                                            var aSubStepKeyValue = aSubStepName.slice( aSubStepKeyedSeparatorIndex + 1);
                                            if( !aSubStepKeyName || !aSubStepKeyValue) {
                                                return null;
                                            }
                                            var aSubStepMatchingParmValueElem = null;
                                            for( var aSubStepParmValueElemIdx=0; aSubStepParmValueElemIdx < aSubStepParmValueLen; aSubStepParmValueElemIdx++) {
                                                var aSubStepParmValueElem = aSubStepValue[ aSubStepParmValueElemIdx];
                                                if( !aSubStepParmValueElem) {
                                                    continue;
                                                }
                                                if( !( typeof aSubStepParmValueElem === "object")) {
                                                    continue;
                                                }
                                                if( !aSubStepParmValueElem.hasOwnProperty( aSubStepKeyName)) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValue    = aSubStepParmValueElem[ aSubStepKeyName];
                                                if( !aSubStepParmValueElemKeyedValue) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValueStr = aSubStepParmValueElemKeyedValue;
                                                if( !( typeof aSubStepParmValueElemKeyedValueStr === "string")) {
                                                    aSubStepParmValueElemKeyedValueStr = new String( aSubStepParmValueElemKeyedValue);
                                                }
                                                if( !( aSubStepParmValueElemKeyedValueStr === aSubStepKeyValue)) {
                                                    continue;
                                                }
                                                aSubStepMatchingParmValueElem = aSubStepParmValueElem;
                                                break;
                                            }
                                        
                                            if( typeof aSubStepMatchingParmValueElem === "undefined") {
                                                return null;
                                            }
                                        
                                            if( aSubStepMatchingParmValueElem == null) {
                                                return null;
                                            }
                                        
                                            aSubStepValue = aSubStepMatchingParmValueElem;
                                        }
                                    
                                    
                                    
                                    
                                        else {
                                            var aReplacedSubStepName = aSubStepName;
                                        
                                            if( aSubStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                                            
                                                var aSubStepNameWoPrefix = aSubStepName.slice( 1);
                                            
                                                var aParmResolutionForSubStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSubStepNameWoPrefix];
                                                if( typeof aParmResolutionForSubStepWithParmPrefix === "undefined") {
                                                    return null;
                                                }
                                            
                                                aReplacedSubStepName = aParmResolutionForSubStepWithParmPrefix;
                                            }
                                        
                                            aSubStepValue = aSubStepValue[ aReplacedSubStepName];
                                        }
                                    }
                                }
                            }
                        }
                    
                    
                        if( typeof aSubStepValue === "undefined") {
                            return null;
                        }
                    
                    
                        if( aSubStepValue == null) {
                            return { "value": null};
                        }
                    
                    }
                }
            
            
                if( aSubStepValue == null) {
                    return { "value": null};
                }
            
            
                var aLastStepName = someCheckSourceSteps[ aNumCheckSourceSteps - 1];
                if( !aLastStepName) {
                    return null;
                }
                aLastStepName = aLastStepName.trim();
                if( !aLastStepName) {
                    return null;
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LENGTH) {
                    return { "value": aSubStepValue.length};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_FIRST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ 0]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LAST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ aSubStepValue.length - 1]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_ALL) {
                    if( !aSubStepValue.length) {
                        return { "value": []};
                    }
                    return { "value": aSubStepValue};
                }
            
            
            
                var aLastKeyedSeparatorIndex = aLastStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                if ( ( aLastKeyedSeparatorIndex > 0) && ( aLastKeyedSeparatorIndex < ( aLastStepName.length - 1))) {
                    var aLastValueLen = aSubStepValue.length;
                    if( !aLastValueLen) {
                        return null;
                    }
                    var aLastKeyName  = aLastStepName.slice( 0, aLastKeyedSeparatorIndex);
                    var aLastKeyValue = aLastStepName.slice( aLastKeyedSeparatorIndex);
                    if( !aKeyName || !aKeyValue) {
                        return null;
                    }
                    var aLastMatchingParmValueElem = null;
                    for( var aLastValueElemIdx=0; aLastValueElemIdx < aLastValueLen; aLastValueElemIdx++) {
                        var aLastValueElem = aSubStepValue[ aLastValueElemIdx];
                        if( !aLastValueElem) {
                            continue;
                        }
                        if( !( typeof aLastValueElem === "object")) {
                            continue;
                        }
                        if( !aLastValueElem.hasOwnProperty( aLastKeyName)) {
                            continue;
                        }
                        var aLastValueElemKeyedValue    = aLastValueElem[ aLastKeyName];
                        if( !aLastValueElemKeyedValue) {
                            continue;
                        }
                        var aLastValueElemKeyedValueStr = aLastValueElemKeyedValue;
                        if( !( typeof aLastValueElemKeyedValueStr === "string")) {
                            aLastValueElemKeyedValueStr = new String( aLastValueElemKeyedValue);
                        }
                        if( !( aLastValueElemKeyedValueStr === aLastKeyValue)) {
                            continue;
                        }
                        aLastMatchingParmValueElem = aLastValueElem;
                        break;
                    }
                
                    if( typeof aLastMatchingParmValueElem === "undefined") {
                        return null;
                    }
                
                    if( aLastMatchingParmValueElem == null) {
                        return null;
                    }
                
                    return { "value": aLastMatchingParmValueElem};
                }
            
            
            
            
                var aReplacedLastStepName = aLastStepName;
            
                if( aLastStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aLastStepNameWoPrefix = aLastStepName.slice( 1);
                
                    var aParmResolutionForLastStepWithParmPrefix = theMapForStepsWithParmPrefix[ aLastStepNameWoPrefix];
                    if( typeof aParmResolutionForLastStepWithParmPrefix === "undefined") {
                        return null;
                    }
                
                    aReplacedLastStepName = aParmResolutionForLastStepWithParmPrefix;
                }
            
            
                var aLastStepTestValue = aSubStepValue[ aReplacedLastStepName];
                if( typeof aLastStepTestValue === "undefined") {
                    return  null;
                }
            
                return { "value": aLastStepTestValue};
            };
            if( fgTraverseToFromValue){}/* CQT */
            aModule.fgTraverseToFromValue = fgTraverseToFromValue;
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValueReturnValueOrNull = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
            
                var aTraversalResult = fgTraverseToFromValue( theSourceSteps, theValue, theMapForStepsWithParmPrefix);
                if( !aTraversalResult) {
                    return null;
                }
            
                var aTraversalValue = aTraversalResult[ "value"];
                if( aTraversalValue){}/* CQT */
            
                return aTraversalValue;
            
            };
            if( fgTraverseToFromValueReturnValueOrNull){}/* CQT */
            aModule.fgTraverseToFromValueReturnValueOrNull = fgTraverseToFromValueReturnValueOrNull;
        
        
        
        
        
        
        
        
        
            var fgHasAnyStepsWithParmPrefix = function( theSourceSteps) {
            
                if( !theSourceSteps) {
                    return false;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return false;
                }
            
                if( theSourceSteps.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) < 0) {
                    return false;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return false;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return false;
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                            return true;
                        }
                    }
                }
            
                return false;
            };
            if( fgHasAnyStepsWithParmPrefix){}/* CQT */
            aModule.fgHasAnyStepsWithParmPrefix = fgHasAnyStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgStepsWithParmPrefix = function( theSourceSteps, theStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
                var someStepsWithParmPrefix = theStepsWithParmPrefix;
                if( ( someStepsWithParmPrefix == null) || !( typeof someStepsWithParmPrefix === "object") || !( typeof someStepsWithParmPrefix.length === "number")) {
                    someStepsWithParmPrefix = [ ];
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                        
                            var aStepForWithParmPrefixWoPrefix = aStepForWithParmPrefix.substring( 1);
                            if( aStepForWithParmPrefixWoPrefix) {
                                if( someStepsWithParmPrefix.indexOf( aStepForWithParmPrefixWoPrefix) < 0) {
                                    someStepsWithParmPrefix.push( aStepForWithParmPrefixWoPrefix);
                                }
                            }
                        }
                    }
                }
            
                var aNumStepsWithParmPrefix = someStepsWithParmPrefix.length;
                if( !aNumStepsWithParmPrefix) {
                    return null;
                }
            
            
                return someStepsWithParmPrefix;
            };
            if( fgStepsWithParmPrefix){}/* CQT */
            aModule.fgStepsWithParmPrefix = fgStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgFirstDiff = function( theActualValue, theCheckValue) {
            
                var aDiff = fgFirstDiff_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
    
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
                
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
                
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiff){}/* CQT */
            aModule.fgFirstDiff = fgFirstDiff;
    
    
    
    
            var fgFirstDiff_inner = function( theActualValue, theCheckValue) {
        
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
        
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
        
        
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                    Just remains to drill down into an object list elements or keyed properties
                     */
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
        
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
            
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
            
            
                    /* It is a list, theCheckValue is also a list*/
            
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
            
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
                
                        var aSubsListDiff = fgFirstDiff_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                    
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
    
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                    
                            aSubsListDiff.push( aSubIdx);
                    
                            return aSubsListDiff;
                        }
                    }
            
                    return null;
                }
        
        
        
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
                var someOneKeys   = Object.keys( theActualValue);
                var someOtherKeys = Object.keys( theCheckValue);
        
        
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
            
                    var aSubsDiff = fgFirstDiff_inner( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
                
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                
                        return aSubsDiff;
                    }
                }
        
        
                return null;
            };
            if( fgFirstDiff_inner){}/* CQT */
            aModule.fgFirstDiff_inner = fgFirstDiff_inner;
    
    
    
    
    
    
    
    
            var fgFirstDiffFromLeft = function( theActualValue, theCheckValue) {
        
                var aDiff = fgFirstDiffFromLeft_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
        
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
        
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiffFromLeft){}/* CQT */
            aModule.fgFirstDiffFromLeft = fgFirstDiffFromLeft;
    
    
    
    
    
            var fgFirstDiffFromLeft_inner = function( theActualValue, theCheckValue) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                       Just remains to drill down into an object list elements or keyed properties
                    */
                    return aModule.VALUEDIFFATTOP;
                }
    
    
    
    
    
    
    
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
    
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
        
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
        
        
                    /* It is a list, theCheckValue is also a list*/
        
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
        
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
            
                        var aSubsListDiff = fgFirstDiffFromLeft_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
                
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                
                            aSubsListDiff.push( aSubIdx);
                
                            return aSubsListDiff;
                        }
                    }
        
                    return null;
                }
    
    
    
    
    
    
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
    
                var someKeys   = Object.keys( theCheckValue);
            
                var aNumKeys = someKeys.length;
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someKeys[ aKeyIdx];
                
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                    if( !theCheckValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                
                    var aOneSub   = theActualValue[ aKey];
                    var aOtherSub = theCheckValue[ aKey];
                
                    var aSubsDiff = fgFirstDiffFromLeft( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                    
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
    
    
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                    
                        return aSubsDiff;
                    }
                }
            
                return null;
            };
            if( fgFirstDiffFromLeft_inner){}/* CQT */
            aModule.fgFirstDiffFromLeft_inner = fgFirstDiffFromLeft_inner;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgAllDiffs = function( theActualValue, theCheckValue, theIgnoreKeys, theIgnorePaths) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( typeof theActualValue === "undefined") {
                    return [ fNewVoidDiff( "undefined", "UNCHECKED", "undefined", "UNCHECKED")];
                }
            
                if( typeof theCheckValue === "undefined") {
                    return [ fNewVoidDiff( theActualValue, "undefined", "something", "undefined")];
                }
            
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( theActualValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "null", "something")];
                }
            
                if( theCheckValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "something", "null")];
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, typeof theActualValue, typeof theCheckValue)];
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                
                    if( !( typeof theCheckValue === "string")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a string")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                
                    if( !( typeof theCheckValue === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a number")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                
                    if( !( typeof theCheckValue === "boolean")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a boolean")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
    
    
                if( typeof theActualValue === "function" ) {
        
                    if( !( typeof theCheckValue === "function")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a function")];
                    }
        
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
                
    
                if( !( typeof theActualValue === "object" )) {
                    return [ fNewVoidDiff( "an object", "UNCHECKED")];
                }
            
            
                if( !( typeof theCheckValue === "object" )) {
                    return [ fNewVoidDiff( "an object'", "not an object")];
                }
            
            
            
            
            
            
                var allDiffs = [ ];
            
            
            
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
            
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number")) {
                
                    if( !( typeof aOneLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "not an array", "UNCHECKED")];
                    }
                
                    if( !( typeof aOtherLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "an array", "not an array")];
                    }
                
                    if( !( aOneLen === aOtherLen)) {
                        allDiffs.push( fNewVoidDiff( theActualValue, theCheckValue, "LEN=" + aOneLen, "LEN=" + aOtherLen));
                    }
                
                    var aMaxLen = Math.max( aOneLen, aOtherLen);
                
                    if( aMaxLen) {
                    
                        for( var aSubIdx=0; aSubIdx < aMaxLen; aSubIdx++) {
                        
                            var aOneListSub   = undefined;
                            var aOtherListSub = undefined;
                        
                            if( aSubIdx < aOneLen) {
                                aOneListSub   = theActualValue[ aSubIdx];
                            }
                        
                            if( aSubIdx < aOtherLen) {
                                aOtherListSub   = theCheckValue[ aSubIdx];
                            }
                        
                        
                            var someSubsListDiffs = fgAllDiffs( aOneListSub, aOtherListSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsListDiffs) {
                            
                                pUnshiftDiffsPath( someSubsListDiffs, aSubIdx);
                            
                                Array.prototype.push.apply( allDiffs, someSubsListDiffs);
                            }
                        }
                    }
                }
            
            
            
            
            
            
                var someOneKeysPossiblyWithNumbers   = Object.keys( theActualValue);
                var someOtherKeyPossiblyWithNumbers = Object.keys( theCheckValue);
            
                if( !( typeof someOneKeysPossiblyWithNumbers === "undefined") && !( typeof someOtherKeyPossiblyWithNumbers === "undefined")) {
                
                    var someOneKeys   = aModule.fgExcludeNumberStrings( someOneKeysPossiblyWithNumbers);
                    var someOtherKeys = aModule.fgExcludeNumberStrings( someOtherKeyPossiblyWithNumbers);
                
                
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
                        
                            if( theIgnoreKeys && ( theIgnoreKeys.indexOf( aKey) >=0)) {
                                continue;
                            }
                        
                            var aOneSub   = undefined;
                            var aOtherSub = undefined;
                        
                            if( theActualValue.hasOwnProperty( aKey)) {
                                aOneSub   = theActualValue[ aKey];
                            }
                        
                            if( theCheckValue.hasOwnProperty( aKey)) {
                                aOtherSub = theCheckValue[ aKey];
                            }
                        
                            var someSubsDiffs = fgAllDiffs( aOneSub, aOtherSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsDiffs) {
                            
                                pUnshiftDiffsPath( someSubsDiffs, aKey);
                            
                                Array.prototype.push.apply( allDiffs, someSubsDiffs);
                            }
                        }
                    }
                }
            
            
                var aNumAllDiffs = allDiffs.length;
                if( !aNumAllDiffs) {
                    return null;
                }
            
                return allDiffs;
            };
            if( fgAllDiffs){}/* CQT */
            aModule.fgAllDiffs = fgAllDiffs;
        
        
        
        
        
        
        
            var fNewVoidDiff = function( theOneValue, theOtherValue, theOneDisplay, theOtherDisplay) {
            
                var aDiff = {
                    "oneValue":     theOneValue,
                    "otherValue":   theOtherValue,
                    "oneDisplay":   theOneDisplay,
                    "otherDisplay": theOtherDisplay,
                    "path":         undefined,
                    "diffKind":     null
                };
                if( aDiff){}/* CQT */
            
                return aDiff;
            };
        
        
        
        
        
        
        
        
        
            var fgExcludeNumberStrings = function( theStrings) {
            
                if( !theStrings) {
                    return theStrings;
                }
            
                var aNumStrings   = theStrings.length;
                if( !aNumStrings) {
                    return theStrings;
                }
            
                var someNotNumberStrings = [ ];
            
                for( var aOneStringIdx=0; aOneStringIdx < aNumStrings; aOneStringIdx++) {
                
                    var aOneString = theStrings[ aOneStringIdx];
                    if( aOneString) {
                    
                        var aIsNumber = false;
                        try {
                            var aNumber = parseInt( aOneString);
                            aIsNumber = !isNaN( aNumber);
                        }
                        catch( anException) {}
                        if( !aIsNumber) {
                            someNotNumberStrings.push( aOneString);
                        }
                    }
                }
            
                return someNotNumberStrings;
            
            };
            if( fgExcludeNumberStrings){}/* CQT */
            aModule.fgExcludeNumberStrings = fgExcludeNumberStrings;
        
        
        
        
        
        
        
            var pUnshiftDiffsPath = function( theDiffs, theToUnshift) {
            
                if( !theDiffs) {
                    return;
                }
            
                var aNumDiffs = theDiffs.length;
                if( !aNumDiffs) {
                    return;
                }
            
                if( typeof theToUnshift === "undefined") {
                    return;
                }
            
                if( theToUnshift == null) {
                    return;
                }
            
            
                for( var aDiffIdx=0; aDiffIdx < aNumDiffs; aDiffIdx++) {
                    var aDiff = theDiffs[ aDiffIdx];
                    if( aDiff) {
                    
                        var aPath = aDiff[ "path"];
                        if( !( typeof aPath === "object")) {
                            aDiff[ "path"] = [ theToUnshift];
                        }
                        else {
                            aPath.unshift( theToUnshift);
                        
                        }
                    }
                }
            };
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPath = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                        aSubStepValue = aSubStepValue[ aSubStepName];
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPath){}/* CQT */
            aModule.fgSetValueAtPath = fgSetValueAtPath;
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPathSymbolic = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                    
                        aSubStepValue = aModule.fgSymbolicGet( aSubStepValue, aSubStepName);
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPathSymbolic){}/* CQT */
            aModule.fgSetValueAtPathSymbolic = fgSetValueAtPathSymbolic;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSymbolicGet = function( theTarget, theStep) {
            
                var aSymbolicStepMatch = aModule.SYMBOLICSTEPREGEXP.exec( theStep);
            
                if( !aSymbolicStepMatch) {
                
                    var aGetValue = theTarget[ theStep];
                    if( aGetValue){}/* CQT */
                    return aGetValue;
                }
            
            
                var aSymbolicKey   = aSymbolicStepMatch[ 1];
                var aSymbolicValue = aSymbolicStepMatch[ 2];
            
                if( !aSymbolicKey) {
                    return undefined;
                }
            
                if( typeof aSymbolicValue === "undefined") {
                    return undefined;
                }
            
            
                var aTargetLength = theTarget.length;
                if( !( typeof aTargetLength === "number")) {
                    return undefined;
                }
            
            
                for( var aTargetIdx=0; aTargetIdx < aTargetLength; aTargetIdx++) {
                
                    var aTarget = theTarget[ aTargetIdx];
                    if( aTarget && ( typeof aTarget === "object")) {
                    
                        var aTargetSearch = aTarget[ aSymbolicKey];
                        if( !( typeof aTargetSearch === "undefined")) {
                        
                            if( aTargetSearch === aSymbolicValue) {
                            
                                return aTarget;
                            }
                        }
                    }
                }
            
                return undefined;
            
            };
            if( fgSymbolicGet){}/* CQT */
            aModule.fgSymbolicGet = fgSymbolicGet;
        
        
        
        
        
        
        
        
            var fgDeepCopy = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
            
                if( typeof theSource.length === "number") {
                    return aModule.fgDeepCopy_List( theSource)
                }
            
            
                return aModule.fgDeepCopy_Object( theSource)
            
            };
            if( fgDeepCopy){}/* CQT */
            aModule.fgDeepCopy = fgDeepCopy;
        
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_List = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aNumElements = theSource.length;
            
                if( !( typeof aNumElements === "number")) {
                    return undefined;
                }
            
            
                var aDeepCopy = [ ];
            
                for( var anElementIdx=0; anElementIdx < aNumElements; anElementIdx++) {
                
                    var anElement = theSource[ anElementIdx];
                
                    if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                        aDeepCopy.push( anElement);
                        continue;
                    }
                
                    var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                    if( aDeepCopiedElement){}/* CQT */
                
                    aDeepCopy.push( aDeepCopiedElement);
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_List){}/* CQT */
            aModule.fgDeepCopy_List = fgDeepCopy_List;
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_Object = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aDeepCopy = { };
            
                var someKeys = Object.keys( theSource);
                if( !someKeys) {
                    return aDeepCopy;
                }
            
                var aNumKeys = someKeys.length;
                if( !aNumKeys) {
                    return theSource;
                }
            
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                
                    var aKey = someKeys[ aKeyIdx];
                
                    var aKeyInt = undefined;
                    try {
                        aKeyInt = parseInt( aKey);
                    }
                    catch( anException) {
                    }
                    if( ( typeof aKeyInt === "number") && !isNaN( aKeyInt)) {
                        continue;
                    }
                
                
                    if( theSource.hasOwnProperty( aKey)) {
                    
                        var anElement = theSource[ aKey];
                    
                        if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                            aDeepCopy[ aKey] = anElement;
                            continue;
                        }
                    
                        var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                        if( aDeepCopiedElement){}/* CQT */
                    
                        aDeepCopy[ aKey] = aDeepCopiedElement;
                    }
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_Object){}/* CQT */
            aModule.fgDeepCopy_Object = fgDeepCopy_Object;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey = function( theList, theKeyPropertyName) {
            
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
                    if( ( typeof anElem === "object") && !( anElem == null)) {
                    
                        var aKey = anElem[ theKeyPropertyName];
                        if( ( typeof aKey === "number") || ( typeof aKey === "string") || ( typeof aKey === "boolean")) {
                        
                            aDict[ aKey] = anElem;
                        }
                    }
                }
            
                return aDict;
            
            };
            if( fgDictFromListByKey){}/* CQT */
            aModule.fDictFromListByKey = fgDictFromListByKey;
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey_AsLists = function( theList, theKeyPptyName) {
            
                if( !theList) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                if( !theKeyPptyName) {
                    return {};
                }
            
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aKey = anElem[ theKeyPptyName];
                        if( !( typeof aKey === "undefined") && !( aKey == null)) {
                        
                        
                            var someForKey = aDict[ aKey];
                            if( !someForKey) {
                                someForKey = [ ];
                                aDict[ aKey] = someForKey;
                            }
                        
                            if( someForKey.indexOf( anElem) < 0) {
                                someForKey.push( anElem);
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKey_AsLists){}/* CQT */
            aModule.fgDictFromListByKey_AsLists = fgDictFromListByKey_AsLists;
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKeyPath = function( theList, theKeyPath) {
            
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
                    return fgDictFromListByKey_AsLists( theList, theKeyPath);
                }
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                    
                        var aTraversalResult = theSS_Te2estTraversals.fgTraverseToFromValue( theKeyPath, anElem);
                        if( aTraversalResult) {
                        
                            var aKey = aTraversalResult[ "value"];
                            if( !( typeof aKey === "undefined") && !( aKey == null)) {
                            
                                aDict[ aKey] = anElem;
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKeyPath){}/* CQT */
            aModule.fgDictFromListByKeyPath = fgDictFromListByKeyPath;
        
        
        
        
        
        
        
        
        
            var fgCollectProperty = function( theList, thePptyName) {
            
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
                        if( !( typeof aValue === "undefined") && !( aValue == null)) {
                        
                            if( aList.indexOf( aValue) < 0) {
                                aList.push( aValue);
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectProperty){}/* CQT */
            aModule.fgCollectProperty = fgCollectProperty;
        
        
        
        
        
        
        
        
            var pgPushIntoIfNotAlready = function( theTargetList, theSourceList) {
            
                if( !theTargetList) {
                    return;
                }
            
                if( !theSourceList) {
                    return;
                }
            
                var aNumElems = theSourceList.length;
                if( !aNumElems) {
                    return;
                }
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theSourceList[ anElemIdx];
                    if( !(typeof anElem === "undefined")) {
                    
                        if( theTargetList.indexOf( anElem) < 0) {
                            theTargetList.push( anElem);
                        }
                    }
                
                }
            };
            if( pgPushIntoIfNotAlready){}/* CQT */
            aModule.pgPushIntoIfNotAlready = pgPushIntoIfNotAlready;
        
        
        
        
        
        
        
        
        
        
            var fgCollectPath = function( theList, thePath) {
            
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
                        
                            if( !( typeof aValue === "undefined") && !( aValue == null)) {
                            
                                if( aList.indexOf( aValue) < 0) {
                                    aList.push( aValue);
                                }
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectPath){}/* CQT */
            aModule.fgCollectPath = fgCollectPath;
        
        
        
        
        
        
        
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
        
        angular.module("traversals",
            [
                'typesRegistry',
                'modbootTypes'
            ]).factory(
                "Traversals",
            [
                "TypesRegistrySvce",
                "OverriderSvce",
                aMod_definer
            ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_traversals", [
                "m_typesregistry_svce",
                "m_overrider_svce"
            ],
            aMod_definer
           );
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



;/*
 * index.js
 *
 * Created @author Antonio Carrasco Valero 201805140022
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
    var ModuleName     = "index";
    var ModulePackages = "";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function(  theSS_typesregistry_svce,
                                    theSS_overrider_type,
                                    theSS_overrider_svce,
                                    theSS_decoratesystemprototypes_svce,
                                    theSS_stacktrace,
                                    theSS_exceptiondetails_svce,
                                    theSS_console_svce,
                                    theSS_traversals,
                                    theSS_checks,
                                    theSS_identifier_type,
                                    theSS_identifier_svce,
                                    theSS_record_type,
                                    theSS_recordingpolicy_type,
                                    theSS_recordingpolicy_keepall_type,
                                    theSS_recordingpolicy_keepsome_type,
                                    theSS_recordingpolicy_keeprecent_type,
                                    theSS_dumpingpolicy_type,
                                    theSS_dumpingpolicy_filterkinds_type,
                                    theSS_dumpingpolicy_triggerkinds_type,
                                    theSS_recorder_type,
                                    theSS_recorder_svce,
                                    theSS_eventkinds_common,
                                    theSS_common_type){
        
        var aMod_builder = function( theS_typesregistry,
                                     theS_overrider_type,
                                     theS_overrider_svce,
                                     theS_decoratesystemprototypes_svce,
                                     theS_stacktrace,
                                     theS_exceptiondetails_svce,
                                     theS_console_svce,
                                     theS_traversals,
                                     theS_checks,
                                     theS_identifier_type,
                                     theS_identifier_svce,
                                     theS_record_type,
                                     theS_recordingpolicy_type,
                                     theS_recordingpolicy_keepall_type,
                                     theS_recordingpolicy_keepsome_type,
                                     theS_recordingpolicy_keeprecent_type,
                                     theS_dumpingpolicy_type,
                                     theS_dumpingpolicy_filterkinds_type,
                                     theS_dumpingpolicy_triggerkinds_type,
                                     theS_recorder_type,
                                     theS_recorder_svce,
                                     theS_eventkinds_common,
                                     theS_common_type) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
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
            theS_overrider_svce.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
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
            
            
            
        
            
            var aModule = {};
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
    
    
            aModule[ "modboot"] = {
                "m_typesregistry_svce":                     theS_typesregistry,
                "m_overrider_type":                    theS_overrider_type,
                "m_overrider_svce":                    theS_overrider_svce
            };
            
            aModule[ "decoratesystemprototypes_svce"] =     theS_decoratesystemprototypes_svce;
            aModule[ "stacktrace"] =                        theS_stacktrace;
            aModule[ "exceptiondetails_svce"] =             theS_exceptiondetails_svce;
            aModule[ "console_svce"] =                      theS_console_svce;
            aModule[ "traversals"] =                        theS_traversals;
            aModule[ "checks"] =                            theS_checks;
            
            aModule[ "identifying"] = {
                "m_identifier_type":                   theS_identifier_type,
                "m_identifier_svce":                   theS_identifier_svce,
                "m_record_type":                       theS_record_type,
                "m_recordingpolicy_type":              theS_recordingpolicy_type,
                "m_recordingpolicy_keepall_type":      theS_recordingpolicy_keepall_type,
                "m_recordingpolicy_keepsome_type":     theS_recordingpolicy_keepsome_type,
                "m_recordingpolicy_keeprecent_type":   theS_recordingpolicy_keeprecent_type,
                "m_dumpingpolicy_type":                theS_dumpingpolicy_type,
                "m_dumpingpolicy_filterkinds_type":    theS_dumpingpolicy_filterkinds_type,
                "m_dumpingpolicy_triggerkinds_type":   theS_dumpingpolicy_triggerkinds_type,
                "m_recorder_type":                     theS_recorder_type,
                "m_recorder_svce":                     theS_recorder_svce
            };
    
            aModule[ "eventkinds"] = {
                "eventkinds_common": theS_eventkinds_common
            };
    
            aModule[ "common"] = {
                "common_type": theS_common_type
            };
    
            
    
            aModule[ "m_typesregistry_svce"] =                     theS_typesregistry;
            aModule[ "m_overrider_type"] =                    theS_overrider_type;
            aModule[ "m_overrider_svce"] =                    theS_overrider_svce;
            aModule[ "m_decoratesystemprototypes_svce"] =     theS_decoratesystemprototypes_svce;
            aModule[ "m_stacktrace"] =                        theS_stacktrace;
            aModule[ "m_exceptiondetails_svce"] =             theS_exceptiondetails_svce;
            aModule[ "m_console_svce"] =                      theS_console_svce;
            aModule[ "m_traversals"] =                        theS_traversals;
            aModule[ "m_checks"] =                            theS_checks;
            aModule[ "m_identifier_type"] =                   theS_identifier_type;
            aModule[ "m_identifier_svce"] =                   theS_identifier_svce;
            aModule[ "m_record_type"] =                       theS_record_type;
            aModule[ "m_recordingpolicy_type"] =              theS_recordingpolicy_type;
            aModule[ "m_recordingpolicy_keepall_type"] =      theS_recordingpolicy_keepall_type;
            aModule[ "m_recordingpolicy_keepsome_type"] =     theS_recordingpolicy_keepsome_type;
            aModule[ "m_recordingpolicy_keeprecent_type"] =   theS_recordingpolicy_keeprecent_type;
            aModule[ "m_dumpingpolicy_type"] =                theS_dumpingpolicy_type;
            aModule[ "m_dumpingpolicy_filterkinds_type"] =    theS_dumpingpolicy_filterkinds_type;
            aModule[ "m_dumpingpolicy_triggerkinds_type"] =   theS_dumpingpolicy_triggerkinds_type;
            aModule[ "m_recorder_type"] =                     theS_recorder_type;
            aModule[ "m_recorder_svce"] =                     theS_recorder_svce;
            aModule[ "m_eventkinds_common"] =                 theS_eventkinds_common;
            aModule[ "m_common_type"] =                       theS_common_type;
    
    
            aModule[ "TypesRegistrySvce"] =                theS_typesregistry;
            aModule[ "OverriderType"] =                    theS_overrider_type;
            aModule[ "OverriderSvce"] =                    theS_overrider_svce;
            aModule[ "DecorateSystemPrototypesSvce"] =     theS_decoratesystemprototypes_svce;
            aModule[ "StacktraceSvce"] =                   theS_stacktrace;
            aModule[ "ExceptionDetailsSvce"] =             theS_exceptiondetails_svce;
            aModule[ "ConsoleSvce"] =                      theS_console_svce;
            aModule[ "Traversals"] =                       theS_traversals;
            aModule[ "Checks"] =                           theS_checks;
            aModule[ "IdentifierType"] =                   theS_identifier_type;
            aModule[ "IdentifierSvce"] =                   theS_identifier_svce;
            aModule[ "RecordType"] =                       theS_record_type;
            aModule[ "RecordingPolicyType"] =              theS_recordingpolicy_type;
            aModule[ "RecordingPolicyKeepAllType"] =       theS_recordingpolicy_keepall_type;
            aModule[ "RecordingPolicyKeepSomeType"] =      theS_recordingpolicy_keepsome_type;
            aModule[ "RecordingPolicyKeepRecentType"] =    theS_recordingpolicy_keeprecent_type;
            aModule[ "DumpingPolicyType"] =                theS_dumpingpolicy_type;
            aModule[ "DumpingPolicyFilterKindsType"] =     theS_dumpingpolicy_filterkinds_type;
            aModule[ "DumpingPolicyTriggerKindsType"] =    theS_dumpingpolicy_triggerkinds_type;
            aModule[ "RecorderType"] =                     theS_recorder_type;
            aModule[ "RecorderSvce"] =                     theS_recorder_svce;
            aModule[ "EventKinds_Common"] =                theS_eventkinds_common;
            aModule[ "CommonType"] =                       theS_common_type;
    
            aModule[ "Modules"] = { };
            aModule[ "Modules"][ "TypesRegistrySvce"] =                theS_typesregistry;
            aModule[ "Modules"][ "OverriderType"] =                    theS_overrider_type;
            aModule[ "Modules"][ "OverriderSvce"] =                    theS_overrider_svce;
            aModule[ "Modules"][ "DecorateSystemPrototypesSvce"] =     theS_decoratesystemprototypes_svce;
            aModule[ "Modules"][ "StacktraceSvce"] =                   theS_stacktrace;
            aModule[ "Modules"][ "ExceptionDetailsSvce"] =             theS_exceptiondetails_svce;
            aModule[ "Modules"][ "ConsoleSvce"] =                      theS_console_svce;
            aModule[ "Modules"][ "Traversals"] =                       theS_traversals;
            aModule[ "Modules"][ "Checks"] =                           theS_checks;
            aModule[ "Modules"][ "IdentifierType"] =                   theS_identifier_type;
            aModule[ "Modules"][ "IdentifierSvce"] =                   theS_identifier_svce;
            aModule[ "Modules"][ "RecordType"] =                       theS_record_type;
            aModule[ "Modules"][ "RecordingPolicyType"] =              theS_recordingpolicy_type;
            aModule[ "Modules"][ "RecordingPolicyKeepAllType"] =       theS_recordingpolicy_keepall_type;
            aModule[ "Modules"][ "RecordingPolicyKeepSomeType"] =      theS_recordingpolicy_keepsome_type;
            aModule[ "Modules"][ "RecordingPolicyKeepRecentType"] =    theS_recordingpolicy_keeprecent_type;
            aModule[ "Modules"][ "DumpingPolicyType"] =                theS_dumpingpolicy_type;
            aModule[ "Modules"][ "DumpingPolicyFilterKindsType"] =     theS_dumpingpolicy_filterkinds_type;
            aModule[ "Modules"][ "DumpingPolicyTriggerKindsType"] =    theS_dumpingpolicy_triggerkinds_type;
            aModule[ "Modules"][ "RecorderType"] =                     theS_recorder_type;
            aModule[ "Modules"][ "RecorderSvce"] =                     theS_recorder_svce;
            aModule[ "Modules"][ "EventKinds_Common"] =                theS_eventkinds_common;
            aModule[ "Modules"][ "CommonType"] =                       theS_common_type;
    
    
            theS_typesregistry.ModuleIndex = aModule;
            theS_overrider_type.ModuleIndex = aModule;
            theS_overrider_svce.ModuleIndex = aModule;
            theS_decoratesystemprototypes_svce.ModuleIndex = aModule;
            theS_exceptiondetails_svce.ModuleIndex = aModule;
            theS_console_svce.ModuleIndex = aModule;
            theS_traversals.ModuleIndex = aModule;
            theS_checks.ModuleIndex = aModule;
            theS_identifier_type.ModuleIndex = aModule;
            theS_identifier_svce.ModuleIndex = aModule;
            theS_record_type.ModuleIndex = aModule;
            theS_recordingpolicy_type.ModuleIndex = aModule;
            theS_recordingpolicy_keepall_type.ModuleIndex = aModule;
            theS_recordingpolicy_keepsome_type.ModuleIndex = aModule;
            theS_recordingpolicy_keeprecent_type.ModuleIndex = aModule;
            theS_dumpingpolicy_type.ModuleIndex = aModule;
            theS_dumpingpolicy_filterkinds_type.ModuleIndex = aModule;
            theS_dumpingpolicy_triggerkinds_type.ModuleIndex = aModule;
            theS_recorder_type.ModuleIndex = aModule;
            theS_recorder_svce.ModuleIndex = aModule;
            theS_eventkinds_common.ModuleIndex = aModule;
            theS_common_type.ModuleIndex = aModule;
            
    
            return aModule;
        };
        
        
        
        
        
        
        
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
            
            var aModule = aMod_builder(
                theSS_typesregistry_svce,
                theSS_overrider_type,
                theSS_overrider_svce,
                theSS_decoratesystemprototypes_svce,
                theSS_stacktrace,
                theSS_exceptiondetails_svce,
                theSS_console_svce,
                theSS_traversals,
                theSS_checks,
                theSS_identifier_type,
                theSS_identifier_svce,
                theSS_record_type,
                theSS_recordingpolicy_type,
                theSS_recordingpolicy_keepall_type,
                theSS_recordingpolicy_keepsome_type,
                theSS_recordingpolicy_keeprecent_type,
                theSS_dumpingpolicy_type,
                theSS_dumpingpolicy_filterkinds_type,
                theSS_dumpingpolicy_triggerkinds_type,
                theSS_recorder_type,
                theSS_recorder_svce,
                theSS_eventkinds_common,
                theSS_common_type
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
        
        angular.module("index",
            [
                "typesRegistry",
                "modbootTypes",
                "decoratesystemprototypes",
                "stacktrace",
                "exceptiondetails",
                "consoleSvce",
                "traversals",
                "checks",
                "identifyingTypes",
                "eventKinds_Common",
                "commonTypes"
            ]).factory(
                "Index",
            [
                "TypesRegistrySvce",
                "OverriderType",
                "OverriderSvce",
                "DecorateSystemPrototypesSvce",
                "StacktraceSvce",
                "ExceptionDetailsSvce",
                "ConsoleSvce",
                "Traversals",
                "Checks",
                "IdentifierType",
                "IdentifierSvce",
                "RecordType",
                "RecordingPolicyType",
                "RecordingPolicyKeepAllType",
                "RecordingPolicyKeepSomeType",
                "RecordingPolicyKeepRecentType",
                "DumpingPolicyType",
                "DumpingPolicyFilterKindsType",
                "DumpingPolicyTriggerKindsType",
                "RecorderType",
                "RecorderSvce",
                "EventKinds_Common",
                "CommonType",
                aMod_definer
            ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
    
            var aM_typesregistry_svce                    = require( './modboot/typesregistry.js');
            var aM_overrider_type                   = require( './modboot/overrider_type.js');
            var aM_overrider_svce                   = require( './modboot/overrider_svce.js');
            var aM_decoratesystemprototypes_svce    = require( './utils/decoratesystemprototypes_svce.js');
            var aM_stacktrace                       = require( './utils/stacktrace_svce.js');
            var aM_exceptiondetails_svce            = require( './utils/exceptiondetails_svce.js');
            var aM_console_svce                     = require( './utils/console_svce.js');
            var aM_traversals                       = require( './utils/traversals.js');
            var aM_checks                           = require( './utils/checks.js');
            var aM_identifier_type                  = require( './identifying/identifier_type.js');
            var aM_identifier_svce                  = require( './identifying/identifier_svce.js');
            var aM_record_type                      = require( './identifying/record_type.js');
            var aM_recordingpolicy_type             = require( './identifying/recordingpolicy_type.js');
            var aM_recordingpolicy_keepall_type     = require( './identifying/recordingpolicy_keepall_type.js');
            var aM_recordingpolicy_keepsome_type    = require( './identifying/recordingpolicy_keepsome_type.js');
            var aM_recordingpolicy_keeprecent_type  = require( './identifying/recordingpolicy_keeprecent_type.js');
            var aM_dumpingpolicy_type               = require( './identifying/dumpingpolicy_type.js');
            var aM_dumpingpolicy_filterkinds_type   = require( './identifying/dumpingpolicy_filterkinds_type.js');
            var aM_dumpingpolicy_triggerkinds_type  = require( './identifying/dumpingpolicy_triggerkinds_type.js');
            var aM_recorder_type                    = require( './identifying/recorder_type.js');
            var aM_recorder_svce                    = require( './identifying/recorder_svce.js');
            var aM_eventkinds_common                = require( './eventkinds/eventkinds_common.js');
            var aM_common_type                      = require( './common/common_type.js');
    
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_type,
                aM_overrider_svce,
                aM_decoratesystemprototypes_svce,
                aM_stacktrace,
                aM_exceptiondetails_svce,
                aM_console_svce,
                aM_traversals,
                aM_checks,
                aM_identifier_type,
                aM_identifier_svce,
                aM_record_type,
                aM_recordingpolicy_type,
                aM_recordingpolicy_keepall_type,
                aM_recordingpolicy_keepsome_type,
                aM_recordingpolicy_keeprecent_type,
                aM_dumpingpolicy_type,
                aM_dumpingpolicy_filterkinds_type,
                aM_dumpingpolicy_triggerkinds_type,
                aM_recorder_type,
                aM_recorder_svce,
                aM_eventkinds_common,
                aM_common_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_index",
            [
                "m_typesregistry_svce",
                "m_overrider_type",
                "m_overrider_svce",
                "m_decoratesystemprototypes_svce",
                "m_stacktrace_svce",
                "m_exceptiondetails_svce",
                "m_console_svce",
                "m_traversals",
                "m_checks",
                "m_identifier_type",
                "m_identifier_svce",
                "m_record_type",
                "m_recordingpolicy_type",
                "m_recordingpolicy_keepall_type",
                "m_recordingpolicy_keepsome_type",
                "m_recordingpolicy_keeprecent_type",
                "m_dumpingpolicy_type",
                "m_dumpingpolicy_filterkinds_type",
                "m_dumpingpolicy_triggerkinds_type",
                "m_recorder_type",
                "m_recorder_svce",
                "m_eventkinds_common",
                "m_common_type"
            ],
            aMod_definer
        );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "modboot",     "typesregistry"),
                nomod.fComputeFullName( "prettytype", "modboot",     "overrider_type"),
                nomod.fComputeFullName( "prettytype", "modboot", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "utils", "decoratesystemprototypes_svce"),
                nomod.fComputeFullName( "prettytype", "utils", "stacktrace_svce"),
                nomod.fComputeFullName( "prettytype", "utils", "exceptiondetails_svce"),
                nomod.fComputeFullName( "prettytype", "utils", "console_svce"),
                nomod.fComputeFullName( "prettytype", "utils",     "traversals"),
                nomod.fComputeFullName( "prettytype", "utils",     "checks"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "record_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "recordingpolicy_keepall_type"),
                nomod.fComputeFullName( "prettytype", "identifying",     "recordingpolicy_keepsome_type"),
                nomod.fComputeFullName( "prettytype", "identifying",     "recordingpolicy_keeprecent_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_filterkinds_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "dumpingpolicy_triggerkinds_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "recorder_type"),
                nomod.fComputeFullName( "prettytype", "identifying", "recorder_svce"),
                nomod.fComputeFullName( "prettytype", "eventkinds",     "eventkinds_common"),
                nomod.fComputeFullName( "prettytype", "common",     "common_type")
            ],
            aMod_definer
        );
        
    }
    
    
})();






//# sourceMappingURL=prettytype.js.map