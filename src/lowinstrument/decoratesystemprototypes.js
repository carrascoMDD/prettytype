/*
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
    var ModuleName     = "decoratesystemprototypes";
    var ModulePackages = "lowinstrument";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = function(theSS_typesregistry_svce,
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
            var aM_overrider_svce     = require('../overrider/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce
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



